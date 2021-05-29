<template>
  <div style="max-height: calc(100vh - 200px); width: 100%; overflow: auto;">
            <div class="article-preview" v-for="article in articles" :key="article.slug">
              <div class="article-meta" style="justify-content: space-between">
                <user-card :user="article.author" :date="article.createdAt" />
                <user-favourite :article="article" />
              </div>
              <nuxt-link :to="{name: 'article', params: {slug: article.slug}}" class="preview-link">
                <h1>{{article.title}}</h1>
                <p>{{article.description}}</p>
                <span>Read more...</span>
              </nuxt-link>
            </div>
          </div>
</template>

<script>
import UserCard from '../article/components/user-card';
import UserFavourite from '../article/components/user-favourite';

export default {
  name: 'ArticleList',
  props: {
    articles:{
      type: Array,
      required: true,
    }
  },
  components: {
    UserCard,
    UserFavourite,
  }

};

</script>

<style scoped>

</style>
