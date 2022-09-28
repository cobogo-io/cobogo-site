import { motion } from 'framer-motion'

interface ButtonProps {
  text: string
}

export const Button = (props: ButtonProps): JSX.Element => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
      className="px-5 py-2 text-xl bg-gradient-to-r from-blue-100 via-green-100 to-pink-200 relative z-0 w-max"
    >
      <div className="bg-blue-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[151px] h-[40px] z-10"></div>
      <strong className="z-20 relative">{props.text}</strong>
    </motion.button>
  )
}
