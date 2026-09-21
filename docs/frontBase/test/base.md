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
1. 项目根目录创建tests文件夹，后续所有测试配置都在这下面
    ```txt
    tests
    |____fixtures.ts
    |____tax-reduction.spec.ts
    |____property-tax-reduction.spec.ts
    |____.playwright-cli
    |____tsconfig.json
    |____playwright.config.ts
    |____connect.spec.ts
    ```

:::tabs
@tab 项目级安装playwright
```shell
npm install @playwright/test
```
@tab 自定义配置 /tests/fixtures.ts
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
@tab 基础配置 /tests/playwright.config.ts
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

import { defineConfig } from '@playwright/test';

// 从 fixtures.ts 导入自定义 test 和 expect
export { test, expect } from './fixtures';

export default defineConfig({
  // 测试目录（相对于配置文件）
  testDir: './',
  
  // 测试文件匹配模式
  testMatch: '**/*.spec.ts',
  
  // 全局超时时间（30秒）
  timeout: 30000,
  
  // expect超时时间（5秒）
  expect: {
    timeout: 5000,
  },
  
  // 顺序执行（不并行）
  fullyParallel: false,
  
  // 失败后不重试
  retries: 0,
  
  // 并行测试数（单个）
  workers: 1,
  
  // 报告器
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: '../playwright-report' }],
  ],
  
  // 全局配置
  use: {
    // 不使用baseURL（因为fixtures中已通过WebSocket连接）
    // baseURL: 'https://localdfat.yzf.net:4303',
    
    // 失败时截图（已在fixtures中实现）
    screenshot: 'off',
    
    // 跟踪（可选）
    trace: 'off',
    
    // 视频（可选）
    video: 'off',
    
    // 忽略HTTPS错误
    ignoreHTTPSErrors: true,
    
    // 操作超时
    actionTimeout: 10000,
    
    // 导航超时
    navigationTimeout: 30000,
  },
  
  // 项目配置
  projects: [
    {
      name: 'chromium',
      use: {
        // 使用桌面Chrome配置
        ...{
          viewport: { width: 1440, height: 900 },
          userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
      },
    },
  ],
});

```

@tab tsconfig.json
```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "types": ["playwright/test"]
  },
  "include": ["./**/*.spec.ts", "./fixtures.ts"]
}

```

@tab 启动文件(案例)
```ts
// @ts-nocheck
import { test, expect } from './fixtures';

