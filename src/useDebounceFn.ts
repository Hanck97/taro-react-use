import { useEffect, useRef, useCallback } from 'react';

/**
 * @description 函数防抖
 * @param fn 回调函数 
 * @param wait 间隔时间 
 */
export const useDebounceFn = <T, U extends any[]>(fn: (...args) => T, wait: number = 200) => {
  const _wait = wait || 0;

  const timer = useRef<ReturnType<typeof setTimeout>>();
  const fnRef = useRef(fn);
  fnRef.current = fn;

  const cancel = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  }, [])

  const run = useCallback((...args) => {
    cancel();
    timer.current = setTimeout(() => {
      fnRef.current(...args);
    }, _wait)
  }, [_wait, cancel])

  useEffect(() => cancel, []);

  return {
    run,
    cancel
  }
}