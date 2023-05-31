// sin useRef
// import { useEffect, useState } from 'react'

// export default function LazyLoad () {
//   const [show, setShow] = useState(false)

//   useEffect(() => {
//     // second
//     const onChange = (entries) => {
//       const el = entries[0]

//       if (el.isIntersecting) {
//         setShow(true)
//       }
//     }

//     // fisrt
//     const intersection = new IntersectionObserver(onChange, {
//       rootMargin: '100px'
//     })

//     // third
//     intersection.observe(document.getElementById('element-to-observer'))
//   })

//   return <div id="element-to-observer">
//     {show && <h1>I should show when intersecting</h1> }
//   </div>
// }

// con useRef
// en vez de obtener el elemento por document.getElementById podemos recuperar la referencia del elemento utilizando el hook useRef
import { useEffect, useState, useRef } from 'react'

export default function LazyLoad () {
  const [show, setShow] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    // second
    const onChange = (entries, observer) => {
      const el = entries[0]

      if (el.isIntersecting) {
        setShow(true)

        // fourth
        observer.disconect()
      }
    }

    // fisrt
    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px'
    })

    // third
    observer.observe(elementRef.current)

    // fourth
    return () => observer.disconect()
  })

  return <div ref={elementRef}>
    {show && <h1>I should show when intersecting</h1> }
  </div>
}
