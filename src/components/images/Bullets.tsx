import { motion } from 'framer-motion'

export const Bullets = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="851"
      height="504"
      fill="none"
      viewBox="0 0 851 504"
      className="absolute z-10 hidden md:flex"
    >
      <motion.circle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        cx="6"
        cy="85"
        r="6"
        fill="#00B9E9"
      ></motion.circle>
      <motion.circle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        cx="712"
        cy="6"
        r="6"
        fill="#BA68C8"
      ></motion.circle>
      <motion.circle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        cx="845"
        cy="384"
        r="6"
        fill="#6CB14B"
      ></motion.circle>
      <motion.circle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        cx="58"
        cy="498"
        r="6"
        fill="#5C8295"
      ></motion.circle>
    </svg>
  )
}
