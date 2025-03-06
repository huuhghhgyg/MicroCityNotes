import{_ as e}from"./icon_script_editor-S0ak5iz0.js";import{_ as n}from"./button_load-C997XuVc.js";import{_ as i,a as g}from"./icon_module-Cf6prrxI.js";import{_ as a,a as l,b as p,c as m,d}from"./module_settings-Bx5Mwjrg.js";import{_ as u,e as h,h as o,i as c,g as r,j as _,k as y,r as f,o as b}from"./app-BNWIvPaj.js";const C={};function k(M,t){const s=f("RouteLink");return b(),h("div",null,[t[11]||(t[11]=o("h1",{id:"_3-7-拓展模块",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_3-7-拓展模块"},[o("span",null,"3.7 拓展模块")])],-1)),o("p",null,[t[1]||(t[1]=r("MicroCity的功能可以通过模块进行拓展，其中之一是")),t[2]||(t[2]=o("a",{href:"https://github.com/microcity/microcity.github.io/releases/download/MicroCity1.8/saga_modules2.0.8.zip",target:"_blank",rel:"noopener noreferrer"},[o("strong",null,"SAGA模块")],-1)),t[3]||(t[3]=r("（*.dll）。")),t[4]||(t[4]=o("strong",null,"SAGA模块",-1)),t[5]||(t[5]=r("包含许多有用的")),t[6]||(t[6]=o("strong",null,[r("形状（Shapes）"),o("strong",null,"和"),r("网格（Grids）"),o("strong",null,"库。另一种类型的模块是"),r("MicroCity脚本")],-1)),t[7]||(t[7]=r("（*.mcs），可以使用")),t[8]||(t[8]=o("img",{src:e,alt:"ScriptEditor图标"},null,-1)),t[9]||(t[9]=r("进行编辑和调试（请参阅")),_(s,{to:"/docs/desktop/4.1_si_overview.html"},{default:y(()=>t[0]||(t[0]=[r("4.1")])),_:1}),t[10]||(t[10]=r("）。"))]),t[12]||(t[12]=c('<h2 id="加载、关闭和执行模块" tabindex="-1"><a class="header-anchor" href="#加载、关闭和执行模块"><span>加载、关闭和执行模块</span></a></h2><p>可以通过点击<strong>加载</strong>按钮<img src="'+n+'" alt="加载按钮">或<strong>模块-&gt;加载模块库</strong>菜单项将<strong>模块</strong>加载到MicroCity中。<strong>工作区</strong>面板的<strong>模块</strong>选项卡将显示已加载的<strong>库文件</strong><img src="'+i+'" alt="模块库图标">（每个对应一个文件）及其包含的<strong>模块</strong><img src="'+g+'" alt="模块图标">。可以通过上下文菜单关闭或重新加载<strong>模块库</strong>。执行模块有多种方式：双击模块，点击<strong>设置</strong>面板的<strong>执行</strong>按钮，或点击<strong>执行</strong>上下文菜单项。还可以通过点击<strong>调试</strong>上下文菜单项来<strong>调试MicroCity脚本</strong>模块，这需要后台运行<strong>ScriptEditor</strong>。MicroCity还可以捕获运行时错误并暂停模块的执行。</p><p><img src="'+a+'" alt="module_file_menu">    <img src="'+l+'" alt="module_menu"></p><h2 id="加速、停止模块的执行" tabindex="-1"><a class="header-anchor" href="#加速、停止模块的执行"><span>加速、停止模块的执行</span></a></h2><p><strong>MicroCity Script</strong> 模块是使用非常快速的 <strong><a href="https://www.lua.org/" target="_blank" rel="noopener noreferrer">Lua</a></strong> 语言创建的。在某些情况下，如果您想要更快的执行速度，可以在 <strong>工作区</strong> 面板的 <strong>模块</strong> 标签中点击 <img src="'+p+'" alt="icon_module_lib"> <strong>模块库</strong>，然后在 <strong>设置</strong> 面板中将 <strong>脚本运行模式</strong> 从 <strong>安全模式</strong> 切换到 <strong>快速模式</strong>。然后 MicroCity 将使用 <strong><a href="https://luajit.org/" target="_blank" rel="noopener noreferrer">LuaJIT</a></strong> 来执行模块。</p><p>如果一个模块正在被执行，可以通过点击相应的 <strong>设置</strong> 中的 <strong>执行</strong> 按钮来停止它。在 <strong>安全模式</strong> 下，执行可以立即停止，但在 <strong>快速模式</strong> 下，停止操作取决于脚本中调用的 <strong>GetReady()</strong> 函数（参见 <a href="4.2_ui_control">4.2</a>）。</p><p><img src="'+m+'" alt="module_libraries_settings">    <img src="'+d+'" alt="module_settings"></p><blockquote><p>这篇文章使用ChatGPT翻译自其他语言，如果有问题请在<a href="https://github.com/huuhghhgyg/MicroCityNotes/issues/new" target="_blank" rel="noopener noreferrer"><strong>反馈</strong></a>页面提交反馈。</p></blockquote>',8))])}const w=u(C,[["render",k],["__file","3.7_modules.html.vue"]]),N=JSON.parse('{"path":"/docs/desktop/3.7_modules.html","title":"3.7 拓展模块","lang":"zh-CN","frontmatter":{"prev":"./3.6_maps_and_layers.md","next":"./4.1_si_overview.md","description":"3.7 拓展模块 MicroCity的功能可以通过模块进行拓展，其中之一是SAGA模块（*.dll）。SAGA模块包含许多有用的形状（Shapes）和网格（Grids）库。另一种类型的模块是MicroCity脚本（*.mcs），可以使用ScriptEditor图标进行编辑和调试（请参阅）。 加载、关闭和执行模块 可以通过点击加载按钮加载按钮或模块->加...","head":[["meta",{"property":"og:url","content":"https://huuhghhgyg.github.io/MicroCityNotes/docs/desktop/3.7_modules.html"}],["meta",{"property":"og:site_name","content":"MicroCity笔记"}],["meta",{"property":"og:title","content":"3.7 拓展模块"}],["meta",{"property":"og:description","content":"3.7 拓展模块 MicroCity的功能可以通过模块进行拓展，其中之一是SAGA模块（*.dll）。SAGA模块包含许多有用的形状（Shapes）和网格（Grids）库。另一种类型的模块是MicroCity脚本（*.mcs），可以使用ScriptEditor图标进行编辑和调试（请参阅）。 加载、关闭和执行模块 可以通过点击加载按钮加载按钮或模块->加..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T03:31:40.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-19T03:31:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3.7 拓展模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T03:31:40.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"加载、关闭和执行模块","slug":"加载、关闭和执行模块","link":"#加载、关闭和执行模块","children":[]},{"level":2,"title":"加速、停止模块的执行","slug":"加速、停止模块的执行","link":"#加速、停止模块的执行","children":[]}],"git":{"updatedTime":1710819100000,"contributors":[{"name":"huuhghhgyg","username":"huuhghhgyg","email":"huuhghhgyg@outlook.com","commits":1,"url":"https://github.com/huuhghhgyg"}],"changelog":[{"hash":"5d4891efe5ac969838d0075a68fbb6f903b2d890","date":1710819100000,"email":"huuhghhgyg@outlook.com","author":"huuhghhgyg","message":"[feat] 添加MicroCity Web的文档翻译"}]},"filePathRelative":"docs/desktop/3.7_modules.md","autoDesc":true,"excerpt":"\\n<p>MicroCity的功能可以通过模块进行拓展，其中之一是<a href=\\"https://github.com/microcity/microcity.github.io/releases/download/MicroCity1.8/saga_modules2.0.8.zip\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><strong>SAGA模块</strong></a>（*.dll）。<strong>SAGA模块</strong>包含许多有用的<strong>形状（Shapes）<strong>和</strong>网格（Grids）<strong>库。另一种类型的模块是</strong>MicroCity脚本</strong>（*.mcs），可以使用进行编辑和调试（请参阅<a href=\\"/MicroCityNotes/docs/desktop/4.1_si_overview.html\\" target=\\"_blank\\">4.1</a>）。</p>"}');export{w as comp,N as data};
