import React from 'react'

import { Box, Flex, keyframes } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const neon = keyframes`
0%{color:#ff0053;}
12%{color:#ff5353;}
24%{color:#ffcf53;}
36%{color:#e8ff53;}
48%{color:#53ff5d;}
60%{color:#53ffbc;}
72%{color:#5393ff;}
84%{color:#ca53ff;}
100%{color:#ff53bd;}
`
const gaming = keyframes`
  100% { background-position-x: 200%; }
`

export const Header: React.FC = () => {
  return (
    <Flex
      h="80px"
      w="100%"
      bg="linear-gradient(to right, Magenta, yellow, Cyan, Magenta) 0% center/200%"
      animation={`${gaming} 2s linear infinite`}
      paddingLeft="30px"
      justifyContent="center"
      alignItems="center"
      marginBottom="30px"
    >
      <Box fontSize="36px" fontWeight="bold" animation={`${neon} 2s linear infinite`}>
        <Link to="/">Pokemon RNG Tools</Link>
      </Box>
    </Flex>
  )
}
