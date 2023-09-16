import { forwardRef } from 'react'
import { IconWithColor } from '.'

const ShortArrowIcon = forwardRef<SVGSVGElement | null, IconWithColor>(
  function Arrow(props, ref) {
    const { size, color } = props
    return (
      <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <path
            d="M7 17L17 7M17 7H8M17 7V16"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{' '}
        </g>
      </svg>
    )
  },
)

export default ShortArrowIcon
