import{_ as o,a as p,b as l,c}from"./polygon_sizes-_l3lRhAv.js";import{_ as i,c as r,e,b as n,a,f as u,g as d,r as h,o as k}from"./app-Dlcekcw5.js";const b={};function g(m,s){const t=h("RouteLink");return k(),r("div",null,[s[17]||(s[17]=e(`<h1 id="_3d-objects" tabindex="-1"><a class="header-anchor" href="#_3d-objects"><span>3D Objects</span></a></h1><p>This section will introduce the objects and their control functions in a 3D scene.</p><h2 id="adding-objects" tabindex="-1"><a class="header-anchor" href="#adding-objects"><span>Adding Objects</span></a></h2><p>To add objects to the scene, use the following function:</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>key1 <span class="token operator">=</span> value1<span class="token punctuation">,</span> key2 <span class="token operator">=</span> value2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h2 id="optional-object-properties" tabindex="-1"><a class="header-anchor" href="#optional-object-properties"><span>Optional Object Properties</span></a></h2><p>Objects added to the scene typically support setting some of the following properties:</p>`,7)),n("table",null,[s[16]||(s[16]=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"Object Property"),n("th",null,"Meaning")])],-1)),n("tbody",null,[n("tr",null,[s[2]||(s[2]=n("td",{style:{"text-align":"center"}},[n("code",null,"color")],-1)),n("td",null,[s[1]||(s[1]=a("The color of the object. The format of the color can support built-in colors, hexadecimal, and RGB. Same as the ")),u(t,{to:"/en/notes/3d-scene.html#bgcolor-background-color-of-the-scene"},{default:d(()=>s[0]||(s[0]=[a("background color of the scene")])),_:1})])]),s[3]||(s[3]=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"opacity")]),n("td",null,"Opacity")],-1)),s[4]||(s[4]=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"hcolor")]),n("td",null,"The color when the object is selected")],-1)),s[5]||(s[5]=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"size")]),n("td",null,"The size of the object. The default value is 1")],-1)),s[6]||(s[6]=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"length")]),n("td",null,[a("The length of the object, commonly used for "),n("a",{href:"#box"},"box")])],-1)),s[7]||(s[7]=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"width")]),n("td",null,[a("The width of the object, commonly used for "),n("a",{href:"#box"},"box")])],-1)),s[8]||(s[8]=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"height")]),n("td",null,[a("The height of the object, commonly used for "),n("a",{href:"#box"},"box")])],-1)),s[9]||(s[9]=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"radius")]),n("td",null,"The size of the object's rounded corners")],-1)),s[10]||(s[10]=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"segments")]),n("td",null,[a("The number of segments, usually used to set the precision of the "),n("a",{href:"#sphere"},"sphere"),a(" drawn")])],-1)),s[11]||(s[11]=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"selectable")]),n("td",null,"Whether the object can be selected")],-1)),s[12]||(s[12]=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"name")]),n("td",null,"The name of the object")],-1)),s[13]||(s[13]=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"text")]),n("td",null,"The text value of the object")],-1)),s[14]||(s[14]=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"font")]),n("td",null,"The font of the text")],-1)),s[15]||(s[15]=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"vertices")]),n("td",null,"The set of points that make up the corresponding object")],-1))])]),s[18]||(s[18]=e(`<p>The following are the types of objects that can be added to the scene:</p><h2 id="object-types" tabindex="-1"><a class="header-anchor" href="#object-types"><span>Object Types</span></a></h2><h3 id="list-of-object-types" tabindex="-1"><a class="header-anchor" href="#list-of-object-types"><span>List of Object Types</span></a></h3><ul><li><code>label</code>: <a href="#label">Text label</a></li><li><code>points</code>: <a href="#points">Set of points</a></li><li><code>polyline</code>: <a href="#polyline">Set of line segments</a></li><li><code>box</code>: <a href="#box">Cube</a></li><li><code>sphere</code>: <a href="#sphere">Sphere</a></li><li><code>polygon</code>: <a href="#polygon">Polygon</a></li><li><code>light</code>: <a href="#light">Light source</a></li><li><code>mesh</code>: <a href="#mesh">Face made up of points</a></li></ul><blockquote><p>For the sake of brevity, the key properties of the optional objects shown in the example below only display the relevant attributes of the object. Other common properties can be added by referring to the <a href="#optional-object-properties">Optional Object Properties</a>.</p></blockquote><h3 id="label" tabindex="-1"><a class="header-anchor" href="#label"><span>label</span></a></h3><p><code>label</code> is a text label. The text of the label can be set in the <code>text</code> attribute.</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&#39;label&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>text <span class="token operator">=</span> <span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h3 id="points" tabindex="-1"><a class="header-anchor" href="#points"><span>points</span></a></h3><p><code>points</code> is a collection of points. You can create a single point or multiple points. Each point has three-dimensional coordinates to determine its position in three-dimensional space. The number of points is determined by the <code>vertices</code> attribute.</p><p>Here is an example of creating a <code>points</code> object:</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token comment">-- create a point at position (5,5,5)</span></span>
<span class="line">scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;points&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>vertices <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- create two points, the first at (0,0,0), the second at (5,5,5)</span></span>
<span class="line">scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;points&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>vertices <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="polyline" tabindex="-1"><a class="header-anchor" href="#polyline"><span>polyline</span></a></h3><p><code>polyline</code> is a collection of line segments. When multiple points are input in the <code>vertices</code> attribute, line segments will be generated based on the order of the coordinates.</p><p>Therefore, although the same coordinates are used in the two examples below, the results are different because the order of the input coordinates is different.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line">scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;polyline&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>vertices <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;polyline&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>vertices <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt="polyline point order comparison"></p><p>polyline point order comparison</p><blockquote><p><code>polyline</code> does not have a <code>size</code> attribute.</p></blockquote><h3 id="box" tabindex="-1"><a class="header-anchor" href="#box"><span>box</span></a></h3><p><code>box</code> is a cuboid. Its shape can be modified mainly through the <code>length</code>, <code>width</code>, and <code>height</code> attributes.</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>length <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> height <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>Important optional properties of the <code>box</code> object:</p><table><thead><tr><th>Property</th><th>Meaning</th></tr></thead><tbody><tr><td><code>length</code></td><td>The length of the cuboid</td></tr><tr><td><code>width</code></td><td>The width of the cuboid</td></tr><tr><td><code>height</code></td><td>The height of the cuboid</td></tr></tbody></table><p>Based on the above three attributes, we can modify the shape of the rotating <code>box</code> in the default sample code.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token comment">-- Add the length, width, and height attributes (default to 1 if not added)</span></span>
<span class="line"><span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>length <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> height <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">local</span> x <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">local</span> y <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">local</span> z <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"><span class="token keyword">while</span> scene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">do</span></span>
<span class="line">	x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">0.1</span></span>
<span class="line">	y <span class="token operator">=</span> y <span class="token operator">+</span> <span class="token number">0.1</span></span>
<span class="line">	obj<span class="token punctuation">:</span><span class="token function">setrot</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt="boxes with different lengths, widths, and heights"></p><p>Boxes with different lengths, widths, and heights.</p><h3 id="sphere" tabindex="-1"><a class="header-anchor" href="#sphere"><span>sphere</span></a></h3><p><code>sphere</code> is used to create a sphere object. Its size can be modified by the <code>radius</code> attribute, and its model quality can be set by setting the <code>segments</code> attribute. Refer to the example of the Earth in the built-in samples for more details.</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&#39;sphere&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>radius<span class="token operator">=</span><span class="token number">15</span><span class="token punctuation">,</span> segments<span class="token operator">=</span><span class="token number">360</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>Optional attributes for <code>sphere</code> objects:</p><table><thead><tr><th>Attribute</th><th>Meaning</th></tr></thead><tbody><tr><td><code>radius</code></td><td>The radius of the sphere. It can be used to control the size of the sphere.</td></tr><tr><td><code>segments</code></td><td>The number of rendered surfaces of the sphere. The higher the value, the more detailed the sphere model will be.</td></tr></tbody></table><p><img src="`+l+`" alt="The impact of different segments on the same sphere"></p><p>The impact of different <code>segments</code> on the same sphere</p><h3 id="polygon" tabindex="-1"><a class="header-anchor" href="#polygon"><span>polygon</span></a></h3><p><code>polygon</code> is used to create a polygon object, mainly set through the <code>vertices</code> attribute.</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;polygon&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>vertices <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>Because the polygon in this example is a square, it looks no different from the <code>box</code> introduced above. However, when the shape is set to other types of polygons (such as triangles, pentagons, etc.), the meaning of the polygon can be reflected.</p></blockquote><table><thead><tr><th>Attribute</th><th>Meaning</th><th>Explanation</th></tr></thead><tbody><tr><td><code>vertices</code></td><td>The vertices of the polygon</td><td>You can set the three-dimensional coordinates of each point in turn in the <code>vertices</code> attribute. The third dimension coordinates do not have an impact but play a placeholder role.</td></tr><tr><td><code>size</code></td><td>Volume</td><td>Since the third dimension coordinates do not have an impact, and the area is already determined by the vertices of the polygon, the <code>size</code> attribute controls the volume by controlling the third dimension coordinate values of each point.</td></tr></tbody></table><p><img src="`+c+`" alt="The impact of different size on the same polygon volume"></p><p>The impact of different <code>size</code> on the same polygon volume</p><h3 id="external-model" tabindex="-1"><a class="header-anchor" href="#external-model"><span>External model</span></a></h3><p>Reference external files. However, for MicroCityWeb, only the built-in files on the website can be referenced at present.</p><p>For example, in the built-in example, a box-type truck is generated in the view by referencing the internal file:</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&#39;/res/2axle.glb&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>You can also reference an external model by referencing the URL of the file:</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&#39;https://microcity.github.io/res/agv.glb&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>If you have 3D model resources at hand, you can view them in <a href="http://3dviewer.net/" target="_blank" rel="noopener noreferrer">3D Viewer</a> and export them as <code>.glb</code> models through this website.</p></blockquote><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>Set the direction of the light, and the optional parameter <code>vertices</code> is a three-dimensional vector that represents the direction of the light. Since a strong light source has already been set in the MicroCityWeb scene, this will not be discussed in detail here.</p><h3 id="mesh" tabindex="-1"><a class="header-anchor" href="#mesh"><span>Mesh</span></a></h3><p>A face composed of multiple points, commonly found in referenced external models. Due to its limited application, it will not be introduced here.</p><h2 id="object-control-functions" tabindex="-1"><a class="header-anchor" href="#object-control-functions"><span>Object Control Functions</span></a></h2><p>Assuming the 3D object to be manipulated is <code>obj</code>.</p><h3 id="getpos" tabindex="-1"><a class="header-anchor" href="#getpos"><span>getpos()</span></a></h3><p>Gets the position coordinates (x, y, z) of <code>obj</code>.</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">local</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token operator">=</span> obj<span class="token punctuation">:</span><span class="token function">getpos</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h3 id="setpos" tabindex="-1"><a class="header-anchor" href="#setpos"><span>setpos()</span></a></h3><p>Sets the position coordinates of <code>obj</code> to (x, y, z).</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line">obj<span class="token punctuation">:</span><span class="token function">setpos</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h3 id="getrot" tabindex="-1"><a class="header-anchor" href="#getrot"><span>getrot()</span></a></h3><p>Gets the rotation angles (rx, ry, rz) of <code>obj</code> in the x, y, and z directions.</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">local</span> rx<span class="token punctuation">,</span> ry<span class="token punctuation">,</span> rz <span class="token operator">=</span> obj<span class="token punctuation">:</span><span class="token function">getrot</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h3 id="setrot" tabindex="-1"><a class="header-anchor" href="#setrot"><span>setrot()</span></a></h3><p>Sets the rotation angles of <code>obj</code> in the x, y, and z directions to (rx, ry, rz).</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line">obj<span class="token punctuation">:</span><span class="token function">setrot</span><span class="token punctuation">(</span>rx<span class="token punctuation">,</span> ry<span class="token punctuation">,</span> rz<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h3 id="getscale" tabindex="-1"><a class="header-anchor" href="#getscale"><span>getscale()</span></a></h3><p>Gets the scaling ratios (sx, sy, sz) of <code>obj</code> in the x, y, and z directions.</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">local</span> sx<span class="token punctuation">,</span> sy<span class="token punctuation">,</span> sz <span class="token operator">=</span> obj<span class="token punctuation">:</span><span class="token function">getscale</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h3 id="setscale" tabindex="-1"><a class="header-anchor" href="#setscale"><span>setscale()</span></a></h3><p>Sets the scaling ratios of <code>obj</code> in the x, y, and z directions to (sx, sy, sz).</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line">obj<span class="token punctuation">:</span><span class="token function">setscale</span><span class="token punctuation">(</span>sx<span class="token punctuation">,</span> sy<span class="token punctuation">,</span> sz<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h3 id="getchildren" tabindex="-1"><a class="header-anchor" href="#getchildren"><span>getchildren()</span></a></h3><p>Gets the table of child objects of <code>obj</code>.</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">local</span> children <span class="token operator">=</span> obj<span class="token punctuation">:</span><span class="token function">getchildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h3 id="setchildren" tabindex="-1"><a class="header-anchor" href="#setchildren"><span>setchildren()</span></a></h3><p>Sets the table of child objects of <code>obj</code> to <code>children_table</code>.</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line">obj<span class="token punctuation">:</span><span class="token function">setchildren</span><span class="token punctuation">(</span>children_table<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h3 id="getparent" tabindex="-1"><a class="header-anchor" href="#getparent"><span>getparent()</span></a></h3><p>Gets the parent object of <code>obj</code>.</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">local</span> num <span class="token operator">=</span> obj<span class="token punctuation">:</span><span class="token function">getparent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h3 id="setparent" tabindex="-1"><a class="header-anchor" href="#setparent"><span>setparent()</span></a></h3><p>Sets the parent object of <code>obj</code> to <code>obj0</code>.</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line">obj<span class="token punctuation">:</span><span class="token function">setparent</span><span class="token punctuation">(</span>obj0<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><h3 id="delete" tabindex="-1"><a class="header-anchor" href="#delete"><span>delete()</span></a></h3><p>Delete <code>obj</code>.</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line">obj<span class="token punctuation">:</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div>`,88))])}const v=i(b,[["render",g],["__file","3d-objects.html.vue"]]),j=JSON.parse('{"path":"/en/notes/3d-objects.html","title":"3D Objects","lang":"en-US","frontmatter":{"description":"3D Objects This section will introduce the objects and their control functions in a 3D scene. Adding Objects To add objects to the scene, use the following function: Optional Ob...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://huuhghhgyg.github.io/MicroCityNotes/notes/3d-objects.html"}],["meta",{"property":"og:url","content":"https://huuhghhgyg.github.io/MicroCityNotes/en/notes/3d-objects.html"}],["meta",{"property":"og:site_name","content":"MicroCity Notes"}],["meta",{"property":"og:title","content":"3D Objects"}],["meta",{"property":"og:description","content":"3D Objects This section will introduce the objects and their control functions in a 3D scene. Adding Objects To add objects to the scene, use the following function: Optional Ob..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-09T05:28:37.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-09T05:28:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3D Objects\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-09T05:28:37.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Adding Objects","slug":"adding-objects","link":"#adding-objects","children":[]},{"level":2,"title":"Optional Object Properties","slug":"optional-object-properties","link":"#optional-object-properties","children":[]},{"level":2,"title":"Object Types","slug":"object-types","link":"#object-types","children":[{"level":3,"title":"List of Object Types","slug":"list-of-object-types","link":"#list-of-object-types","children":[]},{"level":3,"title":"label","slug":"label","link":"#label","children":[]},{"level":3,"title":"points","slug":"points","link":"#points","children":[]},{"level":3,"title":"polyline","slug":"polyline","link":"#polyline","children":[]},{"level":3,"title":"box","slug":"box","link":"#box","children":[]},{"level":3,"title":"sphere","slug":"sphere","link":"#sphere","children":[]},{"level":3,"title":"polygon","slug":"polygon","link":"#polygon","children":[]},{"level":3,"title":"External model","slug":"external-model","link":"#external-model","children":[]},{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Mesh","slug":"mesh","link":"#mesh","children":[]}]},{"level":2,"title":"Object Control Functions","slug":"object-control-functions","link":"#object-control-functions","children":[{"level":3,"title":"getpos()","slug":"getpos","link":"#getpos","children":[]},{"level":3,"title":"setpos()","slug":"setpos","link":"#setpos","children":[]},{"level":3,"title":"getrot()","slug":"getrot","link":"#getrot","children":[]},{"level":3,"title":"setrot()","slug":"setrot","link":"#setrot","children":[]},{"level":3,"title":"getscale()","slug":"getscale","link":"#getscale","children":[]},{"level":3,"title":"setscale()","slug":"setscale","link":"#setscale","children":[]},{"level":3,"title":"getchildren()","slug":"getchildren","link":"#getchildren","children":[]},{"level":3,"title":"setchildren()","slug":"setchildren","link":"#setchildren","children":[]},{"level":3,"title":"getparent()","slug":"getparent","link":"#getparent","children":[]},{"level":3,"title":"setparent()","slug":"setparent","link":"#setparent","children":[]},{"level":3,"title":"delete()","slug":"delete","link":"#delete","children":[]}]}],"git":{"updatedTime":1717910917000,"contributors":[{"name":"huuhghhgyg","username":"huuhghhgyg","email":"huuhghhgyg@outlook.com","commits":8,"url":"https://github.com/huuhghhgyg"}]},"filePathRelative":"en/notes/3d-objects.md","autoDesc":true,"excerpt":"\\n<p>This section will introduce the objects and their control functions in a 3D scene.</p>\\n<h2>Adding Objects</h2>\\n<p>To add objects to the scene, use the following function:</p>\\n<div class=\\"language-lua\\" data-highlighter=\\"prismjs\\" data-ext=\\"lua\\" data-title=\\"lua\\"><pre><code><span class=\\"line\\"><span class=\\"token keyword\\">local</span> obj <span class=\\"token operator\\">=</span> scene<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addobj</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span>type<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span>key1 <span class=\\"token operator\\">=</span> value1<span class=\\"token punctuation\\">,</span> key2 <span class=\\"token operator\\">=</span> value2<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">...</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"></span></code></pre>\\n</div>"}');export{v as comp,j as data};