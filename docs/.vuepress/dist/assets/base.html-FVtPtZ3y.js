import{_ as p,r as t,o as e,c as o,a as n,b as s,d as c,f as l}from"./app-5uqBhi11.js";const u={},i=n("h1",{id:"基础",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础","aria-hidden":"true"},"#"),s(" 基础")],-1),r=n("h2",{id:"相关书籍推荐",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关书籍推荐","aria-hidden":"true"},"#"),s(" 相关书籍推荐")],-1),k=n("ul",null,[n("li",null,"javascript+ES6函数式编程入门经典.pdf")],-1),d={id:"toturial",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#toturial","aria-hidden":"true"},"#",-1),m={href:"https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/",target:"_blank",rel:"noopener noreferrer"},b=l(`<h2 id="函数柯里化curry" tabindex="-1"><a class="header-anchor" href="#函数柯里化curry" aria-hidden="true">#</a> 函数柯里化curry</h2><blockquote><p>如何实现add(1)(2)(3);</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token parameter">y</span> <span class="token operator">=&gt;</span> <span class="token parameter">z</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>这里为什么可以这样写？其实这里就使用到了<strong>函数柯里化</strong>的概念 什么是函数柯里化？<br></p><blockquote><p>函数柯里化（curry）是函数式编程里面的概念。curry的概念很简单：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。</p></blockquote></blockquote><blockquote><p>简单实现一个柯里化函数</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">curry</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  args<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> fn<span class="token punctuation">.</span>length
    <span class="token operator">?</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>_args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">curry</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>_args<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">,</span>d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token operator">+</span>b<span class="token operator">+</span>c<span class="token operator">+</span>d<span class="token punctuation">;</span>
<span class="token keyword">let</span> c00 <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span>
<span class="token function">c00</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>


<span class="token keyword">let</span> <span class="token function-variable function">curry</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> args<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> fn<span class="token punctuation">.</span>length <span class="token operator">?</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">:</span> 
    <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>_args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">curry</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> fn<span class="token punctuation">,</span> <span class="token operator">...</span>_args<span class="token punctuation">)</span>
<span class="token punctuation">}</span> 
<span class="token keyword">let</span> c01 <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span>
<span class="token function">c01</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 这里因为使用的是bind函数，所以需要再额外调用一次</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工具函数" tabindex="-1"><a class="header-anchor" href="#工具函数" aria-hidden="true">#</a> 工具函数</h2><ul><li><b>unary</b> # 无论传入多少个参数，只使用传入参数的第一个<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">unary</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  fn<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token function-variable function">fn</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><b>once</b> # 无论调用多少次，函数只执行一次，使用场景表单提交，支付<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// (exp1, exp2)表示会执行两个参数并返回第二个表达式的结果</span>
<span class="token keyword">const</span> <span class="token function-variable function">once</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> done <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> done <span class="token operator">?</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> <span class="token punctuation">(</span>done <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><b>memorized</b> # 存贮纯函数的计算结果<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">memorized</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> lookupTable <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> lookupTable<span class="token punctuation">[</span>arg<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span>lookupTable<span class="token punctuation">[</span>arg<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><b>reduce</b> # 归约数组<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// 不给定初始值</span>
  <span class="token keyword">const</span> <span class="token function-variable function">reduce</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> acc<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> val <span class="token keyword">of</span> arr<span class="token punctuation">)</span>
      acc <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算之后的值和当前的值计算</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>acc<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 给定初始值</span>
  <span class="token keyword">const</span> <span class="token parameter">reduce</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> initialValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> acc<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>initialValue <span class="token operator">!=</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
      acc <span class="token operator">=</span> initialValue<span class="token punctuation">;</span>
    <span class="token keyword">else</span>
      acc <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span><span class="token punctuation">(</span>initialValue <span class="token operator">!=</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> val <span class="token keyword">of</span> arr<span class="token punctuation">)</span>
        acc <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
        acc <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">[</span>acc<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><b>partial（偏函数）</b> # 允许开发者部分的应用函数的参数 <a href="">p96</a></li></ul><blockquote><p>本质是在第一次调用便函数的时候将fn所需的参数一次性传入，不想传的参数用undefined占位，返回的函数需要传入大于等于占位所需要的参数个数，大于的绘自动舍弃</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">partial</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>partialArgs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> args <span class="token operator">=</span> partialArgs<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>fullArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> args<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> count <span class="token operator">&lt;</span> fullArgs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>args<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        args<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> fullArgs<span class="token punctuation">[</span>count<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><b>compose</b> # 组合，满足结合律</li></ul><blockquote><p>只有当函数接收一个参数的时候才可以使用compose函数</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>fns</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
  <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
    <span class="token function">reduce</span><span class="token punctuation">(</span>fns<span class="token punctuation">.</span><span class="token function">reserve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span>acc<span class="token punctuation">)</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><b>pipe</b> # 管道</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">pipe</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>fns</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
  <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
    <span class="token function">reduce</span><span class="token punctuation">(</span>fns<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span>acc<span class="token punctuation">)</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>Functor</strong> # 函子</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// MayBe函子</span>
<span class="token keyword">const</span> <span class="token function-variable function">MayBe</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span> val<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
MayBe<span class="token punctuation">.</span><span class="token function-variable function">of</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MayBe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">MayBe</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">isNothing</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">MayBe</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">map</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isNothing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> MayBe<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">:</span> MayBe<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,14);function f(g,y){const a=t("ExternalLinkIcon");return e(),o("div",null,[i,r,k,n("h2",d,[v,s(),n("a",m,[s("toturial"),c(a)])]),b])}const h=p(u,[["render",f],["__file","base.html.vue"]]);export{h as default};
