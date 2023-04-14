interface ButtonProps {
  text: string
  borderColor: string
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`${props.borderColor} text-lg lg:text-xl h-[50px] px-[20px] border-2 py-1 w-max rounded-md font-bold`}
    >
      {props.text}
    </button>
  )
}
