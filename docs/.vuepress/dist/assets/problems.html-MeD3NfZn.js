import{_ as s,o as n,c as a,f as e}from"./app-5uqBhi11.js";const i={},t=e(`<h1 id="problems" tabindex="-1"><a class="header-anchor" href="#problems" aria-hidden="true">#</a> problems</h1><h2 id="github或者gitlab一直拒绝链接-网络正常的情况下" tabindex="-1"><a class="header-anchor" href="#github或者gitlab一直拒绝链接-网络正常的情况下" aria-hidden="true">#</a> github或者gitlab一直拒绝链接（网络正常的情况下）</h2><blockquote><p>这种情况可能是网络安全引起的，先观察拒绝链接的接口，一般git默认是22，可以尝试修改端口</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.在～/.ssh/目录下新建config文件，并添加如下内容</span>
Host github<span class="token punctuation">.</span>com
User git
Hostname ssh<span class="token punctuation">.</span>github<span class="token punctuation">.</span>com
PreferredAuthentications publickey
IdentityFile <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>id_rsa
Port <span class="token number">443</span>

Host gitlab<span class="token punctuation">.</span>com
Hostname altssh<span class="token punctuation">.</span>gitlab<span class="token punctuation">.</span>com
User git
Port <span class="token number">443</span>
PreferredAuthentications publickey
IdentityFile <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[t];function l(c,r){return n(),a("div",null,o)}const d=s(i,[["render",l],["__file","problems.html.vue"]]);export{d as default};
