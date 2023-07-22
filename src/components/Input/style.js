import styled from '@emotion/styled'

export const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border: none;

  display: block;
  width: 100%;
  border: 1px solid var(--text-1, #f2f0ff);
  border-radius: var(--border-radius);
  background-color: var(--white);
  padding: 0.5rem 1rem;

  :focus-visible,
  :focus {
    outline: none;
  }
`
