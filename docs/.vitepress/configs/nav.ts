/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    { text: '首页', link: '/' },
      { text: '我的简历', link: '/myresume' },
      // {
      //   text: '本站',
      //   items: [
      //     { text: '关于我', link: '/aboutme' },
      //     { text: '我的简历', link: '/myresume' },
      //     { text: '本站搭建', link: '/aboutsite' }
      //   ]
      // },
      // {
      //   text: '环境配置',
      //   items: [
      //     { text: 'mac配置一步到位', link: '/mac配置一步到位' },
      //   ]
      // },
      // {
      //   text: '学习笔记',
      //   items: [
      //     { text: 'Linux学习', link: '/Linux学习' },
      //     { text: 'git', link: '/常用git操作' }
      //   ]
      // },
      { text: '我的生活', link: 'http://life.zen1th.vip' }
      // {    // 下拉菜单形式示例
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // }
]