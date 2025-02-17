# npm
---

## 查找包
```sh
# 查看rollup包的信息
npm info rollup
# 查看rollup包的所有版本
npm view rollup versions
# 查看rollup的最新版本
npm view rollup version
```

## 构建属于自己的包 rollup+ts
::: tabs
@tab 初始化
```sh
npm init -y
# rollup-plugin-terser这个包必须装，不然无法转换 Rollup plugin to minify generated es bundle.
npm install rollup rollup-plugin-terser rollup-plugin-typescript2
```
@tab tsconfig.json配置
```json
{
    "compilerOptions": {
      "moduleResolution": "node",
      "target": "es5",
      "module":"es2015",
      "lib": ["es2015", "es2016", "es2017", "dom"],
      "strict": true,
      "declaration": true,
      "allowSyntheticDefaultImports": true,
      "experimentalDecorators": true,
      "emitDecoratorMetadata": true,
      "declarationDir": "dist/types",
      "outDir": "lib",
      "typeRoots": [
        "node_modules/@types"
      ]
    },
    "include": [
      "src"
    ]
  }
```

@tab rollup.config.js配置
```js
import typescript from "rollup-plugin-typescript2"
import { terser } from "rollup-plugin-terser"

export default {
    input: './src/index.ts',
    output: [
        {
            file: './dist/bundle.js',
            name: 'pa1',
            format: 'umd',
            plugins: [terser()]
        }
    ],
    plugins: [typescript()]
}
```
:::