/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { Link } from 'wouter'

function Gif ({ id, title, url }) {
  return (
    <div key={id}>
      <img src={url} alt={title} />
      <Link href={`/gif/${id}`}><h4>{title}</h4></Link>
      <small>{id}</small>
    </div>
  )
}

// React.memo no hace un comparación profunda, compara la referencia del objecto
// Por eso en este caso al enviar como props un objecto sin saber que es lo que hay entonces se crea una nueva referencia y no ve que es lo que hay dentro
// Por eso es mala practica enviar como prop con el rest operator
export default React.memo(Gif, (prevProps, nextProps) =>
  prevProps.id === nextProps.id
)
