# 计算复杂度分析

本文将通过一个Lua脚本来分析斐波那契数列的计算复杂度。我们将分别讨论递归实现和带记忆化的递归实现的时间复杂度。

## 递归简介

递归是一种在函数定义中使用函数自身的方法。递归函数通常包含两个部分：基准情况和递归情况。基准情况定义了递归的终止条件，而递归情况则定义了函数如何调用自身来解决更小的子问题。

### 递归示例

以下是一个简单的递归函数示例，用于计算阶乘：

```lua
function factorial(n)
    if n == 0 then
        return 1
    else
        return n * factorial(n - 1)
    end
end
```

在这个示例中，`factorial` 函数通过递归调用自身来计算 `n` 的阶乘。当 `n` 为 0 时，函数返回 1，这是基准情况。否则，函数返回 `n` 乘以 `factorial(n - 1)`，这是递归情况。

通过这种方式，递归函数可以将复杂问题分解为更小的子问题，直到达到基准情况，从而简化问题的求解过程。

## 递归与动态规划

递归和动态规划密切相关。动态规划是一种优化技术，通常用于解决具有重叠子问题和最优子结构性质的问题。递归实现通常会导致大量的重复计算，而动态规划通过记忆化或自底向上的方法来避免这些重复计算，从而提高效率。

例如，在计算斐波那契数列时，简单的递归实现会重复计算许多子问题，而带记忆化的递归实现则通过存储已经计算过的结果来避免重复计算，这就是动态规划的一个典型应用。

## 递归与栈

递归函数使用调用栈来保存每一层递归的状态，包括函数的局部变量、参数和返回地址。每次递归调用时，这些信息会被压入栈中；函数返回时，这些信息会从栈中弹出。

由于系统栈空间有限，当递归层数过多时，会超过栈的最大容量，导致栈溢出错误（Stack Overflow），进而引发程序崩溃或异常终止。

为了避免栈溢出，可以使用以下几种方法：
1. **尾递归优化**：某些编程语言支持尾递归优化，将尾递归转换为迭代，从而减少栈的使用。尾递归是指递归调用是函数中的最后一个操作，这样编译器可以优化栈的使用。
2. **改用迭代**：将递归算法转换为迭代算法，使用循环来代替递归调用。迭代算法通常使用显式的栈或队列来管理状态，从而避免了系统栈的限制。
3. **增加栈大小**：在某些情况下，可以通过增加栈的大小来支持更深的递归调用，但这通常不是最优解决方案，因为它只是延缓了栈溢出的问题，而没有从根本上解决。

合理控制递归深度并了解栈的工作机制，是优化递归算法和预防栈溢出的关键。

## 斐波那契数列的递归实现

首先，我们来看一个简单的递归实现斐波那契数列的函数 `fibo`：

```lua
function fibo(n)
    if n == 0 or n == 1 then
        return n
    end
    
    return fibo(n-1) + fibo(n-2)
end
```

### 时间复杂度分析

该递归函数的时间复杂度是指数级的，即 $O(2^n)$。这是因为每次调用 `fibo(n)` 时，它会递归调用 `fibo(n-1)` 和 `fibo(n-2)`，导致大量的重复计算。例如，计算 `fibo(5)` 时，会多次计算 `fibo(3)` 和 `fibo(2)`。

## 带记忆化的递归实现

为了优化上述递归实现，我们可以使用记忆化技术来避免重复计算。以下是带记忆化的递归实现：

```lua
function fibo_table(n, l_fibo)
    if not l_fibo then
        l_fibo = {}
        l_fibo[0] = 0
        l_fibo[1] = 1
    end
    
    if l_fibo[n] then
        return l_fibo[n]
    else
        l_fibo[n] = fibo_table(n-1, l_fibo) + fibo_table(n-2, l_fibo)
        return l_fibo[n]
    end
end
```

### 时间复杂度分析

带记忆化的递归实现的时间复杂度是线性的，即 $O(n)$。这是因为每个斐波那契数只计算一次，并且结果存储在表 `l_fibo` 中，避免了重复计算。

## 性能测试脚本

以下是一个Lua脚本，用于测试上述两种实现的性能，并绘制计算时间随斐波那契数列索引变化的散点图。可以通过修改43/44行代码中的 `fibo` 和 `fibo_table` 函数来切换不同的实现方式，从而观察其计算时间的差异。

