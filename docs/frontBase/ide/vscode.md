# vscode

## 关于code命令
> macos更新最新的系统后，系统下的python在/usr/local/bin/python，系统下的python3在/usr/bin/python3，而code的可执行文件的内容中有这么一段：`function realpath() { /usr/bin/python -c "import os,sys; print(os.path.realpath(sys.argv[1]))"`，其中`/usr/bin/python`在新系统下已经不存在了，需要改为`/usr/local/bin/python`，然后code命令就可以正常使用了

## 基础插件
1. Markdown Preview Enhanced
2. volar
3. vue-vscode-snippets
4. git history·
5. glsl lint
6. json
7. live server
<!-- 8. markdowwn all in one -->
9. remote ssh
10. shader languages support for vscode
11. tailwind css intellisense
12. volar
13. vue vscode snippets
14. dotenv
15. geo data viewer

## markdown config
---
### markdown代码快捷提示
1. ctrl+shfit+p 打开setting的json配置新增
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
2. ctrl+shift+p 输入`User snippets`，选择`markdown`类型文件，这时候vscode会创建或者打开一个`markdown.json`配置文件
3. 根据文件提示在文件中创建对应的模版
    ```json
        "markdown 折叠代码块模版": {
            "prefix": "details",
            "body": [
                "<details>\r\n\t<summary>$1</summary>\r\n\r\n```json\r\n```\r\n</details>",
                "$2"
            ],
            "description": "Log output to console"
        }
    ```

## vscode
|key|desc|key|desc|
|---|---|---|---|
|ctrl+[\|]|向左/右缩进|
|ctrl+shift+[\|]|collspase code|
shift+alt+a|多行注释|
ctrl+1/2/3|拆分编辑器|
|ctrl+k/ctrl+f|格式化选中代码|
alt+鼠标左键|鼠标选择多行光标|
|ctrl+r|open recent workspace|
ctrl+shift+c|open terminal at current dir|
ctrl+shift+w|close vscode|
ctrl+shift+o|查找当前文件中的所有symbol定义|
ctrl+~|切换终端面板|
ctrl+shift+tab|导航历史记录|
alt+enter|所有搜索结果匹配<br>匹配结果之后插入光标|
alt+c/r/w|切换查找匹配模式|
|-----多光标------|
|alt+鼠标左键|插入光标|
ctrl+alt+上下键|向上或向下插入光标|
ctrl+u|撤销上一个光标操作|
|ctrl+l|选择当前行|
ctrl+shift+l|匹配当前文档中光标最近的单词并添加光标|
ctrl+f2|选择文档中出现的所有当前光标前后的单词|
|ctrl+shift+alt+箭头|列框选择|
ctrl+shift+alt+pageup/pagedown|页面列框选择|


