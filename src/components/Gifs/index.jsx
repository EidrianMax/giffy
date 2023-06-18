import { StyledGifs } from './styles'
import Gif from '../Gif'

export default function Gifs ({ gifs }) {
  return (
    <StyledGifs>
      {gifs.map(({ id, title, url }) => (
        <Gif
          key={id}
          id={id}
          title={title}
          url={url}
        />
      ))}
    </StyledGifs>
  )
}