test.describe('房产税从价减免信息', () => {
  test.beforeEach(async ({ page }) => {
    // 导航到房产税源信息页面
    await page.goto('https://localdfat.yzf.net:4303/vgr/taxData/realEstate/propertyTax');
    // 等待页面加载完成
    await page.waitForLoadState('networkidle');
  });

  test('2.1 页面加载验证', async ({ page }) => {
    // 验证页面URL正确
    await expect(page).toHaveURL(/realEstate\/propertyTax/);
    // 验证页面包含房产税源信息
    await expect(page.locator('text=房产税源信息')).toBeVisible();
  });

  test('2.2 打开编辑弹窗并滚动到减免税信息', async ({ page }) => {
    // 点击第一条记录的编辑按钮
    const editLinks = page.locator('a:has-text("编辑")');
    await editLinks.first().click();
    
    // 等待编辑弹窗打开
    await page.waitForSelector('.ant-drawer-body');
    
    // 滚动到减免税信息部分
    const drawerBody = page.locator('.ant-drawer-body').last();
    await drawerBody.evaluate((el) => {
      el.scrollTop = el.scrollHeight;
    });
    
    // 验证减免税信息标题存在
    await expect(page.locator('h4:has-text("减免税信息")')).toBeVisible();
  });

  test('2.3 减免性质代码和项目名称下拉选项验证', async ({ page }) => {
    // 点击第一条记录的编辑按钮
    const editLinks = page.locator('a:has-text("编辑")');
    await editLinks.first().click();
    
    // 等待编辑弹窗打开
    await page.waitForSelector('.ant-drawer-body');
    
    // 滚动到减免税信息部分
    const drawerBody = page.locator('.ant-drawer-body').last();
    await drawerBody.evaluate((el) => {
      el.scrollTop = el.scrollHeight;
    });
    
    // 点击新增按钮
    const addBtn = page.locator('yzf-property-tax-reduction-price').locator('button:has-text("新增")');
    await addBtn.click();
    
    // 等待新增弹窗打开
    await page.waitForSelector('.ant-modal-body');
    
    // 点击减免性质代码和项目名称下拉框
    const selectControl = page.locator('.ant-modal-body').locator('nz-select[formcontrolname="reductionProjectCode"]');
    await selectControl.click();
    
    // 验证下拉选项存在
    await expect(page.locator('.ant-select-dropdown')).toBeVisible();
    
    // 关闭弹窗
    await page.locator('.ant-modal-footer').locator('button:has-text("取消")').click();
  });

  test('2.4 新增减免税信息-取消操作', async ({ page }) => {
    // 点击第一条记录的编辑按钮
    const editLinks = page.locator('a:has-text("编辑")');
    await editLinks.first().click();
    
    // 等待编辑弹窗打开
    await page.waitForSelector('.ant-drawer-body');
    
    // 滚动到减免税信息部分
    const drawerBody = page.locator('.ant-drawer-body').last();
    await drawerBody.evaluate((el) => {
      el.scrollTop = el.scrollHeight;
    });
    
    // 点击新增按钮
    const addBtn = page.locator('yzf-property-tax-reduction-price').locator('button:has-text("新增")');
    await addBtn.click();
    
    // 等待新增弹窗打开
    await page.waitForSelector('.ant-modal-body');
    
    // 验证弹窗标题
    await expect(page.locator('.ant-modal-title:has-text("减免税信息")')).toBeVisible();
    
    // 点击取消按钮
    const cancelBtn = page.locator('.ant-modal-footer').locator('button:has-text("取消")');
    await cancelBtn.click();
    
    // 验证弹窗关闭
    await expect(page.locator('.ant-modal-body')).not.toBeVisible();
  });

  test('2.5 表格列验证', async ({ page }) => {
    // 点击第一条记录的编辑按钮
    const editLinks = page.locator('a:has-text("编辑")');
    await editLinks.first().click();
    
    // 等待编辑弹窗打开
    await page.waitForSelector('.ant-drawer-body');
    
    // 滚动到减免税信息部分
    const drawerBody = page.locator('.ant-drawer-body').last();
    await drawerBody.evaluate((el) => {
      el.scrollTop = el.scrollHeight;
    });
    
    // 验证表格列头
    const table = page.locator('yzf-property-tax-reduction-price').locator('table');
    await expect(table.locator('th:has-text("减免性质代码和项目名称")')).toBeVisible();
    await expect(table.locator('th:has-text("减免房产原值")')).toBeVisible();
    await expect(table.locator('th:has-text("月减免税金额")')).toBeVisible();
    await expect(table.locator('th:has-text("减免月份")')).toBeVisible();
  });

  test('2.6 表单字段验证', async ({ page }) => {
    // 点击第一条记录的编辑按钮
    const editLinks = page.locator('a:has-text("编辑")');
    await editLinks.first().click();
    
    // 等待编辑弹窗打开
    await page.waitForSelector('.ant-drawer-body');
    
    // 滚动到减免税信息部分
    const drawerBody = page.locator('.ant-drawer-body').last();
    await drawerBody.evaluate((el) => {
      el.scrollTop = el.scrollHeight;
    });
    
    // 点击新增按钮
    const addBtn = page.locator('yzf-property-tax-reduction-price').locator('button:has-text("新增")');
    await addBtn.click();
    
    // 等待新增弹窗打开
    await page.waitForSelector('.ant-modal-body');
    
    // 验证表单字段
    await expect(page.locator('.ant-modal-body').locator('text=减免性质代码和项目名称')).toBeVisible();
    await expect(page.locator('.ant-modal-body').locator('text=减免房产原值')).toBeVisible();
    await expect(page.locator('.ant-modal-body').locator('text=月减免税金额')).toBeVisible();
    await expect(page.locator('.ant-modal-body').locator('text=减免月份')).toBeVisible();
    
    // 关闭弹窗
    await page.locator('.ant-modal-footer').locator('button:has-text("取消")').click();
  });

  test('2.7 必填字段校验', async ({ page }) => {
    // 点击第一条记录的编辑按钮
    const editLinks = page.locator('a:has-text("编辑")');
    await editLinks.first().click();
    
    // 等待编辑弹窗打开
    await page.waitForSelector('.ant-drawer-body');
    
    // 滚动到减免税信息部分
    const drawerBody = page.locator('.ant-drawer-body').last();
    await drawerBody.evaluate((el) => {
      el.scrollTop = el.scrollHeight;
    });
    
    // 点击新增按钮
    const addBtn = page.locator('yzf-property-tax-reduction-price').locator('button:has-text("新增")');
    await addBtn.click();
    
    // 等待新增弹窗打开
    await page.waitForSelector('.ant-modal-body');
    
    // 直接点击确定按钮
    const confirmBtn = page.locator('.ant-modal-footer').locator('button:has-text("确定")');
    await confirmBtn.click();
    
    // 验证表单校验错误提示
    await expect(page.locator('.ant-modal-body').locator('.ant-form-item-explain-error')).toBeVisible();
    
    // 关闭弹窗
    await page.locator('.ant-modal-footer').locator('button:has-text("取消")').click();
  });
});
```
