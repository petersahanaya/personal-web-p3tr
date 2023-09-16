'use client'

import { AnimatePresence } from 'framer-motion'
import PreLoader from '@component/preloader'
import { useEffect, useState } from 'react'

const Loader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)

      document.body.style.cursor = 'default'
      window.scrollTo(0, 0)
    }, 2000)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">{loading && <PreLoader />}</AnimatePresence>
    </>
  )
}

export default Loader
