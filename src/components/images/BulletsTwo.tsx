import { motion } from 'framer-motion'

export const BulletsTwo = (): JSX.Element => {
  return (
    <svg
      width="369"
      height="164"
      viewBox="0 0 369 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden md:flex"
    >
      <motion.circle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        cx="233"
        cy="6"
        r="6"
        fill="#00B9E9"
      />
      <motion.circle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        cx="355"
        cy="53"
        r="14"
        fill="#5C8295"
      />
      <motion.circle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        cx="279"
        cy="146"
        r="18"
        fill="#BA68C8"
      />
      <motion.circle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        cx="12"
        cy="106"
        r="12"
        fill="#67A747"
      />
    </svg>
  )
}
