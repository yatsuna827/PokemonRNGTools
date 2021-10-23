import React from 'react'
import { BoxProps, Flex } from '@chakra-ui/react'

export type TileProps = Pick<BoxProps, 'bg'>
export const Tile: React.FC<TileProps> = ({ bg, children }) => (
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

export type TileType = '#' | '*' | 'x' | '.' | '~'
export const propMap: { [key in TileType]: TileProps } = {
  '#': bigRock,
  '*': smashRock,
  x: whiteRock,
  '.': ground,
  '~': water,
}
