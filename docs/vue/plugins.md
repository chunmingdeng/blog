# vue 插件
> 实现js调用的全局插件 

## tost案例
[link](https://segmentfault.com/a/1190000021959058)

```js
// ***Plugin.js, vue2
import absComponent from './***.vue'
export default {
    install: (Vue, opts) => {
        Vue.prototype.$loading = function() {
            let c_fn = Vue.extend(absComponent);
            let instance = new c_fn({
                data: {},
                methods: {},
                // ...
            });
            instance.$mount();
            // instance // 虚拟的Vdom
            // instance.$mount().$el //真实的html结构
            // document.body // 操作真实的html挂载
            return instance; // instance 调不调用$mount()都可以
        }
    }
}



// ***Plugin.js, vue3
import absComponent from './***.vue'
export default {
    install: (app, opts) => {
        app.config.globalPorperties.$loading = function() {
            let c_fn = Vue.extend(absComponent);
            let instance = new c_fn({
                data: {},
                methods: {},
                // ...
            });
            instance.$mount();
            // instance // 虚拟的Vdom
            // instance.$mount().$el //真实的html结构
            // document.body // 操作真实的html挂载
            return instance; // instance 调不调用$mount()都可以
        }
    }
}
```

## [vue-I18n](https://vue-i18n.intlify.dev/guide/)
> 一个vue的国际化插件，

## [driver.js](https://github.com/kamranahmedse/driver.js#readme)
> 新手指引引导插件，可以实现新手引导的功能