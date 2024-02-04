# Mixed integer programming

Mixed-Integer Programming (MIP) is a powerful mathematical optimization technique used to solve problems where some of the decision variables are required to be integers. This article provides a step-by-step guide on creating and solving MIP models using Lua programming language in the context of MicroCity Web.

::: info Translate info
This section is translated with assistance from ChatGPT, and the translation may not be accurate. If you have any questions, please leave remark below.
:::

## Creating a Mixed-Integer Programming Model

Creating an integer programming model object.

```lua:no-line-numbers
local mip = math.newmip() -- Assign the created model object to mip
```

## Setting the Objective Function

In MicroCity Web, the first line of the model is the objective function, added using the `mip:addrow()` function.

You can choose to maximize or minimize the objective function. The usage is as follows:

::: code-tabs#shell

@tab:active Maximize

```lua:no-line-numbers
mip:addrow(coeff, 'max') -- Maximize the objective function
```

@tab Minimize

```lua:no-line-numbers
mip:addrow(coeff, 'min') -- Minimize the objective function
```

:::

#### Parameter Description and Examples

| Parameter | Purpose |
| --- | --- |
| `mip` | Mathematical model object. Sets the objective function for the model |
| `coeff` | Coefficients of the objective function, a `table` variable. Determines the coefficients of the objective function in the model. |
| `"min"` or `"max"` | Determines whether to minimize or maximize the objective function. |

`coeff` is a list of coefficients for the objective function, a `table` variable. Suppose you want to minimize the function 
$$4x_1+12x_2+18x_3$$
the approach to adding the objective function is as follows:

```lua
-- Assuming you have already created the model object and stored it in the variable mip
-- Set the objective function to 4*x1 + 12*x2 + 18*x3, minimize
mip:addrow({4, 12, 18}, "min")
```

## Adding Constraints

### Adding Constraint Equations

In MicroCity Web, use `mip:addrow()` to add the remaining constraint equations. The usage is as follows:

::: code-tabs#shell @tab:active ≤

```lua:no-line-numbers
mip:addrow(cons, "<=", b)
```

@tab ≥

```lua:no-line-numbers
mip:addrow(cons, ">=", b)
```

@tab =

```lua:no-line-numbers
mip:addrow(cons, "==", b)
```

:::

#### Parameter Description

| Parameter | Purpose |
| --- | --- |
| `mip` | The integer programming model object created at the beginning |
| `cons` | Coefficients of the constraint equation. Like `cons` in setting the objective function, it's a `table` variable. Determines the coefficients of the variables in the constraint equation. |
| `"<="` or `">="` or `"=="` | Determines the relationship between the constraint equation and the right-hand side. |
| `b` | The right-hand side of the constraint equation. |

#### Example

The objective function has been set to $4x_1+12x_2+18x_3$. Suppose you want to add two constraint equations for this function:

