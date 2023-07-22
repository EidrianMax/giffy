import styled from '@emotion/styled'

export const WrapperHome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
`

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 200px;
  }
`
