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
                text: '3D',
                collapsible: true,
                children: [
                    {
                        text: 'webgl',
                        children: ['/3D/webgl/base'],
                    },
                    {
                        text: 'threejs',
                        children: ['/3D/threejs/base'],
                    },
                ],
            },
            {
                text: 'angular',
                collapsible: true,
                children: [
                    '/angular/base',
                    '/angular/component-lib',
                ],
            },
            {
                text: 'browser',
                collapsible: true,
                children: [
                    '/browser/base',
                    '/browser/chrome',
                ],
            },
            {
                text: 'css',
                collapsible: true,
                children: ['/css/base', '/css/tailwind'],
            },
            {
                text: 'html',
                collapsible: true,
                children: ['/html/svg'],
            },
            {
                text: 'd3',
                collapsible: true,
                children: ['/d3/base'],
            },
            {
                text: 'DataBase',
                collapsible: true,
                children: [
                    {
                        text: 'mongodb',
                        link: '/DataBase/mongodb',
                    },
                ],
            },
            {
                text: 'es6',
                collapsible: true,
                children: [
                    { text: 'Object', link: '/es6/object' },
                ],
            },
            {
                text: 'Echarts',
                collapsible: true,
                children: [
                    { text: 'base', link: '/echarts/base' },
                    {
                        text: 'options',
                        link: '/echarts/options',
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
                text: 'gpgpu',
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
                text: 'jsPlugin',
                collapsible: true,
                children: [
                    {
                        text: '文本编辑器',
                        link: '/jsPlugin/editor',
                    },
                    {
                        text: 'jsPlumb',
                        link: '/jsPlugin/jsPlumb',
                    },
                    {
                        text: 'pixijs',
                        children: [
                            '/jsPlugin/pixijs/start',
                            '/jsPlugin/pixijs/methods',
                            '/jsPlugin/pixijs/pixijs',
                        ],
                    },
                ],
            },
            {
                text: 'js系列',
                collapsible: true,
                children: [
                    {
                        text: 'base',
                        link: '/jsSeries/jsbase',
                    },
                    {
                        text: '专业名词',
                        link: '/jsSeries/professionalWords',
                    },
                    {
                        text: 'TypeScript',
                        link: '/jsSeries/ts',
                    },
                    {
                        text: '设计模式',
                        link: '/jsSeries/jsDesignMode',
                    },
                    {
                        text: '通用函数',
                        link: '/jsSeries/usualFunction',
                    },
                    {
                        text: 'js和浏览器',
                        link: '/jsSeries/js&browser',
                    },
                    {
                        text: '发布者/订阅者',
                        link: '/jsSeries/p&s',
                    },
                    {
                        text: '撤销/重做',
                        link: '/jsSeries/undo&redo',
                    },
                    {
                        text: '正则',
                        children: [
                            '/jsSeries/reg/base',
                            '/jsSeries/reg/utils',
                        ],
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
                text: 'problems',
                collapsible: true,
                children: [
                    {
                        text: 'vscode',
                        link: '/problems/vscode',
                    },
                ],
            },
            {
                text: 'plugins',
                collapsible: true,
                children: [
                    {
                        text: '滑动校验',
                        link: '/plugins/slideVerify',
                    },
                ],
            },
            {
                text: 'shortcut',
                collapsible: true,
                children: [
                    {
                        text: '快捷键',
                        link: '/shortcut/base.md',
                    },
                ],
            },
            {
                text: 'terminal',
                collapsible: true,
                children: [
                    {
                        text: 'mac',
                        link: '/terminal/macos',
                    },
                    {
                        text: 'windows',
                        link: '/terminal/windows',
                    },
                    { text: 'pm2', link: '/terminal/pm2' },
                    { text: 'vim', link: '/terminal/vim' },
                ],
            },
            {
                text: 'tools',
                collapsible: true,
                children: [],
            },
            {
                text: 'vuepress',
                collapsible: true,
                children: ['/vuepress/'],
            },
            {
                text: 'vue',
                collapsible: true,
                children: [
                    { text: 'base', link: '/vue/start' },
                    { text: 'cli', link: '/vue/vuecli.md' },
                    {
                        text: 'plugins',
                        link: '/vue/plugins.md',
                    },
                    {
                        text: 'fileupload',
                        link: '/vue/fileUpload.md',
                    },
                    {
                        text: '一款基于vue的流程设计器',
                        link: '/vue/VFD.md',
                    },
                    {
                        text: 'vueRouter',
                        link: '/vue/vue-router.md',
                    },
                    {
                        text: 'problems',
                        link: '/vue/problems.md',
                    },
                ],
            },
            {
                text: 'trash',
                collapsible: true,
                children: ['/trash/'],
            },
            {
                text: 'webpack',
                collapsible: true,
                children: ['/webpack/package'],
            },
            {
                text: '代码转译',
                collapsible: true,
                children: [
                    '/codeTransform/base',
                    '/codeTransform/babel',
                    '/codeTransform/esbuild',
                ],
            },
            {
                text: '电子书籍/文档',
                collapsible: true,
                children: ['/booksOrDocuments/base'],
            },
            {
                text: '代码规范',
                collapsible: true,
                children: [
                    '/programStyle/eslint',
                    '/programStyle/rules',
                    '/programStyle/mock',
                    '/programStyle/common',
                ],
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
                text: '认证中心',
                collapsible: true,
                children: ['/authCenter/base'],
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
            {
                text: '工具软件',
                collapsible: true,
                children: [
                    '/toolSofts/vm',
                    '/toolSofts/jkins',
                ],
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
    // plugins: [pwaPlugin({
    //     manifest:  {
    //         "name": "D's Blog",
    //         "short_name": "HackerWeb",
    //         "start_url": ".",
    //         "display": "standalone",
    //         "background_color": "#fff",
    //         "description": "A simply readable Hacker News app.",
    //         "icons": [
    //           {
    //             "src": "/blog/favicon.png",
    //             "sizes": "48x48",
    //             "type": "image/png"
    //           }
    //         ]
    //     }
    // })],
});
