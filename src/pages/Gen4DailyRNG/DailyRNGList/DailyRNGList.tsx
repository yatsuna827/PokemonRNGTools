import React from 'react'
import { Table, Thead, Th, Tr, Tbody, Td, BoxProps } from '@chakra-ui/react'
import type { DailyResult } from './define'

type ResultTableRowProps = DailyResult &
  Pick<BoxProps, 'bg'> & { i: number; onClick: (i: number, points: readonly number[]) => void }
const ResultTableRow: React.FC<ResultTableRowProps> = React.memo(
  ({ i, bg, seed, lottery, mapName, pokemon, points, onClick }) => {
    const handleClick = React.useCallback(() => {
      onClick(i, points)
    }, [onClick, points, i])

    return (
      <Tr cursor="pointer" onClick={handleClick} bg={bg}>
        <Td userSelect="none">{i + 1}日目</Td>
        <Td>{seed}</Td>
        <Td>{lottery}</Td>
        <Td>{mapName}</Td>
        <Td>{pokemon}</Td>
      </Tr>
    )
  }
)

type ResultTypeProps = {
  result?: readonly DailyResult[]
  selectedRowIndex?: number
  onClickRow: (i: number, points: readonly number[]) => void
}
export const ResultTable: React.FC<ResultTypeProps> = React.memo(({ result, selectedRowIndex, onClickRow }) => {
  return (
    <Table size="sm">
      <Thead>
        <Tr>
          <Th></Th>
          <Th>seed</Th>
          <Th>くじ番号</Th>
          <Th>大量発生マップ</Th>
          <Th>大量発生ポケモン</Th>
        </Tr>
      </Thead>
      <Tbody>
        {result &&
          result.map((val, i) => (
            <ResultTableRow
              key={val.seed}
              i={i}
              onClick={onClickRow}
              {...result[i]}
              bg={i === selectedRowIndex ? 'gray.200' : 'transparent'}
            />
          ))}
      </Tbody>
    </Table>
  )
})
