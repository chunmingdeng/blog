# jenkins
---
[doc](https://cloud.tencent.com/developer/article/1666282)

> 注意安装的条件，上面这个文档是`ubuntu20.04`版本，安装的是`jenkins 2.375.1`

安装完成jenkins后，正常访问jenkins服务
1. 新建项目
2. 项目配置
    - 新增git仓库地址
    - 通过github新建仓库访问呢的key
    - 在jenkins中添加该仓库地址访问的证书


### jenkins汉化

1. 在系统管理-插件管理，可获取插件的页面下载“Localization: Chinese(Simplified)”插件
2. 在系统管理-系统配置，在locale栏目配置语言`zh_CN`，下面的复选框勾上，保存

# mac install
---
`brew install jenkins`安装最新版本

`brew install jenkins-lts`安装lts版本

安装完成之后，terminal中会提示安装完成信息，并且存在`/opt/homebrew/opt/jenkins/bin/jenkins --httpListenAddress\=127.0.0.1 --httpPort\=8080`

brew services start jenkins

## start

- start1:  java启动，找到jenkins.war

		`java /opt/homebrew/Cellar/jenkins/2.428/libexec/jenkins.war`

- start2: brew(后台挂起)
  
  `brew services start|stop|restart jenkins`
  > 这种可能存在@@HOMEBREW_JAVA@@报错，1.`brew list jenkins`找到berw安装的jenkins位置；2. 进入jenkins（/opt/homebrew/Cellar/jenkins/2.428/bin/）执行目录找到jenkins执行文件 3.替换@@HOMERBREW_JAVA@@变量为本地的环境变量真实地址
- start3:前台执行，不会挂起
  
  `/opt/homebrew/opt/jenkins/bin/jenkins --httpListenAddress\=127.0.0.1 --httpPort\=8080`

<br/>

## account

admin
111111
