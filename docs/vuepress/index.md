# vuepress
[保姆级配置教程](https://blog.csdn.net/passwordgloo/article/details/134687291)<br>
[官网地址](https://v2.vuepress.vuejs.org/zh/)<br>
[VuePress中文网](https://www.vuepress.cn/guide/directory-structure.html#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)<br>

## introduction

VuePress 由两部分组成：第一部分是一个极简静态网站生成器，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

## 项目的目录结构


> .vuepress 文件夹需要创建在 docs 文件夹之下

> .vuepress\>config.js<br>

```js
module.exports = {
    themeConfig: {
        // 配置页面顶部的导航，位于搜索栏的右侧
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'English', link: '/language/english' },
                ],
            },
            { text: 'External', link: 'https://www.baidu.com' },
        ],
        sidebarDepth: 2, // 配置页面左侧的导航栏，会根据h标签来生成，数字定义了根据h*来生成；
        sidebar: [
            {
                title: 'electron', // 目录名称
                collapsable: true, // 是否折叠
                children: ['/electron/'], // 指定生成导航的文件
            },
            {
                title: 'vuepress',
                collapsable: true,
                children: ['/vuepress/'],
            },
        ],
    },
};
```

## 插件（针对 v2.\*）

### 搜索

-   `vuepress-plugin-search-pro` 

```js
// terminal run
pnpm add -D vuepress-plugin-search-pro
// .vuepress/config.ts
//写在config.ts开头引入插件
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default {
    plugins: [
        searchProPlugin({}),
    ],
}


```

### 主题

#### 覆盖默认主题
- 新建`.vuepress/styles/palette.scss`文件

#### 
