export const easeOutQuart = [0.25, 1, 0.5, 1];

export const fadeInLeft = {
  visible: (idx: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      staggerChildren: 0.05,
      ease: easeOutQuart,
    },
  }),
  hidden: {
    x: 80,
    opacity: 0,
  },
};

export const fadeIn = {
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      // delay: 0.3,
      ease: easeOutQuart,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const fadeUp = {
  visible: (i: number) => ({
    y: 0,
    transition: {
      ease: easeOutQuart,
      duration: 1,
      delay: 0.05 * i,
    },
  }),
  hidden: {
    y: 100,
  },
};

export const fadeUpTitle = {
  visible: (i: number) => ({
    y: 0,
    transition: {
      ease: easeOutQuart,
      duration: 1.5,
      delay: 0.1 * i,
    },
  }),
  hidden: {
    y: 400,
  },
};

export const fadeUpLongDescription = {
  visible: (i: number) => ({
    y: 0,
    transition: {
      ease: easeOutQuart,
      duration: 0.6,
      delay: 0.05 * i,
    },
  }),
  hidden: {
    y: 100,
  },
};
