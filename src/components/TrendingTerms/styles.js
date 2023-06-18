import { Link } from 'wouter'
import styled from '@emotion/styled'

export const TrendingTitle = styled.h3`
  font-size: 2rem;
  margin-top: 1rem;
`

export const TrendingList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  /* justify-content: space-between; */
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`

const generateMultiColors = ({ index }) => {
  const NEED_BLACK_COLORS = [1, 2, 5]

  const colorIndex = index % 5 + 1
  const isColorWhite = NEED_BLACK_COLORS.includes(colorIndex)
  const colorText = isColorWhite && '#242424'

  return `
    background-color: var(--brand-color_${colorIndex});
    color: ${colorText};

    :hover {
      background-color: var(--brand-color_${colorIndex}-hover);
      color: white;
    }
  `
}

export const TrendingItem = styled.li`
  ${generateMultiColors}
`

export const TrendingLink = styled(Link)`
  text-decoration: none;
  color: #242424;
  color: inherit;

  display: block;
  padding: 0.5rem;
`
