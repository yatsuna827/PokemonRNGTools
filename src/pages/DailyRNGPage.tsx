import React from 'react'
import { Flex, Box, Button, HStack } from '@chakra-ui/react'

import { DailySeedFinder } from './DailySeedFinder'
import { DailyRNGList } from './DailyRNGList'
import { MtCoronetB1F } from './MtCoronetB1F'

export const DailyRNGPage: React.FC = () => {
  const [tab, setTab] = React.useState<'DailySeedFinder' | 'DailySeedList' | 'sandbox'>('DailySeedFinder')
  const handleSetFinderTab = React.useCallback(() => setTab('DailySeedFinder'), [])
  const handleSetListTab = React.useCallback(() => setTab('DailySeedList'), [])
  // const handleSetSandBox = React.useCallback(() => setTab("sandbox"), [])

  return (
    <Box marginX="150px" marginBottom="50px">
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
          Pokemon RNG Tools
        </Box>
      </Flex>

      <Flex justifyContent="left" marginBottom="30px">
        <HStack>
          <Button variant="link" onClick={handleSetFinderTab}>
            検索
          </Button>
          <Button variant="link" onClick={handleSetListTab}>
            リスト
          </Button>
        </HStack>
      </Flex>
      {tab === 'DailySeedFinder' && <DailySeedFinder />}
      {tab === 'DailySeedList' && <DailyRNGList />}
      {tab === 'sandbox' && <MtCoronetB1F />}
    </Box>
  )
}
