## 关于typescript详细配制
[tsconfig配制详情](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Compiler%20Options.html)

## Vue-Property-Decorator
vue-property-decorator 是在 vue-class-component 上增强了更多的结合 Vue 特性的装饰器，新增了这 7 个装饰器

- @Emit 
- @Inject
- @Model
- @Prop
- @Provide
- @Watch
- @Component (从 vue-class-component 继承)

## 项目中的语法使用方法

```js
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  name:string = 'Simon Zhang'

  // computed
  get MyName():string {
    return `My name is ${this.name}`
  }

  // methods
  sayHello():void {
    alert(`Hello ${this.name}`)
  }

  mounted() {
    this.sayHello();
  }
}

```
类似vue中的
```js
export default {
  data () {
    return {
      name: 'Simon Zhang'
    }
  },

  mounted () {
    this.sayHello()
  },

  computed: {
    MyName() {
      return `My name is ${this.name}`
    }
  },

  methods: {
    sayHello() {
      alert(`Hello ${this.name}`)
    },
  }
}

```

## Vuex-Class

vuex-class是基于基于vue-class-component对Vuex提供的装饰器。它的作者同时也是vue-class-component的主要贡献者，质量还是有保证的。

```
 npm i vuex-class -S
```
使用方法
```js
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter } from "vuex-class";

@Component
export default class App extends Vue {
  name:string = 'Simon Zhang'
  @State login: boolean;
  @Action initAjax: () => void;
  @Getter load: boolean;

  get isLogin(): boolean {
    return this.login;
  }
  
  mounted() {
    this.initAjax();
  }
}
```
类似vue中

```js
export default {
  data() {
    return {
      name: 'Simon Zhang'
    }
  },

  mounted() {
    this.initAjax()
  },

  computed: {
    login() {
      return this.$store.state.login
    },
    load() {
      return this.$store.getters.load
    }
  },

  methods: {
    initAjax() {
      this.$store.dispatch('initAjax')
    }
  }
}

```

## 支持 mixin

```js
import MixinsType from "@/mixins/xxx";
@Component({
mixins:[MixinsType]
})

```

## 需要注意的事
> 引入部分第三方库的时候需要额外声明文件

比如说我想引入vue-lazyload,虽然已经在本地安装，但是typescript还是提示找不到模块。原因是typescript是从node_modules/@types目录下去找模块声明，有些库并没有提供typescript的声明文件，所以就需要自己去添加

解决办法：在`src`目录下建一个`tools.d.ts`文件，声明这个模块即可
```js
declare module 'vue-awesome-swiper' {
  export const swiper: any
  export const swiperSlide: any
}

declare module 'vue-lazyload'

```
> 在需要的window属性的.ts文件 中添加属性
```js
declare global {
  interface Window {FileReader:any}
}
window.FileReader = window.FileReader || {}

```
