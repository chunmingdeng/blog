## jsoneditor
> 这是一个npm插件，可以用来支持json的展示，编辑，相对底层，可以针对它做高层次的封装

[homePage](https://github.com/josdejong/jsoneditor)

###### 1.1API

- instance.set(json-data)    \# 设置数据
- Instance.get()    \# 获取数据
- instance.setText(text)   \#
- instance.updateText(text)   \#updateText，更新json

###### 1.2config options

```javascript
{
	mode: 'view', //当前的模式，支持'code', 'form', 'text', 'tree', 'view', 'preview'
	modes: [], //提供切换的模式列表，支持'code', 'form', 'text', 'tree', 'view', 'preview'
	onModeChange: function(newMode, oldMode) {}, //mode切换的callback
	onEditable: function(node) {}, //编辑的时候触发函数，return false会禁止编辑
  //	node会是以下形式的对象，
  //  In modes code and text, node is empty: no path, field, or value，利用这个特性可以做只展示的json
  //   {
  //     field: 'FIELD',
  //     value: 'VALUE',
  //     path: ['PATH', 'TO', 'NODE']
  //   }
  autocomplete: { //可以用来最autocomplete，关键字包含的都可以提示
    getOptions: function () {
      return ['apple', 'cranberry', 'raspberry', 'pie', 'mango', 'mandarine', 'melon', 'appleton'];
    }
  },
  onTextSelectionChange: function(start, end, text) {}, //文本选择变化的callback
  onSelectionChange: function(start, end) {}, //选择变化的callback，这个貌似只有在mode：tree时触发
  onChangeText: function(jsonString) {}, //json文本被编辑的时候触发
  onEvent: function(node, event) {}, //任何一个事件发生都会触发这个函数
  onValidate: function(json) {}, //任何文本修改都会触发校验
  
}
```

## monaco-editor
#### 快速入门
```js
import * as monaco from 'monaco-editor'
// monaco是利用webworker来提升处理文本的速度的，所以要使用，需要引用对应的worker
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

// 获取当前editor支持的语言列表（88种）
monaco.languages.getLanguages()

// 创建编辑器
// 创建对应的格式文本之前，先要将对应的文本处理worker先挂载到全局window上
self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker();
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker();
    }
    return new editorWorker();
  },
};
// 调用创建编辑器方法
const editorIns = monaco.editor.create(document.getElementById('editor'), {value: 'var a=100', language: 'javascript'});

// 获取编辑器的内容
editorIns.getValue();
```