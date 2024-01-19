import{_ as n,o as s,c as a,f as e}from"./app-5uqBhi11.js";const i={},t=e(`<h1 id="vim" tabindex="-1"><a class="header-anchor" href="#vim" aria-hidden="true">#</a> vim</h1><p>===</p><h2 id="配置vim" tabindex="-1"><a class="header-anchor" href="#配置vim" aria-hidden="true">#</a> 配置vim</h2><ul><li><p>在macos catalina下，由于系统保护的原因，无法直接修改 /usr/share/vim 文件夹下的vimrc文件，但是会读取～/.vimrc下的配置，当～下没有.vimrc的时候，可以<code>touch .vimrc</code>,然后去修改.vimrc的内容；</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> skip_defaults_vim<span class="token operator">=</span><span class="token number">1</span>
syntax on <span class="token comment">// 支持语法</span>
<span class="token keyword">set</span> autoindent <span class="token comment">// 支持自动缩进</span>
<span class="token keyword">set</span> nu<span class="token operator">!</span> <span class="token comment">// 显示行数</span>
vmap &quot;<span class="token operator">+</span>y <span class="token operator">:</span>w <span class="token operator">!</span>pbcopy<span class="token operator">&lt;</span><span class="token constant">CR</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token constant">CR</span><span class="token operator">&gt;</span> <span class="token comment">// 支持y键复制功能</span>
nmap &quot;<span class="token operator">+</span>p <span class="token operator">:</span>r <span class="token operator">!</span>pbpaste<span class="token operator">&lt;</span><span class="token constant">CR</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token constant">CR</span><span class="token operator">&gt;</span> <span class="token comment">// 支持p键粘贴功能</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>vim快捷键</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">O</span>               行首
$               行尾
<span class="token constant">G</span>               移动到文档的末尾行行首
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>\`js
<span class="token constant">O</span>               行首
$               行尾
<span class="token constant">G</span>               移动到文档的末尾行行首
<span class="token operator">&lt;</span>n<span class="token operator">&gt;</span><span class="token constant">G</span>            移动到文档的第n行的行首
gg              移动到文档的第一行的行首 <span class="token operator">=</span>》1G
u               撤消
<span class="token operator">&lt;</span>n<span class="token operator">&gt;</span><span class="token punctuation">[</span>enter<span class="token punctuation">]</span>      光标向下移动n行
<span class="token constant">J</span>               当前行和下一行合并
ctrl<span class="token operator">+</span>u          上半页
ctrl<span class="token operator">+</span>d          下半页
ctrl<span class="token operator">+</span>b          上一页
ctrl<span class="token operator">+</span>f          下一页
<span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>x            向后删除n个字符，n不写默认一个
<span class="token constant">X</span>               向前删除一个字符
<span class="token operator">&lt;</span>n<span class="token operator">&gt;</span>dd           删除光标所在行起始的n行，n不写默认<span class="token number">1</span>，即当前行（行删除，不回遗留空行）
dG              删除当前行到最后一行
d1G             删除第一行到当前行
d$              删除光标处到行尾的字符
d0              删除光标到行首的字符
fa              移动到本行下一个 a 的字符处，用法f<span class="token operator">&lt;</span>字符<span class="token operator">&gt;</span>
Fa              和fa相反的方向
<span class="token comment">// 光标移动相关</span>
<span class="token constant">H</span>               移动光标到当前屏幕的第一行行首
<span class="token constant">M</span>		    移动光标到当前屏幕的中间
<span class="token constant">L</span>		    移动过光标到当前屏幕的尾部

w		    移动光标到下一个单词的开头
e		    移动光标到下一个单词的结尾

<span class="token comment">// 翻页相关</span>
ctrl<span class="token operator">+</span>u	    向上翻半页
ctrl<span class="token operator">+</span>d	    向下翻半页
ctrl<span class="token operator">+</span>b	    向上翻一页
ctrl<span class="token operator">+</span>f	    向下翻一页

<span class="token comment">// 删除相关</span>
dw		    删除光标后的一个单词
dnw		    删除光标后的n个单词
dd		    删除光标当前行
ndd		    删除光标开始处的n行
dG		    删除光标到文本结尾（删除光标位置到文本最后）
d$		    删除光标到当前行尾
dH		    删除光标到屏幕显示第一行，（结合<span class="token constant">H</span>命令）
dL		    删除光标到屏幕显示的最后一行，结合<span class="token constant">L</span>命令

<span class="token comment">// 复制相关</span>
yw		    复制光标后的一个单词
yy		    复制当前行
nyy
yfa
y$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>保存</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">:</span>w              write
<span class="token operator">:</span>w<span class="token operator">!</span>             file readonly，force write
<span class="token operator">:</span>q              quit
<span class="token operator">:</span>q<span class="token operator">!</span>             quit <span class="token operator">&amp;</span> give up modify
<span class="token operator">:</span>wq             quit <span class="token operator">&amp;</span> write 
<span class="token operator">:</span>w <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>   write data <span class="token keyword">as</span> another file
<span class="token operator">:</span>r <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>   将文件的内容加到光标后面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>vim模式</p><ul><li>normal mode</li><li>view mode</li><li>insert mode</li><li>command mode</li></ul></li><li><p>vim常用命令</p><ul><li>复制</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>y: 复制当前选中的文本（view mode）
yy: 复制当前行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,4),l=[t];function p(o,c){return s(),a("div",null,l)}const d=n(i,[["render",p],["__file","vim.html.vue"]]);export{d as default};
