# 离散事件模拟和程序控制
本文主要介绍如何在 MicroCity Web 中实现离散事件模拟和程序控制。

## 协程
MicroCity Web中提供了几个协程相关函数，方便实现事件调度法。如果主要用于实现事件调度法且尚不清楚事件调度法的原理，可以阅读 [时间推进法-事件调度法](./timelapse#事件调度法) 部分了解相关概念。

### coroutine.queue
将函数或协程添加到协程队列中等待
```lua:no-line-numbers
coroutine.queue(rt, f|co [, 参数列表...])
```

参数
|参数|含义|
|---|---|
|`rt`|相对当前队列的时间，要求大于等于0。换句话说，也就是再过`rt`执行输入的函数或协程|
|`f/co`|函数或协程。如果是函数，只需要输入函数名|

### coroutine.qtime
获取当前队列的时间
```lua:no-line-numbers
local time = coroutine.qtime()
```

### 示例
此处提供两个示例
1. [协程添加任务](#协程添加任务)：使用协程添加任务，并在函数中显示当前队列时间
2. [车辆移动](#车辆移动)：使用协程实现以真实世界的时间刷新场景

#### 协程添加任务
这个示例中展示了如何使用协程添加任务，并在函数中显示当前队列时间

```lua
function Show()
    print("当前时间：",coroutine.qtime())
end
function ShowShort()
    print("当前时间short：",coroutine.qtime())
end

coroutine.queue(10, Show)
coroutine.queue(20, Show)
coroutine.queue(15, ShowShort)
coroutine.queue(5, Show)

-- 结果：
-- 当前时间： 5.0
-- 当前时间： 10.0
-- 当前时间short： 15.0
-- 当前时间： 20.0
```

#### 车辆移动
这个示例中展示了如何使用协程实现以真实世界的时间刷新场景

```lua
scene.setenv({grid='plane'}) -- 设置场景网格背景

-- 车辆
local car = scene.addobj('/res/2axle.glb')
car.speed = 1 --车速度

-- 初始时间
local t = os.clock()
local dt = 0

-- 刷新时间状态t和dt(按照CPU间隔步进，达到和真实时间同步)
function refreshtime()
    dt = os.clock() - t
    t = os.clock()
end

-- 协程更新场景
function update()
    if not scene.render() then return end --渲染场景并检查程序是否中止
    coroutine.queue(dt, update) --根据CPU步进时间添加下一次更新
    carmove() --移动车辆
    refreshtime() --计算本次dt
end

-- 车辆移动
function carmove()
    print()
    print("car move at ",t)
    local x, y, z = car:getpos()
    car:setpos(x,y,z+dt*car.speed)
end

-- 初始更新（添加第一次更新）
-- 由于函数中涉及到添加后续更新，因此更新会自动循环
coroutine.queue(dt,update)
```

[在MicroCityWeb中打开](https://microcity.gitee.io/#s80gxo)

## 随机数
### 随机数生成原理简介
在计算机中，随机选择实际上并不是随机的。事实上，我们在计算机中所做的一切都不是随机的，“不可能制造一台真正生成真正随机数的计算机”这件事情是可以被证明的。我们现在获得的随机数都是伪随机数（Pseudo Random）。

如何生成伪随机数？有一种算法，给定一个数字生成，序列中的下一个数字。用种子（Seed）来初始化这个算法，并迭代得到后续的随机数序列。如果种子相同，那么生成的随机数序列也是相同的。

现在每次需要生成不同随机序列的时候，通过读取计算机的时钟来获得一个种子。这样做的原理是：由于无法确切地知道每次启动程序的时刻，所以这样可以认为每次启动程序使都得到了一个随机的数字可以作为种子。

因此，可以预见的是，这样得到的随机数序列是不可预测的，因为不知道随机数种子会是什么。

### 创建随机数种子
```lua:no-line-numbers
local seed = math.randomseed(x [, dist])
```

参数
|参数|含义|
|---|---|
|`x`|随机数种子，会根据输入的不同数值返回不同的随机数。如果需要每次的值都不一样，可以考虑将随机数种子`x`设置为当前时间|
|`dist`|随机数分布（可选参数）。如果不设置，默认为均匀分布。如果设置这个参数，还可以设置 `mu` 和 `sigma` 作为对应分布的参数|

`dist`参数可以设置键值为三种分布：

* `'normal'`：正态分布
* `'exponential'`：指数分布
* `'poisson'`：泊松分布

此外，还可以设置这几种分布的参数，其中 `mu` 键为均值，`sigma` 键为方差。

### 示例
```lua
-- 创建泊松分布的随机数种子
local seed = math.randomseed(os.time(), {distribution = "poisson", mu = "3"}) -- 泊松分布，均值为3

-- 输出随机数
print(seed:random())
```

## 程序控制
本文中的程序控制主要是指如何使用用户界面中的[按钮](./web-ui#蓝色-命令区域)控制程序的运行，包括暂停、恢复、停止等。

::: center
![命令栏](../images/note/MicroCityWeb/CommandBar.png)
命令栏
:::

> 主要是指命令栏的前3个按钮

MicroCity Web中的程序控制主要是指3D界面渲染中通过 `scene` 对象实现的3D界面运动的暂停、恢复、停止，具体的函数如下：
```lua:no-line-numbers
local state = scene.render()
```

此处将 `scene.render()` 的返回值存放于 `state` 变量中，`state` 变量的值为 `true` 或者 `false`，分别代表程序的运行状态为运行或者被终止（命令栏中按下按钮3）。

3D对象的暂停渲染也是通过调用 `scene.render()` 来实现的。如果刷新3D对象是通过不断调用 `scene.render()` 函数实现，并且刷新间隔时间不是通过 `os.sleep()` 来控制，那么可以实现在3D界面上将渲染暂停在某个状态。这是因为如果使用 `os.sleep()` 来控制3D对象的运动速度，那么当点击暂停按钮时，很可能正好处于 `os.sleep()` 的过程中，导致程序无法立即响应，从而导致暂停按钮无效。因此，建议在控制3D对象的运动速度时避免使用 `os.sleep()`，而是通过添加其他参数的方式来控制推进时长，以达到控制3D对象运动速度的目的。