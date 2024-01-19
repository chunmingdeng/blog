import{_ as n,o as s,c as a,f as t}from"./app-5uqBhi11.js";const e={},p=t(`<h1 id="pixi-js-tutorial" tabindex="-1"><a class="header-anchor" href="#pixi-js-tutorial" aria-hidden="true">#</a> pixi.js tutorial</h1><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><table><thead><tr><th>method name</th><th>desc</th></tr></thead><tbody><tr><td><code>new PIXI.Application</code></td><td>create instance</td></tr><tr><td><code>PIXI.loader.add</code></td><td>load image</td></tr><tr><td><code>new PIXI.Sprite</code></td><td>texture from loader</td></tr><tr><td><code>sprite.position.set</code></td><td>set sprite position</td></tr><tr><td><code>sprite.scale.set</code></td><td>set sprite scale</td></tr></tbody></table><ul><li>初始化实例</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> app <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">PIXi<span class="token punctuation">.</span>Application</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>view<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>加载sprite将要使用到的img</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 首先将image加载到PIXI中，然后在使用texture</span>
<span class="token constant">PIXI</span><span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>image_path<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>loaded_callback<span class="token operator">&gt;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token operator">&lt;</span>loaded_callback<span class="token operator">&gt;</span><span class="token punctuation">(</span>loader<span class="token punctuation">,</span> source<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sprit <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PIXI<span class="token punctuation">.</span>Sprite</span><span class="token punctuation">(</span>
        <span class="token constant">PIXI</span><span class="token punctuation">.</span>resource<span class="token punctuation">[</span><span class="token operator">&lt;</span>image_path<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>texture
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用texture渲染</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>sprite<span class="token punctuation">.</span>postion<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
sprite<span class="token punctuation">.</span>scale<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>xScale<span class="token punctuation">,</span>yScale<span class="token punctuation">)</span><span class="token punctuation">;</span>
sprite<span class="token punctuation">.</span>height <span class="token operator">=</span> h<span class="token punctuation">;</span>
sprite<span class="token punctuation">.</span>width <span class="token operator">=</span> w<span class="token punctuation">;</span>
app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>sprite<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>sprite.position</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1 sprite 左上角的位置</span>
sprite<span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
sprite<span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
<span class="token comment">// 2</span>
sprite<span class="token punctuation">.</span>postion<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>sprite.scale</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1</span>
sprite<span class="token punctuation">.</span>scale<span class="token punctuation">.</span>x <span class="token operator">=</span> xScale<span class="token punctuation">;</span>
sprite<span class="token punctuation">.</span>scale<span class="token punctuation">.</span>y <span class="token operator">=</span> yScale<span class="token punctuation">;</span>
<span class="token comment">// 2</span>
sprite<span class="token punctuation">.</span>scale<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>xScale<span class="token punctuation">,</span>yScale<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>sprite.rotate</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 设置旋转点为sprite的中心点（默认是图片的左上角）</span>
<span class="token comment">// 1</span>
sprite<span class="token punctuation">.</span>anchor<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
sprite<span class="token punctuation">.</span>anchor<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">;</span>
<span class="token comment">// 2</span>
sprite<span class="token punctuation">.</span>anchor<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>sprite.pivot</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用pixel，相对于图片的左上角定位旋转中心</span>
sprite<span class="token punctuation">.</span>pivot<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">,</span><span class="token number">32</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>sprite.rotation</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>sprite<span class="token punctuation">.</span>rotation <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span> <span class="token comment">// 弧度制 Math.PI = 180deg</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> methods</h2><ul><li><code>PIXI.loaders.Loader()</code>创建一个loader实例，v5.0.0之后废弃</li><li><code>loader.add(name, url)</code>将指定资源加载到loader实例中</li><li><code>loader.pre(function(resource, next){})</code>每次load add好的sequence中资源的时候会触发该函数，第一个参数是load的资源，第二个参数next是一个函数，类似于Generator函数（或者vue-router钩子函数）中的next，用来继续下个load，pre中的callback function在每次load resource的时候都会触发</li><li><code>loader.load(function(loader, resources){})</code>用来开始sequence的加载，并且在sequence加载完成的时候调用callback function，这个函数只会调用一次</li><li><code>new PIXI.container()</code> A Container represents a collection of display objects.<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PIXI<span class="token punctuation">.</span>Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
container<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>sprite<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><code>new PIXI.Graphics()</code> 返回值是一个容器引用，本质上也是用来存储简单图形（线line，圆形circle，长方形rectAngle，多边形polygon），也可以进行填充，然后用来绘制的，这个容器中保存的内容可以复用</li></ul>`,21),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","pixijs.html.vue"]]);export{r as default};
