# sheetjs
[link](https://sheetjs.com/)
> 一个前端解析xlxs文件类型的工具
> 基于xlsx对象

## ES解析导入文件
```js
import * as xlsx from 'xlsx';
/**
 * @param file html原生file对象
 */
async function parseFile(file) {
    const workbook = xlsx.read(await file.arrayBuffer(), {type: 'buffer'});
    const sheetNames = workbook.SheetNames;
    const sheet01 = workbook.Sheets[sheetNames[0]];
    // sheet 数据转json对象
    // 这里sheet_to_json传递header参数，转出来的数据会包含表头，表头会对应xlsx对应的列，从第1列开始一一对应
    const json = xlsx.utils.sheet_to_json(sheet01, {header: ['ysgjzl', 'ysgjhp', 'qyd', 'ddd', 'yshwmc']})
    // 真实数据去除表头
    const result = json.slice(1);
}
```
