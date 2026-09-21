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


### 项目配置playwright
:::tabs
@tab 项目级安装playwright
@tab fixtures.ts 自定义配置
```ts
// fixtures.ts
// @ts-nocheck
import { test as base, expect, chromium, Browser } from '@playwright/test';

type MyFixtures = {
    browser: Browser;
};

export const test = base.extend<MyFixtures>({
    browser: async ({}, use) => {
        // const browser = await chromium.connectOverCDP('http://localhost:9222');
        const browser = await chromium.connectOverCDP('ws://127.0.0.1:9222/devtools/browser');
        await use(browser);
    },

    // context: async ({ browser }, use) => {
    //     // 复用默认上下文，带登录 cookie
    //     const context = browser.contexts()[0];
    //     await use(context);
    //     // 不 close
    // },

    // page: async ({ context }, use) => {
    //     // 关键：强制新建页面，不复用已有标签页
    //     const page = await context.newPage();
    //     await use(page);
    //     // 只关这个新开的页面，不影响你手动开的标签页
    //     await page.close();
    // }

    // 服用现有页面的部分信息
    context: async ({ browser }, use) => {
        // 方式 B：从你已打开的目标页里直接抓（更稳，不用手抄 token）
        const context_source = browser.contexts()[0];
        const targetPage = context_source.pages().find(p => p.url().includes('yzf.net'));
        const cookies = await context_source.cookies(targetPage.url());

        const context = await browser.newContext(); // 新建一个隔离 context、
        await context.addCookies(cookies); // 其实已经有，等于原样保留
        await use(context);
        // await context.close();
    },

    page: async ({ context }, use, testInfo) => {
        const page = await context.newPage();
        await use(page);
        // 只对新 page 截图，手动附加到报告
        await testInfo.attach('screenshot', {
            body: await page.screenshot(),
            contentType: 'image/png',
        });
        // 这一行很重要，不然会所有窗口都关闭，浏览器崩溃推出
        await page.close();
    }
});

export { expect };
```
@tab 基础配置
```ts
// playwright.config.ts
// @ts-nocheck
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './e2e',
    fullyParallel: false,
    forbidOnly: true,
    retries: 1,
    workers: 1,
    reporter: 'html',
    use: {
        baseURL: 'https://localdfat.yzf.net:4303',
        trace: 'on-first-retry',
        screenshot: 'off',
        video: 'on-first-retry',
        headless: false,
        ignoreHTTPSErrors: true
    },
    // projects: [
    //     {
    //         name: 'chromium',
    //         use: {
    //             ...devices['Desktop Chrome'],
    //             launchOptions: {
    //                 args: ['--ignore-certificate-errors']
    //             }
    //         }
    //     }
    // ]
});
```

@tab 启动文件
```ts
// ***.spec.ts
import {test } from  'fixtures.ts'
// .... 
```
