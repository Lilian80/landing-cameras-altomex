// hooks/useTimeOnPage.ts
import { useEffect, useRef } from 'react';
import { trackTimeOnPage } from '@/lib/analytics';

export const useTimeOnPage = () => {
  const startTime = useRef<number>(Date.now());

  useEffect(() => {
    const handleUnload = () => {
      const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);
      trackTimeOnPage(timeSpent);
    };

    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, []);
};