# Debugging
This page introduces the functions and shortcuts related to debugging MicroCity Web.

## Clear Output
You can enter commands by right-clicking the output area, and entering `print()` will clear the content of the output area.

## Debugger Shortcuts
During the debugging process, especially at breakpoints, you can use F9 (Step Over), F10 (Step Into), and F11 (Step Out) to control the program execution.
- <kbd>F9</kbd> **Step Over**: Skip the current line and execute the next line
- <kbd>F10</kbd> **Step Into**: Enter the current line; if the current line is a function call, enter the function body
- <kbd>F11</kbd> **Step Out**: Step out of the current function and execute the next line of the function call

## Debug Commands
### Watch Variables
Use the `debug.watch()` command in the console to monitor variables.

For example, if you want to monitor the value of variable `a` during debugging, you can use the `debug.watch('a')` command.
> You can enter commands by right-clicking the output area

### Stack Tracing
Use the `debug.traceback()` function to print the current stack trace information.

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

### Running State
- `debug.debug()` enters Debug mode. It is often used to enter Debug mode while the program is running. If you want to enter Debug mode at startup, you can right-click on the top :arrow_forward: button. See [Introduction to the User Interface - Running State](./web-ui.html#程序控制) for more details.
- `debug.pause()` pauses the program. The top run button :arrow_forward: will light up, and the pause button :pause_button: will go out.

## Other Debugging Commands
Most of Lua's Debug functions are applicable to MicroCity Web. You can refer to:
- [The Debug Library | Lua 5.4 Reference Manual](https://www.lua.org/manual/5.4/manual.html#6.10)
- [Lua Debugging | Runoob Tutorial](https://www.runoob.com/lua/lua-debug.html)

## File Saving
When saving files in MicroCity Web, you can choose to save them as `.mw` files and `.lua` files.
- `.mw` file: Packages the entire project, including the currently open code files and files in the virtual disk.
- `.lua` file: Only saves the currently edited code file. It is commonly used for writing Lua scripts only and modifying custom `.lua` library files.

> This post is translated using ChatGPT, please [**feedback**](https://github.com/huuhghhgyg/MicroCityNotes/issues/new) if any omissions.