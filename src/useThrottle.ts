import { useEffect, useState } from 'react';
import { useThrottleFn } from './useThrottleFn';


/**
 * @description 函数节流
 * @param value 
 * @param delay 
 */
export const useThrottle = <T>(value: T, delay: number = 300): T => {
  const [throttled, setThrottled] = useState(value);

  const { run } = useThrottleFn(() => {
      setThrottled(value);
    }, delay);
  
    useEffect(() => {
      run();
    }, [value]);
  
    return throttled; 
}

