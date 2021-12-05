import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { DailyRNGPage } from './pages/Gen4DailyRNG'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { CalcDateTimePage } from './pages/Gen4InitialSeed/CalcDateTimePage'
import { Top } from './pages/Top'
import { Header } from './components/Header'
import { PageContainer } from './components/PageContainer'
import { Gen8Top } from './pages/Gen8'
import { BattleTower } from './pages/Gen8/BDSP/BattleTower'

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <PageContainer>
          <Header />
          <Switch>
            <Route path="/PokemonRNGTools/Gen4/daily">
              <DailyRNGPage />
            </Route>
            <Route path="/PokemonRNGTools/Gen4/initial-seed">
              <CalcDateTimePage />
            </Route>
            <Route path="/PokemonRNGTools/Gen8/bdsp/battle-tower">
              <BattleTower />
            </Route>
            <Route path="/PokemonRNGTools/Gen8/bdsp">
              <Gen8Top />
            </Route>
            <Route>
              <Top />
            </Route>
          </Switch>
        </PageContainer>
      </BrowserRouter>
    </ChakraProvider>
  )
}
