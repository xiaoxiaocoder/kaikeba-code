## 代码实践

##  TODO

### Vue

#### typescript

1. Home.vue文件中, 引用 `'@/types/index.ts` 报An import path cannot end with a '.ts' extension. Consider importing '@/types/index' instead.Vetur(2691)


## Fixed

### Vue

#### typescript

1. main.ts中. `import App from "./App.vue";` 会报 找不到模块./App.vue
  解决方法: 新建.d.ts文件, 如vue-sfc.d.ts文件

  ```ts
    // vue-sfc.d.ts
    declare module "*.vue" {
      import Vue from 'vue';
      export default Vue;
    }
  ```

  原因:
    TODO

2. 