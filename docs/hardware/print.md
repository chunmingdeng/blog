# 打印机

## 爱普生TM-T82III
- [官方开发者文档地址（含SDK）](https://download4.epson.biz/sec_pubs/pos/reference_en/index.html)
- [webAPI](https://download4.epson.biz/sec_pubs/pos/reference_en/epos_js/index.html)

> [!warning]
> 注意需要在硬件设置界面设置`ePOS-print`为enable<br>
> ![Alt](./img/image.png =400x)

# 代码折叠示例

下面是一个折叠的代码块：


::: tabs
@tab epos调用示例
```ts
// 初始化对象
var ePosDev = new epson.ePOSDevice();
var printer = null;

// 连接方法
function connect() {
    var ipAddress = '192.168.192.168';
    var port = '8008';
    ePosDev.connect(ipAddress, port, callback_connect);
}

// 连接成功回调
function callback_connect(resultConnect) {
    var deviceId = 'local_printer';
    var options = { crypto: false, buffer: false };
    if (resultConnect == 'OK' || resultConnect == 'SSL_CONNECT_OK') {
        //Retrieves the Printer object
        ePosDev.createDevice(deviceId, ePosDev.DEVICE_TYPE_PRINTER, options, callback_createDevice);
    } else {
        //Displays error messages
    }
}

// 找到打印机的回调
// 设置打印机对象
// regist打印成功回调函数
function callback_createDevice(deviceObj, errorCode) {
    if (deviceObj === null) {
        //Displays an error message if the system fails to retrieve the Printer object
        return;
    }
    printer = deviceObj;
    //Registers the print complete event
    printer.onreceive = function (response) {
        if (response.success) {
            //Displays the successful print message
        } else {
            //Displays error messages
        }
    };
}

// 创建打印数据
function createData() {
    printer.addTextAlign(printer.ALIGN_CENTER);
    printer.addText('Hello World\n');
}

// 给打印机发送打印数据
function send() {
    if (ePosDev.isConnected) {
        printer.send();
    }
}

// 删除该打印机对象并断开连接
ePosDev.deleteDevice(printer, callback_deleteDevice);
function callback_deleteDevice(errorCode) {
    //Terminates connection with device
    ePosDev.disconnect();
}
```

@tab SDK
[SDK](/blog/epos-2.27.0.js)


@tab window.print 尚佳实践
[html代码](/blog/打印实践.txt)
:::