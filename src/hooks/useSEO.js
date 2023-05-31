import { useEffect, useRef } from 'react'

export default function useSEO ({ title, description }) {
  const prevTitle = useRef(document.title)
  const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))

  useEffect(() => {
    const previousTitle = prevTitle.current

    if (title) {
      document.title = `${title} | Giffy`
    }

    return () => (document.title = previousTitle)
  }, [title])

  useEffect(() => {
    const previousDescription = prevDescription.current

    if (description) {
      document.querySelector('meta[name="description"]').setAttribute('content', description)
    }

    return () => document.querySelector('meta[name="description"]').setAttribute('content', previousDescription)
  }, [description])
}
