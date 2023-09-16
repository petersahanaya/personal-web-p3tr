import { easeOutQuart } from '../fade'

export const scaleUp = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1,
      ease: easeOutQuart,
      delay: 4,
    },
  },
  hidden: {
    scale: 0,
    opacity: 1,
  },
}
