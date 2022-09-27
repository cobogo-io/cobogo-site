import { Dispatch, SetStateAction } from 'react'

type Element = null | 'Social' | 'Start' | 'Fundraise' | 'Ventures'

interface FlywheelElementProps {
  text: Element
  color: string
  inverted?: boolean
  inRow?: boolean
  elementOpened: Element
  setElementOpened: Dispatch<SetStateAction<Element>>
}

export const FlywheelElement = (props: FlywheelElementProps): JSX.Element => {
  return (
    <div
      className={`flex items-center relative gap-3 hover:cursor-pointer transition-all ${
        props.inverted && props.inRow
          ? 'flex-row-reverse'
          : props.inverted
          ? 'flex-col-reverse'
          : props.inRow
          ? 'flex-row'
          : 'flex-col'
      }`}
      onClick={() =>
        props.setElementOpened(
          props.text === props.elementOpened ? null : props.text
        )
      }
    >
      <strong
        className={`absolute ${
          props.inverted && props.inRow
            ? 'right-[-110px]'
            : props.inverted
            ? 'bottom-[-50px]'
            : props.inRow
            ? 'left-[-160px]'
            : 'top-[-50px]'
        } ${
          props.text === props.elementOpened ? 'text-4xl' : 'text-2xl'
        } transition-all`}
      >
        {props.text}
      </strong>
      <div
        className={`${
          props.text === props.elementOpened
            ? 'bg-white-100 w-20 h-20'
            : 'bg-white-100/5 w-14 h-14'
        }  rounded-full flex items-center justify-center transition-all`}
      >
        <div
          className={`${props.color} ${
            props.text === props.elementOpened
              ? 'w-[60px] h-[60px]'
              : 'w-10 h-10'
          } rounded-full flex items-center justify-center transition-all`}
        >
          <div
            className={`bg-white-100/30 ${
              props.text === props.elementOpened ? 'w-7 h-7' : 'w-4 h-4'
            } rounded-full transition-all`}
          />
        </div>
      </div>
    </div>
  )
}
