# base.md

## playwright

### 前置准备
- node 20+
- `npm install @playwright/cli@latest`
    - `playwright-cli install --skills`: 会安装skill告诉ai怎么用playwright
- `npm install @playwright/test@latest`

### 操作用户已经（手动）打开的浏览器
- chrome url 输入： `chrome://inspect/#remote-debugging`，勾上；
- Playwright 自动发现并连接到当前正在运行的 Chrome 实例:`playwright-cli attach --cdp=chrome`
- 查看当前所有的tabs：`playwright-cli tab-list -s=chrome`
- 选择index∈[0, n - 1]的tab：`playwright-cli tab-select 3 -s=chrome`
- 截图：`playwright-cli screenshot -s=chrome`