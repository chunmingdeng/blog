# mac系统

## 常用文件夹位置
### log
location: /usr/local/var/log

### nginx
location: /usr/local/etc/nginx

### git
location: /usr/local/git

### .bash_profile
location: ~/.bash_profile

### 聚焦快捷搜索不生效问题
```js
// solution I
// close application
sudo mdutil -a -i off
// unload
sudo launchctl unload -w /System/Library/LaunchDaemons/com.apple.metadata.mds.plist
// load
sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.metadata.mds.plist
// start application
sudo mdutil -a -i on

// solution II， 这里 -E 表示”Erase and rebuild index”（删除并重建索引），/ 表示从 root 目录开始（重建所有文件夹的索引）
sudo mdutil -E /
```