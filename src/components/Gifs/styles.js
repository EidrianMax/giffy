import styled from '@emotion/styled'

export const StyledGifs = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  grid-auto-flow: row dense;
`
