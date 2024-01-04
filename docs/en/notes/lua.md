---
head:
- - meta
  - name: keywords
    content: MicroCity,编程,脚本,lua
---

# Quick Start with Lua Language
Since MicroCity uses the Lua scripting language, it is necessary to familiarize yourself with the basic usage of Lua before starting to write scripts with MicroCity. This article introduces the commonly used syntax for writing Lua scripts in MicroCity, which can help you quickly understand the overall approach to writing MicroCity scripts based on concepts from other programming languages.

## Variable and Function Definition
Lua automatically recognizes variable types, so there is no need to define variable types before variable names. You can assign values directly.
```lua
a = 1.5
b = "string"
c = {} -- c is a table, explained below
```

Function definition
```lua
function add(a, b)
    return a + b
end
```
Above is a simple definition of the `add()` function, which aims to add the two input variables and return the result.

Variables can be global or local, and functions are the same. Here is how to define local variables and functions.
```lua
-- Define a local function
local function show(msg)
    print(msg)
end

-- Define a local variable
local a = 1
```
If there is a conflict between locally defined content (function or variable) and globally defined content, the locally defined content takes precedence. When such a conflict exists, the content you are operating on is the local content.

If there is no explicit need to manipulate global variables, it is recommended to define variables as local variables as much as possible. This practice may reduce the occurrence of bugs and is a safer approach.

## Condition
It's all about `if`, and there are several specific forms of implementation:
1. Normal form
```lua
if condition then
    print("condition==true")
end
```

2. Form with `else`
```lua
if condition then
    print("condition==true")
else
    print("condition==false")
end
```

3. Form with `elseif`
```lua
if number > 0 then
    print("number>0")
elseif number < 0 then
    print("number<0")
else
    print("number==0")
end
```

In Lua, the equality operator is `==`, and the inequality operator is `~=`. You can apply these operators to conditional expressions. Here is a simple example:
```lua
print(1==1) -- true
print(1~=1) -- false
```

## Loop
Here are two most commonly used loops: `for` and `while`.
### for
The simplest form
```lua
-- Output numbers from 1 to 10, a total of 10 numbers
for i = 1,10 do
    print(i)
end
```

If you are familiar with C or C-like languages, the corresponding form of the above code is as follows:
```c
for(int i=1; i<=10; i++){
    printf("%d\n",i);
}
```

Taking step size into consideration
```lua
-- Output numbers from 10 to 1, a total of 10 numbers with a step size of -1
for i = 10,1,-1 do
    print(i)
end
```
> When the step size is negative, it is important to note that the starting and ending numbers should be in reverse order.

Generic loop
You can directly traverse all elements in a table.
`i` is the index of the table element, starting from 1; `v` is the value of the table element.
```lua
a = {4,7,9}
for i,v in ipairs(a) do
    print("index=",i,"\tvalue=",v)
end
```
> `ipairs` is used for arrays (guessing `i` stands for `integer`), and `pairs` is used for objects. Since arrays are also objects, `pairs` can be used for arrays as well.

### while
There is only one commonly used method for `while`.
```lua
local condition = true
while condition do
    print("while==true")
    condition = false
end
```
Similar to C-like languages. As long as `condition` is `true`, `while` will continue to run. When `condition` is set to `false`, the `while` loop will end.

### Loop Operators
Just like in other languages, the `break` keyword is used to exit a loop.
In Lua, there is no `continue`, only `break`. However, the `continue` functionality can be achieved by using the `if` + `break` structure.

## Lua's Small Feature: Tables
Although Lua refers to its arrays as `tables`, I think this data structure is more similar to Python sets or JSON, as it can store anything without any structural constraints.
```lua
collection = {{"a", 1, 2}, "abc", {2, 3}}
```
To find the length of an array, simply prepend `#` before the array name.
```lua
list = {1, 2, 3, 4, 5}
for i=1,#list do
    print(list[i])
end
```
In Lua, array (table) indices start from `1`, unlike C-like languages where they start from `0`. Taking the previously defined `collection` as an example:
```lua
-- collection = {{"a", 1, 2}, "abc", {2, 3}}
print(collection[1][1]) -- a
print(collection[2]) -- abc
print(collection[3][2]) -- 3
```

### Indexing
Lua table indexing is very flexible and can be done with numbers, strings, or even other types of data.

Here are some simple examples:
```lua
local list = {}

-- Indexing with numbers
list[1] = "a"

-- Indexing with strings
list["b"] = 2
list.message = "hello world" -- Equivalent to list["message"] = "hello world"

print(list[1]) -- a
print(list["b"]) -- 2
print(list.message) -- hello world
```

### Adding Elements
Adding to a specific position
```lua
table.insert(table, pos, value) -- Inserts an element at a specific position (pos)
```
Or
```lua
table.insert(table, value) -- Appends an element at the end
```

Example
```lua
list = {1, 2, 3, 4, 5}
table.insert(list, 6)
-- {1, 2, 3, 4, 5, 6}
```

