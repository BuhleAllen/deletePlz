exports.ids = [4,2];
exports.modules = {

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0fb8d49a", content, true, context)
};

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_5859de1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_5859de1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_5859de1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_5859de1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loading_vue_vue_type_style_index_0_id_5859de1a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading[data-v-5859de1a]{height:100vh;width:100%;display:flex;justify-content:center;align-items:center}@-webkit-keyframes circle-loading-data-v-5859de1a{to{transform:rotate(1turn)}}@keyframes circle-loading-data-v-5859de1a{to{transform:rotate(1turn)}}.loading span[data-v-5859de1a]{display:block;width:70px;height:70px;border-radius:50%;border:2px solid transparent;border-top-color:#fff;-webkit-animation:circle-loading-data-v-5859de1a 1.2s ease infinite;animation:circle-loading-data-v-5859de1a 1.2s ease infinite}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loading.vue?vue&type=template&id=5859de1a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loading"},[_vm._ssrNode("<span data-v-5859de1a></span>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Loading.vue?vue&type=template&id=5859de1a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Loadingvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Loadingvue_type_script_lang_js_ = (Loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Loading.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(24)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5859de1a",
  "13fff4a2"
  
)

/* harmony default export */ var Loading = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("57b288e7", content, true, context)
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_movieid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_movieid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_movieid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_movieid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_movieid_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".single-movie{color:#fff;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:32px 16px}.single-movie .button{align-self:flex-start;margin-bottom:32px}.single-movie .movie-info{display:flex;flex-direction:column;align-items:center;grid-gap:32px;gap:32px;color:#fff}@media(min-width:800px){.single-movie .movie-info{flex-direction:row;align-items:flex-start}}.single-movie .movie-info .movie-img img{max-height:500px;width:100%}@media(min-width:800px){.single-movie .movie-info .movie-img img{max-height:700px;width:auto}}.single-movie .movie-info .movie-content h1{font-size:56px;font-weight:400}.single-movie .movie-info .movie-content .movie-fact{margin-top:12px;font-size:20px;line-height:1.5}.single-movie .movie-info .movie-content .movie-fact span{font-weight:600;text-decoration:underline}.single-movie .movie-info .movie-content .tagline{font-style:italic}.single-movie .movie-info .movie-content .tagline span{font-style:normal}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/movies/_movieid.vue?vue&type=template&id=7ed1c96c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.$fetchState.pending)?_c('Loading'):_c('div',{staticClass:"single-movie container"},[_c('NuxtLink',{staticClass:"button",attrs:{"to":{ name: 'index' }}},[_vm._v(" Back ")]),_vm._v(" "),_c('div',{staticClass:"movie-info"},[_c('div',{staticClass:"movie-img"},[_c('img',{attrs:{"src":("https://image.tmdb.org/t/p/w500/" + (_vm.movie.poster_path)),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"movie-content"},[_c('h1',[_vm._v("Title: "+_vm._s(_vm.movie.title))]),_vm._v(" "),_c('p',{staticClass:"movie-fact tagline"},[_c('span',[_vm._v("Tagline:")]),_vm._v(" \""+_vm._s(_vm.movie.tagline)+"\"\n      ")]),_vm._v(" "),_c('p',{staticClass:"movie-fact"},[_c('span',[_vm._v("Released:")]),_vm._v("\n        "+_vm._s(new Date(_vm.movie.release_date).toLocaleString('en-us', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          }))+"\n      ")]),_vm._v(" "),_c('p',{staticClass:"movie-fact"},[_c('span',[_vm._v("Duration:")]),_vm._v(" "+_vm._s(_vm.movie.runtime)+" minutes\n      ")]),_vm._v(" "),_c('p',{staticClass:"movie-fact"},[_c('span',[_vm._v("Revenue:")]),_vm._v("\n        "+_vm._s(_vm.movie.revenue.toLocaleString('en-us', {
            style: 'currency',
            currency: 'USD',
          }))+"\n      ")]),_vm._v(" "),_c('p',{staticClass:"movie-fact"},[_c('span',[_vm._v("Overview:")]),_vm._v(" "+_vm._s(_vm.movie.overview))])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/movies/_movieid.vue?vue&type=template&id=7ed1c96c&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/movies/_movieid.vue?vue&type=script&lang=js&
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

/* harmony default export */ var _movieidvue_type_script_lang_js_ = ({
  name: 'singleMovie',

  async fetch() {
    await this.getSingleMovie();
  },

  // delay for fetching
  fetchDelay: 1000,

  head() {
    return {
      title: this.movie.title
    };
  },

  data() {
    return {
      movie: ''
    };
  },

  methods: {
    async getSingleMovie() {
      const data = external_axios_default.a.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US`);
      const result = await data;
      this.movie = result.data;
    }

  }
});
// CONCATENATED MODULE: ./pages/movies/_movieid.vue?vue&type=script&lang=js&
 /* harmony default export */ var movies_movieidvue_type_script_lang_js_ = (_movieidvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/movies/_movieid.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  movies_movieidvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6037ae5e"
  
)

/* harmony default export */ var _movieid = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Loading: __webpack_require__(27).default})


/***/ })

};;
//# sourceMappingURL=_movieid.js.map