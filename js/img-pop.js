/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "31f2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8a60");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "35d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesToShadowDOM; });


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name) {
      return true
    }
    return value != null
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      super();
      this.attachShadow({ mode: 'open' });

      const wrapper = this._wrapper = new Vue({
        name: 'shadow-root',
        customElement: this,
        shadowRoot: this.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === this) {
            syncAttribute(this, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            this.childNodes
          ));
        }
      });
      observer.observe(this, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/lib/css-base.js
var css_base = __webpack_require__("2350");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("35d6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Import.vue?vue&type=template&id=7ea16102&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Import.vue?vue&type=template&id=7ea16102&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HelloWorld.vue?vue&type=template&id=66477d9e&
var HelloWorldvue_type_template_id_66477d9e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"img-pop-container"},[_c('div',{ref:"injectStyle"}),_c('div',{staticClass:"img-pop-container-relative"},[_c('img',{ref:"isInitialImg",staticClass:"img",class:[{invisible : _vm.imageOpen}, _vm.userDefinedClass],attrs:{"customClass":_vm.customClass,"src":_vm.src,"alt":_vm.alt},on:{"click":_vm.open}})]),_c('div',{staticClass:"img-pop-container-popped",class:{hide : !_vm.imageOpen}},[_c('div',{staticClass:"opaqueOverlay"}),_c('div',{staticClass:"close",on:{"click":_vm.close}},[_c('span',{staticClass:"close_bar"},[_vm._v(" ")]),_c('span',{staticClass:"close_bar"},[_vm._v(" ")])]),_c('div',{staticClass:"web-component"},[_c('div',{staticClass:"web-component-img"},[_c('img',{staticClass:"img isPoppedImg",attrs:{"src":_vm.src,"alt":_vm.alt}})]),(_vm.title || _vm.text)?_c('div',{staticClass:"web-component-text"},[_c('h3',[_vm._v(_vm._s(_vm.title))]),_c('p',[_vm._v(_vm._s(_vm.text))])]):_vm._e()])])])}
var HelloWorldvue_type_template_id_66477d9e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=template&id=66477d9e&

// EXTERNAL MODULE: ./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js
var webcomponents_bundle = __webpack_require__("ec2e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HelloWorld.vue?vue&type=script&lang=js&
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



/* harmony default export */ var HelloWorldvue_type_script_lang_js_ = ({
  name: "HelloWorld",
  props: {
    text: "",
    title: "",
    customClass: "",
    src: "",
    alt: "",
  },
  data() {
    return {
      imageOpen: false,
      injectStyle: false,
      body: '',
      userDefinedClass: ''
    }
  },
  mounted () {
    this.body = document.getElementsByTagName('body');
    let component = this;

    console.log(component.$props);
    // component.$refs['isInitialImg'].style.width = component.$props['customWidth'];

    // take user's class and assign to shadown DOM el
    component.userDefinedClass = component.$props.customClass

    window.addEventListener('resize', () => { component.close() });
  },
  methods: {

    open: function(e) {

      // ui updates
      this.imageOpen = true;
      this.injectStyle = true;
      this.body[0].style.overflow = 'hidden';

      // initiate variables
      let injectStyleEl = '';
      let initialEl = '';
      let winWidth = '';
      let winHeight = ''
      let imgNaturalWidth = '';
      let imgNaturalHeight = '';
      let posImg = '';
      let goToLeft = '';
      let poppedImgWidth = '';
      let poppedImgHeight = '';
      let imgPortrait = false;

      // set variables
      injectStyleEl = this.$refs.injectStyle;
      initialEl = this.$refs.isInitialImg;
      winWidth = window.innerWidth;
      winHeight = window.innerHeight;
      imgNaturalWidth = e.target.naturalWidth;
      imgNaturalHeight = e.target.naturalHeight;
      posImg = e.target.getBoundingClientRect();
      imgPortrait = false;


      poppedImgWidth = (imgNaturalWidth > winWidth) ? winWidth-100 : imgNaturalWidth;
      poppedImgHeight = (imgNaturalHeight > winHeight) ? winHeight-500 : imgNaturalHeight;

      if(imgNaturalHeight > winHeight) {
        imgPortrait = false;
        poppedImgWidth = winHeight*.5;
      }

      // set img left corner position
      goToLeft = (winWidth-poppedImgWidth) / 2;

      injectStyleEl.innerHTML = `
        <style>
          .isPoppedImg {
            position: fixed;
            width: ${initialEl.offsetWidth}px;
            height: ${initialEl.offsetHeight}px;
            top: ${posImg.top}px;
            left: ${posImg.left}px;
            animation: pop;
            animation-duration: 500ms;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
          }
          @keyframes pop {
            0% {
              opacity: 0;
              position: fixed;
              width: ${(imgPortrait) ? 'auto' : initialEl.offsetWidth+'px'};
              height: ${(imgPortrait) ? initialEl.offsetHeight+'px' : 'auto'};
              top: ${posImg.top}px;
              left: ${posImg.left}px;
            }
            25% {
              opacity: .5;
            }
            50% {
              opacity: 1;
            }
            100% {
              position: fixed;
              width: ${(imgPortrait) ? 'auto' : poppedImgWidth+'px'};
              height: ${(imgPortrait) ? poppedImgHeight+'px' : 'auto'};
              margin: 100px auto;
              left: ${goToLeft}px;
              top: 4em;
            }
          }
          @media screen and (max-width: 600px) {
            @keyframes pop {
              0% {
                opacity: 0;
                position: fixed;
                width: ${(imgPortrait) ? 'auto' : initialEl.offsetWidth+'px'};
                height: ${(imgPortrait) ? initialEl.offsetHeight+'px' : 'auto'};
                top: ${posImg.top}px;
                left: ${posImg.left}px;
              }
              25% {
                opacity: .5;
              }
              50% {
                opacity: 1;
              }
              100% {
                position: fixed;
                width: ${(imgPortrait) ? 'auto' : poppedImgWidth+'px'};
                height: ${(imgPortrait) ? poppedImgHeight+'px' : 'auto'};
                margin: 100px auto;
                left: ${goToLeft}px;
                top: 10em;
              }
            }
          }
        </style>
        `
    },
    close: function() {
      this.imageOpen = false;
      this.body[0].style.overflow = 'initial';

      // clear styles
      let injectStyleEl = this.$refs.injectStyle;
      injectStyleEl.innerHTML = "";
    }

  }
});

// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HelloWorldvue_type_script_lang_js_ = (HelloWorldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/HelloWorld.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("31f2")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  components_HelloWorldvue_type_script_lang_js_,
  HelloWorldvue_type_template_id_66477d9e_render,
  HelloWorldvue_type_template_id_66477d9e_staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

component.options.__file = "HelloWorld.vue"
/* harmony default export */ var HelloWorld = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Import.vue?vue&type=script&lang=js&shadow
//
//
//
//
//





const ImgPop = vue_wc_wrapper(external_Vue_default.a, HelloWorld);

window.customElements.define("img-pop", ImgPop);

external_Vue_default.a.config.productionTip = false;

// CONCATENATED MODULE: ./src/Import.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var Importvue_type_script_lang_js_shadow = (/* Cannot get final name for export "default" in "./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Import.vue?vue&type=script&lang=js&shadow" (known exports: , known reexports: ) */ undefined); 
// CONCATENATED MODULE: ./src/Import.vue?shadow





/* normalize component */

var Importshadow_component = normalizeComponent(
  Importvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

Importshadow_component.options.__file = "Import.vue"
/* harmony default export */ var Importshadow = (Importshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('img-pop', vue_wc_wrapper(external_Vue_default.a, Importshadow))

/***/ }),

/***/ "8a60":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ca0a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("166ab961", content, shadowRoot)
};

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca0a":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.hide{display:none\n}\n.invisible{visibility:hidden\n}\n.web-component{overflow:scroll;position:fixed;width:100%;height:100%;top:0;left:0\n}\n.web-component-img{position:absolute\n}\n.web-component-text{background-color:#fff;position:absolute;width:100vw;height:30%;top:80vh;z-index:1;padding:0 0 30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-shadow:-4px -4px 14px hsla(0,0%,67.1%,.1);box-shadow:-4px -4px 14px hsla(0,0%,67.1%,.1)\n}\n.web-component-text p{width:80%;text-align:center;margin:0 auto\n}\n.opaqueOverlay{margin:0;cursor:auto;width:100%;height:100%;top:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:scroll;background-color:#fff;position:fixed;z-index:0;opacity:0;-webkit-animation:opaqueOverlay;animation:opaqueOverlay;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards\n}\n@-webkit-keyframes opaqueOverlay{\n0%{opacity:0\n}\nto{opacity:1\n}\n}\n@keyframes opaqueOverlay{\n0%{opacity:0\n}\nto{opacity:1\n}\n}\n.isPoppedImg{z-index:1\n}\n.img-pop-container-relative{float:right\n}\n.img-pop-container-popped,.img-pop-container-relative{border:0;margin:0;padding:0\n}\n.img-pop-container-popped{width:100%;height:100%\n}\n.img{border:0;margin:0;padding:0\n}\n.close{color:#383838;font-size:44px;width:60px;height:60px;position:fixed;top:0;right:20px;cursor:pointer;-webkit-animation:closeFlyIn;animation:closeFlyIn;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-delay:.3s;animation-delay:.3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-backface-visibility:hidden;backface-visibility:hidden;margin:24px -124px 24px -24px;z-index:111111\n}\n.close .close_bar{background-color:#383838\n}\n.close .close_bar:first-child{position:absolute;width:4px;-webkit-animation:closeBar_One;animation:closeBar_One;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-delay:.75s;animation-delay:.75s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;right:26px;top:-5px\n}\n.close .close_bar:nth-child(2){position:absolute;width:4px;-webkit-animation:closeBar_Two;animation:closeBar_Two;-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-delay:.75s;animation-delay:.75s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;right:26px;top:-5px\n}\n@-webkit-keyframes closeBar_One{\n0%{-webkit-transform:rotate(0);transform:rotate(0);opacity:0\n}\nto{opacity:1;-webkit-transform:rotate(45deg);transform:rotate(45deg);background-color:#383838\n}\n}\n@keyframes closeBar_One{\n0%{-webkit-transform:rotate(0);transform:rotate(0);opacity:0\n}\nto{opacity:1;-webkit-transform:rotate(45deg);transform:rotate(45deg);background-color:#383838\n}\n}\n@-webkit-keyframes closeBar_Two{\n0%{-webkit-transform:rotate(0);transform:rotate(0);opacity:0\n}\nto{opacity:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);background-color:#383838\n}\n}\n@keyframes closeBar_Two{\n0%{-webkit-transform:rotate(0);transform:rotate(0);opacity:0\n}\nto{opacity:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);background-color:#383838\n}\n}\n@-webkit-keyframes closeFlyIn{\n0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin:24px -30px 24px -24px;opacity:0\n}\nto{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:1;margin:24px 24px 24px -24px\n}\n}\n@keyframes closeFlyIn{\n0%{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin:24px -30px 24px -24px;opacity:0\n}\nto{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:1;margin:24px 24px 24px -24px\n}\n}", ""]);

// exports


/***/ }),

