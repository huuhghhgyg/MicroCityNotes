# Model Solving
In MicroCity, mathematical models can be solved. In this article, we will introduce the common process of solving mathematical models in MicroCity and provide some tips to help you better build models.

The detailed usage of all functions in the planning model can be found in the document [4.8 Mixed Integer Linear Programming](../docs/4.8_mixed_integer_programming.md).

::: tip
The content on this page is based on MicroCity Desktop version. If you are looking for a solution for mixed integer programming in MicroCity Web version, please refer to the corresponding [Mixed Integer Programming](./mip.md) section in the MicroCity Web notes.
:::

## Creating Model Objects
Create a planning model object and store it in the variable `lp`.
```lua
local lp = CreateLP()
```
> The mathematical model object created in the official documentation is stored in the variable `LPModel`, which has the same function as `lp` in this article.

## Writing Mathematical Models
At this point, the object of the mathematical model has been created and stored in the variable `lp`, and further operations can be performed on it. A mathematical model generally consists of two parts:
- [Objective Function](#creating-the-objective-function)
- [Constraint Equations](#adding-constraint-equations)

Next, let's introduce how to create the objective function.

### Creating the Objective Function
In MicroCity, `SetObjectFunction()` is used to set the objective function of the model object. It allows you to choose whether to optimize for **maximum** or **minimum**. The specific usage is as follows:

::: code-tabs#shell
@tab:active Maximum
```lua
SetObjFunction(lp, coeff, "max") -- Optimize for maximum
```
@tab Minimum
```lua
SetObjFunction(lp, coeff, "min") -- Optimize for minimum
```
:::
> "min" and "max" are case-insensitive, so "MIN" and "MAX" can also be used.

#### Parameter Description and Example
| Parameter             | Description                                                                  |
| ---------------- | --------------------------------------------------------------------- |
| `lp`             | Mathematical model object. Input the mathematical model into the function to set the objective function.                |
| `coeff`           | Objective function coefficients, which is a `table` type variable. Used to determine the coefficients of the objective function in the model. |
| `"min"` or `"max"` | Determine whether to optimize for the maximum or the minimum of the objective function.                                        |

`coeff` is a coefficient list for the objective function, which is a `table` type variable. Suppose you want to minimize the function $4x_1+12x_2+18x_3$, the procedure to add the objective function is as follows:
```lua
-- Suppose you have already created the model object and stored it in the variable lp

-- 4*x1 + 12*x2 + 18*x3
local coeff = {4, 12, 18}

-- Set the objective function: minimize
SetObjFunction(lp, coeff, "min")
```

### Adding Constraint Equations
In MicroCity, the function for adding model constraints is `AddConstraint()`, used as follows:

::: code-tabs#shell
@tab:active ≤
```lua
-- Use symbols to express
AddConstraint(lp, cons, "<=", b)

-- Alternatively, you can use abbreviations
AddConstraint(lp, cons, "le", b)
```

@tab ≥
```lua
-- Use symbols to express
AddConstraint(lp, cons, ">=", b)

-- Alternatively, you can use abbreviations
AddConstraint(lp, cons, "ge", b)
```

@tab =
```lua
-- Use symbols to express
AddConstraint(lp, cons, "==", b)

-- Or you can use abbreviations to express it

AddConstraint(lp, cons, "eq", b)
```
:::

#### Parameter Description
| Parameter                                      | Description                                                                                            |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `lp`                                           | Mathematical model object. Input the mathematical model into the function to add constraints to it.    |
| `cons`                                         | Constraint equation coefficients. Similar to `cons` in setting the objective function, it is also a `table` type variable used to determine the coefficients of each variable in the constraint equation. |
| `"<="` or `">="` or `"=="`, or their corresponding alphabetic expressions | Determines the relationship between the constraint equation and the right-hand side. |
| `b`                                            | A number representing the right-hand side of the constraint equation. It can be a variable or a constant. |

#### Example
The objective function $4x_1+12x_2+18x_3$ has been set above. Suppose you want to add two constraint equations for this function:
$$
\left\{\begin{matrix} 
  x_1+3x_3\ge3 \\  
  2x_2+2x_3\ge5 
\end{matrix}\right. 
$$
Add corresponding constraint equations:
```lua
-- Add constraint: x1+3*x3≥3
cons = { 1, 0, 3 }
AddConstraint(lp, cons, ">=", 3)

-- Add constraint: 2*x2+2*x3≥5
cons = { 0, 2, 2 }
AddConstraint(lp, cons, ">=", 5)
```
It is not difficult to notice that the number of coefficients is consistent with the number of variables in the objective function. Therefore, before programming the solution, you need to first determine the total number of variables and arrange the positions of each variable.

### Set Variable Types
MicroCity's mathematical programming supports integer programming. If no `SetUnbounded()` is set for the variables, the default value range for the variables is non-negative real numbers (≥0). The following describes in detail how to set variable types.

You can set the **integer variable** or **0-1 variable** for the `i`-th variable in the model. If the variable is not set to these types, the default variable is **non-negative real number**.

::: code-tabs#shell
@tab Integer Variables
```lua
SetInteger(lp, i) -- Integer variable
```
@tab 0-1 Variables
```lua
SetBinary(lp, i) --0-1 variable
```
:::

To allow the value of the `i`-th variable to be negative (by default, it cannot be negative):
```lua
SetUnbounded(lp, i)
```

## Model Solving and Output
### Model Solving
Since both the objective function and the constraint equations have been added, solving the model is simple, just one step:
```lua
SolveLP(lp)
```
After executing this statement, the mathematical model stored in the variable `lp` is solved.

### Output
After solving the problem, it still needs to be output to understand the result of the solution. The following are commonly used functions for outputting the solution result.

Obtain the **objective function value**:
```lua
GetObjective(lp)
```

Obtain the value of the `i`-th **variable**:
```lua
GetVariable(lp, i)
```

#### SolveLP
The `SolveLP()` function also has output after the solution is obtained, the meaning of the output code is as follows:
| Output Code | Meaning         |
| ----------- | --------------- |
| 0           | Success         |
| -1          | Invalid LP Model |
| -2          | Out of Memory   |
| 1           | Suboptimal      |
| 2           | Infeasible      |
| 3           | Unbounded       |
| 4           | Degenerate      |
| 5           | Numerical Error |
| 6           | User Termination |
| 7           | Timeout Error   |

For the meaning of other return values, please refer to the documentation [4.8 Mixed Integer Linear Programming](../docs/4.8_mixed_integer_programming.md) for the `SolveLP()` function.

## Model Solution Example
Here is a simple example of modeling and solving for reference. (Actually it just strings together the previous content)

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

Script:
```lua
-- Create linear programming object
local lp = CreateLP()

local n = 3 -- Set the number of objective functions

-- Objective function: 4*x1 + 12*x2 + 18*x3
-- Set the coefficients of the objective function, and the objective function is minimized
local coeff = { 4, 12, 18 }
SetObjFunction(lp, coeff, "min")

-- Add constraint 1: x1 + 3*x3 ≥ 3
cons = { 1, 0, 3 }
AddConstraint(lp, cons, ">=", 3)

-- Add constraint 2: 2*x2 + 2*x3 ≥ 5
cons = { 0, 2, 2 }
AddConstraint(lp, cons, ">=", 5)

-- Since SetUnbounded() is not set,
-- by default, all variables are non-negative,
-- so there is no need to add constraints for non-negative variables.

-- Set all variables to integers
for i = 1, n do
    SetInteger(lp, i)
end

-- Solve the model
SolveLP(lp)

-- Output the objective function value
print("Objective function value:", GetObjective(lp))

-- Output the values of each variable
for i = 1, n do
    print("x", i, "=", GetVariable(lp, i))
end
```

Output:
```
Objective function value: 42
x1=0
x2=2
x3=1
```

## Some Techniques for Modeling
### Linearization
Sometimes we encounter modeling problems with multiple subscripts, such as the decision variable $x_{ij}$, which needs to be linearized.

Let's assume that the shape of the decision variable itself is 3 rows and 4 columns, that is:
| Column 1  | Column 2  | Column 3  | Column 4  |
| --------- | --------- | --------- | --------- |
| $x_{11}$  | $x_{12}$  | $x_{13}$  | $x_{14}$  |
| $x_{21}$  | $x_{22}$  | $x_{23}$  | $x_{24}$  |
| $x_{31}$  | $x_{32}$  | $x_{33}$  | $x_{34}$  |

Assuming that the objective function is to sum up these decision variables, which is $F=\sum_{i=1}^3\sum_{j=1}^4x_{ij}$, if we want to input it into the objective function, we can linearize it as $x_{11}+x_{12}+...+x_{14}+x_{21}+...+x_{24}+x_{31}+...+x_{34}$.

Since there are only two dimensions, we can use two `for` loops to achieve this:
```
local cons = {}
for i = 1, 3 do -- the first dimension
    for j = 1, 4 do -- the second dimension
        cons[4 * (i - 1) + j] = 1 -- fill in the coefficients
        -- the idea of 4 * (i - 1) + j is similar to carrying
    end
end

-- result:
-- cons has a length of 12, and all values are 1
```

#### Example: Assignment Model
Let's take a look at the specific usage and convenience of multidimensional linearization using an actual example.

**Four people, A, B, C, and D, are assigned to deliver four types of goods, A, B, C, and D, with the corresponding delivery times shown in the table. If each person delivers only one type of goods, who should be assigned to deliver which type of goods to minimize the total time?**
| Person\Goods | A   | B   | C   | D   |
| ------------ | --- | --- | --- | --- |
| A            | 14  | 9   | 4   | 15  |
| B            | 11  | 7   | 9   | 10  |
| C            | 13  | 2   | 10  | 5   |
| D            | 17  | 9   | 15  | 13  |

Let's assume that the numbers corresponding to goods A, B, C, D are 1, 2, 3, 4 respectively, and $x_{ij}=1$ represents person `i` delivering goods `j`, and $x_{ij}=0$ represents person `i` not delivering goods `j`.

The mathematical model of the above problem can be represented as

$$
minZ=\sum_{i=1}^4\sum_{j=1}^4c_{ij}x_{ij}\\
s.t.\left\{\begin{matrix} 
  \sum_{j=1}^4x_{ij}=1, i=1,2,...,4 \\  
  \sum_{i=1}^4x_{ij}=1, j=1,2,...,4 \\
  x_{ij}=0,1
\end{matrix}\right. 
$$

Solution code:
```lua
-- efficiency matrix
local cost = {
    { 14, 9, 4, 15 },
    { 11, 7, 9, 10 },
    { 13, 2, 10, 5 },
    { 17, 9, 15, 13 }
}

local lp = CreateLP()

-- create the objective function
local coeff = {}
for i = 1, 4 do
    for j = 1, 4 do
        -- it is easy to convert a two-dimensional array to a one-dimensional array here
        coeff[4 * (i - 1) + j] = cost[i][j]
    end
end

SetObjFunction(lp, coeff, "min")

-- add constraints
for k = 1, 4 do -- control the value of the i dimension
    local cons = {}
    for i = 1, 4 do
        for j = 1, 4 do
            if i == k then -- sum up j, check i
                cons[4 * (i - 1) + j] = 1
            else
                cons[4 * (i - 1) + j] = 0
            end
        end
    end
    AddConstraint(lp, cons, "==", 1)
end

for k = 1, 4 do -- Control the value of the jth dimension
    local cons = {}
    for i = 1, 4 do
        for j = 1, 4 do
            if j == k then -- Sum i and check j
                cons[4 * (i - 1) + j] = 1
            else
                cons[4 * (i - 1) + j] = 0
            end
        end
    end
    AddConstraint(lp, cons, "==", 1)
end

-- Solve the model
SolveLP(lp)

-- Output the objective function value
print("Objective function value:", GetObjective(lp))

-- Output the decision variables
for i = 1, 4 do -- First dimension
    for j = 1, 4 do -- Second dimension
        local x = GetVariable(lp, 4 * (i - 1) + j)
        if x ~= 0 then
            print("x[", i, "][", j, "]=", x)
        end
    end
end
```

Output
```
Objective function value: 29
x[1][3]=1
x[2][1]=1
x[3][4]=1
x[4][2]=1
```
| Result      | Person | Item |
| ----------  | :---: | :------: |
| $x_{13}=1$  |   A   |    C     |
| $x_{21}=1$  |   B   |    A     |
| $x_{34}=1$  |   C   |    D     |
| $x_{42}=1$  |   D   |    B     |

### Handling Intermediate Variables
Sometimes there may be intermediate variables in the model that need to have corresponding positions in the matrix in order to be solved, but these intermediate variables do not participate in the calculation of the objective function value. **You can set the coefficients of these intermediate variables to 0 at their corresponding positions.**

Let $x_1, x_2, x_3, x_4$ be the decision variables and $y_1, y_2$ be the intermediate variables. The objective function is:
$$
z = \sum_{i=1}^4 x_i
$$
Then the coefficients of the objective function can be set as:
```lua
local fcons = {1, 1, 1, 1, 0, 0}
```
After that, you can proceed with the general process 😎

> This post is translated using ChatGPT, please [**feedback**](https://github.com/huuhghhgyg/MicroCityNotes/issues/new) if any omissions.