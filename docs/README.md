---
home: true
title: 首页
actions:
  - text: Web版 文档
    link: /docs/web/
    type: secondary
  - text: 学习笔记
    link: /notes/
    type: primary
features:
  - title: 文档和搜索 🔍
    details: 桌面版文档内容搬运自 MicroCity 项目文档并稍作适应性修改，在这里可以使用网站提供的搜索功能快速查找并跳转至内容
  - title: 学习笔记 📔
    details: 除了文档，还有 MicroCity Web/Desktop 使用和学习过程中的一些踩坑总结和记录，帮助你尽可能多地避开天坑
  - title: 高颜值，流畅 ✨
    details: VuePress 驱动的独立网站，提供流畅阅读和文档参考体验。支持以 PWA 方式安装为应用，随时查阅，不受网络限制

head:
  - [meta, { name: description , content: MicroCity学习笔记，提供流畅舒适的文档搜索和学习体验。可以使用网站提供的搜索功能快速查找并跳转至内容。除了文档，还有MicroCity使用和学习过程中的一些踩坑总结和记录，帮助你尽可能多地避坑。 }]
---

## 开始使用MicroCity Web
![GitHub last commit](https://img.shields.io/github/last-commit/microcity/microcity.github.io) 

1. 打开[MicroCity Web](https://microcity.github.io/)，默认加载方块旋转的示例代码。

2. 点击运行![Play](./images/note/play.svg)按钮运行代码
 
3. 程序运行，看到右侧视图中方块旋转。

更多MicroCity的使用方法可以参考本站翻译的 [**MicroCity Web中文文档**](./docs/web/)。

如果想要深入了解 MicroCity Web 的用法和使用技巧，可以参考本站提供的 [**学习笔记**](./notes/)

还可以参考老师的[**教材**](https://microcity.github.io/book/)，介绍了很多算法

![GitHub last commit](https://img.shields.io/github/last-commit/microcity/book)

## 开始使用MicroCity Desktop
![GitHub release (latest by date)](https://img.shields.io/github/v/release/microcity/Desktop) ![GitHub release (by tag)](https://img.shields.io/github/downloads/microcity/Desktop/latest/total)

1. 转到MicroCity的文档仓库下载 [**MicroCity的最新版本**](https://github.com/microcity/Desktop/releases/latest)

2. 打开 ![icon](./images/doc/icon_script_editor.png)**ScriptEditor** 并输入:  
```lua:no-line-numbers
Print("hello, world!")
```

3. 将脚本另存为 **test.mcs** 并将其拖入 ![icon](./images/doc/icon_microcity.png)**MicroCity**

4. 在程序主界面左侧转到 **Modules** 标签页，打开 ![icon](./images/doc/icon_module_file.png)**test** ，双击其中的 ![icon](./images/doc/icon_module.png)**main** ，执行刚刚编写的脚本。 

5. 程序界面下方的 **Messages** 栏中会输出执行脚本的信息。  

更多MicroCity的使用方法可以参考本站搬运自GitHub的文档：[**MicroCity文档**](./docs/web/)，也可以参考 [MicroCtiy](https://microcity.github.io/) 在GitHub上的文档。

## [MicroCityNotes](https://github.com/huuhghhgyg/MicroCityNotes) 仓库

![GitHub last commit](https://img.shields.io/github/last-commit/huuhghhgyg/MicroCityNotes) ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/huuhghhgyg/MicroCityNotes/DeployPage.yml?branch=main) [![Netlify Status](https://api.netlify.com/api/v1/badges/fe05238c-93ee-44db-84cf-7f805d43520a/deploy-status)](https://app.netlify.com/sites/microcitynotes/deploys)

<A2hs/>

国内用户如果不方便访问 GitHub 也可以访问本站在 Netlify 上搭建的 [**同步站点**](https://mcn.zhhuu.top)，如果 GitHub Pages 上的 MicroCity Web 在线环境无法访问，可以尝试使用本站提供部署在 CloudFlare 上的分支版本 [**在线环境**](https://mcw.zhhuu.top)。

如果发现文档或笔记有问题，欢迎 [Pull Request](https://github.com/huuhghhgyg/MicroCityNotes/pulls) 或者提供 [Issues](https://github.com/huuhghhgyg/MicroCityNotes/issues) 让它变得更完善😋