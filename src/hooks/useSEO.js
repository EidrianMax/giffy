import { useEffect, useRef } from 'react'

export default function useSEO ({ title, description }) {
  const prevTitle = useRef(document.title)
  const prevDescriptionContent = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))

  useEffect(() => {
    const previousTitle = prevTitle.current

    if (title) {
      document.title = `${title} | Giffy`
    }

    return () => {
      document.title = previousTitle
    }
  }, [title])

  useEffect(() => {
    const previousDescriptionContent = prevDescriptionContent.current
    const metaDescription = document.querySelector('meta[name="description"]')

    if (description) {
      metaDescription.setAttribute('content', description)
    }

    return () => {
      metaDescription.setAttribute('content', previousDescriptionContent)
    }
  }, [description])
}
