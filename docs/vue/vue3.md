# VUE3使用总结

## 一、API使用
1. 访问组件的插槽和属性
```js
// <template> 中使用
<div v-if='$attrs.name'>{{ name }}</div>

// <script> 中使用
export default {
  setup(props, context) {
    // context is not reactive and can be destructured
    // attrs, slots（is non-reactive）
    context.attrs
    context.slots
    context.emit
    context.expose

  }
}
export default {
  setup(props, {attrs, slots, emit, expose}) {
    // ...
  }
}

// <script setup> 中使用
import { useSlots, useAttrs} from 'vue'

const $slots = useSlots();
const $attrs = useAttrs();
```
3. 访问组件的实例