import styled from '@emotion/styled'
import { Link } from 'wouter'

export const Logo = styled(Link)`
  color: var(--primary);
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: var(--font-weight-black);
  transition: all 0.25s;

  :hover {
    color: var(--primary-hover);
  }
`
