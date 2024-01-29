import{_ as e,a as o}from"./Subplot_Vertical-oXTmfxKU.js";import{_ as c,r as l,o as u,c as i,a as n,b as s,d as t,e as p}from"./app-7jh3jpmO.js";const r={},d=p(`<h1 id="通用绘图代码" tabindex="-1"><a class="header-anchor" href="#通用绘图代码" aria-hidden="true">#</a> 通用绘图代码</h1><p>本节提供了一些写好的绘图对象，方便需要数据可视化绘图时直接使用。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>本页所有开放源代码遵循MIT协议，可以随意使用，但公开发布时请保留版权信息。</p></div><h2 id="导入库文件" tabindex="-1"><a class="header-anchor" href="#导入库文件" aria-hidden="true">#</a> 导入库文件</h2><p>首先介绍库文件的使用方式。“库文件”指提前包装好的绘图函数，有以下3种方法将文件导入到 MicroCity Web 中使用。</p><h3 id="方法一-使用代码在线导入" tabindex="-1"><a class="header-anchor" href="#方法一-使用代码在线导入" aria-hidden="true">#</a> 方法一：使用代码在线导入</h3><p>👍 <strong>推荐使用本方法使用库文件，这样可以保证使用的是最新版本的库文件。</strong></p><p>以导入 <code>Histogram</code> 和 <code>Subplot</code> 为例，导入库文件代码如下：</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;正在下载依赖库到虚拟磁盘...&#39;</span><span class="token punctuation">)</span>
<span class="token comment">-- 下载直方图代码到虚拟磁盘</span>
os<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.zhhuu.top/ModelResource/libs/Histogram.lua&#39;</span><span class="token punctuation">)</span>
<span class="token comment">-- 下载子图代码到虚拟磁盘</span>
os<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.zhhuu.top/ModelResource/libs/Subplot.lua&#39;</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;下载完成&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法二-下载代码文件并导入" tabindex="-1"><a class="header-anchor" href="#方法二-下载代码文件并导入" aria-hidden="true">#</a> 方法二：下载代码文件并导入</h3><p>转到 <a href="#%E4%BB%A3%E7%A0%81%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD">代码文件下载</a> 处下载所需库文件，然后在 MicroCity Web 中导入该文件，最后引用该文件后即可使用。</p><p>以引用直方图为例，引用的代码如下:</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;Histogram&quot;</span><span class="token punctuation">)</span> <span class="token comment">--引用直方图</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="方法三-复制代码" tabindex="-1"><a class="header-anchor" href="#方法三-复制代码" aria-hidden="true">#</a> 方法三：复制代码</h3><p>除非需要修改函数功能或逻辑，否则不建议这么做。各个函数的代码见<a href="#%E4%BB%A3%E7%A0%81">代码</a>部分。</p><h2 id="直方图" tabindex="-1"><a class="header-anchor" href="#直方图" aria-hidden="true">#</a> 直方图</h2><p>直方图(Histogram)一般用于显示数据集中各数据值的频数或频率分布情况。</p><p>它将数据按照一定的间隔划分为若干个区间（或称为“箱子”），然后绘制出每个区间的频数（或频率）在纵轴上的柱状图，以此反映数据的分布情况。</p><p>以下是用直方图对象（函数）绘制的直方图的示例</p><div style="text-align:center;"><p><img src="`+e+`" alt="直方图示例" width="500"></p></div><h3 id="导入直方图" tabindex="-1"><a class="header-anchor" href="#导入直方图" aria-hidden="true">#</a> 导入直方图</h3><p>首先导入直方图的代码，具体导入方式见<a href="#%E5%AF%BC%E5%85%A5%E5%BA%93%E6%96%87%E4%BB%B6">导入库文件</a>。</p><p>直方图的文件名为 <code>Histogram.lua</code>，引用直方图：</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;Histogram&quot;</span><span class="token punctuation">)</span> <span class="token comment">--引用直方图</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建直方图对象" tabindex="-1"><a class="header-anchor" href="#创建直方图对象" aria-hidden="true">#</a> 创建直方图对象</h3><p>创建一个直方图对象</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> plot <span class="token operator">=</span> <span class="token function">Histogram</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token comment">-- list为数据集</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还可以在创建对象时对图的属性进行设置。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> plot <span class="token operator">=</span> <span class="token function">Histogram</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token punctuation">{</span>range<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">40</span><span class="token punctuation">,</span><span class="token number">90</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span> scale<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">,</span> fdisp<span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">(</span>x<span class="token operator">/</span>n<span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token operator">..</span><span class="token string">&quot;%&quot;</span> <span class="token keyword">end</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>属性的设置不是必须的，可以仅根据需要设置。此处就只设置了<code>range</code>、<code>scale</code>、<code>fdisp</code>属性。</p><h3 id="直方图属性设置" tabindex="-1"><a class="header-anchor" href="#直方图属性设置" aria-hidden="true">#</a> 直方图属性设置</h3><p>上面提供了直方图属性设置的简单例子。根据代码，还可以设置更多的属性。具体见下表：</p><table><thead><tr><th>属性值</th><th>作用</th><th>示例</th></tr></thead><tbody><tr><td><code>origin</code></td><td>设置图原点（左下角点）</td><td><code>origin = {-50, -50}</code>，将图的原点设置在(-50,-50)的位置</td></tr><tr><td><code>size</code></td><td>设置图横纵轴长度，可以理解为图的大小</td><td><code>size = {100, 100}</code>，将图的x轴和y轴长度分别设置为100、100</td></tr><tr><td><code>scale</code></td><td>设置横纵坐标轴的分度值</td><td><code>scale = {3, 2}</code>，将图的x轴和y轴分度值分别设置为3和2</td></tr><tr><td><code>axislabel</code></td><td>设置横纵轴标题</td><td><code>axislabel = {&quot;x&quot;, &quot;y&quot;}</code>，将图的x轴和y轴标题分别设置为&quot;x&quot;和&quot;y&quot;</td></tr><tr><td><code>range</code></td><td>设置横纵坐标轴的显示范围</td><td><code>range = {0, 10, 0, 20}</code>，将图的x轴范围设置为[0,10]，y轴范围设置为[0,20]</td></tr><tr><td><code>filled</code></td><td>设置是否填充柱状图</td><td><code>filled = false</code>，将柱状图设置为空心。默认样式为填充</td></tr><tr><td><code>fdisp</code></td><td>数据标签的显示函数，默认返回数量。设置数据标签显示函数时也会影响y轴刻度的显示。</td><td><code>fdisp = function(v) return (v/n*100)..&quot;%&quot; end</code>，将数据标签改为按照比例显示（假设n为样本数）</td></tr></tbody></table><h3 id="直方图高级用法" tabindex="-1"><a class="header-anchor" href="#直方图高级用法" aria-hidden="true">#</a> 直方图高级用法</h3><p>📈 <strong>动态刷新数据图</strong></p><ol><li>修改图中的数据。此处以向图中添加数据为例。其中假设<code>rnd</code>为添加的数据。也可以直接修改<code>plot.data</code>的值。</li></ol><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>table<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>plot<span class="token punctuation">.</span>data<span class="token punctuation">,</span> rnd<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>刷新图</li></ol><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>plot<span class="token punctuation">:</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><h4 id="基本用法示例-绘制泊松分布" tabindex="-1"><a class="header-anchor" href="#基本用法示例-绘制泊松分布" aria-hidden="true">#</a> 基本用法示例：绘制泊松分布</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;Histogram&quot;</span><span class="token punctuation">)</span> <span class="token comment">--引用直方图</span>

<span class="token keyword">local</span> seed <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">randomseed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    distribution <span class="token operator">=</span> <span class="token string">&quot;poisson&quot;</span><span class="token punctuation">,</span>
    mu <span class="token operator">=</span> <span class="token string">&quot;3&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> list <span class="token operator">=</span> <span class="token punctuation">{</span>seed<span class="token punctuation">:</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

<span class="token comment">--静态绘制</span>
<span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token operator">#</span>list<span class="token punctuation">,</span> <span class="token number">400</span> <span class="token keyword">do</span>
    table<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> seed<span class="token punctuation">:</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token keyword">local</span> histplot <span class="token operator">=</span> <span class="token function">Histogram</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    range <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    scale <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
scene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="高级用法示例-动态刷新绘制泊松分布" tabindex="-1"><a class="header-anchor" href="#高级用法示例-动态刷新绘制泊松分布" aria-hidden="true">#</a> 高级用法示例：动态刷新绘制泊松分布</h4><p>这是一个绘制泊松分布并动态刷新数据图的示例。假设已经导入了<code>Histogram</code>对象，并将场景设为二维显示。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;Histogram&quot;</span><span class="token punctuation">)</span> <span class="token comment">--引用直方图</span>

<span class="token keyword">local</span> seed <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">randomseed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    distribution <span class="token operator">=</span> <span class="token string">&quot;poisson&quot;</span><span class="token punctuation">,</span>
    mu <span class="token operator">=</span> <span class="token string">&quot;3&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> list <span class="token operator">=</span> <span class="token punctuation">{</span>seed<span class="token punctuation">:</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

<span class="token keyword">local</span> histplot <span class="token operator">=</span> <span class="token function">Histogram</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    range <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    scale <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
scene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">-- 动态绘制</span>
<span class="token keyword">local</span> count <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">while</span> count <span class="token operator">&lt;</span> <span class="token number">1000</span> <span class="token keyword">and</span> scene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">do</span>
    <span class="token keyword">local</span> rnd <span class="token operator">=</span> seed<span class="token punctuation">:</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    table<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>histplot<span class="token punctuation">.</span>data<span class="token punctuation">,</span> rnd<span class="token punctuation">)</span>

    histplot<span class="token punctuation">:</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    count <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">end</span>
scene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="子图" tabindex="-1"><a class="header-anchor" href="#子图" aria-hidden="true">#</a> 子图</h2><p>子图(Subplot)是为了解决同时在界面中放置多个图的图定位和尺寸问题。名称借鉴自MATLAB。</p><div style="text-align:center;"><p><img src="`+o+`" alt="子图" width="500"></p></div><h3 id="导入子图" tabindex="-1"><a class="header-anchor" href="#导入子图" aria-hidden="true">#</a> 导入子图</h3><p>首先导入子图的代码，具体导入方式见<a href="#%E5%AF%BC%E5%85%A5%E5%BA%93%E6%96%87%E4%BB%B6">导入库文件</a>。</p><p>子图的文件名为 <code>Subplot.lua</code>，引用子图：</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;Subplot&quot;</span><span class="token punctuation">)</span> <span class="token comment">--引用子图</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="子图属性设置" tabindex="-1"><a class="header-anchor" href="#子图属性设置" aria-hidden="true">#</a> 子图属性设置</h3><p>此处将对子图的属性进行详细说明。属性的设置不是必须的，可以仅根据需要设置。</p>`,54),k=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"属性"),n("th",null,"作用"),n("th",null,"示例")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"span")]),n("td",null,"设置子图之间的间隔"),n("td",null,[n("code",null,"span=10"),s("，设置子图上下左右之间的间隔为10")])]),n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"diag")]),n("td",null,"通过输入对角线两个点的坐标设置子图位置和大小"),n("td",null,[n("code",null,"diag = {-80, -70, 80, 70}"),s("，设置子图的对角线范围从坐标 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",{stretchy:"false"},"("),n("mo",null,"−"),n("mn",null,"80"),n("mo",{separator:"true"},","),n("mo",null,"−"),n("mn",null,"70"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"(-80,-70)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"−"),n("span",{class:"mord"},"80"),n("span",{class:"mpunct"},","),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord"},"−"),n("span",{class:"mord"},"70"),n("span",{class:"mclose"},")")])])]),s(" 到坐标 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",{stretchy:"false"},"("),n("mn",null,"80"),n("mo",{separator:"true"},","),n("mn",null,"70"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"(80,70)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mopen"},"("),n("span",{class:"mord"},"80"),n("span",{class:"mpunct"},","),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord"},"70"),n("span",{class:"mclose"},")")])])])])])])],-1),m=p(`<h3 id="子图值读取" tabindex="-1"><a class="header-anchor" href="#子图值读取" aria-hidden="true">#</a> 子图值读取</h3><p>通过属性创建子图后，或者修改子图属性并刷新后，可以对子图的计算值进行读取，获取<code>Subplot</code>中各个子图的原点位置和尺寸。主要通过以下几个属性值进行读取。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>此处假设子图对象创建后存放于 <code>subplot</code> 变量中。</p></div><table><thead><tr><th style="text-align:center;">计算属性</th><th>含义</th><th>示例</th></tr></thead><tbody><tr><td style="text-align:center;"><code>originpt</code></td><td>Subplot对象中各个子图的原点位置</td><td>通过<code>subplot.originpt[i][j][1]</code>和<code>subplot.originpt[i][j][2]</code>能够获取到第<code>i</code>行<code>j</code>列的子图对应的原点位置</td></tr><tr><td style="text-align:center;"><code>psize</code></td><td>Subplot对象中各个子图的尺寸</td><td>通过<code>subplot.psize[1]</code>和<code>subplot.psize[2]</code>能够获取到<code>subplot</code>中子图对应的宽度和高度。(假设子图中所有图所需尺寸相同)</td></tr></tbody></table><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><p>这是一个绘制子图范围的示例。假设已经导入了<code>Subplot</code>对象，并将场景设为二维显示。</p><p>此处将一个2行3列子图中各个子图的显示范围绘制为一个矩形。其中子图范围用四个灰色点表示，子图位置用蓝色矩形表示。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;Subplot&quot;</span><span class="token punctuation">)</span> <span class="token comment">--引入子图代码</span>

