import{_ as n,o as s,c as a,f as t}from"./app-5uqBhi11.js";const e={},p=t(`<h1 id="vue3使用总结" tabindex="-1"><a class="header-anchor" href="#vue3使用总结" aria-hidden="true">#</a> VUE3使用总结</h1><h2 id="一、api使用" tabindex="-1"><a class="header-anchor" href="#一、api使用" aria-hidden="true">#</a> 一、API使用</h2><ol><li>访问组件的插槽和属性</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// &lt;template&gt; 中使用</span>
<span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&#39;$attrs.name&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token comment">// &lt;script&gt; 中使用</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// context is not reactive and can be destructured</span>
    <span class="token comment">// attrs, slots（is non-reactive）</span>
    context<span class="token punctuation">.</span>attrs
    context<span class="token punctuation">.</span>slots
    context<span class="token punctuation">.</span>emit
    context<span class="token punctuation">.</span>expose

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span>attrs<span class="token punctuation">,</span> slots<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> expose<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// &lt;script setup&gt; 中使用</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useSlots<span class="token punctuation">,</span> useAttrs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> $slots <span class="token operator">=</span> <span class="token function">useSlots</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> $attrs <span class="token operator">=</span> <span class="token function">useAttrs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>访问组件的实例</li></ol>`,5),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","vue3.html.vue"]]);export{r as default};
