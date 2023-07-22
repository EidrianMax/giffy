import { StyledFormErrorMessage } from './style'

export default function FormErrorMessage ({ children }) {
  return (
    <StyledFormErrorMessage role='alert'>
      {children}
    </StyledFormErrorMessage>
  )
}
