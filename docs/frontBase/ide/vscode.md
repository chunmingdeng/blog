# vscode

## 关于 code 命令

> macos 更新最新的系统后，系统下的 python 在/usr/local/bin/python，系统下的 python3 在/usr/bin/python3，而 code 的可执行文件的内容中有这么一段：`function realpath() { /usr/bin/python -c "import os,sys; print(os.path.realpath(sys.argv[1]))"`，其中`/usr/bin/python`在新系统下已经不存在了，需要改为`/usr/local/bin/python`，然后 code 命令就可以正常使用了

## 基础插件

1. Markdown Preview Enhanced
2. volar
3. vue-vscode-snippets
4. git history·
5. glsl lint
6. json
7. live server
 <!-- 8. markdowwn all in one -->
8. remote ssh
9. shader languages support for vscode
10. tailwind css intellisense
11. volar
12. vue vscode snippets
13. dotenv
14. geo data viewer

### Markdown Preview Enhanced

:::tabs
@tab 设置

```sh
cmd+shift+p
custom css
```

@tab 普通样式文件路径

```css
/*初始化格式*/

body {
    line-height: 1.6;
    letter-spacing: 0.034em;
    color: rgb(63, 63, 63);
    font-size: 16px;
    word-break: all;
    background-color: #ffffff;
}

body p {
    padding-top: 23px;
    color: rgb(74, 74, 74);
    line-height: 1.75em;
}

/* 一级标题 */
body h1 {
    text-align: center;
    background-image: url(https://my-wechat.mdnice.com/mdnice/mountain_2_20191028221337.png);
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 95px;
    line-height: 95px;
    margin-top: 10px;
    margin-bottom: 10px;
    /* 一级标题内容 */
    font-size: 20px;
    color: rgb(60, 112, 198);
    border-bottom: 2px solid #3c7076;
}

body h2 {
    display: block;
    text-align: center;
    background-image: url(https://my-wechat.mdnice.com/mdnice/mountain_2_20191028221337.png);
    background-position: center top;
    background-repeat: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-size: 63px;
    line-height: 63px;
    margin-top: 38px;
    margin-bottom: 0px;

    /* 二级标题内容 */
    color: rgb(60, 112, 198);
    font-size: 18px;
}

/* 三级标题 */
h3:before {
    content: '';
    background-image: url(https://my-wechat.mdnice.com/mdnice/mountain_1_20191028221337.png);
    background-size: 15px 15px;
    display: inline-block;
    width: 15px;
    height: 15px;
    line-height: 15px;
    margin-bottom: -1px;
}

h3 {
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-left: 8px;
    color: rgb(60, 112, 198);
}

/* 列表内容 */
li {
    list-style-type: decimal;
    list-style-position: outside;
}

/* 引用
   * 左边缘颜色 border-left-color:black;
   * 背景色 background:gray;
   */
blockquote {
    padding: 15px 20px;
    line-height: 27px;
    background-color: rgb(239, 239, 239);
    border-left: none;
    display: block;
}

/* 引用文字 */
blockquote p {
    padding: 0px;
    font-size: 15px;
    color: rgb(89, 89, 89);
}

/* 链接 */
a {
    color: rgb(60, 112, 198);
    text-decoration: none;
    border-bottom: 1px solid rgb(60, 112, 198);
}

/* 加粗 */
strong {
    line-height: 1.75em;
    color: rgb(74, 74, 74);
}

/* 斜体 */
/*em {
  }*/

/* 加粗斜体 */
em strong {
    color: rgb(248, 57, 41);
    letter-spacing: 0.3em;
}

/* 删除线 */

/*  del {
  }
*/
/* 分割线 */
hr {
    height: 1px;
    padding: 0;
    border: none;
    text-align: center;
    background-image: linear-gradient(to right, rgba(60, 122, 198, 0), rgba(60, 122, 198, 0.75), rgba(60, 122, 198, 0));
}

/* 图片 */
img {
    display: block;
    margin: 0 auto;
    border-radius: 8px;
    margin-bottom: 25px;
}

/* 图片描述文字 */
figcaption {
    display: block;
    font-size: 12px;
    font-family: PingFangSC-Light;
}

/* 行内代码 */
p code,
li code {
    color: rgb(60, 112, 198);
}

/* 非微信代码块
   * 代码块不换行 display:-webkit-box !important;
   * 代码块换行 display:block;
   */

/* 表格内的单元格
   * 字体大小 font-size: 16px;
   * 边框 border: 1px solid #ccc;
   * 内边距 padding: 5px 10px;
   */

body a:hover,
body a:active {
    text-decoration: underline;
}
body p,
body blockquote,
body .md-fences {
    margin-bottom: 1.5em;
}
body h1,
body h2,
body h3,
body h4,
body h5,
body h6 {
    margin-bottom: 1.5em;
}
body blockquote {
    font-style: italic;
    border-left: 5px solid !important;
    /* margin-left:2em!important; */
    padding-left: 1em !important;
    margin-bottom: 6px !important;
}
body ul,
body ol {
    margin: 0 0 1.5em 1.5em;
}
body ol li {
    list-style-type: decimal;
    list-style-position: outside;
}
body ul li {
    list-style-type: disc;
    list-style-position: outside;
}
body li > p {
    margin-top: 0;
    margin-bottom: 0;
}
body .md-meta,
body .md-before,
body .md-after {
    color: #999;
}
body table {
    margin-bottom: 1.5em;
    font-size: 1em;
}
body thead th,
body tfoot th {
    padding: 0.25em 0.25em 0.25em 0.4em;
    text-transform: uppercase;
}
body th {
    text-align: left;
}
body td {
    vertical-align: top;
    padding: 0.25em 0.25em 0.25em 0.4em;
}
body code,
body .md-fences {
    color: inherit;
    background-color: #dadada;
    padding-left: 1ch;
    padding-right: 1ch;
}
body pre code {
    background-color: inherit;
}
body .md-fences {
    margin-left: 2em;
    margin-bottom: 3em;
}
body .md-fences .CodeMirror.CodeMirror-wrap {
    top: -0.8em;
}
body pre,
body code,
body tt {
    font-size: 0.875em;
    line-height: 1.714285em;
}

body p + ul,
body p + ol {
    margin-top: -1em;
}
body h3 + ul,
body h4 + ul,
body h5 + ul,
body h6 + ul,
body h3 + ol,
body h4 + ol,
body h5 + ol,
body h6 + ol {
    margin-top: 0.5em;
}
body li > ul,
body li > ol {
    margin-top: inherit;
}

body hr {
    border-top: none;
    border-right: none;
    border-bottom: 1px solid;
    border-left: none;
}

body blockquote {
    border-color: #bababa;
    color: #656565;
    background-color: #e6e4dc;
}
body thead.md-table-edit {
    background-color: transparent;
}
body thead {
    background-color: #dadada;
}
body tr:nth-child(even) {
    background: #e8e7e7;
}
body hr {
    border-color: #c5c5c5;
}
body .task-list {
    padding-left: 1rem;
}
body .task-list-item {
    list-style-type: none;
    margin-left: -1.8em;
}
body .task-list-item .task-list-item-checkbox {
    margin-right: 0.8em;
}
body .task-list-item input:before {
    content: '\221A';
    display: inline-block;
    width: 1.25rem;
    height: 1.5rem;
    vertical-align: middle;
    text-align: center;
    color: #ddd;
    background-color: #f3f2ee;
}
body .task-list-item input:checked:before,
body .task-list-item input[checked]:before {
    color: inherit;
}
body kbd {
    color: #1f0909;
}
.footnotes {
    padding-top: 8px;
}

/* 脚注文字 */
.footnote-word {
    color: rgb(60, 112, 198);
}

/* 脚注上标 */
.footnote-ref {
    color: rgb(60, 112, 198);
}

/* 脚注超链接样式 */
.footnote-item em {
    color: rgb(60, 112, 198);
    font-size: 13px;
    font-style: normal;
    border-bottom-color: 1px dashed rgb(60, 112, 198);
}

/* "参考资料"四个字
   * 内容 content: "参考资料";
   */
.footnotes-sep:before {
    background-image: none;
    background-size: none;
    display: block;
    width: auto;
    height: auto;
}

/* 参考资料编号 */
.footnote-num {
    color: rgb(60, 112, 198);
}

/* 参考资料文字 */
.footnote-item p {
    color: rgb(60, 112, 198);
    font-weight: bold;
}

/* 参考资料超链接 */
.footnote-item a {
    color: rgb(60, 112, 198);
}

/* 参考资料解释 */
.footnote-item p em {
    font-size: 14px;
    font-weight: normal;
    border-bottom: 1px dashed rgb(60, 112, 198);
}

/* 行间公式
   * 最大宽度 max-width: 300% !important;

 /*
.block-equation svg {

  }
  */
/* 行内公式*/
/*
.inline-equation svg {

}*/

/* 滑动图片
   */
.imageflow-img {
    display: inline-block;
    width: 100%;
    margin-bottom: 0;
}
```

