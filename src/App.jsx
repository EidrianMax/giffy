import './App.css'
import { Route, Link } from 'wouter'
// import Home from './pages/Home' <--- lo quitamos para que se supenda y lo cargue con React.lazy()
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'
import React, { Suspense } from 'react'
import Spinner from './components/Spinner'

const Home = React.lazy(() => import('@/pages/Home'))

function App () {
  return (
    <Suspense fallback={<Spinner />}>
      <StaticContext.Provider value={{
        name: 'con provider'
      }}>
        <Link href='/'>
          <h1 style={{ cursor: 'pointer', textDecoration: 'underline' }}>Giffy</h1>
        </Link>
        <GifsContextProvider>
          <Route path='/' component={Home} />
          <Route path='/search/:keyword' component={SearchResults} />
          <Route path='/gif/:id' component={Detail} />
          <Route path='/404' component={() => <h1>Error 404</h1> } />
        </GifsContextProvider>
      </StaticContext.Provider>
    </Suspense>
  )
}

export default App
