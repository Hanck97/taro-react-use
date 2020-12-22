import { useState } from 'react';
import { useDidHide, useDidShow } from "@tarojs/taro";

/**
 * @description 监听小程序 onShow, onHide 生命周期
 */
export function usePageShow() {
  const [pageShow, setPageShow] = useState(false);

  useDidShow(() => {
    setPageShow(true);
  })

  useDidHide(() => {
    setPageShow(false);
  })
  
  return pageShow;
}