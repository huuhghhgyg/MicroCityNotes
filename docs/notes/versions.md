# MicroCity的版本
## MicroCity
![GitHub release (latest by date)](https://img.shields.io/github/v/release/microcity/Desktop) [![GitHub release (by tag)](https://img.shields.io/github/downloads/microcity/Desktop/latest/total)](https://github.com/microcity/Desktop/releases/latest)

MicroCity 软件最初推出时只有一个桌面版本，只能在 Windows 操作系统上运行。随着时间的推移，开发者（[@mixwind](https://github.com/sunzhuo))意识到这个限制使得许多潜在的用户无法使用该软件，因为他们的电脑使用的可能是其他操作系统，比如MacOS、Linux等。

## MicroCityWeb
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/microcity/microcity.github.io/master)

🎯[访问MicroCity Web](https://microcityweb.gitee.io) 📍[(离线版)下载](https://gitee.com/microcityweb/microcityweb/releases/latest)

为了解决这个问题，开发者决定开发 MicroCity Web，这是一个可以直接在浏览器中运行的版本。 MicroCity Web 不需要任何安装，只需要使用现代浏览器（如Google Chrome、Microsoft Edge）访问它的网站即可。虽然相比于桌面版，运行在浏览器上可能会造成一定的性能损失，但是这使得用户可以在几乎任何操作系统上使用该软件，比如电脑系统Windows、MacOS、Linux和手机/平板系统Android等。

尽管MicroCity的开发者推出了 MicroCity Web，您仍然可以继续使用以前开发的桌面版MicroCity。然而，桌面版本将不再更新新功能，所有新的功能和改进都将集中在 MicroCity Web 版中。这个决定的目的是确保 MicroCity 能够专注于一种版本，并在这个版本中提供最好的体验。这也使得 MicroCity 更容易管理和维护，避免了版本控制问题。

值得一提的是，尽管桌面版本不再更新新功能，它仍然可以继续使用。如果用户已经习惯使用桌面版本，他们可以继续使用它。然而，如果用户希望体验最新的功能和改进，则需要改用 MicroCity Web 版。

 MicroCity Web 版也提供使用浏览器打包导出的离线版本（见上方 🔗[链接](#microcityweb)）。

::: warning
但是由于 Chromium 浏览器内核的更新，某些老旧的系统版本可能不受支持（如 Windows 8.1 及以下的 Windows 版本、32 位的 Windows 操作系统等）
:::

## 兼容性
MicroCity Web 版使用 Lua 5.4 作为脚本语言编写脚本。您可以在 MicroCity Web 运行环境或编辑器中输入 `print(_VERSION)` 指令查看使用的 Lua 版本。

由于使用了实验性的 JavaScript函数，MicroCity Web 可能在以下浏览器内核中运行存在兼容性问题：
* iOS和iPad OS上的大多数浏览器（由于Apple强制使用Safari的浏览器内核）
* FireFox浏览器

**2023/9/29测试遇到的兼容性问题及部分技术细节**
* iOS 和 iPad OS：
  * 无法打开本地文件（由于使用了 `showOpenFilePicker()` 方法）
* FireFox：
  * 无法打开本地文件（由于使用了 `showOpenFilePicker()` 方法）

> 关于 `showOpenFilePicker()` 方法的影响参见 [MDN Web Docs | showOpenFilePicker()](https://developer.mozilla.org/zh-CN/docs/Web/API/window/showOpenFilePicker#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7)

## 总结
MicroCity Web 版的推出使得软件更加易用和普及，让更多的用户可以从中受益。同时，MicroCity 桌面版本仍然可用，使得那些已经习惯于使用该版本的用户可以继续使用，并让他们更容易地过渡到 MicroCity Web 版。

本文作者在写这篇笔记的时候 MicroCity Web 正在被第一次用于教学环境中，已经基本能够正常运行并实现一定的仿真功能。本文作者的学习经历如下：
* MicroCity（桌面版）：物流信息管理
* MicroCity Web ：物流系统仿真

本站笔记内容仅供参考。如果本文内容由于时间的因素出现偏差，也欢迎各位在 Github 上通过 [Pull Request](https://github.com/huuhghhgyg/MicroCityNotes/pulls) 的方式对本站内容进行修正🥳