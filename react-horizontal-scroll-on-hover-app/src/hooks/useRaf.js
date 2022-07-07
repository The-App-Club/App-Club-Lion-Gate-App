import {useState, useEffect, useRef} from 'react';
let speed = 0;
// https://bit.dev/giladshoham/react-hooks/use/use-raf/~code#src/useRaf.ts
const useRaf = ({ref}, callback) => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const speedRef = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = (time) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      // https://stackoverflow.com/questions/5195402/outerwidth-without-jquery

      const maxScrollWidth = ref.current.scrollWidth - ref.current.offsetWidth;
      callback({
        elapsedTime: deltaTime,
        maxScrollWidth,
        speed,
      });
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e) => {
    // -50 <<< 0 <<< 50
    const mouseX = e.pageX - ref.current.offsetLeft;
    const mouseperc = (100 * mouseX) / ref.current.offsetWidth;
    speedRef.current = mouseperc - 50;
    speed = mouseperc - 50;
  };

  const handleMouseLeave = (e) => {
    speed = 0;
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    ref.current.addEventListener('mousemove', handleMouseMove);
    ref.current.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      cancelAnimationFrame(requestRef.current);
      ref.current.removeEventListener('mousemove', handleMouseMove);
      ref.current.removeEventListener('mousemove', handleMouseLeave);
    };
  }, []);
};

export {useRaf};