@tab 代码样式文件路径

```css
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono|Source+Sans+Pro:300,400,600');

* {
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-size-adjust: none;
    -webkit-touch-callout: none;
    box-sizing: border-box;
}
.markdown-preview code {
    border-radius: 2px;
    color: #6a2be0;
    font-size: 16px;
    font-size: 16px;
    margin: 0 2px;
    padding: 3px 5px;
    white-space: pre-wrap;
}
.markdown-preview code,
.markdown-preview pre {
    background-color: #f8f8f8;
    font-family: Roboto Mono, Monaco, courier, monospace;
}
.markdown-preview pre {
    -moz-osx-font-smoothing: initial;
    -webkit-font-smoothing: initial;
    line-height: 24px;
    line-height: 1.5rem;
    margin: 1.2em 0;
    overflow: auto;
    padding: 0 22.4px;
    padding: 0 1.4rem;
    position: relative;
    word-wrap: normal;
}
.token.cdata,
.token.comment,
.token.doctype,
.token.prolog {
    color: #898ac0;
}
.token.namespace {
    color: #1625fdef !important;
}
.token.boolean,
.token.number {
    color: #d19a66 !important;
}
.token.punctuation {
    color: #e44608 !important ;
}
.token.property {
    color: #dee033 !important;
}
.token.tag {
    color: #1366b4 !important;
}
.token.string {
    color: #98c376 !important;
    color: var(--theme-color, #216949);
}
.token.selector {
    color: #6679cc !important;
}
.token.attr-name {
    color: #2973b7 !important;
}
.language-css .token.string,
.style .token.string,
.token.entity,
.token.url {
    color: #22a2c9 !important;
}
.token.attr-value,
.token.control,
.token.directive,
.token.unit {
    color: #42b983 !important;
    color: var(--theme-color, #42b983);
}
.token.keyword {
    color: #c678dd !important;
}
.token.atrule,
.token.regex,
.token.statement {
    color: #22a2c9 !important;
}
.token.placeholder,
.token.variable {
    color: #3d8fd1 !important;
}
.token.deleted {
    text-decoration: line-through;
}
.token.inserted {
    border-bottom: 1px dotted #202746 !important;

    text-decoration: none;
}
.token.italic {
    font-style: italic;
}
.token.bold,
.token.important {
    font-weight: 700;
}
.token.important {
    color: #a9cec0 !important;
}
.token.entity {
    cursor: help;
}
.markdown-preview pre > code {
    -moz-osx-font-smoothing: initial;
    -webkit-font-smoothing: initial;
    background-color: #0c0d0e;
    border-radius: 2px;
    color: #d19a66;
    display: block;
    font-family: Roboto Mono, Monaco, courier, monospace;
    font-size: 14px !important;
    font-size: 1rem;
    line-height: 2em;
    max-width: inherit;
    overflow: inherit;
    padding: 0.8em 1.4em;
    white-space: pre;
}
.markdown-preview pre[class*='language'] {
    -moz-osx-font-smoothing: initial;
    -webkit-font-smoothing: initial;
    background-color: #0c0d0e;
    border-radius: 10px 10px;
    color: #d19a66;
    display: block;
    font-family: Roboto Mono, Monaco, courier, monospace;
    font-size: 14px !important;
    font-size: 1rem;
    line-height: 2em;
    max-width: inherit;
    overflow: inherit;
    padding: 30px 1.4em 10px 30px !important;
    white-space: pre;
}
.markdown-preview pre > code {
    padding-left: 0;
    padding-right: 0;
}
.markdown-preview code:after,
.markdown-preview code:before {
    letter-spacing: 0.8px;
    letter-spacing: 0.05rem;
}
code .token {
    -moz-osx-font-smoothing: initial;
    -webkit-font-smoothing: initial;
    min-height: 24px;
    min-height: 1.5rem;
}
pre:after {
    color: #ccc;
    content: attr(data-lang);
    font-size: 16px;
    font-size: 16px;
    font-weight: 600;
    height: 15px;
    line-height: 15px;
    padding: 5px 10px 0;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
}
pre[data-line] {
    position: relative;
    padding: 1em 0 1em 3em !important;
}
pre[data-line] .line-highlight-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    display: block;
    width: 100%;
}
pre[data-line] .line-highlight {
    position: absolute;
    left: 0;
    right: 0;
    padding: inherit 0;
    margin-top: 1em;
    background: rgba(153, 122, 102, 0.08);
    background: linear-gradient(to right, rgba(153, 122, 102, 0.1) 70%, rgba(153, 122, 102, 0));
    pointer-events: none;
    line-height: inherit;
    white-space: pre;
}
pre[data-line] .line-highlight:before,
pre[data-line] .line-highlight[data-end]:after {
    content: attr(data-start);
    position: absolute;
    top: 0.4em;
    left: 0.6em;
    min-width: 1em;
    padding: 0 0.5em;
    background-color: rgba(153, 122, 102, 0.4);
    color: #f5f2f0;
    font: bold 65%/1.5 sans-serif;
    text-align: center;
    vertical-align: 0.3em;
    border-radius: 999px;
    text-shadow: none;
    box-shadow: 0 1px white;
}
pre[data-line] .line-highlight[data-end]:after {
    content: attr(data-end);
    top: auto;
    bottom: 0.4em;
}

pre:before {
    content: ' ';
    position: absolute;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: #fc625d;
    width: 12px;
    height: 12px;
    left: 10px;
    top: 10px;
    -webkit-box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
    box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
    z-index: 2;
}
pre {
    background: #21252b;
    border-radius: 5px;
    font: 15px/22px 'Microsoft YaHei', Arial, Sans-Serif;
    line-height: 1.4;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    text-shadow: none;
    color: #000;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.4);
}
pre code::-webkit-scrollbar {
    height: 10x !important;
    width: 10x !important;
    background-color: #1d1f21 !important;
}
pre code::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;
    border-radius: 10px !important;
    background-color: #21252b !important;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
}
pre code::-webkit-scrollbar-thumb {
    border-radius: 10px !important;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5) !important;
    background-color: #21252b !important;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
}
```