### Removing Elements
```lua
table.remove(table, pos) -- Removes an element at a specific position
```

Example
```lua
list = {1, 2, 3, 4, 5}
table.remove(list, 2)
-- {1, 3, 4, 5}
```

### Sorting a Table
#### Default Sorting Method
You can use a function to sort a list, and the simplest usage is as follows:
```lua
table.sort(list) -- Sorts the list in ascending order
```

Here is an example:
```lua
-- Function: Print List
function PrintList(list)
    -- Output the list
    local listStr = ""
    for i = 1, #list do
        listStr = listStr .. list[i] .. " "
    end
    print(listStr)
end

local list = { 3, 7, 2, 5, 4 } -- Original list

PrintList(list) -- Output the original list
table.sort(list) -- Sort the list
PrintList(list) -- Output the sorted list

-- Result:
-- 3 7 2 5 4 (Original list)
-- 2 3 4 5 7 (Sorted list)
```

#### Custom Sorting Method
The `table.sort` function can also use a custom sorting rule, but this rule needs to be written in a function.

```lua
table.sort(list, function(a, b))
```

The `function(a, b)` is the custom sorting rule, which requires returning a boolean value (`true` or `false`) in the end. `a` and `b` are any two items in the list, and if the function returns `true`, then `a` comes before `b`, otherwise `b` comes before `a`.

Below are two examples for reference.

##### Example 1: Changing the code above to output in descending order
```lua
-- The PrintList() function is omitted here, with the same code as above

local list = { 3, 7, 2, 5, 4 } -- Original list

PrintList(list) -- Output the original list
table.sort(list, function(a, b) -- Sort the list
    return a > b -- Sort in descending order, if a > b, then a comes before b
end)
PrintList(list) -- Output the sorted list

-- Output:
-- 3 7 2 5 4 (Original list)
-- 7 5 4 3 2 (Sorted list)
```

##### Example 2: Sorting in a two-dimensional array
```lua
-- Function: Print the list
function PrintList(list)
    -- Output the list
    local listStr = ""
    for i = 1, #list do
        listStr = listStr .. "\n" .. list[i][1] .. ", " .. list[i][2]
    end
    print(listStr)
end

 -- Original list
local list = { { 3, 5 }, { 7, 6 }, { 2, 2 }, { 5, 1 }, { 4, 3 } }

PrintList(list) -- Output the original list

-- Sort in descending order based on the first dimension of each item in the list
table.sort(list, function(a, b)
    return a[1] > b[1]
end)
PrintList(list) -- Output the sorted list

-- Sort in descending order based on the second dimension of each item in the list
table.sort(list, function(a, b)
    return a[2] > b[2] 
end)
PrintList(list) -- Output the sorted list

-- Output:
-- Original list:
-- 3, 5
-- 7, 6
-- 2, 2
-- 5, 1
-- 4, 3

-- Sorted based on the first dimension:
-- 7, 6
-- 5, 1
-- 4, 3
-- 3, 5
-- 2, 2

-- Sorted based on the second dimension:
-- 7, 6
-- 3, 5
-- 4, 3
-- 2, 2
-- 5, 1
```

### Reference of table
When there is no deep copy of a table, and it is directly copied, the newly obtained `list2` is equivalent to a reference to the original `list1`, known as **shallow copy**. When you modify the elements in `list2` obtained from shallow copy, the elements in `list1` will also change because the two tables are referenced.

The above example code also follows this principle. Below is a new example to highlight this characteristic.

#### Example: Shallow Copy
```lua
function PrintList(list)
    -- Output the list
    local listStr = ""
    for i = 1, #list do
        listStr = listStr .. list[i] .. " "
    end
    print(listStr)
end

list1 = { 1, 2, 3, 4, 5 }
PrintList(list1)
-- 1 2 3 4 5

list2 = list1
PrintList(list2)
-- 1 2 3 4 5

-- Modify the second element in list2
list2[2] = 10
PrintList(list2)
-- 1 10 3 4 5

PrintList(list1)
-- 1 10 3 4 5
```

#### Example: Deep Copy
And what if you want to create a completely new list `list2`? Then you need to copy each element in the table one by one, also known as **deep copy**.
```lua
-- PrintList function code remains the same as above

list1 = { 1, 2, 3, 4, 5 }
PrintList(list1)
-- 1 2 3 4 5

list2 = {} -- Create a new empty list

-- Copy elements from list1 to list2
for index, value in pairs(list1) do
    table.insert(list2, value)
end
PrintList(list2)
-- 1 2 3 4 5

-- Modify the 2nd element of list2
list2[2] = 10
PrintList(list2)
-- 1 10 3 4 5

PrintList(list1)
-- 1 2 3 4 5 (no changes occurred)
```
In this example, modifying the elements in the deep copy `list2` does not affect the original `list1`.

> This post is translated using ChatGPT, please [**feedback**](https://github.com/huuhghhgyg/MicroCityNotes/issues/new) if any omissions.