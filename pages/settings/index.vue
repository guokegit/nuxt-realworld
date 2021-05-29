<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input class="form-control" type="text" placeholder="URL of profile picture"
                       v-model="user.image"
                >
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Your Name"
                       v-model="user.username"
                       required minlength="1" maxlength="20">
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you"
                          v-model="user.bio"
                ></textarea>
              </fieldset>

              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="email" placeholder="Email"
                       v-model="user.email" required>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password" placeholder="Password"
                       v-model="user.password"
                       required minlength="8">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right" @click.prevent="update">
                Update Settings
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import { settings } from '../../api/user';
const cookie = process.client ? require('js-cookie') : undefined

export default {
  name: 'settings',
  middleware: 'authenticate',
  data(){
    const {bio, email, image, password, username} = this.$store.state.user || {}
    console.log(this.$store.state)
    return {
      user: {
        bio,
        email,
        image,
        password,
        username,
      }
    }
  },
  methods:{
    async update(){
      const {data} = await settings({
        user: this.user
      });

      // 将登陆状态存储到全局
      this.$store.commit('setUser', data.user);
      // 将登陆状态存储到cookie（服务端可以拿到，在服务端渲染时可以再次存到store共享到客户端）
      await cookie.set('user', JSON.stringify(data.user || {}))

      await this.$router.push(`/profile/${data.user.username}`)
    }
  }
};
</script>

<style scoped>

</style>
