interface ButtonProps {
  text: string
}

export const Button = (props: ButtonProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-pink-100 to-gray-100 p-[2px] rounded-sm">
      <button className="bg-blue-200 text-xl px-5 py-1 md:py-2 font-bold rounded-sm">
        {props.text}
      </button>
    </div>
  )
}
