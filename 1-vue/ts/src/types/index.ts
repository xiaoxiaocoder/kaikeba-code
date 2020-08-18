// const objType: { foo: string, bar: string }

// 使用type定义类型别名, 使用更编辑, 还能复用
export type Feature = { id: number, name: string }

export type Selected = { selected: true }
/**
 * & 类型交叉
 * | 类型联合
 * is 类型判断
 * <type> 或 as 类型断言 / 类型强制转换
 * 类型别名
 */
export type FeatureSelected = Feature & Partial<Selected>


/**
 * 装饰器原理
 * 
 * 装饰器是工厂函数, 它能访问和修改装饰目标
 */

 function log(target: Function) {
   // target 是构造函数
   console.log(target == Foo);// true
   target.prototype.log = function() {
     console.log(this.bar);
   }
 }

// @log
class Foo {
  bar = 'bar'
}

//  const foo = new Foo()

//  foo.
// 暗号: you can you up
import { Vue } from 'vue-property-decorator'
export function Catch<T extends Vue>(errFn?: (ctx: T, err: Error) => void, loadingKey?: string):  MethodDecorator {
  return function(target, name, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = async function() {
      try {
        // @ts-ignore
        loadingKey && (this[loadingKey] = true)
        // @ts-ignore
        await fn.apply(this, arguments)
      } catch (error) {
        if (errFn) {
          // @ts-ignore
          errFn(this, error)
        } else {
          throw error;
        }
      } finally {
        // @ts-ignore
        loadingKey && (this[loadingKey] = false)
      }
    }
  }
}
