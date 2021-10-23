import { lcg_next } from '../../LCG/lcg'

export const generateLotteryNumber = (seed: number): number => lcg_next(seed >>> 0, 0x41c64e6d, 0x3039) >>> 16
