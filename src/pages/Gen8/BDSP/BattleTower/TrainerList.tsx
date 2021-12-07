import React from 'react'
import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/tabs'
import { DoubleMasterTabPage } from './DoubleMasterTabPage'
import { SingleMasterTabPage } from './SingleMasterTabPage'

export const TrainerList: React.FC = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab _focus={{}}>シングルノーマル</Tab>
          <Tab _focus={{}}>シングルマスター</Tab>
          <Tab _focus={{}}>ダブルノーマル</Tab>
          <Tab _focus={{}}>ダブルマスター</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>しんぐるのーまる工事中</TabPanel>
          <TabPanel>
            <SingleMasterTabPage />
          </TabPanel>
          <TabPanel>だぶるのーまる工事中</TabPanel>
          <TabPanel>
            <DoubleMasterTabPage />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
