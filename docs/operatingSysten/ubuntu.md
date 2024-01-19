# ubuntu

## 字体问题
> 安装中文字体
> 在使用puppeteer的时候，导出文件，当系统不支持中文字体的时候，就会导致导出的pdf无法没有中文字体
[link](https://www.cnblogs.com/Jimc/p/10302267.html)
```js
// 查看系统
cat /proc/version
// 查看已安装的中文字体
fc-list :lang=zh-cn
// 安装中文字体
sudo apt install -y --force-yes --no-install-recommends fonts-wqy-microhei
sudo apt install -y --force-yes --no-install-recommends ttf-wqy-zenhei
```