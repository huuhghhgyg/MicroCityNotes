import{_ as u}from"./icon_script_editor-ibm_2NsU.js";import{_ as o,r as s,o as c,c as i,a as n,b as a,d as e,w as l,e as d}from"./app-LOf__QKq.js";const r={},k=n("h1",{id:"_4-4-栅格图形",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-4-栅格图形","aria-hidden":"true"},"#"),a(" 4.4 栅格图形")],-1),m=n("strong",null,"栅格图形",-1),v=n("strong",null,"项目",-1),g=n("img",{src:u,alt:"icon"},null,-1),h=n("strong",null,"ScriptEditor",-1),b=d(`<h2 id="栅格数据操作" tabindex="-1"><a class="header-anchor" href="#栅格数据操作" aria-hidden="true">#</a> 栅格数据操作</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">CreateGrid</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Int|Float|Double&quot;</span><span class="token punctuation">,</span> XMax<span class="token punctuation">,</span> YMax <span class="token punctuation">[</span><span class="token punctuation">,</span> CellSize <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> xMin <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> yMin <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> init <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回一个<em>Grid</em>对象。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetCellSize</span><span class="token punctuation">(</span>Grid<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回<em>Grid</em>的Cellsize值。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetGridMaxXY</span><span class="token punctuation">(</span>Grid<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回<em>Grid</em>的XMax和YMax值。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">ConvertToGridXY</span><span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> x1<span class="token punctuation">,</span> y1 <span class="token punctuation">[</span><span class="token punctuation">,</span> x2<span class="token punctuation">,</span> y2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将实际坐标转换为<em>Grid</em>中的坐标。返回X1，Y1，X2，Y2，...。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">ShapeToGrid</span><span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> Shape<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<em>Grid</em>中将<em>Shape</em>栅格化。栅格单元值将根据覆盖面积和输入的值设置。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">ShapeToGrid</span><span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> Shapes<span class="token punctuation">,</span> <span class="token string">&quot;field_name&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在<em>Shapes</em>中栅格化所有的<em>Shape</em>对象。栅格单元值将根据覆盖面积和<em>Shapes</em>字段的值设置。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetValue</span><span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> X1<span class="token punctuation">,</span> Y1 <span class="token punctuation">[</span><span class="token punctuation">,</span> X2<span class="token punctuation">,</span> Y2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回指定<em>Grid</em>坐标的单元格值：value1，value2，...。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">SetValue</span><span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> value<span class="token punctuation">,</span> X1<span class="token punctuation">,</span> Y1 <span class="token punctuation">[</span><span class="token punctuation">,</span> X2<span class="token punctuation">,</span> Y2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置指定<em>Grid</em>坐标单元的值。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetCenterXY</span><span class="token punctuation">(</span>Grid<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回<em>Grid</em>的中心实际坐标（x，y）。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetCenterXY</span><span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> X1<span class="token punctuation">,</span> Y1 <span class="token punctuation">[</span><span class="token punctuation">,</span> X2<span class="token punctuation">,</span> Y2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回单元格中心的实际坐标：x1，y1，x2，y2，...。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetExtent</span><span class="token punctuation">(</span>Grid<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回<em>Grid</em>范围的左下角和右上角坐标：Lx，By，Rx，Ty。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetExtent</span><span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> X<span class="token punctuation">,</span> Y<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回单元格范围的左下角和右上角坐标：Lx，By，Rx，Ty。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetFractalDim</span><span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> X1<span class="token punctuation">,</span> Y1<span class="token punctuation">,</span> X2<span class="token punctuation">,</span> Y2<span class="token punctuation">,</span> fold <span class="token punctuation">[</span><span class="token punctuation">,</span> MultiFractalQ <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>计算<em>Grid</em>中指定区域的分形维度。返回维度，线性回归的RSQ值以及每个折叠中的盒子数。</p>`,27),_={href:"https://github.com/huuhghhgyg/MicroCityNotes/issues/new",target:"_blank",rel:"noopener noreferrer"},x=n("strong",null,"反馈",-1);function G(f,X){const t=s("RouterLink"),p=s("ExternalLinkIcon");return c(),i("div",null,[k,n("p",null,[a("在MicroCity中，"),m,a("具有简单的结构（"),e(t,{to:"/docs/3.3_raster_grids.html"},{default:l(()=>[a("3.3")]),_:1}),a("），但是如果在其上应用算法，可以高效利用时间和空间。本章的示例代码可以在"),v,a('选项卡的"grid_samples"文件夹中找到，该选项卡位于'),g,h,a("中。")]),b,n("blockquote",null,[n("p",null,[a("这篇文章使用ChatGPT翻译自其他语言，如果有问题请在"),n("a",_,[x,e(p)]),a("页面提交反馈。")])])])}const y=o(r,[["render",G],["__file","4.4_grids.html.vue"]]);export{y as default};
