import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
// import { searchProPlugin } from 'vuepress-plugin-search-pro';
import { hopeTheme } from 'vuepress-theme-hope';
import { pwaPlugin } from '@vuepress/plugin-pwa';

export default defineUserConfig({
    port: 6003,
    bundler: viteBundler({}),
    lang: 'zh-CN',
    title: 'dengchunming blog',
    shouldPrefetch: false,
    theme: hopeTheme({
        // pure: true,
        fullscreen: true,
        // encrypt: {
        //     config: {
        //         // 这会加密整个 guide 目录，并且两个密码都是可用的
        //         '/3D/': ['1234', '5678'],
        //     },
        // },
        contributors: false,
        plugins: {
            searchPro: {
                indexContent: true,
                autoSuggestions: false,
                searchDelay: 300,
                hotKeys: [{ key: 'k', meta: true }],
            },
            copyCode: {},
            mdEnhance: {
                // 添加选项卡支持
                tabs: true,
                demo: true,
                codetabs: true,
                imgSize: true,
                alert: true,
                hint: true,
                component: true,
            },
            pwa: {
                cacheHTML: true,
                maxSize: 1024 * 50, //50M
                manifest: {
                    'scope': '/blog/',
                    'name': "blog",
                    'start_url': '/blog/',
                    'display': 'standalone',
                    'icons': [
                        {
                            'src': 'pwa256.png',
                            'sizes': '256x256',
                            'type': 'image/png',
                        },
                    ],
                },
            },
        },
        navbar: [
            { text: '百度', link: 'https://www.baidu.com' },
        ],
        sidebar: [
            {
                text: 'work',
                collapsible: true,
                prefix: '/work',
                children: ['base']
            },
            {
                text: '3D',
                collapsible: true,
                prefix: '/3D',
                children: [
                    {
                        text: 'd3',
                        collapsible: true,
                        prefix: 'd3',
                        children: [
                            {
                                text: 'base',
                                link: 'base',
                                activeMatch: "/d3/base",
                            }
                        ],
                    },
                    {
                        text: 'webgl',
                        collapsible: true,
                        prefix: 'webgl',
                        children: [
                            {
                                text: 'base',
                                link: 'base',
                                activeMatch: "/webgl/base",
                            }
                        ],
                    },
                    {
                        text: 'threejs',
                        collapsible: true,
                        children: ['/3D/threejs/base'],
                    },
                ],
            },
            {
                text: '前端基础',
                prefix: 'frontBase',
                collapsible: true,
                children: [
                    {
                        text: 'js系列',
                        prefix: 'jsSeries',
                        collapsible: true,
                        children: [
                            {
                                text: 'base',
                                link: 'jsbase',
                            },
                            {
                                text: '专业名词',
                                link: 'professionalWords',
                            },
                            {
                                text: 'TypeScript',
                                link: 'ts',
                            },
                            {
                                text: '设计模式',
                                link: 'jsDesignMode',
                            },
                            {
                                text: '通用函数',
                                link: 'usualFunction',
                            },
                            {
                                text: 'js和浏览器',
                                link: 'js&browser',
                            },
                            {
                                text: '发布者/订阅者',
                                link: 'p&s',
                            },
                            {
                                text: '撤销/重做',
                                link: 'undo&redo',
                            },
                        ],
                    },
                    {
                        text: 'css',
                        prefix: 'css',
                        collapsible: true,
                        children: ['base', 'tailwind'],
                    },
                    {
                        text: '跨平台',
                        prefix: 'crossPlantform',
                        collapsible: true,
                        children: [
                            {
                                text: 'flutter',
                                prefix: 'flutter',
                                collapsible: true,
                                children: ['base', 'dart']
                            }
                        ],
                    },
                    {
                        text: 'html',
                        prefix: 'html',
                        collapsible: true,
                        children: ['svg'],
                    },
                    {
                        text: '正则',
                        prefix: 'reg',
                        collapsible: true,
                        children: [
                            'base',
                            'utils',
                        ],
                    },
                    {
                        text: 'angular',
                        prefix: 'angular',
                        collapsible: true,
                        children: [
                            'base',
                            'component-lib',
                        ],
                    },
                    {
                        text: 'vue',
                        prefix: 'vue',
                        collapsible: true,
                        children: [
                            { text: 'base', link: 'start' },
                            { text: 'cli', link: 'vuecli.md' },
                            {
                                text: 'plugins',
                                link: 'plugins.md',
                            },
                            {
                                text: 'fileupload',
                                link: 'fileUpload.md',
                            },
                            {
                                text: '一款基于vue的流程设计器',
                                link: 'VFD.md',
                            },
                            {
                                text: 'vueRouter',
                                link: 'vue-router.md',
                            },
                            {
                                text: 'problems',
                                link: 'problems.md',
                            },
                        ],
                    },
                    {
                        text: 'browser',
                        prefix: 'browser',
                        collapsible: true,
                        children: [
                            'base',
                            'chrome',
                        ],
                    },
                    {
                        text: 'es6',
                        prefix: 'es6',
                        collapsible: true,
                        children: ['object'],
                    },
                    {
                        text: 'webpack',
                        prefix: 'webpack',
                        collapsible: true,
                        children: ['package'],
                    },
                    {
                        text: 'babel',
                        prefix: 'babel',
                        collapsible: true,
                        children: ['base'],
                    },
                    {
                        text: 'IDE工具',
                        prefix: 'ide',
                        collapsible: true,
                        children: ['vscode'],
                    },
                    {
                        text: 'terminal',
                        prefix: 'terminal',
                        collapsible: true,
                        children: [
                            {
                                text: 'mac',
                                link: 'macos',
                            },
                            {
                                text: 'windows',
                                link: 'windows',
                            },
                            { text: 'pm2', link: 'pm2' },
                            { text: 'vim', link: 'vim' },
                        ],
                    },
                    {
                        text: '代码规范',
                        prefix: 'programStyle',
                        collapsible: true,
                        children: [
                            'eslint',
                            'rules',
                            'mock',
                            'common',
                        ],
                    },
                ]
            },
            {
                text: '硬件',
                collapsible: true,
                prefix: '/hardware',
                children: ['base', 'print']
            },
            {
                text: '数据库',
                collapsible: true,
                children: [
                    {
                        text: 'mongodb',
                        link: '/DataBase/mongodb',
                    },
                ],
            },
            {
                text: 'Electron',
                collapsible: true,
                children: [
                    {
                        text: 'base',
                        link: '/electron/base',
                    },
                ],
            },
            {
                text: 'GPGPU',
                collapsible: true,
                children: [
                    { text: 'base', link: '/gpgpu/base' },
                ],
            },
            {
                text: 'git',
                collapsible: true,
                children: [
                    { text: 'base', link: '/git/base' },
                    {
                        text: 'summary',
                        link: '/git/summary',
                    },
                    {
                        text: 'problems',
                        link: '/git/problems',
                    },
                ],
            },
            {
                text: 'js插件',
                prefix: 'jsPlugin',
                collapsible: true,
                children: [
                    {
                        text: 'Echarts',
                        prefix: 'echarts',
                        collapsible: true,
                        children: [
                            { text: 'base', link: 'base' },
                            {
                                text: 'options',
                                link: 'options',
                            },
                        ],
                    },
                    {
                        text: '文本编辑器',
                        link: 'editor',
                    },
                    {
                        text: 'jsPlumb',
                        link: 'jsPlumb',
                    },
                    {
                        text: 'pixijs',
                        prefix: 'pixijs',
                        collapsible: true,
                        children: [
                            'base',
                            'methods',
                            'pixijs',
                        ],
                    },
                    {
                        text: '滑动校验',
                        link: 'slideVerify',
                    },
                    {
                        text: 'sheetjs',
                        link: 'sheetjs',
                    },
                ],
            },
            {
                text: 'nginx',
                collapsible: true,
                children: [
                    { text: 'base', link: '/nginx/start' },
                    {
                        text: '不同os下nginx',
                        link: '/nginx/diffOs',
                    },
                ],
            },
            {
                text: 'nodejs',
                collapsible: true,
                children: [
                    { text: 'base', link: '/nodejs/base' },
                    {
                        text: 'express',
                        link: '/nodejs/express',
                    },
                    { text: 'koa', link: '/nodejs/koa' },
                    {
                        text: 'http module',
                        link: '/nodejs/http',
                    },
                ],
            },
            {
                text: 'OS（操作系统）',
                collapsible: true,
                children: [
                    {
                        text: 'base',
                        link: '/operatingSysten/base',
                    },
                    {
                        text: 'linux',
                        link: '/operatingSysten/linux',
                    },
                    {
                        text: 'ubuntu',
                        link: '/operatingSysten/ubuntu',
                    },
                    {
                        text: 'mac',
                        link: '/operatingSysten/mac',
                    },
                ],
            },
            {
                text: 'vuepress',
                collapsible: true,
                children: ['/vuepress/'],
            },
            {
                text: 'trash',
                collapsible: true,
                children: ['/trash/'],
            },
            {
                text: '电子书籍/文档',
                collapsible: true,
                children: ['/booksOrDocuments/base'],
            },
            {
                text: '函数式编程',
                collapsible: true,
                children: [
                    {
                        text: 'base',
                        link: '/functionProgram/base',
                    },
                ],
            },
            {
                text: '工具函数',
                collapsible: true,
                children: ['/utilsFunction/base'],
            },
            {
                text: '工具网址收集',
                collapsible: true,
                children: ['/utilsWebAddress/base'],
            },
            {
                text: '日常工具',
                collapsible: true,
                children: [
                    '/dailyTools/base',
                    '/dailyTools/xmind',
                    '/dailyTools/jenkins',
                    '/dailyTools/vm',
                ],
            },
            {
                text: '数学',
                collapsible: true,
                children: ['/math/base'],
            },
            {
                text: '项目搭建',
                collapsible: true,
                children: ['/project/vvap'],
            },
            {
                text: '前端模块化',
                collapsible: true,
                children: ['/frontModules/base'],
            },
            {
                text: '每日一个工具包',
                collapsible: true,
                children: ['/toolPackages/base'],
            },
        ],
    }),
    base: '/blog/',
    // href需要带上base
    head: [
        [
            'link',
            { rel: 'icon', href: '/blog/favicon.ico' },
        ],
    ],
});
