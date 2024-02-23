# svg

## 工具
- [png 2 svg 在线转换](https://png2svg.com/zh/)

## 知识点
- 定义公用的svg图形
```html
<svg style="position: absolute; width: 0; height: 0;" aria-hidden="true">
    <symbol id="eg1">
        <path d="......."></path>
    </symbol>
</svg>
```
- 使用公共的svg图形
```html
<!-- a, b等于要绘制出来的图形高度 -->
<!-- c, d, e, f 要绘制的区域，指绘制路径在没有缩放的情况下，完整的path范围 一般为 0 0 xMax yMax -->
<svg width='a' height='b' viewbox='c d e f'>
    <use xlink:href="eg1"></use>
</svg>
```