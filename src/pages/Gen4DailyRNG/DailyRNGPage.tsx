import React from 'react'
import { Flex, Box, Button, HStack } from '@chakra-ui/react'

import { DailySeedFinder } from './DailySeedFinder'
import { DailyRNGListPage } from './DailyRNGList'

export const DailyRNGPage: React.FC = () => {
  const [tab, setTab] = React.useState<'DailySeedFinder' | 'DailySeedList'>('DailySeedFinder')
  const handleSetFinderTab = React.useCallback(() => setTab('DailySeedFinder'), [])
  const handleSetListTab = React.useCallback(() => setTab('DailySeedList'), [])

  return (
    <Box maxW="1000px" margin="0 auto" marginBottom="50px">
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
      {tab === 'DailySeedList' && <DailyRNGListPage />}
    </Box>
  )
}
