# Debugging
This page introduces the functions and shortcuts related to debugging in MicroCity Web.

## Clearing Output
Right-clicking on the output area allows you to enter commands. Entering `print()` clears the content of the output area.

## Debugger Shortcuts
During the process of debugging a program, especially at breakpoints, you can use F9 (Step Over), F10 (Step Into), and F11 (Step Out) to control the program execution.
- <kbd>F9</kbd> **Step Over**: Skips the current line and executes the next line.
- <kbd>F10</kbd> **Step Into**: Enters the current line. If the current line is a function call, it enters the function body.
- <kbd>F11</kbd> **Step Out**: Exits the current function and executes the next line after the function call.

## Debug Commands
### Watching Variables
Use the `debug.watch()` command in the console to monitor variables.

For example, if you want to monitor the value of variable `a` during debugging, you can use the `debug.watch('a')` command.
> Right-clicking on the output area allows you to enter commands.

### Stack Trace
The `debug.traceback()` function can print the current stack trace information.

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

### Running Status
- `debug.debug()` enters Debug mode. It is often used to enter Debug mode during program execution. If you want to start in Debug mode, you can right-click the top :arrow_forward: button. See [User Interface Introduction - Running Status](./web-ui.html#program-control) for details.
- `debug.pause()` pauses program execution. The Run button :arrow_forward: at the top will light up, and the Pause button :pause_button: will turn off.

## Other Debug Commands
Most of Lua's Debug functions are applicable to MicroCity Web. For reference, please see:
- [The Debug Library | Lua 5.4 Reference Manual](https://www.lua.org/manual/5.4/manual.html#6.10)
- [Lua Debugging | Runoob Tutorial](https://www.runoob.com/lua/lua-debug.html)

> This post is translated using ChatGPT, please [**feedback**](https://github.com/huuhghhgyg/MicroCityNotes/issues/new) if any omissions.