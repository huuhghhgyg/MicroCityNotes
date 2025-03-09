# 计算复杂度分析

本文将通过一个 Lua 脚本来分析斐波那契数列的计算复杂度。我们将分别讨论递归实现和带记忆化的递归实现的时间复杂度。

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

以下是一个 Lua 脚本，用于测试上述两种实现的性能，并绘制计算时间随斐波那契数列索引变化的散点图。可以通过修改 43/44 行代码中的 `fibo` 和 `fibo_table` 函数来切换不同的实现方式，从而观察其计算时间的差异。

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

### 测试性内容

> 🧪 此处调用了测试的图表绘制功能，呈现更好的效果。

<iframe src="http://mcw.zhhuu.top/index.html#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" width="100%" height="600" style="border-radius:8px;"></iframe>

### 运行结果

通过运行上述脚本，我们可以观察到递归实现的计算时间随着 `n` 的增加呈指数增长，而带记忆化的递归实现的计算时间则呈线性增长。

在上述脚本中，我们分别调用了 `fibo` 和 `fibo_table` 函数来计算斐波那契数列。

- `fibo` 函数是简单的递归实现，其计算时间随着 `n` 的增加呈指数增长。
- `fibo_table` 函数是带记忆化的递归实现，其计算时间随着 `n` 的增加呈线性增长。`fibo_table` 函数通过存储已经计算过的结果来避免重复计算，从而显著提高了计算效率。
