import { useState, useEffect } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (target: EventTarget | null) => {
      setWidth((target as Window).innerWidth);
    };
    window.addEventListener('resize', (e) => handleResize(e.target));
    return () => {
      window.removeEventListener('resize', (e) => handleResize(e.target));
    };
  }, []);

  return {
    width,
  };
};
