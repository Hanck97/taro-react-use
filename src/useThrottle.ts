import { useEffect, useState } from 'react';
import { useThrottleFn } from './useThrottleFn';


/**
 * @description 函数节流
 * @param value 
 * @param delay 
 */
export const useThrottle =(value: string | number | boolean, delay: number = 300)=>{
  const [throttled, setThrottled] = useState(value);

  const { run } = useThrottleFn(() => {
      setThrottled(value);
    }, delay);
  
    useEffect(() => {
      run();
    }, [value]);
  
    return throttled; 
}

