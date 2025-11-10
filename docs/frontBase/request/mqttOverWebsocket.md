# 实时数据传输协议：WebSocket vs MQTT

## 一、实时数据传输的常见方法：轮询不是你的朋友

<pre>
我们前端人啊，早年获取实时数据全靠 setInterval，每 3 秒轮一次接口，刷新一下消息列表，以为这就叫“实时通信”。
直到项目越来越复杂，我们才发现：
轮询是个资源黑洞，明明啥事都没发生还一直发请求；
用户体验一言难尽：消息早就发了，我页面 2 秒后才看到？
服务端也很冤：你不停来问“有新消息没？”，我不累吗！
于是更现代、合理的实时通信方案应运而生：
</pre>

1. 轮询（Polling）
   每隔一段时间向服务端发起 HTTP 请求获取最新数据
   ❗️ 缺点：频繁请求消耗大、延迟不可控
2. 长轮询（Long Polling）
   请求保持挂起，有新消息才响应
   ❗️ 是轮询的“省电版”，但仍是 HTTP 一次一条消息
3. Server-Sent Events（SSE）
   服务端单向推送，基于 HTTP
   适用于日志流、股票、系统监控数据等
4. WebSocket：像打电话一样畅聊
   双向通信，建立连接后双方都能主动发消息
   一次握手，长久维持
   适合互动强、数据量适中的系统
5. MQTT：像订公众号一样收消息
   发布/订阅机制，客户端订阅 topic，服务端按需推送
   消息轻量、省流量、可靠性强
   非常适合 IoT、大规模设备状态上报场景

## 二、WebSocket 是什么？像电话一样的实时连接

<pre>
WebSocket 是一种在浏览器和服务端之间建立持久双向通信的协议，一旦连接建立，双方就像通了电话，随时能讲话。

📣 WebSocket 特点
全双工通信（双向实时）
建立连接后不会重复 HTTP 开销
原生支持，浏览器直接用，无需第三方库
消息格式自定义，无订阅机制
❗️ WebSocket 的限制：没有“订阅机制”
这是与 MQTT 最大的区别！WebSocket 没有 topic（主题）的概念，所有消息都是从同一个管道进来：

你不能说“我只关心 room/123 的消息”，因为它不支持按需订阅；
想要做到消息分类，必须由应用层自定义协议，例如：
</pre>

```json
{
    "type": "chat",
    "room": "123",
    "payload": "hello world"
}
```

然后客户端和服务端都要解析这些字段、过滤逻辑、管理消息路由，复杂度一下子就上来了。

<pre>
♻️ 适用场景
在线聊天室
协同编辑工具（如 Figma、Notion）
Web 游戏同步
</pre>

▶️ 示例代码

```js
const socket = new WebSocket('wss://chat.example.com');

socket.onopen = () => socket.send('Hello Server');
socket.onmessage = e => console.log('对方说：', e.data);
```

## 三、MQTT 是什么？像订阅公众号一样获取消息

<pre>
MQTT（Message Queuing Telemetry Transport）是为低带宽、不稳定网络环境设计的一种发布/订阅模型通信协议，特别适合“我只关心某类消息”的场景。

📣 MQTT 特点
发布/订阅机制，客户端按 topic 订阅感兴趣的数据

轻量，设计初衷就是用于物联网设备

支持 QoS（质量等级）

QoS 0：尽力而为，可能丢
QoS 1：至少一次（可能重复）
QoS 2：确保只有一次（最重）
内建断线重连、遗嘱消息、保留消息等机制

适合大规模、低功耗、高可靠通信需求
</pre>

▶️ 示例代码（前端也能用）

```js
npm install mqtt
import mqtt from 'mqtt';

const client = mqtt.connect('wss://broker.example.com:8083');

client.on('connect', () => {
  client.subscribe('vehicle/123/status');
});

client.on('message', (topic, message) => {
  console.log(`📡 来自 ${topic} 的数据:`, message.toString());
});
```

🎯 适用场景
车联网、共享单车实时定位
工业设备远程监控
大规模传感器数据采集

## 四、实战案例：MQTT over WebSocket？

<pre>
比如我们有一个自动驾驶车辆运营平台，系统需要实时接收上千辆车的位置、状态、告警等消息 —— 每秒钟都是数据洪流。

🔄 MQTT + WebSocket 协议融合，完美兼容前端
👉 也就是：前端通过 WebSocket 通道连接 MQTT Broker，协议仍然是 MQTT。

这样我们就能 同时享受两者的好处：

技术	优点
WebSocket	浏览器原生支持、可穿透防火墙
MQTT 协议	发布/订阅模型、消息轻量、支持 QoS、自动重连
🔧 架构大概长这样：

[ 车辆设备 - MQTT/TCP ] → [ EMQX Broker ] ← [ 前端浏览器 - MQTT over WebSocket ]
❓ 为什么是“MQTT over WebSocket”？
因为浏览器环境无法直接使用 TCP 协议连接 MQTT Broker，所以我们用 WebSocket 做“传输通道”，将 MQTT 消息封装进去发给服务器。

EMQX Broker 会专门开启 ws/wss 端口（比如 8083/8084），专门用于接收来自浏览器的 MQTT over WebSocket 连接。

所以这个“over WebSocket”完全是为了让前端也能用上 MQTT 协议。设备端还是正常 TCP，浏览器则走 WebSocket 通道。

