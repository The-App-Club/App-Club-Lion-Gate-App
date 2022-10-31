import { css } from '@emotion/css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { useMemo } from 'react';

const motionConfig = {
  initial: {
    x: 0,
    y: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  hide: {
    x: 0,
    y: 60,
    opacity: 0,
  },
};

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const bg = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [`#509DCD`, `#338BC5`, `#0778B9`, `#006AB2`, `#0159AA`, `#01489C`]
  );

  // useEffect(() => {
  //   scrollYProgress.onChange((lastValue) => {
  //     console.log(lastValue);
  //   });
  //   return () => {
  //     scrollYProgress.clearListeners();
  //   };
  // }, [scrollYProgress]);

  return (
    <motion.div
      style={{
        background: bg,
      }}
      variants={motionConfig}
      initial={'initial'}
      animate={'animate'}
      exit={'hide'}
      transition={{
        duration: 0.4,
        ease: 'easeInOut',
      }}
      className={css`
        position: relative;
        width: 100%;
      `}
      onAnimationStart={(e) => {}}
      onAnimationComplete={(e) => {}}
    >
      {children}
    </motion.div>
  );
};

export { Layout };
