import { Link } from 'wouter'
import styled from '@emotion/styled'
import { BREAKPOINTS } from '@/styles/styles'

// const SIZES = {
//   small: '1rem',
//   medium: '2rem',
//   large: '3rem'
// }

// const getSizeStyle = (props) => {
//   const size = SIZES[props.size]

//   if (!size) {
//     console.warn(`[Button Styled Component] This size is not correct. Use ${Object.keys(SIZES).join(', ')}`)

//     return SIZES.small
//   }

//   return size
// }

export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  color: inherit;

  :hover {
    border-color: #646cff;
  }

  :focus,
  :focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  ${BREAKPOINTS['theme-ligth']} {
    background-color: #f9f9f9;
  }
`

const ButtonLinkStyled = styled(Button)`
  text-decoration: none;
`

export const ButtonLink = ButtonLinkStyled.withComponent(Link)
