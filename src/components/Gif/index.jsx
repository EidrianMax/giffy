import { StyledGif } from './style'
import { Link } from 'wouter'
import Fav from '../Fav'
import { memo } from 'react'

function Gif ({ id, title, url, index }) {
  return (
    <StyledGif index={index}>
      <Link href={`/gifs/${id}`}>
        <img src={url} alt={title} />
      </Link>
      <h4>{title}</h4>
      <Fav gifId={id} />
    </StyledGif>
  )
}

const GifMemo = memo(Gif)

export default GifMemo
