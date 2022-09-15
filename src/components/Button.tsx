export const Button = (): JSX.Element => {
  return (
    <button className="px-5 py-2 text-xl bg-gradient-to-r from-blue-100 via-green-100 to-pink-100 relative z-0">
      <div className="bg-blue-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[151px] h-[40px] z-10"></div>
      <strong className="z-20 relative">Tell me more</strong>
    </button>
  )
}
