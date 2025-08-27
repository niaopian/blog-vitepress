import DefaultTheme from 'vitepress/theme';
import './style/index.css'
import 'virtual:group-icons.css' //代码组样式
// import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
// import 'nprogress-v2/dist/index.css' // 进度条样式
import { h } from 'vue' // h函数
import { useData , useRoute } from 'vitepress'

import { onMounted, watch, nextTick } from 'vue';

// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,
  enhanceApp({app , router }) {
    //彩虹动画
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true },
      )
    }

  },
  
  
  
};

// 彩虹背景动画样式
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}

// if (inBrowser) {
//       NProgress.configure({ showSpinner: false })
//       router.onBeforeRouteChange = () => {
//         NProgress.start() // 开始进度条
//       }
//       router.onAfterRouteChanged = () => {
//          busuanzi.fetch()
//          NProgress.done() // 停止进度条
//       }
// }