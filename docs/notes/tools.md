# 有关工具
可能能够用到的工具

## 第三方工具
包括软件、网站等

- [MapShaper](https://mapshaper.org/) 地图编辑器。可以编辑`.geojson`文件并导出为`.shp`文件
- [Three.js Editor](https://threejs.org/editor/) Three.js的在线3D对象编辑器。

## 外部函数
适用于 MicroCity Web 的一些外部函数

### 使用方法

推荐在线导入函数，这样可以保证使用的是最新版本的函数。也可以选择下载到本地再上传使用。

在线导入示例
```lua
print('正在下载依赖库到虚拟磁盘...')
os.upload('https://www.zhhuu.top/ModelResource/libs/文件名.lua')
print('下载完成')
```

#### 导入函数

如果函数文件名为 `abc.lua`，则引用函数时使用 `require("abc")` 即可完成导入。

### 函数列表

基本上都是一些自制的函数。

由于文件都放在 GitHub Page 上，在线导入可能速度较慢。可以选择下载到本地再上传使用。

本站提供的代码文件列表见 [ModelResource/libs](https://github.com/huuhghhgyg/ModelResource/tree/main/libs)，下方列表都为 ModelResource 仓库中的文件。

| 名称        | 说明                       | 链接                                                                                                             |
| ----------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Histogram   | 用于绘制直方图             | [ModelResource/libs/Histogram.lua](https://github.com/huuhghhgyg/ModelResource/blob/main/libs/Histogram.lua)     |
| Subplot     | 绘制多各图的情况下绘制子图 | [ModelResource/libs/Subplot.lua](https://github.com/huuhghhgyg/ModelResource/blob/main/libs/Subplot.lua)         |
| TableString | 将table转为字符串      | [ModelResource/libs/TableString.lua](https://github.com/huuhghhgyg/ModelResource/blob/main/libs/TableString.lua) |


🔨 持续更新...