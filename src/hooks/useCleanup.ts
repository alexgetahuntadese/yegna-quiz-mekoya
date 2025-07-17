
import { useEffect, useRef } from 'react';

interface CleanupFunction {
  (): void;
}

export const useCleanup = () => {
  const cleanupFunctions = useRef<CleanupFunction[]>([]);

  const addCleanup = (fn: CleanupFunction) => {
    cleanupFunctions.current.push(fn);
  };

  const cleanup = () => {
    cleanupFunctions.current.forEach(fn => {
      try {
        fn();
      } catch (error) {
        console.error('Error during cleanup:', error);
      }
    });
    cleanupFunctions.current = [];
  };

  useEffect(() => {
    return cleanup;
  }, []);

  return { addCleanup, cleanup };
};

export const useTimer = (callback: () => void, delay: number, dependencies: any[] = []) => {
  const { addCleanup } = useCleanup();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const intervalRef = useRef<NodeJS.Timeout>();

  const startTimer = () => {
    clearTimer();
    timeoutRef.current = setTimeout(callback, delay);
    addCleanup(clearTimer);
  };

  const startInterval = () => {
    clearTimer();
    intervalRef.current = setInterval(callback, delay);
    addCleanup(clearTimer);
  };

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  useEffect(() => {
    return clearTimer;
  }, dependencies);

  return { startTimer, startInterval, clearTimer };
};
