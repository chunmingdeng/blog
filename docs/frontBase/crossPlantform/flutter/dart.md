# dart

## 函数

### 命名参数
创建带命名参数的函数
```js
// bold、hidden 是参数名称，bool是参数类型
void enableFlags({bool? bold, bool? hidden}) {...}
enableFlags(bold: true, hidden: false);

// 圆括号中的参数（如 this.songList, this.index）是位置参数，必须按顺序传递，并且不能省略。
// 花括号中的参数（如 {super.key, this.onItemTap}）是命名参数，可以按名称传递，顺序不固定，且可以省略。
// 构造函数
const SongItemText(this.songList, this.index, {super.key, this.onItemTap});
// 调用构造函数
SongItemText(songs, index, onItemTap: () = {})
```

## 类
> 和JAVA一样，dart中可以使用和class名称相同的函数作为其构造函数

### 构造函数
- 默认构造函数
- 命名构造函数
```ts
class Point {
  double x, y;
  // 命名构造函数，ClassName.identifier
  Point.alongXAxis(double x);
}
```
- 常量构造函数
- 工厂构造函数
- 重定向构造函数
```ts
class Point {
  double x, y;
  // 主构造函数
  Point(this.x, this.y);
  // 重定向构造函数，做了参数包装，最终指向主构造函数
  Point.alongXAxis(double x) : this(x, 0);
}
```