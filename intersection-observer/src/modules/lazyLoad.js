/**
 * @method lazyLoad
 * @param {NodeList} $imgList      图片元素集合
 * @param {number}   preloadHeight 预加载高度
 */
export function lazyLoad($imgList, preloadHeight = 1000) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { // 目标元素出现在 root 可视区，返回 true
        const $target = entry.target
        const src = $target.getAttribute('lazyload')

        if (src) {
          $target.setAttribute('src', src) // 真正加载图片
        }
        observer.unobserve($target) // 解除观察
      }
    })
  }, {
    rootMargin: `0px 0px ${preloadHeight}px 0px`,
  })

  Array.prototype.forEach.call($imgList, ($item) => {
    if ($item.getAttribute('src')) return // 过滤已经加载过的图片
    observer.observe($item) // 开始观察
  })
}
