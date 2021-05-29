<template>
  <div class="article-meta">
    <user-card :user="article.author" :date="article.createdAt" />

    <user-following :user="article.author" />
    &nbsp;&nbsp;
    <user-favourite :article="article" label="Favorite Post" />
  </div>
</template>

<script>
import UserCard from './user-card'
import UserFollowing from './user-following'
import UserFavourite from './user-favourite'

export default {
  name: 'ArticleMeta',
  props:{
    article: {
      type: Object,
      required: true,
    }
  },
  components: {
    UserCard,
    UserFollowing,
    UserFavourite,
  }
};
</script>

<style scoped>

</style>
