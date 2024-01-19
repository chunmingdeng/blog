# 指令

> `vue`自定义指令需要了解基础内容
> 1. 指令的入参
> - `el`：指令绑定的元素，可用于直接操作DOM
> - `binding`：vue包装的一个对象，包含以下树形
>   - `value`: 指令的值。如v-test='1 + 1',值是2。普通定义的可以是一个函数。
>   - `oldValue`： 之前的值，仅在 `beforeUpdate` 和 `updated` 中可用。无论值是否更改，它都可用。
>   - `arg`：传递给指令的参数 (如果有的话)。例如在 `v-my-directive:foo` 中，参数是 "foo"。
>   - `modifier`s：一个包含修饰符的对象 (如果有的话)。例如在 v-my-directive. foo.bar 中，修饰符对象是 { foo: true, bar: true }。
>   - `instance`：使用该指令的组件实例。
>   - `dir`：指令的定义对象。
> - `vnode`：代表绑定元素的底层 VNode。
> - `prevNode`：之前的渲染中代表指令所绑定元素的 VNode。仅在 beforeUpdate 和 updated 钩子中可用。
---

#### v-clickoutside
> 基本思路，判断点击的元素是否是绑定元素的子元素或者自身，如果是，则是内部点击，如果不是，则是外部点击
```js
import { on } from '/@/utils/domUtils';
import { isServer } from '/@/utils/is';

let nodeList = new Map();
let clickStart = null;

if(!isServer) {
  on(document, 'mousedown', (e) => (startClick = e));
  on(document, 'mouseup', (e) => {
    for (const { documentHandler } of nodeList.values()) {
      documentHandler(e, startClick);
    }
  });
}

const createDocumentHandler = (el, binding) => {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else {
    excludes.push(binding.arg);
  }
  return function(mouseupEvent, mousedownEvent) {
    const mouseUpTarget = mouseupEvent.target;
    const mouseDownTarget = mousedownEvent.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    // if is the children of HtmlElement the directive binded
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    // if is self
    const isSelf = el === mouseUpTarget;

    if(
      isBound ||
      isTargetExists ||
      isContainedByEl ||
      isContainedByEl ||
      isSelf
    ) {
      return;
    }
    binding.value()
  }
}

const clickOutSide = {
  beforeMount(el, binding) {
    nodeList.set(el, {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    })
  },
  updated(el, binding) {
    nodeList.set(el, {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    })
  },
  unmounted(el, binding) {
    nodeList.delete(el)
  },
}

// usage
import clickOutside from '*'
export default defineComponent({
  directives: {
    clickOutside,
  },
})
```