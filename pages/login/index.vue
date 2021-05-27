<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up' }}</h1>
          <p class="text-xs-center">
            <nuxt-link to="/login" v-if="!isLogin">Have an account?</nuxt-link>
            <nuxt-link to="/register" v-if="isLogin">Need an account?</nuxt-link>
          </p>

          <ul class="error-messages" v-for="(messages, key) in errors" :key="key">
            <li v-for="(msg, index) in messages" :key="index">{{key}} {{msg}}</li>
          </ul>

          <form>
            <fieldset class="form-group" v-if="!isLogin">
              <input class="form-control form-control-lg" type="text" placeholder="Your Name"
                     v-model="user.username"
                     required minlength="1" maxlength="20" autocomplete>
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="email" placeholder="Email"
                     v-model="user.email" required autocomplete>
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" placeholder="Password"
                     v-model="user.password"
                     required minlength="8" autocomplete>
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" @click.prevent="onLogin">
              {{ isLogin ? 'Sign in' : 'Sign up' }}
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import { login, register } from '../../api/user';
const cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'hadAuthenticate',
  name: 'login',
  computed: {
    isLogin() {
      return this.$route.name === 'login'
    }
  },
  data: () => ({
    user: {
      username: '',
      email: '',
      password: '',
    },
    errors: {}
  }),
  methods: {
    onLogin(){
      const vm = this;
      const action = this.isLogin ? login : register;
      action({
        user: this.user
      }).then(data => {
        // 将登陆状态存储到全局
        vm.$store.commit('setUser', data.data.user);
        // 将登陆状态存储到cookie（服务端可以拿到，在服务端渲染时可以再次存到store共享到客户端）
        cookie.set('user', JSON.stringify(data.data.user))

        vm.$router.push('/')
      }).catch(err => {
        vm.errors = err.response.data.errors;
      })
    }
  }
};
</script>

<style scoped>

</style>
