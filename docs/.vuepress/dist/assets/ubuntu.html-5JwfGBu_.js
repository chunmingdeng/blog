import{_ as e,r as o,o as t,c as r,a as s,b as a,d as p,f as c}from"./app-5uqBhi11.js";const l={},i=s("h1",{id:"ubuntu",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ubuntu","aria-hidden":"true"},"#"),a(" ubuntu")],-1),d=s("h2",{id:"字体问题",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#字体问题","aria-hidden":"true"},"#"),a(" 字体问题")],-1),u={href:"https://www.cnblogs.com/Jimc/p/10302267.html",target:"_blank",rel:"noopener noreferrer"},k=c(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 查看系统</span>
cat <span class="token operator">/</span>proc<span class="token operator">/</span>version
<span class="token comment">// 查看已安装的中文字体</span>
fc<span class="token operator">-</span>list <span class="token operator">:</span>lang<span class="token operator">=</span>zh<span class="token operator">-</span>cn
<span class="token comment">// 安装中文字体</span>
sudo apt install <span class="token operator">-</span>y <span class="token operator">--</span>force<span class="token operator">-</span>yes <span class="token operator">--</span>no<span class="token operator">-</span>install<span class="token operator">-</span>recommends fonts<span class="token operator">-</span>wqy<span class="token operator">-</span>microhei
sudo apt install <span class="token operator">-</span>y <span class="token operator">--</span>force<span class="token operator">-</span>yes <span class="token operator">--</span>no<span class="token operator">-</span>install<span class="token operator">-</span>recommends ttf<span class="token operator">-</span>wqy<span class="token operator">-</span>zenhei
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(h,v){const n=o("ExternalLinkIcon");return t(),r("div",null,[i,d,s("blockquote",null,[s("p",null,[a("安装中文字体 在使用puppeteer的时候，导出文件，当系统不支持中文字体的时候，就会导致导出的pdf无法没有中文字体 "),s("a",u,[a("link"),p(n)])])]),k])}const b=e(l,[["render",m],["__file","ubuntu.html.vue"]]);export{b as default};