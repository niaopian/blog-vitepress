---
title: 本站搭建
lastUpdated: true
footer: false
sidebar: true
prev: false
next: false
---
# 本站搭建
本文只记录我的基础搭建步骤，详细/进阶教程查看下方参考。

本文命令基于mac，windows安装volta请查看下方参考。
## 本站搭建参考
- [Golonez Blog - VitePress博客基础搭建](https://blog.goalonez.site/blog/VitePress%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA.html)
- [Yiov - VitePress搭建与美化教程](https://vitepress.yiov.top/)
- [VitePress 官方教程 - 快速开始](https://vitepress.dev/zh/guide/getting-started)

## 开始
安装nodejs
```sh
curl https://get.volta.sh | bash  // 安装volta

volta install node@22.18.0        // 通过volta安装nodejs
```

创建你的博客目录
```sh
mkdir blog
cd blog/
```
安装一下vitepress并初始化
```sh
npm add -D vitepress
npx vitepress init
```
```sh
T   Welcome to VitePress!
|
o  Where should VitePress initialize the config?
|  ./docs
|
o  Site title:
|  这里填你的标题
|
o  Site description:
|  这里填描述
|
o  Theme:
|  Default Theme
|
o  Use TypeScript for config and theme files?
|  Yes
|
o  Add VitePress npm scripts to package.json?
|  Yes
|
—  Done! Now run npm run docs:dev and start writing.
```

添加gitignore
```sh
echo node_modules >> .gitignore
echo cache >> .gitignore
echo dist >> .gitignore
```

此时的目录结构
```sh
~/Documents/github/blog » tree -aI 'node_modules|package-lock.json' 

.
├── .gitignore
├── docs
│   ├── .vitepress
│   │   └── config.mts
│   ├── api-examples.md
│   ├── index.md
│   └── markdown-examples.md
└── package.json
```

## 目录优化
配置文件位于 `docs/.vitepress/config.mts`

---
### 导航栏\侧边栏单独文件配置
创建configs目录和内部三个文件
```sh {4-7}
.
└── .vitepress
    ├── config.mts
    └── configs         
        ├── index.ts    
        ├── nav.ts      
        └── sidebar.ts  
```
为这三个文件填充以下内容
```ts
/* configs/index.ts */
export * from './nav.ts'
export * from './sidebar.ts'
```
```ts
/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    { text: 'Home', link: '/' },
    { text: 'Examples', link: '/markdown-examples' }
]
```
```ts
/* configs/sidebar.ts */
import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
    {
        text: 'Examples',
        items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
        ]
    }

]
```


对`config.mts`文件添加、修改
```ts {2,10,11}
import { defineConfig } from 'vitepress'
import { nav,sidebar } from './configs'         // 添加这个声明

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,        // nav设置只需要一个标记
    sidebar,    // sidebar设置只需要一个标记
...
...
```
此后只需要操作`.vitepress/configs/nav.ts`和`sidebar.ts`即可配置导航栏和侧边栏

---
### srcDir源目录设置
将`markdown文件`和`静态资源目录public`移动到`src文件夹`下
```sh {4-8}
.
└── .vitepress
    ├── config.mts
    └── src
        ├── api-examples.md
        ├── index.md
        ├── markdown-examples.md
        └── public
```

在`config.mts`设置src目录为源文件目录
```sh {6}
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",

  srcDir: 'src',    // 设置资源目录

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
...
...
...
```

从此以后，新建页面就在src目录下，静态资源存放在public目录下

## 更多
更多配置和美化请参考
[Yiov - VitePress搭建与美化教程](https://vitepress.yiov.top/)






## 其他主题

我觉得不错的博客主题

[bigfa -  - hera](https://github.com/bigfa/hera)
还有Hugo版本，目前版本落后

[liaocp666 - Typecho -Jasmine](https://github.com/liaocp666/Jasmine)

[idealclover -  Astro - homepage](https://github.com/idealclover/homepage)
自托管个人主页，很好看的风格

[Fueko - Ghost - ikken](https://ghost-themes.com/theme/ikken/)
主打大图的摄影博客

[Tokinx - WordPress - Wing](https://github.com/Tokinx/Wing)

[CaiJimmy - Hugo - stack](https://github.com/CaiJimmy/hugo-theme-stack)