<span class="token keyword">local</span> subplot <span class="token operator">=</span> <span class="token function">Subplot</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>span <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">-- 绘制Subplot对象边界点</span>
<span class="token keyword">local</span> lb <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;points&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> vertices<span class="token operator">=</span><span class="token punctuation">{</span>subplot<span class="token punctuation">.</span>diag<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>subplot<span class="token punctuation">.</span>diag<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> lt <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;points&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> vertices<span class="token operator">=</span><span class="token punctuation">{</span>subplot<span class="token punctuation">.</span>diag<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>subplot<span class="token punctuation">.</span>diag<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> rb <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;points&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> vertices<span class="token operator">=</span><span class="token punctuation">{</span>subplot<span class="token punctuation">.</span>diag<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>subplot<span class="token punctuation">.</span>diag<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> rt <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;points&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> vertices<span class="token operator">=</span><span class="token punctuation">{</span>subplot<span class="token punctuation">.</span>diag<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>subplot<span class="token punctuation">.</span>diag<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">-- 绘制范围</span>
<span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> subplot<span class="token punctuation">.</span>row <span class="token keyword">do</span>
    <span class="token keyword">for</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> subplot<span class="token punctuation">.</span>col <span class="token keyword">do</span>
        scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;polyline&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>size <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">,</span> color <span class="token operator">=</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
            vertices<span class="token operator">=</span><span class="token punctuation">{</span>
                subplot<span class="token punctuation">.</span>originpt<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span>subplot<span class="token punctuation">.</span>psize<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> subplot<span class="token punctuation">.</span>originpt<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>
                subplot<span class="token punctuation">.</span>originpt<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> subplot<span class="token punctuation">.</span>originpt<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>
                subplot<span class="token punctuation">.</span>originpt<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> subplot<span class="token punctuation">.</span>originpt<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">+</span>subplot<span class="token punctuation">.</span>psize<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>
                subplot<span class="token punctuation">.</span>originpt<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span>subplot<span class="token punctuation">.</span>psize<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> subplot<span class="token punctuation">.</span>originpt<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">+</span>subplot<span class="token punctuation">.</span>psize<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>
                subplot<span class="token punctuation">.</span>originpt<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span>subplot<span class="token punctuation">.</span>psize<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> subplot<span class="token punctuation">.</span>originpt<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>
scene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><p>可以根据代码的组合情况删去开头的 <code>scene.setenv</code> 代码。代码中的 <code>scene.render()</code> 是为了在动态绘制时刷新图像。</p><h3 id="代码文件下载" tabindex="-1"><a class="header-anchor" href="#代码文件下载" aria-hidden="true">#</a> 代码文件下载</h3>`,11),b={href:"https://github.com/huuhghhgyg/ModelResource/tree/main/libs",target:"_blank",rel:"noopener noreferrer"},h=n("thead",null,[n("tr",null,[n("th",null,"名称"),n("th",null,"链接")])],-1),v=n("td",null,"直方图",-1),g={href:"https://github.com/huuhghhgyg/ModelResource/blob/main/libs/Histogram.lua",target:"_blank",rel:"noopener noreferrer"},f=n("td",null,"子图",-1),x={href:"https://github.com/huuhghhgyg/ModelResource/blob/main/libs/Subplot.lua",target:"_blank",rel:"noopener noreferrer"},y=n("blockquote",null,[n("p",null,"🔗上方表格链接指向GitHub仓库。您可以在GitHub直接查看代码，也可以将文件下载到本地使用。")],-1);function q(w,_){const a=l("ExternalLinkIcon");return u(),i("div",null,[d,k,m,n("p",null,[s("代码文件列表见 "),n("a",b,[s("ModelResource/libs"),t(a)])]),n("table",null,[h,n("tbody",null,[n("tr",null,[v,n("td",null,[n("a",g,[s("ModelResource/libs/Histogram.lua"),t(a)])])]),n("tr",null,[f,n("td",null,[n("a",x,[s("ModelResource/libs/Subplot.lua"),t(a)])])])])]),y])}const j=c(r,[["render",q],["__file","plots.html.vue"]]);export{j as default};