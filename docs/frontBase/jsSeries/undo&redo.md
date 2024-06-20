# undo&redo
[参考地址](https://blog.csdn.net/qq_42213965/article/details/124540470)
## 设计
```js
/**
 * @description 管理类
*/
export class CommandManager {
  undoStack = [];
  redoStack = [];
  undoCount = 20;
  changed = null;

  exec(cmd) {
    cmd.exec();
    this.undoStack.push(cmd);
    // 当操作超过最大记录长度，删除第一个
    if (this.undoCount != -1 && this.undoCount < this.undoStack.length + 1) {
      this.undoStack.slice(0, 1);
    }
    this.redoStack = [];
    this.changed && this.changed();
  }

  undo() {
    if (this.undoStack.length < 1) return;
    const cmd = this.undoStack.pop();
    this.redoStack.push(cmd);
    cmd.undo();
    this.changed && this.changed();
  }

  redo() {
    if (this.redoStack.length < 1) return;
    const cmd = this.redoStack.pop();
    this.undoStack.push(cmd);
    cmd.redo();
    this.changed && this.changed();
  }
}
/**
 * @description 操作命令的基类，所有操作要继承这个类,然后实现具体的方法
*/
class BaseCmd {
  options = null;
  constructor(opt) {
    this.options = opt;
    this.id = Date.now();
  }
  exec() {
    console.log('未赋予baseCmd exec 方法，执行默认打印操作')
  }
  undo() {
    console.log('未赋予baseCmd undo 方法，执行默认打印操作');
  }
  redo() {
    console.log('未赋予baseCmd redo 方法，执行默认打印操作');
  }
}
```

``` html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
  <button onclick='changeColor()'>changeColor</button>
  <button onclick="undo()">undo</button>
  <button onclick="redo()">redo</button>
  <div style="height: 10px; width: 10px; display: inline-block" id="colorContainer"></div>
<body>
  <script>
     class CommandManager {
      undoStack = [];
      redoStack = [];
      undoCount = 20;
      changed = null;

      exec(cmd) {
        cmd.exec();
        this.undoStack.push(cmd);
        // 当操作超过最大记录长度，删除第一个
        if (this.undoCount != -1 && this.undoCount < this.undoStack.length + 1) {
          this.undoStack.slice(0, 1);
        }
        this.redoStack = [];
        this.changed && this.changed();
      }

      undo() {
        if (this.undoStack.length < 1) return;
        const cmd = this.undoStack.pop();
        this.redoStack.push(cmd);
        cmd.undo();
        this.changed && this.changed();
      }

      redo() {
        if (this.redoStack.length < 1) return;
        const cmd = this.redoStack.pop();
        this.undoStack.push(cmd);
        cmd.redo();
        this.changed && this.changed();
      }
    }

     class BaseCmd {
      options = null;
      constructor(opt) {
        this.options = opt;
        this.id = Date.now();
      }
      exec() {
        console.log('未赋予baseCmd exec 方法，执行默认打印操作')
      }
      undo() {
        console.log('未赋予baseCmd undo 方法，执行默认打印操作');
      }
      redo() {
        console.log('未赋予baseCmd redo 方法，执行默认打印操作');
      }
    }


    class ColorCmd extends BaseCmd {
      constructor(opt) {
        super();
      }
      exec() {
        this.options.el.style.background = this.options.new;
      }
      undo() {
        this.options.el.style.background = this.options.old;
      }
      redo() {
        this.options.el.style.background = this.options.new;
      }
    }
    const cmdManger = new CommandManager();

    const changeColor = () => {
      const el = document.getElementById('colorContainer');
      color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      
      const colorCmd = new ColorCmd({
        old: el.style.background,
        new:color,
        el: el
      });
      cmdManger.exec(colorCmd)
      console.log(el.style.background)
    }

    const undo = () => {
      cmdManger.undo();
      console.log(cmdManger.undoStack)
    }
    const redo = () => {
      cmdManger.redo();
      console.log(cmdManger.redoStack)
    }
  </script>
</body>

</html>
```