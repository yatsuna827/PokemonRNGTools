import React from 'react'

import pokemons from '@src/data/bdsp_tower_pokemon.json'
import { Select } from '@chakra-ui/select'
import { Box, Flex } from '@chakra-ui/react'
import { getSingleMasterTrainersData } from '@src/data'

const data = getSingleMasterTrainersData()

const TrainerView: React.FC<{
  team: number[]
}> = ({ team }) => {
  const poke1 = pokemons[team[0]]
  const poke2 = pokemons[team[1]]
  const poke3 = pokemons[team[2]]

  return (
    <Box marginBottom="10px">
      <Flex marginLeft="20px" gridGap="10px">
        <Box w="50px">先発</Box>
        <Box>
          {poke1.pokemon}({poke1.ability})@{poke1.item}
        </Box>
        <Box>{poke1.stats.join('-')}</Box>
      </Flex>
      <Box marginLeft="80px">{poke1.moves.join(' / ')}</Box>

      <Flex marginLeft="20px" gridGap="10px">
        <Box w="50px">後発</Box>
        <Box>
          {poke2.pokemon}({poke2.ability})@{poke2.item}
        </Box>
        <Box>{poke2.stats.join('-')}</Box>
      </Flex>
      <Box marginLeft="80px">{poke2.moves.join(' / ')}</Box>

      <Flex marginLeft="20px" gridGap="10px">
        <Box w="50px">後発</Box>
        <Box>
          {poke3.pokemon}({poke3.ability})@{poke3.item}
        </Box>
        <Box>{poke3.stats.join('-')}</Box>
      </Flex>
      <Box marginLeft="80px">{poke3.moves.join(' / ')}</Box>
    </Box>
  )
}

export const SingleMasterTabPage: React.FC = () => {
  const [trainer, setTrainer] = React.useState(data[0].trainer)
  const handleSetTrainer = React.useCallback((e) => setTrainer(e.target.value), [])

  const selectedTrainer = React.useMemo(() => data.find((v) => v.trainer === trainer), [trainer])

  return (
    <>
      <Flex alignItems="center" gridGap="10px">
        <Box>1人目</Box>
        <Select w="400px" value={trainer} onChange={handleSetTrainer}>
          {data.map(({ trainer }) => (
            <option key={trainer}>{trainer}</option>
          ))}
        </Select>
      </Flex>

      {selectedTrainer &&
        selectedTrainer.teams.map((v, i) => (
          <Box key={i} marginTop="20px">
            <Box fontSize="24px" fontWeight="600">
              パターン{i + 1}
            </Box>
            <TrainerView team={v} />
          </Box>
        ))}
    </>
  )
}
