import styled from '@emotion/styled'
import { Button } from '../Button/styles'

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(red, rgb(197, 222, 197), blue, 0.8);
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const ModalButtonClose = styled(Button)`
  position: absolute;
  top: 25px;
  right: 25px;
`
