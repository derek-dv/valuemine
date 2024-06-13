import React from 'react'

function useAnimate() {
    
    const container = {
        hidden:{opacity:0},
        show: {
          opacity:1,
            transition: {
            // delayChildren:0,
          staggerChildren: 0.35,
        },
      },
    };
    
  const item = {
    hidden: { opacity: 0, y: 50, x: 50 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        ease: [0.6, 0.01, 0.25, 0.95],
        duration: 1.8,
      },
    },

      exit: {
    opacity: 0,
    y: -50,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
  }

  const generateLetterVariants = (index) => ({
    hidden: { opacity: 0, y: 100, x: 100 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        ease: [0.6, 0.01, 0.25, 0.95],
        duration: 1.89,
        delay: index * 0.025,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  });
  const imageVariants = {
    initial: { y: 500 },
    animate: { y: -400 },
  }
  const serviceAnimate = (index) => ({
    hidden: { opacity: 0, y: 50, x: 50 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        ease: [0.6, 0.01, 0.25, 0.95],
        duration: 0.3,
        delay:index
      },
    }
  })

  return  {item,container,serviceAnimate,generateLetterVariants,imageVariants}
}

export default useAnimate