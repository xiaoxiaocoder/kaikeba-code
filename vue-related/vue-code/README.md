# Vue 进阶

## 组件化实践

### 组件通信的几种方式

- 父子: props, $children refs
- 子父: 自定义事件
- 任意组件: $bus vuex
- 兄弟组件: $parent $root
- 跨兄弟组件: [provide/inject](https://cn.vuejs.org/v2/api/#provide-inject)

### 非prop特性 https://cn.vuejs.org/v2/api/#vm-attrs

- $attrs
  > 包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。
- $listeners
  > 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。



### 插槽

https://cn.vuejs.org/v2/guide/components-slots.html

- 匿名插槽  `<slot></slot>`
- 具名插槽  `<template v-slot:content>内容...</template>`
- 作用域插槽  
    ```js
      <slot :name="foo"></slot>

      <template v-slot:content="xxx">{{ xxx.name }} </template>
      <template v-slot:default="xxx">{{ xxx.name }} </template>
    ```

### 组件创建

1.  Vue.component全局注册 https://cn.vuejs.org/v2/api/#Vue-component 
2.  Vue.extend 使用Vue构造器 https://cn.vuejs.org/v2/api/#Vue-extend 
    1.  propsData https://cn.vuejs.org/v2/api/#propsData


### 作业

使用Vue.extend方式实现create方法

思考拓展
1.  修正input中$parent写法的问题
2.  学习element源码


## 收获

1.  Vue.extend
2.  propsData
3.  作用域插槽, 
  1.  2.6 前后作用域插槽写法区别
  2.  动态指令参数也可以用在v-slot上
4.  递归组件
5.  abstract compnent
6.  transation 动画 https://cn.vuejs.org/v2/guide/transitions.html
