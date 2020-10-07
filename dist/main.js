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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/sass/style.sass":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/sass/style.sass ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_header_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/header.jpg */ \"./src/assets/images/header.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_header_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body, html {\\n  padding: 0;\\n  margin: 0;\\n  background: #f1f1f1;\\n  height: 100%;\\n  font-family: \\\"Pacifico\\\", sans-serif;\\n}\\n\\n.app {\\n  height: 100%;\\n}\\n\\n.blurred {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: center;\\n  filter: blur(20px);\\n  -webkit-filter: blur(20px);\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n.wrapper {\\n  position: absolute;\\n  top: 0px;\\n  left: 0px;\\n  right: 0px;\\n  bottom: 0px;\\n  padding: 50px 0px 50px;\\n  overflow: auto;\\n}\\n\\n.page-content {\\n  max-width: 900px;\\n  margin: 0px auto;\\n  border-radius: 30px;\\n  overflow: hidden;\\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);\\n}\\n.page-content .head {\\n  height: 30vh;\\n  background-color: #6C63FF;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  display: flex;\\n  z-index: 1;\\n  margin: 0px;\\n}\\n.page-content .head .head-body {\\n  flex: 1;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(140, 122, 230, 0.8));\\n}\\n.page-content .head .head-body h1 {\\n  color: #fff;\\n  font-size: 4rem;\\n  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);\\n}\\n.page-content .container {\\n  z-index: 2;\\n  background: #2f3640;\\n}\\n.page-content .container .tabs .nav {\\n  padding: 0;\\n  margin: 0px;\\n  display: flex;\\n  justify-content: space-around;\\n  list-style: none;\\n  font-size: 2rem;\\n  height: 50px;\\n}\\n.page-content .container .tabs .nav .nav-element {\\n  flex: 1;\\n  text-align: center;\\n  height: 50px;\\n  line-height: 50px;\\n  cursor: pointer;\\n  transition: all 0.25s ease;\\n  color: gray;\\n  border-radius: 10px 10px 0px 0px;\\n}\\n.page-content .container .tabs .nav .nav-element:hover {\\n  height: 70px;\\n  line-height: 70px;\\n  transform: translateY(-20px);\\n  background: #8c7ae6;\\n  color: #fff;\\n  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);\\n}\\n.page-content .container .tabs .nav .nav-element.active {\\n  background: #fff;\\n  color: #353b48;\\n  height: 80px;\\n  transform: translateY(-30px);\\n  line-height: 80px;\\n  box-shadow: 0px -5px 5px rgba(140, 122, 230, 0.8);\\n  text-shadow: none;\\n}\\n.page-content .container .content {\\n  background: #fff;\\n  color: #353b48;\\n  padding: 2rem;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n.page-content .container .content .hidden {\\n  display: none;\\n}\\n.page-content .container .content .menus {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: flex-start;\\n  list-style: none;\\n  padding: 0;\\n  flex-wrap: wrap;\\n  color: #fff;\\n}\\n.page-content .container .content .menus .menu {\\n  height: 400px;\\n  width: 400px;\\n  margin-bottom: 2rem;\\n  background: #fff;\\n  border-radius: 10px;\\n  overflow: hidden;\\n  box-shadow: 0px 25px 10px -10px rgba(0, 0, 0, 0.2);\\n  transition: all 0.25s ease;\\n  position: relative;\\n}\\n.page-content .container .content .menus .menu .price {\\n  position: absolute;\\n  top: 10%;\\n  right: -500px;\\n  background: rgba(0, 0, 0, 0.8);\\n  padding: 1rem;\\n  border-radius: 30px 0px 0px 30px;\\n  font-size: 1.2rem;\\n  transition: all 0.25s ease;\\n  transition-delay: 0.25s;\\n}\\n.page-content .container .content .menus .menu .title {\\n  font-size: 1.2rem;\\n  position: absolute;\\n  left: 0px;\\n  right: 0px;\\n  bottom: -500px;\\n  background: rgba(0, 0, 0, 0.8);\\n  padding: 1rem;\\n  padding-top: 1.5rem;\\n  text-align: center;\\n  transition: all 0.25s ease;\\n  max-height: 50%;\\n}\\n.page-content .container .content .menus .menu img {\\n  width: 400px;\\n  height: 400px;\\n  object-fit: cover;\\n  transition: all 1s ease;\\n  transition-delay: 0.1s;\\n}\\n.page-content .container .content .menus .menu:hover {\\n  transform: scale(0.95);\\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);\\n}\\n.page-content .container .content .menus .menu:hover img {\\n  transition: all 5s ease;\\n  transform: scale(1.2);\\n}\\n.page-content .container .content .menus .menu:hover .price {\\n  right: 0px;\\n}\\n.page-content .container .content .menus .menu:hover .title {\\n  bottom: 0px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/assets/sass/style.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/images/food-1.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/food-1.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"72dc1cd011ca1f03ff622fe2de7c95de.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/food-1.jpg?");

