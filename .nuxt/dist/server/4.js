exports.ids = [4];
exports.modules = {

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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=2686faa1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\" data-v-2686faa1>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-2686faa1>","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-2686faa1>","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\" data-v-2686faa1>"+_vm._ssrEscape(_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\" data-v-2686faa1>","</p>",[(!_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")]):_vm._e(),_vm._ssrNode(" "),(_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Need an account?")]):_vm._e()],2),_vm._ssrNode(" "+(_vm._ssrList((_vm.errors),function(messages,key){return ("<ul class=\"error-messages\" data-v-2686faa1>"+(_vm._ssrList((messages),function(msg,index){return ("<li data-v-2686faa1>"+_vm._ssrEscape(_vm._s(key)+" "+_vm._s(msg))+"</li>")}))+"</ul>")}))+" <form data-v-2686faa1>"+((!_vm.isLogin)?("<fieldset class=\"form-group\" data-v-2686faa1><input type=\"text\" placeholder=\"Your Name\" required=\"required\" minlength=\"1\" maxlength=\"20\" autocomplete"+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-2686faa1></fieldset>"):"<!---->")+" <fieldset class=\"form-group\" data-v-2686faa1><input type=\"email\" placeholder=\"Email\" required=\"required\" autocomplete"+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-2686faa1></fieldset> <fieldset class=\"form-group\" data-v-2686faa1><input type=\"password\" placeholder=\"Password\" required=\"required\" minlength=\"8\" autocomplete"+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\" data-v-2686faa1></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-2686faa1>"+_vm._ssrEscape("\n            "+_vm._s(_vm.isLogin ? 'Sign in' : 'Sign up')+"\n          ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=2686faa1&scoped=true&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
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

const cookie =  false ? undefined : undefined;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'hadAuthenticate',
  name: 'login',
  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },
  data: () => ({
    user: {
      username: '',
      email: '',
      password: ''
    },
    errors: {}
  }),
  methods: {
    onLogin() {
      const vm = this;
      const action = this.isLogin ? user["b" /* login */] : user["c" /* register */];
      action({
        user: this.user
      }).then(data => {
        // 将登陆状态存储到全局
        vm.$store.commit('setUser', data.data.user); // 将登陆状态存储到cookie（服务端可以拿到，在服务端渲染时可以再次存到store共享到客户端）

        cookie.set('user', JSON.stringify(data.data.user));
        vm.$router.push('/');
      }).catch(err => {
        vm.errors = err.response.data.errors;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2686faa1",
  "017abd78"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map