/***/ "ec2e":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var r,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},fa="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ha(){ha=function(){};fa.Symbol||(fa.Symbol=ia)}var ia=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function ja(){ha();var a=fa.Symbol.iterator;a||(a=fa.Symbol.iterator=fa.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ka(this)}});ja=function(){}}function ka(a){var b=0;return la(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function la(a){ja();a={next:a};a[fa.Symbol.iterator]=function(){return this};return a}function ma(a){ja();var b=a[Symbol.iterator];return b?b.call(a):ka(a)}
function na(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var oa;if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var qa={Na:!0},ra={};try{ra.__proto__=qa;pa=ra.Na;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;function ta(){this.f=!1;this.b=null;this.fa=void 0;this.a=1;this.G=0;this.c=null}
function ua(a){if(a.f)throw new TypeError("Generator is already running");a.f=!0}ta.prototype.m=function(a){this.fa=a};function va(a,b){a.c={Qa:b,Ua:!0};a.a=a.G}ta.prototype.return=function(a){this.c={return:a};this.a=this.G};function wa(a,b){a.a=3;return{value:b}}function xa(a){this.a=new ta;this.b=a}function ya(a,b){ua(a.a);var c=a.a.b;if(c)return Ba(a,"return"in c?c["return"]:function(a){return{value:a,done:!0}},b,a.a.return);a.a.return(b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.a.b,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.f=!1,e;var f=e.value}catch(g){return a.a.b=null,va(a.a,g),Ca(a)}a.a.b=null;d.call(a.a,f);return Ca(a)}function Ca(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.f=!1,{value:b.value,done:!1}}catch(c){a.a.fa=void 0,va(a.a,c)}a.a.f=!1;if(a.a.c){b=a.a.c;a.a.c=null;if(b.Ua)throw b.Qa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ua(a.a);a.a.b?b=Ba(a,a.a.b.next,b,a.a.m):(a.a.m(b),b=Ca(a));return b};this.throw=function(b){ua(a.a);a.a.b?b=Ba(a,a.a.b["throw"],b,a.a.m):(va(a.a,b),b=Ca(a));return b};this.return=function(b){return ya(a,b)};ja();this[Symbol.iterator]=function(){return this}}function Ea(a,b){b=new Da(new xa(b));sa&&sa(b,a.prototype);return b}
(function(){if(!function(){var a=document.createEvent("Event");a.initEvent("foo",!0,!0);a.preventDefault();return a.defaultPrevented}()){var a=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(a.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var b=/Trident/.test(navigator.userAgent);if(!window.CustomEvent||b&&"function"!==typeof window.CustomEvent)window.CustomEvent=function(a,b){b=b||{};var c=document.createEvent("CustomEvent");
c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c},window.CustomEvent.prototype=window.Event.prototype;if(!window.Event||b&&"function"!==typeof window.Event){var c=window.Event;window.Event=function(a,b){b=b||{};var c=document.createEvent("Event");c.initEvent(a,!!b.bubbles,!!b.cancelable);return c};if(c)for(var d in c)window.Event[d]=c[d];window.Event.prototype=c.prototype}if(!window.MouseEvent||b&&"function"!==typeof window.MouseEvent){b=window.MouseEvent;window.MouseEvent=function(a,
b){b=b||{};var c=document.createEvent("MouseEvent");c.initMouseEvent(a,!!b.bubbles,!!b.cancelable,b.view||window,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget);return c};if(b)for(d in b)window.MouseEvent[d]=b[d];window.MouseEvent.prototype=b.prototype}Array.from||(Array.from=function(a){return[].slice.call(a)});Object.assign||(Object.assign=function(a,b){for(var c=[].slice.call(arguments,1),d=0,e;d<c.length;d++)if(e=c[d])for(var f=
a,n=e,p=Object.getOwnPropertyNames(n),G=0;G<p.length;G++)e=p[G],f[e]=n[e];return a})})(window.WebComponents);(function(){function a(){}function b(a,b){if(!a.childNodes.length)return[];switch(a.nodeType){case Node.DOCUMENT_NODE:return R.call(a,b);case Node.DOCUMENT_FRAGMENT_NODE:return yb.call(a,b);default:return w.call(a,b)}}var c="undefined"===typeof HTMLTemplateElement,d=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),e=!1;/Trident/.test(navigator.userAgent)&&function(){function a(a,b){if(a instanceof DocumentFragment)for(var d;d=a.firstChild;)c.call(this,d,b);else c.call(this,
a,b);return a}e=!0;var b=Node.prototype.cloneNode;Node.prototype.cloneNode=function(a){a=b.call(this,a);this instanceof DocumentFragment&&(a.__proto__=DocumentFragment.prototype);return a};DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll;DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector;Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},
configurable:!0},nodeName:{get:function(){return"#document-fragment"},configurable:!0}});var c=Node.prototype.insertBefore;Node.prototype.insertBefore=a;var d=Node.prototype.appendChild;Node.prototype.appendChild=function(b){b instanceof DocumentFragment?a.call(this,b,null):d.call(this,b);return b};var f=Node.prototype.removeChild,g=Node.prototype.replaceChild;Node.prototype.replaceChild=function(b,c){b instanceof DocumentFragment?(a.call(this,b,c),f.call(this,c)):g.call(this,b,c);return c};Document.prototype.createDocumentFragment=
function(){var a=this.createElement("df");a.__proto__=DocumentFragment.prototype;return a};var h=Document.prototype.importNode;Document.prototype.importNode=function(a,b){b=h.call(this,a,b||!1);a instanceof DocumentFragment&&(b.__proto__=DocumentFragment.prototype);return b}}();var f=Node.prototype.cloneNode,g=Document.prototype.createElement,h=Document.prototype.importNode,k=Node.prototype.removeChild,l=Node.prototype.appendChild,n=Node.prototype.replaceChild,p=DOMParser.prototype.parseFromString,
G=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML")||{get:function(){return this.innerHTML},set:function(a){this.innerHTML=a}},u=Object.getOwnPropertyDescriptor(window.Node.prototype,"childNodes")||{get:function(){return this.childNodes}},w=Element.prototype.querySelectorAll,R=Document.prototype.querySelectorAll,yb=DocumentFragment.prototype.querySelectorAll,zb=function(){if(!c){var a=document.createElement("template"),b=document.createElement("template");b.content.appendChild(document.createElement("div"));
a.content.appendChild(b);a=a.cloneNode(!0);return 0===a.content.childNodes.length||0===a.content.firstChild.content.childNodes.length||d}}();if(c){var U=document.implementation.createHTMLDocument("template"),Ma=!0,q=document.createElement("style");q.textContent="template{display:none;}";var za=document.head;za.insertBefore(q,za.firstElementChild);a.prototype=Object.create(HTMLElement.prototype);var da=!document.createElement("div").hasOwnProperty("innerHTML");a.R=function(b){if(!b.content&&b.namespaceURI===
document.documentElement.namespaceURI){b.content=U.createDocumentFragment();for(var c;c=b.firstChild;)l.call(b.content,c);if(da)b.__proto__=a.prototype;else if(b.cloneNode=function(b){return a.b(this,b)},Ma)try{m(b),y(b)}catch(Hh){Ma=!1}a.a(b.content)}};var ba={option:["select"],thead:["table"],col:["colgroup","table"],tr:["tbody","table"],th:["tr","tbody","table"],td:["tr","tbody","table"]},m=function(b){Object.defineProperty(b,"innerHTML",{get:function(){return ea(this)},set:function(b){var c=ba[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(b)||
["",""])[1].toLowerCase()];if(c)for(var d=0;d<c.length;d++)b="<"+c[d]+">"+b+"</"+c[d]+">";U.body.innerHTML=b;for(a.a(U);this.content.firstChild;)k.call(this.content,this.content.firstChild);b=U.body;if(c)for(d=0;d<c.length;d++)b=b.lastChild;for(;b.firstChild;)l.call(this.content,b.firstChild)},configurable:!0})},y=function(a){Object.defineProperty(a,"outerHTML",{get:function(){return"<template>"+this.innerHTML+"</template>"},set:function(a){if(this.parentNode){U.body.innerHTML=a;for(a=this.ownerDocument.createDocumentFragment();U.body.firstChild;)l.call(a,
U.body.firstChild);n.call(this.parentNode,a,this)}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");},configurable:!0})};m(a.prototype);y(a.prototype);a.a=function(c){c=b(c,"template");for(var d=0,e=c.length,f;d<e&&(f=c[d]);d++)a.R(f)};document.addEventListener("DOMContentLoaded",function(){a.a(document)});Document.prototype.createElement=function(){var b=g.apply(this,arguments);"template"===b.localName&&a.R(b);return b};DOMParser.prototype.parseFromString=
function(){var b=p.apply(this,arguments);a.a(b);return b};Object.defineProperty(HTMLElement.prototype,"innerHTML",{get:function(){return ea(this)},set:function(b){G.set.call(this,b);a.a(this)},configurable:!0,enumerable:!0});var ca=/[&\u00A0"]/g,Ab=/[&\u00A0<>]/g,Na=function(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}};q=function(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b};var Aa=q("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
Oa=q("style script xmp iframe noembed noframes plaintext noscript".split(" ")),ea=function(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):u.get.call(a),e=0,f=d.length,g;e<f&&(g=d[e]);e++){a:{var h=g;var k=a;var l=b;switch(h.nodeType){case Node.ELEMENT_NODE:for(var n=h.localName,m="<"+n,p=h.attributes,w=0;k=p[w];w++)m+=" "+k.name+'="'+k.value.replace(ca,Na)+'"';m+=">";h=Aa[n]?m:m+ea(h,l)+"</"+n+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&Oa[k.localName]?h:h.replace(Ab,Na);break a;
case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),Error("not implemented");}}c+=h}return c}}if(c||zb){a.b=function(a,b){var c=f.call(a,!1);this.R&&this.R(c);b&&(l.call(c.content,f.call(a.content,!0)),Pa(c.content,a.content));return c};var Pa=function(c,d){if(d.querySelectorAll&&(d=b(d,"template"),0!==d.length)){c=b(c,"template");for(var e=0,f=c.length,g,h;e<f;e++)h=d[e],g=c[e],a&&a.R&&a.R(h),n.call(g.parentNode,tf.call(h,!0),g)}},tf=Node.prototype.cloneNode=
function(b){if(!e&&d&&this instanceof DocumentFragment)if(b)var c=uf.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else this.nodeType===Node.ELEMENT_NODE&&"template"===this.localName&&this.namespaceURI==document.documentElement.namespaceURI?c=a.b(this,b):c=f.call(this,b);b&&Pa(c,this);return c},uf=Document.prototype.importNode=function(c,d){d=d||!1;if("template"===c.localName)return a.b(c,d);var e=h.call(this,c,d);if(d){Pa(e,c);c=b(e,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
for(var f,k=0;k<c.length;k++){f=c[k];d=g.call(document,"script");d.textContent=f.textContent;for(var l=f.attributes,m=0,p;m<l.length;m++)p=l[m],d.setAttribute(p.name,p.value);n.call(f.parentNode,d,f)}}return e}}c&&(window.HTMLTemplateElement=a)})();var Fa=setTimeout;function Ga(){}function Ha(a,b){return function(){a.apply(b,arguments)}}function t(a){if(!(this instanceof t))throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this.J=0;this.wa=!1;this.A=void 0;this.U=[];Ia(a,this)}
function Ja(a,b){for(;3===a.J;)a=a.A;0===a.J?a.U.push(b):(a.wa=!0,Ka(function(){var c=1===a.J?b.Wa:b.Xa;if(null===c)(1===a.J?La:Qa)(b.ra,a.A);else{try{var d=c(a.A)}catch(e){Qa(b.ra,e);return}La(b.ra,d)}}))}function La(a,b){try{if(b===a)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"===typeof b||"function"===typeof b)){var c=b.then;if(b instanceof t){a.J=3;a.A=b;Ra(a);return}if("function"===typeof c){Ia(Ha(c,b),a);return}}a.J=1;a.A=b;Ra(a)}catch(d){Qa(a,d)}}
function Qa(a,b){a.J=2;a.A=b;Ra(a)}function Ra(a){2===a.J&&0===a.U.length&&Ka(function(){a.wa||"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",a.A)});for(var b=0,c=a.U.length;b<c;b++)Ja(a,a.U[b]);a.U=null}function Sa(a,b,c){this.Wa="function"===typeof a?a:null;this.Xa="function"===typeof b?b:null;this.ra=c}function Ia(a,b){var c=!1;try{a(function(a){c||(c=!0,La(b,a))},function(a){c||(c=!0,Qa(b,a))})}catch(d){c||(c=!0,Qa(b,d))}}
t.prototype["catch"]=function(a){return this.then(null,a)};t.prototype.then=function(a,b){var c=new this.constructor(Ga);Ja(this,new Sa(a,b,c));return c};t.prototype["finally"]=function(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){return b.reject(c)})})};
function Ta(a){return new t(function(b,c){function d(a,g){try{if(g&&("object"===typeof g||"function"===typeof g)){var h=g.then;if("function"===typeof h){h.call(g,function(b){d(a,b)},c);return}}e[a]=g;0===--f&&b(e)}catch(n){c(n)}}if(!a||"undefined"===typeof a.length)throw new TypeError("Promise.all accepts an array");var e=Array.prototype.slice.call(a);if(0===e.length)return b([]);for(var f=e.length,g=0;g<e.length;g++)d(g,e[g])})}
function Ua(a){return a&&"object"===typeof a&&a.constructor===t?a:new t(function(b){b(a)})}function Va(a){return new t(function(b,c){c(a)})}function Wa(a){return new t(function(b,c){for(var d=0,e=a.length;d<e;d++)a[d].then(b,c)})}var Ka="function"===typeof setImmediate&&function(a){setImmediate(a)}||function(a){Fa(a,0)};/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
if(!window.Promise){window.Promise=t;t.prototype.then=t.prototype.then;t.all=Ta;t.race=Wa;t.resolve=Ua;t.reject=Va;var Xa=document.createTextNode(""),Ya=[];(new MutationObserver(function(){for(var a=Ya.length,b=0;b<a;b++)Ya[b]();Ya.splice(0,a)})).observe(Xa,{characterData:!0});Ka=function(a){Ya.push(a);Xa.textContent=0<Xa.textContent.length?"":"a"}};/*
 Copyright (C) 2015 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(a,b){if(!(b in a)){var c=typeof global===typeof c?window:global,d=0,e=""+Math.random(),f="__\u0001symbol@@"+e,g=a.getOwnPropertyNames,h=a.getOwnPropertyDescriptor,k=a.create,l=a.keys,n=a.freeze||a,p=a.defineProperty,G=a.defineProperties,u=h(a,"getOwnPropertyNames"),w=a.prototype,R=w.hasOwnProperty,yb=w.propertyIsEnumerable,zb=w.toString,U=function(a,b,c){R.call(a,f)||p(a,f,{enumerable:!1,configurable:!1,writable:!1,value:{}});a[f]["@@"+b]=c},Ma=function(a,b){var c=k(a);g(b).forEach(function(a){ba.call(b,
a)&&Aa(c,a,b[a])});return c},q=function(){},za=function(a){return a!=f&&!R.call(ca,a)},da=function(a){return a!=f&&R.call(ca,a)},ba=function(a){var b=""+a;return da(b)?R.call(this,b)&&this[f]["@@"+b]:yb.call(this,a)},m=function(b){p(w,b,{enumerable:!1,configurable:!0,get:q,set:function(a){ea(this,b,{enumerable:!1,configurable:!0,writable:!0,value:a});U(this,b,!0)}});return n(ca[b]=p(a(b),"constructor",Ab))},y=function(a){if(this&&this!==c)throw new TypeError("Symbol is not a constructor");return m("__\u0001symbol:".concat(a||
"",e,++d))},ca=k(null),Ab={value:y},Na=function(a){return ca[a]},Aa=function(a,b,c){var d=""+b;if(da(d)){b=ea;if(c.enumerable){var e=k(c);e.enumerable=!1}else e=c;b(a,d,e);U(a,d,!!c.enumerable)}else p(a,b,c);return a},Oa=function(a){return g(a).filter(da).map(Na)};u.value=Aa;p(a,"defineProperty",u);u.value=Oa;p(a,b,u);u.value=function(a){return g(a).filter(za)};p(a,"getOwnPropertyNames",u);u.value=function(a,b){var c=Oa(b);c.length?l(b).concat(c).forEach(function(c){ba.call(b,c)&&Aa(a,c,b[c])}):G(a,
b);return a};p(a,"defineProperties",u);u.value=ba;p(w,"propertyIsEnumerable",u);u.value=y;p(c,"Symbol",u);u.value=function(a){a="__\u0001symbol:".concat("__\u0001symbol:",a,e);return a in w?ca[a]:m(a)};p(y,"for",u);u.value=function(a){if(za(a))throw new TypeError(a+" is not a symbol");return R.call(ca,a)?a.slice(20,-e.length):void 0};p(y,"keyFor",u);u.value=function(a,b){var c=h(a,b);c&&da(b)&&(c.enumerable=ba.call(a,b));return c};p(a,"getOwnPropertyDescriptor",u);u.value=function(a,b){return 1===
arguments.length?k(a):Ma(a,b)};p(a,"create",u);u.value=function(){var a=zb.call(this);return"[object String]"===a&&da(this)?"[object Symbol]":a};p(w,"toString",u);try{var ea=k(p({},"__\u0001symbol:",{get:function(){return p(this,"__\u0001symbol:",{value:!1})["__\u0001symbol:"]}}))["__\u0001symbol:"]||p}catch(Pa){ea=function(a,b,c){var d=h(w,b);delete w[b];p(a,b,c);p(w,b,d)}}}})(Object,"getOwnPropertySymbols");
(function(a){var b=a.defineProperty,c=a.prototype,d=c.toString,e;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(f){if(!(f in Symbol))switch(b(Symbol,f,{value:Symbol(f)}),f){case "toStringTag":e=a.getOwnPropertyDescriptor(c,"toString"),e.value=function(){var a=d.call(this),b=this[Symbol.toStringTag];return"undefined"===typeof b?a:"[object "+b+"]"},b(c,"toString",e)}})})(Object,Symbol);
(function(a,b,c){function d(){return this}b[a]||(b[a]=function(){var b=0,c=this,g={next:function(){var a=c.length<=b;return a?{done:a}:{done:a,value:c[b++]}}};g[a]=d;return g});c[a]||(c[a]=function(){var b=String.fromCodePoint,c=this,g=0,h=c.length,k={next:function(){var a=h<=g,d=a?"":b(c.codePointAt(g));g+=d.length;return a?{done:a}:{done:a,value:d}}};k[a]=d;return k})})(Symbol.iterator,Array.prototype,String.prototype);/*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Object.keys=function(a){return Object.getOwnPropertyNames(a).filter(function(b){return(b=Object.getOwnPropertyDescriptor(a,b))&&b.enumerable})};var Za=window.Symbol.iterator;String.prototype[Za]&&String.prototype.codePointAt||(String.prototype[Za]=function $a(){var b,c=this;return Ea($a,function(d){1==d.a&&(b=0);if(3!=d.a)return b<c.length?d=wa(d,c[b]):(d.a=0,d=void 0),d;b++;d.a=2})});
Set.prototype[Za]||(Set.prototype[Za]=function ab(){var b,c=this,d;return Ea(ab,function(e){1==e.a&&(b=[],c.forEach(function(c){b.push(c)}),d=0);if(3!=e.a)return d<b.length?e=wa(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2})});Map.prototype[Za]||(Map.prototype[Za]=function bb(){var b,c=this,d;return Ea(bb,function(e){1==e.a&&(b=[],c.forEach(function(c,d){b.push([d,c])}),d=0);if(3!=e.a)return d<b.length?e=wa(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2})});/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.WebComponents=window.WebComponents||{flags:{}};var cb=document.querySelector('script[src*="webcomponents-bundle"]'),db=/wc-(.+)/,v={};if(!v.noOpts){location.search.slice(1).split("&").forEach(function(a){a=a.split("=");var b;a[0]&&(b=a[0].match(db))&&(v[b[1]]=a[1]||!0)});if(cb)for(var eb=0,fb=void 0;fb=cb.attributes[eb];eb++)"src"!==fb.name&&(v[fb.name]=fb.value||!0);if(v.log&&v.log.split){var gb=v.log.split(",");v.log={};gb.forEach(function(a){v.log[a]=!0})}else v.log={}}
window.WebComponents.flags=v;var hb=v.shadydom;hb&&(window.ShadyDOM=window.ShadyDOM||{},window.ShadyDOM.force=hb);var ib=v.register||v.ce;ib&&window.customElements&&(window.customElements.forcePolyfill=ib);/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function jb(){this.za=this.root=null;this.ea=!1;this.N=this.$=this.oa=this.assignedSlot=this.assignedNodes=this.S=null;this.childNodes=this.nextSibling=this.previousSibling=this.lastChild=this.firstChild=this.parentNode=this.V=void 0;this.Ea=this.ua=!1;this.Z={}}jb.prototype.toJSON=function(){return{}};function x(a){a.ma||(a.ma=new jb);return a.ma}function z(a){return a&&a.ma};var A=window.ShadyDOM||{};A.Sa=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var kb=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");A.K=!!(kb&&kb.configurable&&kb.get);A.qa=A.force||!A.Sa;var lb=navigator.userAgent.match("Trident"),mb=navigator.userAgent.match("Edge");void 0===A.Ba&&(A.Ba=A.K&&(lb||mb));function nb(a){return(a=z(a))&&void 0!==a.firstChild}function B(a){return"ShadyRoot"===a.Ja}function ob(a){a=a.getRootNode();if(B(a))return a}
var pb=Element.prototype,qb=pb.matches||pb.matchesSelector||pb.mozMatchesSelector||pb.msMatchesSelector||pb.oMatchesSelector||pb.webkitMatchesSelector;function rb(a,b){if(a&&b)for(var c=Object.getOwnPropertyNames(b),d=0,e=void 0;d<c.length&&(e=c[d]);d++){var f=e,g=a,h=Object.getOwnPropertyDescriptor(b,f);h&&Object.defineProperty(g,f,h)}}function sb(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];for(d=0;d<c.length;d++)rb(a,c[d]);return a}
function tb(a,b){for(var c in b)a[c]=b[c]}var ub=document.createTextNode(""),vb=0,wb=[];(new MutationObserver(function(){for(;wb.length;)try{wb.shift()()}catch(a){throw ub.textContent=vb++,a;}})).observe(ub,{characterData:!0});function xb(a){wb.push(a);ub.textContent=vb++}var Bb=!!document.contains;function Cb(a,b){for(;b;){if(b==a)return!0;b=b.parentNode}return!1}
function Db(a){for(var b=a.length-1;0<=b;b--){var c=a[b],d=c.getAttribute("id")||c.getAttribute("name");d&&"length"!==d&&isNaN(d)&&(a[d]=c)}a.item=function(b){return a[b]};a.namedItem=function(b){if("length"!==b&&isNaN(b)&&a[b])return a[b];for(var c=ma(a),d=c.next();!d.done;d=c.next())if(d=d.value,(d.getAttribute("id")||d.getAttribute("name"))==b)return d;return null};return a};var Eb=[],Fb;function Gb(a){Fb||(Fb=!0,xb(Hb));Eb.push(a)}function Hb(){Fb=!1;for(var a=!!Eb.length;Eb.length;)Eb.shift()();return a}Hb.list=Eb;function Ib(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.ca=new Set}function Jb(a){a.a||(a.a=!0,xb(function(){a.flush()}))}Ib.prototype.flush=function(){if(this.a){this.a=!1;var a=this.takeRecords();a.length&&this.ca.forEach(function(b){b(a)})}};Ib.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function Kb(a,b){var c=x(a);c.S||(c.S=new Ib);c.S.ca.add(b);var d=c.S;return{Ia:b,P:d,Ka:a,takeRecords:function(){return d.takeRecords()}}}function Lb(a){var b=a&&a.P;b&&(b.ca.delete(a.Ia),b.ca.size||(x(a.Ka).S=null))}
function Mb(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})};var Nb=Element.prototype.insertBefore,Ob=Element.prototype.replaceChild,Pb=Element.prototype.removeChild,Qb=Element.prototype.setAttribute,Rb=Element.prototype.removeAttribute,Sb=Element.prototype.cloneNode,Tb=Document.prototype.importNode,Ub=Element.prototype.addEventListener,Vb=Element.prototype.removeEventListener,Wb=Window.prototype.addEventListener,Xb=Window.prototype.removeEventListener,Yb=Element.prototype.dispatchEvent,Zb=Node.prototype.contains||HTMLElement.prototype.contains,$b=Document.prototype.getElementById,
ac=Element.prototype.querySelector,bc=DocumentFragment.prototype.querySelector,cc=Document.prototype.querySelector,dc=Element.prototype.querySelectorAll,ec=DocumentFragment.prototype.querySelectorAll,fc=Document.prototype.querySelectorAll,C={};C.appendChild=Element.prototype.appendChild;C.insertBefore=Nb;C.replaceChild=Ob;C.removeChild=Pb;C.setAttribute=Qb;C.removeAttribute=Rb;C.cloneNode=Sb;C.importNode=Tb;C.addEventListener=Ub;C.removeEventListener=Vb;C.gb=Wb;C.hb=Xb;C.dispatchEvent=Yb;
C.contains=Zb;C.getElementById=$b;C.pb=ac;C.tb=bc;C.nb=cc;C.querySelector=function(a){switch(this.nodeType){case Node.ELEMENT_NODE:return ac.call(this,a);case Node.DOCUMENT_NODE:return cc.call(this,a);default:return bc.call(this,a)}};C.qb=dc;C.ub=ec;C.ob=fc;C.querySelectorAll=function(a){switch(this.nodeType){case Node.ELEMENT_NODE:return dc.call(this,a);case Node.DOCUMENT_NODE:return fc.call(this,a);default:return ec.call(this,a)}};var gc=/[&\u00A0"]/g,hc=/[&\u00A0<>]/g;function ic(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function jc(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var kc=jc("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),lc=jc("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function mc(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,g=void 0;e<f&&(g=d[e]);e++){a:{var h=g;var k=a,l=b;switch(h.nodeType){case Node.ELEMENT_NODE:k=h.localName;for(var n="<"+k,p=h.attributes,G=0,u;u=p[G];G++)n+=" "+u.name+'="'+u.value.replace(gc,ic)+'"';n+=">";h=kc[k]?n:n+mc(h,l)+"</"+k+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&lc[k.localName]?h:h.replace(hc,ic);break a;case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),
Error("not implemented");}}c+=h}return c};var D=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),E=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1);function nc(a){var b=[];D.currentNode=a;for(a=D.firstChild();a;)b.push(a),a=D.nextSibling();return b}
var F={parentNode:function(a){D.currentNode=a;return D.parentNode()},firstChild:function(a){D.currentNode=a;return D.firstChild()},lastChild:function(a){D.currentNode=a;return D.lastChild()},previousSibling:function(a){D.currentNode=a;return D.previousSibling()},nextSibling:function(a){D.currentNode=a;return D.nextSibling()}};F.childNodes=nc;F.parentElement=function(a){E.currentNode=a;return E.parentNode()};F.firstElementChild=function(a){E.currentNode=a;return E.firstChild()};
F.lastElementChild=function(a){E.currentNode=a;return E.lastChild()};F.previousElementSibling=function(a){E.currentNode=a;return E.previousSibling()};F.nextElementSibling=function(a){E.currentNode=a;return E.nextSibling()};F.children=function(a){var b=[];E.currentNode=a;for(a=E.firstChild();a;)b.push(a),a=E.nextSibling();return Db(b)};F.innerHTML=function(a){return mc(a,function(a){return nc(a)})};
F.textContent=function(a){switch(a.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:a=document.createTreeWalker(a,NodeFilter.SHOW_TEXT,null,!1);for(var b="",c;c=a.nextNode();)b+=c.nodeValue;return b;default:return a.nodeValue}};var oc=A.K,pc=[Node.prototype,Element.prototype,HTMLElement.prototype];function H(a){var b;a:{for(b=0;b<pc.length;b++){var c=pc[b];if(c.hasOwnProperty(a)){b=c;break a}}b=void 0}if(!b)throw Error("Could not find descriptor for "+a);return Object.getOwnPropertyDescriptor(b,a)}
var I=oc?{parentNode:H("parentNode"),firstChild:H("firstChild"),lastChild:H("lastChild"),previousSibling:H("previousSibling"),nextSibling:H("nextSibling"),childNodes:H("childNodes"),parentElement:H("parentElement"),previousElementSibling:H("previousElementSibling"),nextElementSibling:H("nextElementSibling"),innerHTML:H("innerHTML"),textContent:H("textContent"),firstElementChild:H("firstElementChild"),lastElementChild:H("lastElementChild"),children:H("children")}:{},qc=oc?{firstElementChild:Object.getOwnPropertyDescriptor(DocumentFragment.prototype,
"firstElementChild"),lastElementChild:Object.getOwnPropertyDescriptor(DocumentFragment.prototype,"lastElementChild"),children:Object.getOwnPropertyDescriptor(DocumentFragment.prototype,"children")}:{},rc=oc?{firstElementChild:Object.getOwnPropertyDescriptor(Document.prototype,"firstElementChild"),lastElementChild:Object.getOwnPropertyDescriptor(Document.prototype,"lastElementChild"),children:Object.getOwnPropertyDescriptor(Document.prototype,"children")}:{},sc={ya:I,sb:qc,mb:rc,parentNode:function(a){return I.parentNode.get.call(a)},
firstChild:function(a){return I.firstChild.get.call(a)},lastChild:function(a){return I.lastChild.get.call(a)},previousSibling:function(a){return I.previousSibling.get.call(a)},nextSibling:function(a){return I.nextSibling.get.call(a)},childNodes:function(a){return Array.prototype.slice.call(I.childNodes.get.call(a))},parentElement:function(a){return I.parentElement.get.call(a)},previousElementSibling:function(a){return I.previousElementSibling.get.call(a)},nextElementSibling:function(a){return I.nextElementSibling.get.call(a)},
innerHTML:function(a){return I.innerHTML.get.call(a)},textContent:function(a){return I.textContent.get.call(a)},children:function(a){switch(a.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:return qc.children.get.call(a);case Node.DOCUMENT_NODE:return rc.children.get.call(a);default:return I.children.get.call(a)}},firstElementChild:function(a){switch(a.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:return qc.firstElementChild.get.call(a);case Node.DOCUMENT_NODE:return rc.firstElementChild.get.call(a);default:return I.firstElementChild.get.call(a)}},
lastElementChild:function(a){switch(a.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:return qc.lastElementChild.get.call(a);case Node.DOCUMENT_NODE:return rc.lastElementChild.get.call(a);default:return I.lastElementChild.get.call(a)}}};var J=A.Ba?sc:F;function tc(a){for(;a.firstChild;)a.removeChild(a.firstChild)}
var uc=A.K,vc=document.implementation.createHTMLDocument("inert"),wc=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),xc=wc&&wc.get,yc=Object.getOwnPropertyDescriptor(Document.prototype,"activeElement"),zc={parentElement:{get:function(){var a=z(this);(a=a&&a.parentNode)&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:J.parentElement(this)},configurable:!0},parentNode:{get:function(){var a=z(this);a=a&&a.parentNode;return void 0!==a?a:J.parentNode(this)},configurable:!0},
nextSibling:{get:function(){var a=z(this);a=a&&a.nextSibling;return void 0!==a?a:J.nextSibling(this)},configurable:!0},previousSibling:{get:function(){var a=z(this);a=a&&a.previousSibling;return void 0!==a?a:J.previousSibling(this)},configurable:!0},nextElementSibling:{get:function(){var a=z(this);if(a&&void 0!==a.nextSibling){for(a=this.nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return J.nextElementSibling(this)},configurable:!0},previousElementSibling:{get:function(){var a=
z(this);if(a&&void 0!==a.previousSibling){for(a=this.previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return J.previousElementSibling(this)},configurable:!0}},Ac={className:{get:function(){return this.getAttribute("class")||""},set:function(a){this.setAttribute("class",a)},configurable:!0}},Bc={childNodes:{get:function(){if(nb(this)){var a=z(this);if(!a.childNodes){a.childNodes=[];for(var b=this.firstChild;b;b=b.nextSibling)a.childNodes.push(b)}var c=a.childNodes}else c=
J.childNodes(this);c.item=function(a){return c[a]};return c},configurable:!0},childElementCount:{get:function(){return this.children.length},configurable:!0},firstChild:{get:function(){var a=z(this);a=a&&a.firstChild;return void 0!==a?a:J.firstChild(this)},configurable:!0},lastChild:{get:function(){var a=z(this);a=a&&a.lastChild;return void 0!==a?a:J.lastChild(this)},configurable:!0},textContent:{get:function(){if(nb(this)){for(var a=[],b=0,c=this.childNodes,d;d=c[b];b++)d.nodeType!==Node.COMMENT_NODE&&
a.push(d.textContent);return a.join("")}return J.textContent(this)},set:function(a){if("undefined"===typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!nb(this)&&uc){var b=this.firstChild;(b!=this.lastChild||b&&b.nodeType!=Node.TEXT_NODE)&&tc(this);sc.ya.textContent.set.call(this,a)}else tc(this),(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.appendChild(document.createTextNode(a));break;default:this.nodeValue=a}},configurable:!0},firstElementChild:{get:function(){var a=
z(this);if(a&&void 0!==a.firstChild){for(a=this.firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return J.firstElementChild(this)},configurable:!0},lastElementChild:{get:function(){var a=z(this);if(a&&void 0!==a.lastChild){for(a=this.lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return J.lastElementChild(this)},configurable:!0},children:{get:function(){return nb(this)?Db(Array.prototype.filter.call(this.childNodes,function(a){return a.nodeType===Node.ELEMENT_NODE})):
J.children(this)},configurable:!0},innerHTML:{get:function(){return nb(this)?mc("template"===this.localName?this.content:this):J.innerHTML(this)},set:function(a){var b="template"===this.localName?this.content:this;tc(b);var c=this.localName||"div";c=this.namespaceURI&&this.namespaceURI!==vc.namespaceURI?vc.createElementNS(this.namespaceURI,c):vc.createElement(c);uc?sc.ya.innerHTML.set.call(c,a):c.innerHTML=a;for(a="template"===this.localName?c.content:c;a.firstChild;)b.appendChild(a.firstChild)},
configurable:!0}},Cc={shadowRoot:{get:function(){var a=z(this);return a&&a.za||null},configurable:!0}},Dc={activeElement:{get:function(){var a=yc&&yc.get?yc.get.call(document):A.K?void 0:document.activeElement;if(a&&a.nodeType){var b=!!B(this);if(this===document||b&&this.host!==a&&C.contains.call(this.host,a)){for(b=ob(a);b&&b!==this;)a=b.host,b=ob(a);a=this===document?b?null:a:b===this?a:null}else a=null}else a=null;return a},set:function(){},configurable:!0}};
function K(a,b,c){for(var d in b){var e=Object.getOwnPropertyDescriptor(a,d);e&&e.configurable||!e&&c?Object.defineProperty(a,d,b[d]):c&&console.warn("Could not define",d,"on",a)}}function Ec(a){K(a,zc);K(a,Ac);K(a,Bc);K(a,Dc)}
function Fc(){var a=Gc.prototype;a.__proto__=DocumentFragment.prototype;K(a,zc,!0);K(a,Bc,!0);K(a,Dc,!0);Object.defineProperties(a,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}});["localName","namespaceURI","prefix"].forEach(function(b){Object.defineProperty(a,b,{value:void 0,configurable:!0})});["ownerDocument","baseURI","isConnected"].forEach(function(b){Object.defineProperty(a,b,{get:function(){return this.host[b]},
configurable:!0})})}var Hc=A.K?function(){}:function(a){var b=x(a);b.ua||(b.ua=!0,K(a,zc,!0),K(a,Ac,!0))},Ic=A.K?function(){}:function(a){x(a).Ea||(K(a,Bc,!0),K(a,Cc,!0))};var Jc=J.childNodes;function Kc(a,b,c){Ic(b);var d=x(b);void 0!==d.firstChild&&(d.childNodes=null);if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){d=a.childNodes;for(var e=0;e<d.length;e++)Lc(d[e],b,c);a=x(a);b=void 0!==a.firstChild?null:void 0;a.firstChild=a.lastChild=b;a.childNodes=b}else Lc(a,b,c)}
function Lc(a,b,c){Hc(a);c=c||null;var d=x(a),e=x(b),f=c?x(c):null;d.previousSibling=c?f.previousSibling:b.lastChild;if(f=z(d.previousSibling))f.nextSibling=a;if(f=z(d.nextSibling=c))f.previousSibling=a;d.parentNode=b;c?c===e.firstChild&&(e.firstChild=a):(e.lastChild=a,e.firstChild||(e.firstChild=a));e.childNodes=null}
function Mc(a,b){var c=x(a);b=x(b);a===b.firstChild&&(b.firstChild=c.nextSibling);a===b.lastChild&&(b.lastChild=c.previousSibling);a=c.previousSibling;var d=c.nextSibling;a&&(x(a).nextSibling=d);d&&(x(d).previousSibling=a);c.parentNode=c.previousSibling=c.nextSibling=void 0;void 0!==b.childNodes&&(b.childNodes=null)}
function Nc(a){var b=x(a);if(void 0===b.firstChild){b.childNodes=null;var c=Jc(a);b.firstChild=c[0]||null;b.lastChild=c[c.length-1]||null;Ic(a);for(b=0;b<c.length;b++){var d=c[b],e=x(d);e.parentNode=a;e.nextSibling=c[b+1]||null;e.previousSibling=c[b-1]||null;Hc(d)}}};var Oc=J.parentNode;
function Pc(a,b,c){if(b===a)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(c){var d=z(c);d=d&&d.parentNode;if(void 0!==d&&d!==a||void 0===d&&Oc(c)!==a)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(c===b)return b;var e=[],f=Qc,g=ob(a),h=g?g.host.localName:"";if(b.parentNode){var k=Rc(b);Sc(b.parentNode,b,!!g||!(b.getRootNode()instanceof ShadowRoot));
f=function(a,b){Tc()&&(Uc(a,k),Qc(a,b))}}d=!0;var l=!Vc(b,h);!g||b.__noInsertionPoint&&!l||Wc(b,function(a){"slot"===a.localName&&e.push(a);l&&f(a,h)});e.length&&Xc(g,e);("slot"===a.localName||e.length)&&g&&Yc(g);nb(a)&&(Kc(b,a,c),g=z(a),Zc(a)?(Yc(g.root),d=!1):g.root&&(d=!1));d?(d=B(a)?a.host:a,c?(c=$c(c),C.insertBefore.call(d,b,c)):C.appendChild.call(d,b)):b.ownerDocument!==a.ownerDocument&&a.ownerDocument.adoptNode(b);ad(a,b);return b}
function Sc(a,b,c){c=void 0===c?!1:c;if(b.parentNode!==a)throw Error("The node to be removed is not a child of this node: "+b);var d=ob(b),e=z(a);if(nb(a)&&(Mc(b,a),Zc(a))){Yc(e.root);var f=!0}if(Tc()&&!c&&d){var g=Rc(b);Wc(b,function(a){Uc(a,g)})}bd(b);if(d){var h=a&&"slot"===a.localName;h&&(f=!0);((c=cd(d,b))||h)&&Yc(d)}f||(f=B(a)?a.host:a,(!e.root&&"slot"!==b.localName||f===Oc(b))&&C.removeChild.call(f,b));ad(a,null,b);return b}
function bd(a){var b=z(a);if(b&&void 0!==b.V){b=a.childNodes;for(var c=0,d=b.length,e=void 0;c<d&&(e=b[c]);c++)bd(e)}if(a=z(a))a.V=void 0}function $c(a){var b=a;a&&"slot"===a.localName&&(b=(b=(b=z(a))&&b.N)&&b.length?b[0]:$c(a.nextSibling));return b}function Zc(a){return(a=(a=z(a))&&a.root)&&dd(a)}
function ed(a,b){if("slot"===b)a=a.parentNode,Zc(a)&&Yc(z(a).root);else if("slot"===a.localName&&"name"===b&&(b=ob(a))){if(b.o){fd(b);var c=a.Ha,d=gd(a);if(d!==c){c=b.w[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.w[d]||(b.w[d]=[]);c.push(a);1<c.length&&(b.w[d]=hd(c))}}Yc(b)}}function ad(a,b,c){if(a=(a=z(a))&&a.S)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),Jb(a)}
function id(a){if(a&&a.nodeType){var b=x(a),c=b.V;void 0===c&&(B(a)?(c=a,b.V=c):(c=(c=a.parentNode)?id(c):a,C.contains.call(document.documentElement,a)&&(b.V=c)));return c}}function jd(a,b,c){var d=[];kd(a.childNodes,b,c,d);return d}function kd(a,b,c,d){for(var e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++){var h;if(h=g.nodeType===Node.ELEMENT_NODE){h=g;var k=b,l=c,n=d,p=k(h);p&&n.push(h);l&&l(p)?h=p:(kd(h.childNodes,k,l,n),h=void 0)}if(h)break}}var ld=null;
function Tc(){ld||(ld=window.ShadyCSS&&window.ShadyCSS.ScopingShim);return ld||null}function md(a,b,c){var d=Tc();d&&"class"===b?d.setElementClass(a,c):(C.setAttribute.call(a,b,c),ed(a,b))}function nd(a,b){if(a.ownerDocument!==document||"template"===a.localName)return C.importNode.call(document,a,b);var c=C.importNode.call(document,a,!1);if(b){a=a.childNodes;b=0;for(var d;b<a.length;b++)d=nd(a[b],!0),c.appendChild(d)}return c}function Qc(a,b){var c=Tc();c&&c.scopeNode(a,b)}
function Uc(a,b){var c=Tc();c&&c.unscopeNode(a,b)}function Vc(a,b){var c=Tc();if(!c)return!0;if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){c=!0;for(var d=0;c&&d<a.childNodes.length;d++)c=c&&Vc(a.childNodes[d],b);return c}return a.nodeType!==Node.ELEMENT_NODE?!0:c.currentScopeForNode(a)===b}function Rc(a){if(a.nodeType!==Node.ELEMENT_NODE)return"";var b=Tc();return b?b.currentScopeForNode(a):""}
function Wc(a,b){if(a){a.nodeType===Node.ELEMENT_NODE&&b(a);for(var c=0,d;c<a.childNodes.length;c++)d=a.childNodes[c],d.nodeType===Node.ELEMENT_NODE&&Wc(d,b)}};var od="__eventWrappers"+Date.now(),pd=function(){var a=Object.getOwnPropertyDescriptor(Event.prototype,"composed");return a?function(b){return a.get.call(b)}:null}(),qd={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,
pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},rd={DOMAttrModified:!0,DOMAttributeNameChanged:!0,DOMCharacterDataModified:!0,DOMElementNameChanged:!0,DOMNodeInserted:!0,DOMNodeInsertedIntoDocument:!0,DOMNodeRemoved:!0,DOMNodeRemovedFromDocument:!0,DOMSubtreeModified:!0};
function sd(a,b){var c=[],d=a;for(a=a===window?window:a.getRootNode();d;)c.push(d),d=d.assignedSlot?d.assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d.host:d.parentNode;c[c.length-1]===document&&c.push(window);return c}function td(a,b){if(!B)return a;a=sd(a,!0);for(var c=0,d,e=void 0,f,g=void 0;c<b.length;c++)if(d=b[c],f=d===window?window:d.getRootNode(),f!==e&&(g=a.indexOf(f),e=f),!B(f)||-1<g)return d}
var ud={get composed(){void 0===this.Y&&(pd?this.Y="focusin"===this.type||"focusout"===this.type||pd(this):!1!==this.isTrusted&&(this.Y=qd[this.type]));return this.Y||!1},composedPath:function(){this.ta||(this.ta=sd(this.__target,this.composed));return this.ta},get target(){return td(this.currentTarget||this.__previousCurrentTarget,this.composedPath())},get relatedTarget(){if(!this.la)return null;this.va||(this.va=sd(this.la,!0));return td(this.currentTarget||this.__previousCurrentTarget,this.va)},
stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.ka=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);this.ka=this.Da=!0}};function vd(a){function b(b,d){b=new a(b,d);b.Y=d&&!!d.composed;return b}tb(b,a);b.prototype=a.prototype;return b}var wd={focus:!0,blur:!0};function xd(a){return a.__target!==a.target||a.la!==a.relatedTarget}
function yd(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!xd(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.Da);d++);}
function zd(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];yd(a,d,"capture");if(a.ka)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=z(d);f=f&&f.root;if(0===c||f&&f===e)if(yd(a,d,"bubble"),d!==window&&(e=d.getRootNode()),a.ka)break}}
function Ad(a,b,c,d,e,f){for(var g=0;g<a.length;g++){var h=a[g],k=h.type,l=h.capture,n=h.once,p=h.passive;if(b===h.node&&c===k&&d===l&&e===n&&f===p)return g}return-1}
function Bd(a,b,c){if(b){var d=typeof b;if("function"===d||"object"===d)if("object"!==d||b.handleEvent&&"function"===typeof b.handleEvent){var e=this instanceof Window?C.gb:C.addEventListener;if(rd[a])return e.call(this,a,b,c);if(c&&"object"===typeof c){var f=!!c.capture;var g=!!c.once;var h=!!c.passive}else f=!!c,h=g=!1;var k=c&&c.na||this,l=b[od];if(l){if(-1<Ad(l,k,a,f,g,h))return}else b[od]=[];l=function(e){g&&this.removeEventListener(a,b,c);e.__target||Cd(e);if(k!==this){var f=Object.getOwnPropertyDescriptor(e,
"currentTarget");Object.defineProperty(e,"currentTarget",{get:function(){return k},configurable:!0})}e.__previousCurrentTarget=e.currentTarget;if(!B(k)||-1!=e.composedPath().indexOf(k))if(e.composed||-1<e.composedPath().indexOf(k))if(xd(e)&&e.target===e.relatedTarget)e.eventPhase===Event.BUBBLING_PHASE&&e.stopImmediatePropagation();else if(e.eventPhase===Event.CAPTURING_PHASE||e.bubbles||e.target===k||k instanceof Window){var h="function"===d?b.call(k,e):b.handleEvent&&b.handleEvent(e);k!==this&&
(f?(Object.defineProperty(e,"currentTarget",f),f=null):delete e.currentTarget);return h}};b[od].push({node:k,type:a,capture:f,once:g,passive:h,ib:l});wd[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][f?"capture":"bubble"].push(l)):e.call(this,a,l,c)}}}
function Dd(a,b,c){if(b){var d=this instanceof Window?C.hb:C.removeEventListener;if(rd[a])return d.call(this,a,b,c);if(c&&"object"===typeof c){var e=!!c.capture;var f=!!c.once;var g=!!c.passive}else e=!!c,g=f=!1;var h=c&&c.na||this,k=void 0;var l=null;try{l=b[od]}catch(n){}l&&(f=Ad(l,h,a,e,f,g),-1<f&&(k=l.splice(f,1)[0].ib,l.length||(b[od]=void 0)));d.call(this,a,k||b,c);k&&wd[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][e?"capture":"bubble"],k=a.indexOf(k),-1<k&&a.splice(k,1))}}
function Ed(){for(var a in wd)window.addEventListener(a,function(a){a.__target||(Cd(a),zd(a))},!0)}function Cd(a){a.__target=a.target;a.la=a.relatedTarget;if(A.K){var b=Object.getPrototypeOf(a);if(!b.hasOwnProperty("__patchProto")){var c=Object.create(b);c.jb=b;rb(c,ud);b.__patchProto=c}a.__proto__=b.__patchProto}else rb(a,ud)}var Fd=vd(window.Event),Gd=vd(window.CustomEvent),Hd=vd(window.MouseEvent);
function Id(){window.Event=Fd;window.CustomEvent=Gd;window.MouseEvent=Hd;Ed();if(!pd&&Object.getOwnPropertyDescriptor(Event.prototype,"isTrusted")){var a=function(){var a=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(a)};Element.prototype.click?Element.prototype.click=a:HTMLElement.prototype.click&&(HTMLElement.prototype.click=a)}};function Jd(a,b){return{index:a,W:[],ba:b}}
function Kd(a,b,c,d){var e=0,f=0,g=0,h=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(g=0;g<k;g++)if(a[g]!==c[g])break a;g=k}if(b==a.length&&d==c.length){h=a.length;for(var l=c.length,n=0;n<k-g&&Ld(a[--h],c[--l]);)n++;h=n}e+=g;f+=g;b-=h;d-=h;if(0==b-e&&0==d-f)return[];if(e==b){for(b=Jd(e,0);f<d;)b.W.push(c[f++]);return[b]}if(f==d)return[Jd(e,b-e)];k=e;g=f;d=d-g+1;h=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(h),b[l][0]=l;for(l=0;l<h;l++)b[0][l]=l;for(l=1;l<d;l++)for(n=1;n<h;n++)if(a[k+n-1]===c[g+l-1])b[l][n]=
b[l-1][n-1];else{var p=b[l-1][n]+1,G=b[l][n-1]+1;b[l][n]=p<G?p:G}k=b.length-1;g=b[0].length-1;d=b[k][g];for(a=[];0<k||0<g;)0==k?(a.push(2),g--):0==g?(a.push(3),k--):(h=b[k-1][g-1],l=b[k-1][g],n=b[k][g-1],p=l<n?l<h?l:h:n<h?n:h,p==h?(h==d?a.push(0):(a.push(1),d=h),k--,g--):p==l?(a.push(3),k--,d=l):(a.push(2),g--,d=n));a.reverse();b=void 0;k=[];for(g=0;g<a.length;g++)switch(a[g]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=Jd(e,0));b.ba++;e++;b.W.push(c[f]);f++;break;case 2:b||(b=Jd(e,
0));b.ba++;e++;break;case 3:b||(b=Jd(e,0)),b.W.push(c[f]),f++}b&&k.push(b);return k}function Ld(a,b){return a===b};var Md=J.parentNode,Nd=J.childNodes,Od={},Pd=A.deferConnectionCallbacks&&"loading"===document.readyState,Qd;function Rd(a){var b=[];do b.unshift(a);while(a=a.parentNode);return b}
function Gc(a,b,c){if(a!==Od)throw new TypeError("Illegal constructor");this.Ja="ShadyRoot";this.host=b;this.c=c&&c.mode;Nc(b);a=x(b);a.root=this;a.za="closed"!==this.c?this:null;a=x(this);a.firstChild=a.lastChild=a.parentNode=a.nextSibling=a.previousSibling=null;a.childNodes=[];this.b=this.aa=!1;this.a=this.w=this.o=null;Yc(this)}function Yc(a){a.aa||(a.aa=!0,Gb(function(){return Sd(a)}))}
function Sd(a){for(var b;a;){a.aa&&(b=a);a:{var c=a;a=c.host.getRootNode();if(B(a))for(var d=c.host.childNodes,e=0;e<d.length;e++)if(c=d[e],"slot"==c.localName)break a;a=void 0}}b&&b._renderRoot()}
Gc.prototype._renderRoot=function(){var a=Pd;Pd=!0;this.aa=!1;if(this.o){fd(this);for(var b=0,c;b<this.o.length;b++){c=this.o[b];var d=z(c),e=d.assignedNodes;d.assignedNodes=[];d.N=[];if(d.oa=e)for(d=0;d<e.length;d++){var f=z(e[d]);f.$=f.assignedSlot;f.assignedSlot===c&&(f.assignedSlot=null)}}for(b=this.host.firstChild;b;b=b.nextSibling)Td(this,b);for(b=0;b<this.o.length;b++){c=this.o[b];e=z(c);if(!e.assignedNodes.length)for(d=c.firstChild;d;d=d.nextSibling)Td(this,d,c);(d=(d=z(c.parentNode))&&d.root)&&
dd(d)&&d._renderRoot();Ud(this,e.N,e.assignedNodes);if(d=e.oa){for(f=0;f<d.length;f++)z(d[f]).$=null;e.oa=null;d.length>e.assignedNodes.length&&(e.ea=!0)}e.ea&&(e.ea=!1,Vd(this,c))}c=this.o;b=[];for(e=0;e<c.length;e++)d=c[e].parentNode,(f=z(d))&&f.root||!(0>b.indexOf(d))||b.push(d);for(c=0;c<b.length;c++){f=b[c];e=f===this?this.host:f;d=[];f=f.childNodes;for(var g=0;g<f.length;g++){var h=f[g];if("slot"==h.localName){h=z(h).N;for(var k=0;k<h.length;k++)d.push(h[k])}else d.push(h)}f=Nd(e);g=Kd(d,d.length,
f,f.length);k=h=0;for(var l=void 0;h<g.length&&(l=g[h]);h++){for(var n=0,p=void 0;n<l.W.length&&(p=l.W[n]);n++)Md(p)===e&&C.removeChild.call(e,p),f.splice(l.index+k,1);k-=l.ba}k=0;for(l=void 0;k<g.length&&(l=g[k]);k++)for(h=f[l.index],n=l.index;n<l.index+l.ba;n++)p=d[n],C.insertBefore.call(e,p,h),f.splice(n,0,p)}}if(!this.b)for(b=this.host.childNodes,c=0,e=b.length;c<e;c++)d=b[c],f=z(d),Md(d)!==this.host||"slot"!==d.localName&&f.assignedSlot||C.removeChild.call(this.host,d);this.b=!0;Pd=a;Qd&&Qd()};
function Td(a,b,c){var d=x(b),e=d.$;d.$=null;c||(c=(a=a.w[b.slot||"__catchall"])&&a[0]);c?(x(c).assignedNodes.push(b),d.assignedSlot=c):d.assignedSlot=void 0;e!==d.assignedSlot&&d.assignedSlot&&(x(d.assignedSlot).ea=!0)}function Ud(a,b,c){for(var d=0,e=void 0;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=z(e).assignedNodes;f&&f.length&&Ud(a,b,f)}else b.push(c[d])}function Vd(a,b){C.dispatchEvent.call(b,new Event("slotchange"));b=z(b);b.assignedSlot&&Vd(a,b.assignedSlot)}
function Xc(a,b){a.a=a.a||[];a.o=a.o||[];a.w=a.w||{};a.a.push.apply(a.a,b instanceof Array?b:na(ma(b)))}function fd(a){if(a.a&&a.a.length){for(var b=a.a,c,d=0;d<b.length;d++){var e=b[d];Nc(e);Nc(e.parentNode);var f=gd(e);a.w[f]?(c=c||{},c[f]=!0,a.w[f].push(e)):a.w[f]=[e];a.o.push(e)}if(c)for(var g in c)a.w[g]=hd(a.w[g]);a.a=[]}}function gd(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.Ha=b}
function hd(a){return a.sort(function(a,c){a=Rd(a);for(var b=Rd(c),e=0;e<a.length;e++){c=a[e];var f=b[e];if(c!==f)return a=Array.from(c.parentNode.childNodes),a.indexOf(c)-a.indexOf(f)}})}function cd(a,b){if(a.o){fd(a);var c=a.w,d;for(d in c)for(var e=c[d],f=0;f<e.length;f++){var g=e[f];if(Cb(b,g)){e.splice(f,1);var h=a.o.indexOf(g);0<=h&&a.o.splice(h,1);f--;g=z(g);if(h=g.N)for(var k=0;k<h.length;k++){var l=h[k],n=Md(l);n&&C.removeChild.call(n,l)}g.N=[];g.assignedNodes=[];h=!0}}return h}}
function dd(a){fd(a);return!(!a.o||!a.o.length)}
if(window.customElements&&A.qa){var Wd=new Map;Qd=function(){var a=Array.from(Wd);Wd.clear();a=ma(a);for(var b=a.next();!b.done;b=a.next()){b=ma(b.value);var c=b.next().value;b.next().value?c.Fa():c.Ga()}};Pd&&document.addEventListener("readystatechange",function(){Pd=!1;Qd()},{once:!0});var Xd=function(a,b,c){var d=0,e="__isConnected"+d++;if(b||c)a.prototype.connectedCallback=a.prototype.Fa=function(){Pd?Wd.set(this,!0):this[e]||(this[e]=!0,b&&b.call(this))},a.prototype.disconnectedCallback=a.prototype.Ga=
function(){Pd?this.isConnected||Wd.set(this,!1):this[e]&&(this[e]=!1,c&&c.call(this))};return a},define=window.customElements.define;Object.defineProperty(window.CustomElementRegistry.prototype,"define",{value:function(a,b){var c=b.prototype.connectedCallback,d=b.prototype.disconnectedCallback;define.call(window.customElements,a,Xd(b,c,d));b.prototype.connectedCallback=c;b.prototype.disconnectedCallback=d}})};function Yd(a){var b=a.getRootNode();B(b)&&Sd(b);return(a=z(a))&&a.assignedSlot||null}
var Zd={addEventListener:Bd.bind(window),removeEventListener:Dd.bind(window)},$d={addEventListener:Bd,removeEventListener:Dd,appendChild:function(a){return Pc(this,a)},insertBefore:function(a,b){return Pc(this,a,b)},removeChild:function(a){return Sc(this,a)},replaceChild:function(a,b){Pc(this,a,b);Sc(this,b);return a},cloneNode:function(a){if("template"==this.localName)var b=C.cloneNode.call(this,a);else if(b=C.cloneNode.call(this,!1),a&&b.nodeType!==Node.ATTRIBUTE_NODE){a=this.childNodes;for(var c=
0,d;c<a.length;c++)d=a[c].cloneNode(!0),b.appendChild(d)}return b},getRootNode:function(){return id(this)},contains:function(a){return Cb(this,a)},dispatchEvent:function(a){Hb();return C.dispatchEvent.call(this,a)}};
Object.defineProperties($d,{isConnected:{get:function(){if(xc&&xc.call(this))return!0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return!1;var a=this.ownerDocument;if(Bb){if(C.contains.call(a,this))return!0}else if(a.documentElement&&C.contains.call(a.documentElement,this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.parentNode||(B(a)?a.host:void 0);return!!(a&&a instanceof Document)},configurable:!0}});
var ae={get assignedSlot(){return Yd(this)}},be={querySelector:function(a){return jd(this,function(b){return qb.call(b,a)},function(a){return!!a})[0]||null},querySelectorAll:function(a,b){if(b){b=Array.prototype.slice.call(C.querySelectorAll.call(this,a));var c=this.getRootNode();return b.filter(function(a){return a.getRootNode()==c})}return jd(this,function(b){return qb.call(b,a)})}},ce={assignedNodes:function(a){if("slot"===this.localName){var b=this.getRootNode();B(b)&&Sd(b);return(b=z(this))?
(a&&a.flatten?b.N:b.assignedNodes)||[]:[]}}},de=sb({setAttribute:function(a,b){md(this,a,b)},removeAttribute:function(a){C.removeAttribute.call(this,a);ed(this,a)},attachShadow:function(a){if(!this)throw"Must provide a host.";if(!a)throw"Not enough arguments.";return new Gc(Od,this,a)},get slot(){return this.getAttribute("slot")},set slot(a){md(this,"slot",a)},get assignedSlot(){return Yd(this)}},be,ce);Object.defineProperties(de,Cc);
var ee=sb({importNode:function(a,b){return nd(a,b)},getElementById:function(a){return jd(this,function(b){return b.id==a},function(a){return!!a})[0]||null}},be);Object.defineProperties(ee,{_activeElement:Dc.activeElement});
for(var fe=HTMLElement.prototype.blur,ge={blur:function(){var a=z(this);(a=(a=a&&a.root)&&a.activeElement)?a.blur():fe.call(this)}},he={},ie=ma(Object.getOwnPropertyNames(Document.prototype)),je=ie.next();!je.done;he={H:he.H},je=ie.next())he.H=je.value,"on"===he.H.substring(0,2)&&Object.defineProperty(ge,he.H,{set:function(a){return function(b){var c=x(this),d=a.H.substring(2);c.Z[a.H]&&this.removeEventListener(d,c.Z[a.H]);this.addEventListener(d,b,{});c.Z[a.H]=b}}(he),get:function(a){return function(){var b=
z(this);return b&&b.Z[a.H]}}(he),configurable:!0});var ke={addEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.na=this;this.host.addEventListener(a,b,c)},removeEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.na=this;this.host.removeEventListener(a,b,c)},getElementById:function(a){return jd(this,function(b){return b.id==a},function(a){return!!a})[0]||null}};
function L(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],f=Object.getOwnPropertyDescriptor(b,e);f.value?a[e]=f.value:Object.defineProperty(a,e,f)}};if(A.qa){var ShadyDOM={inUse:A.qa,patch:function(a){Ic(a);Hc(a);return a},isShadyRoot:B,enqueue:Gb,flush:Hb,settings:A,filterMutations:Mb,observeChildren:Kb,unobserveChildren:Lb,nativeMethods:C,nativeTree:J,deferConnectionCallbacks:A.deferConnectionCallbacks,handlesDynamicScoping:!0};window.ShadyDOM=ShadyDOM;Id();var le=window.customElements&&window.customElements.nativeHTMLElement||HTMLElement;L(Gc.prototype,ke);L(window.Node.prototype,$d);L(window.Window.prototype,Zd);L(window.Text.prototype,ae);
L(window.DocumentFragment.prototype,be);L(window.Element.prototype,de);L(window.Document.prototype,ee);window.HTMLSlotElement&&L(window.HTMLSlotElement.prototype,ce);L(le.prototype,ge);A.K&&(Ec(window.Node.prototype),Ec(window.Text.prototype),Ec(window.DocumentFragment.prototype),Ec(window.Element.prototype),Ec(le.prototype),Ec(window.Document.prototype),window.HTMLSlotElement&&Ec(window.HTMLSlotElement.prototype));Fc();window.ShadowRoot=Gc};var me=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function ne(a){var b=me.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return!b&&a}function M(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}
function oe(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function pe(a,b,c){c=void 0===c?new Set:c;for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)pe(d,b,c);d=oe(a,e);continue}else if("template"===f){d=oe(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)pe(e,b,c)}d=d.firstChild?d.firstChild:oe(a,d)}}function N(a,b,c){a[b]=c};function qe(){this.a=new Map;this.m=new Map;this.f=[];this.c=!1}function re(a,b,c){a.a.set(b,c);a.m.set(c.constructor,c)}function se(a,b){a.c=!0;a.f.push(b)}function te(a,b){a.c&&pe(b,function(b){return a.b(b)})}qe.prototype.b=function(a){if(this.c&&!a.__CE_patched){a.__CE_patched=!0;for(var b=0;b<this.f.length;b++)this.f[b](a)}};function O(a,b){var c=[];pe(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):ue(a,d)}}
function P(a,b){var c=[];pe(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d)}}
function Q(a,b,c){c=void 0===c?{}:c;var d=c.fb||new Set,e=c.ia||function(b){return ue(a,b)},f=[];pe(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var c=b.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:b.addEventListener("load",function(){var c=b.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);Q(a,c,{fb:f,ia:e})}})}else f.push(b)},d);
if(a.c)for(b=0;b<f.length;b++)a.b(f[b]);for(b=0;b<f.length;b++)e(f[b])}
function ue(a,b){if(void 0===b.__CE_state){var c=b.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=a.a.get(b.localName)){c.constructionStack.push(b);var d=c.constructor;try{try{if(new d!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop()}}catch(g){throw b.__CE_state=2,g;}b.__CE_state=1;b.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=c[d],
f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null)}M(b)&&a.connectedCallback(b)}}}qe.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a)};qe.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a)};
qe.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,c,d,e)};function ve(a){var b=document;this.b=a;this.a=b;this.P=void 0;Q(this.b,this.a);"loading"===this.a.readyState&&(this.P=new MutationObserver(this.c.bind(this)),this.P.observe(this.a,{childList:!0,subtree:!0}))}function we(a){a.P&&a.P.disconnect()}ve.prototype.c=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||we(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)Q(this.b,c[d])};function xe(){var a=this;this.a=this.A=void 0;this.b=new Promise(function(b){a.a=b;a.A&&b(a.A)})}xe.prototype.resolve=function(a){if(this.A)throw Error("Already resolved.");this.A=a;this.a&&this.a(a)};function S(a){this.c=!1;this.a=a;this.G=new Map;this.f=function(a){return a()};this.b=!1;this.m=[];this.fa=new ve(a)}r=S.prototype;
r.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!ne(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.a.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var d=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+a+"' callback must be a function.");
return b},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=d("connectedCallback");var g=d("disconnectedCallback");var h=d("adoptedCallback");var k=d("attributeChangedCallback");var l=b.observedAttributes||[]}catch(n){return}finally{this.c=!1}b={localName:a,constructor:b,connectedCallback:f,disconnectedCallback:g,adoptedCallback:h,attributeChangedCallback:k,observedAttributes:l,constructionStack:[]};re(this.a,a,b);this.m.push(b);
this.b||(this.b=!0,this.f(function(){return ye(c)}))};r.ia=function(a){Q(this.a,a)};function ye(a){if(!1!==a.b){a.b=!1;for(var b=a.m,c=[],d=new Map,e=0;e<b.length;e++)d.set(b[e].localName,[]);Q(a.a,document,{ia:function(b){if(void 0===b.__CE_state){var e=b.localName,f=d.get(e);f?f.push(b):a.a.a.get(e)&&c.push(b)}}});for(e=0;e<c.length;e++)ue(a.a,c[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=d.get(f.localName);for(var g=0;g<f.length;g++)ue(a.a,f[g]);(e=a.G.get(e))&&e.resolve(void 0)}}}
r.get=function(a){if(a=this.a.a.get(a))return a.constructor};r.Ca=function(a){if(!ne(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.G.get(a);if(b)return b.b;b=new xe;this.G.set(a,b);this.a.a.get(a)&&!this.m.some(function(b){return b.localName===a})&&b.resolve(void 0);return b.b};r.Ya=function(a){we(this.fa);var b=this.f;this.f=function(c){return a(function(){return b(c)})}};window.CustomElementRegistry=S;S.prototype.define=S.prototype.define;
S.prototype.upgrade=S.prototype.ia;S.prototype.get=S.prototype.get;S.prototype.whenDefined=S.prototype.Ca;S.prototype.polyfillWrapFlushCallback=S.prototype.Ya;var ze=window.Document.prototype.createElement,Ae=window.Document.prototype.createElementNS,Be=window.Document.prototype.importNode,Ce=window.Document.prototype.prepend,De=window.Document.prototype.append,Ee=window.DocumentFragment.prototype.prepend,Fe=window.DocumentFragment.prototype.append,Ge=window.Node.prototype.cloneNode,He=window.Node.prototype.appendChild,Ie=window.Node.prototype.insertBefore,Je=window.Node.prototype.removeChild,Ke=window.Node.prototype.replaceChild,Le=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),Me=window.Element.prototype.attachShadow,Ne=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Oe=window.Element.prototype.getAttribute,Pe=window.Element.prototype.setAttribute,Qe=window.Element.prototype.removeAttribute,Re=window.Element.prototype.getAttributeNS,Se=window.Element.prototype.setAttributeNS,Te=window.Element.prototype.removeAttributeNS,Ue=window.Element.prototype.insertAdjacentElement,Ve=window.Element.prototype.insertAdjacentHTML,We=window.Element.prototype.prepend,
Xe=window.Element.prototype.append,Ye=window.Element.prototype.before,Ze=window.Element.prototype.after,$e=window.Element.prototype.replaceWith,af=window.Element.prototype.remove,bf=window.HTMLElement,cf=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),df=window.HTMLElement.prototype.insertAdjacentElement,ef=window.HTMLElement.prototype.insertAdjacentHTML;var ff=new function(){};function gf(){var a=hf;window.HTMLElement=function(){function b(){var b=this.constructor,d=a.m.get(b);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=ze.call(document,d.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=d,a.b(e),e;d=e.length-1;var f=e[d];if(f===ff)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[d]=ff;Object.setPrototypeOf(f,b.prototype);a.b(f);return f}b.prototype=bf.prototype;Object.defineProperty(b.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});return b}()};function jf(a,b,c){function d(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var f=[],l=0;l<d.length;l++){var n=d[l];n instanceof Element&&M(n)&&f.push(n);if(n instanceof DocumentFragment)for(n=n.firstChild;n;n=n.nextSibling)e.push(n);else e.push(n)}b.apply(this,d);for(d=0;d<f.length;d++)P(a,f[d]);if(M(this))for(d=0;d<e.length;d++)f=e[d],f instanceof Element&&O(a,f)}}void 0!==c.ha&&(b.prepend=d(c.ha));void 0!==c.append&&(b.append=d(c.append))};function kf(){var a=hf;N(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var c=a.a.get(b);if(c)return new c.constructor}b=ze.call(this,b);a.b(b);return b});N(Document.prototype,"importNode",function(b,c){b=Be.call(this,b,c);this.__CE_hasRegistry?Q(a,b):te(a,b);return b});N(Document.prototype,"createElementNS",function(b,c){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var d=a.a.get(c);if(d)return new d.constructor}b=Ae.call(this,b,c);a.b(b);return b});
jf(a,Document.prototype,{ha:Ce,append:De})};function lf(){function a(a,d){Object.defineProperty(a,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,a);else{var c=void 0;if(this.firstChild){var e=this.childNodes,h=e.length;if(0<h&&M(this)){c=Array(h);for(var k=0;k<h;k++)c[k]=e[k]}}d.set.call(this,a);if(c)for(a=0;a<c.length;a++)P(b,c[a])}}})}var b=hf;N(Node.prototype,"insertBefore",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);
a=Ie.call(this,a,d);if(M(this))for(d=0;d<c.length;d++)O(b,c[d]);return a}c=M(a);d=Ie.call(this,a,d);c&&P(b,a);M(this)&&O(b,a);return d});N(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=He.call(this,a);if(M(this))for(var e=0;e<c.length;e++)O(b,c[e]);return a}c=M(a);e=He.call(this,a);c&&P(b,a);M(this)&&O(b,a);return e});N(Node.prototype,"cloneNode",function(a){a=Ge.call(this,a);this.ownerDocument.__CE_hasRegistry?Q(b,a):
te(b,a);return a});N(Node.prototype,"removeChild",function(a){var c=M(a),e=Je.call(this,a);c&&P(b,a);return e});N(Node.prototype,"replaceChild",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=Ke.call(this,a,d);if(M(this))for(P(b,d),d=0;d<c.length;d++)O(b,c[d]);return a}c=M(a);var f=Ke.call(this,a,d),g=M(this);g&&P(b,d);c&&P(b,a);g&&O(b,a);return f});Le&&Le.get?a(Node.prototype,Le):se(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=
[],b=0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)Je.call(this,this.firstChild);He.call(this,document.createTextNode(a))}})})};function mf(a){function b(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var h=[],k=0;k<d.length;k++){var l=d[k];l instanceof Element&&M(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)e.push(l);else e.push(l)}b.apply(this,d);for(d=0;d<h.length;d++)P(a,h[d]);if(M(this))for(d=0;d<e.length;d++)h=e[d],h instanceof Element&&O(a,h)}}var c=Element.prototype;void 0!==Ye&&(c.before=b(Ye));void 0!==Ye&&(c.after=b(Ze));void 0!==$e&&
N(c,"replaceWith",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=[];for(var g=[],h=0;h<c.length;h++){var k=c[h];k instanceof Element&&M(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)d.push(k);else d.push(k)}h=M(this);$e.apply(this,c);for(c=0;c<g.length;c++)P(a,g[c]);if(h)for(P(a,this),c=0;c<d.length;c++)g=d[c],g instanceof Element&&O(a,g)});void 0!==af&&N(c,"remove",function(){var b=M(this);af.call(this);b&&P(a,this)})};function nf(){function a(a,b){Object.defineProperty(a,"innerHTML",{enumerable:b.enumerable,configurable:!0,get:b.get,set:function(a){var c=this,e=void 0;M(this)&&(e=[],pe(this,function(a){a!==c&&e.push(a)}));b.set.call(this,a);if(e)for(var f=0;f<e.length;f++){var g=e[f];1===g.__CE_state&&d.disconnectedCallback(g)}this.ownerDocument.__CE_hasRegistry?Q(d,this):te(d,this);return a}})}function b(a,b){N(a,"insertAdjacentElement",function(a,c){var e=M(c);a=b.call(this,a,c);e&&P(d,c);M(a)&&O(d,c);return a})}
function c(a,b){function c(a,b){for(var c=[];a!==b;a=a.nextSibling)c.push(a);for(b=0;b<c.length;b++)Q(d,c[b])}N(a,"insertAdjacentHTML",function(a,d){a=a.toLowerCase();if("beforebegin"===a){var e=this.previousSibling;b.call(this,a,d);c(e||this.parentNode.firstChild,this)}else if("afterbegin"===a)e=this.firstChild,b.call(this,a,d),c(this.firstChild,e);else if("beforeend"===a)e=this.lastChild,b.call(this,a,d),c(e||this.firstChild,null);else if("afterend"===a)e=this.nextSibling,b.call(this,a,d),c(this.nextSibling,
e);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");})}var d=hf;Me&&N(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=Me.call(this,a)});Ne&&Ne.get?a(Element.prototype,Ne):cf&&cf.get?a(HTMLElement.prototype,cf):se(d,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return Ge.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName,c=b?this.content:this,d=Ae.call(document,
this.namespaceURI,this.localName);for(d.innerHTML=a;0<c.childNodes.length;)Je.call(c,c.childNodes[0]);for(a=b?d.content:d;0<a.childNodes.length;)He.call(c,a.childNodes[0])}})});N(Element.prototype,"setAttribute",function(a,b){if(1!==this.__CE_state)return Pe.call(this,a,b);var c=Oe.call(this,a);Pe.call(this,a,b);b=Oe.call(this,a);d.attributeChangedCallback(this,a,c,b,null)});N(Element.prototype,"setAttributeNS",function(a,b,c){if(1!==this.__CE_state)return Se.call(this,a,b,c);var e=Re.call(this,a,
b);Se.call(this,a,b,c);c=Re.call(this,a,b);d.attributeChangedCallback(this,b,e,c,a)});N(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return Qe.call(this,a);var b=Oe.call(this,a);Qe.call(this,a);null!==b&&d.attributeChangedCallback(this,a,b,null,null)});N(Element.prototype,"removeAttributeNS",function(a,b){if(1!==this.__CE_state)return Te.call(this,a,b);var c=Re.call(this,a,b);Te.call(this,a,b);var e=Re.call(this,a,b);c!==e&&d.attributeChangedCallback(this,b,c,e,a)});df?b(HTMLElement.prototype,
df):Ue?b(Element.prototype,Ue):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");ef?c(HTMLElement.prototype,ef):Ve?c(Element.prototype,Ve):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");jf(d,Element.prototype,{ha:We,append:Xe});mf(d)};var of=window.customElements;if(!of||of.forcePolyfill||"function"!=typeof of.define||"function"!=typeof of.get){var hf=new qe;gf();kf();jf(hf,DocumentFragment.prototype,{ha:Ee,append:Fe});lf();nf();document.__CE_hasRegistry=!0;var customElements=new S(hf);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};function pf(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}
function qf(a){a=a.replace(rf,"").replace(sf,"");var b=vf,c=a,d=new pf;d.start=0;d.end=c.length;for(var e=d,f=0,g=c.length;f<g;f++)if("{"===c[f]){e.rules||(e.rules=[]);var h=e,k=h.rules[h.rules.length-1]||null;e=new pf;e.start=f+1;e.parent=h;e.previous=k;h.rules.push(e)}else"}"===c[f]&&(e.end=f+1,e=e.parent||d);return b(d,a)}
function vf(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=wf(c),c=c.replace(xf," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=yf:c.match(zf)&&(a.type=Af,a.keyframesName=a.selector.split(xf).pop()):a.type=0===c.indexOf("--")?Bf:Cf);if(c=a.rules)for(var d=0,e=c.length,f=void 0;d<e&&(f=c[d]);d++)vf(f,
b);return a}function wf(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(a,c){a=c;for(c=6-a.length;c--;)a="0"+a;return"\\"+a})}
function Df(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var g=e.length,h=void 0;f<g&&(h=e[f]);f++)d=Df(h,b,d)}else b?b=a.cssText:(b=a.cssText,b=b.replace(Ef,"").replace(Ff,""),b=b.replace(Gf,"").replace(Hf,"")),(d=b.trim())&&(d="  "+d+"\n")}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
var Cf=1,Af=7,yf=4,Bf=1E3,rf=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,sf=/@import[^;]*;/gim,Ef=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,Ff=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,Gf=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,Hf=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,zf=/^@[^\s]*keyframes/,xf=/\s+/g;var T=!(window.ShadyDOM&&window.ShadyDOM.inUse),If;function Jf(a){If=a&&a.shimcssproperties?!1:T||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?If=window.ShadyCSS.nativeCss:window.ShadyCSS?(Jf(window.ShadyCSS),window.ShadyCSS=void 0):Jf(window.WebComponents&&window.WebComponents.flags);var V=If;var Kf=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Lf=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Mf=/(--[\w-]+)\s*([:,;)]|$)/gi,Nf=/(animation\s*:)|(animation-name\s*:)/,Of=/@media\s(.*)/,Pf=/\{[^}]*\}/g;var Qf=new Set;function Rf(a,b){if(!a)return"";"string"===typeof a&&(a=qf(a));b&&Sf(a,b);return Df(a,V)}function Tf(a){!a.__cssRules&&a.textContent&&(a.__cssRules=qf(a.textContent));return a.__cssRules||null}function Uf(a){return!!a.parent&&a.parent.type===Af}function Sf(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===yf){var g=a.selector.match(Of);g&&(window.matchMedia(g[1]).matches||(e=!0))}f===Cf?b(a):c&&f===Af?c(a):f===Bf&&(e=!0);if((a=a.rules)&&!e)for(e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++)Sf(g,b,c,d)}}
function Vf(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;Wf(e,c,d);return e}var Xf=null;function Yf(a){a=document.createComment(" Shady DOM styles for "+a+" ");var b=document.head;b.insertBefore(a,(Xf?Xf.nextSibling:null)||b.firstChild);return Xf=a}function Wf(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);Xf?a.compareDocumentPosition(Xf)===Node.DOCUMENT_POSITION_PRECEDING&&(Xf=a):Xf=a}
function Zf(a,b){for(var c=0,d=a.length;b<d;b++)if("("===a[b])c++;else if(")"===a[b]&&0===--c)return b;return-1}function $f(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");var d=Zf(a,c+3),e=a.substring(c+4,d);c=a.substring(0,c);a=$f(a.substring(d+1),b);d=e.indexOf(",");return-1===d?b(c,e.trim(),"",a):b(c,e.substring(0,d).trim(),e.substring(d+1).trim(),a)}function ag(a,b){T?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b)}
function bg(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return{is:b,X:c}}function cg(a){for(var b=[],c="",d=0;0<=d&&d<a.length;d++)if("("===a[d]){var e=Zf(a,d);c+=a.slice(d,e+1);d=e}else","===a[d]?(b.push(c),c=""):c+=a[d];c&&b.push(c);return b}
function dg(a){if(void 0===a.ja){var b=a.getAttribute("css-build");if(b)a.ja=b;else{a:{b="template"===a.localName?a.content.firstChild:a.firstChild;if(b instanceof Comment&&(b=b.textContent.trim().split(":"),"css-build"===b[0])){b=b[1];break a}b=""}if(""!==b){var c="template"===a.localName?a.content.firstChild:a.firstChild;c.parentNode.removeChild(c)}a.ja=b}}return a.ja||""};function eg(){}function fg(a,b){gg(W,a,function(a){hg(a,b||"")})}function gg(a,b,c){b.nodeType===Node.ELEMENT_NODE&&c(b);if(b="template"===b.localName?(b.content||b.kb||b).childNodes:b.children||b.childNodes)for(var d=0;d<b.length;d++)gg(a,b[d],c)}
function hg(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute(ig);c?d&&(b=d.replace("style-scope","").replace(b,""),ag(a,b)):ag(a,(d?d+" ":"")+"style-scope "+b)}}function jg(a,b,c){gg(W,a,function(a){hg(a,b,!0);hg(a,c)})}function kg(a,b){gg(W,a,function(a){hg(a,b||"",!0)})}
function lg(a,b,c,d){var e=W;T||"shady"===(void 0===d?"":d)?b=Rf(b,c):(a=bg(a),b=mg(e,b,a.is,a.X,c)+"\n\n");return b.trim()}function mg(a,b,c,d,e){var f=ng(c,d);c=c?og+c:"";return Rf(b,function(b){b.c||(b.selector=b.F=pg(a,b,a.b,c,f),b.c=!0);e&&e(b,c,f)})}function ng(a,b){return b?"[is="+a+"]":a}function pg(a,b,c,d,e){var f=cg(b.selector);if(!Uf(b)){b=0;for(var g=f.length,h=void 0;b<g&&(h=f[b]);b++)f[b]=c.call(a,h,d,e)}return f.filter(function(a){return!!a}).join(qg)}
function rg(a){return a.replace(sg,function(a,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return":"+c+"("+d+")"})}function tg(a){for(var b=[],c;c=a.match(ug);){var d=c.index,e=Zf(a,d);if(-1===e)throw Error(c.input+" selector missing ')'");c=a.slice(d,e+1);a=a.replace(c,"\ue000");b.push(c)}return{sa:a,matches:b}}function vg(a,b){var c=a.split("\ue000");return b.reduce(function(a,b,f){return a+b+c[f+1]},c[0])}
eg.prototype.b=function(a,b,c){var d=!1;a=a.trim();var e=sg.test(a);e&&(a=a.replace(sg,function(a,b,c){return":"+b+"("+c.replace(/\s/g,"")+")"}),a=rg(a));var f=ug.test(a);if(f){var g=tg(a);a=g.sa;g=g.matches}a=a.replace(wg,xg+" $1");a=a.replace(yg,function(a,e,f){d||(a=zg(f,e,b,c),d=d||a.stop,e=a.Oa,f=a.value);return e+f});f&&(a=vg(a,g));e&&(a=rg(a));return a};
function zg(a,b,c,d){var e=a.indexOf(Ag);0<=a.indexOf(xg)?a=Bg(a,d):0!==e&&(a=c?Cg(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(Dg,function(a,b){return" > "+b}))}a=a.replace(Eg,function(a,b,c){return'[dir="'+c+'"] '+b+", "+b+'[dir="'+c+'"]'});return{value:a,Oa:b,stop:f}}function Cg(a,b){a=a.split(Fg);a[0]+=b;return a.join(Fg)}
function Bg(a,b){var c=a.match(Gg);return(c=c&&c[2].trim()||"")?c[0].match(Hg)?a.replace(Gg,function(a,c,f){return b+f}):c.split(Hg)[0]===b?c:Ig:a.replace(xg,b)}function Jg(a){a.selector===Kg&&(a.selector="html")}eg.prototype.c=function(a){return a.match(xg)?"":a.match(Ag)?this.b(a,Lg):Cg(a.trim(),Lg)};fa.Object.defineProperties(eg.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});
var sg=/:(nth[-\w]+)\(([^)]+)\)/,Lg=":not(.style-scope)",qg=",",yg=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,Hg=/[[.:#*]/,xg=":host",Kg=":root",Ag="::slotted",wg=new RegExp("^("+Ag+")"),Gg=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Dg=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Eg=/(.*):dir\((?:(ltr|rtl))\)/,og=".",Fg=":",ig="class",Ig="should_not_match",ug=/:(?:matches|any|-(?:webkit|moz)-any)/,W=new eg;function Mg(a,b,c,d,e){this.M=a||null;this.b=b||null;this.c=c||[];this.T=null;this.da=e||"";this.X=d||"";this.a=this.I=this.O=null}function X(a){return a?a.__styleInfo:null}function Ng(a,b){return a.__styleInfo=b}Mg.prototype.f=function(){return this.M};Mg.prototype._getStyleRules=Mg.prototype.f;function Og(a){var b=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return b&&b.call(this,a)}var Pg=navigator.userAgent.match("Trident");function Qg(){}function Rg(a){var b={},c=[],d=0;Sf(a,function(a){Sg(a);a.index=d++;a=a.B.cssText;for(var c;c=Mf.exec(a);){var e=c[1];":"!==c[2]&&(b[e]=!0)}},function(a){c.push(a)});a.b=c;a=[];for(var e in b)a.push(e);return a}
function Sg(a){if(!a.B){var b={},c={};Tg(a,c)&&(b.L=c,a.rules=null);b.cssText=a.parsedCssText.replace(Pf,"").replace(Kf,"");a.B=b}}function Tg(a,b){var c=a.B;if(c){if(c.L)return Object.assign(b,c.L),!0}else{c=a.parsedCssText;for(var d;a=Kf.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0}return d}}
function Ug(a,b,c){b&&(b=0<=b.indexOf(";")?Vg(a,b,c):$f(b,function(b,e,f,g){if(!e)return b+g;(e=Ug(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=Ug(a,c[f]||f,c)||f;return b+(e||"")+g}));return b&&b.trim()||""}
function Vg(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){Lf.lastIndex=0;if(f=Lf.exec(e))e=Ug(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var g=e.substring(f);g=g.trim();g=Ug(a,g,c)||g;e=e.substring(0,f)+g}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||""}return b.join(";")}
function Wg(a,b){var c={},d=[];Sf(a,function(a){a.B||Sg(a);var e=a.F||a.parsedSelector;b&&a.B.L&&e&&Og.call(b,e)&&(Tg(a,c),a=a.index,e=parseInt(a/32,10),d[e]=(d[e]||0)|1<<a%32)},null,!0);return{L:c,key:d}}
function Xg(a,b,c,d){b.B||Sg(b);if(b.B.L){var e=bg(a);a=e.is;e=e.X;e=a?ng(a,e):"html";var f=b.parsedSelector,g=":host > *"===f||"html"===f,h=0===f.indexOf(":host")&&!g;"shady"===c&&(g=f===e+" > *."+e||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(e));if(g||h)c=e,h&&(b.F||(b.F=pg(W,b,W.b,a?og+a:"",e)),c=b.F||e),d({sa:c,Va:h,vb:g})}}function Yg(a,b,c){var d={},e={};Sf(b,function(b){Xg(a,b,c,function(c){Og.call(a.lb||a,c.sa)&&(c.Va?Tg(b,d):Tg(b,e))})},null,!0);return{Za:e,Ta:d}}
function Zg(a,b,c,d){var e=bg(b),f=ng(e.is,e.X),g=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])"),h=X(b);e=h.M;h=h.da;var k=$g(e,d);return lg(b,e,function(b){var e="";b.B||Sg(b);b.B.cssText&&(e=Vg(a,b.B.cssText,c));b.cssText=e;if(!T&&!Uf(b)&&b.cssText){var h=e=b.cssText;null==b.xa&&(b.xa=Nf.test(e));if(b.xa)if(null==b.ga){b.ga=[];for(var l in k)h=k[l],h=h(e),e!==h&&(e=h,b.ga.push(l))}else{for(l=0;l<b.ga.length;++l)h=k[b.ga[l]],e=h(e);h=e}b.cssText=h;b.F=b.F||b.selector;
e="."+d;l=cg(b.F);h=0;for(var u=l.length,w=void 0;h<u&&(w=l[h]);h++)l[h]=w.match(g)?w.replace(f,e):e+" "+w;b.selector=l.join(",")}},h)}function $g(a,b){a=a.b;var c={};if(!T&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,g=b;f.f=new RegExp("\\b"+f.keyframesName+"(?!\\B|-)","g");f.a=f.keyframesName+"-"+g;f.F=f.F||f.selector;f.selector=f.F.replace(f.keyframesName,f.a);c[e.keyframesName]=ah(e)}return c}function ah(a){return function(b){return b.replace(a.f,a.a)}}
function bh(a,b){var c=ch,d=Tf(a);a.textContent=Rf(d,function(a){var d=a.cssText=a.parsedCssText;a.B&&a.B.cssText&&(d=d.replace(Ef,"").replace(Ff,""),a.cssText=Vg(c,d,b))})}fa.Object.defineProperties(Qg.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var ch=new Qg;var dh={},eh=window.customElements;if(eh&&!T){var fh=eh.define;eh.define=function(a,b,c){dh[a]||(dh[a]=Yf(a));fh.call(eh,a,b,c)}};function gh(){this.cache={}}gh.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({L:b,styleElement:c,I:d});100<e.length&&e.shift();this.cache[a]=e};gh.prototype.fetch=function(a,b,c){if(a=this.cache[a])for(var d=a.length-1;0<=d;d--){var e=a[d],f;a:{for(f=0;f<c.length;f++){var g=c[f];if(e.L[g]!==b[g]){f=!1;break a}}f=!0}if(f)return e}};function hh(){}function ih(a){var b=[];a.classList?b=Array.from(a.classList):a instanceof window.SVGElement&&a.hasAttribute("class")&&(b=a.getAttribute("class").split(/\s+/));a=b;b=a.indexOf(W.a);return-1<b?a[b+1]:""}function jh(a){var b=a.getRootNode();return b===a||b===a.ownerDocument?"":(a=b.host)?bg(a).is:""}
function kh(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode(),g=ih(e);if(g&&f===e.ownerDocument&&("style"!==e.localName&&"template"!==e.localName||""===dg(e)))kg(e,g);else if(f instanceof ShadowRoot)for(f=jh(e),f!==g&&jg(e,g,f),e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+W.a+")"),g=0;g<e.length;g++){f=e[g];
var h=jh(f);h&&hg(f,h)}}}}}
if(!(T||window.ShadyDOM&&window.ShadyDOM.handlesDynamicScoping)){var lh=new MutationObserver(kh),mh=function(a){lh.observe(a,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)mh(document);else{var nh=function(){mh(document.body)};window.HTMLImports?window.HTMLImports.whenReady(nh):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){nh();document.removeEventListener("readystatechange",a)};document.addEventListener("readystatechange",
a)}else nh()})}hh=function(){kh(lh.takeRecords())}}var oh=hh;var ph={};var qh=Promise.resolve();function rh(a){if(a=ph[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1}function sh(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function th(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a.b||(a.b=!0,qh.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a.b=!1}))};var uh=new gh;function Y(){this.G={};this.c=document.documentElement;var a=new pf;a.rules=[];this.f=Ng(this.c,new Mg(a));this.m=!1;this.b=this.a=null}r=Y.prototype;r.flush=function(){oh()};r.Ra=function(a){return Tf(a)};r.cb=function(a){return Rf(a)};r.prepareTemplate=function(a,b,c){this.prepareTemplateDom(a,b);this.prepareTemplateStyles(a,b,c)};
r.prepareTemplateStyles=function(a,b,c){if(!a.m){T||dh[b]||(dh[b]=Yf(b));a.m=!0;a.name=b;a.extends=c;ph[b]=a;var d=dg(a);var e=[];for(var f=a.content.querySelectorAll("style"),g=0;g<f.length;g++){var h=f[g];if(h.hasAttribute("shady-unscoped")){if(!T){var k=h.textContent;Qf.has(k)||(Qf.add(k),k=h.cloneNode(!0),document.head.appendChild(k));h.parentNode.removeChild(h)}}else e.push(h.textContent),h.parentNode.removeChild(h)}e=e.join("").trim();c={is:b,extends:c};vh(this);if(f=""===dg(a))f=Lf.test(e)||
Kf.test(e),Lf.lastIndex=0,Kf.lastIndex=0;e=qf(e);f&&V&&this.a&&this.a.transformRules(e,b);a._styleAst=e;e=[];V||(e=Rg(a._styleAst));if(!e.length||V)f=T?a.content:null,b=dh[b]||null,d=lg(c,a._styleAst,null,d),d=d.length?Vf(d,c.is,f,b):void 0,a.a=d;a.f=e}};r.prepareTemplateDom=function(a,b){var c=dg(a);T||"shady"===c||a.c||(a.c=!0,fg(a.content,b))};
function wh(a){!a.b&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.b=window.ShadyCSS.CustomStyleInterface,a.b.transformCallback=function(b){a.Aa(b)},a.b.validateCallback=function(){requestAnimationFrame(function(){(a.b.enqueued||a.m)&&a.flushCustomStyles()})})}function vh(a){!a.a&&window.ShadyCSS&&window.ShadyCSS.ApplyShim&&(a.a=window.ShadyCSS.ApplyShim,a.a.invalidCallback=rh);wh(a)}
r.flushCustomStyles=function(){vh(this);if(this.b){var a=this.b.processStyles();if(this.b.enqueued){if(V)for(var b=0;b<a.length;b++){var c=this.b.getStyleForCustomStyle(a[b]);if(c&&V&&this.a){var d=Tf(c);vh(this);this.a.transformRules(d);c.textContent=Rf(d)}}else for(xh(this,this.c,this.f),b=0;b<a.length;b++)(c=this.b.getStyleForCustomStyle(a[b]))&&bh(c,this.f.O);this.b.enqueued=!1;this.m&&!V&&this.styleDocument()}}};
r.styleElement=function(a,b){var c=X(a);if(!c){var d=bg(a);c=d.is;d=d.X;var e=dh[c]||null;c=ph[c];if(c){var f=c._styleAst;var g=c.f;var h=dg(c)}f=new Mg(f,e,g,d,h);c&&Ng(a,f);c=f}a!==this.c&&(this.m=!0);b&&(c.T=c.T||{},Object.assign(c.T,b));if(V){b=c;f=bg(a).is;if(b.T){g=b.T;for(var k in g)null===k?a.style.removeProperty(k):a.style.setProperty(k,g[k])}if(!(!(k=ph[f])&&a!==this.c||k&&""!==dg(k))&&k&&k.a&&!sh(k)){if(sh(k)||k._applyShimValidatingVersion!==k._applyShimNextVersion)vh(this),this.a&&this.a.transformRules(k._styleAst,
f),k.a.textContent=lg(a,b.M),th(k);T&&(f=a.shadowRoot)&&(f=f.querySelector("style"))&&(f.textContent=lg(a,b.M));b.M=k._styleAst}}else if(k=c,this.flush(),xh(this,a,k),k.c&&k.c.length){b=bg(a).is;c=(f=uh.fetch(b,k.O,k.c))?f.styleElement:null;g=k.I;(h=f&&f.I)||(h=this.G[b]=(this.G[b]||0)+1,h=b+"-"+h);k.I=h;h=k.I;d=ch;d=c?c.textContent||"":Zg(d,a,k.O,h);e=X(a);var l=e.a;l&&!T&&l!==c&&(l._useCount--,0>=l._useCount&&l.parentNode&&l.parentNode.removeChild(l));T?e.a?(e.a.textContent=d,c=e.a):d&&(c=Vf(d,
h,a.shadowRoot,e.b)):c?c.parentNode||(Pg&&-1<d.indexOf("@media")&&(c.textContent=d),Wf(c,null,e.b)):d&&(c=Vf(d,h,null,e.b));c&&(c._useCount=c._useCount||0,e.a!=c&&c._useCount++,e.a=c);h=c;T||(c=k.I,e=d=a.getAttribute("class")||"",g&&(e=d.replace(new RegExp("\\s*x-scope\\s*"+g+"\\s*","g")," ")),e+=(e?" ":"")+"x-scope "+c,d!==e&&ag(a,e));f||uh.store(b,k.O,h,k.I)}};function yh(a,b){return(b=b.getRootNode().host)?X(b)?b:yh(a,b):a.c}
function xh(a,b,c){a=yh(a,b);var d=X(a);a=Object.create(d.O||null);var e=Yg(b,c.M,c.da);b=Wg(d.M,b).L;Object.assign(a,e.Ta,b,e.Za);b=c.T;for(var f in b)if((e=b[f])||0===e)a[f]=e;f=ch;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=Ug(f,a[d],a);c.O=a}r.styleDocument=function(a){this.styleSubtree(this.c,a)};
r.styleSubtree=function(a,b){var c=a.shadowRoot;(c||a===this.c)&&this.styleElement(a,b);if(b=c&&(c.children||c.childNodes))for(a=0;a<b.length;a++)this.styleSubtree(b[a]);else if(a=a.children||a.childNodes)for(b=0;b<a.length;b++)this.styleSubtree(a[b])};
r.Aa=function(a){var b=this,c=Tf(a),d=dg(a);d!==this.f.da&&(this.f.da=d);Sf(c,function(a){if(T)Jg(a);else{var c=W;a.selector=a.parsedSelector;Jg(a);a.selector=a.F=pg(c,a,c.c,void 0,void 0)}V&&""===d&&(vh(b),b.a&&b.a.transformRule(a))});V?a.textContent=Rf(c):this.f.M.rules.push(c)};r.getComputedStyleValue=function(a,b){var c;V||(c=(X(a)||X(yh(this,a))).O[b]);return(c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};
r.bb=function(a,b){var c=a.getRootNode();b=b?b.split(/\s/):[];c=c.host&&c.host.localName;if(!c){var d=a.getAttribute("class");if(d){d=d.split(/\s/);for(var e=0;e<d.length;e++)if(d[e]===W.a){c=d[e+1];break}}}c&&b.push(W.a,c);V||(c=X(a))&&c.I&&b.push(ch.a,c.I);ag(a,b.join(" "))};r.La=function(a){return X(a)};r.ab=function(a,b){hg(a,b)};r.eb=function(a,b){hg(a,b,!0)};r.$a=function(a){return jh(a)};r.Pa=function(a){return ih(a)};Y.prototype.flush=Y.prototype.flush;Y.prototype.prepareTemplate=Y.prototype.prepareTemplate;
Y.prototype.styleElement=Y.prototype.styleElement;Y.prototype.styleDocument=Y.prototype.styleDocument;Y.prototype.styleSubtree=Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue=Y.prototype.getComputedStyleValue;Y.prototype.setElementClass=Y.prototype.bb;Y.prototype._styleInfoForNode=Y.prototype.La;Y.prototype.transformCustomStyleForDocument=Y.prototype.Aa;Y.prototype.getStyleAst=Y.prototype.Ra;Y.prototype.styleAstToString=Y.prototype.cb;Y.prototype.flushCustomStyles=Y.prototype.flushCustomStyles;
Y.prototype.scopeNode=Y.prototype.ab;Y.prototype.unscopeNode=Y.prototype.eb;Y.prototype.scopeForNode=Y.prototype.$a;Y.prototype.currentScopeForNode=Y.prototype.Pa;Object.defineProperties(Y.prototype,{nativeShadow:{get:function(){return T}},nativeCss:{get:function(){return V}}});var Z=new Y,zh,Ah;window.ShadyCSS&&(zh=window.ShadyCSS.ApplyShim,Ah=window.ShadyCSS.CustomStyleInterface);
window.ShadyCSS={ScopingShim:Z,prepareTemplate:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplate(a,b,c)},prepareTemplateDom:function(a,b){Z.prepareTemplateDom(a,b)},prepareTemplateStyles:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplateStyles(a,b,c)},styleSubtree:function(a,b){Z.flushCustomStyles();Z.styleSubtree(a,b)},styleElement:function(a){Z.flushCustomStyles();Z.styleElement(a)},styleDocument:function(a){Z.flushCustomStyles();Z.styleDocument(a)},flushCustomStyles:function(){Z.flushCustomStyles()},
getComputedStyleValue:function(a,b){return Z.getComputedStyleValue(a,b)},nativeCss:V,nativeShadow:T};zh&&(window.ShadyCSS.ApplyShim=zh);Ah&&(window.ShadyCSS.CustomStyleInterface=Ah);(function(a){function b(a){""==a&&(f.call(this),this.i=!0);return a.toLowerCase()}function c(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,63,96].indexOf(b)?a:encodeURIComponent(a)}function d(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,96].indexOf(b)?a:encodeURIComponent(a)}function e(a,e,g){function h(a){ba.push(a)}var k=e||"scheme start",w=0,q="",u=!1,R=!1,ba=[];a:for(;(void 0!=a[w-1]||0==w)&&!this.i;){var m=a[w];switch(k){case "scheme start":if(m&&p.test(m))q+=
m.toLowerCase(),k="scheme";else if(e){h("Invalid scheme.");break a}else{q="";k="no scheme";continue}break;case "scheme":if(m&&G.test(m))q+=m.toLowerCase();else if(":"==m){this.h=q;q="";if(e)break a;void 0!==l[this.h]&&(this.D=!0);k="file"==this.h?"relative":this.D&&g&&g.h==this.h?"relative or authority":this.D?"authority first slash":"scheme data"}else if(e){void 0!=m&&h("Code point not allowed in scheme: "+m);break a}else{q="";w=0;k="no scheme";continue}break;case "scheme data":"?"==m?(this.u="?",
k="query"):"#"==m?(this.C="#",k="fragment"):void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.pa+=c(m));break;case "no scheme":if(g&&void 0!==l[g.h]){k="relative";continue}else h("Missing scheme."),f.call(this),this.i=!0;break;case "relative or authority":if("/"==m&&"/"==a[w+1])k="authority ignore slashes";else{h("Expected /, got: "+m);k="relative";continue}break;case "relative":this.D=!0;"file"!=this.h&&(this.h=g.h);if(void 0==m){this.j=g.j;this.s=g.s;this.l=g.l.slice();this.u=g.u;this.v=g.v;this.g=g.g;
break a}else if("/"==m||"\\"==m)"\\"==m&&h("\\ is an invalid code point."),k="relative slash";else if("?"==m)this.j=g.j,this.s=g.s,this.l=g.l.slice(),this.u="?",this.v=g.v,this.g=g.g,k="query";else if("#"==m)this.j=g.j,this.s=g.s,this.l=g.l.slice(),this.u=g.u,this.C="#",this.v=g.v,this.g=g.g,k="fragment";else{k=a[w+1];var y=a[w+2];if("file"!=this.h||!p.test(m)||":"!=k&&"|"!=k||void 0!=y&&"/"!=y&&"\\"!=y&&"?"!=y&&"#"!=y)this.j=g.j,this.s=g.s,this.v=g.v,this.g=g.g,this.l=g.l.slice(),this.l.pop();k=
"relative path";continue}break;case "relative slash":if("/"==m||"\\"==m)"\\"==m&&h("\\ is an invalid code point."),k="file"==this.h?"file host":"authority ignore slashes";else{"file"!=this.h&&(this.j=g.j,this.s=g.s,this.v=g.v,this.g=g.g);k="relative path";continue}break;case "authority first slash":if("/"==m)k="authority second slash";else{h("Expected '/', got: "+m);k="authority ignore slashes";continue}break;case "authority second slash":k="authority ignore slashes";if("/"!=m){h("Expected '/', got: "+
m);continue}break;case "authority ignore slashes":if("/"!=m&&"\\"!=m){k="authority";continue}else h("Expected authority, got: "+m);break;case "authority":if("@"==m){u&&(h("@ already seen."),q+="%40");u=!0;for(m=0;m<q.length;m++)y=q[m],"\t"==y||"\n"==y||"\r"==y?h("Invalid whitespace in authority."):":"==y&&null===this.g?this.g="":(y=c(y),null!==this.g?this.g+=y:this.v+=y);q=""}else if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){w-=q.length;q="";k="host";continue}else q+=m;break;case "file host":if(void 0==
m||"/"==m||"\\"==m||"?"==m||"#"==m){2!=q.length||!p.test(q[0])||":"!=q[1]&&"|"!=q[1]?(0!=q.length&&(this.j=b.call(this,q),q=""),k="relative path start"):k="relative path";continue}else"\t"==m||"\n"==m||"\r"==m?h("Invalid whitespace in file host."):q+=m;break;case "host":case "hostname":if(":"!=m||R)if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){this.j=b.call(this,q);q="";k="relative path start";if(e)break a;continue}else"\t"!=m&&"\n"!=m&&"\r"!=m?("["==m?R=!0:"]"==m&&(R=!1),q+=m):h("Invalid code point in host/hostname: "+
m);else if(this.j=b.call(this,q),q="",k="port","hostname"==e)break a;break;case "port":if(/[0-9]/.test(m))q+=m;else if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m||e){""!=q&&(q=parseInt(q,10),q!=l[this.h]&&(this.s=q+""),q="");if(e)break a;k="relative path start";continue}else"\t"==m||"\n"==m||"\r"==m?h("Invalid code point in port: "+m):(f.call(this),this.i=!0);break;case "relative path start":"\\"==m&&h("'\\' not allowed in path.");k="relative path";if("/"!=m&&"\\"!=m)continue;break;case "relative path":if(void 0!=
m&&"/"!=m&&"\\"!=m&&(e||"?"!=m&&"#"!=m))"\t"!=m&&"\n"!=m&&"\r"!=m&&(q+=c(m));else{"\\"==m&&h("\\ not allowed in relative path.");if(y=n[q.toLowerCase()])q=y;".."==q?(this.l.pop(),"/"!=m&&"\\"!=m&&this.l.push("")):"."==q&&"/"!=m&&"\\"!=m?this.l.push(""):"."!=q&&("file"==this.h&&0==this.l.length&&2==q.length&&p.test(q[0])&&"|"==q[1]&&(q=q[0]+":"),this.l.push(q));q="";"?"==m?(this.u="?",k="query"):"#"==m&&(this.C="#",k="fragment")}break;case "query":e||"#"!=m?void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.u+=
d(m)):(this.C="#",k="fragment");break;case "fragment":void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.C+=m)}w++}}function f(){this.v=this.pa=this.h="";this.g=null;this.s=this.j="";this.l=[];this.C=this.u="";this.D=this.i=!1}function g(a,b){void 0===b||b instanceof g||(b=new g(String(b)));this.Ma=a;f.call(this);a=a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");e.call(this,a,null,b)}var h=!1;if(!a.rb)try{var k=new URL("b","http://a");k.pathname="c%20d";h="http://a/c%20d"===k.href}catch(w){}if(!h){var l=Object.create(null);
l.ftp=21;l.file=0;l.gopher=70;l.http=80;l.https=443;l.ws=80;l.wss=443;var n=Object.create(null);n["%2e"]=".";n[".%2e"]="..";n["%2e."]="..";n["%2e%2e"]="..";var p=/[a-zA-Z]/,G=/[a-zA-Z0-9\+\-\.]/;g.prototype={toString:function(){return this.href},get href(){if(this.i)return this.Ma;var a="";if(""!=this.v||null!=this.g)a=this.v+(null!=this.g?":"+this.g:"")+"@";return this.protocol+(this.D?"//"+a+this.host:"")+this.pathname+this.u+this.C},set href(a){f.call(this);e.call(this,a)},get protocol(){return this.h+
":"},set protocol(a){this.i||e.call(this,a+":","scheme start")},get host(){return this.i?"":this.s?this.j+":"+this.s:this.j},set host(a){!this.i&&this.D&&e.call(this,a,"host")},get hostname(){return this.j},set hostname(a){!this.i&&this.D&&e.call(this,a,"hostname")},get port(){return this.s},set port(a){!this.i&&this.D&&e.call(this,a,"port")},get pathname(){return this.i?"":this.D?"/"+this.l.join("/"):this.pa},set pathname(a){!this.i&&this.D&&(this.l=[],e.call(this,a,"relative path start"))},get search(){return this.i||
!this.u||"?"==this.u?"":this.u},set search(a){!this.i&&this.D&&(this.u="?","?"==a[0]&&(a=a.slice(1)),e.call(this,a,"query"))},get hash(){return this.i||!this.C||"#"==this.C?"":this.C},set hash(a){this.i||(this.C="#","#"==a[0]&&(a=a.slice(1)),e.call(this,a,"fragment"))},get origin(){var a;if(this.i||!this.h)return"";switch(this.h){case "data":case "file":case "javascript":case "mailto":return"null"}return(a=this.host)?this.h+"://"+a:""}};var u=a.URL;u&&(g.createObjectURL=function(a){return u.createObjectURL.apply(u,
arguments)},g.revokeObjectURL=function(a){u.revokeObjectURL(a)});a.URL=g}})(window);Object.getOwnPropertyDescriptor(Node.prototype,"baseURI")||Object.defineProperty(Node.prototype,"baseURI",{get:function(){var a=(this.ownerDocument||this).querySelector("base[href]");return a&&a.href||window.location.href},configurable:!0,enumerable:!0});var Bh=document.createElement("style");Bh.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var Ch=document.querySelector("head");Ch.insertBefore(Bh,Ch.firstChild);var Dh=window.customElements,Eh=!1,Fh=null;Dh.polyfillWrapFlushCallback&&Dh.polyfillWrapFlushCallback(function(a){Fh=a;Eh&&a()});function Gh(){window.HTMLTemplateElement.bootstrap&&window.HTMLTemplateElement.bootstrap(window.document);Fh&&Fh();Eh=!0;window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}
"complete"!==document.readyState?(window.addEventListener("load",Gh),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",Gh);Gh()})):Gh();}).call(this);

//# sourceMappingURL=webcomponents-bundle.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ })

/******/ });
//# sourceMappingURL=img-pop.js.map