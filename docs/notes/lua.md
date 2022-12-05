# LUA语言快速上手
由于MicroCity采用的脚本语言是LUA，因此在开始使用MicroCity编写脚本之前需要先熟悉LUA的基本用法。

## 变量和函数定义
lua会自动识别变量类型，因此无需在变量名称前定义变量类型，直接赋值即可。
```lua
a = 1.5
b = "string"
c = {} -- c为集合，见下文介绍
```

函数的定义
```lua
function add(a, b)
    return a + b
end
```
上方简单定义了一个`add()`函数，目的是把输入的两个变量相加返回结果。

变量分为全局变量和局部变量，函数也是如此。局部变量和函数的定义如下。
```lua
-- 定义局部函数
local function show(msg)
    print(msg)
end

-- 定义局部变量
local a = 1
```
如果局部定义的内容（函数或变量）和全局定义的内容有冲突，以局部的内容优先。存在这种冲突时，你操作的内容是局部的内容。

如果没有明确需要操作全局变量，建议尽量将变量定义为局部变量。这种做法可能会减少bug的出现，也是更加安全的做法。

## 条件
就是`if`，具体实现形式有如下几种：
1. 普通形式
```lua
if condition then
    print("condition==true")
end
```

2. 带`else`的形式
```lua
if condition then
    print("condition==true")
else
    print("condition==false")
end
```

3. 以及使用`elseif`的形式
```lua
if number > 0 then
    print("number>0")
elseif number < 0 then
    print("number<0")
else
    print("number==0")
end
```

## 循环
记录一下最常用的两种循环: `for`&`while`
### for
最普通的形式
```lua
-- 输出1到10共10个数
for i = 1:10 do
    print(i)
end
```

如果你比较熟悉C语言或C类语言，以上代码对应的形式如下
```c
for(int i=1; i<=10; i++){
    printf("%d\n",i);
}
```

考虑步长
```lua
-- 输出10到1共10个数，步长为-1
for i = 10:1:-1 do
    print(i)
end
```
> 步长为负数时，需要注意开始和结束的数字也应该为倒序

泛型循环
可以直接遍历一个集合中的所有元素。
`i`为集合元素的下标，从1开始；`v`为集合元素的值。
```lua
a = {4,7,9}
for i,v in ipairs(a) do
    print("index=",i,"\tvalue=",v)
end
```
> `ipairs`适用于数组（`i`估计是`integer`的意思），`pairs`适用于对象，因为数组也是对象，所以`pairs`用于数组也没问题。

### while
while的常用方法就一个
```lua
local condition = true
while condition do
    print("while==true")
    condition = false
end
```
和C类语言一样。只要`condition`为`true`的时候`while`就会一直执行。当`condition`被设置为`false`的时候，`while`就会结束运行。

### 循环操作符
同其他语言的规定一样，`break`关键字用于跳出循环。
LUA中没有`continue`，只有`break`。但是可以可以通过使用`if`+`break`的形式实现`continue`的功能。

## Lua的小特性：集合
虽然Lua里面把它自己的数组称作`table`，但是我认为这个数据结构更类似于Python的集合或者json，里面可以存储任何东西，不受结构约束。
```lua
collection = {{"a", 1, 2}, "abc", {2, 3}}
```
如果需要查询数组的长度，只需要在数组名前面添加`#`即可得到
```lua
list = {1, 2, 3, 4, 5}
for i=1,#list do
    print(list[i])
end
```
Lua的数组（集合）下标从`1`开始，不同于C类语言的`0`。此处以前面定义的`collection`为例：
```lua
print(collection[1][1]) --a
print(collection[2]) --abc
print(collection[3][2]) --3
```