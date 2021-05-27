<template>
  <div class="article-page">

    <div class="banner">
      <div class="container">

        <h1>{{article.title}}</h1>
<!--作者-->
        <article-meta :article="article" />

      </div>
    </div>

    <div class="container page">

      <!--文章-->
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body" />
      </div>

      <hr />
      <!--作者-->
      <div class="article-actions">
        <article-meta :article="article" />
      </div>

      <!--评论-->
      <comments :slug="article.slug" />
    </div>

  </div>

</template>

<script>

import { getArticleDetail } from '../../api/article';
import MarkdownIt from 'markdown-it';
import ArticleMeta from './components/article-meta'
import Comments from './components/comments'

export default {
  name: 'articleDetail',
  async asyncData({params}){
    const {data} = await getArticleDetail(params.slug)
    const md = new MarkdownIt();
    const {article} = data
    article.body = md.render(article.body)
    return {
      article
    }
  },
  components: {
    ArticleMeta,
    Comments,
  },
  head(){
    return {
      title: `${this.article.title} - realworld`,
      meta: [{
        hid: 'detail-description',
        name: 'description',
        content: this.article.description
      }]
    }
  }
};

</script>

<style scoped>

</style>
