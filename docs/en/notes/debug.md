# Debugging

This page introduces the functions and shortcuts related to debugging in MicroCity Web.

## Clear Output
Right-clicking on the output area allows you to enter commands. Typing `print()` will clear the contents of the output area.

## Debugger Shortcuts
While debugging a program, especially at breakpoints, you can use the following shortcuts to control the program execution:
- <kbd>F9</kbd> **Step Over**: Skips the current line and executes the next line.
- <kbd>F10</kbd> **Step Into**: Enters the current line. If the current line is a function call, it steps into the function.
- <kbd>F11</kbd> **Step Out**: Exits the current function and continues the execution of the line after the function call.

## Debug Commands
### Watch Variables
You can use the `debug.watch()` command in the console to monitor variables.

For example, if you want to monitor the value of variable `a` while debugging, you can use the command `debug.watch('a')`.
> Right-click on the output area to enter commands.

### Stack Tracing
The `debug.traceback()` function can be used to print the current stack trace information.

```lua
function myFunction()
    -- Some code logic
    print(debug.traceback("Stack trace"))
    -- Other code logic
end

function anotherFunction()
    myFunction()
end

anotherFunction()
```

Output:

```
Stack trace
stack traceback:
[string "function myFunction() ..."]:3: in function 'myFunction'
[string "function myFunction() ..."]:8: in function 'anotherFunction'
[string "function myFunction() ..."]:11: in main chunk
```

### Running Mode
- `debug.debug()` enters Debug mode. This is commonly used to enter Debug mode during program execution. If you want to enter Debug mode at startup, you can right-click on the top :arrow_forward: button. See [User Interface Introduction - Running Mode](./web-ui.html#program-control) for details.
- `debug.pause()` pauses program execution. The top run button :arrow_forward: will light up, and the pause button :pause_button: will turn off.

## Other Debug Commands
Most of Lua's Debug functions are applicable to MicroCity Web. You can refer to:
- [The Debug Library | Lua 5.4 Reference Manual](https://www.lua.org/manual/5.4/manual.html#6.10)
- [Lua Debug | Runoob Tutorial](https://www.runoob.com/lua/lua-debug.html)

## File Saving

When saving project files in MicroCity Web, the code and files uploaded to the virtual disk are saved as `.mw` files with a compression format of `.gz`. After downloading to the local computer, if you need to extract all the files from the file, you can change the file extension of the `mw` file to `gz` and then decompress it.

::: warning WIP 🚧
Currently, it has been found that if you open a single file or save the file directly after editing, it will be saved as an `.mw` file. If you upload multiple files, they will not be saved as `.mw` files, but the opened code will be saved directly to the source file opened on the local disk.
:::

### Example
Assuming that you saved a file called `PoissonGraph.mw`, you can rename it to `PoissonGraph.gz` and decompress it to obtain the following file structure:

```
PoissonGraph
├── code
├── Histogram.lua
├── pass
└── Subplot.lua
```

Description
- `code`: The code file in the editor. After a suffix is added (rename it as `code.lua` for example), the code opened in the editor can be obtained.
- `Histogram.lua` and `Subplot.lua`: The library files in the virtual disk.

> This post is translated using ChatGPT, please [**feedback**](https://github.com/huuhghhgyg/MicroCityNotes/issues/new) if any omissions.