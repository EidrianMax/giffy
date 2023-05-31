import { createContext } from 'react'

const StaticContext = createContext({
  name: 'sin provider',
  isTimeToLunch: true
})

export default StaticContext

// sin provider
// este componente no lo envuelve un Context.Provider asi que solo puede acceder a las propiedades que se puso por defecto en el Contexto
/*
  const Component = () => {
    const {name, isTimeToLunch} = useContext(StaticContext)
    name: 'sin provider',
    isTimeToLunch: true

    return <Component />
  }
*/

// --------------------------------------------------------------------------------
// con provider
// todos los componentes que envuelva el Contexto.Provider podrán acceder al value
/*
  const Component = () => {
    return <StaticContext.Provider value={
      name: 'con provider',
      isTimeToLunch: true
    }>
      <Componente />
      <Componente />
      <Componente />
    </StaticContext.Provider>
  }
*/

/*
  const Component = () => {
    const {name, isTimeToLunch} = useContext(StaticContext)
    name: 'con provider',
      isTimeToLunch: true

    return <Component />
  }
*/
