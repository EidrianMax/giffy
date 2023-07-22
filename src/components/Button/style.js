import styled from '@emotion/styled'

export const Button = styled.button`
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border: none;
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
