# AGENTS.md

个人文档收录站（VuePress 2 + vuepress-theme-hope），不是应用代码库。内容是中文技术笔记，按主题目录「收录」知识/库/工具。

## 环境与命令

- **Node 20**（README 明确要求）。本机 nvm 默认常是 16，跑之前先 `nvm use 20`，否则 vuepress 起不来。
- 包管理用 **pnpm**（有 `pnpm-lock.yaml`；`build.sh` 里写的 npm install 是历史遗留）。
- `pnpm start` → `vuepress dev docs`，本地端口 **6003**。
- `pnpm build` → `vuepress build docs`。
- 没有测试、没有 lint、没有 CI（`.github/workflows` 是空的）。

## 关键约定

- **新增/删除 md 页面必须同步改侧边栏**：`docs/.vuepress/config.ts` 里的 `sidebar` 是手工枚举的，漏改页面不会出现在站点导航里。加库笔记时同时更新对应总览（如 `docs/jsPlugin/base.md`）。
- **站点 `base: '/blog/'`**：markdown 里的绝对链接要带 `/blog/` 前缀（config 中有注释 `href需要带上base`）。
- 内容目录语义：`jsPlugin/` JS 插件库笔记，`toolPackages/` 工具包，`utilsFunction/` 工具函数，`utilsWebAddress/` 网址收集，`frontBase/` 前端基础，其余按主题名分。库收录格式参考 `docs/jsPlugin/sheetjs.md`（标题 + 官网链接 + 引言定位 + 用法代码）。
- markdown 已开：katex 数学、mermaid、codeTabs、alert、hint、shiki 高亮（`material-theme-lighter`）。
- PWA 配置在 theme plugins 里（scope `/blog/`），改部署路径时要一起看。

## 构建到本地（发布）

- 构建本地文档用 `sh build.sh`（在仓库根目录执行，先 `nvm use 20`）。
- 脚本流程：`npm install && npm run build`，再把 `docs/.vuepress/dist/` 整个拷到 `/Users/chunmingdeng/program/html/blog`，最后删掉 dist。目标目录是本机静态站路径，不在 git 里。
- 脚本里 `npm install` 在 pnpm 项目上可能报 `Cannot read properties of null (reading 'matches')`，只要 `node_modules` 已存在就不会影响后续 `npm run build`，可忽略该报错继续。
- 构建成功标志：`success VuePress build completed`，且 `/Users/chunmingdeng/program/html/blog` 下出现对应页面（如 `jsPlugin/pretext.html`）。
