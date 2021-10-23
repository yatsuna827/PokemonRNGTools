import React from 'react'
import { BoxProps, Flex } from '@chakra-ui/react'

type TileProps = Pick<BoxProps, 'bg'>
const Tile: React.FC<TileProps> = ({ bg, children }) => (
  <Flex
    h="20px"
    w="20px"
    border="1px"
    borderColor="gray.200"
    bg={bg}
    alignItems="center"
    justifyContent="center"
    userSelect="none"
  >
    {children}
  </Flex>
)

const whiteRock = {
  bg: 'white',
}
const bigRock = {
  bg: 'black',
}
const smashRock = {
  bg: '#6B493D',
}
const ground = {
  bg: '#C5956B',
}
const water = {
  bg: 'blue.200',
}

type TileType = '#' | '*' | 'x' | '.' | '~'
const propMap: { [key in TileType]: TileProps } = {
  '#': bigRock,
  '*': smashRock,
  x: whiteRock,
  '.': ground,
  '~': water,
}

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

const coronetB1FMap = [
  '##....*.............',
  '##~~~~~~~~~~~~~~~~~~',
  '##~~~~~~~~~~~~~~~~~~',
  '##~~~~~~~~~~~~~~~x~~',
  '##~~~x~~~~~~~~~~~~~~',
  '##~~~~~~~~~~~~~~~~~~',
  '##~~~~~~~~~~~~~~~~~~',
  '##~~~~~~~~~~~~~~~~~~',
  '##~~~~~~~~~~~~~~~~~~',
  '##~~~~~~~~~~~~~~~~~~',
  '##~~~~~~x~~~~~~~~~~~',
  '*.~~~~~~~~~~~~~~~~~~',
  '..~~~~~~~~#######~~~',
  '..~~~~~~~~#######~~~',
  '..~~~~~~~~#######~~~',
  '..~~##~~~~#######~~~',
  '..~~##~~~~#######~~~',
  '*.~~~~~~~~#######~~~',
  '..~~~~~~~~#######~~~',
  '..~~~~~~~~~~~~..~~~~',
  '..~~~~~~~~~~~~..~~~~',
  '..~~~~~~~~~~~~~~~~~~',
  '..~~~~~~~~~~~~~~~~~~',
  '..~~~~~~~~~~~~~###~~',
  '..~~~~~~~~~~~~~###~~',
  '..~~~~~~~~~~~~~###~~',
  '..~~~~~~~~~~~~~~~~~~',
  '..~~~~~~~~~~x~~~~~~~',
  '*.~~~###~~~~~~~~~~~~',
  '..~~~###~~~~~~~~~~~~',
  '..~~~###~~~~~~##~~~~',
  '..~~~~~~~~~~~~##~~~~',
  '..~~x~~~~~~~~~~~~~~~',
  '..~~~~~~~~~~~~~~~~~~',
  'x.~~~~~~~~~~~~~~~~~~',
].map((it) => it.split('') as readonly TileType[])
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
