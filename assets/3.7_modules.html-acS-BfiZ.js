import{_}from"./icon_script_editor-ibm_2NsU.js";import{_ as l}from"./button_load-GOP3K2yO.js";import{_ as a,a as c}from"./icon_module-AxwvBQMt.js";import{_ as g,a as d,b as h,c as u,d as m}from"./module_settings-yrsWXh8u.js";import{_ as p,r as n,o as f,c as b,a as t,b as o,d as r,w as y,e}from"./app-LOf__QKq.js";const C={},k=t("h1",{id:"_3-7-拓展模块",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_3-7-拓展模块","aria-hidden":"true"},"#"),o(" 3.7 拓展模块")],-1),x={href:"https://github.com/microcity/microcity.github.io/releases/download/MicroCity1.8/saga_modules2.0.8.zip",target:"_blank",rel:"noopener noreferrer"},M=t("strong",null,"SAGA模块",-1),w=t("strong",null,"SAGA模块",-1),S=t("strong",null,[o("形状（Shapes）"),t("strong",null,"和"),o("网格（Grids）"),t("strong",null,"库。另一种类型的模块是"),o("MicroCity脚本")],-1),L=t("img",{src:_,alt:"ScriptEditor图标"},null,-1),v=e('<h2 id="加载、关闭和执行模块" tabindex="-1"><a class="header-anchor" href="#加载、关闭和执行模块" aria-hidden="true">#</a> 加载、关闭和执行模块</h2><p>可以通过点击<strong>加载</strong>按钮<img src="'+l+'" alt="加载按钮">或<strong>模块-&gt;加载模块库</strong>菜单项将<strong>模块</strong>加载到MicroCity中。<strong>工作区</strong>面板的<strong>模块</strong>选项卡将显示已加载的<strong>库文件</strong><img src="'+a+'" alt="模块库图标">（每个对应一个文件）及其包含的<strong>模块</strong><img src="'+c+'" alt="模块图标">。可以通过上下文菜单关闭或重新加载<strong>模块库</strong>。执行模块有多种方式：双击模块，点击<strong>设置</strong>面板的<strong>执行</strong>按钮，或点击<strong>执行</strong>上下文菜单项。还可以通过点击<strong>调试</strong>上下文菜单项来<strong>调试MicroCity脚本</strong>模块，这需要后台运行<strong>ScriptEditor</strong>。MicroCity还可以捕获运行时错误并暂停模块的执行。</p><p><img src="'+d+'" alt="module_file_menu">    <img src="'+h+'" alt="module_menu"></p><h2 id="加速、停止模块的执行" tabindex="-1"><a class="header-anchor" href="#加速、停止模块的执行" aria-hidden="true">#</a> 加速、停止模块的执行</h2>',4),E=t("strong",null,"MicroCity Script",-1),G={href:"https://www.lua.org/",target:"_blank",rel:"noopener noreferrer"},N=t("strong",null,"工作区",-1),A=t("strong",null,"模块",-1),V=t("img",{src:g,alt:"icon_module_lib"},null,-1),B=t("strong",null,"模块库",-1),I=t("strong",null,"设置",-1),R=t("strong",null,"脚本运行模式",-1),T=t("strong",null,"安全模式",-1),j=t("strong",null,"快速模式",-1),q={href:"https://luajit.org/",target:"_blank",rel:"noopener noreferrer"},z=e('<p>如果一个模块正在被执行，可以通过点击相应的 <strong>设置</strong> 中的 <strong>执行</strong> 按钮来停止它。在 <strong>安全模式</strong> 下，执行可以立即停止，但在 <strong>快速模式</strong> 下，停止操作取决于脚本中调用的 <strong>GetReady()</strong> 函数（参见 <a href="4.2_ui_control">4.2</a>）。</p><p><img src="'+u+'" alt="module_libraries_settings">    <img src="'+m+'" alt="module_settings"></p>',2),J={href:"https://github.com/huuhghhgyg/MicroCityNotes/issues/new",target:"_blank",rel:"noopener noreferrer"},P=t("strong",null,"反馈",-1);function D(F,H){const s=n("ExternalLinkIcon"),i=n("RouterLink");return f(),b("div",null,[k,t("p",null,[o("MicroCity的功能可以通过模块进行拓展，其中之一是"),t("a",x,[M,r(s)]),o("（*.dll）。"),w,o("包含许多有用的"),S,o("（*.mcs），可以使用"),L,o("进行编辑和调试（请参阅"),r(i,{to:"/docs/4.1_si_overview.html"},{default:y(()=>[o("4.1")]),_:1}),o("）。")]),v,t("p",null,[E,o(" 模块是使用非常快速的 "),t("strong",null,[t("a",G,[o("Lua"),r(s)])]),o(" 语言创建的。在某些情况下，如果您想要更快的执行速度，可以在 "),N,o(" 面板的 "),A,o(" 标签中点击 "),V,o(),B,o("，然后在 "),I,o(" 面板中将 "),R,o(" 从 "),T,o(" 切换到 "),j,o("。然后 MicroCity 将使用 "),t("strong",null,[t("a",q,[o("LuaJIT"),r(s)])]),o(" 来执行模块。")]),z,t("blockquote",null,[t("p",null,[o("这篇文章使用ChatGPT翻译自其他语言，如果有问题请在"),t("a",J,[P,r(s)]),o("页面提交反馈。")])])])}const X=p(C,[["render",D],["__file","3.7_modules.html.vue"]]);export{X as default};
