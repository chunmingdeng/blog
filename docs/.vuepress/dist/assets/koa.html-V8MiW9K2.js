import{_ as n,o as s,c as a,f as t}from"./app-5uqBhi11.js";const e={},p=t(`<h1 id="koa" tabindex="-1"><a class="header-anchor" href="#koa" aria-hidden="true">#</a> koa</h1><hr><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>mkdir <span class="token operator">&lt;</span>dir<span class="token operator">&gt;</span>
npm init <span class="token operator">-</span>y
touch server<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>server.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>response<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;image/gif&#39;</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>response<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&#39;&lt;h1&gt;Hello, koa2!&lt;/h1&gt;&#39;</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Disposition&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;attachment; filename=test&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;prot 3000 listening&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ctx对象和netx方法" tabindex="-1"><a class="header-anchor" href="#ctx对象和netx方法" aria-hidden="true">#</a> ctx对象和netx方法</h2><blockquote><p>ctx是由koa传入的封装了request和response的变量，我们可以通过它访问request和response，next是koa传入的将要处理的下一个异步函数。</p></blockquote><p>ctx设置请求头<br><code>ctx.set(&#39;Content-Disposition&#39;,&#39;attachment; filename=test&#39;)</code></p>`,8),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","koa.html.vue"]]);export{r as default};