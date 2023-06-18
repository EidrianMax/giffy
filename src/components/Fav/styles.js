import styled from '@emotion/styled'

export const StyledFav = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  border: none;
  cursor: pointer;

  background-color: rgba(200, 0, 0, .7);
  width: 25px;
  height: 25px;
  border-radius: 0.25em;
  font-size: 1.25rem;
  font-weight: bold;
  transition: all .1s ease-in;

  :hover {
    background-color: rgba(255, 0, 0, .9);
  }

  span {
    line-height: 25px;
  }
`
