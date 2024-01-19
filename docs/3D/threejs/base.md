# threejs

## shader&onBeforCompile
> 在渲染之前修改着色器代码,基于这个功能可以给threejs原始材质添加各种特效

1. 以一个粒子特效为例    
   
第一种方法是自己实现vertexShader&fragmentShader
``` js
class Partical extend THREE.Points {
  // vertexShader
  // fragmentShader
}
```
第二种方法利用onBeforeCompile, 关键点,**内置的材质创建的材质对象是无法直接访问unifroms变量的,但是却可以在onBeforeCompile内访问**
```js
// 以下是伪代码
const ma = new THREE.PointsMaterial({
  map: texture,
  alphaMap: texture1,
  transparent: true,
})
// time必须是一个引用,以便能够在loop函数中修改值,同时shader能同时得到修改后的值
const time = {value: 0.0}
ma.onBeforeCompile = shader => {
  // 这里的shader才有uniforms变量,在外部是访问不到的
  shader.uniforms.u_time = time;
  shader.vertexShader = shader.vertexShader.replace('void main() {', 'uniform float u_time;\nvoid main() {');
  shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', 'vec3 transformed = vec3(0.0);\ntransformed = position - vec3(0.0,4.0,0.0) * u_time * 10.0;\ntransformed.y = mod(transformed.y, 100.0);');
}
const mesh = new THREE.Points(p1.geometry, ma);
scene.add(mesh)

const loop = () =>{
  time.value = t;
  requestAnimation(loop);
}
```

## matrix
> threejs中的`src/math/matrix[234]`是不支持复合变换的计算的,所以每次计算出旋转矩整或者位移矩整要立刻和模型进行及结算(无法计算出旋转+位移的复合矩阵,不支持)
### matrix4