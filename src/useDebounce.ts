import { useEffect, useState } from 'react';
import { useDebounceFn } from './useDebounceFn';

/**
 * @description 函数防抖
 * @param value 
 * @param wait 间隔时间 
 */
export const useDebounce = <T>(value: T, wait: number=300) => {
  const [debounced, setDebounced] = useState<T>(value);

  const { run } = useDebounceFn(() => {
    setDebounced(value);
  }, wait);

  useEffect(() => {
    run();
  }, [value]);

  return debounced;
}