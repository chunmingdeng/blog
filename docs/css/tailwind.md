# tailwind

## 代码解读
```css
/* 消除padding&border对元素宽度的影响，支持直接border-width显示边框 */
*,::before,::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
}
```