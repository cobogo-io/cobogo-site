interface TelegramIconProps {
  size: number
}

export const TelegramIcon = (props: TelegramIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      fill="none"
      viewBox="0 0 41 35"
    >
      <path
        fill="#fff"
        d="M40.6 3.165l-6.104 29.502c-.46 2.082-1.66 2.6-3.367 1.62l-9.3-7.024-4.486 4.423c-.497.509-.912.935-1.87.935l.669-9.708L33.377 6.95c.75-.685-.163-1.064-1.165-.38L10.905 20.322l-9.172-2.943c-1.996-.638-2.032-2.045.415-3.026L38.027.185c1.66-.638 3.114.38 2.573 2.98z"
      ></path>
    </svg>
  )
}
