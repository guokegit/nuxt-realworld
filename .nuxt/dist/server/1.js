exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addFavourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return removeFavourite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticleComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return removeComments; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

const getArticleList = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
};
const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
};
const getArticleDetail = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
};
const addArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles`,
    data
  });
};
const addFavourite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
};
const removeFavourite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
};
const getArticleComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
};
const addComments = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  });
};
const removeComments = (slug, commentId) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${commentId}`
  });
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return register; });
/* unused harmony export profile */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return follow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return unFollow; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
};
const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users',
    data
  });
};
const profile = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
};
const follow = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  });
};
const unFollow = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  });
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=74c8cb1c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\" data-v-74c8cb1c>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-74c8cb1c>","</div>",[_vm._ssrNode("<h1 data-v-74c8cb1c>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\" data-v-74c8cb1c>","</div>",[_vm._ssrNode("<div class=\"row article-content\" data-v-74c8cb1c><div class=\"col-md-12\" data-v-74c8cb1c>"+(_vm._s(_vm.article.body))+"</div></div> <hr data-v-74c8cb1c> "),_vm._ssrNode("<div class=\"article-actions\" data-v-74c8cb1c>","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_c('comments',{attrs:{"slug":_vm.article.slug}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=74c8cb1c&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=cf445950&scoped=true&
var article_metavue_type_template_id_cf445950_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
                  name: 'profile',
                  params:{
                     username: _vm.article.author.username
                  }
                }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-cf445950>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                    name: 'profile',
                    params:{
                       username: _vm.article.author.username
                    }
                  }}},[_vm._v("\n      "+_vm._s(_vm.article.author.username)+"\n    ")]),_vm._ssrNode(" <span class=\"date\" data-v-cf445950>"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{active: _vm.article.author.following}))+" data-v-cf445950><i class=\"ion-plus-round\" data-v-cf445950></i>"+_vm._ssrEscape("\n     \n    "+_vm._s(_vm.article.author.following ? 'UnFollow' : 'Follow')+" "+_vm._s(_vm.article.author.username)+"\n  ")+"</button>\n    \n  <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{active: _vm.article.favorited}))+" data-v-cf445950><i class=\"ion-heart\" data-v-cf445950></i>\n     \n    Favorite Post <span class=\"counter\" data-v-cf445950>"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2)}
var article_metavue_type_template_id_cf445950_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=cf445950&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    favourite(art) {
      if (art.favorited) {
        Object(api_article["i" /* removeFavourite */])(art.slug);
        art.favorited = false;
        art.favoritesCount += -1;
      } else {
        Object(api_article["c" /* addFavourite */])(art.slug);
        art.favorited = true;
        art.favoritesCount += 1;
      } // this.$emit('refresh')

    },

    onFollow(art) {
      if (art.author.following) {
        Object(user["d" /* unFollow */])(art.author.username);
        art.author.following = false;
      } else {
        Object(user["a" /* follow */])(art.author.username);
        art.author.following = true;
      } // this.$emit('refresh')

    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_cf445950_scoped_true_render,
  article_metavue_type_template_id_cf445950_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "cf445950",
  "6c542588"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/comments.vue?vue&type=template&id=303e68ac&scoped=true&
var commentsvue_type_template_id_303e68ac_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\" data-v-303e68ac>","</div>",[_vm._ssrNode("<form class=\"card comment-form\" data-v-303e68ac><div class=\"card-block\" data-v-303e68ac><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\" data-v-303e68ac>"+_vm._ssrEscape(_vm._s(_vm.commentBody))+"</textarea></div> <div class=\"card-footer\" data-v-303e68ac><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\" data-v-303e68ac> <button class=\"btn btn-sm btn-primary\" data-v-303e68ac>\n          Post Comment\n        </button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\" data-v-303e68ac>","</div>",[_vm._ssrNode("<div class=\"card-block\" data-v-303e68ac><p class=\"card-text\" data-v-303e68ac>"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\" data-v-303e68ac>","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
                  name: 'profile',
                  params:{
                     username: comment.author.username
                  }
                }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
                    name: 'profile',
                    params:{
                       username: comment.author.username
                    }
                  }}},[_vm._v("\n            "+_vm._s(comment.author.username)+"\n          ")]),_vm._ssrNode(" <span class=\"date-posted\" data-v-303e68ac>"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt)))+"</span> <span class=\"mod-options\" data-v-303e68ac>"+((_vm.user)?("<i class=\"ion-trash-a\" data-v-303e68ac></i>"):"<!---->")+"</span>")],2)],2)})],2)])}
var commentsvue_type_template_id_303e68ac_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/comments.vue?vue&type=template&id=303e68ac&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var commentsvue_type_script_lang_js_ = ({
  name: 'Comments',
  props: {
    slug: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      comments: [],
      commentBody: ''
    };
  },

  mounted() {
    this.getArticleComments();
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    async getArticleComments() {
      const {
        data
      } = await Object(api_article["d" /* getArticleComments */])(this.slug);
      this.comments = data.comments || [];
      console.log(data);
    },

    async addComments() {
      await Object(api_article["b" /* addComments */])(this.slug, {
        comment: {
          body: this.commentBody
        }
      });
      await this.getArticleComments();
      this.commentBody = '';
    },

    async removeComments(commentId) {
      if (confirm('确定要删除该评论吗？')) {
        await Object(api_article["h" /* removeComments */])(this.slug, commentId);
        await this.getArticleComments();
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_commentsvue_type_script_lang_js_ = (commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/comments.vue



function comments_injectStyles (context) {
  
  
}

/* normalize component */

var comments_component = Object(componentNormalizer["a" /* default */])(
  components_commentsvue_type_script_lang_js_,
  commentsvue_type_template_id_303e68ac_scoped_true_render,
  commentsvue_type_template_id_303e68ac_scoped_true_staticRenderFns,
  false,
  comments_injectStyles,
  "303e68ac",
  "59f6cd00"
  
)

/* harmony default export */ var comments = (comments_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'articleDetail',

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["e" /* getArticleDetail */])(params.slug);
    const md = new external_markdown_it_default.a();
    const {
      article
    } = data;
    article.body = md.render(article.body);
    return {
      article
    };
  },

  components: {
    ArticleMeta: article_meta,
    Comments: comments
  },

  head() {
    return {
      title: `${this.article.title} - realworld`,
      meta: [{
        hid: 'detail-description',
        name: 'description',
        content: this.article.description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  "74c8cb1c",
  "377711c5"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map