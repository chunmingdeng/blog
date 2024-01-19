import{_ as n,o as s,c as a,f as t}from"./app-5uqBhi11.js";const p={},o=t(`<h1 id="electron-guide" tabindex="-1"><a class="header-anchor" href="#electron-guide" aria-hidden="true">#</a> electron guide</h1><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> summary</h2><p>electron可以用来写客户端的程序，类似app或者桌面程序；</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h2><p>cross-env提供传递参数的支持</p><blockquote><p><code>npm install cross-env -g</code></p></blockquote><p>安装的时候传入指定的参数</p><blockquote><p><code>cross-env npm_config_electron_mirror=&quot;https://npm.taobao.org/mirrors/electron/&quot; npm_config_electron_custom_dir=&quot;8.0.2&quot; npm install electron@8.0.2</code></p></blockquote><p>tips：目前版本的electron执行install命令的时候会出现卡在某一步骤或者出现安装的路径不对的问题，这时候需要设置安装的registry以及传入相应的参数避免安装出现路径问题导致安装不成功。</p><h2 id="新建一个electron项目" tabindex="-1"><a class="header-anchor" href="#新建一个electron项目" aria-hidden="true">#</a> 新建一个electron项目</h2><ul><li>npm install electron main.js</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> electron <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;electron&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>app<span class="token punctuation">}</span> <span class="token operator">=</span> electron<span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>BrowserWindow<span class="token punctuation">}</span> <span class="token operator">=</span> electron<span class="token punctuation">;</span>

<span class="token keyword">let</span> mainWindow<span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    mainWindow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    mainWindow<span class="token punctuation">.</span><span class="token function">loadURL</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.baidu.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    mainWindow<span class="token punctuation">.</span>webContents<span class="token punctuation">.</span><span class="token function">openDevTools</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 开发者情况下使用，默认打开开发者工具</span>

    mainWindow<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;closed&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mainWindow <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;ready&#39;</span><span class="token punctuation">,</span> createWindow<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;window-all-closed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>platform <span class="token operator">!==</span> <span class="token string">&#39;darwin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        app<span class="token punctuation">.</span><span class="token function">quit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;activate&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mainWindow <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),e=[o];function c(i,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","base.html.vue"]]);export{r as default};