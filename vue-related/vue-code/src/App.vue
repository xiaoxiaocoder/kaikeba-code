<template>
  <div id="app">
    <h2>组件化实践</h2>
    <k-form style="width: 400px;margin: 0 auto;" :model="form" :rules="rules" ref="formRef">
      <k-form-item label="用户名" prop="username">
        <k-input placeholder="请输入用户名" v-model="form.username"/>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input placeholder="请输入密码" type="password" v-model="form.password"/>
      </k-form-item>
      <k-form-item>
        <k-button @click.native="submit">提交</k-button>
      </k-form-item>
    </k-form>
    {{ form }}
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    rules() {
      return {
        username: [{type: "string", required: true, message: '请输入用户名'} ],
        password: [{type: "string", required: true, message: '请输入密码'}]
      } 
    }
  },
  methods: {
    submit() {
      this.$refs.formRef.validate(valid => {
        if(valid) {
          this.$success('success')
        } else {
          this.$error('error')
        }
      })
    }
  },
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
