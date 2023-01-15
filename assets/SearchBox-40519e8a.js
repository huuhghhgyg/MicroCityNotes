import{u as D}from"./app-cc7d25c0.js";import{r as m,h as C,z as A,c as _,S as I,u as N,_ as R,p as h,q as p,Z as E,a8 as O,R as b,w as S,a2 as y,O as k,P as v,Q as M,v as x,a9 as F}from"./framework-e7319929.js";const B=[{path:"/",title:"首页",pathLocale:"/",contents:[{header:"开始使用MicroCity",slug:"开始使用microcity",content:'转到MicroCity的文档仓库下载 MicroCity的最新版本 打开 ScriptEditor 并输入: Print("hello, world!") 将脚本另存为 test.mcs 并将其拖入 MicroCity 在程序主界面左侧转到 Modules 标签页，打开 test ，双击其中的 main ，执行刚刚编写的脚本。 程序界面下方的 Messages 栏中会输出执行脚本的信息。 更多MicroCity的使用方法可以参考本站搬运自GitHub的文档：MicroCity文档，也可以参考 MicroCtiy 在GitHub上的文档。'},{header:"MicroCityNotes 仓库",slug:"microcitynotes-仓库",content:"如果发现文档或笔记有问题，欢迎 Pull Request 或者提供 Issues 让它变得更完善😋"}]},{path:"/docs/1.1_what_microcity_can_do.html",title:"1.1 MicroCity能做什么",pathLocale:"/",contents:[{header:"1.1 MicroCity能做什么",slug:"_1-1-microcity能做什么",content:"MicroCity is designed to be a handy spatial planning tool, which is portable, compact and fast."},{header:"A Modeling Framework",slug:"a-modeling-framework",content:"Based on GIS, Networks and Mixed Integer Programming libraries, MicroCity can be used as a modeling framework to solve transporation problems, such as City Logistics and Shipping Planning:"},{header:"A Simulation Platform",slug:"a-simulation-platform",content:"Based on 3D CGI and Discrete Event Simulation Engine, MicroCity can be used as a simulation platform to evaluate logistic scenarios, such as Automated Warehouses and Container Terminals:"},{header:"Customized by Scriptable Modules",slug:"customized-by-scriptable-modules",content:"MicroCity can extend its functionality with modules which can be inherited from SAGA or scripted and debugged in Script Editor: Currently, MicroCity is mainly used in teaching and research. It can be freely distributed."}]},{path:"/docs/2.1_showing_a_world_map.html",title:"2.1 展示世界地图",pathLocale:"/",contents:[{header:"2.1 展示世界地图",slug:"_2-1-展示世界地图",content:"This tutorial will guide you in manipulating and visualizing GIS data in MicroCity."},{header:"Loading Data and Creating a Map",slug:"loading-data-and-creating-a-map",content:"Download the countries.shp (ArcGIS shapefile) and the countries.dbf (dBase file) in a same folder. Open MicroCity and load or drag the countries.shp into MicroCity and select Data Tab in Workspace panel. Double click Data->Shapes->Polygon->01. countries in Workspace panel."},{header:"Visualizing Coutries' Properties",slug:"visualizing-coutries-properties",content:"Right click 01. countries in the Workspace panel. Click Attributes->Table->Show in the popup menu. In the Settings Panel, find the Colors->Type option and select Graduated Color. In its sub-option Attribute, select POP_EST which is population property of countries. In the Setting Panel, find the Chart option and click the ... button. In the popup dialog, select pie in Chart Type option and select GDP_MD_EST in Attribute (Size) option and select EXPORT and IMPORT checkboxs in Fields option and click Okay button."},{header:"Editing Shapes",slug:"editing-shapes",content:"Select Action button at toolbar. Left click some country and right click it and select Edit Selected Shape in the popup menu. Then the shape will be in editing mode. You can change its polygon points and finish your editing by right click and select Edit Selected Shape again."}]},{path:"/docs/2.2_searching_for_countries.html",title:"2.2 寻找国家",pathLocale:"/",contents:[{header:"2.2 寻找国家",slug:"_2-2-寻找国家",content:"This tutorial will guide you in coding with MicroCity Script to manipulate GIS data. You have to complete 2.1 to proceed."},{header:"GIS Data Structure",slug:"gis-data-structure",content:"In MicroCity, GIS data consists of three types of Shapes: Point, Polyline and Polygon, each of which can be visualized as a Map Layer. In a layer, a Shape object consists of one or more Parts, and every Part consists of one or more Points. A Shape object is also associated to a record in the Attributes Table. You can also edit the shape or its attributes (see 3.2). If you want perform a complex editing or handle a batch of shapes, you can use MicroCity Script, in which many built-in functions can be used."},{header:"Making a Query",slug:"making-a-query",content:`Suppose we want to find countries, each of which has a population of more than 100 million and is entirely in the northern hemisphere. So we need to check every point's coordinate in each shape and the population attribute of the shape. Open ScriptEditor and type following codes:
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
4.8 Mixed Integer Programming 混合整数线性规划 声明：本网站文档部分内容来自microcity.github.io，版权归原作者所有。`}]},{path:"/notes/",title:"笔记",pathLocale:"/",contents:[{header:"笔记",slug:"笔记",content:`Lua语言快速上手
结果可视化
操作网络
模型求解`}]},{path:"/notes/lp.html",title:"模型求解",pathLocale:"/",contents:[{header:"模型求解",slug:"模型求解",content:`在MicroCity中可以对数学模型进行求解。接下来，本文将介绍在MicroCity中求解数学模型的常见过程，并提供一些技巧帮助你更好地建模。
规划模型中所有函数的详细用法可以参考文档 4.8混合整数线性规划`},{header:"创建模型对象",slug:"创建模型对象",content:`创建规划模型对象，存入变量lp中。
local lp = CreateLP() 官方文档中将创建的数学模型对象存入变量LPModel中，作用同本文的lp`},{header:"写入数学模型",slug:"写入数学模型",content:`此时，数学模型的对象已经创建并存入了变量lp中，可以对其进行更进一步的操作。数学模型一般分为两个部分： 目标函数
约束方程 接下来，先介绍创建目标函数的具体做法。`},{header:"创建目标函数",slug:"创建目标函数",content:'MicroCity中，使用SetObjectFunction()设置模型对象的目标函数。允许选择目标函数求最大值或最小值。具体用法如下： SetObjFunction(lp, cons, "max") --求最大值 SetObjFunction(lp, cons, "min") --求最小值 "min"和"max"不区分大小写，写"MIN"和"MAX"也可以'},{header:"参数说明及示例",slug:"参数说明及示例",content:`参数
作用 lp
数学模型对象。将数学模型输入函数中，为模型设置目标函数 cons
目标函数系数，是一个table类型的变量。用于确定模型中目标函数的系数。 "min"或"max"
确定目标函数求最大还是求最小。 cons是目标函数的系数列表，是一个table类型的变量。假设你要求函数4x1+12x2+18x34x_1+12x_2+18x_34x1​+12x2​+18x3​的最小值，则添加目标函数的做法如下：
-- 假设你已经创建了模型对象，并存入变量lp中 -- 4*x1 + 12*x2 + 18*x3
local cons = {4, 12, 18} -- 设置目标函数：求最小
SetObjFunction(lp, cons, "min")`},{header:"添加约束方程",slug:"添加约束方程",content:`在MicroCity中，添加模型约束的函数为AddConstraint()，用法如下： -- 使用符号表达
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
local cons = { 4, 12, 18 }
SetObjFunction(lp, cons, "min") -- 添加约束1：x1 + 3*x3 ≥ 3
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
local fcons = {}
for i = 1, 4 do for j = 1, 4 do -- 此处可以轻松将二维数组转换为一维数组 fcons[4 * (i - 1) + j] = cost[i][j] end
end SetObjFunction(lp, fcons, "min") --添加约束
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
上面的这种做法得到的indexList就是一个table类型的变量了。然后就可以开始执行集合的各种操作了捏😋`}]},{path:"/notes/visualization.html",title:"结果可视化",pathLocale:"/",contents:[{header:"结果可视化",slug:"结果可视化",content:"本文介绍了多种将计算结果可视化的方法。包括改变内容的颜色，改变形状大小，改变元素显示的属性标签等。"},{header:"改变形状颜色",slug:"改变形状颜色",content:`在程序界面左下角的图形属性框内可以通过改变Colors栏目下的Type属性改变显示颜色的种类。共有3种选项： Unique Symbol：为同一个图层的所有图形指定某种颜色，此处不做过多介绍。
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
一种使用栅格图绘制热力图的场景就是绘制地价图。在绘制地价图时，我们可以遍历栅格图上的每个格点，计算该格点到每个仓库的距离之和。然后将该格点的值设置为这个值，就可以得到一张热力图。这种方法可以帮助我们可视化地价的分布情况，并且可以用来发现地价的趋势和规律。`}]},{path:"/docs/imgs/",title:"",pathLocale:"/",contents:[{header:"",slug:"",content:"This folder contains images used by documentation pages."}]},{path:"/404.html",title:"",pathLocale:"/",contents:[]}],z="update-vuepress-plugin-full-text-search2-search-index";var T=m(B),U=C(()=>{const e=new Map;for(const t of T.value)e.set(t.path,t);return e});import.meta.webpackHot&&(__VUE_HMR_RUNTIME__[z]=e=>{T.value=e});function Y(e){const t=m([]);let s=null;return A(e,()=>{s&&clearTimeout(s),s=setTimeout(o,100)}),t;function o(){const d=e.value.toLowerCase().trim();if(!d){t.value=[];return}const i=new Map,n=new Set;for(const a of T.value)for(const r of V(a,d)){n.add(r.parentPageTitle);let l=i.get(r.parentPageTitle);l||(l=[],i.set(r.parentPageTitle,l)),l.push(r)}const c=[...n].sort((a,r)=>{const l=i.get(a);return i.get(r).length-l.length});t.value=[...i].flatMap(([,a])=>a).sort((a,r)=>a.parentPagePriority-r.parentPagePriority||c.indexOf(a.parentPageTitle)-c.indexOf(r.parentPageTitle)||a.priority-r.priority)}}function*V(e,t){const s=P(e.title,t);if(s){yield{path:e.path,parentPageTitle:w(e),title:e.title,display:s,page:e,content:null,parentPagePriority:1,priority:1};return}for(const o of e.contents){const d=P(o.header,t);if(d){yield{path:e.path+(o.slug?`#${o.slug}`:""),parentPageTitle:w(e),title:e.title,display:d,page:e,content:null,parentPagePriority:10,priority:2};continue}const i=P(o.content,t);i&&(yield{path:e.path+(o.slug?`#${o.slug}`:""),parentPageTitle:w(e),title:e.title,display:[{type:"header",str:`${o.header}
`},...i],page:e,content:null,parentPagePriority:10,priority:10})}}function w(e){const t=e.path.split("/");let s="/";return t[1]&&(s=`/${t[1]}/`),(U.value.get(s)||e).title}function P(e,t){const s=[];let o=0;const d=e.toLowerCase().replace(/\s/gu," ");let i=0,n=d.indexOf(t,i);if(n<0)return null;for(;n>=0;){const a=n+t.length;if(c(e.slice(i,n),"normal"),c(e.slice(n,a),"highlight"),i=a,n=d.indexOf(t,i),o>100)break}return c(e.slice(i),"normal"),s.filter(a=>a.str);function c(a,r){let l=a;r==="normal"&&l.length>100&&o===0&&(l=`… ${l.slice(-10)}`);let g=!1;if(o+l.length>100){if(s.some(f=>f.type==="ellipsis"))return;l=l.slice(0,Math.max(100-o,1)),g=!0}s.push({type:r,str:l}),o+=l.length,g&&(s.push({type:"ellipsis",str:" …"}),o+=2)}}const X={"/":{placeholder:"搜索"}},W=_({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>X}},setup(e){const{locales:t}=I(e),s=m(""),o=m(!1),d=m(-1),i=Y(s),n=C(()=>s.value&&o.value&&i.value.length),c=N(),a=D(),r=C(()=>t.value[a.value]??{});function l(){if(!n.value)return;let u=d.value-1;u<0&&(u=i.value.length-1),f(u)}function g(){if(!n.value)return;let u=d.value+1;u>=i.value.length&&(u=0),f(u)}function f(u){d.value=u}function j(){d.value=-1}function G(u){if(!n.value)return;const L=i.value[u];L&&c.push(L.path)}return{query:s,focused:o,focusIndex:d,suggestions:i,activeSuggestion:n,onUp:l,onDown:g,focus:f,unfocus:j,go:G,locale:r}}});const q={class:"search-box",role:"search"},$=["placeholder"],H=["onMousedown","onMouseenter"],Z=["href"],Q={key:0,class:"parent-page-title"},J={class:"suggestion-row"},K={class:"page-title"},ee={class:"suggestion-content"};function te(e,t,s,o,d,i){return h(),p("div",q,[E(b("input",{ref:"input","onUpdate:modelValue":t[0]||(t[0]=n=>e.query=n),"aria-label":"Search",class:S({focused:e.focused}),placeholder:e.locale.placeholder??"Search",autocomplete:"off",spellcheck:"false",onFocus:t[1]||(t[1]=()=>e.focused=!0),onBlur:t[2]||(t[2]=()=>e.focused=!1),onKeyup:[t[3]||(t[3]=y(n=>e.go(e.focusIndex),["enter"])),t[4]||(t[4]=y((...n)=>e.onUp&&e.onUp(...n),["up"])),t[5]||(t[5]=y((...n)=>e.onDown&&e.onDown(...n),["down"]))]},null,42,$),[[O,e.query]]),e.activeSuggestion?(h(),p("ul",{key:0,class:"suggestions",onMouseleave:t[7]||(t[7]=(...n)=>e.unfocus&&e.unfocus(...n))},[(h(!0),p(k,null,v(e.suggestions,(n,c)=>(h(),p("li",{key:c,class:S(["suggestion",{focused:c===e.focusIndex}]),onMousedown:a=>e.go(c),onMouseenter:a=>e.focus(c)},[b("a",{href:n.path,onClick:t[6]||(t[6]=F(()=>{},["prevent"]))},[n.parentPageTitle&&(!e.suggestions[c-1]||e.suggestions[c-1].parentPageTitle!==n.parentPageTitle)?(h(),p("div",Q,x(n.parentPageTitle),1)):M("v-if",!0),b("div",J,[b("div",K,x(n.title||n.path),1),b("div",ee,[(h(!0),p(k,null,v(n.display,(a,r)=>(h(),p("span",{key:r,class:S(a.type)},x(a.str),3))),128))])])],8,Z)],42,H))),128))],32)):M("v-if",!0)])}const oe=R(W,[["render",te],["__scopeId","data-v-fd6cd4d5"],["__file","SearchBox.vue"]]);export{oe as default};