```lua
function fibo(n)
    if n == 0 or n==1 then
        return n
    end
    
    return fibo(n-1) + fibo(n-2)
end

function fibo_table(n, l_fibo)
    if not l_fibo then
        l_fibo = {}
        l_fibo[0] = 0
        l_fibo[1] = 1
    end
    
    if l_fibo[n] then
        return l_fibo[n]
    else
        l_fibo[n] = fibo_table(n-1, l_fibo) + fibo_table(n-2, l_fibo)
        return l_fibo[n]
    end
end

print()

scene.setenv({camtype='ortho'})

function scatter(x, y, x_ratio, y_ratio)
    x_ratio = x_ratio or 2
    y_ratio = y_ratio or 5

    scene.addobj("points", {vertices={x*x_ratio, y*y_ratio, 0}, size=5})
    local l = scene.addobj("label", {text=y})
    l:setpos(x*x_ratio,y*y_ratio-2,0)
    scene.render()
end

local last_t = os.clock()

for i = 0, 40 do
    -- 计算数值
    fib_value = fibo(i)
    -- fib_value = fibo_table(i)
    
    cost_t = os.clock() - last_t
    print('fibo('..i..')=', fib_value, 't=', cost_t)
    
    if i%1==0 then
        scatter(i, cost_t)
    end
    
    last_t = os.clock()
end
```

<iframe src="https://microcity.github.io/#/H4sIAAAAAAAACu2Vz2sTQRTHc96/4lGQ3a2bMLv5URDmb/DgUUrY7E7o1HUmzExK1hAQRHoR7KV48KAFz1UQPIjaf8bG/Bkyu5sfm7bUg0WE9zlkJu+9+b73hpdMIlPWuGMIIaTX69g13OuSzdUSkV7UCDt77Q5pt6OQNMKos0fsubsuzDLWJlYNQkysBnGWHeob4m7z/6cMxyIxXAoY8oH0hO8AAPAhCKAUCEgFgtIQzAEThcuimBkrAaWBibRYnQ1PqdUMfbi/3Ee+YyOdWr6+iQcZ80QAWd9+X2eXpjLVM1c2CtPZlu0x2QcKZNsaWmt4tVA+XEaI/WubW3nLs5lm29LCSm920QxXfVR9rzxRvcOb84i0vKaR4sJ4vuPohAnW0swwceRNk/ipyUeMulKZA+nO/I0L1UlsDFPeJIA8gElfxYbLAPJyUyaurEBXO6kgKlz5ypWvXV2n8JVFxGkqB4fezkhyYfROANMjpgxPmKbTye464W6+3JJZAJo/Y7Q7K/NnMokzyIBuSWbxgGVW0bCJofky+oFmZiS1t1ZfiTejgPgbxSkmUqa8asqqPLE2fQMUpG4lmUye2AttNmHx5eXi4rjdm787+fn1LX/4aHH+4/LD8eXrj4sX3+dv3s8/ny4uThZnr5yhVMDtXAXQ7kEqi4RW4fzs1/mb+emny+ffCtuQD/pHcTZm1Ux43F/GbruqoagCio9EXikUmlX5RUA5Dm6h7LZavNVyfeoGa+0AXGMNpZJfG3R+L6SU1Kd8OSy8fqT2G7nu+phI//U/FvI3GcX6zl+0W95/y9b73w0jfP8RBEEQBEEQBEEQBEEQBEEQBEEQBEEQ5I/5DQxbQQoAKAAA" width="100%" height="600" style="border-radius:8px;"></iframe>

[在 MicroCityWeb 中打开](https://microcity.github.io/#sp7pwr)

### 运行结果

通过运行上述脚本，我们可以观察到递归实现的计算时间随着 `n` 的增加呈指数增长，而带记忆化的递归实现的计算时间则呈线性增长。

在上述脚本中，我们分别调用了 `fibo` 和 `fibo_table` 函数来计算斐波那契数列。
- `fibo` 函数是简单的递归实现，其计算时间随着 `n` 的增加呈指数增长。
- `fibo_table` 函数是带记忆化的递归实现，其计算时间随着 `n` 的增加呈线性增长。`fibo_table` 函数通过存储已经计算过的结果来避免重复计算，从而显著提高了计算效率。