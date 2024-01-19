# methods

## PIXI.Application
> [link](http://pixijs.download/release/docs/PIXI.Application.html)
> 创建pixi应用程序的类，这个类会自动创建render，ticker，rootContainer
- 创建实例
```js
const app = new PIXI.Application();
const canvas = app.view; //canvas element
const stage = app.stage; // root stage
const ticker = app.ticker; // requestAnimation的实例，接受一个callback function
const loader = app.loader; // pixi 的loader实例，可以用来load图片
```

## PIXI.DisplayObject
> 顶层对象，被各种子类继承实现
- methods
```js
disObj.addEventListener('click', () => {}) 
// or
disObj.addEventListener('click', { handlerEvent(){} })

disObj.removeEventListener(<type>, <linstener>, <options>)

disObj.toGlobal(<position>)
disObj.toLocal(<position>)
```

- events[link](http://pixijs.download/release/docs/PIXI.BitmapText.html#added)

## PIXI.Loader
> 加载器[link](http://pixijs.download/release/docs/PIXI.Loader.html)
- 创建实例
```js
// 两种方式获取loader的instance
const loader = PIXI.Loader.shared;
const loader = new PIXI.Loader();
```
- methods
```js
loader.add(<name>, <url>);
loader.pre(<middleware>); // middleware will execute *before* each resource loading
loader.use(<middleware>); //  middleware will execute *after* each resource loaded
loader.load((loader, resources) => {}); //  middleware will execute once when all resources have loaded
loader.onProgress.add(() => {}); // called once per loaded/errored file
loader.onError.add(() => {}); // called once per errored file
loader.onLoad.add(() => {}); // called once per loaded file
loader.onComplete.add(() => {}); // called once when then quened resources all load
```
- 用法
    - 加载纹理，然后将纹理作为sprite的source，创建sprite
    ```js
    //使用方法，这里的url会加载静态资源下的图片，纹理图片最好作为静态资源存放，相对路径会出现问题
    app.loader.add([{name:'bunny', url:'/logo.png'},]).load((loader, resources) => {
        const bunny = new PIXI.Sprite(resources.bunny.texture);
        bunny.x = app.renderer.width / 2;
        bunny.y = app.renderer.height / 2;
        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;
        app.stage.addChild(bunny);
        app.ticker.add(() =>  bunny.rotation += 0.01);
    });
    ```

## PIXI.BitmapFont
> [link](http://pixijs.download/release/docs/PIXI.BitmapFont.html)
> 定义字体，颜色，大小，字间距...

- create instance
```js
// create instance
PIXI.BitmapFont.from("TitleFont", {
    fontFamily: "Arial",
    fontSize: 12,
    strokeThickness: 2,
    fill: "purple"
});
// usage，类似于创建了一个样式表，然后在使用的时候直接使用样式表注册时用的名字就可以了
const title = new PIXI.BitmapText('this is test of bitmapFont', { fontNam: 'TitleFont'})
```

## PIXI.BitmapText
> [link](http://pixijs.download/release/docs/PIXI.BitmapText.html)
> 用来创建文字纹理的，继承自PIXI.Container，无法改变颜色
- extends  
`=> PIXI.Container => PIXI.DisplayObject`

- create instance
```js
const text = new PIXI.BitmapText('text', {
    fontName: 'TitleFont',
    fontSize: 22,
    align: 'right'
})
// do some effect on text
// text.style.tint = 0xFFFFFF;
```

- methods
```js
title.interactive = true;
title.buttonMode = true; // cursor pointer
title.cursor = 'wait'; // define cursor use
```


## PIXI.Text
> [link](http://pixijs.download/release/docs/PIXI.Text.html)创建文字的方法类
- extends  
`=> PIXI.Sprite => PIXI.Container => PIXI.DisplayObject`

- create instance
```js
 const title = new PIXI.Text("This is the title", { fontFamily : 'Arial', fontSize: 24, align : 'center', fill: 0xFFFFFF});
 // 修改文字样式
 title.style.fill = 'red';
title.style.fontSize = 12;
```

## PIXI.Circle
> [link](http://pixijs.download/release/docs/PIXI.Circle.html)
> The Circle object is used to help draw graphics and can also be used to specify a hit area for displayObjects.


## PIXI.Graphics
> [link](http://pixijs.download/release/docs/PIXI.Graphics.html)
> The Graphics class is primarily used to render primitive shapes such as lines, circles and rectangles to the display, and to color and fill them. However, you can also use a Graphics object to build a list of primitives to use as a mask, or as a complex hitArea.

- create instance
```js
const g = new PIXI.Graphics();
```

- extends
`=> PIXI.Container => PIXI.DisplayObject`

## PIXI.Matrix
> [link](http://pixijs.download/release/docs/PIXI.Matrix.html)
> 矩阵，列主序

- create instance
```js
| a | c | tx|
| b | d | ty|
| 0 | 0 | 1 |
const matrix = new PIXI.Matrix(a,b,c,d,tx,ty);
```

## PIXI.Mesh
> [link](http://pixijs.download/release/docs/PIXI.Mesh.html)

- create instance

- extends
`=> PIXI.Container => PIXI.DisplayObject`

## PIXI.Geometry
> [link](http://pixijs.download/release/docs/PIXI.Geometry.html)
> 网格的数据和结构

- create instance
```js
let geometry = new PIXI.Geometry();

geometry.addAttribute('positions', [0, 0, 100, 0, 100, 100, 0, 100], 2);
geometry.addAttribute('uvs', [0,0,1,0,1,1,0,1],2)
geometry.addIndex([0,1,2,1,3,2])
```

- extends
`-`

## PIXI.MeshGeometry
- extends
`=> PIXI.Geometry`

## PIXI.PlaneGeometry
> [link](http://pixijs.download/release/docs/PIXI.PlaneGeometry.html)

- create instance
```js
/**
 * @pamram p1 The width of the plane
 * @pamram p2 The height of the plane
 * @pamram p3 Number of horizontal segments.
 * @pamram p4 Number of vertical segments.
*/
let geometry = new PIXI.PlaneGeometry(10, 10, 20, 20)
```

- extends
`=> PIXI.MeshGeometry => PIXI.Geometry => `

## PIXI.Point
> [link](http://pixijs.download/release/docs/PIXI.Point.html)

- create instance
```js
const point = new PIXI.Point(x, y);
```

- extends
`-`

## PIXI.Polygon
> [link](http://pixijs.download/release/docs/PIXI.Polygon.html)

- create instance
```js
const point = new PIXI.Polygon(...points);
```

- extends
`-`
