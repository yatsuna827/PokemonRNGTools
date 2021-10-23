import React from 'react'
import { Flex, Box, Button, Input, Table, Thead, Th, Tr, Tbody, Td, useToast } from '@chakra-ui/react'

import { findDailySeed } from '../rng/LCG/findDailySeed'
import { advanceDaily } from '../rng/LCG/lcg'
import { generateLotteryNumber } from '../rng/gen4/daily'
import { useIntegerInput } from '../hooks/useIntegerInput'

const toHex = (v: number) => (v >>> 0).toString(16)
const validate = (n: number) => {
  if (Number.isNaN(n) || !Number.isFinite(n)) return false
  if (!Number.isInteger(n)) return false
  return 0 <= n && n < 0x10000
}
const get3rdLottery = (seed: number) => generateLotteryNumber(advanceDaily(advanceDaily(seed >>> 0)))

export const DailySeedFinder: React.FC = () => {
  const toast = useToast()
  const { value: value1, ...prop1 } = useIntegerInput('65005')
  const { value: value2, ...prop2 } = useIntegerInput('14314')
  const [result, setResult] = React.useState<number[]>([])
  const handleCalc = React.useCallback(() => {
    const v1 = Number(value1)
    const v2 = Number(value2)
    if (value1 === '' || value2 === '' || !validate(v1) || !validate(v2)) {
      toast({
        description: 'あほしね',
        status: 'error',
        duration: 900,
      })
    } else {
      setResult(findDailySeed(v1, v2))
    }
  }, [value1, value2, toast])

  return (
    <Box>
      <Box marginBottom="30px">日替わりseed検索</Box>
      <Flex alignItems="center" marginBottom="10px">
        <Box marginRight="10px">1日目</Box>
        <Input rounded="sm" w="150px" value={value1} {...prop1} />
      </Flex>
      <Flex alignItems="center" marginBottom="30px">
        <Box marginRight="10px">2日目</Box>
        <Input rounded="sm" w="150px" value={value2} {...prop2} />
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
