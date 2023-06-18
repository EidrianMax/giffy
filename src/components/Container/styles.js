import { BREAKPOINTS } from '@/styles/styles'
import styled from '@emotion/styled'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0.75rem;
  width: 100%;

  ${BREAKPOINTS.tablet} {
  margin: 0 auto;
    max-width: 728px;
  }

  ${BREAKPOINTS.desktop} {
  margin: 0 auto;

    max-width: 984px;
  }
`
