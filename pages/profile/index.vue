<template>
  <div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="user.image" class="user-img" />
            <h4>{{user.username}}</h4>
            <p>{{ user.bio }}</p>
            <user-following :user="user" v-if="user.username !== $store.state.user.username" />
            <button
                v-else
                class="btn btn-sm btn-outline-secondary"
                @click="signOut"
            >
              Sign Out
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link" @click="changeTab('My_Articles')" :class="{active: tab==='My_Articles'}">My Articles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="changeTab('Favorited_Articles')" :class="{active: tab==='Favorited_Articles'}">Favorited Articles</a>
              </li>
            </ul>
          </div>

          <article-list :articles="articles" />
          <!--分页-->
          <nav>
            <ul class="pagination">
              <li class="page-item" :class="{active: pageNumber === page }" v-for="pageNumber in totalPage" :key="pageNumber">
                <a class="page-link" @click="changePage(pageNumber)">{{pageNumber}}</a>
              </li>
            </ul>
          </nav>

        </div>

      </div>
    </div>

  </div>

</template>

<script>
import ArticleList from '../home/article-list';
import UserFollowing from '../article/components/user-following'
import { getArticleList, } from '../../api/article';
import { profile } from '../../api/user';
const cookie = process.client ? require('js-cookie') : undefined

export default {
  name: 'profile',
  middleware: 'authenticate',
  data(){
    return {
      user: {},
      articles: [],
      articlesTotal: 0,
      limit: 10,
      page:1,
      tab: 'My_Articles'
    }
  },
  async fetch(){
    const username = this.$route.params.username
    await this.getProfile(username)
  },
  components: {
    ArticleList,
    UserFollowing,
  },
  computed: {
    totalPage(){
      return Math.ceil(this.articlesTotal/this.limit)
    }
  },
  watch:{
    $route(to,from){
      console.log(to.params.username);
      this.getProfile(to.params.username)
    }
  },
  methods: {
    async getProfile(username){
      const {data} = await profile(username)
      this.user = data.profile;
      await this.searchArticleList();
    },
    async searchArticleList(){
      const filterKey = this.tab === 'My_Articles' ? 'author' : 'favorited'
      ;

      const {data} = await getArticleList({
        limit: this.limit,
        offset: (this.page - 1) * this.limit,
        [filterKey]: this.user.username
      });

      this.articles = data.articles;
      this.articlesTotal = data.articlesCount;
    },

    changePage(pageNumber){
      this.page = pageNumber;
      this.searchArticleList()
    },

    changeTab(tabKey){
      this.tab = tabKey;
      this.initPage()
      this.searchArticleList()
    },

    initPage(){
      this.page = 1;
    },
    signOut(){
      this.$store.commit('setUser', null);
      cookie.set('user', '')
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>

</style>
