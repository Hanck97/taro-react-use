
import { useCallback } from 'react'
import Taro, { usePullDownRefresh } from '@tarojs/taro'

const sleep = (ms = 0) => new Promise<void>(resolve => setTimeout(resolve, ms))

/**
 * @description 监听用户下拉刷新事件, 回调完成后自动收起.
 * @param fn 执行回调函数
 * @param delay 最短间隔, 默认 300ms.
 */
export function usePullDownRefreshFn(fn: () => Promise<any>, delay = 300) {
  usePullDownRefresh(
    useCallback(async () => {
      try {
        await Promise.all([fn(), sleep(delay)])
      } catch (err) {
        throw err
      } finally {
        Taro.stopPullDownRefresh()
      }
    }, [fn, delay])
  )
}