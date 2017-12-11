# 一个基于vue的库的基本模型。


## 安装 && 使用
```
//安装
npm install sls-vue-lib --svae-dev;

// 使用方式一
import SlsVueLib from 'sls-vue-lib';
Vue.use(SlsVueLib);

// 使用方式二 
import {
  Hello,
  Word,
  HelloWord
} from 'sls-vue-lib';
Vue.use(Hello);
Vue.use(Word);
Vue.use(HelloWord);

// 使用方式三,在组件内注册，例如app.vue中使用
<template>
  <div>
    <hello></hello>
  </div>
</template>
import {
  Hello
} from 'sls-vue-lib';
export default {
  components: {
    Hello
  }
}
```

## 待优化
- 接入lerna管理包工具
- 创建脚本(自动生成生成组件以及实例的开发配置，公用页面引入配置，开发人员只需专注于自己创造的独立组件即可，目的是方便协作)
- 实现可引入源码组件(需当前开发项目配合)
