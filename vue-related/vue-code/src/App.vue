<template>
  <div id="app">
    <h2>HomePage</h2>
    <!-- <k-form-view /> -->
    <!-- <slot-view></slot-view>
    <transition-view /> -->

    <router-link to="/about">AboutView</router-link>&nbsp;
    <router-link to="/form">FormView</router-link>
    <router-view />
  </div>
</template>

<script>
import AboutView from '@/views/AboutView'
import KFormView from '@/views/KFormView'
import SlotView from '@/views/SlotView'
import TransitionView from '@/views/TransitionView'
export default {
  name: 'App',
  components: {
    SlotView,
    TransitionView,
    KFormView,
    AboutView,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
