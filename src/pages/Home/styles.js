import { BREAKPOINTS } from '@/styles/styles'
import styled from '@emotion/styled'

export const HomeGrid = styled.div`

${BREAKPOINTS.tablet} {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 1rem;
  }
`
