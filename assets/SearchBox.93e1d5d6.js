import{g as b,h as P,i as D,j as A,t as I,u as R,k as N,_ as E,o as u,c as p,l as _,v as O,a as m,n as S,m as y,F as k,p as x,f as L,q as w,s as F}from"./app.b53f544c.js";const B=[{path:"/",title:"首页",pathLocale:"/",contents:[{header:"开始使用MicroCity",slug:"开始使用microcity",content:'转到MicroCity的文档仓库下载 MicroCity的最新版本 打开 ScriptEditor 并输入: Print("hello, world!") 将脚本另存为 test.mcs 并将其拖入 MicroCity 在程序主界面左侧转到 Modules 标签页，打开 test ，双击其中的 main ，执行刚刚编写的脚本。 程序界面下方的 Messages 栏中会输出执行脚本的信息。 更多MicroCity的使用方法可以参考本站搬运自GitHub的文档：MicroCity文档，也可以参考 MicroCtiy 在GitHub上的文档。'},{header:"MicroCityNotes 仓库",slug:"microcitynotes-仓库",content:`目前正在施工阶段🧱...
如果发现文档或笔记有问题，欢迎 Pull Request 或者提供 Issues 让它变得更完善😋`}]},{path:"/docs/1.1_what_microcity_can_do.html",title:"1.1 MicroCity能做什么",pathLocale:"/",contents:[{header:"1.1 MicroCity能做什么",slug:"_1-1-microcity能做什么",content:"MicroCity is designed to be a handy spatial planning tool, which is portable, compact and fast."},{header:"A Modeling Framework",slug:"a-modeling-framework",content:"Based on GIS, Networks and Mixed Integer Programming libraries, MicroCity can be used as a modeling framework to solve transporation problems, such as City Logistics and Shipping Planning:"},{header:"A Simulation Platform",slug:"a-simulation-platform",content:"Based on 3D CGI and Discrete Event Simulation Engine, MicroCity can be used as a simulation platform to evaluate logistic scenarios, such as Automated Warehouses and Container Terminals:"},{header:"Customized by Scriptable Modules",slug:"customized-by-scriptable-modules",content:"MicroCity can extend its functionality with modules which can be inherited from SAGA or scripted and debugged in Script Editor: Currently, MicroCity is mainly used in teaching and research. It can be freely distributed."}]},{path:"/docs/2.1_showing_a_world_map.html",title:"2.1 展示世界地图",pathLocale:"/",contents:[{header:"2.1 展示世界地图",slug:"_2-1-展示世界地图",content:"This tutorial will guide you in manipulating and visualizing GIS data in MicroCity."},{header:"Loading Data and Creating a Map",slug:"loading-data-and-creating-a-map",content:"Download the countries.shp (ArcGIS shapefile) and the countries.dbf (dBase file) in a same folder. Open MicroCity and load or drag the countries.shp into MicroCity and select Data Tab in Workspace panel. Double click Data->Shapes->Polygon->01. countries in Workspace panel."},{header:"Visualizing Coutries' Properties",slug:"visualizing-coutries-properties",content:"Right click 01. countries in the Workspace panel. Click Attributes->Table->Show in the popup menu. In the Settings Panel, find the Colors->Type option and select Graduated Color. In its sub-option Attribute, select POP_EST which is population property of countries. In the Setting Panel, find the Chart option and click the ... button. In the popup dialog, select pie in Chart Type option and select GDP_MD_EST in Attribute (Size) option and select EXPORT and IMPORT checkboxs in Fields option and click Okay button."},{header:"Editing Shapes",slug:"editing-shapes",content:"Select Action button at toolbar. Left click some country and right click it and select Edit Selected Shape in the popup menu. Then the shape will be in editing mode. You can change its polygon points and finish your editing by right click and select Edit Selected Shape again."}]},{path:"/docs/2.2_searching_for_countries.html",title:"2.2 寻找国家",pathLocale:"/",contents:[{header:"2.2 寻找国家",slug:"_2-2-寻找国家",content:"This tutorial will guide you in coding with MicroCity Script to manipulate GIS data. You have to complete 2.1 to proceed."},{header:"GIS Data Structure",slug:"gis-data-structure",content:"In MicroCity, GIS data consists of three types of Shapes: Point, Polyline and Polygon, each of which can be visualized as a Map Layer. In a layer, a Shape object consists of one or more Parts, and every Part consists of one or more Points. A Shape object is also associated to a record in the Attributes Table. You can also edit the shape or its attributes (see 3.2). If you want perform a complex editing or handle a batch of shapes, you can use MicroCity Script, in which many built-in functions can be used."},{header:"Making a Query",slug:"making-a-query",content:`Suppose we want to find countries, each of which has a population of more than 100 million and is entirely in the northern hemisphere. So we need to check every point's coordinate in each shape and the population attribute of the shape. Open ScriptEditor and type following codes:
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
Returns false if user cancel the current execution.
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
4.8 Mixed Integer Programming 混合整数线性规划`}]},{path:"/notes/",title:"笔记",pathLocale:"/",contents:[{header:"笔记",slug:"笔记",content:`LUA语言快速上手
结果可视化
操作网络`}]},{path:"/notes/lua.html",title:"LUA语言快速上手",pathLocale:"/",contents:[{header:"LUA语言快速上手",slug:"lua语言快速上手",content:"由于MicroCity采用的脚本语言是LUA，因此在开始使用MicroCity编写脚本之前需要先熟悉LUA的基本用法。"},{header:"变量和函数定义",slug:"变量和函数定义",content:`lua会自动识别变量类型，因此无需在变量名称前定义变量类型，直接赋值即可。
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
end`},{header:"循环",slug:"循环",content:"记录一下最常用的两种循环: for&while"},{header:"for",slug:"for",content:`最普通的形式
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
print(collection[3][2]) --3`}]},{path:"/notes/network.html",title:"操作网络",pathLocale:"/",contents:[{header:"操作网络",slug:"操作网络",content:""},{header:"网络拓补化",slug:"网络拓补化",content:`说人话就是，一个网络有节点，有节点之间的连线。如果把连线理解为道路，那么你需要解决以下问题： 这条路是单向通行的还是双向通行？
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
Update(Links) 示例改自MicroCity自带的编辑器 虽然一开始就输入了网络连线，但是在拓补化的过程中可能由于连线上的节点重合，在拓补化的过程中会把连续的连线拆成多段，因此得到的Links图层可能与输入的图层存在不同。而拓补化得到的节点Nodes和得到的连线Links是对应的，因此推荐使用拓补化处理完的Links图层作为网络节点之间的连线。`},{header:"踩坑经验",slug:"踩坑经验",content:`如果需要使用CreateNetwork(Nodes, Links)函数再次建立网络，需要保留以下在拓补化过程中添加的属性，否则将会出现网络初始化错误的问题：
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
CopyShapeTo()函数的具体用法见4.3 矢量图形和表格`}]},{path:"/notes/visualization.html",title:"结果可视化",pathLocale:"/",contents:[{header:"结果可视化",slug:"结果可视化",content:"本文介绍了多种将计算结果可视化的方法。包括改变内容的颜色，改变形状大小，改变元素显示的属性标签等。"},{header:"改变形状颜色",slug:"改变形状颜色",content:`在程序界面左下角的图形属性框内可以通过改变Colors栏目下的Type属性改变显示颜色的种类。共有3种选项： Unique Symbol：指定颜色
Lookup Table：通过数值查询表格显示对应的颜色
Graduated Color：渐变色`},{header:"Lookup Table 通过表中值改变颜色",slug:"lookup-table-通过表中值改变颜色",content:"将Type为Lookup Table，根据表格中的数值改变图形的颜色，达到选中指定图形的效果。 此处示例将Lookup Table中的Attribute改为表格中的SELECT，通过表中的SELECT列值控制线的颜色（属性设置见上图）。当值为0时显示黑色，值为1时显示红色。表格中SELECT列的值和Lookup Table中的具体设置如下图。 最终实现的效果"},{header:"Graduated Color 根据值的大小显示渐变色",slug:"graduated-color-根据值的大小显示渐变色",content:"将Type为Graduated Color，根据表格中不同数值的大小显示不同的颜色，达到显示渐变色的效果。 此处示例根据每个国家的人口数量显示渐变色。可以看到中国人口数量大，因此显示红色，印度人口数量也较大，因此显示橙色。其他地区人口数量较低，但也能通过颜色看出一些差别。 Graduated Color下的Colors属性中还可以调整其他配色方案。设置界面如下图，此处就不不一一列举了。 如果感兴趣可以参考文档2.1 展示世界地图中的示例手动尝试更改此属性。"},{header:"更改图形和标签的显示大小",slug:"更改图形和标签的显示大小",content:""},{header:"参考系的选择",slug:"参考系的选择",content:`显示内容尺寸的参考系有2个，一个是以地图为参考系，一个是以屏幕为参考系。此处将图形和标签的显示尺寸都设置为相同的参考系。
内容以地图为参考系时，显示内容的大小会根据地图大小同步缩放，如下图： (以地图为参考系放大) (以地图为参考系缩小)
内容以屏幕为参考系时，无论地图怎么缩放内容的大小都差不多，如下图： (以屏幕为参考系放大) (以屏幕为参考系缩小)
因此，绘图的时候要根据绘图的目的选定参考系。 如果需要在地图上绘制确定尺寸的形状或者标明确定尺寸的标签，如绘制一个半径为10km的圆，此时应选用以地图为参考系。
如果仅需要在任何尺寸下都能清晰显示标签和图形，此时可以选择以屏幕为参考系。`},{header:"参考系的设定",slug:"参考系的设定",content:`在程序界面左下角的图形属性框内可以设置图形及其标签的尺寸参考系。 如图标记的两个位置可以分别调整图形尺寸的参考系和标签尺寸的参考系。 图形尺寸参考系设置：Size栏目下的Size relates to...调整图形尺寸的参考系，Default Size调整图形的相对于坐标系的尺寸。
标签尺寸参考系设置：Labels栏目下的Size relates to...调整标签尺寸的参考系，Default Size调整的是标签(Labels)相对于坐标系的尺寸。`},{header:"更改显示的标签",slug:"更改显示的标签",content:`在程序界面左下角的图形属性框内可以设置图形及其标签的尺寸参考系。上图中显示的标签为ID，如果需要改为表格中的其他列，可以更改Lables栏目下的Attribute属性实现。
需要更改的属性位置如图，图中需要显示表中对应MSG列的值，只需要将Labels栏目下的Attribute属性值改为MSG即可。 但是每次更改图形并执行Update()函数后标签（Label）会取消显示。如果需要执行的脚本中含有此对于此图层的Update()函数，不必在每次执行完脚本后手动重新设置显示的标签，可以通过脚本自动选择显示的标签。
通过SetParameter()函数可以更改属性值。以上图Labels栏目下的Attribute属性为例，选中这条属性后可以看到底栏显示其ID为LABEL_ATTRIB，其类型为Choice。 需要注意的是，当类型为Choice时，参数值从1开始编号，编号顺次对应下拉菜单的内容。 点开这条属性以后，可以看到MSG在第二个。由于LUA中编号一般由1开始，因此此处MSG的编号对应2，ID的编号对应1。 此时已经得到了所有需要的参数，可以使用SetParameter()对其进行更改
-- transports为图形图层
SetParameter(transports, "LABEL_ATTRIB", 2) SetParameter()函数需要在Update()函数执行后再执行，否则效果会被Update()函数覆盖。 现在回过头来再看看SetParameter()函数的具体用法：
SetParameter (Shapes|Table|Grid|Scene|Module, "id", Number|"String"|Object) 参数
含义 参数1
输入的对象，可以是Shapes、Table、Grid、Scene、Module 参数2
其中的id为属性对应的ID。如果是上文的情况，就是LABEL_ATTRIB 参数3
如果需要更改属性值，只接受数值(Number)、字符串(String)、对象(Object)三种类型 SetParameter()函数的介绍出现在文档 4.2 控制用户界面 中，请参阅。`}]},{path:"/docs/imgs/",title:"",pathLocale:"/",contents:[{header:"",slug:"",content:"This folder contains images used by documentation pages."}]},{path:"/404.html",title:"",pathLocale:"/",contents:[]}],z="update-vuepress-plugin-full-text-search2-search-index";var v=b(B),U=P(()=>{const e=new Map;for(const t of v.value)e.set(t.path,t);return e});import.meta.webpackHot&&(__VUE_HMR_RUNTIME__[z]=e=>{v.value=e});function Y(e){const t=b([]);let r=null;return D(e,()=>{r&&clearTimeout(r),r=setTimeout(o,100)}),t;function o(){const c=e.value.toLowerCase().trim();if(!c){t.value=[];return}const i=new Map,l=new Set;for(const a of v.value)for(const s of V(a,c)){l.add(s.parentPageTitle);let d=i.get(s.parentPageTitle);d||(d=[],i.set(s.parentPageTitle,d)),d.push(s)}const n=[...l].sort((a,s)=>{const d=i.get(a);return i.get(s).length-d.length});t.value=[...i].flatMap(([,a])=>a).sort((a,s)=>a.parentPagePriority-s.parentPagePriority||n.indexOf(a.parentPageTitle)-n.indexOf(s.parentPageTitle)||a.priority-s.priority)}}function*V(e,t){const r=T(e.title,t);if(r){yield{path:e.path,parentPageTitle:C(e),title:e.title,display:r,page:e,content:null,parentPagePriority:1,priority:1};return}for(const o of e.contents){const c=T(o.header,t);if(c){yield{path:e.path+(o.slug?`#${o.slug}`:""),parentPageTitle:C(e),title:e.title,display:c,page:e,content:null,parentPagePriority:10,priority:2};continue}const i=T(o.content,t);i&&(yield{path:e.path+(o.slug?`#${o.slug}`:""),parentPageTitle:C(e),title:e.title,display:[{type:"header",str:`${o.header}
`},...i],page:e,content:null,parentPagePriority:10,priority:10})}}function C(e){const t=e.path.split("/");let r="/";return t[1]&&(r=`/${t[1]}/`),(U.value.get(r)||e).title}function T(e,t){const r=[];let o=0;const c=e.toLowerCase().replace(/\s/gu," ");let i=0,l=c.indexOf(t,i);if(l<0)return null;for(;l>=0;){const a=l+t.length;if(n(e.slice(i,l),"normal"),n(e.slice(l,a),"highlight"),i=a,l=c.indexOf(t,i),o>100)break}return n(e.slice(i),"normal"),r.filter(a=>a.str);function n(a,s){let d=a;s==="normal"&&d.length>100&&o===0&&(d=`… ${d.slice(-10)}`);let f=!1;if(o+d.length>100){if(r.some(g=>g.type==="ellipsis"))return;d=d.slice(0,Math.max(100-o,1)),f=!0}r.push({type:s,str:d}),o+=d.length,f&&(r.push({type:"ellipsis",str:" …"}),o+=2)}}const X={"/":{placeholder:"搜索"}},W=A({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>X}},setup(e){const{locales:t}=I(e),r=b(""),o=b(!1),c=b(-1),i=Y(r),l=P(()=>r.value&&o.value&&i.value.length),n=R(),a=N(),s=P(()=>{var h;return(h=t.value[a.value])!=null?h:{}});function d(){if(!l.value)return;let h=c.value-1;h<0&&(h=i.value.length-1),g(h)}function f(){if(!l.value)return;let h=c.value+1;h>=i.value.length&&(h=0),g(h)}function g(h){c.value=h}function G(){c.value=-1}function j(h){if(!l.value)return;const M=i.value[h];M&&n.push(M.path)}return{query:r,focused:o,focusIndex:c,suggestions:i,activeSuggestion:l,onUp:d,onDown:f,focus:g,unfocus:G,go:j,locale:s}}});const q={class:"search-box",role:"search"},$=["placeholder"],H=["onMousedown","onMouseenter"],Z=["href"],Q={key:0,class:"parent-page-title"},J={class:"suggestion-row"},K={class:"page-title"},ee={class:"suggestion-content"};function te(e,t,r,o,c,i){var l;return u(),p("div",q,[_(m("input",{ref:"input","onUpdate:modelValue":t[0]||(t[0]=n=>e.query=n),"aria-label":"Search",class:S({focused:e.focused}),placeholder:(l=e.locale.placeholder)!=null?l:"Search",autocomplete:"off",spellcheck:"false",onFocus:t[1]||(t[1]=()=>e.focused=!0),onBlur:t[2]||(t[2]=()=>e.focused=!1),onKeyup:[t[3]||(t[3]=y(n=>e.go(e.focusIndex),["enter"])),t[4]||(t[4]=y((...n)=>e.onUp&&e.onUp(...n),["up"])),t[5]||(t[5]=y((...n)=>e.onDown&&e.onDown(...n),["down"]))]},null,42,$),[[O,e.query]]),e.activeSuggestion?(u(),p("ul",{key:0,class:"suggestions",onMouseleave:t[7]||(t[7]=(...n)=>e.unfocus&&e.unfocus(...n))},[(u(!0),p(k,null,x(e.suggestions,(n,a)=>(u(),p("li",{key:a,class:S(["suggestion",{focused:a===e.focusIndex}]),onMousedown:s=>e.go(a),onMouseenter:s=>e.focus(a)},[m("a",{href:n.path,onClick:t[6]||(t[6]=F(()=>{},["prevent"]))},[n.parentPageTitle&&(!e.suggestions[a-1]||e.suggestions[a-1].parentPageTitle!==n.parentPageTitle)?(u(),p("div",Q,w(n.parentPageTitle),1)):L("v-if",!0),m("div",J,[m("div",K,w(n.title||n.path),1),m("div",ee,[(u(!0),p(k,null,x(n.display,(s,d)=>(u(),p("span",{key:d,class:S(s.type)},w(s.str),3))),128))])])],8,Z)],42,H))),128))],32)):L("v-if",!0)])}const ae=E(W,[["render",te],["__scopeId","data-v-fd6cd4d5"],["__file","SearchBox.vue"]]);export{ae as default};
