// imulが定義されていない場合は作っちゃう。
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
if (!Math.imul) {
  Math.imul = function (opA, opB) {
    opB |= 0
    let result = (opA & 0x003fffff) * opB
    if (opA & 0xffc00000) result += ((opA & 0xffc00000) * opB) | 0
    return result | 0
  }
}

// @package
export const lcg_next: (seed: number, a: number, b: number) => number = (seed, a, b) =>
  (Math.imul(seed, a) + b) & 0xffffffff

type LCGConstantCache = {
  mulCache: number[][]
  addCache: number[][]
}

export const advanceLcg = (seed: number): number => lcg_next(seed, 0x41c64e6d, 0x6073)
export const backLcg = (seed: number): number => lcg_next(seed, 0xeeb9eb65, 0xa3561a1)
export class LCG {
  constructor(private seed: number) {
    this.count = 0
  }

  private count: number
  public getCount = () => this.count >>> 0
  public getSeed = () => this.seed >>> 0
  public getRand = (m?: number) => (m ? (this.advance() >>> 16) % m : this.advance() >>> 16)
  public advance = () => {
    this.count++
    return (this.seed = advanceLcg(this.seed)) >>> 0
  }
  public back = () => {
    this.count--
    return (this.seed = backLcg(this.seed)) >>> 0
  }

  private static conCache: LCGConstantCache | undefined
  public static createCache = () => {
    if (!LCG.conCache) return

    const a: number[] = Array(32)
    const b: number[] = Array(32)
    a[0] = 0x41c64e6d
    b[0] = 0x6073

    for (let i = 0; i < 32; i++) {
      a[i] = Math.imul(a[i - 1], a[i - 1])
      b[i] = Math.imul(b[i - 1], a[i - 1] + 1)
    }

    const mulCache: number[][] = [Array(256), Array(256), Array(256), Array(256)]
    const addCache: number[][] = [Array(256), Array(256), Array(256), Array(256)]

    for (let i = 0; i < 4; i++) {
      const t = i << 3

      mulCache[i][0] = 1
      addCache[i][0] = 0
      mulCache[i][1] = a[t]
      addCache[i][1] = b[t]
      for (let k = 2; k < 256; k++) {
        mulCache[i][k] = Math.imul(mulCache[i][k - 1], a[t])
        addCache[i][k] = (Math.imul(addCache[i][k - 1], a[t]) + b[t]) & 0xffffffff
      }
    }

    LCG.conCache = {
      mulCache,
      addCache,
    }
  }
}

export const advanceDaily = (seed: number): number => lcg_next(seed, 0x6c078965, 0x1)
export const backDaily = (seed: number): number => lcg_next(seed, 0x9638806d, 0x69c77f93)
export class DailyLCG {
  constructor(private seed: number) {
    this.count = 0
  }

  private count: number
  public getCount = () => this.count >>> 0
  public getSeed = () => this.seed >>> 0
  public advance = () => {
    this.count++
    return (this.seed = advanceDaily(this.seed)) >>> 0
  }
  public back = () => {
    this.count--
    return (this.seed = backDaily(this.seed)) >>> 0
  }
}
