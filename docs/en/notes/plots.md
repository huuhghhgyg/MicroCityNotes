# Generic Drawing Code
This section provides some pre-written drawing objects, which are convenient for direct use when visualizing data.

::: info
All open source code on this page is licensed under the MIT license and can be used freely. However, please retain the copyright information when publicly distributing.
:::

## Histogram
A histogram is generally used to display the frequency or frequency distribution of various data values in a data set. It divides the data into several intervals (or "bins") according to a certain interval and then plots the frequency (or frequency) of each interval as a bar chart on the y-axis to reflect the distribution of the data.

Here is an example of a histogram drawn using the histogram object I wrapped.

::: center
![Histogram Example](../../images/note/Histogram.png =500x)
:::

### Importing the Histogram
First, import the histogram code. There are currently two options:
1. **Download the code file and import it (recommended)**: [Download the histogram code file](#Code file download) `Histogram.lua` and import it into MicroCityWeb. Then, reference the file to use it. The code reference is as follows:
```lua
require("Histogram") --Reference the histogram
```

2. **Copy the code**: Copy the code from the `Histogram.lua` file directly into your code. The code is shown [**below**](#Histogram Code).

### Creating a Histogram Object
Create a histogram object.
```lua
local plot = Histogram(list) -- list is the data set
```

You can also set the properties of the graph when creating the object.

```lua
local plot = Histogram(list, {range={40,90,0,100}, scale={10, 50}, fdisp=function(x) return (x/n*100).."%" end})
```

Setting the properties is not necessary and can be done as needed. In this case, only the `range`, `scale`, and `fdisp` properties are set.

### Setting Histogram Properties
The above example provides a simple demonstration of setting histogram properties. According to the code, more properties can be set. See the table below for details:

|Property|Function|Example|
|---|---|---|
|`origin`|Set the origin of the graph (bottom-left point)|`origin = {-50, -50}`, set the origin of the graph at position (-50,-50)|
|`size`|Set the length of the x and y axes of the graph|`size = {100, 100}`, set the length of the x and y axes of the graph to 100 each|
|`scale`|Set the graduations of the x and y axes|`scale = {3, 2}`, set the graduations of the x and y axes of the graph to 3 and 2 respectively|
|`axislabel`|Set the titles of the x and y axes|`axislabel = {"x", "y"}`, set the titles of the x and y axes of the graph to "x" and "y" respectively|
|`range`|Set the display range of the x and y axes|`range = {0, 10, 0, 20}`, set the x-axis range of the graph to [0,10] and the y-axis range to [0,20]|
|`filled`|Set whether to fill the bar chart|`filled = false`, set the bar chart to unfilled. The default style is filled|
|`fdisp`|The display function for data labels, which defaults to the quantity. When setting the display function for data labels, it will also affect the display of y-axis tick marks.|`fdisp = function(v) return (v/n*100).."%" end`, change the data labels to display in proportion (assuming n is the sample size)|

### Advanced Usage of Histograms
Dynamically refresh the data plot.
1. Modify the data in the graph. Here, we use adding data to the graph as an example. Let's assume `rnd` is the data to be added. You can also directly modify the value of `plot.data`.
```lua
table.insert(plot.data, rnd)
```

2. Refresh the graph.
```lua
plot:refresh()
```

### Example
#### Basic Usage Example: Drawing a Poisson Distribution
```lua
require("Histogram") --Reference the histogram

local seed = math.randomseed(1, {
    distribution = "poisson",
    mu = "3"
})
local list = {seed:random()}


--Static drawing
for i = #list, 400 do
    table.insert(list, seed:random())
end

local histplot = Histogram(list, {
    range = {0, 10, 0, 50},
    scale = {1, 5}
})
scene.render()
```

#### Advanced Usage Example: Dynamically Refreshing Plot of the Poisson Distribution
This is an example of plotting the Poisson distribution and dynamically refreshing the data plot. It is assumed that the `Histogram` object has been imported and the scene is set for 2D display.

```lua
require("Histogram") -- Import the histogram

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

-- Dynamic drawing
local count = 1
while count < 1000 do
    local rnd = seed:random()
    table.insert(histplot.data, rnd)

    histplot:refresh()
    count = count + 1
    scene.render()
end
```

## Subplots
Subplots are a way to position and size multiple plots within a single interface. The name is borrowed from MATLAB.

::: center
![Subplots](../../images/note/Subplot_Vertical.png =500x)
:::

### Importing Subplots
First, import the code for subplots. Like histograms, there are two options for importing:
1. **Download the code file and import (recommended)**: [Download the subplot code file](#code-file-download), import the `Subplot.lua` file in MicroCityWeb, and then use the code. Use the following code to import:
   ```lua
   require("Subplot") -- Import the subplot code
   ```
2. **Copy the code**: Copy the code from the `Subplot.lua` file directly into your code. In this case, there is no need to import the code. See the code [**below**](#subplot-code).

### Creating Subplot Objects
When creating a subplot, you must specify the number of rows and columns. The number of rows and columns determines the number of subplots.
```lua
local subplot = Subplot(rows, cols)
```

You can also set additional properties to define the position and size of the subplots. Here is an example of setting the position and size of the subplots when creating them:
```lua
local subplot = Subplot(rows, cols, {span=10, diag={-80, -70, 80, 70}})
```

### Setting Subplot Properties
Here, we will provide a detailed description of the properties of subplots. Setting these properties is optional and can be done as needed.
|Property|Description|Example|
|:---:|---|---|
|`span`|Sets the spacing between subplots|`span=10`, sets the spacing between subplots to 10 in all directions|
|`diag`|Sets the position and size of a subplot by specifying the coordinates of the two diagonal points|`diag = {-80, -70, 80, 70}`, sets the diagonal range of the subplot from coordinates `(-80,-70)` to `(80,70)`|

### Reading Subplot Values
After creating a subplot with properties, or modifying the properties and refreshing, you can read the values of the subplots, including the origin position and size of each subplot, using the following attributes.

::: note
Here, it is assumed that the subplot object is stored in the `subplot` variable after creation.
:::

|Attribute|Meaning|Example|
|:---:|---|---|
|`originpt`|The origin position of each subplot in the Subplot object|The origin position of the subplot in the `i`-th row and `j`-th column can be obtained by `subplot.originpt[i][j][1]` and `subplot.originpt[i][j][2]`|
|`psize`|The size of each subplot in the Subplot object|The width and height of the subplot in the `subplot` can be obtained by `subplot.psize[1]` and `subplot.psize[2]`.(assuming all subplots have the same size)|

### Example
This is an example of drawing the range of subplots. Assume that the `Subplot` object has been imported and the scene has been set to 2D display.

Here, the display range of each subplot in a 2x3 subplot is drawn as a rectangle. The range of each subplot is represented by four gray points, and the position of each subplot is represented by a blue rectangle.

```lua
require("Subplot") -- import the Subplot library

local subplot = Subplot(2, 3, {span = 10})

-- Draw the boundary points of the Subplot object
local lb = scene.addobj("points",{size = 10, vertices={subplot.diag[1],subplot.diag[2],0}})
local lt = scene.addobj("points",{size = 10, vertices={subplot.diag[1],subplot.diag[4],0}})
local rb = scene.addobj("points",{size = 10, vertices={subplot.diag[3],subplot.diag[4],0}})
local rt = scene.addobj("points",{size = 10, vertices={subplot.diag[3],subplot.diag[2],0}})

-- Draw the range of each subplot
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

## Code
You can remove the `scene.setenv` code at the beginning depending on the combination of your code. The `scene.render()` in the code is used to refresh the image during dynamic drawing.

### Code File Download
A list of code files can be found in [ModelResource/libs](https://github.com/huuhghhgyg/ModelResource/tree/main/libs)

|Name|Link|
|---|---|
|Histogram|[ModelResource/libs/Histogram.lua](https://github.com/huuhghhgyg/ModelResource/blob/main/libs/Histogram.lua)|
|Subplot|[ModelResource/libs/Subplot.lua](https://github.com/huuhghhgyg/ModelResource/blob/main/libs/Subplot.lua)|

### Histogram Code
`Histogram`
```lua
-- Initial scene settings
local s = scene.setenv({camtype = "ortho"})

-- Returns a histogram object
function Histogram(data, ...)
    local plot = {
        -- Default value settings
        origin = {-50, -50}, -- Coordinate origin coordinates
        size = {100, 100}, -- Coordinate axis length
        scale = {3, 2}, -- Coordinate axis scale values
        range = {0, 10, 0, 20}, -- xy-axis range
        axislabel = {"x", "y"},
        filled = true, -- Whether to fill
        fdisp = function(v) -- Data label display
            return v
        end,
    }
    -- Import parameters and fallback
    if ... ~= nil then
        for k, v in pairs(...) do
            plot[k] = v
        end
    end
    
    local barShape = "polygon"
    if plot.filled == false then barShape = "polyline" end

    -- Initialization
    plot.axes = {} -- Coordinate axes
    plot.originlabel = {} -- The zero point may have dual coordinates
    plot.bars = {} -- Data bars
    plot.xvalue = {} -- x-axis tick values (excluding the minimum value)
    plot.data = data

    function plot:deldata() -- Delete data (private)
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

    function plot:refresh() -- Called when drawing repeatedly (public)
        plot:deldata()
```

-- Calculate coordinate scale parameters
local xmax = math.max(math.max(table.unpack(plot.data)), plot.range[2])
local xmin = math.min(math.min(table.unpack(plot.data)), plot.range[1])
local valueRange = xmax - xmin
plot.range[1], plot.range[2] = xmin, xmax

-- Statistical drawing values
local barData = {}
for i = 1, #data do -- Deep copy
    table.insert(barData, data[i])
end
plot.barValue = {}

-- Draw zero point
plot.zero = scene.addobj("points", {
    vertices = {plot.origin[1], plot.origin[2], 0},
    size = 10
})
if plot.range[1] == plot.range[3] then -- Both are 0
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

 -- X-axis Scale
        local xaxis = {} -- x-axis object, with elements as {point, label}
        for j = 1, (plot.range[2] - plot.range[1]) / plot.scale[1] do -- index of the scale
            local xpt = plot.origin[1] + j * plot.size[1] / (plot.range[2] - plot.range[1]) * plot.scale[1] -- X-axis scale position
            local pt = scene.addobj("points", {
                vertices = {xpt, plot.origin[2], 0},
                size = 5
            }) -- scale point
            local label = scene.addobj("label", {
                text = string.format("%.1f", plot.range[1] + j * plot.scale[1]),
                size = 4
            }) -- scale label
            table.insert(plot.xvalue, plot.range[1] + j * plot.scale[1]) -- current x-axis value
            label:setpos(xpt, plot.origin[2] - 4, 0)
            xaxis[j] = {pt, label} -- add object to x-axis collection
        end
        plot.axes[1] = xaxis

        for i = 1, #plot.axes[1] do -- based on x-axis score
            local ub = plot.xvalue[i] -- current loop maximum value
            -- print("Loop", i, "ub=", ub) -- for debugging

            local value = 0
            for j = #barData, 1, -1 do
                if barData[j] <= ub then
                    value = value + 1
                    table.remove(barData, j)
                end
            end
            plot.barValue[i] = value -- record value
        end
        local ymax = math.max(table.unpack(plot.barValue))
        plot.range[4] = math.max(ymax, plot.range[4])

```lua
-- Y-axis scale
local yaxis = {} -- y-axis objects, each element is {point, label}
for i = 1, (plot.range[4] - plot.range[3]) / plot.scale[2] do -- index of each scale
    local ypt = plot.origin[2] + i * plot.size[2] / (plot.range[4] - plot.range[3]) * plot.scale[2] -- Y-scale position
    local pt = scene.addobj("points", {
        vertices = {plot.origin[1], ypt, 0},
        size = 5
    }) -- scale point
    local label = scene.addobj("label", {
        text = plot.fdisp(plot.range[3] + i * plot.scale[2]),
        size = 4
    }) -- scale label
    label:setpos(plot.origin[1] - 4, ypt, 0)
    yaxis[i] = {pt, label}
end
plot.axes[2] = yaxis

-- Draw data
local xunit = plot.size[1] / (plot.range[2] - plot.range[1]) * #plot.axes[1] -- x-axis division value
local yunit = plot.size[2] / (plot.range[4] - plot.range[3]) -- y-axis division value

-- Draw histogram based on the values
for i = 1, #plot.axes[1] do
    -- Drawing
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
```

```lua
function plot:draw() -- Draw initialization
    -- Coordinate axis object
    plot.coord = scene.addobj("polyline", {
        vertices = {plot.origin[1] + plot.size[1], plot.origin[2], 0, plot.origin[1], plot.origin[2], 0,
                    plot.origin[1], plot.origin[2] + plot.size[2], 0}
    })
    -- Coordinate axis title
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

### Subplot code
`Subplot`

```lua
-- Attribute parameters
-- local diag = {-80, -70, 80, 70} -- lbx,lby,rtx,rty
-- local span = 10
-- local row, col = 2, 2
function Subplot(row, col, ...)
    local subplot = {
        span = 10,
        diag = {-80, -70, 80, 70},
        originpt = {}, -- Store coordinates of each row and column
        psize = {} -- Subplot size
    }
    subplot.row, subplot.col = row, col

```lua
-- Import parameters and fallback
if ... ~= nil then
    for k, v in pairs(...) do
        subplot[k] = v
    end
end

function subplot:refresh()
    -- Calculate parameters
    subplot.psize = {
        (subplot.diag[3]-subplot.diag[1] - (subplot.col-1)*subplot.span)/subplot.col,
        (subplot.diag[4]-subplot.diag[2] - (subplot.row-1)*subplot.span)/subplot.row
    }
    local gwidth, gheight = subplot.psize[1]+subplot.span, subplot.psize[2]+subplot.span

    -- Recalculate originpt
    subplot.originpt = {}
    for i = 1, subplot.row do
        subplot.originpt[i]={}
        for j = 1, subplot.col do
            subplot.originpt[i][j] = {subplot.diag[1]+(j-1)*gwidth, subplot.diag[2]+(i-1)*gheight}
        end
    end
end

subplot:refresh()
return subplot
end
```


> This post is translated using ChatGPT, please [**feedback**](https://github.com/huuhghhgyg/MicroCityNotes/issues/new) if any omissions.