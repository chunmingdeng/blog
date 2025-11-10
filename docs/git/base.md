# git

## [git toturial](https://git-scm.com/book/zh/v2)

## 如何新建一个git repository
1. 在github或者gitlab上新建一个空仓库，下面以github为例；
2. 在本地新建一个文件夹rep
3. 在rep文件夹下`git init`
4. 添加远端仓库地址`git add remote origin ${remote-rep-address}`
5. 设置上游分支并推送至远端`git push --set-upstream origin ${branch-name}`

## git命令
> `git add .`<br>
> `git commit -m <message: string>`<br>
> `git commit -amend`
> 本次的提交追加在上次的提交里面合为一次，必须在git add .之后才能执行本命令<br>
> `git remote add origin <url>`
> 添加远程仓库的地址<br>

### 删除命令
1. `git branch -D <branch_name>`
   > 删除本地仓库的某个分支
2. `git push <repository_name> :<branch_name> `
   > 同样是删除远程分支的另一种方法
3. `git push <repository_name> --delete <branch_name> `
   > 删除远程的某个分支
4. `git push rm <repository_name> `
   > 删除远程的某个仓库
5. `git rm <_path>`
   > 同时从工作区和索引中删除文件。即本地的文件也被删除了
6. `git rm --cached  <_path>`
   >  从索引中删除文件。但是本地文件还存在， 只是不希望这个文件被版本控制

### 仓库相关命令
1. `git fetch <repository_name> `
   > 同步远程服务器数据到本地
1. `git remote show `
   > 可以查看到远程有多少仓库
1. `git remote -v `
   > 可以查看远程仓库以及其对应的仓库地址
1. `git remote show <repository_name> `
   > 查看远程的指定仓库
1. `git remote rename pb Paul  `
   > 修改某个远程仓库在本地的简称<br>

### 分支相关命令
1. `git branch -vv `
   > 查看本地分支对应的远程分支<br>
2. `git branch -a `
   > 查看所有的本地及远程分支<br>
3. `git branch -v `
   >  查看各个分支最后一个提交信息<br>
4. `git remote prune <repository_name> `
   > 清楚远程仓库的无效分支（远程删除了，但是本地还有之前记录）

### 取消提交
1. git reset --hard <commit_id>
   > 彻底回退到commit_id的版本，本地源码页恢复到commit_   id版本（撤销commit和add）<br>
2. git reset --soft <commit_id>
   > 回退到commit_id版本，但是本地的修改可以提交（撤销commit但是add保留）<br>
3. git reset <commit_id>
   > 默认使用--mixed选项，回退到commit_id版本，修改的文件需要git add后才能提交<br>
4. git checkout <commit_id> <file_name>
   > 取消<file_name>的<commit_id>版本提交 <br>

### 修改提交
git commit --amend
> 修改最后一次提交。先git add 新的changes，然后再跑这个命令重新提交<br>
> 如何撤销--amend的某次提交
>> git reflog
> 查看提交的历史记录，区别于git log<br>
>> git reset HEAD@{\<number\>}
> reset到指定的commit_hash

### 合并提交
git rebase -i HEAD~\<number\>
git rebase -i (startHash, endHash]
> number需要合并的commit的个数，从当前位置向前推

### 暂存修改
git stash save -a <message_info>
> <br>
git stash list
> 展示所有的stash<br>
git stash pop --index stash@{0}
> 取出指定index的stash，并在stash list中清除<br>
git stash apply --index stash@{0}
> apply指定index的stash，stash list中仍然存在<br>
git stash clear
> 清除所有的stash<br>

### reset
git reset HEAD .
> 在git add .之后可以用来撤销暂存的文件<br>

### checkout
> 将HEAD指向某个分支的最近一次commit, 从commit恢复index, 从index恢复工作区(浅层理解的话,index就是暂存区), 但是处于安全考虑, 只会放弃工作区的改动, 暂存区保留, 除非加上-f参数
1. `git checkout .`
   > 1. 切换到当前分支,并指向最新的commit
   > 2. 将commit恢复到暂存区
   > 3. 将暂存区的内容恢复到工作区
   > **等价于git restore .** 撤销所有未`git add`的更改
2. `git checkout -f .`
   > 撤销暂存区和工作区中的所有改动

### clean
git clean -f
> 删除所有的untracked files<br>
git clean -fd
> 删除所有的untracked files & untracked directory<br>
git clean -xfd
> 连 gitignore 的untrack 文件/目录也一起删掉 （慎用，一般这个是用来删掉编译出来的 .o之类的文件用的）<br>
> 在用上述 git clean 前，墙裂建议加上 -n 参数来先看看会删掉哪些文件，防止重要文件被误删

### tag
1. `git tag {tagName} [-m 'tag message'] [commitId]`
   > 新增一个tag
2. `git tag -l`
   > 查看所有tag
3. `git show {tagName}`
   > 查看某个tag 的具体信息
4. `git push origin {tagName}`
   > 将某个tag推送到远程仓库
5. `git push origin --tags`
   > 将所有的tags推送到远程仓库
6. `git tag -d {tagName}`
   > 删除本地某个tag
7. `git push origin :refs/tags/{tagName}`
   > 删除远程标签
   `git push --delete origin {tagName}`
8. `git ls-remote --tags origin`
   > 查看远程所有tags


### restore
1. `git restore [.] | [fileName]`
   > 放弃所有已track但是未add的文件的所有更改(即不在暂存staged中的更改)
2. `git restore --staged [.] | [fileName]`
   > 将所有|某个已暂存的文件修改从暂存区取出

## window问题
1. 从一个git repo切换到另一个git repo的时候，没有要求重新输入密码，导致认证失败
```js
// cmd中使用用管理员权限运行
git config --system --unset credential.helper
// vscode中使用
git config --global --unset credential.helper
// 如果还不行
git config –-global http.emptyAuth true
```

2. vscode记住git 账号
```js
git config --global credential.helper store
```
## 对比工具
> git本身和相关的插件对比一般能满足普通的对比需求了，但是在多次git commit --amend之后，想要查看追加提交的内容变更，这时候需要一点方法
1. `git reflog` 查看追加提交对应的`hash`
2. 安装`beyond compare`[download address](https://www.scootersoftware.com/download/download)
3. shell配置`git config --global diff.tool bc`对比工具
4. `git difftool <commitA> <commitB> -d` 最好commitB是后提交的内容，不然对比可能出现问题[参考](https://zhuanlan.zhihu.com/p/61056144)
:::info
`git difftool <commitA> <commitB>`后可追加参数
- 默认不追加，一次只打开一个文件，然后关闭后，会在终端询问是否打开下一个；
- -y参数，关闭后直接打开下一个；
- -d参数，直接以文件夹的形式打开所有变更文件，自己在文件夹形式下手动选择对比；
:::