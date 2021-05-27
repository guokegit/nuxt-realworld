<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input type="text" class="form-control form-control-lg" placeholder="Article Title" v-model="title">
              </fieldset>
              <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="What's this article about?"  v-model="description">
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control" rows="8" placeholder="Write your article (in markdown)" v-model="body"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="Enter tags, split by ','" v-model="tagList"><div class="tag-list"></div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click.prevent="addArticle">
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>



</template>

<script>
import { addArticle } from '../../api/article';

export default {
  name: 'editor',
  middleware: 'authenticate',
  data(){
    return {
      title: '',
      description: '',
      body: '',
      tagList: ''
    }
  },
  methods: {
    async addArticle(){
      const {data} = await addArticle({
        article: {
          title: this.title,
          description: this.description,
          body: this.body,
          tagList: JSON.stringify(this.tagList.split(',')),
        }
      })
      this.$router.push(`/article/${data.article.slug}`)
    }
  }
};
</script>

<style scoped>

</style>
