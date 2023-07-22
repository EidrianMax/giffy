import Gif from '../Gif'
import { StyledGifs } from './styles'

export default function Gifs ({ gifs }) {
  return (
    <StyledGifs>
      {
        gifs?.map(({ id, title, url }, index) =>
          <Gif
            key={id}
            id={id}
            title={title}
            url={url}
            index={index}
          />
        )
      }
    </StyledGifs>
  )
}
