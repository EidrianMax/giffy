import styled from '@emotion/styled'

export const StyledGifs = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;

  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  gap: 0.6rem;
  min-height: 200vh;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 190px;
    gap: 0.6rem;

    li:nth-child(11n + 1) {
      grid-column: span 2;
      grid-row: span 2;
    }

    li:nth-child(8n + 1) {
      grid-column: span 2;
    }

     li:nth-child(10n + 3) {
      grid-column-end: span 2;
      grid-row-end: span 2;
    }
  }
`
