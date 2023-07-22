import styled from '@emotion/styled'

const STATUS = {
  success: 'success',
  error: 'error'
}

export const StyledAlert = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${props => {
    if (props.status === STATUS.success) return 'var(--success)'
    if (props.status === STATUS.error) return 'var(--error)'
  }};
  color: var(--text-1);
  border-radius: var(--border-radius);
`
