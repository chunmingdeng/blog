# problems

## github或者gitlab一直拒绝链接（网络正常的情况下）
> 这种情况可能是网络安全引起的，先观察拒绝链接的接口，一般git默认是22，可以尝试修改端口
```js
// 1.在～/.ssh/目录下新建config文件，并添加如下内容
Host github.com
User git
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
Port 443

Host gitlab.com
Hostname altssh.gitlab.com
User git
Port 443
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
```