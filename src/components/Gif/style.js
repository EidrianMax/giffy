import styled from '@emotion/styled'

const generateMultiColors = ({ index }) => {
  const NEED_BLACK_COLOR = [1, 2, 5]
  const colorIndex = (index % 5) + 1
  const isBlackColor = NEED_BLACK_COLOR.includes(colorIndex)

  return `
    background-color: var(--brand-color-${colorIndex});

    :hover {
      outline: 10px solid var(--brand-color-${colorIndex});
      color: ${isBlackColor ? 'var(--text-dark)' : 'var(--white)'};
    }
  `
}

export const StyledGif = styled.li`
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  h4 {
    position: absolute;
    bottom: 0;
    margin-bottom: 0;
    padding: 0.25rem 0.5rem;
    background-color: var(--text-dark-opacity);
    font-weight: var(--font-weight-medium);
    font-size: 0.8rem;
    backdrop-filter: blur(10px);
  }

  ${generateMultiColors}

  :hover{
    h4 {
      background-color: inherit;
    }
  }
`
