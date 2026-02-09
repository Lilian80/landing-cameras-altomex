// hooks/useScrollTracking.ts
import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

export const useScrollTracking = () => {
  const trackedMilestones = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = Math.round((scrolled / scrollHeight) * 100);

      // Rastreia marcos de 25%, 50%, 75%, 90%, 100%
      const milestones = [25, 50, 75, 90, 100];
      
      milestones.forEach(milestone => {
        if (percentage >= milestone && !trackedMilestones.current.has(milestone)) {
          trackedMilestones.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};