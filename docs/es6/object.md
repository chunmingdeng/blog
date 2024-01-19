# object

## Object.create [link](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
> 以某个对象作为原型创建一个新的对象，第二个参数可以直接定义当前对象的属性
```js
const a = Object.create({name:'daniel', age:22})
// a => {}
// 此时a是个空对象，但是第一个参数的所有属性都能在a的原型链上访问到
const b = Object.create({name:'daniel', age:22}, {name: {value: 'lilisi'}})
// b => {name: 'lilisi'}
// 第二个参数的是和Object.defineProperties()的第二个参数一样，直接定义当前对象的属性
```