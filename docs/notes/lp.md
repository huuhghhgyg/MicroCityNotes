# 模型求解
在MicroCity中可以对数学模型进行求解。接下来，本文将介绍在MicroCity中求解数学模型的常见过程，并提供一些技巧帮助你更好地建模。

规划模型中所有函数的详细用法可以参考文档 [4.8混合整数线性规划](../docs/4.8_mixed_integer_programming.md)

## 创建模型对象
创建规划模型对象，存入变量`lp`中。
```lua
local lp = CreateLP()
```
> 官方文档中将创建的数学模型对象存入变量`LPModel`中，作用同本文的`lp`

## 写入数学模型
此时，数学模型的对象已经创建并存入了变量`lp`中，可以对其进行更进一步的操作。数学模型一般分为两个部分：
- [目标函数](#创建目标函数)
- [约束方程](#添加约束方程)

接下来，先介绍创建目标函数的具体做法。

### 创建目标函数
MicroCity中，使用`SetObjectFunction()`设置模型对象的目标函数。允许选择目标函数求**最大值**或**最小值**。具体用法如下：
<!-- ```lua
SetObjFunction(lp, cons, "min") --求最小值
SetObjFunction(lp, cons, "max") --求最大值
``` -->
::: code-tabs#shell
@tab:active 最大值
```lua
SetObjFunction(lp, cons, "max") --求最大值
```
@tab 最小值
```lua
SetObjFunction(lp, cons, "min") --求最小值
```
:::
> "min"和"max"不区分大小写，写"MIN"和"MAX"也可以

#### 参数说明及示例
|参数|作用|
|---|---|
|`lp`|数学模型对象。将数学模型输入函数中，为模型设置目标函数|
|`cons`|目标函数系数，是一个`table`类型的变量。用于确定模型中目标函数的系数。|
|`"min"`或`"max"`|确定目标函数求最大还是求最小。|

`cons`是目标函数的系数列表，是一个`table`类型的变量。假设你要求函数$4x_1+12x_2+18x_3$的**最小值**，则添加目标函数的做法如下：
```lua
-- 假设你已经创建了模型对象，并存入变量lp中

-- 4*x1 + 12*x2 + 18*x3
local cons = {4, 12, 18}

-- 设置目标函数：求最小
SetObjFunction(lp, cons, "min")
```

### 添加约束方程
在MicroCity中，添加模型约束的函数为`AddConstraint()`，用法如下：
<!-- ```lua
-- 小于等于 ≤：
-- 使用符号表达
AddConstraint(lp, cons, "<=", b)
-- 使用缩写表达
AddConstraint(lp, cons, "le", b)

-- 大于等于 ≥：
-- 使用符号表达
AddConstraint(lp, cons, "<=", b)
-- 使用缩写表达
AddConstraint(lp, cons, "le", b)

-- 等于 =：
-- 使用符号表达
AddConstraint(lp, cons, "==", b)
-- 使用缩写表达
AddConstraint(lp, cons, "eq", b)
``` -->

::: code-tabs#shell
@tab:active ≤
```lua
-- 使用符号表达
AddConstraint(lp, cons, "<=", b)

-- 或者可以使用缩写表达
AddConstraint(lp, cons, "le", b)
```

@tab ≥
```lua
-- 使用符号表达
AddConstraint(lp, cons, ">=", b)

-- 或者可以使用缩写表达
AddConstraint(lp, cons, "ge", b)
```

@tab =
```lua
-- 使用符号表达
AddConstraint(lp, cons, "==", b)

-- 或者可以使用缩写表达
AddConstraint(lp, cons, "eq", b)
```
:::

#### 参数说明
|参数|作用|
|---|---|
|`lp`|数学模型对象。将数学模型输入函数中，为模型添加约束|
|`cons`|约束方程系数。和设置目标函数中的`cons`一样，也是一个`table`类型的变量。用于确定约束方程中各个变量的系数。|
|`"<="` 或 `">="` 或 `"=="`，或其对应的字母表达|确定约束方程与右端项的关系|
|`b`|一个数字，表示约束方程的右端项。可以是变量也可以是常量|

#### 示例
上面已经设置了目标函数为$4x_1+12x_2+18x_3$，假设你要为这个函数添加两个约束方程：
$$
\left\{\begin{matrix} 
  x_1+3x_3\ge3 \\  
  2x_2+2x_3\ge5 
\end{matrix}\right. 
$$
添加对应约束方程：
```lua
-- 添加约束：x1+3*x3≥3
cons = { 1, 0, 3 }
AddConstraint(lp, cons, ">=", 3)

-- 添加约束：2*x2+2*x3≥5
cons = { 0, 2, 2 }
AddConstraint(lp, cons, ">=", 5)
```
不难注意到，系数的个数和目标函数中变量的个数一致。因此，在编程求解之前首先要搞清楚变量的总数，并安排好各个变量的位置。

### 设置变量类型
MicroCity中的数学规划支持整数规划。如果没有对变量设置`SetUnbounded()`，默认变量的取值范围是非负实数(≥0)。下面介绍变量类型设置的详细做法。

你可以将模型中第`i`个变量设置为**整数变量**或**0-1变量**。如果不将变量设置为这些类型，则默认变量为**非负实数**。
<!-- ```lua
SetInteger(lp, i) --整数变量
SetBinary(lp, i) --0-1变量
``` -->
::: code-tabs#shell
@tab 整数变量
```lua
SetInteger(lp, i) --整数变量
```
@tab 0-1变量
```lua
SetBinary(lp, i) --0-1变量
```
:::

让第i个变量的值可以是负数（默认取不到负数）：
```lua
SetUnbounded(lp, i)
```

## 模型求解和输出
### 模型求解
由于目标函数和约束方程都已经添加完毕，因此模型的求解就很简单了，只需要一步：
```lua
SolveLP(lp)
```
执行完这条语句后，存放于变量`lp`内的数学模型就求解完毕了🎉

### 输出
求解完还需要输出，否则就不知道求解的结果如何。以下是常用的输出求解结果的函数。

获取**目标函数值**：
```lua
GetObjective(lp)
```

获取第`i`个**变量的值**：
```lua
GetVariable(lp, i)
```

#### SolveLP
`SolveLP()`函数在求解完毕后也有输出，输出代码的含义如下：
|输出代码|含义|
|---|---|
|0|成功|
|-1|无效的LP模型|
|-2|无内存|
|1|次优|
|2|无可行解|
|3|无界解|
|4|退化|
|5|遇到数值错误|
|6|用户终止了求解|
|7|超时错误|

其他返回值表示的含义请参阅文档 [4.8混合整数线性规划](../docs/4.8_mixed_integer_programming.md) 中的`SolveLP()`函数。

## 模型求解示例
这里提供一个简单的从建模至求解的示例供参考。（其实就是将前面的拼起来）

算例：
$$
minf=4x_1+12x_2+18x_3\\
s.t.\left\{\begin{matrix} 
  x_1+3x_3\ge3 \\  
  2x_2+2x_3\ge5 \\
  x_1,x_2,x_3\in N
\end{matrix}\right. 
$$
> N表示自然数（非负整数集合）

脚本
```lua
-- 创建线性规划对象
local lp = CreateLP()

local n = 3 --设置目标函数个数

-- 目标函数：4*x1 + 12*x2 + 18*x3
-- 设置目标函数系数，目标函数求最小
local cons = { 4, 12, 18 }
SetObjFunction(lp, cons, "min")

-- 添加约束1：x1 + 3*x3 ≥ 3
cons = { 1, 0, 3 }
AddConstraint(lp, cons, ">=", 3)

-- 添加约束2：2*x2 + 2*x3 ≥ 5
cons = { 0, 2, 2 }
AddConstraint(lp, cons, ">=", 5)

-- 由于没有设置SetUnbounded()，
-- 默认所有变量取值非负，
-- 因此不用针对变量非负添加约束。

-- 设置所有变量为整数
for i = 1, n do
    SetInteger(lp, i)
end

-- 求解模型
SolveLP(lp)

-- 输出目标函数值
print("目标函数值：",GetObjective(lp))

-- 输出各个变量的值
for i = 1, n do
    print("x",i,"=",GetVariable(lp, i))
end
```

输出结果
```
目标函数值：42
x1=0
x2=2
x3=1
```