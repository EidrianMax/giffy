import './App.css'
import { Route, Link, Switch } from 'wouter'
// import Home from './pages/Home' <--- lo quitamos para que se supenda y lo cargue con React.lazy()
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'
import React, { Suspense } from 'react'
import Spinner from './components/Spinner'
import ErrorPage from './pages/ErrorPage'
import Header from './components/Header'
import Login from './pages/Login'
import { UserContextProvider } from './context/UserContext'
import RegisterPage from './pages/RegisterPage'
import { Container } from '@/components/Container/styles'

const Home = React.lazy(() => import('@/pages/Home'))

function App () {
  return (
    <Suspense fallback={<Spinner />}>
      <StaticContext.Provider value={{
        name: 'con provider'
      }}
      >
        <UserContextProvider>
          <Container>
            <Header />
            <h1 className='App-title'>
              <Link href='/'>Giffy</Link>
            </h1>
            <GifsContextProvider>
              <Switch>
                <Route path='/' component={Home} />
                <Route path='/search/:keyword/:rating?' component={SearchResults} />
                <Route path='/gif/:id' component={Detail} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={RegisterPage} />
                <Route path='/:rest*' component={ErrorPage} />
              </Switch>
            </GifsContextProvider>
          </Container>
        </UserContextProvider>
      </StaticContext.Provider>
    </Suspense>
  )
}

export default App
