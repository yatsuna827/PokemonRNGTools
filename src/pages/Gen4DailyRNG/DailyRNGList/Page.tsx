import React from 'react'
import { Flex, Box, Input, useToast, HStack, BoxProps } from '@chakra-ui/react'

import type { DailyResult } from './define'
import { ResultTable } from './DailyRNGList'

import { toHex, validateSeed } from '@src/util'
import { advanceDaily } from '@src/rng/LCG/lcg'
import { generateLotteryNumber, generateOutbreak, generateTileIndexes, dpOutbreaks, ptOutbreaks } from '../util'
import { MtCoronetB1F } from './MtCoronetB1FMap'
import { StyledButton } from '@src/components/StyledButton'

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

export const DailyRNGListPage: React.FC = () => {
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

    if (!validateSeed(seedInput)) {
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
      <Flex flexWrap="wrap">
        <Box w="60%" paddingX="10px">
          <ResultTable result={result} selectedRowIndex={selectedRow} onClickRow={handleClickResult} />
        </Box>
        <Box>
          <MtCoronetB1F feebasIndexes={selectedPoints} />
        </Box>
      </Flex>
    </Box>
  )
}
