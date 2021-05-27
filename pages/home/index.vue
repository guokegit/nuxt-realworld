<template>
  <div class="home-page">

    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
<!--tab-->
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <a class="nav-link" @click="changeTab('YOUR_FEED')" :class="{active: tab==='YOUR_FEED'}">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="changeTab('GLOBAL_FEED')" :class="{active: tab==='GLOBAL_FEED'}">Global Feed</a>
              </li>
              <li class="nav-item" v-if="tag">
                <a class="nav-link" @click="changeTab('TAG_FEED')" :class="{active: tab==='TAG_FEED'}">#{{tag}}</a>
              </li>
            </ul>
          </div>
<!--文章列表-->
          <div style="max-height: calc(100vh - 200px); width: 100%; overflow: auto;">
            <div class="article-preview" v-for="article in articles" :key="article.slug">
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
                <button class="btn btn-outline-primary btn-sm pull-xs-right" :class="{active: article.favorited}" @click="favourite(article)">
                  <i class="ion-heart"></i> {{article.favoritesCount}}
                </button>
              </div>
              <nuxt-link :to="{name: 'article', params: {slug: article.slug}}" class="preview-link">
                <h1>{{article.title}}</h1>
                <p>{{article.description}}</p>
                <span>Read more...</span>
              </nuxt-link>
            </div>
          </div>
<!--分页-->
          <nav>
            <ul class="pagination">
              <li class="page-item" :class="{active: pageNumber === page }" v-for="pageNumber in totalPage" :key="pageNumber">
                <a class="page-link" @click="changePage(pageNumber)">{{pageNumber}}</a>
              </li>
            </ul>
          </nav>
        </div>
<!--标签-->
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a class="tag-pill tag-default" v-for="tagStr in tags" :key="tagStr" @click="selectTag(tagStr)">{{tagStr}}</a>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { getArticleList, getFeedArticles, addFavourite, removeFavourite } from '../../api/article';
import { getTags } from '../../api/tags';
import { mapState } from 'vuex';

export default {
  name: 'home',
  data(){
    return {
      articles: [],
      articlesTotal: 0,
      limit: 10,
      page:1,
      tags: [],
      tag: '',
      tab: this.user ? 'YOUR_FEED' : 'GLOBAL_FEED'
    }
  },
  fetch () {
    this.searchArticleList()
    this.getTags()
  },

  computed: {
    totalPage(){
      return Math.ceil(this.articlesTotal/this.limit)
    },
    ...mapState(['user'])
  },

  methods: {
    async searchArticleList(){
      const getArticle = (this.user && this.tab === 'YOUR_FEED') ? getFeedArticles : getArticleList;

      const {data} = await getArticle({
        limit: this.limit,
        offset: (this.page - 1) * this.limit,
        tag: this.tag
      });

      this.articles = data.articles;
      this.articlesTotal = data.articlesCount;
    },

    async getTags(){
      const {data} = await getTags();
      this.tags = data.tags.filter(tag => tag);
    },

    changePage(pageNumber){
      this.page = pageNumber;
      this.searchArticleList()
    },

    selectTag(tagStr){
      this.tag = tagStr;
      this.tab = 'TAG_FEED';
      this.initPage()
      this.searchArticleList()
    },

    changeTab(tabKey){
      this.tab = tabKey;
      if(this.tab !== 'TAG_FEED'){
        this.tag = '';
      }
      this.initPage()
      this.searchArticleList()
    },

    initPage(){
      this.page = 1;
    },

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
      this.searchArticleList()
    }


  }
};
</script>

<style scoped>

</style>
