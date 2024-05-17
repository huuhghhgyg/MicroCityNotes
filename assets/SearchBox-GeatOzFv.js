import{f,g as j,h as L,i as _,t as I,u as D,j as O,_ as z,o as u,c as p,k as N,v as R,a as b,n as y,l as x,F as T,m as M,p as G,q as w,s as E}from"./app-74QKXaVC.js";const F=[{path:"/",title:"首页",pathLocale:"/",contents:[{header:"开始使用MicroCity Web",slug:"开始使用microcity-web",content:`打开MicroCity Web，默认加载方块旋转的示例代码。 点击运行按钮运行代码 程序运行，看到右侧视图中方块旋转。 更多MicroCity的使用方法可以参考本站翻译的 MicroCity Web中文文档。
如果想要深入了解 MicroCity Web 的用法和使用技巧，可以参考本站提供的 学习笔记`},{header:"开始使用MicroCity Desktop",slug:"开始使用microcity-desktop",content:'转到MicroCity的文档仓库下载 MicroCity的最新版本 打开 ScriptEditor 并输入: Print("hello, world!") 将脚本另存为 test.mcs 并将其拖入 MicroCity 在程序主界面左侧转到 Modules 标签页，打开 test ，双击其中的 main ，执行刚刚编写的脚本。 程序界面下方的 Messages 栏中会输出执行脚本的信息。 更多MicroCity的使用方法可以参考本站搬运自GitHub的文档：MicroCity文档，也可以参考 MicroCtiy 在GitHub上的文档。'},{header:"MicroCityNotes 仓库",slug:"microcitynotes-仓库",content:`国内用户如果不方便访问 GitHub 也可以访问本站在 Netlify 上搭建的 同步站点
如果发现文档或笔记有问题，欢迎 Pull Request 或者提供 Issues 让它变得更完善😋`}]},{path:"/en/",title:"Home Page",pathLocale:"/en/",contents:[{header:"Getting Started with MicroCity Web",slug:"getting-started-with-microcity-web",content:"Open MicroCity Web, and the example code for rotating blocks will load by default. Click the button to run the code. The program will run, and you will see the blocks rotating in the right-hand view. If you want to learn more about how to use MicroCity Web and its advanced features, you can refer to the Learning Notes provided on this site."},{header:"Getting Started with MicroCity Desktop",slug:"getting-started-with-microcity-desktop",content:'Go to the MicroCity documentation repository to download the Latest Version of MicroCity. Open the ScriptEditor and type: Print("hello, world!") Save the script as test.mcs and drag it into MicroCity. In the main interface of the program, go to the Modules tab on the left side, open test, and double-click on main to execute the script you just wrote. The information about the execution of the script will be displayed in the Messages panel at the bottom of the program interface. For more information on how to use MicroCity, you can refer to the documentation found on this site, which is a mirror of the documentation provided on GitHub: MicroCity Documentation. You can also refer to the documentation of MicroCtiy on GitHub at MicroCity.'},{header:"MicroCityNotes Repository",slug:"microcitynotes-repository",content:`If users in China have difficulty accessing GitHub, they can also visit the Synchronized Site hosted on Netlify.
If you find any issues with the documentation or notes, please feel free to submit a Pull Request or provide Issues to help make it better😋. This post is translated using ChatGPT, please feedback if any omissions.`}]},{path:"/notes/3d-objects.html",title:"3D 对象",pathLocale:"/",contents:[{header:"3D 对象",slug:"_3d-对象",content:"本节将介绍 MicroCity Web 中的三维场景对象及其控制函数。"},{header:"添加对象",slug:"添加对象",content:`向场景中添加对象，函数形式如下
local obj = scene.addobj([类型], {key1 = value1, key2 = value2, ...})`},{header:"对象可选属性列表",slug:"对象可选属性列表",content:`添加到场景中的对象通常支持设置以下属性中的某些属性 对象属性
含义 color
对象的颜色。颜色的格式支持内置颜色、十六进制、RGB。与 场景背景颜色 的设置相同 opacity
透明度 hcolor
选中时的颜色 size
对象的大小，默认值为1 length
对象的长度，常用于 box(立方体) width
对象的宽度，常用于 box(立方体) height
对象的高度，常用于 box(立方体) radius
对象圆角大小 segments
份数，通常用于设置 sphere(球体) 绘制的精度 selectable
是否可被选中 name
对象名称 text
对象文本值 font
文本字体 vertices
构成对应对象的点集合 支持添加到场景中的类型如下`},{header:"对象类型",slug:"对象类型",content:""},{header:"对象类型列表",slug:"对象类型列表",content:`label：文本标签
points：点集合
polyline：线段集合
box：立方体
sphere：球体
polygon：多边形
light：光源
mesh：点构成的面 注释
为了简洁起见，下方示例的对象可选属性中只展示对应对象的关键属性。其他通用的属性可以参考 对象可选属性列表 自行添加。`},{header:"label",slug:"label",content:`label 是文本标签。可以在 text 属性中设置label的文本。
local obj = scene.addobj('label', {text = "Hello World!"})`},{header:"points",slug:"points",content:`points 是点集合。可以只创建单个点，也可以创建多个点。每个点都有三个维度的坐标以确定其在三维空间中的位置。点的个数通过 vertices 属性确定。
下面是一个创建 points 点集对象的示例
-- 在坐标为(5,5,5)的位置创建一个点
scene.addobj("points", {vertices = {5,5,5}, size = 5}) -- 第一个点的坐标为(0,0,0)，第二个点的坐标为(5,5,5)
scene.addobj("points", {vertices = {0,0,0, 5,5,5}, size = 5})`},{header:"polyline",slug:"polyline",content:`polyline 是线段集合。当在vertices属性中输入多个点的坐标时，将会依次根据点坐标连线，得到线段集合。
因此，虽然下面两个例子中使用了相同的点坐标，但是由于点坐标输入顺序不同，得到的结果也不同。
scene.addobj("polyline", {vertices = {0,0,0, 4,6,7, -2,3,5}})
scene.addobj("polyline", {vertices = {0,0,0, -2,3,5, 4,6,7}}) polyline点顺序对比图 polyline 没有 size 属性`},{header:"box",slug:"box",content:`box 是长方体。主要通过 length、width 和 height 属性修改其形状。
local obj = scene.addobj('box', {length = 3, width = 4, height = 5})
box 对象的重要可选属性 属性
含义 length
立方体的长度 width
立方体的宽度 height
立方体的高度 基于以上三个属性，我们可以修改默认示例代码中旋转的box的形状。
--添加了length, width, height三个属性（不添加默认都为1）
local obj = scene.addobj('box', {length = 3, width = 4, height = 5}) local x = 1
local y = 1
local z = 0
while scene.render() do x = x + 0.1 y = y + 0.1 obj:setrot(x, y, z)
end 不同长宽高设置的box`},{header:"sphere",slug:"sphere",content:`sphere 是球体。可以通过 radius 属性修改其大小，还可以通过设置 segment 属性设置其模型质量。具体可以参考内置示例中地球的例子。
local obj = scene.addobj('sphere', {radius=15, segments=360})
sphere 对象的可选属性 属性
含义 radius
球体的圆角大小。可以用于控制球体的大小。 segments
球体的渲染面数。设置值越高球体的模型越精细。 不同segment对于相同sphere的影响`},{header:"polygon",slug:"polygon",content:`polygon 是多边形。主要通过 vertices 属性对其进行设置。
local obj = scene.addobj("polygon", {vertices = {-1,-1,0, -1,1,-0, 1,1,0, 1,-1,0}}) 由于此处举例的多边形为正方形，因此看上去与上面介绍的 box 没什么差别。但是当形状设置为其他类型的多边形时（如三角形、五边形等），多边形的意义就能被体现出来了。 属性
含义
说明 vertices
多边形的顶点
可以在 vertices 属性中依次设置每个点的三维坐标。第三维的坐标不会产生影响，但是起到占位作用。 size
体积
由于第三维的坐标不影响，且多边形的顶点确定后面积就已经确定，因此 size 属性通过控制每个点的第三维坐标值来控制体积。 不同size对于相同polygon体积的影响`},{header:"外部模型",slug:"外部模型",content:`引用外部文件。但是目前对于MicroCityWeb来说，暂时只能引用网站中内置的文件。
例如内置示例中引用网站内部文件在视图中生成一辆厢式货车：
local obj = scene.addobj('/res/2axle.glb')
还可以通过引用文件的网址引用外部模型：
local obj = scene.addobj('https://huuhghhgyg.github.io/ModelResource/models/F16-lite.glb') 提示
如果需要外部模型，可以到 ModelResource仓库 中找有没有合适的模型。如果其中没有合适的模型，但是你手上又有特别想用的模型，可以按照 ModelResource仓库提供的指引 进行Pull Request请求上传模型。一旦你的Pull Request被同意，Github工作流会立即将你上传的模型部署到仓库网页中供使用并以邮件形式通知。 相关信息
如果手中有三维模型资源，可以在3D Viewer中查看，也可以通过这个网站导出为 .glb 模型`},{header:"light",slug:"light",content:"设置光源的方向，可选参数 vertices 为一个三维向量，表示光的照射方向。由于MicroCity Web的场景中已经设置了很强的光源，因此此处不过多做介绍。"},{header:"mesh",slug:"mesh",content:"多个点构成的面，多见于引用的外部模型中。由于应用较少此处不做介绍。"},{header:"对象控制函数",slug:"对象控制函数",content:"下面假定要操作的三维对象为 obj"},{header:"getpos()",slug:"getpos",content:`获取 obj 对象的位置坐标 (x, y, z)
local x, y, z = obj:getpos()`},{header:"setpos()",slug:"setpos",content:`设置 obj 对象的位置坐标为 (x, y, z)
obj:setpos(x, y, z)`},{header:"getrot()",slug:"getrot",content:`获取 obj 对象在 x, y, z 方向上的旋转弧度值 (rx, ry, rz)
local rx, ry, rz = obj:getrot()`},{header:"setrot()",slug:"setrot",content:`设置 obj 对象在 x, y, z 方向上的旋转弧度值为 (rx, ry, rz)
obj:setrot(rx, ry, rz)`},{header:"getscale()",slug:"getscale",content:`获取 obj 对象在 x, y, z 方向上的缩放比例 sx, sy, sz
local rx, ry, rz = obj:getrot()`},{header:"setscale()",slug:"setscale",content:`设置 obj 对象在 x, y, z 方向上的缩放比例 sx, sy, sz
local rx, ry, rz = obj:getrot()`},{header:"getchildren()",slug:"getchildren",content:`获取 obj 对象的子对象表
local children = obj:getchildren()`},{header:"getchildren()",slug:"getchildren-1",content:`设置 obj 对象的子对象表
obj:setchildren(children_table)`},{header:"getparent()",slug:"getparent",content:`获取 obj 对象的父对象
local num = obj:getparent() 此处只返回一个数值`},{header:"setparent()",slug:"setparent",content:`设置 obj 对象的父对象为 obj0
obj:setparent(obj0)`},{header:"delete()",slug:"delete",content:`删除 obj 对象
obj:delete()`}]},{path:"/notes/3d-scene.html",title:"3D 场景",pathLocale:"/",contents:[{header:"3D 场景",slug:"_3d-场景",content:"本节将介绍 MicroCity Web 中的三维场景及其设置。"},{header:"MicroCityWeb三维场景坐标系",slug:"microcityweb三维场景坐标系",content:`MicroCity Web中的三维场景坐标系符合右手坐标系，各个坐标轴的正方向具体见下图。 MicroCity Web中的坐标系 手动绘制上图坐标轴的代码
scene.setenv({grid="plane"}) -- x
scene.addobj("polyline", {vertices = {0,0,0, 10,0,0}, color = "blue"})
scene.addobj("points", {vertices = {10,0,0}, color = "blue", size = 5})
local labelx = scene.addobj("label",{text="x"})
labelx:setpos(10,1,0)
-- y
scene.addobj("polyline", {vertices = {0,0,0, 0,10,0}, color = "green"})
scene.addobj("points", {vertices = {0,10,0}, color = "green", size = 5})
local labelx = scene.addobj("label",{text="y"})
labelx:setpos(0,11,0)
-- z
scene.addobj("polyline", {vertices = {0,0,0, 0,0,10}, color = "red"})
scene.addobj("points", {vertices = {0,0,10}, color = "red", size = 5})
local labelx = scene.addobj("label",{text="z"})
labelx:setpos(0,1,10) scene.render()`},{header:"设置场景",slug:"设置场景",content:`设置场景需要用到 setenv 函数，具体用法如下
local s = scene.setenv({grid="plane|sphere|none", bgcolor="rgb(255, 255, 255)", rotspeed=1, transpeed=1, camtype="ortho|persp", clear=true})
可以简单地表示为如下形式
local s = scene.setenv({key1 = value1, key2 = value2, ...})
其中变量 s 存放返回的环境对象。下面将详细介绍函数的可选参数。`},{header:"场景可选参数",slug:"场景可选参数",content:""},{header:"参数列表",slug:"参数列表",content:`grid：场景的背景网格
bgcolor：场景背景颜色
camtype：摄像机视角
clear：是否清除场景
rotspeed & transpeed*：鼠标操作速度调整`},{header:"grid：场景的背景网格",slug:"grid-场景的背景网格",content:`可选值 值
含义 "none"
默认值，无网格 "plane"
平地网格 "sphere"
球形网格`},{header:"bgcolor：场景背景颜色",slug:"bgcolor-场景背景颜色",content:`可选值类型 值类型
示例 内置颜色
"black", "white", "gray" 等 十六进制颜色
"#ffffff", "#fff", "#000000", "#000"等 RGB表示的颜色
"rgb(255, 255, 255)", "rgb(0, 0, 0)" 等 实例
scene.setenv({bgcolor='gray'}) --设置背景颜色为内置的gray
scene.setenv({bgcolor='#eee'}) --设置背景颜色为#eee
scene.setenv({bgcolor='rgb(255, 255, 255)'}) --设置背景颜色为白色`},{header:"camtype：摄像机视角",slug:"camtype-摄像机视角",content:`可选值 值
含义 "ortho"
正视。相当于向x和y构成的平面投影，用户视角在二维空间中。 "persp"
透视（默认值）。用户视角在三维空间中。`},{header:"clear：是否清除场景",slug:"clear-是否清除场景",content:"值设置为 true 时，清除场景 setenv 函数默认不清除原来的场景，除非手动设置参数 clear 的值为 true"},{header:"rotspeed & transpeed",slug:"rotspeed-transpeed",content:`值
含义 rotspeed
设置鼠标的旋转三维对象的速度 transpeed
设置鼠标平移三位对象的速度 提示
这两个参数通常不需要特别设置，使用默认值即可。`},{header:"其他",slug:"其他",content:""},{header:"有关高频率设置场景",slug:"有关高频率设置场景",content:`2023/03/21：目前发现过高频次设置场景会导致内存占用过高，进而导致浏览器崩溃的问题。因此建议尽量不要循环调用 scene.setenv() 函数。
如果必须这么做，请确保调用频率相对较低，这样允许浏览器有一定的时间进行GC（垃圾清理），否则可能导致浏览器崩溃。`}]},{path:"/notes/",title:"笔记",pathLocale:"/",contents:[{header:"笔记",slug:"笔记",content:""},{header:"通用知识",slug:"通用知识",content:`Lua语言快速上手
MicroCity的版本
时间推进法
面向对象编程
有关工具`},{header:"MicroCity（桌面版）",slug:"microcity-桌面版",content:`结果可视化
操作网络
模型求解`},{header:"MicroCityWeb",slug:"microcityweb",content:`用户界面简介
3D 场景
3D 对象
离散事件仿真和程序控制
混合整数规划
调试相关`},{header:"思路",slug:"思路",content:`仓库仿真
通用绘图代码
港口AGV服务流程三维仿真思路 本页目录所指的笔记内容适用于相应版本的MicroCity。特别感谢在编写和整理的过程中 孙卓老师(MicroCity作者) 给予的指导和帮助。`}]},{path:"/notes/cy-simulation.html",title:"港口AGV服务流程三维仿真思路",pathLocale:"/",contents:[{header:"港口AGV服务流程三维仿真思路",slug:"港口agv服务流程三维仿真思路",content:"本文思路仅供参考。 集装箱码头的流程仿真是一个比较复杂的仿真，需要考虑的因素、涉及到的对象比较多。本文主要介绍如何使用MicroCityWeb实现AGV从接收场桥服务到接受岸桥服务流程的思路。"},{header:"实现场桥对集装箱的抓取",slug:"实现场桥对集装箱的抓取",content:""},{header:"总体思路",slug:"总体思路",content:"实现场桥对集装箱的抓取是实现堆场仿真的第一步。这个部分我打算使用面向对象的方法实现，即将场桥和堆场抽象为对象。"},{header:"总体结构",slug:"总体结构",content:`具体的想法是将堆场对象作为数据模型(DataModel)，主要存放各种数据，如存放集装箱实体、对应位置(行、列、高度)的集装箱坐标等数据；将场桥对象作为操作器(Operator)，主要实现场桥的三维动画、实现对堆场对象中数据的管理。
这样做的好处是可以将场桥和堆场解耦合，方便后续的扩展。此外，如果对象属性考虑得比较周全，可以方便地在同一个场景中创建多个对象，实现多个场桥对堆场的操作。`},{header:"事件和任务",slug:"事件和任务",content:"我打算为整体流程中涉及到需要移动的主要实体对象创建任务序列。这样可以做到在同一个场景中实现多个场桥的并行操作，各个场桥执行各自的任务，互不干扰。此外，还需要一个总控制程序控制每个时间节点的任务执行情况，并控制场桥的三维动画。"},{header:"业务流程",slug:"业务流程",content:"在这部分的仿真中主要业务流程聚焦于集装箱的移动。因此，最重要的就是集装箱所有权的流转。集装箱的所有权流转流程如下图所示： 集装箱对象流转过程"},{header:"对象结构",slug:"对象结构",content:"以下是这个仿真中主要涉及到的对象的结构"},{header:"实现方法",slug:"实现方法",content:""},{header:"堆场规模",slug:"堆场规模",content:`对于堆场对象，由于它的功能主要是存放集装箱对象及其相关数据（比如对应位置的坐标），那么就还会出现一个问题，堆场的规模有多大？因此确定堆场的规模是一个必要的步骤。在创建堆场对象时需要确定所创建的堆场的规模，即行数、列数、高度。这样可以在创建堆场对象时就确定堆场的规模，方便后续的操作。
我的做法是首先确定堆场对象的占地大小和集装箱层数，然后由相关数据去计算最多能摆放几行几列的集装箱。 堆场占地大小方面，通过在创建对象时输入两点坐标来确定，根据两点连成的对角线构成一个矩形，从而确定堆场的占地面积。
集装箱层数方面，通过在创建对象时输入一个数字来确定。根据这两个输入就就可以确定堆场的规模。`},{header:"事件和任务",slug:"事件和任务-1",content:`由于在这个仿真中需要移动的对象主要是场桥，因此每次循环执行任务的时候只需要操作场桥即可。
因此，我打算将场桥的任务序列作为一个队列，每次循环执行任务的时候，从对象的任务序列中取出第一个任务执行，执行完毕后判断是否满足任务执行完毕的条件，如果满足则删除这个任务，执行下一个任务。这样可以保证每次循环执行任务的时候，场桥对象能够按照次序执行任务。
执行任务的方法为 executeTask(dt) ，对象根据推进时间的长短 dt 执行任务。在 executeTask(dt) 中存放了处理任务的逻辑，包括判断任务类型、执行任务、删除任务等。
如果场景中存在多个场桥，只需要将这些对象添加到执行任务对象的列表中即可。主控程序每次循环执行任务时，会遍历这个对象列表，依次执行每个对象的任务。 提示
注意此处任务执行虽然在时间点上看是同时执行的，但是其实和对象所处的序列位置有关。
一个例子就是：假设两个对象同时需要抢占位置A，那么按照任务序列的顺序，先执行的对象会抢占到位置A，后执行的对象会抢占失败，尽管它们在同一时刻都在抢占位置A。因此，此处不是严格的同时执行，而是同一时刻按照任务序列的顺序执行。`},{header:"业务流程",slug:"业务流程-1",content:`场桥首先从堆场中获取对应位置(行、列、高度)集装箱的坐标，并将吊具移动到堆场指定集装箱位置，抓取集装箱。集装箱所有权从堆场（cy.containers）转移到场桥吊具（rmg.attached）（通过解除表引用实现，将值设为 nil）。
场桥将集装箱移动到过道并放下集装箱。以同样的方式将集装箱所有权从场桥吊具（rmg.attached）移动到过道（rmg.stash），表明集装箱可以被提取。
如果有车辆将集装箱接走，则可以进一步将集装箱所有权从场桥过道（rmg.stash）移动到车辆上。`},{header:"运行结果",slug:"运行结果",content:""},{header:"实现AGV到达至服务的全流程",slug:"实现agv到达至服务的全流程",content:""},{header:"问题描述",slug:"问题描述",content:"使用事件调度法实现以上流程的三维化形式"},{header:"What's New",slug:"what-s-new",content:`上一个仿真的实现是实现这个仿真的基础。相比于上一个仿真，这个仿真最为显著的改进体现在： 使用面向对象编程模式，创建场桥、堆场（数据模型）、AGV、岸桥、船（数据模型）共4个类型的对象，并实现对象本体和其各部件的移动方法。 如果不了解面向对象编程，可以参考通用知识-面向对象编程 延续面向事件的仿真的思路，实现了总控制流程，实现同一时刻对多个对象同时进行控制（主要通过对象的 executeTask(dt) 和 maxStep() 及相关函数实现）。在面向对象的编程模式中，可以将 executeTask(dt) 和 maxStep() 视为接口，主程序通过实现这两个接口，实现对对象的控制。（尽管lua中似乎没有这部分的概念）
使用任务序列实现各个对象的流程，实现场桥和AGV之间、AGV和岸桥之间的相互等待，实现不同对象之间的任务协同。
尝试将流程从堆场至AGV延伸至岸桥、船，实现两级排队等待。`},{header:"对象设计",slug:"对象设计",content:`由于属性和函数实在太多，因此使用思维导图的形式展示对象的设计。 提示
此处占用篇幅较大，您也可以直接跳转到下一部分总体布局`},{header:"堆场",slug:"堆场",content:"堆场仍然作为数据模型。"},{header:"场桥",slug:"场桥",content:""},{header:"AGV",slug:"agv",content:""},{header:"岸桥",slug:"岸桥",content:"岸桥的代码和涉及结构主要衍生自堆场，因此后面不详细叙述。"},{header:"船",slug:"船",content:"船对象的主要作用也是作为数据模型，设计思路同堆场。"},{header:"总体布局",slug:"总体布局",content:""},{header:"总体流程",slug:"总体流程",content:"集装箱流转流程 相比于之前的仿真，这个仿真在流程上更进了一步，添加了AGV到达、排队的流程，还添加了岸桥服务、集装箱装船的流程。"},{header:"流程分析",slug:"流程分析",content:`AGV出现后，场桥、岸桥和AGV之间的流程也变得更加复杂。首先，AGV的到达是随机的，因此可能造成排队现象。其次，AGV的到达会触发场桥和AGV的流程，而场桥和AGV的流程又会触发岸桥的流程。因此，这个仿真的流程是一个多级流程，需要考虑多个对象之间的流程协同。
特别是AGV和场桥之间的流程，其中存在AGV和场桥的相互等待。AGV到达的时候需要通知场桥提取货物。在场桥提取的过程中: 场桥需要等待AGV到达指定位置后，才能将货物移动到AGV上
AGV需要等待场桥的抓取并将集装箱放在AGV上以后，才能将集装箱的所有权从场桥转移到AGV上 因此，AGV和场桥之间的流程是一个相互等待的流程。具体流程可以参考下图。 而岸桥的流程和场桥的流程类似，也是一个相互等待的流程。主要体现在： 当AGV到达指定位置时，岸桥可能在服务别的AGV，此时AGV要进行等待
当AGV刚进入岸桥的服务区域时，通知岸桥到达指定位置，如果岸桥先到达指定位置，则此时岸桥要进行等待`},{header:"实现方法",slug:"实现方法-1",content:""},{header:"排队流程的实现",slug:"排队流程的实现",content:`AGV排队的情况我选择使用元胞自动机作为停车位的数据模型。其中，停车位的长度为：
停车位长度=对应数据模型中1个集装箱的长度+集装箱间隔长度
\\text{停车位长度}=\\text{对应数据模型中1个集装箱的长度}+\\text{集装箱间隔长度}
停车位长度=对应数据模型中1个集装箱的长度+集装箱间隔长度
由于AGV的长度比1个集装箱略长，因此需要占用2个停车位的长度。每次执行任务时，AGV会判断前方空间是否被阻塞，如果没被阻塞则向前移动。如果前方位置为目标bay，则前进后等待场桥作业，获取集装箱后继续以元胞为单位向前移动直到离开。场桥部分排队和岸桥部分排队原理也相同。 AGV元胞自动机排队模型示意图`},{header:"事件调度法的实现",slug:"事件调度法的实现",content:`在之前的仿真中，我使用了非固定步长的时间推进法来实现仿真。在这个仿真中，我使用了事件调度法来实现仿真。相比于时间推进法，事件调度法的特点是可以准确地将事件推进到发生的时刻，从而执行对应事件。
你可能注意到了对象设计部分我将 executeTask() 和 maxstep() 标记为(interface)，这是由于为了计算准确的推进时间，我需要在每个对象中实现 executeTask() 和 maxstep() 方法。其中，executeTask() 方法用于执行任务，maxstep() 方法用于计算距离到达下一个事件的发生时间（当前任务还剩多久能执行完），然后得到最大能够推进的时间，再去跟系统运行得到的间隔时间dt进行比较得到最大的推进时间。
我认为课件中的下面这张图能够很好地表示如何使用事件调度法来进行仿真并刷新场景。其中，第一行指的是仿真的业务流程，第二行Refresh部分指的是刷新场景。`},{header:"运行结果",slug:"运行结果-1",content:`注意
由于以下部分内容均为动图且图片体积较大。由于本站托管于GitHubPage，因此如果您没有的特殊网络环境可能会造成动图加载缓慢甚至加载失败。 提示
如果您直接观看动图的时候动图区域出现了摩尔纹，可以尝试将动图点开放大看，再看看是否有改善。 场桥运行过程 岸桥运行过程 总体运行过程`}]},{path:"/notes/debug.html",title:"调试相关",pathLocale:"/",contents:[{header:"调试相关",slug:"调试相关",content:"本页介绍 MicroCity Web 调试（debug）相关的函数和快捷键。"},{header:"清除输出",slug:"清除输出",content:"右键输出区域可以输入命令，输入 print() 可以清除输出区域的内容。"},{header:"调试器快捷键",slug:"调试器快捷键",content:`在调试程序的过程中，特别是在断点处，可以使用F9（Step Over）、F10（Step Into）、F11（Step Out）控制程序运行。 F9 Step Over：跳过当前行，执行下一行
F10 Step Into：进入当前行，如果当前行是函数调用，则进入函数内部
F11 Step Out：跳出当前函数，执行函数调用的下一行`},{header:"Debug命令",slug:"debug命令",content:""},{header:"监视变量",slug:"监视变量",content:`在控制台使用 debug.watch() 命令监视变量。
例如，在调试的过程中想要监视 a 变量的值，可以使用 debug.watch('a') 命令。 右键输出区域可以输入命令`},{header:"堆栈跟踪",slug:"堆栈跟踪",content:`使用 debug.traceback() 函数可以打印出当前的堆栈跟踪信息
function myFunction() -- 某些代码逻辑 print(debug.traceback("Stack trace")) -- 其他代码逻辑
end function anotherFunction() myFunction()
end anotherFunction()
输出结果
Stack trace
stack traceback:
[string "function myFunction() ..."]:3: in function 'myFunction'
[string "function myFunction() ..."]:8: in function 'anotherFunction'
[string "function myFunction() ..."]:11: in main chunk`},{header:"运行状态",slug:"运行状态",content:`debug.debug() 进入Debug模式。常用于在程序运行过程中进入Debug模式。如果想要启动时就进入Debug模式，可以右键顶部▶️按钮。详见 用户界面简介 - 运行状态。
debug.pause() 暂停程序运行。顶部运行按钮▶️会亮起，暂停按钮⏸️熄灭。`},{header:"其他调试命令",slug:"其他调试命令",content:`Lua 的 Debug 函数大多都适用于 MicroCity Web，可以参考： The Debug Library | Lua 5.4 Reference Manual
Lua 调试(Debug) | 菜鸟教程`},{header:"文件保存",slug:"文件保存",content:`MicroCity Web 在保存文件时可以选择保存为 .mw 文件和 .lua 文件。 .mw 文件：打包当前的整个项目，包含当前打开的代码文件和虚拟磁盘中的文件。
.lua 文件：仅保存当前编辑的代码文件。常用于仅编写 lua 脚本和修改自定义.lua库文件的情况。`}]},{path:"/notes/event-scheduling.html",title:"离散事件仿真和程序控制",pathLocale:"/",contents:[{header:"离散事件仿真和程序控制",slug:"离散事件仿真和程序控制",content:"本文主要介绍如何在 MicroCity Web 中实现离散事件仿真和程序控制。"},{header:"协程",slug:"协程",content:"MicroCity Web中提供了几个协程相关函数，方便实现事件调度法。如果主要用于实现事件调度法且尚不清楚事件调度法的原理，可以阅读 时间推进法-事件调度法 部分了解相关概念。"},{header:"coroutine.queue",slug:"coroutine-queue",content:`将函数或协程添加到协程队列中等待
coroutine.queue(rt, f|co [, 参数列表...])
参数 参数
含义 rt
相对当前队列的时间，要求大于等于0。换句话说，也就是再过rt执行输入的函数或协程 f/co
函数或协程。如果是函数，只需要输入函数名`},{header:"coroutine.qtime",slug:"coroutine-qtime",content:`获取当前队列的时间
local time = coroutine.qtime()`},{header:"示例",slug:"示例",content:`此处提供两个示例 协程添加任务：使用协程添加任务，并在函数中显示当前队列时间
车辆移动：使用协程实现以真实世界的时间刷新场景`},{header:"协程添加任务",slug:"协程添加任务",content:`这个示例中展示了如何使用协程添加任务，并在函数中显示当前队列时间
function Show() print("当前时间：",coroutine.qtime())
end
function ShowShort() print("当前时间short：",coroutine.qtime())
end coroutine.queue(10, Show)
coroutine.queue(20, Show)
coroutine.queue(15, ShowShort)
coroutine.queue(5, Show) -- 结果：
-- 当前时间： 5.0
-- 当前时间： 10.0
-- 当前时间short： 15.0
-- 当前时间： 20.0`},{header:"车辆移动",slug:"车辆移动",content:`这个示例中展示了如何使用协程实现以真实世界的时间刷新场景
scene.setenv({grid='plane'}) -- 设置场景网格背景 -- 车辆
local car = scene.addobj('/res/2axle.glb')
car.speed = 1 --车速度 -- 初始时间
local t = os.clock()
local dt = 0 -- 刷新时间状态t和dt(按照CPU间隔步进，达到和真实时间同步)
function refreshtime() dt = os.clock() - t t = os.clock()
end -- 协程更新场景
function update() if not scene.render() then return end --渲染场景并检查程序是否中止 coroutine.queue(dt, update) --根据CPU步进时间添加下一次更新 carmove() --移动车辆 refreshtime() --计算本次dt
end -- 车辆移动
function carmove() print() print("car move at ",t) local x, y, z = car:getpos() car:setpos(x,y,z+dt*car.speed)
end -- 初始更新（添加第一次更新）
-- 由于函数中涉及到添加后续更新，因此更新会自动循环
coroutine.queue(dt,update)
在MicroCityWeb中打开`},{header:"随机数",slug:"随机数",content:""},{header:"随机数生成原理简介",slug:"随机数生成原理简介",content:`在计算机科学领域，所谓的“随机选择”实际上并非真正的随机。事实上，计算机进行的一切操作都不具备真正的随机性。已经有研究证明了“无法制造一台真正能够生成绝对随机数的计算机”的事实。因此，我们目前所使用的随机数实际上是伪随机数。
那么，如何生成这些伪随机数呢？一种常见的方法是利用算法，根据给定的初始数字（随机数种子）来产生一个数字序列。该算法根据种子进行初始化，并不断迭代生成后续的随机数序列。如果使用相同的种子，那么生成的随机数序列也将是相同的。
为了产生不同的随机序列，通常会利用计算机的时钟作为种子。这种方法的基本原理是：由于我们无法准确知道程序启动的时刻，因此每次启动程序都可以认为是得到了一个随机的时刻，从而获得一个不同的种子。由于我们无法确定种子的具体取值，因此这种方法产生的随机数序列是不可预测的，因为我们无法确定种子的具体取值。`},{header:"创建随机数种子",slug:"创建随机数种子",content:`local seed = math.randomseed(x [, dist])
参数 参数
含义 x
随机数种子，会根据输入的不同数值返回不同的随机数。如果需要每次的值都不一样，可以考虑将随机数种子x设置为当前时间 dist
随机数分布（可选参数）。如果不设置，默认为均匀分布。如果设置这个参数，还可以设置 mu 和 sigma 作为对应分布的参数 dist参数可以设置键值为三种分布： 'normal'：正态分布
'exponential'：指数分布
'poisson'：泊松分布 此外，还可以设置这几种分布的参数，其中 mu 键为均值，sigma 键为方差。`},{header:"示例",slug:"示例-1",content:`-- 创建泊松分布的随机数种子
local seed = math.randomseed(os.time(), {distribution = "poisson", mu = "3"}) -- 泊松分布，均值为3 -- 输出随机数
print(seed:random())`},{header:"程序控制",slug:"程序控制",content:`本文中的程序控制主要是指如何使用用户界面中的按钮控制程序的运行，包括暂停、恢复、停止等。 命令栏 主要是指命令栏的前3个按钮 MicroCity Web中的程序控制主要是指3D界面渲染中通过 scene 对象实现的3D界面运动的暂停、恢复、停止，具体的函数如下：
local state = scene.render()
scene.render()函数的返回值与命令栏中的停止按钮⏹绑定，可以用于检查程序的运行状态：true表示程序正在运行，false表示程序已经被终止。此处示例将程序的运行状态存放于 state 变量中，可以通过 state 变量的值来控制程序的运行状态。
3D对象的暂停渲染也是通过调用 scene.render() 来实现的。如果刷新3D对象是通过不断调用 scene.render() 函数实现，并且刷新间隔时间不是通过 os.sleep() 来控制，那么可以实现在3D界面上将渲染暂停在某个状态。这是因为如果使用 os.sleep() 来控制3D对象的运动速度，那么当点击暂停按钮时，很可能正好处于 os.sleep() 的过程中，导致程序无法立即响应，从而导致暂停按钮无效。因此，建议在控制3D对象的运动速度时避免使用 os.sleep()，而是通过添加其他参数的方式来控制推进时长，以达到控制3D对象运动速度的目的。`}]},{path:"/notes/lp.html",title:"模型求解",pathLocale:"/",contents:[{header:"模型求解",slug:"模型求解",content:`在MicroCity中可以对数学模型进行求解。接下来，本文将介绍在MicroCity中求解数学模型的常见过程，并提供一些技巧帮助你更好地建模。
规划模型中所有函数的详细用法可以参考文档 4.8混合整数线性规划 提示
本页内容基于 MicroCity 桌面版。如果你在寻找 MicroCity Web 版的混合整数规划求解方法，请参考 MicroCity Web 笔记中对应的 混合整数规划 部分。`},{header:"创建模型对象",slug:"创建模型对象",content:`创建规划模型对象，存入变量lp中。
local lp = CreateLP() 官方文档中将创建的数学模型对象存入变量LPModel中，作用同本文的lp`},{header:"写入数学模型",slug:"写入数学模型",content:`此时，数学模型的对象已经创建并存入了变量lp中，可以对其进行更进一步的操作。数学模型一般分为两个部分： 目标函数
约束方程 接下来，先介绍创建目标函数的具体做法。`},{header:"创建目标函数",slug:"创建目标函数",content:`MicroCity中，使用SetObjectFunction()设置模型对象的目标函数。允许选择目标函数求最大值或最小值。具体用法如下： 最大值
最小值 SetObjFunction(lp, coeff, "max") --求最大值 SetObjFunction(lp, coeff, "min") --求最小值 "min"和"max"不区分大小写，写"MIN"和"MAX"也可以`},{header:"参数说明及示例",slug:"参数说明及示例",content:`参数
作用 lp
数学模型对象。将数学模型输入函数中，为模型设置目标函数 coeff
目标函数系数，是一个table类型的变量。用于确定模型中目标函数的系数。 "min"或"max"
确定目标函数求最大还是求最小。 coeff是目标函数的系数列表，是一个table类型的变量。假设你要求函数4x1+12x2+18x34x_1+12x_2+18x_34x1​+12x2​+18x3​的最小值，则添加目标函数的做法如下：
-- 假设你已经创建了模型对象，并存入变量lp中 -- 4*x1 + 12*x2 + 18*x3
local coeff = {4, 12, 18} -- 设置目标函数：求最小
SetObjFunction(lp, coeff, "min")`},{header:"添加约束方程",slug:"添加约束方程",content:`在MicroCity中，添加模型约束的函数为AddConstraint()，用法如下： ≤
≥
= -- 使用符号表达
AddConstraint(lp, cons, "<=", b) -- 或者可以使用缩写表达
AddConstraint(lp, cons, "le", b) -- 使用符号表达
AddConstraint(lp, cons, ">=", b) -- 或者可以使用缩写表达
AddConstraint(lp, cons, "ge", b) -- 使用符号表达
AddConstraint(lp, cons, "==", b) -- 或者可以使用缩写表达
AddConstraint(lp, cons, "eq", b)`},{header:"参数说明",slug:"参数说明",content:`参数
作用 lp
数学模型对象。将数学模型输入函数中，为模型添加约束 cons
约束方程系数。和设置目标函数中的cons一样，也是一个table类型的变量。用于确定约束方程中各个变量的系数。 "<=" 或 ">=" 或 "=="，或其对应的字母表达
确定约束方程与右端项的关系 b
一个数字，表示约束方程的右端项。可以是变量也可以是常量`},{header:"示例",slug:"示例",content:`上面已经设置了目标函数为4x1+12x2+18x34x_1+12x_2+18x_34x1​+12x2​+18x3​，假设你要为这个函数添加两个约束方程：
{x1+3x3≥32x2+2x3≥5
\\left\\{\\begin{matrix} x_1+3x_3\\ge3 \\\\ 2x_2+2x_3\\ge5 \\end{matrix}\\right. {x1​+3x3​≥32x2​+2x3​≥5​
添加对应约束方程：
-- 添加约束：x1+3*x3≥3
cons = { 1, 0, 3 }
AddConstraint(lp, cons, ">=", 3) -- 添加约束：2*x2+2*x3≥5
cons = { 0, 2, 2 }
AddConstraint(lp, cons, ">=", 5)
不难注意到，系数的个数和目标函数中变量的个数一致。因此，在编程求解之前首先要搞清楚变量的总数，并安排好各个变量的位置。`},{header:"设置变量类型",slug:"设置变量类型",content:`MicroCity中的数学规划支持整数规划。如果没有对变量设置SetUnbounded()，默认变量的取值范围是非负实数(≥0)。下面介绍变量类型设置的详细做法。
你可以将模型中第i个变量设置为整数变量或0-1变量。如果不将变量设置为这些类型，则默认变量为非负实数。 整数变量
0-1变量 SetInteger(lp, i) --整数变量 SetBinary(lp, i) --0-1变量 让第i个变量的值可以是负数（默认取不到负数）：
SetUnbounded(lp, i)`},{header:"模型求解和输出",slug:"模型求解和输出",content:""},{header:"模型求解",slug:"模型求解-1",content:`由于目标函数和约束方程都已经添加完毕，因此模型的求解就很简单了，只需要一步：
SolveLP(lp)
执行完这条语句后，存放于变量lp内的数学模型就求解完毕了🎉`},{header:"输出",slug:"输出",content:`求解完还需要输出，否则就不知道求解的结果如何。以下是常用的输出求解结果的函数。
获取目标函数值：
GetObjective(lp)
获取第i个变量的值：
GetVariable(lp, i)`},{header:"SolveLP",slug:"solvelp",content:`SolveLP()函数在求解完毕后也有输出，输出代码的含义如下： 输出代码
含义 0
成功 -1
无效的LP模型 -2
无内存 1
次优 2
无可行解 3
无界解 4
退化 5
遇到数值错误 6
用户终止了求解 7
超时错误 其他返回值表示的含义请参阅文档 4.8混合整数线性规划 中的SolveLP()函数。`},{header:"模型求解示例",slug:"模型求解示例",content:`这里提供一个简单的从建模至求解的示例供参考。（其实就是将前面的拼起来）
算例：
minf=4x1+12x2+18x3s.t.{x1+3x3≥32x2+2x3≥5x1,x2,x3∈N
minf=4x_1+12x_2+18x_3\\\\
s.t.\\left\\{\\begin{matrix} x_1+3x_3\\ge3 \\\\ 2x_2+2x_3\\ge5 \\\\ x_1,x_2,x_3\\in N
\\end{matrix}\\right. minf=4x1​+12x2​+18x3​s.t.⎩⎨⎧​x1​+3x3​≥32x2​+2x3​≥5x1​,x2​,x3​∈N​ N表示自然数（非负整数集合） 脚本
-- 创建线性规划对象
local lp = CreateLP() local n = 3 --设置目标函数个数 -- 目标函数：4*x1 + 12*x2 + 18*x3
-- 设置目标函数系数，目标函数求最小
local coeff = { 4, 12, 18 }
SetObjFunction(lp, coeff, "min") -- 添加约束1：x1 + 3*x3 ≥ 3
cons = { 1, 0, 3 }
AddConstraint(lp, cons, ">=", 3) -- 添加约束2：2*x2 + 2*x3 ≥ 5
cons = { 0, 2, 2 }
AddConstraint(lp, cons, ">=", 5) -- 由于没有设置SetUnbounded()，
-- 默认所有变量取值非负，
-- 因此不用针对变量非负添加约束。 -- 设置所有变量为整数
for i = 1, n do SetInteger(lp, i)
end -- 求解模型
SolveLP(lp) -- 输出目标函数值
print("目标函数值：",GetObjective(lp)) -- 输出各个变量的值
for i = 1, n do print("x",i,"=",GetVariable(lp, i))
end
输出结果
目标函数值：42
x1=0
x2=2
x3=1`},{header:"建模的一些技巧",slug:"建模的一些技巧",content:""},{header:"线性化",slug:"线性化",content:`有时候我们会遇到多下标的建模问题，如决策变量为xijx_{ij}xij​，这个时候就要将其进行线性化编码。
假设决策变量本身的形状共有3行4列，即： 列1
列2
列3
列4 x11x_{11}x11​
x12x_{12}x12​
x13x_{13}x13​
x14x_{14}x14​ x21x_{21}x21​
x22x_{22}x22​
x23x_{23}x23​
x24x_{24}x24​ x31x_{31}x31​
x32x_{32}x32​
x33x_{33}x33​
x34x_{34}x34​ 假设目标函数要将这些决策变量求和，即 F=∑i=13∑j=14xijF=\\sum_{i=1}^3\\sum_{j=1}^4x_{ij}F=∑i=13​∑j=14​xij​ 如果要将其输入目标函数，此时可以将其线性化为 x11+x12+...+x14+x21+...+x24+x31+...+x34x_{11}+x_{12}+...+x_{14}+x_{21}+...+x_{24}+x_{31}+...+x_{34}x11​+x12​+...+x14​+x21​+...+x24​+x31​+...+x34​
由于只有两个维度，因此可以使用两个for实现：
local cons = {}
for i = 1, 3 do -- 第一维 for j = 1, 4 do -- 第二维 cons[4 * (i - 1) + j] = 1 -- 填入系数 -- 其中 4 * (i - 1) + j 的思想类似于进位 end
end --结果：
-- cons长度为12，值都为1`},{header:"例题：指派模型",slug:"例题-指派模型",content:`下面以一个实际的例题来看看多维线性化的具体使用方法及其方便之处。
甲、乙、丙、丁四人配送A，B，C，D四种货物，所需时间如表所示。若一种货物只交一人送货，则应指派何人配送何种货物，能使总的时间最少？ 人\\工件
A
B
C
D 甲
14
9
4
15 乙
11
7
9
10 丙
13
2
10
5 丁
17
9
15
13 假设货物A、B、C、D对应的编号依次为1、2、3、4，设 xij=1x_{ij}=1xij​=1 时表示第i个人送j货，xij=0x_{ij}=0xij​=0 时表示第i个人不送j货。
则上述问题的数学模型可以表示为
minZ=∑i=14∑j=14cijxijs.t.{∑j=14xij=1,i=1,2,...,4∑i=14xij=1,j=1,2,...,4xij=0,1
minZ=\\sum_{i=1}^4\\sum_{j=1}^4c_{ij}x_{ij}\\\\
s.t.\\left\\{\\begin{matrix} \\sum_{j=1}^4x_{ij}=1, i=1,2,...,4 \\\\ \\sum_{i=1}^4x_{ij}=1, j=1,2,...,4 \\\\ x_{ij}=0,1
\\end{matrix}\\right. minZ=i=1∑4​j=1∑4​cij​xij​s.t.⎩⎨⎧​∑j=14​xij​=1,i=1,2,...,4∑i=14​xij​=1,j=1,2,...,4xij​=0,1​
求解代码
-- 效率矩阵
local cost = { { 14, 9, 4, 15 }, { 11, 7, 9, 10 }, { 13, 2, 10, 5 }, { 17, 9, 15, 13 }
} local lp = CreateLP() -- 创建目标函数
local coeff = {}
for i = 1, 4 do for j = 1, 4 do -- 此处可以轻松将二维数组转换为一维数组 coeff[4 * (i - 1) + j] = cost[i][j] end
end SetObjFunction(lp, coeff, "min") --添加约束
for k = 1, 4 do -- 第i维的值控制 local cons = {} for i = 1, 4 do for j = 1, 4 do if i == k then -- j求和，判断i cons[4 * (i - 1) + j] = 1 else cons[4 * (i - 1) + j] = 0 end end end AddConstraint(lp, cons, "==", 1)
end for k = 1, 4 do -- 第j维的值控制 local cons = {} for i = 1, 4 do for j = 1, 4 do if j == k then --i求和，判断j cons[4 * (i - 1) + j] = 1 else cons[4 * (i - 1) + j] = 0 end end end AddConstraint(lp, cons, "==", 1)
end -- 求解模型
SolveLP(lp) -- 输出目标函数值
print("目标函数值：",GetObjective(lp)) -- 输出决策变量
for i = 1, 4 do -- 第一维 for j = 1, 4 do -- 第二维 local x = GetVariable(lp, 4 * (i - 1) + j) if x~=0 then print("x[", i, "][", j, "]=", x) end end
end
输出
目标函数值：29
x[1][3]=1
x[2][1]=1
x[3][4]=1
x[4][2]=1 结果
人
配送工件 x13=1x_{13}=1x13​=1
甲
C x21=1x_{21}=1x21​=1
乙
A x34=1x_{34}=1x34​=1
丙
D x42=1x_{42}=1x42​=1
丁
B`},{header:"中间变量的处理",slug:"中间变量的处理",content:`有时候模型中会存在一些中间变量，这些变量必须要在矩阵中有对应的位置才能对其进行求解，而这些中间变量不参与目标函数值的运算。可以将中间变量对应位置的系数设为0。
假设x1,x2,x3,x4x_1,x_2,x_3,x_4x1​,x2​,x3​,x4​为决策变量，y1,y2y_1,y_2y1​,y2​为中间变量。目标函数为:
z=∑i=14xi
z=\\sum_{i=1}^4x_i
z=i=1∑4​xi​
则目标函数系数可以设为：
local fcons = {1, 1, 1, 1, 0, 0}
接下来按照一般流程做就可以啦😎`}]},{path:"/notes/lua.html",title:"Lua语言快速上手",pathLocale:"/",contents:[{header:"Lua语言快速上手",slug:"lua语言快速上手",content:"由于MicroCity采用的脚本语言是Lua，因此在开始使用MicroCity编写脚本之前需要先熟悉Lua的基本用法。本文介绍了MicroCity编写Lua脚本的常用的语法，能够帮助你快速地根据其他编程语言中的概念理解MicroCity脚本编写的总体思路。"},{header:"变量和函数定义",slug:"变量和函数定义",content:`lua会自动识别变量类型，因此无需在变量名称前定义变量类型，直接赋值即可。
a = 1.5
b = "string"
c = {} -- c为表，见下文介绍
函数的定义
function add(a, b) return a + b
end
上方简单定义了一个add()函数，目的是把输入的两个变量相加返回结果。
变量分为全局变量和局部变量，函数也是如此。局部变量和函数的定义如下。
-- 定义局部函数
local function show(msg) print(msg)
end -- 定义局部变量
local a = 1
如果局部定义的内容（函数或变量）和全局定义的内容有冲突，以局部的内容优先。存在这种冲突时，你操作的内容是局部的内容。
如果没有明确需要操作全局变量，建议尽量将变量定义为局部变量。这种做法可能会减少bug的出现，也是更加安全的做法。`},{header:"条件",slug:"条件",content:`就是if，具体实现形式有如下几种： 普通形式 if condition then print("condition==true")
end 带else的形式 if condition then print("condition==true")
else print("condition==false")
end 以及使用elseif的形式 if number > 0 then print("number>0")
elseif number < 0 then print("number<0")
else print("number==0")
end
Lua中相等判断的运算符为==，不等判断的运算符为~=。您可以将运算符运用于条件表达式。下面是一个简单的举例：
print(1==1) -- true
print(1~=1) -- false`},{header:"循环",slug:"循环",content:"记录一下最常用的两种循环: for&while"},{header:"for",slug:"for",content:`最普通的形式
-- 输出1到10共10个数
for i = 1:10 do print(i)
end
如果你比较熟悉C语言或C类语言，以上代码对应的形式如下
for(int i=1; i<=10; i++){ printf("%d\\n",i);
}
考虑步长
-- 输出10到1共10个数，步长为-1
for i = 10:1:-1 do print(i)
end 步长为负数时，需要注意开始和结束的数字也应该为倒序 泛型循环
可以直接遍历一个表中的所有元素。
i为表元素的下标，从1开始；v为表元素的值。
a = {4,7,9}
for i,v in ipairs(a) do print("index=",i,"\\tvalue=",v)
end ipairs适用于数组（i估计是integer的意思），pairs适用于对象，因为数组也是对象，所以pairs用于数组也没问题。`},{header:"while",slug:"while",content:`while的常用方法就一个
local condition = true
while condition do print("while==true") condition = false
end
和C类语言一样。只要condition为true的时候while就会一直执行。当condition被设置为false的时候，while就会结束运行。`},{header:"循环操作符",slug:"循环操作符",content:`同其他语言的规定一样，break关键字用于跳出循环。
LUA中没有continue，只有break。但是可以可以通过使用if+break的形式实现continue的功能。`},{header:"Lua的小特性：表",slug:"lua的小特性-表",content:`虽然Lua里面把它自己的数组称作table，但是我认为这个数据结构更类似于Python的集合或者json，里面可以存储任何东西，不受结构约束。
collection = {{"a", 1, 2}, "abc", {2, 3}}
如果需要查询数组的长度，只需要在数组名前面添加#即可得到
list = {1, 2, 3, 4, 5}
for i=1,#list do print(list[i])
end
Lua的数组（表）下标从1开始，不同于C类语言的0。此处以前面定义的collection为例：
-- collection = {{"a", 1, 2}, "abc", {2, 3}}
print(collection[1][1]) --a
print(collection[2]) --abc
print(collection[3][2]) --3`},{header:"索引",slug:"索引",content:`Lua的表的索引非常灵活，可以是数字，也可以是字符串，甚至是其他类型的数据。
下面是一些简单的例子：
local list = {} -- 以数字为索引
list[1] = "a" -- 以字符串为索引
list["b"] = 2
list.message = "hello world" -- 等价于list["message"] = "hello world" print(list[1]) -- a
print(list["b"]) -- 2
print(list.message) -- hello world`},{header:"添加元素",slug:"添加元素",content:`向指定位置添加
table.insert(table, pos, value) --在指定位置(pos)添加元素
或者
table.insert(table, value) --向最后添加元素
示例
list = {1, 2, 3, 4, 5}
table.insert(list, 6)
-- {1, 2, 3, 4, 5, 6}`},{header:"删除元素",slug:"删除元素",content:`table.remove(table, pos)
示例
list = {1, 2, 3, 4, 5}
table.remove(list, 2)
-- {1, 3, 4, 5}`},{header:"table的排序",slug:"table的排序",content:""},{header:"默认排序方法",slug:"默认排序方法",content:`可以使用函数对列表进行排序，最简单的用法如下
table.sort(list) -- 默认升序排序
此处提供一个实验案例
-- 函数：打印列表
function PrintList(list) -- 输出列表 local listStr = "" for i = 1, #list do listStr = listStr .. list[i] .. " " end print(listStr)
end local list = { 3, 7, 2, 5, 4 } -- 原始列表 PrintList(list) -- 输出原始列表
table.sort(list) -- 对列表进行排序
PrintList(list) -- 输出排序后的列表 -- 结果：
-- 3 7 2 5 4 (原始列表)
-- 2 3 4 5 7 (排序后的列表)`},{header:"自定义排序方法",slug:"自定义排序方法",content:`table.sort函数也可以使用自定义排序规则，但是这个规则你需要写在函数里。
table.sort(list, function(a, b))
function(a, b)是自定义的排序规则，要求最终返回一个bool值(true或false)。a和b分别为列表中的任意两项，如果函数返回true，则a在b的前面，否则b在a的前面。
下面提供了2个示例供参考。`},{header:"示例1：上面代码改为降序输出",slug:"示例1-上面代码改为降序输出",content:`-- 此处省略PrintList()函数，函数代码与上方相同 local list = { 3, 7, 2, 5, 4 } -- 原始列表 PrintList(list) -- 输出原始列表
table.sort(list, function(a, b) -- 对列表进行排序 return a > b -- 降序排序，如果a>b，则a在b前面
end)
PrintList(list) -- 输出排序后的列表 -- 结果：
-- 3 7 2 5 4 (原始列表)
-- 7 5 4 3 2 (排序后的列表)`},{header:"示例2：二维数组中的排序",slug:"示例2-二维数组中的排序",content:`-- 函数：打印列表
function PrintList(list) -- 输出列表 local listStr = "" for i = 1, #list do listStr = listStr .. "\\n" .. list[i][1] .. ", " .. list[i][2] end print(listStr)
end -- 原始列表
local list = { { 3, 5 }, { 7, 6 }, { 2, 2 }, { 5, 1 }, { 4, 3 } } PrintList(list) -- 输出原始列表 -- 以列表中每项的第1维降序排序
table.sort(list, function(a, b) return a[1] > b[1]
end)
PrintList(list) -- 输出排序后的列表 -- 以列表中每项的第2维降序排序
table.sort(list, function(a, b) return a[2] > b[2] end)
PrintList(list) -- 输出排序后的列表 -- 结果：
-- 原始列表：
-- 3, 5
-- 7, 6
-- 2, 2
-- 5, 1
-- 4, 3 -- 以第1维降序排序：
-- 7, 6
-- 5, 1
-- 4, 3
-- 3, 5
-- 2, 2 -- 以第2维降序排序：
-- 7, 6
-- 3, 5
-- 4, 3
-- 2, 2
-- 5, 1`},{header:"table的引用",slug:"table的引用",content:`当没有对table进行对拷，而直接复制的时候，刚刚新得到的list2相当于原list1的引用，称为浅拷贝。当你修改浅拷贝得到的list2中的元素时，由于两个table是引用的关系，list1中的元素也会随之改变。
上面的示例代码也遵循了这一原理。下面将用一个新的例子突出这一特点。`},{header:"示例：浅拷贝",slug:"示例-浅拷贝",content:`function PrintList(list) -- 输出列表 local listStr = "" for i = 1, #list do listStr = listStr .. list[i] .. " " end print(listStr)
end list1 = { 1, 2, 3, 4, 5 }
PrintList(list1)
-- 1 2 3 4 5 list2 = list1
PrintList(list2)
-- 1 2 3 4 5 -- 修改list2的第2个元素
list2[2] = 10
PrintList(list2)
-- 1 10 3 4 5 PrintList(list1)
-- 1 10 3 4 5`},{header:"示例：深拷贝",slug:"示例-深拷贝",content:`而如果想要复制一个全新的列表list2怎么办呢？那么你就需要对table中的元素进行逐个复制，也称深拷贝。
-- PrintList函数代码与上方相同 list1 = { 1, 2, 3, 4, 5 }
PrintList(list1)
-- 1 2 3 4 5 list2 = {} -- 新建一个空列表 -- 将list1的元素复制到list2
for index, value in pairs(list1) do table.insert(list2, value)
end
PrintList(list2)
-- 1 2 3 4 5 -- 修改list2的第2个元素
list2[2] = 10
PrintList(list2)
-- 1 10 3 4 5 PrintList(list1)
-- 1 2 3 4 5 (没有发生变化)
在这个例子中，修改深拷贝得到的list2中的元素并不会对原来的list1产生影响。`}]},{path:"/notes/mip.html",title:"混合整数规划",pathLocale:"/",contents:[{header:"混合整数规划",slug:"混合整数规划",content:"本文档介绍MicroCity Web中混合整数规划的建模方法。"},{header:"创建混合整数规划模型",slug:"创建混合整数规划模型",content:`创建整数规划模型对象
local mip = math.newmip() -- 将创建的模型对象赋值给 mip`},{header:"设置目标函数",slug:"设置目标函数",content:`MicroCity Web中，模型的第一行是目标函数，使用mip:addrow()函数添加。
允许选择目标函数求最大值或最小值。具体用法如下： 最大值
最小值 mip:addrow(coeff, 'max') --求最大值 mip:addrow(coeff, 'min') --求最小值`},{header:"参数说明及示例",slug:"参数说明及示例",content:`参数
作用 mip
数学模型对象。将数学模型输入函数中，为模型设置目标函数 coeff
目标函数系数，是一个table类型的变量。用于确定模型中目标函数的系数。 "min"或"max"
确定目标函数求最大还是求最小。 coeff是目标函数的系数列表，是一个table类型的变量。假设你要求函数
4x1+12x2+18x3
4x_1+12x_2+18x_3
4x1​+12x2​+18x3​
的最小值，则添加目标函数的做法如下：
-- 假设你已经创建了模型对象，并存入变量mip中
-- 设定目标函数为 4*x1 + 12*x2 + 18*x3，求最小
mip:addrow({4, 12, 18}, "min")`},{header:"添加约束",slug:"添加约束",content:""},{header:"添加约束方程",slug:"添加约束方程",content:`在MicroCity Web中，使用mip:addrow()添加剩下的约束方程，用法如下： ≤
≥
= mip:addrow(cons, "<=", b) mip:addrow(cons, ">=", b) mip:addrow(cons, "==", b)`},{header:"参数说明",slug:"参数说明",content:`参数
作用 mip
一开始创建的整数规划模型对象 cons
约束方程系数。和设置目标函数中的cons一样，也是一个table类型的变量。用于确定约束方程中各个变量的系数。 "<=" 或 ">=" 或 "=="
确定约束方程与右端项的关系 b
约束方程的右端项。`},{header:"示例",slug:"示例",content:`上面已经设置了目标函数为4x1+12x2+18x34x_1+12x_2+18x_34x1​+12x2​+18x3​，假设你要为这个函数添加两个约束方程：
{x1+3x3≥32x2+2x3≥5
\\left\\{\\begin{matrix} x_1+3x_3\\ge3 \\\\ 2x_2+2x_3\\ge5 \\end{matrix}\\right. {x1​+3x3​≥32x2​+2x3​≥5​
添加对应约束方程：
-- 添加约束：x1+3*x3≥3
mip:addrow({ 1, 0, 3 }, ">=", 3) -- 添加约束：2*x2+2*x3≥5
mip:addrow({ 0, 2, 2 }, ">=", 5)
不难注意到，系数的个数和目标函数中变量的个数一致。因此，在编程求解之前首先要搞清楚变量的总数，并安排好各个变量的位置。`},{header:"设置变量类型",slug:"设置变量类型",content:`MicroCity Web 中的数学规划支持整数规划。默认变量的取值范围是非负实数(≥0)。下面介绍变量类型设置的详细做法。
你可以将模型中第i个变量设置为整数变量或0-1变量。如果不将变量设置为这些类型，则默认变量为非负实数。 整数变量
0-1变量 mip:addrow('c1', 'int') --将第1个变量（第一列，col 1）设置为整数变量(Integer) mip:addrow('c2', 'bin') --将第2个变量（第二列，col 2）设置为0-1变量(Binary)`},{header:"模型求解和输出",slug:"模型求解和输出",content:""},{header:"模型求解",slug:"模型求解",content:`由于目标函数和约束方程都已经添加完毕，因此模型的求解就很简单了，只需要一步：
mip:solve()
执行完这条语句后，存放于变量mip内的数学模型就求解完毕了🎉`},{header:"输出",slug:"输出",content:`求解完还需要输出，否则就不知道求解的结果如何。以下是常用的输出求解结果的函数。
获取目标函数值：
mip['obj']
获取第i个变量的值：
mip['c'..i]
这里提供一个简单的从建模至求解的示例供参考。（其实就是将前面的拼起来）
算例：
minf=4x1+12x2+18x3s.t.{x1+3x3≥32x2+2x3≥5x1,x2,x3∈N
minf=4x_1+12x_2+18x_3\\\\
s.t.\\left\\{\\begin{matrix} x_1+3x_3\\ge3 \\\\ 2x_2+2x_3\\ge5 \\\\ x_1,x_2,x_3\\in N
\\end{matrix}\\right. minf=4x1​+12x2​+18x3​s.t.⎩⎨⎧​x1​+3x3​≥32x2​+2x3​≥5x1​,x2​,x3​∈N​ N表示自然数（非负整数集合） 脚本
local mip = math.newmip() -- 设置目标函数
mip:addrow({4, 12, 18}, "min") -- 添加约束
mip:addrow({ 1, 0, 3 }, ">=", 3) -- x1+3*x3≥3
mip:addrow({ 0, 2, 2 }, ">=", 5) -- 2*x2+2*x3≥5 -- 设置所有变量为整数
for i = 1, 3 do mip:addrow('c'..i, 'int')
end -- 求解模型
mip:solve() -- 输出目标函数值
print("目标函数值:", mip['obj']) -- 输出各个变量的值
for i = 1, 3 do print("x"..i.."=",mip['c'..i])
end
输出结果
目标函数值: 42.0
x1= 0.0
x2= 2.0
x3= 1.0 在线运行
在MicroCity Web中查看这个示例`},{header:"建模的一些技巧",slug:"建模的一些技巧",content:""},{header:"线性化",slug:"线性化",content:`有时候我们会遇到多下标的建模问题，如决策变量为xijx_{ij}xij​，这个时候就要将其进行线性化编码。
假设决策变量本身的形状共有3行4列，即： 列1
列2
列3
列4 x11x_{11}x11​
x12x_{12}x12​
x13x_{13}x13​
x14x_{14}x14​ x21x_{21}x21​
x22x_{22}x22​
x23x_{23}x23​
x24x_{24}x24​ x31x_{31}x31​
x32x_{32}x32​
x33x_{33}x33​
x34x_{34}x34​ 假设目标函数要将这些决策变量求和，即 F=∑i=13∑j=14xijF=\\sum_{i=1}^3\\sum_{j=1}^4x_{ij}F=∑i=13​∑j=14​xij​ 如果要将其输入目标函数，此时可以将其线性化为 x11+x12+...+x14+x21+...+x24+x31+...+x34x_{11}+x_{12}+...+x_{14}+x_{21}+...+x_{24}+x_{31}+...+x_{34}x11​+x12​+...+x14​+x21​+...+x24​+x31​+...+x34​
由于只有两个维度，因此可以使用两个for实现：
local cons = {}
for i = 1, 3 do -- 第一维 for j = 1, 4 do -- 第二维 cons[4 * (i - 1) + j] = 1 -- 填入系数 -- 其中 4 * (i - 1) + j 的思想类似于进位 end
end --结果：
-- cons长度为12，值都为1`},{header:"例题：指派模型",slug:"例题-指派模型",content:`下面以一个实际的例题来看看多维线性化的具体使用方法及其方便之处。
甲、乙、丙、丁四人配送A，B，C，D四种货物，所需时间如表所示。若一种货物只交一人送货，则应指派何人配送何种货物，能使总的时间最少？ 人\\工件
A
B
C
D 甲
14
9
4
15 乙
11
7
9
10 丙
13
2
10
5 丁
17
9
15
13 假设货物A、B、C、D对应的编号依次为1、2、3、4，设 xij=1x_{ij}=1xij​=1 时表示第i个人送j货，xij=0x_{ij}=0xij​=0 时表示第i个人不送j货。
则上述问题的数学模型可以表示为
minZ=∑i=14∑j=14cijxijs.t.{∑j=14xij=1,i=1,2,...,4∑i=14xij=1,j=1,2,...,4xij=0,1
minZ=\\sum_{i=1}^4\\sum_{j=1}^4c_{ij}x_{ij}\\\\
s.t.\\left\\{\\begin{matrix} \\sum_{j=1}^4x_{ij}=1, i=1,2,...,4 \\\\ \\sum_{i=1}^4x_{ij}=1, j=1,2,...,4 \\\\ x_{ij}=0,1
\\end{matrix}\\right. minZ=i=1∑4​j=1∑4​cij​xij​s.t.⎩⎨⎧​∑j=14​xij​=1,i=1,2,...,4∑i=14​xij​=1,j=1,2,...,4xij​=0,1​
求解代码
-- 效率矩阵
local cost = {{14, 9, 4, 15}, {11, 7, 9, 10}, {13, 2, 10, 5}, {17, 9, 15, 13}} local mip = math.newmip() -- 创建目标函数
local coeff = {}
for i = 1, 4 do for j = 1, 4 do -- 此处可以轻松将二维数组转换为一维数组 coeff[4 * (i - 1) + j] = cost[i][j] end
end mip:addrow(coeff, "min") -- 添加约束
for k = 1, 4 do -- 第i维的值控制 local cons = {} for i = 1, 4 do for j = 1, 4 do if i == k then -- j求和，判断i cons[4 * (i - 1) + j] = 1 else cons[4 * (i - 1) + j] = 0 end end end mip:addrow(cons, "==", 1)
end for k = 1, 4 do -- 第j维的值控制 local cons = {} for i = 1, 4 do for j = 1, 4 do if j == k then -- i求和，判断j cons[4 * (i - 1) + j] = 1 else cons[4 * (i - 1) + j] = 0 end end end mip:addrow(cons, "==", 1)
end -- 求解模型
mip:solve() -- 输出目标函数值
print("目标函数值:", mip['obj']) -- 输出决策变量
for i = 1, 4 do -- 第一维 for j = 1, 4 do -- 第二维 local x = mip['c' .. 4 * (i - 1) + j] if x ~= 0 then print("x[" .. i .. "][" .. j .. "]=", x) end end
end
输出
目标函数值: 29.0
x[1][3]= 1.0
x[2][1]= 1.0
x[3][4]= 1.0
x[4][2]= 1.0 在线运行
在MicroCity Web中查看这个示例 结果
人
配送工件 x13=1x_{13}=1x13​=1
甲
C x21=1x_{21}=1x21​=1
乙
A x34=1x_{34}=1x34​=1
丙
D x42=1x_{42}=1x42​=1
丁
B`},{header:"中间变量的处理",slug:"中间变量的处理",content:`有时候模型中会存在一些中间变量，这些变量必须要在矩阵中有对应的位置才能对其进行求解，而这些中间变量不参与目标函数值的运算。可以将中间变量对应位置的系数设为0。
假设x1,x2,x3,x4x_1,x_2,x_3,x_4x1​,x2​,x3​,x4​为决策变量，y1,y2y_1,y_2y1​,y2​为中间变量。目标函数为:
z=∑i=14xi
z=\\sum_{i=1}^4x_i
z=i=1∑4​xi​
则目标函数系数可以设为：
local fcons = {1, 1, 1, 1, 0, 0} -- 前面4位为决策变量，后面2位为中间变量
接下来按照一般流程做就可以啦😎`}]},{path:"/notes/network.html",title:"操作网络",pathLocale:"/",contents:[{header:"操作网络",slug:"操作网络",content:""},{header:"网络拓补化",slug:"网络拓补化",content:`网络拓补化简单来说就是一个网络有节点，有节点之间的连线。如果把连线理解为道路，那么你需要解决以下问题： 这条路是单向通行的还是双向通行？
这条路的起点是哪？终点是哪？ 一般认为一个网络图中，每条道路都是单向的。如果需要一条双向通行的道路，只需要反向添加一条道路即可。像这样： 这样，每条路就有了通行方向。一般规定出发点的符号为O，目的点的符号为D，这样，使用O和D就能清晰地描述每条路的方向。
对于上图的示例，上方的道路O=1，D=2，所以方向描述为从1到2；下方的道路O=2，D=1，方向描述为从2到1。`},{header:"使用函数对网络进行拓补",slug:"使用函数对网络进行拓补",content:`MicroCity可以处理网络，所有函数的具体用法见参考文档：4.6 网络
此处简单列举几种创建MicroCity中网络对象的方法：
local network = CreateNetwork() 创建一个空网络对象并返回此对象。network就是返回得到的空网络对象。
创建对象后，可以使用AddLink和DelLink等函数在网络对象中创建连接。具体用法见参考文档。
local network, nodes, links = CreateNetwork(Lines)
此处的Lines为一个矢量图形对象，类型为Line。MicroCity中的CreateNetwork()函数在这种用法中可以直接帮你在道路连线上添加起点和终点，并自动在返回的links对象中标上O点和D点的编号。
也就是说，你只需要提供网络连线即可，剩下的拓补化工作可以由函数自动完成。我认为这可能是最常用的创建网络图并进行拓补化的方法。`},{header:"网络拓补的简单示例",slug:"网络拓补的简单示例",content:`-- 打开连线图层
Shapes = Open("Shapes.shp") -- 拓补化网络
network, network_nodes, network_links = CreateNetwork(Shapes) -- 创建图层，用于存放拓补后的网络节点
Nodes = CreateShapes("Nodes", "point")
-- 将拓补化网络得到的网络节点复制到图层中
AddField(Nodes, "ID", "int")
for i = 1, GetRecCount(network_nodes) do CopyShapeTo(Nodes, 0, 0, GetShape(network_nodes, i))
end -- 创建图层，用于存放拓补后的网络连线
Links = CreateShapes("Links", "line")
-- 将网络连线中原有的属性字段复制到图层中
for i = 1, GetFieldCount(Shapes) do AddField(Links, GetField(Shapes, i))
end
-- 为连线添加属性字段，稍后会通过函数将对应的数据添加到其中
AddField(Links, "ID", "int")
AddField(Links, "O", "int")
AddField(Links, "D", "int")
AddField(Links, "IMPEDANCE", "double") --阻抗
AddField(Links, "DIRECTION", "int") --方向
AddField(Links, "CAPACITY", "double") --容量
-- 将拓补化网络得到的网络线路复制到图层中（包括对应数据）
for i = 1, GetRecCount(network_links) do CopyShapeTo(Links, 0, 0, GetShape(network_links, i))
end -- 更新图层
Update(Nodes)
Update(Links) 示例改自MicroCity自带的编辑器 虽然一开始就输入了网络连线，但是在拓补化的过程中可能由于连线上的节点重合，在拓补化的过程中会把连续的连线拆成多段，因此得到的Links图层可能与输入的图层存在不同。而拓补化得到的节点Nodes和得到的连线Links是对应的，因此推荐使用拓补化处理完的Links图层作为网络节点之间的连线。`},{header:"踩坑经验：创建网络对象",slug:"踩坑经验-创建网络对象",content:`如果需要使用CreateNetwork(Nodes, Links)函数再次建立网络，需要保留以下在拓补化过程中添加的属性，否则将会出现网络初始化错误的问题：
AddField(Links, "ID", "int")
AddField(Links, "O", "int")
AddField(Links, "D", "int")
AddField(Links, "IMPEDANCE", "double") --阻抗
AddField(Links, "DIRECTION", "int") --方向
AddField(Links, "CAPACITY", "double") --容量
如果只是一次性地进行网络拓补，不会再用拓补化过的网络重新创建网络对象，也需要先创建以上属性。拓补化后数据并不会根据属性名称填入，而是根据位置填入。
如果只创建了O和D两个属性，则O的属性中会被填入ID数据，而D的属性中会被填入O的数据。而如果只根据上面的顺序创建了ID、O、D三个属性，由于数据顺序根据位置填入，则最终的填入的数据是正确的。`},{header:"CopyShapeTo函数",slug:"copyshapeto函数",content:`拓补的操作中使用了CopyShapeTo()函数，其作用是将一个Shape对象复制到Shapes图层中的对应位置，并根据输入的dx和dy在Shapes图层中进行位置变换。其中，dx和dy分别为在x和y方向上的位移量（理解为deltax和deltay）。
CopyShapeTo(TargetShapes, dx, dy, Shape1 [, Shape2, ...])
根据函数的用法可以看到，还支持复制到多个图层上的对应位置后再进行变换。
如果只想将图形复制到对应图层的对应位置，而不进行变换，可以将dx和dy设为0，像这样：
CopyShapeTo(TargetShapes, 0, 0, Shape1 [, Shape2, ...])
CopyShapeTo()函数的具体用法见 4.3 矢量图形和表格`},{header:"网络拓补化后算法的使用",slug:"网络拓补化后算法的使用",content:"对网络进行拓补化后，可以使用自带的函数求解很多问题，如：最短路径生成树、最短路径、最短距离等。本文以计算最短路径和最短路长为例介绍一下计算最短路径的流程及踩过的坑"},{header:"计算最短路径和最短路长",slug:"计算最短路径和最短路长",content:"要计算最短路径，首先必须要清楚计算网络中哪两个点之间的最短路径。这里以startID和endID分别表示起点和终点。本文假设你已经创建了网络对象，并存入名为Network的变量中。如果你不知道该如何创建一个网络图，可以参考上方介绍的 网络拓补化 流程。"},{header:"创建最小生成树",slug:"创建最小生成树",content:`第一步，先要以startID为开始点创建最短路径生成树。理论上以始点创建最短路径生成树后，就可以获取始点到网络上任意一点的最短距离。创建最短路径生成树可以调用GenSTPTree()函数实现。
GenSTPTree(Network, startID [, endID])
此处的endID不是必须的，如果有可以提供给函数。也就是说，您共有两种做法实现这一步：
GenSTPTree(Network, startID) --方法1
GenSTPTree(Network, startID , endID) --方法2（建议）
一般认为提供的信息越完备，执行的效果越好。由于在计算最短路径之前就知道endID，因此建议将其提供给函数。 此处已经对函数的这种中括号写法进行了解释，后文中将会直接使用这种写法。 第二步，获取最短路径对应的信息。前面提到，确定起点和终点后才能确定两点之间的最短线路。由于前面使用始点startID创建了最小生成树，因此现在只需要提供终点endID就能获取到最短路径和最短路长。下面介绍了使用网络对象Network获取最短路长和最短路径的方法。`},{header:"获取最短路长",slug:"获取最短路长",content:`MicroCity的文档中提供了3种获取最短路径的方式。
第一种，由于前面计算了最短路径生成树，已经输入了起始点的信息。因此现在只需要提供终点信息即可。（即使刚刚可能已经提供了终点信息）函数需要网络对象Network和终点endID用法如下。
local len = GetSTPLen(Network, endID)
第二种，通过提供始点startID和终点endID计算两个点在网络上的最短路长。这种用法不要求在计算最短路径前先生成最短路径生成树，可以直接使用。Network为网络对象，用法如下：
local len = GetSTPLen(Network, startID, endID)
第三种，通过提供始点和终点的xy坐标计算两个点在网络上的最短路长。这种用法也不需要在计算最短路径前先生成最短路径生成树，可以直接使用。起点的坐标设为x1，y1；终点的坐标设为x2，y2，Network为网络对象，用法如下：
local len = GetSTPLen(Network, x1, y1, x2, y2)`},{header:"获取最短路径",slug:"获取最短路径",content:`MicroCity的文档中提供了3种信息可供获取，分别为： 点或线的ID序列
点或线的索引(index)序列
点或线的形状(Shape)序列。 函数的详细用法请参阅 4.6 网络 - 算法，此处仅以第2种：点或线的索引序列作为示例。
返回点的序列：
GetSTPPath (Network, endID, "iNodeShp")
返回线的序列：
GetSTPPath (Network, endID, "iLinkShp")
这样就能返回所有点或线的索引序列了。`},{header:"踩坑经验：序列",slug:"踩坑经验-序列",content:`在Lua语言快速上手中介绍过Lua中的集合，它提供了丰富的特性帮助编写代码。但是没有听说过序列。序列是下面这个东西：
local x, y = GetCenterXY(Shapes) --借用一下这个函数
里面的x,y就是一个序列。还有这种情况：
GetDistance (x1, y1, x2, y2 [, x3, y3, ...]) --再次借用一个函数
在这种情况下，输入的点越多，返回值也越多。如果输入4个点，可以这样处理：
-- 正常情况
d1, d2, d3, d4 = GetDistance(x1, y1, x2, y2, x3, y3, x4, y4) -- 也可以仅取前两个返回值
d1, d2 = GetDistance(x1, y1, x2, y2, x3, y3, x4, y4) -- 当然，只取一个返回值也可以
d1 = GetDistance(x1, y1, x2, y2, x3, y3, x4, y4)
上面的函数输入参数数量和输出参数数量是有关系的。如果输入了n个点的参数，就会返回n个点的距离。但是对于网络拓补来说，在返回最短路径的时候返回的都是参数序列，而我并不知道函数会给我传出多少个参数；而且当输出参数的个数太多的时候，也不太可能手动创建很多个变量存放这些参数。
-- 错误做法：
local indexList = GetSTPPath(Network, endID, "iLinkShp")
-- GetSTPPath()函数不会返回一个table
-- 这里获取到的indexList只是第一个Link的index，是一个数值。
既然等号左边没有办法改变，就从等号右边做出改变。还记得怎么定义一个最简单的table吗？
local list = {1, 2, 3, 4, 5}
右边的1, 2, 3, 4, 5其实可以看做一个序列。所以，只要给函数的返回值加上括号就能把他们全部捞起来 ( •̀ ω •́ )✧
local indexList = { GetSTPPath(Network, endID, "iLinkShp") }
上面的这种做法得到的indexList就是一个table类型的变量了。然后就可以开始执行集合的各种操作了捏😋`}]},{path:"/notes/oop.html",title:"面向对象编程",pathLocale:"/",contents:[{header:"面向对象编程",slug:"面向对象编程",content:`面向对象编程（Object Oriented Programming）是一种编程思想，它将真实世界中的事物抽象成程序世界中的对象，对象之间通过消息传递进行通信，从而构成程序的功能。 网上说的面向对象编程具有三大特征，即封装、继承和多态。但是我认为在这个仿真中用得最多的就是封装，继承和多态用的机会很少。此外，我暂时还没有在MicroCity中实现过对象的消息传递，如果实现了会继续更新本文。因此下面主要介绍一下如何在适用于MicroCity的lua代码中使用封装。 提示
本文中的代码示例适用于MicroCityWeb，对于桌面版的MicroCity不一定适用。此外，本文均为个人感悟，不保证概念绝对的正确性。`},{header:"面向对象编程的基本概念",slug:"面向对象编程的基本概念",content:""},{header:"类和对象",slug:"类和对象",content:`通俗来说，类是对象的模板，对象是类的实例（实体）。
类是面向对象编程的基本概念，它是对一类事物的抽象。类的概念可以理解为一类对象，比如AGV、货架、场桥等。你可以把类理解为一类事物的模板，而对象则是根据这个模板创建出来的具体的事物。
一个比较好的例子是上面提到的货架。货架是一个类，那么具体的货架就是一个对象。货架类中包含了货架的各种属性，比如货架的位置，装载的货物等。通过货架类创建出来的不同的货架对象都属于货架类，比如货架1、货架2等，尽管它们的属性可能不同，但是它们都是货架类的对象。`},{header:"类的属性和方法",slug:"类的属性和方法",content:"在MicroCity的仿真中，就我个人遇到的情况而言，类一般会有属性，但是不一定会有方法。延续上面举的货架的例子来说，属性是类的特征，比如货架的位置、货架上的货物等。方法是类的行为，通常使用函数体现，比如AGV将货架抬起、放下、AGV移动或者带动货架移动。"},{header:"仿真中使用面向对象的优点和缺点",slug:"仿真中使用面向对象的优点和缺点",content:""},{header:"优点",slug:"优点",content:`在MicroCity中，就涉及到多个同类物体移动、播放物体移动动画等场景而言（如AGV、货架、场桥移动等），需要进行比较大量的坐标计算和位置设置。如果对每个对象都实现一次，那么修改各个对象坐标的代码将会非常冗长，而且不易于维护。如果使用面向对象的编程思想，可以将数据处理的代码封装成一个个的对象，也能使代码更加更具有可读性和可维护性。
此外，如果在场景中创建多个同类对象，各个对象的参数也可能各不相同。如果使用面向对象的方法封装，可以将各个对象的参数封装在各个对象自身中。当仿真流程或者规模变得复杂时，能够增加代码的复用性。
对于仿真来说，最重要的是搞清楚仿真的业务流程和业务逻辑。使用面向对象编程可以使仿真的业务流程和业务逻辑体现得更清晰，使代码的可读性提高，更具有可维护性。 此外，当需要修改一类对象的业务逻辑时，只需要进入类中修改即可。比如修改一个港口中所有场桥的调度算法，由于所有场桥共用一套调度算法，因此只需要修改一次即可。
就我个人的情况而言，采用面向对象的方法封装对象时大多是希望创建一个通用的对象，然后在后续的仿真中通过自动或手动的方式创建多个同类对象，而各个对象的参数各不相同。这么做会使得代码通用性增加，而且也能够使得代码更加易懂，为后续的维护和修改提供便利，为大规模的仿真打下基础。`},{header:"缺点",slug:"缺点",content:"如果仿真规模很小，代码量不大的简单的操作，不建议使用面向对象的方法封装代码。 使用面向对象的方法会增加代码行数，甚至会使代码看起来显得比原问题更加复杂。（当然你要用也不会有什么后果，只是看起来会比较奇怪而已）具体可以参考下文提供的代码示例，不难发现，代码主要篇幅用在描述类及其业务逻辑上，而业务流程的代码很简单，且占比很小。"},{header:"面向对象在Lua中的实现",slug:"面向对象在lua中的实现",content:"在Lua中，面向对象的概念通常使用table实现。table是Lua中的一种数据结构，它可以用来表示数组、字典、对象等。在面向对象的编程中，table也可以用来表示对象。"},{header:"示例",slug:"示例",content:`由于MicroCity中创建的对象都是table，因此我们可以在创建对象时，将对象的属性直接封装在table中，然后返回这个table。
下面是一个例子：
-- 函数将返回一个AGV对象
function AGV() -- 在MicroCity中创建一个AGV的3d对象 local agv = scene.addobj('/res/agv.glb') -- 设置对象的属性 agv.position = {0, 0, 0} -- 设置对象的位置 agv.speed = 1 -- 设置对象的速度 function agv:move(dx, dy, dz) agv.position = {agv.position[1] + dx, agv.position[2] + dy, agv.position[3] + dz} -- 修改对象坐标 agv:setpos(agv.position[1], agv.position[2], agv.position[3]) -- 设置对象位置 scene.render() -- 渲染场景，不建议在这里调用，这里只是为了演示 end return agv -- 返回对象
end -- 对象的使用
local obj = AGV() --创建对象
obj:move(1, 0, 0) --对象向x方向移动1个单位
或者你也可以选择在创建对象后，将对象的封装在一个table中，然后返回这个table。
-- 函数将返回一个AGV对象
function AGV() -- 直接在要返回的table中设置对象属性 local agv = { object = scene.addobj('/res/agv.glb'), position = {0, 0, 0}, speed = 1 } function agv:move(dx, dy, dz) agv.position = {agv.position[1] + dx, agv.position[2] + dy, agv.position[3] + dz} -- 修改对象坐标 agv.object:setpos(agv.position[1], agv.position[2], agv.position[3]) -- 设置对象位置 scene.render() -- 渲染场景，不建议在这里调用，这里只是为了演示 end return agv -- 返回对象
end -- 对象的使用
local agv = AGV() --创建对象
agv:move(1, 0, 0) --对象向x方向移动1个单位
还有一种创建对象的方法是使用setmetatable，这属于高级用法，但是感觉用到的场景不多后来我也用得比较少了。但是使用这种方法好像可以实现类的继承，如果你感兴趣可以自行搜索。这里提供我早期作业中创建货架类的代码实现供参考。（现在感觉这个类写得不算很好😂，比如 x,y 可以用 pos = {x, y} 代替，x_origin 和 y_origin 可以使用 origin = {x, y} 代替）
-- 货架
Shelf = { x = 1, y = 1, cargo = {"box"}, -- 货物 x_origin = 1, -- 货架原始x坐标 y_origin = 1 -- 货架原始y坐标
} function Shelf:New(x, y) local self = {} setmetatable(self, { __index = Shelf }) self.__index = self self.x = x self.y = y -- 设置原始坐标 self.x_origin = x self.y_origin = y return self
end`},{header:"类的类型",slug:"类的类型",content:`我在这里还想总结一下我创建过的类主要有什么类型。 3D实体类。 主要控制3D实体的运动，如AGV、场桥等，它们大多具有实体且需要移动。有的甚至还包含子对象，比如场桥对象具有吊具、绳索、吊车等子对象。
数据模型。 比如堆场，货架、货物。具体来说比如堆场类中包含堆场的长宽、堆场中的货物、堆场中的集装箱等数据。 需要注意的是，我认为这些类型也不是严格区分的，某些类甚至共同具有这些类的特性，严格区分这个类属于哪种类型也没有太大意义。比如AGV类中也包含了AGV的位置、速度等数据，而货架类只是存储了货架模型，货架模型的移动还是交由AGV控制，而其更重要的功能是记录货架上货物的信息。因此，我认为这些类型只是一种大致的划分，具体的实现还是要根据实际业务流程和需求情况来。`}]},{path:"/notes/plots.html",title:"通用绘图代码",pathLocale:"/",contents:[{header:"通用绘图代码",slug:"通用绘图代码",content:`本节提供了一些写好的绘图对象，方便需要数据可视化绘图时直接使用。 相关信息
本页所有开放源代码遵循MIT协议，可以随意使用，但公开发布时请保留版权信息。`},{header:"导入库文件",slug:"导入库文件",content:"首先介绍库文件的使用方式。“库文件”指提前包装好的绘图函数，有以下3种方法将文件导入到 MicroCity Web 中使用。"},{header:"方法一：使用代码在线导入",slug:"方法一-使用代码在线导入",content:`👍 推荐使用本方法使用库文件，这样可以保证使用的是最新版本的库文件。
以导入 Histogram 和 Subplot 为例，导入库文件代码如下：
print('正在下载依赖库到虚拟磁盘...')
-- 下载直方图代码到虚拟磁盘
os.upload('https://www.zhhuu.top/ModelResource/libs/Histogram.lua')
-- 下载子图代码到虚拟磁盘
os.upload('https://www.zhhuu.top/ModelResource/libs/Subplot.lua')
print('下载完成')`},{header:"方法二：下载代码文件并导入",slug:"方法二-下载代码文件并导入",content:`转到 代码文件下载 处下载所需库文件，然后在 MicroCity Web 中导入该文件，最后引用该文件后即可使用。
以引用直方图为例，引用的代码如下:
require("Histogram") --引用直方图`},{header:"方法三：复制代码",slug:"方法三-复制代码",content:"除非需要修改函数功能或逻辑，否则不建议这么做。各个函数的代码见代码部分。"},{header:"直方图",slug:"直方图",content:`直方图(Histogram)一般用于显示数据集中各数据值的频数或频率分布情况。
它将数据按照一定的间隔划分为若干个区间（或称为“箱子”），然后绘制出每个区间的频数（或频率）在纵轴上的柱状图，以此反映数据的分布情况。
以下是用直方图对象（函数）绘制的直方图的示例`},{header:"导入直方图",slug:"导入直方图",content:`首先导入直方图的代码，具体导入方式见导入库文件。
直方图的文件名为 Histogram.lua，引用直方图：
require("Histogram") --引用直方图`},{header:"创建直方图对象",slug:"创建直方图对象",content:`创建一个直方图对象
local plot = Histogram(list) -- list为数据集
还可以在创建对象时对图的属性进行设置。
local plot = Histogram(list, {range={40,90,0,100}, scale={10, 50}, fdisp=function(x) return (x/n*100).."%" end})
属性的设置不是必须的，可以仅根据需要设置。此处就只设置了range、scale、fdisp属性。`},{header:"直方图属性设置",slug:"直方图属性设置",content:`上面提供了直方图属性设置的简单例子。根据代码，还可以设置更多的属性。具体见下表： 属性值
作用
示例 origin
设置图原点（左下角点）
origin = {-50, -50}，将图的原点设置在(-50,-50)的位置 size
设置图横纵轴长度，可以理解为图的大小
size = {100, 100}，将图的x轴和y轴长度分别设置为100、100 scale
设置横纵坐标轴的分度值
scale = {3, 2}，将图的x轴和y轴分度值分别设置为3和2 axislabel
设置横纵轴标题
axislabel = {"x", "y"}，将图的x轴和y轴标题分别设置为"x"和"y" range
设置横纵坐标轴的显示范围
range = {0, 10, 0, 20}，将图的x轴范围设置为[0,10]，y轴范围设置为[0,20] filled
设置是否填充柱状图
filled = false，将柱状图设置为空心。默认样式为填充 fdisp
数据标签的显示函数，默认返回数量。设置数据标签显示函数时也会影响y轴刻度的显示。
fdisp = function(v) return (v/n*100).."%" end，将数据标签改为按照比例显示（假设n为样本数）`},{header:"直方图高级用法",slug:"直方图高级用法",content:"📈 动态刷新数据图 修改图中的数据。此处以向图中添加数据为例。其中假设rnd为添加的数据。也可以直接修改plot.data的值。 table.insert(plot.data, rnd) 刷新图 plot:refresh()"},{header:"示例",slug:"示例",content:""},{header:"基本用法示例：绘制泊松分布",slug:"基本用法示例-绘制泊松分布",content:`require("Histogram") --引用直方图 local seed = math.randomseed(1, { distribution = "poisson", mu = "3"
})
local list = {seed:random()} --静态绘制
for i = #list, 400 do table.insert(list, seed:random())
end local histplot = Histogram(list, { range = {0, 10, 0, 50}, scale = {1, 5}
})
scene.render()`},{header:"高级用法示例：动态刷新绘制泊松分布",slug:"高级用法示例-动态刷新绘制泊松分布",content:`这是一个绘制泊松分布并动态刷新数据图的示例。假设已经导入了Histogram对象，并将场景设为二维显示。
require("Histogram") --引用直方图 local seed = math.randomseed(1, { distribution = "poisson", mu = "3"
})
local list = {seed:random()} local histplot = Histogram(list, { range = {0, 10, 0, 50}, scale = {1, 8}
})
scene.render() -- 动态绘制
local count = 1
while count < 1000 and scene.render() do local rnd = seed:random() table.insert(histplot.data, rnd) histplot:refresh() count = count + 1
end
scene.render()`},{header:"子图",slug:"子图",content:"子图(Subplot)是为了解决同时在界面中放置多个图的图定位和尺寸问题。名称借鉴自MATLAB。"},{header:"导入子图",slug:"导入子图",content:`首先导入子图的代码，具体导入方式见导入库文件。
子图的文件名为 Subplot.lua，引用子图：
require("Subplot") --引用子图`},{header:"子图属性设置",slug:"子图属性设置",content:`此处将对子图的属性进行详细说明。属性的设置不是必须的，可以仅根据需要设置。 属性
作用
示例 span
设置子图之间的间隔
span=10，设置子图上下左右之间的间隔为10 diag
通过输入对角线两个点的坐标设置子图位置和大小
diag = {-80, -70, 80, 70}，设置子图的对角线范围从坐标 (−80,−70)(-80,-70)(−80,−70) 到坐标 (80,70)(80,70)(80,70)`},{header:"子图值读取",slug:"子图值读取",content:`通过属性创建子图后，或者修改子图属性并刷新后，可以对子图的计算值进行读取，获取Subplot中各个子图的原点位置和尺寸。主要通过以下几个属性值进行读取。 注
此处假设子图对象创建后存放于 subplot 变量中。 计算属性
含义
示例 originpt
Subplot对象中各个子图的原点位置
通过subplot.originpt[i][j][1]和subplot.originpt[i][j][2]能够获取到第i行j列的子图对应的原点位置 psize
Subplot对象中各个子图的尺寸
通过subplot.psize[1]和subplot.psize[2]能够获取到subplot中子图对应的宽度和高度。(假设子图中所有图所需尺寸相同)`},{header:"示例",slug:"示例-1",content:`这是一个绘制子图范围的示例。假设已经导入了Subplot对象，并将场景设为二维显示。
此处将一个2行3列子图中各个子图的显示范围绘制为一个矩形。其中子图范围用四个灰色点表示，子图位置用蓝色矩形表示。
require("Subplot") --引入子图代码 local subplot = Subplot(2, 3, {span = 10}) -- 绘制Subplot对象边界点
local lb = scene.addobj("points",{size = 10, vertices={subplot.diag[1],subplot.diag[2],0}})
local lt = scene.addobj("points",{size = 10, vertices={subplot.diag[1],subplot.diag[4],0}})
local rb = scene.addobj("points",{size = 10, vertices={subplot.diag[3],subplot.diag[4],0}})
local rt = scene.addobj("points",{size = 10, vertices={subplot.diag[3],subplot.diag[2],0}}) -- 绘制范围
for i = 1, subplot.row do for j = 1, subplot.col do scene.addobj("polyline", {size = 8, color = "blue", vertices={ subplot.originpt[i][j][1]+subplot.psize[1], subplot.originpt[i][j][2], 0, subplot.originpt[i][j][1], subplot.originpt[i][j][2], 0, subplot.originpt[i][j][1], subplot.originpt[i][j][2]+subplot.psize[2], 0, subplot.originpt[i][j][1]+subplot.psize[1], subplot.originpt[i][j][2]+subplot.psize[2], 0, subplot.originpt[i][j][1]+subplot.psize[1], subplot.originpt[i][j][2], 0, } }) end
end
scene.render()`},{header:"代码",slug:"代码",content:"可以根据代码的组合情况删去开头的 scene.setenv 代码。代码中的 scene.render() 是为了在动态绘制时刷新图像。"},{header:"代码文件下载",slug:"代码文件下载",content:`代码文件列表见 ModelResource/libs 名称
链接 直方图
ModelResource/libs/Histogram.lua 子图
ModelResource/libs/Subplot.lua 🔗上方表格链接指向GitHub仓库。您可以在GitHub直接查看代码，也可以将文件下载到本地使用。`}]},{path:"/notes/timelapse.html",title:"仿真时间推进",pathLocale:"/",contents:[{header:"仿真时间推进",slug:"仿真时间推进",content:"仿真中的时间推进是指在仿真过程中，通过什么方法推进仿真时间。"},{header:"时间推进法的分类",slug:"时间推进法的分类",content:`常见的仿真时间推进方法有三大类： 事件调度法：事件调度法是一种基于事件的仿真方法，它通过对仿真系统中各个事件进行排序，按照事件发生的先后顺序依次推进时间执行活动，进而实现仿真。
固定增量推进法：固定增量推进法是指在仿真过程中，固定一个时间增量。在设定起始时间后，在起始时间的基础上根据时间的增量来对时间进行推进仿真。
活动事件扫描法：针对不确定性较强的系统，通过扫描系统中发生的事件并执行相应的活动实现时间推进。感觉实现起来比较难（容易出现时间推进不准（有误差）的问题，可能是我的水平不够😥）`},{header:"实例",slug:"实例",content:""},{header:"事件调度法",slug:"事件调度法",content:`事件调度法是一种基于事件的仿真方法，它通过对仿真系统中各个事件进行排序，按照事件发生的先后顺序来进行仿真。在仿真过程中，仿真系统根据当前仿真时间和剩余事件，将时间推进到下一个事件，执行相应的活动。
事件调度法主要分为以下3个主要步骤，这3个步骤也是控制事件调度法的主控程序的主要步骤： 时间扫描：确定下一事件发生时间并将仿真时钟推进到该时刻
事件辨识：正确地辨识当前要发生的事件
事件执行：正确地执行当前发生的事件 事件调度法基本原理流程图如下：
事件调度法在MicroCityWeb中的具体实现参见 离散事件仿真和程序控制 - 协程`},{header:"固定增量推进法",slug:"固定增量推进法",content:"固定增量推进法是指在仿真过程中，从起始时间开始，每次推进一个固定步长的时间。在每个步长内，若无事件发生，则仿真钟再推进一个单位时间T；若在该步内有若干个事件发生，则依次执行，且认为这些事件均发生在该步的结束时刻。 例题"},{header:"代码流程示例",slug:"代码流程示例",content:`while scene.render() do t = t + dt if t % cycle ~= work_time then d = d + v * dt print("出发后", t, "小时") else print("出发后", t, "小时,休息") end car:setpos(CastToLine(d)) --直线轨迹 os.sleep(200)
end 此为代码主要流程，无法直接使用 自动化仓库仿真思路的最后一部分提到了改进空间，实现了全局的仿真钟，最终实现了时间推进法。最终还实现了非固定增量推进，详细见下文介绍。`},{header:"自动化仓库仿真向主导时钟推进法的改变",slug:"自动化仓库仿真向主导时钟推进法的改变",content:`具体来说，只在原来的基础上做了如下改动： 删除大部分与事件调度法有关的 os.sleep()。由于仿真流程比较简单，保留了与装卸货有关的事件调度法，优化资源占用。
设置全局仿真时钟，将 Agv:Move() 函数的思路从“固定步长执行任务并刷新场景”的改为“监测仿真时钟时长变化，根据时长变化执行任务并刷新场景”
新增仿真速度调整。 从以上的改动可以看出，仿真的核心从事件任务转向了仿真时钟。其中，场景刷新的部分使用了 os.clock() 实现。`},{header:"非固定增量推进法",slug:"非固定增量推进法",content:`下面是一个有关于时间推进法和 os.clock() 函数的简单的示例，修改自MicroCityWeb中内置的方块旋转案例。其中，os.clock() 用于计算CPU运行时间，以此实现仿真时间与真实世界时间成一定比例。而具体的比例可以通过 simspeed （仿真速度）进行调整。
local obj = scene.addobj('box') -- 初始位置
local x = 1
local y = 1
local z = 0 local rx, ry = 0.1, 0.1 -- x方向和y方向的旋转速度
local simspeed = 10 -- 仿真速度 local t = 0 -- 全局仿真时钟
local t0 = os.clock() -- 记录仿真开始的时间
while scene.render() do local dt = os.clock() - t0 -- 计算自上次记录时间以来的时间差 t = t + dt -- 仿真时钟走过相应时间差长度的时间 -- 设置方块此刻的旋转位置 x = x + rx * dt * simspeed y = y + ry * dt * simspeed obj:setrot(x, y, z) t0 = os.clock() -- 记录仿真时间
end
相关说明 当仿真速度 simspeed 为1时，表示仿真时钟与真实世界时钟的速度相同。simspeed 可以视作加速倍率。
dt 表示两次记录时间之间的时间差，仿真中的时间步进根据 dt*simspeed 计算得到。
相关信息
需要注意的是，时间增量 dt 的数值在每个循环周期一般都不相同，dt 的具体大小一般取决于电脑的运算能力 提示
有时两次记录时间之间没有太多耗时的操作，计算得到的 dt 可能为0。一般两次时间记录之间存在一个 scene.render()，这样一般能够保证两次采样的时间之间能够计算得到一个不为0的时间差值。`}]},{path:"/notes/tools.html",title:"有关工具",pathLocale:"/",contents:[{header:"有关工具",slug:"有关工具",content:"可能能够用到的工具"},{header:"第三方工具",slug:"第三方工具",content:`包括软件、网站等 MapShaper 地图编辑器。可以编辑.geojson文件并导出为.shp文件
Three.js Editor Three.js的在线3D对象编辑器。`},{header:"外部函数",slug:"外部函数",content:"适用于 MicroCity Web 的一些外部函数"},{header:"使用方法",slug:"使用方法",content:`推荐在线导入函数，这样可以保证使用的是最新版本的函数。也可以选择下载到本地再上传使用。
在线导入示例
print('正在下载依赖库到虚拟磁盘...')
os.upload('https://www.zhhuu.top/ModelResource/libs/文件名.lua')
print('下载完成')`},{header:"导入函数",slug:"导入函数",content:`如果函数文件名为 abc.lua，引用函数后即完成导入。
require("abc")`},{header:"函数列表",slug:"函数列表",content:`基本上都是一些自制的函数。
由于文件都放在 GitHub Page 上，在线导入可能速度较慢。可以选择下载到本地再上传使用。
本站提供的代码文件列表见 ModelResource/libs，下方列表都为 ModelResource 仓库中的文件。 名称
说明
链接 Histogram
用于绘制直方图
ModelResource/libs/Histogram.lua Subplot
绘制多各图的情况下绘制子图
ModelResource/libs/Subplot.lua tablestr
将table转为字符串
ModelResource/libs/tablestr.lua setpoint
在指定坐标设置显示点
ModelResource/libs/setpoint.lua 🔨 持续更新...`}]},{path:"/notes/versions.html",title:"MicroCity的版本",pathLocale:"/",contents:[{header:"MicroCity的版本",slug:"microcity的版本",content:"MicroCity是一款简单快速的空间规划和建模软件，可用于数学模型构建求解和仿真实验，尤其适用于物流数字化建模领域。MicroCity 最初只有只能在 Windows 操作系统上运行的 Desktop 版本，后来出现了跨平台使用的需求，因此推出了 MicroCity Web 版本，它可以很好地运行在搭载 Chromium 内核的浏览器上。"},{header:"MicroCity",slug:"microcity",content:""},{header:"MicroCityWeb",slug:"microcityweb",content:`🎯访问MicroCity Web 📍(离线版)下载
MicroCity Web 不需要任何安装，只需要使用现代浏览器（如Google Chrome、Microsoft Edge）访问它的网站即可。虽然相比于桌面版，运行在浏览器上可能会造成一定的性能损失，但是这使得用户可以在几乎任何操作系统上使用该软件，比如电脑系统Windows、MacOS、Linux和手机/平板系统Android等。
尽管推出了 MicroCity Web，您仍然可以继续使用以前开发的桌面版MicroCity。然而，桌面版本将不再更新新功能，所有新的功能和改进都将通过持续交付到 MicroCity Web 中，使之能够提供最好的体验，同时避免了版本控制问题。如果希望体验最新的功能和改进，则需要改用 MicroCity Web。
MicroCity Web 版也提供使用浏览器打包导出的离线版本（见上方 🔗链接）。 注意
但是由于 Chromium 浏览器内核的更新，某些老旧的系统版本可能不受支持（如 Windows 8.1 及以下的 Windows 版本、32 位的 Windows 操作系统等）`},{header:"兼容性",slug:"兼容性",content:`MicroCity Web 版使用 Lua 5.4 作为脚本语言编写脚本。您可以在 MicroCity Web 运行环境或编辑器中输入 print(_VERSION) 指令查看使用的 Lua 版本。
由于使用了实验性的 JavaScript函数，MicroCity Web 可能在以下浏览器内核中运行存在兼容性问题： Safari内核的浏览器，如iOS、iPad OS上的大多数浏览器（由于Apple强制使用Safari的浏览器内核），MacOS上的Safari浏览器
FireFox浏览器 2023/9/29测试遇到的兼容性问题及部分技术细节 iOS 和 iPad OS： 无法打开本地文件（由于使用了 showOpenFilePicker() 方法） FireFox： 无法打开本地文件（由于使用了 showOpenFilePicker() 方法） 关于 showOpenFilePicker() 方法的影响参见 MDN Web Docs | showOpenFilePicker()`},{header:"其他信息",slug:"其他信息",content:`本文作者在写这篇笔记的时候 MicroCity Web 正在被第一次用于教学环境中，已经基本能够正常运行并实现一定的仿真功能。本文作者的相关学习经历如下： MicroCity Desktop：物流信息管理
MicroCity Web ：物流系统仿真 本站笔记内容仅供参考。如果本文内容由于时间的因素出现偏差，也欢迎各位在 Github 上通过 Pull Request 的方式对本站内容进行修正🥳`}]},{path:"/notes/visualization.html",title:"结果可视化",pathLocale:"/",contents:[{header:"结果可视化",slug:"结果可视化",content:"本文介绍了多种将计算结果可视化的方法。包括改变内容的颜色，改变形状大小，改变元素显示的属性标签等。"},{header:"改变形状颜色",slug:"改变形状颜色",content:`在程序界面左下角的图形属性框内可以通过改变Colors栏目下的Type属性改变显示颜色的种类。共有3种选项： Unique Symbol：为同一个图层的所有图形指定某种颜色，此处不做过多介绍。
Lookup Table：通过数值查询表格显示对应的颜色。
Graduated Color：根据表中数值大小设置渐变色。`},{header:"Lookup Table 通过表中值改变颜色",slug:"lookup-table-通过表中值改变颜色",content:"将Type的属性值改为Lookup Table，根据表格中的数值改变图形的颜色，达到选中指定图形的效果。 此处示例将Lookup Table中的Attribute改为表格中的SELECT，通过表中的SELECT列值控制线的颜色（属性设置见上图）。当值为0时显示黑色，值为1时显示红色。表格中SELECT列的值和Lookup Table中的具体设置如下图。 最终实现的效果"},{header:"Graduated Color 根据值的大小显示渐变色",slug:"graduated-color-根据值的大小显示渐变色",content:"将Type的属性值改为Graduated Color，根据表格中不同数值的大小显示不同的颜色，达到显示渐变色的效果。 此处示例根据每个国家的人口数量显示渐变色。可以看到中国人口数量大，因此显示红色，印度人口数量也较大，因此显示橙色。其他地区人口数量较低，但也能通过颜色看出一些差别。 Graduated Color下的Colors属性中还可以调整其他配色方案。设置界面如下图，此处就不不一一列举了。 如果感兴趣可以参考文档2.1 展示世界地图中的示例手动尝试更改此属性。"},{header:"更改图形和标签的显示大小",slug:"更改图形和标签的显示大小",content:""},{header:"参考系的选择",slug:"参考系的选择",content:`显示内容尺寸的参考系有2个，一个是以地图为参考系，一个是以屏幕为参考系。此处将图形和标签的显示尺寸都设置为相同的参考系。
内容以地图为参考系时，显示内容的大小会根据地图大小同步缩放，如下图： (以地图为参考系放大) (以地图为参考系缩小) 内容以屏幕为参考系时，无论地图怎么缩放内容的大小都差不多，如下图： (以屏幕为参考系放大) (以屏幕为参考系缩小) 因此，绘图的时候要根据绘图的目的选定参考系。 如果需要在地图上绘制确定尺寸的形状或者标明确定尺寸的标签，如绘制一个半径为10km的圆，此时应选用以地图为参考系。
如果仅需要在任何尺寸下都能清晰显示标签和图形，此时可以选择以屏幕为参考系。`},{header:"参考系应用实例",slug:"参考系应用实例",content:"在图中绘制圆点，将圆的半径设置为圆的大小，并将圆的中心设置在每个绿点的中心上，灰色圆的大小表示每个绿点的覆盖范围大小。 图中以地图为参考系(Map Units)，以16为半径为每个绿点都绘制了一个灰色的圆，表示每个绿点的覆盖范围。这些灰色的圆存放在名为Range.shp的图层内，图层类型为Points。"},{header:"参考系的设定",slug:"参考系的设定",content:`在程序界面左下角的图形属性框内可以设置图形及其标签的尺寸参考系。 如图标记的两个位置可以分别调整图形尺寸的参考系和标签尺寸的参考系。 图形尺寸参考系设置：Size栏目下的Size relates to...调整图形尺寸的参考系，Default Size调整图形的相对于坐标系的尺寸。
标签尺寸参考系设置：Labels栏目下的Size relates to...调整标签尺寸的参考系，Default Size调整的是标签(Labels)相对于坐标系的尺寸。`},{header:"更改显示的标签",slug:"更改显示的标签",content:""},{header:"手动更改显示的标签",slug:"手动更改显示的标签",content:`在程序界面左下角的图形属性框内可以设置图形及其标签的尺寸参考系。上图中显示的标签为ID，如果需要改为表格中的其他列，可以更改Lables栏目下的Attribute属性实现。
需要更改的属性位置如图，图中需要显示表中对应MSG列的值，只需要将Labels栏目下的Attribute属性值改为MSG即可。 但是每次更改图形并执行Update()函数后标签（Label）会取消显示。如果需要执行的脚本中含有此对于此图层的Update()函数，不必在每次执行完脚本后手动重新设置显示的标签，可以通过脚本自动选择显示的标签。`},{header:"自动更改显示的标签",slug:"自动更改显示的标签",content:`通过SetParameter()函数可以更改属性值。以上图Labels栏目下的Attribute属性为例，选中这条属性后可以看到底栏显示其ID为LABEL_ATTRIB，其类型为Choice。 需要注意的是，当类型为Choice时，参数值从1开始编号，编号顺次对应下拉菜单的内容。 点开这条属性以后，可以看到MSG在第二个。 由于Lua中编号一般由1开始，因此此处ID的编号对应1，MSG的编号对应2。需要操作对象为MSG，所以函数中需要填入Choice类型的参数值为2。
此时已经得到了所有需要的参数，可以使用SetParameter()函数对显示的标签进行更改。
-- transports为图形图层
SetParameter(transports, "LABEL_ATTRIB", 2) SetParameter()函数需要在Update()函数执行后再执行，否则效果会被Update()函数覆盖。 现在回过头来再看看SetParameter()函数的具体用法：
SetParameter (Shapes|Table|Grid|Scene|Module, "id", Number|"String"|Object) 参数
含义 参数1
输入的对象，可以是Shapes、Table、Grid、Scene、Module 参数2
其中的id为属性对应的ID。如果是上文的情况，就是LABEL_ATTRIB 参数3
如果需要更改属性值，只接受数值(Number)、字符串(String)、对象(Object)三种类型 SetParameter()函数的介绍出现在文档 4.2 控制用户界面 中，请参阅。`},{header:"借助栅格图",slug:"借助栅格图",content:`栅格图也可以用于可视化，我认为栅格图最常用的场景就是绘制热力图。热力图的绘制主要通过修改栅格图上每个格子的值实现。如果不清楚栅格图的具体结构，可以先参考文档 3.3 栅格图。关于使用脚本控制栅格图，可以参考文档 4.4 栅格图形。
一种使用栅格图绘制热力图的场景就是绘制地价图。在绘制地价图时，我们可以遍历栅格图上的每个格点，计算该格点到每个仓库的距离之和。然后将该格点的值设置为这个值，就可以得到一张热力图。这种方法可以帮助我们可视化地价的分布情况，并且可以用来发现地价的趋势和规律。`}]},{path:"/notes/warehouse-simulation.html",title:"自动化仓库仿真思路",pathLocale:"/",contents:[{header:"自动化仓库仿真思路",slug:"自动化仓库仿真思路",content:"本文思路仅供参考，建议做出适当改进。"},{header:"具体问题：基于元胞自动机的仓库仿真",slug:"具体问题-基于元胞自动机的仓库仿真",content:`其中，出入库位置可以更改，叉车为AGV。
也就是说，这其实是一个移动货架仓库的元胞自动机仿真。AGV可以从货架底部穿过，可以移动到货架底部，把货架抬起并运送到出入库点。`},{header:"基本假设",slug:"基本假设",content:`所有货架上的货物相同
一个货架只放一个货物 因此，出库和入库可以看做完全相反的过程，所以此处只需要详细讨论出库的情况。即默认货架上本身就有货物。`},{header:"总体实现思路",slug:"总体实现思路",content:`将整个 3×33\\times33×3 的仓库中每个元胞的位置赋予 (x,y)(x,y)(x,y) 坐标，方便后续的移动操作。
以AGV为核心，对货架进行操作。AGV处于升起状态移动货架时，只需要将货架的坐标位置同步设为AGV的位置即可达到AGV移动货架的效果。`},{header:"业务流程",slug:"业务流程",content:"先按照需求数量乱序生成订单列表，AGV根据订单顺序依次将货架移动到出库点进行出库操作。"},{header:"业务逻辑",slug:"业务逻辑",content:`当执行出库时，AGV先找到最近的货架并移动到那个货架的位置，抬起货架。为货架（AGV）设定移动的终点，计算曼哈顿距离差值。 每次移动前都通过是否有障碍物判断货架移动的方向（xxx 方向或 yyy 方向）。
如果两个方向都被堵塞，则优先选择 yyy 方向（人为规定），将这个方向的障碍物递归移走，为货架移动腾出空间。如果 yyy 方向没有空间才选择移动 xxx 方向。`},{header:"过程优化：关于旧方法和新方法",slug:"过程优化-关于旧方法和新方法",content:`这两种方法都是可用的方法，但是 新方法对特定场景进行了优化，通过对障碍进行预判减少了操作步骤。 问题见下图
旧方法：无障碍预判（进出货点在 x=3,y=3x=3,y=3x=3,y=3 的位置） 👉 AGV完成第一个货架的出库后，向第二个货架移动，但是发现第一个货架挡住了去路，因此又回到第一个货架的位置将其移开，再回到第二个货架进行出库操作。
新方法：预判障碍（进出货点在 x=3,y=3x=3,y=3x=3,y=3 的位置） 👉 AGV完成第一个货架的出库操作后判断后一个货架是否需要移动其他位置的货架才能到达出入库点。如果需要，则移动障碍货架后才前往后一个货架进行出库。 相关信息
本着尽量少占用出入库点的原则，当有空位时AGV将把在出入口的货架移走。因此某些看起来冗余的操作并非没有考虑全面。 不同数量货架对应的最优布局方案（动图）
8个货架的情况，上面已经进行了展示。下面仅展示表中货架数为5和7的情况。其他情况详见附件。`},{header:"仿真数据收集分析",slug:"仿真数据收集分析",content:""},{header:"出入库效率最高",slug:"出入库效率最高",content:`仿真结果如下图所示，表示相同货架数量下得到的效率最佳货架的货架布局 最佳货架布局：相同货架数量下，取出所有货物操作次数（ticks）最小 布局图说明 白色：没有放置货架
浅灰色：货架，但是AGV一开始位于这个货架下方
灰色：货架。 表格说明 货架数量：存在于布局图中的货架数量
旧ticks：使用旧方法（无预判障碍）实现取货的操作次数。
新ticks：使用新方法（预判障碍）实现取货的操作次数。后面将对新方法进行说明。
黄色高亮：相同布局下操作次数最少（ticks最小）的方案`},{header:"空间利用率最大",slug:"空间利用率最大",content:`如果所有位置都放置货架，则无法访问到所有货架。因此，空间利用率最大的方法是放置8个货架。
颜色说明 绿色：有货物的货架
紫色：没有货物的货架
浅紫色：AGV抬起的货架
深紫色：AGV在这个货架下面，但是没有抬起货架
深灰色：进出货点 有时候刷新太快可能看不出AGV抬起 进出货点在x=2，y=3的位置`},{header:"创新点",slug:"创新点",content:`额外考虑货物种类不同的情况。
每次仿真会根据货架上的货物乱序生成需求。
面向对象编程。使用面向对象的思想编程有助于将问题抽象化、有助于流程细节的改进；再加上好的命名方式会让整个程序的流程和逻辑清晰很多，不至于睡一觉起来就忘了😂 不同的货物类型用不同的颜色表示。AGV状态颜色、空货架的颜色、进出库点的颜色含义与之前相同。 紫色：没有货物的货架
浅紫色：AGV抬起的货架
深紫色：AGV在这个货架下面，但是没有抬起货架
深灰色：进出货点 5个货架的情况示例 8个货架的情况示例`},{header:"仿真改进：三维化自动仓库仿真",slug:"仿真改进-三维化自动仓库仿真",content:"在这一部分题目也稍微有所变化，要求将元胞自动机仿真仓库案例三维化，进行自动化仓库仿真。具体要求如上图。"},{header:"总体思路",slug:"总体思路",content:""},{header:"三维化",slug:"三维化",content:`以基于元胞自动机的仓库仿真为核心，将其中元胞自动机仿真的部分改写为内部数据表，作为内部数据模型，对整个仿真过程的状态进行监视和控制。
由于基于元胞自动机的仓库仿真使用了面向对象的方法封装对象，业务逻辑和流程的构建中大面积使用了对象方法，因此此处只需要改写对象方法（如 Agv:Move(dx, dy) 等）即可实现由元胞自动机仿真到三维化自动仓库的仿真。 如果程序整体结构设计优良，应用“面向对象”将会大幅提升程序的可维护性，降低移植难度。 对于AGV、货架直接套用现成模型；对于货物，只需要设置其距离货架的相对高度列表即可实现货物自动存放于指定高度。 提示
如果需要套用现成模型，或者申请上传模型到本文作者维护的仓库，请参考文档 3D对象-外部模型`},{header:"出入库需求波动极大",slug:"出入库需求波动极大",content:`根据题目要求，基本上只存在有限的2种情况：3个货架、6个货架。
由于货架数量情况有限，而基于元胞自动机的仓库仿真中得到了性能最佳的仓库布局，因此可以直接套用对应货架数量的最佳布局，本问题中只需要考虑固定货架布局下货物的位置摆放问题。
对于3个货架的情况，其最佳布局属于高度对称的形态，距离出入库点的距离都为1，因此这种情况下只需要对1种情况进行仿真、收集其数据。
对于6个货架的情况，选取了3种情况进行多次仿真，得到每种情况出入库耗费Ticks的平均值、最大值、最小值。 当前Ticks是AGV移动的次数，相当于单位操作时间。后文改进空间中提到了可以进行的改进 经过以上分析可以看出情况有限，因此可以通过控制货物需求总数不变，每次随机生成需求货物种类的方式对各种货物摆放位置进行仿真、对得到数据进行分析，最终确定最佳的货物布局方案。`},{header:"改进",slug:"改进",content:`在测试的过程中发现原有移动货架的策略不合理，改进了移动货架的策略。
旧策略： 找到离AGV最近的装有需求货物的货架，将其移动到出入库点。 可以看到AGV已经将需要出库的同种货物（青色方块）移动到了出入库点，但是由于AGV移动的货架对象是旁边的货架，因此没有对已经在出入库点的货物进行出库。
新策略： 找到离出入库点最近的装有需求货物的货架，将其移动到出入库点。改变策略后，没有发现以上提到的不合理情况出现。`},{header:"创新",slug:"创新",content:`由于测试的次数较多，因此将主体流程写入函数并进行适应性改进，实现自动对所有情况进行仿真测试并将数据输出。下图为自动仿真测试运行为示例。 自动仿真测试流程代码，仅供参考
-- 批量测试
local cargo_ubs = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12} -- 测试需求(上限)序列 local output_string_list = {} -- 测试结果列表字符串
for k, v in ipairs(cargo_ubs) do local test_result = {} -- 本需求上限测试结果序列 cargo_ub = v -- 设置需求数量上限 for j = 1, test_count do scene.setenv({ grid = 'plane', clear = true }) -- 清空场景内容 print("测试(", j, "/", test_count, ")：需求数量为", cargo_ub) local tick = ModelRun() -- 运行仿真模型返回测试结果 table.insert(test_result, tick) -- 将测试结果插入测试结果序列 end local output_string = "" print("需求数量为", cargo_ub, "的测试结果序列:") for i = 1, #test_result do -- 输出测试结果序列到列表字符串 output_string = output_string .. test_result[i] .. "\\t" end print(output_string) table.insert(output_string_list, output_string)
end -- 输出测试测试结果列表
for i, str in ipairs(output_string_list) do print("需求数量为", cargo_ubs[i], "的测试结果序列:", str)
end
在自动仿真测试的过程中发现了BUG，详见下文说明。`},{header:"货架布局方案",slug:"货架布局方案",content:`颜色说明 浅蓝色：出入库点
白色：空格
深蓝、红、黄：3种货物对应的颜色 条件假设 每个货架上都放有2个同类货物
货物需求随机，没有种类偏好
每次只取出一个货物`},{header:"仿真结果及分析",slug:"仿真结果及分析",content:"对每个货物布局方案中每种需求数量的情况仿真测试30次，求单方案结果中的最大值、最小值、平均值。最终得到结论为在6个货架的情况中，方案2的布局表现最优。"},{header:"方案3：3个货架",slug:"方案3-3个货架",content:""},{header:"方案6",slug:"方案6",content:"方案6平均Ticks总趋势图 方案6最优布局方案：方案2 还应绘制分方案的“需求量-最短平均服务时间”单位趋势图。以下以方案6-1为例，横坐标为货物需求数量，纵轴为最短平均服务时间（Ticks）。"},{header:"改进空间",slug:"改进空间",content:`由于题目没有给定具体事件的执行时间，也没有指定时间单位，因此此处只计量货架的操作次数作为耗费的时间。也就是说，时间是后计算的，我想大部分同学做到这里可能都是这样的思路。虽然最终得出的结果没有问题，但是思路还可以转变一下，适应于后面的学习。
当前思路是以任务驱动的。虽然能够得到一个正确的结果，但是没有利用仿真时间，这种做法在只控制一个实体的时候不会出现问题。当要同时处理多个实体的时候，当前思路就无法做到同时操作多个实体完成任务，只能实现多个实体依次完成任务的情况。当前思路的具体流程如下：
由于应用的是时间推进法，因此仿真世界中有属于它自己的时间。对于我们来说，我们可以通过在仿真时间上乘一个倍率实现控制仿真速度，这个倍率就是仿真速度。此外，这种做法更加容易支持考虑多对象的情况。具体流程如下：
这样就改为了以时间为核心的仿真，在刷新任务执行进度的时候就可以直接刷新场景中的所有实体。由于仿真以时间为核心，因此就需要设定各种操作的速率/时间，保证时间计算的准确性。在MicroCityWeb中，有一些技巧可以用于时间推进法的仿真。`},{header:"使用系统时间更新仿真时间",slug:"使用系统时间更新仿真时间",content:`os.clock()函数可以获取系统当前的时间（以秒为单位，但是是小数）。有了这个函数就可以做到仿真与现实时间的同步。用法示例可以参考时间推进法
由于整个仿真的核心为时间，因此需要对之前没有规定的操作规定其需要花费的时间长度。在改进的部分中，又额外考虑了以下操作所要花费的时间： 货物出入库所要花费的时间
AGV举起和降落货架所要花费的时间`}]},{path:"/notes/web-ui.html",title:"用户界面简介",pathLocale:"/",contents:[{header:"用户界面简介",slug:"用户界面简介",content:"MicroCity Web的总体界面如下图，本文将详细介绍MicroCity Web的用户界面（UI）操作。"},{header:"界面分区概览",slug:"界面分区概览",content:`整体来看，MicroCity Web的界面大致可以划分为4个区域。 顶部-蓝色区域：对代码、文件执行各种操作
左侧-绿色区域：代码编辑器
右侧-红色区域：视图区域
底部-黄色区域：输出信息、识别程序运行状态 下面将详细介绍这几个区域的用法和功能。`},{header:"蓝色区域：命令",slug:"蓝色区域-命令",content:`此区域的的内容如下图所示，共有9个可用按钮。 具体功能为： 程序控制 开始运行/debug
暂停运行
停止运行/强制停止 代码编辑 显示编辑器/隐藏编辑器
打开示例代码
打开本地代码文件/上传文件到虚拟磁盘
保存代码/下载 其他 共享
查看帮助文档`},{header:"程序控制",slug:"程序控制",content:"前3个按钮的功能大致都用于控制程序运行。详细作用分别如下： 开始运行/debug: 左键点击后将运行网页左侧代码编辑器内的代码；右键点击后进行代码调试（debug） 暂停运行: 如果程序正在运行，点击后程序将暂停运行（如果程序支持）。 停止运行/强行停止: 如果程序正在运行，左键点击后程序将停止运行。有时存在左键点击无法停止运行脚本的情况，右键点击可以强行终止其运行。"},{header:"代码编辑",slug:"代码编辑",content:`编号4~7的按钮主要与代码编辑有关。 显示编辑器/隐藏编辑器： 如果左侧的代码编辑器为开启状态，点击这个按钮后将关闭。如果为关闭状态，点击后会重新打开。如果使用右键点击，编辑器可以展开到全屏状态。 打开示例代码 可以直接载入内置的代码（导入内置模型），如立方体、卡车、地球、世界地图等。具体的模型将在介绍画布区域时详细介绍。 内置代码列表 打开本地代码文件/上传文件到虚拟磁盘
左键点击：弹出打开文件的对话框，您可以选择本机上的某个代码文件(.lua)。确定打开文件后，代码文件文本将自动导入到左侧代码编辑器中。
右键点击：可以选择一个或多个文件上传到MicroCity Web中。右键“保存”按钮(⑦)可以查看已上传的文件列表。 保存代码/下载
左键点击：当您第一次保存文件时，点击保存按钮后会弹出保存文件对话框，您可以选择保存位置并填写文件名。如果您之前已经将该文件保存到本地，而此时您又对该文件进行了修改并想要保存更改，直接点击保存按钮即可直接将更改保存到之前保存的文件中。 提示
新版本的 MicroCity Web 会将代码和上传的文件打包为 .mw 文件。
详细内容可以参考 文件保存 | 调试相关 右键点击：可以查看已上传到虚拟磁盘的文件列表，您可以点击列表中的文件并下载到本地。`},{header:"其他",slug:"其他",content:`共享。 点击按钮后，将会弹出一个输入密码的对话框。随后，您将会得到一个链接，任何人都可以通过这个链接打开您的共享。
如果您在弹出的对话框中输入了密码，那么在其他人打开链接后，他们只能运行您的程序代码并观察运行结果，而无法查看您的代码（除非您告知他们密码）；如果您没有输入密码，则其他人不仅可以运行您的代码查看运行结果，还可以查看您编写的代码。 查看帮助文档。`},{header:"绿色区域：代码编辑器",slug:"绿色区域-代码编辑器",content:"MicroCity Web左侧整合的代码编辑器源于AceEditor，因此也具有AceEditor的一些特性。"},{header:"快捷键",slug:"快捷键",content:`下面将介绍一些常用的快捷键，帮助你更好地编辑代码。
最常用 Ctrl+Z：撤销 行操作 Ctrl+D：删除一行
Ctrl+Shift+D：复制一行
Alt+↑：行代码上移
Alt+↓：行代码下移 查找内容 Ctrl+K：在代码中查找下一个与选中内容 代码缩进 Ctrl+[：增加代码缩进
Ctrl+]：减少代码缩进 修改数值 Ctrl+Shift+↑：光标前的数字数值+1
Ctrl+Shift+↓：光标前的数字数值-1`},{header:"红色区域：画布",slug:"红色区域-画布",content:"可以从内置代码导入场景，详见 命令区域 - 代码编辑 导入场景代码后要点击“运行”按钮才会载入场景 内置汽车模型 内置地球模型"},{header:"场景操作",slug:"场景操作",content:`对场景的操作包括视角移动、旋转都需要在画布区域进行。因此，下面将介绍画布区域的基本操作。 场景的放大缩小：鼠标滚轮向上滚动为放大，向下滚动为缩小。
平移：按住鼠标右键拖动。
旋转 场景旋转：按住鼠标左键拖动，以你的视角进行旋转
对象旋转：点击对象，对象颜色改变后从对象上按住鼠标左键拖动，以对象为中心旋转。 无论是二维对象还是三维对象都遵循上述操作逻辑。`},{header:"黄色区域：代码输出",slug:"黄色区域-代码输出",content:`打开MicroCity Web后，代码输出区域如下。点击代码输出区域后整个区域会上移，能够看到更多的历史输出信息。 说到这个区域输出的信息，代码输出区域会输出以下信息： 脚本输出: 左侧是脚本的输出，包含输出时间、脚本输出内容。
脚本运行状态: 右边第一行为脚本运行状态。state:ready 表示脚本已经准备好开始运行（未运行），state:running 表示脚本正在运行。
MicroCityWeb版本号: 表示当前使用的MicroCityWeb版本号。如果与已知版本有差异，可以通过强制刷新加载最新版本。`},{header:"注意事项",slug:"注意事项",content:"关闭自动翻译： 如果你的操作系统语言不是英语且浏览器开启了自动翻译，需要手动关闭，否则代码运行将出现错误。"}]},{path:"/docs/desktop/1.1_what_microcity_can_do.html",title:"1.1 MicroCity的功能",pathLocale:"/",contents:[{header:"1.1 MicroCity的功能",slug:"_1-1-microcity的功能",content:"MicroCity被设计为一款方便的空间规划工具，具有便携、紧凑和快速的特点。"},{header:"一个建模框架",slug:"一个建模框架",content:"基于GIS、网络和混合整数规划库，MicroCity可以作为一个建模框架来解决交通运输问题，例如城市物流和航运规划："},{header:"一个仿真平台",slug:"一个仿真平台",content:"基于3D计算机图形和离散事件仿真引擎，MicroCity可以作为一个仿真平台来评估物流场景，例如自动化仓库和集装箱码头："},{header:"通过脚本模块定制",slug:"通过脚本模块定制",content:"MicroCity可以通过模块来扩展其功能，这些模块可以从SAGA继承或在脚本编辑器中进行脚本编写和调试： 目前，MicroCity主要用于教学和研究，可以自由分发。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。"}]},{path:"/docs/desktop/2.1_showing_a_world_map.html",title:"2.1 显示世界地图",pathLocale:"/",contents:[{header:"2.1 显示世界地图",slug:"_2-1-显示世界地图",content:"本教程将指导您在 MicroCity 中操作和可视化地理信息系统（GIS）数据。"},{header:"加载数据和创建地图",slug:"加载数据和创建地图",content:"下载 countries.shp（ArcGIS shapefile）和 countries.dbf（dBase 文件）到同一个文件夹中。打开 MicroCity，点击 或将 countries.shp 拖入 MicroCity，然后在工作区面板中选择 Data Tab。双击工作区面板中的 Data->Shapes->Polygon->01. countries。"},{header:"可视化国家属性",slug:"可视化国家属性",content:"右键点击 01. countries 在工作区面板中。在弹出菜单中选择 Attributes->Table->Show。在 Settings 面板中，找到 Colors->Type 选项并选择 Graduated Color。在其子选项 Attribute 中，选择国家的人口属性 POP_EST。在 Settings 面板中，找到 Chart 选项并点击 ... 按钮。在弹出对话框中，选择饼图（pie）作为图表类型，选择 GDP_MD_EST 作为属性（大小），并在 Fields 选项中选择 EXPORT 和 IMPORT 复选框，然后点击 Okay 按钮。"},{header:"编辑形状",slug:"编辑形状",content:"在工具栏上选择 Action 按钮。左键点击某个国家，右键点击它并在弹出菜单中选择 Edit Selected Shape，然后该形状将进入编辑模式。您可以更改其多边形的点，并在右键点击并再次选择 Edit Selected Shape 来完成编辑。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。"}]},{path:"/docs/desktop/2.2_searching_for_countries.html",title:"2.2 寻找国家",pathLocale:"/",contents:[{header:"2.2 寻找国家",slug:"_2-2-寻找国家",content:"本教程将指导您使用 MicroCity Script 对GIS数据进行编码操作。您需要完成 2.1 内容以继续。"},{header:"GIS 数据结构",slug:"gis-数据结构",content:"在 MicroCity 中，GIS 数据由三种类型的形状组成：点、折线和多边形，每种类型都可以视为地图图层。在图层中，形状对象由一个或多个部分组成，而每个部分又由一个或多个点组成。形状对象还与属性表中的记录相关联。您还可以编辑形状或其属性（请参阅 3.2）。 如果您想要执行复杂的编辑或处理一批形状，可以使用 MicroCity Script，其中包含许多内置函数可供使用。"},{header:"进行查询",slug:"进行查询",content:`假设我们想要找出人口超过1亿且完全位于北半球的国家。因此，我们需要检查每个形状中每个点的坐标以及形状的人口属性。打开 ScriptEditor ，然后输入以下代码：
local Countries = Open("countries.shp") --尝试打开形状图层
for i = 1, GetRecCount(Countries) do --循环遍历图层中的所有形状对象 local country = GetShape(Countries, i) --获取一个国家的形状对象 local north = true --假设该国家位于北半球 for j = 1, GetPartCount(country) do --循环遍历所有形状中的部分 for k = 1, GetPointCount(country, j) do --循环遍历该部分中的所有点 local x, y = GetPointXY(country, k, j) --获取点的坐标 if y < 0 then --如果纬度小于0 north = false --北半球的假设为假 end end end local pop = GetValue(country, "POP_EST") --获取人口属性 local name = GetValue(country, "NAME") --获取国家名称 if pop > 100000000 and north then --检查两个条件 Print(name, ": ", pop/100000000) --打印结果 end
end`},{header:"运行脚本",slug:"运行脚本",content:"将脚本保存为 query.mcs，并使用 MicroCity 打开它，或将其拖到 MicroCity。然后您将在 Workspace 面板的模块选项卡中找到一个名为query的项目。双击子项main。如果弹出对话框，请选择01. countries，然后点击确定。结果将显示在消息面板中。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。"}]},{path:"/docs/desktop/3.1_ui_overview.html",title:"3.1 用户界面概览",pathLocale:"/",contents:[{header:"3.1 用户界面概览",slug:"_3-1-用户界面概览",content:"MicroCity提供了一个简洁的图形窗口界面，以便于对数据和模块进行操作。"},{header:"主窗口及其组件",slug:"主窗口及其组件",content:""},{header:"支持的文件类型",slug:"支持的文件类型",content:"MicroCity可以打开ArcGIS shapefile文件(*.shp)，Grids文件(*.sgrd)，dBase文件(*.dbf)，Tabular文本文件(*.csv, *.txt)，Point clouds点云文件(*.spc)，影像文件(*.bmp, *.gif, *.jpg, *.png, *.tif, *.pcx)以及MicroCity 3D场景文件(*.m3d)。这些数据文件可以在工作区面板的数据选项卡中进行管理。模块库文件(*.dll, *.mcs)可以在工作区面板的模块选项卡中进行管理和执行。"},{header:"项目管理",slug:"项目管理",content:"已打开的数据文件、模块库文件、设置和子窗口信息可以通过文件->项目菜单保存或打开一个MicroCity项目(*.mprj)。mprj文件不包含任何文件数据。为方便维护，项目中的文件应放置在同一文件夹或mprj文件的子文件夹中。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。"}]},{path:"/docs/desktop/3.2_vector_shapes.html",title:"3.2 矢量图",pathLocale:"/",contents:[{header:"3.2 矢量图",slug:"_3-2-矢量图",content:"MicroCity可以打开、创建和编辑ArcGIS shapefiles（*.shp），即所谓的Shapes，并在Workspace面板的Data选项卡中进行维护。通过使用模块（参见3.7），还可以导入或导出其他矢量文件格式，例如可伸缩矢量图形（*.svg）和AutoCAD绘图交换格式（*.dxf）。"},{header:"打开、创建、保存和关闭Shapes",slug:"打开、创建、保存和关闭shapes",content:"用户可以单击加载按钮或文件->Shapes->加载菜单项来打开ArcGIS shapefile（*.shp）作为Shapes。从菜单中选择文件->Shapes->新建，弹出对话框如下所示，可以创建新的Shapes。用户可以从点，线和面中选择其中一种形状类型。还显示了ArcGIS shapefile（*.shp）与同名dBase文件（*.dbf）之间的关系。 保存Shapes可以通过右键单击上下文菜单中的保存或另存为来完成。也可以从菜单中关闭Shapes并弹出提示对话框以保存它。"},{header:"显示和编辑形状",slug:"显示和编辑形状",content:"在数据选项卡中双击一个形状将为您提供地图视图（有关地图和图层，请参见3.6）。切换到操作按钮，然后右键单击形状图层中的一个形状，选择编辑所选形状，然后进入编辑模式。在这个模式下，用户可以添加/删除部分以及添加/删除形状中的点（关于形状的数据结构，请参见2.2）。通过右键单击上下文菜单属性->表格->显示可以访问形状的相关属性表格（*.dbf）（请参见教程2.1）。"},{header:"显示设置和数据可视化",slug:"显示设置和数据可视化",content:"用户可以从设置面板中更改形状的轮廓、填充、标签和其他显示设置。一些选项可以连接属性数据并提供可视化功能（例如2.1）。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。"}]},{path:"/docs/desktop/3.3_raster_grids.html",title:"3.3 栅格图",pathLocale:"/",contents:[{header:"3.3 栅格图",slug:"_3-3-栅格图",content:"MicroCity可以打开、创建和编辑SAGA Grid（*.sgrd），在工作空间面板的数据选项卡中被称为Grid并进行维护。图像文件（*.bmp、*.gif、*.jpg、*.png、*.tif、*.pcx）也可以被作为Grid打开。通过使用模块（参见3.7），其他栅格文件格式，例如ESRI Arc/Info Grid（*.adf）和Surfer Grid（*.grd），也可以被导入或导出。"},{header:"打开、创建、保存和关闭Grid",slug:"打开、创建、保存和关闭grid",content:`用户可以点击Load按钮或File->Grid->Load菜单项来打开一个Grid。从菜单File->Grid->New中可以创建一个新的Grid，然后弹出对话框: 上图是一个Grid的数据结构和定义。Grid从其左下角开始，具有坐标 (xMin, yMin)，包含NX*NY个方形单元格。每个单元格有自己的整数坐标(X, Y)，范围从(0, 0)到(XMax, YMax)。
保存Grid可通过右键上下文菜单Save or Save As来完成。也可以通过菜单关闭Grid，并获得一个提示对话框来保存它。`},{header:"显示和编辑Grids",slug:"显示和编辑grids",content:"双击数据选项卡中的一个Grid将为您提供一个地图视图（有关地图和图层，请参见3.6）。切换Action按钮 ，然后在Grid中选择一系列单元格。然后可以在设置面板的属性选项卡中编辑这些单元格的值。"},{header:"显示设置和3D视图",slug:"显示设置和3d视图",content:"用户可以使用设置面板来显示单元格的值，更改颜色并设置网格的透明度。使用按钮可以创建一个网格的3D表面，其中单元格的值被转换为高程（见3.6）。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。"}]},{path:"/docs/desktop/3.4_3d_scenes.html",title:"3.4 3D场景",pathLocale:"/",contents:[{header:"3.4 3D场景",slug:"_3-4-3d场景",content:"MicroCity 3D场景（*.m3d）是一种存储3D场景信息的数据文件格式。流行的3D文件格式包括3D Studio Max（*.3ds），Wavefront OBJ（*.obj）和立体光刻（*.stl）可以作为场景中的对象进行加载（详见下文中的显示和编辑3D场景），但不能存储在.m3d文件中。"},{header:"打开、创建、保存和关闭3D场景",slug:"打开、创建、保存和关闭3d场景",content:"用户可以点击加载按钮 ，或选择文件->场景->加载菜单项来打开一个场景。从菜单项文件->场景->新建可以创建新的场景并填写弹出对话框中的信息，如下所示。点击确定按钮之后，工作区面板的数据选项卡中会出现一个项目。然后可以通过右键单击菜单来保存或关闭场景："},{header:"显示和编辑3D场景",slug:"显示和编辑3d场景",content:"从数据选项卡双击一个场景会显示一个场景视图。在场景视图中，用鼠标左键拖拽可以旋转相机，用鼠标右键拖拽可以平移相机。在场景视图上用双击左键可以选择对象，在场景视图上用双击右键可以弹出上下文菜单（如下图所示）。可以添加对象、加载对象和设置对象等等。请注意，坐标系中的旋转应该遵循左手规则。下图展示了坐标系的示例和沿y轴旋转的示例： 在对象的位置和旋转中使用的坐标是相对于其父对象的。默认情况下，新对象的父对象为空。"},{header:"显示设置",slug:"显示设置",content:"用户可以通过使用设置面板更改场景的背景色、参考网格或其他显示选项。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。"}]},{path:"/docs/desktop/3.5_tables.html",title:"3.5 表格",pathLocale:"/",contents:[{header:"3.5 表格",slug:"_3-5-表格",content:"包括 dBase 文件 (*.dbf)、文本文件 (*.txt) 和逗号分隔值 (*.csv) 在内的表格文件可以在 MicroCity 中打开并保存为表格。"},{header:"打开、创建、保存和关闭表格",slug:"打开、创建、保存和关闭表格",content:"用户可以单击加载按钮 ，或选择文件->表格->加载菜单项来打开一个表格文件。可以从文件->表格->新建菜单项中创建一个新的表格，如下图所示的弹出对话框。要保存一个表格，可以右键单击上下文菜单中的保存或另存为选项。"},{header:"显示和编辑表格",slug:"显示和编辑表格",content:'双击数据选项卡中的表格，将显示一个表格视图。通过右键单击表头可以修改表格的结构。如果单击"添加字段"，将显示一个引导对话框（如下图所示）。如果要向表格中插入一条记录，可以右键单击表格左侧的数字，并选择一个上下文菜单项。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。'}]},{path:"/docs/desktop/3.6_maps_and_layers.html",title:"3.6 地图和图层",pathLocale:"/",contents:[{header:"3.6 地图和图层",slug:"_3-6-地图和图层",content:"在MicroCity中，形状和网格可以显示在地图中。每个地图可以包含多个图层，每个图层对应一个形状或一个网格。"},{header:"打开、创建、保存、打印和关闭地图",slug:"打开、创建、保存、打印和关闭地图",content:"由于地图是基于形状和网格的，它们不能独立保存或打开，但可以与一个MicroCity项目(*.mprj)一同保存或打开。创建一个地图是通过在工作区面板的数据选项卡中双击一个形状或网格来实现的。地图窗口包含四个坐标栏，可用于定位对象（见下文）。地图也可以通过工作区面板的地图选项卡的上下文菜单进行打印或关闭。"},{header:"在地图中添加、移动、隐藏和关闭图层",slug:"在地图中添加、移动、隐藏和关闭图层",content:"一个地图可以有多个图层，每个图层表示一个数据项。可以通过在数据选项卡中双击一个形状或网格来将一个图层添加到一个地图中。较低的图层可以被上面的图层遮挡。可以通过拖动来移动一个图层，通过双击来隐藏一个图层，通过菜单来关闭一个图层（如下所示）。"},{header:"控制地图视图",slug:"控制地图视图",content:`当选择一个数据项或图层时，该图层被称为活动图层。可以切换操作按钮来选择和编辑活动图层中的对象。通过切换缩放按钮或平移按钮，可以对地图进行缩放和平移操作。如果在地图中迷失了方向，可以使用缩放至全图范围按钮来查看整个地图。其他的缩放控制按钮可用于方便地浏览地图。
如果要比较两个或多个地图之间的差异，可以使用同步按钮。可以使用尺子按钮测量距离。需要注意的是，默认情况下，在地球坐标系下测得的距离单位是公里。可以在地图的设置面板中将坐标系更改为非地球，从而获取没有单位的笛卡尔距离。
点击3D按钮可以创建一个3D表面地图，需要一个适当大小的网格（参见3.3）来实现。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。`}]},{path:"/docs/desktop/3.7_modules.html",title:"3.7 拓展模块",pathLocale:"/",contents:[{header:"3.7 拓展模块",slug:"_3-7-拓展模块",content:"MicroCity的功能可以通过模块进行拓展，其中之一是SAGA模块（*.dll）。SAGA模块包含许多有用的形状（Shapes）和网格（Grids）库。另一种类型的模块是MicroCity脚本（*.mcs），可以使用进行编辑和调试（请参阅4.1）。"},{header:"加载、关闭和执行模块",slug:"加载、关闭和执行模块",content:"可以通过点击加载按钮或模块->加载模块库菜单项将模块加载到MicroCity中。工作区面板的模块选项卡将显示已加载的库文件（每个对应一个文件）及其包含的模块。可以通过上下文菜单关闭或重新加载模块库。执行模块有多种方式：双击模块，点击设置面板的执行按钮，或点击执行上下文菜单项。还可以通过点击调试上下文菜单项来调试MicroCity脚本模块，这需要后台运行ScriptEditor。MicroCity还可以捕获运行时错误并暂停模块的执行。"},{header:"加速、停止模块的执行",slug:"加速、停止模块的执行",content:`MicroCity Script 模块是使用非常快速的 Lua 语言创建的。在某些情况下，如果您想要更快的执行速度，可以在 工作区 面板的 模块 标签中点击 模块库，然后在 设置 面板中将 脚本运行模式 从 安全模式 切换到 快速模式。然后 MicroCity 将使用 LuaJIT 来执行模块。
如果一个模块正在被执行，可以通过点击相应的 设置 中的 执行 按钮来停止它。在 安全模式 下，执行可以立即停止，但在 快速模式 下，停止操作取决于脚本中调用的 GetReady() 函数（参见 4.2）。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。`}]},{path:"/docs/desktop/4.1_si_overview.html",title:"4.1 脚本概览",pathLocale:"/",contents:[{header:"4.1 脚本概览",slug:"_4-1-脚本概览",content:"MicroCity使用模块（详见3.7）来扩展其功能。模块的一种类型是MicroCity脚本（*.mcs），可以在ScriptEditor中进行编辑和调试。"},{header:"脚本编辑器",slug:"脚本编辑器",content:""},{header:"编码和调试MicroCity脚本",slug:"编码和调试microcity脚本",content:"ScriptEditor基于ZeroBrane。可以在那里找到详细的信息。要进行调试，您应该保持Script Editor打开。然后从MicroCity中右键点击模块，选择上下文菜单中的调试项（详见3.7）。执行过程可以在ScriptEditor的Code View中显示。您可以使用调试按钮控制执行并查看变量。"},{header:"Lua语言和嵌入函数",slug:"lua语言和嵌入函数",content:`MicroCity使用Lua 5.1作为其脚本语言。可以在那里找到参考手册。MicroCity在Lua中嵌入了许多有用的函数，不仅可以控制用户界面、操作数据，还可以解决数学模型和运行仿真等问题。请阅读以下章节以获取更多信息。
本参考资料中的约定：
Lua中有四种主要的数据类型可以作为参数通过嵌入函数传递，分别是数字(Number)、布尔值(Boolean)、字符串(String)和对象(Object)。对象类型包括内置的Lua对象，如表(Table)、函数(Function)和线程(Thread)，以及MicroCity对象，如形状(Shapes)、网格(Grid)、表(Table)和场景(Scene)。为了明确嵌入函数中的参数类型，在函数描述中我们使用大写、引号和语义信息来避免歧义。参数的小写单词表示数字。有时候为了表示整数参数，会在单词后面加上字母'i'，如iField。以字母'b'开头并跟随一个单词表示布尔值，如bShow。用引号括起来的单词表示字符串。大写的单词表示对象或关键字。以下是一个嵌入函数描述的示例。
AddParameter(Module, ParentNode, "Value", "id" [, default = 0])
在这个例子中，Module参数应该是一个Module对象。ParentNode参数应该是一个Node对象，但它作为一个父节点。"Value"参数是一个字符串，但它代表MicroCity中的内置类型Value，因此这个字符串是不能改变的。*"id"*参数应该是一个用户指定的字符串。default参数是一个数字。方括号中的内容是可选的。参数之间的竖线表示"或"的关系。
编码格式：
MicroCity使用ANSI编码格式读写数据，比如shp、txt、csv和dbf等。ScriptEditor和嵌入函数使用UTF-8编码格式读写数据，比如txt或csv等。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。`}]},{path:"/docs/desktop/4.2_ui_control.html",title:"4.2 控制用户界面",pathLocale:"/",contents:[{header:"4.2 控制用户界面",slug:"_4-2-控制用户界面",content:'Microcity Script 可用于控制用户界面上的一些功能，包括模块、数据对象、消息等等。在 ScriptEditor 的项目标签的"user_interface"文件夹中可以找到一些示例代码。'},{header:"基本用户界面",slug:"基本用户界面",content:`Print ("hello" [,...])
在消息面板中打印数值。
Note ("hello" [,...])
通知用户并暂停执行。
SetProcessText ("processing")
在MicroCity的左下角设置一个文本。
SetProgress (position, range)
设置位于MicroCity右下角的进度条的 position/range 值。
Sleep (milliseconds)
暂停执行 milliseconds 毫秒。
GetReady ()
MicroCity与Lua引擎共享同一线程。Lua中的计算量较大会阻塞MicroCity界面。在内部使用该函数可以使MicroCity界面响应用户操作。如果用户取消当前执行，则返回false。
GetClickXY ()
返回用户在地图视图中点击的 x,y 坐标。
GetDragExtent ()
返回用户使用鼠标在地图视图中拖动矩形时的底部左侧和顶部右侧坐标：Lx，By，Rx，Ty。`},{header:"数据对象",slug:"数据对象",content:`PATH
内部全局变量，保存当前工作目录的字符串，例如"c:\\microcity"。
Open (".\\\\shapes.shp" [, ".\\\\grid.sgrd" [, ".\\\\table.dbf" [, ".\\\\scene.m3d" , ...]]])
从当前工作目录或打开的数据中打开并返回Shapes、Table、Grid和Scene对象。
Close (Shapes|Grid|Table|Scene|Network|RndEngine|LPModel)
关闭已打开或创建的Shapes、Table、Grid、Scene、Network、RndEngine或LPModel对象。
Update (Shapes|Grid|Table [, bShow = true])
在MicroCity中更新Shapes、Grid或Table对象的当前更改。bShow表示是否创建对象的视图。如果用户取消当前执行，返回false。
CreateMap ("name", Shapes1|Grid1 [, Shapes2|Grid2, ...])
创建一个地图视图，以显示按参数中的顺序分层排列的对象。`},{header:"模块和参数",slug:"模块和参数",content:`AddModule ("Function" [, "name"]) 此函数可以将Lua函数作为模块添加到当前模块库。模块的默认名称是函数的名称。返回一个Module对象。
function AddParameter(Module, ParentNode, "Node", "id")
function AddParameter(Module, ParentNode, "Value", "id" [, default = 0])
function AddParameter(Module, ParentNode, "Range", "id" [, low = 0 [, high = 1]])
function AddParameter(Module, ParentNode, "Check", "id" [, default = 0])
function AddParameter(Module, ParentNode, "String", "id" [, "string" = "")
function AddParameter(Module, ParentNode, "Choice", "id" [, "choice1|choice2|" [, choice = 1]])
function AddParameter(Module, ParentNode, "File", "id" [, "c:\\\\default.txt" = ""])
function AddParameter(Module, ParentNode, "Color", "id" [, "color" = "255 255 255")
function AddParameter(Module, ParentNode, "Shapes", "id")
function AddParameter(Module, ParentNode, "Grid", "id")
function AddParameter(Module, ParentNode, "Scene", "id")
function AddParameter(Module, ParentNode, "Table", "id")
function AddParameter(Module, ParentNode, "Field", "id")
这些函数可以在模块的设置面板中添加参数。返回相应的值或对象。ParentNode 可以设置为 AddParameter 函数的第一个返回值。如果 "Field" 在第三个位置，则 parent_node 可以设置为 Table 或 Shapes 对象，以获取其属性表的头部。
GetParameter(Shapes|Table|Grid|Scene|Module, "id")
从对象的设置面板中返回指定的参数。
SetParameter(Shapes|Table|Grid|Scene|Module, "id", Number | "String" | Object)
在对象的设置面板中设置指定的参数。如果成功，则返回 true。请注意，选择参数应从1开始。可以在下图中的参数帮助文本中找到参数的 "id"。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。`}]},{path:"/docs/desktop/4.3_shapes_and_tables.html",title:"4.3 矢量图形和表格",pathLocale:"/",contents:[{header:"4.3 矢量图形和表格",slug:"_4-3-矢量图形和表格",content:'用户可以使用 MicroCity 脚本操作 形状（Shapes） 和 表格（Tables）。有关形状（Shapes）的详细数据结构，您可以参考上一章节 2.2 和 3.2。由于形状（Shapes）可以被视为带有地理数据的表格（Tables），因此一些用于表格数据操作的嵌入函数可以在 形状（Shapes） 和 表格（Tables） 中同时使用。本章节的示例代码可以在 项目（Project） 选项卡的"shapes_samples"文件夹中找到，该文件夹位于 ScriptEditor。'},{header:"表格数据操作",slug:"表格数据操作",content:`CreateShapes ("name", "Point|Line|Polygon")
返回一个 Shapes 对象。
CreateTable ("Name")
返回一个 Table 对象。
GetFieldCount (Shapes|Table)
返回 Shapes 或 Table 中字段的数量。
GetField (Shapes|Table, iField)
输入字段的索引（从 1 开始）并返回字段名和类型（"Int"、"Float"、"Double" 或 "String"）。
AddField (Shapes|Table, "field1", "Int|Float|Double|String" [, "field2", "Int|Float|Double|String", ...])
向 *Table 或 Shapes 添加字段，并按照顺序返回布尔值（true 或 false）。
DelField (Shapes|Table, iField)
成功删除字段时返回 true。
GetRecCount (Shapes|Table)
返回 Shapes 或 Table 中的记录总数。
AddRecord (Shapes|Table)
向 Shapes 或 Table 添加一条记录，并返回该记录的索引。
GetValue (Shapes|Table, "field_name", index1 [, index2, ...])
从指定字段和 Shapes 或 Table 的索引中检索值。按照索引的顺序返回多个值。
SetValue (Shapes|Table, value, "field_name", index1 [, index2, ...])
为指定字段和 Shapes 或 Table 的索引设置值。`},{header:"地理数据操作",slug:"地理数据操作",content:`GetSelections (Shapes)
从Shapes中返回所选的形状对象。
GetShape (Shapes, index1 [, index2, ...])
按索引顺序从Shapes中返回Shape对象。
AddShape (Shapes, Shape)
将Shape对象添加到Shapes中并返回其索引。
AddShape (Shapes [, x1, y1, x2, y2, ...])
将定义为点的Shape对象添加到Shapes中。返回Shape对象和索引。
DelShape (Shape|Shapes)
删除一个Shape或Shapes对象，如果成功则返回true。
AddPoint (Shape, x, y [, iPart = 1])
在Shape中添加一个点，如果成功则返回true。
InsPoint (Shape, x, y [, iPoint = 1 [, iPart = 1]])
在Shape中插入一个点，如果成功则返回true。
SetPoint (Shape, x, y [, iPoint = 1 [, iPart = 1]])
设置Shape中的点坐标，如果成功则返回true。
DelPoint (Shape, iPoint [, iPart=1])
从Shape中删除位置为iPoint的一个点，如果成功则返回true。
DelPart (Shape, iPart)
从Shape中删除一个部分，如果成功则返回true。
GetPartCount (Shape)
返回Shape中部分的数量。
GetPointCount (Shape [, iPart])
返回Shape中点的数量。
GetPointXY (Shape [, iPoint [, iPart = 1]])
从Shape或指定点的坐标中返回所有点的坐标：x1，y1，x2，y2，...。
CopyShapeTo (TargetShapes, dx, dy, Shape1 [, Shape2, ...])
将Shape对象复制到目标Shapes，并进行相对平移（dx，dy），返回新的Shape对象。
MoveShapeTo (dx, dy, Shape1 [, Shape2, ...])
将Shape对象平移到其相对位置（dx，dy）。
GetCenterXY (Shapes)
返回Shapes的中心坐标（x，y）。
GetCenterXY (Shapes, index1 [, index2, ...])
返回在Shapes中由索引指定的Shape对象的中心坐标（x1，y1，x2，y2，...）。
GetCenterXY (Shape1 [, Shape2, ...])
返回Shape对象的中心坐标（x1，y1，x2，y2，...）。
GetDistance (x1, y1, x2, y2 [, x3, y3, ...])
返回每两个坐标（x，y）对之间的总距离。
GetShapeLen (Shape1 [, Shape2, ...])
返回Shape对象的长度。
GetShapeArea (Shape1 [, Shape2, ...])
返回Shape对象的面积。
GetShapeType (Shape|Shapes)
返回Shapes或Shape对象的类型（"Point"，"Line"或"Polygon"）。
GetExtent (Shapes)
返回Shapes的范围坐标（Lx，By，Rx，Ty）。
GetExtent (Shapes, index)
返回Shapes中索引为index的Shape的范围坐标（Lx，By，Rx，Ty）。
GetExtent (Shape)
返回Shape的范围坐标（Lx，By，Rx，Ty）。
GetIntersection (ShapeA, ShapeB)
返回两个Shapes的交集的Shape（Point，Line或Polygon）对象。
GetValue (Shape, "field_name")
返回Shape的指定字段的值。
SetValue (Shape, value1, "field_name1" [, value2, "field_name2", ...])
为Shape的不同字段设置值。
SetCoorSys ("Earth"|"Non-Earth")
设置坐标系统。如果使用"Earth"，距离、长度和面积将根据地球椭球坐标系统计算。默认情况下使用"Non-Earth"，即笛卡尔坐标系统。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。`}]},{path:"/docs/desktop/4.4_grids.html",title:"4.4 栅格图形",pathLocale:"/",contents:[{header:"4.4 栅格图形",slug:"_4-4-栅格图形",content:'在MicroCity中，栅格图形具有简单的结构（3.3），但是如果在其上应用算法，可以高效利用时间和空间。本章的示例代码可以在项目选项卡的"grid_samples"文件夹中找到，该选项卡位于ScriptEditor中。'},{header:"栅格数据操作",slug:"栅格数据操作",content:`CreateGrid("name", "Int|Float|Double", XMax, YMax [, CellSize = 1 [, xMin = 0 [, yMin = 0] [, init = 0]]]])
返回一个Grid对象。
GetCellSize(Grid)
返回Grid的Cellsize值。
GetGridMaxXY(Grid)
返回Grid的XMax和YMax值。
ConvertToGridXY(Grid, x1, y1 [, x2, y2, ...])
将实际坐标转换为Grid中的坐标。返回X1，Y1，X2，Y2，...。
ShapeToGrid(Grid, Shape, value)
在Grid中将Shape栅格化。栅格单元值将根据覆盖面积和输入的值设置。
ShapeToGrid(Grid, Shapes, "field_name")
在Shapes中栅格化所有的Shape对象。栅格单元值将根据覆盖面积和Shapes字段的值设置。
GetValue(Grid, X1, Y1 [, X2, Y2, ...])
返回指定Grid坐标的单元格值：value1，value2，...。
SetValue(Grid, value, X1, Y1 [, X2, Y2, ...])
设置指定Grid坐标单元的值。
GetCenterXY(Grid)
返回Grid的中心实际坐标（x，y）。
GetCenterXY(Grid, X1, Y1 [, X2, Y2, ...])
返回单元格中心的实际坐标：x1，y1，x2，y2，...。
GetExtent(Grid)
返回Grid范围的左下角和右上角坐标：Lx，By，Rx，Ty。
GetExtent(Grid, X, Y)
返回单元格范围的左下角和右上角坐标：Lx，By，Rx，Ty。
GetFractalDim(Grid, X1, Y1, X2, Y2, fold [, MultiFractalQ = 0])
计算Grid中指定区域的分形维度。返回维度，线性回归的RSQ值以及每个折叠中的盒子数。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。`}]},{path:"/docs/desktop/4.5_3d_scenes.html",title:"4.5 3D场景",pathLocale:"/",contents:[{header:"4.5 3D场景",slug:"_4-5-3d场景",content:'场景和3D物体（3.4）可以进行脚本编写。本章节的示例代码可以在项目标签中的"3d_samples"文件夹中的ScriptEditor中找到。'},{header:"3D场景和物体操作",slug:"_3d场景和物体操作",content:`CreateScene ("标题" [, RotSpeed=1] [, TransSpeed=1])
创建一个新的3D场景并返回物体。
AddZipTo3DPath (Scene, "文件名.zip")
将一个zip文件添加到搜索目录中，并在成功时返回true。这对于收集大量文件很有用。
LoadSkybox (Scene, "top.jpg" ,"bottom.jpg" ,"left.jpg" ,"right.jpg" ,"front.jpg" ,"back.jpg")
将六个图像文件加载为3D场景的天空盒。
LoadObject (Scene, "文件名.3ds" [,shadow = false [, AnimationSpeed]])
从文件中加载一个3D物体，并返回该物体。
AddLight (Scene, x, y, z, Radius [, r = 255, g = 255, b = 255])
添加一个光源物体，并返回该物体。
Add3DLabel(Scene, "标签" [, width=10, height=10 [, r = 180, g = 180, b = 180 [, "font.xml"]]])
在坐标(0,0,0)处添加一个3D标签，并返回该物体。
Add3DLine (Scene, x1, y1, z1, x2, y2, z2 [, r = 0, g = 0, b = 0])
从点(x1, y1, z1)到点(x2, y2, z2)添加一个3D线物体，并返回该物体。
Add3DRect (Scene, 长度, 宽度 [, r = 180, g = 180, b = 180])
从(-长度/2,0,-宽度/2)到(长度/2,0,宽度/2)添加一个3D矩形物体，并返回该物体。
Add3DBox (Scene, 长度, 宽度, 高度 [, r = 180, g = 180, b = 180 [, bShowEdge = true]])
从(-长度/2,-高度/2,-宽度/2)到(长度/2,高度/2,宽度/2)添加一个3D盒子物体，并返回该物体。
AddSphere (Scene, 半径 [, polycount = 16 [, r = 180, g = 180, b = 180]])
在坐标(0,0,0)处添加一个球体，并返回该物体。如果半径参数小于0，则返回一个不可见的物体。
GetTexture (Object)
返回一个物体的纹理文件："文件名1"，"文件名2"等等。
LoadTexture (Scene, Object, "文件名1" [, "文件名2", ...])
加载纹理文件到一个物体中。
SetPosition (Object, x, y, z [, absolute = false])
设置一个物体相对于其父物体的位置（或者绝对位置到场景）。
GetPosition (Object [, absolute = false])
获取一个物体相对于其父物体的位置（或者该物体在场景中的绝对位置）。
SetRotation (Object, rx, ry, rz [, absolute = false])
设置一个物体相对于其父物体的旋转角度（左手坐标系），以度为单位（或者该物体在场景中的绝对旋转角度）。
GetRotation (Object [, absolute = false])
获取一个物体相对于其父物体的旋转角度（左手坐标系），以度为单位（或者该物体在场景中的绝对旋转角度）。
SetScale (Object, sx, sy, sz)
设置一个物体的缩放比例。
GetScale (Object)
获取一个物体的缩放比例。
SetParent (Object, Parent)
将一个物体作为子物体附加到另一个物体上。
GetParent (Object)
获取一个物体的父物体。
SetObject (Object "id" [,x, y, z, [,rx, ry, rz [,sx, sy, sz]]])
设置一个物体的id、位置、旋转和缩放。
DelObject (Object)
删除一个物体。
SetCamera (Scene, x, y, z [,Tx, Ty, Tz])
设置场景相机的位置和目标。
GetCamera (Scene)
获取一个3D场景的相机物体以及其位置和目标。
GetSelections (Scene)
从一个3D场景中返回选中的物体。
GetObjectID (Object1 [, Object2, ...])
返回物体的"id"。
SetObjectID (Object, "id")
设置一个物体的id。
GetObject (Scene, "id")
根据id查找一个物体。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。`}]},{path:"/docs/desktop/4.6_networks.html",title:"4.6 网络",pathLocale:"/",contents:[{header:"4.6 网络",slug:"_4-6-网络",content:'在MicroCity中，GIS矢量数据（参见3.2）可以进行拓扑操作，并应用最短路径算法和用户均衡交通分配算法。本章的示例代码可以在项目选项卡的"network_samples"文件夹中找到，具体请参考ScriptEditor。'},{header:"网络操作",slug:"网络操作",content:`CreateNetwork ()
创建一个空网络对象并返回。
CreateNetwork (UnTopoLines)
从未进行拓扑操作的“线”形状创建网络，并返回三个对象：网络、节点（形状）和链接（形状）。
CreateNetwork (Nodes, Links)
从进行了拓扑操作的节点和链接形状创建网络对象。返回网络对象。
InitNetwork (Network, Nodes, Links)
从节点和链接形状初始化网络。如果成功返回true。
AddLink (Network, linkID|-1, oID|-1, dID|-1, impedance [, direction = 1 [, capacity = 1E+38]])
向网络中添加新的链接或更新现有链接。返回linkID、oID、dID、添加结果（true/false）和更新结果（true/false）。
AddLink (Network, Shapes|Table, index1 [, index2, ...])
从形状记录集或表中添加或更新链接。返回布尔值。
DelLink (Network, linkID)
从网络中删除链接。返回布尔值。
GetNearNodeID (Network, x, y [, radius=nil])
获取坐标最近的网络节点。返回节点ID。
GetNodeXY (Network, nodeID1 [, nodeID2, ...])
返回网络中节点的坐标：x1、y1、x2、y2，等等。`},{header:"算法",slug:"算法",content:`GenSTPTree (Network, startID [, endID])
从一个节点生成最短路径生成树。返回布尔值。
GetSTPPath (Network, endID, "NodeID"|"LinkID")
在调用GenSTPTree之后调用该函数。返回由节点ID或链接ID序列表示的最短路径：id1、id2，等等。
GetSTPPath (Network, endID, "iNodeShp"|"iLinkShp")
在调用GenSTPTree之后调用该函数。返回由节点或链接形状索引序列表示的最短路径。
GetSTPPath (Network, endID, "NodeShp"|"LinkShp")
在调用GenSTPTree之后调用该函数。返回由节点或链接形状对象序列表示的最短路径。
GetSTPLen (Network, endID)
在调用GenSTPTree之后调用该函数。返回到达目标节点的最短路径距离。
GetSTPLen (Network, startID, endID)
在网络中从起点节点到终点节点获取最短路径。返回距离。
GetSTPLen (Network, x1, y1, x2, y2)
在网络中从起点坐标到终点坐标获取最短路径。返回距离。
SetTrip (Network, oID, dID, amount)
设置从出发地到目的地的旅行量。
SolveUE (Network [, rootTol = 1E-2 [, equlBrm = 1E-5 [, maxIter = 10000]]])
在调用SetTrip之后调用该函数。执行用户均衡交通分配，并返回布尔值。
GetFlow (Network, linkID)
返回指定链接的交通流量。
SetFlow (Network, linkID, flow)
设置指定链接的交通流量，并返回布尔值。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。`}]},{path:"/docs/desktop/4.7_des_simulations.html",title:"4.7 离散事件仿真",pathLocale:"/",contents:[{header:"4.7 离散事件仿真",slug:"_4-7-离散事件仿真",content:"MicroCity有一个内置的仿真时间计数和事件调度机制。它提供了几个嵌入的Lua函数来方便创建离散事件仿真，这对于动态系统分析非常有用。本章的示例代码可以在项目选项卡的“simulation_samples”文件夹中的ScriptEditor找到。"},{header:"随机数生成",slug:"随机数生成",content:`CreateRandEng (seed, "uniform_01")
使用种子创建一个二进制分布的随机数生成引擎，并返回该对象。
CreateRandEng (seed, "uniform_real" [, min = 0, max = 1])
使用种子创建一个服从均匀分布的实数随机数生成引擎，并返回该对象。
CreateRandEng (seed, "uniform_int" [, min = 0, max = 1])
使用种子创建一个服从均匀分布的整数随机数生成引擎，并返回该对象。
CreateRandEng (seed, "triangle" [, a = 0, b = 1, c = 2])
使用种子创建一个服从三角分布的随机数生成引擎，并返回该对象。
CreateRandEng (seed, "bernoulli" [, p = 0])
使用种子创建一个服从伯努利分布的随机数生成引擎，并返回该对象。
CreateRandEng (seed, "cauchy" [, median = 0, sigma = 1])
使用种子创建一个服从柯西分布的随机数生成引擎，并返回该对象。
CreateRandEng (seed, "exponential" [, lambda = 1])
使用种子创建一个服从指数分布的随机数生成引擎，并返回该对象。
CreateRandEng (seed, "geometric" [, p = 0])
使用种子创建一个服从几何分布的随机数生成引擎，并返回该对象。
CreateRandEng (seed, "normal" [, mean = 0, sigma = 1])
使用种子创建一个服从正态分布的随机数生成引擎，并返回该对象。
CreateRandEng (seed, "lognormal" [, mean = 0, sigma = 1])
使用种子创建一个服从对数正态分布的随机数生成引擎，并返回该对象。
GetNextRandom (Engine)
从随机数生成引擎中获取一个随机数。`},{header:"仿真控制",slug:"仿真控制",content:`CreateEvent (time, Funcion [, arg1, arg2, ...])
从Lua Function或Lua Coroutine创建一个将来的事件，并返回一个Coroutine对象。
ExecAllEvents ()
最后调用这个函数。它会将所有事件作为Lua Coroutines执行。
Delay ([relativeTime = 0])
在Lua Coroutine中调用这个函数，让它先暂停一段指定的相对时间，然后再恢复执行。如果没有设置参数relativeTime，当前的Coroutine将暂停而不会自动恢复。
Resume ([time, ] Coroutine [, arg1, arg2, ...])
立即或在指定的时间恢复一个已暂停的协程。
GetSimTime ()
返回当前的仿真时间。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。`}]},{path:"/docs/desktop/4.8_mixed_integer_programming.html",title:"4.8 混合整数线性规划",pathLocale:"/",contents:[{header:"4.8 混合整数线性规划",slug:"_4-8-混合整数线性规划",content:'MicroCity使用lpsolve来解决混合整数线性规划问题。开发人员可以使用嵌入的Lua函数来构建和求解模型。本章的示例代码可以在项目选项卡中的"optimization_samples"文件夹中找到，图标为ScriptEditor.'},{header:"模型创建和执行",slug:"模型创建和执行",content:`CreateLP ([rows = 0 , columns = 0])
创建一个混合整数线性规划模型并返回LPModel对象。
SetObjFunction (LPModel, rowTable, "MAX"|"MIN")
使用存储决策变量系数的Lua Table设置LPModel的目标函数。
AddConstraint (LPModel, rowTable, "<="|">="|"==", rhsValue)
使用存储决策变量系数的Lua Table向LPModel添加约束。
SetInteger (LPModel, index)
将由索引index指定的决策变量设置为整数变量。
SetBinary (LPModel, index)
将由索引index指定的LPModel的决策变量设置为二进制变量。
SetUnbounded (LPModel, index)
将由索引index指定的LPModel的决策变量设置为无界（正/负无穷大）。
SolveLP (LPModel [, timeoutSec = 60])
求解LPModel并返回0表示成功，-1表示无效LP模型，-2表示内存不足，1表示次优，2表示不可行，3表示无界，4表示退化，5表示遇到数值错误，6表示用户中止，7表示超时错误，9表示模型可由预处理解决，10表示B&B例程失败，11表示B&B因中断而停止，12表示找到可行的B&B解决方案，13表示没有可行的B&B解决方案。
GetObjective (LPModel)
返回LPModel的目标函数值。
GetVariable (LPModel, index)
返回由索引index指定的决策变量的值。
GetVariables (LPModel)
返回LPModel的所有决策变量的值。
GetDual (LPModel, index)
返回由索引index指定的决策变量的对偶值。
GetDuals (LPModel)
返回LPModel的所有决策变量的对偶值。
ReadLP("fileName.mps")
从文件(*.lp, *.mps)中读取LPModel，并在成功时返回LPModel。
WriteLP (LPModel, "fileName.mps")
将LPModel写入文件(*.lp, *.mps)，并在成功时返回true。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。`}]},{path:"/docs/desktop/",title:"MicroCity Desktop 文档",pathLocale:"/",contents:[{header:"MicroCity Desktop 文档",slug:"microcity-desktop-文档",content:""},{header:"目录",slug:"目录",content:`1 Introduction 1.1 MicroCity的功能 2 入门指南 2.1 显示世界地图
2.2 搜索国家 3 用户界面 3.1 UI概览
3.2 矢量形状
3.3 栅格图层
3.4 3D场景
3.5 表格
3.6 地图和图层
3.7 模块 4 脚本接口 4.1 接口概览
4.2 UI控制
4.3 形状和表格
4.4 栅格图层
4.5 3D场景
4.6 网络
4.7 离散事件仿真
4.8 混合整数规划 声明：本目录下文档中大部分内容来源于MicroCity Desktop，版权归原作者所有。 这篇文章使用ChatGPT翻译自其他语言，如果有问题请在反馈页面提交反馈。`}]},{path:"/docs/web/1.1_what_microcity_web_can_do.html",title:"1.1 MicroCity 的功能",pathLocale:"/",contents:[{header:"1.1 MicroCity 的功能",slug:"_1-1-microcity-的功能",content:"MicroCity Web 的目标是提供一个简单快速的空间建模工具，可以随处运行。"},{header:"数据分析",slug:"数据分析",content:"借助可编程脚本和丰富的 2D/3D 场景库，MicroCity Web 可用于分析并生动显示各种数据。"},{header:"模型构建",slug:"模型构建",content:"借助内置的脚本调试功能和混合整数规划库，MicroCity Web 可用于创建物流模型并微调其参数。"},{header:"仿真开发",slug:"仿真开发",content:"感谢离散事件仿真库，MicroCity Web 可以动态评估各种物流情景并以动画方式显示出来。 本文使用ChatGPT翻译，如有遗漏请反馈。"}]},{path:"/docs/web/2.1_rolling_a_cube.html",title:"2.1 滚动立方体",pathLocale:"/",contents:[{header:"2.1 滚动立方体",slug:"_2-1-滚动立方体",content:"本教程旨在指导您如何使用 MicroCity Web 用户界面。"},{header:"运行脚本",slug:"运行脚本",content:"第一次打开 MicroCity Web 时，将自动加载示例脚本到左侧的脚本编辑器中。单击运行按钮，消息栏下方将出现“hello, there!”消息，并且在右侧的场景画布中会出现一个滚动的立方体。您还可以使用暂停或停止按钮控制立方体，或单击代码按钮隐藏脚本编辑器并扩大场景画布。有关运行脚本的更多信息，请参考3.3 运行脚本。"},{header:"编辑脚本",slug:"编辑脚本",content:`MicroCity脚本使用Lua语言。请仔细阅读注释，了解示例脚本的行为，并参考4.3 场景和物体以获取控制场景和物体功能的详细信息。如果想要看到不同效果，在obj:setrot(x, y, z)之前添加以下代码：
z = z + 0.1
这段代码将改变立方体旋转的方式。您可以保存新代码到本地，或者发布到在线，MicroCity将生成类似https://microcity.github.io/#xxxxxx的URL。他人可以通过此URL访问您创建的MicroCity应用或修改您的代码。有关编辑脚本的更多信息，请参阅3.2 编辑脚本。`},{header:"浏览场景",slug:"浏览场景",content:"如果想要从不同角度和方向观察场景，可以使用鼠标浏览场景画布。在场景画布的空白处按住左键并拖动，场景摄像机将按相反方向旋转。按住右键并拖动，场景摄像机将按鼠标移动方向相反平移。如果选择一个物体并拖动它，场景摄像机将以物体为中心并按鼠标移动方向相反旋转。此外，滚动鼠标滚轮可以使场景摄像机前后移动。有关浏览场景的更多信息，请参考3.4 浏览场景。 本文使用ChatGPT翻译，如有遗漏请反馈。"}]},{path:"/docs/web/2.2_searching_for_countries.html",title:"2.2 搜索国家",pathLocale:"/",contents:[{header:"2.2 搜索国家",slug:"_2-2-搜索国家",content:"这个教程旨在指导您如何使用 MicroCity Web 脚本接口。"},{header:"场景对象的数据结构",slug:"场景对象的数据结构",content:"在场景中，您可以加载内置对象，如'box'，'sphere' 等，也可以导入外部 json 文件，如 geojson 和 gltf。所有加载到场景中的对象可以分为三种基本类型，称为points、polyline 和mesh（多边形是mesh的一种特殊类型）。对象数据被组织成如下所示的分层树结构。您可以在 4.3 场景与对象 中找到有关对象的更多信息。"},{header:"发起查询",slug:"发起查询",content:`您可以通过点击新建打开一个示例脚本 -> 世界地图。然后点击运行，这样世界上所有国家的地图和相关信息就会显示出来。现在假设我们想要找出人口超过1亿且完全位于北半球的国家。因此，我们需要检查每个国家的人口数量和边界坐标。以下是完整代码。
scene.setenv({camtype='ortho'}) --将场景相机设置为正交投影
local obj = scene.addobj('/res/world_countries.geojson') --获取世界各国地理数据
for i,country in ipairs(obj:getchildren()) do --遍历每个国家 local north = true --假设国家位于北半球 for j, land in ipairs(country:getchildren()) do --遍历该国家所有领土 local points = land:getvertices() --获取所有顶点坐标 for y = 2, #points, 3 do --遍历顶点坐标中的纬度坐标 if points[y] < 0 then --如果纬度小于0 (y<0) north = false --该领土不完全位于北半球 end end end local data = country:getdata() --获取国家属性数据 if north and tonumber(data['POP_EST']) > 100000000 then --判断是否满足两个条件 print(data['NAME'], ", 人口:", data['POP_EST']) --打印国家名称和人口 for j, land in ipairs(country:getchildren()) do --遍历该国家所有领土 land:setmat({color='yellow', opacity=0.6}) --标记为黄色且稍作透明处理 end end
end
scene.render() --渲染场景`},{header:"展示结果",slug:"展示结果",content:"运行脚本将会突出显示搜索到的国家，并在下方的消息栏中打印信息。您可以点击消息栏以放大它。 本文使用ChatGPT翻译，如有遗漏请反馈。"}]},{path:"/docs/web/3.1_ui_overview.html",title:"3.1 用户界面概览",pathLocale:"/",contents:[{header:"3.1 用户界面概览",slug:"_3-1-用户界面概览",content:"MicroCity Web提供了一个简洁而多功能的用户界面。"},{header:"界面分区和功能",slug:"界面分区和功能",content:"MicroCity Web的用户界面分为四个部分：按钮面板，脚本编辑器，场景画布和消息栏，如下图所示： 在这里我们简要介绍按钮面板，脚本编辑器，场景画布和消息栏将在后续章节中详细讨论：3.2 编辑脚本，3.3 运行脚本和3.4 导航场景。"},{header:"按钮面板",slug:"按钮面板",content:`按钮面板包含一个标志链接（点击以打开新窗口），九个可点击的按钮，其中大多数也可以右键单击。对话框、文档和脚本编辑器可以通过按下ESC按钮来关闭。下面是每个按钮的功能表。 Button
Name
Shortcut
左键点击
右键点击 运行/调试
F5
运行脚本
调试脚本 暂停
F6
暂停脚本运行 停止/终止
F7
停止脚本运行
终止进程 显示代码
F8
显示/隐藏脚本编辑器
在全屏模式下显示/隐藏脚本编辑器 新建/清除
Ctrl + B
创建新脚本
清除脚本和虚拟磁盘 打开/上传
Ctrl + O
打开脚本/项目文件
上传文件到虚拟磁盘 保存/下载
Ctrl + S
保存脚本/项目文件
从虚拟磁盘下载文件 发布/嵌入 将项目发布到网络
在URL中嵌入项目 文档
F1
显示文档`},{header:"文件管理",slug:"文件管理",content:`MicroCity Web能将脚本和虚拟磁盘文件打包成一个单独的 .wm 文件，方便携带。你也可以使用发布/嵌入来将其发布为一个简短链接或嵌入到 URL 中。下表展示了 MicroCity Web 支持的文件类型。 类型
格式
用途
备注 .wm
MicroCity Web 文件
打开/保存/发布
用于打包脚本和虚拟磁盘文件 .lua
Lua 文件
打开/保存
仅编辑器中的脚本 .json
JavaScript 对象表示法
scene.addobj/scene.tojson
Threejs JSON 文件 .geojson
地理数据文件
scene.addobj
加载到场景的 XY 平面上 .gltf/.glb
图形库传输格式
scene.addobj
建议使用 GLB 以节省空间 .jpg 等
位图图像
scene.setmat
作为场景对象的纹理使用 此外，任何类型文件都可以通过右键点击打开、直接拖拽或使用上传功能上传到虚拟磁盘，以便脚本可以直接访问（示例脚本中的资源位于 '/res' 目录）。虚拟磁盘中的文件也可以通过右键点击保存或使用下载功能下载到本地。你也可以通过右键点击发布将任何文件保存为 URL 链接。 本文使用ChatGPT翻译，如有遗漏请反馈。`}]},{path:"/docs/web/3.2_editing_scripts.html",title:"3.2 编辑脚本",pathLocale:"/",contents:[{header:"3.2 编辑脚本",slug:"_3-2-编辑脚本",content:"MicroCity 网页应用程序采用Lua脚本编写。除了熟悉Lua语法外，用户还需要熟练使用脚本编辑器。"},{header:"脚本编辑器",slug:"脚本编辑器",content:"集成的脚本编辑器基于Ace，易于使用且功能丰富。下图显示了编辑器窗口中经常出现的图形和符号。在调试脚本时会使用“断点”和“当前行”。"},{header:"快捷键",slug:"快捷键",content:`大多数快捷键遵循Ace的设置，并且一些是由MicroCity Web自定义的。以下是最常用的快捷键列表： Ctrl + B 新建文件
Ctrl + S 保存文件
Ctrl + O 打开文件
Ctrl + Z 撤销
Ctrl + Y 重做
Ctrl + F 查找
Ctrl + H 替换
Ctrl + / 切换注释
Tab 缩进
Shift + Tab 减少缩进
F1 获取当前光标处的帮助`},{header:"代码生成",slug:"代码生成",content:`脚本可以通过人工智能自动生成。只需在一行的开头输入三个“-”，然后输入提示并按Enter键： 默认情况下，会使用免费服务生成具有一些限制的代码。用户可以设置自定义的 OpenAI API 兼容服务，方法如下控制台命令：
os.execute("RemoteCall('SetChatAPI', 'https://api.openai.com/v1', 'sk-xxxxxxxxxxxxxxx', 'gpt-4')") 本文使用ChatGPT翻译，如有遗漏请反馈。`}]},{path:"/docs/web/3.3_running_scripts.html",title:"3.3 运行脚本",pathLocale:"/",contents:[{header:"3.3 运行脚本",slug:"_3-3-运行脚本",content:"在MicroCity中运行脚本需要了解消息栏中的各种信息。"},{header:"消息栏",slug:"消息栏",content:"为了节省空间，消息栏通常是折叠起来的。您可以通过左键单击来放大它。消息栏显示各种信息，如下图所示。当您右键单击时，会弹出控制台光标。在这种模式下，您可以输入命令来控制Lua脚本的执行。在调试脚本时尤为有用。请注意，消息栏中大量的消息会严重拖慢脚本的运行速度。此时在控制台中使用 print() 命令将清除所有打印输出。"},{header:"运行、暂停和停止",slug:"运行、暂停和停止",content:`Lua引擎用于执行脚本。消息栏中的系统信息部分显示Lua引擎的四种状态： 就绪：完全停止并等待运行
运行中：正在执行脚本
调试中：以调试模式执行
暂停：执行已暂停 您可以点击 Run 开始执行。点击 Pause 暂停执行，但此功能需要os.getready或scene.render的支持。点击 Stop 终止执行，或右键单击以终止执行进程并重新启动引擎。`},{header:"调试",slug:"调试",content:`您可以通过右键单击 运行 在调试模式下开始执行脚本。调试消息以黄色打印。单击脚本编辑器 的行号左边缘来设置断点。执行将会被这些断点或单击暂停按钮而暂停。可以通过在控制台中使用 debug.watch 命令来监视脚本中的变量。其他命令或合法的 Lua 脚本片段 可以在控制台中执行以更改系统。下面是调试命令及其相应快捷键的表格。 命令
快捷键
备注 debug.debug 进入调试模式 debug.cont
F5
继续执行 debug.pause
F6
暂停执行 debug.step
F9
步过 debug.stepi
F10
步进 debug.stepo
F11
步出 debug.watch 监视变量 本文使用ChatGPT翻译，如有遗漏请反馈。`}]},{path:"/docs/web/3.4_navigating_scenes.html",title:"3.4 浏览场景",pathLocale:"/",contents:[{header:"3.4 浏览场景",slug:"_3-4-浏览场景",content:"脚本加载或生成的 3D/2D 对象可以显示在场景画布上，用户可以通过导航手势从不同角度查看它们。"},{header:"场景画布",slug:"场景画布",content:"您可以通过复制“加载GLTF”示例来创建新的脚本并运行它。场景画布可以显示一个 3D 虚拟世界。xyz 坐标轴之间的关系遵循右手规则（如图所示），摄像机的初始位置是 (20, 10, 20)。当场景摄像机设为 z 轴正交投影（camtype='ortho'）时，在场景画布中显示的 3D 世界会变成'2D'，摄像机的初始位置为 (0, 0, 1)。对象可以被选中，然后在脚本中进行选择处理。还可以通过脚本执行其他操作，如平移、旋转和缩放。旋转遵循右手规则。详细信息请参阅4.3 场景和对象。"},{header:"导航手势",slug:"导航手势",content:"类似于 2.1 滚动立方体，这里我们呈现另一个更易于理解和练习的示例，如下图所示："},{header:"外部工具",slug:"外部工具",content:`为了更轻松地编辑和预览对象，以下是一些有用的工具： GeoJSON文件编辑器：https://geojson.io
GIS文件编辑器和转换器：https://mapshaper.org
3D文件查看器：https://3dviewer.net
3D文件编辑器和转换器：https://www.gltfeditor.com 本文使用ChatGPT翻译，如有遗漏请反馈。`}]},{path:"/docs/web/4.1_si_overview.html",title:"4.1 SI 概述",pathLocale:"/",contents:[{header:"4.1 SI 概述",slug:"_4-1-si-概述",content:""},{header:"Lua 引擎",slug:"lua-引擎",content:"MicroCity Web 使用 Lua 5.4 作为其脚本语言。内置许多有用的函数，不仅可以操纵数据，还能解决数学模型并运行仿真。您应该阅读以下章节以获取更多信息。"},{header:"约定",slug:"约定",content:`Lua 中有三种主要数据类型可以作为参数传递给嵌入函数，即数字（Number）、字符串（String）和对象（Object）。对象类型包括内置的 Lua 对象，如表（Table）、函数（Function）和线程（Thread）等，还包括 MicroCity Web 对象，比如场景（Scene）。如果 v 是一个对象，v:func(args) 的调用与 v.func(v, args) 等效，只是 v 只被求值一次。在定义嵌入函数时使用一些符号。以下是一个嵌入函数的示例：
coroutine.queue(rt, f|co [, arg1, ···])
在这种情况下，参数之间的 '|' 符号表示"或"。方括号 '[' 和 ']' 表示可选参数。参数列表末尾的三个点 '...' 表示可以跟随任意数量的参数。`},{header:"编码",slug:"编码",content:"MicroCity Web 中的任何文件默认编码为 UTF-8。Lua 可以使用 utf8 库处理这些文件。 本文使用ChatGPT翻译，如有遗漏请反馈。"}]},{path:"/docs/web/4.2_operation_system.html",title:"4.2 操作系统",pathLocale:"/",contents:[{header:"4.2 操作系统",slug:"_4-2-操作系统",content:"这部分功能涉及控制一些基本特性，有些由浏览器提供，其他则源自Lua调试。"},{header:"浏览器",slug:"浏览器",content:`浏览器提供JavaScript运行环境、存储和网络通信功能。 os.execute (javascript) 访问底层JavaScript引擎的接口。此函数将等待 eval() 给定的JavaScript，并将结果作为字符串返回。
动态执行JavaScript可以极大地扩展MicroCity Web的功能。请注意，Lua引擎在web worker中运行，因此访问DOM需要执行辅助函数RemoteCall。以下是一个简单的示例：
os.execute("RemoteCall('alert', 'hello!')")
一个更复杂的示例是使用Python的fastapi创建应用程序，并在MicroCity Web中调用：
1. 首先安装fastapi：pip install fastapi uvicorn
2. 然后创建 main.py：
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware( CORSMiddleware, allow_origins=['\\*'], allow_credentials=True, allow_methods=['\\*'], allow_headers=['\\*'],
)
@app.get("/msg")
async def read_msg(): return {"msg": "Hello from FastAPI"}
3. 执行 main.py：uvicorn main:app --reload
4. 最后在MicroCity Web中运行以下脚本：
print(os.execute("(async () => (await (await fetch('http://127.0.0.1:8000/msg')).json()).msg)()"))
或
print(os.execute("fetch('http://127.0.0.1:8000/msg').then(res => res.json()).then(data => data.msg)")) os.sleep (ms) 将睡眠ms毫秒。 os.getready () 如果单击暂停将暂停执行，如果单击停止将返回false。
这对控制长时间运行脚本很有用。用户可以暂停它，然后在控制台运行一些命令或停止它。 os.upload ([url]) 访问url链接中的文件或提示用户选择要上传到虚拟磁盘的本地文件。
此功能用于使脚本访问外部文件变得更便捷。用户可以先上传文件，然后启动程序。 os.download ([fpath]) 从fpath路径或提示用户选择要从虚拟磁盘下载的文件。`},{header:"大型语言模型",slug:"大型语言模型",content:`这些函数可以触发远程REST API进行对话完成和嵌入。API可以进行自定义。 os.chatcmpl (user [, system])
给定一个系统消息（提示）和由对话组成的用户消息，模型将返回一个响应。 os.embedding (input)
创建代表输入文本的嵌入向量（具有1024个浮点数的数组）。`},{header:"调试",slug:"调试",content:`调试库保留了 Lua 的原始功能并进行了修改。用户可以在脚本中或控制台上执行它们。 debug.debug ([b]) 进入调试模式（无参数或 b 为 true）或退出调试模式（b 为 false）。 debug.pause () 在调试模式下暂停执行。 debug.cont () 在调试模式下继续执行。 debug.step () 在调试模式下逐步执行。 debug.stepi () 在调试模式下逐步执行进入。 debug.stepo () 在调试模式下逐步执行退出。 debug.watch ([name])
将具有名称（字符串）的变量添加到监视列表，或清除监视列表（没有名称）。 本文使用ChatGPT翻译，如有遗漏请反馈。`}]},{path:"/docs/web/4.3_scene_and_object.html",title:"4.3 场景和对象",pathLocale:"/",contents:[{header:"4.3 场景和对象",slug:"_4-3-场景和对象",content:"场景库被设计用来控制场景画布以及其中的对象。"},{header:"场景",slug:"场景",content:`这部分功能包括设置场景、添加查找对象和坐标转换工具。 scene.setenv (opttab) 根据opttab中的选项设置场景。无返回值。选项列表: clear: 如果设置为 true，则清除场景中的所有对象。默认为 false。这可在脚本运行中使用，因为脚本开始运行时场景会被自动清理。
camtype: 将相机设置为透视 ("persp") 或正交 ("ortho") 投影。默认为 "persp"。
grid: 在xz平面 ("plane") 或单位球面上 ("sphere") 设置参考网格。默认为 "none"。
bgcolor: 设置背景颜色。可使用颜色字符串如 "black" 或 "#000000"。默认为 "white"。
rotspeed: 鼠标拖动旋转速度。默认为 1。
transpeed: 鼠标拖动平移速度。默认为 1。
near: 相机视锥近平面。默认为 2。
far: 相机视锥远平面。默认为 3000。 以下是设置相机投影和背景颜色的示例代码:
scene.setenv({camtype='ortho', bgcolor='black'}) scene.addobj (type [, opttab]) 将一个特定类型和选项的对象添加到场景的(0, 0, 0)位置。返回这个对象。类型包括: "points": 3D 离散点。使用以下选项: vertices, selectable, color, opacity, hcolor, size。
"polyline": 3D 折线。使用以下选项: vertices, selectable, color, opacity, hcolor, size。
"polygon": 2D 多边形，位于 xy 平面并朝 z(size) 方向挤压。使用以下选项: vertices, selectable, color, opacity, hcolor, size。
"mesh": 网格。使用以下选项: vertices, selectable, color, opacity, hcolor。
"box": 具有六个面的盒子。使用以下选项: width, height, length, selectable, color, opacity, hcolor。
"sphere": 球体。使用以下选项: radius, segments, selectable, color, opacity, hcolor。
"label": 始终朝向摄像机的文本标签。使用以下选项: text, font, selectable, color, opacity, hcolor, size。
"light": 始终指向(0, 0, 0)的方向光。使用不透明度选项。
".json": Threejs JSON 文件。使用以下选项: selectable, hcolor。
".gltf": GLTF 文件。使用以下选项: selectable, hcolor。
".glb": GLB 文件。使用以下选项: selectable, hcolor。
".geojson": GeoJSON 文件。使用以下选项: selectable, color, opacity, hcolor。 opttab 中的选项列表: vertices: 一个数组，其中每三个数字代表一个三维点（x，y，z）。对于网格，每三个点组成一个三角形。法线遵循右手定则。默认为空。
width: 以x轴测量的盒子宽度。默认为1。
height: 以y轴测量的盒子高度。默认为1。
length: 以z轴测量的盒子长度。默认为1。
size: 厚度或宽度。默认为1。
radius: 球体的半径。默认为1。
segments: 对于球体网格的水平和1/2垂直分段。默认为32。
selectable: 如果为true，则可以选择该对象。默认为true。
color: 材质颜色，例如"red"或"#FF0000"。默认为"gray"。
hcolor: 如果被选中则高亮显示的颜色。默认为"red"。
opacity: 材质的透明度。默认为1。
name: 一个字符串，稍后可以被scene.getobj使用。默认为""。
text: 标签所使用的文本。默认为""。
font: 标签所使用的字体。默认为"Arial"。 以下是向场景添加对象的一些示例：
scene.setenv({grid='plane'}) --设置一个平面网格
scene.addobj("points", {vertices={0,0,0, 5,5,5}, size=5}) --添加两个大小为5的点
scene.addobj("polyline", {vertices={0,0,0, -2,3,5, 4,6,7}, color='blue'}) --添加一个蓝色折线
scene.addobj("polygon", {vertices={-1,-1,0, -1,1,0, 1,1,0, 1,-1,0}, size=0}) --添加一个二维多边形
scene.addobj("label", {text="hello", size=5}) --添加一个标签
scene.render() --渲染场景 scene.getobj (name) 遍历场景，并返回第一个匹配名称的对象。相机和选定的对象可用"camera"和"selected"找到。
<a id='scene.tovector'> scene.tovector (radius, phi, theta) </a> 从球坐标转换返回 x、y、z。 <a id='scene.topolar'> scene.topolar (x, y, z) </a> 从向量返回球坐标：半径、phi、theta。 <a id='scene.render'> scene.render ([ms]) </a> 渲染场景并检查浏览器，类似于 [os.getready](4.2_operation_system.md#os.getready)，然后返回结果。可以通过 ms 参数控制渲染之间的间隔时间（毫秒）。 ## 对象
这部分函数控制场景中的对象。请注意，调用 obj:func(args) 是 scene.func(obj, args) 的语法糖。 <a id='obj:getpos'> obj:getpos () </a> 返回对象的位置：x、y、z。 <a id='obj:setpos'> obj:setpos (x, y, z) </a> 设置对象的位置：x、y、z。如果对象是正交摄像机，则 z 也用作摄像机的缩放值。 <a id='obj:getrot'> obj:getrot () </a> 返回对象的旋转（弧度）：x、y、z。 <a id='obj:setrot'> obj:setrot (x, y, z) </a> 设置对象的旋转（弧度）：x、y、z。 <a id='obj:getscale'> obj:getscale () </a> 返回对象的缩放：x、y、z。 <a id='obj:setscale'> obj:setscale (x, y, z) </a> 设置对象的缩放：x、y、z。 <a id='obj:getchildren'> obj:getchildren () </a> 获取所有子对象并将它们放入一个表作为返回值。 <a id='obj:setchildren'> obj:setchildren (childtab) </a> 将表 childtab 中的所有对象设置为该对象的子对象。 <a id='obj:getparent'> obj:getparent () </a> 返回对象的父级对象。 <a id='obj:setparent'> obj:setparent ([parent]) </a> 设置对象的父级对象。对象可以没有父对象。
<a id='obj:getmat'> obj:getmat () </a> 获取对象的材质信息表。信息列表：
- type：材质类型字符串，比如<a href="https://threejs.org/docs/#api/en/materials/MeshBasicMaterial" target="_blank">"MeshBasicMaterial"</a>。
- map：纹理ID号。
- color：颜色字符串，例如"red"、"rgb(250, 0,0)"、"rgb(100%,0%,0%)"、"hsl(0, 100%, 50%)"、"#FF0000"、"#f00"。
- opacity：表示材质透明度的数字。 <a id='obj:setmat'> obj:setmat (opttab) </a> 从opttab中设置对象的材质。选项列表：
- type：材质类型字符串，比如<a href="https://threejs.org/docs/#api/en/materials/MeshBasicMaterial" target="_blank">"MeshBasicMaterial"</a>。
- map：纹理ID号或图像文件路径或URL，例如"map.jpg"。
- color：颜色字符串，例如"red"或"#FF0000"。
- opacity：表示材质透明度的数字。 <a id='obj:getvertices'> obj:getvertices () </a> 返回对象的几何体的顶点数组和索引数组（如果有）。 <a id='obj:setvertices'> obj:setvertices (vertices [, indices]) </a> 设置对象的几何体的顶点数组和索引数组（如果有）。 <a id='obj:getdata'> obj:getdata () </a> 返回存储对象的<a href="https://threejs.org/docs/#api/en/core/Object3D.userData" target="_blank">自定义数据</a>的表格。请参考[2.2 Searching for Countries](2.2_searching_for_countries.md)获取示例代码。 <a id='obj:setdata'> obj:setdata (datatab) </a>
将 datatab 中的 (key, value) 写入对象的自定义数据字段中。 obj:tojson (fpath) 将对象写入到指定路径的 Threejs JSON 文件中。 obj:delete () 递归删除对象及其所有子对象。 本文使用ChatGPT翻译，如有遗漏请反馈。`}]},{path:"/docs/web/4.4_discrete_event_simulation.html",title:"4.4 离散事件仿真",pathLocale:"/",contents:[{header:"4.4 离散事件仿真",slug:"_4-4-离散事件仿真",content:"在仿真中，事件需要随机生成并安排时间，因此Lua中的随机数和协程功能已经得到改进。"},{header:"随机数生成",slug:"随机数生成",content:`随机数的概率分布已得到扩展，但传统用法仍然保留。 math.randomseed (x, [, disttab]) 根据整数参数x和可选的disttab表返回一个种子。 disttab中的选项包括： dist：概率分布，可选值为"normal"、"exponential"、"poisson"和"uniform"。默认为"uniform"。
mu：均值或期望值，默认为1。
sigma：标准差（仅适用于正态分布），默认为1。 math.random ([seed|m [, n]]) 当无参数调用时，返回区间[0, 1)内的均匀实数。当用整数 m 调用时，返回区间[1, m]内的均匀整数。当用两个整数 m 和 n 调用时，返回区间[m, n]内的均匀整数。
当使用自math.randomseed生成的seed调用时，返回遵循种子指定的分布的数值。此用法可以重写为seed:random()。示例如下：
local seed = math.randomseed(1, {dist = "normal", mu = 5, sigma = 3}) -- 为正态分布随机数生成器设置一个种子
for i = 1, 10 do print(seed:random()) -- 打印一个随机数
end`},{header:"事件调度",slug:"事件调度",content:`在离散事件仿真中，事件需要按照时间顺序安排。在 MicroCity Web 中，事件定义为 Lua 的函数或协程，因此协程库中添加了三个新成员。
coroutine.queue(rt [, f|co, arg1, ···])
将当前事件（函数或协程）或另一个事件（函数f或协程co）在相对时间rt（>=0）后排队以供以后执行。参数arg1，...将作为参数传递给主体函数。排队的事件（协程）可以在脚本结束时按时间顺序隐式恢复，也可以通过使用coroutine.resume或coroutine.qexec来显式恢复。
coroutine.qtime()
返回当前仿真时间（排队时间）。
coroutine.qexec()
按时间顺序执行所有事件。默认情况下，MicroCity Web将在脚本结束时隐式运行此函数，但用户在必要时可以显式调用它。`},{header:"模拟 M/M/1 队列",slug:"模拟-m-m-1-队列",content:`为了演示这些功能，这里使用 M/M/1 队列 作为示例：
一个排队系统平均每3分钟为一位顾客服务，而服务器平均每2.5分钟为一位顾客提供服务。先到先服务。可以在此处绘制一个 事件关系图： 以及源代码：
local M = "Idle" --初始化服务器状态
local Q = 0 --初始化队列长度
local arrival_time = math.randomseed(1, {dist = "exponential", mu = 3}) --到达时间随机种子
local service_time = math.randomseed(1, {dist = "exponential", mu = 2.5}) --服务时间随机种子 function Arrive() --顾客到达 Q = Q + 1 --队列长度加一 local t = coroutine.qtime() --获取当前仿真时间 if t < 100 then --当当前时间小于100时 local ta = arrival_time:random() --获取下一个到达时间 coroutine.queue(ta, Arrive) --安排下一个到达事件 end if M == "Idle" then --检查服务器状态 coroutine.queue(0, Start) --开始提供服务 end print("顾客在时间 ", t, " 到达，队列长度为 ", Q) end function Start() --开始提供服务 M = "Busy" --将服务器状态设置为忙碌 Q = Q - 1 --队列长度减一 local ts = service_time:random() --获取一个服务时间 coroutine.queue(ts, Leave) --安排离开事件 print("服务开始时间: ", coroutine.qtime(), " Q = ", Q)
end function Leave() --顾客离开 M = "Idle" --将服务器设置为空闲状态 if Q > 0 then --如果还有顾客在队列中 coroutine.queue(0, Start) --开始为下一位顾客提供服务 end print("顾客离开时间: ", coroutine.qtime(), " Q = ", Q) end coroutine.queue(0, Arrive) --安排第一位顾客到达的事件 本文使用ChatGPT翻译，如有遗漏请反馈。`}]},{path:"/docs/web/4.5_mixed_integer_programming.html",title:"4.5 混合整数规划",pathLocale:"/",contents:[{header:"4.5 混合整数规划",slug:"_4-5-混合整数规划",content:"线性规划和混合整数规划是运筹学中重要的工具，在这里提供了解决这些模型的函数和一些示例。请注意，调用 mip:func(args) 是对 math.func(mip, args) 的语法糖。"},{header:"函数",slug:"函数",content:`为了方便后面的解释，请先看一个典型的 线性规划(LP) 模型: min d1*x1 + d2*x2 + ... + dn*xn
subject to a11*x1 + a12*x2 + ... + a1n*xn >= b1 a21*x1 + a22*x2 + ... + a2n*xn >= b2 ........................ am1*x1 + am2*x2 + ... + amn*xn >= bn
这个模型有 n 个列的变量和 m + 1 个行的下界约束（目标函数也是一种特殊的不等式）。还有 m 个对偶变量。混合整数规划(MIP) 问题是一个线性规划问题，其中一些变量需要额外要求为整数。为了简洁地构建 mip 模型并解决它们，我们设计了以下六个函数。请注意，调用 mip:func(args) 是对 math.func(mip, args) 的语法糖。 math.newmip ([fin]) 创建一个新的 mip 模型或从文件 fin 中读取以 CPLEX LP 格式表示的模型并返回。默认情况下，每个列变量都大于或等于 0。 mip:addrow (coltab|colname, bndtype [, b [, rowname]]) 添加一行到模型 mip。 表 coltab 包含列变量所需的系数(可以是稀疏的)，例如 '{1, 3, [5]=7}' 或 '{x1=1, x2=3, x5=7}'。一个新的以数字索引命名的列变量将自动命名为"cn"，其中 n 是当前最大列数加1。
colname 是一个带系数为1的单个列变量名称。
如果 bndtype 是 "min", "max", "<=", "<", ">=", ">", "=", "==", "unb", "bin", "int" 中的一个，则 bndtype 代表不同的边界类型。
当 bndtype 是 "<=", "<", ">=", ">", "=", "==" 时，b（不等式的右值）和 rowname 适用。
默认情况下，rowname（行或对偶变量名称）是 "rm"，其中 m 是当前最大行数加1. mip:delrow (rownum|rowname) 从 mip 模型中删除一行。 mip:addcol (rowtab, bndtype, d [, colname]) 在模型 mip 中添加一列。 表 rowtab 包含行变量需要的系数（可以是稀疏的），例如'{2, 4，[6]=8}'或'{u1=2, u2=4, u6=8}'。一个新的数字索引的行变量会被自动命名为"rm"，其中 m 是当前行数的最大值加 1。
bndtype 是 "~"、"<="、"<"、">="、">"、"="、"==" 之一，代表不同的对偶问题边界类型。请注意，当对偶问题的不等式作为列添加到原问题中时，系数的符号需要重新判断。例如，如果带有对偶约束">"符号的不等式被添加到最小化原问题的列中，系数的符号需要翻转。一个使用 bndtype "~" 的列可以直接添加到原模型中。
d 是对偶不等式的右值。
默认情况下，colname 为"cn"，其中 n 是当前列数的最大值加 1。 mip:delcol (colnum|colname) 从 mip 模型中删除一列。 mip:solve ([fout]) 解决 mip 模型（将模型以 CPLEX LP 格式保存到文件 fout）。 对于线性规划，返回以下之一："optimal"、"feasible"、"infeasible"、"nofeasible"、"unbounded"、"undefined"。将目标、列（原）变量和行（对偶）变量的值分别写入 mip 模型的 'obj'、'colname' 和 'rowname' 属性。
对于混合整数规划，返回以下之一："optimal"、"feasible"、"nofeasible"、"undefined"。将目标、列变量的值分别写入 mip 模型的 'obj'、'colname' 属性。`},{header:"示例模型",slug:"示例模型",content:`这里展示两个简单的模型，首先是一个包含两个变量和两个约束的混合整数规划模型： max 143x1 + 60x2
subject to 110x1 + 30x2 <= 4000 x1 + x2 <= 75 x1 ∈ {0, 1, 2, ...} x2 ∈ {0, 1}
将数学模型翻译成代码：
local mip = math.newmip() --创建一个整数规划 mip:addrow({x1 = 143, x2 = 60}, 'max') --设置目标函数
mip:addrow({x1 = 110, x2 = 30}, '<=', 4000) --添加第一个约束
mip:addrow({x1 = 1, x2 = 1}, '<=', 75) --添加第二个约束
mip:addrow('x1', 'int') --设置x1为整数边界
mip:addrow('x2', 'bin') --设置x2为二进制边界
mip:solve() --解决模型 print(mip.obj, ' ', mip.x1, ' ', mip.x2) --打印目标函数和变量的值
让我们展示一个略微复杂一点的例子，这是一个线性规划，其中目标函数和约束条件使用缩写表示： 在这个模型中有100个变量和100个约束条件，无法手动逐个添加。它们需要通过循环进行处理：
local lp = math.newmip() --创建一个线性规划
local c = {} --创建一个系数数组
for i = 1, 100 do --遍历数组 c[i] = i --设置系数
end
lp:addrow(c, "min") --设置目标函数 for i = 1, 100 do --遍历100个约束条件 local w = {} --创建约束系数数组 for j = 1, 100 do --遍历100个约束系数 if i==j then --如果行号等于列号 w[j] = 1 --将系数设为1 else w[j] = 0 --否则将系数设为0 end end lp:addrow(w, ">=", 2) --向模型添加约束
end
lp:solve() --解决模型 print(lp['obj']) --打印目标值 本文使用ChatGPT翻译，如有遗漏请反馈。`}]},{path:"/docs/web/",title:"Microcity Web 文档",pathLocale:"/",contents:[{header:"Microcity Web 文档",slug:"microcity-web-文档",content:"MicroCity Web是一个在线空间建模工具，重构自MicroCity的桌面版本。"},{header:"目录",slug:"目录",content:`1 简介 1.1 MicroCity Web能做什么 2 入门指南 2.1 滚动一个立方体
2.2 搜索国家 3 用户界面 3.1 界面概述
3.2 编辑脚本
3.3 运行脚本
3.4 浏览场景 4 脚本接口 4.1 接口概述
4.2 操作系统
4.3 场景和对象
4.4 离散事件仿真
4.5 混合整数规划 附录 Lua参考手册
教材：物流空间建模`},{header:"函数索引",slug:"函数索引",content:`协程:
coroutine.qexec coroutine.qtime coroutine.queue
调试:
debug.cont debug.debug debug.pause debug.step debug.stepi debug.stepo debug.watch
数学:
math.newmip math.random math.randomseed mip:addcol mip:addrow mip:delcol mip:delrow mip:solve
操作系统:
os.chatcmpl os.download os.embedding os.execute os.getready os.upload os.sleep
场景:
scene.addobj scene.getobj scene.render scene.setenv scene.topolar scene.tovector
obj:delete obj:getchildren obj:getdata obj:getmat obj:getparent obj:getpos obj:getrot obj:getscale obj:getvertices obj:setchildren obj:setdata obj:setmat obj:setparent obj:setpos obj:setrot obj:setscale obj:setvertices obj:tojson 声明：本目录下文档中大部分内容来源于MicroCity Web，版权归原作者所有，内容仅供参考。 本文使用ChatGPT翻译，如有遗漏请反馈。`}]},{path:"/en/docs/1.1_what_microcity_can_do.html",title:"1.1 What MicroCity can Do",pathLocale:"/en/",contents:[{header:"1.1 What MicroCity can Do",slug:"_1-1-what-microcity-can-do",content:"MicroCity is designed to be a handy spatial planning tool, which is portable, compact and fast."},{header:"A Modeling Framework",slug:"a-modeling-framework",content:"Based on GIS, Networks and Mixed Integer Programming libraries, MicroCity can be used as a modeling framework to solve transporation problems, such as City Logistics and Shipping Planning:"},{header:"A Simulation Platform",slug:"a-simulation-platform",content:"Based on 3D CGI and Discrete Event Simulation Engine, MicroCity can be used as a simulation platform to evaluate logistic scenarios, such as Automated Warehouses and Container Terminals:"},{header:"Customized by Scriptable Modules",slug:"customized-by-scriptable-modules",content:"MicroCity can extend its functionality with modules which can be inherited from SAGA or scripted and debugged in Script Editor: Currently, MicroCity is mainly used in teaching and research. It can be freely distributed."}]},{path:"/en/docs/2.1_showing_a_world_map.html",title:"2.1 Showing a World Map",pathLocale:"/en/",contents:[{header:"2.1 Showing a World Map",slug:"_2-1-showing-a-world-map",content:"This tutorial will guide you in manipulating and visualizing GIS data in MicroCity."},{header:"Loading Data and Creating a Map",slug:"loading-data-and-creating-a-map",content:"Download the countries.shp (ArcGIS shapefile) and the countries.dbf (dBase file) in a same folder. Open MicroCity and load or drag the countries.shp into MicroCity and select Data Tab in Workspace panel. Double click Data->Shapes->Polygon->01. countries in Workspace panel."},{header:"Visualizing Coutries' Properties",slug:"visualizing-coutries-properties",content:"Right click 01. countries in the Workspace panel. Click Attributes->Table->Show in the popup menu. In the Settings Panel, find the Colors->Type option and select Graduated Color. In its sub-option Attribute, select POP_EST which is population property of countries. In the Setting Panel, find the Chart option and click the ... button. In the popup dialog, select pie in Chart Type option and select GDP_MD_EST in Attribute (Size) option and select EXPORT and IMPORT checkboxs in Fields option and click Okay button."},{header:"Editing Shapes",slug:"editing-shapes",content:"Select Action button at toolbar. Left click some country and right click it and select Edit Selected Shape in the popup menu. Then the shape will be in editing mode. You can change its polygon points and finish your editing by right click and select Edit Selected Shape again."}]},{path:"/en/docs/2.2_searching_for_countries.html",title:"2.2 Searching for Countries",pathLocale:"/en/",contents:[{header:"2.2 Searching for Countries",slug:"_2-2-searching-for-countries",content:"This tutorial will guide you in coding with MicroCity Script to manipulate GIS data. You have to complete 2.1 to proceed."},{header:"GIS Data Structure",slug:"gis-data-structure",content:"In MicroCity, GIS data consists of three types of Shapes: Point, Polyline and Polygon, each of which can be visualized as a Map Layer. In a layer, a Shape object consists of one or more Parts, and every Part consists of one or more Points. A Shape object is also associated to a record in the Attributes Table. You can also edit the shape or its attributes (see 3.2). If you want perform a complex editing or handle a batch of shapes, you can use MicroCity Script, in which many built-in functions can be used."},{header:"Making a Query",slug:"making-a-query",content:`Suppose we want to find countries, each of which has a population of more than 100 million and is entirely in the northern hemisphere. So we need to check every point's coordinate in each shape and the population attribute of the shape. Open ScriptEditor and type following codes:
local Countries = Open("countries.shp") --Try to open the shapes layer
for i = 1, GetRecCount(Countries) do --Loop all the shape objects in the layer local country = GetShape(Countries, i) --Get the shape object of a country local north = true --Assume the country is in the northern hemisphere for j = 1, GetPartCount(country) do --Loop all of the parts in the shape for k = 1, GetPointCount(country, j) do --Loop all of the points in the shape part local x, y = GetPointXY(country, k, j) --Get coordinate of the point j if y < 0 then --If the latitude is less than 0 north = false --The north assumption is false end end end local pop = GetValue(country, "POP_EST") --Get the population property local name = GetValue(country, "NAME") --Get the country name if pop > 100000000 and north then --Check the two conditions Print(name, ": ", pop/100000000) --Print out the result end
end`},{header:"Running the Script",slug:"running-the-script",content:"Save the script to query.mcs and open it with MicroCity or drag it to MicroCity. Then you will find a query item appears in Modules Tab in Workspace panel. Double click the sub-item main. If a dialog pops up, select 01. countries and click Okay. The results will be shown in Messages panel."}]},{path:"/en/docs/3.1_ui_overview.html",title:"3.1 UI Overview",pathLocale:"/en/",contents:[{header:"3.1 UI Overview",slug:"_3-1-ui-overview",content:"MicroCity provides a concise graphic windowed interface to facilitate the manipulation of data and modules."},{header:"The Main Window and Components",slug:"the-main-window-and-components",content:""},{header:"Supported Files",slug:"supported-files",content:"MicroCity can open ArcGIS shapefile (*.shp), Grids file (*.sgrd), dBase file (*.dbf), Tabular text file (*.csv, *.txt), Point clouds (*.spc), Image file (*.bmp, *.gif, *.jpg, *.png, *.tif, *.pcx) and MicroCity 3D Scene (*.m3d). These data files are maintained in the Data Tab of the Workspace Panel. Module libraries (*.dll, *.mcs) are maintained and executed through the Modules Tab of the Workspace Panel."},{header:"Project Management",slug:"project-management",content:"The information of opened data files, module libraries, settings and sub-windows can be saved or opened in a MicroCity Project (*.mprj) through the menu File->Project. The mprj file does not contain any file's data. For easy maintenance, files in a project should be put into the same folder or sub-folders of the mprj file."}]},{path:"/en/docs/3.2_vector_shapes.html",title:"3.2 Vector Shapes",pathLocale:"/en/",contents:[{header:"3.2 Vector Shapes",slug:"_3-2-vector-shapes",content:"MicroCity can open, create and edit ArcGIS shapefiles (*.shp) which are called Shapes and maintained in the Data Tab of the Workspace Panel. By using modules (see 3.7) other vector file formats, such like Scalable Vector Graphics (*.svg) and AutoCAD Drawing Exchange Format (*.dxf), can also be imported or exported."},{header:"Opening, Creating, Saving and Closing Shapes",slug:"opening-creating-saving-and-closing-shapes",content:"Users can click Load button or File->Shapes->Load menu item to open an ArcGIS shapefile (*.shp) as a Shapes. Creating a new Shapes can be done from menu File->Shapes->New and the pop-up dialog as shown below. Users can choose one shapes type from Point, Line and Polygon. The relationship between a ArcGIS shapefile (*.shp) and a same named dBase file (*.dbf) is also shown. Saving a Shapes can be done from the right click context menu Save or Save As. You can also close a Shapes from the menu and get a prompt dialog to save it."},{header:"Showing and Editing Shapes",slug:"showing-and-editing-shapes",content:"Double click a Shapes from the Data Tab will give you a map view (for maps and layers see 3.6). Toggle Action botton and right click a Shape in a Shapes layer and choose Edit Selected Shape then go to the Editing Mode. In this mode users can add/delete parts and add/delete points in a shape (for data structure of a shape see 2.2). The associated attributes table (*.dbf) of a Shapes can be accessed through right-clicking context menu Attributes->Table->Show (see the tutorial 2.1)."},{header:"Display Settings and Data Visualization",slug:"display-settings-and-data-visualization",content:"Users can change Shapes outline, fill, labels and other display settins from the Settings Panel. Some options can connect attribute data and give visualization functionalities (for example 2.1)."}]},{path:"/en/docs/3.3_raster_grids.html",title:"3.3 Raster Grids",pathLocale:"/en/",contents:[{header:"3.3 Raster Grids",slug:"_3-3-raster-grids",content:"MicroCity can open, create and edit SAGA Grid (*.sgrd) which is called Grid and maintained in the Data Tab of the Workspace Panel. Image files (*.bmp, *.gif, *.jpg, *.png, *.tif, *.pcx) can be opened as Grid as well. By using modules (see 3.7) other raster file formats, such like ESRI Arc/Info Grid (*.adf) and Surfer Grid (*.grd), can also be imported or exported."},{header:"Opening, Creating, Saving and Closing Grids",slug:"opening-creating-saving-and-closing-grids",content:`Users can click Load button or File->Grid->Load menu item to open a Grid. Creating new Grid can be done from menu File->Grid->New and the pop-up dialog: The above right figure is the data structure and definitions of a Grid. A Grid starts from its bottom left corner which has coordinate (xMin, yMin), contains NX*NY Square Cells. Each cell has its own Integer Coordinate (X, Y), in the range of (0, 0) to (XMax, YMax).
Saving Grid can be done from the right click context menu Save or Save As. You can also close a Grid from the menu and get a prompt dialog to save it.`},{header:"Showing and Editing Grids",slug:"showing-and-editing-grids",content:"Double click a Grid from the Data Tab will give you a map view (for maps and layers see 3.6). Toggle Action botton and select a range of cells in a Grid. Then the value of these cells can be edited in the Attributes Tab of the Settings Panel."},{header:"Display Settings and 3D View",slug:"display-settings-and-3d-view",content:"Users can show cell values, change color and set transparency of a Grid by using Settings Panel. Using button can creat a 3D surface of a Grid in which cell values are translated to elevation (see 3.6)."}]},{path:"/en/docs/3.4_3d_scenes.html",title:"3.4 3D Scenes",pathLocale:"/en/",contents:[{header:"3.4 3D Scenes",slug:"_3-4-3d-scenes",content:"MicroCity 3D Scene (*.m3d) is a data file format to store 3D scenes' information. Popular 3D file formats including 3D Studio Max (*.3ds), Wavefront OBJ (*.obj) and Stereolithography (*.stl) can be loaded as objects in a scene (see below) but not be stored in the .m3d file."},{header:"Opening, Creating, Saving and Closing 3D Scenes",slug:"opening-creating-saving-and-closing-3d-scenes",content:"Users can click Load button or File->Scene->Load menu item to open a Scene. Creating new Scene can be done from menu File->Scene->New and fill the pop-up dialog as shown below. After pressing Okay button an item will appear in the Data Tab of the Workspace Panel. Then Scene can be saved or closed through right-click menu:"},{header:"Showing and Editing 3D Scenes",slug:"showing-and-editing-3d-scenes",content:"Double click a Scene from the Data tab will give you a scene view. Left-mouse-dragging in a scene veiw will rotate the camera and right-mouse-dragging will translate the camera. Double-left-clicking a scene view can select objects and Double-right-clicking a scene view can popup a context menu (shown below). One can add objects, load objects and set objects, etc.. Note that the Rotation in the coordinate system should obey Left-hand rule. The illustration of the coordinate system and an example of the rotation around y-axis is shown below: The coordinate used in the position and rotation of an object is relative to its parent object. By default, the parent of a new object is null."},{header:"Display Settings",slug:"display-settings",content:"Users can change the background color, reference grid or other display options of a Scene by using Settings Panel."}]},{path:"/en/docs/3.5_tables.html",title:"3.5 Tables",pathLocale:"/en/",contents:[{header:"3.5 Tables",slug:"_3-5-tables",content:"Tabular files including dBase files (*.dbf), Text file (*.txt) and Comma Separated Values (*.csv) can be opened as Table and saved with MicroCity."},{header:"Opening, Creating, Saving and Closing Tables",slug:"opening-creating-saving-and-closing-tables",content:"Users can click Load button or File->Table->Load menu item to open a tabular file. Creating a new Table can be done from menu File->Table->New and the pop-up dialog as shown below. Saving a Table can be done from the right click context menu Save or Save As."},{header:"Showing and Editing Tables",slug:"showing-and-editing-tables",content:`Double click a Table from the Data Tab will give you a table view. Altering a table's stucture can be done by right click the table's head. If you click "Add Field" then, a dialog which guide you (as shown below). If you want insert a record to the table, you can right click the left numbers of the table and select a context menu item.`}]},{path:"/en/docs/3.6_maps_and_layers.html",title:"3.6 Maps and Layers",pathLocale:"/en/",contents:[{header:"3.6 Maps and Layers",slug:"_3-6-maps-and-layers",content:"In MicroCity, Shapes and Grids can be showed in Maps. Each map may contains multiple layers and each layer is corresponding to a Shapes or a Grid."},{header:"Opening, Creating, Saving, Printing and Closing Maps",slug:"opening-creating-saving-printing-and-closing-maps",content:"Because Maps are based on Shapes and Grids, they can not be saved or opened independently, but can be saved or opened along with a MicroCity Project (*.mprj). Creating a Map is by double clicking a Shapes or Grid from the Data Tab of the Workspace Panel. A Map window contains four coordinate bars which can be used to locate objects (see below). A Map can also be printed or closed from the context menu of the Maps Tab of the Workspace Panel."},{header:"Adding, Moving, Hiding and Closing Layers in a Map",slug:"adding-moving-hiding-and-closing-layers-in-a-map",content:"A Map can have multiple Layers, each of them represents a data item. One can add a Layer to a Map by double clicking a Shapes or a Grid from the Data Tab. A lower layer can be obscured by upper layers. One can move a layer by dragging, hide a layer by double clicking and close a layer through the menu (as shown below)."},{header:"Controlling Map Views",slug:"controlling-map-views",content:`When a data item or a layer is selected, this layer is called the active layer. One can toggle the Action button to select and edit an object in the active layer. By toggling the Zoom or Pan botton, the map can zoomed in, zoomed out or panned. If one lose in a map, he can use the Zoom to Full Extent button to get a full view of the map. Other zoom controlling buttons can be used to facilitate the map browsing.
The Synchronise button can be used if you want compare difference between two or more maps. The Ruler button can be used to meassure distances. Note that, by default, the unit of the distances measured is kilometer under the coordinate system of Earth. One can change the coordinate system to Non-Earth from the Settings Panel of the Map, and get Cartesian distance without unit.
One can create a 3D surface map by clicking 3D button, which need a appropriately sized Grid (see 3.3).`}]},{path:"/en/docs/3.7_modules.html",title:"3.7 Modules",pathLocale:"/en/",contents:[{header:"3.7 Modules",slug:"_3-7-modules",content:"The functionality of MicroCity can be extended by modules, one type of which is SAGA Module (*.dll). SAGA Modules contains many useful libraries for Shapes and Grids. Another type of Module is MicroCity Script (*.mcs), which can be edited and debugged with ScriptEditor (see 4.1)."},{header:"Loading, Closing and Executing Modules",slug:"loading-closing-and-executing-modules",content:"Modules can be loaded to MicroCity by clicking Load button or Modules->Load Module Library menu item. The Modules Tab of the Workspace Panel will display the loaded Libraries (each of which corresponding to a file) and their inside Modules . One can close or reload a Module Library from the context menu. Executing a moule has many ways: double clicking it, clicking the Execute button from the Settings Panel, or click the Execute context menu item. One can also Debug a MicroCity Script module by clicking the Debug context menu item, that needs the ScriptEditor running in the background. MicroCity can also capture runtime errors and pause the execution of modules."},{header:"Accelerating, Stopping the Execution of a Module",slug:"accelerating-stopping-the-execution-of-a-module",content:`MicroCity Script module is created with Lua language which is very fast. In some cases, if you want much more faster execution speed, you can click the Module Libraries in the Modules Tab of the Workspace Panel and switch the Script Running Mode in the Settings Panel from the Safe Mode to the Fast Mode. Then MicroCity will use LuaJIT to execute modules.
If a module is being executed, one can stop it by click the Execute button in the corresponding Settings. In Safe Mode the execution can be immediately stopped, but in Fast Mode the stopping is depend on the GetReady() function called in the script (see 4.2.`}]},{path:"/en/docs/4.1_si_overview.html",title:"4.1 SI Overview",pathLocale:"/en/",contents:[{header:"4.1 SI Overview",slug:"_4-1-si-overview",content:"MicroCity uses Modules (see 3.7) to extend its functionalities. One type of the modules is MicroCity Script (*.mcs) which can be edited and debugged in the ScriptEditor."},{header:"The Script Editor",slug:"the-script-editor",content:""},{header:"Coding and Debugging MicroCity Scripts",slug:"coding-and-debugging-microcity-scripts",content:"ScriptEditor is based on ZeroBrane. One can find detailed information there. For debugging, you should keep Script Editor being opened. Then right click the module from MicroCity and choose Debug item in the context menu (see 3.7). The execution can be indicated in the Code View of ScriptEditor. You can control the execution and watch variables with Debug Buttons."},{header:"The Lua Language and Embedded Functions",slug:"the-lua-language-and-embedded-functions",content:`MicroCity uses Lua 5.1 as its script language. One can find the reference manual there. MicroCity embeds many useful funtions in Lua, which can not only control user interfaces, manipulate data, but also can solve mathematical models and run simulations. You should read following chapters for more information.
Conventions in this reference:
There are four major data types in Lua can be passed though embedded functions as parameters, namely Number, Boolean, String and Object. The type Object includes builtin Lua objects, such as Table, Function and Thread..., as well as MicroCity objects, such as Shapes, Grid, Table and Scene.... To clarify the parameter type in embedded functions, we use capitalization, quotation mark and semantic information to avoid ambiguities in function descriptions. A lowercase word of a paramter means a Number. Sometimes, to present an integer parameter, a letter 'i' followed by a word is used, like iField. Starting with the letter 'b' and followed by a word means a Boolean, like bShow. A quoted word means a String. A capitalized word means an Object or a keyword. Following is an example of a embedded function description.
AddParameter (Module, ParentNode, "Value", "id" [, default = 0])
In this case, the Module parameter should be a Module object. The ParentNode parameter should be a Node object, but it act as a parent Node. The "Value" parameter is a string, but it represent the builtin type Value in MicroCity, so this string can not be changed. The "id" parameter should be a user specified string. The default parameter is a number. The contents in a pair of '[' and ']' are optional. The character '|' among parameters means "or".
Encoding formats:
MicroCity uses ANSI encoding format to read and write data, such as shp, txt, csv and dbf. ScriptEditor and the embedded funtions use UTF-8 encoding format to read and write data, such as txt or csv.`}]},{path:"/en/docs/4.2_ui_control.html",title:"4.2 UI Control",pathLocale:"/en/",contents:[{header:"4.2 UI Control",slug:"_4-2-ui-control",content:'Microcity Script can be used to control some features appearing in user interfaces, which include moduels, data objects, messages and so on. There are some sample codes can be found in the "user_interface" folder of the Project Tab in ScriptEditor.'},{header:"Basic User Interfaces",slug:"basic-user-interfaces",content:`Print ("hello" [,...])
Prints values in the Messages Panel.
Note ("hello" [,...])
Notifies users and pauses the execution.
SetProcessText ("processing")
Sets a text at the bottom left corner of MicroCity.
SetProgress (position, range)
Sets the progress bar of position/range that locates at the bottom right conner of MicroCity.
Sleep (milliseconds)
Pauses the execution for milliseconds.
GetReady ()
MicroCity shares the same thread with the lua engine. Heavy calculations in lua will block the MicroCity interface. Use this function inside can let the MicroCity interface respond to user operations. Returns false if user cancel the current execution.
GetClickXY ()
Returns x,y where a user clicked at a Map View.
GetDragExtent ()
Returns bottom-left and top-right corner coordinate: Lx, By, Rx, Ty, which a user used mouse to drag a rectangle in a Map View.`},{header:"Data Objects",slug:"data-objects",content:`PATH
Internal global variable that holds a string of current working directory, such as "c:\\microcity".
Open (".\\\\shapes.shp" [, ".\\\\grid.sgrd" [, ".\\\\table.dbf" [, ".\\\\scene.m3d" , ...]]])
Opens and returns Shapes, Table, Grid and Scene object from current working directory or opened data.
Close (Shapes|Grid|Table|Scene|Network|RndEngine|LPModel)
Closes an opened or created Shapes, Table, Grid, Scene, Network, RndEngine or LPModel object.
Update (Shapes|Grid|Table [, bShow = ture])
Update current changes of Shapes, Grid or Table object in MicroCity. The bShow indicates whether to create a view of the object. Returns false if user cancel the current execution.
CreateMap ("name", Shapes1|Grid1 [, Shapes2|Grid2, ...])
Creates a Map View to show objects which can be arranged in layers by their order in the parameters.`},{header:"Modules and Parameters",slug:"modules-and-parameters",content:`AddModule ("Function" [, "name"]) This function can add a lua function as a module to current module library. The module's default name is the function's name. Returns a Module object.
AddParameter (Module, ParentNode, "Node", "id")
AddParameter (Module, ParentNode, "Value", "id" [, default = 0])
AddParameter (Module, ParentNode, "Range", "id" [, low = 0 [, high = 1]])
AddParameter (Module, ParentNode, "Check", "id" [, default = 0])
AddParameter (Module, ParentNode, "String", "id" [, "string" = "")
AddParameter (Module, ParentNode, "Choice", "id" [, "choice1|choice2|" [, choice = 1]])
AddParameter (Module, ParentNode, "File", "id" [, "c:\\\\default.txt" = ""])
AddParameter (Module, ParentNode, "Color", "id" [, "color" = "255 255 255")
AddParameter (Module, ParentNode, "Shapes", "id")
AddParameter (Module, ParentNode, "Grid", "id")
AddParameter (Module, ParentNode, "Scene", "id")
AddParameter (Module, ParentNode, "Table", "id")
AddParameter (Module, ParentNode, "Field", "id")
These functions can add a parameter to a module's settings panel. Returns corresponding values or an object. The ParentNode can be set to the first return of a AddParameter function. If "Field" is set at the third place, the parent_node can be set to a Table or Shapes object to get its attributes table's head.
GetParameter (Shapes|Table|Grid|Scene|Module, "id")
Returns the parameter specified by "id" from the object's settings panel.
SetParameter (Shapes|Table|Grid|Scene|Module, "id", Number|"String"|Object)
Sets the parameter specified by "id" in the object's settings panel. Returns true if succeed. Note that the choice parameter should start from 1. A parameter's "id" can be found in the parameter's helper text shown as below.`}]},{path:"/en/docs/4.3_shapes_and_tables.html",title:"4.3 Shapes and Tables",pathLocale:"/en/",contents:[{header:"4.3 Shapes and Tables",slug:"_4-3-shapes-and-tables",content:'Users can manipulate Shapes and Tables with MicroCity Script. For detailed data structure of Shapes, you can refer to previous chapter 2.2 and 3.2. Because Shapes can be treated as Tables with extra field with geographic data, some of embeded functions for tabular data manipulation can be used both in Shapes and Tables. Sample codes for this chapter can be found in the "shapes_samples" folder of the Project Tab in ScriptEditor.'},{header:"Tabular Data Manipulation",slug:"tabular-data-manipulation",content:`CreateShapes ("name", "Point|Line|Polygon")
Returns a Shapes object.
CreateTable ("Name")
Returns a Table object.
GetFieldCount (Shapes|Table)
Returns the number of fields in a Shapes or Table
GetField (Shapes|Table, iField)
Inputs the index (starts from 1) of a field and returns the field name and type ("Int", "Float", "Double" or "String).
AddField (Shapes|Table, "field1", "Int|Float|Double|String" [, "field2", "Int|Float|Double|String", ...])
Adds fields to a *Table or Shapes and returns booleans (true or false) by order.
DelField (Shapes|Table, iField)
Returns true if successfully delete a field.
GetRecCount (Shapes|Table)
Returns the total number of records in a Shapes or Table.
AddRecord (Shapes|Table)
Adds a record to a Shapes or Table and returns the index.
GetValue (Shapes|Table, "field_name", index1 [, index2, ...])
Retrieve values from a specified field and indexes of a Shapes or Table. Returns multiple values by the order of indexes.
SetValue (Shapes|Table, value, "field_name", index1 [, index2, ...])
Sets values for a specified field and indexes of a Shapes or Table.`},{header:"Geographic Data Manipulation",slug:"geographic-data-manipulation",content:`GetSelections (Shapes)
Returns selected shape objects from a Shapes.
GetShape (Shapes, index1 [, index2, ...])
Returns Shape objects from a Shapes by the order of indexes.
AddShape (Shapes, Shape)
Adds a Shape object to a Shapes and returns its index.
AddShape (Shapes [, x1, y1, x2, y2, ...])
Adds a Shape object to a Shapes which defined as points. Returns the Shape object and index.
DelShape (Shape|Shapes)
Deletes a Shape or Shapes object and returns ture if successful.
AddPoint (Shape, x, y [, iPart = 1])
Adds a point to a Shape and returns ture if successful.
InsPoint (Shape, x, y [, iPoint = 1 [, iPart = 1]])
Inserts a point to a Shape and returns ture if successful.
SetPoint (Shape, x, y [, iPoint = 1 [, iPart = 1]])
Sets a point coordinates in a Shape and returns ture if successful.
DelPoint (Shape, iPoint [, iPart=1])
Deletes a point at position iPoint from a Shape and returns ture if successful..
DelPart (Shape, iPart)
Deletes a part from a Shape and returns ture if successful.
GetPartCount (Shape)
Returns the number of parts in a Shape.
GetPointCount (Shape [, iPart])
Returns the number of points in a Shape.
GetPointXY (Shape [, iPoint [, iPart = 1]])
Returns all points' coordinates: x1, y1, x2, y2, ... from a Shape or a specified point's coordinate.
CopyShapeTo (TargetShapes, dx, dy, Shape1 [, Shape2, ...])
Copys Shape objects to a target Shapes with relative translation (dx, dy) and returns new Shape objects.
MoveShapeTo (dx, dy, Shape1 [, Shape2, ...])
Translates Shape objects to its relative position (dx, dy).
GetCenterXY (Shapes)
Returns the center coordinate (x, y) of a Shapes.
GetCenterXY (Shapes, index1 [, index2, ...])
Returns the center coordinates (x1, y1, x2, y2, ...) of Shape objects specified by indexes in a Shapes.
GetCenterXY (Shape1 [, Shape2, ...])
Returns the center coordinates (x1, y1, x2, y2, ...) of Shape objects.
GetDistance (x1, y1, x2, y2 [, x3, y3, ...])
Returns the total distance between every two pairs of coordinates (x, y).
GetShapeLen (Shape1 [, Shape2, ...])
Returns lengths of Shape objects.
GetShapeArea (Shape1 [, Shape2, ...])
Returns areas of Shape objects.
GetShapeType (Shape|Shapes)
Returns the type ("Point", "Line" or "Polygon") of the a Shapes or Shape object.
GetExtent (Shapes)
Returns the extent coordinates (Lx, By, Rx, Ty) of a Shapes's extent.
GetExtent (Shapes, index)
Returns the extent coordinates (Lx, By, Rx, Ty) of a Shape indexed in a Shapes.
GetExtent (Shape)
Returns the extent coordinates (Lx, By, Rx, Ty) of a Shape.
GetIntersection (ShapeA, ShapeB)
Returns a Shape (Point, Line or Polygon) object of the intersection of two Shapes.
GetValue (Shape, "field_name")
Returns the value of specified field of a Shape.
SetValue (Shape, value1, "field_name1" [, value2, "field_name2", ...])
Sets values in different fiedds for a Shape.
SetCoorSys ("Earth"|"Non-Earth")
Sets coordinate system. If using "Earth", distances, lenths and areas are calculated according to the earth ellipsoid coordinate system. By default the "Non-Earth" is used, which is cartesian coordinate system.`}]},{path:"/en/docs/4.4_grids.html",title:"4.4 Grids",pathLocale:"/en/",contents:[{header:"4.4 Grids",slug:"_4-4-grids",content:'Grids in MicroCity have simple structure (3.3) but efficient time and space utilization if applying algorithms on them. Sample codes for this chapter can be found in the "grid_samples" folder of the Project Tab in ScriptEditor.'},{header:"Cellular Data Manipulation",slug:"cellular-data-manipulation",content:`CreateGrid ("name", "Int|Float|Double", XMax, YMax [, CellSize = 1 [, xMin = 0 [, yMin = 0] [, init = 0]]]])
Returns a Grid object.
GetCellSize (Grid)
Returns the Cellsize value of a Grid.
GetGridMaxXY (Grid)
Returns XMax, YMax of a Grid.
ConvertToGridXY (Grid, x1, y1 [, x2, y2, ...])
Converts real coordinates to coordinates in a Grid. Returns X1, Y1, X2, Y2, ... .
ShapeToGrid (Grid, Shape, value)
Rasterizes a Shape in a Grid. The cell values will be set according to the covering area and the inputed value.
ShapeToGrid (Grid, Shapes, "field_name")
Rasterizes all Shape objects in a Shapes. The cell values will be set according to the covering area and the values of Shapes field.
GetValue (Grid, X1, Y1 [, X2, Y2, ...])
Returns cells' (specified by Grid coordinates) values: value1, value2, ... .
SetValue (Grid, value, X1, Y1 [, X2, Y2, ...])
Sets values for cells specified by Grid coordinates.
GetCenterXY (Grid)
Returns the center real coordinate (x, y) of a Grid.
GetCenterXY (Grid, X1, Y1 [, X2, Y2, ...])
Returns the real coordinates of cells' centers: x1, y1, x2, y2, ... .
GetExtent (Grid)
Returns the leftbottom and righttop corner of a Grid's extent: Lx, By, Rx, Ty.
GetExtent (Grid, X, Y)
Returns the leftbottom and righttop corner of a cell's extent: Lx, By, Rx, Ty.
GetFractalDim (Grid, X1, Y1, X2, Y2, fold [, MultiFractalQ = 0])
Calculates fractal dimension of the specified area in a Grid. Returns dimension, RSQ of linear regression, and the number of boxes in every fold.`}]},{path:"/en/docs/4.5_3d_scenes.html",title:"4.5 3D Scenes",pathLocale:"/en/",contents:[{header:"4.5 3D Scenes",slug:"_4-5-3d-scenes",content:'Scenes and inside 3D objects (3.4) can be scripted. Sample codes for this chapter can be found in the "3d_samples" folder of the Project Tab in ScriptEditor.'},{header:"3D Scene and Object Manipulation",slug:"_3d-scene-and-object-manipulation",content:`CreateScene ("Title" [, RotSpeed=1] [, TransSpeed=1])
Creates a new 3d scene and returns the object.
AddZipTo3DPath (Scene, "filename.zip")
Adds a zip file to the search directory and returns true if succeed. It is useful for collecting a large amount of files.
LoadSkybox (Scene, "top.jpg" ,"bottom.jpg" ,"left.jpg" ,"right.jpg" ,"front.jpg" ,"back.jpg")
Loads six image files as the skybox of a 3d scene.
LoadObject (Scene, "filename.3ds" [,shadow = false [, AnimationSpeed]])
Loads a 3d object from a file and returns the object.
AddLight (Scene, x, y, z, Radius [, r = 255, g = 255, b = 255])
Adds a light object and returns the object.
Add3DLabel(Scene, "label" [, width=10, height=10 [, r = 180, g = 180, b = 180 [, "font.xml"]]])
Adds a 3D label at (0,0,0) and returns the object.
Add3DLine (Scene, x1, y1, z1, x2, y2, z2 [, r = 0, g = 0, b = 0])
Adds a 3D line object frome (x1, y1, z1) to (x2, y2, z2) and retruns the object.
Add3DRect (Scene, length, width [, r = 180, g = 180, b = 180])
Adds a 3D rectangular object from (-length/2,0,-width/2) to (length/2,0,width/2) and returns the object.
Add3DBox (Scene, length, width, height [, r = 180, g = 180, b = 180 [, bShowEdge = true]])
Adds a 3D box object from (-length/2,-height/2,-width/2) to (length/2,height/2,width/2) and returns the object.
AddSphere (Scene, radius [, polycount = 16 [, r = 180, g = 180, b = 180]])
Adds a sphere at (0,0,0) and returns the object. If the radius parameter is less than 0, returns an invisible object.
GetTexture (Object)
Returns the texture files of a object: "filename1", "filename2", ... .
LoadTexture (Scene, Object, "filename1" [, "filename2", ...])
Loads texture files to an object.
SetPosition (Object, x, y, z [, absolute = false])
Sets the position of an object relative to its parent (or the absolute position to the scene).
GetPosition (Object [, absolute = false])
Gets the position of an object relative to its parent (or the absolute position to the scene).
SetRotation (Object, rx, ry, rz [, absolute = false])
Sets the rotation (left hand rule) of an object in degrees relative to its parent (or the absolute rotation to the scene).
GetRotation (Object [, absolute = false])
Gets the rotation (left hand rule) of an object in degrees relative to its parent (or the absolute rotation to the scene).
SetScale (Object, sx, sy, sz)
Sets the scale of an object.
GetScale (Object)
Gets the scale of an object.
SetParent (Object, Parent)
Attaches an object to another object as a child.
GetParent (Object)
Gets the parent of an object.
SetObject (Object "id" [,x, y, z, [,rx, ry, rz [,sx, sy, sz]]])
Sets the ID, position, rotation and scale of an object.
DelObject (Object)
Deletes an object.
SetCamera (Scene, x, y, z [,Tx, Ty, Tz])
Sets the position and target of the scene camera.
GetCamera (Scene)
Gets the camera object of a 3d scene and its position and targt.
GetSelections (Scene)
Returns selected objects from a 3d scene.
GetObjectID (Object1 [, Object2, ...])
Returns "id"s of objects.
SetObjectID (Object, "id")
Sets the id of an object.
GetObject (Scene, "id")
Finds an object by its id.`}]},{path:"/en/docs/4.6_networks.html",title:"4.6 Networks",pathLocale:"/en/",contents:[{header:"4.6 Networks",slug:"_4-6-networks",content:'GIS vector data (3.2) in MicroCity can be topologized to Networks and applied the Shortest Path Algorithm and User Equilibrium Traffic Assignment Algorithm. Sample codes for this chapter can be found in the "network_samples" folder of the Project Tab in ScriptEditor.'},{header:"Network Manipulation",slug:"network-manipulation",content:`CreateNetwork ()
Creates an empty network and returns the object.
CreateNetwork (UnTopoLines)
Creates a network from an untopologized "line" Shapes and returns three objects: Network, Nodes (Shapes) and Links (Shapes).
CreateNetwork (Nodes, Links)
Creates a Network object from topologized Nodes and Links Shapes. Returns the Network object.
InitNetwork (Network, Nodes, Links)
Initiates a Network from a Nodes and a Links Shapes. Returns true if succeed.
AddLink (Network, linkID|-1, oID|-1, dID|-1, impedance [, direction = 1 [, capacity = 1E+38]])
Adds a new link or update an existing link in the Network. Returns linkID, oID, dID, true/false for adding and true/false for updating.
AddLink (Network, Shapes|Table, index1 [, index2, ...])
Adds or updates links from the recordset of a Shapes or Table. Returns boolean values.
DelLink (Network, linkID)
Deletes a link from a Network. Returns a boolean value.
GetNearNodeID (Network, x, y [, radius=nil])
Gets the nearest Network nodes from a coordinate. Returns node ids.
GetNodeXY (Network, nodeID1 [, nodeID2, ...])
Returns the coordinates of nodes in a Network: x1, y1, x2, y2, ... .`},{header:"Algorithms",slug:"algorithms",content:`GenSTPTree (Network, startID [, endID])
Generates a Shortest Path Spanning Tree from a node. Returns a boolean value.
GetSTPPath (Network, endID, "NodeID"|"LinkID")
After calling GenSTPTree calls this function. Returns a Shortest Path indicated by a node or link id sequence: id1, id2 ,... .
GetSTPPath (Network, endID, "iNodeShp"|"iLinkShp")
After calling GenSTPTree calls this function. Returns a Shortest Path indicated by a node or link Shapes index sequence.
GetSTPPath (Network, endID, "NodeShp"|"LinkShp")
After calling GenSTPTree calls this function. Returns a Shortest Path indicated by a node or link Shape object sequence.
GetSTPLen (Network, endID)
After calling GenSTPTree call this function. Returns a Shortest Path Distance to a end node.
GetSTPLen (Network, startID, endID)
Gets a Shortest Path from a start node to an end node in a Network. Returns the distance.
GetSTPLen (Network, x1, y1, x2, y2)
Gets a Shortest Path from a start coordinate to an end coordinate in a Network. Returns the distance.
SetTrip (Network, oID, dID, amount)
Sets an amount of a trip from an origin to an destination.
SolveUE (Network [, rootTol = 1E-2 [, equlBrm = 1E-5 [, maxIter = 10000]]])
After calling SetTrip call this function. Performs the User Equilibium Traffic Assignment and returns a boolean value.
GetFlow (Network, linkID)
Returns the traffic flow of a specified link.
SetFlow (Network, linkID, flow)
Set the traffic flow of a specified link and return a boolean value.`}]},{path:"/en/docs/4.7_des_simulations.html",title:"4.7 Discrete Event Simulations",pathLocale:"/en/",contents:[{header:"4.7 Discrete Event Simulations",slug:"_4-7-discrete-event-simulations",content:'MicroCity has a inside simulation time counting and event scheduling mechanism. It provides several embedded Lua functions to facilitate creating Discrete Event Simulations, which is very useful for dynamic system analysis. Sample codes for this chapter can be found in the "simulation_samples" folder of the Project Tab in ScriptEditor.'},{header:"Random Number Generation",slug:"random-number-generation",content:`CreateRandEng (seed, "uniform_01")
Creates a binary distributed random generation engine from a seed and returns the object.
CreateRandEng (seed, "uniform_real" [, min = 0, max = 1])
Creates a uniform distributed real random generation engine from a seed and returns the object.
CreateRandEng (seed, "uniform_int" [, min = 0, max = 1])
Creates an uniform integer random generation engine from a seed and returns the object.
CreateRandEng (seed, "triangle" [, a = 0, b = 1, c = 2])
Creates a triangle distributed random generation engine from a seed and returns the object.
CreateRandEng (seed, "bernoulli" [, p = 0])
Creates a bernoulli distributed random generation engine from a seed and returns the object.
CreateRandEng (seed, "cauchy" [, median = 0, sigma = 1])
Creates a cauchy distributed random generation engine from a seed and returns the object.
CreateRandEng (seed, "exponential" [, lambda = 1])
Creates a exponential distributed random generation engine from a seed and returns the object.
CreateRandEng (seed, "geometric" [, p = 0])
Creates a geometric distributed random generation engine from a seed and returns the object.
CreateRandEng (seed, "normal" [, mean = 0, sigma = 1])
Creates a normal distributed random generation engine from a seed and returns the object.
CreateRandEng (seed, "lognormal" [, mean = 0, sigma = 1])
Creates a lognormal distributed random generation engine from a seed and returns the object.
GetNextRandom (Engine)
Gets a random number from a random generation engine.`},{header:"Simulation Control",slug:"simulation-control",content:`CreateEvent (time, Funcion [, arg1, arg2, ...])
Creates a future event from a Lua Function or a Lua Coroutine. Returns a Coroutine object.
ExecAllEvents ()
Calls this at last. It will execute all events as Lua Coroutines.
Delay ([relativeTime = 0])
Calls this function in a Lua Coroutine will let it first yield then resume it after the specified relative time. If the parameter relativeTime is not set, the current Coroutine will yield and won' be resumed automatically.
Resume ([time, ] Coroutine [, arg1, arg2, ...])
Resumes a yielded coroutine immediately or at a specified time.
GetSimTime ()
Returns the current simulation time.`}]},{path:"/en/docs/4.8_mixed_integer_programming.html",title:"4.8 Mixed Integer Programming",pathLocale:"/en/",contents:[{header:"4.8 Mixed Integer Programming",slug:"_4-8-mixed-integer-programming",content:'MicroCity employs the lpsolve to takle Mixed Integer Linear Programming problems. Developers can use embedded Lua functions to build and solve models. Sample codes for this chapter can be found in the "optimization_samples" folder of the Project Tab in ScriptEditor.'},{header:"Model Creation and Execution",slug:"model-creation-and-execution",content:`CreateLP ([rows = 0 , columns = 0])
Creates a Mixed Integer Linear Programming model and returns the LPModel object.
SetObjFunction (LPModel, rowTable, "MAX"|"MIN")
Sets the objective function of a LPModel with a Lua Table which stores coefficients of the decision variables.
AddConstraint (LPModel, rowTable, "<="|">="|"==", rhsValue)
Adds a constraint to a LPModel with a Lua Table which stores coefficients of the decision variables.
SetInteger (LPModel, index)
Sets a decision variable specified by the index as an integer variable.
SetBinary (LPModel, index)
Sets a decision variable of a LPModel specified by the index as a binary variable.
SetUnbounded (LPModel, index)
Sets a decision variable of a LPModel to be unbounded(+/- infinity).
SolveLP (LPModel [, timeoutSec = 60])
Solves a LPModel and returns 0 as success, -1 as invalid LP model, -2 as nomemory, 1 as suboptimal, 2 as infeasible, 3 as unbounded, 4 as degenerate, 5 as a numerical failure encountered, 6 as the user abort, 7 as a timeout error, 9 as the model could be solved by presolve, 10 as the B&B routine failed, 11 as the B&B was stopped because of a break-at-first, 12 as a feasible B&B solution was found, 13 as no feasible B&B solution found.
GetObjective (LPModel)
Returns the objective function value of a LPModel.
GetVariable (LPModel, index)
Returns the value of a decision variable specified by the index.
GetVariables (LPModel)
Returns all values of the decision variables of a LPModel.
GetDual (LPModel, index)
Returns the dual value of a decision variable specified by the index.
GetDuals (LPModel)
Returns all dual values of the decision variables of a LPModel.
ReadLP("fileName.mps")
Reads a LPModel from a file (*.lp, *.mps) and returns the LPModel if succeed.
WriteLP (LPModel, "fileName.mps")
Writes a LPModel to a file (*.lp, *.mps) and returns true if succeed.`}]},{path:"/en/docs/",title:"MicroCity Desktop Documents",pathLocale:"/en/",contents:[{header:"MicroCity Desktop Documents",slug:"microcity-desktop-documents",content:""},{header:"Contents",slug:"contents",content:`1 Introduction 1.1 What MicroCity can Do 2 Getting Started 2.1 Showing a World Map
2.2 Searching for Countries 3 User Interfaces 3.1 UI Overview
3.2 Vector Shapes
3.3 Raster Grids
3.4 3D Scenes
3.5 Tables
3.6 Maps and Layers
3.7 Modules 4 Scripting Interfaces 4.1 SI Overview
4.2 UI Control
4.3 Shapes and Tables
4.4 Grids
4.5 3D Scenes
4.6 Networks
4.7 Discrete Event Simulations
4.8 Mixed Integer Programming Statement: The content of the documents in this directory comes from MicroCity Desktop, and the copyright belongs to the original author.`}]},{path:"/en/notes/3d-objects.html",title:"3D Objects",pathLocale:"/en/",contents:[{header:"3D Objects",slug:"_3d-objects",content:"This section will introduce the objects and their control functions in a 3D scene."},{header:"Adding Objects",slug:"adding-objects",content:`To add objects to the scene, use the following function:
local obj = scene.addobj([type], {key1 = value1, key2 = value2, ...})`},{header:"Optional Object Properties",slug:"optional-object-properties",content:`Objects added to the scene typically support setting some of the following properties: Object Property
Meaning color
The color of the object. The format of the color can support built-in colors, hexadecimal, and RGB. Same as the background color of the scene opacity
Opacity hcolor
The color when the object is selected size
The size of the object. The default value is 1 length
The length of the object, commonly used for box width
The width of the object, commonly used for box height
The height of the object, commonly used for box radius
The size of the object's rounded corners segments
The number of segments, usually used to set the precision of the sphere drawn selectable
Whether the object can be selected name
The name of the object text
The text value of the object font
The font of the text vertices
The set of points that make up the corresponding object The following are the types of objects that can be added to the scene:`},{header:"Object Types",slug:"object-types",content:""},{header:"List of Object Types",slug:"list-of-object-types",content:`label: Text label
points: Set of points
polyline: Set of line segments
box: Cube
sphere: Sphere
polygon: Polygon
light: Light source
mesh: Face made up of points For the sake of brevity, the key properties of the optional objects shown in the example below only display the relevant attributes of the object. Other common properties can be added by referring to the Optional Object Properties.`},{header:"label",slug:"label",content:`label is a text label. The text of the label can be set in the text attribute.
local obj = scene.addobj('label', {text = "Hello World!"})`},{header:"points",slug:"points",content:`points is a collection of points. You can create a single point or multiple points. Each point has three-dimensional coordinates to determine its position in three-dimensional space. The number of points is determined by the vertices attribute.
Here is an example of creating a points object:
-- create a point at position (5,5,5)
scene.addobj("points", {vertices = {5,5,5}, size = 5}) -- create two points, the first at (0,0,0), the second at (5,5,5)
scene.addobj("points", {vertices = {0,0,0, 5,5,5}, size = 5})`},{header:"polyline",slug:"polyline",content:`polyline is a collection of line segments. When multiple points are input in the vertices attribute, line segments will be generated based on the order of the coordinates.
Therefore, although the same coordinates are used in the two examples below, the results are different because the order of the input coordinates is different.
scene.addobj("polyline", {vertices = {0,0,0, 4,6,7, -2,3,5}})
scene.addobj("polyline", {vertices = {0,0,0, -2,3,5, 4,6,7}}) polyline point order comparison polyline does not have a size attribute.`},{header:"box",slug:"box",content:`box is a cuboid. Its shape can be modified mainly through the length, width, and height attributes.
local obj = scene.addobj('box', {length = 3, width = 4, height = 5})
Important optional properties of the box object: Property
Meaning length
The length of the cuboid width
The width of the cuboid height
The height of the cuboid Based on the above three attributes, we can modify the shape of the rotating box in the default sample code.
-- Add the length, width, and height attributes (default to 1 if not added)
local obj = scene.addobj('box', {length = 3, width = 4, height = 5}) local x = 1
local y = 1
local z = 0
while scene.render() do x = x + 0.1 y = y + 0.1 obj:setrot(x, y, z)
end Boxes with different lengths, widths, and heights.`},{header:"sphere",slug:"sphere",content:`sphere is used to create a sphere object. Its size can be modified by the radius attribute, and its model quality can be set by setting the segments attribute. Refer to the example of the Earth in the built-in samples for more details.
local obj = scene.addobj('sphere', {radius=15, segments=360})
Optional attributes for sphere objects: Attribute
Meaning radius
The radius of the sphere. It can be used to control the size of the sphere. segments
The number of rendered surfaces of the sphere. The higher the value, the more detailed the sphere model will be. The impact of different segments on the same sphere`},{header:"polygon",slug:"polygon",content:`polygon is used to create a polygon object, mainly set through the vertices attribute.
local obj = scene.addobj("polygon", {vertices = {-1,-1,0, -1,1,-0, 1,1,0, 1,-1,0}}) Because the polygon in this example is a square, it looks no different from the box introduced above. However, when the shape is set to other types of polygons (such as triangles, pentagons, etc.), the meaning of the polygon can be reflected. Attribute
Meaning
Explanation vertices
The vertices of the polygon
You can set the three-dimensional coordinates of each point in turn in the vertices attribute. The third dimension coordinates do not have an impact but play a placeholder role. size
Volume
Since the third dimension coordinates do not have an impact, and the area is already determined by the vertices of the polygon, the size attribute controls the volume by controlling the third dimension coordinate values of each point. The impact of different size on the same polygon volume`},{header:"External model",slug:"external-model",content:`Reference external files. However, for MicroCityWeb, only the built-in files on the website can be referenced at present.
For example, in the built-in example, a box-type truck is generated in the view by referencing the internal file:
local obj = scene.addobj('/res/2axle.glb')
You can also reference an external model by referencing the URL of the file:
local obj = scene.addobj('https://microcityweb.gitee.io/res/agv.glb') If you have 3D model resources at hand, you can view them in 3D Viewer and export them as .glb models through this website.`},{header:"Light",slug:"light",content:"Set the direction of the light, and the optional parameter vertices is a three-dimensional vector that represents the direction of the light. Since a strong light source has already been set in the MicroCityWeb scene, this will not be discussed in detail here."},{header:"Mesh",slug:"mesh",content:"A face composed of multiple points, commonly found in referenced external models. Due to its limited application, it will not be introduced here."},{header:"Object Control Functions",slug:"object-control-functions",content:"Assuming the 3D object to be manipulated is obj."},{header:"getpos()",slug:"getpos",content:`Gets the position coordinates (x, y, z) of obj.
local x, y, z = obj:getpos()`},{header:"setpos()",slug:"setpos",content:`Sets the position coordinates of obj to (x, y, z).
obj:setpos(x, y, z)`},{header:"getrot()",slug:"getrot",content:`Gets the rotation angles (rx, ry, rz) of obj in the x, y, and z directions.
local rx, ry, rz = obj:getrot()`},{header:"setrot()",slug:"setrot",content:`Sets the rotation angles of obj in the x, y, and z directions to (rx, ry, rz).
obj:setrot(rx, ry, rz)`},{header:"getscale()",slug:"getscale",content:`Gets the scaling ratios (sx, sy, sz) of obj in the x, y, and z directions.
local sx, sy, sz = obj:getscale()`},{header:"setscale()",slug:"setscale",content:`Sets the scaling ratios of obj in the x, y, and z directions to (sx, sy, sz).
obj:setscale(sx, sy, sz)`},{header:"getchildren()",slug:"getchildren",content:`Gets the table of child objects of obj.
local children = obj:getchildren()`},{header:"setchildren()",slug:"setchildren",content:`Sets the table of child objects of obj to children_table.
obj:setchildren(children_table)`},{header:"getparent()",slug:"getparent",content:`Gets the parent object of obj.
local num = obj:getparent()`},{header:"setparent()",slug:"setparent",content:`Sets the parent object of obj to obj0.
obj:setparent(obj0)`},{header:"delete()",slug:"delete",content:`Delete obj.
obj:delete()`}]},{path:"/en/notes/3d-scene.html",title:"3D Scene",pathLocale:"/en/",contents:[{header:"3D Scene",slug:"_3d-scene",content:"This section introduces 3D scenes and their settings."},{header:"MicroCityWeb 3D Scene Coordinate System",slug:"microcityweb-3d-scene-coordinate-system",content:"The 3D scene coordinate system in MicroCityWeb follows the right-hand coordinate system, and the specific direction of each coordinate axis is shown in the following figure. Coordinate system in MicroCityWeb Note that the three-dimensional coordinate axes x, y, and z here are manually drawn to show the coordinate system in MicroCityWeb and do not directly exist in the three-dimensional scene."},{header:"Setting up a Scene",slug:"setting-up-a-scene",content:`Setting up a scene requires the use of the setenv function, with the specific usage as follows:
local s = scene.setenv({grid="plane|sphere|none", bgcolor="rgb(255, 255, 255)", rotspeed=1, transpeed=1, camtype="ortho|persp", clear=true})
It can be simplified as follows:
local s = scene.setenv({key1 = value1, key2 = value2, ...})
The variable s holds the returned environment object. The optional parameters of the function will be described in detail below.`},{header:"Optional Parameters of a Scene",slug:"optional-parameters-of-a-scene",content:""},{header:"Parameter List",slug:"parameter-list",content:`grid: background grid of the scene
bgcolor: background color of the scene
camtype: camera view
clear: whether to clear the scene
rotspeed & transpeed*: adjustment of mouse operation speed`},{header:"grid: Background grid of the scene",slug:"grid-background-grid-of-the-scene",content:`Optional values Value
Meaning "none"
default, no grid "plane"
flat grid "sphere"
spherical grid`},{header:"bgcolor: Background color of the scene",slug:"bgcolor-background-color-of-the-scene",content:`Optional value types: Value Type
Example Built-in colors
"black", "white", "gray", etc. Hexadecimal colors
"#ffffff", "#fff", "#000000", "#000", etc. Colors represented by RGB
"rgb(255, 255, 255)", "rgb(0, 0, 0)", etc. Example:
scene.setenv({bgcolor='gray'}) -- Sets the background color to the built-in color "gray"
scene.setenv({bgcolor='#eee'}) -- Sets the background color to the hexadecimal color "#eee"
scene.setenv({bgcolor='rgb(255, 255, 255)'}) -- Sets the background color to white`},{header:"camtype: Camera angle of view",slug:"camtype-camera-angle-of-view",content:`Optional values: Value
Meaning "ortho"
Orthographic. Equivalent to a projection onto the x and y plane. User's view is in two-dimensional space. "persp"
Perspective (default). User's view is in three-dimensional space.`},{header:"clear: Whether to clear the scene",slug:"clear-whether-to-clear-the-scene",content:"When the value is set to true, the scene is cleared. The setenv function does not clear the original scene by default, unless the value of the clear parameter is manually set to true."},{header:"rotspeed & transpeed",slug:"rotspeed-transpeed",content:`Value
Meaning rotspeed
Sets the speed of rotating a 3D object with the mouse. transpeed
Sets the speed of translating a 3D object with the mouse. These two parameters usually do not need to be set specially, and the default values can be used.`},{header:"Others",slug:"others",content:""},{header:"Regarding high-frequency setting scenarios",slug:"regarding-high-frequency-setting-scenarios",content:`2023/03/21: It has been found that setting the scene too frequently can cause excessive memory usage and browser crashes. Therefore, it is recommended to avoid calling the scene.setenv() function in a loop as much as possible.
If it is necessary to do so, make sure that the frequency of calls is relatively low. This allows the browser to have enough time for garbage collection, otherwise it may cause the browser to crash.`}]},{path:"/en/notes/",title:"Notes",pathLocale:"/en/",contents:[{header:"Notes",slug:"notes",content:""},{header:"General Knowledge",slug:"general-knowledge",content:`Quick Start with Lua Language
Versions of MicroCity
Time Advancement Methods
Object-oriented Programming
Regarding Tools`},{header:"MicroCity (Desktop Version)",slug:"microcity-desktop-version",content:`Visualization of Results
Operating Networks
Model Solving`},{header:"MicroCityWeb",slug:"microcityweb",content:`Introduction to User Interface
3D Scene
3D Objects
Discrete Event Simulation and Program Control
Mixed Integer Programming
Debugging`},{header:"Ideas",slug:"ideas",content:`Warehouse Simulation
General Drawing Code
Simulation Ideas for Port AGV Service Process The notes referenced in this page directory apply to the corresponding versions of MicroCity. Special thanks to Sun Zhuo (MicroCity author) for the guidance and assistance during the writing and organizing process. This post is translated using ChatGPT, please feedback if any omissions.`}]},{path:"/en/notes/cy-simulation.html",title:"Port AGV Service Process 3D Simulation Approach",pathLocale:"/en/",contents:[{header:"Port AGV Service Process 3D Simulation Approach",slug:"port-agv-service-process-3d-simulation-approach",content:"This train of thought is for reference only. Simulating the process of a container terminal is a complex task that involves many factors and entities. This article mainly introduces the approach to simulate the process of AGV receiving services from the yard crane to accepting services from the quay crane using MicroCityWeb."},{header:"Implementing Yard Crane Handling of Containers",slug:"implementing-yard-crane-handling-of-containers",content:""},{header:"Overall Approach",slug:"overall-approach",content:"Implementing the handling of containers by the yard crane is the first step in simulating the yard. I plan to use an object-oriented approach for this part, abstracting the yard crane and the yard as objects."},{header:"Overall Structure",slug:"overall-structure",content:`The specific idea is to treat the yard as a data model that stores various data, such as container entities, coordinates of containers in corresponding positions (rows, columns, heights), etc. The yard crane is treated as an operator responsible for the yard crane's 3D animation and management of data in the yard object.
The benefit of doing this is to decouple the yard crane from the yard, making it easier to expand in the future. In addition, if the object's properties are well considered, multiple objects can be easily created in the same scene to simulate multiple yard cranes operating in the yard.`},{header:"Events and Tasks",slug:"events-and-tasks",content:"I plan to create task sequences for the main entity objects that require movement in the overall process. This allows for parallel operations of multiple yard cranes in the same scene, with each yard crane performing its own tasks without interfering with each other. In addition, a central control program is needed to control the execution of tasks at each time node and the 3D animation of the yard crane."},{header:"Business Process",slug:"business-process",content:"In this simulation, the main focus of the business process is the movement of containers. Therefore, the most important aspect is the transfer of ownership of containers. The process flow of container ownership transfer is shown in the following diagram: Container Object Process Flow"},{header:"Object Structure",slug:"object-structure",content:"The following are the structures of the main objects involved in this simulation."},{header:"Implementation Approach",slug:"implementation-approach",content:""},{header:"Yard Size",slug:"yard-size",content:`For the yard object, since its main function is to store container objects and related data (such as coordinates of corresponding positions), we need to determine the size of the yard. Therefore, determining the size of the yard is a necessary step. When creating the yard object, we need to determine the size of the yard, including the number of rows, columns, and height. This facilitates subsequent operations.
My approach is to first determine the area occupied by the yard and the number of container layers. Based on the relevant data, we can calculate the maximum number of rows and columns that can be used to place containers. Regarding the area occupied by the yard, it can be determined by inputting the coordinates of two points when creating the object. Based on the diagonal formed by connecting the two points, we can determine the area occupied by the yard.
As for the number of container layers, it can be determined by inputting a number when creating the object. Based on these two inputs, we can determine the size of the yard.`},{header:"Events and Tasks",slug:"events-and-tasks-1",content:`Since the yard crane is the main object that needs to be moved in this simulation, we only need to operate the yard crane during each loop of task execution.
Therefore, I plan to treat the task sequence of the yard crane as a queue. During each loop of task execution, we take out the first task from the object's task sequence and execute it. After execution, we check if the task completion condition is met. If so, we delete the task and move on to the next one. This ensures that the yard crane objects execute tasks in order during each loop of task execution.
The method for executing tasks is executeTask(dt), where the object executes tasks based on the duration dt. The executeTask(dt) function contains the logic for processing tasks, including task type determination, task execution, and task deletion.
If there are multiple yard cranes in the scene, simply add these objects to the list of objects executing tasks. During each loop of task execution, the main control program will iterate through this list of objects and execute tasks for each object. Tips
Note that although the task execution appears to be simultaneous in terms of time, it actually depends on the sequence position of the objects.
One example is: suppose two objects need to occupy position A at the same time. According to the order of the task sequence, the object that is executed first will occupy position A, while the object that is executed later will fail to occupy it, even though they are both trying to occupy position A at the same moment. Therefore, it is not strictly simultaneous execution here, but sequential execution according to the task sequence at the same time.`},{header:"Business Process",slug:"business-process-1",content:`The yard crane first obtains the coordinates of the corresponding position (row, column, height) of the container from the yard and moves the spreader to the designated position in the yard to grab the container. The ownership of the container is transferred from the yard (cy.containers) to the yard crane spreader (rmg.attached) (by removing the table reference, setting the value to nil).
The yard crane moves the container to the aisle and releases it there. In the same way, the ownership of the container is transferred from the yard crane spreader (rmg.attached) to the aisle (rmg.stash), indicating that the container can be picked up.
If there is a vehicle that takes away the container, the ownership of the container can be further transferred from the aisle of the yard crane (rmg.stash) to the vehicle.`},{header:"Results",slug:"results",content:""},{header:"Implementation of the Whole Process from AGV Arrival to Service",slug:"implementation-of-the-whole-process-from-agv-arrival-to-service",content:""},{header:"Problem Description",slug:"problem-description",content:"Implement the three-dimensional representation of the process above using event scheduling method."},{header:"What's New",slug:"what-s-new",content:`The implementation of the previous simulation serves as the foundation for this simulation. Compared to the previous simulation, the most significant improvement in this simulation is: Using the object-oriented programming paradigm to create objects of four types: yard crane, yard (data model), AGV, quay crane, and ship (data model), and implement the movement methods for the objects and their components. If you are not familiar with object-oriented programming, you can refer to General Knowledge - Object-Oriented Programming. Continuing with the idea of event-driven simulation, the overall control process is implemented to control multiple objects simultaneously at the same time (primarily achieved through the object's executeTask(dt) and maxStep() functions). In the object-oriented programming paradigm, executeTask(dt) and maxStep() can be seen as interfaces. The main program controls the objects by implementing these two interfaces. (Although Lua seems to lack this concept.)
Using task sequences to implement the flow of each object, achieving mutual waiting between the yard crane and AGV, and between the AGV and quay crane, and coordinating tasks between different objects.
Attempting to extend the flow from the yard to the AGV, and then to the quay crane and ship, implementing two-level queuing and waiting.`},{header:"Object Design",slug:"object-design",content:`Due to the large number of attributes and functions, the design of objects is presented in the form of a mind map. Tips
This section takes up a lot of space. You can also directly jump to the next section Overall Layout.`},{header:"Yard",slug:"yard",content:"The yard remains as the data model."},{header:"Yard Crane",slug:"yard-crane",content:""},{header:"AGV",slug:"agv",content:""},{header:"Quay Crane",slug:"quay-crane",content:"The code and structures involving the quay crane are derived mainly from the yard, so they will not be described in detail later."},{header:"Ship",slug:"ship",content:"The ship object also serves as a data model, designed similarly to the yard."},{header:"Overall Layout",slug:"overall-layout",content:""},{header:"Overall Process",slug:"overall-process",content:"Container Flow Process Compared to the previous simulation, this simulation goes further in terms of the process. It adds the flow of AGV arrival and queuing, as well as the service of the quay crane and container loading onto the ship."},{header:"Process Analysis",slug:"process-analysis",content:`With the introduction of AGVs, the flow between the yard crane, quay crane, and AGV has becomes more complex. First, the arrival of AGVs is random, which may cause queuing. Second, the arrival of AGVs triggers the flows of the yard crane and AGV, which in turn trigger the flow of the quay crane. Therefore, the flow of this simulation is a multi-level flow that needs to consider the coordination between multiple objects.
Especially in the process between AGV and RMG, there is a mutual waiting between AGV and RMG. When the AGV arrives, it needs to notify the RMG to extract the cargo. In the process of extraction by the RMG: The RMG needs to wait for the AGV to arrive at the designated position before it can move the cargo onto the AGV.
The AGV needs to wait for the RMG to grab the container and place it on the AGV before transferring the ownership of the container from the RMG to the AGV. Therefore, the process between the AGV and the RMG is a mutually waiting process. The specific process can be referred to in the diagram below. The process of the quay crane is similar to that of the RMG, which is also a mutually waiting process. The main points are: When the AGV arrives at the designated position, the quay crane may be serving other AGVs, so the AGV has to wait.
When the AGV just enters the service area of the quay crane, it notifies the quay crane to reach the designated position. If the quay crane arrives at the designated position first, it has to wait.`},{header:"Implementation Method",slug:"implementation-method",content:""},{header:"Implementation of Queuing Process",slug:"implementation-of-queuing-process",content:`For AGV queuing, I chose to use cellular automaton as the data model of parking spaces. The length of each parking space is:
Length of Parking Space=Length of 1 Container in the data model+Gap between containers
\\text{Length of Parking Space} = \\text{Length of 1 Container in the data model} + \\text{Gap between containers}
Length of Parking Space=Length of 1 Container in the data model+Gap between containers
Since the length of the AGV is slightly longer than that of 1 container, it needs to occupy the length of 2 parking spaces. When executing a task, the AGV checks if the space ahead is blocked, and if not, it moves forward. If the space ahead is the target bay, it moves forward and waits for the RMG operation, then continues to move forward in terms of cells until it leaves. The queuing principles for the RMG and quay crane are also the same. Diagram of AGV Cellular Automaton Queuing Model`},{header:"Implementation of Event Scheduling Method",slug:"implementation-of-event-scheduling-method",content:`In the previous simulation, I used a variable step size to advance the time for simulation. In this simulation, I used the event scheduling method to accurately advance the events to their occurrence time for execution.
You may have noticed that in the Object Design section, executeTask() and maxstep() are marked as (interface). This is because to calculate the accurate advancement time, I need to implement executeTask() and maxstep() methods in each object. The executeTask() method is used to execute the task, and the maxstep() method is used to calculate the time remaining for the current task to be completed and obtain the maximum advancement time based on that, and then compare it with the interval time dt obtained from the system execution to get the maximum advancement time.
I believe that the following diagram from the course can effectively represent how the event scheduling method is used for simulation and scene refreshing. The first row refers to the business process of simulation, and the Refresh part in the second row refers to refreshing the scene.`},{header:"Results",slug:"results-1",content:`Warning
The following parts contain animated GIFs, and the images have a large file size. Since this site is hosted on GitHub Pages, if you don't have a special network environment, the animated GIFs may load slowly or even fail to load. Tips
If you encounter moiré patterns in the animated GIFs while directly viewing them, you can try opening them to enlarge the view and see if there is any improvement. RMG running process Quay crane running process Overall running process This post is translated using ChatGPT, please feedback if any omissions.`}]},{path:"/en/notes/debug.html",title:"Debugging",pathLocale:"/en/",contents:[{header:"Debugging",slug:"debugging",content:"This page introduces the functions and shortcuts related to debugging MicroCity Web."},{header:"Clear Output",slug:"clear-output",content:"You can enter commands by right-clicking the output area, and entering print() will clear the content of the output area."},{header:"Debugger Shortcuts",slug:"debugger-shortcuts",content:`During the debugging process, especially at breakpoints, you can use F9 (Step Over), F10 (Step Into), and F11 (Step Out) to control the program execution. F9 Step Over: Skip the current line and execute the next line
F10 Step Into: Enter the current line; if the current line is a function call, enter the function body
F11 Step Out: Step out of the current function and execute the next line of the function call`},{header:"Debug Commands",slug:"debug-commands",content:""},{header:"Watch Variables",slug:"watch-variables",content:`Use the debug.watch() command in the console to monitor variables.
For example, if you want to monitor the value of variable a during debugging, you can use the debug.watch('a') command. You can enter commands by right-clicking the output area`},{header:"Stack Tracing",slug:"stack-tracing",content:`Use the debug.traceback() function to print the current stack trace information.
function myFunction() -- Some code logic print(debug.traceback("Stack trace")) -- Other code logic
end function anotherFunction() myFunction()
end anotherFunction()
Output:
Stack trace
stack traceback:
[string "function myFunction() ..."]:3: in function 'myFunction'
[string "function myFunction() ..."]:8: in function 'anotherFunction'
[string "function myFunction() ..."]:11: in main chunk`},{header:"Running State",slug:"running-state",content:`debug.debug() enters Debug mode. It is often used to enter Debug mode while the program is running. If you want to enter Debug mode at startup, you can right-click on the top ▶️ button. See Introduction to the User Interface - Running State for more details.
debug.pause() pauses the program. The top run button ▶️ will light up, and the pause button ⏸️ will go out.`},{header:"Other Debugging Commands",slug:"other-debugging-commands",content:`Most of Lua's Debug functions are applicable to MicroCity Web. You can refer to: The Debug Library | Lua 5.4 Reference Manual
Lua Debugging | Runoob Tutorial`},{header:"File Saving",slug:"file-saving",content:`When saving files in MicroCity Web, you can choose to save them as .mw files and .lua files. .mw file: Packages the entire project, including the currently open code files and files in the virtual disk.
.lua file: Only saves the currently edited code file. It is commonly used for writing Lua scripts only and modifying custom .lua library files. This post is translated using ChatGPT, please feedback if any omissions.`}]},{path:"/en/notes/event-scheduling.html",title:"Discrete Event Simulation and Program Control",pathLocale:"/en/",contents:[{header:"Discrete Event Simulation and Program Control",slug:"discrete-event-simulation-and-program-control",content:"This article mainly introduces how to implement discrete event simulation and program control in MicroCity Web."},{header:"Coroutine",slug:"coroutine",content:"MicroCity Web provides several coroutine-related functions, which facilitate the implementation of event scheduling. If you primarily use it for event scheduling and are not clear about the principles of event scheduling, you can read the Time-lapse Event Scheduling section to understand the relevant concepts."},{header:"coroutine.queue",slug:"coroutine-queue",content:`Add a function or coroutine to the coroutine queue for waiting execution.
coroutine.queue(rt, f|co [, parameter list...])
Parameters Parameter
Meaning rt
The time relative to the current queue, which must be greater than or equal to 0. In other words, it is the time for executing the input function or coroutine after rt. f/co
The function or coroutine. If it is a function, only the function name needs to be inputted.`},{header:"coroutine.qtime",slug:"coroutine-qtime",content:`Get the current queue time.
local time = coroutine.qtime()`},{header:"Example",slug:"example",content:`Two examples are provided here: Coroutines Adding Tasks: Using coroutines to add tasks and displaying the current queue time in the function.
Vehicle Movement: Using coroutines to implement scene refreshing based on real-world time.`},{header:"Coroutines Adding Tasks",slug:"coroutines-adding-tasks",content:`This example demonstrates how to use coroutines to add tasks and display the current queue time in the function.
function Show() print("Current time: ", coroutine.qtime())
end
function ShowShort() print("Current time short: ", coroutine.qtime())
end coroutine.queue(10, Show)
coroutine.queue(20, Show)
coroutine.queue(15, ShowShort)
coroutine.queue(5, Show) -- Result:
-- Current time: 5.0
-- Current time: 10.0
-- Current time short: 15.0
-- Current time: 20.0`},{header:"Vehicle Movement",slug:"vehicle-movement",content:`This example demonstrates how to use coroutines to implement scene refreshing based on real-world time.
scene.setenv({grid = 'plane'}) -- Set the scene grid background -- Vehicle
local car = scene.addobj('/res/2axle.glb')
car.speed = 1 -- Car speed -- Initial time
local t = os.clock()
local dt = 0 -- Refresh the time state t and dt (step according to CPU interval to synchronize with real time)
function refreshtime() dt = os.clock() - t t = os.clock()
end -- Coroutine updating scene
function update() if not scene.render() then return end -- Render the scene and check if the program is terminated coroutine.queue(dt, update) -- Add the next update based on CPU step time carmove() -- Move the car refreshtime() -- Calculate the current dt
end -- Vehicle movement
function carmove() print("Car moves at ", t) local x, y, z = car:getpos() car:setpos(x, y, z + dt * car.speed)
end -- Initial update (add the first update)
-- Because subsequent updates are involved in the function, the updates will automatically loop
coroutine.queue(dt, update)
Open in MicroCityWeb`},{header:"Random Numbers",slug:"random-numbers",content:""},{header:"Introduction to the Principle of Random Number Generation",slug:"introduction-to-the-principle-of-random-number-generation",content:`In a computer, the process of selecting random numbers is not truly random. In fact, everything we do in a computer is not truly random, and it can be proven that it is impossible to manufacture a computer that can truly generate random numbers. The random numbers we obtain are actually pseudo-random numbers.
So how are pseudo-random numbers generated? There is an algorithm that generates the next number in a sequence based on a given number. This algorithm is initialized with a seed, and then iterated to produce subsequent random number sequences. If the seed is the same, the generated random number sequences will also be the same.
Now, every time a different random sequence is needed, a seed is obtained by reading the computer's clock. The principle behind this is that since it is impossible to know the exact moment when a program is started, each program start can be considered as obtaining a random number to be used as a seed.
Therefore, it can be anticipated that the resulting random number sequence is unpredictable, because we do not know what the random number seed will be.`},{header:"Creating Random Number Seeds",slug:"creating-random-number-seeds",content:`local seed = math.randomseed(x [, dist])
Parameters Parameter
Meaning x
Random number seed, which will return different random numbers based on different input values. If different values are needed each time, the random number seed x can be set to the current time. dist
Random number distribution (optional parameter). If not set, it defaults to a uniform distribution. If this parameter is set, mu and sigma can also be set as parameters for the corresponding distribution. The dist parameter can be set with three types of distribution: 'normal': Normal distribution
'exponential': Exponential distribution
'poisson': Poisson distribution In addition, the parameters for these distributions can also be set, where the mu key represents the mean and the sigma key represents the variance.`},{header:"Example",slug:"example-1",content:`-- Create a random number seed for Poisson distribution
local seed = math.randomseed(os.time(), {distribution = "poisson", mu = "3"}) -- Poisson distribution with a mean of 3 -- Output random number
print(seed:random())`},{header:"Program Control",slug:"program-control",content:`The program control mentioned in this article mainly refers to how to use the buttons in the user interface to control the program's operation, including pausing, resuming, stopping, etc. Command Bar It mainly refers to the first 3 buttons in the command bar. Program control in MicroCity Web mainly refers to the pause, resume, and stop of 3D interface rendering implemented through the scene object, with specific functions as follows:
local state = scene.render()
Here, the return value of scene.render() is stored in the variable state, and the value of the state variable is either true or false, representing the program's running state as running or terminated (button 3 pressed in the command bar).
The pause of rendering of 3D objects is also achieved by calling scene.render(). If refreshing 3D objects is achieved by continuously calling the scene.render() function and the refresh interval is not controlled by os.sleep(), it is possible to pause the rendering at a certain state on the 3D interface. This is because if the movement speed of 3D objects is controlled by os.sleep(), clicking the pause button might happen during the os.sleep() process, causing the program to not respond immediately and thus making the pause button ineffective. Therefore, it is recommended to avoid using os.sleep() for controlling the motion speed of 3D objects, and instead control the advancement duration by adding other parameters to achieve the purpose of controlling the speed of 3D object movement. This post is translated using ChatGPT, please feedback if any omissions.`}]},{path:"/en/notes/lp.html",title:"Model Solving",pathLocale:"/en/",contents:[{header:"Model Solving",slug:"model-solving",content:`In MicroCity, mathematical models can be solved. In this article, we will introduce the common process of solving mathematical models in MicroCity and provide some tips to help you better build models.
The detailed usage of all functions in the planning model can be found in the document 4.8 Mixed Integer Linear Programming. Tips
The content on this page is based on MicroCity Desktop version. If you are looking for a solution for mixed integer programming in MicroCity Web version, please refer to the corresponding Mixed Integer Programming section in the MicroCity Web notes.`},{header:"Creating Model Objects",slug:"creating-model-objects",content:`Create a planning model object and store it in the variable lp.
local lp = CreateLP() The mathematical model object created in the official documentation is stored in the variable LPModel, which has the same function as lp in this article.`},{header:"Writing Mathematical Models",slug:"writing-mathematical-models",content:`At this point, the object of the mathematical model has been created and stored in the variable lp, and further operations can be performed on it. A mathematical model generally consists of two parts: Objective Function
Constraint Equations Next, let's introduce how to create the objective function.`},{header:"Creating the Objective Function",slug:"creating-the-objective-function",content:`In MicroCity, SetObjectFunction() is used to set the objective function of the model object. It allows you to choose whether to optimize for maximum or minimum. The specific usage is as follows: Maximum
Minimum SetObjFunction(lp, coeff, "max") -- Optimize for maximum SetObjFunction(lp, coeff, "min") -- Optimize for minimum "min" and "max" are case-insensitive, so "MIN" and "MAX" can also be used.`},{header:"Parameter Description and Example",slug:"parameter-description-and-example",content:`Parameter
Description lp
Mathematical model object. Input the mathematical model into the function to set the objective function. coeff
Objective function coefficients, which is a table type variable. Used to determine the coefficients of the objective function in the model. "min" or "max"
Determine whether to optimize for the maximum or the minimum of the objective function. coeff is a coefficient list for the objective function, which is a table type variable. Suppose you want to minimize the function 4x1+12x2+18x34x_1+12x_2+18x_34x1​+12x2​+18x3​, the procedure to add the objective function is as follows:
-- Suppose you have already created the model object and stored it in the variable lp -- 4*x1 + 12*x2 + 18*x3
local coeff = {4, 12, 18} -- Set the objective function: minimize
SetObjFunction(lp, coeff, "min")`},{header:"Adding Constraint Equations",slug:"adding-constraint-equations",content:`In MicroCity, the function for adding model constraints is AddConstraint(), used as follows: ≤
≥
= -- Use symbols to express
AddConstraint(lp, cons, "<=", b) -- Alternatively, you can use abbreviations
AddConstraint(lp, cons, "le", b) -- Use symbols to express
AddConstraint(lp, cons, ">=", b) -- Alternatively, you can use abbreviations
AddConstraint(lp, cons, "ge", b) -- Use symbols to express
AddConstraint(lp, cons, "==", b) -- Or you can use abbreviations to express it AddConstraint(lp, cons, "eq", b)`},{header:"Parameter Description",slug:"parameter-description",content:`Parameter
Description lp
Mathematical model object. Input the mathematical model into the function to add constraints to it. cons
Constraint equation coefficients. Similar to cons in setting the objective function, it is also a table type variable used to determine the coefficients of each variable in the constraint equation. "<=" or ">=" or "==", or their corresponding alphabetic expressions
Determines the relationship between the constraint equation and the right-hand side. b
A number representing the right-hand side of the constraint equation. It can be a variable or a constant.`},{header:"Example",slug:"example",content:`The objective function 4x1+12x2+18x34x_1+12x_2+18x_34x1​+12x2​+18x3​ has been set above. Suppose you want to add two constraint equations for this function:
{x1+3x3≥32x2+2x3≥5
\\left\\{\\begin{matrix} x_1+3x_3\\ge3 \\\\ 2x_2+2x_3\\ge5 \\end{matrix}\\right. {x1​+3x3​≥32x2​+2x3​≥5​
Add corresponding constraint equations:
-- Add constraint: x1+3*x3≥3
cons = { 1, 0, 3 }
AddConstraint(lp, cons, ">=", 3) -- Add constraint: 2*x2+2*x3≥5
cons = { 0, 2, 2 }
AddConstraint(lp, cons, ">=", 5)
It is not difficult to notice that the number of coefficients is consistent with the number of variables in the objective function. Therefore, before programming the solution, you need to first determine the total number of variables and arrange the positions of each variable.`},{header:"Set Variable Types",slug:"set-variable-types",content:`MicroCity's mathematical programming supports integer programming. If no SetUnbounded() is set for the variables, the default value range for the variables is non-negative real numbers (≥0). The following describes in detail how to set variable types.
You can set the integer variable or 0-1 variable for the i-th variable in the model. If the variable is not set to these types, the default variable is non-negative real number. Integer Variables
0-1 Variables SetInteger(lp, i) -- Integer variable SetBinary(lp, i) --0-1 variable To allow the value of the i-th variable to be negative (by default, it cannot be negative):
SetUnbounded(lp, i)`},{header:"Model Solving and Output",slug:"model-solving-and-output",content:""},{header:"Model Solving",slug:"model-solving-1",content:`Since both the objective function and the constraint equations have been added, solving the model is simple, just one step:
SolveLP(lp)
After executing this statement, the mathematical model stored in the variable lp is solved.`},{header:"Output",slug:"output",content:`After solving the problem, it still needs to be output to understand the result of the solution. The following are commonly used functions for outputting the solution result.
Obtain the objective function value:
GetObjective(lp)
Obtain the value of the i-th variable:
GetVariable(lp, i)`},{header:"SolveLP",slug:"solvelp",content:`The SolveLP() function also has output after the solution is obtained, the meaning of the output code is as follows: Output Code
Meaning 0
Success -1
Invalid LP Model -2
Out of Memory 1
Suboptimal 2
Infeasible 3
Unbounded 4
Degenerate 5
Numerical Error 6
User Termination 7
Timeout Error For the meaning of other return values, please refer to the documentation 4.8 Mixed Integer Linear Programming for the SolveLP() function.`},{header:"Model Solution Example",slug:"model-solution-example",content:`Here is a simple example of modeling and solving for reference. (Actually it just strings together the previous content)
Example:
minf=4x1+12x2+18x3s.t.{x1+3x3≥32x2+2x3≥5x1,x2,x3∈N
minf=4x_1+12x_2+18x_3\\\\
s.t.\\left\\{\\begin{matrix} x_1+3x_3\\ge3 \\\\ 2x_2+2x_3\\ge5 \\\\ x_1,x_2,x_3\\in N
\\end{matrix}\\right. minf=4x1​+12x2​+18x3​s.t.⎩⎨⎧​x1​+3x3​≥32x2​+2x3​≥5x1​,x2​,x3​∈N​ N represents the set of natural numbers (non-negative integers) Script:
-- Create linear programming object
local lp = CreateLP() local n = 3 -- Set the number of objective functions -- Objective function: 4*x1 + 12*x2 + 18*x3
-- Set the coefficients of the objective function, and the objective function is minimized
local coeff = { 4, 12, 18 }
SetObjFunction(lp, coeff, "min") -- Add constraint 1: x1 + 3*x3 ≥ 3
cons = { 1, 0, 3 }
AddConstraint(lp, cons, ">=", 3) -- Add constraint 2: 2*x2 + 2*x3 ≥ 5
cons = { 0, 2, 2 }
AddConstraint(lp, cons, ">=", 5) -- Since SetUnbounded() is not set,
-- by default, all variables are non-negative,
-- so there is no need to add constraints for non-negative variables. -- Set all variables to integers
for i = 1, n do SetInteger(lp, i)
end -- Solve the model
SolveLP(lp) -- Output the objective function value
print("Objective function value:", GetObjective(lp)) -- Output the values of each variable
for i = 1, n do print("x", i, "=", GetVariable(lp, i))
end
Output:
Objective function value: 42
x1=0
x2=2
x3=1`},{header:"Some Techniques for Modeling",slug:"some-techniques-for-modeling",content:""},{header:"Linearization",slug:"linearization",content:`Sometimes we encounter modeling problems with multiple subscripts, such as the decision variable xijx_{ij}xij​, which needs to be linearized.
Let's assume that the shape of the decision variable itself is 3 rows and 4 columns, that is: Column 1
Column 2
Column 3
Column 4 x11x_{11}x11​
x12x_{12}x12​
x13x_{13}x13​
x14x_{14}x14​ x21x_{21}x21​
x22x_{22}x22​
x23x_{23}x23​
x24x_{24}x24​ x31x_{31}x31​
x32x_{32}x32​
x33x_{33}x33​
x34x_{34}x34​ Assuming that the objective function is to sum up these decision variables, which is F=∑i=13∑j=14xijF=\\sum_{i=1}^3\\sum_{j=1}^4x_{ij}F=∑i=13​∑j=14​xij​, if we want to input it into the objective function, we can linearize it as x11+x12+...+x14+x21+...+x24+x31+...+x34x_{11}+x_{12}+...+x_{14}+x_{21}+...+x_{24}+x_{31}+...+x_{34}x11​+x12​+...+x14​+x21​+...+x24​+x31​+...+x34​.
Since there are only two dimensions, we can use two for loops to achieve this:
local cons = {}
for i = 1, 3 do -- the first dimension for j = 1, 4 do -- the second dimension cons[4 * (i - 1) + j] = 1 -- fill in the coefficients -- the idea of 4 * (i - 1) + j is similar to carrying end
end -- result:
-- cons has a length of 12, and all values are 1`},{header:"Example: Assignment Model",slug:"example-assignment-model",content:`Let's take a look at the specific usage and convenience of multidimensional linearization using an actual example.
Four people, A, B, C, and D, are assigned to deliver four types of goods, A, B, C, and D, with the corresponding delivery times shown in the table. If each person delivers only one type of goods, who should be assigned to deliver which type of goods to minimize the total time? Person\\Goods
A
B
C
D A
14
9
4
15 B
11
7
9
10 C
13
2
10
5 D
17
9
15
13 Let's assume that the numbers corresponding to goods A, B, C, D are 1, 2, 3, 4 respectively, and xij=1x_{ij}=1xij​=1 represents person i delivering goods j, and xij=0x_{ij}=0xij​=0 represents person i not delivering goods j.
The mathematical model of the above problem can be represented as
minZ=∑i=14∑j=14cijxijs.t.{∑j=14xij=1,i=1,2,...,4∑i=14xij=1,j=1,2,...,4xij=0,1
minZ=\\sum_{i=1}^4\\sum_{j=1}^4c_{ij}x_{ij}\\\\
s.t.\\left\\{\\begin{matrix} \\sum_{j=1}^4x_{ij}=1, i=1,2,...,4 \\\\ \\sum_{i=1}^4x_{ij}=1, j=1,2,...,4 \\\\ x_{ij}=0,1
\\end{matrix}\\right. minZ=i=1∑4​j=1∑4​cij​xij​s.t.⎩⎨⎧​∑j=14​xij​=1,i=1,2,...,4∑i=14​xij​=1,j=1,2,...,4xij​=0,1​
Solution code:
-- efficiency matrix
local cost = { { 14, 9, 4, 15 }, { 11, 7, 9, 10 }, { 13, 2, 10, 5 }, { 17, 9, 15, 13 }
} local lp = CreateLP() -- create the objective function
local coeff = {}
for i = 1, 4 do for j = 1, 4 do -- it is easy to convert a two-dimensional array to a one-dimensional array here coeff[4 * (i - 1) + j] = cost[i][j] end
end SetObjFunction(lp, coeff, "min") -- add constraints
for k = 1, 4 do -- control the value of the i dimension local cons = {} for i = 1, 4 do for j = 1, 4 do if i == k then -- sum up j, check i cons[4 * (i - 1) + j] = 1 else cons[4 * (i - 1) + j] = 0 end end end AddConstraint(lp, cons, "==", 1)
end for k = 1, 4 do -- Control the value of the jth dimension local cons = {} for i = 1, 4 do for j = 1, 4 do if j == k then -- Sum i and check j cons[4 * (i - 1) + j] = 1 else cons[4 * (i - 1) + j] = 0 end end end AddConstraint(lp, cons, "==", 1)
end -- Solve the model
SolveLP(lp) -- Output the objective function value
print("Objective function value:", GetObjective(lp)) -- Output the decision variables
for i = 1, 4 do -- First dimension for j = 1, 4 do -- Second dimension local x = GetVariable(lp, 4 * (i - 1) + j) if x ~= 0 then print("x[", i, "][", j, "]=", x) end end
end
Output
Objective function value: 29
x[1][3]=1
x[2][1]=1
x[3][4]=1
x[4][2]=1 Result
Person
Item x13=1x_{13}=1x13​=1
A
C x21=1x_{21}=1x21​=1
B
A x34=1x_{34}=1x34​=1
C
D x42=1x_{42}=1x42​=1
D
B`},{header:"Handling Intermediate Variables",slug:"handling-intermediate-variables",content:`Sometimes there may be intermediate variables in the model that need to have corresponding positions in the matrix in order to be solved, but these intermediate variables do not participate in the calculation of the objective function value. You can set the coefficients of these intermediate variables to 0 at their corresponding positions.
Let x1,x2,x3,x4x_1, x_2, x_3, x_4x1​,x2​,x3​,x4​ be the decision variables and y1,y2y_1, y_2y1​,y2​ be the intermediate variables. The objective function is:
z=∑i=14xi
z = \\sum_{i=1}^4 x_i
z=i=1∑4​xi​
Then the coefficients of the objective function can be set as:
local fcons = {1, 1, 1, 1, 0, 0}
After that, you can proceed with the general process 😎 This post is translated using ChatGPT, please feedback if any omissions.`}]},{path:"/en/notes/lua.html",title:"Quick Start with Lua Language",pathLocale:"/en/",contents:[{header:"Quick Start with Lua Language",slug:"quick-start-with-lua-language",content:"Since MicroCity uses the Lua scripting language, it is necessary to familiarize yourself with the basic usage of Lua before starting to write scripts with MicroCity. This article introduces the commonly used syntax for writing Lua scripts in MicroCity, which can help you quickly understand the overall approach to writing MicroCity scripts based on concepts from other programming languages."},{header:"Variable and Function Definition",slug:"variable-and-function-definition",content:`Lua automatically recognizes variable types, so there is no need to define variable types before variable names. You can assign values directly.
a = 1.5
b = "string"
c = {} -- c is a table, explained below
Function definition
function add(a, b) return a + b
end
Above is a simple definition of the add() function, which aims to add the two input variables and return the result.
Variables can be global or local, and functions are the same. Here is how to define local variables and functions.
-- Define a local function
local function show(msg) print(msg)
end -- Define a local variable
local a = 1
If there is a conflict between locally defined content (function or variable) and globally defined content, the locally defined content takes precedence. When such a conflict exists, the content you are operating on is the local content.
If there is no explicit need to manipulate global variables, it is recommended to define variables as local variables as much as possible. This practice may reduce the occurrence of bugs and is a safer approach.`},{header:"Condition",slug:"condition",content:`It's all about if, and there are several specific forms of implementation: Normal form if condition then print("condition==true")
end Form with else if condition then print("condition==true")
else print("condition==false")
end Form with elseif if number > 0 then print("number>0")
elseif number < 0 then print("number<0")
else print("number==0")
end
In Lua, the equality operator is ==, and the inequality operator is ~=. You can apply these operators to conditional expressions. Here is a simple example:
print(1==1) -- true
print(1~=1) -- false`},{header:"Loop",slug:"loop",content:"Here are two most commonly used loops: for and while."},{header:"for",slug:"for",content:`The simplest form
-- Output numbers from 1 to 10, a total of 10 numbers
for i = 1,10 do print(i)
end
If you are familiar with C or C-like languages, the corresponding form of the above code is as follows:
for(int i=1; i<=10; i++){ printf("%d\\n",i);
}
Taking step size into consideration
-- Output numbers from 10 to 1, a total of 10 numbers with a step size of -1
for i = 10,1,-1 do print(i)
end When the step size is negative, it is important to note that the starting and ending numbers should be in reverse order. Generic loop
You can directly traverse all elements in a table.
i is the index of the table element, starting from 1; v is the value of the table element.
a = {4,7,9}
for i,v in ipairs(a) do print("index=",i,"\\tvalue=",v)
end ipairs is used for arrays (guessing i stands for integer), and pairs is used for objects. Since arrays are also objects, pairs can be used for arrays as well.`},{header:"while",slug:"while",content:`There is only one commonly used method for while.
local condition = true
while condition do print("while==true") condition = false
end
Similar to C-like languages. As long as condition is true, while will continue to run. When condition is set to false, the while loop will end.`},{header:"Loop Operators",slug:"loop-operators",content:`Just like in other languages, the break keyword is used to exit a loop.
In Lua, there is no continue, only break. However, the continue functionality can be achieved by using the if + break structure.`},{header:"Lua's Small Feature: Tables",slug:"lua-s-small-feature-tables",content:`Although Lua refers to its arrays as tables, I think this data structure is more similar to Python sets or JSON, as it can store anything without any structural constraints.
collection = {{"a", 1, 2}, "abc", {2, 3}}
To find the length of an array, simply prepend # before the array name.
list = {1, 2, 3, 4, 5}
for i=1,#list do print(list[i])
end
In Lua, array (table) indices start from 1, unlike C-like languages where they start from 0. Taking the previously defined collection as an example:
-- collection = {{"a", 1, 2}, "abc", {2, 3}}
print(collection[1][1]) -- a
print(collection[2]) -- abc
print(collection[3][2]) -- 3`},{header:"Indexing",slug:"indexing",content:`Lua table indexing is very flexible and can be done with numbers, strings, or even other types of data.
Here are some simple examples:
local list = {} -- Indexing with numbers
list[1] = "a" -- Indexing with strings
list["b"] = 2
list.message = "hello world" -- Equivalent to list["message"] = "hello world" print(list[1]) -- a
print(list["b"]) -- 2
print(list.message) -- hello world`},{header:"Adding Elements",slug:"adding-elements",content:`Adding to a specific position
table.insert(table, pos, value) -- Inserts an element at a specific position (pos)
Or
table.insert(table, value) -- Appends an element at the end
Example
list = {1, 2, 3, 4, 5}
table.insert(list, 6)
-- {1, 2, 3, 4, 5, 6}`},{header:"Removing Elements",slug:"removing-elements",content:`table.remove(table, pos) -- Removes an element at a specific position
Example
list = {1, 2, 3, 4, 5}
table.remove(list, 2)
-- {1, 3, 4, 5}`},{header:"Sorting a Table",slug:"sorting-a-table",content:""},{header:"Default Sorting Method",slug:"default-sorting-method",content:`You can use a function to sort a list, and the simplest usage is as follows:
table.sort(list) -- Sorts the list in ascending order
Here is an example:
-- Function: Print List
function PrintList(list) -- Output the list local listStr = "" for i = 1, #list do listStr = listStr .. list[i] .. " " end print(listStr)
end local list = { 3, 7, 2, 5, 4 } -- Original list PrintList(list) -- Output the original list
table.sort(list) -- Sort the list
PrintList(list) -- Output the sorted list -- Result:
-- 3 7 2 5 4 (Original list)
-- 2 3 4 5 7 (Sorted list)`},{header:"Custom Sorting Method",slug:"custom-sorting-method",content:`The table.sort function can also use a custom sorting rule, but this rule needs to be written in a function.
table.sort(list, function(a, b))
The function(a, b) is the custom sorting rule, which requires returning a boolean value (true or false) in the end. a and b are any two items in the list, and if the function returns true, then a comes before b, otherwise b comes before a.
Below are two examples for reference.`},{header:"Example 1: Changing the code above to output in descending order",slug:"example-1-changing-the-code-above-to-output-in-descending-order",content:`-- The PrintList() function is omitted here, with the same code as above local list = { 3, 7, 2, 5, 4 } -- Original list PrintList(list) -- Output the original list
table.sort(list, function(a, b) -- Sort the list return a > b -- Sort in descending order, if a > b, then a comes before b
end)
PrintList(list) -- Output the sorted list -- Output:
-- 3 7 2 5 4 (Original list)
-- 7 5 4 3 2 (Sorted list)`},{header:"Example 2: Sorting in a two-dimensional array",slug:"example-2-sorting-in-a-two-dimensional-array",content:`-- Function: Print the list
function PrintList(list) -- Output the list local listStr = "" for i = 1, #list do listStr = listStr .. "\\n" .. list[i][1] .. ", " .. list[i][2] end print(listStr)
end -- Original list
local list = { { 3, 5 }, { 7, 6 }, { 2, 2 }, { 5, 1 }, { 4, 3 } } PrintList(list) -- Output the original list -- Sort in descending order based on the first dimension of each item in the list
table.sort(list, function(a, b) return a[1] > b[1]
end)
PrintList(list) -- Output the sorted list -- Sort in descending order based on the second dimension of each item in the list
table.sort(list, function(a, b) return a[2] > b[2] end)
PrintList(list) -- Output the sorted list -- Output:
-- Original list:
-- 3, 5
-- 7, 6
-- 2, 2
-- 5, 1
-- 4, 3 -- Sorted based on the first dimension:
-- 7, 6
-- 5, 1
-- 4, 3
-- 3, 5
-- 2, 2 -- Sorted based on the second dimension:
-- 7, 6
-- 3, 5
-- 4, 3
-- 2, 2
-- 5, 1`},{header:"Reference of table",slug:"reference-of-table",content:`When there is no deep copy of a table, and it is directly copied, the newly obtained list2 is equivalent to a reference to the original list1, known as shallow copy. When you modify the elements in list2 obtained from shallow copy, the elements in list1 will also change because the two tables are referenced.
The above example code also follows this principle. Below is a new example to highlight this characteristic.`},{header:"Example: Shallow Copy",slug:"example-shallow-copy",content:`function PrintList(list) -- Output the list local listStr = "" for i = 1, #list do listStr = listStr .. list[i] .. " " end print(listStr)
end list1 = { 1, 2, 3, 4, 5 }
PrintList(list1)
-- 1 2 3 4 5 list2 = list1
PrintList(list2)
-- 1 2 3 4 5 -- Modify the second element in list2
list2[2] = 10
PrintList(list2)
-- 1 10 3 4 5 PrintList(list1)
-- 1 10 3 4 5`},{header:"Example: Deep Copy",slug:"example-deep-copy",content:`And what if you want to create a completely new list list2? Then you need to copy each element in the table one by one, also known as deep copy.
-- PrintList function code remains the same as above list1 = { 1, 2, 3, 4, 5 }
PrintList(list1)
-- 1 2 3 4 5 list2 = {} -- Create a new empty list -- Copy elements from list1 to list2
for index, value in pairs(list1) do table.insert(list2, value)
end
PrintList(list2)
-- 1 2 3 4 5 -- Modify the 2nd element of list2
list2[2] = 10
PrintList(list2)
-- 1 10 3 4 5 PrintList(list1)
-- 1 2 3 4 5 (no changes occurred)
In this example, modifying the elements in the deep copy list2 does not affect the original list1. This post is translated using ChatGPT, please feedback if any omissions.`}]},{path:"/en/notes/mip.html",title:"Mixed integer programming",pathLocale:"/en/",contents:[{header:"Mixed integer programming",slug:"mixed-integer-programming",content:`Mixed-Integer Programming (MIP) is a powerful mathematical optimization technique used to solve problems where some of the decision variables are required to be integers. This article provides a step-by-step guide on creating and solving MIP models using Lua programming language in the context of MicroCity Web. Translate info
This section is translated with assistance from ChatGPT, and the translation may not be accurate. If you have any questions, please leave remark below.`},{header:"Creating a Mixed-Integer Programming Model",slug:"creating-a-mixed-integer-programming-model",content:`Creating an integer programming model object.
local mip = math.newmip() -- Assign the created model object to mip`},{header:"Setting the Objective Function",slug:"setting-the-objective-function",content:`In MicroCity Web, the first line of the model is the objective function, added using the mip:addrow() function.
You can choose to maximize or minimize the objective function. The usage is as follows: Maximize
Minimize mip:addrow(coeff, 'max') -- Maximize the objective function mip:addrow(coeff, 'min') -- Minimize the objective function`},{header:"Parameter Description and Examples",slug:"parameter-description-and-examples",content:`Parameter
Purpose mip
Mathematical model object. Sets the objective function for the model coeff
Coefficients of the objective function, a table variable. Determines the coefficients of the objective function in the model. "min" or "max"
Determines whether to minimize or maximize the objective function. coeff is a list of coefficients for the objective function, a table variable. Suppose you want to minimize the function
4x1+12x2+18x3
4x_1+12x_2+18x_3
4x1​+12x2​+18x3​
the approach to adding the objective function is as follows:
-- Assuming you have already created the model object and stored it in the variable mip
-- Set the objective function to 4*x1 + 12*x2 + 18*x3, minimize
mip:addrow({4, 12, 18}, "min")`},{header:"Adding Constraints",slug:"adding-constraints",content:""},{header:"Adding Constraint Equations",slug:"adding-constraint-equations",content:`In MicroCity Web, use mip:addrow() to add the remaining constraint equations. The usage is as follows: ≥
= mip:addrow(cons, ">=", b) mip:addrow(cons, "==", b)`},{header:"Parameter Description",slug:"parameter-description",content:`Parameter
Purpose mip
The integer programming model object created at the beginning cons
Coefficients of the constraint equation. Like cons in setting the objective function, it's a table variable. Determines the coefficients of the variables in the constraint equation. "<=" or ">=" or "=="
Determines the relationship between the constraint equation and the right-hand side. b
The right-hand side of the constraint equation.`},{header:"Example",slug:"example",content:`The objective function has been set to 4x1+12x2+18x34x_1+12x_2+18x_34x1​+12x2​+18x3​. Suppose you want to add two constraint equations for this function:
{x1+3x3≥32x2+2x3≥5
\\left\\{\\begin{matrix} x_1+3x_3\\ge3 \\\\ 2x_2+2x_3\\ge5 \\end{matrix}\\right. {x1​+3x3​≥32x2​+2x3​≥5​
Add the corresponding constraint equations:
-- Add constraint: x1 + 3*x3 ≥ 3
mip:addrow({ 1, 0, 3 }, ">=", 3) -- Add constraint: 2*x2 + 2*x3 ≥ 5
mip:addrow({ 0, 2, 2 }, ">=", 5)
It can be noticed that the number of coefficients is the same as the number of variables in the objective function. Therefore, before programming, it is necessary to determine the total number of variables and arrange the positions of each variable.`},{header:"Setting Variable Types",slug:"setting-variable-types",content:`MicroCity's mathematical programming supports integer programming. The default variable range is non-negative real numbers (≥0). Below is a detailed method for setting variable types.
You can set the i-th variable in the model as an integer variable or a 0-1 variable. If you don't set the variable to these types, it defaults to a non-negative real number. Integer Variable
0-1 Variable -- Set the first variable (first column, col 1) as an integer variable
mip:addrow('c1', 'int') -- Set the second variable (second column, col 2) as a 0-1 variable
mip:addrow('c2', 'bin')`},{header:"Model Solution and Output",slug:"model-solution-and-output",content:""},{header:"Model Solution",slug:"model-solution",content:`Since the objective function and constraint equations have been added, solving the model is straightforward:
mip:solve()
After executing this statement, the mathematical model stored in the variable mip is solved 🎉`},{header:"Output",slug:"output",content:`After solving, you still need to output; otherwise, you won't know the results. Below are some commonly used functions for outputting the solution.
Get the value of the objective function:
mip['obj']
Get the value of the i-th variable:
mip['c'..i]
Here is a simple example from modeling to solving for reference. (It's just putting the pieces together)
Example:
minf=4x1+12x2+18x3s.t.{x1+3x3≥32x2+2x3≥5x1,x2,x3∈N
minf=4x_1+12x_2+18x_3\\\\
s.t.\\left\\{\\begin{matrix} x_1+3x_3\\ge3 \\\\ 2x_2+2x_3\\ge5 \\\\ x_1,x_2,x_3\\in N
\\end{matrix}\\right. minf=4x1​+12x2​+18x3​s.t.⎩⎨⎧​x1​+3x3​≥32x2​+2x3​≥5x1​,x2​,x3​∈N​ N represents the set of natural numbers (non-negative integers) Script
local mip = math.newmip() -- Set objective functio
mip:addrow({4, 12, 18}, "min") -- Add constraints
mip:addrow({ 1, 0, 3 }, ">=", 3) -- x1 + 3*x3 ≥ 3
mip:addrow({ 0, 2, 2 }, ">=", 5) -- 2*x2 + 2*x3 ≥ 5 -- Set all variables as integers
for i = 1, 3 do mip:addrow('c'..i, 'int')
end -- Solve the model
mip:solve() -- Output the value of the objective function
print("Objective function value:", mip['obj']) -- Output the value of each variable
for i = 1, 3 do print("x"..i.."=",mip['c'..i])
end
Output
Objective function value: 42.0
x1= 0.0
x2= 2.0
x3= 1.0 Online Execution
Check this example in MicroCityWeb`},{header:"Some Modeling Techniques",slug:"some-modeling-techniques",content:""},{header:"Linearization",slug:"linearization",content:`Sometimes we encounter modeling problems with multiple subscripts, such as decision variables xijx_{ij}xij​, where iii and jjj are indices. In such cases, linearization encoding is necessary.
Suppose the decision variable itself has a shape of 3 rows and 4 columns, i.e.: Col 1
Col 2
Col 3
Col 4 x11x_{11}x11​
x12x_{12}x12​
x13x_{13}x13​
x14x_{14}x14​ x21x_{21}x21​
x22x_{22}x22​
x23x_{23}x23​
x24x_{24}x24​ x31x_{31}x31​
x32x_{32}x32​
x33x_{33}x33​
x34x_{34}x34​ Suppose the objective function wants to sum these decision variables, i.e. F=∑i=13∑j=14xijF=\\sum_{i=1}^3\\sum_{j=1}^4x_{ij}F=∑i=13​∑j=14​xij​. If you want to input this into the objective function, you can linearize it as x11+x12+...+x14+x21+...+x24+x31+...+x34x_{11}+x_{12}+...+x_{14}+x_{21}+...+x_{24}+x_{31}+...+x_{34}x11​+x12​+...+x14​+x21​+...+x24​+x31​+...+x34​.
Since there are only two dimensions, you can use two for loops to achieve this:
local cons = {}
for i = 1, 3 do -- First dimension for j = 1, 4 do -- Second dimension cons[4 * (i - 1) + j] = 1 -- Fill in the coefficient -- The idea here is similar to carrying in arithmetic end
end`},{header:"Example: Assignment Model",slug:"example-assignment-model",content:`Now let's look at the specific usage of multi-dimensional linearization and its convenience using a practical example.
People A, B, C, and D deliver goods A, B, C, and D, respectively. The required time is shown in the table below. If each person delivers only one type of goods, which person should be assigned to deliver which type of goods to minimize the total time? Person\\Item
A
B
C
D A
14
9
4
15 B
11
7
9
10 C
13
2
10
5 D
17
9
15
13 Assuming goods A, B, C, D correspond to indices 1, 2, 3, 4, respectively, let xij=1x_{ij}=1xij​=1 represent person i delivering goods j, and xij=0x_{ij}=0xij​=0 represent person i not delivering goods j.
The mathematical model for the above problem can be represented as
minZ=∑i=14∑j=14cijxijs.t.{∑j=14xij=1,i=1,2,...,4∑i=14xij=1,j=1,2,...,4xij=0,1
minZ=\\sum_{i=1}^4\\sum_{j=1}^4c_{ij}x_{ij}\\\\
s.t.\\left\\{\\begin{matrix} \\sum_{j=1}^4x_{ij}=1, i=1,2,...,4 \\\\ \\sum_{i=1}^4x_{ij}=1, j=1,2,...,4 \\\\ x_{ij}=0,1
\\end{matrix}\\right. minZ=i=1∑4​j=1∑4​cij​xij​s.t.⎩⎨⎧​∑j=14​xij​=1,i=1,2,...,4∑i=14​xij​=1,j=1,2,...,4xij​=0,1​
Solution code
-- Efficiency matrix
local cost = { {14, 9, 4, 15}, {11, 7, 9, 10}, {13, 2, 10, 5}, {17, 9, 15, 13}
} local mip = math.newmip() -- Create the objective function
local coeff = {}
for i = 1, 4 do for j = 1, 4 do -- Easily convert the 2D array to a 1D array here coeff[4 * (i - 1) + j] = cost[i][j] end
end mip:addrow(coeff, "min") -- Add constraints
for k = 1, 4 do -- Control the value of the first dimension local cons = {} for i = 1, 4 do for j = 1, 4 do if i == k then -- Sum for j, check i cons[4 * (i - 1) + j] = 1 else cons[4 * (i - 1) + j] = 0 end end end mip:addrow(cons, "==", 1)
end for k = 1, 4 do -- Control the value of the second dimension local cons = {} for i = 1, 4 do for j = 1, 4 do if j == k then -- Sum for i, check j cons[4 * (i - 1) + j] = 1 else cons[4 * (i - 1) + j] = 0 end end end mip:addrow(cons, "==", 1)
end -- Solve the model
mip:solve() -- Output the value of the objective function
print("Objective function value:", mip['obj']) -- Output the decision variables
for i = 1, 4 do -- First dimension for j = 1, 4 do -- Second dimension local x = mip['c' .. 4 * (i - 1) + j] if x ~= 0 then print("x[" .. i .. "][" .. j .. "]=", x) end end
end
Output
Objective function value: 29.0
x[1][3]= 1.0
x[2][1]= 1.0
x[3][4]= 1.0
x[4][2]= 1.0 Online Execution
Check this example in MicroCityWeb Result
Person
Item x13=1x_{13}=1x13​=1
A
C x21=1x_{21}=1x21​=1
B
A x34=1x_{34}=1x34​=1
C
D x42=1x_{42}=1x42​=1
D
B`},{header:"Handling Intermediate Variables",slug:"handling-intermediate-variables",content:`Sometimes, there are intermediate variables in a model that must have corresponding positions in the matrix to be solved, and these intermediate variables do not participate in the calculation of the objective function value. The coefficients of the intermediate variables at their corresponding positions can be set to 0.
Suppose x1,x2,x3,x4x_1, x_2, x_3, x_4x1​,x2​,x3​,x4​ are decision variables, and y1,y2y_1, y_2y1​,y2​ are intermediate variables. The objective function is:
z=∑i=14xi
z=\\sum_{i=1}^4x_i
z=i=1∑4​xi​
The coefficients of the objective function can be set as follows:
local fcons = {1, 1, 1, 1, 0, 0}
-- The first 4 elements correspond to decision variables,
-- and the last 2 elements correspond to intermediate variables
Afterward, you can proceed with the general process 😎`}]},{path:"/en/notes/network.html",title:"Operating Networks",pathLocale:"/en/",contents:[{header:"Operating Networks",slug:"operating-networks",content:""},{header:"Network Topology",slug:"network-topology",content:`Network topology, in simple terms, refers to a network with nodes and connections between them. If we think of connections as roads, then you need to solve the following problems: Is this road one-way or two-way?
Where does the road start? Where does it end? In general, each road in a network diagram is considered to be one-way. If a two-way road is needed, you simply need to add a road in the opposite direction. Like this: This way, each road has a direction. It is common to use the symbol O for the starting point and the symbol D for the destination point. Using O and D, the direction of each road can be clearly described.
For the example in the above diagram, the road at the top has O=1, D=2, so the direction is described as from 1 to 2; the road at the bottom has O=2, D=1, so the direction is described as from 2 to 1.`},{header:"Building Network Topology using Functions",slug:"building-network-topology-using-functions",content:`MicroCity can handle networks, and the specific usage of all functions can be found in the reference document: 4.6 Networks
Here are some simple methods for creating network objects in MicroCity:
local network = CreateNetwork() Create an empty network object and return it. network is the returned empty network object.
After creating the object, you can use functions like AddLink and DelLink to create connections in the network object. See the reference document for specific usage.
local network, nodes, links = CreateNetwork(Lines)
Here, Lines is a vector graphic object of type Line. In this usage, the CreateNetwork() function in MicroCity can directly add starting points and endpoints to the road connections and automatically label the O and D points in the returned links object.
In other words, you only need to provide the network connections, and the remaining work of topology can be automatically completed by the function. I believe this may be the most commonly used method for creating network diagrams and conducting topology.`},{header:"Simple Example of Network Topology",slug:"simple-example-of-network-topology",content:`-- Open the connection layer
Shapes = Open("Shapes.shp") -- Create network topology
network, network_nodes, network_links = CreateNetwork(Shapes) -- Create a layer to store the topologized network nodes
Nodes = CreateShapes("Nodes", "point")
-- Copy the network nodes obtained from topoization to the layer
AddField(Nodes, "ID", "int")
for i = 1, GetRecCount(network_nodes) do CopyShapeTo(Nodes, 0, 0, GetShape(network_nodes, i))
end -- Create a layer to store the topologized network connections
Links = CreateShapes("Links", "line")
-- Copy the original attribute fields from the network connections to the layer
for i = 1, GetFieldCount(Shapes) do AddField(Links, GetField(Shapes, i))
end
-- Add attribute fields for the connections, and corresponding data will be added later using functions
AddField(Links, "ID", "int")
AddField(Links, "O", "int")
AddField(Links, "D", "int")
AddField(Links, "IMPEDANCE", "double")
AddField(Links, "DIRECTION", "int")
AddField(Links, "CAPACITY", "double")
-- Copy the network lines obtained from topoization to the layer (including corresponding data)
for i = 1, GetRecCount(network_links) do CopyShapeTo(Links, 0, 0, GetShape(network_links, i))
end -- Update the layers
Update(Nodes)
Update(Links) The example is modified from the built-in editor of MicroCity. Although the network connection was established at the beginning, it is possible that during the topology process, the nodes on the connection may overlap, causing the continuous connection to be divided into multiple segments. Therefore, the resulting Links layer may be different from the input layer. The topology nodes Nodes obtained from the topology process correspond to the resulting links Links, so it is recommended to use the topological processing result of the Links layer as the connection between network nodes.`},{header:"Pitfall: Creating Network Objects",slug:"pitfall-creating-network-objects",content:`If you need to create a network again using the CreateNetwork(Nodes, Links) function, you need to retain the attributes added during the topological process, otherwise there will be errors in network initialization:
AddField(Links, "ID", "int")
AddField(Links, "O", "int")
AddField(Links, "D", "int")
AddField(Links, "IMPEDANCE", "double") -- impedance
AddField(Links, "DIRECTION", "int") -- direction
AddField(Links, "CAPACITY", "double") -- capacity
If you are only doing a one-time topology of the network and will not use the topologically processed network to create a network object again, you still need to create the above attributes first. The topologically processed data is not filled in according to the attribute names, but according to their positions.
If only O and D attributes are created, the ID data will be filled in the O attribute, and the O data will be filled in the D attribute. If only the ID, O, and D attributes are created in the order mentioned above, the data will be filled correctly due to the data order being filled based on their positions.`},{header:"CopyShapeTo Function",slug:"copyshapeto-function",content:`The CopyShapeTo() function is used in the topological process to copy a Shape object to the corresponding position in the Shapes layer and perform position transformation in the Shapes layer based on the input dx and dy. Here, dx and dy represent the displacements in the x and y directions (referred to as deltax and deltay).
CopyShapeTo(TargetShapes, dx, dy, Shape1 [, Shape2, ...])
Based on the usage of the function, it also supports copying to multiple layers and then performing the transformation. If you only want to copy the shape to the corresponding position of the corresponding layer without transformation, you can set dx and dy to 0, like this:
CopyShapeTo(TargetShapes, 0, 0, Shape1 [, Shape2, ...])
For the specific usage of the CopyShapeTo() function, please refer to 4.3 Vector Graphics and Tables`},{header:"Using the Network Topology Algorithm",slug:"using-the-network-topology-algorithm",content:"After performing the network topology, you can use the built-in functions to solve many problems, such as generating a minimum spanning tree, finding the shortest path, or calculating the shortest distance. This article will take the calculation of the shortest path and its length as an example to explain the process and pitfalls of calculating the shortest path."},{header:"Calculating the Shortest Path and Its Length",slug:"calculating-the-shortest-path-and-its-length",content:"To calculate the shortest path, it is necessary to determine which two points in the network the shortest path is between. Here, startID and endID represent the starting point and the endpoint, respectively. Let's assume that you have already created a network object and stored it in a variable named Network. If you don't know how to create a network graph, you can refer to the Network Topology process described above."},{header:"Creating a Minimum Spanning Tree",slug:"creating-a-minimum-spanning-tree",content:`Step 1: First, create a minimum spanning tree with startID as the starting point. Theoretically, after creating a minimum spanning tree with the starting point, you can obtain the shortest distance from the starting point to any point on the network. You can use the GenSTPTree() function to create a minimum spanning tree.
GenSTPTree(Network, startID [, endID])
The endID here is not necessary, but if it is available, you can provide it to the function. In other words, you have two ways to accomplish this:
GenSTPTree(Network, startID) -- Method 1
GenSTPTree(Network, startID, endID) -- Method 2 (recommended)
It is generally believed that the more complete the information provided, the better the execution effect. Since you already know endID before calculating the shortest path, it is recommended to provide it to the function. The usage of this function with brackets has been explained here, and this notation will be used directly in the following text. Step 2, obtain the information corresponding to the shortest path. As mentioned earlier, the shortest route between two points can only be determined after the starting point and the destination point are determined. Since the minimum spanning tree was created using the starting point startID earlier, now we only need to provide the destination point endID in order to obtain the shortest path and its length. The following explains the methods to obtain the shortest path length and the shortest path using the Network object.`},{header:"Obtaining the Shortest Path Length",slug:"obtaining-the-shortest-path-length",content:`MicroCity's documentation provides three ways to obtain the shortest path.
The first method is used when the shortest path spanning tree has already been calculated and the information for the starting point has been inputted. Therefore, now only the information for the destination point needs to be provided (even if it has been provided already). The function requires a network object Network and the endpoint endID is used as follows:
local len = GetSTPLen(Network, endID)
The second method calculates the shortest path length between two points on the network by providing the starting point startID and the destination point endID. This usage does not require generating the shortest path spanning tree before calculating the shortest path and can be used directly. The Network parameter represents the network object and is used as follows:
local len = GetSTPLen(Network, startID, endID)
The third method calculates the shortest path length between two points on the network by providing the xy coordinates of the starting and destination points. This usage also does not require generating the shortest path spanning tree before calculating the shortest path and can be used directly. The coordinates of the starting point are set as x1 and y1, the coordinates of the destination point are set as x2 and y2, and the Network parameter represents the network object and is used as follows:
local len = GetSTPLen(Network, x1, y1, x2, y2)`},{header:"Obtaining the Shortest Path",slug:"obtaining-the-shortest-path",content:`MicroCity's documentation provides three pieces of information that can be obtained, namely: The sequence of point or line IDs
The sequence of point or line indices
The sequence of point or line shapes. For detailed usage of the functions, please refer to 4.6 Networks - Algorithms. Here, only the second method, which returns the sequence of point or line indices, will be used as an example.
To return the sequence of points:
GetSTPPath (Network, endID, "iNodeShp")
To return the sequence of lines:
GetSTPPath (Network, endID, "iLinkShp")
This way, the sequence of point or line indices can be obtained.`},{header:"Pitfall: Sequences",slug:"pitfall-sequences",content:`In Getting Started with Lua, we introduced sets in Lua, which provide rich features to assist in code writing. However, we have not heard of sequences. A sequence is something like this:
local x, y = GetCenterXY(Shapes) -- using this function temporarily
Here, x and y form a sequence. Here's another scenario:
GetDistance (x1, y1, x2, y2 [, x3, y3, ...]) -- using another function here temporarily
In this case, the more points that are inputted, the more return values there will be. If four points are inputted, it can be handled like this:
-- Normal case
d1, d2, d3, d4 = GetDistance(x1, y1, x2, y2, x3, y3, x4, y4) -- Only the first two return values can be kept
d1, d2 = GetDistance(x1, y1, x2, y2, x3, y3, x4, y4) -- Of course, only one return value can be kept as well
d1 = GetDistance(x1, y1, x2, y2, x3, y3, x4, y4)
The number of input parameters and output parameters in the above function are related. If n points are inputted as parameters, n distances will be returned. However, for the network topology, when returning the shortest path, the returned values are always parameter sequences, and I don't know how many parameters the function will give me; and when there are too many output parameters, it is also not feasible to manually create many variables to store these parameters.
-- Wrong approach:
local indexList = GetSTPPath(Network, endID, "iLinkShp")
-- The GetSTPPath() function does not return a table
-- The indexList obtained here is only the index of the first Link, which is a numerical value.
Since the left side of the equal sign cannot be changed, let's make changes on the right side. Do you remember how to define a simplest table?
local list = {1, 2, 3, 4, 5}
The [to_be_replace[x]] on the right side can actually be seen as a sequence. So, as long as you add parentheses to the return value of a function, you can pick them all up ( •̀ ω •́ )✧
local indexList = { GetSTPPath(Network, endID, "iLinkShp") }
The indexList obtained using the above method is a variable of table type. Then, you can start performing various operations on the collection 😋 This post is translated using ChatGPT, please feedback if any omissions.`}]},{path:"/en/notes/oop.html",title:"Object-Oriented Programming",pathLocale:"/en/",contents:[{header:"Object-Oriented Programming",slug:"object-oriented-programming",content:`Object-Oriented Programming (OOP) is a programming paradigm that abstracts real-world entities into objects in the program world. Objects communicate with each other through message passing, forming the functionality of a program. According to online sources, OOP has three main characteristics: encapsulation, inheritance, and polymorphism. However, in this simulation, encapsulation is the most frequently used, while the opportunities for inheritance and polymorphism are rare. Additionally, I haven't implemented object message passing in MicroCity yet. If I do, I will update this article accordingly. Therefore, the following mainly introduces how to use encapsulation in Lua code for MicroCity. Tips
The code examples in this article are applicable to MicroCityWeb and may not necessarily work for the desktop version of MicroCity. Furthermore, this article is based on personal insights and does not guarantee absolute correctness in terms of concepts.`},{header:"Basic Concepts of Object-Oriented Programming",slug:"basic-concepts-of-object-oriented-programming",content:""},{header:"Classes and Objects",slug:"classes-and-objects",content:`In simple terms, a class is a template for objects, and an object is an instance of a class.
A class is a fundamental concept in object-oriented programming that represents a category of things. The concept of a class can be understood as a category of objects—such as AGVs, shelves, and gantry cranes. You can think of a class as a template for a category of things, and objects are specific instances created based on this template.
A good example is the mentioned shelf. A shelf is a class, and a specific shelf is an object. The shelf class contains various attributes, such as the shelf's location and the items it holds. Different shelf objects created from the shelf class belong to the shelf class, such as Shelf 1, Shelf 2, etc. Although their attributes may differ, they are all objects of the shelf class.`},{header:"Class Attributes and Methods",slug:"class-attributes-and-methods",content:"In MicroCity simulation, based on my personal experience, classes usually have attributes but not necessarily methods. Continuing with the example of a shelf mentioned earlier, attributes are the characteristics of a class, such as the location of the shelf and the items on the shelf. Methods represent the behaviors of a class and are usually implemented with functions, such as an AGV lifting or placing a shelf, an AGV moving, or driving a shelf."},{header:"Advantages and Disadvantages of Using Object-Oriented Programming in Simulation",slug:"advantages-and-disadvantages-of-using-object-oriented-programming-in-simulation",content:""},{header:"Advantages",slug:"advantages",content:`In MicroCity, when dealing with scenarios involving the movement of multiple objects of the same type and playing animations of object movements (such as AGVs, shelves, and gantry cranes), a considerable amount of coordinate calculations and position settings are required. If each object needs to be implemented individually, the code for modifying the coordinate of each object will become very long, making it difficult to maintain. By using the object-oriented programming paradigm, data processing code can be encapsulated into individual objects, making the code more readable and maintainable.
Furthermore, if multiple objects of the same type need to be created in a scene, each object may have different parameters. By encapsulating using object-oriented methods, each object's parameters can be encapsulated within the objects themselves. When the simulation process or scale becomes more complex, the reusability of the code can be increased.
For simulations, the most important aspect is understanding the business process and business logic. Using object-oriented programming can make the simulation's business process and logic more clear, improve code readability, and increase maintainability. Furthermore, when it is necessary to modify the business logic of a class of objects, you only need to enter the class and make the modification. For example, modifying the scheduling algorithm for all gantry cranes in a port only needs to be done once because all gantry cranes share the same scheduling algorithm.
Based on personal experience, when using object-oriented methods to encapsulate objects, it is mostly intended to create a generic object and then create multiple objects of the same type in subsequent simulations automatically or manually, with different parameters for each object. This increases code reusability and improves code readability, providing convenience for future maintenance and modifications, and lays a foundation for large-scale simulations.`},{header:"Disadvantages",slug:"disadvantages",content:"If the simulation is small in scale and involves simple operations with a small codebase, it is not recommended to use object-oriented methods for code encapsulation. Using object-oriented methods will increase the number of lines of code, and may make the code appear more complex than the original problem. (Of course, there will be no consequences if you still choose to use it, except that it may look strange.) Specifically, you can refer to the provided code examples in the following sections and notice that most of the code is dedicated to describing classes and their business logic, while the code for the business process is simple and occupies a small proportion."},{header:"Implementation of Object-Oriented Programming in Lua",slug:"implementation-of-object-oriented-programming-in-lua",content:"In Lua, the concept of object-oriented programming is typically implemented using tables. A table is a data structure in Lua that can represent arrays, dictionaries, objects, etc. In object-oriented programming, tables can be used to represent objects."},{header:"Example",slug:"example",content:`Since the objects created in MicroCity are tables, we can encapsulate the object's attributes directly in a table and return that table when creating an object.
Here's an example:
-- The function will return an AGV object
function AGV() -- Create a 3D object of an AGV in MicroCity local agv = scene.addobj('/res/agv.glb') -- Set the properties of the object agv.position = {0, 0, 0} -- Set the position of the object agv.speed = 1 -- Set the speed of the object function agv:move(dx, dy, dz) agv.position = {agv.position[1] + dx, agv.position[2] + dy, agv.position[3] + dz} -- Modify the object's coordinates agv:setpos(agv.position[1], agv.position[2], agv.position[3]) -- Set the object's position scene.render() -- Render the scene (Not recommended to call here, just for demonstration purposes) end return agv -- Return the object
end -- Object usage
local obj = AGV() -- Create an object
obj:move(1, 0, 0) -- Move the object 1 unit in the x direction
Or you can choose to encapsulate the object within a table and return that table after creating the object.
-- The function will return an AGV object
function AGV() -- Set the object's properties directly in the table to be returned local agv = { object = scene.addobj('/res/agv.glb'), position = {0, 0, 0}, speed = 1 } function agv:move(dx, dy, dz) agv.position = {agv.position[1] + dx, agv.position[2] + dy, agv.position[3] + dz} -- Modify the object's coordinates agv.object:setpos(agv.position[1], agv.position[2], agv.position[3]) -- Set the object's position scene.render() -- Render the scene (Not recommended to call here, just for demonstration purposes) end return agv -- Return the object
end -- Object usage
local agv = AGV() -- Create an object
agv:move(1, 0, 0) -- Move the object 1 unit in the x direction
There is also another method to create objects using setmetatable, this belongs to advanced usage, but I feel like it is not used very often. However, it seems like this method can be used to achieve class inheritance, if you are interested, you can search for it yourself. Here is the code implementation of the shelf class that I wrote for an earlier assignment as a reference. (Now I feel like this class is not written very well 😂, for example, x and y can be replaced with pos = {x, y}, and x_origin and y_origin can be replaced with origin = {x, y}).
-- Shelf
Shelf = { x = 1, y = 1, cargo = {"box"}, -- Items on the shelf x_origin = 1, -- Shelf's original x coordinate y_origin = 1 -- Shelf's original y coordinate
} function Shelf:New(x, y) local self = {} setmetatable(self, { __index = Shelf }) self.__index = self self.x = x self.y = y -- Set the original coordinates self.x_origin = x self.y_origin = y return self
end`},{header:"Types of Classes",slug:"types-of-classes",content:`Here, I would like to summarize the main types of classes that I have created. 3D entity classes: These classes mainly control the movement of 3D entities, such as AGVs and cranes. Most of them have physical entities that need to be moved. Some even include sub-objects, such as crane objects that have hoists, ropes, and cranes as sub-objects.
Data model classes: These classes represent various entities in a system, such as yards, shelves, and goods. For example, a yard class contains data about the yard's dimensions, the goods in the yard, and the containers in the yard. It should be noted that I do not strictly categorize these types, as certain classes may possess the characteristics of multiple types. For instance, an AGV class also includes data about the AGV's position and speed, while a shelf class merely stores the shelf model. The movement of the shelf model is controlled by the AGV, and the more important function of the shelf class is to record the information of the goods on the shelf. Therefore, I consider these types as rough distinctions, and the specific implementation should be based on the actual business processes and requirements. This post is translated using ChatGPT, please feedback if any omissions.`}]},{path:"/en/notes/plots.html",title:"General Drawing Code",pathLocale:"/en/",contents:[{header:"General Drawing Code",slug:"general-drawing-code",content:`This section provides some well-written drawing objects that can be directly used when visualizing data. Info
All open source code on this page follows the MIT license and can be used freely. However, please retain the copyright information when publicly released.`},{header:"Importing Library Files",slug:"importing-library-files",content:`First, let's introduce how to use library files. "Library files" refer to pre-packaged drawing functions, and there are three methods to import files into MicroCity Web for use.`},{header:"Method 1: Code-Based Import",slug:"method-1-code-based-import",content:`👍 It is recommended to use this method to import library files, so that you can ensure that the latest version of the library is used.
Taking the import of Histogram and Subplot as an example, the code to import the library files is as follows:
print('Downloading dependencies to the virtual disk...')
-- Download the histogram code to the virtual disk
os.upload('https://www.zhhuu.top/ModelResource/libs/Histogram.lua')
-- Download the subplot code to the virtual disk
os.upload('https://www.zhhuu.top/ModelResource/libs/Subplot.lua')
print('Download completed')`},{header:"Method 2: Download Code Files and Import",slug:"method-2-download-code-files-and-import",content:`Go to the Code File Download section to download the required library files, then import the file into MicroCity Web, and finally reference the file to use it.
Taking the import of a histogram as an example, the code to import is as follows:
require("Histogram") -- Import the histogram`},{header:"Method 3: Copying the Code",slug:"method-3-copying-the-code",content:"Unless you need to modify the function's functionality or logic, it is not recommended to do so. The code for each function is available in the Code section."},{header:"Histogram",slug:"histogram",content:`A histogram is generally used to display the frequency or frequency distribution of each data value in a dataset.
It divides the data into several intervals (or "bins") with a certain interval, then draws a bar chart of the frequency (or frequency) on the vertical axis for each interval, reflecting the distribution of the data.
Here is an example of a histogram drawn using a histogram object (function).`},{header:"Importing the Histogram",slug:"importing-the-histogram",content:`First, import the code for the histogram. For specific import methods, please refer to Importing Library Files.
The filename for the histogram is Histogram.lua, and the code to import the histogram is:
require("Histogram") -- Import the histogram`},{header:"Creating a Histogram Object",slug:"creating-a-histogram-object",content:`Create a histogram object:
local plot = Histogram(list) -- list represents the dataset
You can also set the properties of the graph when creating the object.
local plot = Histogram(list, {range={40,90,0,100}, scale={10, 50}, fdisp=function(x) return (x/n*100).."%" end})
Setting the properties is not necessary and can be done based on your needs. In this example, only the range, scale, and fdisp properties are set.`},{header:"Setting Histogram Properties",slug:"setting-histogram-properties",content:`The example provided above demonstrates setting histogram properties. Based on the code, more properties can be set. Please refer to the table below for more details: Attribute Value
Function
Example origin
Set the origin point of the graph (bottom left corner)
origin = {-50, -50}, sets the origin point of the graph at the position (-50, -50) size
Set the length of the graph's x and y axes, which can be understood as the size of the graph
size = {100, 100}, sets the x and y axes length of the graph to 100 scale
Set the scale of the x and y coordinate axes
scale = {3, 2}, sets the scale of the x and y axes of the graph to 3 and 2 respectively axislabel
Set the labels of the x and y axes
axislabel = {"x", "y"}, sets the labels of the x and y axes of the graph to "x" and "y" respectively range
Set the display range of the x and y coordinate axes
range = {0, 10, 0, 20}, sets the range of the x axis to [0,10] and the y axis to [0,20] filled
Set whether to fill the bar chart
filled = false, sets the bar chart to hollow. The default style is filled fdisp
Set the display function of the data label, which returns the quantity by default. Setting the display function of the data label will also affect the display of the y-axis scale
fdisp = function(v) return (v/n*100).."%" end, sets the data label to be displayed as a percentage (assuming n is the sample size)`},{header:"Advanced Usage of Histogram",slug:"advanced-usage-of-histogram",content:"📈 Dynamically Refreshing Data Graph Modify the data in the graph. Here we take adding data to the graph as an example, where rnd is the added data. The value of plot.data can also be modified directly. table.insert(plot.data, rnd) Refresh the graph plot:refresh()"},{header:"Example",slug:"example",content:""},{header:"Basic Usage Example: Drawing a Poisson Distribution",slug:"basic-usage-example-drawing-a-poisson-distribution",content:`require("Histogram") -- Import the Histogram library local seed = math.randomseed(1, { distribution = "poisson", mu = "3"
})
local list = {seed:random()} -- Static drawing
for i = #list, 400 do table.insert(list, seed:random())
end local histplot = Histogram(list, { range = {0, 10, 0, 50}, scale = {1, 5}
})
scene.render()`},{header:"Advanced Usage Example: Dynamically Refreshing the Poisson Distribution Graph",slug:"advanced-usage-example-dynamically-refreshing-the-poisson-distribution-graph",content:`This is an example of drawing a Poisson distribution and dynamically refreshing the data graph. Assuming that the Histogram object has been imported and the scene is set to display in 2D.
require("Histogram") -- Import the Histogram library local seed = math.randomseed(1, { distribution = "poisson", mu = "3"
})
local list = {seed:random()} local histplot = Histogram(list, { range = {0, 10, 0, 50}, scale = {1, 8}
})
scene.render() -- Dynamically drawing
local count = 1
while count < 1000 and scene.render() do local rnd = seed:random() table.insert(histplot.data, rnd) histplot:refresh() count = count + 1
end
scene.render()`},{header:"Subplot",slug:"subplot",content:"A Subplot is used to solve the positioning and sizing issues when placing multiple graphs in a single interface. The name is borrowed from MATLAB."},{header:"Importing Subplots",slug:"importing-subplots",content:`First, import the code for subplots. The specific import method can be found in Importing Library Files.
The filename of the subplot is Subplot.lua, and it is referenced as follows:
require("Subplot") --referencing the subplot`},{header:"Subplot Attribute Settings",slug:"subplot-attribute-settings",content:`Here we will provide a detailed explanation of the attributes of the subplot. Setting the attributes is not mandatory and can be done based on your needs. Attribute
Function
Example span
Sets the spacing between subplots
span=10, sets the spacing between subplots in all four directions to 10 diag
Sets the position and size of the subplot by specifying the coordinates of the two diagonal points
diag = {-80, -70, 80, 70}, sets the diagonal range of the subplot from coordinates (-80,-70) to (80,70)`},{header:"Reading Subplot Values",slug:"reading-subplot-values",content:`After creating the subplot with the specified attributes, or modifying the subplot attributes and refreshing, you can read the calculated values of the subplot to obtain the original positions and sizes of each subplot in the Subplot module. You can mainly read these values using the following attributes. Note
Here, it is assumed that the subplot object is stored in the subplot variable after creating it. Calculated Attribute
Meaning
Example originpt
The original position of each subplot in the Subplot object
You can obtain the original position of the subplot in the ith row and jth column using subplot.originpt[i][j][1] and subplot.originpt[i][j][2] psize
The size of each subplot in the Subplot object
You can obtain the width and height of the subplot in the subplot using subplot.psize[1] and subplot.psize[2] respectively. (Assuming that all subplots have the same size)`},{header:"Example",slug:"example-1",content:`Here is an example of drawing the display range of the subplots. It is assumed that the Subplot module has already been imported, and the scene has been set to display in 2D.
In this example, the display range of each subplot in a 2-row, 3-column subplot is drawn as a rectangle. The range of each subplot is represented by four gray points, and the position of each subplot is represented by a blue rectangle.
require("Subplot") --import the subplot code local subplot = Subplot(2, 3, {span = 10}) -- Drawing the boundary points of the Subplot object
local lb = scene.addobj("points",{size = 10, vertices={subplot.diag[1],subplot.diag[2],0}})
local lt = scene.addobj("points",{size = 10, vertices={subplot.diag[1],subplot.diag[4],0}})
local rb = scene.addobj("points",{size = 10, vertices={subplot.diag[3],subplot.diag[4],0}})
local rt = scene.addobj("points",{size = 10, vertices={subplot.diag[3],subplot.diag[2],0}})
-- Drawing Range
for i = 1, subplot.row do
for j = 1, subplot.col do
scene.addobj("polyline", {size = 8, color = "blue",
vertices={
subplot.originpt[i][j][1]+subplot.psize[1], subplot.originpt[i][j][2], 0,
subplot.originpt[i][j][1], subplot.originpt[i][j][2], 0,
subplot.originpt[i][j][1], subplot.originpt[i][j][2]+subplot.psize[2], 0,
subplot.originpt[i][j][1]+subplot.psize[1], subplot.originpt[i][j][2]+subplot.psize[2], 0,
subplot.originpt[i][j][1]+subplot.psize[1], subplot.originpt[i][j][2], 0,
}
})
end
end
scene.render()`},{header:"Code",slug:"code",content:"You can remove the scene.setenv code at the beginning of the script, depending on the combination of your code. The scene.render() in the code is to refresh the image when dynamically drawing."},{header:"Code File Download",slug:"code-file-download",content:`Please find the list of code files in ModelResource/libs Name
Link Histogram
ModelResource/libs/Histogram.lua Subplot
ModelResource/libs/Subplot.lua 🔗The links in the table above point to the GitHub repository. You can view the code directly on GitHub or download the files to your local machine for use. This post is translated using ChatGPT, please feedback if any omissions.`}]},{path:"/en/notes/timelapse.html",title:"Advancement of Simulation Time",pathLocale:"/en/",contents:[{header:"Advancement of Simulation Time",slug:"advancement-of-simulation-time",content:"The advancement of time in simulation refers to how the simulation time is progressed during the simulation process."},{header:"Classification of Time Advancement Methods",slug:"classification-of-time-advancement-methods",content:`There are three main types of commonly used methods for advancing simulation time: Event Scheduling Method: The event scheduling method is an event-based simulation method that progresses time by sorting the events in the simulation system and executing activities in the order of their occurrence.
Fixed Increment Advancement Method: The fixed increment advancement method refers to fixing a time increment during the simulation process. After setting the initial time, the simulation progresses by incrementing the time based on the set increment.
Activity Event Scanning Method: For systems with high uncertainty, time advancement is achieved by scanning the events occurring in the system and executing the corresponding activities. This method may be more difficult to implement and can result in inaccurate time advancement (with errors), which could be due to my insufficient expertise. 😥`},{header:"Example",slug:"example",content:""},{header:"Event Scheduling Method",slug:"event-scheduling-method",content:`The event scheduling method is an event-based simulation method that progresses time by sorting the events in the simulation system and executing activities in the order of their occurrence. During the simulation process, the simulation system progresses time to the next event and executes the corresponding activities based on the current simulation time and remaining events.
The event scheduling method can be divided into the following three main steps, which are also the main steps of the control program for event scheduling: Time Scanning: Determines the next event occurrence time and advances the simulation clock to that moment.
Event Identification: Accurately identifies the event to occur.
Event Execution: Accurately executes the event that occurs. The basic principle flowchart of the event scheduling method is as follows:
For the specific implementation of the event scheduling method in MicroCityWeb, please refer to Discrete Event Simulation and Program Control - Coroutines.`},{header:"Fixed Increment Advancement Method",slug:"fixed-increment-advancement-method",content:"The fixed increment advancement method refers to progressing time by a fixed step length starting from the initial time during the simulation process. Within each step length, if no event occurs, the simulation clock advances by a unit of time T. If there are several events within the step, they are executed in order, and these events are considered to have occurred at the end of the step. Example Problem"},{header:"Code Flow Example",slug:"code-flow-example",content:`while scene.render() do t = t + dt if t % cycle ~= work_time then d = d + v * dt print("Time after departure:", t, "hours") else print("Time after departure:", t, "hours, resting") end car:setpos(CastToLine(d)) -- linear trajectory os.sleep(200)
end This is the main code flow and cannot be directly used. The last part of Simulation Idea for Automatic Warehouse mentions the improvement space and implements the global simulation clock, ultimately achieving the time advancement method. It also implements non-fixed increment advancement, as detailed in the following section.`},{header:"Change from Event Scheduling to Main Clock Advancement in Automatic Warehouse Simulation",slug:"change-from-event-scheduling-to-main-clock-advancement-in-automatic-warehouse-simulation",content:`Specifically, the following changes were made based on the original: Most os.sleep() related to the event scheduling method were removed. Due to the simplicity of the simulation process, the event scheduling method related to cargo loading and unloading was retained to optimize resource utilization.
A global simulation clock was set to change the mindset of the Agv:Move() function from "executing tasks and refreshing the scene with a fixed step length" to "monitoring changes in simulation clock duration, executing tasks based on the duration changes, and refreshing the scene".
Added simulation speed adjustment. From the above changes, it can be seen that the core of the simulation shifted from event tasks to the simulation clock. The part of scene refresh utilized os.clock().`},{header:"Non-Fixed Increment Advancement Method",slug:"non-fixed-increment-advancement-method",content:`Here is a simple example about the time advancement method and the os.clock() function, modified from the built-in cube rotation example in MicroCityWeb. In this example, os.clock() is used to calculate CPU running time, in order to achieve a certain ratio between simulated time and real-world time. The specific ratio can be adjusted by the simspeed (simulation speed) parameter.
local obj = scene.addobj('box') -- Initial position
local x = 1
local y = 1
local z = 0 local rx, ry = 0.1, 0.1 -- rotation speeds in the x and y directions
local simspeed = 10 -- simulation speed local t = 0 -- global simulation clock
local t0 = os.clock() -- record the start of the simulation time
while scene.render() do local dt = os.clock() - t0 -- calculate the time difference since the last recorded time t = t + dt -- simulate the corresponding length of time that has passed on the simulation clock -- Set the rotation position of the cube at this moment x = x + rx * dt * simspeed y = y + ry * dt * simspeed obj:setrot(x, y, z) t0 = os.clock() -- record the simulation time
end
Related information: When the simulation speed simspeed is set to 1, it indicates that the simulation clock is running at the same speed as the real-world clock. simspeed can be considered as an acceleration factor.
dt represents the time difference between two recorded times, and the time step in the simulation is calculated based on dt*simspeed.
Info
It should be noted that the value of the time increment dt is generally not the same in each loop cycle, and its specific value generally depends on the computer's processing power. Tips
Sometimes there may not be much time-consuming operation between two recorded times, and the calculated value of dt may be 0. Generally, there is a scene.render() between two time recordings, which usually ensures that a non-zero time difference can be calculated between the two samples. This post is translated using ChatGPT, please feedback if any omissions.`}]},{path:"/en/notes/tools.html",title:"Tools",pathLocale:"/en/",contents:[{header:"Tools",slug:"tools",content:"Tools that may come in handy"},{header:"Third-party Tools",slug:"third-party-tools",content:`Including software, websites, etc. MapShaper Map editor. It can edit .geojson files and export them as .shp files.
Three.js Editor Online 3D object editor for Three.js.`},{header:"External Functions",slug:"external-functions",content:"Some external functions for MicroCity Web"},{header:"Instructions",slug:"instructions",content:`It is recommended to import functions online to ensure the use of the latest version of functions. You can also choose to download them locally and then upload for use.
Online import example
print('Downloading dependency library to virtual disk...')
os.upload('https://www.zhhuu.top/ModelResource/libs/file_name.lua')
print('Download complete')`},{header:"Importing functions",slug:"importing-functions",content:`If the function file name is abc.lua, importing the function completes the process.
require("abc")`},{header:"Function List",slug:"function-list",content:`Mostly homemade functions.
Since the files are all hosted on GitHub Pages, online importing might be slower. You can opt to download them locally and then upload for use.
The list of code files provided on this site is shown in ModelResource/libs, and the list below are all files from the ModelResource repository. Name
Description
Link Histogram
Used to draw histograms
ModelResource/libs/Histogram.lua Subplot
Draw subplots when drawing multiple graphs
ModelResource/libs/Subplot.lua tablestr
Convert table to string
ModelResource/libs/tablestr.lua setpoint
Set display points at specified coordinates
ModelResource/libs/setpoint.lua 🔨 Continuously updating... This post is translated using ChatGPT, please feedback if any omissions.`}]},{path:"/en/notes/versions.html",title:"Version Information of MicroCity",pathLocale:"/en/",contents:[{header:"Version Information of MicroCity",slug:"version-information-of-microcity",content:"MicroCity is a simple and fast spatial planning and modeling software, which can be used for mathematical model construction, solving, and simulation experiments, especially suitable for the field of digital modeling in logistics. Initially, MicroCity was only available as a Desktop version that could only run on the Windows operating system. Later, there was a demand for cross-platform use, so MicroCity Web version was introduced, which can run well on browsers with the Chromium kernel."},{header:"MicroCity",slug:"microcity",content:""},{header:"MicroCityWeb",slug:"microcityweb",content:`🎯Visit MicroCity Web 📍Download (Offline Version)
MicroCity Web does not require any installation, just use a modern browser (such as Google Chrome, Microsoft Edge) to access its website. Although running on a browser may cause some performance loss compared to the desktop version, it allows users to use the software on almost any operating system, such as computer systems Windows, MacOS, Linux, and mobile/tablet systems Android, etc.
Even with the release of MicroCity Web, you can still continue to use the previously developed Desktop version of MicroCity. However, the desktop version will no longer be updated with new features, all new functions and improvements will be delivered continuously to MicroCity Web, in order to provide the best user experience and avoid version control issues. If you want to experience the latest features and improvements, it is necessary to switch to MicroCity Web.
The MicroCity Web version also provides an offline version bundled for export using the browser (see above 🔗link). Warning
However, due to updates in the Chromium browser kernel, some older system versions may not be supported (such as Windows versions below 8.1, 32-bit Windows operating systems, etc.)`},{header:"Compatibility",slug:"compatibility",content:`MicroCity Web version uses Lua 5.4 as the scripting language. You can enter the command print(_VERSION) in the MicroCity Web runtime environment or editor to view the Lua version used.
Due to the use of experimental JavaScript functions, there may be compatibility issues when running MicroCity Web in the following browser kernels: Browsers with Safari kernel, such as most browsers on iOS, iPad OS (due to Apple's mandatory use of Safari browser kernel), Safari browser on MacOS
FireFox browser Compatibility issues encountered during testing on 2023/9/29 and some technical details: iOS and iPad OS: Unable to open local files (due to the use of showOpenFilePicker() method) FireFox: Unable to open local files (due to the use of showOpenFilePicker() method)`},{header:"Additional Information",slug:"additional-information",content:`For the impact of the showOpenFilePicker() method, please refer to MDN Web Docs | showOpenFilePicker().
The author of this note was in the process of writing when MicroCity Web was being used for the first time in an educational environment. It can now operate properly and simulate certain functions. The author's relevant learning experiences are as follows: MicroCity Desktop: Logistics Information Management
MicroCity Web: Logistics System Simulation The content of this note is for reference only. If there are any deviations in the content due to the passage of time, corrections to the content of this site are welcome via Pull Request on GitHub 🥳. This post is translated using ChatGPT, please feedback if any omissions.`}]},{path:"/en/notes/visualization.html",title:"Visualization of Results",pathLocale:"/en/",contents:[{header:"Visualization of Results",slug:"visualization-of-results",content:"This article introduces various methods for visualizing computational results. This includes changing the color of the content, changing the size of shapes, and changing the attribute labels displayed for elements."},{header:"Changing Shape Color",slug:"changing-shape-color",content:`In the graphic properties box located at the bottom left corner of the program interface, the type of color displayed can be changed by modifying the Type attribute under the Colors section. There are 3 options available: Unique Symbol: Specifies a specific color for all graphics in the same layer, which will not be discussed further here.
Lookup Table: Displays the corresponding color based on a numerical query from a table.
Graduated Color: Sets a gradient color based on the numerical values in the table.`},{header:"Lookup Table - Changing Color Based on Table Values",slug:"lookup-table-changing-color-based-on-table-values",content:"By changing the Type attribute to Lookup Table, the color of the graphics can be modified based on the values in the table, achieving the effect of selecting specific graphics. In this example, the Attribute of Lookup Table is changed to SELECT in order to control the color of lines based on the values in the SELECT column of the table (as shown in the above image of attribute settings). When the value is 0, the color is displayed as black, and when the value is 1, the color is displayed as red. The values in the SELECT column of the table and the specific settings in the Lookup Table are shown in the following images. The final effect achieved is shown below."},{header:"Graduated Color - Displaying Gradient Color Based on Values",slug:"graduated-color-displaying-gradient-color-based-on-values",content:"By changing the Type attribute to Graduated Color, different colors can be displayed based on the varying numerical values in the table, achieving the effect of displaying a gradient color. In this example, a gradient color is displayed based on the population size of each country. It can be observed that China has a large population, hence the color displayed is red, while India also has a significant population, resulting in an orange color. Other regions have smaller populations, but differences can still be discerned through the colors. The Colors attribute under Graduated Color can also be adjusted with other color schemes. The settings interface is shown in the following image, but each individual setting will not be listed here. If interested, the manual can be referred to for example 2.1 Showing a World Map to manually experiment with changing this attribute."},{header:"Changing the Display Size of Shapes and Labels",slug:"changing-the-display-size-of-shapes-and-labels",content:""},{header:"Selection of Reference System",slug:"selection-of-reference-system",content:`There are 2 reference systems for displaying the size of content: one based on the map and one based on the screen. In this case, both the size of shapes and the display of labels are set to the same reference system.
When content is displayed based on the map, the size of the content will be synchronized and scaled according to the size of the map, as shown in the following images: (Enlarging the content based on the map) (Shrinking the content based on the map) When content is displayed based on the screen, the size of the content remains relatively consistent regardless of the map scaling, as shown in the following image: (Enlarging the content based on the screen)
Translate into English: (Shrunk with the screen as the reference system) Therefore, when drawing, the reference system should be selected according to the purpose of the drawing. If you need to draw shapes with a specific size or label with a specific size on a map, such as drawing a circle with a radius of 10 km, you should use the map as the reference system.
If you only need labels and graphics to be displayed clearly at any size, you can choose the screen as the reference system.`},{header:"Application examples of reference system",slug:"application-examples-of-reference-system",content:"Draw dots in the picture, set the radius of the circle to be the same as the size of the circle, and set the center of the circle to be the center of each green dot. The size of the gray circle represents the coverage range of each green dot. In the picture, the gray circle is drawn for each green dot with a radius of 16, representing the coverage range of each green dot. These gray circles are stored in a layer called Range.shp, and the layer type is Points."},{header:"Setting the reference system",slug:"setting-the-reference-system",content:`The size reference system for graphics and labels can be set in the bottom left corner of the program interface. The two positions marked in the picture can adjust the size reference system for graphics and the size reference system for labels respectively. Setting the size reference system for graphics: Adjust the size reference system for graphics under the Size column in the Size relates to... section. Adjust the Default Size to adjust the size of the graphics relative to the coordinate system.
Setting the size reference system for labels: Adjust the size reference system for labels under the Labels column in the Size relates to... section. Adjust the Default Size to adjust the size of the labels relative to the coordinate system.`},{header:"Changing the displayed labels",slug:"changing-the-displayed-labels",content:""},{header:"Manually changing the displayed labels",slug:"manually-changing-the-displayed-labels",content:`The size reference system for graphics and labels can be set in the bottom left corner of the program interface. The labels displayed in the picture above are ID. If you need to change it to other columns in the table, you can change the Attribute property under the Labels column to achieve it.
The position to be changed is shown in the picture. If you need to display the value in the corresponding MSG column in the table, you only need to change the Attribute property value under the Labels column to MSG. However, every time the graphics are changed and the Update() function is executed, the label will be hidden. If the script to be executed contains the Update() function for this layer, there is no need to manually reconfigure the displayed labels after each script execution. The displayed labels can be automatically selected through the script.`},{header:"Automatically changing the displayed labels",slug:"automatically-changing-the-displayed-labels",content:`The value of an attribute can be changed using the SetParameter() function. Taking the Attribute property under the Labels column in the picture above as an example, you can see that its ID is LABEL_ATTRIB and its type is Choice in the bottom bar. It should be noted that when the type is Choice, the parameter values are numbered starting from 1 and the numbering corresponds to the contents of the drop-down menu in order. After clicking on this property, you can see that MSG is in the second position. Since the numbering in Lua usually starts from 1, the number for ID here corresponds to 1, and the number for MSG corresponds to 2. The object to be operated on is MSG, so the function needs to fill in the parameter value of type Choice as 2.
Now that all the required parameters have been obtained, the SetParameter() function can be used to change the displayed labels.
-- transports is the graphic layer
SetParameter(transports, "LABEL_ATTRIB", 2) The SetParameter() function needs to be executed after the Update() function, otherwise the effect will be overwritten by the Update() function. Now let's take a closer look at the specific usage of the SetParameter() function:
SetParameter(Shapes|Table|Grid|Scene|Module, "id", Number|"String"|Object) Parameter
Meaning Parameter1
The input object, which can be Shapes, Table, Grid, Scene, or Module Parameter2
The id corresponding to the attribute. In the previous context, it is LABEL_ATTRIB Parameter3
If you need to change the attribute value, it only accepts three types: Number, String, and Object The introduction of the SetParameter() function can be found in the 4.2 User Interface Control document, please refer to it.`},{header:"Using Raster Grids",slug:"using-raster-grids",content:`Raster grids can also be used for visualization, and I believe the most common application of raster grids is to draw heat maps. The generation of a heat map is mainly achieved by modifying the value of each cell on the raster grid. If you are not familiar with the specific structure of raster grids, you can refer to the 3.3 Raster Grids document. For controlling raster grids using scripts, you can refer to the 4.4 Grids document.
One scenario of using raster grids to draw heat maps is plotting price maps. When plotting a price map, we can iterate through each grid point on the raster grid, calculate the sum of distances from that grid point to each warehouse, and set the value of that grid point to this sum. This way, we can obtain a heat map. This method helps us visualize the distribution of prices and discover the trends and patterns of prices. This post is translated using ChatGPT, please feedback if any omissions.`}]},{path:"/en/notes/warehouse-simulation.html",title:"Ideas for Warehouse Automation Simulation",pathLocale:"/en/",contents:[{header:"Ideas for Warehouse Automation Simulation",slug:"ideas-for-warehouse-automation-simulation",content:"The ideas in this article are for reference only and it is recommended to make appropriate improvements."},{header:"Specific Problem: Warehouse Simulation based on Cellular Automata",slug:"specific-problem-warehouse-simulation-based-on-cellular-automata",content:`In this problem, the locations of inbound and outbound can be changed, and the forklift is an AGV.
In other words, this is actually a cellular automata simulation of a mobile rack warehouse. The AGV can pass through the bottom of the rack, move to the bottom of the rack, lift the rack, and transport it to the inbound/outbound point.`},{header:"Basic Assumptions",slug:"basic-assumptions",content:`All items on the racks are the same.
Only one item is placed on each rack. Therefore, outbound and inbound can be considered as completely opposite processes, so here we only need to discuss the outbound case in detail. It is assumed that there is already an item on the rack by default.`},{header:"Overall Implementation Idea",slug:"overall-implementation-idea",content:`Assign (x,y)(x, y)(x,y) coordinates to each cell in the entire 3×33\\times33×3 warehouse to facilitate subsequent movement operations.
With AGV as the core, operate the racks. When the AGV is in the lifted state and moves the rack, you only need to synchronize the coordinate position of the rack with the position of the AGV to achieve the effect of AGV moving the rack.`},{header:"Business Process",slug:"business-process",content:"Randomly generate the order list according to the required quantity, and the AGV moves the racks to the outbound point in order based on the order list."},{header:"Business Logic",slug:"business-logic",content:`When performing outbound, the AGV first finds the nearest rack and moves to the position of that rack, lifts the rack. For the rack (AGV), set the destination for movement and calculate the difference in Manhattan distance. Before each movement, determine the direction of rack movement (xxx or yyy direction) by checking for obstacles.
If both directions are blocked, prioritize the yyy direction (as specified) and recursively move away the obstacles in this direction to make space for the rack to move. If there is no space in the yyy direction, then move in the xxx direction.`},{header:"Process Optimization: About the Old Method and the New Method",slug:"process-optimization-about-the-old-method-and-the-new-method",content:`Both of these methods are viable, but the new method optimizes for specific scenarios by reducing the number of steps through obstacle prediction. See the problem in the figure below:
Old Method: No Obstacle Prediction (Inbound and outbound points are at position x=3,y=3x=3,y=3x=3,y=3) 👉 After the AGV completes the outbound operation for the first rack and moves towards the second rack, it finds that the first rack blocks the way, so it goes back to move the first rack away, and then proceeds to do the outbound operation for the second rack.
New Method: Obstacle Prediction (Inbound and outbound points are at position x=3,y=3x=3,y=3x=3,y=3) 👉 After the AGV completes the outbound operation for the first rack, it checks if other racks need to be moved before it can reach the inbound/outbound point. If necessary, it moves the obstructed racks and then proceeds to do the outbound operation for the next rack. Info
In line with the principle of minimizing the occupation of the inbound/outbound points, when there is an empty space, the AGV will move the rack at the inbound/outbound point. Therefore, some seemingly redundant operations are not without comprehensive considerations. Optimal layout schemes for different numbers of racks (animated graphics)
The case with 8 racks has already been shown above. Here, we only show the cases with 5 and 7 racks from the table. For other cases, please refer to the appendix.`},{header:"Collection and Analysis of Simulation Data",slug:"collection-and-analysis-of-simulation-data",content:""},{header:"Maximum Inbound/Outbound Efficiency",slug:"maximum-inbound-outbound-efficiency",content:`The simulation results are shown in the figure below, representing the layout of racks with the best efficiency for the same number of racks. Optimal rack layout: For the same number of racks, the layout with the minimum number of operations (ticks) to retrieve all items. Explanation of the Layout Diagram White: No rack is placed.
Light gray: Rack, but the AGV is initially positioned below this rack.
Gray: Rack. Explanation of the Table Rack Quantity: Number of racks in the layout diagram.
Old Ticks: Number of operations to retrieve items using the old method (no obstacle prediction).
New Ticks: Number of operations to retrieve items using the new method (with obstacle prediction). The new method will be explained later.
Highlighted in yellow: Scheme with the minimum number of operations (minimum ticks) in the same layout.`},{header:"Maximum Space Utilization",slug:"maximum-space-utilization",content:`If all positions are filled with racks, it will not be possible to access all racks. Therefore, the method with the highest space utilization is to place 8 racks.
Color Indications Green: Rack with items.
Purple: Rack without items.
Light purple: Rack lifted by the AGV.
Dark purple: AGV below this rack, but the rack is not lifted.
Dark gray: Inbound/outbound points. Sometimes, when the refresh rate is too fast, it may not be possible to see the rack being lifted by the AGV. The entry and exit points are located at position x=2, y=3.`},{header:"Innovations",slug:"innovations",content:`Additional consideration for different types of goods.
Each simulation generates demand based on the random arrangement of goods on the shelves.
Object-oriented programming. Using an object-oriented approach helps in abstracting the problem and improving the flow of the process. Good naming conventions make the program's logic and flow clear, ensuring that you won't forget everything after a night's sleep 😂 Different types of goods are represented by different colors. The meaning of AGV state colors, empty shelf colors, and entry/exit point colors remains the same. Purple: Shelf without goods
Light purple: Shelf lifted by AGV
Dark purple: AGV is positioned beneath the shelf but hasn't lifted it
Dark gray: Entry/exit point Example with 5 shelves: Example with 8 shelves:`},{header:"Simulation Enhancement: 3D Automated Warehouse Simulation",slug:"simulation-enhancement-3d-automated-warehouse-simulation",content:"In this part, the question has slightly changed. The requirement is to add a third dimension to the cellular automaton warehouse simulation and create a simulation of an automated warehouse. The specific requirement is shown in the image above."},{header:"Overall Approach",slug:"overall-approach",content:""},{header:"Adding the Third Dimension",slug:"adding-the-third-dimension",content:`Based on the core of the Cellular Automaton-based Warehouse Simulation, the part of the simulation that uses cellular automata will be rewritten as an internal data table to serve as an internal data model, monitoring and controlling the state of the entire simulation process.
Since the Cellular Automaton-based Warehouse Simulation uses an object-oriented approach to encapsulate objects, and object methods are extensively used in building the business logic and flow, only the object methods need to be rewritten (e.g., Agv:Move(dx, dy)) to achieve the transition from cellular automaton simulation to 3D automated warehouse simulation. If the overall program structure is well-designed, applying "object-oriented" techniques will significantly improve maintainability and reduce the difficulty of migration. The AGV and shelf models can be directly reused. For the goods, you only need to set the relative height list from the shelves to achieve automatic placement of goods at the specified height. Tips
If you need to reuse existing models, or if you want to upload models to the repository maintained by the author of this document, please refer to the documentation on 3D Objects - External Models.`},{header:"Significant Fluctuation in the Demand for Inbound and Outbound Goods",slug:"significant-fluctuation-in-the-demand-for-inbound-and-outbound-goods",content:`According to the requirements, there are basically only two scenarios: 3 shelves and 6 shelves.
Since the number of shelves is limited and the Cellular Automaton-based Warehouse Simulation has obtained the best layout for warehouse performance, the corresponding optimal layouts for the respective number of shelves can be directly reused. In this problem, only the placement of goods in fixed shelf layouts needs to be considered.
For the case of 3 shelves, the optimal layout is a symmetrical configuration in terms of height, with a distance of 1 from the entry/exit point. Therefore, only one scenario needs to be simulated, and the data collected from it.
For the case of 6 shelves, three scenarios were selected for multiple simulations to obtain the average, maximum, and minimum Ticks consumed by each scenario for inbound and outbound operations. Ticks represents the number of times the AGV moves and serves as a unit of operation time. Further improvements are mentioned in the following section: Areas for Enhancement. Based on the above analysis, since there are limited scenarios, the best layout for goods can be determined by simulating the placement of goods at various positions, randomizing the types of demanded goods while keeping the total demand constant, and analyzing the obtained data.`},{header:"Enhancements",slug:"enhancements",content:`During testing, it was found that the original strategy of moving shelves was not reasonable. Therefore, the shelf movement strategy was improved.
Old Strategy: Find the shelf closest to the AGV that contains the requested goods and move it to the entry/exit point. As seen in the animation, the AGV has moved the shelf containing the required goods (represented by blue blocks) to the entry/exit point. However, because the AGV moves the shelf adjacent to the one with the requested goods, it doesn't perform the outbound operation on the goods already at the entry/exit point.
New Strategy: Find the shelf closest to the entry/exit point that contains the requested goods and move it to the entry/exit point. By changing the strategy, the aforementioned issue has been resolved.`},{header:"Innovation",slug:"innovation",content:`Due to the large number of tests, the main process is written into a function for adaptive improvement, achieving automatic simulation tests for all cases and outputting data. The following figure is an example of running the automatic simulation test. Code for the automatic simulation test process, for reference only:
-- Batch test
local cargo_ubs = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12} -- Test demands (upper limit) sequence local output_string_list = {} -- List of test result strings
for k, v in ipairs(cargo_ubs) do local test_result = {} -- Test result sequence for this demand upper limit cargo_ub = v -- Set the quantity upper limit for j = 1, test_count do scene.setenv({ grid = 'plane', clear = true }) -- Clear the scene print("Test (", j, "/", test_count, "): Demand quantity is", cargo_ub) local tick = ModelRun() -- Run the simulation model and return the test result table.insert(test_result, tick) -- Insert the test result into the test result sequence end local output_string = "" print("Test result sequence for demand quantity", cargo_ub, ":") for i = 1, #test_result do -- Output the test result sequence to the list string output_string = output_string .. test_result[i] .. "\\t" end print(output_string) table.insert(output_string_list, output_string)
end -- Output the list of test results
for i, str in ipairs(output_string_list) do print("Test result sequence for demand quantity", cargo_ubs[i], ":", str)
end
A bug was discovered during the automatic simulation test process, as described in the following text.`},{header:"Shelf Layout Scheme",slug:"shelf-layout-scheme",content:`Color Legend Light Blue: Inbound and outbound points
White: Empty space
Dark Blue, Red, Yellow: Colors corresponding to 3 types of goods Assumptions Each shelf contains 2 items of the same type
Random demand for goods, no preference for type
Only one item is taken out at a time`},{header:"Simulation Results and Analysis",slug:"simulation-results-and-analysis",content:"Simulate and test each quantity scenario in the layout scheme for each item 30 times, and calculate the maximum, minimum, and average values of the results for each scenario. The final conclusion is that in the case of 6 shelves, Layout Scheme 2 performs the best."},{header:"Scheme 3: 3 shelves",slug:"scheme-3-3-shelves",content:""},{header:"Scheme 6",slug:"scheme-6",content:'Trend in Average Ticks for Scheme 6 Optimal layout scheme for Scheme 6: Scheme 2 Trend graph of "Demand Quantity - Shortest Average Service Time" for each sub-scheme should also be plotted. Taking Scheme 6-1 as an example, the x-axis represents the quantity of goods demanded, and the y-axis represents the shortest average service time (Ticks).'},{header:"Improvement Space",slug:"improvement-space",content:`Since the specific execution time of the event is not given in the title, and the time unit is not specified, we only measure the number of operations on the shelves as the time cost. In other words, the time is calculated afterwards, and I think most of the students might have the same idea at this point. Although there is no problem with the final result, the idea can be changed to adapt to later studies.
The current approach is task-driven. Although it can obtain the correct result, it does not make use of simulation time. This approach does not have any issues when controlling only one entity. However, when dealing with multiple entities simultaneously, the current approach cannot handle the situation where multiple entities complete tasks at the same time, and can only achieve the situation where multiple entities complete tasks one after another. The specific process of the current approach is as follows:
Since the time advance method is used, the simulation world has its own time. For us, we can control the simulation speed by multiplying a multiplier on the simulation time, which is the simulation speed. In addition, this approach is more flexible in supporting multiple objects. The specific process is as follows:
This way, the simulation is changed to be time-centric, and the progress of all entities in the scene can be refreshed directly when refreshing the task execution progress. Since the simulation is time-centric, it is necessary to set the rate/time of various operations to ensure the accuracy of time calculation. In MicroCityWeb, there are some techniques that can be used for time advance simulation.`},{header:"Update simulation time with system time",slug:"update-simulation-time-with-system-time",content:`The os.clock() function can get the current system time (in seconds, but in decimal). With this function, synchronization between simulation time and real time can be achieved. Usage examples can be found in Time Lapse (Chinese only).
Since time is the core of the entire simulation, it is necessary to specify the time required for operations that were not previously defined. In the improved part, the additional time required for the following operations is considered: Time required for goods to enter and leave the storage
Time required for the AGV to lift and lower the shelves This post is translated using ChatGPT, please feedback if any omissions.`}]},{path:"/en/notes/web-ui.html",title:"User Interface Overview",pathLocale:"/en/",contents:[{header:"User Interface Overview",slug:"user-interface-overview",content:"The overall interface of MicroCity Web is shown in the following image. This article will provide a detailed introduction to the user interface (UI) operations of MicroCity Web."},{header:"Overview of Interface Sections",slug:"overview-of-interface-sections",content:`In general, the interface of MicroCity Web can be divided into 4 sections. Top - Blue Section: Executes various operations on code and files
Left - Green Section: Code editor
Right - Red Section: View area
Bottom - Yellow Section: Output information, recognizes program running status Below, we will provide a detailed explanation of the usage and features of these sections.`},{header:"Blue Section - Commands",slug:"blue-section-commands",content:`The content of this section is shown in the following image, and there are a total of 9 available buttons. Their specific functions are as follows: Program Control Run/Debug
Pause Execution
Stop Execution/Force Stop Code Editing Show Editor / Hide Editor
Open Sample Code
Open Local Code File / Upload File to Virtual Disk
Save Code / Download Others Share
View Help Documentation`},{header:"Program Control",slug:"program-control",content:"The first three buttons are mainly used to control program execution. Their specific functions are as follows: Run/Debug: Left-clicking will run the code in the left side Code Editor of the webpage; Right-clicking will start debugging the code. Pause Execution: If the program is running, clicking this button will pause the program execution (if supported by the program). Stop Execution/Force Stop: If the program is running, left-clicking this button will stop the program execution. In some cases where left-clicking fails to stop the script, right-clicking can forcibly terminate its execution."},{header:"Code Editing",slug:"code-editing",content:`Buttons numbered 4 to 7 are mainly related to code editing. Show Editor / Hide Editor: If the left-side code editor is open, clicking this button will close it. If it is closed, clicking this button will open it again. If you right-click, the editor can expand to full screen. Open Sample Code: This button loads built-in code (imports built-in models), such as cube, truck, earth, world map, etc. The specific models will be discussed in detail when introducing the Canvas area. List of built-in codes Open Local Code File / Upload File to Virtual Disk
Left-clicking: This opens a file dialog where you can select a code file (.lua) on your local machine. After selecting a file, its contents will be automatically imported into the left-side code editor.
Right-clicking: You can choose one or more files to upload to MicroCity Web. Right-clicking the "Save" button (⑦) allows you to view the list of uploaded files. Save Code / Download
Left-clicking: When you save a file for the first time, clicking the save button will prompt a save file dialog where you can choose the save location and enter a file name. If you have previously saved the file locally, and you have made modifications and want to save the changes, simply click the save button to directly save the changes to the previously saved file. Tips
In the new version of MicroCity Web, the code and uploaded files are packaged as .mw files.
For more information, please refer to File Saving | Debugging Related. Right-clicking: You can view the list of files uploaded to the virtual disk and download them to your local machine by clicking on a file in the list.`},{header:"Others",slug:"others",content:"Share: After clicking this button, a dialog will pop up asking for a password. Afterwards, you will receive a link that anyone can use to access your shared content. If you enter a password in the pop-up dialog box, when others open the link, they can only run your program code and observe the running result, without being able to view your code (unless you inform them of the password); if you do not enter a password, others can not only run your code to view the running result, but also view the code you wrote. View the help documentation."},{header:"Green area: Code Editor",slug:"green-area-code-editor",content:"The integrated code editor on the left side of MicroCity Web is based on AceEditor, so it also has some features of AceEditor."},{header:"Keyboard shortcuts",slug:"keyboard-shortcuts",content:`Below are some common shortcuts to help you edit code more effectively.
Most commonly used: Ctrl+Z: Undo Line operations: Ctrl+D: Delete a line
Ctrl+Shift+D: Duplicate a line
Alt+↑: Move the line of code up
Alt+↓: Move the line of code down Search content: Ctrl+K: Find the next occurrence of the selected content in the code Code indentation: Ctrl+[: Increase code indentation
Ctrl+]: Decrease code indentation Modify values: Ctrl+Shift+↑: Increment the value of the number before the cursor
Ctrl+Shift+↓: Decrement the value of the number before the cursor`},{header:"Red area: Canvas",slug:"red-area-canvas",content:'You can import scenes from built-in code, see Command Area - Code Editing After importing scene code, you need to click the "Run" button to load the scene. Built-in car model Built-in earth model'},{header:"Scene operations",slug:"scene-operations",content:`Operations on scenes, including perspective movement and rotation, need to be performed in the canvas area. Therefore, the basic operations in the canvas area are explained below. Zoom in/out on the scene: Scroll up the mouse wheel to zoom in and scroll down to zoom out.
Pan: Hold down the right mouse button and drag.
Rotate Scene rotation: Hold down the left mouse button and drag to rotate from your perspective.
Object rotation: Click on the object, and after the color of the object changes, hold down the left mouse button and drag to rotate around the object as the center. The above operations apply to both 2D and 3D objects.`},{header:"Yellow area: Code Output",slug:"yellow-area-code-output",content:`After opening MicroCity Web, the code output area is as follows. Clicking on the code output area will cause the entire area to move up, allowing you to see more historical output information. Speaking of the information output in this area, the code output area will display the following information: Script output: The left side shows the output of the script, including the output time and script output content.
Script running status: The first line on the right side indicates the running status of the script. state:ready indicates that the script is ready to start running (not running), state:running indicates that the script is running.
MicroCityWeb version: Indicates the current version of MicroCityWeb being used. If it differs from the known version, you can force refresh to load the latest version.`},{header:"Notes",slug:"notes",content:"Disable Auto-Translate: If your operating system language is not English and your browser has auto-translate enabled, you need to manually disable it, otherwise code execution will result in errors. This post is translated using ChatGPT, please feedback if any omissions."}]},{path:"/images/doc/",title:"",pathLocale:"/",contents:[{header:"",slug:"",content:"This folder contains images used by documentation pages."}]},{path:"/404.html",title:"",pathLocale:"/",contents:[]}],V="update-vuepress-plugin-full-text-search2-search-index";var C=f(F),q=j(()=>{const e=new Map;for(const t of C.value)e.set(t.path,t);return e});import.meta.webpackHot&&(__VUE_HMR_RUNTIME__[V]=e=>{C.value=e});function W(e){const t=f([]);let s=null;return L(e,()=>{s&&clearTimeout(s),s=setTimeout(i,100)}),t;function i(){const c=e.value.toLowerCase().trim();if(!c){t.value=[];return}const a=new Map,n=new Set;for(const o of C.value)for(const r of B(o,c)){n.add(r.parentPageTitle);let l=a.get(r.parentPageTitle);l||(l=[],a.set(r.parentPageTitle,l)),l.push(r)}const d=[...n].sort((o,r)=>{const l=a.get(o);return a.get(r).length-l.length});t.value=[...a].flatMap(([,o])=>o).sort((o,r)=>o.parentPagePriority-r.parentPagePriority||d.indexOf(o.parentPageTitle)-d.indexOf(r.parentPageTitle)||o.priority-r.priority)}}function*B(e,t){const s=S(e.title,t);if(s){yield{path:e.path,parentPageTitle:v(e),title:e.title,display:s,page:e,content:null,parentPagePriority:1,priority:1};return}for(const i of e.contents){const c=S(i.header,t);if(c){yield{path:e.path+(i.slug?`#${i.slug}`:""),parentPageTitle:v(e),title:e.title,display:c,page:e,content:null,parentPagePriority:10,priority:2};continue}const a=S(i.content,t);a&&(yield{path:e.path+(i.slug?`#${i.slug}`:""),parentPageTitle:v(e),title:e.title,display:[{type:"header",str:`${i.header}
`},...a],page:e,content:null,parentPagePriority:10,priority:10})}}function v(e){const t=e.path.split("/");let s="/";return t[1]&&(s=`/${t[1]}/`),(q.value.get(s)||e).title}function S(e,t){const s=[];let i=0;const c=e.toLowerCase().replace(/\s/gu," ");let a=0,n=c.indexOf(t,a);if(n<0)return null;for(;n>=0;){const o=n+t.length;if(d(e.slice(a,n),"normal"),d(e.slice(n,o),"highlight"),a=o,n=c.indexOf(t,a),i>100)break}return d(e.slice(a),"normal"),s.filter(o=>o.str);function d(o,r){let l=o;r==="normal"&&l.length>100&&i===0&&(l=`… ${l.slice(-10)}`);let m=!1;if(i+l.length>100){if(s.some(g=>g.type==="ellipsis"))return;l=l.slice(0,Math.max(100-i,1)),m=!0}s.push({type:r,str:l}),i+=l.length,m&&(s.push({type:"ellipsis",str:" …"}),i+=2)}}var U={"/":{placeholder:"搜索"},"/en/":{placeholder:"Search"}};const H=U,Y=_({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>H}},setup(e){const{locales:t}=I(e),s=f(""),i=f(!1),c=f(-1),a=W(s),n=j(()=>s.value&&i.value&&a.value.length),d=D(),o=O(),r=j(()=>t.value[o.value]??{});function l(){if(!n.value)return;let h=c.value-1;h<0&&(h=a.value.length-1),g(h)}function m(){if(!n.value)return;let h=c.value+1;h>=a.value.length&&(h=0),g(h)}function g(h){c.value=h}function P(){c.value=-1}function A(h){if(!n.value)return;const k=a.value[h];k&&d.push(k.path)}return{query:s,focused:i,focusIndex:c,suggestions:a,activeSuggestion:n,onUp:l,onDown:m,focus:g,unfocus:P,go:A,locale:r}}}),X={class:"search-box",role:"search"},Q=["placeholder"],Z=["onMousedown","onMouseenter"],J=["href"],$={key:0,class:"parent-page-title"},K={class:"suggestion-row"},ee={class:"page-title"},te={class:"suggestion-content"};function ne(e,t,s,i,c,a){return u(),p("div",X,[N(b("input",{ref:"input","onUpdate:modelValue":t[0]||(t[0]=n=>e.query=n),"aria-label":"Search",class:y({focused:e.focused}),placeholder:e.locale.placeholder??"Search",autocomplete:"off",spellcheck:"false",onFocus:t[1]||(t[1]=()=>e.focused=!0),onBlur:t[2]||(t[2]=()=>e.focused=!1),onKeyup:[t[3]||(t[3]=x(n=>e.go(e.focusIndex),["enter"])),t[4]||(t[4]=x((...n)=>e.onUp&&e.onUp(...n),["up"])),t[5]||(t[5]=x((...n)=>e.onDown&&e.onDown(...n),["down"]))]},null,42,Q),[[R,e.query]]),e.activeSuggestion?(u(),p("ul",{key:0,class:"suggestions",onMouseleave:t[7]||(t[7]=(...n)=>e.unfocus&&e.unfocus(...n))},[(u(!0),p(T,null,M(e.suggestions,(n,d)=>(u(),p("li",{key:d,class:y(["suggestion",{focused:d===e.focusIndex}]),onMousedown:o=>e.go(d),onMouseenter:o=>e.focus(d)},[b("a",{href:n.path,onClick:t[6]||(t[6]=E(()=>{},["prevent"]))},[n.parentPageTitle&&(!e.suggestions[d-1]||e.suggestions[d-1].parentPageTitle!==n.parentPageTitle)?(u(),p("div",$,w(n.parentPageTitle),1)):G("",!0),b("div",K,[b("div",ee,w(n.title||n.path),1),b("div",te,[(u(!0),p(T,null,M(n.display,(o,r)=>(u(),p("span",{key:r,class:y(o.type)},w(o.str),3))),128))])])],8,J)],42,Z))),128))],32)):G("",!0)])}const ie=z(Y,[["render",ne],["__scopeId","data-v-fd6cd4d5"],["__file","SearchBox.vue"]]);export{ie as default};
