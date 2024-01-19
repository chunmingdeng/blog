# windows终端，拒绝花里胡哨

## gitbash
### 通用配置
```
在Git/etc/bash.bashrc中添加
alias npm='winpty npm.cmd'
alias tree='winpty tree.com'
```

### git的bash&git-bash的配置文件
```
git ----> C:\Program Files\Git\etc\bash.bashrc
git-bash -----> C:\Program Files\Git\etc\profile.d\aliases.sh
```
### 软件使用
1. windows商店下载windows终端|windows终端预览
2. 打开下载的终端，在tabs栏找到下拉箭头选择设置（或者直接快捷键ctrl+，）
3. 在配置底部直接找到打开JSON文件
4. 在JSON文件中找`profiles`字段，不同windows系统可能不太一样，但是大致相同，数组中添加如下格式数据
  ```json
  {
      "closeOnExit": "graceful",
      "commandline": "C:\\Program Files\\Git\\bin\\bash.exe", //这里用的是bash，不是git-bash，所以会采用用户目录下的.bashrc C:\Users\<username>\.bashrc
      // 如果使用git-bash.exe，则依赖的是C:\Program Files\Git\etc\bash.bashrc
      "elevate": false,
      "guid": "{1c4de342-38b7-51cf-b940-2309a097f589}",
      "hidden": false,
      "icon": "C:\\Program Files\\Git\\mingw64\\share\\git\\git-for-windows.ico",
      "name": "bash"
  }
  ```

### git-bash
- `git-bash`无法交互的问题
  所有的命令改为 `winpty <commadnName>.cmd`(原理：需要和window的cmd交互)    
  方法一: 
  ```bash
  npm create vite@latest ===> winpty npm.cmd create vite@latest
  ```
  方法二：找到git的bash文`C:\Program Files\Git\bash.bashrc`    
  ```bash config
  # 添加bash命令alias
  alias npm='winpty npm.cmd'
  ```

## cygwin
- 安装`cygwin`
- 安装过程中要选装vim，不然默认没有这个文本编辑器
- cygwin安装目录下的`home`文件夹就相当于`linux`下的用户目录，里面有`.bashrc`等相关配置的文件夹

## 查找文件
- cmd下
  ```js
  where nginx
  ```
- powershell
  ```js
  where.exe nginx
  ```

## 查看端口，进程，终止等相关操作
```js
// 查看端口对应的pid
netstat -aon|findstr <port>
// 查看pid对应的什么程序
tasklist | findstr <pid>
// 强行终止pid程序
taskkill /pid <pid> -f
```