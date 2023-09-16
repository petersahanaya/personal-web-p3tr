'use client'

import { fadeIn } from '@animation/fade'
import { motion } from 'framer-motion'

const Blur = () => {
  return (
    <motion.main
      variants={fadeIn}
      animate="visible"
      initial="hidden"
      exit="hidden"
      className="fixed left-0 top-0 z-10 h-screen w-screen backdrop-blur-md"
    ></motion.main>
  )
}

export default Blur
