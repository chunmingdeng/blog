# base

## 安装xocde

## 安装cocoapods
[link](https://www.jianshu.com/p/f43b5964f582)

## 安装flutter插件
- 安装flutter插件
- 安装dart插件
- cmd+shift+p `flutter:new project`
    - 执行flutter sdk的安装
    - 安装失败
        - 报git clone失败，可能是包太大无法下载，修改git下载配置`git config --global http.postbuffer 1024M`
        - 报连接`https://maven.google.com/`失败[link](https://www.jianshu.com/p/b69231defaaf)，找到flutterSDK的位置，在目录下找到`\packages\flutter_tools\lib\src\http_host_validator.dart`文件，修改`maven.google.com`为`dl.google.com/dl/android/maven2`
- 修改`.zshrc`，将`flutter`的路径添加至`path`，`export PATH="/Users/chunmingdeng/development/flutter/bin:$PATH"`，执行`source .zshrc`
- 终端运行`flutter doctor`