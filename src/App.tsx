import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { DailyRNGPage } from './pages/DailyRNGPage'

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <DailyRNGPage />
    </ChakraProvider>
  )
}
