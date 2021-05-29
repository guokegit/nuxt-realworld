<template>
  <button class="btn btn-sm btn-outline-primary" :class="{active: article.favorited}" @click="favourite(article)">
    <i class="ion-heart"></i>
    &nbsp;<span>{{ label }}</span>
     <span class="counter">{{article.favoritesCount}}</span>
  </button>
</template>

<script>
import {
  addFavourite,
  removeFavourite,
} from '../../../api/article';

export default {
  name: 'UserFavourite',
  props:{
    article: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      required: false,
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
    }
  }
};
</script>

<style scoped>

</style>
