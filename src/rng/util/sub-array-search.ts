import { LCGCache } from '../LCG/lcg-cache'

export class SubArrayCache {
  private currentStep: number
  private headCandidates: number[]
  private cache: LCGCache

  constructor(inisialSeed: number, randSelector: (rand: number) => number, min: number, max: number) {
    this.currentStep = 0
    this.headCandidates = [...Array(max + 1)].map((_, i) => i).slice(min)
    this.cache = new LCGCache(inisialSeed, randSelector, max - min + 1)
  }

  public AddInput = (input: number) => {
    this.headCandidates = this.headCandidates.filter((i) => this.cache.getRand(i + this.currentStep) === input)
    this.currentStep++

    return this.headCandidates
  }
}
