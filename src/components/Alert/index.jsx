import { StyledAlert } from './styles'

export default function Alert ({ children, status = '' }) {
  const STATUS = {
    success: '✔',
    error: '❌'
  }

  return (
    <StyledAlert status={status}>
      <span>{STATUS[status]}</span>
      {children}
    </StyledAlert>
  )
}
