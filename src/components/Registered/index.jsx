import { WrapperRegistered } from './style'
import Alert from '../Alert'
import { ButtonLink } from '../Link/style'

export default function Registered () {
  return (
    <WrapperRegistered>
      <Alert status='success'>User register successfully</Alert>
      <ButtonLink href='/login'>Login</ButtonLink>
    </WrapperRegistered>
  )
}
