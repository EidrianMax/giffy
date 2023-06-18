import styled from '@emotion/styled'
import { Link as LinkWouter } from 'wouter'
import { BREAKPOINTS } from '@/styles/styles'

export const Link = styled(LinkWouter)`
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;

  :hover {
    color: #535bf2;
  }

  ${BREAKPOINTS['theme-light']} {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  :hover {
    color: #747bff;
  }
}
`
