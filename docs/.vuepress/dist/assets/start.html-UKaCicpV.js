import{_ as e,r as t,o,c as i,a as n,b as a,d as c,f as l}from"./app-5uqBhi11.js";const r={},p=n("h1",{id:"nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx","aria-hidden":"true"},"#"),a(" Nginx")],-1),d={href:"https://nginx.org/en/docs/beginners_guide.html",target:"_blank",rel:"noopener noreferrer"},u=l(`<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h2><p>mac <code>brew install nginx</code></p><h2 id="nginx-conf文件配置基础结构" tabindex="-1"><a class="header-anchor" href="#nginx-conf文件配置基础结构" aria-hidden="true">#</a> nginx.conf文件配置基础结构</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  http <span class="token punctuation">{</span>
    server <span class="token punctuation">{</span>
      <span class="token comment">//当location匹配上且内部没有配置root的时候会使用此选项</span>
      root $<span class="token punctuation">{</span>uri<span class="token punctuation">}</span> 
      <span class="token comment">// 多个location进行匹配，匹配上多个，会代理去location最长的那个</span>
      location $<span class="token punctuation">{</span>uri<span class="token punctuation">}</span> <span class="token punctuation">{</span>
        <span class="token comment">// opt 配置了此选项，请求会代理到指定的proxy_pass的服务器</span>
        proxy_pass $<span class="token punctuation">{</span>url<span class="token punctuation">}</span>
        <span class="token comment">//root和alias只能二选一，且alias必须以“/”结尾</span>
        <span class="token comment">//匹配上之后会转发到指定目录下，转发请求会进行拼接: \${root}/\${location}</span>
        root $<span class="token punctuation">{</span>uri<span class="token punctuation">}</span>
        <span class="token comment">//匹配上之后会转发到指定目录下，转发请求不会进行拼接: \${root}</span>
        alias $<span class="token punctuation">{</span>uri<span class="token punctuation">}</span>
        location <span class="token operator">/</span>images<span class="token operator">/</span> <span class="token punctuation">{</span>
            root <span class="token operator">/</span>opt<span class="token operator">/</span>html<span class="token operator">/</span><span class="token punctuation">;</span>
            try_files $uri   $uri<span class="token operator">/</span>  <span class="token operator">/</span>images<span class="token operator">/</span><span class="token keyword">default</span><span class="token punctuation">.</span>gif<span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>
        <span class="token comment">// 比如 请求 127.0.0.1/images/test.gif 会依次查找 </span>
        <span class="token comment">// 1.文件/opt/html/images/test.gif   </span>
        <span class="token comment">// 2.文件夹 /opt/html/images/test.gif/下的index文件  </span>
        <span class="token comment">// 3. 请求127.0.0.1/images/default.gif</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="/nginx.conf配置详解.xmind">nginx.conf配置详解.xmind，位于源码的public文件夹下</a></p><h2 id="日志配置" tabindex="-1"><a class="header-anchor" href="#日志配置" aria-hidden="true">#</a> 日志配置</h2><p><code>log_format main &#39;$server_addr ; $server_name ; $server_port ; $server_protocol ; $upstream_addr ; $request ; $http_x_forwarded_for $proxy_add_x_forwarded_for&#39;;</code></p><ul><li><code>$http_x_forwarded_for</code></li><li><code>$proxy_add_x_forwarded_for</code></li></ul>`,8);function m(v,k){const s=t("ExternalLinkIcon");return o(),i("div",null,[p,n("p",null,[n("a",d,[a("官网doc"),c(s)])]),u])}const h=e(r,[["render",m],["__file","start.html.vue"]]);export{h as default};
