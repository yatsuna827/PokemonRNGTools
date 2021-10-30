import React from 'react'
import { Flex, Box, Button, Input, Table, Thead, Th, Tr, Tbody, Td, useToast } from '@chakra-ui/react'

import { generateLotteryNumber, findDailySeed } from './util'
import { advanceDaily } from '@src/rng/LCG/lcg'
import { useIntegerInput } from '@src/hooks/useIntegerInput'

const toHex = (v: number) => (v >>> 0).toString(16)
const validate = (n: number) => {
  if (Number.isNaN(n) || !Number.isFinite(n)) return false
  if (!Number.isInteger(n)) return false
  return 0 <= n && n < 0x10000
}
const get3rdLottery = (seed: number) => generateLotteryNumber(advanceDaily(advanceDaily(seed >>> 0)))

export const DailySeedFinder: React.FC = () => {
  const toast = useToast()
  const { getValue: getValue1, ...prop1 } = useIntegerInput('65005')
  const { getValue: getValue2, ...prop2 } = useIntegerInput('14314')
  const [result, setResult] = React.useState<number[]>([])
  const handleCalc = React.useCallback(() => {
    const v1 = getValue1()
    const v2 = getValue2()
    if (!validate(v1) || !validate(v2)) {
      toast({
        description: 'あほしね',
        status: 'error',
        duration: 900,
      })
    } else {
      setResult(findDailySeed(v1, v2))
    }
  }, [getValue1, getValue2, toast])

  return (
    <Box>
      <Box marginBottom="30px">日替わりseed検索</Box>
      <Flex alignItems="center" marginBottom="10px">
        <Box marginRight="10px">1日目</Box>
        <Input rounded="sm" w="150px" {...prop1} />
      </Flex>
      <Flex alignItems="center" marginBottom="30px">
        <Box marginRight="10px">2日目</Box>
        <Input rounded="sm" w="150px" {...prop2} />
      </Flex>
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
      {result.length > 0 && (
        <Table size="sm">
          <Thead>
            <Tr>
              <Th w="25%"></Th>
              <Th w="25%">seed</Th>
              <Th w="25%">3日目</Th>
              <Th w="25%"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {result.map((val, i) => {
              return (
                <Tr key={i}>
                  <Td userSelect="none">候補{i}</Td>
                  <Td>{toHex(val)}</Td>
                  <Td>{get3rdLottery(val)}</Td>
                  <Td>
                    <Button
                      variant="ghost"
                      border="1px"
                      borderColor="gray.300"
                      rounded="sm"
                      onClick={() => {
                        navigator.clipboard.writeText(toHex(val))
                        toast({
                          description: 'コピーしました',
                          status: 'success',
                          duration: 900,
                        })
                      }}
                    >
                      seedをコピー
                    </Button>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      )}
    </Box>
  )
}
