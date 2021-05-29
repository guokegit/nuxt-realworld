exports.ids = [3];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=3969cdbf&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-3969cdbf><div class=\"container\" data-v-3969cdbf><h1 class=\"logo-font\" data-v-3969cdbf>过客</h1> <p data-v-3969cdbf>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-3969cdbf>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-3969cdbf>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-3969cdbf>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-3969cdbf><ul class=\"nav nav-pills outline-active\" data-v-3969cdbf>"+((_vm.user)?("<li class=\"nav-item\" data-v-3969cdbf><a"+(_vm._ssrClass("nav-link",{active: _vm.tab==='YOUR_FEED'}))+" data-v-3969cdbf>Your Feed</a></li>"):"<!---->")+" <li class=\"nav-item\" data-v-3969cdbf><a"+(_vm._ssrClass("nav-link",{active: _vm.tab==='GLOBAL_FEED'}))+" data-v-3969cdbf>Global Feed</a></li> "+((_vm.tag)?("<li class=\"nav-item\" data-v-3969cdbf><a"+(_vm._ssrClass("nav-link",{active: _vm.tab==='TAG_FEED'}))+" data-v-3969cdbf>"+_vm._ssrEscape("#"+_vm._s(_vm.tag))+"</a></li>"):"<!---->")+"</ul></div> "),_vm._ssrNode("<div style=\"max-height: calc(100vh - 200px); width: 100%; overflow: auto;\" data-v-3969cdbf>","</div>",_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-3969cdbf>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-3969cdbf>","</div>",[_c('nuxt-link',{attrs:{"to":{
                    name: 'profile',
                    params:{
                       username: article.author.username
                    }
                  }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-3969cdbf>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                      name: 'profile',
                      params:{
                         username: article.author.username
                      }
                    }}},[_vm._v("\n                    "+_vm._s(article.author.username)+"\n                  ")]),_vm._ssrNode(" <span class=\"date\" data-v-3969cdbf>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active: article.favorited}))+" data-v-3969cdbf><i class=\"ion-heart\" data-v-3969cdbf></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n                ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{name: 'article', params: {slug: article.slug}}}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),0),_vm._ssrNode(" <nav data-v-3969cdbf><ul class=\"pagination\" data-v-3969cdbf>"+(_vm._ssrList((_vm.totalPage),function(pageNumber){return ("<li"+(_vm._ssrClass("page-item",{active: pageNumber === _vm.page }))+" data-v-3969cdbf><a class=\"page-link\" data-v-3969cdbf>"+_vm._ssrEscape(_vm._s(pageNumber))+"</a></li>")}))+"</ul></nav>")],2),_vm._ssrNode(" <div class=\"col-md-3\" data-v-3969cdbf><div class=\"sidebar\" data-v-3969cdbf><p data-v-3969cdbf>Popular Tags</p> <div class=\"tag-list\" data-v-3969cdbf>"+(_vm._ssrList((_vm.tags),function(tagStr){return ("<a class=\"tag-pill tag-default\" data-v-3969cdbf>"+_vm._ssrEscape(_vm._s(tagStr))+"</a>")}))+"</div></div></div>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=3969cdbf&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/tags.js

const getTags = params => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/tags',
    params
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'home',

  data() {
    return {
      articles: [],
      articlesTotal: 0,
      limit: 10,
      page: 1,
      tags: [],
      tag: '',
      tab: this.user ? 'YOUR_FEED' : 'GLOBAL_FEED'
    };
  },

  fetch() {
    this.searchArticleList();
    this.getTags();
  },

  computed: {
    totalPage() {
      return Math.ceil(this.articlesTotal / this.limit);
    },

    ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    async searchArticleList() {
      const getArticle = this.user && this.tab === 'YOUR_FEED' ? article["g" /* getFeedArticles */] : article["f" /* getArticleList */];
      const {
        data
      } = await getArticle({
        limit: this.limit,
        offset: (this.page - 1) * this.limit,
        tag: this.tag
      });
      this.articles = data.articles;
      this.articlesTotal = data.articlesCount;
    },

    async getTags() {
      const {
        data
      } = await getTags();
      this.tags = data.tags.filter(tag => tag);
    },

    changePage(pageNumber) {
      this.page = pageNumber;
      this.searchArticleList();
    },

    selectTag(tagStr) {
      this.tag = tagStr;
      this.tab = 'TAG_FEED';
      this.initPage();
      this.searchArticleList();
    },

    changeTab(tabKey) {
      this.tab = tabKey;

      if (this.tab !== 'TAG_FEED') {
        this.tag = '';
      }

      this.initPage();
      this.searchArticleList();
    },

    initPage() {
      this.page = 1;
    },

    favourite(art) {
      if (art.favorited) {
        Object(article["i" /* removeFavourite */])(art.slug);
        art.favorited = false;
        art.favoritesCount += -1;
      } else {
        Object(article["c" /* addFavourite */])(art.slug);
        art.favorited = true;
        art.favoritesCount += 1;
      }

      this.searchArticleList();
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3969cdbf",
  "d7d4b6f4"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map