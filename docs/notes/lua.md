---
head:
  - - meta
    - name: keywords
      content: MicroCity,编程,脚本,lua
---

# Lua语言快速上手
由于MicroCity采用的脚本语言是Lua，因此在开始使用MicroCity编写脚本之前需要先熟悉Lua的基本用法。本文介绍了MicroCity编写Lua脚本的常用的语法，能够帮助你快速地根据其他编程语言中的概念理解MicroCity脚本编写的总体思路。

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

Lua中相等判断的运算符为`==`，不等判断的运算符为`~=`。您可以将运算符运用于条件表达式。下面是一个简单的举例：
```lua
print(1==1) -- true
print(1~=1) -- false
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

### table的排序
#### 默认排序方法
可以使用函数对列表进行排序，最简单的用法如下
```lua
table.sort(list) -- 默认升序排序
```

此处提供一个实验案例
```lua
-- 函数：打印列表
function PrintList(list)
    -- 输出列表
    local listStr = ""
    for i = 1, #list do
        listStr = listStr .. list[i] .. " "
    end
    print(listStr)
end

local list = { 3, 7, 2, 5, 4 } -- 原始列表

PrintList(list) -- 输出原始列表
table.sort(list) -- 对列表进行排序
PrintList(list) -- 输出排序后的列表

-- 结果：
-- 3 7 2 5 4 (原始列表)
-- 2 3 4 5 7 (排序后的列表)
```

#### 自定义排序方法
`table.sort`函数也可以使用自定义排序规则，但是这个规则你需要写在函数里。
```lua
table.sort(list, function(a, b))
```
`function(a, b)`是自定义的排序规则，要求最终返回一个`bool`值(`true`或`false`)。`a`和`b`分别为列表中的任意两项，如果函数返回`true`，则`a`在`b`的前面，否则`b`在`a`的前面。

下面提供了2个示例供参考。

##### 示例1：上面代码改为降序输出
```lua
-- 此处省略PrintList()函数，函数代码与上方相同

local list = { 3, 7, 2, 5, 4 } -- 原始列表

PrintList(list) -- 输出原始列表
table.sort(list, function(a, b) -- 对列表进行排序
    return a > b -- 降序排序，如果a>b，则a在b前面
end)
PrintList(list) -- 输出排序后的列表

-- 结果：
-- 3 7 2 5 4 (原始列表)
-- 7 5 4 3 2 (排序后的列表)
```

##### 示例2：二维数组中的排序
```lua
-- 函数：打印列表
function PrintList(list)
    -- 输出列表
    local listStr = ""
    for i = 1, #list do
        listStr = listStr .. "\n" .. list[i][1] .. ", " .. list[i][2]
    end
    print(listStr)
end

 -- 原始列表
local list = { { 3, 5 }, { 7, 6 }, { 2, 2 }, { 5, 1 }, { 4, 3 } }

PrintList(list) -- 输出原始列表

-- 以列表中每项的第1维降序排序
table.sort(list, function(a, b)
    return a[1] > b[1]
end)
PrintList(list) -- 输出排序后的列表

-- 以列表中每项的第2维降序排序
table.sort(list, function(a, b)
    return a[2] > b[2] 
end)
PrintList(list) -- 输出排序后的列表

-- 结果：
-- 原始列表：
-- 3, 5
-- 7, 6
-- 2, 2
-- 5, 1
-- 4, 3

-- 以第1维降序排序：
-- 7, 6
-- 5, 1
-- 4, 3
-- 3, 5
-- 2, 2

-- 以第2维降序排序：
-- 7, 6
-- 3, 5
-- 4, 3
-- 2, 2
-- 5, 1
```

### table的引用
当没有对table进行对拷，而直接复制的时候，刚刚新得到的`list2`相当于原`list1`的引用，称为**浅拷贝**。当你修改浅拷贝得到的`list2`中的元素时，由于两个table是引用的关系，`list1`中的元素也会随之改变。

上面的示例代码也遵循了这一原理。下面将用一个新的例子突出这一特点。

#### 示例：浅拷贝
```lua
function PrintList(list)
    -- 输出列表
    local listStr = ""
    for i = 1, #list do
        listStr = listStr .. list[i] .. " "
    end
    print(listStr)
end

list1 = { 1, 2, 3, 4, 5 }
PrintList(list1)
-- 1 2 3 4 5

list2 = list1
PrintList(list2)
-- 1 2 3 4 5

-- 修改list2的第2个元素
list2[2] = 10
PrintList(list2)
-- 1 10 3 4 5

PrintList(list1)
-- 1 10 3 4 5
```

#### 示例：深拷贝
而如果想要复制一个全新的列表`list2`怎么办呢？那么你就需要对table中的元素进行逐个复制，也称**深拷贝**。
```lua
-- PrintList函数代码与上方相同

list1 = { 1, 2, 3, 4, 5 }
PrintList(list1)
-- 1 2 3 4 5

list2 = {} -- 新建一个空列表

-- 将list1的元素复制到list2
for index, value in pairs(list1) do
    table.insert(list2, value)
end
PrintList(list2)
-- 1 2 3 4 5

-- 修改list2的第2个元素
list2[2] = 10
PrintList(list2)
-- 1 10 3 4 5

PrintList(list1)
-- 1 2 3 4 5 (没有发生变化)
```
在这个例子中，修改深拷贝得到的`list2`中的元素并不会对原来的`list1`产生影响。