$$
\left\{\begin{matrix} 
  x_1+3x_3\ge3 \\  
  2x_2+2x_3\ge5 
\end{matrix}\right. 
$$

Add the corresponding constraint equations:

```lua
-- Add constraint: x1 + 3*x3 ≥ 3
mip:addrow({ 1, 0, 3 }, ">=", 3)

-- Add constraint: 2*x2 + 2*x3 ≥ 5
mip:addrow({ 0, 2, 2 }, ">=", 5)
```

It can be noticed that the number of coefficients is the same as the number of variables in the objective function. Therefore, before programming, it is necessary to determine the total number of variables and arrange the positions of each variable.

### Setting Variable Types

MicroCity's mathematical programming supports integer programming. The default variable range is non-negative real numbers (≥0). Below is a detailed method for setting variable types.

You can set the `i`-th variable in the model as an **integer variable** or a **0-1 variable**. If you don't set the variable to these types, it defaults to a **non-negative real number**.

::: code-tabs#shell
@tab Integer Variable

```lua
-- Set the first variable (first column, col 1) as an integer variable
mip:addrow('c1', 'int')
```

@tab 0-1 Variable

```lua
-- Set the second variable (second column, col 2) as a 0-1 variable
mip:addrow('c2', 'bin')
```

:::

## Model Solution and Output

### Model Solution

Since the objective function and constraint equations have been added, solving the model is straightforward:

```lua:no-line-numbers
mip:solve()
```

After executing this statement, the mathematical model stored in the variable `mip` is solved 🎉

### Output

After solving, you still need to output; otherwise, you won't know the results. Below are some commonly used functions for outputting the solution.

Get the **value of the objective function**:

```lua:no-line-numbers
mip['obj']
```

Get the value of the `i`-th **variable**:

```lua:no-line-numbers
mip['c'..i]
```

Here is a simple example from modeling to solving for reference. (It's just putting the pieces together)

Example:

$$
minf=4x_1+12x_2+18x_3\\
s.t.\left\{\begin{matrix} 
  x_1+3x_3\ge3 \\  
  2x_2+2x_3\ge5 \\
  x_1,x_2,x_3\in N
\end{matrix}\right. 
$$

> N represents the set of natural numbers (non-negative integers)

Script

```lua
local mip = math.newmip()

-- Set objective functio
mip:addrow({4, 12, 18}, "min") 

-- Add constraints
mip:addrow({ 1, 0, 3 }, ">=", 3) -- x1 + 3*x3 ≥ 3
mip:addrow({ 0, 2, 2 }, ">=", 5) -- 2*x2 + 2*x3 ≥ 5

-- Set all variables as integers
for i = 1, 3 do
    mip:addrow('c'..i, 'int')
end

-- Solve the model
mip:solve()

-- Output the value of the objective function
print("Objective function value:", mip['obj'])

-- Output the value of each variable
for i = 1, 3 do
    print("x"..i.."=",mip['c'..i])
end
```

Output

```text
Objective function value: 42.0
x1= 0.0
x2= 2.0
x3= 1.0
```

::: tip Online Execution
Check this [example](https://microcity.gitee.io/#s44523) in MicroCityWeb
:::

## Some Modeling Techniques

### Linearization

Sometimes we encounter modeling problems with multiple subscripts, such as decision variables $x_{ij}$, where $i$ and $j$ are indices. In such cases, linearization encoding is necessary.

Suppose the decision variable itself has a shape of 3 rows and 4 columns, i.e.:

| Col 1 | Col 2 | Col 3 | Col 4 |
| --- | --- | --- | --- |
| $x_{11}$ | $x_{12}$ | $x_{13}$ | $x_{14}$ |
| $x_{21}$ | $x_{22}$ | $x_{23}$ | $x_{24}$ |
| $x_{31}$ | $x_{32}$ | $x_{33}$ | $x_{34}$ |

Suppose the objective function wants to sum these decision variables, i.e. $F=\sum_{i=1}^3\sum_{j=1}^4x_{ij}$. If you want to input this into the objective function, you can linearize it as $x_{11}+x_{12}+...+x_{14}+x_{21}+...+x_{24}+x_{31}+...+x_{34}$.

Since there are only two dimensions, you can use two `for` loops to achieve this:

```lua
local cons = {}
for i = 1, 3 do -- First dimension
    for j = 1, 4 do -- Second dimension
        cons[4 * (i - 1) + j] = 1 -- Fill in the coefficient
        -- The idea here is similar to carrying in arithmetic
    end
end
```

#### Example: Assignment Model

Now let's look at the specific usage of multi-dimensional linearization and its convenience using a practical example.

**People A, B, C, and D deliver goods A, B, C, and D, respectively. The required time is shown in the table below. If each person delivers only one type of goods, which person should be assigned to deliver which type of goods to minimize the total time?**

| Person\Item | A | B | C | D |
| --- | --- | --- | --- | --- |
| A | 14 | 9 | 4 | 15 |
| B | 11 | 7 | 9 | 10 |
| C | 13 | 2 | 10 | 5 |
| D | 17 | 9 | 15 | 13 |

Assuming goods A, B, C, D correspond to indices 1, 2, 3, 4, respectively, let $x_{ij}=1$ represent person `i` delivering goods `j`, and $x_{ij}=0$ represent person `i` not delivering goods `j`.

The mathematical model for the above problem can be represented as

$$
minZ=\sum_{i=1}^4\sum_{j=1}^4c_{ij}x_{ij}\\
s.t.\left\{\begin{matrix} 
  \sum_{j=1}^4x_{ij}=1, i=1,2,...,4 \\  
  \sum_{i=1}^4x_{ij}=1, j=1,2,...,4 \\
  x_{ij}=0,1
\end{matrix}\right. 
$$

Solution code

```lua
-- Efficiency matrix
local cost = {
    {14, 9, 4, 15},
    {11, 7, 9, 10},
    {13, 2, 10, 5},
    {17, 9, 15, 13}
}

local mip = math.newmip()

-- Create the objective function
local coeff = {}
for i = 1, 4 do
    for j = 1, 4 do
        -- Easily convert the 2D array to a 1D array here
        coeff[4 * (i - 1) + j] = cost[i][j]
    end
end

mip:addrow(coeff, "min")

-- Add constraints
for k = 1, 4 do -- Control the value of the first dimension
    local cons = {}
    for i = 1, 4 do
        for j = 1, 4 do
            if i == k then -- Sum for j, check i
                cons[4 * (i - 1) + j] = 1
            else
                cons[4 * (i - 1) + j] = 0
            end
        end
    end
    mip:addrow(cons, "==", 1)
end

for k = 1, 4 do -- Control the value of the second dimension
    local cons = {}
    for i = 1, 4 do
        for j = 1, 4 do
            if j == k then -- Sum for i, check j
                cons[4 * (i - 1) + j] = 1
            else
                cons[4 * (i - 1) + j] = 0
            end
        end
    end
    mip:addrow(cons, "==", 1)
end

-- Solve the model
mip:solve()

-- Output the value of the objective function
print("Objective function value:", mip['obj'])

-- Output the decision variables
for i = 1, 4 do -- First dimension
    for j = 1, 4 do -- Second dimension
        local x = mip['c' .. 4 * (i - 1) + j]
        if x ~= 0 then
            print("x[" .. i .. "][" .. j .. "]=", x)
        end
    end
end
```

Output

```less
Objective function value: 29.0
x[1][3]= 1.0
x[2][1]= 1.0
x[3][4]= 1.0
x[4][2]= 1.0
```

::: tip Online Execution
Check this [example](https://microcity.gitee.io/#s445tk) in MicroCityWeb
:::

| Result | Person | Item |
| --- | --- | --- |
| $x_{13}=1$ | A | C |
| $x_{21}=1$ | B | A |
| $x_{34}=1$ | C | D |
| $x_{42}=1$ | D | B |

### Handling Intermediate Variables

Sometimes, there are intermediate variables in a model that must have corresponding positions in the matrix to be solved, and these intermediate variables do not participate in the calculation of the objective function value. **The coefficients of the intermediate variables at their corresponding positions can be set to 0.**

Suppose $x_1, x_2, x_3, x_4$ are decision variables, and $y_1, y_2$ are intermediate variables. The objective function is:

$$
z=\sum_{i=1}^4x_i
$$

The coefficients of the objective function can be set as follows:

```lua
local fcons = {1, 1, 1, 1, 0, 0}
-- The first 4 elements correspond to decision variables,
-- and the last 2 elements correspond to intermediate variables
```

Afterward, you can proceed with the general process 😎