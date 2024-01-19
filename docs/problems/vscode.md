# vscode相关问题

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