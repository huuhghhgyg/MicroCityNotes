# 通用绘图代码
本节提供了一些写好的绘图对象，方便需要数据可视化绘图时直接使用。

::: info
本页所有开放源代码遵循MIT协议，可以随意使用，但公开发布时请保留版权信息。
:::

## 导入库文件
首先介绍库文件的使用方式。“库文件”指提前包装好的绘图函数，有以下3种方法将文件导入到 MicroCity Web 中使用。

### 方法一：使用代码在线导入
👍 **推荐使用本方法使用库文件，这样可以保证使用的是最新版本的库文件。**

以导入 `Histogram` 和 `Subplot` 为例，导入库文件代码如下：

```lua
print('正在下载依赖库到虚拟磁盘...')
-- 下载直方图代码到虚拟磁盘
os.upload('https://www.zhhuu.top/ModelResource/libs/Histogram.lua')
-- 下载子图代码到虚拟磁盘
os.upload('https://www.zhhuu.top/ModelResource/libs/Subplot.lua')
print('下载完成')
```

### 方法二：下载代码文件并导入
转到 [代码文件下载](#代码文件下载) 处下载所需库文件，然后在 MicroCity Web 中导入该文件，最后引用该文件后即可使用。

以引用直方图为例，引用的代码如下:
```lua
require("Histogram") --引用直方图
```

### 方法三：复制代码
除非需要修改函数功能或逻辑，否则不建议这么做。各个函数的代码见[代码](#代码)部分。

## 直方图
直方图(Histogram)一般用于显示数据集中各数据值的频数或频率分布情况。

它将数据按照一定的间隔划分为若干个区间（或称为“箱子”），然后绘制出每个区间的频数（或频率）在纵轴上的柱状图，以此反映数据的分布情况。

以下是用直方图对象（函数）绘制的直方图的示例

::: center
![直方图示例](../images/note/Histogram.png =500x)
:::

### 导入直方图
首先导入直方图的代码，具体导入方式见[导入库文件](#导入库文件)。

直方图的文件名为 `Histogram.lua`，引用直方图：
```lua
require("Histogram") --引用直方图
```

### 创建直方图对象
创建一个直方图对象
```lua
local plot = Histogram(list) -- list为数据集
```

还可以在创建对象时对图的属性进行设置。

```lua
local plot = Histogram(list, {range={40,90,0,100}, scale={10, 50}, fdisp=function(x) return (x/n*100).."%" end})
```

属性的设置不是必须的，可以仅根据需要设置。此处就只设置了`range`、`scale`、`fdisp`属性。

### 直方图属性设置
上面提供了直方图属性设置的简单例子。根据代码，还可以设置更多的属性。具体见下表：

|属性值|作用|示例|
|---|---|---|
|`origin`|设置图原点（左下角点）|`origin = {-50, -50}`，将图的原点设置在(-50,-50)的位置|
|`size`|设置图横纵轴长度，可以理解为图的大小|`size = {100, 100}`，将图的x轴和y轴长度分别设置为100、100|
|`scale`|设置横纵坐标轴的分度值|`scale = {3, 2}`，将图的x轴和y轴分度值分别设置为3和2|
|`axislabel`|设置横纵轴标题|`axislabel = {"x", "y"}`，将图的x轴和y轴标题分别设置为"x"和"y"|
|`range`|设置横纵坐标轴的显示范围|`range = {0, 10, 0, 20}`，将图的x轴范围设置为[0,10]，y轴范围设置为[0,20]|
|`filled`|设置是否填充柱状图|`filled = false`，将柱状图设置为空心。默认样式为填充|
|`fdisp`|数据标签的显示函数，默认返回数量。设置数据标签显示函数时也会影响y轴刻度的显示。|`fdisp = function(v) return (v/n*100).."%" end`，将数据标签改为按照比例显示（假设n为样本数）|

### 直方图高级用法

📈 **动态刷新数据图**

1. 修改图中的数据。此处以向图中添加数据为例。其中假设`rnd`为添加的数据。也可以直接修改`plot.data`的值。
```lua
table.insert(plot.data, rnd)
```

2. 刷新图
```lua
plot:refresh()
```

### 示例
#### 基本用法示例：绘制泊松分布
```lua
require("Histogram") --引用直方图

local seed = math.randomseed(1, {
    distribution = "poisson",
    mu = "3"
})
local list = {seed:random()}

--静态绘制
for i = #list, 400 do
    table.insert(list, seed:random())
end

local histplot = Histogram(list, {
    range = {0, 10, 0, 50},
    scale = {1, 5}
})
scene.render()
```

#### 高级用法示例：动态刷新绘制泊松分布
这是一个绘制泊松分布并动态刷新数据图的示例。假设已经导入了`Histogram`对象，并将场景设为二维显示。

```lua
require("Histogram") --引用直方图

local seed = math.randomseed(1, {
    distribution = "poisson",
    mu = "3"
})
local list = {seed:random()}

local histplot = Histogram(list, {
    range = {0, 10, 0, 50},
    scale = {1, 8}
})
scene.render()

-- 动态绘制
local count = 1
while count < 1000 and scene.render() do
    local rnd = seed:random()
    table.insert(histplot.data, rnd)

    histplot:refresh()
    count = count + 1
end
scene.render()
```

## 子图
子图(Subplot)是为了解决同时在界面中放置多个图的图定位和尺寸问题。名称借鉴自MATLAB。

::: center
![子图](../images/note/Subplot_Vertical.png =500x)
:::

### 导入子图
首先导入子图的代码，具体导入方式见[导入库文件](#导入库文件)。

子图的文件名为 `Subplot.lua`，引用子图：
```lua
require("Subplot") --引用子图
```

### 子图属性设置
此处将对子图的属性进行详细说明。属性的设置不是必须的，可以仅根据需要设置。
|属性|作用|示例|
|:---:|---|---|
|`span`|设置子图之间的间隔|`span=10`，设置子图上下左右之间的间隔为10|
|`diag`|通过输入对角线两个点的坐标设置子图位置和大小|`diag = {-80, -70, 80, 70}`，设置子图的对角线范围从坐标 $(-80,-70)$ 到坐标 $(80,70)$|

### 子图值读取
通过属性创建子图后，或者修改子图属性并刷新后，可以对子图的计算值进行读取，获取`Subplot`中各个子图的原点位置和尺寸。主要通过以下几个属性值进行读取。

::: note
此处假设子图对象创建后存放于 `subplot` 变量中。
:::

|计算属性|含义|示例|
|:---:|---|---|
|`originpt`|Subplot对象中各个子图的原点位置|通过`subplot.originpt[i][j][1]`和`subplot.originpt[i][j][2]`能够获取到第`i`行`j`列的子图对应的原点位置|
|`psize`|Subplot对象中各个子图的尺寸|通过`subplot.psize[1]`和`subplot.psize[2]`能够获取到`subplot`中子图对应的宽度和高度。(假设子图中所有图所需尺寸相同)|

### 示例
这是一个绘制子图范围的示例。假设已经导入了`Subplot`对象，并将场景设为二维显示。

此处将一个2行3列子图中各个子图的显示范围绘制为一个矩形。其中子图范围用四个灰色点表示，子图位置用蓝色矩形表示。

```lua
require("Subplot") --引入子图代码

local subplot = Subplot(2, 3, {span = 10})

-- 绘制Subplot对象边界点
local lb = scene.addobj("points",{size = 10, vertices={subplot.diag[1],subplot.diag[2],0}})
local lt = scene.addobj("points",{size = 10, vertices={subplot.diag[1],subplot.diag[4],0}})
local rb = scene.addobj("points",{size = 10, vertices={subplot.diag[3],subplot.diag[4],0}})
local rt = scene.addobj("points",{size = 10, vertices={subplot.diag[3],subplot.diag[2],0}})

-- 绘制范围
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
scene.render()
```

## 代码
可以根据代码的组合情况删去开头的 `scene.setenv` 代码。代码中的 `scene.render()` 是为了在动态绘制时刷新图像。

### 代码文件下载
代码文件列表见 [ModelResource/libs](https://github.com/huuhghhgyg/ModelResource/tree/main/libs)

|名称|链接|
|---|---|
|直方图|[ModelResource/libs/Histogram.lua](https://github.com/huuhghhgyg/ModelResource/blob/main/libs/Histogram.lua)|
|子图|[ModelResource/libs/Subplot.lua](https://github.com/huuhghhgyg/ModelResource/blob/main/libs/Subplot.lua)|

> 🔗上方表格链接指向GitHub仓库。您可以在GitHub直接查看代码，也可以将文件下载到本地使用。