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