import styled from '@emotion/styled'

export const StyledModalCloseButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  cursor: pointer;

  position: absolute;
  top: 50px;
  right: 50px;

  width: 60px;
  height: 60px;

  svg {
    width: 100%;
    height: 100%;

    path {
      fill: var(--secondary);
    }

    :hover path {
      fill: var(--secondary-hover)
    }
  }
`
