import React from 'react'

import { Flex, Box, Button, Input, useToast } from '@chakra-ui/react'
import { detectDateTime } from './InitialSeedFactors/detectDateTime'
import { useIntegerInput } from '@src/hooks/useIntegerInput'
import { validateSeed } from '@src/util'

// TODO
// - 結果表示の整形
// - でざいんととのえ
// - 入力のvalidate
export const CalcDateTimePage: React.FC = () => {
  const toast = useToast()

  const [seed, setSeed] = React.useState('AC120FB2')
  const handleChangeSeed = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => setSeed(e.target.value), [])
  const { getValue, ...inputProps } = useIntegerInput('345')
  const [result, setResult] = React.useState('')
  const handleCalc = React.useCallback(() => {
    if (!validateSeed(seed)) {
      toast({
        description: 'あほしね',
        status: 'error',
      })
      return
    }
    const { innerClock, blankFrames, waitFrames } = detectDateTime({
      seed: parseInt(seed, 16),
      blank: getValue(),
      second: 10,
    })
    const { year, month, date, hour, minute, second } = innerClock
    setResult(
      `起動時刻: ${2000 + year}/${month.toString().padStart(2, '0')}/${date.toString().padStart(2, '0')} ${hour
        .toString()
        .padStart(2, '0')}:${minute.toString().padStart(2, '0')}.${second
        .toString()
        .padStart(2, '0')} 待機時間: ${waitFrames}F(${Math.round(waitFrames / 59.8261)}秒) (空白時間: ${blankFrames}F)`
    )
  }, [seed, getValue, toast])

  return (
    <Box maxW="1000px" margin="0 auto" marginBottom="50px">
      <Flex w="60%" alignItems="center" marginBottom="10px">
        <Box marginRight="10px">seed</Box>
        <Input rounded="sm" w="150px" value={seed} onChange={handleChangeSeed} />
      </Flex>
      <Flex w="60%" alignItems="center" marginBottom="10px">
        <Box marginRight="10px">空白時間</Box>
        <Input type="number" rounded="sm" w="150px" {...inputProps} />
      </Flex>
      <Button onClick={handleCalc}>計算</Button>
      <Box>{result}</Box>
    </Box>
  )
}
