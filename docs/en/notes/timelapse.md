# Advancement of Simulation Time

The advancement of time in simulation refers to how the simulation time is progressed during the simulation process.

## Classification of Time Advancement Methods
There are three main types of commonly used methods for advancing simulation time:
* **Event Scheduling Method**: The event scheduling method is an event-based simulation method that progresses time by sorting the events in the simulation system and executing activities in the order of their occurrence.
* **Fixed Increment Advancement Method**: The fixed increment advancement method refers to fixing a time increment during the simulation process. After setting the initial time, the simulation progresses by incrementing the time based on the set increment.
* Activity Event Scanning Method: For systems with high uncertainty, time advancement is achieved by scanning the events occurring in the system and executing the corresponding activities. This method may be more difficult to implement and can result in inaccurate time advancement (with errors), which could be due to my insufficient expertise. 😥

## Example
### Event Scheduling Method
The event scheduling method is an event-based simulation method that progresses time by sorting the events in the simulation system and executing activities in the order of their occurrence. During the simulation process, the simulation system progresses time to the next event and executes the corresponding activities based on the current simulation time and remaining events.

The event scheduling method can be divided into the following three main steps, which are also the main steps of the control program for event scheduling:
* Time Scanning: Determines the next event occurrence time and advances the simulation clock to that moment.
* Event Identification: Accurately identifies the event to occur.
* Event Execution: Accurately executes the event that occurs.

The basic principle flowchart of the event scheduling method is as follows:

```flow
init=>start: Initialization
scan=>operation: Time Scanning
exec=>operation: Event Execution
ise=>condition: Check if it is finished
e=>end: Simulation Ends

init->scan->exec->ise
ise(no)->scan
ise(yes)->e
```

For the specific implementation of the event scheduling method in MicroCityWeb, please refer to [Discrete Event Simulation and Program Control - Coroutines](./event-scheduling.md).

### Fixed Increment Advancement Method
The fixed increment advancement method refers to progressing time by a fixed step length starting from the initial time during the simulation process. Within each step length, if no event occurs, the simulation clock advances by a unit of time T. If there are several events within the step, they are executed in order, and these events are considered to have occurred at the end of the step.

::: center
![Fixed Increment Advancement Method](../../images/note/fixed_increment_advance.png)

Example Problem
:::

#### Code Flow Example
```lua
while scene.render() do
    t = t + dt
    if t % cycle ~= work_time then
        d = d + v * dt
        print("Time after departure:", t, "hours")
    else
        print("Time after departure:", t, "hours, resting")
    end

    car:setpos(CastToLine(d)) -- linear trajectory

    os.sleep(200)
end
```
> This is the main code flow and cannot be directly used.

The last part of [Simulation Idea for Automatic Warehouse](./warehouse-simulation.md) mentions the [improvement space](./warehouse-simulation.md#improvement-space) and implements the global simulation clock, ultimately achieving the time advancement method. It also implements non-fixed increment advancement, as detailed in the following section.

#### Change from Event Scheduling to Main Clock Advancement in Automatic Warehouse Simulation
Specifically, the following changes were made based on the original:

* Most `os.sleep()` related to the event scheduling method were removed. Due to the simplicity of the simulation process, the event scheduling method related to cargo loading and unloading was retained to optimize resource utilization.
* A global simulation clock was set to change the mindset of the `Agv:Move()` function from "executing tasks and refreshing the scene with a fixed step length" to "monitoring changes in simulation clock duration, executing tasks based on the duration changes, and refreshing the scene".
* Added simulation speed adjustment.

From the above changes, it can be seen that the core of the simulation shifted from event tasks to the simulation clock. The part of scene refresh utilized `os.clock()`.

### Non-Fixed Increment Advancement Method

Here is a simple example about the time advancement method and the `os.clock()` function, modified from the built-in cube rotation example in MicroCityWeb. In this example, `os.clock()` is used to calculate CPU running time, in order to achieve a certain ratio between simulated time and real-world time. The specific ratio can be adjusted by the `simspeed` (simulation speed) parameter.

```lua
local obj = scene.addobj('box')

-- Initial position
local x = 1
local y = 1
local z = 0

local rx, ry = 0.1, 0.1 -- rotation speeds in the x and y directions
local simspeed = 10 -- simulation speed

local t = 0 -- global simulation clock
local t0 = os.clock() -- record the start of the simulation time
while scene.render() do
    local dt = os.clock() - t0 -- calculate the time difference since the last recorded time
    t = t + dt -- simulate the corresponding length of time that has passed on the simulation clock
    
    -- Set the rotation position of the cube at this moment
    x = x + rx * dt * simspeed 
    y = y + ry * dt * simspeed 
    obj:setrot(x, y, z)
	
    t0 = os.clock() -- record the simulation time
end
```

Related information:
* When the simulation speed `simspeed` is set to 1, it indicates that the simulation clock is running at the same speed as the real-world clock. `simspeed` can be considered as an acceleration factor.
* `dt` represents the time difference between two recorded times, and the time step in the simulation is calculated based on `dt*simspeed`.
  ::: info
  It should be noted that the value of the time increment `dt` is generally not the same in each loop cycle, and its specific value generally depends on the computer's processing power.
  :::
  ::: tip
  Sometimes there may not be much time-consuming operation between two recorded times, and the calculated value of `dt` may be 0. Generally, there is a `scene.render()` between two time recordings, which usually ensures that a non-zero time difference can be calculated between the two samples.
  :::

> This post is translated using ChatGPT, please [**feedback**](https://github.com/huuhghhgyg/MicroCityNotes/issues/new) if any omissions.