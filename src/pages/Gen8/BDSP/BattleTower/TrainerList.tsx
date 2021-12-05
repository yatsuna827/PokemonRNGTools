import React from 'react'

import database from '@src/data/bdsp_tower_trainers_double_master.json'
import pokemons from '@src/data/bdsp_tower_pokemon.json'
import { Select } from '@chakra-ui/select'
import { Box, Flex } from '@chakra-ui/react'

type PairTeam = {
  first: string
  second: string
  teams: number[][]
}

const data = database.map(({ class1, name1, class2, name2, ...mist }) => ({
  first: `${class1}の${name1}`,
  second: `${class2}の${name2}`,
  ...mist,
}))

const firstTrainerNames = Array.from(new Set(data.map((t) => t.first)))

const TrainerView: React.FC<{
  trainer: string
  team: number[]
}> = ({ trainer, team }) => {
  const poke1 = pokemons[team[0]]
  const poke2 = pokemons[team[1]]

  return (
    <Box marginBottom="10px">
      <Box fontSize="20px">{trainer}</Box>

      <Flex marginLeft="20px" gridGap="10px">
        <Box w="50px">1匹目</Box>
        <Box>
          {poke1.pokemon}({poke1.ability})@{poke1.item}
        </Box>
        <Box>{poke1.stats.join('-')}</Box>
      </Flex>
      <Box marginLeft="80px">{poke1.moves.join(' / ')}</Box>

      <Flex marginLeft="20px" gridGap="10px">
        <Box w="50px">2匹目</Box>
        <Box>
          {poke2.pokemon}({poke2.ability})@{poke2.item}
        </Box>
        <Box>{poke2.stats.join('-')}</Box>
      </Flex>
      <Box marginLeft="80px">{poke2.moves.join(' / ')}</Box>
    </Box>
  )
}

export const TrainerList: React.FC = () => {
  const [firstTrainer, setFirst] = React.useState<string>(firstTrainerNames[1])
  const [secondData, setSecondData] = React.useState<PairTeam[]>(data.filter(({ first }) => first === firstTrainer))
  const [secondTrainer, setSecond] = React.useState<string>(secondData[0].second)

  const handleSetFirst = React.useCallback((e: { target: { value: string } }) => {
    const nextFirst = e.target.value
    setFirst(nextFirst)

    const nextSecondData = data.filter(({ first }) => first === nextFirst)
    setSecondData(nextSecondData)
    setSecond(nextSecondData[0].second)
  }, [])

  const selectedTrainer = React.useMemo(() => {
    return secondData.find(({ second }) => second === secondTrainer)
  }, [secondData, secondTrainer])

  return (
    <>
      <Box fontSize="30px" marginBottom="20px">
        ダブルマスター
      </Box>
      <Flex alignItems="center" gridGap="10px">
        <Box>1人目</Box>
        <Select w="400px" value={firstTrainer} onChange={handleSetFirst}>
          {firstTrainerNames.map((n) => (
            <option key={n}>{n}</option>
          ))}
        </Select>
      </Flex>

      <Flex alignItems="center" gridGap="10px">
        <Box>2人目</Box>
        <Select w="400px" value={secondTrainer} onChange={(e) => setSecond(e.target.value)}>
          {secondData.map((t, i) => (
            <option key={i}>{t.second}</option>
          ))}
        </Select>
      </Flex>

      {selectedTrainer &&
        selectedTrainer.teams.map((v, i) => (
          <Box key={i} marginTop="20px">
            <Box fontSize="24px" fontWeight="600">
              パターン{i + 1}
            </Box>
            <TrainerView trainer={selectedTrainer.first} team={[v[0], v[1]]} />
            <TrainerView trainer={selectedTrainer.second} team={[v[2], v[3]]} />
          </Box>
        ))}
    </>
  )
}
