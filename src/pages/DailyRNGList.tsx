import React from 'react'
import { Flex, Box, Button, Input, Table, Thead, Th, Tr, Tbody, Td, useToast, HStack } from '@chakra-ui/react'

import { advanceDaily } from '../rng/LCG/lcg'
import {
  generateLotteryNumber,
  generateOutbreak,
  generateTileIndexes,
  indexToPoint,
  dpOutbreaks,
  ptOutbreaks,
} from '../rng/gen4/daily'
import { MtCoronetB1F } from './MtCoronetB1F'

const toHex = (v: number) => (v >>> 0).toString(16)
const validate = (input: string) => {
  return 0 < input.length && input.length <= 8 && !/[^0-9A-Fa-f]/g.test(input)
}

type DailyResult = {
  seed: string
  lottery: number
  mapName: string
  pokemon: string
  points: [number, number][]
}

const ResultTableRow: React.FC<DailyResult & { i: number }> = ({ i, seed, lottery, mapName, pokemon }) => (
  <Tr>
    <Td userSelect="none">{i + 1}日目</Td>
    <Td>{seed}</Td>
    <Td>{lottery}</Td>
    <Td>{mapName}</Td>
    <Td>{pokemon}</Td>
  </Tr>
)

export const DailyRNGList: React.FC = () => {
  const toast = useToast()

  const inputEl = React.useRef<HTMLInputElement>(null)
  const [result, setResult] = React.useState<readonly DailyResult[] | undefined>(undefined)
  const [version, setVersion] = React.useState<'dp' | 'pt'>('dp')
  const handleSetDp = React.useCallback(() => setVersion('dp'), [])
  const handleSetPt = React.useCallback(() => setVersion('pt'), [])
  const handleCalc = React.useCallback(() => {
    if (!inputEl?.current) return

    const seedInput = inputEl.current.value

    if (!validate(seedInput)) {
      toast({
        description: 'あほしね',
        status: 'error',
        duration: 900,
      })
      return
    }

    const res = [] as DailyResult[]
    let seed = parseInt(seedInput, 16)
    for (let i = 0; i < 20; i++, seed = advanceDaily(seed)) {
      res.push({
        seed: toHex(seed),
        lottery: generateLotteryNumber(seed >>> 0),
        ...generateOutbreak(seed >>> 0, version === 'dp' ? dpOutbreaks : ptOutbreaks),
        points: generateTileIndexes(seed >>> 0).map(indexToPoint),
      })
    }
    setResult(res)
  }, [inputEl, toast, version])

  return (
    <Box>
      <Box marginBottom="30px">日替わりseedリスト</Box>
      <Flex w="60%" alignItems="center" marginBottom="10px">
        <Box marginRight="10px">seed</Box>
        <Input ref={inputEl} rounded="sm" w="150px" defaultValue="8fe39a4b" />
      </Flex>
      <HStack marginBottom="10px">
        <Button variant="link" onClick={handleSetDp}>
          ダイパ
        </Button>
        <Button variant="link" onClick={handleSetPt}>
          プラチナ
        </Button>
      </HStack>
      <Button
        marginBottom="10px"
        variant="ghost"
        w="150px"
        border="1px"
        borderColor="gray.300"
        rounded="sm"
        onClick={handleCalc}
      >
        計算
      </Button>
      <Flex W="100vw">
        <Box w="60%" paddingX="10px">
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
            <Tbody>{result && result.map((val, i) => <ResultTableRow key={val.seed} i={i} {...result[i]} />)}</Tbody>
          </Table>
        </Box>
        <Box w="40%">
          <MtCoronetB1F />
        </Box>
      </Flex>
    </Box>
  )
}
