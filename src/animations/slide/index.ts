import { easeOutQuart } from '../fade'

export const slideUp = {
  visible: {},
  hidden: {},
  exit: {
    y: '-100%',
    transition: {
      type: 'tween',
      duration: 1.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
}

export const slideUpLanding = {
  visible: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
      delay: 2,
      when: 'beforeChildren',
    },
  },
  hidden: {
    y: 300,
  },
}

export const slideDown = {
  visible: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 1,
      ease: easeOutQuart,
      delay: 4.5,
      when: 'beforeChildren',
    },
  },
  hidden: {
    y: -100,
  },
}
