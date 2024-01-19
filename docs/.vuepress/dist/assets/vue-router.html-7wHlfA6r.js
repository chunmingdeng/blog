import{_ as e,r as t,o,c as p,a as n,b as s,d as c,f as i}from"./app-5uqBhi11.js";const l={},u=n("h1",{id:"vue-router",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-router","aria-hidden":"true"},"#"),s(" vue router")],-1),r=n("h2",{id:"钩子函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#钩子函数","aria-hidden":"true"},"#"),s(" 钩子函数")],-1),d={href:"https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB",target:"_blank",rel:"noopener noreferrer"},k=i(`<blockquote><p>路由钩子可以分为全局的，单个路由独享的以及组件级别的，解决上述需求只用到了组件级别的路由钩子，所以本文只介绍组件级别的路由钩子，全局的和单个路由独享的路由钩子</p></blockquote><ul><li>组件级别路由钩子分为三种：<i><b>这里强调必须要在路由组件内，否则不生效</b></i><ul><li>beforeRouteEnter：当成功获取并能进入路由(在渲染该组件的对应路由被 confirm 前)</li><li>beforeRouteUpdate：在当前路由改变，但是该组件被复用时调用</li><li>beforeRouteLeave：导航离开该组件的对应路由时调用</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">...</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token function">beforeRouteEnter</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在渲染该组件的对应路由被 confirm 前调用</span>
        <span class="token comment">// 不！能！获取组件实例 \`this\`</span>
        <span class="token comment">// 因为当守卫执行前，组件实例还没被创建</span>
        <span class="token comment">// 可以通过传一个回调给 next来访问组件实例</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">vm</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
            <span class="token comment">// 通过 \`vm\` 访问组件实例</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">beforeRouteUpdate</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 在当前路由改变，但是该组件被复用时调用</span>
            <span class="token comment">// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，</span>
            <span class="token comment">// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。</span>
            <span class="token comment">// 可以访问组件实例 \`this\`</span>
            <span class="token comment">// 不支持传递回调(因为this实例已经创建可以获取到，所以没必要)</span>
            <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">beforeRouteLeave</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 导航离开该组件的对应路由时调用</span>
            <span class="token comment">// 可以访问组件实例 \`this\`</span>
            <span class="token comment">// 该导航可以通过 next(false) 来取消。</span>
            <span class="token keyword">const</span> answer <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;Do you really want to leave? you have unsaved changes!&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>answer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 不支持传递回调(因为this实例已经创建可以获取到，所以没必要)</span>
                <span class="token function">next</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2);function m(v,b){const a=t("ExternalLinkIcon");return o(),p("div",null,[u,r,n("p",null,[n("a",d,[s("link(全局守卫，独享守卫，组件内守卫)"),c(a)])]),k])}const h=e(l,[["render",m],["__file","vue-router.html.vue"]]);export{h as default};
