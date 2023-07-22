import styled from '@emotion/styled'

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index-modal);
  display: grid;
  place-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--background-opacity);
  backdrop-filter: blur(10px);
`
