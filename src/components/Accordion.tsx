import { ReactNode, useRef, useState } from 'react'

interface AccordionProps {
  title: ReactNode
  children: JSX.Element
}

export const Accordion = ({ title, children }: AccordionProps) => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')

  const contentSpace = useRef<any>(null)

  function toggleAccordion() {
    setActive(!active)
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
  }

  return (
    <div>
      <button
        className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between text-end"
        onClick={toggleAccordion}
      >
        <p className="inline-block font-bold text-2xl text-left">{title}</p>
      </button>

      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto duration-700 ease-in-out"
      >
        {children}
      </div>
    </div>
  )
}
