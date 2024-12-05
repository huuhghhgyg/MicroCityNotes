import{_ as s}from"./icon_script_editor-S0ak5iz0.js";import{_ as p}from"./script_editor-DUMRUh9U.js";import{_ as l}from"./icon_microcity-CR1Oj_NQ.js";import{_ as m,c as u,b as o,a as e,f as i,g as a,e as r,r as d,o as g}from"./app-IsHl6ERv.js";const c={};function h(y,t){const n=d("RouteLink");return g(),u("div",null,[t[19]||(t[19]=o("h1",{id:"_4-1-脚本概览",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_4-1-脚本概览"},[o("span",null,"4.1 脚本概览")])],-1)),o("p",null,[t[1]||(t[1]=e("MicroCity使用")),t[2]||(t[2]=o("strong",null,"模块",-1)),t[3]||(t[3]=e("（详见")),i(n,{to:"/docs/desktop/3.7_modules.html"},{default:a(()=>t[0]||(t[0]=[e("3.7")])),_:1}),t[4]||(t[4]=e("）来扩展其功能。模块的一种类型是")),t[5]||(t[5]=o("strong",null,"MicroCity脚本",-1)),t[6]||(t[6]=e("（*.mcs），可以在")),t[7]||(t[7]=o("img",{src:s,alt:"icon"},null,-1)),t[8]||(t[8]=o("strong",null,"ScriptEditor",-1)),t[9]||(t[9]=e("中进行编辑和调试。"))]),t[20]||(t[20]=r('<h2 id="脚本编辑器" tabindex="-1"><a class="header-anchor" href="#脚本编辑器"><span>脚本编辑器</span></a></h2><p><img src="'+p+'" alt="scritp_editor"></p><h2 id="编码和调试microcity脚本" tabindex="-1"><a class="header-anchor" href="#编码和调试microcity脚本"><span>编码和调试MicroCity脚本</span></a></h2>',3)),o("p",null,[t[11]||(t[11]=r('<strong>ScriptEditor</strong>基于<a href="https://studio.zerobrane.com/" target="_blank" rel="noopener noreferrer">ZeroBrane</a>。可以在那里找到详细的信息。要进行调试，您应该保持<img src="'+s+'" alt="icon"><strong>Script Editor</strong>打开。然后从<img src="'+l+'" alt="icon"><strong>MicroCity</strong>中右键点击<strong>模块</strong>，选择上下文菜单中的<strong>调试</strong>项（详见',14)),i(n,{to:"/docs/desktop/3.7_modules.html#loading-closing-and-executing-modules"},{default:a(()=>t[10]||(t[10]=[e("3.7")])),_:1}),t[12]||(t[12]=e("）。执行过程可以在")),t[13]||(t[13]=o("strong",null,"ScriptEditor",-1)),t[14]||(t[14]=e("的")),t[15]||(t[15]=o("strong",null,"Code View",-1)),t[16]||(t[16]=e("中显示。您可以使用")),t[17]||(t[17]=o("strong",null,"调试按钮",-1)),t[18]||(t[18]=e("控制执行并查看变量。"))]),t[21]||(t[21]=r(`<h2 id="lua语言和嵌入函数" tabindex="-1"><a class="header-anchor" href="#lua语言和嵌入函数"><span>Lua语言和嵌入函数</span></a></h2><p>MicroCity使用<a href="https://www.lua.org/manual/5.1/" target="_blank" rel="noopener noreferrer">Lua 5.1</a>作为其脚本语言。可以在那里找到参考手册。MicroCity在Lua中嵌入了许多有用的函数，不仅可以控制用户界面、操作数据，还可以解决数学模型和运行仿真等问题。请阅读以下章节以获取更多信息。</p><p><strong>本参考资料中的约定：</strong><br> Lua中有四种主要的数据类型可以作为参数通过嵌入函数传递，分别是<em>数字(Number)</em>、<em>布尔值(Boolean)</em>、<em>字符串(String)<em>和</em>对象(Object)</em>。<em>对象</em>类型包括内置的Lua对象，如<em>表(Table)</em>、<em>函数(Function)<em>和</em>线程(Thread)</em>，以及MicroCity对象，如<em>形状(Shapes)</em>、<em>网格(Grid)</em>、<em>表(Table)<em>和</em>场景(Scene)</em>。为了明确嵌入函数中的参数类型，在函数描述中我们使用大写、引号和语义信息来避免歧义。参数的小写单词表示<em>数字</em>。有时候为了表示整数参数，会在单词后面加上字母&#39;i&#39;，如<em>iField</em>。以字母&#39;b&#39;开头并跟随一个单词表示<em>布尔值</em>，如<em>bShow</em>。用引号括起来的单词表示<em>字符串</em>。大写的单词表示<em>对象</em>或关键字。以下是一个嵌入函数描述的示例。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">AddParameter</span><span class="token punctuation">(</span>Module<span class="token punctuation">,</span> ParentNode<span class="token punctuation">,</span> <span class="token string">&quot;Value&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> default <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>在这个例子中，<em>Module</em>参数应该是一个<em>Module</em>对象。<em>ParentNode</em>参数应该是一个<em>Node</em>对象，但它作为一个父节点。<em>&quot;Value&quot;<em>参数是一个字符串，但它代表MicroCity中的内置类型</em>Value</em>，因此这个字符串是不能改变的。*&quot;id&quot;*参数应该是一个用户指定的字符串。<em>default</em>参数是一个数字。方括号中的内容是可选的。参数之间的竖线表示&quot;或&quot;的关系。</p><p><strong>编码格式：</strong><br> MicroCity使用ANSI编码格式读写数据，比如shp、txt、csv和dbf等。ScriptEditor和嵌入函数使用UTF-8编码格式读写数据，比如txt或csv等。</p><blockquote><p>这篇文章使用ChatGPT翻译自其他语言，如果有问题请在<a href="https://github.com/huuhghhgyg/MicroCityNotes/issues/new" target="_blank" rel="noopener noreferrer"><strong>反馈</strong></a>页面提交反馈。</p></blockquote>`,7))])}const M=m(c,[["render",h],["__file","4.1_si_overview.html.vue"]]),v=JSON.parse('{"path":"/docs/desktop/4.1_si_overview.html","title":"4.1 脚本概览","lang":"zh-CN","frontmatter":{"prev":"./3.7_modules.md","next":"./4.2_ui_control.md","description":"4.1 脚本概览 MicroCity使用模块（详见）来扩展其功能。模块的一种类型是MicroCity脚本（*.mcs），可以在iconScriptEditor中进行编辑和调试。 脚本编辑器 scritp_editor 编码和调试MicroCity脚本 ScriptEditor基于ZeroBrane。可以在那里找到详细的信息。要进行调试，您应该保持ico...","head":[["meta",{"property":"og:url","content":"https://huuhghhgyg.github.io/MicroCityNotes/docs/desktop/4.1_si_overview.html"}],["meta",{"property":"og:site_name","content":"MicroCity笔记"}],["meta",{"property":"og:title","content":"4.1 脚本概览"}],["meta",{"property":"og:description","content":"4.1 脚本概览 MicroCity使用模块（详见）来扩展其功能。模块的一种类型是MicroCity脚本（*.mcs），可以在iconScriptEditor中进行编辑和调试。 脚本编辑器 scritp_editor 编码和调试MicroCity脚本 ScriptEditor基于ZeroBrane。可以在那里找到详细的信息。要进行调试，您应该保持ico..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T05:56:24.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-19T05:56:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4.1 脚本概览\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T05:56:24.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"脚本编辑器","slug":"脚本编辑器","link":"#脚本编辑器","children":[]},{"level":2,"title":"编码和调试MicroCity脚本","slug":"编码和调试microcity脚本","link":"#编码和调试microcity脚本","children":[]},{"level":2,"title":"Lua语言和嵌入函数","slug":"lua语言和嵌入函数","link":"#lua语言和嵌入函数","children":[]}],"git":{"updatedTime":1710827784000,"contributors":[{"name":"huuhghhgyg","email":"huuhghhgyg@outlook.com","commits":7,"url":"https://github.com/huuhghhgyg"}]},"filePathRelative":"docs/desktop/4.1_si_overview.md","autoDesc":true,"excerpt":"\\n<p>MicroCity使用<strong>模块</strong>（详见<a href=\\"/MicroCityNotes/docs/desktop/3.7_modules.html\\" target=\\"_blank\\">3.7</a>）来扩展其功能。模块的一种类型是<strong>MicroCity脚本</strong>（*.mcs），可以在<strong>ScriptEditor</strong>中进行编辑和调试。</p>\\n<h2>脚本编辑器</h2>\\n<p></p>\\n<h2>编码和调试MicroCity脚本</h2>\\n<p><strong>ScriptEditor</strong>基于<a href=\\"https://studio.zerobrane.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ZeroBrane</a>。可以在那里找到详细的信息。要进行调试，您应该保持<strong>Script Editor</strong>打开。然后从<strong>MicroCity</strong>中右键点击<strong>模块</strong>，选择上下文菜单中的<strong>调试</strong>项（详见<a href=\\"/MicroCityNotes/docs/desktop/3.7_modules.html#loading-closing-and-executing-modules\\" target=\\"_blank\\">3.7</a>）。执行过程可以在<strong>ScriptEditor</strong>的<strong>Code View</strong>中显示。您可以使用<strong>调试按钮</strong>控制执行并查看变量。</p>"}');export{M as comp,v as data};