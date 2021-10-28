import { InitialSeedFactors } from './define'
import { getPrevClock } from '../InnerClock/innerClock'

type DetectDateTimeArgs = {
  seed: number
  blank: number
  second: number
  extendsFrame?: boolean
}
export const detectDateTime: (args: DetectDateTimeArgs) => InitialSeedFactors = ({
  seed,
  blank,
  second,
  extendsFrame = false,
}) => {
  let h8 = seed >>> 24
  let u24 = seed & 0xffffff

  let hour = u24 > 0x170000 ? 23 : u24 >> 16
  u24 -= hour << 16
  let frame = blank + u24
  if (frame < 0x10000 && extendsFrame) {
    // 時から借りてこれるときは借りてくる.
    if (hour != 0) {
      hour--
      frame += 0x10000
    }
    // 借りてこれないときはもっと上から借りてくる.
    else {
      if (h8 == 0) h8 = 0xff
      else h8--
      frame += 0x1000000
    }
  }

  const d_sec = Math.floor(frame / 59.8261)

  const year = frame - Math.floor((d_sec * 598261 + 9999) / 10000)
  frame -= year

  h8 = (h8 - ((second + d_sec) % 60)) & 0xff

  // h8 == 0のときだけ例外処理.
  const month = h8 == 0 ? 12 : h8 < 10 ? 1 : 10
  const date = h8 == 0 ? 21 : Math.floor(h8 / month)

  const minute = h8 == 0 ? 4 : h8 - month * date

  const start = getPrevClock({ year, month, date, hour, minute, second: (second + d_sec) % 60 }, frame)

  return { innerClock: start, waitFrames: frame, blankFrames: blank }
}
