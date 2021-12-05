declare module '*/bdsp_tower_trainers_double_master*' {
  type PairTrainers = {
    class1: string
    name1: string
    class2: string
    name2: string
    teams: number[][]
  }

  const value: PairTrainers
  export = value
}
