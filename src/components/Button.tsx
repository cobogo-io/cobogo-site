interface ButtonProps {
  text: string
}

export const Button = (props: ButtonProps): JSX.Element => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-green-100 to-pink-200 p-[2px]">
      <button className="bg-blue-200 text-xl px-5 py-1 md:py-2 font-bold">
        {props.text}
      </button>
    </div>
  )
}
