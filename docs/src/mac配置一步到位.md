---
title: mac配置一步到位
date: 2025-07-30 19:10:25
tags:
---
# mac配置一步到位 <Badge type="warning" text="beta" />

基于 macOS Sequoia 15.6
## 系统设置

### 访达

`cmd+,`进入设置

通用

* 开启新“访达”窗口时打开：`Home`目录 或者 `下载`目录

* 取消：`在标签页（而不是新窗口）中打开文件夹`

标签

* 删除所有标签，需要再创建

边栏

* 打开：`home`目录

高级

* 勾选：`显示所有文件扩展名`、``

* 取消：`更改扩展名之前显示警告`

* 执行搜索时：搜索当前文件夹

### 导航栏

显示

* 为列表

* 排序方式：修改日期

* 启用：`显示路径栏`、`显示状态栏`

* 查看显示选项

​	- 排序方式：修改日期

​	- 显示分栏：`添加日期`

​	- 取消：使用相对日期

​	- 点击用作默认



​		









允许任意来源app

```bash
sudo spctl --master-disable
```
执行后进入｜系统设置-隐私与安全性(下拉)-安全性-允许以下来源的应用程序｜选择任何来源

xcode命令行工具

```shell
sudo xcode-select --install
```
Homebrew
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

(echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/zen1th/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

```

brew install tree



brew install bash-completion

brew insatll inetutils

brew install wget

# 软件安装

```shell
brew install cask
brew install --cask iterm2
brew install --cask 1password
brew install --cask visual-studio-code
brew install --cask pixpin
brew install --cask macs-fan-control
brew install --cask popclip
brew install --cask maccy
brew install --cask little-snitch
brew install --cask iina
brew install --cask downie
brew install --cask termius
brew install --cask motrix
brew install --cask raycast
brew install --cask daisydisk
brew install --cask typora
brew install --cask balenaetcher
brew install --cask localsend
brew install --cask araxis-merge
brew install --cask easydict
brew install --cask rustdesk
brew install --cask go2shell
brew install --cask coteditor
brew install --cask google-chrome
brew install --cask neohtop
brew install --cask thunderbird
brew install --cask ifan
brew install --cask iocr
brew install --cask switchhosts
brew install --cask mihomo-party
brew install --cask vmware-fusion
brew install --cask utm
brew install --cask maczip
brew install --cask wechat
brew install --cask speedtest
brew install --cask jordanbaird-ice
sloth
logseq

things3 
右键助手专业版
ollama
appstore battery
senplayer
simplelive
百度网盘
app cleaner&uninstaller
网易云音乐

brew install --cask font-maple-mono-nf-cn  //安装iTerm2用字体
brew install --cask font-maple-mono  //安装编辑器字体



```





# app
vscode，pixpin，mac fans control，vnote，popclip，maccy，little snitch，iina，downie4，ntfs for mac，termius，iterm2，motrix，raycast，daisydisk，balenaetcher，app cleaner&uninstaller，neohtop，simple_live，localsend，araxis merge，ice，1password，easydict，vmware fusion，things3，rustdesk，sourcetree，keycastr，go2shell，右键助手，coteditor，福昕PDF，chrome，itsycal
以下是按分类整理的App列表，每个App单独成行，并包含描述、是否开源及官网网址：



# 软件配置

## Chrome

默认设置

​	自动填充密码改为1password

​	关闭



拓展脚本

​	tempromonkey







## 代码编辑
## 效率工具
## Finder拓展
## 系统工具
## 远程控制
## 笔记工具
## 磁盘管理
## 娱乐
## 邮件
## 密码管理
## 翻译
## 虚拟机
## 文件传输
## 网页视频提取
## 剪贴板