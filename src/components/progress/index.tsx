'use client'

import { useRef } from 'react'
import { MagneticProps } from '../magnetic'
import React from 'react'
import { ReactChildren } from '@/types/type'

const ProgressInfinite = ({ children }: ReactChildren) => {
  const containerRef = useRef<HTMLEmbedElement | null>(null)

  return <></>
}

export default ProgressInfinite
