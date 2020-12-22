import { useEffect, useRef, useCallback } from 'react';

/**
 * @description 函数节流
 * @param fn 
 * @param delay 
 */
export const useThrottleFn = <T, U extends any[]>(fn: (...args) => T, delay: number = 200) => {
  const _wait = delay || 0;
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const fnRef = useRef(fn);
  fnRef.current = fn;

  const currentArgs = useRef([]);

  const cancel = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = undefined;
  }, [])

  const run = useCallback((...args) => {
    currentArgs.current = args;
    if (!timer.current) {
      timer.current = setTimeout(() => {
        fnRef.current(...args);
        timer.current = undefined;
      }, _wait)
    }
  }, [_wait, cancel])

  useEffect(() => cancel, []);

  return {
    run,
    cancel
  }
}