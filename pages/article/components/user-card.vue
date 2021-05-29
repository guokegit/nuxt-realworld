<template>
  <div>
    <nuxt-link :to="{
                    name: 'profile',
                    params:{
                       username: user.username
                    }
                  }"
    >
      <img :src="user.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link :to="{
                      name: 'profile',
                      params:{
                         username: user.username
                      }
                    }" class="author"
      >
        {{user.username}}
      </nuxt-link>
      <span class="date">{{date | date}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserCard',
  props:{
    user: {
      type: Object,
      required: true,
    },
    date: {
      type: String,
      required: false,
    }
  },
};
</script>

<style scoped>

</style>
