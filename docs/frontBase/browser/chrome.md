# chrome base

## chrome://omnibox
[doc](https://www.zhihu.com/question/560616439/answer/2722866208)
> `chrome`自带的一个工具，能够判断一个内容是网址还是搜索内容

## 1、macos 自定义chrome程序

###  启动一个带调试端口的chrome
#### 方案一：终端启动
直接命令行启动：
  `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir="$HOME/.chrome-debug"`

#### 方案二：创建启动图标
- 打开 Automator（在“启动台” -> “其他”中，或用 Spotlight 搜索）
- 选择文稿类型：点击“新建文稿”，选择 “应用程序”
- 搜索操作：在左侧搜索框输入“运行 Shell 脚本”，将其拖拽到右侧工作区
- 输入命令：将脚本内容替换为：
  `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir="$HOME/.chrome-debug"`
- 保存应用：按 Cmd+S，命名为 “Chrome调试模式”，保存在“应用程序”文件夹

#### 方案三：macos脚本编辑器
- 打开脚本编辑器 在“启动台” -> “其他”文件夹中找到，或直接用 Spotlight（Cmd+空格）搜索 Script Editor 打开
- 创建新脚本 如果脚本编辑器自动打开了新窗口，直接使用即可；如果没有，点击菜单栏 文件 → 新建，或按 Cmd+N
- 输入 AppleScript 代码，将以下代码复制粘贴到脚本编辑区：
```applescript
do shell script "/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --remote-debugging-port=9222 --user-data-dir=\"/tmp/chrome-debug-profile\" > /dev/null 2>&1 &"
```
代码说明：
> /dev/null 2>&1 & 这部分是必需的。它让 Chrome 在后台静默启动，不会弹出终端窗口，并且关闭脚本编辑器后 Chrome 也不会被影响。
> --user-data-dir="/tmp/chrome-debug-profile" 参数用于解决 Chrome 的安全限制，避免提示“无法在默认用户数据目录下启动”。当然你也可以换成其他路径，比如 "$HOME/ChromeDebug"。
- 测试运行 点击编辑器顶部的 ▶️ 运行 按钮 如果一切正常，Chrome 会以调试模式启动，并且不会弹出终端窗口
- 保存为可双击的应用程序 点击菜单栏 文件 → 导出…（或 存储…） 在弹出窗口中设置： 名称：例如 Chrome调试助手 位置：选择 应用程序 文件夹（方便从启动台调用） 文件格式：选择 应用程序（.app）