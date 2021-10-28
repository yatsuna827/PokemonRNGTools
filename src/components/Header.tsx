import React from 'react'

import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  return (
    <Flex
      h="80px"
      w="100%"
      paddingLeft="30px"
      justifyContent="center"
      alignItems="center"
      bg="#29BEEF"
      marginBottom="30px"
    >
      <Box fontSize="24px" color="white">
        <Link to="/">Pokemon RNG Tools</Link>
      </Box>
    </Flex>
  )
}
