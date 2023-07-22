import styled from '@emotion/styled'
import { Link as LinkWouter } from 'wouter'

export const Link = styled(LinkWouter)`
  color: var(--primary);
  text-decoration: none;
  transition: all 0.25s;

  :hover {
    color: var(--primary-hover);
  }
`

export const ButtonLink = styled(LinkWouter)`
  text-decoration: none;
  display: block;
  width: 100%;
  text-align: center;
  cursor: pointer;

  border-radius: var(--border-radius);
  background: var(--primary);
  padding: 1rem;
  color: var(--white);
  width: 100%;
  transition: all 0.2s;

  :hover {
    background: var(--primary-hover);
  }
`
