# General Drawing Code
This section provides some well-written drawing objects that can be directly used when visualizing data.

::: info
All open source code on this page follows the MIT license and can be used freely. However, please retain the copyright information when publicly released.
:::

## Importing Library Files
First, let's introduce how to use library files. "Library files" refer to pre-packaged drawing functions, and there are three methods to import files into MicroCity Web for use.

### Method 1: Code-Based Import
👍 **It is recommended to use this method to import library files, so that you can ensure that the latest version of the library is used.**

Taking the import of `Histogram` and `Subplot` as an example, the code to import the library files is as follows:

```lua
print('Downloading dependencies to the virtual disk...')
-- Download the histogram code to the virtual disk
os.upload('https://www.zhhuu.top/ModelResource/libs/Histogram.lua')
-- Download the subplot code to the virtual disk
os.upload('https://www.zhhuu.top/ModelResource/libs/Subplot.lua')
print('Download completed')
```

### Method 2: Download Code Files and Import
Go to the [Code File Download](#code-file-download) section to download the required library files, then import the file into MicroCity Web, and finally reference the file to use it.

Taking the import of a histogram as an example, the code to import is as follows:
```lua
require("Histogram") -- Import the histogram
```

### Method 3: Copying the Code
Unless you need to modify the function's functionality or logic, it is not recommended to do so. The code for each function is available in the [Code](#code) section.

## Histogram
A histogram is generally used to display the frequency or frequency distribution of each data value in a dataset.

It divides the data into several intervals (or "bins") with a certain interval, then draws a bar chart of the frequency (or frequency) on the vertical axis for each interval, reflecting the distribution of the data.

Here is an example of a histogram drawn using a histogram object (function).

::: center
![Histogram Example](../../images/note/Histogram.png =500x)
:::

### Importing the Histogram
First, import the code for the histogram. For specific import methods, please refer to [Importing Library Files](#importing-library-files).

The filename for the histogram is `Histogram.lua`, and the code to import the histogram is:
```lua
require("Histogram") -- Import the histogram
```

### Creating a Histogram Object
Create a histogram object:
```lua
local plot = Histogram(list) -- list represents the dataset
```

You can also set the properties of the graph when creating the object.

```lua
local plot = Histogram(list, {range={40,90,0,100}, scale={10, 50}, fdisp=function(x) return (x/n*100).."%" end})
```

Setting the properties is not necessary and can be done based on your needs. In this example, only the `range`, `scale`, and `fdisp` properties are set.

### Setting Histogram Properties
The example provided above demonstrates setting histogram properties. Based on the code, more properties can be set. Please refer to the table below for more details:

| Attribute Value | Function | Example |
| --- | --- | --- |
| `origin` | Set the origin point of the graph (bottom left corner) | `origin = {-50, -50}`, sets the origin point of the graph at the position (-50, -50) |
| `size` | Set the length of the graph's x and y axes, which can be understood as the size of the graph | `size = {100, 100}`, sets the x and y axes length of the graph to 100 |
| `scale` | Set the scale of the x and y coordinate axes | `scale = {3, 2}`, sets the scale of the x and y axes of the graph to 3 and 2 respectively |
| `axislabel` | Set the labels of the x and y axes | `axislabel = {"x", "y"}`, sets the labels of the x and y axes of the graph to "x" and "y" respectively |
| `range` | Set the display range of the x and y coordinate axes | `range = {0, 10, 0, 20}`, sets the range of the x axis to [0,10] and the y axis to [0,20] |
| `filled` | Set whether to fill the bar chart | `filled = false`, sets the bar chart to hollow. The default style is filled |
| `fdisp` | Set the display function of the data label, which returns the quantity by default. Setting the display function of the data label will also affect the display of the y-axis scale | `fdisp = function(v) return (v/n*100).."%" end`, sets the data label to be displayed as a percentage (assuming n is the sample size) |

### Advanced Usage of Histogram

📈 **Dynamically Refreshing Data Graph**

1. Modify the data in the graph. Here we take adding data to the graph as an example, where `rnd` is the added data. The value of `plot.data` can also be modified directly.
```lua
table.insert(plot.data, rnd)
```

2. Refresh the graph
```lua
plot:refresh()
```

### Example
#### Basic Usage Example: Drawing a Poisson Distribution
```lua
require("Histogram") -- Import the Histogram library

local seed = math.randomseed(1, {
    distribution = "poisson",
    mu = "3"
})
local list = {seed:random()}

-- Static drawing
for i = #list, 400 do
    table.insert(list, seed:random())
end

local histplot = Histogram(list, {
    range = {0, 10, 0, 50},
    scale = {1, 5}
})
scene.render()
```

#### Advanced Usage Example: Dynamically Refreshing the Poisson Distribution Graph
This is an example of drawing a Poisson distribution and dynamically refreshing the data graph. Assuming that the `Histogram` object has been imported and the scene is set to display in 2D.

```lua
require("Histogram") -- Import the Histogram library

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

-- Dynamically drawing
local count = 1
while count < 1000 and scene.render() do
    local rnd = seed:random()
    table.insert(histplot.data, rnd)

    histplot:refresh()
    count = count + 1
end
scene.render()
```

## Subplot
A Subplot is used to solve the positioning and sizing issues when placing multiple graphs in a single interface. The name is borrowed from MATLAB.

::: center
![Subplot](../../images/note/Subplot_Vertical.png =500x)
:::

### Importing Subplots
First, import the code for subplots. The specific import method can be found in [Importing Library Files](#importing-library-files).

The filename of the subplot is `Subplot.lua`, and it is referenced as follows:
```lua
require("Subplot") --referencing the subplot
```

### Subplot Attribute Settings
Here we will provide a detailed explanation of the attributes of the subplot. Setting the attributes is not mandatory and can be done based on your needs.
|Attribute|Function|Example|
|:---:|---|---|
|`span`|Sets the spacing between subplots|`span=10`, sets the spacing between subplots in all four directions to 10|
|`diag`|Sets the position and size of the subplot by specifying the coordinates of the two diagonal points|`diag = {-80, -70, 80, 70}`, sets the diagonal range of the subplot from coordinates `(-80,-70)` to `(80,70)`|

### Reading Subplot Values
After creating the subplot with the specified attributes, or modifying the subplot attributes and refreshing, you can read the calculated values of the subplot to obtain the original positions and sizes of each subplot in the `Subplot` module. You can mainly read these values using the following attributes.

::: note
Here, it is assumed that the subplot object is stored in the `subplot` variable after creating it.
:::

|Calculated Attribute|Meaning|Example|
|:---:|---|---|
|`originpt`|The original position of each subplot in the `Subplot` object|You can obtain the original position of the subplot in the `i`th row and `j`th column using `subplot.originpt[i][j][1]` and `subplot.originpt[i][j][2]`|
|`psize`|The size of each subplot in the `Subplot` object|You can obtain the width and height of the subplot in the `subplot` using `subplot.psize[1]` and `subplot.psize[2]` respectively. (Assuming that all subplots have the same size)|

### Example
Here is an example of drawing the display range of the subplots. It is assumed that the `Subplot` module has already been imported, and the scene has been set to display in 2D.

In this example, the display range of each subplot in a 2-row, 3-column subplot is drawn as a rectangle. The range of each subplot is represented by four gray points, and the position of each subplot is represented by a blue rectangle.

```lua
require("Subplot") --import the subplot code

local subplot = Subplot(2, 3, {span = 10})

-- Drawing the boundary points of the Subplot object
local lb = scene.addobj("points",{size = 10, vertices={subplot.diag[1],subplot.diag[2],0}})
local lt = scene.addobj("points",{size = 10, vertices={subplot.diag[1],subplot.diag[4],0}})
local rb = scene.addobj("points",{size = 10, vertices={subplot.diag[3],subplot.diag[4],0}})
local rt = scene.addobj("points",{size = 10, vertices={subplot.diag[3],subplot.diag[2],0}})
```

-- Drawing Range
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

## Code
You can remove the `scene.setenv` code at the beginning of the script, depending on the combination of your code. The `scene.render()` in the code is to refresh the image when dynamically drawing.

### Code File Download
Please find the list of code files in [ModelResource/libs](https://github.com/huuhghhgyg/ModelResource/tree/main/libs)

|Name|Link|
|---|---|
|Histogram|[ModelResource/libs/Histogram.lua](https://github.com/huuhghhgyg/ModelResource/blob/main/libs/Histogram.lua)|
|Subplot|[ModelResource/libs/Subplot.lua](https://github.com/huuhghhgyg/ModelResource/blob/main/libs/Subplot.lua)|

> 🔗The links in the table above point to the GitHub repository. You can view the code directly on GitHub or download the files to your local machine for use.

> This post is translated using ChatGPT, please [**feedback**](https://github.com/huuhghhgyg/MicroCityNotes/issues/new) if any omissions.