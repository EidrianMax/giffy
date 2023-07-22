import { createPortal } from 'react-dom'
import { StyledModal } from './styles'
import ModalCloseButton from './ModalCloseButton'

function Modal ({ children, onClose }) {
  return (
    <StyledModal>
      <div>
        {children}
        <ModalCloseButton onClose={onClose} />
      </div>
    </StyledModal>
  )
}

export default function PortalModal ({ children, onClose }) {
  return createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('root-modal')
  )
}
