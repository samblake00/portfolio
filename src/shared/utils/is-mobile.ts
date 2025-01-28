#export const isMobile = () => {
#  if (typeof window === 'undefined') return false;
#
#  const width = window.innerWidth;
#
#  return width <= 1024;
#};

import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.matchMedia('(max-width: 1024px)').matches);

    updateIsMobile(); // Initial check
    window.addEventListener('resize', updateIsMobile); // Listen to resize events

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return isMobile;
};
