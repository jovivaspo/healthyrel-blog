import React from "react"
import { useEffect } from "react"

const usePosition = ref => {
  const [position, setPostion] = React.useState({})
  const [height, setHeight] = React.useState(70)

  useEffect(() => {
    const handlerPosition = () => {
      setPostion({
        x: ref.current.getBoundingClientRect().x,
        width: ref.current.getBoundingClientRect().width,
      })
    }

    const handlerHight = () => {
      const heightPrev = height
      setHeight(window.scrollY + heightPrev)
    }

    handlerPosition()

    window.addEventListener("resize", handlerPosition)
    document.addEventListener("scroll", handlerHight)

    return () => {
      document.removeEventListener("scroll", handlerHight)
      window.removeEventListener("resize", handlerPosition)
    }
  }, [ref.current])

  return { position, height }
}

export { usePosition }
