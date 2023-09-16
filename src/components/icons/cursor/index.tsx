'use client'

import { IconProps } from '../google'

const CursorIcon = ({ size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <path
          d="M10.9792 4.26973L4.59197 18.4636C4.10239 19.5516 3.85761 20.0955 3.9608 20.4146C4.05015 20.6908 4.2714 20.9042 4.55064 20.9836C4.87315 21.0753 5.40801 20.8112 6.47772 20.283L11.2921 17.9055C11.552 17.7771 11.682 17.713 11.8181 17.6877C11.9387 17.6653 12.0624 17.6653 12.183 17.6877C12.3192 17.713 12.4491 17.7771 12.709 17.9055L17.5234 20.283C18.5931 20.8112 19.128 21.0753 19.4505 20.9836C19.7298 20.9042 19.951 20.6908 20.0403 20.4146C20.1435 20.0955 19.8988 19.5516 19.4092 18.4636L13.0219 4.26973C12.6979 3.54967 12.5359 3.18964 12.3108 3.07837C12.1153 2.98169 11.8859 2.98169 11.6903 3.07837C11.4653 3.18964 11.3032 3.54967 10.9792 4.26973Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{' '}
      </g>
    </svg>
  )
}

export default CursorIcon
