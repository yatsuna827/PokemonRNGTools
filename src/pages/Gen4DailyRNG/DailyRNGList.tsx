import React from 'react'
import {
  Flex,
  Box,
  Button,
  Input,
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  useToast,
  HStack,
  BoxProps,
  ButtonProps,
} from '@chakra-ui/react'

import { advanceDaily } from '../../rng/LCG/lcg'
import { generateLotteryNumber, generateOutbreak, generateTileIndexes, dpOutbreaks, ptOutbreaks } from './util'
import { MtCoronetB1F } from './MtCoronetB1FMap'

const toHex = (v: number) => (v >>> 0).toString(16)
const validate = (input: string) => {
  return 0 < input.length && input.length <= 8 && !/[^0-9A-Fa-f]/g.test(input)
}

type DailyResult = {
  seed: string
  lottery: number
  mapName: string
  pokemon: string
  points: readonly number[]
}

const StyledButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button variant="ghost" border="1px" borderColor="gray.300" rounded="sm" userSelect="none" {...props}>
      {children}
    </Button>
  )
}
const SelectedBox: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Flex
      h="40px"
      w="100px"
      fontWeight="bold"
      border="1px"
      color="white"
      bg="gray.500"
      rounded="sm"
      justifyContent="center"
      alignItems="center"
      userSelect="none"
      {...props}
    >
      {children}
    </Flex>
  )
}

const ResultTableRow: React.FC<
  DailyResult & { i: number; onClick: (i: number, points: readonly number[]) => void } & Pick<BoxProps, 'bg'>
> = ({ i, bg, seed, lottery, mapName, pokemon, points, onClick }) => {
  const handleClick = React.useCallback(() => {
    onClick(i, points)
  }, [onClick, points])

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

export const DailyRNGList: React.FC = () => {
  const toast = useToast()

  const inputEl = React.useRef<HTMLInputElement>(null)
  const [result, setResult] = React.useState<readonly DailyResult[] | undefined>(undefined)
  const [version, setVersion] = React.useState<'dp' | 'pt'>('dp')
  const [selectedRow, setSelectedRow] = React.useState<number | undefined>(undefined)
  const [selectedPoints, setSelectedPoints] = React.useState<readonly number[]>([])

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
        points: generateTileIndexes(seed >>> 0),
      })
    }
    setResult(res)
    setSelectedRow(undefined)
    setSelectedPoints([])
  }, [inputEl, toast, version])
  const handleClickResult = React.useCallback((i: number, points: readonly number[]) => {
    setSelectedRow(i)
    setSelectedPoints(points)
  }, [])

  return (
    <Box>
      <Box marginBottom="30px">日替わりseedリスト</Box>
      <Flex w="60%" alignItems="center" marginBottom="10px">
        <Box marginRight="10px">seed</Box>
        <Input ref={inputEl} rounded="sm" w="150px" defaultValue="8fe39a4b" />
      </Flex>
      <HStack marginBottom="10px">
        {version === 'dp' ? (
          <SelectedBox>ダイパ</SelectedBox>
        ) : (
          <StyledButton w="100px" onClick={handleSetDp}>
            ダイパ
          </StyledButton>
        )}
        {version === 'pt' ? (
          <SelectedBox>プラチナ</SelectedBox>
        ) : (
          <StyledButton w="100px" onClick={handleSetPt}>
            プラチナ
          </StyledButton>
        )}
      </HStack>
      <StyledButton marginBottom="10px" w="150px" onClick={handleCalc}>
        計算
      </StyledButton>
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
            <Tbody>
              {result &&
                result.map((val, i) => (
                  <ResultTableRow
                    key={val.seed}
                    i={i}
                    onClick={handleClickResult}
                    {...result[i]}
                    bg={i === selectedRow ? 'gray.200' : 'transparent'}
                  />
                ))}
            </Tbody>
          </Table>
        </Box>
        <Box w="40%">
          <MtCoronetB1F feebasIndexes={selectedPoints} />
        </Box>
      </Flex>
    </Box>
  )
}
