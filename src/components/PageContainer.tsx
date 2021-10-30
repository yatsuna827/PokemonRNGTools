import React from 'react'
import { Box } from '@chakra-ui/react'

export const PageContainer: React.FC = ({ children }) => {
  return (
    <Box maxW="1000px" margin="0 auto" marginBottom="50px">
      {children}
    </Box>
  )
}
