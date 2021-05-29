(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{193:function(t,e,r){"use strict";r.d(e,"f",(function(){return c})),r.d(e,"g",(function(){return o})),r.d(e,"e",(function(){return l})),r.d(e,"a",(function(){return m})),r.d(e,"c",(function(){return d})),r.d(e,"i",(function(){return f})),r.d(e,"d",(function(){return v})),r.d(e,"b",(function(){return h})),r.d(e,"h",(function(){return O}));var n=r(63),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},m=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},d=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},h=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})},O=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})}},194:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return l})),r.d(e,"d",(function(){return m}));var n=r(63),c=function(data){return Object(n.b)({method:"POST",url:"/api/users/login",data:data})},o=function(data){return Object(n.b)({method:"POST",url:"/api/users",data:data})},l=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})}},263:function(t,e,r){"use strict";r.r(e);var n=r(4),c=(r(36),r(193)),o=r(207),l=r.n(o),m=r(194),d={name:"ArticleMeta",props:{article:{type:Object,required:!0}},methods:{favourite:function(t){t.favorited?(Object(c.i)(t.slug),t.favorited=!1,t.favoritesCount+=-1):(Object(c.c)(t.slug),t.favorited=!0,t.favoritesCount+=1)},onFollow:function(t){t.author.following?(Object(m.d)(t.author.username),t.author.following=!1):(Object(m.a)(t.author.username),t.author.following=!0)}}},f=r(30),v=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v("\n      "+t._s(t.article.author.username)+"\n    ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt)))])],1),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following},on:{click:function(e){return t.onFollow(t.article)}}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n     \n    "+t._s(t.article.author.following?"UnFollow":"Follow")+" "+t._s(t.article.author.username)+"\n  ")]),t._v("\n    \n  "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited},on:{click:function(e){return t.favourite(t.article)}}},[r("i",{staticClass:"ion-heart"}),t._v("\n     \n    Favorite Post "),r("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])])],1)}),[],!1,null,"cf445950",null).exports,h=(r(37),r(23),r(24),r(49),r(50),r(21)),O=r(48);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var _={name:"Comments",props:{slug:{type:String,required:!0}},data:function(){return{comments:[],commentBody:""}},mounted:function(){this.getArticleComments()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(O.b)(["user"])),methods:{getArticleComments:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.d)(t.slug);case 2:r=e.sent,data=r.data,t.comments=data.comments||[],console.log(data);case 6:case"end":return e.stop()}}),e)})))()},addComments:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.b)(t.slug,{comment:{body:t.commentBody}});case 2:return e.next=4,t.getArticleComments();case 4:t.commentBody="";case 5:case"end":return e.stop()}}),e)})))()},removeComments:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!confirm("确定要删除该评论吗？")){r.next=5;break}return r.next=3,Object(c.h)(e.slug,t);case 3:return r.next=5,e.getArticleComments();case 5:case"end":return r.stop()}}),r)})))()}}},j={name:"articleDetail",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,o,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(c.e)(r.slug);case 3:return n=e.sent,data=n.data,o=new l.a,(article=data.article).body=o.render(article.body),e.abrupt("return",{article:article});case 9:case"end":return e.stop()}}),e)})))()},components:{ArticleMeta:v,Comments:Object(f.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("form",{staticClass:"card comment-form"},[r("div",{staticClass:"card-block"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentBody,expression:"commentBody"}],staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"},domProps:{value:t.commentBody},on:{input:function(e){e.target.composing||(t.commentBody=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"card-footer"},[r("img",{staticClass:"comment-author-img",attrs:{src:t.user.image}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return e.preventDefault(),t.addComments(e)}}},[t._v("\n          Post Comment\n        ")])])]),t._v(" "),t._l(t.comments,(function(e){return r("div",{staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v(t._s(e.body))])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[r("img",{staticClass:"comment-author-img",attrs:{src:e.author.image}})]),t._v(" "),r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[t._v("\n            "+t._s(e.author.username)+"\n          ")]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(e.createdAt)))]),t._v(" "),r("span",{staticClass:"mod-options"},[t.user?r("i",{staticClass:"ion-trash-a",on:{click:function(r){return t.removeComments(e.id)}}}):t._e()])],1)])}))],2)])}),[],!1,null,"303e68ac",null).exports},head:function(){return{title:"".concat(this.article.title," - realworld"),meta:[{hid:"detail-description",name:"description",content:this.article.description}]}}},w=Object(f.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("article-meta",{attrs:{article:t.article}})],1)]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.article.body)}})]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"article-actions"},[r("article-meta",{attrs:{article:t.article}})],1),t._v(" "),r("comments",{attrs:{slug:t.article.slug}})],1)])}),[],!1,null,"74c8cb1c",null);e.default=w.exports}}]);