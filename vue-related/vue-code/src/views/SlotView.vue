<template>
    <!--
      2.6 之前写法 slot-scope， 2.6之后 v-slot:default(废弃slot-scope)

      2.6 之前写法
      <k-user name="xiaoxiao" age="18" :address="{city: 'taiyuan', province: 'shanxi'}">
        <template slot-scope="{user, address}">
          默认插槽(slot="default" 隐性忽略): {{user.name}} {{ user.age }} {{ address.province }} 
        </template>
        <template slot="address" slot-scope="{address}">
          具名插槽: {{ address.city }}
        </template>
        <p slot="footer">Here's some contact info</p>
      </k-user>

      2.6 之前后 （默认独占插槽, 即可以在组件上直接使用v-slot:default="{user, address}"）
      默认插槽不能和具名插槽嵌套，会导致作用域不明确
      <k-user name="xiaoxiao" age="18" :address="{city: 'taiyuan', province: 'shanxi'}">
        <template v-slot:default="{user, address}">
          默认插槽(v-slot:default可以简写成v-slot): {{user.name}} {{ user.age }} {{ address.province }} 
        </template>
        <template v-slot:address="{address}">
          <p>具名插槽(v-slot:address可以简写成#address): {{ address.city }} </p>
        </template>
        <template #user="{user}">
          <p>具名插槽(v-slot:user可以简写成#user): {{ user.name }}</p>
        </template>
      </k-user>
     
    -->
    <k-user name="xiaoxiao" age="18" :address="{city: 'taiyuan', province: 'shanxi'}">
      <template v-slot:default="{user, address}">
        默认插槽(v-slot:default可以简写成v-slot): {{user.name}} {{ user.age }} {{ address.province }} 
      </template>
      <template v-slot:address="{address}">
        <p>具名插槽(v-slot:address可以简写成#address): {{ address.city }} </p>
      </template>
      <template #user="{user}">
        <p>具名插槽(v-slot:user可以简写成#user): {{ user.name }}</p>
      </template>
      <template v-slot:footer><p>Here's some contact info</p></template>
    </k-user>
</template>

<script>
import KUser from './components/KUser'

export default {
  components: {
    KUser
  }
}
</script>

<style lang="scss" scoped>

</style>