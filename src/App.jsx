import './App.css'
import { Route, Switch } from 'wouter'

import { GifsContextProvider } from './context/GifsContext'
import { UserContextProvider } from './context/UserContext'

import { Container } from './styles'

import Header from './components/Header'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import GifDetail from './pages/GifDetail'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import { Helmet } from 'react-helmet'

export default function App () {
  return (
    <>
      <Helmet>
        <link rel='canonical' href='http://mywebsite.com' />
        <meta
          name='description'
          content='Search, discover & share your favorite GIFs'
        />
      </Helmet>
      <Container>
        <UserContextProvider>
          <GifsContextProvider>
            <Header />
            <Switch>
              <Route path='/' component={Home} />
              <Route
                path='/search/:query/:rating?/:lang?'
                component={SearchResults}
              />
              <Route path='/gifs/:gifId' component={GifDetail} />
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route component={NotFound} />
            </Switch>
          </GifsContextProvider>
        </UserContextProvider>
      </Container>
    </>
  )
}
