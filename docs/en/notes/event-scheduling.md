# Discrete Event Simulation and Program Control

This article mainly introduces how to implement discrete event simulation and program control in MicroCity Web.

## Coroutine
MicroCity Web provides several coroutine-related functions, which facilitate the implementation of event scheduling. If you primarily use it for event scheduling and are not clear about the principles of event scheduling, you can read the [Time-lapse Event Scheduling](./timelapse#Event-Scheduling) section to understand the relevant concepts.

### coroutine.queue
Add a function or coroutine to the coroutine queue for waiting execution.
```lua:no-line-numbers
coroutine.queue(rt, f|co [, parameter list...])
```

Parameters
| Parameter | Meaning |
| --- | --- |
| `rt` | The time relative to the current queue, which must be greater than or equal to 0. In other words, it is the time for executing the input function or coroutine after `rt`. |
| `f/co` | The function or coroutine. If it is a function, only the function name needs to be inputted. |

### coroutine.qtime
Get the current queue time.
```lua:no-line-numbers
local time = coroutine.qtime()
```

### Example
Two examples are provided here:
1. [Coroutines Adding Tasks](#Coroutines-Adding-Tasks): Using coroutines to add tasks and displaying the current queue time in the function.
2. [Vehicle Movement](#Vehicle-Movement): Using coroutines to implement scene refreshing based on real-world time.

#### Coroutines Adding Tasks
This example demonstrates how to use coroutines to add tasks and display the current queue time in the function.

```lua
function Show()
    print("Current time: ", coroutine.qtime())
end
function ShowShort()
    print("Current time short: ", coroutine.qtime())
end

coroutine.queue(10, Show)
coroutine.queue(20, Show)
coroutine.queue(15, ShowShort)
coroutine.queue(5, Show)

-- Result:
-- Current time: 5.0
-- Current time: 10.0
-- Current time short: 15.0
-- Current time: 20.0
```

#### Vehicle Movement
This example demonstrates how to use coroutines to implement scene refreshing based on real-world time.

```lua
scene.setenv({grid = 'plane'}) -- Set the scene grid background

-- Vehicle
local car = scene.addobj('/res/2axle.glb')
car.speed = 1 -- Car speed

-- Initial time
local t = os.clock()
local dt = 0

-- Refresh the time state t and dt (step according to CPU interval to synchronize with real time)
function refreshtime()
    dt = os.clock() - t
    t = os.clock()
end

-- Coroutine updating scene
function update()
    if not scene.render() then return end -- Render the scene and check if the program is terminated
    coroutine.queue(dt, update) -- Add the next update based on CPU step time
    carmove() -- Move the car
    refreshtime() -- Calculate the current dt
end

-- Vehicle movement
function carmove()
    print("Car moves at ", t)
    local x, y, z = car:getpos()
    car:setpos(x, y, z + dt * car.speed)
end

-- Initial update (add the first update)
-- Because subsequent updates are involved in the function, the updates will automatically loop
coroutine.queue(dt, update)
```

[Open in MicroCityWeb](https://microcityweb.gitee.io/#rvnpar)

## Random Numbers
### Introduction to the Principle of Random Number Generation
In a computer, the process of selecting random numbers is not truly random. In fact, everything we do in a computer is not truly random, and it can be proven that it is impossible to manufacture a computer that can truly generate random numbers. The random numbers we obtain are actually pseudo-random numbers.

So how are pseudo-random numbers generated? There is an algorithm that generates the next number in a sequence based on a given number. This algorithm is initialized with a seed, and then iterated to produce subsequent random number sequences. If the seed is the same, the generated random number sequences will also be the same.

Now, every time a different random sequence is needed, a seed is obtained by reading the computer's clock. The principle behind this is that since it is impossible to know the exact moment when a program is started, each program start can be considered as obtaining a random number to be used as a seed.

Therefore, it can be anticipated that the resulting random number sequence is unpredictable, because we do not know what the random number seed will be.

### Creating Random Number Seeds
```lua:no-line-numbers
local seed = math.randomseed(x [, dist])
```

Parameters
| Parameter | Meaning |
| --- | --- |
| `x` | Random number seed, which will return different random numbers based on different input values. If different values are needed each time, the random number seed `x` can be set to the current time. |
| `dist` | Random number distribution (optional parameter). If not set, it defaults to a uniform distribution. If this parameter is set, `mu` and `sigma` can also be set as parameters for the corresponding distribution. |

The `dist` parameter can be set with three types of distribution:

* `'normal'`: Normal distribution
* `'exponential'`: Exponential distribution
* `'poisson'`: Poisson distribution

In addition, the parameters for these distributions can also be set, where the `mu` key represents the mean and the `sigma` key represents the variance.

### Example
```lua
-- Create a random number seed for Poisson distribution
local seed = math.randomseed(os.time(), {distribution = "poisson", mu = "3"}) -- Poisson distribution with a mean of 3

-- Output random number
print(seed:random())
```

## Program Control
The program control mentioned in this article mainly refers to how to use the [buttons](./web-ui#blue-command-area) in the user interface to control the program's operation, including pausing, resuming, stopping, etc.

::: center
![Command Bar](../../images/note/MicroCityWeb/CommandBar.png)
Command Bar
:::

> It mainly refers to the first 3 buttons in the command bar.

Program control in MicroCity Web mainly refers to the pause, resume, and stop of 3D interface rendering implemented through the `scene` object, with specific functions as follows:
```lua:no-line-numbers
local state = scene.render()
```

Here, the return value of `scene.render()` is stored in the variable `state`, and the value of the `state` variable is either `true` or `false`, representing the program's running state as running or terminated (button 3 pressed in the command bar).

The pause of rendering of 3D objects is also achieved by calling `scene.render()`. If refreshing 3D objects is achieved by continuously calling the `scene.render()` function and the refresh interval is not controlled by `os.sleep()`, it is possible to pause the rendering at a certain state on the 3D interface. This is because if the movement speed of 3D objects is controlled by `os.sleep()`, clicking the pause button might happen during the `os.sleep()` process, causing the program to not respond immediately and thus making the pause button ineffective. Therefore, it is recommended to avoid using `os.sleep()` for controlling the motion speed of 3D objects, and instead control the advancement duration by adding other parameters to achieve the purpose of controlling the speed of 3D object movement.

> This post is translated using ChatGPT, please [**feedback**](https://github.com/huuhghhgyg/MicroCityNotes/issues/new) if any omissions.