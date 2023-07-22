import styled from '@emotion/styled'
import { Link } from 'wouter'

export const StyledTrending = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  position: sticky;
  top: 60px;
`

const generateMultiColors = ({ index }) => {
  const NEED_BLACK_COLOR = [1, 2, 5]

  const colorIndex = (index % 5) + 1
  const isBlackColor = NEED_BLACK_COLOR.includes(colorIndex)

  return `
    background-color: var(--brand-color-${colorIndex});
    color: ${isBlackColor ? 'var(--text-dark)' : 'var(--white)'};

    :hover {
      background-color: var(--brand-color-${colorIndex}-hover);
      color: white;
    }
  `
}

export const StyledTrendingItem = styled.li`
  background-color: wheat;
  border-radius: var(--border-radius);
  transition: all 0.2s;

  ${generateMultiColors}
`

export const StyledTrendingLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 0.7rem;
`
