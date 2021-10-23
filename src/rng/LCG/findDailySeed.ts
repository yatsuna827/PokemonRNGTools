import { lcg_next } from './lcg'

const g_inv = (x: number) => lcg_next(x, 0xeeb9eb65, 0xfc77a683)
const h = (x: number) => lcg_next(x, 0x6c078965, 0xca55f729)

export const findDailySeed = (lottery1: number, lottery2: number): number[] => {
  const result = [] as number[]
  for (let lower = 0; lower < 0x10000; lower++) {
    const val = h((lottery1 << 16) | lower) >>> 16

    if (val === lottery2) result.push(g_inv((lottery1 << 16) | lower))
  }
  return result
}
