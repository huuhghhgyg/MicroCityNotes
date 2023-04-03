import{u as A}from"./app-64937efd.js";import{r as m,h as j,A as D,c as _,U as I,u as R,_ as N,p as u,q as p,a0 as E,af as O,S as f,w as y,a5 as x,P as M,Q as k,R as P,v as S,ag as z}from"./framework-ce30d885.js";const F=[{path:"/",title:"首页",pathLocale:"/",contents:[{header:"开始使用MicroCityWeb",slug:"开始使用microcityweb",content:"打开MicroCityWeb，默认加载方块旋转的示例代码。 点击运行按钮运行代码 程序运行，看到右侧视图中方块旋转。 如果想要深入了解MicroCityWeb的用法和使用技巧，可以参阅本站提供的 学习笔记"},{header:"开始使用MicroCity",slug:"开始使用microcity",content:'转到MicroCity的文档仓库下载 MicroCity的最新版本 打开 ScriptEditor 并输入: Print("hello, world!") 将脚本另存为 test.mcs 并将其拖入 MicroCity 在程序主界面左侧转到 Modules 标签页，打开 test ，双击其中的 main ，执行刚刚编写的脚本。 程序界面下方的 Messages 栏中会输出执行脚本的信息。 更多MicroCity的使用方法可以参考本站搬运自GitHub的文档：MicroCity文档，也可以参考 MicroCtiy 在GitHub上的文档。'},{header:"MicroCityNotes 仓库",slug:"microcitynotes-仓库",content:"如果发现文档或笔记有问题，欢迎 Pull Request 或者提供 Issues 让它变得更完善😋"}]},{path:"/docs/1.1_what_microcity_can_do.html",title:"1.1 MicroCity能做什么",pathLocale:"/",contents:[{header:"1.1 MicroCity能做什么",slug:"_1-1-microcity能做什么",content:"MicroCity is designed to be a handy spatial planning tool, which is portable, compact and fast."},{header:"A Modeling Framework",slug:"a-modeling-framework",content:"Based on GIS, Networks and Mixed Integer Programming libraries, MicroCity can be used as a modeling framework to solve transporation problems, such as City Logistics and Shipping Planning:"},{header:"A Simulation Platform",slug:"a-simulation-platform",content:"Based on 3D CGI and Discrete Event Simulation Engine, MicroCity can be used as a simulation platform to evaluate logistic scenarios, such as Automated Warehouses and Container Terminals:"},{header:"Customized by Scriptable Modules",slug:"customized-by-scriptable-modules",content:"MicroCity can extend its functionality with modules which can be inherited from SAGA or scripted and debugged in Script Editor: Currently, MicroCity is mainly used in teaching and research. It can be freely distributed."}]},{path:"/docs/2.1_showing_a_world_map.html",title:"2.1 展示世界地图",pathLocale:"/",contents:[{header:"2.1 展示世界地图",slug:"_2-1-展示世界地图",content:"This tutorial will guide you in manipulating and visualizing GIS data in MicroCity."},{header:"Loading Data and Creating a Map",slug:"loading-data-and-creating-a-map",content:"Download the countries.shp (ArcGIS shapefile) and the countries.dbf (dBase file) in a same folder. Open MicroCity and load or drag the countries.shp into MicroCity and select Data Tab in Workspace panel. Double click Data->Shapes->Polygon->01. countries in Workspace panel."},{header:"Visualizing Coutries' Properties",slug:"visualizing-coutries-properties",content:"Right click 01. countries in the Workspace panel. Click Attributes->Table->Show in the popup menu. In the Settings Panel, find the Colors->Type option and select Graduated Color. In its sub-option Attribute, select POP_EST which is population property of countries. In the Setting Panel, find the Chart option and click the ... button. In the popup dialog, select pie in Chart Type option and select GDP_MD_EST in Attribute (Size) option and select EXPORT and IMPORT checkboxs in Fields option and click Okay button."},{header:"Editing Shapes",slug:"editing-shapes",content:"Select Action button at toolbar. Left click some country and right click it and select Edit Selected Shape in the popup menu. Then the shape will be in editing mode. You can change its polygon points and finish your editing by right click and select Edit Selected Shape again."}]},{path:"/docs/2.2_searching_for_countries.html",title:"2.2 寻找国家",pathLocale:"/",contents:[{header:"2.2 寻找国家",slug:"_2-2-寻找国家",content:"This tutorial will guide you in coding with MicroCity Script to manipulate GIS data. You have to complete 2.1 to proceed."},{header:"GIS Data Structure",slug:"gis-data-structure",content:"In MicroCity, GIS data consists of three types of Shapes: Point, Polyline and Polygon, each of which can be visualized as a Map Layer. In a layer, a Shape object consists of one or more Parts, and every Part consists of one or more Points. A Shape object is also associated to a record in the Attributes Table. You can also edit the shape or its attributes (see 3.2). If you want perform a complex editing or handle a batch of shapes, you can use MicroCity Script, in which many built-in functions can be used."},{header:"Making a Query",slug:"making-a-query",content:`Suppose we want to find countries, each of which has a population of more than 100 million and is entirely in the northern hemisphere. So we need to check every point's coordinate in each shape and the population attribute of the shape. Open ScriptEditor and type following codes:
local Countries = Open("countries.shp") --Try to open the shapes layer
for i = 1, GetRecCount(Countries) do --Loop all the shape objects in the layer local country = GetShape(Countries, i) --Get the shape object of a country local north = true --Assume the country is in the northern hemisphere for j = 1, GetPartCount(country) do --Loop all of the parts in the shape for k = 1, GetPointCount(country, j) do --Loop all of the points in the shape part local x, y = GetPointXY(country, k, j) --Get coordinate of the point j if y < 0 then --If the latitude is less than 0 north = false --The north assumption is false end end end local pop = GetValue(country, "POP_EST") --Get the population property local name = GetValue(country, "NAME") --Get the country name if pop > 100000000 and north then --Check the two conditions Print(name, ": ", pop/100000000) --Print out the result end
end`},{header:"Running the Script",slug:"running-the-script",content:"Save the script to query.mcs and open it with MicroCity or drag it to MicroCity. Then you will find a query item appears in Modules Tab in Workspace panel. Double click the sub-item main. If a dialog pops up, select 01. countries and click Okay. The results will be shown in Messages panel."}]},{path:"/docs/3.1_ui_overview.html",title:"3.1 用户界面概览",pathLocale:"/",contents:[{header:"3.1 用户界面概览",slug:"_3-1-用户界面概览",content:"MicroCity provides a concise graphic windowed interface to facilitate the manipulation of data and modules."},{header:"The Main Window and Components",slug:"the-main-window-and-components",content:""},{header:"Supported Files",slug:"supported-files",content:"MicroCity can open ArcGIS shapefile (*.shp), Grids file (*.sgrd), dBase file (*.dbf), Tabular text file (*.csv, *.txt), Point clouds (*.spc), Image file (*.bmp, *.gif, *.jpg, *.png, *.tif, *.pcx) and MicroCity 3D Scene (*.m3d). These data files are maintained in the Data Tab of the Workspace Panel. Module libraries (*.dll, *.mcs) are maintained and executed through the Modules Tab of the Workspace Panel."},{header:"Project Management",slug:"project-management",content:"The information of opened data files, module libraries, settings and sub-windows can be saved or opened in a MicroCity Project (*.mprj) through the menu File->Project. The mprj file does not contain any file's data. For easy maintenance, files in a project should be put into the same folder or sub-folders of the mprj file."}]},{path:"/docs/3.2_vector_shapes.html",title:"3.2 矢量图",pathLocale:"/",contents:[{header:"3.2 矢量图",slug:"_3-2-矢量图",content:"MicroCity can open, create and edit ArcGIS shapefiles (*.shp) which are called Shapes and maintained in the Data Tab of the Workspace Panel. By using modules (see 3.7) other vector file formats, such like Scalable Vector Graphics (*.svg) and AutoCAD Drawing Exchange Format (*.dxf), can also be imported or exported."},{header:"Opening, Creating, Saving and Closing Shapes",slug:"opening-creating-saving-and-closing-shapes",content:"Users can click Load button or File->Shapes->Load menu item to open an ArcGIS shapefile (*.shp) as a Shapes. Creating a new Shapes can be done from menu File->Shapes->New and the pop-up dialog as shown below. Users can choose one shapes type from Point, Line and Polygon. The relationship between a ArcGIS shapefile (*.shp) and a same named dBase file (*.dbf) is also shown. Saving a Shapes can be done from the right click context menu Save or Save As. You can also close a Shapes from the menu and get a prompt dialog to save it."},{header:"Showing and Editing Shapes",slug:"showing-and-editing-shapes",content:"Double click a Shapes from the Data Tab will give you a map view (for maps and layers see 3.6). Toggle Action botton and right click a Shape in a Shapes layer and choose Edit Selected Shape then go to the Editing Mode. In this mode users can add/delete parts and add/delete points in a shape (for data structure of a shape see 2.2). The associated attributes table (*.dbf) of a Shapes can be accessed through right-clicking context menu Attributes->Table->Show (see the tutorial 2.1)."},{header:"Display Settings and Data Visualization",slug:"display-settings-and-data-visualization",content:"Users can change Shapes outline, fill, labels and other display settins from the Settings Panel. Some options can connect attribute data and give visualization functionalities (for example 2.1)."}]},{path:"/docs/3.3_raster_grids.html",title:"3.3 栅格图",pathLocale:"/",contents:[{header:"3.3 栅格图",slug:"_3-3-栅格图",content:"MicroCity can open, create and edit SAGA Grid (*.sgrd) which is called Grid and maintained in the Data Tab of the Workspace Panel. Image files (*.bmp, *.gif, *.jpg, *.png, *.tif, *.pcx) can be opened as Grid as well. By using modules (see 3.7) other raster file formats, such like ESRI Arc/Info Grid (*.adf) and Surfer Grid (*.grd), can also be imported or exported."},{header:"Opening, Creating, Saving and Closing Grids",slug:"opening-creating-saving-and-closing-grids",content:`Users can click Load button or File->Grid->Load menu item to open a Grid. Creating new Grid can be done from menu File->Grid->New and the pop-up dialog: The above right figure is the data structure and definitions of a Grid. A Grid starts from its bottom left corner which has coordinate (xMin, yMin), contains NX*NY Square Cells. Each cell has its own Integer Coordinate (X, Y), in the range of (0, 0) to (XMax, YMax).
Saving Grid can be done from the right click context menu Save or Save As. You can also close a Grid from the menu and get a prompt dialog to save it.`},{header:"Showing and Editing Grids",slug:"showing-and-editing-grids",content:"Double click a Grid from the Data Tab will give you a map view (for maps and layers see 3.6). Toggle Action botton and select a range of cells in a Grid. Then the value of these cells can be edited in the Attributes Tab of the Settings Panel."},{header:"Display Settings and 3D View",slug:"display-settings-and-3d-view",content:"Users can show cell values, change color and set transparency of a Grid by using Settings Panel. Using button can creat a 3D surface of a Grid in which cell values are translated to elevation (see 3.6)."}]},{path:"/docs/3.4_3d_scenes.html",title:"3.4 3D场景",pathLocale:"/",contents:[{header:"3.4 3D场景",slug:"_3-4-3d场景",content:"MicroCity 3D Scene (*.m3d) is a data file format to store 3D scenes' information. Popular 3D file formats including 3D Studio Max (*.3ds), Wavefront OBJ (*.obj) and Stereolithography (*.stl) can be loaded as objects in a scene (see below) but not be stored in the .m3d file."},{header:"Opening, Creating, Saving and Closing 3D Scenes",slug:"opening-creating-saving-and-closing-3d-scenes",content:"Users can click Load button or File->Scene->Load menu item to open a Scene. Creating new Scene can be done from menu File->Scene->New and fill the pop-up dialog as shown below. After pressing Okay button an item will appear in the Data Tab of the Workspace Panel. Then Scene can be saved or closed through right-click menu:"},{header:"Showing and Editing 3D Scenes",slug:"showing-and-editing-3d-scenes",content:"Double click a Scene from the Data tab will give you a scene view. Left-mouse-dragging in a scene veiw will rotate the camera and right-mouse-dragging will translate the camera. Double-left-clicking a scene view can select objects and Double-right-clicking a scene view can popup a context menu (shown below). One can add objects, load objects and set objects, etc.. Note that the Rotation in the coordinate system should obey Left-hand rule. The illustration of the coordinate system and an example of the rotation around y-axis is shown below: The coordinate used in the position and rotation of an object is relative to its parent object. By default, the parent of a new object is null."},{header:"Display Settings",slug:"display-settings",content:"Users can change the background color, reference grid or other display options of a Scene by using Settings Panel."}]},{path:"/docs/3.5_tables.html",title:"3.5 表格",pathLocale:"/",contents:[{header:"3.5 表格",slug:"_3-5-表格",content:"Tabular files including dBase files (*.dbf), Text file (*.txt) and Comma Separated Values (*.csv) can be opened as Table and saved with MicroCity."},{header:"Opening, Creating, Saving and Closing Tables",slug:"opening-creating-saving-and-closing-tables",content:"Users can click Load button or File->Table->Load menu item to open a tabular file. Creating a new Table can be done from menu File->Table->New and the pop-up dialog as shown below. Saving a Table can be done from the right click context menu Save or Save As."},{header:"Showing and Editing Tables",slug:"showing-and-editing-tables",content:`Double click a Table from the Data Tab will give you a table view. Altering a table's stucture can be done by right click the table's head. If you click "Add Field" then, a dialog which guide you (as shown below). If you want insert a record to the table, you can right click the left numbers of the table and select a context menu item.`}]},{path:"/docs/3.6_maps_and_layers.html",title:"3.6 地图和图层",pathLocale:"/",contents:[{header:"3.6 地图和图层",slug:"_3-6-地图和图层",content:"In MicroCity, Shapes and Grids can be showed in Maps. Each map may contains multiple layers and each layer is corresponding to a Shapes or a Grid."},{header:"Opening, Creating, Saving, Printing and Closing Maps",slug:"opening-creating-saving-printing-and-closing-maps",content:"Because Maps are based on Shapes and Grids, they can not be saved or opened independently, but can be saved or opened along with a MicroCity Project (*.mprj). Creating a Map is by double clicking a Shapes or Grid from the Data Tab of the Workspace Panel. A Map window contains four coordinate bars which can be used to locate objects (see below). A Map can also be printed or closed from the context menu of the Maps Tab of the Workspace Panel."},{header:"Adding, Moving, Hiding and Closing Layers in a Map",slug:"adding-moving-hiding-and-closing-layers-in-a-map",content:"A Map can have multiple Layers, each of them represents a data item. One can add a Layer to a Map by double clicking a Shapes or a Grid from the Data Tab. A lower layer can be obscured by upper layers. One can move a layer by dragging, hide a layer by double clicking and close a layer through the menu (as shown below)."},{header:"Controlling Map Views",slug:"controlling-map-views",content:`When a data item or a layer is selected, this layer is called the active layer. One can toggle the Action button to select and edit an object in the active layer. By toggling the Zoom or Pan botton, the map can zoomed in, zoomed out or panned. If one lose in a map, he can use the Zoom to Full Extent button to get a full view of the map. Other zoom controlling buttons can be used to facilitate the map browsing.
The Synchronise button can be used if you want compare difference between two or more maps. The Ruler button can be used to meassure distances. Note that, by default, the unit of the distances measured is kilometer under the coordinate system of Earth. One can change the coordinate system to Non-Earth from the Settings Panel of the Map, and get Cartesian distance without unit.
One can create a 3D surface map by clicking 3D button, which need a appropriately sized Grid (see 3.3).`}]},{path:"/docs/3.7_modules.html",title:"3.7 拓展模块",pathLocale:"/",contents:[{header:"3.7 拓展模块",slug:"_3-7-拓展模块",content:"The functionality of MicroCity can be extended by modules, one type of which is SAGA Module (*.dll). SAGA Modules contains many useful libraries for Shapes and Grids. Another type of Module is MicroCity Script (*.mcs), which can be edited and debugged with ScriptEditor (see 4.1)."},{header:"Loading, Closing and Executing Modules",slug:"loading-closing-and-executing-modules",content:"Modules can be loaded to MicroCity by clicking Load button or Modules->Load Module Library menu item. The Modules Tab of the Workspace Panel will display the loaded Libraries (each of which corresponding to a file) and their inside Modules . One can close or reload a Module Library from the context menu. Executing a moule has many ways: double clicking it, clicking the Execute button from the Settings Panel, or click the Execute context menu item. One can also Debug a MicroCity Script module by clicking the Debug context menu item, that needs the ScriptEditor running in the background. MicroCity can also capture runtime errors and pause the execution of modules."},{header:"Accelerating, Stopping the Execution of a Module",slug:"accelerating-stopping-the-execution-of-a-module",content:`MicroCity Script module is created with Lua language which is very fast. In some cases, if you want much more faster execution speed, you can click the Module Libraries in the Modules Tab of the Workspace Panel and switch the Script Running Mode in the Settings Panel from the Safe Mode to the Fast Mode. Then MicroCity will use LuaJIT to execute modules.
If a module is being executed, one can stop it by click the Execute button in the corresponding Settings. In Safe Mode the execution can be immediately stopped, but in Fast Mode the stopping is depend on the GetReady() function called in the script (see 4.2.`}]},{path:"/docs/4.1_si_overview.html",title:"4.1 脚本概览",pathLocale:"/",contents:[{header:"4.1 脚本概览",slug:"_4-1-脚本概览",content:"MicroCity uses Modules (see 3.7) to extend its functionalities. One type of the modules is MicroCity Script (*.mcs) which can be edited and debugged in the ScriptEditor."},{header:"The Script Editor",slug:"the-script-editor",content:""},{header:"Coding and Debugging MicroCity Scripts",slug:"coding-and-debugging-microcity-scripts",content:"ScriptEditor is based on ZeroBrane. One can find detailed information there. For debugging, you should keep Script Editor being opened. Then right click the module from MicroCity and choose Debug item in the context menu (see 3.7). The execution can be indicated in the Code View of ScriptEditor. You can control the execution and watch variables with Debug Buttons."},{header:"The Lua Language and Embedded Functions",slug:"the-lua-language-and-embedded-functions",content:`MicroCity uses Lua 5.1 as its script language. One can find the reference manual there. MicroCity embeds many useful funtions in Lua, which can not only control user interfaces, manipulate data, but also can solve mathematical models and sun simulations. You should read following chapters for more information.
Conventions in this reference:
There are four major data types in Lua can be passed though embedded functions as parameters, namely Number, Boolean, String and Object. The type Object includes builtin Lua objects, such as Table, Function adn Thread..., as well as MicroCity objects, such as Shapes, Grid, Table and Scene.... To clarify the parameter type in embedded functions, we use capitalization, quotation mark and semantic information to avoid ambiguities in function descriptions. A lowercase word of a paramter means a Number. Sometimes, to present an integer parameter, a letter 'i' followed by a word is used, like iField. Starting with the letter 'b' and followed by a word means a Boolean, like bShow. A quoted word means a String. A capitalized word means an Object or a keyword. Following is an example of a embedded function description.
AddParameter (Module, ParentNode, "Value", "id" [, default = 0])
In this case, the Module parameter should be a Module object. The ParentNode parameter should be a Node object, but it act as a parent Node. The "Value" parameter is a string, but it represent the builtin type Value in MicroCity, so this string can not be changed. The "id" parameter should be a user specified string. The default parameter is a number. The contents in a pair of '[' and ']' are optional. The character '|' among parameters means "or".
Encoding formats:
MicroCity uses ANSI encoding format to read and write data, such as shp, txt, csv and dbf. ScriptEditor and the embedded funtions use UTF-8 encoding format to read and write data, such as txt or csv.`}]},{path:"/docs/4.2_ui_control.html",title:"4.2 控制用户界面",pathLocale:"/",contents:[{header:"4.2 控制用户界面",slug:"_4-2-控制用户界面",content:'Microcity Script can be used to control some features appearing in user interfaces, which include moduels, data objects, messages and so on. There are some sample codes can be found in the "user_interface" folder of the Project Tab in ScriptEditor.'},{header:"Basic User Interfaces",slug:"basic-user-interfaces",content:`Print ("hello" [,...])
Prints values in the Messages Panel.
Note ("hello" [,...])
Notifies users and pauses the execution.
SetProcessText ("processing")
Sets a text at the bottom left corner of MicroCity.
SetProgress (position, range)
Sets the progress bar of position/range that locates at the bottom right conner of MicroCity.
Sleep (milliseconds)
Pauses the execution for milliseconds.
GetReady ()
MicroCity shares the same thread with the lua engine. Heavy calculations in lua will block the MicroCity interface. Use this function inside can let the MicroCity interface respond to user operations. Returns false if user cancel the current execution.
GetClickXY ()
Returns x,y where a user clicked at a Map View.
GetDragExtent ()
Returns bottom-left and top-right corner coordinate: Lx, By, Rx, Ty, which a user used mouse to drag a rectangle in a Map View.`},{header:"Data Objects",slug:"data-objects",content:`PATH
Internal global variable that holds a string of current working directory, such as "c:\\microcity".
Open (".\\\\shapes.shp" [, ".\\\\grid.sgrd" [, ".\\\\table.dbf" [, ".\\\\scene.m3d" , ...]]])
Opens and returns Shapes, Table, Grid and Scene object from current working directory or opened data.
Close (Shapes|Grid|Table|Scene|Network|RndEngine|LPModel)
Closes an opened or created Shapes, Table, Grid, Scene, Network, RndEngine or LPModel object.
Update (Shapes|Grid|Table [, bShow = ture])
Update current changes of Shapes, Grid or Table object in MicroCity. The bShow indicates whether to create a view of the object. Returns false if user cancel the current execution.
CreateMap ("name", Shapes1|Grid1 [, Shapes2|Grid2, ...])
Creates a Map View to show objects which can be arranged in layers by their order in the parameters.`},{header:"Modules and Parameters",slug:"modules-and-parameters",content:`AddModule ("Function" [, "name"]) This function can add a lua function as a module to current module library. The module's default name is the function's name. Returns a Module object.
AddParameter (Module, ParentNode, "Node", "id")
AddParameter (Module, ParentNode, "Value", "id" [, default = 0])
AddParameter (Module, ParentNode, "Range", "id" [, low = 0 [, high = 1]])
AddParameter (Module, ParentNode, "Check", "id" [, default = 0])
AddParameter (Module, ParentNode, "String", "id" [, "string" = "")
AddParameter (Module, ParentNode, "Choice", "id" [, "choice1|choice2|" [, choice = 1]])
AddParameter (Module, ParentNode, "File", "id" [, "c:\\\\default.txt" = ""])
AddParameter (Module, ParentNode, "Color", "id" [, "color" = "255 255 255")
AddParameter (Module, ParentNode, "Shapes", "id")
AddParameter (Module, ParentNode, "Grid", "id")
AddParameter (Module, ParentNode, "Scene", "id")
AddParameter (Module, ParentNode, "Table", "id")
AddParameter (Module, ParentNode, "Field", "id")
These functions can add a parameter to a module's settings panel. Returns corresponding values or an object. The ParentNode can be set to the first return of a AddParameter function. If "Field" is set at the third place, the parent_node can be set to a Table or Shapes object to get its attributes table's head.
GetParameter (Shapes|Table|Grid|Scene|Module, "id")
Returns the parameter specified by "id" from the object's settings panel.
SetParameter (Shapes|Table|Grid|Scene|Module, "id", Number|"String"|Object)
Sets the parameter specified by "id" in the object's settings panel. Returns true if succeed. Note that the choice parameter should start from 1. A parameter's "id" can be found in the parameter's helper text shown as below.`}]},{path:"/docs/4.3_shapes_and_tables.html",title:"4.3 矢量图形和表格",pathLocale:"/",contents:[{header:"4.3 矢量图形和表格",slug:"_4-3-矢量图形和表格",content:'Users can manipulate Shapes and Tables with MicroCity Script. For detailed data structure of Shapes, you can refer to previous chapter 2.2 and 3.2. Because Shapes can be treated as Tables with extra field with geographic data, some of embeded functions for tabular data manipulation can be used both in Shapes and Tables. Sample codes for this chapter can be found in the "shapes_samples" folder of the Project Tab in ScriptEditor.'},{header:"Tabular Data Manipulation",slug:"tabular-data-manipulation",content:`CreateShapes ("name", "Point|Line|Polygon")
Returns a Shapes object.
CreateTable ("Name")
Returns a Table object.
GetFieldCount (Shapes|Table)
Returns the number of fields in a Shapes or Table
GetField (Shapes|Table, iField)
Inputs the index (starts from 1) of a field and returns the field name and type ("Int", "Float", "Double" or "String).
AddField (Shapes|Table, "field1", "Int|Float|Double|String" [, "field2", "Int|Float|Double|String", ...])
Adds fields to a *Table or Shapes and returns booleans (true or false) by order.
DelField (Shapes|Table, iField)
Returns true if successfully delete a field.
GetRecCount (Shapes|Table)
Returns the total number of records in a Shapes or Table.
AddRecord (Shapes|Table)
Adds a record to a Shapes or Table and returns the index.
GetValue (Shapes|Table, "field_name", index1 [, index2, ...])
Retrieve values from a specified field and indexes of a Shapes or Table. Returns multiple values by the order of indexes.
SetValue (Shapes|Table, value, "field_name", index1 [, index2, ...])
Sets values for a specified field and indexes of a Shapes or Table.`},{header:"Geographic Data Manipulation",slug:"geographic-data-manipulation",content:`GetSelections (Shapes)
Returns selected shape objects from a Shapes.
GetShape (Shapes, index1 [, index2, ...])
Returns Shape objects from a Shapes by the order of indexes.
AddShape (Shapes, Shape)
Adds a Shape object to a Shapes and returns its index.
AddShape (Shapes [, x1, y1, x2, y2, ...])
Adds a Shape object to a Shapes which defined as points. Returns the Shape object and index.
DelShape (Shape|Shapes)
Deletes a Shape or Shapes object and returns ture if successful.
AddPoint (Shape, x, y [, iPart = 1])
Adds a point to a Shape and returns ture if successful.
InsPoint (Shape, x, y [, iPoint = 1 [, iPart = 1]])
Inserts a point to a Shape and returns ture if successful.
SetPoint (Shape, x, y [, iPoint = 1 [, iPart = 1]])
Sets a point coordinates in a Shape and returns ture if successful.
DelPoint (Shape, iPoint [, iPart=1])
Deletes a point at position iPoint from a Shape and returns ture if successful..
DelPart (Shape, iPart)
Deletes a part from a Shape and returns ture if successful.
GetPartCount (Shape)
Returns the number of parts in a Shape.
GetPointCount (Shape [, iPart])
Returns the number of points in a Shape.
GetPointXY (Shape [, iPoint [, iPart = 1]])
Returns all points' coordinates: x1, y1, x2, y2, ... from a Shape or a specified point's coordinate.
CopyShapeTo (TargetShapes, dx, dy, Shape1 [, Shape2, ...])
Copys Shape objects to a target Shapes with relative translation (dx, dy) and returns new Shape objects.
MoveShapeTo (dx, dy, Shape1 [, Shape2, ...])
Translates Shape objects to its relative position (dx, dy).
GetCenterXY (Shapes)
Returns the center coordinate (x, y) of a Shapes.
GetCenterXY (Shapes, index1 [, index2, ...])
Returns the center coordinates (x1, y1, x2, y2, ...) of Shape objects specified by indexes in a Shapes.
GetCenterXY (Shape1 [, Shape2, ...])
Returns the center coordinates (x1, y1, x2, y2, ...) of Shape objects.
GetDistance (x1, y1, x2, y2 [, x3, y3, ...])
Returns the total distance between every two pairs of coordinates (x, y).
GetShapeLen (Shape1 [, Shape2, ...])
Returns lengths of Shape objects.
GetShapeArea (Shape1 [, Shape2, ...])
Returns areas of Shape objects.
GetShapeType (Shape|Shapes)
Returns the type ("Point", "Line" or "Polygon") of the a Shapes or Shape object.
GetExtent (Shapes)
Returns the extent coordinates (Lx, By, Rx, Ty) of a Shapes's extent.
GetExtent (Shapes, index)
Returns the extent coordinates (Lx, By, Rx, Ty) of a Shape indexed in a Shapes.
GetExtent (Shape)
Returns the extent coordinates (Lx, By, Rx, Ty) of a Shape.
GetIntersection (ShapeA, ShapeB)
Returns a Shape (Point, Line or Polygon) object of the intersection of two Shapes.
GetValue (Shape, "field_name")
Returns the value of specified field of a Shape.
SetValue (Shape, value1, "field_name1" [, value2, "field_name2", ...])
Sets values in different fiedds for a Shape.
SetCoorSys ("Earth"|"Non-Earth")
Sets coordinate system. If using "Earth", distances, lenths and areas are calculated according to the earth ellipsoid coordinate system. By default the "Non-Earth" is used, which is cartesian coordinate system.`}]},{path:"/docs/4.4_grids.html",title:"4.4 栅格图形",pathLocale:"/",contents:[{header:"4.4 栅格图形",slug:"_4-4-栅格图形",content:'Grids in MicroCity have simple structure (3.3) but efficient time and space utilization if applying algorithms on them. Sample codes for this chapter can be found in the "grid_samples" folder of the Project Tab in ScriptEditor.'},{header:"Cellular Data Manipulation",slug:"cellular-data-manipulation",content:`CreateGrid ("name", "Int|Float|Double", XMax, YMax [, CellSize = 1 [, xMin = 0 [, yMin = 0] [, init = 0]]]])
Returns a Grid object.
GetCellSize (Grid)
Returns the Cellsize value of a Grid.
GetGridMaxXY (Grid)
Returns XMax, YMax of a Grid.
ConvertToGridXY (Grid, x1, y1 [, x2, y2, ...])
Converts real coordinates to coordinates in a Grid. Returns X1, Y1, X2, Y2, ... .
ShapeToGrid (Grid, Shape, value)
Rasterizes a Shape in a Grid. The cell values will be set according to the covering area and the inputed value.
ShapeToGrid (Grid, Shapes, "field_name")
Rasterizes all Shape objects in a Shapes. The cell values will be set according to the covering area and the values of Shapes field.
GetValue (Grid, X1, Y1 [, X2, Y2, ...])
Returns cells' (specified by Grid coordinates) values: value1, value2, ... .
SetValue (Grid, value, X1, Y1 [, X2, Y2, ...])
Sets values for cells specified by Grid coordinates.
GetCenterXY (Grid)
Returns the center real coordinate (x, y) of a Grid.
GetCenterXY (Grid, X1, Y1 [, X2, Y2, ...])
Returns the real coordinates of cells' centers: x1, y1, x2, y2, ... .
GetExtent (Grid)
Returns the leftbottom and righttop corner of a Grid's extent: Lx, By, Rx, Ty.
GetExtent (Grid, X, Y)
Returns the leftbottom and righttop corner of a cell's extent: Lx, By, Rx, Ty.
GetFractalDim (Grid, X1, Y1, X2, Y2, fold [, MultiFractalQ = 0])
Calculates fractal dimension of the specified area in a Grid. Returns dimension, RSQ of linear regression, and the number of boxes in every fold.`}]},{path:"/docs/4.5_3d_scenes.html",title:"4.5 3D场景",pathLocale:"/",contents:[{header:"4.5 3D场景",slug:"_4-5-3d场景",content:'Scenes and inside 3D objects (3.4) can be scripted. Sample codes for this chapter can be found in the "3d_samples" folder of the Project Tab in ScriptEditor.'},{header:"3D Scene and Object Manipulation",slug:"_3d-scene-and-object-manipulation",content:`CreateScene ("Title" [, RotSpeed=1] [, TransSpeed=1])
Creates a new 3d scene and returns the object.
AddZipTo3DPath (Scene, "filename.zip")
Adds a zip file to the search directory and returns true if succeed. It is useful for collecting a large amount of files.
LoadSkybox (Scene, "top.jpg" ,"bottom.jpg" ,"left.jpg" ,"right.jpg" ,"front.jpg" ,"back.jpg")
Loads six image files as the skybox of a 3d scene.
LoadObject (Scene, "filename.3ds" [,shadow = false [, AnimationSpeed]])
Loads a 3d object from a file and returns the object.
AddLight (Scene, x, y, z, Radius [, r = 255, g = 255, b = 255])
Adds a light object and returns the object.
Add3DLabel(Scene, "label" [, width=10, height=10 [, r = 180, g = 180, b = 180 [, "font.xml"]]])
Adds a 3D label at (0,0,0) and returns the object.
Add3DLine (Scene, x1, y1, z1, x2, y2, z2 [, r = 0, g = 0, b = 0])
Adds a 3D line object frome (x1, y1, z1) to (x2, y2, z2) and retruns the object.
Add3DRect (Scene, length, width [, r = 180, g = 180, b = 180])
Adds a 3D rectangular object from (-length/2,0,-width/2) to (length/2,0,width/2) and returns the object.
Add3DBox (Scene, length, width, height [, r = 180, g = 180, b = 180 [, bShowEdge = true]])
Adds a 3D box object from (-length/2,-height/2,-width/2) to (length/2,height/2,width/2) and returns the object.
AddSphere (Scene, radius [, polycount = 16 [, r = 180, g = 180, b = 180]])
Adds a sphere at (0,0,0) and returns the object. If the radius parameter is less than 0, returns an invisible object.
GetTexture (Object)
Returns the texture files of a object: "filename1", "filename2", ... .
LoadTexture (Scene, Object, "filename1" [, "filename2", ...])
Loads texture files to an object.
SetPosition (Object, x, y, z [, absolute = false])
Sets the position of an object relative to its parent (or the absolute position to the scene).
GetPosition (Object [, absolute = false])
Gets the position of an object relative to its parent (or the absolute position to the scene).
SetRotation (Object, rx, ry, rz [, absolute = false])
Sets the rotation (left hand rule) of an object in degrees relative to its parent (or the absolute rotation to the scene).
GetRotation (Object [, absolute = false])
Gets the rotation (left hand rule) of an object in degrees relative to its parent (or the absolute rotation to the scene).
SetScale (Object, sx, sy, sz)
Sets the scale of an object.
GetScale (Object)
Gets the scale of an object.
SetParent (Object, Parent)
Attaches an object to another object as a child.
GetParent (Object)
Gets the parent of an object.
SetObject (Object "id" [,x, y, z, [,rx, ry, rz [,sx, sy, sz]]])
Sets the ID, position, rotation and scale of an object.
DelObject (Object)
Deletes an object.
SetCamera (Scene, x, y, z [,Tx, Ty, Tz])
Sets the position and target of the scene camera.
GetCamera (Scene)
Gets the camera object of a 3d scene and its position and targt.
GetSelections (Scene)
Returns selected objects from a 3d scene.
GetObjectID (Object1 [, Object2, ...])
Returns "id"s of objects.
SetObjectID (Object, "id")
Sets the id of an object.
GetObject (Scene, "id")
Finds an object by its id.`}]},{path:"/docs/4.6_networks.html",title:"4.6 网络",pathLocale:"/",contents:[{header:"4.6 网络",slug:"_4-6-网络",content:'GIS vector data (3.2) in MicroCity can be topologized to Networks and applied the Shortest Path Algorithm and User Equilibrium Traffic Assignment Algorithm. Sample codes for this chapter can be found in the "network_samples" folder of the Project Tab in ScriptEditor.'},{header:"Network Manipulation",slug:"network-manipulation",content:`CreateNetwork ()
Creates an empty network and returns the object.
CreateNetwork (UnTopoLines)
Creates a network from an untopologized "line" Shapes and returns three objects: Network, Nodes (Shapes) and Links (Shapes).
CreateNetwork (Nodes, Links)
Creates a Network object from topologized Nodes and Links Shapes. Returns the Network object.
InitNetwork (Network, Nodes, Links)
Initiates a Network from a Nodes and a Links Shapes. Returns true if succeed.
AddLink (Network, linkID|-1, oID|-1, dID|-1, impedance [, direction = 1 [, capacity = 1E+38]])
Adds a new link or update an existing link in the Network. Returns linkID, oID, dID, true/false for adding and true/false for updating.
AddLink (Network, Shapes|Table, index1 [, index2, ...])
Adds or updates links from the recordset of a Shapes or Table. Returns boolean values.
DelLink (Network, linkID)
Deletes a link from a Network. Returns a boolean value.
GetNearNodeID (Network, x, y [, radius=nil])
Gets the nearest Network nodes from a coordinate. Returns node ids.
GetNodeXY (Network, nodeID1 [, nodeID2, ...])
Returns the coordinates of nodes in a Network: x1, y1, x2, y2, ... .`},{header:"Algorithms",slug:"algorithms",content:`GenSTPTree (Network, startID [, endID])
Generates a Shortest Path Spanning Tree from a node. Returns a boolean value.
GetSTPPath (Network, endID, "NodeID"|"LinkID")
After calling GenSTPTree calls this function. Returns a Shortest Path indicated by a node or link id sequence: id1, id2 ,... .
GetSTPPath (Network, endID, "iNodeShp"|"iLinkShp")
After calling GenSTPTree calls this function. Returns a Shortest Path indicated by a node or link Shapes index sequence.
GetSTPPath (Network, endID, "NodeShp"|"LinkShp")
After calling GenSTPTree calls this function. Returns a Shortest Path indicated by a node or link Shape object sequence.
GetSTPLen (Network, endID)
After calling GenSTPTree call this function. Returns a Shortest Path Distance to a end node.
GetSTPLen (Network, startID, endID)
Gets a Shortest Path from a start node to an end node in a Network. Returns the distance.
GetSTPLen (Network, x1, y1, x2, y2)
Gets a Shortest Path from a start coordinate to an end coordinate in a Network. Returns the distance.
SetTrip (Network, oID, dID, amount)
Sets an amount of a trip from an origin to an destination.
SolveUE (Network [, rootTol = 1E-2 [, equlBrm = 1E-5 [, maxIter = 10000]]])
After calling SetTrip call this function. Performs the User Equilibium Traffic Assignment and returns a boolean value.
GetFlow (Network, linkID)
Returns the traffic flow of a specified link.
SetFlow (Network, linkID, flow)
Set the traffic flow of a specified link and return a boolean value.`}]},{path:"/docs/4.7_des_simulations.html",title:"4.7 离散事件模拟",pathLocale:"/",contents:[{header:"4.7 离散事件模拟",slug:"_4-7-离散事件模拟",content:'MicroCity has a inside simulation time counting and event scheduling mechanism. It provides several embedded Lua functions to facilitate creating Discrete Event Simulations, which is very useful for dynamic system analysis. Sample codes for this chapter can be found in the "simulation_samples" folder of the Project Tab in ScriptEditor.'},{header:"Random Number Generation",slug:"random-number-generation",content:`CreateRandEng (seed, "uniform_01")
Creates a binary distributed random generation engine from a seed and returns the object.
CreateRandEng (seed, "uniform_real" [, min = 0, max = 1])
Creates a uniform distributed real random generation engine from a seed and returns the object.
CreateRandEng (seed, "uniform_int" [, min = 0, max = 1])
Creates an uniform integer random generation engine from a seed and returns the object.
CreateRandEng (seed, "triangle" [, a = 0, b = 1, c = 2])
Creates a triangle distributed random generation engine from a seed and returns the object.
CreateRandEng (seed, "bernoulli" [, p = 0])
Creates a bernoulli distributed random generation engine from a seed and returns the object.
CreateRandEng (seed, "cauchy" [, median = 0, sigma = 1])
Creates a cauchy distributed random generation engine from a seed and returns the object.
CreateRandEng (seed, "exponential" [, lambda = 1])
Creates a exponential distributed random generation engine from a seed and returns the object.
CreateRandEng (seed, "geometric" [, p = 0])
Creates a geometric distributed random generation engine from a seed and returns the object.
CreateRandEng (seed, "normal" [, mean = 0, sigma = 1])
Creates a normal distributed random generation engine from a seed and returns the object.
CreateRandEng (seed, "lognormal" [, mean = 0, sigma = 1])
Creates a lognormal distributed random generation engine from a seed and returns the object.
GetNextRandom (Engine)
Gets a random number from a random generation engine.`},{header:"Simulation Control",slug:"simulation-control",content:`CreateEvent (time, Funcion [, arg1, arg2, ...])
Creates a future event from a Lua Function or a Lua Coroutine. Returns a Coroutine object.
ExecAllEvents ()
Calls this at last. It will execute all events as Lua Coroutines.
Delay ([relativeTime = 0])
Calls this function in a Lua Coroutine will let it first yield then resume it after the specified relative time. If the parameter relativeTime is not set, the current Coroutine will yield and won' be resumed automatically.
Resume ([time, ] Coroutine [, arg1, arg2, ...])
Resumes a yielded coroutine immediately or at a specified time.
GetSimTime ()
Returns the current simulation time.`}]},{path:"/docs/4.8_mixed_integer_programming.html",title:"4.8 混合整数线性规划",pathLocale:"/",contents:[{header:"4.8 混合整数线性规划",slug:"_4-8-混合整数线性规划",content:'MicroCity employs the lpsolve to takle Mixed Integer Linear Programming problems. Developers can use embedded Lua functions to build and solve models. Sample codes for this chapter can be found in the "optimization_samples" folder of the Project Tab in ScriptEditor.'},{header:"Model Creation and Execution",slug:"model-creation-and-execution",content:`CreateLP ([rows = 0 , columns = 0])
Creates a Mixed Integer Linear Programming model and returns the LPModel object.
SetObjFunction (LPModel, rowTable, "MAX"|"MIN")
Sets the objective function of a LPModel with a Lua Table which stores coefficients of the decision variables.
AddConstraint (LPModel, rowTable, "<="|">="|"==", rhsValue)
Adds a constraint to a LPModel with a Lua Table which stores coefficients of the decision variables.
SetInteger (LPModel, index)
Sets a decision variable specified by the index as an integer variable.
SetBinary (LPModel, index)
Sets a decision variable of a LPModel specified by the index as a binary variable.
SetUnbounded (LPModel, index)
Sets a decision variable of a LPModel to be unbounded(+/- infinity).
SolveLP (LPModel [, timeoutSec = 60])
Solves a LPModel and returns 0 as success, -1 as invalid LP model, -2 as nomemory, 1 as suboptimal, 2 as infeasible, 3 as unbounded, 4 as degenerate, 5 as a numerical failure encountered, 6 as the user abort, 7 as a timeout error, 9 as the model could be solved by presolve, 10 as the B&B routine failed, 11 as the B&B was stopped because of a break-at-first, 12 as a feasible B&B solution was found, 13 as no feasible B&B solution found.
GetObjective (LPModel)
Returns the objective function value of a LPModel.
GetVariable (LPModel, index)
Returns the value of a decision variable specified by the index.
GetVariables (LPModel)
Returns all values of the decision variables of a LPModel.
GetDual (LPModel, index)
Returns the dual value of a decision variable specified by the index.
GetDuals (LPModel)
Returns all dual values of the decision variables of a LPModel.
ReadLP("fileName.mps")
Reads a LPModel from a file (*.lp, *.mps) and returns the LPModel if succeed.
WriteLP (LPModel, "fileName.mps")
Writes a LPModel to a file (*.lp, *.mps) and returns true if succeed.`}]},{path:"/docs/",title:"MicroCity文档",pathLocale:"/",contents:[{header:"MicroCity文档",slug:"microcity文档",content:""},{header:"目录",slug:"目录",content:`1 Introduction 介绍 1.1 What MicroCity can Do MicroCity能干什么 2 Getting Started 开始使用 2.1 Showing a World Map 展示世界地图
2.2 Searching for Countries 寻找国家 3 User Interfaces 用户界面 3.1 UI Overview 用户界面概览
3.2 Vector Shapes 矢量图
3.3 Raster Grids 栅格图
3.4 3D Scenes 3D场景
3.5 Tables 表格
3.6 Maps and Layers 地图和图层
3.7 Modules 拓展模块 4 Scripting Interfaces 脚本接口 4.1 SI Overview 脚本概览
4.2 UI Control 控制用户界面
4.3 Shapes and Tables 矢量图形和表格
4.4 Grids 栅格图形
4.5 3D Scenes 3D场景
4.6 Networks 网络
4.7 Discrete Event Simulations 离散事件模拟
4.8 Mixed Integer Programming 混合整数线性规划 声明：本网站文档部分内容来自microcity.github.io，版权归原作者所有。`}]},{path:"/notes/3d_objects.html",title:"3D 对象",pathLocale:"/",contents:[{header:"3D 对象",slug:"_3d-对象",content:"本节将介绍三维场景的对象及其控制函数。"},{header:"添加对象",slug:"添加对象",content:`向场景中添加对象，函数形式如下
local obj = scene.addobj([类型], {key1 = value1, key2 = value2, ...})`},{header:"对象可选属性列表",slug:"对象可选属性列表",content:`添加到场景中的对象通常支持设置以下属性中的某些属性 对象属性
含义 color
对象的颜色。颜色的格式支持内置颜色、十六进制、RGB。与 场景背景颜色 的设置相同 opacity
透明度 hcolor
选中时的颜色 size
对象的大小，默认值为1 length
对象的长度，常用于 box(立方体) width
对象的宽度，常用于 box(立方体) height
对象的高度，常用于 box(立方体) radius
对象圆角大小 segments
份数，通常用于设置 sphere(球体) 绘制的精度 selectable
是否可被选中 name
对象名称 text
对象文本值 font
文本字体 vertices
构成对应对象的点集合 支持添加到场景中的类型如下`},{header:"对象类型",slug:"对象类型",content:""},{header:"对象类型列表",slug:"对象类型列表",content:`label：文本标签
points：点集合
polyline：线段集合
box：立方体
sphere：球体
polygon：多边形
light：光源
mesh：点构成的面 注释
为了简洁起见，下方示例的对象可选属性中只展示对应对象的关键属性。其他通用的属性可以参考 对象可选属性列表 自行添加。`},{header:"label",slug:"label",content:`label 是文本标签。可以在 text 属性中设置label的文本。
local obj = scene.addobj('label', {text = "Hello World!"})`},{header:"points",slug:"points",content:`points 是点集合。可以只创建单个点，也可以创建多个点。每个点都有三个维度的坐标以确定其在三维空间中的位置。点的个数通过 vertices 属性确定。
下面是一个创建 points 点集对象的示例
-- 在坐标为(5,5,5)的位置创建一个点
scene.addobj("points", {vertices = {5,5,5}, size = 5}) -- 第一个点的坐标为(0,0,0)，第二个点的坐标为(5,5,5)
scene.addobj("points", {vertices = {0,0,0, 5,5,5}, size = 5})`},{header:"polyline",slug:"polyline",content:`polyline 是线段集合。当在vertices属性中输入多个点的坐标时，将会依次根据点坐标连线，得到线段集合。
因此，虽然下面两个例子中使用了相同的点坐标，但是由于点坐标输入顺序不同，得到的结果也不同。
scene.addobj("polyline", {vertices = {0,0,0, 4,6,7, -2,3,5}})
scene.addobj("polyline", {vertices = {0,0,0, -2,3,5, 4,6,7}}) polyline点顺序对比图 polyline 没有 size 属性`},{header:"box",slug:"box",content:`box 是长方体。主要通过 length、width 和 height 属性修改其形状。
local obj = scene.addobj('box', {length = 3, width = 4, height = 5})
box 对象的重要可选属性 属性
含义 length
立方体的长度 width
立方体的宽度 height
立方体的高度 基于以上三个属性，我们可以修改默认示例代码中旋转的box的形状。
--添加了length, width, height三个属性（不添加默认都为1）
local obj = scene.addobj('box', {length = 3, width = 4, height = 5}) local x = 1
local y = 1
local z = 0
while scene.render() do x = x + 0.1 y = y + 0.1 obj:setrot(x, y, z)
end 不同长宽高设置的box`},{header:"sphere",slug:"sphere",content:`sphere 是球体。可以通过 radius 属性修改其大小，还可以通过设置 segment 属性设置其模型质量。具体可以参考内置示例中地球的例子。
local obj = scene.addobj('sphere', {radius=15, segments=360})
sphere 对象的可选属性 属性
含义 radius
球体的圆角大小。可以用于控制球体的大小。 segments
球体的渲染面数。设置值越高球体的模型越精细。 不同segment对于相同sphere的影响`},{header:"polygon",slug:"polygon",content:`polygon 是多边形。主要通过 vertices 属性对其进行设置。
local obj = scene.addobj("polygon", {vertices = {-1,-1,0, -1,1,-0, 1,1,0, 1,-1,0}}) 由于此处举例的多边形为正方形，因此看上去与上面介绍的 box 没什么差别。但是当形状设置为其他类型的多边形时（如三角形、五边形等），多边形的意义就能被体现出来了。 属性
含义
说明 vertices
多边形的顶点
可以在 vertices 属性中依次设置每个点的三维坐标。第三维的坐标不会产生影响，但是起到占位作用。 size
体积
由于第三维的坐标不影响，且多边形的顶点确定后面积就已经确定，因此 size 属性通过控制每个点的第三维坐标值来控制体积。 不同size对于相同polygon体积的影响`},{header:"外部模型",slug:"外部模型",content:`引用外部文件。但是目前对于MicroCityWeb来说，暂时只能引用网站中内置的文件。
例如内置示例中引用网站内部文件在视图中生成一辆厢式货车：
local obj = scene.addobj('/res/2axle.glb')
还可以通过引用文件的网址引用外部模型：
local obj = scene.addobj('https://huuhghhgyg.github.io/ModelResource/models/F16-lite.glb') 提示
如果需要外部模型，可以到 ModelResource仓库 中找有没有合适的模型。如果其中没有合适的模型，但是你手上又有特别想用的模型，可以按照 ModelResource仓库提供的指引 进行Pull Request请求上传模型。一旦你的Pull Request被同意，Github工作流会立即将你上传的模型部署到仓库网页中供使用并以邮件形式通知。 相关信息
如果手中有三维模型资源，可以在3D Viewer中查看，也可以通过这个网站导出为 .glb 模型`},{header:"light",slug:"light",content:"设置光源的方向，可选参数 vertices 为一个三维向量，表示光的照射方向。由于MicroCityWeb的场景中已经设置了很强的光源，因此此处不过多做介绍。"},{header:"mesh",slug:"mesh",content:"多个点构成的面，多见于引用的外部模型中。由于应用较少此处不做介绍。"},{header:"对象控制函数",slug:"对象控制函数",content:"下面假定要操作的三维对象为 obj"},{header:"getpos()",slug:"getpos",content:`获取 obj 对象的位置坐标 (x, y, z)
local x, y, z = obj:getpos()`},{header:"setpos()",slug:"setpos",content:`设置 obj 对象的位置坐标为 (x, y, z)
obj:setpos(x, y, z)`},{header:"getrot()",slug:"getrot",content:`获取 obj 对象在 x, y, z 方向上的旋转弧度值 (rx, ry, rz)
local rx, ry, rz = obj:getrot()`},{header:"setrot()",slug:"setrot",content:`设置 obj 对象在 x, y, z 方向上的旋转弧度值为 (rx, ry, rz)
obj:setrot(rx, ry, rz)`},{header:"getscale()",slug:"getscale",content:`获取 obj 对象在 x, y, z 方向上的缩放比例 sx, sy, sz
local rx, ry, rz = obj:getrot()`},{header:"setscale()",slug:"setscale",content:`设置 obj 对象在 x, y, z 方向上的缩放比例 sx, sy, sz
local rx, ry, rz = obj:getrot()`},{header:"getchildren()",slug:"getchildren",content:`获取 obj 对象的子对象表
local children = obj:getchildren()`},{header:"getchildren()",slug:"getchildren-1",content:`设置 obj 对象的子对象表
obj:setchildren(children_table)`},{header:"getparent()",slug:"getparent",content:`获取 obj 对象的父对象
local num = obj:getparent() 此处只返回一个数值`},{header:"setparent()",slug:"setparent",content:`设置 obj 对象的父对象为 obj0
obj:setparent(obj0)`}]},{path:"/notes/3d_objects_en.html",title:"3D Objects",pathLocale:"/",contents:[{header:"3D Objects",slug:"_3d-objects",content:"This section will introduce the objects and their control functions in a 3D scene."},{header:"Adding Objects",slug:"adding-objects",content:`To add objects to the scene, use the following function:
local obj = scene.addobj([type], {key1 = value1, key2 = value2, ...})`},{header:"Optional Object Properties",slug:"optional-object-properties",content:`Objects added to the scene typically support setting some of the following properties: Object Property
Meaning color
The color of the object. The format of the color can support built-in colors, hexadecimal, and RGB. Same as the background color of the scene opacity
Opacity hcolor
The color when the object is selected size
The size of the object. The default value is 1 length
The length of the object, commonly used for box width
The width of the object, commonly used for box height
The height of the object, commonly used for box radius
The size of the object's rounded corners segments
The number of segments, usually used to set the precision of the sphere drawn selectable
Whether the object can be selected name
The name of the object text
The text value of the object font
The font of the text vertices
The set of points that make up the corresponding object The following are the types of objects that can be added to the scene:`},{header:"Object Types",slug:"object-types",content:""},{header:"List of Object Types",slug:"list-of-object-types",content:`label: Text label
points: Set of points
polyline: Set of line segments
box: Cube
sphere: Sphere
polygon: Polygon
light: Light source
mesh: Face made up of points For the sake of brevity, the key properties of the optional objects shown in the example below only display the relevant attributes of the object. Other common properties can be added by referring to the Optional Object Properties.`},{header:"label",slug:"label",content:`label is a text label. The text of the label can be set in the text attribute.
local obj = scene.addobj('label', {text = "Hello World!"})`},{header:"points",slug:"points",content:`points is a collection of points. You can create a single point or multiple points. Each point has three-dimensional coordinates to determine its position in three-dimensional space. The number of points is determined by the vertices attribute.
Here is an example of creating a points object:
-- create a point at position (5,5,5)
scene.addobj("points", {vertices = {5,5,5}, size = 5}) -- create two points, the first at (0,0,0), the second at (5,5,5)
scene.addobj("points", {vertices = {0,0,0, 5,5,5}, size = 5})`},{header:"polyline",slug:"polyline",content:`polyline is a collection of line segments. When multiple points are input in the vertices attribute, line segments will be generated based on the order of the coordinates.
Therefore, although the same coordinates are used in the two examples below, the results are different because the order of the input coordinates is different.
scene.addobj("polyline", {vertices = {0,0,0, 4,6,7, -2,3,5}})
scene.addobj("polyline", {vertices = {0,0,0, -2,3,5, 4,6,7}}) polyline point order comparison polyline does not have a size attribute.`},{header:"box",slug:"box",content:`box is a cuboid. Its shape can be modified mainly through the length, width, and height attributes.
local obj = scene.addobj('box', {length = 3, width = 4, height = 5})
Important optional properties of the box object: Property
Meaning length
The length of the cuboid width
The width of the cuboid height
The height of the cuboid Based on the above three attributes, we can modify the shape of the rotating box in the default sample code.
-- Add the length, width, and height attributes (default to 1 if not added)
local obj = scene.addobj('box', {length = 3, width = 4, height = 5}) local x = 1
local y = 1
local z = 0
while scene.render() do x = x + 0.1 y = y + 0.1 obj:setrot(x, y, z)
end Boxes with different lengths, widths, and heights.`},{header:"sphere",slug:"sphere",content:`sphere is used to create a sphere object. Its size can be modified by the radius attribute, and its model quality can be set by setting the segments attribute. Refer to the example of the Earth in the built-in samples for more details.
local obj = scene.addobj('sphere', {radius=15, segments=360})
Optional attributes for sphere objects: Attribute
Meaning radius
The radius of the sphere. It can be used to control the size of the sphere. segments
The number of rendered surfaces of the sphere. The higher the value, the more detailed the sphere model will be. The impact of different segments on the same sphere`},{header:"polygon",slug:"polygon",content:`polygon is used to create a polygon object, mainly set through the vertices attribute.
local obj = scene.addobj("polygon", {vertices = {-1,-1,0, -1,1,-0, 1,1,0, 1,-1,0}}) Because the polygon in this example is a square, it looks no different from the box introduced above. However, when the shape is set to other types of polygons (such as triangles, pentagons, etc.), the meaning of the polygon can be reflected. Attribute
Meaning
Explanation vertices
The vertices of the polygon
You can set the three-dimensional coordinates of each point in turn in the vertices attribute. The third dimension coordinates do not have an impact but play a placeholder role. size
Volume
Since the third dimension coordinates do not have an impact, and the area is already determined by the vertices of the polygon, the size attribute controls the volume by controlling the third dimension coordinate values of each point. The impact of different size on the same polygon volume`},{header:"External model",slug:"external-model",content:`Reference external files. However, for MicroCityWeb, only the built-in files on the website can be referenced at present.
For example, in the built-in example, a box-type truck is generated in the view by referencing the internal file:
local obj = scene.addobj('/res/2axle.glb')
You can also reference an external model by referencing the URL of the file:
local obj = scene.addobj('https://microcityweb.gitee.io/res/agv.glb') If you have 3D model resources at hand, you can view them in 3D Viewer and export them as .glb models through this website.`},{header:"Light",slug:"light",content:"Set the direction of the light, and the optional parameter vertices is a three-dimensional vector that represents the direction of the light. Since a strong light source has already been set in the MicroCityWeb scene, this will not be discussed in detail here."},{header:"Mesh",slug:"mesh",content:"A face composed of multiple points, commonly found in referenced external models. Due to its limited application, it will not be introduced here."},{header:"Object Control Functions",slug:"object-control-functions",content:"Assuming the 3D object to be manipulated is obj."},{header:"getpos()",slug:"getpos",content:`Gets the position coordinates (x, y, z) of obj.
local x, y, z = obj:getpos()`},{header:"setpos()",slug:"setpos",content:`Sets the position coordinates of obj to (x, y, z).
obj:setpos(x, y, z)`},{header:"getrot()",slug:"getrot",content:`Gets the rotation angles (rx, ry, rz) of obj in the x, y, and z directions.
local rx, ry, rz = obj:getrot()`},{header:"setrot()",slug:"setrot",content:`Sets the rotation angles of obj in the x, y, and z directions to (rx, ry, rz).
obj:setrot(rx, ry, rz)`},{header:"getscale()",slug:"getscale",content:`Gets the scaling ratios (sx, sy, sz) of obj in the x, y, and z directions.
local sx, sy, sz = obj:getscale()`},{header:"setscale()",slug:"setscale",content:`Sets the scaling ratios of obj in the x, y, and z directions to (sx, sy, sz).
obj:setscale(sx, sy, sz)`},{header:"getchildren()",slug:"getchildren",content:`Gets the table of child objects of obj.
local children = obj:getchildren()`},{header:"setchildren()",slug:"setchildren",content:`Sets the table of child objects of obj to children_table.
obj:setchildren(children_table)`},{header:"getparent()",slug:"getparent",content:`Gets the parent object of obj.
local num = obj:getparent()`},{header:"setparent()",slug:"setparent",content:`Sets the parent object of obj to obj0.
obj:setparent(obj0)`}]},{path:"/notes/3d_scene.html",title:"3D 场景",pathLocale:"/",contents:[{header:"3D 场景",slug:"_3d-场景",content:"本节将介绍三维场景及其设置。"},{header:"MicroCityWeb三维场景坐标系",slug:"microcityweb三维场景坐标系",content:"MicroCityWeb中的三维场景坐标系符合右手坐标系，各个坐标轴的正方向具体见下图。 MicroCityWeb中的坐标系"},{header:"设置场景",slug:"设置场景",content:`设置场景需要用到 setenv 函数，具体用法如下
local s = scene.setenv({grid="plane|sphere|none", bgcolor="rgb(255, 255, 255)", rotspeed=1, transpeed=1, camtype="ortho|persp", clear=true})
可以简单地表示为如下形式
local s = scene.setenv({key1 = value1, key2 = value2, ...})
其中变量 s 存放返回的环境对象。下面将详细介绍函数的可选参数。`},{header:"场景可选参数",slug:"场景可选参数",content:""},{header:"参数列表",slug:"参数列表",content:`grid：场景的背景网格
bgcolor：场景背景颜色
camtype：摄像机视角
clear：是否清除场景
rotspeed & transpeed*：鼠标操作速度调整`},{header:"grid：场景的背景网格",slug:"grid-场景的背景网格",content:`可选值 值
含义 "none"
默认值，无网格 "plane"
平地网格 "sphere"
球形网格`},{header:"bgcolor：场景背景颜色",slug:"bgcolor-场景背景颜色",content:`可选值类型 值类型
示例 内置颜色
"black", "white", "gray" 等 十六进制颜色
"#ffffff", "#fff", "#000000", "#000"等 RGB表示的颜色
"rgb(255, 255, 255)", "rgb(0, 0, 0)" 等 实例
scene.setenv({bgcolor='gray'}) --设置背景颜色为内置的gray
scene.setenv({bgcolor='#eee'}) --设置背景颜色为#eee
scene.setenv({bgcolor='rgb(255, 255, 255)'}) --设置背景颜色为白色`},{header:"camtype：摄像机视角",slug:"camtype-摄像机视角",content:`可选值 值
含义 "ortho"
正视。相当于向x和y构成的平面投影，用户视角在二维空间中。 "persp"
透视（默认值）。用户视角在三维空间中。`},{header:"clear：是否清除场景",slug:"clear-是否清除场景",content:"值设置为 true 时，清除场景 setenv 函数默认不清除原来的场景，除非手动设置参数 clear 的值为 true"},{header:"rotspeed & transpeed",slug:"rotspeed-transpeed",content:`值
含义 rotspeed
设置鼠标的旋转三维对象的速度 transpeed
设置鼠标平移三位对象的速度 提示
这两个参数通常不需要特别设置，使用默认值即可。`},{header:"其他",slug:"其他",content:""},{header:"有关高频率设置场景",slug:"有关高频率设置场景",content:`2023/03/21：目前发现过高频次设置场景会导致内存占用过高，进而导致浏览器崩溃的问题。因此建议尽量不要循环调用 scene.setenv() 函数。
如果必须这么做，请确保调用频率相对较低，这样允许浏览器有一定的时间进行GC（垃圾清理），否则可能导致浏览器崩溃。`}]},{path:"/notes/3d_scene_en.html",title:"3D Scene",pathLocale:"/",contents:[{header:"3D Scene",slug:"_3d-scene",content:"This section introduces 3D scenes and their settings."},{header:"MicroCityWeb 3D Scene Coordinate System",slug:"microcityweb-3d-scene-coordinate-system",content:"The 3D scene coordinate system in MicroCityWeb follows the right-hand coordinate system, and the specific direction of each coordinate axis is shown in the following figure. Coordinate system in MicroCityWeb Note that the three-dimensional coordinate axes x, y, and z here are manually drawn to show the coordinate system in MicroCityWeb and do not directly exist in the three-dimensional scene."},{header:"Setting up a Scene",slug:"setting-up-a-scene",content:`Setting up a scene requires the use of the setenv function, with the specific usage as follows:
local s = scene.setenv({grid="plane|sphere|none", bgcolor="rgb(255, 255, 255)", rotspeed=1, transpeed=1, camtype="ortho|persp", clear=true})
It can be simplified as follows:
local s = scene.setenv({key1 = value1, key2 = value2, ...})
The variable s holds the returned environment object. The optional parameters of the function will be described in detail below.`},{header:"Optional Parameters of a Scene",slug:"optional-parameters-of-a-scene",content:""},{header:"Parameter List",slug:"parameter-list",content:`grid: background grid of the scene
bgcolor: background color of the scene
camtype: camera view
clear: whether to clear the scene
rotspeed & transpeed*: adjustment of mouse operation speed`},{header:"grid: Background grid of the scene",slug:"grid-background-grid-of-the-scene",content:`Optional values Value
Meaning "none"
default, no grid "plane"
flat grid "sphere"
spherical grid`},{header:"bgcolor: Background color of the scene",slug:"bgcolor-background-color-of-the-scene",content:`Optional value types: Value Type
Example Built-in colors
"black", "white", "gray", etc. Hexadecimal colors
"#ffffff", "#fff", "#000000", "#000", etc. Colors represented by RGB
"rgb(255, 255, 255)", "rgb(0, 0, 0)", etc. Example:
scene.setenv({bgcolor='gray'}) -- Sets the background color to the built-in color "gray"
scene.setenv({bgcolor='#eee'}) -- Sets the background color to the hexadecimal color "#eee"
scene.setenv({bgcolor='rgb(255, 255, 255)'}) -- Sets the background color to white`},{header:"camtype: Camera angle of view",slug:"camtype-camera-angle-of-view",content:`Optional values: Value
Meaning "ortho"
Orthographic. Equivalent to a projection onto the x and y plane. User's view is in two-dimensional space. "persp"
Perspective (default). User's view is in three-dimensional space.`},{header:"clear: Whether to clear the scene",slug:"clear-whether-to-clear-the-scene",content:"When the value is set to true, the scene is cleared. The setenv function does not clear the original scene by default, unless the value of the clear parameter is manually set to true."},{header:"rotspeed & transpeed",slug:"rotspeed-transpeed",content:`Value
Meaning rotspeed
Sets the speed of rotating a 3D object with the mouse. transpeed
Sets the speed of translating a 3D object with the mouse. These two parameters usually do not need to be set specially, and the default values can be used.`},{header:"Others",slug:"others",content:""},{header:"Regarding high-frequency setting scenarios",slug:"regarding-high-frequency-setting-scenarios",content:`2023/03/21: It has been found that setting the scene too frequently can cause excessive memory usage and browser crashes. Therefore, it is recommended to avoid calling the scene.setenv() function in a loop as much as possible.
If it is necessary to do so, make sure that the frequency of calls is relatively low. This allows the browser to have enough time for garbage collection, otherwise it may cause the browser to crash.`}]},{path:"/notes/",title:"笔记",pathLocale:"/",contents:[{header:"笔记",slug:"笔记",content:""},{header:"通用知识",slug:"通用知识",content:`Lua语言快速上手
MicroCity的版本
时间推进法`},{header:"MicroCity（桌面版）",slug:"microcity-桌面版",content:`结果可视化
操作网络
模型求解`},{header:"MicroCityWeb",slug:"microcityweb",content:`用户界面简介 [EN]
3D 场景 [EN]
3D 对象 [EN]`},{header:"思路",slug:"思路",content:"仓库仿真"}]},{path:"/notes/lp.html",title:"模型求解",pathLocale:"/",contents:[{header:"模型求解",slug:"模型求解",content:`在MicroCity中可以对数学模型进行求解。接下来，本文将介绍在MicroCity中求解数学模型的常见过程，并提供一些技巧帮助你更好地建模。
规划模型中所有函数的详细用法可以参考文档 4.8混合整数线性规划`},{header:"创建模型对象",slug:"创建模型对象",content:`创建规划模型对象，存入变量lp中。
local lp = CreateLP() 官方文档中将创建的数学模型对象存入变量LPModel中，作用同本文的lp`},{header:"写入数学模型",slug:"写入数学模型",content:`此时，数学模型的对象已经创建并存入了变量lp中，可以对其进行更进一步的操作。数学模型一般分为两个部分： 目标函数
约束方程 接下来，先介绍创建目标函数的具体做法。`},{header:"创建目标函数",slug:"创建目标函数",content:'MicroCity中，使用SetObjectFunction()设置模型对象的目标函数。允许选择目标函数求最大值或最小值。具体用法如下： SetObjFunction(lp, coeff, "max") --求最大值 SetObjFunction(lp, coeff, "min") --求最小值 "min"和"max"不区分大小写，写"MIN"和"MAX"也可以'},{header:"参数说明及示例",slug:"参数说明及示例",content:`参数
作用 lp
数学模型对象。将数学模型输入函数中，为模型设置目标函数 coeff
目标函数系数，是一个table类型的变量。用于确定模型中目标函数的系数。 "min"或"max"
确定目标函数求最大还是求最小。 coeff是目标函数的系数列表，是一个table类型的变量。假设你要求函数4x1+12x2+18x34x_1+12x_2+18x_34x1​+12x2​+18x3​的最小值，则添加目标函数的做法如下：
-- 假设你已经创建了模型对象，并存入变量lp中 -- 4*x1 + 12*x2 + 18*x3
local coeff = {4, 12, 18} -- 设置目标函数：求最小
SetObjFunction(lp, coeff, "min")`},{header:"添加约束方程",slug:"添加约束方程",content:`在MicroCity中，添加模型约束的函数为AddConstraint()，用法如下： -- 使用符号表达
AddConstraint(lp, cons, "<=", b) -- 或者可以使用缩写表达
AddConstraint(lp, cons, "le", b) -- 使用符号表达
AddConstraint(lp, cons, ">=", b) -- 或者可以使用缩写表达
AddConstraint(lp, cons, "ge", b) -- 使用符号表达
AddConstraint(lp, cons, "==", b) -- 或者可以使用缩写表达
AddConstraint(lp, cons, "eq", b)`},{header:"参数说明",slug:"参数说明",content:`参数
作用 lp
数学模型对象。将数学模型输入函数中，为模型添加约束 cons
约束方程系数。和设置目标函数中的cons一样，也是一个table类型的变量。用于确定约束方程中各个变量的系数。 "<=" 或 ">=" 或 "=="，或其对应的字母表达
确定约束方程与右端项的关系 b
一个数字，表示约束方程的右端项。可以是变量也可以是常量`},{header:"示例",slug:"示例",content:`上面已经设置了目标函数为4x1+12x2+18x34x_1+12x_2+18x_34x1​+12x2​+18x3​，假设你要为这个函数添加两个约束方程：
{x1+3x3≥32x2+2x3≥5
\\left\\{\\begin{matrix} x_1+3x_3\\ge3 \\\\ 2x_2+2x_3\\ge5 \\end{matrix}\\right. {x1​+3x3​≥32x2​+2x3​≥5​
添加对应约束方程：
-- 添加约束：x1+3*x3≥3
cons = { 1, 0, 3 }
AddConstraint(lp, cons, ">=", 3) -- 添加约束：2*x2+2*x3≥5
cons = { 0, 2, 2 }
AddConstraint(lp, cons, ">=", 5)
不难注意到，系数的个数和目标函数中变量的个数一致。因此，在编程求解之前首先要搞清楚变量的总数，并安排好各个变量的位置。`},{header:"设置变量类型",slug:"设置变量类型",content:`MicroCity中的数学规划支持整数规划。如果没有对变量设置SetUnbounded()，默认变量的取值范围是非负实数(≥0)。下面介绍变量类型设置的详细做法。
你可以将模型中第i个变量设置为整数变量或0-1变量。如果不将变量设置为这些类型，则默认变量为非负实数。 SetInteger(lp, i) --整数变量 SetBinary(lp, i) --0-1变量 让第i个变量的值可以是负数（默认取不到负数）：
SetUnbounded(lp, i)`},{header:"模型求解和输出",slug:"模型求解和输出",content:""},{header:"模型求解",slug:"模型求解-1",content:`由于目标函数和约束方程都已经添加完毕，因此模型的求解就很简单了，只需要一步：
SolveLP(lp)
执行完这条语句后，存放于变量lp内的数学模型就求解完毕了🎉`},{header:"输出",slug:"输出",content:`求解完还需要输出，否则就不知道求解的结果如何。以下是常用的输出求解结果的函数。
获取目标函数值：
GetObjective(lp)
获取第i个变量的值：
GetVariable(lp, i)`},{header:"SolveLP",slug:"solvelp",content:`SolveLP()函数在求解完毕后也有输出，输出代码的含义如下： 输出代码
含义 0
成功 -1
无效的LP模型 -2
无内存 1
次优 2
无可行解 3
无界解 4
退化 5
遇到数值错误 6
用户终止了求解 7
超时错误 其他返回值表示的含义请参阅文档 4.8混合整数线性规划 中的SolveLP()函数。`},{header:"模型求解示例",slug:"模型求解示例",content:`这里提供一个简单的从建模至求解的示例供参考。（其实就是将前面的拼起来）
算例：
minf=4x1+12x2+18x3s.t.{x1+3x3≥32x2+2x3≥5x1,x2,x3∈N
minf=4x_1+12x_2+18x_3\\\\
s.t.\\left\\{\\begin{matrix} x_1+3x_3\\ge3 \\\\ 2x_2+2x_3\\ge5 \\\\ x_1,x_2,x_3\\in N
\\end{matrix}\\right. minf=4x1​+12x2​+18x3​s.t.⎩⎨⎧​x1​+3x3​≥32x2​+2x3​≥5x1​,x2​,x3​∈N​ N表示自然数（非负整数集合） 脚本
-- 创建线性规划对象
local lp = CreateLP() local n = 3 --设置目标函数个数 -- 目标函数：4*x1 + 12*x2 + 18*x3
-- 设置目标函数系数，目标函数求最小
local coeff = { 4, 12, 18 }
SetObjFunction(lp, coeff, "min") -- 添加约束1：x1 + 3*x3 ≥ 3
cons = { 1, 0, 3 }
AddConstraint(lp, cons, ">=", 3) -- 添加约束2：2*x2 + 2*x3 ≥ 5
cons = { 0, 2, 2 }
AddConstraint(lp, cons, ">=", 5) -- 由于没有设置SetUnbounded()，
-- 默认所有变量取值非负，
-- 因此不用针对变量非负添加约束。 -- 设置所有变量为整数
for i = 1, n do SetInteger(lp, i)
end -- 求解模型
SolveLP(lp) -- 输出目标函数值
print("目标函数值：",GetObjective(lp)) -- 输出各个变量的值
for i = 1, n do print("x",i,"=",GetVariable(lp, i))
end
输出结果
目标函数值：42
x1=0
x2=2
x3=1`},{header:"建模的一些技巧",slug:"建模的一些技巧",content:""},{header:"线性化",slug:"线性化",content:`有时候我们会遇到多下标的建模问题，如决策变量为xijx_{ij}xij​，这个时候就要将其进行线性化编码。
假设决策变量本身的形状共有3行4列，即： 列1
列2
列3
列4 x11x_{11}x11​
x12x_{12}x12​
x13x_{13}x13​
x14x_{14}x14​ x21x_{21}x21​
x22x_{22}x22​
x23x_{23}x23​
x24x_{24}x24​ x31x_{31}x31​
x32x_{32}x32​
x33x_{33}x33​
x34x_{34}x34​ 假设目标函数要将这些决策变量求和，即 F=∑i=13∑j=14xijF=\\sum_{i=1}^3\\sum_{j=1}^4x_{ij}F=∑i=13​∑j=14​xij​ 如果要将其输入目标函数，此时可以将其线性化为 x11+x12+...+x14+x21+...+x24+x31+...+x34x_{11}+x_{12}+...+x_{14}+x_{21}+...+x_{24}+x_{31}+...+x_{34}x11​+x12​+...+x14​+x21​+...+x24​+x31​+...+x34​
由于只有两个维度，因此可以使用两个for实现：
local cons = {}
for i = 1, 3 do -- 第一维 for j = 1, 4 do -- 第二维 cons[4 * (i - 1) + j] = 1 -- 填入系数 -- 其中 4 * (i - 1) + j 的思想类似于进位 end
end --结果：
-- cons长度为12，值都为1`},{header:"例题：指派模型",slug:"例题-指派模型",content:`下面以一个实际的例题来看看多维线性化的具体使用方法及其方便之处。
甲、乙、丙、丁四人配送A，B，C，D四种货物，所需时间如表所示。若一种货物只交一人送货，则应指派何人配送何种货物，能使总的时间最少？ 人\\工件
A
B
C
D 甲
14
9
4
15 乙
11
7
9
10 丙
13
2
10
5 丁
17
9
15
13 假设货物A、B、C、D对应的编号依次为1、2、3、4，设 xij=1x_{ij}=1xij​=1 时表示第i个人送j货，xij=0x_{ij}=0xij​=0 时表示第i个人不送j货。
则上述问题的数学模型可以表示为
minZ=∑i=14∑j=14cijxijs.t.{∑j=14xij=1,i=1,2,...,4∑i=14xij=1,j=1,2,...,4xij=0,1
minZ=\\sum_{i=1}^4\\sum_{j=1}^4c_{ij}x_{ij}\\\\
s.t.\\left\\{\\begin{matrix} \\sum_{j=1}^4x_{ij}=1, i=1,2,...,4 \\\\ \\sum_{i=1}^4x_{ij}=1, j=1,2,...,4 \\\\ x_{ij}=0,1
\\end{matrix}\\right. minZ=i=1∑4​j=1∑4​cij​xij​s.t.⎩⎨⎧​∑j=14​xij​=1,i=1,2,...,4∑i=14​xij​=1,j=1,2,...,4xij​=0,1​
求解代码
-- 效率矩阵
local cost = { { 14, 9, 4, 15 }, { 11, 7, 9, 10 }, { 13, 2, 10, 5 }, { 17, 9, 15, 13 }
} local lp = CreateLP() -- 创建目标函数
local coeff = {}
for i = 1, 4 do for j = 1, 4 do -- 此处可以轻松将二维数组转换为一维数组 coeff[4 * (i - 1) + j] = cost[i][j] end
end SetObjFunction(lp, coeff, "min") --添加约束
for k = 1, 4 do -- 第i维的值控制 local cons = {} for i = 1, 4 do for j = 1, 4 do if i == k then -- j求和，判断i cons[4 * (i - 1) + j] = 1 else cons[4 * (i - 1) + j] = 0 end end end AddConstraint(lp, cons, "==", 1)
end for k = 1, 4 do -- 第j维的值控制 local cons = {} for i = 1, 4 do for j = 1, 4 do if j == k then --i求和，判断j cons[4 * (i - 1) + j] = 1 else cons[4 * (i - 1) + j] = 0 end end end AddConstraint(lp, cons, "==", 1)
end -- 求解模型
SolveLP(lp) -- 输出目标函数值
print("目标函数值：",GetObjective(lp)) -- 输出决策变量
for i = 1, 4 do -- 第一维 for j = 1, 4 do -- 第二维 local x = GetVariable(lp, 4 * (i - 1) + j) if x~=0 then print("x[", i, "][", j, "]=", x) end end
end
输出
目标函数值：29
x[1][3]=1
x[2][1]=1
x[3][4]=1
x[4][2]=1 结果
人
配送工件 x13=1x_{13}=1x13​=1
甲
C x21=1x_{21}=1x21​=1
乙
A x34=1x_{34}=1x34​=1
丙
D x42=1x_{42}=1x42​=1
丁
B`},{header:"中间变量的处理",slug:"中间变量的处理",content:`有时候模型中会存在一些中间变量，这些变量必须要在矩阵中有对应的位置才能对其进行求解，而这些中间变量不参与目标函数值的运算。可以将中间变量对应位置的系数设为0。
假设x1,x2,x3,x4x_1,x_2,x_3,x_4x1​,x2​,x3​,x4​为决策变量，y1,y2y_1,y_2y1​,y2​为中间变量。目标函数为:
z=∑i=14xi
z=\\sum_{i=1}^4x_i
z=i=1∑4​xi​
则目标函数系数可以设为：
local fcons = {1, 1, 1, 1, 0, 0}
接下来按照一般流程做就可以啦😎`}]},{path:"/notes/lua.html",title:"Lua语言快速上手",pathLocale:"/",contents:[{header:"Lua语言快速上手",slug:"lua语言快速上手",content:"由于MicroCity采用的脚本语言是Lua，因此在开始使用MicroCity编写脚本之前需要先熟悉Lua的基本用法。本文介绍了MicroCity编写Lua脚本的常用的语法，能够帮助你快速地根据其他编程语言中的概念理解MicroCity脚本编写的总体思路。"},{header:"变量和函数定义",slug:"变量和函数定义",content:`lua会自动识别变量类型，因此无需在变量名称前定义变量类型，直接赋值即可。
a = 1.5
b = "string"
c = {} -- c为集合，见下文介绍
函数的定义
function add(a, b) return a + b
end
上方简单定义了一个add()函数，目的是把输入的两个变量相加返回结果。
变量分为全局变量和局部变量，函数也是如此。局部变量和函数的定义如下。
-- 定义局部函数
local function show(msg) print(msg)
end -- 定义局部变量
local a = 1
如果局部定义的内容（函数或变量）和全局定义的内容有冲突，以局部的内容优先。存在这种冲突时，你操作的内容是局部的内容。
如果没有明确需要操作全局变量，建议尽量将变量定义为局部变量。这种做法可能会减少bug的出现，也是更加安全的做法。`},{header:"条件",slug:"条件",content:`就是if，具体实现形式有如下几种： 普通形式 if condition then print("condition==true")
end 带else的形式 if condition then print("condition==true")
else print("condition==false")
end 以及使用elseif的形式 if number > 0 then print("number>0")
elseif number < 0 then print("number<0")
else print("number==0")
end
Lua中相等判断的运算符为==，不等判断的运算符为~=。您可以将运算符运用于条件表达式。下面是一个简单的举例：
print(1==1) -- true
print(1~=1) -- false`},{header:"循环",slug:"循环",content:"记录一下最常用的两种循环: for&while"},{header:"for",slug:"for",content:`最普通的形式
-- 输出1到10共10个数
for i = 1:10 do print(i)
end
如果你比较熟悉C语言或C类语言，以上代码对应的形式如下
for(int i=1; i<=10; i++){ printf("%d\\n",i);
}
考虑步长
-- 输出10到1共10个数，步长为-1
for i = 10:1:-1 do print(i)
end 步长为负数时，需要注意开始和结束的数字也应该为倒序 泛型循环
可以直接遍历一个集合中的所有元素。
i为集合元素的下标，从1开始；v为集合元素的值。
a = {4,7,9}
for i,v in ipairs(a) do print("index=",i,"\\tvalue=",v)
end ipairs适用于数组（i估计是integer的意思），pairs适用于对象，因为数组也是对象，所以pairs用于数组也没问题。`},{header:"while",slug:"while",content:`while的常用方法就一个
local condition = true
while condition do print("while==true") condition = false
end
和C类语言一样。只要condition为true的时候while就会一直执行。当condition被设置为false的时候，while就会结束运行。`},{header:"循环操作符",slug:"循环操作符",content:`同其他语言的规定一样，break关键字用于跳出循环。
LUA中没有continue，只有break。但是可以可以通过使用if+break的形式实现continue的功能。`},{header:"Lua的小特性：集合",slug:"lua的小特性-集合",content:`虽然Lua里面把它自己的数组称作table，但是我认为这个数据结构更类似于Python的集合或者json，里面可以存储任何东西，不受结构约束。
collection = {{"a", 1, 2}, "abc", {2, 3}}
如果需要查询数组的长度，只需要在数组名前面添加#即可得到
list = {1, 2, 3, 4, 5}
for i=1,#list do print(list[i])
end
Lua的数组（集合）下标从1开始，不同于C类语言的0。此处以前面定义的collection为例：
print(collection[1][1]) --a
print(collection[2]) --abc
print(collection[3][2]) --3`},{header:"table的排序",slug:"table的排序",content:""},{header:"默认排序方法",slug:"默认排序方法",content:`可以使用函数对列表进行排序，最简单的用法如下
table.sort(list) -- 默认升序排序
此处提供一个实验案例
-- 函数：打印列表
function PrintList(list) -- 输出列表 local listStr = "" for i = 1, #list do listStr = listStr .. list[i] .. " " end print(listStr)
end local list = { 3, 7, 2, 5, 4 } -- 原始列表 PrintList(list) -- 输出原始列表
table.sort(list) -- 对列表进行排序
PrintList(list) -- 输出排序后的列表 -- 结果：
-- 3 7 2 5 4 (原始列表)
-- 2 3 4 5 7 (排序后的列表)`},{header:"自定义排序方法",slug:"自定义排序方法",content:`table.sort函数也可以使用自定义排序规则，但是这个规则你需要写在函数里。
table.sort(list, function(a, b))
function(a, b)是自定义的排序规则，要求最终返回一个bool值(true或false)。a和b分别为列表中的任意两项，如果函数返回true，则a在b的前面，否则b在a的前面。
下面提供了2个示例供参考。`},{header:"示例1：上面代码改为降序输出",slug:"示例1-上面代码改为降序输出",content:`-- 此处省略PrintList()函数，函数代码与上方相同 local list = { 3, 7, 2, 5, 4 } -- 原始列表 PrintList(list) -- 输出原始列表
table.sort(list, function(a, b) -- 对列表进行排序 return a > b -- 降序排序，如果a>b，则a在b前面
end)
PrintList(list) -- 输出排序后的列表 -- 结果：
-- 3 7 2 5 4 (原始列表)
-- 7 5 4 3 2 (排序后的列表)`},{header:"示例2：二维数组中的排序",slug:"示例2-二维数组中的排序",content:`-- 函数：打印列表
function PrintList(list) -- 输出列表 local listStr = "" for i = 1, #list do listStr = listStr .. "\\n" .. list[i][1] .. ", " .. list[i][2] end print(listStr)
end -- 原始列表
local list = { { 3, 5 }, { 7, 6 }, { 2, 2 }, { 5, 1 }, { 4, 3 } } PrintList(list) -- 输出原始列表 -- 以列表中每项的第1维降序排序
table.sort(list, function(a, b) return a[1] > b[1]
end)
PrintList(list) -- 输出排序后的列表 -- 以列表中每项的第2维降序排序
table.sort(list, function(a, b) return a[2] > b[2] end)
PrintList(list) -- 输出排序后的列表 -- 结果：
-- 原始列表：
-- 3, 5
-- 7, 6
-- 2, 2
-- 5, 1
-- 4, 3 -- 以第1维降序排序：
-- 7, 6
-- 5, 1
-- 4, 3
-- 3, 5
-- 2, 2 -- 以第2维降序排序：
-- 7, 6
-- 3, 5
-- 4, 3
-- 2, 2
-- 5, 1`},{header:"table的引用",slug:"table的引用",content:`当没有对table进行对拷，而直接复制的时候，刚刚新得到的list2相当于原list1的引用，称为浅拷贝。当你修改浅拷贝得到的list2中的元素时，由于两个table是引用的关系，list1中的元素也会随之改变。
上面的示例代码也遵循了这一原理。下面将用一个新的例子突出这一特点。`},{header:"示例：浅拷贝",slug:"示例-浅拷贝",content:`function PrintList(list) -- 输出列表 local listStr = "" for i = 1, #list do listStr = listStr .. list[i] .. " " end print(listStr)
end list1 = { 1, 2, 3, 4, 5 }
PrintList(list1)
-- 1 2 3 4 5 list2 = list1
PrintList(list2)
-- 1 2 3 4 5 -- 修改list2的第2个元素
list2[2] = 10
PrintList(list2)
-- 1 10 3 4 5 PrintList(list1)
-- 1 10 3 4 5`},{header:"示例：深拷贝",slug:"示例-深拷贝",content:`而如果想要复制一个全新的列表list2怎么办呢？那么你就需要对table中的元素进行逐个复制，也称深拷贝。
-- PrintList函数代码与上方相同 list1 = { 1, 2, 3, 4, 5 }
PrintList(list1)
-- 1 2 3 4 5 list2 = {} -- 新建一个空列表 -- 将list1的元素复制到list2
for index, value in pairs(list1) do table.insert(list2, value)
end
PrintList(list2)
-- 1 2 3 4 5 -- 修改list2的第2个元素
list2[2] = 10
PrintList(list2)
-- 1 10 3 4 5 PrintList(list1)
-- 1 2 3 4 5 (没有发生变化)
在这个例子中，修改深拷贝得到的list2中的元素并不会对原来的list1产生影响。`}]},{path:"/notes/network.html",title:"操作网络",pathLocale:"/",contents:[{header:"操作网络",slug:"操作网络",content:""},{header:"网络拓补化",slug:"网络拓补化",content:`网络拓补化简单来说就是一个网络有节点，有节点之间的连线。如果把连线理解为道路，那么你需要解决以下问题： 这条路是单向通行的还是双向通行？
这条路的起点是哪？终点是哪？ 一般认为一个网络图中，每条道路都是单向的。如果需要一条双向通行的道路，只需要反向添加一条道路即可。像这样： 这样，每条路就有了通行方向。一般规定出发点的符号为O，目的点的符号为D，这样，使用O和D就能清晰地描述每条路的方向。
对于上图的示例，上方的道路O=1，D=2，所以方向描述为从1到2；下方的道路O=2，D=1，方向描述为从2到1。`},{header:"使用函数对网络进行拓补",slug:"使用函数对网络进行拓补",content:`MicroCity可以处理网络，所有函数的具体用法见参考文档：4.6 网络
此处简单列举几种创建MicroCity中网络对象的方法：
local network = CreateNetwork() 创建一个空网络对象并返回此对象。network就是返回得到的空网络对象。
创建对象后，可以使用AddLink和DelLink等函数在网络对象中创建连接。具体用法见参考文档。
local network, nodes, links = CreateNetwork(Lines)
此处的Lines为一个矢量图形对象，类型为Line。MicroCity中的CreateNetwork()函数在这种用法中可以直接帮你在道路连线上添加起点和终点，并自动在返回的links对象中标上O点和D点的编号。
也就是说，你只需要提供网络连线即可，剩下的拓补化工作可以由函数自动完成。我认为这可能是最常用的创建网络图并进行拓补化的方法。`},{header:"网络拓补的简单示例",slug:"网络拓补的简单示例",content:`-- 打开连线图层
Shapes = Open("Shapes.shp") -- 拓补化网络
network, network_nodes, network_links = CreateNetwork(Shapes) -- 创建图层，用于存放拓补后的网络节点
Nodes = CreateShapes("Nodes", "point")
-- 将拓补化网络得到的网络节点复制到图层中
AddField(Nodes, "ID", "int")
for i = 1, GetRecCount(network_nodes) do CopyShapeTo(Nodes, 0, 0, GetShape(network_nodes, i))
end -- 创建图层，用于存放拓补后的网络连线
Links = CreateShapes("Links", "line")
-- 将网络连线中原有的属性字段复制到图层中
for i = 1, GetFieldCount(Shapes) do AddField(Links, GetField(Shapes, i))
end
-- 为连线添加属性字段，稍后会通过函数将对应的数据添加到其中
AddField(Links, "ID", "int")
AddField(Links, "O", "int")
AddField(Links, "D", "int")
AddField(Links, "IMPEDANCE", "double") --阻抗
AddField(Links, "DIRECTION", "int") --方向
AddField(Links, "CAPACITY", "double") --容量
-- 将拓补化网络得到的网络线路复制到图层中（包括对应数据）
for i = 1, GetRecCount(network_links) do CopyShapeTo(Links, 0, 0, GetShape(network_links, i))
end -- 更新图层
Update(Nodes)
Update(Links) 示例改自MicroCity自带的编辑器 虽然一开始就输入了网络连线，但是在拓补化的过程中可能由于连线上的节点重合，在拓补化的过程中会把连续的连线拆成多段，因此得到的Links图层可能与输入的图层存在不同。而拓补化得到的节点Nodes和得到的连线Links是对应的，因此推荐使用拓补化处理完的Links图层作为网络节点之间的连线。`},{header:"踩坑经验：创建网络对象",slug:"踩坑经验-创建网络对象",content:`如果需要使用CreateNetwork(Nodes, Links)函数再次建立网络，需要保留以下在拓补化过程中添加的属性，否则将会出现网络初始化错误的问题：
AddField(Links, "ID", "int")
AddField(Links, "O", "int")
AddField(Links, "D", "int")
AddField(Links, "IMPEDANCE", "double") --阻抗
AddField(Links, "DIRECTION", "int") --方向
AddField(Links, "CAPACITY", "double") --容量
如果只是一次性地进行网络拓补，不会再用拓补化过的网络重新创建网络对象，也需要先创建以上属性。拓补化后数据并不会根据属性名称填入，而是根据位置填入。
如果只创建了O和D两个属性，则O的属性中会被填入ID数据，而D的属性中会被填入O的数据。而如果只根据上面的顺序创建了ID、O、D三个属性，由于数据顺序根据位置填入，则最终的填入的数据是正确的。`},{header:"CopyShapeTo函数",slug:"copyshapeto函数",content:`拓补的操作中使用了CopyShapeTo()函数，其作用是将一个Shape对象复制到Shapes图层中的对应位置，并根据输入的dx和dy在Shapes图层中进行位置变换。其中，dx和dy分别为在x和y方向上的位移量（理解为deltax和deltay）。
CopyShapeTo(TargetShapes, dx, dy, Shape1 [, Shape2, ...])
根据函数的用法可以看到，还支持复制到多个图层上的对应位置后再进行变换。
如果只想将图形复制到对应图层的对应位置，而不进行变换，可以将dx和dy设为0，像这样：
CopyShapeTo(TargetShapes, 0, 0, Shape1 [, Shape2, ...])
CopyShapeTo()函数的具体用法见 4.3 矢量图形和表格`},{header:"网络拓补化后算法的使用",slug:"网络拓补化后算法的使用",content:"对网络进行拓补化后，可以使用自带的函数求解很多问题，如：最短路径生成树、最短路径、最短距离等。本文以计算最短路径和最短路长为例介绍一下计算最短路径的流程及踩过的坑"},{header:"计算最短路径和最短路长",slug:"计算最短路径和最短路长",content:"要计算最短路径，首先必须要清楚计算网络中哪两个点之间的最短路径。这里以startID和endID分别表示起点和终点。本文假设你已经创建了网络对象，并存入名为Network的变量中。如果你不知道该如何创建一个网络图，可以参考上方介绍的 网络拓补化 流程。"},{header:"创建最小生成树",slug:"创建最小生成树",content:`第一步，先要以startID为开始点创建最短路径生成树。理论上以始点创建最短路径生成树后，就可以获取始点到网络上任意一点的最短距离。创建最短路径生成树可以调用GenSTPTree()函数实现。
GenSTPTree(Network, startID [, endID])
此处的endID不是必须的，如果有可以提供给函数。也就是说，您共有两种做法实现这一步：
GenSTPTree(Network, startID) --方法1
GenSTPTree(Network, startID , endID) --方法2（建议）
一般认为提供的信息越完备，执行的效果越好。由于在计算最短路径之前就知道endID，因此建议将其提供给函数。 此处已经对函数的这种中括号写法进行了解释，后文中将会直接使用这种写法。 第二步，获取最短路径对应的信息。前面提到，确定起点和终点后才能确定两点之间的最短线路。由于前面使用始点startID创建了最小生成树，因此现在只需要提供终点endID就能获取到最短路径和最短路长。下面介绍了使用网络对象Network获取最短路长和最短路径的方法。`},{header:"获取最短路长",slug:"获取最短路长",content:`MicroCity的文档中提供了3种获取最短路径的方式。
第一种，由于前面计算了最短路径生成树，已经输入了起始点的信息。因此现在只需要提供终点信息即可。（即使刚刚可能已经提供了终点信息）函数需要网络对象Network和终点endID用法如下。
local len = GetSTPLen(Network, endID)
第二种，通过提供始点startID和终点endID计算两个点在网络上的最短路长。这种用法不要求在计算最短路径前先生成最短路径生成树，可以直接使用。Network为网络对象，用法如下：
local len = GetSTPLen(Network, startID, endID)
第三种，通过提供始点和终点的xy坐标计算两个点在网络上的最短路长。这种用法也不需要在计算最短路径前先生成最短路径生成树，可以直接使用。起点的坐标设为x1，y1；终点的坐标设为x2，y2，Network为网络对象，用法如下：
local len = GetSTPLen(Network, x1, y1, x2, y2)`},{header:"获取最短路径",slug:"获取最短路径",content:`MicroCity的文档中提供了3种信息可供获取，分别为： 点或线的ID序列
点或线的索引(index)序列
点或线的形状(Shape)序列。 函数的详细用法请参阅 4.6 网络 - 算法，此处仅以第2种：点或线的索引序列作为示例。
返回点的序列：
GetSTPPath (Network, endID, "iNodeShp")
返回线的序列：
GetSTPPath (Network, endID, "iLinkShp")
这样就能返回所有点或线的索引序列了。`},{header:"踩坑经验：序列",slug:"踩坑经验-序列",content:`在Lua语言快速上手中介绍过Lua中的集合，它提供了丰富的特性帮助编写代码。但是没有听说过序列。序列是下面这个东西：
local x, y = GetCenterXY(Shapes) --借用一下这个函数
里面的x,y就是一个序列。还有这种情况：
GetDistance (x1, y1, x2, y2 [, x3, y3, ...]) --再次借用一个函数
在这种情况下，输入的点越多，返回值也越多。如果输入4个点，可以这样处理：
-- 正常情况
d1, d2, d3, d4 = GetDistance(x1, y1, x2, y2, x3, y3, x4, y4) -- 也可以仅取前两个返回值
d1, d2 = GetDistance(x1, y1, x2, y2, x3, y3, x4, y4) -- 当然，只取一个返回值也可以
d1 = GetDistance(x1, y1, x2, y2, x3, y3, x4, y4)
上面的函数输入参数数量和输出参数数量是有关系的。如果输入了n个点的参数，就会返回n个点的距离。但是对于网络拓补来说，在返回最短路径的时候返回的都是参数序列，而我并不知道函数会给我传出多少个参数；而且当输出参数的个数太多的时候，也不太可能手动创建很多个变量存放这些参数。
-- 错误做法：
local indexList = GetSTPPath(Network, endID, "iLinkShp")
-- GetSTPPath()函数不会返回一个table
-- 这里获取到的indexList只是第一个Link的index，是一个数值。
既然等号左边没有办法改变，就从等号右边做出改变。还记得怎么定义一个最简单的table吗？
local list = {1, 2, 3, 4, 5}
右边的1, 2, 3, 4, 5其实可以看做一个序列。所以，只要给函数的返回值加上括号就能把他们全部捞起来 ( •̀ ω •́ )✧
local indexList = { GetSTPPath(Network, endID, "iLinkShp") }
上面的这种做法得到的indexList就是一个table类型的变量了。然后就可以开始执行集合的各种操作了捏😋`}]},{path:"/notes/timelapse.html",title:"时间推进法",pathLocale:"/",contents:[{header:"时间推进法",slug:"时间推进法",content:"仿真中的时间推进法是指在仿真过程中，如何推进仿真时间。"},{header:"时间推进法的分类",slug:"时间推进法的分类",content:`常见的仿真时间推进方法有三大类： 事件调度法：事件调度法是一种基于事件的仿真方法，它通过对仿真系统中各个事件进行排序，按照事件发生的先后顺序来进行仿真。
固定增量推进法：固定增量推进法是指在仿真过程中，固定一个时间增量，在设定起始时间后，在起始时间的基础上根据时间的增量来对时间进行推进模拟。
主导时钟推进法：主导时钟推进法是指在仿真过程中，由一个主导时钟控制整个仿真系统的运行，它通过控制时钟来控制仿真过程。`},{header:"实例",slug:"实例",content:""},{header:"事件调度法",slug:"事件调度法",content:`事件调度法是一种基于事件的仿真方法，它通过对仿真系统中各个事件进行排序，按照事件发生的先后顺序来进行仿真。在仿真过程中，仿真系统会根据当前仿真时间和各个事件发生的时间来确定下一个要发生的事件，并将仿真时间推进到该事件发生的时间。
自动化仓库仿真思路中使用的是简单的事件调度法。主要流程如下: 事先生成任务队列
依次执行任务队列中的任务 由于这个仿真的目的是为了测试仓库的效率，因此在这个仿真中省去了任务相继到达的时间差。所以，每个任务执行完毕后立即执行下一个任务，不需要在任务结束后推进到下一个任务的开始时间（推进量为0）。因此，只需要计量每个任务花费的时间并叠加到总时长（Tick）中。
由于题目没有给出具体数据（如AGV移动速度等，因此相关指标都用单位1表示），因此最终只得到执行任务所需的单位时间。
此外，在自动化仓库仿真思路中提到的改进空间也还使用了一部分的事件调度法。在改进的部分中，设定了从货架上装卸货物的时间，而这个时间一般不需要在仿真的过程中体现，且整个仿真中只有一个AGV在对货架进行操作，因此在出库事件发生时，直接推进到装卸完毕的时间，进行货架归位操作。`},{header:"固定增量推进法",slug:"固定增量推进法",content:"固定增量推进法是指在仿真过程中，固定一个时间增量，在设定起始时间后，在起始时间的基础上根据时间的增量来对时间进行推进模拟。在每个步长内，若无事件发生，则仿真钟再推进一个单位时间T；若在该步内有若干个事件发生，则认为这些事件均发生在该步的结束时刻。 例题"},{header:"代码流程示例",slug:"代码流程示例",content:`while scene.render() do t = t + dt if t % cycle ~= work_time then d = d + v * dt print("出发后", t, "小时") else print("出发后", t, "小时,休息") end car:setpos(CastToLine(d)) --直线轨迹 os.sleep(200)
end 此为代码主要流程，无法直接使用`},{header:"主导时钟推进法",slug:"主导时钟推进法",content:`主导时钟推进法是指在仿真过程中，由一个主导时钟控制整个仿真系统的运行，它通过控制时钟来控制仿真过程。主导时钟推进法可以分为两类：同步主导时钟和异步主导时钟。同步主导时钟是指所有模块都使用相同的主导时钟进行推进；异步主导时钟是指不同模块使用不同的主导时钟进行推进。
自动化仓库仿真思路的最后一部分提到了改进空间，最终实现了同步主导时钟的主导时钟推进法。 实现了但是没有放出代码`},{header:"自动化仓库仿真向主导时钟推进法的改变",slug:"自动化仓库仿真向主导时钟推进法的改变",content:`具体来说，只在原来的基础上做了如下改动： 删除大部分与事件调度法有关的 os.sleep()。 由于仿真流程比较简单，保留了与装卸货有关的事件调度法，优化资源占用。 设置全局仿真时钟，将 Agv:Move() 函数的思路从“固定步长执行任务并刷新场景”的改为“监测仿真时钟时长变化，根据时长变化执行任务并刷新场景”
新增仿真速度调整。 从以上的改动可以看出，仿真的核心从事件任务转向了仿真时钟。其中，场景刷新的部分使用了 os.clock() 实现。下面是一个有关于主导时钟推进法和 os.clock() 函数的简单的示例，修改自MicroCityWeb中内置的方块旋转案例。
local obj = scene.addobj('box') -- 初始位置
local x = 1
local y = 1
local z = 0 local rx, ry = 0.1, 0.1 -- x方向和y方向的旋转速度
local simspeed = 10 -- 仿真速度 local t = 0 -- 全局仿真时钟
local t0 = os.clock() -- 记录仿真开始的时间
while scene.render() do local dt = os.clock() - t0 -- 计算自上次记录时间以来的时间差 t = t + dt -- 仿真时钟走过相应时间差长度的时间 -- 设置方块此刻的旋转位置 x = x + rx * dt * simspeed y = y + ry * dt * simspeed obj:setrot(x, y, z) t0 = os.clock() -- 记录仿真时间
end
相关说明 当仿真速度 simspeed 为1时，表示仿真时钟与真实世界时钟的速度相同。simspeed 可以视作加速倍率。
dt 表示两次记录时间之间的时间差，仿真中的时间步进根据 dt*simspeed 计算得到。
相关信息
需要注意的是，时间增量 dt 的数值在每个循环周期一般都不相同，dt 的具体大小一般取决于电脑的运算能力 提示
有时两次记录时间之间没有太多耗时的操作，计算得到的 dt 可能为0。一般两次时间记录之间存在一个 scene.render()，这样一般能够保证两次采样的时间之间能够计算得到一个不为0的时间差值。`}]},{path:"/notes/versions.html",title:"MicroCity的版本",pathLocale:"/",contents:[{header:"MicroCity的版本",slug:"microcity的版本",content:""},{header:"MicroCity",slug:"microcity",content:"当MicroCity软件最初推出时，它只有一个桌面版本，这意味着它只能在Windows操作系统上运行。随着时间的推移，开发者（@mixwind)意识到这个限制使得许多潜在的用户无法使用该软件，因为他们的电脑使用的可能是其他操作系统，比如MacOS、Linux等。"},{header:"MicroCityWeb",slug:"microcityweb",content:`🎯访问MicroCityWeb 📍(离线版)下载
为了解决这个问题，开发者决定开发MicroCityWeb，这是一个可以直接在浏览器中运行的版本。MicroCityWeb不需要任何安装，只需要使用现代浏览器（如Google Chrome、Microsoft Edge）访问它的网站即可。虽然相比于桌面版，运行在浏览器上可能会造成一定的性能损失，但是这使得用户可以在几乎任何操作系统上使用该软件，比如电脑系统Windows、MacOS、Linux和手机/平板系统Android等。
尽管MicroCity的开发者推出了MicroCityWeb，您仍然可以继续使用以前开发的桌面版MicroCity。然而，桌面版本将不再更新新功能，所有新的功能和改进都将集中在MicroCityWeb版中。这个决定的目的是确保MicroCity能够专注于一种版本，并在这个版本中提供最好的体验。这也使得MicroCity更容易管理和维护，避免了版本控制问题。
值得一提的是，尽管桌面版本不再更新新功能，它仍然可以继续使用。如果用户已经习惯使用桌面版本，他们可以继续使用它。然而，如果用户希望体验最新的功能和改进，则需要改用MicroCityWeb版。
MicroCityWeb版也提供使用浏览器打包导出的离线版本（见上方 🔗链接）。 注意
但是由于Chromium浏览器内核的更新，某些老旧的系统版本可能不受支持（如Windows 8.1及以下的Windows版本、32位的Windows操作系统等）`},{header:"总结",slug:"总结",content:`总的来说，MicroCityWeb版的推出使得软件更加易用和普及，让更多的用户可以从中受益。同时，MicroCity桌面版本仍然可用，使得那些已经习惯于使用该版本的用户可以继续使用，并让他们更容易地过渡到MicroCityWeb版。
本文作者在写这篇笔记的时候MicroCityWeb正在被第一次用于教学环境中，已经基本能够正常运行并实现一定的仿真功能。本文作者的学习经历如下： MicroCity（桌面版）：物流信息管理
MicroCityWeb：物流系统仿真 本站笔记内容仅供参考。如果本文内容由于时间的因素出现偏差，也欢迎各位在Github上通过 Pull Request 的方式对本站内容进行修正🥳`}]},{path:"/notes/visualization.html",title:"结果可视化",pathLocale:"/",contents:[{header:"结果可视化",slug:"结果可视化",content:"本文介绍了多种将计算结果可视化的方法。包括改变内容的颜色，改变形状大小，改变元素显示的属性标签等。"},{header:"改变形状颜色",slug:"改变形状颜色",content:`在程序界面左下角的图形属性框内可以通过改变Colors栏目下的Type属性改变显示颜色的种类。共有3种选项： Unique Symbol：为同一个图层的所有图形指定某种颜色，此处不做过多介绍。
Lookup Table：通过数值查询表格显示对应的颜色。
Graduated Color：根据表中数值大小设置渐变色。`},{header:"Lookup Table 通过表中值改变颜色",slug:"lookup-table-通过表中值改变颜色",content:"将Type的属性值改为Lookup Table，根据表格中的数值改变图形的颜色，达到选中指定图形的效果。 此处示例将Lookup Table中的Attribute改为表格中的SELECT，通过表中的SELECT列值控制线的颜色（属性设置见上图）。当值为0时显示黑色，值为1时显示红色。表格中SELECT列的值和Lookup Table中的具体设置如下图。 最终实现的效果"},{header:"Graduated Color 根据值的大小显示渐变色",slug:"graduated-color-根据值的大小显示渐变色",content:"将Type的属性值改为Graduated Color，根据表格中不同数值的大小显示不同的颜色，达到显示渐变色的效果。 此处示例根据每个国家的人口数量显示渐变色。可以看到中国人口数量大，因此显示红色，印度人口数量也较大，因此显示橙色。其他地区人口数量较低，但也能通过颜色看出一些差别。 Graduated Color下的Colors属性中还可以调整其他配色方案。设置界面如下图，此处就不不一一列举了。 如果感兴趣可以参考文档2.1 展示世界地图中的示例手动尝试更改此属性。"},{header:"更改图形和标签的显示大小",slug:"更改图形和标签的显示大小",content:""},{header:"参考系的选择",slug:"参考系的选择",content:`显示内容尺寸的参考系有2个，一个是以地图为参考系，一个是以屏幕为参考系。此处将图形和标签的显示尺寸都设置为相同的参考系。
内容以地图为参考系时，显示内容的大小会根据地图大小同步缩放，如下图： (以地图为参考系放大) (以地图为参考系缩小) 内容以屏幕为参考系时，无论地图怎么缩放内容的大小都差不多，如下图： (以屏幕为参考系放大) (以屏幕为参考系缩小) 因此，绘图的时候要根据绘图的目的选定参考系。 如果需要在地图上绘制确定尺寸的形状或者标明确定尺寸的标签，如绘制一个半径为10km的圆，此时应选用以地图为参考系。
如果仅需要在任何尺寸下都能清晰显示标签和图形，此时可以选择以屏幕为参考系。`},{header:"参考系应用实例",slug:"参考系应用实例",content:"在图中绘制圆点，将圆的半径设置为圆的大小，并将圆的中心设置在每个绿点的中心上，灰色圆的大小表示每个绿点的覆盖范围大小。 图中以地图为参考系(Map Units)，以16为半径为每个绿点都绘制了一个灰色的圆，表示每个绿点的覆盖范围。这些灰色的圆存放在名为Range.shp的图层内，图层类型为Points。"},{header:"参考系的设定",slug:"参考系的设定",content:`在程序界面左下角的图形属性框内可以设置图形及其标签的尺寸参考系。 如图标记的两个位置可以分别调整图形尺寸的参考系和标签尺寸的参考系。 图形尺寸参考系设置：Size栏目下的Size relates to...调整图形尺寸的参考系，Default Size调整图形的相对于坐标系的尺寸。
标签尺寸参考系设置：Labels栏目下的Size relates to...调整标签尺寸的参考系，Default Size调整的是标签(Labels)相对于坐标系的尺寸。`},{header:"更改显示的标签",slug:"更改显示的标签",content:""},{header:"手动更改显示的标签",slug:"手动更改显示的标签",content:`在程序界面左下角的图形属性框内可以设置图形及其标签的尺寸参考系。上图中显示的标签为ID，如果需要改为表格中的其他列，可以更改Lables栏目下的Attribute属性实现。
需要更改的属性位置如图，图中需要显示表中对应MSG列的值，只需要将Labels栏目下的Attribute属性值改为MSG即可。 但是每次更改图形并执行Update()函数后标签（Label）会取消显示。如果需要执行的脚本中含有此对于此图层的Update()函数，不必在每次执行完脚本后手动重新设置显示的标签，可以通过脚本自动选择显示的标签。`},{header:"自动更改显示的标签",slug:"自动更改显示的标签",content:`通过SetParameter()函数可以更改属性值。以上图Labels栏目下的Attribute属性为例，选中这条属性后可以看到底栏显示其ID为LABEL_ATTRIB，其类型为Choice。 需要注意的是，当类型为Choice时，参数值从1开始编号，编号顺次对应下拉菜单的内容。 点开这条属性以后，可以看到MSG在第二个。 由于Lua中编号一般由1开始，因此此处ID的编号对应1，MSG的编号对应2。需要操作对象为MSG，所以函数中需要填入Choice类型的参数值为2。
此时已经得到了所有需要的参数，可以使用SetParameter()函数对显示的标签进行更改。
-- transports为图形图层
SetParameter(transports, "LABEL_ATTRIB", 2) SetParameter()函数需要在Update()函数执行后再执行，否则效果会被Update()函数覆盖。 现在回过头来再看看SetParameter()函数的具体用法：
SetParameter (Shapes|Table|Grid|Scene|Module, "id", Number|"String"|Object) 参数
含义 参数1
输入的对象，可以是Shapes、Table、Grid、Scene、Module 参数2
其中的id为属性对应的ID。如果是上文的情况，就是LABEL_ATTRIB 参数3
如果需要更改属性值，只接受数值(Number)、字符串(String)、对象(Object)三种类型 SetParameter()函数的介绍出现在文档 4.2 控制用户界面 中，请参阅。`},{header:"借助栅格图",slug:"借助栅格图",content:`栅格图也可以用于可视化，我认为栅格图最常用的场景就是绘制热力图。热力图的绘制主要通过修改栅格图上每个格子的值实现。如果不清楚栅格图的具体结构，可以先参考文档 3.3 栅格图。关于使用脚本控制栅格图，可以参考文档 4.4 栅格图形。
一种使用栅格图绘制热力图的场景就是绘制地价图。在绘制地价图时，我们可以遍历栅格图上的每个格点，计算该格点到每个仓库的距离之和。然后将该格点的值设置为这个值，就可以得到一张热力图。这种方法可以帮助我们可视化地价的分布情况，并且可以用来发现地价的趋势和规律。`}]},{path:"/notes/warehouse_simulation.html",title:"自动化仓库仿真思路",pathLocale:"/",contents:[{header:"自动化仓库仿真思路",slug:"自动化仓库仿真思路",content:"本文思路仅供参考，建议做出适当改进。"},{header:"具体问题：基于元胞自动机的仓库仿真",slug:"具体问题-基于元胞自动机的仓库仿真",content:`其中，出入库位置可以更改，叉车为AGV。
也就是说，这其实是一个移动货架仓库的元胞自动机仿真。AGV可以从货架底部穿过，可以移动到货架底部，把货架抬起并运送到出入库点。`},{header:"基本假设",slug:"基本假设",content:`所有货架上的货物相同
一个货架只放一个货物 因此，出库和入库可以看做完全相反的过程，所以此处只需要详细讨论出库的情况。即默认货架上本身就有货物。`},{header:"总体实现思路",slug:"总体实现思路",content:`将整个 3×33\\times33×3 的仓库中每个元胞的位置赋予 (x,y)(x,y)(x,y) 坐标，方便后续的移动操作。
以AGV为核心，对货架进行操作。AGV处于升起状态移动货架时，只需要将货架的坐标位置同步设为AGV的位置即可达到AGV移动货架的效果。`},{header:"业务流程",slug:"业务流程",content:"先按照需求数量乱序生成订单列表，AGV根据订单顺序依次将货架移动到出库点进行出库操作。"},{header:"业务逻辑",slug:"业务逻辑",content:`当执行出库时，AGV先找到最近的货架并移动到那个货架的位置，抬起货架。为货架（AGV）设定移动的终点，计算曼哈顿距离差值。 每次移动前都通过是否有障碍物判断货架移动的方向（xxx 方向或 yyy 方向）。
如果两个方向都被堵塞，则优先选择 yyy 方向（人为规定），将这个方向的障碍物递归移走，为货架移动腾出空间。如果 yyy 方向没有空间才选择移动 xxx 方向。`},{header:"过程优化：关于旧方法和新方法",slug:"过程优化-关于旧方法和新方法",content:`这两种方法都是可用的方法，但是 新方法对特定场景进行了优化，通过对障碍进行预判减少了操作步骤。 问题见下图
旧方法：无障碍预判（进出货点在 x=3,y=3x=3,y=3x=3,y=3 的位置） 👉 AGV完成第一个货架的出库后，向第二个货架移动，但是发现第一个货架挡住了去路，因此又回到第一个货架的位置将其移开，再回到第二个货架进行出库操作。
新方法：预判障碍（进出货点在 x=3,y=3x=3,y=3x=3,y=3 的位置） 👉 AGV完成第一个货架的出库操作后判断后一个货架是否需要移动其他位置的货架才能到达出入库点。如果需要，则移动障碍货架后才前往后一个货架进行出库。 相关信息
本着尽量少占用出入库点的原则，当有空位时AGV将把在出入口的货架移走。因此某些看起来冗余的操作并非没有考虑全面。 不同数量货架对应的最优布局方案（动图）
8个货架的情况，上面已经进行了展示。下面仅展示表中货架数为5和7的情况。其他情况详见附件。`},{header:"仿真数据收集分析",slug:"仿真数据收集分析",content:""},{header:"出入库效率最高",slug:"出入库效率最高",content:`仿真结果如下图所示，表示相同货架数量下得到的效率最佳货架的货架布局 最佳货架布局：相同货架数量下，取出所有货物操作次数（ticks）最小 布局图说明 白色：没有放置货架
浅灰色：货架，但是AGV一开始位于这个货架下方
灰色：货架。 表格说明 货架数量：存在于布局图中的货架数量
旧ticks：使用旧方法（无预判障碍）实现取货的操作次数。
新ticks：使用新方法（预判障碍）实现取货的操作次数。后面将对新方法进行说明。
黄色高亮：相同布局下操作次数最少（ticks最小）的方案`},{header:"空间利用率最大",slug:"空间利用率最大",content:`如果所有位置都放置货架，则无法访问到所有货架。因此，空间利用率最大的方法是放置8个货架。
颜色说明 绿色：有货物的货架
紫色：没有货物的货架
浅紫色：AGV抬起的货架
深紫色：AGV在这个货架下面，但是没有抬起货架
深灰色：进出货点 有时候刷新太快可能看不出AGV抬起 进出货点在x=2，y=3的位置`},{header:"创新点",slug:"创新点",content:`额外考虑货物种类不同的情况。
每次仿真会根据货架上的货物乱序生成需求。
面向对象编程。使用面向对象的思想编程有助于将问题抽象化、有助于流程细节的改进；再加上好的命名方式会让整个程序的流程和逻辑清晰很多，不至于睡一觉起来就忘了😂 不同的货物类型用不同的颜色表示。AGV状态颜色、空货架的颜色、进出库点的颜色含义与之前相同。 紫色：没有货物的货架
浅紫色：AGV抬起的货架
深紫色：AGV在这个货架下面，但是没有抬起货架
深灰色：进出货点 5个货架的情况示例 8个货架的情况示例`},{header:"仿真改进：三维化自动仓库仿真",slug:"仿真改进-三维化自动仓库仿真",content:"在这一部分题目也稍微有所变化，要求将元胞自动机仿真仓库案例三维化，进行自动化仓库仿真。具体要求如上图。"},{header:"总体思路",slug:"总体思路",content:""},{header:"三维化",slug:"三维化",content:`以基于元胞自动机的仓库仿真为核心，将其中元胞自动机仿真的部分改写为内部数据表，作为内部数据模型，对整个仿真过程的状态进行监视和控制。
由于基于元胞自动机的仓库仿真使用了面向对象的方法封装对象，业务逻辑和流程的构建中大面积使用了对象方法，因此此处只需要改写对象方法（如 Agv:Move(dx, dy) 等）即可实现由元胞自动机仿真到三维化自动仓库的仿真。 如果程序整体结构设计优良，应用“面向对象”将会大幅提升程序的可维护性，降低移植难度。 对于AGV、货架直接套用现成模型；对于货物，只需要设置其距离货架的相对高度列表即可实现货物自动存放于指定高度。 提示
如果需要套用现成模型，或者申请上传模型到本文作者维护的仓库，请参考文档 3D对象-外部模型`},{header:"出入库需求波动极大",slug:"出入库需求波动极大",content:`根据题目要求，基本上只存在有限的2种情况：3个货架、6个货架。
由于货架数量情况有限，而基于元胞自动机的仓库仿真中得到了性能最佳的仓库布局，因此可以直接套用对应货架数量的最佳布局，本问题中只需要考虑固定货架布局下货物的位置摆放问题。
对于3个货架的情况，其最佳布局属于高度对称的形态，距离出入库点的距离都为1，因此这种情况下只需要对1种情况进行仿真、收集其数据。
对于6个货架的情况，选取了3种情况进行多次仿真，得到每种情况出入库耗费Ticks的平均值、最大值、最小值。 当前Ticks是AGV移动的次数，相当于单位操作时间。后文改进空间中提到了可以进行的改进 经过以上分析可以看出情况有限，因此可以通过控制货物需求总数不变，每次随机生成需求货物种类的方式对各种货物摆放位置进行仿真、对得到数据进行分析，最终确定最佳的货物布局方案。`},{header:"改进",slug:"改进",content:`在测试的过程中发现原有移动货架的策略不合理，改进了移动货架的策略。
旧策略： 找到离AGV最近的装有需求货物的货架，将其移动到出入库点。 可以看到AGV已经将需要出库的同种货物（青色方块）移动到了出入库点，但是由于AGV移动的货架对象是旁边的货架，因此没有对已经在出入库点的货物进行出库。
新策略： 找到离出入库点最近的装有需求货物的货架，将其移动到出入库点。改变策略后，没有发现以上提到的不合理情况出现。`},{header:"创新",slug:"创新",content:`由于测试的次数较多，因此将主体流程写入函数并进行适应性改进，实现自动对所有情况进行仿真测试并将数据输出。下图为自动仿真测试运行为示例。 自动仿真测试流程代码，仅供参考
-- 批量测试
local cargo_ubs = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12} -- 测试需求(上限)序列 local output_string_list = {} -- 测试结果列表字符串
for k, v in ipairs(cargo_ubs) do local test_result = {} -- 本需求上限测试结果序列 cargo_ub = v -- 设置需求数量上限 for j = 1, test_count do scene.setenv({ grid = 'plane', clear = true }) -- 清空场景内容 print("测试(", j, "/", test_count, ")：需求数量为", cargo_ub) local tick = ModelRun() -- 运行仿真模型返回测试结果 table.insert(test_result, tick) -- 将测试结果插入测试结果序列 end local output_string = "" print("需求数量为", cargo_ub, "的测试结果序列:") for i = 1, #test_result do -- 输出测试结果序列到列表字符串 output_string = output_string .. test_result[i] .. "\\t" end print(output_string) table.insert(output_string_list, output_string)
end -- 输出测试测试结果列表
for i, str in ipairs(output_string_list) do print("需求数量为", cargo_ubs[i], "的测试结果序列:", str)
end
在自动仿真测试的过程中发现了BUG，详见下文说明。`},{header:"货架布局方案",slug:"货架布局方案",content:`颜色说明 浅蓝色：出入库点
白色：空格
深蓝、红、黄：3种货物对应的颜色 条件假设 每个货架上都放有2个同类货物
货物需求随机，没有种类偏好
每次只取出一个货物`},{header:"仿真结果及分析",slug:"仿真结果及分析",content:"对每个货物布局方案中每种需求数量的情况仿真测试30次，求单方案结果中的最大值、最小值、平均值。最终得到结论为在6个货架的情况中，方案2的布局表现最优。"},{header:"方案3：3个货架",slug:"方案3-3个货架",content:""},{header:"方案6",slug:"方案6",content:"方案6平均Ticks总趋势图 方案6最优布局方案：方案2 还应绘制分方案的“需求量-最短平均服务时间”单位趋势图。以下以方案6-1为例，横坐标为货物需求数量，纵轴为最短平均服务时间（Ticks）。"},{header:"改进空间",slug:"改进空间",content:`由于题目没有给定具体事件的执行时间，也没有指定时间单位，因此此处只计量货架的操作次数作为耗费的时间。也就是说，时间是后计算的，我想大部分同学做到这里可能都是这样的思路。虽然最终得出的结果没有问题，但是思路还可以转变一下，适应于后面的学习。
当前思路是以任务驱动的。虽然能够得到一个正确的结果，但是没有利用仿真时间，这种做法在只控制一个实体的时候不会出现问题。当要同时处理多个实体的时候，当前思路就无法做到同时操作多个实体完成任务，只能实现多个实体依次完成任务的情况。当前思路的具体流程如下：
由于应用的是时间推进法，因此仿真世界中有属于它自己的时间。对于我们来说，我们可以通过在仿真时间上乘一个倍率实现控制仿真速度，这个倍率就是仿真速度。此外，这种做法更加容易支持考虑多对象的情况。具体流程如下：
这样就改为了以时间为核心的仿真，在刷新任务执行进度的时候就可以直接刷新场景中的所有实体。由于仿真以时间为核心，因此就需要设定各种操作的速率/时间，保证时间计算的准确性。在MicroCityWeb中，有一些技巧可以用于时间推进法的仿真。`},{header:"使用系统时间更新仿真时间",slug:"使用系统时间更新仿真时间",content:`os.clock()函数可以获取系统当前的时间（以秒为单位，但是是小数）。有了这个函数就可以做到仿真与现实时间的同步。用法示例可以参考时间推进法
由于整个仿真的核心为时间，因此需要对之前没有规定的操作规定其需要花费的时间长度。在改进的部分中，又额外考虑了以下操作所要花费的时间： 货物出入库所要花费的时间
AGV举起和降落货架所要花费的时间`}]},{path:"/notes/web_ui.html",title:"用户界面简介",pathLocale:"/",contents:[{header:"用户界面简介",slug:"用户界面简介",content:"MicroCityWeb的总体界面如下图，本文将详细介绍MicroCityWeb的用户界面（UI）操作。"},{header:"界面分区概览",slug:"界面分区概览",content:`整体来看，MicroCityWeb的界面大致可以划分为4个区域。 顶部-蓝色区域：对代码、文件执行各种操作
左侧-绿色区域：代码编辑器
右侧-红色区域：视图区域
底部-黄色区域：输出信息、识别程序运行状态 下面将详细介绍这几个区域的用法和功能。`},{header:"蓝色：命令区域",slug:"蓝色-命令区域",content:"此区域的的内容如下图所示，共有9个可用按钮。"},{header:"程序控制",slug:"程序控制",content:`前3个按钮的功能大致都用于控制程序运行。详细作用分别如下： 开始运行/debug: 左键点击后将运行网页左侧代码编辑器内的代码；右键点击后进行代码调试（debug）
暂停运行: 如果程序正在运行，点击后程序将暂停运行（如果程序支持）。
停止运行/强行停止: 如果程序正在运行，左键点击后程序将停止运行。有时存在左键点击无法停止运行脚本的情况，右键点击可以强行终止其运行。`},{header:"代码编辑",slug:"代码编辑",content:`编号4~7的按钮主要与代码编辑有关。 显示/隐藏编辑器。 如果左侧的代码编辑器为开启状态，点击这个按钮后将关闭。如果为关闭状态，点击后会重新打开。
打开内置的代码。 可以直接载入内置的代码（导入内置模型），如立方体、卡车、地球、世界地图等。具体的模型将在介绍画布区域时详细介绍。 内置代码列表 打开本地代码。 点击后将弹出打开文件的对话框，您可以选择本机上的代码文件。确定打开文件后，代码文件文本将自动导入到左侧代码编辑器中。
保存代码。 当您第一次保存文件时，点击保存按钮后会弹出保存文件对话框，您可以选择保存位置并填写文件名。如果您之前已经将该文件保存到本地，而此时您又对该文件进行了修改并想要保存更改，直接点击保存按钮即可直接将更改保存到之前保存的文件中。`},{header:"其他",slug:"其他",content:`共享。 点击按钮后，将会弹出一个输入密码的对话框。随后，您将会得到一个链接，任何人都可以通过这个链接打开您的共享。
如果您在弹出的对话框中输入了密码，那么在其他人打开链接后，他们只能运行您的程序代码并观察运行结果，而无法查看您的代码（除非您告知他们密码）；如果您没有输入密码，则其他人不仅可以运行您的代码查看运行结果，还可以查看您编写的代码。
查看帮助文档。`},{header:"绿色：代码编辑器",slug:"绿色-代码编辑器",content:"MicroCityWeb左侧整合的代码编辑器源于AceEditor，因此也具有AceEditor的一些特性。"},{header:"快捷键",slug:"快捷键",content:`下面将介绍一些常用的快捷键，帮助你更好地编辑代码。
最常用 Ctrl+Z：撤销 行操作 Ctrl+D：删除一行
Ctrl+Shift+D：复制一行
Alt+↑：行代码上移
Alt+↓：行代码下移 查找内容 Ctrl+K：在代码中查找下一个与选中内容 代码缩进 Ctrl+[：增加代码缩进
Ctrl+]：减少代码缩进 修改数值 Ctrl+Shift+↑：光标前的数字数值+1
Ctrl+Shift+↓：光标前的数字数值-1`},{header:"红色：画布区域",slug:"红色-画布区域",content:"可以从内置代码导入场景，详见 命令区域 - 代码编辑 导入场景代码后要点击“运行”按钮才会载入场景 内置汽车模型 内置地球模型"},{header:"场景操作",slug:"场景操作",content:`对场景的操作包括视角移动、旋转都需要在画布区域进行。因此，下面将介绍画布区域的基本操作。 场景的放大缩小：鼠标滚轮向上滚动为放大，向下滚动为缩小。
平移：按住鼠标右键拖动。
旋转 场景旋转：按住鼠标左键拖动，以你的视角进行旋转
对象旋转：点击对象，对象颜色改变后从对象上按住鼠标左键拖动，以对象为中心旋转。 无论是二维对象还是三维对象都遵循上述操作逻辑。`},{header:"黄色：代码输出区域",slug:"黄色-代码输出区域",content:`打开MicroCityWeb后，代码输出区域如下。点击代码输出区域后整个区域会上移，能够看到更多的历史输出信息。 说到这个区域输出的信息，代码输出区域会输出以下信息： 脚本输出: 左侧是脚本的输出，包含输出时间、脚本输出内容。
脚本运行状态: 右边第一行为脚本运行状态。state:ready表示脚本已经准备好开始运行（未运行），state:running表示脚本正在运行。
MicroCityWeb版本号: 表示当前使用的MicroCityWeb版本号。如果与已知版本有差异，可以通过强制刷新加载最新版本。`},{header:"注意事项",slug:"注意事项",content:"关闭自动翻译： 如果你的操作系统语言不是英语且浏览器开启了自动翻译，需要手动关闭，否则代码运行将出现错误。"}]},{path:"/notes/web_ui_en.html",title:"Introduction to the User Interface",pathLocale:"/",contents:[{header:"Introduction to the User Interface",slug:"introduction-to-the-user-interface",content:"The overall interface of MicroCityWeb is shown in the following figure. This article will provide a detailed introduction to the user interface (UI) operations of MicroCityWeb."},{header:"Overview of Interface Zones",slug:"overview-of-interface-zones",content:`Overall, the interface of MicroCityWeb can be roughly divided into four areas: Top - Blue Area: performs various operations on code and files
Left - Green Area: code editor
Right - Red Area: view area
Bottom - Yellow Area: output information, recognize program running status Next, we will provide a detailed description of the usage and functions of these areas.`},{header:"Blue: Command Area",slug:"blue-command-area",content:"The content of this area is shown in the following figure, with nine available buttons."},{header:"Program Control",slug:"program-control",content:`The first three buttons are mainly used to control program execution. Their specific functions are as follows: Run/Debug: Clicking the left mouse button will run the code in the code editor on the left-hand side of the webpage, while right-clicking will debug the code.
Pause: If the program is running, clicking this button will pause its execution (if supported).
Stop/Force Stop: If the program is running, clicking the left mouse button will stop its execution. If left-clicking does not stop the script, right-clicking can forcibly terminate its execution.`},{header:"Code Editing",slug:"code-editing",content:"Buttons 4-7 are mainly related to code editing. Show/Hide Editor: If the code editor on the left is open, clicking this button will close it. If it is closed, clicking it will reopen it. Open Built-In Code: Built-in code can be directly loaded (imported into the built-in model), such as cubes, trucks, earth, and world maps. Specific models will be introduced in detail when canvas area is discussed. Built-in code list Open Local Code: Clicking this button will pop up a dialog box to open the file, and you can select the code file on your local machine. After confirming to open the file, the code file text will be automatically imported into the left code editor. Save Code: When you save the file for the first time, a dialog to save the file will pop up after clicking the save button. You can choose the save location and fill in the file name. If you have previously saved the file locally, and you want to save changes to the file after modifying it, you can directly click the save button to save the changes to the previously saved file."},{header:"Others",slug:"others",content:"Share. After clicking the button, a dialog box for entering a password will pop up. Afterwards, you will receive a link that anyone can use to access your share. If you enter a password in the dialog box, others who open the link can only run your program code and observe the running result, but cannot view your code (unless you tell them the password); if you do not enter a password, others can not only run your code to view the running result but also view the code you have written. View help documentation."},{header:"Green: Code Editor",slug:"green-code-editor",content:"The integrated code editor on the left side of MicroCityWeb is based on AceEditor and therefore has some of its features."},{header:"Keyboard Shortcuts",slug:"keyboard-shortcuts",content:`Below are some commonly used keyboard shortcuts to help you edit code more efficiently.
Most Common
Ctrl+Z: Undo
Line Operations
Ctrl+D: Delete a line
Ctrl+Shift+D: Duplicate a line
Alt+↑: Move line of code up
Alt+↓: Move line of code down
Find Content
Ctrl+K: Find the next occurrence of selected content in the code
Indentation
Ctrl+[: Increase code indentation
Ctrl+]: Decrease code indentation
Modify Values
Ctrl+Shift+↑: Increase the numeric value before the cursor by 1
Ctrl+Shift+↓: Decrease the numeric value before the cursor by 1`},{header:"Red: Canvas area",slug:"red-canvas-area",content:`Built-in code can be imported into the scene, see Command Area - Code Editing for details.
After importing the scene code, click the "Run" button to load the scene. Built-in car model Built-in Earth model`},{header:"Scene Operations",slug:"scene-operations",content:`Scene operations, including viewpoint movement and rotation, need to be performed in the canvas area. Therefore, the following will introduce the basic operations of the canvas area. Zooming in and out of the scene: Scroll the mouse wheel up to zoom in and down to zoom out.
Translation: Hold down the right mouse button and drag.
Rotation Scene rotation: Hold down the left mouse button and drag to rotate from your viewpoint.
Object rotation: Click on the object, the color of the object changes, and then hold down the left mouse button on the object to rotate around the object's center. These operation rules apply to both two-dimensional and three-dimensional objects.`},{header:"Yellow: Code Output Area",slug:"yellow-code-output-area",content:`After opening MicroCityWeb, the code output area is shown below. Clicking on the code output area will cause the entire area to move up, allowing you to see more historical output information. Regarding the information output in this area, the code output area will output the following information: Script output: The left side is the output of the script, including the output time and content.
Script running status: The first line on the right side shows the script running status. "state: ready" indicates that the script is ready to start running (not yet running), and "state: running" indicates that the script is running.
MicroCityWeb version number: Indicates the current version number of MicroCityWeb being used. If there is a difference from the known version, you can force a refresh to load the latest version.`},{header:"Notes",slug:"notes",content:"Turn off automatic translation: If your operating system language is not English and the browser has automatic translation enabled, it needs to be manually disabled, otherwise there will be errors when running the code."}]},{path:"/docs/imgs/",title:"",pathLocale:"/",contents:[{header:"",slug:"",content:"This folder contains images used by documentation pages."}]},{path:"/404.html",title:"",pathLocale:"/",contents:[]}],B="update-vuepress-plugin-full-text-search2-search-index";var C=m(F),W=j(()=>{const e=new Map;for(const t of C.value)e.set(t.path,t);return e});import.meta.webpackHot&&(__VUE_HMR_RUNTIME__[B]=e=>{C.value=e});function V(e){const t=m([]);let s=null;return D(e,()=>{s&&clearTimeout(s),s=setTimeout(a,100)}),t;function a(){const d=e.value.toLowerCase().trim();if(!d){t.value=[];return}const i=new Map,n=new Set;for(const o of C.value)for(const r of U(o,d)){n.add(r.parentPageTitle);let l=i.get(r.parentPageTitle);l||(l=[],i.set(r.parentPageTitle,l)),l.push(r)}const c=[...n].sort((o,r)=>{const l=i.get(o);return i.get(r).length-l.length});t.value=[...i].flatMap(([,o])=>o).sort((o,r)=>o.parentPagePriority-r.parentPagePriority||c.indexOf(o.parentPageTitle)-c.indexOf(r.parentPageTitle)||o.priority-r.priority)}}function*U(e,t){const s=v(e.title,t);if(s){yield{path:e.path,parentPageTitle:w(e),title:e.title,display:s,page:e,content:null,parentPagePriority:1,priority:1};return}for(const a of e.contents){const d=v(a.header,t);if(d){yield{path:e.path+(a.slug?`#${a.slug}`:""),parentPageTitle:w(e),title:e.title,display:d,page:e,content:null,parentPagePriority:10,priority:2};continue}const i=v(a.content,t);i&&(yield{path:e.path+(a.slug?`#${a.slug}`:""),parentPageTitle:w(e),title:e.title,display:[{type:"header",str:`${a.header}
`},...i],page:e,content:null,parentPagePriority:10,priority:10})}}function w(e){const t=e.path.split("/");let s="/";return t[1]&&(s=`/${t[1]}/`),(W.value.get(s)||e).title}function v(e,t){const s=[];let a=0;const d=e.toLowerCase().replace(/\s/gu," ");let i=0,n=d.indexOf(t,i);if(n<0)return null;for(;n>=0;){const o=n+t.length;if(c(e.slice(i,n),"normal"),c(e.slice(n,o),"highlight"),i=o,n=d.indexOf(t,i),a>100)break}return c(e.slice(i),"normal"),s.filter(o=>o.str);function c(o,r){let l=o;r==="normal"&&l.length>100&&a===0&&(l=`… ${l.slice(-10)}`);let g=!1;if(a+l.length>100){if(s.some(b=>b.type==="ellipsis"))return;l=l.slice(0,Math.max(100-a,1)),g=!0}s.push({type:r,str:l}),a+=l.length,g&&(s.push({type:"ellipsis",str:" …"}),a+=2)}}const Y={"/":{placeholder:"搜索"}},X=_({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>Y}},setup(e){const{locales:t}=I(e),s=m(""),a=m(!1),d=m(-1),i=V(s),n=j(()=>s.value&&a.value&&i.value.length),c=R(),o=A(),r=j(()=>t.value[o.value]??{});function l(){if(!n.value)return;let h=d.value-1;h<0&&(h=i.value.length-1),b(h)}function g(){if(!n.value)return;let h=d.value+1;h>=i.value.length&&(h=0),b(h)}function b(h){d.value=h}function L(){d.value=-1}function G(h){if(!n.value)return;const T=i.value[h];T&&c.push(T.path)}return{query:s,focused:a,focusIndex:d,suggestions:i,activeSuggestion:n,onUp:l,onDown:g,focus:b,unfocus:L,go:G,locale:r}}});const q={class:"search-box",role:"search"},H=["placeholder"],$=["onMousedown","onMouseenter"],Z=["href"],K={key:0,class:"parent-page-title"},Q={class:"suggestion-row"},J={class:"page-title"},ee={class:"suggestion-content"};function te(e,t,s,a,d,i){return u(),p("div",q,[E(f("input",{ref:"input","onUpdate:modelValue":t[0]||(t[0]=n=>e.query=n),"aria-label":"Search",class:y({focused:e.focused}),placeholder:e.locale.placeholder??"Search",autocomplete:"off",spellcheck:"false",onFocus:t[1]||(t[1]=()=>e.focused=!0),onBlur:t[2]||(t[2]=()=>e.focused=!1),onKeyup:[t[3]||(t[3]=x(n=>e.go(e.focusIndex),["enter"])),t[4]||(t[4]=x((...n)=>e.onUp&&e.onUp(...n),["up"])),t[5]||(t[5]=x((...n)=>e.onDown&&e.onDown(...n),["down"]))]},null,42,H),[[O,e.query]]),e.activeSuggestion?(u(),p("ul",{key:0,class:"suggestions",onMouseleave:t[7]||(t[7]=(...n)=>e.unfocus&&e.unfocus(...n))},[(u(!0),p(M,null,k(e.suggestions,(n,c)=>(u(),p("li",{key:c,class:y(["suggestion",{focused:c===e.focusIndex}]),onMousedown:o=>e.go(c),onMouseenter:o=>e.focus(c)},[f("a",{href:n.path,onClick:t[6]||(t[6]=z(()=>{},["prevent"]))},[n.parentPageTitle&&(!e.suggestions[c-1]||e.suggestions[c-1].parentPageTitle!==n.parentPageTitle)?(u(),p("div",K,S(n.parentPageTitle),1)):P("v-if",!0),f("div",Q,[f("div",J,S(n.title||n.path),1),f("div",ee,[(u(!0),p(M,null,k(n.display,(o,r)=>(u(),p("span",{key:r,class:y(o.type)},S(o.str),3))),128))])])],8,Z)],42,$))),128))],32)):P("v-if",!0)])}const ae=N(X,[["render",te],["__scopeId","data-v-fd6cd4d5"],["__file","SearchBox.vue"]]);export{ae as default};
