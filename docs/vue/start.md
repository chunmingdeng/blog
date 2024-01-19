# vue的一些知识点

## ref attribute
> `ref`如果作用于普通元素，那引用的则是元素DOM本身，如果用于组件，引用将是该组件的实例；

例如：
```js
// vue3 中
// ======template
<p ref="testRef">test</p>
// ======script
const testRef = ref();
console.log(testRef.value)
// outpt
DOM本身

// ======template
<el-button ref="testRef">test</el-button>
// ======script
const testRef = ref();
console.log(testRef.value)
// outpt
proxy的代理对象，是子组件的实例，想访问子组件的DOM对象，需要通过`testRef.value.ref`访问
```

## 将对象作为props传递给子组件
> 如果父组件将一个数据对象作为props传递给子组件，那么子组件其实接收到的是这个对象的引用，而不是这个对象的拷贝