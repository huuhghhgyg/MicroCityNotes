堆栈跟踪

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

使用F9（Step Over）、F10（Step Into）、F11（Step Out）控制程序运行
在控制台使用`debug.watch()`命令监视变量
