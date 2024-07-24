'use client'
import { useState, useEffect } from 'react';

const useScrollPercentage = (): { scrollPercentage: number; viewportWidth: number } => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const [viewportWidth, setViewportWidth] = useState<number>(0);

  useEffect(() => {
    const calculateScrollPercentage = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scrollable height
      const scrollableHeight = documentHeight - viewportHeight;

      // Calculate percentage
      const newScrollPercentage = scrollableHeight
        ? (scrollTop / scrollableHeight) * 100
        : 0;

      setScrollPercentage(newScrollPercentage);
    };

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    // Initial calculations
    calculateScrollPercentage();
    handleResize();

    // Add event listeners
    window.addEventListener('scroll', calculateScrollPercentage);
    window.addEventListener('resize', handleResize);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', calculateScrollPercentage);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { scrollPercentage, viewportWidth };
};

export default useScrollPercentage;
