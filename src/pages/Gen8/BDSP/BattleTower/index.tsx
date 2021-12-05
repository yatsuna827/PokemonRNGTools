import React from 'react'
import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/tabs'
import { PokemonList } from './PokemonList'
import { TrainerList } from './TrainerList'

export const BattleTower: React.FC = () => {
  return (
    <Tabs>
      <TabList>
        <Tab _focus={{}}>ポケモンリスト</Tab>
        <Tab _focus={{}}>トレーナー検索</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <PokemonList />
        </TabPanel>
        <TabPanel>
          <TrainerList />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
