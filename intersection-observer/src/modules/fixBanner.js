/**
 * @method fixBanner
 * @param {HTMLElement} $observeEle 观察元素
 * @param {HTMLElement} $fixEle     固定定位元素
 */

export function fixBanner($observeEle, $fixEle) {
  const $ele = $fixEle
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $ele.style.cssText = ''
      } else {
        $ele.style.cssText = 'position: fixed; top: 0; left: 0'
      }
    })
  }, {
    threshold: 1, // threshold 设置为 1 表示目标元素完全可见时触发回调函数
  })

  observer.observe($observeEle) // 开始观察
}