:::

## markdown config

---

### markdown 代码快捷提示

1. ctrl+shfit+p 打开 setting 的 json 配置新增
    ```json
    // 打开编辑器的markdown文件的code提示
        "[markdown]": {
            "editor.quickSuggestions": {
                "other": "on",
                "comments": "off",
                "strings": "off"
            }
        },
    ```
2. ctrl+shift+p 输入`User snippets`，选择`markdown`类型文件，这时候 vscode 会创建或者打开一个`markdown.json`配置文件
3. 根据文件提示在文件中创建对应的模版
    ````json
        "markdown 折叠代码块模版": {
            "prefix": "details",
            "body": [
                "<details>\r\n\t<summary>$1</summary>\r\n\r\n```json\r\n```\r\n</details>",
                "$2"
            ],
            "description": "Log output to console"
        }
    ````

## vscode shortcut

| key                            | desc                                     | key | desc |
| ------------------------------ | ---------------------------------------- | --- | ---- |
| ctrl+[\|]                      | 向左/右缩进                              |
| ctrl+shift+[\|]                | collspase code                           |
| shift+alt+a                    | 多行注释                                 |
| ctrl+1/2/3                     | 拆分编辑器                               |
| ctrl+k/ctrl+f                  | 格式化选中代码                           |
| alt+鼠标左键                   | 鼠标选择多行光标                         |
| ctrl+r                         | open recent workspace                    |
| ctrl+shift+c                   | open terminal at current dir             |
| ctrl+shift+w                   | close vscode                             |
| ctrl+shift+o                   | 查找当前文件中的所有 symbol 定义         |
| ctrl+~                         | 切换终端面板                             |
| ctrl+shift+tab                 | 导航历史记录                             |
| alt+enter                      | 所有搜索结果匹配<br>匹配结果之后插入光标 |
| alt+c/r/w                      | 切换查找匹配模式                         |
| -----多光标------              |
| alt+鼠标左键                   | 插入光标                                 |
| ctrl+alt+上下键                | 向上或向下插入光标                       |
| ctrl+u                         | 撤销上一个光标操作                       |
| ctrl+l                         | 选择当前行                               |
| ctrl+shift+l                   | 匹配当前文档中光标最近的单词并添加光标   |
| ctrl+f2                        | 选择文档中出现的所有当前光标前后的单词   |
| ctrl+shift+alt+箭头            | 列框选择                                 |
| ctrl+shift+alt+pageup/pagedown | 页面列框选择                             |

