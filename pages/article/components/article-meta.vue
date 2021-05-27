<template>
  <div class="article-meta">
    <nuxt-link :to="{
                    name: 'profile',
                    params:{
                       username: article.author.username
                    }
                  }"
    >
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link :to="{
                      name: 'profile',
                      params:{
                         username: article.author.username
                      }
                    }" class="author"
      >
        {{article.author.username}}
      </nuxt-link>
      <span class="date">{{article.createdAt | date}}</span>
    </div>

    <button class="btn btn-sm btn-outline-secondary" :class="{active: article.author.following}" @click="onFollow(article)">
      <i class="ion-plus-round"></i>
      &nbsp;
      {{ article.author.following ? 'UnFollow' : 'Follow' }} {{article.author.username}}
    </button>
    &nbsp;&nbsp;
    <button class="btn btn-sm btn-outline-primary" :class="{active: article.favorited}" @click="favourite(article)">
      <i class="ion-heart"></i>
      &nbsp;
      Favorite Post <span class="counter">({{article.favoritesCount}})</span>
    </button>
  </div>
</template>

<script>
import {
  addFavourite,
  removeFavourite,
} from '../../../api/article';
import { follow, unFollow } from '../../../api/user';

export default {
  name: 'ArticleMeta',
  props:{
    article: {
      type: Object,
      required: true,
    }
  },
  methods: {
    favourite(art){
      if(art.favorited){
        removeFavourite(art.slug)
        art.favorited = false;
        art.favoritesCount += -1;
      }else {
        addFavourite(art.slug)
        art.favorited = true;
        art.favoritesCount += 1;
      }

      // this.$emit('refresh')
    },
    onFollow(art){
      if(art.author.following){
        unFollow(art.author.username)
        art.author.following = false;
      }else {
        follow(art.author.username)
        art.author.following = true;
      }

      // this.$emit('refresh')
    }
  }
};
</script>

<style scoped>

</style>
