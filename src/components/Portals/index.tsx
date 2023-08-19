/* eslint-disable react-hooks/exhaustive-deps */
import {FC, ReactNode, useState, useEffect} from 'react'
import {createPortal} from 'react-dom'

type WithChildren = {
  children?: ReactNode
}
const Portal: FC<{className?: string} & WithChildren> = ({children, className = ''}) => {
  const [container] = useState(document.createElement('div'))

  if (className) container.classList.add(className)

  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return createPortal(children, container)
}

export {Portal}