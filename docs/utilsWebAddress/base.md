# 实用的工具网站地址

## 图片

### picsum
> 一个开源的图片网址，可以根据URL参数生成指定大小的图片，可以随机，也可以不随机
```js
// get a image by the size 200*300
https://picsum.photos/200/300
// get a image by the size 200*200
https://picsum.photos/200
```

### typora
首先去官网选择mac版本下载安装 typora下载

然后打开typora包内容找到

/Applications/Typora.app/Contents/Resources/TypeMark/ 

编辑器打开上面文件夹，这里我拉到vscode

找到page-dist/static/js/LicenseIndex[hash]文件
搜索` hasActivated="true"==e.hasActivated`改为` hasActivated="true"=="true"`, 重新进去