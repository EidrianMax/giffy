import { createPortal } from 'react-dom'
import { StyledModal, ModalButtonClose } from './styles'
// import { Button } from '../Button/styles'

function Modal ({ onClose, children }) {
  return (
    <StyledModal>
      <div className='modal-content'>{children}</div>
      <ModalButtonClose onClick={onClose}>✖</ModalButtonClose>
    </StyledModal>
  )
}

export default function ModalPortal ({ onClose, children }) {
  return createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('modal-root')
  )
}
