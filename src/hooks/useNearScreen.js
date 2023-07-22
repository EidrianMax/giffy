import { useEffect, useRef, useState } from 'react'

export default function useNearScreen ({ distance = '0px', externalRef, once = true } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false)

  const fromRef = useRef()

  useEffect(() => {
    const elementToObserve = externalRef ? externalRef.current : fromRef.current

    const callback = (entries, observer) => {
      const el = entries[0]

      if (el.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setIsNearScreen(false)
      }
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: distance
    })

    if (elementToObserve) observer.observe(elementToObserve)

    return () => observer.disconnect()
  })

  return { isNearScreen, fromRef }
}
