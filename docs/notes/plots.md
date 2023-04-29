# 通用绘图代码
本节提供了一些写好的绘图对象，方便需要数据可视化绘图时直接使用。

::: info
本页所有开放源代码遵循MIT协议，可以随意使用，但公开发布时请保留版权信息。
:::

## 直方图
直方图(Histogram)一般用于显示数据集中各数据值的频数或频率分布情况。它将数据按照一定的间隔划分为若干个区间（或称为“箱子”），然后绘制出每个区间的频数（或频率）在纵轴上的柱状图，以此反映数据的分布情况。

以下是用我包装的直方图对象绘制的直方图的示例

::: center
![直方图示例](./images/Histogram.png =500x)
:::

如果你已经熟悉直方图对象的用法，点击此处可以 [**转到代码**](#直方图代码) 对代码进行复制并使用。下面将对直方图对象的用法进行详细介绍。

### 创建对象
创建一个直方图对象
```lua
local plot = Histogram(list) -- list为
```

还可以在创建对象时对图的属性进行设置。

```lua
local plot = Histogram(list, {range={40,90,0,100}, scale={10, 50}, fdisp=function(x) return (x/n*100).."%" end})
```

属性的设置不是必须的，可以仅根据需要设置。此处就只设置了`range`、`scale`、`fdisp`属性。

### 属性设置
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

### 高级用法
动态刷新数据图
1. 修改图中的数据。此处以向图中添加数据为例。其中假设`rnd`为添加的数据。也可以直接修改`histplot.data`的值。
```lua
table.insert(histplot.data, rnd)
```

2. 刷新图
```lua
plot:refresh()
```

### 示例
示例省去了一些[导入的代码](#直方图代码)。

#### 基本用法示例：绘制泊松分布
```lua
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
local seed = math.randomseed(1, {
    distribution = "poisson",
    mu = "3"
})
local list = {seed:random()}

local histplot = Histogram(list, {
    range = {0, 10, 0, 50},
    scale = {1, 6}
})
scene.render()

-- 动态绘制
local count = 1
while count < 1000 do
    local rnd = seed:random()
    table.insert(histplot.data, rnd)

    histplot:refresh()
    count = count + 1
    scene.render()
end
```

## 子图
子图(Subplot)是为了解决同时在界面中放置多个图的图定位和尺寸问题。名称借鉴自MATLAB。

::: center
![子图](./images/Subplot_Vertical.png =500x)
:::

### 创建子图对象
创建子图时必须输入子图的行数和列数。子图的行数和列数决定了子图的数量。
```
local subplot = Subplot(rows, cols)
```

还可以设置附加属性，对子图的位置和尺寸进行设置。这是一个在创建时设置子图位置和尺寸的例子。
```lua
local subplot = Subplot(rows, cols, {span=10, diag={-80, -70, 80, 70}})
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

### 直方图代码
`Histogram`
```lua
-- 初始场景设置
local s = scene.setenv({camtype = "ortho"})

-- 返回一个直方图对象
function Histogram(data, ...)
    local plot = {
        -- 默认值设置
        origin = {-50, -50}, --坐标原点坐标
        size = {100, 100}, --坐标轴长度
        scale = {3, 2}, --坐标轴刻度分度值
        range = {0, 10, 0, 20}, --xy轴范围
        axislabel = {"x", "y"},
        filled = true, --是否填充
        fdisp = function(v) --数据标签显示
            return v
        end,
    }
    -- 导入参数和fallback
    if ... ~= nil then
        for k, v in pairs(...) do
            plot[k] = v
        end
    end
    
    local barShape = "polygon"
    if plot.filled==false then barShape = "polyline" end

    -- 初始化
    plot.axes = {} -- 坐标轴
    plot.originlabel = {} -- 零点可能存在双坐标
    plot.bars = {} -- 数据条
    plot.xvalue = {} -- x轴刻度值(不包括最小值)
    plot.data = data

    function plot:deldata() --删除数据(private)
        if #plot.bars == 0 then
            return
        end

        for i = #plot.bars, 1, -1 do
            -- print("plot.bar:",i)
            plot.bars[i][2]:delete()
            plot.bars[i][1]:delete()
        end

        plot.zero:delete()
        for i = #plot.originlabel, 1, -1 do
            plot.originlabel[i]:delete()
        end

        for i = #plot.axes, 1, -1 do
            for j = #plot.axes[i], 1, -1 do
                plot.axes[i][j][2]:delete()
                plot.axes[i][j][1]:delete()
            end
        end
    end

    function plot:refresh() --反复绘图时调用(public)
        plot:deldata()

        -- 计算坐标刻度参数
        local xmax = math.max(math.max(table.unpack(plot.data)), plot.range[2])
        local xmin = math.min(math.min(table.unpack(plot.data)), plot.range[1])
        local valueRange = xmax - xmin
        plot.range[1], plot.range[2] = xmin, xmax

        -- 绘图值统计
        local barData = {}
        for i = 1, #data do -- 深拷贝
            table.insert(barData, data[i])
        end
        plot.barValue = {}

        -- 绘制零点
        plot.zero = scene.addobj("points", {
            vertices = {plot.origin[1], plot.origin[2], 0},
            size = 10
        })
        if plot.range[1] == plot.range[3] then -- 都是0
            plot.originlabel[1] = scene.addobj("label", {
                text = plot.range[1],
                size = 4
            })
            plot.originlabel[1]:setpos(plot.origin[1] - 4, plot.origin[2] - 4, 0)
        else
            plot.originlabel[1] = scene.addobj("label", {
                text = plot.range[1],
                size = 4
            })
            plot.originlabel[1]:setpos(plot.origin[1], plot.origin[2] - 4, 0)
            plot.originlabel[2] = scene.addobj("label", {
                text = plot.range[3],
                size = 4
            })
            plot.originlabel[2]:setpos(plot.origin[1] - 4, plot.origin[2], 0)
        end

        -- X坐标刻度
        local xaxis = {} -- x坐标轴对象，其中元素为{point，label}
        for j = 1, (plot.range[2] - plot.range[1]) / plot.scale[1] do -- 第几个刻度
            local xpt = plot.origin[1] + j * plot.size[1] / (plot.range[2] - plot.range[1]) * plot.scale[1] -- X刻度位置
            local pt = scene.addobj("points", {
                vertices = {xpt, plot.origin[2], 0},
                size = 5
            }) -- 刻度点
            local label = scene.addobj("label", {
                text = string.format("%.1f", plot.range[1] + j * plot.scale[1]),
                size = 4
            }) -- 刻度标签
            table.insert(plot.xvalue, plot.range[1] + j * plot.scale[1]) -- 当前x刻度值
            label:setpos(xpt, plot.origin[2] - 4, 0)
            xaxis[j] = {pt, label} -- 对象加入x轴集合
        end
        plot.axes[1] = xaxis

        for i = 1, #plot.axes[1] do -- 根据x轴分值
            local ub = plot.xvalue[i] -- 本次循环最大值
            -- print("循环", i, "ub=", ub) -- for debug

            local value = 0
            for j = #barData, 1, -1 do
                if barData[j] <= ub then
                    value = value + 1
                    table.remove(barData, j)
                end
            end
            plot.barValue[i] = value -- 录入值
        end
        local ymax = math.max(table.unpack(plot.barValue))
        plot.range[4] = math.max(ymax, plot.range[4])

        -- Y坐标刻度
        local yaxis = {} -- y坐标轴对象，其中元素为{point，label}
        for i = 1, (plot.range[4] - plot.range[3]) / plot.scale[2] do -- 第几个刻度
            local ypt = plot.origin[2] + i * plot.size[2] / (plot.range[4] - plot.range[3]) * plot.scale[2] -- Y刻度位置
            local pt = scene.addobj("points", {
                vertices = {plot.origin[1], ypt, 0},
                size = 5
            }) -- 刻度点
            local label = scene.addobj("label", {
                text = plot.fdisp(plot.range[3] + i * plot.scale[2]),
                size = 4
            }) -- 刻度标签
            label:setpos(plot.origin[1] - 4, ypt, 0)
            yaxis[i] = {pt, label}
        end
        plot.axes[2] = yaxis

        -- 绘制数据
        local xunit = plot.size[1] / (plot.range[2] - plot.range[1]) * #plot.axes[1] -- x轴分度值
        local yunit = plot.size[2] / (plot.range[4] - plot.range[3]) -- y轴分度值

        -- 根据数值绘制直方图
        for i = 1, #plot.axes[1] do
            -- 绘图
            local xl = plot.origin[1] + (i - 1) * plot.size[1] / (plot.range[2] - plot.range[1]) * plot.scale[1]
            local xr = plot.origin[1] + i * plot.size[1] / (plot.range[2] - plot.range[1]) * plot.scale[1]
            local yb, yt = plot.origin[2], plot.origin[2] + plot.barValue[i] * yunit
            local bar = scene.addobj(barShape, {
                vertices = {xl, yb, 0, xr, yb, 0, xr, yt, 0, xl, yt, 0, xl, yb, 0}
            })
            local label = scene.addobj("label", {
                text = plot.fdisp(plot.barValue[i]),
                size = 4
            })
            label:setpos((xl + xr) / 2, yt + 2, 0)
            plot.bars[i] = {bar, label}
        end
    end

    function plot:draw() --初始化绘制
        -- 坐标轴对象
        plot.coord = scene.addobj("polyline", {
            vertices = {plot.origin[1] + plot.size[1], plot.origin[2], 0, plot.origin[1], plot.origin[2], 0,
                        plot.origin[1], plot.origin[2] + plot.size[2], 0}
        })
        -- 坐标轴标题
        if plot.axislabel~=nil then
            plot.axislabel[1] = scene.addobj("label", {
                text = plot.axislabel[1],
                size = 4
            })
            plot.axislabel[1]:setpos(plot.origin[1] + plot.size[1], plot.origin[2] - 8, 0)
            plot.axislabel[2] = scene.addobj("label", {
                text = plot.axislabel[2],
                size = 4,
            })
            plot.axislabel[2]:setpos(plot.origin[1]-4, plot.origin[2] + plot.size[2]+6, 0)
            plot.axislabel[2]:setrot(0,0,1)
        end
    end

    plot:draw()
    plot:refresh()
    scene.render()
    return plot
end
```

### 子图代码
`Subplot`

```lua
scene.setenv({camtype = "ortho", grid="plane"})

function Subplot(row, col, ...)
    local subplot = {
        span = 10,
        diag = {-80, -70, 80, 70},
        originpt = {}, --存放各行列点坐标
        psize = {} --子图大小
    }
    subplot.row, subplot.col = row, col

    -- 导入参数和fallback
    if ... ~= nil then
        for k, v in pairs(...) do
            subplot[k] = v
        end
    end
    
    function subplot:refresh()
        -- 计算参数
        subplot.psize = {
            (subplot.diag[3]-subplot.diag[1] - (subplot.col-1)*subplot.span)/subplot.col,
            (subplot.diag[4]-subplot.diag[2] - (subplot.row-1)*subplot.span)/subplot.row
        }
        local gwidth, gheight = subplot.psize[1]+subplot.span, subplot.psize[2]+subplot.span
    
        -- 重新计算originpt
        subplot.originpt = {}
        for i = 1, subplot.row do
            subplot.originpt[i]={}
            for j = 1, subplot.col do
                -- print("i=",i,",j=",j)
                -- print("subplot diag:",subplot.diag[1],",",subplot.diag[2])
                -- print("gheight=",gheight)
                subplot.originpt[i][j] = {subplot.diag[1]+(j-1)*gwidth, subplot.diag[2]+(i-1)*gheight}
            end
        end
    end
    
    subplot:refresh()
    return subplot
end
```