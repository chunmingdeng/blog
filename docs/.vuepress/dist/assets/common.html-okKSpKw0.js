import{_ as n,o as a,c as s,f as e}from"./app-5uqBhi11.js";const t="/blog/assets/1632467372560-4N6_d25U.png",i={},c=e(`<h1 id="代码规范" tabindex="-1"><a class="header-anchor" href="#代码规范" aria-hidden="true">#</a> 代码规范</h1><h2 id="注释相关" tabindex="-1"><a class="header-anchor" href="#注释相关" aria-hidden="true">#</a> 注释相关</h2><ol><li>代码注释解释的应该是why问题，而不是what问题</li><li>良好的代码具有‘自我解释’功能，能够解决what问题</li><li>注释解决why问题，告诉读者代码为什么这么写</li><li>与其纠结如何写好注释，不如先考虑先把代码写好</li><li>不必要的地方不要写注释</li><li>功能复杂的函数拆分成功能单一的小函数</li></ol><blockquote><p>tips:其实写代码注释要根据具体的情况来定，但是最好根据以上的原则来进行</p></blockquote><h2 id="函数注释" tabindex="-1"><a class="header-anchor" href="#函数注释" aria-hidden="true">#</a> 函数注释</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
//大括号写类型
@param <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>a 第一个参数是数字类型
@param <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>b 第二个参数是数字类型
@returns <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> 返回俩个参数的和
*/</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+'" alt="图片"></p>',7),l=[c];function o(p,r){return a(),s("div",null,l)}const u=n(i,[["render",o],["__file","common.html.vue"]]);export{u as default};
