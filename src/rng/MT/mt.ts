// mt.js 0.2.4 (2005-12-23)

const N = 624
const M = 397
const MATRIX_A = 0x9908b0df
const UPPER_MASK = 0x80000000
const LOWER_MASK = 0x7fffffff

export class MT {
  constructor(seed: number) {
    this.stateVector = Array(N)
    this.stateVector[0] = seed
    for (let i = 1; i < N; i++)
      this.stateVector[i] =
        (Math.imul(0x6c078965, this.stateVector[i - 1] ^ (this.stateVector[i - 1] >>> 30)) + i) & 0xffffffff

    this.randIndex = N
  }

  private stateVector: number[]
  private randIndex: number

  private update = () => {
    for (let k = 0; k < N - M; k++) {
      const temp = (this.stateVector[k] & UPPER_MASK) | (this.stateVector[k + 1] & LOWER_MASK)
      this.stateVector[k] = this.stateVector[k + M] ^ (temp >>> 1)
      if ((temp & 1) === 1) this.stateVector[k] ^= MATRIX_A
    }
    for (let k = N - M; k < N - 1; k++) {
      const temp = (this.stateVector[k] & UPPER_MASK) | (this.stateVector[k + 1] & LOWER_MASK)
      this.stateVector[k] = this.stateVector[k + (M - N)] ^ (temp >>> 1)
      if ((temp & 1) == 1) this.stateVector[k] ^= MATRIX_A
    }
    {
      const temp = (this.stateVector[N - 1] & UPPER_MASK) | (this.stateVector[0] & LOWER_MASK)
      this.stateVector[N - 1] = this.stateVector[M - 1] ^ (temp >>> 1)
      if ((temp & 1) == 1) this.stateVector[N - 1] ^= MATRIX_A
    }
    this.randIndex = 0
  }

  private temper = (x: number) => {
    x ^= x >>> 11
    x ^= (x << 7) & 0x9d2c5680
    x ^= (x << 15) & 0xefc60000
    x ^= x >>> 18
    return x
  }

  public getRand = () => {
    if (this.randIndex >= N) this.update()

    return this.temper(this.stateVector[this.randIndex++])
  }
}
