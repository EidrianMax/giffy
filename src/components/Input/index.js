import styled from '@emotion/styled'

export const Input = styled.input`
  border: 1px solid white;
  padding: .5rem .8rem;
  border-radius: 0.2rem;
`

export const Select = Input.withComponent('select')
