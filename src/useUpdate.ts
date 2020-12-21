import { useEffect, useRef, DependencyList } from 'react';

/**
 * @description 模拟 componentDidUpdate: 在更新发生后立即被调用。 这个方法在第一次渲染时不会被调用
 * @param fn 执行回调函数
 * @param deps 
 */
export function useUpdate(fn: Function, deps: DependencyList =[]) {
  const isFirst = useRef(false);

  useEffect(() => {
    if (!isFirst.current) {
      isFirst.current = true;
    } else {
      fn();
    }
  }, deps);
};

