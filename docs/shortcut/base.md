# code tools's shortcut keys

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


## vim
|key|descr
|---|---|
|\<number\> + space| 光标后移number位数|
|shift + a       | 跳转行尾并切换为编辑模式|
|0				 | 光标跳转行首 |
|^               | 跳转行首第一个字符（空格不计s）|
|w               | 向前移动一个单词（词首）|
|e               | 向前移动一个单词（词尾）|
|b               | 向后移动一个单词|
|d               | 开启剪切|
|d + \<number\> + enter| 当前行开始向下剪切number行|
|D               | 剪切光标位置到行尾|
|dw              | 剪切当前一个单词字母|
|dd              | 剪切当前行|
|c               | 剪切功能|
|p               | 粘贴|
|/partten        | 向后查找|
|?partten        | 向前查找|
|:%s/\<old\>/\<new\>/g| 查找并替换|
|:%s/\<old>/\<new\>/gc|  查找并替换，每次需要确认|
|\<n\>gt			 | 跳转第n个tab页|
|o               | 当前行下插一行 normal to edit|
|shift + o       | 当前行上插一行 normal to edit|
|x               | normal模式下删除，不改变模式|
|s               | normal模式下删除，并转为edit模式|
|\<number\> + j    | 向下移动number行|\
|\<number\> + k    | 向上移动number行|
|\<number\>gg      |跳转number行|
|gg              | 跳转文首|
|G               | 跳转文尾|
|gd              | 跳转变量的声明位置|
|f\<character\>    | 当前行查找字符并跳转|
|*\<word\>         | 向后查找当前单词|
|#\<word\>         | 向前查找单词|
