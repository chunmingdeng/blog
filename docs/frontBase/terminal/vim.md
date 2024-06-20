# vim
===

## 配置vim
- 在macos catalina下，由于系统保护的原因，无法直接修改 /usr/share/vim 文件夹下的vimrc文件，但是会读取～/.vimrc下的配置，当～下没有.vimrc的时候，可以`touch .vimrc`,然后去修改.vimrc的内容；
    ```js
    let skip_defaults_vim=1
    syntax on // 支持语法
    set autoindent // 支持自动缩进
    set nu! // 显示行数
    vmap "+y :w !pbcopy<CR><CR> // 支持y键复制功能
    nmap "+p :r !pbpaste<CR><CR> // 支持p键粘贴功能
    ```
- vim快捷键
    ```js
    O               行首
    $               行尾
    G               移动到文档的末尾行行首
    ```js
    O               行首
    $               行尾
    G               移动到文档的末尾行行首
    <n>G            移动到文档的第n行的行首
    gg              移动到文档的第一行的行首 =》1G
    u               撤消
    <n>[enter]      光标向下移动n行
    J               当前行和下一行合并
    ctrl+u          上半页
    ctrl+d          下半页
    ctrl+b          上一页
    ctrl+f          下一页
    <n>x            向后删除n个字符，n不写默认一个
    X               向前删除一个字符
    <n>dd           删除光标所在行起始的n行，n不写默认1，即当前行（行删除，不回遗留空行）
    dG              删除当前行到最后一行
    d1G             删除第一行到当前行
    d$              删除光标处到行尾的字符
    d0              删除光标到行首的字符
    fa              移动到本行下一个 a 的字符处，用法f<字符>
    Fa              和fa相反的方向
    // 光标移动相关
    H               移动光标到当前屏幕的第一行行首
    M		    移动光标到当前屏幕的中间
    L		    移动过光标到当前屏幕的尾部

    w		    移动光标到下一个单词的开头
    e		    移动光标到下一个单词的结尾

    // 翻页相关
    ctrl+u	    向上翻半页
    ctrl+d	    向下翻半页
    ctrl+b	    向上翻一页
    ctrl+f	    向下翻一页

    // 删除相关
    dw		    删除光标后的一个单词
    dnw		    删除光标后的n个单词
    dd		    删除光标当前行
    ndd		    删除光标开始处的n行
    dG		    删除光标到文本结尾（删除光标位置到文本最后）
    d$		    删除光标到当前行尾
    dH		    删除光标到屏幕显示第一行，（结合H命令）
    dL		    删除光标到屏幕显示的最后一行，结合L命令

    // 复制相关
    yw		    复制光标后的一个单词
    yy		    复制当前行
    nyy
    yfa
    y$
    ```
    - 保存
    ```js
    :w              write
    :w!             file readonly，force write
    :q              quit
    :q!             quit & give up modify
    :wq             quit & write
    :w [filename]   write data as another file
    :r [filename]   将文件的内容加到光标后面
    ```
- vim模式
  - normal mode
  - view mode
  - insert mode
  - command mode

- vim常用命令
  - 复制
  ```
  y: 复制当前选中的文本（view mode）
  yy: 复制当前行
  ```