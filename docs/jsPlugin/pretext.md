# pretext
[官网](https://pretextjs.dev/) | [GitHub](https://github.com/chenglou/pretext) | [npm](https://www.npmjs.com/package/@chenglou/pretext) | [中文介绍](https://pretextjs.net/zh)

> 一个纯 TypeScript 的文本测量/排版库：绕过浏览器 layout reflow，用纯数学计算多行文本的高度和换行布局。
> 速度比 DOM 测量快 300-600 倍，零运行时依赖，gzip 后约 5KB，支持多语言、emoji、双向文本。
> 适合 Canvas / SVG / WebGL、虚拟滚动、Masonry 瀑布流、SSR 防抖动等场景。

## 1 为什么需要它

> 每次调用 `getBoundingClientRect()` / `offsetHeight` / `scrollHeight`，浏览器都要暂停 JS、flush 样式、做一次完整 layout，才能返回一个数字。这就是 forced synchronous reflow，浏览器最昂贵的操作之一。

1. 传统方式：创建隐藏 DOM → 设置样式 → 插入文档 → 测量 → 删除，500 个文本块就是 500 次 reflow（约 15-30ms）。
2. Pretext 方式：`prepare()` 一次性用 Canvas `measureText` 分析字体并缓存，之后 `layout()` 全是纯算术，0 次 reflow（500 块约 0.05ms）。

## 2 工作原理（两阶段）

1. **`prepare()` — 一次性字体分析（1-5ms，只跑一次）**
   - CSS white-space 规范化 → `Intl.Segmenter` Unicode 分词（CJK 逐字换行、泰语、阿拉伯 RTL 等）→ Canvas `measureText` 测量每个字符段宽度并缓存。
2. **`layout()` — 纯算术计算（约 0.0002ms/次）**
   - 遍历缓存宽度，按 maxWidth 决定换行位置，算出 lineCount 和 height。可在动画帧里高频调用，也可在 Web Worker / 服务端跑。
3. **Safari emoji 校准**：Safari 的 Canvas 报告的 emoji 宽度与 DOM 渲染有差异，Pretext 首次遇到 emoji 时做一次隐藏 DOM 测量建立校正系数并缓存。
4. **验证机制**：调试模式下可把纯计算结果与实际 DOM 高度并排对比，保证像素级一致。

## 3 安装

```bash
npm install @chenglou/pretext
# yarn add @chenglou/pretext
# pnpm add @chenglou/pretext
# bun add @chenglou/pretext
```

## 4 基本用法

```ts
import { prepare, layout } from '@chenglou/pretext';

// 第一步：一次性分析字体（耗时 1-5ms，只跑一次）
const prepared = prepare('Hello, 世界 🌍', '16px Inter');

// 第二步：按容器宽度计算高度（耗时 0.0002ms，随时调用）
// 第三个参数为行高（px），可选
const { height, lineCount } = layout(prepared, 300, 24);

console.log(height);     // 精确的像素高度
console.log(lineCount);  // 行数

// 同一个 prepared 句柄可复用于不同宽度（移动端 / 平板 / 桌面）
const narrow = layout(prepared, 240, 24);
```

> ESM 和 CJS 都支持，可用于浏览器、Node.js、Web Worker。零依赖，TypeScript 原生类型。

## 5 能力与支持范围

| 能力 | 说明 |
| --- | --- |
| 零 DOM 读取 | `prepare()` 之后每次 `layout()` 都是纯算术，无 reflow |
| 真实字体度量 | 用浏览器 Canvas 字体引擎测字形宽度，非启发式估算 |
| 多语言 | CJK 逐字换行、emoji（肤色/ZWJ 序列）、BiDi 阿拉伯/希伯来、泰语等无空格语言、软连字符 |
| 富文本混排 | 内联代码块、链接、芯片等非文本元素与文字混排 |
| 句柄复用 | 一次 prepare 覆盖所有容器宽度 |

## 6 典型使用场景

1. **虚拟滚动**：渲染前精确预知每条消息高度，零误差虚拟列表。
2. **防止 Layout Shift（CLS）**：SSR 阶段提前算好布局，加载时内容不抖动。
3. **Canvas / WebGL 渲染**：文本脱离 DOM 也能精确排版，做 60fps 文字动画、创意视觉、游戏场景。
4. **Masonry 瀑布流**：卡片高度在数据加载阶段就算出来，不依赖 DOM 测量。
5. **障碍物感知排版**：文字实时绕任意形状流动（如绕开动画生物、雨伞等）。
6. **AI 聊天气泡**：流式回复过程中预计算气泡高度，消除跳动。
7. **SVG / 服务端渲染**：配合 opentype.js 把文本转成 SVG 路径，服务端生成零字体依赖的矢量排版。

## 7 与其他方案对比

| 方案 | 速度 | 精度 | 语言支持 | 备注 |
| --- | --- | --- | --- | --- |
| DOM 测量 | 慢 | 高 | 完整 | 触发 reflow，500 块 15-30ms |
| Canvas.measureText 裸用 | 快 | 中 | 部分 | 需自己实现换行/分词/emoji 校准 |
| HarfBuzz (WASM) | 中 | 最高 | 最完整 | 包体大，部署成本高 |
| **Pretext** | **最快** | 高 | 完整 | 0.0002ms/次，5KB gzip |

## 8 已知限制

1. **依赖 Canvas API**：无法在无 Canvas 的环境运行（现代浏览器均支持）。
2. **字体必须已加载**：Web Font 需 `font-display: block` 或 `font.load()` resolve 后再调 `prepare()`。
3. **`prepare()` 有初始开销**：1-5ms，超大文本更久，建议放在数据加载阶段异步执行，别卡渲染关键路径。
4. **覆盖范围是 standard CSS 换行规则**：`white-space: normal` + `word-break: normal` + `overflow-wrap: break-word` + `line-break: auto`，暂不支持 `pre-wrap` 等非标准模式。

## 9 作者与背景

> 作者 Cheng Lou（@chenglou）：前 React 核心团队成员，ReasonML（现 Melange）联合创建者，现任 Midjourney 前端工程师。Pretext 在 Midjourney 内部验证后开源。开发过程本身也比较有意思：给 Claude Code / Codex 等 AI 编程助手提供浏览器渲染基准，让 AI 在不同容器宽度下反复测试优化，历时数周。

## 附注：官方演示 / 社区案例

1. Accordion 展开折叠动画、Editorial Engine、障碍物流动排版、Masonry、Knuth-Plass 段落排版对比、富文本混排、ASCII 粒子艺术、紧凑气泡。
2. 社区案例：tldraw 集成、Pretext Breaker 打砖块游戏、水波纹文字、物理课本胡克定律实时重排等。
3. 在线 Playground：[pretextjs.dev/playground](https://pretextjs.dev/playground)
