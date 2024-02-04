# Tools
Tools that may come in handy

## Third-party Tools
Including software, websites, etc.

- [MapShaper](https://mapshaper.org/) Map editor. It can edit `.geojson` files and export them as `.shp` files.
- [Three.js Editor](https://threejs.org/editor/) Online 3D object editor for Three.js.

## External Functions
Some external functions for MicroCity Web

### Instructions

It is recommended to import functions online to ensure the use of the latest version of functions. You can also choose to download them locally and then upload for use.

Online import example
```lua
print('Downloading dependency library to virtual disk...')
os.upload('https://www.zhhuu.top/ModelResource/libs/file_name.lua')
print('Download complete')
```

#### Importing functions

If the function file name is `abc.lua`, importing the function completes the process.
```lua:no-line-numbers
require("abc")
```

### Function List

Mostly homemade functions.

Since the files are all hosted on GitHub Pages, online importing might be slower. You can opt to download them locally and then upload for use.

The list of code files provided on this site is shown in [ModelResource/libs](https://github.com/huuhghhgyg/ModelResource/tree/main/libs), and the list below are all files from the ModelResource repository.

| Name      | Description                | Link                                                                                                         |
| --------- | -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Histogram | Used to draw histograms     | [ModelResource/libs/Histogram.lua](https://github.com/huuhghgyg/ModelResource/blob/main/libs/Histogram.lua)  |
| Subplot   | Draw subplots when drawing multiple graphs | [ModelResource/libs/Subplot.lua](https://github.com/huuhghgyg/ModelResource/blob/main/libs/Subplot.lua)     |
| tablestr  | Convert table to string     | [ModelResource/libs/tablestr.lua](https://github.com/huuhghgyg/ModelResource/blob/main/libs/tablestr.lua)   |
| setpoint  | Set display points at specified coordinates | [ModelResource/libs/setpoint.lua](https://github.com/huuhghgyg/ModelResource/blob/main/libs/setpoint.lua)   |

🔨 Continuously updating...

> This post is translated using ChatGPT, please [**feedback**](https://github.com/huuhghhgyg/MicroCityNotes/issues/new) if any omissions.