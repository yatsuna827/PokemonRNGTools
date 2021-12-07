declare module '*/bdsp_tower_trainers_single*' {
  type SoloTrainer = {
    trainer: string
    teams: number[][]
  }

  const value: SoloTrainer
  export = value
}

declare module '*/bdsp_tower_trainers_double_normal*' {
  type SoloTrainer = {
    trainer: string
    teams: number[][]
  }

  const value: SoloTrainer
  export = value
}
