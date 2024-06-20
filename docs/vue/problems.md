# problems
---

## 1.ctrl|command点击`@`开头的路径无法实现快速跳转的问题
```json
{
    "compilerOptions": {
        "target": "ES6",
        "jsx": "react", // 没错 还是照抄 vue里边也写这个
        "baseUrl": "./",
        "paths": {
            "components/*": ["src/components/*"],
            "assets/*": ["src/assets/*"],
            "@/*": ["src/*"]  // 注意 vite这边是/@/而不是 @/
        }
    },
    "exclude": ["node_modules", "dist"],
    "include": ["src/**/*"]
}
```
:::info
在根目录下新建`jsconfig.json`文件，这个文件是给vscode解析用的，所以新建并填充内容后，要重启vscode
:::