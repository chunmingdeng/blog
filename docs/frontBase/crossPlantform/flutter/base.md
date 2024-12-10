# base

## 安装xocde

## 安装cocoapods
[link](https://www.jianshu.com/p/f43b5964f582)```

## 修改flutter镜像源
```js
export PUB_HOSTED_URL="https://pub.flutter-io.cn"
export FLUTTER_STORAGE_BASE_URL="https://storage.flutter-io.cn"
```

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

## cocoapods
- flutter启动项目，一直提示`Flutter: Running pod install...`，大概率拉取mac、ios依赖失败，可以通过ruby的gem修改镜像源
```js
// 修改ruby工具gem的源
// 新增中科大镜像源
gem sources --add https://mirrors.tuna.tsinghua.edu.cn/rubygems/
// 删除原有国外源
gem sources --remove https://rubygems.org/


// 修改cocoapods的源
// 清华源 https://mirrors.tuna.tsinghua.edu.cn/help/CocoaPods/
// 查看源 https://cdn.cocoapods.org/
pod repo list
// 删除源
pod repo remove trunk或者pod repo remove master
// 新增清华源
pod repo add master https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git

```

## 疑难问题
- [编写自己的第一个flutter应用](https://docs.flutter.cn/get-started/codelab/)
- [如何将自己的flutter测试app打包到iPhone上](https://www.jianshu.com/p/2c4d7620c129)
- [Flutter 解决iOS14+ debug模式上无法运行的问题](https://juejin.cn/post/7112688873133572127)
- [现代手机顶部灵动岛，底部状态栏问题](https://juejin.cn/post/7239227781547573305)
- [safeArea导致顶部和底部黑边问题](https://blog.csdn.net/qq_33635385/article/details/102919554)