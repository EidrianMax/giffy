import React, { Suspense } from 'react'
import useNearScreen from '@/hooks/useNearScreen'
import Spinner from '../Spinner'

// React.lazy: Con esto evitamos que el componente se importe siempre, solo cuando nosostros queremos
// Con esto evitamos que el javascript de este componente se cargue
// React.lazy recibe una funcion que devuelva el import dinamico del componente que queremos utilizar
const TrendingTerms = React.lazy(
  () => import('./TrendingTerms')
)

export default function LazyTrendingTerms () {
  const { isNearScreen, fromRef } = useNearScreen()

  return (
    <div ref={fromRef}>
      {/*
      React.lazy devuelve una promesa y donde queremos renderizar nuestro componente 'lazy' tenenmos que envolverlo con <Suspense>
      Con el fallback podemos lograr cosas estilo skeleton o parecido
    */}
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingTerms /> : <Spinner />}
      </Suspense>
    </div>
  )
}
