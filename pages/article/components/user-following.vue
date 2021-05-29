<template>
  <button class="btn btn-sm btn-outline-secondary" :class="{active: user.following}"
          @click="onFollow(user)">
    <i class="ion-plus-round"></i>
    &nbsp;
    {{ user.following ? 'UnFollow' : 'Follow' }} {{ user.username }}
  </button>
</template>

<script>

import {
  follow,
  unFollow,
} from '../../../api/user';

export default {
  name   : 'UserFollowing',
  props  : {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onFollow (user) {
      if (user.following) {
        unFollow(user.username);
        user.following = false;
      } else {
        follow(user.username);
        user.following = true;
      }
    },
  },
};
</script>

<style scoped>

</style>
