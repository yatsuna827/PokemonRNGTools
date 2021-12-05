import React from 'react'

import database from '@src/data/bdsp_tower_pokemon.json'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import { Box, Center, Flex } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'

const PokemonListRow: React.FC<{
  pokemon: string
  item: string
  moves: string[]
}> = ({ pokemon, item, moves }) => {
  return (
    <Tr>
      <Td padding="0" h="50px">
        {pokemon}
      </Td>
      <Td padding="0">{item}</Td>
      <Td padding="0">{moves[0]}</Td>
      <Td padding="0">{moves[1]}</Td>
      <Td padding="0">{moves[2]}</Td>
      <Td padding="0">{moves[3]}</Td>
    </Tr>
  )
}
export const PokemonList: React.FC = () => {
  const [nameFilter, setNameFilter] = React.useState<string | undefined>(undefined)
  const [itemFilter, setItemFilter] = React.useState<string | undefined>(undefined)
  const [moveFilter, setMoveFilter] = React.useState<string | undefined>(undefined)

  const data = React.useMemo(() => {
    return database
      .filter((_) => !nameFilter || _.pokemon.includes(nameFilter))
      .filter((_) => !itemFilter || _.item.includes(itemFilter))
      .filter((_) => !moveFilter || _.moves.some((move) => move.includes(moveFilter)))
  }, [nameFilter, itemFilter, moveFilter])
  const [page, setPage] = React.useState(0)
  const maxPage = React.useMemo(() => Math.floor(data.length / 20), [data])

  const pFilterRef = React.useRef<HTMLInputElement>(null)
  const handleSetNameFilter = React.useCallback(() => {
    const input = pFilterRef.current
    if (input?.value) {
      setNameFilter(input.value)
      input.value = ''
    }
  }, [])

  const iFilterRef = React.useRef<HTMLInputElement>(null)
  const handleSetItemFilter = React.useCallback(() => {
    const input = iFilterRef.current
    if (input?.value) {
      setItemFilter(input.value)
      input.value = ''
    }
  }, [])

  const mFilterRef = React.useRef<HTMLInputElement>(null)
  const handleSetMoveFilter = React.useCallback(() => {
    const input = mFilterRef.current
    if (input?.value) {
      setMoveFilter(input.value)
      input.value = ''
    }
  }, [])

  return (
    <>
      <Flex gridGap="10px" alignItems="center" marginBottom="10px">
        <Box w="100px">ポケモン名</Box>
        <Input ref={pFilterRef} w="200px" />
        <Button onClick={handleSetNameFilter}>フィルタ設定</Button>
        <Button onClick={() => setNameFilter(undefined)}>解除</Button>
        <Box>{nameFilter && `フィルター：${nameFilter}`}</Box>
      </Flex>
      <Flex gridGap="10px" alignItems="center" marginBottom="10px">
        <Box w="100px">持ち物</Box>
        <Input ref={iFilterRef} w="200px" />
        <Button onClick={handleSetItemFilter}>フィルタ設定</Button>
        <Button onClick={() => setItemFilter(undefined)}>解除</Button>
        <Box>{itemFilter && `フィルター：${itemFilter}`}</Box>
      </Flex>
      <Flex gridGap="10px" alignItems="center" marginBottom="10px">
        <Box w="100px">わざ</Box>
        <Input ref={mFilterRef} w="200px" />
        <Button onClick={handleSetMoveFilter}>フィルタ設定</Button>
        <Button onClick={() => setMoveFilter(undefined)}>解除</Button>
        <Box>{moveFilter && `フィルター：${moveFilter}`}</Box>
      </Flex>
      <Table>
        <Thead>
          <Tr>
            <Th padding="0" w="200px">
              ポケモン名
            </Th>
            <Th padding="0" h="50px">
              持ち物
            </Th>
            <Th padding="0">わざ1</Th>
            <Th padding="0">わざ2</Th>
            <Th padding="0">わざ3</Th>
            <Th padding="0">わざ4</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.slice(20 * page, 20 * (page + 1)).map((v, i) => (
            <PokemonListRow key={i} {...v} />
          ))}
        </Tbody>
      </Table>
      <Center marginTop="20px">
        <Flex alignItems="center">
          <Button onClick={() => setPage((cur) => (cur ? cur - 1 : 0))}>←</Button>
          <Box marginX="20px">
            {page + 1} / {maxPage + 1}
          </Box>
          <Button onClick={() => setPage((cur) => (cur < maxPage ? cur + 1 : cur))}>→</Button>
        </Flex>
      </Center>
    </>
  )
}
