# Microcity Web 文档

MicroCity Web是**一个在线空间建模工具**，重构自<a href="https://github.com/microcity/" target="_blank">MicroCity</a>的桌面版本。

## 目录
- 1 简介
  - [1.1 MicroCity Web能做什么](1.1_what_microcity_web_can_do.md)
- 2 入门指南
  - [2.1 滚动一个立方体](2.1_rolling_a_cube.md)
  - [2.2 搜索国家](2.2_searching_for_countries.md)
- 3 用户界面
  - [3.1 界面概述](3.1_ui_overview.md)
  - [3.2 编辑脚本](3.2_editing_scripts.md)
  - [3.3 运行脚本](3.3_running_scripts.md)
  - [3.4 浏览场景](3.4_navigating_scenes.md)
- 4 脚本接口
  - [4.1 接口概述](4.1_si_overview.md)
  - [4.2 操作系统](4.2_operation_system.md)
  - [4.3 场景和对象](4.3_scene_and_object.md)
  - [4.4 离散事件仿真](4.4_discrete_event_simulation.md)
  - [4.5 混合整数规划](4.5_mixed_integer_programming.md)
- 附录
  - <a href="https://www.lua.org/manual/5.4/contents.html" target="_blank">Lua参考手册</a>
  - <a href="https://microcity.github.io/book" target="_blank">教材：物流空间建模</a>

## 函数索引
- 协程:
[coroutine.qexec](4.4_discrete_event_simulation.md#coroutine.qexec)&nbsp;
[coroutine.qtime](4.4_discrete_event_simulation.md#coroutine.qtime)&nbsp;
[coroutine.queue](4.4_discrete_event_simulation.md#coroutine.queue)
- 调试:
[debug.cont](4.2_operation_system.md#debug.cont)&nbsp;
[debug.debug](4.2_operation_system.md#debug.debug)&nbsp;
[debug.pause](4.2_operation_system.md#debug.pause)&nbsp;
[debug.step](4.2_operation_system.md#debug.step)&nbsp;
[debug.stepi](4.2_operation_system.md#debug.stepi)&nbsp;
[debug.stepo](4.2_operation_system.md#debug.stepo)&nbsp;
[debug.watch](4.2_operation_system.md#debug.watch)
- 数学:
[math.newmip](4.5_mixed_integer_programming.md#math.newmip)&nbsp;
[math.random](4.4_discrete_event_simulation.md#math.random)&nbsp;
[math.randomseed](4.4_discrete_event_simulation.md#math.randomseed)&nbsp;
[mip:addcol](4.5_mixed_integer_programming.md#mip:addcol)&nbsp;
[mip:addrow](4.5_mixed_integer_programming.md#mip:addrow)&nbsp;
[mip:delcol](4.5_mixed_integer_programming.md#mip:delcol)&nbsp;
[mip:delrow](4.5_mixed_integer_programming.md#mip:delrow)&nbsp;
[mip:solve](4.5_mixed_integer_programming.md#mip:solve)
- 操作系统:
[os.chatcmpl](4.2_operation_system.md#os.chatcmpl)&nbsp;
[os.download](4.2_operation_system.md#os.download)&nbsp;
[os.embedding](4.2_operation_system.md#os.embedding)&nbsp;
[os.execute](4.2_operation_system.md#os.execute)&nbsp;
[os.getready](4.2_operation_system.md#os.getready)&nbsp;
[os.upload](4.2_operation_system.md#os.upload)&nbsp;
[os.sleep](4.2_operation_system.md#os.sleep)
- 场景:
[scene.addobj](4.3_scene_and_object.md#scene.addobj)&nbsp;
[scene.getobj](4.3_scene_and_object.md#scene.getobj)&nbsp;
[scene.render](4.3_scene_and_object.md#scene.render)&nbsp;
[scene.setenv](4.3_scene_and_object.md#scene.setenv)&nbsp;
[scene.topolar](4.3_scene_and_object.md#scene.topolar)&nbsp;
[scene.tovector](4.3_scene_and_object.md#scene.tovector)<br>
[obj:delete](4.3_scene_and_object.md#obj:delete)&nbsp;
[obj:getchildren](4.3_scene_and_object.md#obj:getchildren)&nbsp;
[obj:getdata](4.3_scene_and_object.md#obj:getdata)&nbsp;
[obj:getmat](4.3_scene_and_object.md#obj:getmat)&nbsp;
[obj:getparent](4.3_scene_and_object.md#obj:getparent)&nbsp;
[obj:getpos](4.3_scene_and_object.md#obj:getpos)&nbsp;
[obj:getrot](4.3_scene_and_object.md#obj:getrot)&nbsp;
[obj:getscale](4.3_scene_and_object.md#obj:getscale)&nbsp;
[obj:getvertices](4.3_scene_and_object.md#obj:getvertices)&nbsp;
[obj:setchildren](4.3_scene_and_object.md#obj:setchildren)&nbsp;
[obj:setdata](4.3_scene_and_object.md#obj:setdata)&nbsp;
[obj:setmat](4.3_scene_and_object.md#obj:setmat)&nbsp;
[obj:setparent](4.3_scene_and_object.md#obj:setparent)&nbsp;
[obj:setpos](4.3_scene_and_object.md#obj:setpos)&nbsp;
[obj:setrot](4.3_scene_and_object.md#obj:setrot)&nbsp;
[obj:setscale](4.3_scene_and_object.md#obj:setscale)&nbsp;
[obj:setvertices](4.3_scene_and_object.md#obj:setvertices)&nbsp;
[obj:tojson](4.3_scene_and_object.md#obj:tojson)

> 声明：本目录下文档中大部分内容来源于[MicroCity Web](https://github.com/microcity/microcity/tree/master/doc)，版权归原作者所有，内容仅供参考。

> 本文使用ChatGPT翻译，如有遗漏请[**反馈**](https://github.com/huuhghhgyg/MicroCityNotes/issues/new)。