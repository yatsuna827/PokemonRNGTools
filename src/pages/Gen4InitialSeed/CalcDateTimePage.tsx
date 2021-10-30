import React from 'react'

import { Flex, Box, Button, Input, useToast, Menu, MenuButton, MenuItem, MenuList, BoxProps } from '@chakra-ui/react'
import { detectDateTime } from './InitialSeedFactors/detectDateTime'
import { validateSeed } from '@src/util'
import { InitialSeedFactors } from './InitialSeedFactors/define'
import { StyledButton } from '@src/components/StyledButton'

const toPadStr = (n: number): string => `${n}`.padStart(2, '0')
const DateTimeResult: React.FC<BoxProps & { result: InitialSeedFactors }> = ({ result, ...props }) => {
  const date = React.useMemo(() => {
    const { year, month, date } = result.innerClock
    return `${year + 2000}年${toPadStr(month)}月${toPadStr(date)}日`
  }, [result.innerClock])
  const time = React.useMemo(() => {
    const { hour, minute, second } = result.innerClock
    return `${toPadStr(hour)}時${toPadStr(minute)}分${toPadStr(second)}秒`
  }, [result.innerClock])
  const wait = React.useMemo(
    () => `${result.waitFrames}F (${Math.round(result.waitFrames / 59.8261)}秒) 待機`,
    [result.waitFrames]
  )

  return (
    <Box {...props}>
      <Box>{`${date} ${time} 起動`}</Box>
      <Box>{wait}</Box>
    </Box>
  )
}

// TODO
// - 結果表示の整形
// - でざいんととのえ
// - 入力のvalidate
export const CalcDateTimePage: React.FC = () => {
  const toast = useToast()

  const [seed, setSeed] = React.useState('AC120FB2')
  const handleChangeSeed = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => setSeed(e.target.value), [])
  const [blank, setBlank] = React.useState(345)
  const handleChangeBlank = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setBlank(e.target.valueAsNumber),
    []
  )
  const [result, setResult] = React.useState<InitialSeedFactors | null>(null)
  const handleCalc = React.useCallback(() => {
    if (!validateSeed(seed) || !Number.isInteger(blank)) {
      toast({
        description: 'あほしね',
        status: 'error',
      })
      return
    }
    const res = detectDateTime({
      seed: parseInt(seed, 16),
      blank,
      second: 10,
    })
    setResult(res)
  }, [seed, blank, toast])

  return (
    <Box maxW="1000px" margin="0 auto" marginBottom="50px">
      <Flex w="60%" alignItems="center" marginBottom="10px">
        <Box marginRight="10px">seed</Box>
        <Input rounded="sm" w="150px" value={seed} onChange={handleChangeSeed} />
      </Flex>
      <Flex w="60%" alignItems="center" marginBottom="10px">
        <Box marginRight="10px">空白時間</Box>
        <Input type="number" min="100" max="999" rounded="sm" w="150px" value={blank} onChange={handleChangeBlank} />
        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            border="1px"
            borderColor="gray.300"
            rounded="sm"
            userSelect="none"
            marginLeft="10px"
          >
            プリセット
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setBlank(221)}>ダイパ</MenuItem>
            <MenuItem onClick={() => setBlank(249)}>プラチナ</MenuItem>
            <MenuItem onClick={() => setBlank(345)}>HGSS</MenuItem>
            <MenuItem onClick={() => setBlank(212)}>ダイパ ID調整</MenuItem>
            <MenuItem onClick={() => setBlank(332)}>プラチナ ID調整</MenuItem>
            <MenuItem onClick={() => setBlank(184)}>HGSS ID調整</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <StyledButton onClick={handleCalc}>計算</StyledButton>
      {result && (
        <>
          <DateTimeResult result={result} marginTop="20px" fontSize="32px" color="black" />
          <Box color="gray.400" marginTop="20px">
            <b>HGSS</b>の<b>ID調整</b>の場合、表示された時刻の<b>3分前</b>の時刻を設定してください。
            <br />
            これはHGSSのID決定の処理が実際に実行されるのが、最後にAボタンを押してから約3秒後であるためです。
            <br />
            そのうちツール側で対応するようにします。
          </Box>
        </>
      )}
    </Box>
  )
}
