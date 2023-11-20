# 调试相关
本页介绍 MicroCity Web 调试（debug）相关的函数和快捷键。

## 清除输出
右键输出区域可以输入命令，输入 `print()` 可以清除输出区域的内容。

## 调试器快捷键
在调试程序的过程中，特别是在断点处，可以使用F9（Step Over）、F10（Step Into）、F11（Step Out）控制程序运行。
- <kbd>F9</kbd> **Step Over**：跳过当前行，执行下一行
- <kbd>F10</kbd> **Step Into**：进入当前行，如果当前行是函数调用，则进入函数内部
- <kbd>F11</kbd> **Step Out**：跳出当前函数，执行函数调用的下一行

## Debug命令
### 监视变量
在控制台使用 `debug.watch()` 命令监视变量。

例如，在调试的过程中想要监视 `a` 变量的值，可以使用 `debug.watch('a')` 命令。
> 右键输出区域可以输入命令

### 堆栈跟踪
使用 `debug.traceback()` 函数可以打印出当前的堆栈跟踪信息

```lua
function myFunction()
    -- 某些代码逻辑
    print(debug.traceback("Stack trace"))
    -- 其他代码逻辑
end

function anotherFunction()
    myFunction()
end

anotherFunction()
```

输出结果

```
Stack trace
stack traceback:
[string "function myFunction() ..."]:3: in function 'myFunction'
[string "function myFunction() ..."]:8: in function 'anotherFunction'
[string "function myFunction() ..."]:11: in main chunk
```

### 运行状态
- `debug.debug()` 进入Debug模式。常用于在程序运行过程中进入Debug模式。如果想要启动时就进入Debug模式，可以右键顶部:arrow_forward:按钮。详见 [用户界面简介 - 运行状态](./web-ui.html#程序控制)。
- `debug.pause()` 暂停程序运行。顶部运行按钮:arrow_forward:会亮起，暂停按钮:pause_button:熄灭。

## 其他调试命令
Lua 的 Debug 函数大多都适用于 MicroCity Web，可以参考：
- [The Debug Library | Lua 5.4 Reference Manual](https://www.lua.org/manual/5.4/manual.html#6.10)
- [Lua 调试(Debug) | 菜鸟教程](https://www.runoob.com/lua/lua-debug.html)