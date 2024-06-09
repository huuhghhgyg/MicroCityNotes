# MicroCity的版本

MicroCity是一款简单快速的空间规划和建模软件，可用于数学模型构建求解和仿真实验，尤其适用于物流数字化建模领域。MicroCity 最初只有只能在 Windows 操作系统上运行的 Desktop 版本，后来出现了跨平台使用的需求，因此推出了 MicroCity Web 版本，它可以很好地运行在搭载 Chromium 内核的浏览器上。

## MicroCity
![GitHub release (latest by date)](https://img.shields.io/github/v/release/microcity/Desktop) [![GitHub release (by tag)](https://img.shields.io/github/downloads/microcity/Desktop/latest/total)](https://github.com/microcity/Desktop/releases/latest)

## MicroCityWeb
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/microcity/microcity.github.io/master)

🎯[访问MicroCity Web](https://microcity.github.io)

MicroCity Web 不需要任何安装，只需要使用现代浏览器（如Google Chrome、Microsoft Edge）访问它的网站即可。虽然相比于桌面版，运行在浏览器上可能会造成一定的性能损失，但是这使得用户可以在几乎任何操作系统上使用该软件，比如电脑系统Windows、MacOS、Linux和手机/平板系统Android等。

尽管推出了 MicroCity Web，您仍然可以继续使用以前开发的桌面版MicroCity。然而，桌面版本将不再更新新功能，所有新的功能和改进都将通过持续交付到 MicroCity Web 中，使之能够提供最好的体验，同时避免了版本控制问题。如果希望体验最新的功能和改进，则需要改用 MicroCity Web。

MicroCity Web 版也提供使用浏览器打包导出的离线版本（见上方 🔗[链接](#microcityweb)）。

> [!warning]
> 但是由于 Chromium 浏览器内核的更新，某些老旧的系统版本可能不受支持（如 Windows 8.1 及以下的 Windows 版本、32 位的 Windows 操作系统等）

## 兼容性
MicroCity Web 版使用 Lua 5.4 作为脚本语言编写脚本。您可以在 MicroCity Web 运行环境或编辑器中输入 `print(_VERSION)` 指令查看使用的 Lua 版本。

由于使用了实验性的 JavaScript函数，MicroCity Web 可能在以下浏览器内核中运行存在兼容性问题：
* Safari内核的浏览器，如iOS、iPad OS上的大多数浏览器（由于Apple强制使用Safari的浏览器内核），MacOS上的Safari浏览器
* FireFox浏览器

**2023/9/29测试遇到的兼容性问题及部分技术细节**
* iOS 和 iPad OS：
  * 无法打开本地文件（由于使用了 `showOpenFilePicker()` 方法）
* FireFox：
  * 无法打开本地文件（由于使用了 `showOpenFilePicker()` 方法）

> 关于 `showOpenFilePicker()` 方法的影响参见 [MDN Web Docs | showOpenFilePicker()](https://developer.mozilla.org/zh-CN/docs/Web/API/window/showOpenFilePicker#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7)

## 其他信息
本文作者在写这篇笔记的时候 MicroCity Web 正在被第一次用于教学环境中，已经基本能够正常运行并实现一定的仿真功能。本文作者的相关学习经历如下：
* MicroCity Desktop：物流信息管理
* MicroCity Web ：物流系统仿真

本站笔记内容仅供参考。如果本文内容由于时间的因素出现偏差，也欢迎各位在 Github 上通过 [Pull Request](https://github.com/huuhghhgyg/MicroCityNotes/pulls) 的方式对本站内容进行修正🥳