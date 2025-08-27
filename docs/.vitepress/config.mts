import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { nav,sidebar } from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 标题（浏览器后缀）
  title: "zen1th",
  // 描述
  description: "我的技术博客",
  // 语言
  lang: 'zh-CN',
  // 根目录，如果需要部署成https://github.com/blog/的形式，则设置/blog/
  base: '/',
  // 文档最后更新时间展示
  lastUpdated: true,
  // 去除浏览器链接中的.html后缀
  cleanUrls: true,
  // markdown显示行数
  markdown: {
    lineNumbers: true,
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    config(md) { 
      md.use(groupIconMdPlugin) //代码组图标
    },
  },
  vite: { 
    plugins: [
      groupIconVitePlugin() //代码组图标
    ],
  },
  srcDir: 'src',
  sitemap: {
    hostname: 'http:/blog.zen1th.vip',
  },
  //appearance: true,
  // head设置
  head: [
    // 浏览器中图标
    ["link", {rel: "icon", href: "/logo.ico"}],
    // 添加百度统计代码
    // ['script', {},
    // `
    //   var _hmt = _hmt || [];
    //   (function() {
    //     var hm = document.createElement("script");
    //     hm.src = "https://hm.baidu.com/hm.js?自己申请";
    //     var s = document.getElementsByTagName("script")[0]; 
    //     s.parentNode.insertBefore(hm, s);
    //   })();
    // `
    // ]
  ],
  // 主题设置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 左上角logo
    logo: '/favicon.png',
    externalLinkIcon: true,
    // 首页右上角导航栏
    nav,
    // 文章左侧导航栏
    sidebar,
    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录', 
    //返回顶部文字修改
    returnToTopLabel:'返回顶部', 
    // 文章底部导航栏的自定义配置，默认是英语
    docFooter: {
			prev: '上一篇',
			next: '下一篇',
		},
    // 文章右侧目录展示级别和标题
    outline: {
      level: [2, 4],
      label: '文章目录'
    },
    // 文章更新时间的前缀文本
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // 开启本地搜索（左上角）
    search: {
      provider: 'local',
    },
    // 右上角Github链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/niaopian' }
    ],
    footer: {
      message: '本博客框架为 <a href="https://vitepress.dev/zh/">VitePress</a>',
			copyright: 'Copyright © 2025-${new Date().getFullYear()} <a href="https://github.com/niaopian">zen1th</a>',
		}
  }
})
