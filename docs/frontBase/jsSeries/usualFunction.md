# 常用函数
1. 判断两个节点之间的父子关系
> 利用contains方法或者compareDocumentPosition方法，contains方法是IE的，后来被有写浏览器也实现了（火狐没有实现），compareDocumentPosition方法是W3C规定的，现代浏览器基本都实现了
> webkit&&小于522的版本有contains方法，但是执行会有问题 
```js
function contains(refNode, otherNode) {
    if(typeof refNode.contains == 'function' && (!client.engine.webkit || client.engine.webkit >= 522)) {
        return refNode.contains(otherNode)
    }
    if(typeof refNode.compareDocumentPosition == 'function') {
        return !!(refNode.compareDocumentPosition(otherNode) & 16)
    }
    var node = otherNode.parentNode;
    do {
        if(refNode == node) {
            return true;
        } else {
            node = node.parentNode;
        }
    } while (node != null)
    return false;
}
```

2. 操作记录实现
```js
class operationRecords {
  store;
  index;
  constructor() {
    this.store = [];
    this.index = -1;
  }
  goahead() {
    if(this.index == (this.store.length - 1)) return;
    ++this.index;
    console.log(this.store[this.index])
  }
  goback() {
    if(this.index <= 0) return;
    --this.index;
    console.log(this.store[this.index])
  }
  /**
   * @description push a record
  */
  resolveRecord(data) {
    ++this.index;
    this.store.push(data)
  }
}

let records = new operationRecords();
records.resolveRecord({name: 'test'})
records.resolveRecord('happy new yaer')
```

## 树结构相关
- 遍历树结构
```js
// 利用栈stack的概念实现（后进先出）
// tree是一个树形结构
const traverseTree = (tree) => {
    let root = tree;
    let stack = [root];
    while(stack.length > 0) {
        let cNode = stack.pop()
        if(cNode.children && cNode.children.length > 0) {
            for(item of cNode.children) { // 这种遍历结合stack模式，会先遍历后边的内容
                stack.push(item);
            }
        }
    }
}
const traverseTree = (tree) => {
    let root = tree;
    let stack = [root];
    while(stack.length > 0) {
        let cNode = stack.pop()
        console.log(cNode.name)
        if(cNode.children && cNode.children.length > 0) {
            for(var i = cNode.children.length - 1; i >=0; i--) { // 这种遍历结合stack模式，会先遍历前边的内容
                stack.push(cNode.children[i]);
            }
        }
    }
}
```
- 获取树的深度信息
```js
const getTreeDepth = (tree) => {
    let depth = 0;
    let currentLevel = [];
    currentLevel.push(tree);
    while(currentLevel.length > 0) {
        depth++;
        let nextLevel = [];
        for(item of currentLevel) {
            if(item.children && item.children.length > 0) {
                nextLevel = nextLevel.concat(item.children)
            }
        }
        currentLevel = nextLevel;
    }
    return depth;
}
```