🧪 实战效果
🧘‍♂️ 前端只订阅需要的 topic，不再自己拆包分类；
💪 Broker 帮我们做消息路由、过滤、存储，省心不少；
📈 加了 QoS 1，消息即使断网也不会丢，重连后会补发；
🛠 连接断了自动重连，用户几乎无感知；
🔌 Broker 易于水平扩展，支持我们未来设备翻倍也顶得住；
📦 前端连接代码（使用 mqtt.js）（超简易版）
</pre>

```js
import mqtt from 'mqtt';

const client = mqtt.connect('wss://broker.example.com:8083/mqtt', {
    username: 'web_user',
    password: 'secure_token',
    reconnectPeriod: 3000,
});

client.on('connect', () => {
    client.subscribe('vehicle/123/status');
});

client.on('message', (topic, msg) => {
    console.log(` [${topic}]:`, msg.toString());
});
```

> > 📘 重点：WebSocket 是传输通道，MQTT 是通信协议。
> > 我们用 WebSocket 做桥梁，让浏览器也能用上强大的 MQTT 协议栈。
>
> MQTT 协议： 是一种 消息通信协议，定义了消息的格式、订阅发布机制、QoS 等行为标准，但不关心底层用什么“线”传输消息。
>
> WebSocket 协议： 是一种 网络传输协议，相当于一根实时、双向的数据线。浏览器能用它来持久连接服务端。
>
> MQTT over WebSocket：浏览器环境下的兼容方案，它是客户端层面的兼容方案 ，不是后端选择，而是前端无法使用 MQTT 原始协议时的替代方案。
>
> MQTT 通常基于 TCP，但浏览器不能直接连 TCP。 所以我们让 浏览器通过 WebSocket 通道来“包裹” MQTT 协议，发送 MQTT 格式的数据 —— 就像“走水管传快递”一样。
>
> 🔄 数据传输的真实流程
>
> 以下面的架构为例，我们来看数据是怎么流动的：
> ```js
> [IoT 设备]
>     ▲
> MQTT 协议 (TCP 传输)
>     ▼
> [EMQX Broker]
>     ▲
> MQTT 协议 (WebSocket传输)
>     ▼
> [前端浏览器]
> 设备端（IoT）
> ```
> 通常直接使用原始 MQTT 协议，通过 TCP 端口（1883）连接到 EMQX。
> 前端浏览器：
>
> 不能使用 TCP，所以通过 WebSocket 协议连接到 EMQX 暴露的 ws:// 或 wss:// 端口（比如 8083、8084）；
> WebSocket 上层跑的是 MQTT 协议，消息格式仍然是 MQTT 的，使用 mqtt.js 这样的库发送/订阅消息。
> 🧩 举个生活化的例子来帮助理解
>
> MQTT 是一种快递标准（怎么装箱、怎么贴标签、怎么投递）；
> TCP 和 WebSocket 是不同的“快递路线”：高速公路 vs 城市地铁；
> IoT 设备走高速公路（TCP）；
> 浏览器没高速公路可走，只能走城市地铁（WebSocket）；
> EMQX 是个聪明的中转站，提供多种路线，只要你贴好 MQTT 标签，它都能帮你送。

## 五、WebSocket vs MQTT

| 对比维度   | WebSocket          | MQTT                        |
| ---------- | ------------------ | --------------------------- |
| 通信模式   | 全双工，点对点     | 发布/订阅，多对多           |
| 消息机制   | 无主题，全靠自定义 | 按 topic 分类，支持通配符   |
| 浏览器支持 | 原生支持           | 需引入 mqtt.js 库           |
| 消息可靠性 | 无                 | QoS，自行实现 支持 QoS0/1/2 |
| 扩展性     | 服务端连接压力大   | Broker 可水平扩展           |
| 断线重连   | 需手动管理         | 内建支持断线重连与持久会话  |
| 适用场景   | 聊天、游戏、互动   | IoT、轨迹监控、大量设备上报 |

一句话总结：

WebSocket 适合人与人之间的互动通信
MQTT 适合设备与设备之间的高效数据推送

## 六、项目选型 Checklist

| 问题                         | 选谁                     |
| ---------------------------- | ------------------------ |
| 前端要不要“只订阅部分数据”？ | MQTT ✅                  |
| 浏览器原生支持是否必须？     | WebSocket ✅             |
| 系统中连接数量是否特别多？   | MQTT ✅                  |
| 是否需要可靠消息不丢？       | MQTT ✅                  |
| 服务端开发资源有限？         | MQTT ✅（Broker 封装好） |
| 使用场景是人聊天             | /互动？ WebSocket ✅     |

## 七、参考资料 & 延伸阅读

[MDN WebSocket 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)  
[MQTT 协议官方](https://mqtt.org/)  
[mqtt.js GitHub](https://github.com/mqttjs/MQTT.js)
[EMQX MQTT Broker](https://www.emqx.io/)  
[HiveMQ Blog](https://www.hivemq.com/blog/)

## 八、结尾：选对协议，事半功倍

<pre>
实时通信的世界没有银弹，只有最合适的协议。

做互动、做直播、做 Web 聊天：选 WebSocket
做设备、做物联网、做大数据轨迹：选 MQTT
希望这篇文章能帮你理清思路，避开弯路。
</pre>
