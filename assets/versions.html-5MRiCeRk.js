import{_ as t,c as i,e as o,o as r}from"./app-IsHl6ERv.js";const c={};function a(s,e){return r(),i("div",null,e[0]||(e[0]=[o('<h1 id="microcity的版本" tabindex="-1"><a class="header-anchor" href="#microcity的版本"><span>MicroCity的版本</span></a></h1><p>MicroCity是一款简单快速的空间规划和建模软件，可用于数学模型构建求解和仿真实验，尤其适用于物流数字化建模领域。MicroCity 最初只有只能在 Windows 操作系统上运行的 Desktop 版本，后来出现了跨平台使用的需求，因此推出了 MicroCity Web 版本，它可以很好地运行在搭载 Chromium 内核的浏览器上。</p><h2 id="microcity" tabindex="-1"><a class="header-anchor" href="#microcity"><span>MicroCity</span></a></h2><p><img src="https://img.shields.io/github/v/release/microcity/Desktop" alt="GitHub release (latest by date)"> <a href="https://github.com/microcity/Desktop/releases/latest" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/downloads/microcity/Desktop/latest/total" alt="GitHub release (by tag)"></a></p><h2 id="microcityweb" tabindex="-1"><a class="header-anchor" href="#microcityweb"><span>MicroCityWeb</span></a></h2><p><img src="https://img.shields.io/github/last-commit/microcity/microcity.github.io/master" alt="GitHub last commit (branch)"></p><p>🎯<a href="https://microcity.github.io" target="_blank" rel="noopener noreferrer">访问MicroCity Web</a></p><p>MicroCity Web 不需要任何安装，只需要使用现代浏览器（如Google Chrome、Microsoft Edge）访问它的网站即可。虽然相比于桌面版，运行在浏览器上可能会造成一定的性能损失，但是这使得用户可以在几乎任何操作系统上使用该软件，比如电脑系统Windows、MacOS、Linux和手机/平板系统Android等。</p><p>尽管推出了 MicroCity Web，您仍然可以继续使用以前开发的桌面版MicroCity。然而，桌面版本将不再更新新功能，所有新的功能和改进都将通过持续交付到 MicroCity Web 中，使之能够提供最好的体验，同时避免了版本控制问题。如果希望体验最新的功能和改进，则需要改用 MicroCity Web。</p><blockquote><p>[!warning] 但是由于 Chromium 浏览器内核的更新，某些老旧的系统版本可能不受支持（如 Windows 8.1 及以下的 Windows 版本、32 位的 Windows 操作系统等）</p></blockquote><h3 id="microcity-web的分支版本" tabindex="-1"><a class="header-anchor" href="#microcity-web的分支版本"><span>MicroCity Web的分支版本</span></a></h3><p>本站提供了一个fork版本的MicroCity Web于<a href="https://mcw.zhhuu.top" target="_blank" rel="noopener noreferrer">mcw.zhhuu.top</a>，基于CloudFlare为国内用户提供更快的访问速度（包括发布链接的打开，如<a href="https://mcw.zhhuu.top/#sepalt" target="_blank" rel="noopener noreferrer">https://mcw.zhhuu.top/#sepalt</a>），同时也提供了一些额外/实验性的功能，如本地文件的打开等。</p><h2 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性"><span>兼容性</span></a></h2><p>MicroCity Web 版使用 Lua 5.4 作为脚本语言编写脚本。您可以在 MicroCity Web 运行环境或编辑器中输入 <code>print(_VERSION)</code> 指令查看使用的 Lua 版本。</p><p>由于使用了实验性的 JavaScript函数，MicroCity Web 可能在以下浏览器内核中运行存在兼容性问题：</p><ul><li>Safari内核的浏览器，如iOS、iPad OS上的大多数浏览器（由于Apple强制使用Safari的浏览器内核），MacOS上的Safari浏览器</li><li>FireFox浏览器</li></ul><p><strong>2023/9/29测试遇到的兼容性问题及部分技术细节</strong></p><ul><li>iOS 和 iPad OS： <ul><li>无法打开本地文件（由于使用了 <code>showOpenFilePicker()</code> 方法）</li></ul></li><li>FireFox： <ul><li>无法打开本地文件（由于使用了 <code>showOpenFilePicker()</code> 方法）</li></ul></li></ul><blockquote><p>本站自建MicroCity Web的 <a href="https://mcw.zhhuu.top" target="_blank" rel="noopener noreferrer">fork版本</a>尝试修复了这个问题，能够实现本地文件的打开，但是由于设备/浏览器的不同实际体验可能不一致（这也是没有发起PR的原因）。</p></blockquote><blockquote><p>关于 <code>showOpenFilePicker()</code> 方法的影响参见 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/window/showOpenFilePicker#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7" target="_blank" rel="noopener noreferrer">MDN Web Docs | showOpenFilePicker()</a></p></blockquote><h2 id="其他信息" tabindex="-1"><a class="header-anchor" href="#其他信息"><span>其他信息</span></a></h2><p>本文作者在写这篇笔记的时候 MicroCity Web 正在被第一次用于教学环境中，已经基本能够正常运行并实现一定的仿真功能。本文作者的相关学习经历如下：</p><ul><li>MicroCity Desktop：物流信息管理</li><li>MicroCity Web ：物流系统仿真</li></ul><p>本站笔记内容仅供参考。如果本文内容由于时间的因素出现偏差，也欢迎各位在 Github 上通过 <a href="https://github.com/huuhghhgyg/MicroCityNotes/pulls" target="_blank" rel="noopener noreferrer">Pull Request</a> 的方式对本站内容进行修正🥳</p>',24)]))}const h=t(c,[["render",a],["__file","versions.html.vue"]]),n=JSON.parse('{"path":"/notes/versions.html","title":"MicroCity的版本","lang":"zh-CN","frontmatter":{"description":"MicroCity的版本 MicroCity是一款简单快速的空间规划和建模软件，可用于数学模型构建求解和仿真实验，尤其适用于物流数字化建模领域。MicroCity 最初只有只能在 Windows 操作系统上运行的 Desktop 版本，后来出现了跨平台使用的需求，因此推出了 MicroCity Web 版本，它可以很好地运行在搭载 Chromium 内...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://huuhghhgyg.github.io/MicroCityNotes/en/notes/versions.html"}],["meta",{"property":"og:url","content":"https://huuhghhgyg.github.io/MicroCityNotes/notes/versions.html"}],["meta",{"property":"og:site_name","content":"MicroCity笔记"}],["meta",{"property":"og:title","content":"MicroCity的版本"}],["meta",{"property":"og:description","content":"MicroCity的版本 MicroCity是一款简单快速的空间规划和建模软件，可用于数学模型构建求解和仿真实验，尤其适用于物流数字化建模领域。MicroCity 最初只有只能在 Windows 操作系统上运行的 Desktop 版本，后来出现了跨平台使用的需求，因此推出了 MicroCity Web 版本，它可以很好地运行在搭载 Chromium 内..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.shields.io/github/v/release/microcity/Desktop"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-21T02:46:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-21T02:46:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MicroCity的版本\\",\\"image\\":[\\"https://img.shields.io/github/v/release/microcity/Desktop\\",\\"https://img.shields.io/github/downloads/microcity/Desktop/latest/total\\",\\"https://img.shields.io/github/last-commit/microcity/microcity.github.io/master\\"],\\"dateModified\\":\\"2024-06-21T02:46:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"MicroCity","slug":"microcity","link":"#microcity","children":[]},{"level":2,"title":"MicroCityWeb","slug":"microcityweb","link":"#microcityweb","children":[{"level":3,"title":"MicroCity Web的分支版本","slug":"microcity-web的分支版本","link":"#microcity-web的分支版本","children":[]}]},{"level":2,"title":"兼容性","slug":"兼容性","link":"#兼容性","children":[]},{"level":2,"title":"其他信息","slug":"其他信息","link":"#其他信息","children":[]}],"git":{"updatedTime":1718938012000,"contributors":[{"name":"huuhghhgyg","email":"huuhghhgyg@outlook.com","commits":14,"url":"https://github.com/huuhghhgyg"}]},"filePathRelative":"notes/versions.md","autoDesc":true,"excerpt":"\\n<p>MicroCity是一款简单快速的空间规划和建模软件，可用于数学模型构建求解和仿真实验，尤其适用于物流数字化建模领域。MicroCity 最初只有只能在 Windows 操作系统上运行的 Desktop 版本，后来出现了跨平台使用的需求，因此推出了 MicroCity Web 版本，它可以很好地运行在搭载 Chromium 内核的浏览器上。</p>\\n<h2>MicroCity</h2>\\n<p><img src=\\"https://img.shields.io/github/v/release/microcity/Desktop\\" alt=\\"GitHub release (latest by date)\\"> <a href=\\"https://github.com/microcity/Desktop/releases/latest\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"https://img.shields.io/github/downloads/microcity/Desktop/latest/total\\" alt=\\"GitHub release (by tag)\\"></a></p>"}');export{h as comp,n as data};