/***/ }),

/***/ "./src/assets/images/food-2.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/food-2.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f8de3d59245bc928747ecb2bf326acf9.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/food-2.jpg?");

/***/ }),

/***/ "./src/assets/images/food-3.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/food-3.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c8a8507e7171af506554facc4d74d5ba.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/food-3.jpg?");

/***/ }),

/***/ "./src/assets/images/food-4.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/food-4.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6231bc12b45f5398df76b7c4ec93d822.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/food-4.jpg?");

/***/ }),

/***/ "./src/assets/images/food-5.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/food-5.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1b7ea21697d8291e01b4001b850382f5.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/food-5.jpg?");

/***/ }),

/***/ "./src/assets/images/food-6.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/food-6.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"621236874f951dadfca9cc5f4103cb78.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/food-6.jpg?");

/***/ }),

/***/ "./src/assets/images/header.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/header.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6e91402b3eafa593fe98c6b7a2308be2.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/header.jpg?");

/***/ }),

/***/ "./src/assets/sass/style.sass":
/*!************************************!*\
  !*** ./src/assets/sass/style.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/sass/style.sass\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/sass/style.sass?");

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Contact; });\nfunction Contact() {\n  const element = document.createElement('div');\n  const title = document.createElement('h2');\n  title.innerHTML = 'Contact';\n\n  const description = document.createElement('p');\n  description.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ab sequi quo adipisci quos excepturi quidem praesentium, dicta fuga eveniet molestias, temporibus numquam voluptate necessitatibus totam aspernatur, aut ut labore!.';\n\n  element.appendChild(title);\n  element.appendChild(description);\n\n  return element;\n}\n\n//# sourceURL=webpack:///./src/components/Contact.js?");

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\nfunction Home() {\n  const element = document.createElement('div');\n  const title = document.createElement('h2');\n  title.innerHTML = 'Welcome';\n\n  const description = document.createElement('p');\n  description.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ab sequi quo adipisci quos excepturi quidem praesentium, dicta fuga eveniet molestias, temporibus numquam voluptate necessitatibus totam aspernatur, aut ut labore!.';\n\n  const description2 = document.createElement('p');\n  description2.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ab sequi quo adipisci quos excepturi quidem praesentium, dicta fuga eveniet molestias, temporibus numquam voluptate necessitatibus totam aspernatur, aut ut labore!.';\n\n  const description3 = document.createElement('p');\n  description3.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ab sequi quo adipisci quos excepturi quidem praesentium, dicta fuga eveniet molestias, temporibus numquam voluptate necessitatibus totam aspernatur, aut ut labore!.';\n\n  element.appendChild(title);\n  element.appendChild(description);\n  element.appendChild(description2);\n  element.appendChild(description3);\n\n  return element;\n}\n\n//# sourceURL=webpack:///./src/components/Home.js?");

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Menu; });\n/* harmony import */ var _assets_images_food_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/food-1.jpg */ \"./src/assets/images/food-1.jpg\");\n/* harmony import */ var _assets_images_food_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/food-2.jpg */ \"./src/assets/images/food-2.jpg\");\n/* harmony import */ var _assets_images_food_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/food-3.jpg */ \"./src/assets/images/food-3.jpg\");\n/* harmony import */ var _assets_images_food_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/food-4.jpg */ \"./src/assets/images/food-4.jpg\");\n/* harmony import */ var _assets_images_food_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/food-5.jpg */ \"./src/assets/images/food-5.jpg\");\n/* harmony import */ var _assets_images_food_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/food-6.jpg */ \"./src/assets/images/food-6.jpg\");\n\n\n\n\n\n\n\nfunction Menu() {\n  const element = document.createElement('div');\n  const images = [_assets_images_food_1_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _assets_images_food_2_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _assets_images_food_3_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _assets_images_food_4_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _assets_images_food_5_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _assets_images_food_6_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n\n  const menus = document.createElement('ul');\n  menus.className = 'menus';\n\n  for (let i = 0; i < 6; i += 1) {\n    const menu = document.createElement('li');\n    menu.className = 'menu';\n    const image = document.createElement('img');\n    image.src = images[i];\n    const price = document.createElement('div');\n    price.className = 'price';\n    price.innerHTML = `$${Math.round(Math.random() * 100)}`;\n    const title = document.createElement('div');\n    title.className = 'title';\n    title.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';\n\n    menu.appendChild(image);\n    menu.appendChild(price);\n    menu.appendChild(title);\n    menus.appendChild(menu);\n  }\n\n  element.appendChild(menus);\n\n  return element;\n}\n\n//# sourceURL=webpack:///./src/components/Menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_sass_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sass/style.sass */ \"./src/assets/sass/style.sass\");\n/* harmony import */ var _assets_sass_style_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_style_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Home */ \"./src/components/Home.js\");\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Menu */ \"./src/components/Menu.js\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Contact */ \"./src/components/Contact.js\");\n\n\n\n\n\nclass App {\n  constructor() {\n    this.activeMenu = 'Home';\n    this.title = 'Micronaut\\'s Restaurant';\n    this.app = document.createElement('div');\n    this.app.className = 'app';\n    this.blurred = document.createElement('div');\n    this.blurred.className = 'blurred';\n\n    this.wrapper = document.createElement('div');\n    this.wrapper.className = 'wrapper';\n\n    this.pageContent = document.createElement('div');\n    this.pageContent.className = 'page-content';\n\n    this.renderHeader();\n\n    this.container = document.createElement('div');\n    this.container.className = 'container';\n\n    this.renderMenu();\n\n    this.content = document.createElement('div');\n    this.content.className = 'content';\n\n    this.container.appendChild(this.content);\n\n    this.pageContent.appendChild(this.container);\n    this.wrapper.appendChild(this.pageContent);\n\n    this.app.appendChild(this.blurred);\n    this.app.appendChild(this.wrapper);\n  }\n\n  renderHeader() {\n    this.head = document.createElement('div');\n    this.head.className = 'head';\n    this.headBody = document.createElement('div');\n    this.headBody.className = 'head-body';\n    this.headBodyTitle = document.createElement('h1');\n    this.headBodyTitle.innerHTML = this.title;\n    this.headBody.appendChild(this.headBodyTitle);\n    this.head.appendChild(this.headBody);\n    this.pageContent.appendChild(this.head);\n  }\n\n  renderMenu() {\n    this.navElement1 = document.createElement('li');\n    this.navElement1.className = 'nav-element';\n    this.navElement1.innerHTML = 'Home';\n\n    this.navElement2 = document.createElement('li');\n    this.navElement2.className = 'nav-element';\n    this.navElement2.innerHTML = 'Menu';\n\n    this.navElement3 = document.createElement('li');\n    this.navElement3.className = 'nav-element';\n    this.navElement3.innerHTML = 'Contact';\n\n    this.nav = document.createElement('ul');\n    this.nav.className = 'nav';\n\n    this.nav.appendChild(this.navElement1);\n    this.nav.appendChild(this.navElement2);\n    this.nav.appendChild(this.navElement3);\n\n    this.tabs = document.createElement('div');\n    this.tabs.className = 'tabs';\n    this.tabs.appendChild(this.nav);\n    this.container.appendChild(this.tabs);\n  }\n\n  menu() {\n    this.navElement1.classList.add('active');\n    this.renderContent();\n\n    this.navElement1.addEventListener('click', () => {\n      this.activeMenu = 'Home';\n      this.navElement1.classList.add('active');\n      this.navElement2.classList.remove('active');\n      this.navElement3.classList.remove('active');\n      this.renderContent();\n    });\n\n    this.navElement2.addEventListener('click', () => {\n      this.activeMenu = 'Menu';\n      this.navElement1.classList.remove('active');\n      this.navElement2.classList.add('active');\n      this.navElement3.classList.remove('active');\n      this.renderContent();\n    });\n\n    this.navElement3.addEventListener('click', () => {\n      this.activeMenu = 'Contact';\n      this.navElement1.classList.remove('active');\n      this.navElement2.classList.remove('active');\n      this.navElement3.classList.add('active');\n      this.renderContent();\n    });\n  }\n\n  renderContent() {\n    if (this.activeMenu === 'Home') {\n      this.content.innerHTML = '';\n      this.content.appendChild(Object(_components_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    } else if (this.activeMenu === 'Menu') {\n      this.content.innerHTML = '';\n      this.content.appendChild(Object(_components_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    } else {\n      this.content.innerHTML = '';\n      this.content.appendChild(Object(_components_Contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    }\n  }\n\n  render() {\n    this.menu();\n    return this.app;\n  }\n}\n\nfunction component() {\n  const app = new App();\n  return app.render();\n}\n\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });