import React from 'react'
import { InputProps } from '@chakra-ui/input'

const filterInput = (value: string): string => {
  const ret = value.replace(/[０-９]/g, (_) => String.fromCharCode(_.charCodeAt(0) - 0xfee0)).replace(/\D/g, '')

  return ret === '0' ? ret : ret.replace(/^0+/, '')
}

type useIntegerInputReturn = Pick<InputProps, 'onChange' | 'onCompositionStart' | 'onCompositionEnd'> & {
  value: string
}
export const useIntegerInput = (defaultValue: string): useIntegerInputReturn => {
  const [composing, setComposing] = React.useState<boolean>(false)
  const [value, setValue] = React.useState<string>(filterInput(defaultValue))

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(composing ? e.target.value : filterInput(e.target.value)),
    [composing]
  )
  const onCompositionStart = React.useCallback(() => setComposing(true), [])
  const onCompositionEnd = React.useCallback(() => {
    setComposing(false)
    setValue(filterInput(value))
  }, [value])

  return {
    value,
    onChange,
    onCompositionStart,
    onCompositionEnd,
  }
}
