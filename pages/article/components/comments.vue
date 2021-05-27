<template>
  <div class="row">

    <div class="col-xs-12 col-md-8 offset-md-2">

      <form class="card comment-form">
        <div class="card-block">
          <textarea class="form-control" placeholder="Write a comment..." rows="3" v-model="commentBody"></textarea>
        </div>
        <div class="card-footer">
          <img :src="user.image" class="comment-author-img" />
          <button class="btn btn-sm btn-primary" @click.prevent="addComments">
            Post Comment
          </button>
        </div>
      </form>

      <div class="card" v-for="comment in comments">
        <div class="card-block">
          <p class="card-text">{{comment.body}}</p>
        </div>
        <div class="card-footer">
          <nuxt-link :to="{
                    name: 'profile',
                    params:{
                       username: comment.author.username
                    }
                  }" class="comment-author"
          >
            <img :src="comment.author.image" class="comment-author-img" />
          </nuxt-link>
            <nuxt-link :to="{
                      name: 'profile',
                      params:{
                         username: comment.author.username
                      }
                    }" class="comment-author"
            >
              {{comment.author.username}}
            </nuxt-link>
            <span class="date-posted">{{comment.createdAt | date}}</span>

          <span class="mod-options">
              <i class="ion-trash-a" v-if="user" @click="removeComments(comment.id)"></i>
            </span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { getArticleComments, addComments, removeComments } from '../../../api/article';
import { mapState } from 'vuex';

export default {
  name: 'Comments',
  props: {
    slug: {
      type: String,
      required: true,
    }
  },
  data(){
    return {
      comments: [],
      commentBody:'',
    }
  },
  mounted(){
    this.getArticleComments()
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async getArticleComments(){
      const {data} = await getArticleComments(this.slug)
      this.comments = data.comments || []
      console.log(data)
    },
    async addComments(){
      await addComments(this.slug, {
        comment: {
          body: this.commentBody
        }
      })
      await this.getArticleComments()
      this.commentBody = ''
    },
    async removeComments(commentId){
      if(confirm('确定要删除该评论吗？')){
        await removeComments(this.slug, commentId)
        await this.getArticleComments()
      }
    }
  }
};
</script>

<style scoped>

</style>
