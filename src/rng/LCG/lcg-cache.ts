import { LCG } from './lcg'

export class LCGCache {
  private tail: number
  private lcg: LCG
  private seedCache: number[]
  private randCache: number[]

  constructor(initialSeed: number, private selectRand: (rand: number) => number, initialCacheLength: number = 128) {
    this.randCache = []
    this.seedCache = []
    this.lcg = new LCG(initialSeed)
    this.tail = 0

    this.fillCache(initialCacheLength)
  }

  private fillCache(index: number) {
    while (this.tail <= index) {
      this.seedCache.push(this.lcg.getSeed())
      this.randCache.push(this.selectRand(this.lcg.getRand()))
      this.tail++
    }
  }

  public getSeed(index: number) {
    this.fillCache(index)

    return this.seedCache[index]
  }

  public getRand(index: number) {
    this.fillCache(index)

    return this.randCache[index]
  }
}
