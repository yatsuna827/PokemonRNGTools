import type { InnerClock } from './define'

const SEC_PER_DAY = 86400
const DAYS_PER_LOOP = 36525

const daysOfMonth: readonly number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const totalDays: readonly number[] = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]

const getDays = ({ year, month, date }: Pick<InnerClock, 'year' | 'month' | 'date'>) => {
  const y = month < 3 ? year - 1 : year
  const m = month < 3 ? month + 12 : month

  const dy = y * 365 + ((y + 4) >>> 2)
  const dm = (m * 979 - 1033) >>> 5

  return dy + dm + date - 1
}

const days2Date = (days: number): Pick<InnerClock, 'year' | 'month' | 'date'> => {
  days %= DAYS_PER_LOOP

  // 2000年が閏年なので、1997年起算にして閏年を必ず4年目になるようにずらす.
  // 1095 = 365*3
  days += 1095

  // 4年をひと塊と見なす.
  const y4 = Math.floor(days / 1461)
  days -= y4 * 1461

  // 4年未満の日数を変換していく.
  // ぴったり1460日だと閏年の影響があってめんどくさいので例外処理.
  if (days == 1460) return { year: y4 * 4, month: 12, date: 31 }

  // y = 0~3
  const y = Math.floor(days / 365)
  const year = y + y4 * 4 - 3 // 加算した3年分を引く.
  days -= y * 365

  // 閏年の2/29. めんどくさいので例外処理.
  if (y == 3 && days == 59) return { year, month: 2, date: 29 }

  // 1月
  if (days < 31) return { year, month: 1, date: days + 1 }

  // 2月
  if (days < 59) return { year, month: 2, date: days - 30 }
  else {
    if (y == 3) days--

    const m_temp = Math.floor(days / 31) // だいたい何月か目星をつける.
    const d_temp = days - totalDays[m_temp] // m_temp月の何日か
    const month = m_temp + 1
    const day = d_temp + 1

    // ひと月多く見積もってしまっていた.
    if (d_temp < 1) return { year, month: month - 1, date: day + totalDays[m_temp - 1] }

    // ひと月少なく見積もってしまっていた.
    if (d_temp >= daysOfMonth[m_temp]) return { year, month: month + 1, date: day - daysOfMonth[m_temp] }

    return { year, month, date: day }
  }
}

export const getPrevClock = ({ second, minute, hour, ...date }: InnerClock, frames: number): InnerClock => {
  let backSec = Math.floor((frames * 10000) / 598261)
  if (frames != Math.floor((backSec * 598261 + 9999) / 10000)) backSec++ // ぴったりじゃなかったら秒の境界を超える.

  let backDays = Math.floor(backSec / SEC_PER_DAY)
  backSec -= backDays * SEC_PER_DAY

  // 現在時刻を秒に直す.
  let sec = second + minute * 60 + hour * 3600 - backSec

  // 日付を跨いだ
  if (sec < 0) {
    backDays++
    sec += SEC_PER_DAY
  }

  let min = Math.floor(sec / 60)
  sec -= min * 60
  const ho = Math.floor(min / 60)
  min -= ho * 60

  let days = getDays(date) - backDays
  if (days < 0) days += DAYS_PER_LOOP

  return { ...days2Date(days), hour: ho, minute: min, second: sec }
}
export const getNextClock = ({ second, minute, hour, ...date }: InnerClock, frames: number): InnerClock => {
  let advSec = Math.floor((frames * 10000) / 598261)
  if (frames != Math.floor((advSec * 598261 + 9999) / 10000)) advSec++ // ぴったりじゃなかったら秒の境界を超える.

  let advDays = Math.floor(advSec / SEC_PER_DAY)
  advSec -= advDays * SEC_PER_DAY

  // 現在時刻を秒に直す.
  let sec = second + minute * 60 + hour * 3600 - advSec

  // 日付を跨いだ
  if (sec >= SEC_PER_DAY) {
    advDays++
    sec -= SEC_PER_DAY
  }

  let min = Math.floor(sec / 60)
  sec -= min * 60
  const ho = Math.floor(min / 60)
  min -= ho * 60

  let days = getDays(date) + advDays
  if (days >= DAYS_PER_LOOP) days -= DAYS_PER_LOOP

  return { ...days2Date(days), hour: ho, minute: min, second: sec }
}
