import{_ as n}from"./icon_script_editor-S0ak5iz0.js";import{_ as a,o as s,c as e,e as t}from"./app-DPGdFUmI.js";const i={},o=t('<h1 id="_4-7-discrete-event-simulations" tabindex="-1"><a class="header-anchor" href="#_4-7-discrete-event-simulations"><span>4.7 Discrete Event Simulations</span></a></h1><p>MicroCity has a inside simulation time counting and event scheduling mechanism. It provides several embedded Lua functions to facilitate creating <strong>Discrete Event Simulations</strong>, which is very useful for dynamic system analysis. Sample codes for this chapter can be found in the &quot;simulation_samples&quot; folder of the <strong>Project</strong> Tab in <img src="'+n+`" alt="icon"><strong>ScriptEditor</strong>.</p><h2 id="random-number-generation" tabindex="-1"><a class="header-anchor" href="#random-number-generation"><span>Random Number Generation</span></a></h2><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="line"><span class="token function">CreateRandEng</span> <span class="token punctuation">(</span>seed<span class="token punctuation">,</span> <span class="token string">&quot;uniform_01&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Creates a binary distributed random generation engine from a seed and returns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="line"><span class="token function">CreateRandEng</span> <span class="token punctuation">(</span>seed<span class="token punctuation">,</span> <span class="token string">&quot;uniform_real&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> min <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Creates a uniform distributed real random generation engine from a seed and returns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="line"><span class="token function">CreateRandEng</span> <span class="token punctuation">(</span>seed<span class="token punctuation">,</span> <span class="token string">&quot;uniform_int&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> min <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Creates an uniform integer random generation engine from a seed and returns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="line"><span class="token function">CreateRandEng</span> <span class="token punctuation">(</span>seed<span class="token punctuation">,</span> <span class="token string">&quot;triangle&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Creates a triangle distributed random generation engine from a seed and returns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="line"><span class="token function">CreateRandEng</span> <span class="token punctuation">(</span>seed<span class="token punctuation">,</span> <span class="token string">&quot;bernoulli&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Creates a bernoulli distributed random generation engine from a seed and returns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="line"><span class="token function">CreateRandEng</span> <span class="token punctuation">(</span>seed<span class="token punctuation">,</span> <span class="token string">&quot;cauchy&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> median <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> sigma <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Creates a cauchy distributed random generation engine from a seed and returns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="line"><span class="token function">CreateRandEng</span> <span class="token punctuation">(</span>seed<span class="token punctuation">,</span> <span class="token string">&quot;exponential&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> lambda <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Creates a exponential distributed random generation engine from a seed and returns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="line"><span class="token function">CreateRandEng</span> <span class="token punctuation">(</span>seed<span class="token punctuation">,</span> <span class="token string">&quot;geometric&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Creates a geometric distributed random generation engine from a seed and returns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="line"><span class="token function">CreateRandEng</span> <span class="token punctuation">(</span>seed<span class="token punctuation">,</span> <span class="token string">&quot;normal&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> mean <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> sigma <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Creates a normal distributed random generation engine from a seed and returns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="line"><span class="token function">CreateRandEng</span> <span class="token punctuation">(</span>seed<span class="token punctuation">,</span> <span class="token string">&quot;lognormal&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> mean <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> sigma <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Creates a lognormal distributed random generation engine from a seed and returns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="line"><span class="token function">GetNextRandom</span> <span class="token punctuation">(</span>Engine<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Gets a random number from a random generation engine.</p><h2 id="simulation-control" tabindex="-1"><a class="header-anchor" href="#simulation-control"><span>Simulation Control</span></a></h2><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="line"><span class="token function">CreateEvent</span> <span class="token punctuation">(</span>time<span class="token punctuation">,</span> Funcion <span class="token punctuation">[</span><span class="token punctuation">,</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Creates a future event from a <em>Lua Function</em> or a <em>Lua Coroutine</em>. Returns a <em>Coroutine</em> object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="line"><span class="token function">ExecAllEvents</span> <span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Calls this at last. It will execute all events as <em>Lua Coroutines</em>.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="line"><span class="token function">Delay</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>relativeTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Calls this function in a <em>Lua Coroutine</em> will let it first yield then resume it after the specified relative time. If the parameter <em>relativeTime</em> is not set, the current <em>Coroutine</em> will yield and won&#39; be resumed automatically.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="line"><span class="token function">Resume</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>time<span class="token punctuation">,</span> <span class="token punctuation">]</span> Coroutine <span class="token punctuation">[</span><span class="token punctuation">,</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Resumes a yielded coroutine immediately or at a specified time.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="line"><span class="token function">GetSimTime</span> <span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Returns the current simulation time.</p>`,36),p=[o];function l(u,c){return s(),e("div",null,p)}const m=a(i,[["render",l],["__file","4.7_des_simulations.html.vue"]]),g=JSON.parse('{"path":"/en/docs/4.7_des_simulations.html","title":"4.7 Discrete Event Simulations","lang":"en-US","frontmatter":{"prev":"./4.6_networks.md","next":"./4.8_mixed_integer_programming.md","description":"4.7 Discrete Event Simulations MicroCity has a inside simulation time counting and event scheduling mechanism. It provides several embedded Lua functions to facilitate creating ...","head":[["meta",{"property":"og:url","content":"https://huuhghhgyg.github.io/MicroCityNotes/en/docs/4.7_des_simulations.html"}],["meta",{"property":"og:site_name","content":"MicroCity Notes"}],["meta",{"property":"og:title","content":"4.7 Discrete Event Simulations"}],["meta",{"property":"og:description","content":"4.7 Discrete Event Simulations MicroCity has a inside simulation time counting and event scheduling mechanism. It provides several embedded Lua functions to facilitate creating ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-25T03:41:16.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-25T03:41:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4.7 Discrete Event Simulations\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T03:41:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Random Number Generation","slug":"random-number-generation","link":"#random-number-generation","children":[]},{"level":2,"title":"Simulation Control","slug":"simulation-control","link":"#simulation-control","children":[]}],"git":{"updatedTime":1700883676000,"contributors":[{"name":"huuhghhgyg","email":"huuhghhgyg@outlook.com","commits":1}]},"filePathRelative":"en/docs/4.7_des_simulations.md","autoDesc":true,"excerpt":"\\n<p>MicroCity has a inside simulation time counting and event scheduling mechanism. It provides  several embedded Lua functions to facilitate creating <strong>Discrete Event Simulations</strong>, which is very useful for dynamic system analysis. Sample codes for this chapter can be found in the \\"simulation_samples\\" folder of the <strong>Project</strong> Tab in <strong>ScriptEditor</strong>.</p>"}');export{m as comp,g as data};
