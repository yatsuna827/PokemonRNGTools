import React from 'react'
import { Flex } from '@chakra-ui/react'

import { coronetB1FMap } from './MapData'
import { Tile, TileType, propMap } from './Tile'

const TileRow: React.FC<{
  h: number
  line: readonly TileType[]
  feebasIndexes: readonly number[]
}> = ({ h, line, feebasIndexes }) => (
  <Flex>
    {line.map((c, i) => (
      <Tile key={i} {...propMap[c]}>
        {h >= 0 && i > 1 && feebasIndexes.includes(h * 18 + i - 2) && '@'}
      </Tile>
    ))}
  </Flex>
)

export const MtCoronetB1F: React.FC<{
  feebasIndexes?: readonly number[]
}> = ({ feebasIndexes }) => {
  return (
    <>
      {coronetB1FMap.map((it, i) => (
        <TileRow key={i} line={it} h={i - 1} feebasIndexes={feebasIndexes || []} />
      ))}
    </>
  )
}
