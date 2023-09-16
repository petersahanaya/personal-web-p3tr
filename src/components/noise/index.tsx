'use client'

import { ReactChildrenWithClass } from '@/types/type'

const Noise = ({ children, className }: ReactChildrenWithClass) => {
  return (
    <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>

      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  )
}

export default Noise