## prettier config

```json
{
    // 箭头函数单个参数省略括号
    "prettier.arrowParens": "avoid",
    "prettier.jsxSingleQuote": true,
    "prettier.bracketSameLine": true,
    "prettier.tabWidth": 4,
    "prettier.singleQuote": true,
    "prettier.useEditorConfig": false,
    "prettier.singleAttributePerLine": true,
    "prettier.printWidth": 160,
    "prettier.enableDebugLogs": true,
    "prettier.htmlWhitespaceSensitivity": "ignore"
}
```

## 自定义

### 字体
[开源免费字体下载地址](https://www.programmingfonts.org)
vscode setting `font family` 设置优先字体

### 代码样式
```json
    // user setting json
    // 编辑器样式自定义设置====start====
    "workbench.colorCustomizations": {
        //设置用户选中代码段的颜色
        "editor.selectionBackground": "#cecb2d",
        "editor.selectionHighlightBackground": "#e4e4ba",
        //设置活动tab窗口颜色
        "tab.activeBackground": "#5f80629a",
        // 代码折叠块bg
        "editor.foldBackground": "#383636",
        // 搜索匹配内容bg
        "editor.findMatchBackground": "#f7f98c"
    },
    "editor.tokenColorCustomizations": {
        "keywords": "#cc02ff",
        "comments": "#07c267",
        "variables": "#56baf3",
        "functions": "#faba60",
        "numbers": "#9880e7",
        "strings": "#846297",
        "types": "#8349b6",
        "textMateRules": [
                // {
                //     "scope": "keyword.control",//if ,else, try 等控制符
                //     "settings": {
                //         "foreground": "#C586C0"
                //     }
                // },
                // {
                //     "scope": "keyword.operator",//算数符
                //     "settings": {
                //         "foreground": "#f07d3b"
                //     }
                // },
                // {
                //     "scope": "storage.modifier",//修饰语
                //     "settings": {
                //         "foreground": "#f09090"
                //     }
                // },
                // {
                //     "scope": "entity.name.type.class",//类名
                //     "settings": {
                //         "foreground": "#c0526a"
                //     }
                // },
                // {
                //     "scope": "storage.type.primitive.java",//int和其他啥啥，忘记了
                //     "settings": {
                //         "foreground": "#c0526a"
                //     }
                // },
                // {
                //     "scope": "entity.name.type.interface",//接口
                //     "settings": {
                //         "foreground": "#c0526a"
                //     }
                // },
                // {
                //     "scope": "entity.name.namespace",//导入部分
                //     "settings": {
                //         "foreground": "#74817c"
                //     }
                // },
                //html标签--start
                {
                    "scope": "entity.name.tag",
                    "settings": {
                        "foreground": "#c26844"
                    }
                },
                {
                    "scope": "entity.name.selector",
                    "settings": {
                        "foreground": "#08763d"
                    }
                },
                {
                    "scope": "entity.other.attribute-name",
                    "settings": {
                        "foreground": "#4db0e9"
                    }
                }
                //html标签--end
            ]
    },
    // 编辑器样式自定义设置====end====
```