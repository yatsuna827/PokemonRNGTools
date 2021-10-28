import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { DailyRNGPage } from './pages/Gen4DailyRNG'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { CalcDateTimePage } from './pages/Gen4InitialSeed/CalcDateTimePage'
import { Top } from './pages/Top'
import { Header } from './components/Header'
import { PageContainer } from './components/PageContainer'

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <PageContainer>
          <Header />
          <Switch>
            <Route path="/daily">
              <DailyRNGPage />
            </Route>
            <Route path="/initial-seed">
              <CalcDateTimePage />
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
