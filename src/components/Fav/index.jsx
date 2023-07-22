import useUser from '../../hooks/useUser'
import { StyledFav } from './style'
import { useState } from 'react'
import Modal from '../Modal'
import LoginForm from '../LoginForm'
import Heart from '../Icons/Heart'
import HeartBroken from '../Icons/HeartBroken'

export default function Fav ({ gifId }) {
  const { isLogged, gifsFavs, addFav, removeFav } = useUser()
  const [showModal, setShowModal] = useState(false)

  const isFav = gifsFavs.some(gifFav => gifFav === gifId)

  const handleClick = () => {
    if (!isLogged) return setShowModal(true)

    if (!isFav) {
      addFav({ gifId })
    } else {
      removeFav({ gifId })
    }
  }

  const closeModal = () => setShowModal(false)

  return (
    <>
      <StyledFav onClick={handleClick}>
        {!isFav ? <Heart /> : <HeartBroken />}
      </StyledFav>
      {showModal && !isLogged && (
        <Modal onClose={closeModal}>
          <LoginForm onCloseModal={closeModal} />
        </Modal>
      )}
    </>
  )
}
