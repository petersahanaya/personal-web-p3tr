'use client'

import { ReactChildrenWithClass } from '@type/type'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Spacing = forwardRef<HTMLDivElement | null, ReactChildrenWithClass>(
  function Spacing(props, ref) {
    return (
      <section
        ref={ref}
        className={twMerge(
          `flex h-full w-full items-center justify-between ${props.className}`,
        )}
      >
        {props.children}
      </section>
    )
  },
)

export default Spacing
