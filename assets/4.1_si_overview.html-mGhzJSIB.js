import{_ as i}from"./icon_script_editor-ibm_2NsU.js";import{_ as l}from"./script_editor-a48-sxc_.js";import{_ as u}from"./icon_microcity-Je85-7MO.js";import{_ as d,r as a,o as m,c as _,a as e,b as t,d as o,w as r,e as c}from"./app-LOf__QKq.js";const p={},h=e("h1",{id:"_4-1-脚本概览",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-1-脚本概览","aria-hidden":"true"},"#"),t(" 4.1 脚本概览")],-1),g=e("strong",null,"模块",-1),f=e("strong",null,"MicroCity脚本",-1),b=e("img",{src:i,alt:"icon"},null,-1),k=e("strong",null,"ScriptEditor",-1),v=c('<h2 id="脚本编辑器" tabindex="-1"><a class="header-anchor" href="#脚本编辑器" aria-hidden="true">#</a> 脚本编辑器</h2><p><img src="'+l+'" alt="scritp_editor"></p><h2 id="编码和调试microcity脚本" tabindex="-1"><a class="header-anchor" href="#编码和调试microcity脚本" aria-hidden="true">#</a> 编码和调试MicroCity脚本</h2>',3),x=e("strong",null,"ScriptEditor",-1),C={href:"https://studio.zerobrane.com/",target:"_blank",rel:"noopener noreferrer"},y=e("img",{src:i,alt:"icon"},null,-1),M=e("strong",null,"Script Editor",-1),q=e("img",{src:u,alt:"icon"},null,-1),S=e("strong",null,"MicroCity",-1),w=e("strong",null,"模块",-1),N=e("strong",null,"调试",-1),L=e("strong",null,"ScriptEditor",-1),E=e("strong",null,"Code View",-1),V=e("strong",null,"调试按钮",-1),T=e("h2",{id:"lua语言和嵌入函数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lua语言和嵌入函数","aria-hidden":"true"},"#"),t(" Lua语言和嵌入函数")],-1),B={href:"https://www.lua.org/manual/5.1/",target:"_blank",rel:"noopener noreferrer"},P=c(`<p><strong>本参考资料中的约定：</strong><br> Lua中有四种主要的数据类型可以作为参数通过嵌入函数传递，分别是<em>数字(Number)</em>、<em>布尔值(Boolean)</em>、<em>字符串(String)<em>和</em>对象(Object)</em>。<em>对象</em>类型包括内置的Lua对象，如<em>表(Table)</em>、<em>函数(Function)<em>和</em>线程(Thread)</em>，以及MicroCity对象，如<em>形状(Shapes)</em>、<em>网格(Grid)</em>、<em>表(Table)<em>和</em>场景(Scene)</em>。为了明确嵌入函数中的参数类型，在函数描述中我们使用大写、引号和语义信息来避免歧义。参数的小写单词表示<em>数字</em>。有时候为了表示整数参数，会在单词后面加上字母&#39;i&#39;，如<em>iField</em>。以字母&#39;b&#39;开头并跟随一个单词表示<em>布尔值</em>，如<em>bShow</em>。用引号括起来的单词表示<em>字符串</em>。大写的单词表示<em>对象</em>或关键字。以下是一个嵌入函数描述的示例。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">AddParameter</span><span class="token punctuation">(</span>Module<span class="token punctuation">,</span> ParentNode<span class="token punctuation">,</span> <span class="token string">&quot;Value&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> default <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这个例子中，<em>Module</em>参数应该是一个<em>Module</em>对象。<em>ParentNode</em>参数应该是一个<em>Node</em>对象，但它作为一个父节点。<em>&quot;Value&quot;<em>参数是一个字符串，但它代表MicroCity中的内置类型</em>Value</em>，因此这个字符串是不能改变的。*&quot;id&quot;*参数应该是一个用户指定的字符串。<em>default</em>参数是一个数字。方括号中的内容是可选的。参数之间的竖线表示&quot;或&quot;的关系。</p><p><strong>编码格式：</strong><br> MicroCity使用ANSI编码格式读写数据，比如shp、txt、csv和dbf等。ScriptEditor和嵌入函数使用UTF-8编码格式读写数据，比如txt或csv等。</p>`,4),F={href:"https://github.com/huuhghhgyg/MicroCityNotes/issues/new",target:"_blank",rel:"noopener noreferrer"},I=e("strong",null,"反馈",-1);function A(G,R){const s=a("RouterLink"),n=a("ExternalLinkIcon");return m(),_("div",null,[h,e("p",null,[t("MicroCity使用"),g,t("（详见"),o(s,{to:"/docs/3.7_modules.html"},{default:r(()=>[t("3.7")]),_:1}),t("）来扩展其功能。模块的一种类型是"),f,t("（*.mcs），可以在"),b,k,t("中进行编辑和调试。")]),v,e("p",null,[x,t("基于"),e("a",C,[t("ZeroBrane"),o(n)]),t("。可以在那里找到详细的信息。要进行调试，您应该保持"),y,M,t("打开。然后从"),q,S,t("中右键点击"),w,t("，选择上下文菜单中的"),N,t("项（详见"),o(s,{to:"/docs/3.7_modules.html#loading-closing-and-executing-modules"},{default:r(()=>[t("3.7")]),_:1}),t("）。执行过程可以在"),L,t("的"),E,t("中显示。您可以使用"),V,t("控制执行并查看变量。")]),T,e("p",null,[t("MicroCity使用"),e("a",B,[t("Lua 5.1"),o(n)]),t("作为其脚本语言。可以在那里找到参考手册。MicroCity在Lua中嵌入了许多有用的函数，不仅可以控制用户界面、操作数据，还可以解决数学模型和太阳模拟等问题。请阅读以下章节以获取更多信息。")]),P,e("blockquote",null,[e("p",null,[t("这篇文章使用ChatGPT翻译自其他语言，如果有问题请在"),e("a",F,[I,o(n)]),t("页面提交反馈。")])])])}const Z=d(p,[["render",A],["__file","4.1_si_overview.html.vue"]]);export{Z as default};
