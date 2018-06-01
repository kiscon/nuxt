// 移动端适配方案
export function initScreen () {
  (function(window) {
    // 设置html元素的fontSize,
    function setFontSizeRem() {
      var clientWidth = html.getBoundingClientRect().width
      // 针对pad这些超宽屏，限制在540以内，避免被宽度严重拉伸导致难看
      clientWidth / dpr > 540 && (clientWidth = 540 * dpr)
      var cw10 = clientWidth / 10
      html.style.fontSize = cw10 + 'px'
    }
    var timer
    var doc = window.document
    var html = doc.documentElement
    var customMeta = doc.querySelector('meta[name="viewport"]')
    var dpr = 0
    var scale = 0
    if (customMeta) {  // 开发员已经设置了viewport的相关值
      console.warn('请注意：将根据已有的meta标签来设置缩放比例')
      // 获取开发员已经设定的initial-scale
      var customInitialScale = customMeta.getAttribute('content').match(/initial-scale=([\d]+)/)
      if (customInitialScale) {
        scale = parseFloat(customInitialScale[1])
        dpr = parseInt(1 / scale)
      }
    }
    if (!dpr && !scale) {
      var phone = (window.navigator.appVersion.match(/android/gi), window.navigator.appVersion.match(/iphone/gi))
      var windowDpr = window.devicePixelRatio
      dpr = phone ? windowDpr >= 3 && (!dpr || dpr >= 3) ? 3 : windowDpr >= 2 && (!dpr || dpr >= 2) ? 2 : 1 : 1
      scale = 1 / dpr
    }
    html.setAttribute('data-dpr', dpr)
    // 动态设置meta元素
    if (!customMeta) {
      customMeta = doc.createElement('meta')
      customMeta.setAttribute('name', 'viewport')
      customMeta.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no')
      if (doc.firstElementChild) {
        doc.firstElementChild.appendChild(customMeta)
      } else {
        var div = doc.createElement('div')
        div.appendChild(customMeta)
        doc.write(div.innerHTML)
      }
    }
    // 监听浏览器的缩放（物理尺寸调整）
    window.addEventListener('resize', function() {
      clearTimeout(timer)
      timer = setTimeout(setFontSizeRem, 300)
    }, false)
    // 监听前进、后退、load
    window.addEventListener('pageshow', function(e) {
      if (e.persisted) {
        clearTimeout(timer)
        timer = setTimeout(setFontSizeRem, 300)
      }
    }, false)
    setFontSizeRem()
  })(window)
}

