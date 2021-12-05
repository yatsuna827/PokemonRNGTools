declare module '*/bdsp_rower_pokemons.json' {
  type BattleTowerPokemon = {
    pokemon: string
    nature: string
    item: string
    moves: [string, string, string, string]
    ability: string
    stats: [number, number, number, number, number, number]
    pp: 0 | 1 | 2 | 3
  }

  const value: BattleTowerPokemon
  export = value
}
