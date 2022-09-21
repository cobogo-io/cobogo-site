interface FlywheelElementProps {
  text: string
  color: 'blue' | 'green' | 'gray' | 'pink'
  inverted?: boolean
  inRow?: boolean
}

export const FlywheelElement = (props: FlywheelElementProps): JSX.Element => {
  return (
    <div
      className={`flex items-center relative gap-3 hover:cursor-pointer ${
        props.inverted && props.inRow
          ? 'flex-row-reverse'
          : props.inverted
          ? 'flex-col-reverse'
          : props.inRow
          ? 'flex-row'
          : 'flex-col'
      }`}
    >
      <strong
        className={`absolute ${
          props.inverted && props.inRow
            ? 'right-[-80px]'
            : props.inverted
            ? 'bottom-[-50px]'
            : props.inRow
            ? 'left-[-120px]'
            : 'top-[-50px]'
        } text-2xl`}
      >
        {props.text}
      </strong>
      <div className="bg-white-100/5 w-14 h-14 rounded-full flex items-center justify-center">
        <div
          className={`bg-${props.color}-100 w-10 h-10 rounded-full flex items-center justify-center`}
        >
          <div className="bg-white-100/30 w-4 h-4 rounded-full" />
        </div>
      </div>
    </div>
  )
}
