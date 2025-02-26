# 常用Reg
---

1. 快速实现数字千分位
    ```js
    '123456789'.replace(/\B(?=((\d{3})*)(?!\d))/g, ',')
    '123456789'.replace(/\B(?=((\d{3})*)$/g, ',')
    ```
    涉及到的知识点：
    - \B:单词边界
    - ?=:非获取匹配，正向肯定查询
    - ?!:非获取匹配，正向否定查询

2. 电话号码
    ```js
    cosnt reg = /^1[3-9][0-9]{9}$/
    ```

3. 密码匹配
    ```js
    // 必须包含数字，小写，大写字母（=== 不是单独一种或着两种混合）
    const reg = /^(?![0-9a-z]+$)(?![0-9A-Z]+$)(?![a-zA-Z]+$)/
    // 至少两项
    const reg = /^(?![0-9]+$)(?![A-Z]+$)(?![a-z]+$)/
    ```

4. 颜色相关
    - 将颜色转换为匹配的颜色正则（#16|rgba|rgb）
    ```ts
    export function getVariablesReg(colors: string[]) {
        return new RegExp(
            colors.map(i => `(${i
                                .replace(/\s/g, ' ?')
                                .replace(/\(/g, '\\(')
                                .replace(/\)/g, '\\)')
                                .replace(/0?\./, '0?\\.')
                                })`).join('|')
        )
    }
    ```

    - 将颜色正则和基础正则组合，合并成css正则
    ```ts
    function combineReg(decorator = '', joinString = '', ...args) {
        const regString = args.map(e => {
            const strn = e.toString();
            return `(${str.slice(1, str.length - 1)})`
        }).join(joinString)
        return new RegExp(regString, decorator);
    }

    const CSS_REG = /[^}]*\{[^{]*\}/g;
    const RULE_REG = /(\w+-)*\w+:/;
    const CSS_VALUE_REG = /(\s?[a-z0-9]+\s)*/;
    const SAFE_EMPTY_REG = /\s?/;
    const IMPORTANT_SAFE_REG = /(!important)?/;
    const CSS_LOADER_EXPORT = /___CSS_LOADER_EXPORT___.push.*\)/g;

    combineReg('g', '', RULE_REG, SAFE_EMPTY_REG, CSS_VALUE_REG, getVariablesReg(['#666666']), SAFE_EMPTY_REG, IMPORTANT_SAFE_REG);
    // example output: /((\w+-)*\w+:)(\s?)((\s?[a-z0-9]+\s)*)((#666666))(\s?)((!important)?)/g 可以匹配 color: #666666; background-color: #666666等

    ```