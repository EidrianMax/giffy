import { useState } from 'react'
import useUser from '@/hooks/useUser'
import Modal from '../Modal'
import Login from '../Login'
import { StyledFav } from './styles'

export default function Fav ({ gifId }) {
  const { isLogged, addFav, removeFav, favs } = useUser()
  const [modal, setModal] = useState(false)

  const isFaved = favs.some(fav => fav === gifId)

  const handleClick = () => {
    if (!isLogged) return setModal(true)

    if (!isFaved) {
      return addFav({ gifId })
    } else {
      return removeFav({ gifId })
    }
  }

  const handleCloseModal = () => setModal(false)

  const [
    label,
    emoji
  ] = isFaved
    ? [
        'Remove Gif from Favorites',
        'x'
      ]
    : [
        'Add Gif from favorites',
        '♥'
      ]

  return (
    <>
      <StyledFav onClick={handleClick}>
        <span role='img' aria-label={label}>{emoji}</span>
      </StyledFav>
      {modal && <Modal onClose={handleCloseModal}><Login onCloseModal={handleCloseModal} /></Modal>}
    </>
  )
}
