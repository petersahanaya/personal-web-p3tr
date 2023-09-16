'use client'

import Center from '@component/center'
import { fadeIn } from '@animation/fade'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { slideUp } from '@/animations/slide'

const words = [
  'Hello',
  'Bonjour',
  'Ciao',
  'Olà',
  'やあ',
  'Hallå',
  'Guten tag',
  'Halo',
]

const PreLoader = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index == words.length - 1) return
    setTimeout(
      () => {
        setIndex(index + 1)
      },
      index == 0 ? 1000 : 150,
    )
  }, [index])

  return (
    <motion.main
      variants={slideUp}
      animate="visible"
      initial="hidden"
      exit="exit"
      className="fixed left-0 top-0 z-30 h-screen w-screen bg-stone-950"
    >
      <Center>
        <motion.p className="text-7xl text-stone-300" variants={fadeIn}>
          {words[index]}
        </motion.p>
      </Center>
    </motion.main>
  )
}

export default PreLoader
