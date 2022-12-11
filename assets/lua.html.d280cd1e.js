import{_ as n,o as s,c as a,e}from"./app.1e6d3545.js";const t={},p=e(`<h1 id="lua语言快速上手" tabindex="-1"><a class="header-anchor" href="#lua语言快速上手" aria-hidden="true">#</a> LUA语言快速上手</h1><p>由于MicroCity采用的脚本语言是Lua，因此在开始使用MicroCity编写脚本之前需要先熟悉Lua的基本用法。本文介绍了MicroCity编写Lua脚本的常用的语法，能够帮助你快速地根据其他编程语言中的概念理解MicroCity脚本编写的总体思路。</p><h2 id="变量和函数定义" tabindex="-1"><a class="header-anchor" href="#变量和函数定义" aria-hidden="true">#</a> 变量和函数定义</h2><p>lua会自动识别变量类型，因此无需在变量名称前定义变量类型，直接赋值即可。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>a <span class="token operator">=</span> <span class="token number">1.5</span>
b <span class="token operator">=</span> <span class="token string">&quot;string&quot;</span>
c <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">-- c为集合，见下文介绍</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数的定义</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上方简单定义了一个<code>add()</code>函数，目的是把输入的两个变量相加返回结果。</p><p>变量分为全局变量和局部变量，函数也是如此。局部变量和函数的定义如下。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 定义局部函数</span>
<span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment">-- 定义局部变量</span>
<span class="token keyword">local</span> a <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果局部定义的内容（函数或变量）和全局定义的内容有冲突，以局部的内容优先。存在这种冲突时，你操作的内容是局部的内容。</p><p>如果没有明确需要操作全局变量，建议尽量将变量定义为局部变量。这种做法可能会减少bug的出现，也是更加安全的做法。</p><h2 id="条件" tabindex="-1"><a class="header-anchor" href="#条件" aria-hidden="true">#</a> 条件</h2><p>就是<code>if</code>，具体实现形式有如下几种：</p><ol><li>普通形式</li></ol><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">if</span> condition <span class="token keyword">then</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;condition==true&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>带<code>else</code>的形式</li></ol><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">if</span> condition <span class="token keyword">then</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;condition==true&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;condition==false&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>以及使用<code>elseif</code>的形式</li></ol><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">if</span> number <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token keyword">then</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;number&gt;0&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">elseif</span> number <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">then</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;number&lt;0&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;number==0&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h2><p>记录一下最常用的两种循环: <code>for</code>&amp;<code>while</code></p><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h3><p>最普通的形式</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 输出1到10共10个数</span>
<span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token number">10</span> <span class="token keyword">do</span>
    <span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你比较熟悉C语言或C类语言，以上代码对应的形式如下</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>考虑步长</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 输出10到1共10个数，步长为-1</span>
<span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span> <span class="token keyword">do</span>
    <span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>步长为负数时，需要注意开始和结束的数字也应该为倒序</p></blockquote><p>泛型循环 可以直接遍历一个集合中的所有元素。 <code>i</code>为集合元素的下标，从1开始；<code>v</code>为集合元素的值。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> i<span class="token punctuation">,</span>v <span class="token keyword">in</span> <span class="token function">ipairs</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token keyword">do</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;index=&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span><span class="token string">&quot;\\tvalue=&quot;</span><span class="token punctuation">,</span>v<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>ipairs</code>适用于数组（<code>i</code>估计是<code>integer</code>的意思），<code>pairs</code>适用于对象，因为数组也是对象，所以<code>pairs</code>用于数组也没问题。</p></blockquote><h3 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h3><p>while的常用方法就一个</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> condition <span class="token operator">=</span> <span class="token keyword">true</span>
<span class="token keyword">while</span> condition <span class="token keyword">do</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;while==true&quot;</span><span class="token punctuation">)</span>
    condition <span class="token operator">=</span> <span class="token keyword">false</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和C类语言一样。只要<code>condition</code>为<code>true</code>的时候<code>while</code>就会一直执行。当<code>condition</code>被设置为<code>false</code>的时候，<code>while</code>就会结束运行。</p><h3 id="循环操作符" tabindex="-1"><a class="header-anchor" href="#循环操作符" aria-hidden="true">#</a> 循环操作符</h3><p>同其他语言的规定一样，<code>break</code>关键字用于跳出循环。 LUA中没有<code>continue</code>，只有<code>break</code>。但是可以可以通过使用<code>if</code>+<code>break</code>的形式实现<code>continue</code>的功能。</p><h2 id="lua的小特性-集合" tabindex="-1"><a class="header-anchor" href="#lua的小特性-集合" aria-hidden="true">#</a> Lua的小特性：集合</h2><p>虽然Lua里面把它自己的数组称作<code>table</code>，但是我认为这个数据结构更类似于Python的集合或者json，里面可以存储任何东西，不受结构约束。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>collection <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果需要查询数组的长度，只需要在数组名前面添加<code>#</code>即可得到</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>list <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">#</span>list <span class="token keyword">do</span>
    <span class="token function">print</span><span class="token punctuation">(</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lua的数组（集合）下标从<code>1</code>开始，不同于C类语言的<code>0</code>。此处以前面定义的<code>collection</code>为例：</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">print</span><span class="token punctuation">(</span>collection<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">--a</span>
<span class="token function">print</span><span class="token punctuation">(</span>collection<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">--abc</span>
<span class="token function">print</span><span class="token punctuation">(</span>collection<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">--3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="table的排序" tabindex="-1"><a class="header-anchor" href="#table的排序" aria-hidden="true">#</a> table的排序</h3><h4 id="默认排序方法" tabindex="-1"><a class="header-anchor" href="#默认排序方法" aria-hidden="true">#</a> 默认排序方法</h4><p>可以使用函数对列表进行排序，最简单的用法如下</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>table<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token comment">-- 默认升序排序</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此处提供一个实验案例</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 函数：打印列表</span>
<span class="token keyword">function</span> <span class="token function">PrintList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
    <span class="token comment">-- 输出列表</span>
    <span class="token keyword">local</span> listStr <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">#</span>list <span class="token keyword">do</span>
        listStr <span class="token operator">=</span> listStr <span class="token operator">..</span> list<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">..</span> <span class="token string">&quot; &quot;</span>
    <span class="token keyword">end</span>
    <span class="token function">print</span><span class="token punctuation">(</span>listStr<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token keyword">local</span> list <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token punctuation">}</span> <span class="token comment">-- 原始列表</span>

<span class="token function">PrintList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token comment">-- 输出原始列表</span>
table<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token comment">-- 对列表进行排序</span>
<span class="token function">PrintList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token comment">-- 输出排序后的列表</span>

<span class="token comment">-- 结果：</span>
<span class="token comment">-- 3 7 2 5 4 (原始列表)</span>
<span class="token comment">-- 2 3 4 5 7 (排序后的列表)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义排序方法" tabindex="-1"><a class="header-anchor" href="#自定义排序方法" aria-hidden="true">#</a> 自定义排序方法</h4><p><code>table.sort</code>函数也可以使用自定义排序规则，但是这个规则你需要写在函数里。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>table<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>function(a, b)</code>是自定义的排序规则，要求最终返回一个<code>bool</code>值(<code>true</code>或<code>false</code>)。<code>a</code>和<code>b</code>分别为列表中的任意两项，如果函数返回<code>true</code>，则<code>a</code>在<code>b</code>的前面，否则<code>b</code>在<code>a</code>的前面。</p><p>下面提供了2个示例供参考。</p><h5 id="示例1-上面代码改为降序输出" tabindex="-1"><a class="header-anchor" href="#示例1-上面代码改为降序输出" aria-hidden="true">#</a> 示例1：上面代码改为降序输出</h5><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 此处省略PrintList()函数，函数代码与上方相同</span>

<span class="token keyword">local</span> list <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token punctuation">}</span> <span class="token comment">-- 原始列表</span>

<span class="token function">PrintList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token comment">-- 输出原始列表</span>
table<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">-- 对列表进行排序</span>
    <span class="token keyword">return</span> a <span class="token operator">&gt;</span> b <span class="token comment">-- 降序排序，如果a&gt;b，则a在b前面</span>
<span class="token keyword">end</span><span class="token punctuation">)</span>
<span class="token function">PrintList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token comment">-- 输出排序后的列表</span>

<span class="token comment">-- 结果：</span>
<span class="token comment">-- 3 7 2 5 4 (原始列表)</span>
<span class="token comment">-- 7 5 4 3 2 (排序后的列表)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="示例2-二维数组中的排序" tabindex="-1"><a class="header-anchor" href="#示例2-二维数组中的排序" aria-hidden="true">#</a> 示例2：二维数组中的排序</h5><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 函数：打印列表</span>
<span class="token keyword">function</span> <span class="token function">PrintList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
    <span class="token comment">-- 输出列表</span>
    <span class="token keyword">local</span> listStr <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">#</span>list <span class="token keyword">do</span>
        listStr <span class="token operator">=</span> listStr <span class="token operator">..</span> <span class="token string">&quot;\\n&quot;</span> <span class="token operator">..</span> list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">..</span> <span class="token string">&quot;, &quot;</span> <span class="token operator">..</span> list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token keyword">end</span>
    <span class="token function">print</span><span class="token punctuation">(</span>listStr<span class="token punctuation">)</span>
<span class="token keyword">end</span>

 <span class="token comment">-- 原始列表</span>
<span class="token keyword">local</span> list <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">{</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>

<span class="token function">PrintList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token comment">-- 输出原始列表</span>

<span class="token comment">-- 以列表中每项的第1维降序排序</span>
table<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">end</span><span class="token punctuation">)</span>
<span class="token function">PrintList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token comment">-- 输出排序后的列表</span>

<span class="token comment">-- 以列表中每项的第2维降序排序</span>
table<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> b<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> 
<span class="token keyword">end</span><span class="token punctuation">)</span>
<span class="token function">PrintList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token comment">-- 输出排序后的列表</span>

<span class="token comment">-- 结果：</span>
<span class="token comment">-- 原始列表：</span>
<span class="token comment">-- 3, 5</span>
<span class="token comment">-- 7, 6</span>
<span class="token comment">-- 2, 2</span>
<span class="token comment">-- 5, 1</span>
<span class="token comment">-- 4, 3</span>

<span class="token comment">-- 以第1维降序排序：</span>
<span class="token comment">-- 7, 6</span>
<span class="token comment">-- 5, 1</span>
<span class="token comment">-- 4, 3</span>
<span class="token comment">-- 3, 5</span>
<span class="token comment">-- 2, 2</span>

<span class="token comment">-- 以第2维降序排序：</span>
<span class="token comment">-- 7, 6</span>
<span class="token comment">-- 3, 5</span>
<span class="token comment">-- 4, 3</span>
<span class="token comment">-- 2, 2</span>
<span class="token comment">-- 5, 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="table的引用" tabindex="-1"><a class="header-anchor" href="#table的引用" aria-hidden="true">#</a> table的引用</h3><p>当没有对<code>table</code>进行对拷，而直接复制的时候，你新的到的<code>table</code>相当于原<code>table</code>的引用，称为<strong>浅拷贝</strong>。当你修改浅拷贝得到的<code>table</code>中的元素时，由于两个<code>table</code>是引用的关系，原<code>table</code>中的元素也会随之改变。</p><p>上面的示例代码也遵循了这一原理。下面将用一个新的例子突出这一特点。</p><h4 id="示例-浅拷贝" tabindex="-1"><a class="header-anchor" href="#示例-浅拷贝" aria-hidden="true">#</a> 示例：浅拷贝</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">function</span> <span class="token function">PrintList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
    <span class="token comment">-- 输出列表</span>
    <span class="token keyword">local</span> listStr <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">#</span>list <span class="token keyword">do</span>
        listStr <span class="token operator">=</span> listStr <span class="token operator">..</span> list<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">..</span> <span class="token string">&quot; &quot;</span>
    <span class="token keyword">end</span>
    <span class="token function">print</span><span class="token punctuation">(</span>listStr<span class="token punctuation">)</span>
<span class="token keyword">end</span>

list1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span>
<span class="token function">PrintList</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>
<span class="token comment">-- 1 2 3 4 5</span>

list2 <span class="token operator">=</span> list1
<span class="token function">PrintList</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span>
<span class="token comment">-- 1 2 3 4 5</span>

<span class="token comment">-- 修改list2的第2个元素</span>
list2<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
<span class="token function">PrintList</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span>
<span class="token comment">-- 1 10 3 4 5</span>

<span class="token function">PrintList</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>
<span class="token comment">-- 1 10 3 4 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="示例-深拷贝" tabindex="-1"><a class="header-anchor" href="#示例-深拷贝" aria-hidden="true">#</a> 示例：深拷贝</h4><p>而如果想要复制一个全新的列表list2怎么办呢？那么你就需要对table中的元素进行逐个复制，也称<strong>深拷贝</strong>。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- PrintList函数代码与上方相同</span>

list1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span>
<span class="token function">PrintList</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>
<span class="token comment">-- 1 2 3 4 5</span>

list2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">-- 新建一个空列表</span>

<span class="token comment">-- 将list1的元素复制到list2</span>
<span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token keyword">in</span> <span class="token function">pairs</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span> <span class="token keyword">do</span>
    table<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>list2<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token keyword">end</span>
<span class="token function">PrintList</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span>
<span class="token comment">-- 1 2 3 4 5</span>

<span class="token comment">-- 修改list2的第2个元素</span>
list2<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
<span class="token function">PrintList</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span>
<span class="token comment">-- 1 10 3 4 5</span>

<span class="token function">PrintList</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>
<span class="token comment">-- 1 2 3 4 5 (没有发生变化)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，修改深拷贝得到的<code>list2</code>中的元素并不会对原来的<code>list1</code>产生影响。</p>`,70),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","lua.html.vue"]]);export{d as default};
