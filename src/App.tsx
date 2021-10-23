import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { DailyRNGPage } from './pages/Gen4DailyRNG/'

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <DailyRNGPage />
    </ChakraProvider>
  )
}
