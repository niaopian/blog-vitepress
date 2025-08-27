import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
    {
        text: '本站',
        items: [
          { text: '关于我', link: '/aboutme' },
          { text: '我的简历', link: '/myresume' },
          { text: '本站搭建', link: '/aboutsite' }
        ]
    },
    {
        text: '学习笔记',
        items: [
          { text: 'Linux学习', link: '/Linux学习' },
          { text: 'git', link: '/常用git操作' }
        ]
    },
    {
        text: '环境配置',
        items: [
          { text: 'mac配置一步到位', link: '/mac配置一步到位' },
        ]
    },
    // {
    //     text: 'Docker',
    //     // items: [
    //     //   { text: '关于我', link: '/aboutme' },
    //     //   { text: '我的简历', link: '/myresume' }
    //     // ]
    // },
    // {
    //     text: 'Linux/Nas/VPS',
    //     // items: [
    //     //   { text: '关于我', link: '/aboutme' },
    //     //   { text: '我的简历', link: '/myresume' }
    //     // ]
    // },
    {
        text: '杂项',
        items: [
          { text: 'tree命令', link: '/tree命令' },
          // { text: '我的简历', link: '/myresume' }
        ]
    }
]