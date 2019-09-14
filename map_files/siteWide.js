/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		117: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/javascripts/build/shared/";
/******/
/******/ 	var jsonpArray = window["socrataFrontendWebpackJsonp"] = window["socrataFrontendWebpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([2946,1,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 1529:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(2947);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(47)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 1530:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(2948);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(47)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 1531:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(2949);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(47)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 1532:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(2950);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(47)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 1533:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(2953);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(47)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 2946:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
module.exports = __webpack_require__(3337);


/***/ }),

/***/ 2947:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// Module
exports.push([module.i, "._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 {\n  color: #696a6a; }\n  ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 .modal-container {\n    max-width: 1200px !important;\n    width: 80%;\n    min-height: 400px; }\n  ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 .modal-header {\n    margin-bottom: 10px !important; }\n  ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_sub-title_1Pq2a {\n    font-size: 13px;\n    margin-bottom: 10px; }\n  ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tabs-list_2KX22 {\n    border-bottom: 1px solid #ccc;\n    font-size: 13px; }\n    ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tabs-list_2KX22 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tab-name_3eVM2 {\n      cursor: pointer;\n      display: inline-block;\n      margin-right: 20px;\n      padding: 0 5px 0px 0px; }\n      ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tabs-list_2KX22 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tab-name_3eVM2._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_active_2ZCnj, ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tabs-list_2KX22 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tab-name_3eVM2:hover {\n        display: inline-block;\n        color: #3e3e3e;\n        border-bottom: 3px solid #1b78a8; }\n  ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_actions-pane_Yajd6 {\n    float: right; }\n    ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_actions-pane_Yajd6 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_user-notification-download-icon_1I6T7 {\n      text-decoration: none; }\n  ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tab-content_1U0kY {\n    height: 300px; }\n    ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tab-content_1U0kY ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-container_3XLmt {\n      display: none;\n      height: 300px;\n      position: relative; }\n      ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tab-content_1U0kY ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-container_3XLmt._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_active_2ZCnj {\n        display: block; }\n      ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tab-content_1U0kY ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-container_3XLmt .socrata-visualization-renderer {\n        height: 300px; }\n    ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tab-content_1U0kY ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-details-container_WELd0 {\n      display: none;\n      margin-top: 25px;\n      font-size: 13px; }\n      ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tab-content_1U0kY ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-details-container_WELd0._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_active_2ZCnj {\n        display: block; }\n      ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tab-content_1U0kY ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-details-container_WELd0 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_entry_3NLfP ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_name_2wh6N {\n        text-align: right;\n        padding: 5px 15px 5px 0; }\n      ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tab-content_1U0kY ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-details-container_WELd0 ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_entry_3NLfP ._-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_value_1U_C0 {\n        text-align: left; }\n", ""]);
// Exports
exports.locals = {
	"alert-data-grid-modal": "_-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-grid-modal_34Jb6",
	"sub-title": "_-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_sub-title_1Pq2a",
	"tabs-list": "_-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tabs-list_2KX22",
	"tab-name": "_-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tab-name_3eVM2",
	"active": "_-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_active_2ZCnj",
	"actions-pane": "_-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_actions-pane_Yajd6",
	"user-notification-download-icon": "_-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_user-notification-download-icon_1I6T7",
	"tab-content": "_-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_tab-content_1U0kY",
	"alert-data-container": "_-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-data-container_3XLmt",
	"alert-details-container": "_-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_alert-details-container_WELd0",
	"entry": "_-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_entry_3NLfP",
	"name": "_-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_name_2wh6N",
	"value": "_-_-_-common-notifications-components-UserNotifications-_alert-data-grid-modal-module_value_1U_C0"
};

/***/ }),

/***/ 2948:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// Module
exports.push([module.i, "/* https://css-tricks.com/snippets/sass/tint-shade-functions/ */\n/* Base Palette Colors */\n/* Colors light version */\n/* Colors dark version */\n/* Greys */\n/* Shades of Grey */\n/* Text colors */\n/* Background colors */\n/* Button Colors */\n/* Header */\n/* Settings Panel */\n/* Backgrounds */\n/* Notifications Panel */\n/* Map Layers Pane */\n/**\n * Clearfix\n *\n * For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    contenteditable attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that are clearfixed.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n *\n * Source: http://nicolasgallagher.com/micro-clearfix-hack/\n */\n/**\n * Offscreen. Hide text in UI, but keep in document. Accessibiity +1\n *\n*/\na._-_-_-common-notifications-components-_error-message-module_unstyled-link_vvETu {\n  color: #2279a6;\n  text-decoration: none; }\n  a._-_-_-common-notifications-components-_error-message-module_unstyled-link_vvETu:hover {\n    text-decoration: underline; }\n\n/*\n * All of the headings. Additional \"heaing classes\" are used to style\n * type in contexts where the heading style and semantics don't align.\n */\n._-_-_-common-notifications-components-_error-message-module_h1_1ifDb,\n._-_-_-common-notifications-components-_error-message-module_h2_nRaV8,\n._-_-_-common-notifications-components-_error-message-module_h3_2sbN6,\n._-_-_-common-notifications-components-_error-message-module_h4_1m9Lk,\n._-_-_-common-notifications-components-_error-message-module_h5_2m5b3,\n._-_-_-common-notifications-components-_error-message-module_h6_1_eVD {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  font-size: 100%;\n  letter-spacing: -0.3px;\n  font-weight: 600; }\n\n._-_-_-common-notifications-components-_error-message-module_h1_1ifDb {\n  font-size: ms(5); }\n\n._-_-_-common-notifications-components-_error-message-module_h2_nRaV8 {\n  font-size: ms(4); }\n\n._-_-_-common-notifications-components-_error-message-module_h3_2sbN6 {\n  font-size: ms(3); }\n\n._-_-_-common-notifications-components-_error-message-module_h4_1m9Lk {\n  font-size: ms(2); }\n\n._-_-_-common-notifications-components-_error-message-module_h5_2m5b3 {\n  font-size: ms(1); }\n\n._-_-_-common-notifications-components-_error-message-module_h6_1_eVD {\n  font-size: ms(0); }\n\n._-_-_-common-notifications-components-_error-message-module_intro_2-fjF {\n  font-size: ms(1);\n  font-weight: 200; }\n\n._-_-_-common-notifications-components-_error-message-module_small_3V9B4 {\n  font-size: ms(-1); }\n\n._-_-_-common-notifications-components-_error-message-module_x-small_1Nzjx {\n  font-size: ms(-3); }\n\n._-_-_-common-notifications-components-_error-message-module_quiet_X3CX3 {\n  color: #767676; }\n\n/* Buttons */\n@-webkit-keyframes _-_-_-common-notifications-components-_error-message-module_spin__RLSM {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes _-_-_-common-notifications-components-_error-message-module_spin__RLSM {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n._-_-_-common-notifications-components-_error-message-module_spinner-default_2P9qU {\n  -webkit-animation: _-_-_-common-notifications-components-_error-message-module_spin__RLSM 0.9s linear infinite;\n  animation: _-_-_-common-notifications-components-_error-message-module_spin__RLSM 0.9s linear infinite;\n  border: 3px solid #288dc1;\n  border-right-color: #eaf4f9;\n  border-radius: 50%;\n  display: inline-block;\n  width: ms(1);\n  height: ms(1); }\n  ._-_-_-common-notifications-components-_error-message-module_spinner-default_2P9qU._-_-_-common-notifications-components-_error-message-module_spinner-dark_1sKTf {\n    border-color: #eaf4f9;\n    border-right-color: #288dc1; }\n  ._-_-_-common-notifications-components-_error-message-module_spinner-default_2P9qU._-_-_-common-notifications-components-_error-message-module_spinner-large_olGw7 {\n    border-width: 8px;\n    width: 64px;\n    height: 64px; }\n\n._-_-_-common-notifications-components-_error-message-module_spinner-btn-primary_8UCf6 {\n  border-color: #fff;\n  border-right-color: #20719a; }\n\n._-_-_-common-notifications-components-_error-message-module_alert_1gInC, ._-_-_-common-notifications-components-_error-message-module_error-message_1bDEl {\n  background-color: #f6f6f6;\n  border: 1px solid #c8c8c8;\n  font-size: ms(0);\n  padding: ms(-2);\n  border-radius: 1px;\n  color: #5e5e5e; }\n  ._-_-_-common-notifications-components-_error-message-module_alert_1gInC._-_-_-common-notifications-components-_error-message-module_small_3V9B4, ._-_-_-common-notifications-components-_error-message-module_small_3V9B4._-_-_-common-notifications-components-_error-message-module_error-message_1bDEl {\n    text-align: center;\n    font-size: 12px; }\n  ._-_-_-common-notifications-components-_error-message-module_alert_1gInC._-_-_-common-notifications-components-_error-message-module_info_Y0dNP, ._-_-_-common-notifications-components-_error-message-module_info_Y0dNP._-_-_-common-notifications-components-_error-message-module_error-message_1bDEl, ._-_-_-common-notifications-components-_error-message-module_alert_1gInC._-_-_-common-notifications-components-_error-message-module_notice_2HsST, ._-_-_-common-notifications-components-_error-message-module_notice_2HsST._-_-_-common-notifications-components-_error-message-module_error-message_1bDEl {\n    background-color: #eaf4f9;\n    border-color: #288dc1;\n    color: #1c6387; }\n  ._-_-_-common-notifications-components-_error-message-module_alert_1gInC._-_-_-common-notifications-components-_error-message-module_success_2GF3i, ._-_-_-common-notifications-components-_error-message-module_success_2GF3i._-_-_-common-notifications-components-_error-message-module_error-message_1bDEl {\n    background-color: #eaf7ef;\n    border-color: #2baf5f;\n    color: #177b41; }\n  ._-_-_-common-notifications-components-_error-message-module_alert_1gInC._-_-_-common-notifications-components-_error-message-module_warning_12J2c, ._-_-_-common-notifications-components-_error-message-module_warning_12J2c._-_-_-common-notifications-components-_error-message-module_error-message_1bDEl {\n    background-color: #fdf9ed;\n    border-color: #e6af00;\n    color: #8a6900; }\n  ._-_-_-common-notifications-components-_error-message-module_alert_1gInC._-_-_-common-notifications-components-_error-message-module_error_2Uumc, ._-_-_-common-notifications-components-_error-message-module_error-message_1bDEl {\n    background-color: #faf0f0;\n    border-color: #ce6565;\n    color: #914646; }\n  ._-_-_-common-notifications-components-_error-message-module_alert_1gInC._-_-_-common-notifications-components-_error-message-module_alert-full-width-top_2Grnk, ._-_-_-common-notifications-components-_error-message-module_alert-full-width-top_2Grnk._-_-_-common-notifications-components-_error-message-module_error-message_1bDEl {\n    border-top: 0;\n    border-left: 0;\n    border-right: 0; }\n  ._-_-_-common-notifications-components-_error-message-module_alert_1gInC._-_-_-common-notifications-components-_error-message-module_alert-full-width-bottom_3cWSq, ._-_-_-common-notifications-components-_error-message-module_alert-full-width-bottom_3cWSq._-_-_-common-notifications-components-_error-message-module_error-message_1bDEl {\n    border-bottom: 0;\n    border-left: 0;\n    border-right: 0; }\n\n@keyframes _-_-_-common-notifications-components-_error-message-module_spin__RLSM {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n._-_-_-common-notifications-components-_error-message-module_btn_145Dk {\n  display: inline-block;\n  padding: ms(-3) ms(0);\n  border-radius: 1px;\n  font-size: ms(0);\n  border: solid 1px transparent;\n  -webkit-transition: color 0.2s, background-color 0.2s;\n  transition: color 0.2s, background-color 0.2s;\n  cursor: pointer;\n  text-decoration: none;\n  letter-spacing: 0; }\n  ._-_-_-common-notifications-components-_error-message-module_btn_145Dk ._-_-_-common-notifications-components-_error-message-module_spinner-container_33Bza {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    bottom: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0; }\n  ._-_-_-common-notifications-components-_error-message-module_btn_145Dk ._-_-_-common-notifications-components-_error-message-module_spinner-default_2P9qU {\n    width: 1.5rem;\n    height: 1.5rem;\n    border-width: 3px; }\n  ._-_-_-common-notifications-components-_error-message-module_btn_145Dk._-_-_-common-notifications-components-_error-message-module_btn-lg_26xjT {\n    font-size: ms(1);\n    padding: ms(-2) ms(1); }\n    ._-_-_-common-notifications-components-_error-message-module_btn_145Dk._-_-_-common-notifications-components-_error-message-module_btn-lg_26xjT ._-_-_-common-notifications-components-_error-message-module_spinner-default_2P9qU {\n      width: 1rem;\n      height: 1rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-_error-message-module_btn_145Dk._-_-_-common-notifications-components-_error-message-module_btn-sm_1A-cg {\n    font-size: ms(-1);\n    padding: ms(-6) ms(-1); }\n    ._-_-_-common-notifications-components-_error-message-module_btn_145Dk._-_-_-common-notifications-components-_error-message-module_btn-sm_1A-cg ._-_-_-common-notifications-components-_error-message-module_spinner-default_2P9qU {\n      width: 0.85rem;\n      height: 0.85rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-_error-message-module_btn_145Dk._-_-_-common-notifications-components-_error-message-module_btn-xs_uBN2K {\n    font-size: ms(-2);\n    padding: ms(-8) ms(-1); }\n    ._-_-_-common-notifications-components-_error-message-module_btn_145Dk._-_-_-common-notifications-components-_error-message-module_btn-xs_uBN2K ._-_-_-common-notifications-components-_error-message-module_spinner-default_2P9qU {\n      width: 0.75rem;\n      height: 0.75rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-_error-message-module_btn_145Dk [class*=\"socrata-icon-\"] {\n    position: relative; }\n\n._-_-_-common-notifications-components-_error-message-module_btn-link_1wCJN {\n  color: #2279a6;\n  text-decoration: none;\n  padding: 0;\n  display: inline;\n  border: 0;\n  background: transparent; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-link_1wCJN:hover {\n    text-decoration: underline; }\n\n/* Makes btn full width. */\n._-_-_-common-notifications-components-_error-message-module_btn-block_rLrUS {\n  width: 100%; }\n\n/* Adds a spinner in place of button text. */\n._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx {\n  cursor: progress;\n  border: solid 1px transparent;\n  position: relative; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx:disabled, ._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx:disabled._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx span {\n    -webkit-animation: _-_-_-common-notifications-components-_error-message-module_spin__RLSM 0.9s linear infinite;\n    animation: _-_-_-common-notifications-components-_error-message-module_spin__RLSM 0.9s linear infinite;\n    border: 3px solid;\n    border-radius: 60%;\n    display: inline-block;\n    width: 2rem;\n    height: 2rem; }\n\n._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--, ._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f {\n  color: #767676;\n  background-color: #fff;\n  border-color: #c8c8c8; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--:hover, ._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f:hover, ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--:focus, ._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f:focus {\n    color: #6a6a6a;\n    background-color: #f1f1f1; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--:hover._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3, ._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f:hover._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3, ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--:focus._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3, ._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f:focus._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3 {\n      border-color: transparent;\n      background-color: white;\n      color: #767676;\n      -webkit-transition: border-color 0.35s;\n      transition: border-color 0.35s; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--:hover._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f:hover._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--:focus._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f:focus._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs {\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--:active, ._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f:active, ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--._-_-_-common-notifications-components-_error-message-module_active_oSQjX, ._-_-_-common-notifications-components-_error-message-module_active_oSQjX._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f {\n    border-color: #cccccc;\n    background-color: #f1f1f1;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--:active._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3, ._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f:active._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3, ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--._-_-_-common-notifications-components-_error-message-module_active_oSQjX._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3, ._-_-_-common-notifications-components-_error-message-module_active_oSQjX._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f {\n      border-color: transparent;\n      background-color: white;\n      color: #767676;\n      -webkit-transition: border-color 0.35s;\n      transition: border-color 0.35s; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--:disabled, ._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f:disabled, ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD, ._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--:disabled._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f:disabled._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--._-_-_-common-notifications-components-_error-message-module_btn-disabled-light_h9Ku3, ._-_-_-common-notifications-components-_error-message-module_btn-disabled-light_h9Ku3._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f {\n    background-color: #f6f6f6;\n    color: #c8c8c8;\n    border-color: #e4e4e4; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--._-_-_-common-notifications-components-_error-message-module_active_oSQjX, ._-_-_-common-notifications-components-_error-message-module_active_oSQjX._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f {\n    -webkit-box-shadow: inset 0 0 10px -2px #888;\n            box-shadow: inset 0 0 10px -2px #888; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3, ._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f {\n    color: #fff;\n    background-color: transparent;\n    border-color: #fff; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f {\n    color: #fff;\n    background-color: #767676;\n    border-color: #767676; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-default_2xs--._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx span, ._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f span {\n    border-color: #fff;\n    border-right-color: #adadad; }\n\n._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f {\n  color: #5e5e5e;\n  background-color: #f1f1f1; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f:hover, ._-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f:focus {\n    background-color: #e4e4e4;\n    color: #5e5e5e; }\n\n._-_-_-common-notifications-components-_error-message-module_btn-primary_3NC6n {\n  color: #fff;\n  background-color: #2279a6;\n  border-color: #288dc1;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-_error-message-module_btn-primary_3NC6n:hover, ._-_-_-common-notifications-components-_error-message-module_btn-primary_3NC6n:focus {\n    background-color: #1d678d; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-primary_3NC6n:hover._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3, ._-_-_-common-notifications-components-_error-message-module_btn-primary_3NC6n:focus._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3 {\n      color: #fff;\n      background-color: #2279a6; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-primary_3NC6n:active, ._-_-_-common-notifications-components-_error-message-module_btn-primary_3NC6n._-_-_-common-notifications-components-_error-message-module_active_oSQjX {\n    border-color: #247fae;\n    background-color: #1d678d;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-primary_3NC6n:disabled, ._-_-_-common-notifications-components-_error-message-module_btn-primary_3NC6n._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-primary_3NC6n:disabled._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-primary_3NC6n._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-primary_3NC6n._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3 {\n    color: #2279a6;\n    background-color: #fff; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-primary_3NC6n._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD {\n      color: #474747;\n      border-color: #919191;\n      background-color: #c8c8c8;\n      cursor: not-allowed; }\n      ._-_-_-common-notifications-components-_error-message-module_btn-primary_3NC6n._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs {\n        color: #919191;\n        border-color: #767676;\n        background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-primary_3NC6n._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx span {\n    border-right-color: #53a4cd; }\n\n._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q {\n  color: #fff;\n  background-color: #00717c;\n  border-color: #00a1af;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q:hover, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q:focus {\n    background-color: #005a63;\n    color: #fff; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q:hover._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q:focus._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3 {\n      color: #fff;\n      background-color: #00717c; }\n      ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q:hover._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3:disabled, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q:hover._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q:focus._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3:disabled, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q:focus._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD {\n        color: #474747;\n        border-color: #919191;\n        background-color: #c8c8c8;\n        cursor: not-allowed; }\n        ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q:hover._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3:disabled._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q:hover._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q:focus._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3:disabled._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q:focus._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs {\n          color: #919191;\n          border-color: #767676;\n          background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q:active, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q._-_-_-common-notifications-components-_error-message-module_active_oSQjX {\n    border-color: #00919e;\n    background-color: #005a63;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3 {\n    color: #00717c;\n    background-color: #fff; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q:disabled, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q:disabled._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx span {\n    border-right-color: #33b4bf; }\n\n._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB {\n  color: #fff;\n  background-color: #00be9b;\n  border-color: #00be9b;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB:hover, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB:focus {\n    background-color: #00987c; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB:hover._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB:focus._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3 {\n      color: #fff;\n      background-color: #00be9b; }\n      ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB:hover._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3:disabled, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB:hover._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB:focus._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3:disabled, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB:focus._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD {\n        color: #474747;\n        border-color: #919191;\n        background-color: #c8c8c8;\n        cursor: not-allowed; }\n        ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB:hover._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3:disabled._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB:hover._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB:focus._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3:disabled._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB:focus._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs {\n          color: #919191;\n          border-color: #767676;\n          background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB:active, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB._-_-_-common-notifications-components-_error-message-module_active_oSQjX {\n    border-color: #00ab8c;\n    background-color: #00987c;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB:disabled, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB:disabled._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3 {\n    color: #00be9b;\n    background-color: #fff; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx span {\n    border-right-color: #33cbaf; }\n\n._-_-_-common-notifications-components-_error-message-module_btn-warning_vL2kQ {\n  color: #fff;\n  background-color: #e6af00;\n  border-color: #e6af00; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-warning_vL2kQ:hover, ._-_-_-common-notifications-components-_error-message-module_btn-warning_vL2kQ:focus {\n    background-color: #b88c00; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-warning_vL2kQ:hover._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3, ._-_-_-common-notifications-components-_error-message-module_btn-warning_vL2kQ:focus._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3 {\n      color: #fff;\n      background-color: #e6af00; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-warning_vL2kQ:active, ._-_-_-common-notifications-components-_error-message-module_btn-warning_vL2kQ._-_-_-common-notifications-components-_error-message-module_active_oSQjX {\n    border-color: #cf9e00;\n    background-color: #b88c00;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-warning_vL2kQ:disabled, ._-_-_-common-notifications-components-_error-message-module_btn-warning_vL2kQ._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-warning_vL2kQ:disabled._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-warning_vL2kQ._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-warning_vL2kQ:disabled._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3, ._-_-_-common-notifications-components-_error-message-module_btn-warning_vL2kQ._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3 {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-warning_vL2kQ._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3 {\n    color: #e6af00;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-_error-message-module_btn-success_2Fney {\n  color: #fff;\n  background-color: #2baf5f;\n  border-color: #2baf5f; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-success_2Fney:hover, ._-_-_-common-notifications-components-_error-message-module_btn-success_2Fney:focus {\n    cursor: default; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-success_2Fney:hover._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3, ._-_-_-common-notifications-components-_error-message-module_btn-success_2Fney:focus._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3 {\n      color: #fff;\n      background-color: #2baf5f; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-success_2Fney:active, ._-_-_-common-notifications-components-_error-message-module_btn-success_2Fney._-_-_-common-notifications-components-_error-message-module_active_oSQjX {\n    border-color: #279d56;\n    background-color: #228c4c;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-success_2Fney:disabled, ._-_-_-common-notifications-components-_error-message-module_btn-success_2Fney._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-success_2Fney:disabled._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-success_2Fney._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-success_2Fney:disabled._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3, ._-_-_-common-notifications-components-_error-message-module_btn-success_2Fney._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3 {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-success_2Fney._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3 {\n    color: #259652;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-_error-message-module_btn-error_9DARs {\n  color: #fff;\n  background-color: #ce6565;\n  border-color: #ce6565; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-error_9DARs:hover, ._-_-_-common-notifications-components-_error-message-module_btn-error_9DARs:focus {\n    background-color: #a55151; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-error_9DARs:hover._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3, ._-_-_-common-notifications-components-_error-message-module_btn-error_9DARs:focus._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3 {\n      color: #fff;\n      background-color: #ce6565; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-error_9DARs:active, ._-_-_-common-notifications-components-_error-message-module_btn-error_9DARs._-_-_-common-notifications-components-_error-message-module_active_oSQjX {\n    border-color: #b95b5b;\n    background-color: #a55151;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-error_9DARs:disabled, ._-_-_-common-notifications-components-_error-message-module_btn-error_9DARs._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-error_9DARs:disabled._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs, ._-_-_-common-notifications-components-_error-message-module_btn-error_9DARs._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-error_9DARs:disabled._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3, ._-_-_-common-notifications-components-_error-message-module_btn-error_9DARs._-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3 {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-error_9DARs._-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3 {\n    color: #ce6565;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-_error-message-module_btn-transparent_IlxFN,\n._-_-_-common-notifications-components-_error-message-module_btn-transparent_IlxFN:hover,\n._-_-_-common-notifications-components-_error-message-module_btn-transparent_IlxFN:active,\n._-_-_-common-notifications-components-_error-message-module_btn-transparent_IlxFN:focus,\n._-_-_-common-notifications-components-_error-message-module_btn-transparent_IlxFN:disabled {\n  border-color: transparent;\n  background-color: transparent; }\n  ._-_-_-common-notifications-components-_error-message-module_btn-transparent_IlxFN._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx,\n  ._-_-_-common-notifications-components-_error-message-module_btn-transparent_IlxFN:hover._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx,\n  ._-_-_-common-notifications-components-_error-message-module_btn-transparent_IlxFN:active._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx,\n  ._-_-_-common-notifications-components-_error-message-module_btn-transparent_IlxFN:focus._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx,\n  ._-_-_-common-notifications-components-_error-message-module_btn-transparent_IlxFN:disabled._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx {\n    cursor: progress; }\n    ._-_-_-common-notifications-components-_error-message-module_btn-transparent_IlxFN._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx span,\n    ._-_-_-common-notifications-components-_error-message-module_btn-transparent_IlxFN:hover._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx span,\n    ._-_-_-common-notifications-components-_error-message-module_btn-transparent_IlxFN:active._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx span,\n    ._-_-_-common-notifications-components-_error-message-module_btn-transparent_IlxFN:focus._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx span,\n    ._-_-_-common-notifications-components-_error-message-module_btn-transparent_IlxFN:disabled._-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx span {\n      border-color: #5e5e5e;\n      border-right-color: #adadad; }\n\n._-_-_-common-notifications-components-_error-message-module_error-message_1bDEl {\n  border-left: 0;\n  border-right: 0;\n  border-top: 0;\n  font-size: 12px;\n  text-align: center; }\n", ""]);
// Exports
exports.locals = {
	"unstyled-link": "_-_-_-common-notifications-components-_error-message-module_unstyled-link_vvETu",
	"h1": "_-_-_-common-notifications-components-_error-message-module_h1_1ifDb",
	"h2": "_-_-_-common-notifications-components-_error-message-module_h2_nRaV8",
	"h3": "_-_-_-common-notifications-components-_error-message-module_h3_2sbN6",
	"h4": "_-_-_-common-notifications-components-_error-message-module_h4_1m9Lk",
	"h5": "_-_-_-common-notifications-components-_error-message-module_h5_2m5b3",
	"h6": "_-_-_-common-notifications-components-_error-message-module_h6_1_eVD",
	"intro": "_-_-_-common-notifications-components-_error-message-module_intro_2-fjF",
	"small": "_-_-_-common-notifications-components-_error-message-module_small_3V9B4",
	"x-small": "_-_-_-common-notifications-components-_error-message-module_x-small_1Nzjx",
	"quiet": "_-_-_-common-notifications-components-_error-message-module_quiet_X3CX3",
	"spinner-default": "_-_-_-common-notifications-components-_error-message-module_spinner-default_2P9qU",
	"spin": "_-_-_-common-notifications-components-_error-message-module_spin__RLSM",
	"spinner-dark": "_-_-_-common-notifications-components-_error-message-module_spinner-dark_1sKTf",
	"spinner-large": "_-_-_-common-notifications-components-_error-message-module_spinner-large_olGw7",
	"spinner-btn-primary": "_-_-_-common-notifications-components-_error-message-module_spinner-btn-primary_8UCf6",
	"alert": "_-_-_-common-notifications-components-_error-message-module_alert_1gInC",
	"error-message": "_-_-_-common-notifications-components-_error-message-module_error-message_1bDEl",
	"info": "_-_-_-common-notifications-components-_error-message-module_info_Y0dNP",
	"notice": "_-_-_-common-notifications-components-_error-message-module_notice_2HsST",
	"success": "_-_-_-common-notifications-components-_error-message-module_success_2GF3i",
	"warning": "_-_-_-common-notifications-components-_error-message-module_warning_12J2c",
	"error": "_-_-_-common-notifications-components-_error-message-module_error_2Uumc",
	"alert-full-width-top": "_-_-_-common-notifications-components-_error-message-module_alert-full-width-top_2Grnk",
	"alert-full-width-bottom": "_-_-_-common-notifications-components-_error-message-module_alert-full-width-bottom_3cWSq",
	"btn": "_-_-_-common-notifications-components-_error-message-module_btn_145Dk",
	"spinner-container": "_-_-_-common-notifications-components-_error-message-module_spinner-container_33Bza",
	"btn-lg": "_-_-_-common-notifications-components-_error-message-module_btn-lg_26xjT",
	"btn-sm": "_-_-_-common-notifications-components-_error-message-module_btn-sm_1A-cg",
	"btn-xs": "_-_-_-common-notifications-components-_error-message-module_btn-xs_uBN2K",
	"btn-link": "_-_-_-common-notifications-components-_error-message-module_btn-link_1wCJN",
	"btn-block": "_-_-_-common-notifications-components-_error-message-module_btn-block_rLrUS",
	"btn-busy": "_-_-_-common-notifications-components-_error-message-module_btn-busy_3MBsx",
	"btn-disabled": "_-_-_-common-notifications-components-_error-message-module_btn-disabled_1Q0ZD",
	"btn-dark": "_-_-_-common-notifications-components-_error-message-module_btn-dark_20yQs",
	"btn-default": "_-_-_-common-notifications-components-_error-message-module_btn-default_2xs--",
	"btn-simple": "_-_-_-common-notifications-components-_error-message-module_btn-simple_1_A_f",
	"btn-inverse": "_-_-_-common-notifications-components-_error-message-module_btn-inverse_1Hhq3",
	"active": "_-_-_-common-notifications-components-_error-message-module_active_oSQjX",
	"btn-disabled-light": "_-_-_-common-notifications-components-_error-message-module_btn-disabled-light_h9Ku3",
	"btn-primary": "_-_-_-common-notifications-components-_error-message-module_btn-primary_3NC6n",
	"btn-alternate-2": "_-_-_-common-notifications-components-_error-message-module_btn-alternate-2_2Lq9q",
	"btn-alternate-3": "_-_-_-common-notifications-components-_error-message-module_btn-alternate-3_168sB",
	"btn-warning": "_-_-_-common-notifications-components-_error-message-module_btn-warning_vL2kQ",
	"btn-success": "_-_-_-common-notifications-components-_error-message-module_btn-success_2Fney",
	"btn-error": "_-_-_-common-notifications-components-_error-message-module_btn-error_9DARs",
	"btn-transparent": "_-_-_-common-notifications-components-_error-message-module_btn-transparent_IlxFN"
};

/***/ }),

/***/ 2949:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// Module
exports.push([module.i, "/* https://css-tricks.com/snippets/sass/tint-shade-functions/ */\n/* Base Palette Colors */\n/* Colors light version */\n/* Colors dark version */\n/* Greys */\n/* Shades of Grey */\n/* Text colors */\n/* Background colors */\n/* Button Colors */\n/* Header */\n/* Settings Panel */\n/* Backgrounds */\n/* Notifications Panel */\n/* Map Layers Pane */\n/**\n * Clearfix\n *\n * For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    contenteditable attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that are clearfixed.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n *\n * Source: http://nicolasgallagher.com/micro-clearfix-hack/\n */\n/**\n * Offscreen. Hide text in UI, but keep in document. Accessibiity +1\n *\n*/\na._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_unstyled-link_1Ssxe {\n  color: #2279a6;\n  text-decoration: none; }\n  a._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_unstyled-link_1Ssxe:hover {\n    text-decoration: underline; }\n\n/*\n * All of the headings. Additional \"heaing classes\" are used to style\n * type in contexts where the heading style and semantics don't align.\n */\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h1_12Fxo,\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h2_3rvV3,\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h3_2SUk4,\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h4_3ZNpY,\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h5_1HV0m,\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h6_1mpKp {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  font-size: 100%;\n  letter-spacing: -0.3px;\n  font-weight: 600; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h1_12Fxo {\n  font-size: ms(5); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h2_3rvV3 {\n  font-size: ms(4); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h3_2SUk4 {\n  font-size: ms(3); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h4_3ZNpY {\n  font-size: ms(2); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h5_1HV0m {\n  font-size: ms(1); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h6_1mpKp {\n  font-size: ms(0); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_intro_T8hx2 {\n  font-size: ms(1);\n  font-weight: 200; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_small_1JOEM {\n  font-size: ms(-1); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_x-small_3xO54 {\n  font-size: ms(-3); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_quiet_1xitB {\n  color: #767676; }\n\n/* Buttons */\n@-webkit-keyframes _-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spin_Do6cV {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes _-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spin_Do6cV {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-default_Nl33V {\n  -webkit-animation: _-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spin_Do6cV 0.9s linear infinite;\n  animation: _-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spin_Do6cV 0.9s linear infinite;\n  border: 3px solid #288dc1;\n  border-right-color: #eaf4f9;\n  border-radius: 50%;\n  display: inline-block;\n  width: ms(1);\n  height: ms(1); }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-default_Nl33V._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-dark_35jlf {\n    border-color: #eaf4f9;\n    border-right-color: #288dc1; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-default_Nl33V._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-large_1U3Ac {\n    border-width: 8px;\n    width: 64px;\n    height: 64px; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-btn-primary_3lwXv {\n  border-color: #fff;\n  border-right-color: #20719a; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert_1Wd4Z {\n  background-color: #f6f6f6;\n  border: 1px solid #c8c8c8;\n  font-size: ms(0);\n  padding: ms(-2);\n  border-radius: 1px;\n  color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert_1Wd4Z._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_small_1JOEM {\n    text-align: center;\n    font-size: 12px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert_1Wd4Z._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_info_1en1T, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert_1Wd4Z._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_notice_2RBQp {\n    background-color: #eaf4f9;\n    border-color: #288dc1;\n    color: #1c6387; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert_1Wd4Z._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_success_2DOQN {\n    background-color: #eaf7ef;\n    border-color: #2baf5f;\n    color: #177b41; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert_1Wd4Z._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_warning_376OX {\n    background-color: #fdf9ed;\n    border-color: #e6af00;\n    color: #8a6900; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert_1Wd4Z._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_error_1_eEA {\n    background-color: #faf0f0;\n    border-color: #ce6565;\n    color: #914646; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert_1Wd4Z._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-full-width-top_3G-Dn {\n    border-top: 0;\n    border-left: 0;\n    border-right: 0; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert_1Wd4Z._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-full-width-bottom_1Y3eP {\n    border-bottom: 0;\n    border-left: 0;\n    border-right: 0; }\n\n@keyframes _-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spin_Do6cV {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn_10lzv, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu {\n  display: inline-block;\n  padding: ms(-3) ms(0);\n  border-radius: 1px;\n  font-size: ms(0);\n  border: solid 1px transparent;\n  -webkit-transition: color 0.2s, background-color 0.2s;\n  transition: color 0.2s, background-color 0.2s;\n  cursor: pointer;\n  text-decoration: none;\n  letter-spacing: 0; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn_10lzv ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-container_2NU-I, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1 ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-container_2NU-I, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-container_2NU-I {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    bottom: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn_10lzv ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-default_Nl33V, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1 ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-default_Nl33V, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-default_Nl33V {\n    width: 1.5rem;\n    height: 1.5rem;\n    border-width: 3px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn_10lzv._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-lg_1JbAN, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-lg_1JbAN._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-lg_1JbAN._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu {\n    font-size: ms(1);\n    padding: ms(-2) ms(1); }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn_10lzv._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-lg_1JbAN ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-default_Nl33V, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-lg_1JbAN._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1 ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-default_Nl33V, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-lg_1JbAN._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-default_Nl33V {\n      width: 1rem;\n      height: 1rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn_10lzv._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-sm_1ryt6, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-sm_1ryt6._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-sm_1ryt6._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu {\n    font-size: ms(-1);\n    padding: ms(-6) ms(-1); }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn_10lzv._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-sm_1ryt6 ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-default_Nl33V, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-sm_1ryt6._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1 ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-default_Nl33V, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-sm_1ryt6._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-default_Nl33V {\n      width: 0.85rem;\n      height: 0.85rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn_10lzv._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-xs_2cpaf, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-xs_2cpaf._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-xs_2cpaf._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu {\n    font-size: ms(-2);\n    padding: ms(-8) ms(-1); }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn_10lzv._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-xs_2cpaf ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-default_Nl33V, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-xs_2cpaf._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1 ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-default_Nl33V, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-xs_2cpaf._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-default_Nl33V {\n      width: 0.75rem;\n      height: 0.75rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn_10lzv [class*=\"socrata-icon-\"], ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1 [class*=\"socrata-icon-\"], ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu [class*=\"socrata-icon-\"] {\n    position: relative; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-link_1hsaj {\n  color: #2279a6;\n  text-decoration: none;\n  padding: 0;\n  display: inline;\n  border: 0;\n  background: transparent; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-link_1hsaj:hover {\n    text-decoration: underline; }\n\n/* Makes btn full width. */\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-block_1JHCz {\n  width: 100%; }\n\n/* Adds a spinner in place of button text. */\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP {\n  cursor: progress;\n  border: solid 1px transparent;\n  position: relative; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP span {\n    -webkit-animation: _-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spin_Do6cV 0.9s linear infinite;\n    animation: _-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spin_Do6cV 0.9s linear infinite;\n    border: 3px solid;\n    border-radius: 60%;\n    display: inline-block;\n    width: 2rem;\n    height: 2rem; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1 {\n  color: #767676;\n  background-color: #fff;\n  border-color: #c8c8c8; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI:hover, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3:hover, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1:hover, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI:focus, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3:focus, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1:focus {\n    color: #6a6a6a;\n    background-color: #f1f1f1; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj {\n      border-color: transparent;\n      background-color: white;\n      color: #767676;\n      -webkit-transition: border-color 0.35s;\n      transition: border-color 0.35s; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS {\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI:active, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3:active, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1:active, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1 {\n    border-color: #cccccc;\n    background-color: #f1f1f1;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI:active._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3:active._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1:active._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1 {\n      border-color: transparent;\n      background-color: white;\n      color: #767676;\n      -webkit-transition: border-color 0.35s;\n      transition: border-color 0.35s; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1 {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1 {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled-light_fPMis, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled-light_fPMis._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled-light_fPMis._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1 {\n    background-color: #f6f6f6;\n    color: #c8c8c8;\n    border-color: #e4e4e4; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1 {\n    -webkit-box-shadow: inset 0 0 10px -2px #888;\n            box-shadow: inset 0 0 10px -2px #888; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1 {\n    color: #fff;\n    background-color: transparent;\n    border-color: #fff; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1 {\n    color: #fff;\n    background-color: #767676;\n    border-color: #767676; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP span, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3 span, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1 span {\n    border-color: #fff;\n    border-right-color: #adadad; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3 {\n  color: #5e5e5e;\n  background-color: #f1f1f1; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3:hover, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3:focus {\n    background-color: #e4e4e4;\n    color: #5e5e5e; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-primary_2B6JQ, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu {\n  color: #fff;\n  background-color: #2279a6;\n  border-color: #288dc1;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-primary_2B6JQ:hover, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu:hover, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-primary_2B6JQ:focus, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu:focus {\n    background-color: #1d678d; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-primary_2B6JQ:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-primary_2B6JQ:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj {\n      color: #fff;\n      background-color: #2279a6; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-primary_2B6JQ:active, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu:active, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-primary_2B6JQ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu {\n    border-color: #247fae;\n    background-color: #1d678d;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-primary_2B6JQ:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-primary_2B6JQ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-primary_2B6JQ:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-primary_2B6JQ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-primary_2B6JQ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu {\n    color: #2279a6;\n    background-color: #fff; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-primary_2B6JQ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu {\n      color: #474747;\n      border-color: #919191;\n      background-color: #c8c8c8;\n      cursor: not-allowed; }\n      ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-primary_2B6JQ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu {\n        color: #919191;\n        border-color: #767676;\n        background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-primary_2B6JQ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP span, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu span {\n    border-right-color: #53a4cd; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442 {\n  color: #fff;\n  background-color: #00717c;\n  border-color: #00a1af;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442:hover, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442:focus {\n    background-color: #005a63;\n    color: #fff; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj {\n      color: #fff;\n      background-color: #00717c; }\n      ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR {\n        color: #474747;\n        border-color: #919191;\n        background-color: #c8c8c8;\n        cursor: not-allowed; }\n        ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS {\n          color: #919191;\n          border-color: #767676;\n          background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442:active, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ {\n    border-color: #00919e;\n    background-color: #005a63;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj {\n    color: #00717c;\n    background-color: #fff; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP span {\n    border-right-color: #33b4bf; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO {\n  color: #fff;\n  background-color: #00be9b;\n  border-color: #00be9b;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO:hover, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO:focus {\n    background-color: #00987c; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj {\n      color: #fff;\n      background-color: #00be9b; }\n      ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR {\n        color: #474747;\n        border-color: #919191;\n        background-color: #c8c8c8;\n        cursor: not-allowed; }\n        ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS {\n          color: #919191;\n          border-color: #767676;\n          background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO:active, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ {\n    border-color: #00ab8c;\n    background-color: #00987c;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj {\n    color: #00be9b;\n    background-color: #fff; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP span {\n    border-right-color: #33cbaf; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-warning_2GYsN {\n  color: #fff;\n  background-color: #e6af00;\n  border-color: #e6af00; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-warning_2GYsN:hover, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-warning_2GYsN:focus {\n    background-color: #b88c00; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-warning_2GYsN:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-warning_2GYsN:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj {\n      color: #fff;\n      background-color: #e6af00; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-warning_2GYsN:active, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-warning_2GYsN._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ {\n    border-color: #cf9e00;\n    background-color: #b88c00;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-warning_2GYsN:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-warning_2GYsN._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-warning_2GYsN:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-warning_2GYsN._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-warning_2GYsN:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-warning_2GYsN._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-warning_2GYsN._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj {\n    color: #e6af00;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-success_1iLYA {\n  color: #fff;\n  background-color: #2baf5f;\n  border-color: #2baf5f; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-success_1iLYA:hover, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-success_1iLYA:focus {\n    cursor: default; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-success_1iLYA:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-success_1iLYA:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj {\n      color: #fff;\n      background-color: #2baf5f; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-success_1iLYA:active, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-success_1iLYA._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ {\n    border-color: #279d56;\n    background-color: #228c4c;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-success_1iLYA:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-success_1iLYA._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-success_1iLYA:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-success_1iLYA._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-success_1iLYA:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-success_1iLYA._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-success_1iLYA._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj {\n    color: #259652;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-error_2GOAi {\n  color: #fff;\n  background-color: #ce6565;\n  border-color: #ce6565; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-error_2GOAi:hover, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-error_2GOAi:focus {\n    background-color: #a55151; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-error_2GOAi:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-error_2GOAi:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj {\n      color: #fff;\n      background-color: #ce6565; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-error_2GOAi:active, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-error_2GOAi._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ {\n    border-color: #b95b5b;\n    background-color: #a55151;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-error_2GOAi:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-error_2GOAi._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-error_2GOAi:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-error_2GOAi._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-error_2GOAi:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj, ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-error_2GOAi._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-error_2GOAi._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj {\n    color: #ce6565;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-transparent_1KFOx,\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-transparent_1KFOx:hover,\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-transparent_1KFOx:active,\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-transparent_1KFOx:focus,\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-transparent_1KFOx:disabled {\n  border-color: transparent;\n  background-color: transparent; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-transparent_1KFOx._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP,\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-transparent_1KFOx:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP,\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-transparent_1KFOx:active._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP,\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-transparent_1KFOx:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP,\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-transparent_1KFOx:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP {\n    cursor: progress; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-transparent_1KFOx._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP span,\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-transparent_1KFOx:hover._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP span,\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-transparent_1KFOx:active._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP span,\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-transparent_1KFOx:focus._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP span,\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-transparent_1KFOx:disabled._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP span {\n      border-color: #5e5e5e;\n      border-right-color: #adadad; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y {\n  color: #696a6a;\n  text-align: left; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_modal-header_3Wa96 h5._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_modal-header-title_2NEn7 {\n    font-size: 20px;\n    font-weight: normal; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal-content_3j3d6 {\n    max-height: calc(100vh - 190px) !important; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal-content_3j3d6 ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_user-preferences-error-message-wrapper_1SSKc div {\n      padding: 20px;\n      text-align: center; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal-content_3j3d6 ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_user-preferences-loading-wrapper_1Xdth {\n      min-height: 110px;\n      position: relative; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1,\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu {\n    display: inline-block;\n    font-size: 12px;\n    margin-left: 5px;\n    padding: 5px 10px;\n    text-align: center;\n    width: 70px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_button-groups_3wnob {\n    margin-left: 12px;\n    margin-top: -4px !important;\n    padding-top: 0; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_button-groups_3wnob:after {\n      content: \"\";\n      clear: both;\n      display: table; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_button-groups_3wnob button {\n      background-color: #fff;\n      border: 1px solid #c8c8c8;\n      border-radius: 0px;\n      color: #696a6a;\n      padding: 7px 3px;\n      -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);\n              box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);\n      cursor: pointer;\n      float: left;\n      font-size: 12px; }\n      ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_button-groups_3wnob button:not(:last-child) {\n        border-right: none; }\n      ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_button-groups_3wnob button:hover {\n        background-color: #288dc1;\n        color: #fff; }\n      ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_button-groups_3wnob button._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_selected_3k_qe {\n        background-color: #288dc1;\n        color: #fff; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_settings-table_3k2ef thead tr th {\n    font-size: 14px;\n    font-weight: bold; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_settings-table_3k2ef thead tr th._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_column-name_3cVte {\n      text-align: left; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_settings-table_3k2ef ._-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_option-column_sQ1Jk {\n    width: 54%; }\n", ""]);
// Exports
exports.locals = {
	"unstyled-link": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_unstyled-link_1Ssxe",
	"h1": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h1_12Fxo",
	"h2": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h2_3rvV3",
	"h3": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h3_2SUk4",
	"h4": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h4_3ZNpY",
	"h5": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h5_1HV0m",
	"h6": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_h6_1mpKp",
	"intro": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_intro_T8hx2",
	"small": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_small_1JOEM",
	"x-small": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_x-small_3xO54",
	"quiet": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_quiet_1xitB",
	"spinner-default": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-default_Nl33V",
	"spin": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spin_Do6cV",
	"spinner-dark": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-dark_35jlf",
	"spinner-large": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-large_1U3Ac",
	"spinner-btn-primary": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-btn-primary_3lwXv",
	"alert": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert_1Wd4Z",
	"info": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_info_1en1T",
	"notice": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_notice_2RBQp",
	"success": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_success_2DOQN",
	"warning": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_warning_376OX",
	"error": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_error_1_eEA",
	"alert-full-width-top": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-full-width-top_3G-Dn",
	"alert-full-width-bottom": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-full-width-bottom_1Y3eP",
	"btn": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn_10lzv",
	"alert-setting-modal": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal_3oS4Y",
	"cancel-button": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_cancel-button_NWFq1",
	"save-button": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_save-button_kj0Vu",
	"spinner-container": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_spinner-container_2NU-I",
	"btn-lg": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-lg_1JbAN",
	"btn-sm": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-sm_1ryt6",
	"btn-xs": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-xs_2cpaf",
	"btn-link": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-link_1hsaj",
	"btn-block": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-block_1JHCz",
	"btn-busy": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-busy_3DDhP",
	"btn-disabled": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled_UGQNR",
	"btn-dark": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-dark_3mjSS",
	"btn-default": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-default_1i-xI",
	"btn-simple": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-simple_3aaJ3",
	"btn-inverse": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-inverse_2JPsj",
	"active": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_active_32TEQ",
	"btn-disabled-light": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-disabled-light_fPMis",
	"btn-primary": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-primary_2B6JQ",
	"btn-alternate-2": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-2_2L442",
	"btn-alternate-3": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-alternate-3_1BMgO",
	"btn-warning": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-warning_2GYsN",
	"btn-success": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-success_1iLYA",
	"btn-error": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-error_2GOAi",
	"btn-transparent": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_btn-transparent_1KFOx",
	"modal-header": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_modal-header_3Wa96",
	"modal-header-title": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_modal-header-title_2NEn7",
	"alert-setting-modal-content": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_alert-setting-modal-content_3j3d6",
	"user-preferences-error-message-wrapper": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_user-preferences-error-message-wrapper_1SSKc",
	"user-preferences-loading-wrapper": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_user-preferences-loading-wrapper_1Xdth",
	"button-groups": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_button-groups_3wnob",
	"selected": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_selected_3k_qe",
	"settings-table": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_settings-table_3k2ef",
	"column-name": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_column-name_3cVte",
	"option-column": "_-_-_-common-notifications-components-AlertSettingModal-_alert-setting-modal-module_option-column_sQ1Jk"
};

/***/ }),

/***/ 2950:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// Module
exports.push([module.i, "/* https://css-tricks.com/snippets/sass/tint-shade-functions/ */\n/* Base Palette Colors */\n/* Colors light version */\n/* Colors dark version */\n/* Greys */\n/* Shades of Grey */\n/* Text colors */\n/* Background colors */\n/* Button Colors */\n/* Header */\n/* Settings Panel */\n/* Backgrounds */\n/* Notifications Panel */\n/* Map Layers Pane */\n/**\n * Clearfix\n *\n * For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    contenteditable attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that are clearfixed.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n *\n * Source: http://nicolasgallagher.com/micro-clearfix-hack/\n */\n/**\n * Offscreen. Hide text in UI, but keep in document. Accessibiity +1\n *\n*/\na._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_unstyled-link_1H8MT {\n  color: #2279a6;\n  text-decoration: none; }\n  a._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_unstyled-link_1H8MT:hover {\n    text-decoration: underline; }\n\n/*\n * All of the headings. Additional \"heaing classes\" are used to style\n * type in contexts where the heading style and semantics don't align.\n */\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h1_3-l4b,\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h2_2Uxt4,\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h3_2EfCy,\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h4_2uTfZ,\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h5_2fj0Y,\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h6_1PNWF {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  font-size: 100%;\n  letter-spacing: -0.3px;\n  font-weight: 600; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h1_3-l4b {\n  font-size: ms(5); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h2_2Uxt4 {\n  font-size: ms(4); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h3_2EfCy {\n  font-size: ms(3); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h4_2uTfZ {\n  font-size: ms(2); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h5_2fj0Y {\n  font-size: ms(1); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h6_1PNWF {\n  font-size: ms(0); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_intro_3HQb_ {\n  font-size: ms(1);\n  font-weight: 200; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_small_1KwUS {\n  font-size: ms(-1); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_x-small_3Quvp {\n  font-size: ms(-3); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_quiet_3AkD_ {\n  color: #767676; }\n\n/* Buttons */\n@-webkit-keyframes _-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spin_lnzyh {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes _-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spin_lnzyh {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spinner-default_2huAg {\n  -webkit-animation: _-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spin_lnzyh 0.9s linear infinite;\n  animation: _-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spin_lnzyh 0.9s linear infinite;\n  border: 3px solid #288dc1;\n  border-right-color: #eaf4f9;\n  border-radius: 50%;\n  display: inline-block;\n  width: ms(1);\n  height: ms(1); }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spinner-default_2huAg._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spinner-dark_dP6_u {\n    border-color: #eaf4f9;\n    border-right-color: #288dc1; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spinner-default_2huAg._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spinner-large_2aFH3 {\n    border-width: 8px;\n    width: 64px;\n    height: 64px; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spinner-btn-primary_2PVrL {\n  border-color: #fff;\n  border-right-color: #20719a; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_alert__9ZDj {\n  background-color: #f6f6f6;\n  border: 1px solid #c8c8c8;\n  font-size: ms(0);\n  padding: ms(-2);\n  border-radius: 1px;\n  color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_alert__9ZDj._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_small_1KwUS {\n    text-align: center;\n    font-size: 12px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_alert__9ZDj._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_info_2GIYG, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_alert__9ZDj._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_notice_3WDCG {\n    background-color: #eaf4f9;\n    border-color: #288dc1;\n    color: #1c6387; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_alert__9ZDj._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_success_2QRkV {\n    background-color: #eaf7ef;\n    border-color: #2baf5f;\n    color: #177b41; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_alert__9ZDj._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_warning_1Zjym {\n    background-color: #fdf9ed;\n    border-color: #e6af00;\n    color: #8a6900; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_alert__9ZDj._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_error_2FPCi {\n    background-color: #faf0f0;\n    border-color: #ce6565;\n    color: #914646; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_alert__9ZDj._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_alert-full-width-top__Juas {\n    border-top: 0;\n    border-left: 0;\n    border-right: 0; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_alert__9ZDj._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_alert-full-width-bottom_1eq62 {\n    border-bottom: 0;\n    border-left: 0;\n    border-right: 0; }\n\n@keyframes _-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spin_lnzyh {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn_1HodF {\n  display: inline-block;\n  padding: ms(-3) ms(0);\n  border-radius: 1px;\n  font-size: ms(0);\n  border: solid 1px transparent;\n  -webkit-transition: color 0.2s, background-color 0.2s;\n  transition: color 0.2s, background-color 0.2s;\n  cursor: pointer;\n  text-decoration: none;\n  letter-spacing: 0; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn_1HodF ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spinner-container_10JA9 {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    bottom: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn_1HodF ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spinner-default_2huAg {\n    width: 1.5rem;\n    height: 1.5rem;\n    border-width: 3px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn_1HodF._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-lg_htj9b {\n    font-size: ms(1);\n    padding: ms(-2) ms(1); }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn_1HodF._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-lg_htj9b ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spinner-default_2huAg {\n      width: 1rem;\n      height: 1rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn_1HodF._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-sm_1mrxQ {\n    font-size: ms(-1);\n    padding: ms(-6) ms(-1); }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn_1HodF._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-sm_1mrxQ ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spinner-default_2huAg {\n      width: 0.85rem;\n      height: 0.85rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn_1HodF._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-xs_22MmN {\n    font-size: ms(-2);\n    padding: ms(-8) ms(-1); }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn_1HodF._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-xs_22MmN ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spinner-default_2huAg {\n      width: 0.75rem;\n      height: 0.75rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn_1HodF [class*=\"socrata-icon-\"] {\n    position: relative; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-link_RrGaj {\n  color: #2279a6;\n  text-decoration: none;\n  padding: 0;\n  display: inline;\n  border: 0;\n  background: transparent; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-link_RrGaj:hover {\n    text-decoration: underline; }\n\n/* Makes btn full width. */\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-block_ThKqd {\n  width: 100%; }\n\n/* Adds a spinner in place of button text. */\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0 {\n  cursor: progress;\n  border: solid 1px transparent;\n  position: relative; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0 span {\n    -webkit-animation: _-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spin_lnzyh 0.9s linear infinite;\n    animation: _-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spin_lnzyh 0.9s linear infinite;\n    border: 3px solid;\n    border-radius: 60%;\n    display: inline-block;\n    width: 2rem;\n    height: 2rem; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px {\n  color: #767676;\n  background-color: #fff;\n  border-color: #c8c8c8; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4:hover, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px:hover, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4:focus, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px:focus {\n    color: #6a6a6a;\n    background-color: #f1f1f1; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW {\n      border-color: transparent;\n      background-color: white;\n      color: #767676;\n      -webkit-transition: border-color 0.35s;\n      transition: border-color 0.35s; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p {\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4:active, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px:active, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_active_1Odqa, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_active_1Odqa._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px {\n    border-color: #cccccc;\n    background-color: #f1f1f1;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4:active._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px:active._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_active_1Odqa._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_active_1Odqa._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px {\n      border-color: transparent;\n      background-color: white;\n      color: #767676;\n      -webkit-transition: border-color 0.35s;\n      transition: border-color 0.35s; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled-light_2bNlJ, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled-light_2bNlJ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px {\n    background-color: #f6f6f6;\n    color: #c8c8c8;\n    border-color: #e4e4e4; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_active_1Odqa, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_active_1Odqa._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px {\n    -webkit-box-shadow: inset 0 0 10px -2px #888;\n            box-shadow: inset 0 0 10px -2px #888; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px {\n    color: #fff;\n    background-color: transparent;\n    border-color: #fff; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px {\n    color: #fff;\n    background-color: #767676;\n    border-color: #767676; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0 span, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px span {\n    border-color: #fff;\n    border-right-color: #adadad; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px {\n  color: #5e5e5e;\n  background-color: #f1f1f1; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px:hover, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px:focus {\n    background-color: #e4e4e4;\n    color: #5e5e5e; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-primary_1TZQ7 {\n  color: #fff;\n  background-color: #2279a6;\n  border-color: #288dc1;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-primary_1TZQ7:hover, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-primary_1TZQ7:focus {\n    background-color: #1d678d; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-primary_1TZQ7:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-primary_1TZQ7:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW {\n      color: #fff;\n      background-color: #2279a6; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-primary_1TZQ7:active, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-primary_1TZQ7._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_active_1Odqa {\n    border-color: #247fae;\n    background-color: #1d678d;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-primary_1TZQ7:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-primary_1TZQ7._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-primary_1TZQ7:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-primary_1TZQ7._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-primary_1TZQ7._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW {\n    color: #2279a6;\n    background-color: #fff; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-primary_1TZQ7._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q {\n      color: #474747;\n      border-color: #919191;\n      background-color: #c8c8c8;\n      cursor: not-allowed; }\n      ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-primary_1TZQ7._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p {\n        color: #919191;\n        border-color: #767676;\n        background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-primary_1TZQ7._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0 span {\n    border-right-color: #53a4cd; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw {\n  color: #fff;\n  background-color: #00717c;\n  border-color: #00a1af;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw:hover, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw:focus {\n    background-color: #005a63;\n    color: #fff; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW {\n      color: #fff;\n      background-color: #00717c; }\n      ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q {\n        color: #474747;\n        border-color: #919191;\n        background-color: #c8c8c8;\n        cursor: not-allowed; }\n        ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p {\n          color: #919191;\n          border-color: #767676;\n          background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw:active, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_active_1Odqa {\n    border-color: #00919e;\n    background-color: #005a63;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW {\n    color: #00717c;\n    background-color: #fff; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0 span {\n    border-right-color: #33b4bf; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl {\n  color: #fff;\n  background-color: #00be9b;\n  border-color: #00be9b;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl:hover, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl:focus {\n    background-color: #00987c; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW {\n      color: #fff;\n      background-color: #00be9b; }\n      ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q {\n        color: #474747;\n        border-color: #919191;\n        background-color: #c8c8c8;\n        cursor: not-allowed; }\n        ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p {\n          color: #919191;\n          border-color: #767676;\n          background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl:active, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_active_1Odqa {\n    border-color: #00ab8c;\n    background-color: #00987c;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW {\n    color: #00be9b;\n    background-color: #fff; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0 span {\n    border-right-color: #33cbaf; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-warning_19E7w {\n  color: #fff;\n  background-color: #e6af00;\n  border-color: #e6af00; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-warning_19E7w:hover, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-warning_19E7w:focus {\n    background-color: #b88c00; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-warning_19E7w:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-warning_19E7w:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW {\n      color: #fff;\n      background-color: #e6af00; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-warning_19E7w:active, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-warning_19E7w._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_active_1Odqa {\n    border-color: #cf9e00;\n    background-color: #b88c00;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-warning_19E7w:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-warning_19E7w._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-warning_19E7w:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-warning_19E7w._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-warning_19E7w:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-warning_19E7w._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-warning_19E7w._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW {\n    color: #e6af00;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-success_3ZeBO {\n  color: #fff;\n  background-color: #2baf5f;\n  border-color: #2baf5f; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-success_3ZeBO:hover, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-success_3ZeBO:focus {\n    cursor: default; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-success_3ZeBO:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-success_3ZeBO:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW {\n      color: #fff;\n      background-color: #2baf5f; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-success_3ZeBO:active, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-success_3ZeBO._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_active_1Odqa {\n    border-color: #279d56;\n    background-color: #228c4c;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-success_3ZeBO:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-success_3ZeBO._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-success_3ZeBO:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-success_3ZeBO._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-success_3ZeBO:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-success_3ZeBO._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-success_3ZeBO._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW {\n    color: #259652;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-error_163IH {\n  color: #fff;\n  background-color: #ce6565;\n  border-color: #ce6565; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-error_163IH:hover, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-error_163IH:focus {\n    background-color: #a55151; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-error_163IH:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-error_163IH:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW {\n      color: #fff;\n      background-color: #ce6565; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-error_163IH:active, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-error_163IH._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_active_1Odqa {\n    border-color: #b95b5b;\n    background-color: #a55151;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-error_163IH:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-error_163IH._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-error_163IH:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-error_163IH._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-error_163IH:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-error_163IH._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-error_163IH._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW {\n    color: #ce6565;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-transparent_2yrx-,\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-transparent_2yrx-:hover,\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-transparent_2yrx-:active,\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-transparent_2yrx-:focus,\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-transparent_2yrx-:disabled {\n  border-color: transparent;\n  background-color: transparent; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-transparent_2yrx-._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0,\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-transparent_2yrx-:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0,\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-transparent_2yrx-:active._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0,\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-transparent_2yrx-:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0,\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-transparent_2yrx-:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0 {\n    cursor: progress; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-transparent_2yrx-._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0 span,\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-transparent_2yrx-:hover._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0 span,\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-transparent_2yrx-:active._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0 span,\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-transparent_2yrx-:focus._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0 span,\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-transparent_2yrx-:disabled._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0 span {\n      border-color: #5e5e5e;\n      border-right-color: #adadad; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_tabs_Y2DOb {\n  padding: 0px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_tabs_Y2DOb ul {\n    border-bottom: 1px solid #e4e4e4;\n    list-style: none;\n    margin: 0;\n    padding: 0px; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_tabs_Y2DOb ul li {\n      display: inline-block;\n      margin-right: 15px;\n      padding: 10px 10px 0px 0px; }\n      ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_tabs_Y2DOb ul li:hover, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_tabs_Y2DOb ul li._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_active_1Odqa {\n        border-bottom: 3px solid #288dc1;\n        cursor: pointer;\n        text-decoration: none; }\n        ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_tabs_Y2DOb ul li:hover a, ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_tabs_Y2DOb ul li._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_active_1Odqa a {\n          color: #767676; }\n      ._-_-_-common-notifications-components-AlertSettingModal-_tabs-module_tabs_Y2DOb ul li a {\n        color: #adadad;\n        font-size: 14px;\n        text-decoration: none; }\n", ""]);
// Exports
exports.locals = {
	"unstyled-link": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_unstyled-link_1H8MT",
	"h1": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h1_3-l4b",
	"h2": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h2_2Uxt4",
	"h3": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h3_2EfCy",
	"h4": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h4_2uTfZ",
	"h5": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h5_2fj0Y",
	"h6": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_h6_1PNWF",
	"intro": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_intro_3HQb_",
	"small": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_small_1KwUS",
	"x-small": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_x-small_3Quvp",
	"quiet": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_quiet_3AkD_",
	"spinner-default": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spinner-default_2huAg",
	"spin": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spin_lnzyh",
	"spinner-dark": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spinner-dark_dP6_u",
	"spinner-large": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spinner-large_2aFH3",
	"spinner-btn-primary": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spinner-btn-primary_2PVrL",
	"alert": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_alert__9ZDj",
	"info": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_info_2GIYG",
	"notice": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_notice_3WDCG",
	"success": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_success_2QRkV",
	"warning": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_warning_1Zjym",
	"error": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_error_2FPCi",
	"alert-full-width-top": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_alert-full-width-top__Juas",
	"alert-full-width-bottom": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_alert-full-width-bottom_1eq62",
	"btn": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn_1HodF",
	"spinner-container": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_spinner-container_10JA9",
	"btn-lg": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-lg_htj9b",
	"btn-sm": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-sm_1mrxQ",
	"btn-xs": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-xs_22MmN",
	"btn-link": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-link_RrGaj",
	"btn-block": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-block_ThKqd",
	"btn-busy": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-busy_3dWp0",
	"btn-disabled": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled_2_g1q",
	"btn-dark": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-dark_4EP2p",
	"btn-default": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-default_VclC4",
	"btn-simple": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-simple_xC2px",
	"btn-inverse": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-inverse_3o-aW",
	"active": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_active_1Odqa",
	"btn-disabled-light": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-disabled-light_2bNlJ",
	"btn-primary": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-primary_1TZQ7",
	"btn-alternate-2": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-2_EO3Bw",
	"btn-alternate-3": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-alternate-3_B0bHl",
	"btn-warning": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-warning_19E7w",
	"btn-success": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-success_3ZeBO",
	"btn-error": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-error_163IH",
	"btn-transparent": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_btn-transparent_2yrx-",
	"tabs": "_-_-_-common-notifications-components-AlertSettingModal-_tabs-module_tabs_Y2DOb"
};

/***/ }),

/***/ 2951:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// Module
exports.push([module.i, "/* https://css-tricks.com/snippets/sass/tint-shade-functions/ */\n/* Base Palette Colors */\n/* Colors light version */\n/* Colors dark version */\n/* Greys */\n/* Shades of Grey */\n/* Text colors */\n/* Background colors */\n/* Button Colors */\n/* Header */\n/* Settings Panel */\n/* Backgrounds */\n/* Notifications Panel */\n/* Map Layers Pane */\n/**\n * Clearfix\n *\n * For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    contenteditable attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that are clearfixed.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n *\n * Source: http://nicolasgallagher.com/micro-clearfix-hack/\n */\n/**\n * Offscreen. Hide text in UI, but keep in document. Accessibiity +1\n *\n*/\na._-_-_-common-notifications-components-AlertSettingModal-_preference-module_unstyled-link_2_Rzi {\n  color: #2279a6;\n  text-decoration: none; }\n  a._-_-_-common-notifications-components-AlertSettingModal-_preference-module_unstyled-link_2_Rzi:hover {\n    text-decoration: underline; }\n\n/*\n * All of the headings. Additional \"heaing classes\" are used to style\n * type in contexts where the heading style and semantics don't align.\n */\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_h1_34706,\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_h2_1G15f,\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_h3_2APRs,\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_h4_vLMi7,\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_h5_rJNVc,\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_h6_1GS3n {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  font-size: 100%;\n  letter-spacing: -0.3px;\n  font-weight: 600; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_h1_34706 {\n  font-size: ms(5); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_h2_1G15f {\n  font-size: ms(4); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_h3_2APRs {\n  font-size: ms(3); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_h4_vLMi7 {\n  font-size: ms(2); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_h5_rJNVc {\n  font-size: ms(1); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_h6_1GS3n {\n  font-size: ms(0); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_intro_PetjT {\n  font-size: ms(1);\n  font-weight: 200; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_small_3vwdx {\n  font-size: ms(-1); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_x-small_gi7Oc {\n  font-size: ms(-3); }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_quiet_3Puob {\n  color: #767676; }\n\n/* Buttons */\n@-webkit-keyframes _-_-_-common-notifications-components-AlertSettingModal-_preference-module_spin_3BMvO {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes _-_-_-common-notifications-components-AlertSettingModal-_preference-module_spin_3BMvO {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_spinner-default_2BET_ {\n  -webkit-animation: _-_-_-common-notifications-components-AlertSettingModal-_preference-module_spin_3BMvO 0.9s linear infinite;\n  animation: _-_-_-common-notifications-components-AlertSettingModal-_preference-module_spin_3BMvO 0.9s linear infinite;\n  border: 3px solid #288dc1;\n  border-right-color: #eaf4f9;\n  border-radius: 50%;\n  display: inline-block;\n  width: ms(1);\n  height: ms(1); }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_spinner-default_2BET_._-_-_-common-notifications-components-AlertSettingModal-_preference-module_spinner-dark_2ixPM {\n    border-color: #eaf4f9;\n    border-right-color: #288dc1; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_spinner-default_2BET_._-_-_-common-notifications-components-AlertSettingModal-_preference-module_spinner-large_r5jzd {\n    border-width: 8px;\n    width: 64px;\n    height: 64px; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_spinner-btn-primary_kDPM6 {\n  border-color: #fff;\n  border-right-color: #20719a; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_alert_3FqZD {\n  background-color: #f6f6f6;\n  border: 1px solid #c8c8c8;\n  font-size: ms(0);\n  padding: ms(-2);\n  border-radius: 1px;\n  color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_alert_3FqZD._-_-_-common-notifications-components-AlertSettingModal-_preference-module_small_3vwdx {\n    text-align: center;\n    font-size: 12px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_alert_3FqZD._-_-_-common-notifications-components-AlertSettingModal-_preference-module_info_lceaP, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_alert_3FqZD._-_-_-common-notifications-components-AlertSettingModal-_preference-module_notice_3Fcrp {\n    background-color: #eaf4f9;\n    border-color: #288dc1;\n    color: #1c6387; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_alert_3FqZD._-_-_-common-notifications-components-AlertSettingModal-_preference-module_success_17LP1 {\n    background-color: #eaf7ef;\n    border-color: #2baf5f;\n    color: #177b41; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_alert_3FqZD._-_-_-common-notifications-components-AlertSettingModal-_preference-module_warning_3BRo8 {\n    background-color: #fdf9ed;\n    border-color: #e6af00;\n    color: #8a6900; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_alert_3FqZD._-_-_-common-notifications-components-AlertSettingModal-_preference-module_error_3YGrh {\n    background-color: #faf0f0;\n    border-color: #ce6565;\n    color: #914646; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_alert_3FqZD._-_-_-common-notifications-components-AlertSettingModal-_preference-module_alert-full-width-top_3PZR6 {\n    border-top: 0;\n    border-left: 0;\n    border-right: 0; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_alert_3FqZD._-_-_-common-notifications-components-AlertSettingModal-_preference-module_alert-full-width-bottom_3b8bh {\n    border-bottom: 0;\n    border-left: 0;\n    border-right: 0; }\n\n@keyframes _-_-_-common-notifications-components-AlertSettingModal-_preference-module_spin_3BMvO {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn_3mDXq {\n  display: inline-block;\n  padding: ms(-3) ms(0);\n  border-radius: 1px;\n  font-size: ms(0);\n  border: solid 1px transparent;\n  -webkit-transition: color 0.2s, background-color 0.2s;\n  transition: color 0.2s, background-color 0.2s;\n  cursor: pointer;\n  text-decoration: none;\n  letter-spacing: 0; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn_3mDXq ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_spinner-container_3W1ux {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    bottom: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn_3mDXq ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_spinner-default_2BET_ {\n    width: 1.5rem;\n    height: 1.5rem;\n    border-width: 3px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn_3mDXq._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-lg_37_u3 {\n    font-size: ms(1);\n    padding: ms(-2) ms(1); }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn_3mDXq._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-lg_37_u3 ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_spinner-default_2BET_ {\n      width: 1rem;\n      height: 1rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn_3mDXq._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-sm_2dRxr {\n    font-size: ms(-1);\n    padding: ms(-6) ms(-1); }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn_3mDXq._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-sm_2dRxr ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_spinner-default_2BET_ {\n      width: 0.85rem;\n      height: 0.85rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn_3mDXq._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-xs_3b5Tg {\n    font-size: ms(-2);\n    padding: ms(-8) ms(-1); }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn_3mDXq._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-xs_3b5Tg ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_spinner-default_2BET_ {\n      width: 0.75rem;\n      height: 0.75rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn_3mDXq [class*=\"socrata-icon-\"] {\n    position: relative; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-link_33Xbo {\n  color: #2279a6;\n  text-decoration: none;\n  padding: 0;\n  display: inline;\n  border: 0;\n  background: transparent; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-link_33Xbo:hover {\n    text-decoration: underline; }\n\n/* Makes btn full width. */\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-block_1ZFi3 {\n  width: 100%; }\n\n/* Adds a spinner in place of button text. */\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM {\n  cursor: progress;\n  border: solid 1px transparent;\n  position: relative; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM span {\n    -webkit-animation: _-_-_-common-notifications-components-AlertSettingModal-_preference-module_spin_3BMvO 0.9s linear infinite;\n    animation: _-_-_-common-notifications-components-AlertSettingModal-_preference-module_spin_3BMvO 0.9s linear infinite;\n    border: 3px solid;\n    border-radius: 60%;\n    display: inline-block;\n    width: 2rem;\n    height: 2rem; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR {\n  color: #767676;\n  background-color: #fff;\n  border-color: #c8c8c8; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8:hover, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR:hover, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8:focus, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR:focus {\n    color: #6a6a6a;\n    background-color: #f1f1f1; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w {\n      border-color: transparent;\n      background-color: white;\n      color: #767676;\n      -webkit-transition: border-color 0.35s;\n      transition: border-color 0.35s; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi {\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8:active, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR:active, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8._-_-_-common-notifications-components-AlertSettingModal-_preference-module_active_1HwNi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_active_1HwNi._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR {\n    border-color: #cccccc;\n    background-color: #f1f1f1;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8:active._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR:active._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8._-_-_-common-notifications-components-AlertSettingModal-_preference-module_active_1HwNi._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_active_1HwNi._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR {\n      border-color: transparent;\n      background-color: white;\n      color: #767676;\n      -webkit-transition: border-color 0.35s;\n      transition: border-color 0.35s; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled-light_3crLf, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled-light_3crLf._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR {\n    background-color: #f6f6f6;\n    color: #c8c8c8;\n    border-color: #e4e4e4; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8._-_-_-common-notifications-components-AlertSettingModal-_preference-module_active_1HwNi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_active_1HwNi._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR {\n    -webkit-box-shadow: inset 0 0 10px -2px #888;\n            box-shadow: inset 0 0 10px -2px #888; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR {\n    color: #fff;\n    background-color: transparent;\n    border-color: #fff; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR {\n    color: #fff;\n    background-color: #767676;\n    border-color: #767676; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM span, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR span {\n    border-color: #fff;\n    border-right-color: #adadad; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR {\n  color: #5e5e5e;\n  background-color: #f1f1f1; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR:hover, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR:focus {\n    background-color: #e4e4e4;\n    color: #5e5e5e; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-primary_3pAqM {\n  color: #fff;\n  background-color: #2279a6;\n  border-color: #288dc1;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-primary_3pAqM:hover, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-primary_3pAqM:focus {\n    background-color: #1d678d; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-primary_3pAqM:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-primary_3pAqM:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w {\n      color: #fff;\n      background-color: #2279a6; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-primary_3pAqM:active, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-primary_3pAqM._-_-_-common-notifications-components-AlertSettingModal-_preference-module_active_1HwNi {\n    border-color: #247fae;\n    background-color: #1d678d;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-primary_3pAqM:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-primary_3pAqM._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-primary_3pAqM:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-primary_3pAqM._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-primary_3pAqM._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w {\n    color: #2279a6;\n    background-color: #fff; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-primary_3pAqM._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty {\n      color: #474747;\n      border-color: #919191;\n      background-color: #c8c8c8;\n      cursor: not-allowed; }\n      ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-primary_3pAqM._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi {\n        color: #919191;\n        border-color: #767676;\n        background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-primary_3pAqM._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM span {\n    border-right-color: #53a4cd; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb {\n  color: #fff;\n  background-color: #00717c;\n  border-color: #00a1af;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb:hover, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb:focus {\n    background-color: #005a63;\n    color: #fff; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w {\n      color: #fff;\n      background-color: #00717c; }\n      ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty {\n        color: #474747;\n        border-color: #919191;\n        background-color: #c8c8c8;\n        cursor: not-allowed; }\n        ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi {\n          color: #919191;\n          border-color: #767676;\n          background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb:active, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb._-_-_-common-notifications-components-AlertSettingModal-_preference-module_active_1HwNi {\n    border-color: #00919e;\n    background-color: #005a63;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w {\n    color: #00717c;\n    background-color: #fff; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM span {\n    border-right-color: #33b4bf; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL {\n  color: #fff;\n  background-color: #00be9b;\n  border-color: #00be9b;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL:hover, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL:focus {\n    background-color: #00987c; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w {\n      color: #fff;\n      background-color: #00be9b; }\n      ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty {\n        color: #474747;\n        border-color: #919191;\n        background-color: #c8c8c8;\n        cursor: not-allowed; }\n        ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi {\n          color: #919191;\n          border-color: #767676;\n          background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL:active, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL._-_-_-common-notifications-components-AlertSettingModal-_preference-module_active_1HwNi {\n    border-color: #00ab8c;\n    background-color: #00987c;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w {\n    color: #00be9b;\n    background-color: #fff; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM span {\n    border-right-color: #33cbaf; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-warning_1XzKV {\n  color: #fff;\n  background-color: #e6af00;\n  border-color: #e6af00; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-warning_1XzKV:hover, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-warning_1XzKV:focus {\n    background-color: #b88c00; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-warning_1XzKV:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-warning_1XzKV:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w {\n      color: #fff;\n      background-color: #e6af00; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-warning_1XzKV:active, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-warning_1XzKV._-_-_-common-notifications-components-AlertSettingModal-_preference-module_active_1HwNi {\n    border-color: #cf9e00;\n    background-color: #b88c00;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-warning_1XzKV:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-warning_1XzKV._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-warning_1XzKV:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-warning_1XzKV._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-warning_1XzKV:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-warning_1XzKV._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-warning_1XzKV._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w {\n    color: #e6af00;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-success_2FGOV {\n  color: #fff;\n  background-color: #2baf5f;\n  border-color: #2baf5f; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-success_2FGOV:hover, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-success_2FGOV:focus {\n    cursor: default; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-success_2FGOV:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-success_2FGOV:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w {\n      color: #fff;\n      background-color: #2baf5f; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-success_2FGOV:active, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-success_2FGOV._-_-_-common-notifications-components-AlertSettingModal-_preference-module_active_1HwNi {\n    border-color: #279d56;\n    background-color: #228c4c;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-success_2FGOV:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-success_2FGOV._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-success_2FGOV:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-success_2FGOV._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-success_2FGOV:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-success_2FGOV._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-success_2FGOV._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w {\n    color: #259652;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-error_3BWQr {\n  color: #fff;\n  background-color: #ce6565;\n  border-color: #ce6565; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-error_3BWQr:hover, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-error_3BWQr:focus {\n    background-color: #a55151; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-error_3BWQr:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-error_3BWQr:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w {\n      color: #fff;\n      background-color: #ce6565; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-error_3BWQr:active, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-error_3BWQr._-_-_-common-notifications-components-AlertSettingModal-_preference-module_active_1HwNi {\n    border-color: #b95b5b;\n    background-color: #a55151;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-error_3BWQr:disabled, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-error_3BWQr._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-error_3BWQr:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-error_3BWQr._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-error_3BWQr:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-error_3BWQr._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-error_3BWQr._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w {\n    color: #ce6565;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-transparent_2dCl5,\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-transparent_2dCl5:hover,\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-transparent_2dCl5:active,\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-transparent_2dCl5:focus,\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-transparent_2dCl5:disabled {\n  border-color: transparent;\n  background-color: transparent; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-transparent_2dCl5._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM,\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-transparent_2dCl5:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM,\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-transparent_2dCl5:active._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM,\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-transparent_2dCl5:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM,\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-transparent_2dCl5:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM {\n    cursor: progress; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-transparent_2dCl5._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM span,\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-transparent_2dCl5:hover._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM span,\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-transparent_2dCl5:active._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM span,\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-transparent_2dCl5:focus._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM span,\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-transparent_2dCl5:disabled._-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM span {\n      border-color: #5e5e5e;\n      border-right-color: #adadad; }\n\n._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ {\n  margin-top: 15px;\n  padding-left: 3px;\n  position: relative; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preference-title_tfAak {\n    color: #696a6a;\n    font-weight: bold;\n    margin-left: 0; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_description_Jqsmr {\n    margin-left: 0; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preference-label_3pKq_ {\n    font-size: 13px;\n    text-transform: uppercase;\n    font-weight: bold;\n    color: #696a6a; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-checkbox_3QoLK .icon-checkmark3 {\n    font-size: 16px;\n    line-height: 0.6 !important; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-checkbox_3QoLK .fake-checkbox {\n    padding: 0;\n    height: 20px;\n    width: 20px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-checkbox_3QoLK .checkbox input[type=checkbox] {\n    position: absolute; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preference-table_2ylkQ {\n    padding: 20px 0 20px 0;\n    border-collapse: collapse;\n    border-spacing: 0;\n    min-width: 100%;\n    width: 100%; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preference-table_2ylkQ th, ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preference-table_2ylkQ td {\n      border-bottom: 1px solid #e4e4e4;\n      border-left: 0;\n      border-right: 0;\n      color: #696a6a;\n      font-size: 12px;\n      padding: 10px 10px 10px 0;\n      vertical-align: middle; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preference-table_2ylkQ tr:first-child > td {\n      border-top: none; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preference-table_2ylkQ td:nth-child(1) {\n      width: 18%; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preference-table_2ylkQ td:nth-child(2) {\n      width: 13%; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preference-table_2ylkQ thead tr {\n      background-color: transparent; }\n      ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preference-table_2ylkQ thead tr th {\n        border-top: 0;\n        font-weight: 600;\n        color: #6a6a6a; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_email-settings_2LzFx thead tr th {\n    font-size: 14px;\n    font-weight: bold; }\n    ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_email-settings_2LzFx thead tr th._-_-_-common-notifications-components-AlertSettingModal-_preference-module_column-name_2jfvJ {\n      text-align: left; }\n  ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_email-settings_2LzFx ._-_-_-common-notifications-components-AlertSettingModal-_preference-module_option-column_19BIs {\n    width: 54%; }\n", ""]);
// Exports
exports.locals = {
	"unstyled-link": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_unstyled-link_2_Rzi",
	"h1": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_h1_34706",
	"h2": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_h2_1G15f",
	"h3": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_h3_2APRs",
	"h4": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_h4_vLMi7",
	"h5": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_h5_rJNVc",
	"h6": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_h6_1GS3n",
	"intro": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_intro_PetjT",
	"small": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_small_3vwdx",
	"x-small": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_x-small_gi7Oc",
	"quiet": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_quiet_3Puob",
	"spinner-default": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_spinner-default_2BET_",
	"spin": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_spin_3BMvO",
	"spinner-dark": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_spinner-dark_2ixPM",
	"spinner-large": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_spinner-large_r5jzd",
	"spinner-btn-primary": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_spinner-btn-primary_kDPM6",
	"alert": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_alert_3FqZD",
	"info": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_info_lceaP",
	"notice": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_notice_3Fcrp",
	"success": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_success_17LP1",
	"warning": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_warning_3BRo8",
	"error": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_error_3YGrh",
	"alert-full-width-top": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_alert-full-width-top_3PZR6",
	"alert-full-width-bottom": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_alert-full-width-bottom_3b8bh",
	"btn": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn_3mDXq",
	"spinner-container": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_spinner-container_3W1ux",
	"btn-lg": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-lg_37_u3",
	"btn-sm": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-sm_2dRxr",
	"btn-xs": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-xs_3b5Tg",
	"btn-link": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-link_33Xbo",
	"btn-block": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-block_1ZFi3",
	"btn-busy": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-busy_1jkQM",
	"btn-disabled": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled_3nBty",
	"btn-dark": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-dark_1BvTi",
	"btn-default": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-default_cBnZ8",
	"btn-simple": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-simple_36VIR",
	"btn-inverse": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-inverse_Qaz2w",
	"active": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_active_1HwNi",
	"btn-disabled-light": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-disabled-light_3crLf",
	"btn-primary": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-primary_3pAqM",
	"btn-alternate-2": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-2_3Gedb",
	"btn-alternate-3": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-alternate-3_1vjxL",
	"btn-warning": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-warning_1XzKV",
	"btn-success": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-success_2FGOV",
	"btn-error": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-error_3BWQr",
	"btn-transparent": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_btn-transparent_2dCl5",
	"preferences-content": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-content_2nOLJ",
	"preference-title": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_preference-title_tfAak",
	"description": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_description_Jqsmr",
	"preference-label": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_preference-label_3pKq_",
	"preferences-checkbox": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_preferences-checkbox_3QoLK",
	"preference-table": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_preference-table_2ylkQ",
	"email-settings": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_email-settings_2LzFx",
	"column-name": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_column-name_2jfvJ",
	"option-column": "_-_-_-common-notifications-components-AlertSettingModal-_preference-module_option-column_19BIs"
};

/***/ }),

/***/ 2952:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// Module
exports.push([module.i, "/* https://css-tricks.com/snippets/sass/tint-shade-functions/ */\n/* Base Palette Colors */\n/* Colors light version */\n/* Colors dark version */\n/* Greys */\n/* Shades of Grey */\n/* Text colors */\n/* Background colors */\n/* Button Colors */\n/* Header */\n/* Settings Panel */\n/* Backgrounds */\n/* Notifications Panel */\n/* Map Layers Pane */\n/**\n * Clearfix\n *\n * For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    contenteditable attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that are clearfixed.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n *\n * Source: http://nicolasgallagher.com/micro-clearfix-hack/\n */\n/**\n * Offscreen. Hide text in UI, but keep in document. Accessibiity +1\n *\n*/\na._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_unstyled-link_oPnXh {\n  color: #2279a6;\n  text-decoration: none; }\n  a._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_unstyled-link_oPnXh:hover {\n    text-decoration: underline; }\n\n/*\n * All of the headings. Additional \"heaing classes\" are used to style\n * type in contexts where the heading style and semantics don't align.\n */\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h1_O9XNw,\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h2_8qZAe,\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h3_2NIo_,\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h4_1m8dX,\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h5_2kN8L,\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h6_31zye {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  font-size: 100%;\n  letter-spacing: -0.3px;\n  font-weight: 600; }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h1_O9XNw {\n  font-size: ms(5); }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h2_8qZAe {\n  font-size: ms(4); }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h3_2NIo_ {\n  font-size: ms(3); }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h4_1m8dX {\n  font-size: ms(2); }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h5_2kN8L {\n  font-size: ms(1); }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h6_31zye {\n  font-size: ms(0); }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_intro_LhHS0 {\n  font-size: ms(1);\n  font-weight: 200; }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_small_1qiQA {\n  font-size: ms(-1); }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_x-small_5uwzA {\n  font-size: ms(-3); }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_quiet_3Fx39 {\n  color: #767676; }\n\n/* Buttons */\n@-webkit-keyframes _-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spin_32zQd {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes _-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spin_32zQd {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-default_1dZaV {\n  -webkit-animation: _-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spin_32zQd 0.9s linear infinite;\n  animation: _-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spin_32zQd 0.9s linear infinite;\n  border: 3px solid #288dc1;\n  border-right-color: #eaf4f9;\n  border-radius: 50%;\n  display: inline-block;\n  width: ms(1);\n  height: ms(1); }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-default_1dZaV._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-dark_2HuHs {\n    border-color: #eaf4f9;\n    border-right-color: #288dc1; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-default_1dZaV._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-large_1V_Lc {\n    border-width: 8px;\n    width: 64px;\n    height: 64px; }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-btn-primary_1a43e {\n  border-color: #fff;\n  border-right-color: #20719a; }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert_2xHuy {\n  background-color: #f6f6f6;\n  border: 1px solid #c8c8c8;\n  font-size: ms(0);\n  padding: ms(-2);\n  border-radius: 1px;\n  color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert_2xHuy._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_small_1qiQA {\n    text-align: center;\n    font-size: 12px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert_2xHuy._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_info_3WraR, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert_2xHuy._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_notice_1vx-z {\n    background-color: #eaf4f9;\n    border-color: #288dc1;\n    color: #1c6387; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert_2xHuy._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_success_12Rno {\n    background-color: #eaf7ef;\n    border-color: #2baf5f;\n    color: #177b41; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert_2xHuy._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_warning_1rvPV {\n    background-color: #fdf9ed;\n    border-color: #e6af00;\n    color: #8a6900; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert_2xHuy._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_error_t1sMX {\n    background-color: #faf0f0;\n    border-color: #ce6565;\n    color: #914646; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert_2xHuy._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-full-width-top_2vXF4 {\n    border-top: 0;\n    border-left: 0;\n    border-right: 0; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert_2xHuy._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-full-width-bottom_431Qz {\n    border-bottom: 0;\n    border-left: 0;\n    border-right: 0; }\n\n@keyframes _-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spin_32zQd {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn_2ZJ7_, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- {\n  display: inline-block;\n  padding: ms(-3) ms(0);\n  border-radius: 1px;\n  font-size: ms(0);\n  border: solid 1px transparent;\n  -webkit-transition: color 0.2s, background-color 0.2s;\n  transition: color 0.2s, background-color 0.2s;\n  cursor: pointer;\n  text-decoration: none;\n  letter-spacing: 0; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn_2ZJ7_ ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-container_1bH7x, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-container_1bH7x, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-container_1bH7x {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    bottom: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn_2ZJ7_ ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-default_1dZaV, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-default_1dZaV, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-default_1dZaV {\n    width: 1.5rem;\n    height: 1.5rem;\n    border-width: 3px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn_2ZJ7_._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-lg_1qW3H, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-lg_1qW3H._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-lg_1qW3H._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- {\n    font-size: ms(1);\n    padding: ms(-2) ms(1); }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn_2ZJ7_._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-lg_1qW3H ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-default_1dZaV, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-lg_1qW3H._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-default_1dZaV, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-lg_1qW3H._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-default_1dZaV {\n      width: 1rem;\n      height: 1rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn_2ZJ7_._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-sm_1EtHI, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-sm_1EtHI._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-sm_1EtHI._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- {\n    font-size: ms(-1);\n    padding: ms(-6) ms(-1); }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn_2ZJ7_._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-sm_1EtHI ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-default_1dZaV, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-sm_1EtHI._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-default_1dZaV, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-sm_1EtHI._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-default_1dZaV {\n      width: 0.85rem;\n      height: 0.85rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn_2ZJ7_._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-xs_2tHgh, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-xs_2tHgh._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-xs_2tHgh._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- {\n    font-size: ms(-2);\n    padding: ms(-8) ms(-1); }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn_2ZJ7_._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-xs_2tHgh ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-default_1dZaV, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-xs_2tHgh._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-default_1dZaV, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-xs_2tHgh._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-default_1dZaV {\n      width: 0.75rem;\n      height: 0.75rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn_2ZJ7_ [class*=\"socrata-icon-\"], ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU [class*=\"socrata-icon-\"], ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- [class*=\"socrata-icon-\"] {\n    position: relative; }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-link_37C5S {\n  color: #2279a6;\n  text-decoration: none;\n  padding: 0;\n  display: inline;\n  border: 0;\n  background: transparent; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-link_37C5S:hover {\n    text-decoration: underline; }\n\n/* Makes btn full width. */\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-block_2GChv {\n  width: 100%; }\n\n/* Adds a spinner in place of button text. */\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP {\n  cursor: progress;\n  border: solid 1px transparent;\n  position: relative; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP:disabled, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP span {\n    -webkit-animation: _-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spin_32zQd 0.9s linear infinite;\n    animation: _-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spin_32zQd 0.9s linear infinite;\n    border: 3px solid;\n    border-radius: 60%;\n    display: inline-block;\n    width: 2rem;\n    height: 2rem; }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU {\n  color: #767676;\n  background-color: #fff;\n  border-color: #c8c8c8; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb:hover, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N:hover, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU:hover, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb:focus, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N:focus, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU:focus {\n    color: #6a6a6a;\n    background-color: #f1f1f1; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT {\n      border-color: transparent;\n      background-color: white;\n      color: #767676;\n      -webkit-transition: border-color 0.35s;\n      transition: border-color 0.35s; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa {\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb:active, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N:active, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU:active, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU {\n    border-color: #cccccc;\n    background-color: #f1f1f1;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb:active._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N:active._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU:active._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU {\n      border-color: transparent;\n      background-color: white;\n      color: #767676;\n      -webkit-transition: border-color 0.35s;\n      transition: border-color 0.35s; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb:disabled, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N:disabled, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU:disabled, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled-light_18F3A, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled-light_18F3A._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled-light_18F3A._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU {\n    background-color: #f6f6f6;\n    color: #c8c8c8;\n    border-color: #e4e4e4; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU {\n    -webkit-box-shadow: inset 0 0 10px -2px #888;\n            box-shadow: inset 0 0 10px -2px #888; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU {\n    color: #fff;\n    background-color: transparent;\n    border-color: #fff; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU {\n    color: #fff;\n    background-color: #767676;\n    border-color: #767676; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP span, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N span, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU span {\n    border-color: #fff;\n    border-right-color: #adadad; }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N {\n  color: #5e5e5e;\n  background-color: #f1f1f1; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N:hover, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N:focus {\n    background-color: #e4e4e4;\n    color: #5e5e5e; }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-primary_20ygx, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- {\n  color: #fff;\n  background-color: #2279a6;\n  border-color: #288dc1;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-primary_20ygx:hover, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f-:hover, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-primary_20ygx:focus, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f-:focus {\n    background-color: #1d678d; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-primary_20ygx:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f-:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-primary_20ygx:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f-:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT {\n      color: #fff;\n      background-color: #2279a6; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-primary_20ygx:active, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f-:active, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-primary_20ygx._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- {\n    border-color: #247fae;\n    background-color: #1d678d;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-primary_20ygx:disabled, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f-:disabled, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-primary_20ygx._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-primary_20ygx:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f-:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-primary_20ygx._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-primary_20ygx._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- {\n    color: #2279a6;\n    background-color: #fff; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-primary_20ygx._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- {\n      color: #474747;\n      border-color: #919191;\n      background-color: #c8c8c8;\n      cursor: not-allowed; }\n      ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-primary_20ygx._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- {\n        color: #919191;\n        border-color: #767676;\n        background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-primary_20ygx._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP span, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- span {\n    border-right-color: #53a4cd; }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb {\n  color: #fff;\n  background-color: #00717c;\n  border-color: #00a1af;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb:hover, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb:focus {\n    background-color: #005a63;\n    color: #fff; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT {\n      color: #fff;\n      background-color: #00717c; }\n      ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT:disabled, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT:disabled, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck {\n        color: #474747;\n        border-color: #919191;\n        background-color: #c8c8c8;\n        cursor: not-allowed; }\n        ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa {\n          color: #919191;\n          border-color: #767676;\n          background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb:active, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai {\n    border-color: #00919e;\n    background-color: #005a63;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT {\n    color: #00717c;\n    background-color: #fff; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb:disabled, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP span {\n    border-right-color: #33b4bf; }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt {\n  color: #fff;\n  background-color: #00be9b;\n  border-color: #00be9b;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt:hover, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt:focus {\n    background-color: #00987c; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT {\n      color: #fff;\n      background-color: #00be9b; }\n      ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT:disabled, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT:disabled, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck {\n        color: #474747;\n        border-color: #919191;\n        background-color: #c8c8c8;\n        cursor: not-allowed; }\n        ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa {\n          color: #919191;\n          border-color: #767676;\n          background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt:active, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai {\n    border-color: #00ab8c;\n    background-color: #00987c;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt:disabled, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT {\n    color: #00be9b;\n    background-color: #fff; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP span {\n    border-right-color: #33cbaf; }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-warning_MHuxH {\n  color: #fff;\n  background-color: #e6af00;\n  border-color: #e6af00; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-warning_MHuxH:hover, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-warning_MHuxH:focus {\n    background-color: #b88c00; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-warning_MHuxH:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-warning_MHuxH:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT {\n      color: #fff;\n      background-color: #e6af00; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-warning_MHuxH:active, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-warning_MHuxH._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai {\n    border-color: #cf9e00;\n    background-color: #b88c00;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-warning_MHuxH:disabled, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-warning_MHuxH._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-warning_MHuxH:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-warning_MHuxH._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-warning_MHuxH:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-warning_MHuxH._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-warning_MHuxH._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT {\n    color: #e6af00;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-success_3u4xy {\n  color: #fff;\n  background-color: #2baf5f;\n  border-color: #2baf5f; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-success_3u4xy:hover, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-success_3u4xy:focus {\n    cursor: default; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-success_3u4xy:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-success_3u4xy:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT {\n      color: #fff;\n      background-color: #2baf5f; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-success_3u4xy:active, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-success_3u4xy._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai {\n    border-color: #279d56;\n    background-color: #228c4c;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-success_3u4xy:disabled, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-success_3u4xy._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-success_3u4xy:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-success_3u4xy._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-success_3u4xy:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-success_3u4xy._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-success_3u4xy._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT {\n    color: #259652;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-error_2ykK_ {\n  color: #fff;\n  background-color: #ce6565;\n  border-color: #ce6565; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-error_2ykK_:hover, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-error_2ykK_:focus {\n    background-color: #a55151; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-error_2ykK_:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-error_2ykK_:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT {\n      color: #fff;\n      background-color: #ce6565; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-error_2ykK_:active, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-error_2ykK_._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai {\n    border-color: #b95b5b;\n    background-color: #a55151;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-error_2ykK_:disabled, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-error_2ykK_._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-error_2ykK_:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-error_2ykK_._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-error_2ykK_:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-error_2ykK_._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-error_2ykK_._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT {\n    color: #ce6565;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-transparent_2HiYm,\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-transparent_2HiYm:hover,\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-transparent_2HiYm:active,\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-transparent_2HiYm:focus,\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-transparent_2HiYm:disabled {\n  border-color: transparent;\n  background-color: transparent; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-transparent_2HiYm._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP,\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-transparent_2HiYm:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP,\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-transparent_2HiYm:active._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP,\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-transparent_2HiYm:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP,\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-transparent_2HiYm:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP {\n    cursor: progress; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-transparent_2HiYm._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP span,\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-transparent_2HiYm:hover._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP span,\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-transparent_2HiYm:active._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP span,\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-transparent_2HiYm:focus._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP span,\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-transparent_2HiYm:disabled._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP span {\n      border-color: #5e5e5e;\n      border-right-color: #adadad; }\n\n._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt {\n  position: relative;\n  min-height: 110px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-detail_19QCE {\n    clear: both; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-dataset_2IZBv {\n    color: #288dc1;\n    display: inline-block;\n    font-size: 12px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-name_3rRfH {\n    color: #2c2c2c;\n    display: inline-block;\n    float: left;\n    font-size: 16px;\n    font-weight: bold;\n    text-transform: capitalize;\n    width: 95%; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-query_3aUs9 {\n    font-size: 11px;\n    color: #288dc1; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-dataset_2IZBv,\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-query_3aUs9 {\n    text-decoration: none; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-dataset_2IZBv:hover,\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-query_3aUs9:hover {\n      text-decoration: underline; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt .icon-checkmark3 {\n    font-size: 16px;\n    line-height: 0.6 !important; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt .fake-checkbox {\n    padding: 0;\n    height: 20px;\n    width: 20px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt .checkbox input[type=checkbox] {\n    position: absolute; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt td {\n    vertical-align: top; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-info_3PjdT span {\n    background-color: #eaf4f9;\n    border-radius: 5px;\n    color: #2c2c2c;\n    display: block;\n    font-size: 14px;\n    padding: 8px;\n    width: 100%;\n    margin-top: 20px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-info_3PjdT._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_error_t1sMX span {\n    color: #ce6565; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-info_3PjdT hr {\n    border: 1px solid #f1f1f1; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_myalert-table_3Xrit {\n    padding: 20px 0 20px 0;\n    border-collapse: collapse;\n    border-spacing: 0;\n    min-width: 100%;\n    width: 100%; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_myalert-table_3Xrit th:nth-child(1) {\n      padding-left: 3px; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_myalert-table_3Xrit th, ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_myalert-table_3Xrit td {\n      border-bottom: 1px solid #e4e4e4;\n      border-left: 0;\n      border-right: 0;\n      padding: 10px 10px 10px 0; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_myalert-table_3Xrit tr:first-child > td {\n      border-top: none; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_myalert-table_3Xrit td:nth-child(1) {\n      padding-top: 10px;\n      vertical-align: top;\n      padding-left: 3px;\n      width: 6%; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-paused_2Ft1a td:nth-child(1) {\n    padding-top: 37px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-paused_2Ft1a ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_paused_3G-iU {\n    padding: 5px;\n    background-color: #fcf9ef;\n    border: 1px solid #e4ad39; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-paused_2Ft1a ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_paused_3G-iU ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_paused-title_34bIB {\n      color: #a48953;\n      font-size: 12px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-container_1LdOq ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-share_1Vy-R {\n    color: #2279a6;\n    cursor: pointer;\n    float: right; }\n    ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-container_1LdOq ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-share_1Vy-R ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_socrata-icon_3Io75 {\n      height: 16px;\n      width: 16px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pull-right_31h8H {\n    float: right; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f-:hover:not(:disabled) {\n    color: #fff; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f-:focus {\n    color: #fff; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU,\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f- {\n    display: inline-block;\n    font-size: 12px;\n    margin-left: 5px;\n    padding: 5px 10px;\n    text-align: center;\n    width: 70px; }\n  ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt ._-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_myalert-footer_3Sghq {\n    font-size: 14px;\n    color: #2c2c2c; }\n", ""]);
// Exports
exports.locals = {
	"unstyled-link": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_unstyled-link_oPnXh",
	"h1": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h1_O9XNw",
	"h2": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h2_8qZAe",
	"h3": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h3_2NIo_",
	"h4": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h4_1m8dX",
	"h5": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h5_2kN8L",
	"h6": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_h6_31zye",
	"intro": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_intro_LhHS0",
	"small": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_small_1qiQA",
	"x-small": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_x-small_5uwzA",
	"quiet": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_quiet_3Fx39",
	"spinner-default": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-default_1dZaV",
	"spin": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spin_32zQd",
	"spinner-dark": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-dark_2HuHs",
	"spinner-large": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-large_1V_Lc",
	"spinner-btn-primary": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-btn-primary_1a43e",
	"alert": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert_2xHuy",
	"info": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_info_3WraR",
	"notice": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_notice_1vx-z",
	"success": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_success_12Rno",
	"warning": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_warning_1rvPV",
	"error": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_error_t1sMX",
	"alert-full-width-top": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-full-width-top_2vXF4",
	"alert-full-width-bottom": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-full-width-bottom_431Qz",
	"btn": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn_2ZJ7_",
	"my-alerts-content": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-content_1sYMt",
	"delete-button": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_delete-button_3L4CU",
	"pause-button": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pause-button_2T3f-",
	"spinner-container": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_spinner-container_1bH7x",
	"btn-lg": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-lg_1qW3H",
	"btn-sm": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-sm_1EtHI",
	"btn-xs": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-xs_2tHgh",
	"btn-link": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-link_37C5S",
	"btn-block": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-block_2GChv",
	"btn-busy": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-busy_I3uwP",
	"btn-disabled": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled_2geck",
	"btn-dark": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-dark_3HMYa",
	"btn-default": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-default_1Vtnb",
	"btn-simple": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-simple_1RR5N",
	"btn-inverse": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-inverse_2J6VT",
	"active": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_active_2X9ai",
	"btn-disabled-light": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-disabled-light_18F3A",
	"btn-primary": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-primary_20ygx",
	"btn-alternate-2": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-2_1t9yb",
	"btn-alternate-3": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-alternate-3_3ekpt",
	"btn-warning": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-warning_MHuxH",
	"btn-success": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-success_3u4xy",
	"btn-error": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-error_2ykK_",
	"btn-transparent": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_btn-transparent_2HiYm",
	"alert-detail": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-detail_19QCE",
	"alert-dataset": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-dataset_2IZBv",
	"alert-name": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-name_3rRfH",
	"alert-query": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-query_3aUs9",
	"alert-info": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-info_3PjdT",
	"myalert-table": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_myalert-table_3Xrit",
	"my-alerts-paused": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_my-alerts-paused_2Ft1a",
	"paused": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_paused_3G-iU",
	"paused-title": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_paused-title_34bIB",
	"alert-container": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-container_1LdOq",
	"alert-share": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_alert-share_1Vy-R",
	"socrata-icon": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_socrata-icon_3Io75",
	"pull-right": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_pull-right_31h8H",
	"myalert-footer": "_-_-_-common-notifications-components-AlertSettingModal-MyAlerts-_myAlerts-module_myalert-footer_3Sghq"
};

/***/ }),

/***/ 2953:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// Module
exports.push([module.i, "/* https://css-tricks.com/snippets/sass/tint-shade-functions/ */\n/* Base Palette Colors */\n/* Colors light version */\n/* Colors dark version */\n/* Greys */\n/* Shades of Grey */\n/* Text colors */\n/* Background colors */\n/* Button Colors */\n/* Header */\n/* Settings Panel */\n/* Backgrounds */\n/* Notifications Panel */\n/* Map Layers Pane */\n/**\n * Clearfix\n *\n * For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    contenteditable attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that are clearfixed.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n *\n * Source: http://nicolasgallagher.com/micro-clearfix-hack/\n */\n/**\n * Offscreen. Hide text in UI, but keep in document. Accessibiity +1\n *\n*/\na._-_-_-common-notifications-components-NotificationList-_panel-footer-module_unstyled-link_35w2A {\n  color: #2279a6;\n  text-decoration: none; }\n  a._-_-_-common-notifications-components-NotificationList-_panel-footer-module_unstyled-link_35w2A:hover {\n    text-decoration: underline; }\n\n/*\n * All of the headings. Additional \"heaing classes\" are used to style\n * type in contexts where the heading style and semantics don't align.\n */\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_h1_29Vdf,\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_h2_3Sb3E,\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_h3_1rq62,\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_h4_3cbeC,\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_h5_321VP,\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_h6_1mzXH {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  font-size: 100%;\n  letter-spacing: -0.3px;\n  font-weight: 600; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_h1_29Vdf {\n  font-size: ms(5); }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_h2_3Sb3E {\n  font-size: ms(4); }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_h3_1rq62 {\n  font-size: ms(3); }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_h4_3cbeC {\n  font-size: ms(2); }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_h5_321VP {\n  font-size: ms(1); }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_h6_1mzXH {\n  font-size: ms(0); }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_intro_18nu3 {\n  font-size: ms(1);\n  font-weight: 200; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_small_2dX9F {\n  font-size: ms(-1); }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_x-small_HqT-i {\n  font-size: ms(-3); }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_quiet_2h7Fk {\n  color: #767676; }\n\n/* Buttons */\n@-webkit-keyframes _-_-_-common-notifications-components-NotificationList-_panel-footer-module_spin_WuM48 {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes _-_-_-common-notifications-components-NotificationList-_panel-footer-module_spin_WuM48 {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_spinner-default_ALYEe {\n  -webkit-animation: _-_-_-common-notifications-components-NotificationList-_panel-footer-module_spin_WuM48 0.9s linear infinite;\n  animation: _-_-_-common-notifications-components-NotificationList-_panel-footer-module_spin_WuM48 0.9s linear infinite;\n  border: 3px solid #288dc1;\n  border-right-color: #eaf4f9;\n  border-radius: 50%;\n  display: inline-block;\n  width: ms(1);\n  height: ms(1); }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_spinner-default_ALYEe._-_-_-common-notifications-components-NotificationList-_panel-footer-module_spinner-dark_23IHb {\n    border-color: #eaf4f9;\n    border-right-color: #288dc1; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_spinner-default_ALYEe._-_-_-common-notifications-components-NotificationList-_panel-footer-module_spinner-large_QTA0g {\n    border-width: 8px;\n    width: 64px;\n    height: 64px; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_spinner-btn-primary_33R3b {\n  border-color: #fff;\n  border-right-color: #20719a; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_alert_1XIlO {\n  background-color: #f6f6f6;\n  border: 1px solid #c8c8c8;\n  font-size: ms(0);\n  padding: ms(-2);\n  border-radius: 1px;\n  color: #5e5e5e; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_alert_1XIlO._-_-_-common-notifications-components-NotificationList-_panel-footer-module_small_2dX9F {\n    text-align: center;\n    font-size: 12px; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_alert_1XIlO._-_-_-common-notifications-components-NotificationList-_panel-footer-module_info_1fTwj, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_alert_1XIlO._-_-_-common-notifications-components-NotificationList-_panel-footer-module_notice_2cBNm {\n    background-color: #eaf4f9;\n    border-color: #288dc1;\n    color: #1c6387; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_alert_1XIlO._-_-_-common-notifications-components-NotificationList-_panel-footer-module_success_sffwa {\n    background-color: #eaf7ef;\n    border-color: #2baf5f;\n    color: #177b41; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_alert_1XIlO._-_-_-common-notifications-components-NotificationList-_panel-footer-module_warning_1A-6D {\n    background-color: #fdf9ed;\n    border-color: #e6af00;\n    color: #8a6900; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_alert_1XIlO._-_-_-common-notifications-components-NotificationList-_panel-footer-module_error_2JR5x {\n    background-color: #faf0f0;\n    border-color: #ce6565;\n    color: #914646; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_alert_1XIlO._-_-_-common-notifications-components-NotificationList-_panel-footer-module_alert-full-width-top_3BIom {\n    border-top: 0;\n    border-left: 0;\n    border-right: 0; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_alert_1XIlO._-_-_-common-notifications-components-NotificationList-_panel-footer-module_alert-full-width-bottom_2m03a {\n    border-bottom: 0;\n    border-left: 0;\n    border-right: 0; }\n\n@keyframes _-_-_-common-notifications-components-NotificationList-_panel-footer-module_spin_WuM48 {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn_2oVVx {\n  display: inline-block;\n  padding: ms(-3) ms(0);\n  border-radius: 1px;\n  font-size: ms(0);\n  border: solid 1px transparent;\n  -webkit-transition: color 0.2s, background-color 0.2s;\n  transition: color 0.2s, background-color 0.2s;\n  cursor: pointer;\n  text-decoration: none;\n  letter-spacing: 0; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn_2oVVx ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_spinner-container_3PWxu {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    bottom: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn_2oVVx ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_spinner-default_ALYEe {\n    width: 1.5rem;\n    height: 1.5rem;\n    border-width: 3px; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn_2oVVx._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-lg_3g_0u {\n    font-size: ms(1);\n    padding: ms(-2) ms(1); }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn_2oVVx._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-lg_3g_0u ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_spinner-default_ALYEe {\n      width: 1rem;\n      height: 1rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn_2oVVx._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-sm_tRg-Q {\n    font-size: ms(-1);\n    padding: ms(-6) ms(-1); }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn_2oVVx._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-sm_tRg-Q ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_spinner-default_ALYEe {\n      width: 0.85rem;\n      height: 0.85rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn_2oVVx._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-xs_31WyN {\n    font-size: ms(-2);\n    padding: ms(-8) ms(-1); }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn_2oVVx._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-xs_31WyN ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_spinner-default_ALYEe {\n      width: 0.75rem;\n      height: 0.75rem;\n      border-width: 2px; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn_2oVVx [class*=\"socrata-icon-\"] {\n    position: relative; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-link_2zdHg {\n  color: #2279a6;\n  text-decoration: none;\n  padding: 0;\n  display: inline;\n  border: 0;\n  background: transparent; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-link_2zdHg:hover {\n    text-decoration: underline; }\n\n/* Makes btn full width. */\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-block_2KfI3 {\n  width: 100%; }\n\n/* Adds a spinner in place of button text. */\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T {\n  cursor: progress;\n  border: solid 1px transparent;\n  position: relative; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T:disabled, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T span {\n    -webkit-animation: _-_-_-common-notifications-components-NotificationList-_panel-footer-module_spin_WuM48 0.9s linear infinite;\n    animation: _-_-_-common-notifications-components-NotificationList-_panel-footer-module_spin_WuM48 0.9s linear infinite;\n    border: 3px solid;\n    border-radius: 60%;\n    display: inline-block;\n    width: 2rem;\n    height: 2rem; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY {\n  color: #767676;\n  background-color: #fff;\n  border-color: #c8c8c8; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe:hover, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY:hover, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe:focus, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY:focus {\n    color: #6a6a6a;\n    background-color: #f1f1f1; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G {\n      border-color: transparent;\n      background-color: white;\n      color: #767676;\n      -webkit-transition: border-color 0.35s;\n      transition: border-color 0.35s; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb {\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe:active, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY:active, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe._-_-_-common-notifications-components-NotificationList-_panel-footer-module_active_10hfw, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_active_10hfw._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY {\n    border-color: #cccccc;\n    background-color: #f1f1f1;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe:active._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY:active._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe._-_-_-common-notifications-components-NotificationList-_panel-footer-module_active_10hfw._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_active_10hfw._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY {\n      border-color: transparent;\n      background-color: white;\n      color: #767676;\n      -webkit-transition: border-color 0.35s;\n      transition: border-color 0.35s; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe:disabled, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY:disabled, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled-light_w0vio, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled-light_w0vio._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY {\n    background-color: #f6f6f6;\n    color: #c8c8c8;\n    border-color: #e4e4e4; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe._-_-_-common-notifications-components-NotificationList-_panel-footer-module_active_10hfw, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_active_10hfw._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY {\n    -webkit-box-shadow: inset 0 0 10px -2px #888;\n            box-shadow: inset 0 0 10px -2px #888; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY {\n    color: #fff;\n    background-color: transparent;\n    border-color: #fff; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY {\n    color: #fff;\n    background-color: #767676;\n    border-color: #767676; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T span, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY span {\n    border-color: #fff;\n    border-right-color: #adadad; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY {\n  color: #5e5e5e;\n  background-color: #f1f1f1; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY:hover, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY:focus {\n    background-color: #e4e4e4;\n    color: #5e5e5e; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-primary_33BwR {\n  color: #fff;\n  background-color: #2279a6;\n  border-color: #288dc1;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-primary_33BwR:hover, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-primary_33BwR:focus {\n    background-color: #1d678d; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-primary_33BwR:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-primary_33BwR:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G {\n      color: #fff;\n      background-color: #2279a6; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-primary_33BwR:active, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-primary_33BwR._-_-_-common-notifications-components-NotificationList-_panel-footer-module_active_10hfw {\n    border-color: #247fae;\n    background-color: #1d678d;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-primary_33BwR:disabled, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-primary_33BwR._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-primary_33BwR:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-primary_33BwR._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-primary_33BwR._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G {\n    color: #2279a6;\n    background-color: #fff; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-primary_33BwR._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G {\n      color: #474747;\n      border-color: #919191;\n      background-color: #c8c8c8;\n      cursor: not-allowed; }\n      ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-primary_33BwR._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb {\n        color: #919191;\n        border-color: #767676;\n        background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-primary_33BwR._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T span {\n    border-right-color: #53a4cd; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT {\n  color: #fff;\n  background-color: #00717c;\n  border-color: #00a1af;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT:hover, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT:focus {\n    background-color: #005a63;\n    color: #fff; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G {\n      color: #fff;\n      background-color: #00717c; }\n      ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G:disabled, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G:disabled, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G {\n        color: #474747;\n        border-color: #919191;\n        background-color: #c8c8c8;\n        cursor: not-allowed; }\n        ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb {\n          color: #919191;\n          border-color: #767676;\n          background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT:active, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT._-_-_-common-notifications-components-NotificationList-_panel-footer-module_active_10hfw {\n    border-color: #00919e;\n    background-color: #005a63;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G {\n    color: #00717c;\n    background-color: #fff; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT:disabled, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T span {\n    border-right-color: #33b4bf; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm {\n  color: #fff;\n  background-color: #00be9b;\n  border-color: #00be9b;\n  /* .btn-dark is used in both contexts. */ }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm:hover, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm:focus {\n    background-color: #00987c; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G {\n      color: #fff;\n      background-color: #00be9b; }\n      ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G:disabled, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G:disabled, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G {\n        color: #474747;\n        border-color: #919191;\n        background-color: #c8c8c8;\n        cursor: not-allowed; }\n        ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb {\n          color: #919191;\n          border-color: #767676;\n          background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm:active, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm._-_-_-common-notifications-components-NotificationList-_panel-footer-module_active_10hfw {\n    border-color: #00ab8c;\n    background-color: #00987c;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm:disabled, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G {\n    color: #00be9b;\n    background-color: #fff; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T span {\n    border-right-color: #33cbaf; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-warning_1AB2c {\n  color: #fff;\n  background-color: #e6af00;\n  border-color: #e6af00; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-warning_1AB2c:hover, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-warning_1AB2c:focus {\n    background-color: #b88c00; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-warning_1AB2c:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-warning_1AB2c:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G {\n      color: #fff;\n      background-color: #e6af00; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-warning_1AB2c:active, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-warning_1AB2c._-_-_-common-notifications-components-NotificationList-_panel-footer-module_active_10hfw {\n    border-color: #cf9e00;\n    background-color: #b88c00;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-warning_1AB2c:disabled, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-warning_1AB2c._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-warning_1AB2c:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-warning_1AB2c._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-warning_1AB2c:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-warning_1AB2c._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-warning_1AB2c._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G {\n    color: #e6af00;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-success_1vh2A {\n  color: #fff;\n  background-color: #2baf5f;\n  border-color: #2baf5f; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-success_1vh2A:hover, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-success_1vh2A:focus {\n    cursor: default; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-success_1vh2A:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-success_1vh2A:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G {\n      color: #fff;\n      background-color: #2baf5f; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-success_1vh2A:active, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-success_1vh2A._-_-_-common-notifications-components-NotificationList-_panel-footer-module_active_10hfw {\n    border-color: #279d56;\n    background-color: #228c4c;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-success_1vh2A:disabled, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-success_1vh2A._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-success_1vh2A:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-success_1vh2A._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-success_1vh2A:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-success_1vh2A._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-success_1vh2A._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G {\n    color: #259652;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-error_2QMPd {\n  color: #fff;\n  background-color: #ce6565;\n  border-color: #ce6565; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-error_2QMPd:hover, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-error_2QMPd:focus {\n    background-color: #a55151; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-error_2QMPd:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-error_2QMPd:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G {\n      color: #fff;\n      background-color: #ce6565; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-error_2QMPd:active, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-error_2QMPd._-_-_-common-notifications-components-NotificationList-_panel-footer-module_active_10hfw {\n    border-color: #b95b5b;\n    background-color: #a55151;\n    -webkit-box-shadow: inset 0 0 10px -2px #2c2c2c;\n            box-shadow: inset 0 0 10px -2px #2c2c2c; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-error_2QMPd:disabled, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-error_2QMPd._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G {\n    color: #474747;\n    border-color: #919191;\n    background-color: #c8c8c8;\n    cursor: not-allowed; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-error_2QMPd:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-error_2QMPd._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb {\n      color: #919191;\n      border-color: #767676;\n      background-color: #5e5e5e; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-error_2QMPd:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-error_2QMPd._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G {\n      background-color: inherit; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-error_2QMPd._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G {\n    color: #ce6565;\n    background-color: #fff; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-transparent_21obO,\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-transparent_21obO:hover,\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-transparent_21obO:active,\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-transparent_21obO:focus,\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-transparent_21obO:disabled {\n  border-color: transparent;\n  background-color: transparent; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-transparent_21obO._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T,\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-transparent_21obO:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T,\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-transparent_21obO:active._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T,\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-transparent_21obO:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T,\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-transparent_21obO:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T {\n    cursor: progress; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-transparent_21obO._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T span,\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-transparent_21obO:hover._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T span,\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-transparent_21obO:active._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T span,\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-transparent_21obO:focus._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T span,\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-transparent_21obO:disabled._-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T span {\n      border-color: #5e5e5e;\n      border-right-color: #adadad; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_footer-bar_1ld-Z {\n  background-color: #4c545d;\n  height: 46px;\n  padding: 8px 10px;\n  position: relative;\n  text-align: center;\n  z-index: 1; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_footer-bar_1ld-Z ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_primary-button_1Et3j,\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_footer-bar_1ld-Z ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_cancel-button_3BhE3 {\n    cursor: pointer;\n    font-size: 13px;\n    font-weight: 400;\n    height: 30px;\n    line-height: 30px;\n    max-width: calc(50% - 5px);\n    overflow: hidden;\n    padding: 0 15px;\n    text-transform: capitalize;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_footer-bar_1ld-Z ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_primary-button_1Et3j {\n    background-color: #15587d;\n    border: 0 none;\n    border-radius: 2px;\n    color: #fff; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_footer-bar_1ld-Z ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_primary-button_1Et3j:hover, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_footer-bar_1ld-Z ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_primary-button_1Et3j:focus {\n      background-color: #124e6f; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_footer-bar_1ld-Z ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_primary-button_1Et3j[disabled] {\n      cursor: not-allowed;\n      opacity: 0.5; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_footer-bar_1ld-Z ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_cancel-button_3BhE3 {\n    margin-right: 5px; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_buttons-wrapper_3ypeL {\n  position: relative;\n  text-align: left; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_prompt-buttons-wrapper_3iYp0 {\n  float: right; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_prompt-buttons-wrapper_3iYp0 button {\n    float: left;\n    min-width: 60px; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_inline-prompt_1MoSC {\n  background-color: #fff;\n  border-radius: 5px;\n  bottom: 56px;\n  -webkit-box-shadow: 0 0 1px 1px #ccc;\n          box-shadow: 0 0 1px 1px #ccc;\n  color: #696869;\n  left: 0;\n  padding: 10px;\n  position: absolute;\n  right: 0;\n  white-space: normal; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_inline-prompt_1MoSC:before, ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_inline-prompt_1MoSC:after {\n    border-color: transparent;\n    border-style: solid;\n    content: '';\n    height: 0;\n    position: absolute;\n    width: 0; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_inline-prompt_1MoSC:before {\n    border-top-color: rgba(204, 204, 204, 0.15);\n    border-width: 17px 12px 0;\n    bottom: -17px;\n    left: 24px;\n    z-index: 0; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_inline-prompt_1MoSC:after {\n    border-top-color: #fff;\n    border-width: 15px 10px 0;\n    bottom: -15px;\n    left: 26px;\n    z-index: 1; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_inline-prompt_1MoSC p {\n    font-size: 12px;\n    margin: 0 0 5px; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_inline-prompt_1MoSC ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_heading-text_2CfaI {\n    font-size: 13px;\n    font-weight: 600; }\n\n._-_-_-common-notifications-components-NotificationList-_panel-footer-module_setting-button_2aTz_ {\n  color: #fff;\n  cursor: pointer;\n  float: right;\n  height: 30px;\n  max-width: calc(50% - 5px);\n  padding: 5px !important;\n  text-decoration: none; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_setting-button_2aTz_ em {\n    display: inline-block;\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 400;\n    margin-left: 5px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    vertical-align: top;\n    white-space: nowrap; }\n  ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_setting-button_2aTz_ .socrata-icon {\n    color: #999;\n    fill: #999;\n    height: 17px;\n    width: 17px;\n    bottom: 2px; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_setting-button_2aTz_ .socrata-icon svg {\n      height: 17px;\n      width: 17px; }\n      ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_setting-button_2aTz_ .socrata-icon svg,\n      ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_setting-button_2aTz_ .socrata-icon svg * {\n        color: #999;\n        fill: #999; }\n    ._-_-_-common-notifications-components-NotificationList-_panel-footer-module_setting-button_2aTz_ .socrata-icon:before {\n      display: none; }\n", ""]);
// Exports
exports.locals = {
	"unstyled-link": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_unstyled-link_35w2A",
	"h1": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_h1_29Vdf",
	"h2": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_h2_3Sb3E",
	"h3": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_h3_1rq62",
	"h4": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_h4_3cbeC",
	"h5": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_h5_321VP",
	"h6": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_h6_1mzXH",
	"intro": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_intro_18nu3",
	"small": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_small_2dX9F",
	"x-small": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_x-small_HqT-i",
	"quiet": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_quiet_2h7Fk",
	"spinner-default": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_spinner-default_ALYEe",
	"spin": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_spin_WuM48",
	"spinner-dark": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_spinner-dark_23IHb",
	"spinner-large": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_spinner-large_QTA0g",
	"spinner-btn-primary": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_spinner-btn-primary_33R3b",
	"alert": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_alert_1XIlO",
	"info": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_info_1fTwj",
	"notice": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_notice_2cBNm",
	"success": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_success_sffwa",
	"warning": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_warning_1A-6D",
	"error": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_error_2JR5x",
	"alert-full-width-top": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_alert-full-width-top_3BIom",
	"alert-full-width-bottom": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_alert-full-width-bottom_2m03a",
	"btn": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn_2oVVx",
	"spinner-container": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_spinner-container_3PWxu",
	"btn-lg": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-lg_3g_0u",
	"btn-sm": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-sm_tRg-Q",
	"btn-xs": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-xs_31WyN",
	"btn-link": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-link_2zdHg",
	"btn-block": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-block_2KfI3",
	"btn-busy": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-busy_1VJ7T",
	"btn-disabled": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled_1Lf-G",
	"btn-dark": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-dark_bilhb",
	"btn-default": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-default_1taJe",
	"btn-simple": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-simple_2lFAY",
	"btn-inverse": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-inverse_2651G",
	"active": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_active_10hfw",
	"btn-disabled-light": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-disabled-light_w0vio",
	"btn-primary": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-primary_33BwR",
	"btn-alternate-2": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-2_2ZTdT",
	"btn-alternate-3": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-alternate-3_2uVqm",
	"btn-warning": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-warning_1AB2c",
	"btn-success": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-success_1vh2A",
	"btn-error": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-error_2QMPd",
	"btn-transparent": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_btn-transparent_21obO",
	"footer-bar": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_footer-bar_1ld-Z",
	"primary-button": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_primary-button_1Et3j",
	"cancel-button": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_cancel-button_3BhE3",
	"buttons-wrapper": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_buttons-wrapper_3ypeL",
	"prompt-buttons-wrapper": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_prompt-buttons-wrapper_3iYp0",
	"inline-prompt": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_inline-prompt_1MoSC",
	"heading-text": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_heading-text_2CfaI",
	"setting-button": "_-_-_-common-notifications-components-NotificationList-_panel-footer-module_setting-button_2aTz_"
};

/***/ }),

/***/ 3337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /tmp/frontend/node_modules/lodash/lodash.js
var lodash = __webpack_require__(1);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// EXTERNAL MODULE: /tmp/frontend/node_modules/react/react.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /tmp/frontend/node_modules/react-dom/index.js
var react_dom = __webpack_require__(34);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: /mnt/workspace/common/js_utils/sift.js
var sift = __webpack_require__(198);

// EXTERNAL MODULE: /mnt/workspace/common/js_utils/getCsrfToken.js
var getCsrfToken = __webpack_require__(529);

// CONCATENATED MODULE: /mnt/workspace/common/most_recently_used/index.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/* Usage:
 *   assetManagerMru = new MostRecentlyUsed({ namespace: 'socrata:assets:mru:user_id', maxItems: 10 });
 *   assetManagerMru.add('four-4444');
 *   assetManagerMru.get(); // Returns all items
 *
 * Required arguments:
 *   namespace - This is the key used to store the MRU data in localStorage.
 *
 * Default arguments:
 *   maxItems - When at capacity, oldest item will be removed when new item is added.
 *   maxAge - When set() is called, items older than maxAge are be removed.
 *
 * Optional arguments:
 *   logger - A function that will be called to log MRU operations.
 */

var DEFAULT_MAX_ITEMS = 30;
var DEFAULT_MAX_AGE = 60 * 60 * 24 * 7 * 1000; // One week

var VERSION = 1.0;

var most_recently_used_MostRecentlyUsed =
/*#__PURE__*/
function () {
  function MostRecentlyUsed(_ref) {
    var namespace = _ref.namespace,
        _ref$maxItems = _ref.maxItems,
        maxItems = _ref$maxItems === void 0 ? DEFAULT_MAX_ITEMS : _ref$maxItems,
        _ref$maxAge = _ref.maxAge,
        maxAge = _ref$maxAge === void 0 ? DEFAULT_MAX_AGE : _ref$maxAge,
        _ref$logger = _ref.logger,
        logger = _ref$logger === void 0 ? null : _ref$logger;

    _classCallCheck(this, MostRecentlyUsed);

    if (!namespace) {
      var msg = 'A namespace argument is required.';
      console.error(msg); // eslint-disable-line no-console

      throw new Error(msg);
    }

    this.namespace = namespace;
    this.maxItems = maxItems;
    this.maxAge = maxAge;
    this.logger = logger;

    if (logger) {
      logger("MostRecentlyUsed.constructor: namespace = ".concat(namespace));
    }

    lodash_default.a.bindAll(this, 'removeExpiredEntries');
  }

  _createClass(MostRecentlyUsed, [{
    key: "_getMru",
    value: function _getMru() {
      try {
        return JSON.parse(localStorage.getItem(this.namespace) || '{}').content || {};
      } catch (err) {
        console.error('_getMru() encountered exception: ', err); // eslint-disable-line no-console
      }
    }
  }, {
    key: "_setMru",
    value: function _setMru(mru) {
      localStorage.setItem(this.namespace, JSON.stringify({
        content: mru,
        version: VERSION
      }));
    }
  }, {
    key: "_timestamp",
    value: function _timestamp() {
      return new Date().getTime();
    }
  }, {
    key: "add",
    value: function add(uid) {
      var collection = this._getMru();

      if (this.logger) {
        this.logger("MostRecentlyUsed.add: uid = ".concat(uid));
      }

      if (!collection[uid] && Object.keys(collection).length >= this.maxItems) {
        delete collection[lodash_default()(collection).toPairs().minBy(1)[0]]; // Delete oldest key - minBy(1) is timestamp
      }

      collection[uid] = this._timestamp();

      this._setMru(collection); // Prune the collection after each additional entry.


      setTimeout(this.removeExpiredEntries, 1);
    } // Returns a list of all items in the MRU. Passing a key returns the matching item or undefined.

  }, {
    key: "get",
    value: function get(key) {
      if (this.logger) {
        this.logger("MostRecentlyUsed.get: key = ".concat(key));
      }

      return arguments.length <= 0 ? this._getMru() : this._getMru()[key]; // eslint-disable-line prefer-rest-params
    }
  }, {
    key: "keys",
    value: function keys() {
      return lodash_default()(this._getMru()).toPairs().sortBy(1).reverse().fromPairs().keys().value();
    }
  }, {
    key: "count",
    value: function count() {
      var count = Object.keys(this._getMru()).length;

      if (this.logger) {
        this.logger("MostRecentlyUsed.count: ".concat(count));
      }

      return count;
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.logger) {
        this.logger('MostRecentlyUsed.reset');
      }

      this._setMru({});
    }
  }, {
    key: "removeExpiredEntries",
    value: function removeExpiredEntries() {
      var _this = this;

      var now = this._timestamp();

      var pruned = {};

      lodash_default.a.each(this._getMru(), function (storedTimestamp, key) {
        if (now - storedTimestamp <= _this.maxAge) {
          pruned[key] = storedTimestamp;
        }
      });

      if (this.logger) {
        this.logger("MostRecentlyUsed.removeExpiredEntries: new count = ".concat(Object.keys(pruned).length));
      }

      this._setMru(pruned);
    }
  }]);

  return MostRecentlyUsed;
}();


// EXTERNAL MODULE: /tmp/frontend/node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /tmp/frontend/node_modules/redux/es/index.js + 15 modules
var es = __webpack_require__(23);

// EXTERNAL MODULE: /tmp/frontend/node_modules/react-redux/es/index.js + 16 modules
var react_redux_es = __webpack_require__(4);

// EXTERNAL MODULE: /tmp/frontend/node_modules/url/url.js
var url = __webpack_require__(163);
var url_default = /*#__PURE__*/__webpack_require__.n(url);

// EXTERNAL MODULE: /tmp/frontend/node_modules/whatwg-fetch/fetch.js
var whatwg_fetch_fetch = __webpack_require__(132);

// EXTERNAL MODULE: /mnt/workspace/common/i18n/index.js + 1 modules
var i18n = __webpack_require__(3);

// CONCATENATED MODULE: /mnt/workspace/common/autocomplete/Util.js



var parsedCurrentUrl = null; // 'true' here means to parse the query string into an object

function parseCurrentUrl() {
  if (lodash_default.a.isEmpty(parsedCurrentUrl)) {
    parsedCurrentUrl = url_default.a.parse(window.location.href, true);
  }

  return parsedCurrentUrl;
}
/** Get the URL for performing the autocomplete search.
    If anonymous is true, redirect to the Open Data catalog. Else, redirect to SIAM. */


function getBrowseOrSIAMUrl(searchTerm) {
  var anonymous = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var currentUrl = parseCurrentUrl();
  var browseOrSIAMPath = anonymous ? '/browse' : '/admin/assets';
  var currentUrlIsBrowseOrSIAM = currentUrl.pathname.match(new RegExp("(/".concat(i18n["b" /* default */].locale, ")?\\").concat(browseOrSIAMPath)));

  if (!currentUrlIsBrowseOrSIAM) {
    var shouldPrefixLocale = new RegExp("^/(".concat(i18n["b" /* default */].locale, ")")).test(currentUrl.pathname);
    var browseOrSIAMPathWithLocalePrefix = "/".concat(i18n["b" /* default */].locale).concat(browseOrSIAMPath);
    currentUrl.pathname = shouldPrefixLocale ? browseOrSIAMPathWithLocalePrefix : browseOrSIAMPath;
  }

  currentUrl.query = {};
  currentUrl.query.q = searchTerm; // Browse expects different query params for sort ordering than SIAM.

  if (anonymous) {
    currentUrl.query.sortBy = 'relevance';
  } else {
    // SIAM's default sort (when a query is present) is relevance. Strip any existing sorts.
    delete currentUrl.query.orderColumn;
    delete currentUrl.query.orderDirection;
  } // New search means we should return to the first page


  delete currentUrl.query.page; // have to blank this out to make the 'query' object get used instead

  currentUrl.search = null;
  return url_default.a.format(currentUrl);
} // Get the URL for Cetera to perform the autocomplete search using the Rails proxy to cetera-ruby gem.

function getCeteraUrl(searchTerm, anonymous) {
  var ceteraUrl = url_default.a.parse('/cetera/autocomplete', true);
  var currentUrl = parseCurrentUrl();

  if (!lodash_default.a.isEmpty(currentUrl.query)) {
    ceteraUrl.query = currentUrl.query;
  }

  if (!lodash_default.a.isUndefined(anonymous)) {
    ceteraUrl.query.anonymous = anonymous.toString();
  }

  ceteraUrl.query.q = searchTerm;
  var formattedUrl = url_default.a.format(ceteraUrl);
  return formattedUrl;
}
var DEFAULT_NUMBER_OF_RESULTS = 7;
function getCeteraResults(searchTerm, callback, numberOfResults, anonymous) {
  if (lodash_default.a.isEmpty(searchTerm)) {
    return;
  }

  fetch(getCeteraUrl(searchTerm, anonymous), {
    credentials: 'same-origin'
  }).then(function (response) {
    return response.json();
  }).then(function (searchResults) {
    /*
      * We ask for way more results than we need, since each result isn't necessarily distinct
      * i.e. if you have 10 datasets called "Crime Data" and do a search that only asks for
      * top 10 results, you would only get back 1 result of "Crime Data".
      * So we ask for more than we need and only take the top n
      */
    var number = lodash_default.a.isEmpty(numberOfResults) ? DEFAULT_NUMBER_OF_RESULTS : numberOfResults;
    searchResults.results = lodash_default.a.take(searchResults.results, number);
    callback(searchResults);
  }, function (error) {
    return console.error('Failed to fetch data', error);
  })["catch"](function (ex) {
    return console.error('Error parsing JSON', ex);
  });
}
// EXTERNAL MODULE: /mnt/workspace/common/autocomplete/reducers/StatefulAutocompleteReducer.js
var StatefulAutocompleteReducer = __webpack_require__(517);

// CONCATENATED MODULE: /mnt/workspace/common/autocomplete/reducers/index.js


/* harmony default export */ var reducers = (Object(es["combineReducers"])({
  autocomplete: StatefulAutocompleteReducer["a" /* default */]
}));
// EXTERNAL MODULE: /mnt/workspace/common/autocomplete/components/Autocomplete.js + 4 modules
var Autocomplete = __webpack_require__(788);

// CONCATENATED MODULE: /mnt/workspace/common/autocomplete/components/StatefulAutocomplete.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function StatefulAutocomplete_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StatefulAutocomplete_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StatefulAutocomplete_createClass(Constructor, protoProps, staticProps) { if (protoProps) StatefulAutocomplete_defineProperties(Constructor.prototype, protoProps); if (staticProps) StatefulAutocomplete_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var StatefulAutocomplete_StatefulAutocomplete =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StatefulAutocomplete, _React$Component);

  function StatefulAutocomplete(props) {
    var _this;

    StatefulAutocomplete_classCallCheck(this, StatefulAutocomplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StatefulAutocomplete).call(this, props));
    var devToolsConfig = {
      actionsBlacklist: [],
      name: 'StatefulAutocomplete'
    };
    var _this$props$options = _this.props.options,
        collapsible = _this$props$options.collapsible,
        animate = _this$props$options.animate;
    var initialReduxState = {
      autocomplete: {
        query: '',
        collapsed: collapsible
      }
    }; // we only want to set the query to the current one if we're NOT collapsible and if we're animating
    // the appearance of the "clear search" icon, which the version used in the header bar does not have.

    if (collapsible === false && animate === true) {
      // grab the current search query from the URL
      var currentQuery = lodash_default.a.get(url_default.a.parse(window.location.href, true), 'query.q', '');

      if (lodash_default.a.isEmpty(initialReduxState.autocomplete.query) && !lodash_default.a.isEmpty(currentQuery)) {
        initialReduxState.autocomplete.query = currentQuery;
      }
    }

    _this.store = Object(es["createStore"])(reducers, initialReduxState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(devToolsConfig));
    return _this;
  }

  StatefulAutocomplete_createClass(StatefulAutocomplete, [{
    key: "render",
    value: function render() {
      var _this$props$options2 = this.props.options,
          getSearchResults = _this$props$options2.getSearchResults,
          millisecondsBeforeSearch = _this$props$options2.millisecondsBeforeSearch,
          anonymous = _this$props$options2.anonymous,
          collapsible = _this$props$options2.collapsible,
          animate = _this$props$options2.animate,
          mobile = _this$props$options2.mobile,
          onChooseResult = _this$props$options2.onChooseResult,
          onClearSearch = _this$props$options2.onClearSearch;
      var milliseconds = lodash_default.a.isEmpty(millisecondsBeforeSearch) ? StatefulAutocomplete.defaultProps.options.millisecondsBeforeSearch : millisecondsBeforeSearch;
      var getResults = lodash_default.a.isEmpty(getSearchResults) ? StatefulAutocomplete.defaultProps.options.getSearchResults : getSearchResults;
      return react_default.a.createElement(react_redux_es["a" /* Provider */], {
        store: this.store
      }, react_default.a.createElement(Autocomplete["a" /* default */], {
        getSearchResults: getResults,
        millisecondsBeforeSearch: milliseconds,
        anonymous: lodash_default.a.isUndefined(anonymous) ? true : anonymous,
        collapsible: collapsible,
        animate: animate,
        mobile: mobile,
        onChooseResult: onChooseResult,
        onClearSearch: onClearSearch,
        currentQuery: this.store.getState().autocomplete.query
      }));
    }
  }]);

  return StatefulAutocomplete;
}(react_default.a.Component);

StatefulAutocomplete_StatefulAutocomplete.propTypes = {
  options: prop_types_default.a.shape({
    numberOfResults: prop_types_default.a.number,
    getSearchResults: prop_types_default.a.func,
    millisecondsBeforeSearch: prop_types_default.a.number,
    // `anonymous` is technically wrong, but until cetera-ruby is updated to use visibility
    // concepts rather than anonymity concepts, that's what we're using for now.
    anonymous: prop_types_default.a.bool,
    collapsible: prop_types_default.a.bool,
    animate: prop_types_default.a.bool,
    mobile: prop_types_default.a.bool,
    onChooseResult: prop_types_default.a.func,
    onClearSearch: prop_types_default.a.func
  })
};
StatefulAutocomplete_StatefulAutocomplete.defaultProps = {
  options: {
    numberOfResults: 7,
    getSearchResults: getCeteraResults,
    millisecondsBeforeSearch: 250,
    collapsible: false,
    mobile: false
  }
};
/* harmony default export */ var components_StatefulAutocomplete = (StatefulAutocomplete_StatefulAutocomplete);
// EXTERNAL MODULE: external "jQuery"
var external_jQuery_ = __webpack_require__(5);
var external_jQuery_default = /*#__PURE__*/__webpack_require__.n(external_jQuery_);

// CONCATENATED MODULE: /mnt/workspace/common/site_chrome/app/assets/javascripts/socrata_site_chrome/disable_preview.js

function DisablePreview() {
  external_jQuery_default()('.disablePreviewMode').on('click', function (evt) {
    evt.preventDefault(); // Apparently this is how you delete cookies?

    if (external_jQuery_default.a.cookies) {
      external_jQuery_default.a.cookies.del('socrata_site_chrome_preview');
    } else {
      document.cookie = 'socrata_site_chrome_preview=deleted; expires=' + new Date(0).toUTCString();
    }

    window.location.reload();
  });
}
// CONCATENATED MODULE: /mnt/workspace/common/site_chrome/app/assets/javascripts/socrata_site_chrome/styleguide-dropdown.js
// Stolen and butchered from styleguide.
function StyleguideDropdown() {
  var dropdownFactory = function dropdownFactory(element) {
    if (!element) {
      return;
    }

    var dropdowns = Array.prototype.slice.call(element.querySelectorAll('[data-dropdown]'));
    dropdowns.forEach(function (dropdown) {
      new Dropdown(dropdown);
    });
  };

  var Dropdown = function Dropdown(element) {
    this.dd = element;
    this.orientation = this.dd.getAttribute('data-orientation') || 'bottom';
    this.selectable = this.dd.hasAttribute('data-selectable');
    this.dd.classList.add('dropdown-orientation-' + this.orientation); // Set the 'role' and 'aria-expanded' attributes for better ADA/508 compliance.

    this.dd.setAttribute('role', 'button');
    this.dd.setAttribute('aria-expanded', 'false');
    this.placeholder = this.dd.querySelector('span');
    this.opts = Array.prototype.slice.call(this.dd.querySelectorAll('.dropdown-options > li'));
    this.dd.dataset.value = '';
    this.dd.dataset.index = -1;
    this.initEvents();
  };

  Dropdown.prototype = {
    initEvents: function initEvents() {
      var obj = this; // Reposition dropdown if it's near the edge of the window to avoid
      // the dropdown making the window larger than we wanted

      positionDropdown();
      obj.dd.addEventListener('click', function () {
        positionDropdown();
        obj.dd.classList.toggle('active');

        if (obj.dd.classList.contains('active')) {
          obj.dd.setAttribute('aria-expanded', 'true');
        } else {
          obj.dd.setAttribute('aria-expanded', 'false');
        }

        return false;
      });

      if (obj.selectable) {
        obj.opts.forEach(function (opt) {
          opt.addEventListener('click', function (event) {
            event.preventDefault();
            var node = opt;
            var index = 0;

            while ((node = node.previousElementSibling) !== null) {
              index++;
            }

            obj.dd.dataset.value = opt.textContent;
            obj.dd.dataset.index = index;
            obj.placeholder.innerHTML = opt.innerText.trim();
            return false;
          });
        });
      }

      document.addEventListener('click', function (event) {
        var node = event.target;

        while (node.parentElement && !node.classList.contains('dropdown')) {
          node = node.parentElement;
        }

        if (node !== obj.dd) {
          obj.dd.classList.remove('active');
        }
      });
      window.addEventListener('resize', function () {
        positionDropdown();
      });

      function positionDropdown() {
        var optionsElement = obj.dd.querySelector('.dropdown-options');
        var optionsElementWidth = optionsElement.offsetWidth;
        var windowWidth = document.body.offsetWidth; // Get left to check if the dropdown options are hanging off the side of the page

        var node = optionsElement;
        var left = 0;

        do {
          left += node.offsetLeft;
        } while ((node = node.offsetParent) !== null); // Update dropdown options position if needed


        if (optionsElementWidth + left >= windowWidth || optionsElement.style.left) {
          var dropdownWidth = obj.dd.getBoundingClientRect().width;
          optionsElement.style.left = -(optionsElementWidth - dropdownWidth) + 'px';
        }
      }
    }
  };
  dropdownFactory(document.querySelector('#site-chrome-header'));
  dropdownFactory(document.querySelector('#site-chrome-footer'));
}
// CONCATENATED MODULE: /mnt/workspace/common/site_chrome/app/assets/javascripts/socrata_site_chrome/site_chrome.js



function SiteChrome() {
  var siteChromeTemplate;
  var $siteChromeHeader;
  var $siteChromeHeaderDesktopNav;
  var $siteChromeHeaderMobileNav;
  var $siteChromeMobileMenu;
  var $siteChromeMobileMenuToggle;
  var $collapsibleSearchToggle;
  var $vanishingSearchboxInput;
  var navLinkFullWidth;
  var navbarRightWidth;
  var initialBodyOverflowY;
  var $siteChromeAdminHeader;
  var $siteChromeHeaderAndAdminHeader;
  external_jQuery_default()(function () {
    DisablePreview();
    StyleguideDropdown();
    $siteChromeHeader = external_jQuery_default()('#site-chrome-header');
    $siteChromeAdminHeader = external_jQuery_default()('#site-chrome-admin-header');
    $siteChromeHeaderAndAdminHeader = $siteChromeHeader.add($siteChromeAdminHeader);
    $siteChromeHeaderDesktopNav = $siteChromeHeader.find('nav.desktop');
    $siteChromeHeaderMobileNav = $siteChromeHeader.find('nav.mobile');
    $siteChromeMobileMenu = $siteChromeHeader.find('.mobile-menu');
    $siteChromeMobileMenuToggle = $siteChromeHeader.find('.menu-toggle'); // Not sure if this is supposed to be leaking onto window.
    // Ignoring for lintapalooza.

    $collapsibleSearchToggle = $siteChromeHeaderAndAdminHeader.find('.collapsible-search-toggle');
    $vanishingSearchboxInput = $siteChromeHeaderAndAdminHeader.find('.searchbox-input.vanishing');
    siteChromeTemplate = $siteChromeHeader.attr('template');
    navLinkFullWidth = $siteChromeHeaderDesktopNav.find('.site-chrome-nav-links').width();

    if (siteChromeTemplate === 'evergreen') {
      navbarRightWidth = $siteChromeHeader.find('.evergreen-link-cluster').width();
    } else if (siteChromeTemplate === 'rally') {
      navbarRightWidth = $siteChromeHeader.find('.navbar-right').width();
    }

    initialBodyOverflowY = external_jQuery_default()('body').css('overflow-y') || 'visible';
    addAriaExpandedAttributeToSearchBox();
    verticallyPositionSearchbar();
    checkMobileBreakpoint();
    external_jQuery_default()(window).on('resize', checkMobileBreakpoint);
    $siteChromeMobileMenuToggle.on('click', toggleMobileMenu);
    $collapsibleSearchToggle.on('click', toggleCollapsibleSearch).on('keypress', toggleCollapsibleByKeypress);
    $vanishingSearchboxInput.on('keyup', toggleSearchButton);
  });

  function addAriaExpandedAttributeToSearchBox() {
    external_jQuery_default()('.searchbox').attr('aria-expanded', 'false');
  }

  function toggleMobileMenu() {
    if ($siteChromeMobileMenu.hasClass('active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    $siteChromeMobileMenu.addClass('active');
    $siteChromeMobileMenu.attr('aria-expanded', 'true'); // Disable body from scrolling while menu is open

    external_jQuery_default()('body').css('overflow-y', 'hidden');
    mobileLanguageSwitcher(external_jQuery_default()('.mobile-language-dropdown'));
  }

  function closeMobileMenu() {
    $siteChromeMobileMenu.removeClass('active');
    $siteChromeMobileMenu.attr('aria-expanded', 'false');
    external_jQuery_default()('body').css('overflow-y', initialBodyOverflowY);
  }

  function mobileLanguageSwitcher($div) {
    $div.children('.mobile-language-dropdown-title').on('click', function () {
      $div.children('.mobile-language-dropdown-options').slideToggle('fast'); // Scroll down as the dropdown options div appears

      external_jQuery_default()('.mobile-menu').animate({
        scrollTop: external_jQuery_default()('.mobile-language-dropdown-options').offset().top
      }, 'fast');
    });
  }

  function toggleCollapsibleSearch() {
    var $searchbox = external_jQuery_default()(this).siblings('.searchbox');
    $searchbox.toggleClass('expanded');
    $searchbox.find('input').trigger('focus');

    if ($searchbox.hasClass('expanded')) {
      $searchbox.attr('aria-expanded', 'true');
    } // Close searchbox on click outside of box


    external_jQuery_default()(document).on('mouseup', function (e) {
      if (!$searchbox.is(e.target) && $searchbox.has(e.target).length === 0) {
        $searchbox.removeClass('expanded');
        $searchbox.attr('aria-expanded', 'false');
      }
    }); // Close searchbox on ESCAPE key

    external_jQuery_default()(document).on('keyup', function (e) {
      if (e.keyCode === 27) {
        $searchbox.removeClass('expanded');
        $searchbox.attr('aria-expanded', 'false');
      }
    });
  }

  function toggleCollapsibleByKeypress(event) {
    // 13 === ENTER, 32 === SPACE
    if ([13, 32].includes(event.which)) {
      var clickEvent = new Event('click', {
        'bubbles': true
      });
      event.target.dispatchEvent(clickEvent);
    }
  } // Button appears only if text has been entered.


  function toggleSearchButton() {
    var $searchButton = external_jQuery_default()(this).closest('form').find('.search-button');

    if (this.value !== '') {
      $searchButton.fadeIn(50);
    } else {
      $searchButton.fadeOut(50);
    }
  }
  /**
   * Browsers like IE11 don't understand nested calc commands, which are used to position the searchbar
   * due to vertically aligning it with the dynamically sized logo.
   * Instead, we need to position it with javascript.
   */


  function verticallyPositionSearchbar() {
    var isMSIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;
    var isSafari = navigator.userAgent.indexOf('Safari') !== -1;

    if (isMSIE || isSafari) {
      var $adminSearchbox = $siteChromeAdminHeader.find('.collapsible-search .searchbox');
      var $searchbox = external_jQuery_default()('header#site-chrome-header').find('.collapsible-search .searchbox');
      var positionTop;

      if ($adminSearchbox.is(':visible')) {
        positionTop = ($siteChromeAdminHeader.height() - $adminSearchbox.height()) / 2;
        $adminSearchbox.css('top', positionTop);
      }

      if ($searchbox.is(':visible')) {
        var $banner = $siteChromeHeader.find('.banner');
        positionTop = $banner.height() / 2 - $searchbox.height() / 2;
        $searchbox.css('top', positionTop);
      }
    }
  }
  /**
   * Check if the header should enter mobile mode based on the width of the navLinks
   * and the available width of the navbar based on the user's window size.
   */


  function checkMobileBreakpoint() {
    var roomForNavLinks;

    if (siteChromeTemplate === 'evergreen') {
      var logoWidth = $siteChromeHeader.find('a.logo').width();
      var headerContentWidth = $siteChromeHeader.find('.header-content').width();
      var headerPadding = 26; // px

      roomForNavLinks = headerContentWidth - logoWidth - navbarRightWidth - headerPadding;

      if (navLinkFullWidth > roomForNavLinks) {
        showMobileHeaderNav();
      } else {
        showDesktopHeaderNav();
      }
    } else if (siteChromeTemplate === 'rally') {
      var rallyBottomWidth = $siteChromeHeader.find('.rally-bottom').width();
      roomForNavLinks = rallyBottomWidth - navbarRightWidth;
      var $rallyTop = $siteChromeHeader.find('.rally-top');
      var roomForRallyTopContent = $rallyTop.width();
      var rallyTopContentWidth = $rallyTop.find('a.logo').width() + $rallyTop.find('div.searchbox').width() + 16; // padding

      if (navLinkFullWidth > roomForNavLinks || rallyTopContentWidth > roomForRallyTopContent) {
        showMobileHeaderNav();
      } else {
        showDesktopHeaderNav();
      }
    } // Undo initial hidden styling to hide searchbox during width calculations.
    // Prevents "flashing" of non-mobile search when on mobile.


    $siteChromeHeader.find('div.searchbox.hidden').removeClass('hidden');
  }

  function showDesktopHeaderNav() {
    // Hide mobile nav
    $siteChromeHeaderMobileNav.css('display', 'none');
    $siteChromeHeaderMobileNav.attr('aria-hidden', 'true');
    $siteChromeHeader.find('.mobile-menu').attr('aria-hidden', 'true').attr('hidden', 'true'); // Close mobile menu if it is open

    if ($siteChromeHeader.find('.mobile-menu').hasClass('active')) {
      closeMobileMenu();
    } // Show desktop nav


    $siteChromeHeaderDesktopNav.css('display', 'block');
    $siteChromeHeader.find('.rally-top .searchbox').show();
    $siteChromeHeaderDesktopNav.attr('aria-hidden', 'false');
  }

  function showMobileHeaderNav() {
    // Hide desktop nav
    $siteChromeHeaderDesktopNav.css('display', 'none');
    $siteChromeHeaderDesktopNav.attr('aria-hidden', 'true'); // Show mobile nav

    $siteChromeHeaderMobileNav.css('display', 'block');
    $siteChromeHeader.find('.rally-top .searchbox').hide();
    $siteChromeHeaderMobileNav.attr('aria-hidden', 'false');
    $siteChromeHeader.find('.mobile-menu').attr('aria-hidden', 'false').prop('hidden', false);
  }
}
// CONCATENATED MODULE: /mnt/workspace/common/site_chrome/app/assets/javascripts/socrata_site_chrome/admin_header.js

function AdminHeader() {
  var header = external_jQuery_default()('#site-chrome-admin-header');
  var $mobileHeader = header.find('#site-chrome-admin-header-mobile-menu-wrapper');
  var $mobileHeaderBackground = header.find('#site-chrome-admin-header-mobile-menu-background');
  var $mobileHeaderContent = header.find('#site-chrome-admin-header-mobile-menu-content');
  var $mobileHeaderButton = header.find('#site-chrome-admin-header-mobile-menu-button');
  header.find('[aria-haspopup]').on('click', toggleAdminDropdown).on('blur', blurAdminDropdown).on('keypress', keypressAdminDropdown).on('keydown', keydownAdminDropdown).on('keyup', keyupAdminDropdown);
  header.find('[role="menu"] li a').on('blur', blurAdminDropdown).on('keydown', keydownAdminDropdownItem).on('keyup', keyupAdminDropdownItem);
  var desktopHeaderContentWidth = 0;
  header.find('.site-chrome-admin-header-section').each(function (i, section) {
    desktopHeaderContentWidth += section.offsetWidth;
  });
  external_jQuery_default()(window).on('resize', checkMobileBreakpoint);
  checkMobileBreakpoint(); // The opacity for these sections is set to 0 in the css so that we can determine the width of the header
  // before it is actually visible. On mobile devices this prevents the "flash" of the full header.
  // After determining whether to show the admin header vs the mobile menu, reset the opacity.

  external_jQuery_default()('.site-chrome-admin-header-section').css('opacity', 1);
  mobileClickListeners(); // End script execution; only hoisted methods below.

  return;
  /**
   * - Toggle active class when any click
   *   occurs on the menu button.
   * - Toggle a11y aria-hidden.
   * - Focus the first menu item to assist navigation.
   */

  function toggleAdminDropdown(event) {
    var $dropdown = external_jQuery_default()(event.target).closest('[aria-haspopup]');
    var $menu = $dropdown.find('[role="menu"]');
    $dropdown.toggleClass('active');
    $menu. // Is the menu showing?
    attr('aria-hidden', !$dropdown.hasClass('active')). // Focus the first element of the menu.
    find('li a').first().trigger('focus');
  }
  /**
   * Catch and block SPACE and DOWN on the dropdown toggle.
   */


  function keydownAdminDropdown(event) {
    // 32 === SPACE, 40 === DOWN
    if (event.keyCode == 32 || event.keyCode == 40) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /**
   * Toggle dropdown menu visibility on SPACE and DOWN.
   */


  function keyupAdminDropdown(event) {
    // 32 === SPACE, 40 === DOWN
    if (event.keyCode === 32 || event.keyCode === 40) {
      event.preventDefault();
      event.stopPropagation();
      toggleAdminDropdown(event);
    }
  }
  /**
   * Catch and block UP and DOWN on the dropdown item.
   */


  function keydownAdminDropdownItem(event) {
    // 40 === DOWN, 38 === UP
    if (event.keyCode === 40 || event.keyCode === 38) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /**
   * Catch keypress and dispatch as click for accessibility purposes
   */


  function keypressAdminDropdown(event) {
    // 13 === ENTER, 32 === SPACE
    if ([13, 32].includes(event.which)) {
      var clickEvent = new Event('click', {
        'bubbles': true
      });
      event.target.dispatchEvent(clickEvent);
    }
  }
  /**
   * - Chooses the next focusable dropdown item when DOWN
   *   is pressed. If there isn't one, the current item
   *   remains focused.
   * - Chooses the previous focusable dropdown item when
   *   UP is pressed. If there isn't one, the menu toggle
   *   is focused.
   */


  function keyupAdminDropdownItem(event) {
    var $target = external_jQuery_default()(event.target);
    var keyCode = event.keyCode; // 40 === DOWN, 38 === UP

    if (keyCode === 40 || keyCode === 38) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (keyCode === 40) {
      $target.closest('li').next('li').find('a').trigger('focus');
    } else if (keyCode === 38) {
      var $previousItem = $target.closest('li').prev('li').find('a');

      if ($previousItem.length) {
        $previousItem.trigger('focus');
      } else {
        $target.closest('[aria-haspopup]').trigger('focus');
      }
    }
  }
  /**
   * Wait and watch where focus goes to, if the focus
   * ends up in the same dropdown, don't do anything.
   * If it ends up anywhere else, close the dropdown right up.
   */


  function blurAdminDropdown(event) {
    var target = event.target;
    setTimeout(function () {
      var $menu = external_jQuery_default()(document.activeElement).closest('[aria-haspopup]');
      var $targetMenu = external_jQuery_default()(target).closest('[aria-haspopup]');

      if ($menu.length === 0 || $menu[0] !== $targetMenu[0]) {
        $targetMenu.removeClass('active');
        $targetMenu.find('[role="menu"]').attr('aria-hidden', 'true');
      }
    }, 1);
  } // EN-23581: Mobile admin header


  function checkMobileBreakpoint() {
    if (external_jQuery_default()(window).width() < desktopHeaderContentWidth) {
      if (!header.hasClass('mobile')) {
        applyMobileStyling();
      }
    } else {
      if (header.hasClass('mobile')) {
        applyDesktopStyling();
      }
    }
  }

  function applyMobileStyling() {
    header.addClass('mobile');
    $mobileHeaderButton.show().attr('aria-hidden', 'false');
  }

  function applyDesktopStyling() {
    hideMobileMenu();
    $mobileHeaderButton.hide().attr('aria-hidden', 'true');
    header.removeClass('mobile');
  }

  function hideMobileMenu() {
    $mobileHeaderBackground.fadeOut(200);
    $mobileHeaderContent.animate({
      left: '-100vw'
    }, 200, function () {
      $mobileHeader.hide().attr('aria-hidden', 'true');
    });
  }

  function showMobileMenu() {
    $mobileHeader.show().attr('aria-hidden', 'false');
    $mobileHeaderBackground.fadeIn(200);
    $mobileHeaderContent.animate({
      left: 0
    }, 300);
  }

  function mobileClickListeners() {
    $mobileHeaderButton.on('click', function () {
      if ($mobileHeader.is(':visible')) {
        hideMobileMenu();
      } else {
        showMobileMenu();
      }
    }); // Close mobile menu on click outside of menu.

    $mobileHeaderBackground.on('click', hideMobileMenu); // Close mobile dropdown menu on ESCAPE keypress.

    external_jQuery_default()(document).on('keyup', function (e) {
      if ($mobileHeader.is(':visible') && e.keyCode === 27) {
        hideMobileMenu();
      }
    });
    $mobileHeaderContent.find('.site-chrome-admin-menus .nested-menu li label').on('click', openSubmenu).on('keypress', function (e) {
      if ([13, 32].includes(e.which)) {
        openSubmenu(e);
      }
    });
    $mobileHeaderContent.find('#main-menu-back-button').on('click', closeSubmenu).on('keypress', function (e) {
      if ([13, 32].includes(e.which)) {
        closeSubmenu();
      }
    });
  }

  function openSubmenu(e) {
    var submenuKey = external_jQuery_default()(e.target).data('submenuKey');
    var $menuLevel1 = $mobileHeaderContent.find('#menu-level-1');
    $menuLevel1.animate({
      left: '-100vw'
    }, 200, function () {
      return $menuLevel1.hide().attr('aria-hidden', true);
    });
    $mobileHeaderContent.find('#menu-level-2 ul.submenu').filter(function (i, submenu) {
      return external_jQuery_default()(submenu).data('submenuKey') === submenuKey;
    }).show().attr('aria-hidden', false);
    $mobileHeaderContent.find('#menu-level-2').show().animate({
      left: 0
    }, 200).attr('aria-hidden', false);
  }

  function closeSubmenu() {
    $mobileHeaderContent.find('#menu-level-1').show().animate({
      left: 0
    }, 200).attr('aria-hidden', false);
    $mobileHeaderContent.find('#menu-level-2').animate({
      left: '100vw'
    }, 200, function () {
      $mobileHeaderContent.find('#menu-level-2 ul.submenu').hide().attr('aria-hidden', true);
    }).attr('aria-hidden', true);
  }
}
// EXTERNAL MODULE: /tmp/frontend/node_modules/redux-thunk/lib/index.js
var lib = __webpack_require__(161);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/actions/UserNotificationActions.js

var TOGGLE_USER_NOTIFICATIONS_LOADING = 'TOGGLE_USER_NOTIFICATIONS_LOADING';
var toggleUserNotificationLoading = function toggleUserNotificationLoading(toggle) {
  return {
    type: TOGGLE_USER_NOTIFICATIONS_LOADING,
    loading: toggle
  };
};
var UPDATE_USER_NOTIFICATIONS_BY_TYPE = 'UPDATE_USER_NOTIFICATIONS_BY_TYPE';
var UserNotificationActions_updateUserNotificationsByType = function updateUserNotificationsByType(notificationConfigs, notificationType) {
  return {
    type: UPDATE_USER_NOTIFICATIONS_BY_TYPE,
    newNotifications: notificationConfigs.notifications,
    notificationConfigs: lodash_default.a.omit(notificationConfigs, ['notifications']),
    notificationType: notificationType
  };
};
var UPDATE_TRANSIENT_NOTIFICATIONS = 'UPDATE_TRANSIENT_NOTIFICATIONS';
var updateTransientNotifications = function updateTransientNotifications(transientNotifications) {
  return {
    type: UPDATE_TRANSIENT_NOTIFICATIONS,
    transientNotifications: transientNotifications
  };
};
var UPDATE_USER_NOTIFICATIONS = 'UPDATE_USER_NOTIFICATIONS';
var updateUserNotifications = function updateUserNotifications(userNotifications) {
  return {
    type: UPDATE_USER_NOTIFICATIONS,
    userNotifications: userNotifications
  };
};
var UPDATE_ENQUEUED_NOTIFICATIONS = 'UPDATE_ENQUEUED_NOTIFICATIONS';
var updateEnqueuedNotifications = function updateEnqueuedNotifications(enqueuedNotifications) {
  return {
    type: UPDATE_ENQUEUED_NOTIFICATIONS,
    enqueuedNotifications: enqueuedNotifications
  };
};
var UPDATE_NEW_USER_NOTIFICATION_COUNT = 'UPDATE_NEW_USER_NOTIFICATION_COUNT';
var increaseNewNotificationCount = function increaseNewNotificationCount(notificationType, count) {
  return {
    type: UPDATE_NEW_USER_NOTIFICATION_COUNT,
    count: count,
    notificationType: notificationType
  };
};
var LOAD_NOTIFICATIONS = 'LOAD_NOTIFICATIONS';
var loadNotifications = function loadNotifications(notificationType, offset) {
  return {
    type: LOAD_NOTIFICATIONS,
    notificationType: notificationType,
    offset: offset
  };
};
var LOAD_SOCKET_CONNECTION = 'LOAD_SOCKET_CONNECTION';
var loadSocketConnection = function loadSocketConnection(userId, options) {
  return {
    type: LOAD_SOCKET_CONNECTION,
    userId: userId,
    options: options
  };
};
var LOAD_NEW_NOTIFICATIONS = 'LOAD_NEW_NOTIFICATIONS';
var loadNewNotification = function loadNewNotification(response) {
  return {
    type: LOAD_NEW_NOTIFICATIONS,
    response: response
  };
};
var ON_DELETE_USER_NOTIFICATION = 'ON_DELETE_USER_NOTIFICATION';
var onDeleteUserNotification = function onDeleteUserNotification(response) {
  return {
    type: ON_DELETE_USER_NOTIFICATION,
    response: response
  };
};
var ON_DELETE_ALL_USER_NOTIFICATION = 'ON_DELETE_ALL_USER_NOTIFICATION';
var onDeleteAllNotifications = function onDeleteAllNotifications() {
  return {
    type: ON_DELETE_ALL_USER_NOTIFICATION
  };
};
var ON_USER_NOTIFICATION_READ_STATE_CHANGE = 'ON_USER_NOTIFICATION_READ_STATE_CHANGE';
var onNotificationReadStateChange = function onNotificationReadStateChange(response, readState) {
  return {
    type: ON_USER_NOTIFICATION_READ_STATE_CHANGE,
    response: response,
    readState: readState
  };
};
var SEE_NEW_USER_NOTIFICATION = 'SEE_NEW_USER_NOTIFICATION';
var seeNewNotifications = function seeNewNotifications(notificationType) {
  return {
    type: SEE_NEW_USER_NOTIFICATION,
    notificationType: notificationType
  };
};
var MOVE_TRANSIENT_NOTIFICATION = 'MOVE_TRANSIENT_NOTIFICATION';
var UserNotificationActions_moveTransientNotificationIntoPanel = function moveTransientNotificationIntoPanel(notificationId) {
  return {
    type: MOVE_TRANSIENT_NOTIFICATION,
    notificationId: notificationId
  };
};
var REMOVE_TRANSIENT_NOTIFICATION = 'REMOVE_TRANSIENT_NOTIFICATION';
var UserNotificationActions_removeTransientNotification = function removeTransientNotification(notificationId) {
  return {
    type: REMOVE_TRANSIENT_NOTIFICATION,
    notificationId: notificationId
  };
};
// EXTERNAL MODULE: /tmp/frontend/node_modules/browser-cookies/src/browser-cookies.js
var browser_cookies = __webpack_require__(475);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/api/ProductNotificationAPI.js


function getProductNotifications() {
  return fetch('/notifications', {
    credentials: 'same-origin'
  }).then(function (response) {
    return response.json();
  });
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function updateProductNotificationLastSeen() {
  /* eslint-disable-next-line no-undef */
  var headers = new Headers();
  headers.append('X-CSRF-Token', Object(browser_cookies["get"])('socrata-csrf-token'));
  fetch('/notifications/setLastNotificationSeenAt', {
    method: 'POST',
    credentials: 'same-origin',
    headers: headers
  }).then(checkStatus)["catch"](function (error) {
    if (error.response.status === 401) {
      console.warn('Unable to update notification last seen due to failed authorization. This is probably as the result of an expired session cookie.');
    } else {
      console.log("Unable to update notification last seen due to an unknown error: ".concat(error));
    }
  });
}
// CONCATENATED MODULE: /mnt/workspace/common/notifications/actions/ProductNotificationActions.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var LOAD_PRODUCT_NOTIFICATIONS = 'LOAD_PRODUCT_NOTIFICATIONS';
var LOADING_PRODUCT_NOTIFICATIONS = 'LOADING_PRODUCT_NOTIFICATIONS';
var UPDATE_PRODUCT_NOTIFICATIONS = 'UPDATE_PRODUCT_NOTIFICATIONS';
var MARK_ALL_PRODUCT_NOTIFICATIONS_AS_READ = 'MARK_ALL_PRODUCT_NOTIFICATIONS_AS_READ';
var toggleProductNotificationLoading = function toggleProductNotificationLoading(toggle) {
  return {
    type: LOADING_PRODUCT_NOTIFICATIONS,
    loading: toggle
  };
};
var updateProductNotifications = function updateProductNotifications(options) {
  return _objectSpread({
    type: UPDATE_PRODUCT_NOTIFICATIONS
  }, options);
};
var ProductNotificationActions_markAllProductNotificationsAsRead = function markAllProductNotificationsAsRead() {
  updateProductNotificationLastSeen(new Date());
  return {
    type: MARK_ALL_PRODUCT_NOTIFICATIONS_AS_READ
  };
};
var ProductNotificationActions_loadProductNotifications = function loadProductNotifications() {
  return function (dispatch) {
    dispatch(toggleProductNotificationLoading(true));
    return getProductNotifications().then(function (response) {
      var notifications = response.notifications,
          viewOlderLink = response.viewOlderLink;
      var showNotifications = notifications && viewOlderLink;
      dispatch(toggleProductNotificationLoading(false));
      dispatch(updateProductNotifications({
        productNotifications: {
          hasError: !showNotifications,
          notifications: notifications || [],
          unreadProductNotificationCount: ProductNotificationActions_getUnreadProductNotificationsCount(notifications),
          viewOlderLink: showNotifications ? viewOlderLink : null
        }
      }));
    }, function () {
      dispatch(toggleProductNotificationLoading(false));
      dispatch(updateProductNotifications({
        productNotifications: {
          hasError: true,
          notifications: [],
          unreadProductNotificationCount: 0,
          viewOlderLink: false
        }
      }));
    });
  };
};

var ProductNotificationActions_getUnreadProductNotificationsCount = function getUnreadProductNotificationsCount(notifications) {
  return lodash_default.a.filter(notifications, function (_ref) {
    var _ref$isUnread = _ref.isUnread,
        isUnread = _ref$isUnread === void 0 ? true : _ref$isUnread;
    return isUnread;
  }).length;
};
// CONCATENATED MODULE: /mnt/workspace/common/notifications/reducers/ProductNotificationReducers.js
function ProductNotificationReducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { ProductNotificationReducers_defineProperty(target, key, source[key]); }); } return target; }

function ProductNotificationReducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var ProductNotificationReducers = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_PRODUCT_NOTIFICATIONS:
      return ProductNotificationReducers_objectSpread({}, state, action.productNotifications);

    case LOADING_PRODUCT_NOTIFICATIONS:
      return ProductNotificationReducers_objectSpread({}, state, {
        areProductNotificationsLoading: action.loading
      });

    case MARK_ALL_PRODUCT_NOTIFICATIONS_AS_READ:
      var notifications = lodash_default.a.get(state, 'notifications');

      var newNotifications = lodash_default.a.map(notifications, function (notification) {
        return ProductNotificationReducers_objectSpread({}, notification, {
          isUnread: false
        });
      });

      return ProductNotificationReducers_objectSpread({}, state, {
        notifications: newNotifications,
        unreadProductNotificationCount: 0
      });

    default:
      return state;
  }
});
// EXTERNAL MODULE: /mnt/workspace/common/js_utils/accounts/index.js
var accounts = __webpack_require__(347);

// EXTERNAL MODULE: /mnt/workspace/common/js_utils/convertToUrlComponent.js
var convertToUrlComponent = __webpack_require__(319);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/helpers/LinkHelpers.js


var LinkHelpers_getDomainNameLink = function getDomainNameLink(domainCname) {
  if (lodash_default.a.isEmpty(domainCname)) {
    return null;
  }

  return "//".concat(domainCname);
};
var LinkHelpers_getDatasetLink = function getDatasetLink(domainCname, name, uId) {
  if (lodash_default.a.isEmpty(domainCname) || lodash_default.a.isEmpty(name) || lodash_default.a.isEmpty(uId)) {
    return null;
  }

  return "//".concat(domainCname, "/dataset/").concat(Object(convertToUrlComponent["a" /* default */])(name), "/").concat(uId);
};
var LinkHelpers_getStoryLink = function getStoryLink(domainCname, name, uId, path) {
  if (lodash_default.a.isEmpty(domainCname) || lodash_default.a.isEmpty(name) || lodash_default.a.isEmpty(uId)) {
    return null;
  }

  return "//".concat(domainCname, "/stories/s/").concat(Object(convertToUrlComponent["a" /* default */])(name), "/").concat(uId, "/").concat(path);
};
var LinkHelpers_getDraftLink = function getDraftLink(domainCname, name, datasetId, details) {
  var publishedUid = lodash_default.a.get(details, 'published_view_uid', datasetId);

  var draftType = lodash_default.a.get(details, 'draft_type', '').toLowerCase();

  var draftId = lodash_default.a.get(details, 'draft_id', '');

  if (draftType === 'story') {
    return LinkHelpers_getStoryLink(domainCname, name, publishedUid, 'preview');
  } else {
    if (lodash_default.a.isEmpty(draftId)) {
      return LinkHelpers_getDatasetLink(domainCname, name, publishedUid);
    } else {
      if (draftType === 'revision') {
        return LinkHelpers_getRevisionLink(domainCname, name, publishedUid, draftId);
      } else {
        return LinkHelpers_getDatasetLink(domainCname, name, draftId);
      }
    }
  }
};
var LinkHelpers_getDownloadLink = function getDownloadLink(domainCname, uId, query) {
  if (lodash_default.a.isEmpty(domainCname) || lodash_default.a.isEmpty(query) || lodash_default.a.isEmpty(uId)) {
    return null;
  } // query format: Select * form table where id=10 limit 10
  // Adding limit if query doesn't have limit by default


  if (!/\sLIMIT\s/i.test(query)) {
    query = query + ' LIMIT 50000';
  }

  return "//".concat(domainCname, "/resource/").concat(uId, ".csv?$query=").concat(encodeURIComponent(query));
};

var LinkHelpers_getRevisionLink = function getRevisionLink(domainCname, name, publishedUid, seqNumber) {
  if (lodash_default.a.isEmpty(domainCname) || lodash_default.a.isEmpty(name) || lodash_default.a.isEmpty(publishedUid) || lodash_default.a.isEmpty(seqNumber)) {
    return null;
  }

  return "//".concat(domainCname, "/dataset/").concat(Object(convertToUrlComponent["a" /* default */])(name), "/").concat(publishedUid, "/revisions/").concat(seqNumber);
};
// EXTERNAL MODULE: /mnt/workspace/common/notifications/constants.js
var constants = __webpack_require__(117);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/helpers/NotificationFormatHelper.js




var NotificationFormatHelper_setNotificationObject = function setNotificationObject(options) {
  return lodash_default.a.defaults(options, {
    hasMoreNotifications: false,
    loading: false,
    notifications: [],
    total: 0,
    offset: 0,
    unread: 0
  });
};
var NotificationFormatHelper_transformNotification = function transformNotification(notification) {
  var activityType = lodash_default.a.get(notification, 'activity.activity_type', '');

  var activityUniqueKey = lodash_default.a.get(notification, 'activity_unique_key', '');

  var assetType = lodash_default.a.get(notification, 'activity.asset_type', '');

  var createdAt = lodash_default.a.get(notification, 'activity.created_at', '');

  var domainCname = lodash_default.a.get(notification, 'activity.domain_cname', '');

  var id = lodash_default.a.get(notification, 'id', '');

  var read = lodash_default.a.get(notification, 'read', false);

  var type = lodash_default.a.get(notification, 'type', '');

  var userActivityTypes = ['UserAdded', 'UserRemoved', 'UserRoleChanged'];

  var userId = lodash_default.a.get(notification, 'activity.acting_user_id', '');

  var userName = lodash_default.a.get(notification, 'activity.acting_user_name', '');

  var userProfileLink = Object(accounts["b" /* getUserProfileLink */])(userName, userId, domainCname);
  var domainNameLink = LinkHelpers_getDomainNameLink(domainCname);
  var transformedNotification = {
    activityType: activityType,
    activityUniqueKey: activityUniqueKey,
    assetType: assetType,
    createdAt: createdAt,
    domainCname: domainCname,
    domainNameLink: domainNameLink,
    id: id,
    read: read,
    type: type,
    userName: userName,
    userProfileLink: userProfileLink
  };

  if (type === 'alert') {
    return NotificationFormatHelper_transformAlertNotification(notification, transformedNotification);
  } else {
    var link = null;
    var messageBody;
    var targetUserName = null;
    var activityDetails;

    try {
      activityDetails = JSON.parse(lodash_default.a.get(notification, 'activity.details', '{}'));
    } catch (err) {
      console.info('malformed data', lodash_default.a.get(notification, 'activity.details', {}));
    }

    if (activityType === constants["m" /* VIEW_METADATA_CHANGED */]) {
      var viewId = lodash_default.a.get(notification, 'activity.view_uid', '');

      var viewName = lodash_default.a.get(notification, 'activity.view_name', '');

      link = LinkHelpers_getDatasetLink(domainCname, viewName, viewId);
      messageBody = viewName;
    } else if (lodash_default.a.includes(userActivityTypes, activityType)) {
      link = null;
      messageBody = lodash_default.a.get(activityDetails, 'summary', '');
      targetUserName = lodash_default.a.get(notification, 'activity.target_user_name_1', '');
    } else {
      var datasetId = lodash_default.a.get(notification, 'activity.dataset_uid', '');

      var datasetName = lodash_default.a.get(notification, 'activity.dataset_name', '');

      var useDraftLink = lodash_default.a.has(activityDetails, 'draft_id') && lodash_default.a.has(activityDetails, 'draft_type');

      var useStoryEditLink = activityType === constants["d" /* COLLABORATOR_ADDED */] && assetType === 'story' || activityType === constants["i" /* STORY_DRAFT_CREATED */];

      if (useStoryEditLink) {
        // If a story has not been published, the View link to the story will 404, so we need to
        // link new collaborators to the Edit link where they can view and edit the draft. We
        // special-case this in other places as well.
        link = LinkHelpers_getStoryLink(domainCname, datasetName, datasetId, 'edit');
      } else if (useDraftLink) {
        link = LinkHelpers_getDraftLink(domainCname, datasetName, datasetId, activityDetails);
      } else {
        link = LinkHelpers_getDatasetLink(domainCname, datasetName, datasetId);
      }

      messageBody = datasetName;
    }

    lodash_default.a.assignIn(transformedNotification, {
      link: link,
      messageBody: messageBody,
      activityDetails: activityDetails,
      targetUserName: targetUserName,
      domainName: domainCname
    });

    return transformedNotification;
  }
};
var NotificationFormatHelper_getNotificationIndex = function getNotificationIndex(notifications, notificationId) {
  return lodash_default.a.findIndex(notifications, {
    id: notificationId
  });
};
var NotificationFormatHelper_getUserNotificationCount = function getUserNotificationCount(userNotifications) {
  return lodash_default.a.reduce(userNotifications, function (total, notificationStats) {
    return total + lodash_default.a.get(notificationStats, 'unread', 0);
  }, 0);
};

var NotificationFormatHelper_transformAlertNotification = function transformAlertNotification(notification, transformedNotification) {
  var domain = lodash_default.a.get(notification, 'alert.domain', '');

  var datasetUid = lodash_default.a.get(notification, 'alert.dataset_uid', '');

  var datasetName = lodash_default.a.get(notification, 'alert.dataset_name', '');

  var alertQuery = lodash_default.a.get(notification, 'alert_query', '');

  var domainNameLink = LinkHelpers_getDomainNameLink(domain);

  lodash_default.a.assignIn(transformedNotification, {
    alertDatasetUid: datasetUid,
    alertDomain: domain,
    alertName: lodash_default.a.get(notification, 'alert.name', ''),
    alertQueryString: alertQuery,
    createdAt: lodash_default.a.get(notification, 'alert_triggered_at', ''),
    datasetName: datasetName,
    domainNameLink: domainNameLink,
    downloadLink: LinkHelpers_getDownloadLink(domain, datasetUid, alertQuery),
    link: LinkHelpers_getDatasetLink(domain, datasetName, datasetUid),
    messageBody: datasetName
  });

  return transformedNotification;
};
// CONCATENATED MODULE: /mnt/workspace/common/notifications/reducers/UserNotificationReducers.js
function UserNotificationReducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { UserNotificationReducers_defineProperty(target, key, source[key]); }); } return target; }

function UserNotificationReducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ var UserNotificationReducers = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case TOGGLE_USER_NOTIFICATIONS_LOADING:
      return UserNotificationReducers_objectSpread({}, state, {
        areUserNotificationsLoading: action.loading
      });

    case UPDATE_USER_NOTIFICATIONS_BY_TYPE:
      var userNotifications = state.userNotifications;

      var currentNotifications = lodash_default.a.get(userNotifications, action.notificationType + '.notifications', []);

      userNotifications[action.notificationType] = UserNotificationReducers_objectSpread({}, userNotifications[action.notificationType], action.notificationConfigs, {
        notifications: currentNotifications.concat(action.newNotifications)
      });
      return UserNotificationReducers_objectSpread({}, state, {
        userNotifications: userNotifications,
        unreadUserNotificationCount: NotificationFormatHelper_getUserNotificationCount(userNotifications)
      });

    case UPDATE_USER_NOTIFICATIONS:
      return UserNotificationReducers_objectSpread({}, state, {
        userNotifications: action.userNotifications,
        unreadUserNotificationCount: NotificationFormatHelper_getUserNotificationCount(action.userNotifications)
      });

    case UPDATE_ENQUEUED_NOTIFICATIONS:
      return UserNotificationReducers_objectSpread({}, state, {
        enqueuedNotifications: action.enqueuedNotifications
      });

    case UPDATE_NEW_USER_NOTIFICATION_COUNT:
      var currentUserNotifications = state.userNotifications;

      var notificationsConfigs = lodash_default.a.get(currentUserNotifications, action.notificationType, {});

      notificationsConfigs.total += action.count;
      notificationsConfigs.unread += action.count;
      notificationsConfigs.offset += action.count;
      currentUserNotifications[action.notificationType] = notificationsConfigs;
      return UserNotificationReducers_objectSpread({}, state, {
        userNotifications: currentUserNotifications,
        unreadUserNotificationCount: NotificationFormatHelper_getUserNotificationCount(currentUserNotifications)
      });

    case UPDATE_TRANSIENT_NOTIFICATIONS:
      return UserNotificationReducers_objectSpread({}, state, {
        transientNotifications: action.transientNotifications
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: /mnt/workspace/common/notifications/actions/PanelActions.js
var TOGGLE_NOTIFICATIONS_PANEL_STATE = 'TOGGLE_NOTIFICATIONS_PANEL_STATE';
var PanelActions_toggleNotificationPanel = function toggleNotificationPanel(toggle) {
  return {
    type: TOGGLE_NOTIFICATIONS_PANEL_STATE,
    toggle: toggle
  };
};
// CONCATENATED MODULE: /mnt/workspace/common/notifications/reducers/PanelReducers.js
function PanelReducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PanelReducers_defineProperty(target, key, source[key]); }); } return target; }

function PanelReducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var PanelReducers = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case TOGGLE_NOTIFICATIONS_PANEL_STATE:
      return PanelReducers_objectSpread({}, state, {
        showNotificationPanel: action.toggle
      });

    default:
      return state;
  }
});
// EXTERNAL MODULE: /mnt/workspace/common/notifications/api/helper.js
var helper = __webpack_require__(361);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/api/AlertPreferenceAPI.js




function getDefaultHeaders() {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
}

function encodePreferenceFormat(preferences) {
  return lodash_default.a.values(preferences);
}

function decodePreferenceFormat(preferences) {
  var decodedSubscriptionPreferences = {};

  var subscriptionPreferences = lodash_default.a.get(preferences, 'subscription_preferences', []);

  subscriptionPreferences = lodash_default.a.unionBy(subscriptionPreferences, Object(helper["b" /* getDefaultPreferences */])(), 'name');

  lodash_default.a.each(subscriptionPreferences, function (preference) {
    decodedSubscriptionPreferences[preference.name] = preference;
  });

  return {
    subscription_preferences: decodedSubscriptionPreferences,
    settings: decodeSettings(preferences)
  };
}

function decodeSettings(preferences) {
  var settings = lodash_default.a.get(preferences, 'settings', {});

  if (lodash_default.a.isEmpty(settings)) {
    return {};
  }

  return lodash_default.a.groupBy(settings, 'name');
}

function encodeSettings(settings) {
  return lodash_default.a.flattenDeep(lodash_default.a.values(settings));
}

var AlertPreferenceAPI = function () {
  return {
    get: function get() {
      return fetch('/api/notifications_and_alerts/preferences', {
        method: 'GET',
        headers: getDefaultHeaders(),
        credentials: 'same-origin'
      }).then(function (response) {
        return Object(helper["a" /* checkStatus */])(response, 'An error was encountered while getting alert preferences, please try again or contact support@socrata.com');
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        return decodePreferenceFormat(response.data);
      });
    },
    set: function set(preferences, settings) {
      var encodePreferences = encodePreferenceFormat(preferences);
      return fetch('/api/notifications_and_alerts/preferences', {
        method: 'POST',
        headers: getDefaultHeaders(),
        credentials: 'same-origin',
        body: JSON.stringify({
          subscription_preferences: encodePreferences,
          settings: encodeSettings(settings)
        })
      }).then(function (response) {
        return Object(helper["a" /* checkStatus */])(response, 'An error was encountered while getting alert preferences, please try again or contact support@socrata.com');
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        return response.data;
      });
    }
  };
}();
/* harmony default export */ var api_AlertPreferenceAPI = (AlertPreferenceAPI);
// CONCATENATED MODULE: /mnt/workspace/common/notifications/actions/PreferenceActions.js
function PreferenceActions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PreferenceActions_defineProperty(target, key, source[key]); }); } return target; }

function PreferenceActions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var UPDATE_PREFERENCE_SETTINGS = 'UPDATE_PREFERENCE_SETTINGS';
var PreferenceActions_updatePreferenceSettings = function updatePreferenceSettings(options) {
  return PreferenceActions_objectSpread({
    type: UPDATE_PREFERENCE_SETTINGS
  }, options);
};
var PreferenceActions_loadPreferenceSettings = function loadPreferenceSettings() {
  return function (dispatch) {
    return AlertPreferenceAPI.get().then(function (response) {
      var preferences = lodash_default.a.get(response, 'subscription_preferences', []);

      var settings = lodash_default.a.get(response, 'settings', []);

      dispatch(PreferenceActions_updatePreferenceSettings({
        preferenceSettings: {
          preferences: preferences,
          settings: settings,
          userPreferencesLoaded: true,
          failedLoadingUserPreferences: false
        }
      }));
    }, function () {
      dispatch(PreferenceActions_updatePreferenceSettings({
        preferenceSettings: {
          userPreferencesLoaded: false,
          failedLoadingUserPreferences: true,
          preferences: [],
          settings: []
        }
      }));
    });
  };
};
// CONCATENATED MODULE: /mnt/workspace/common/notifications/reducers/PreferenceReducer.js
function PreferenceReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PreferenceReducer_defineProperty(target, key, source[key]); }); } return target; }

function PreferenceReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var PreferenceReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_PREFERENCE_SETTINGS:
      var settings = lodash_default.a.get(action, 'preferenceSettings.settings', {});

      var transientNotificationsSettings = lodash_default.a.find(settings, function (setting) {
        return setting[0].name === 'transient_notification';
      });

      return PreferenceReducer_objectSpread({}, state, action.preferenceSettings, {
        isTransientNotificationEnabled: lodash_default.a.get(transientNotificationsSettings, '[0].enable', true)
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: /mnt/workspace/common/notifications/reducers/index.js





/* harmony default export */ var notifications_reducers = (Object(es["combineReducers"])({
  productNotificationsConfigs: ProductNotificationReducers,
  userNotificationsConfigs: UserNotificationReducers,
  configurations: function configurations() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return state;
  },
  userId: function userId() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return state;
  },
  panelConfigs: PanelReducers,
  preferenceSettings: PreferenceReducer
}));
// EXTERNAL MODULE: /tmp/frontend/node_modules/redux-saga/es/index.js + 4 modules
var redux_saga_es = __webpack_require__(118);

// EXTERNAL MODULE: /tmp/frontend/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: /tmp/frontend/node_modules/redux-saga/es/effects.js
var effects = __webpack_require__(9);

// EXTERNAL MODULE: /tmp/frontend/node_modules/phoenix/priv/static/phoenix.js
var phoenix = __webpack_require__(477);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/Selectors.js

var Selectors_getShowTransientNotificationsFlag = function getShowTransientNotificationsFlag(state) {
  return lodash_default.a.get(state, 'configurations.inProductTransientNotificationsEnabled', false);
};
var Selectors_isTransientNotificationEnabled = function isTransientNotificationEnabled(state) {
  return lodash_default.a.get(state, 'preferenceSettings.isTransientNotificationEnabled');
};
var Selectors_getShowNotificationPanelFlag = function getShowNotificationPanelFlag(state) {
  return lodash_default.a.get(state, 'panelConfigs.showNotificationPanel', false);
};
var Selectors_getShowAlertFlag = function getShowAlertFlag(state) {
  return lodash_default.a.get(state, 'configurations.showMyAlertPreference', false);
};
var Selectors_getEnqueuedNotifications = function getEnqueuedNotifications(state) {
  return lodash_default.a.get(state, 'userNotificationsConfigs.enqueuedNotifications', []);
};
var Selectors_getTransientNotifications = function getTransientNotifications(state) {
  return lodash_default.a.get(state, 'userNotificationsConfigs.transientNotifications', []);
};
var Selectors_getUserNotificationsConfigs = function getUserNotificationsConfigs(state) {
  return lodash_default.a.get(state, 'userNotificationsConfigs', []);
};
var Selectors_getUserNotifications = function getUserNotifications(state) {
  return lodash_default.a.get(state, 'userNotificationsConfigs.userNotifications', []);
};
// EXTERNAL MODULE: /mnt/workspace/common/http/index.js
var http = __webpack_require__(19);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/sagas/UserNotificationsSagas.js


var _marked =
/*#__PURE__*/
regenerator_default.a.mark(UserNotificationsSagas_loadSocketConnection),
    _marked2 =
/*#__PURE__*/
regenerator_default.a.mark(UserNotificationsSagas_loadNotifications),
    _marked3 =
/*#__PURE__*/
regenerator_default.a.mark(loadNewNotifications),
    _marked4 =
/*#__PURE__*/
regenerator_default.a.mark(UserNotificationsSagas_onDeleteUserNotification),
    _marked5 =
/*#__PURE__*/
regenerator_default.a.mark(onDeleteUserAllNotifications),
    _marked6 =
/*#__PURE__*/
regenerator_default.a.mark(UserNotificationsSagas_onNotificationReadStateChange),
    _marked7 =
/*#__PURE__*/
regenerator_default.a.mark(UserNotificationsSagas_seeNewNotifications),
    _marked8 =
/*#__PURE__*/
regenerator_default.a.mark(UserNotificationsSagas_moveTransientNotificationIntoPanel),
    _marked9 =
/*#__PURE__*/
regenerator_default.a.mark(UserNotificationsSagas_removeTransientNotification);













function initSocket(channelId, socketParams, options) {
  return Object(redux_saga_es["c" /* eventChannel */])(function (emitter) {
    var socket = new phoenix["Socket"]("wss://".concat(window.location.host, "/api/notifications_and_alerts/socket"), socketParams);
    socket.connect();

    if (options.debugLog) {
      socket.onError(function () {
        console.warn('User Notifications: Error connecting, disabling connection in development mode.');
        socket.disconnect();
      });
    }

    var channel = socket.channel(channelId, {});
    channel.join().receive('error', function (resp) {
      console.info('Socket Error: Unable to join', resp);
    });
    channel.on('new_notification', function (response) {
      return emitter(loadNewNotification(response));
    });
    channel.on('delete_notification', function (response) {
      return emitter(onDeleteUserNotification(response));
    });
    channel.on('delete_all_notifications', function (response) {
      return emitter(onDeleteAllNotifications(response));
    });
    channel.on('mark_notification_as_read', function (response) {
      return emitter(onNotificationReadStateChange(response, true));
    });
    channel.on('mark_notification_as_unread', function (response) {
      return emitter(onNotificationReadStateChange(response, false));
    });
    return function () {};
  });
}

function UserNotificationsSagas_loadSocketConnection(_ref) {
  var userId, options, channelId, response, socketParams, channel, action;
  return regenerator_default.a.wrap(function loadSocketConnection$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          userId = _ref.userId, options = _ref.options;
          channelId = "user: ".concat(userId);
          _context.prev = 2;
          _context.next = 5;
          return Object(effects["b" /* call */])(http["f" /* fetchJson */], '/api/notifications_and_alerts/socket_token', {
            method: 'POST',
            credentials: 'same-origin'
          });

        case 5:
          response = _context.sent;
          socketParams = {
            params: {
              user_id: userId,
              token: response.token
            }
          };

          if (Object(helper["c" /* isIE11 */])()) {
            socketParams.transport = phoenix["LongPoll"];
          }

          _context.next = 10;
          return Object(effects["b" /* call */])(initSocket, channelId, socketParams, options);

        case 10:
          channel = _context.sent;
          _context.next = 13;
          return Object(effects["e" /* put */])(loadNotifications('activity', 0));

        case 13:
          if (!options.loadAlerts) {
            _context.next = 16;
            break;
          }

          _context.next = 16;
          return Object(effects["e" /* put */])(loadNotifications('alert', 0));

        case 16:
          if (false) {}

          _context.next = 19;
          return Object(effects["h" /* take */])(channel);

        case 19:
          action = _context.sent;
          _context.next = 22;
          return Object(effects["e" /* put */])(action);

        case 22:
          _context.next = 16;
          break;

        case 24:
          _context.next = 34;
          break;

        case 26:
          _context.prev = 26;
          _context.t0 = _context["catch"](2);

          if (!options.loadAlerts) {
            _context.next = 31;
            break;
          }

          _context.next = 31;
          return Object(effects["e" /* put */])(UserNotificationActions_updateUserNotificationsByType(NotificationFormatHelper_setNotificationObject(), 'alert'));

        case 31:
          _context.next = 33;
          return Object(effects["e" /* put */])(UserNotificationActions_updateUserNotificationsByType(NotificationFormatHelper_setNotificationObject(), 'activity'));

        case 33:
          console.info('User Notifications: Error Socket connecting', _context.t0);

        case 34:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[2, 26]]);
}
function UserNotificationsSagas_loadNotifications(_ref2) {
  var notificationType, offset, params, queryString, loadNotificationsUrl, _response, _response$count, total, unread, hasMoreNotifications, notifications;

  return regenerator_default.a.wrap(function loadNotifications$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          notificationType = _ref2.notificationType, offset = _ref2.offset;
          _context2.next = 3;
          return Object(effects["e" /* put */])(toggleUserNotificationLoading(true));

        case 3:
          params = {
            limit: constants["h" /* NOTIFICATIONS_PER_PAGE */],
            offset: offset,
            type: notificationType
          };
          queryString = Object(http["b" /* buildQueryString */])(params);
          loadNotificationsUrl = "/api/notifications_and_alerts/notifications?".concat(queryString);
          _context2.prev = 6;
          _context2.next = 9;
          return Object(effects["b" /* call */])(http["f" /* fetchJson */], loadNotificationsUrl, {
            credentials: 'same-origin'
          });

        case 9:
          _response = _context2.sent;
          _context2.next = 12;
          return Object(effects["e" /* put */])(toggleUserNotificationLoading(false));

        case 12:
          offset += constants["h" /* NOTIFICATIONS_PER_PAGE */];
          _response$count = _response.count, total = _response$count.total, unread = _response$count.unread;
          hasMoreNotifications = offset < total;
          notifications = lodash_default.a.get(_response, 'data', []);
          notifications = UserNotificationsSagas_transformNotifications(notifications);
          notifications = NotificationFormatHelper_setNotificationObject({
            hasMoreNotifications: hasMoreNotifications,
            notifications: notifications,
            total: total,
            offset: offset,
            unread: unread
          });
          _context2.next = 20;
          return Object(effects["e" /* put */])(UserNotificationActions_updateUserNotificationsByType(notifications, notificationType));

        case 20:
          _context2.next = 29;
          break;

        case 22:
          _context2.prev = 22;
          _context2.t0 = _context2["catch"](6);
          _context2.next = 26;
          return Object(effects["e" /* put */])(toggleUserNotificationLoading(false));

        case 26:
          _context2.next = 28;
          return Object(effects["e" /* put */])(UserNotificationActions_updateUserNotificationsByType(NotificationFormatHelper_setNotificationObject(), notificationType));

        case 28:
          console.error('error on load notifications', _context2.t0);

        case 29:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[6, 22]]);
}
function loadNewNotifications(_ref3) {
  var response, showTransientNotifications, isTransientNotificationsPreferenceEnabled, showNotificationPanel, _ref4, enqueuedNotifications, transientNotifications, notification, type, showAlertNotifications;

  return regenerator_default.a.wrap(function loadNewNotifications$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          response = _ref3.response;

          if (!(lodash_default.a.isUndefined(response.notification) || !lodash_default.a.isObject(response.notification))) {
            _context3.next = 4;
            break;
          }

          console.info('invalid response', response);
          return _context3.abrupt("return");

        case 4:
          _context3.next = 6;
          return Object(effects["g" /* select */])(Selectors_getShowTransientNotificationsFlag);

        case 6:
          showTransientNotifications = _context3.sent;
          _context3.next = 9;
          return Object(effects["g" /* select */])(Selectors_isTransientNotificationEnabled);

        case 9:
          isTransientNotificationsPreferenceEnabled = _context3.sent;
          _context3.next = 12;
          return Object(effects["g" /* select */])(Selectors_getShowNotificationPanelFlag);

        case 12:
          showNotificationPanel = _context3.sent;
          _context3.next = 15;
          return Object(effects["g" /* select */])(Selectors_getUserNotificationsConfigs);

        case 15:
          _ref4 = _context3.sent;
          enqueuedNotifications = _ref4.enqueuedNotifications;
          transientNotifications = _ref4.transientNotifications;
          notification = response.notification;
          type = notification.type;

          if (!(type == 'alert')) {
            _context3.next = 26;
            break;
          }

          _context3.next = 23;
          return Object(effects["g" /* select */])(Selectors_getShowAlertFlag);

        case 23:
          showAlertNotifications = _context3.sent;

          if (showAlertNotifications) {
            _context3.next = 26;
            break;
          }

          return _context3.abrupt("return");

        case 26:
          if (!(!showNotificationPanel && showTransientNotifications && isTransientNotificationsPreferenceEnabled)) {
            _context3.next = 32;
            break;
          }

          transientNotifications.unshift(NotificationFormatHelper_transformNotification(notification));
          _context3.next = 30;
          return Object(effects["e" /* put */])(updateTransientNotifications(transientNotifications));

        case 30:
          _context3.next = 35;
          break;

        case 32:
          enqueuedNotifications.unshift(NotificationFormatHelper_transformNotification(notification));
          _context3.next = 35;
          return Object(effects["e" /* put */])(updateEnqueuedNotifications(enqueuedNotifications));

        case 35:
          _context3.next = 37;
          return Object(effects["e" /* put */])(increaseNewNotificationCount(type, 1));

        case 37:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
function UserNotificationsSagas_onDeleteUserNotification(_ref5) {
  var response, _ref6, transientNotifications, userNotifications, notificationId, type, notificationIndex, transientNotificationIndex;

  return regenerator_default.a.wrap(function onDeleteUserNotification$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          response = _ref5.response;

          if (UserNotificationsSagas_isValidNotificationResponse(response)) {
            _context4.next = 3;
            break;
          }

          return _context4.abrupt("return");

        case 3:
          _context4.next = 5;
          return Object(effects["g" /* select */])(Selectors_getUserNotificationsConfigs);

        case 5:
          _ref6 = _context4.sent;
          transientNotifications = _ref6.transientNotifications;
          userNotifications = _ref6.userNotifications;
          notificationId = response.notification_id, type = response.type;
          notificationIndex = NotificationFormatHelper_getNotificationIndex(userNotifications[type].notifications, notificationId);

          if (!(notificationIndex !== -1)) {
            _context4.next = 17;
            break;
          }

          if (userNotifications[type].notifications[notificationIndex].read === false) {
            userNotifications[type].unread--;
          }

          userNotifications[type].notifications.splice(notificationIndex, 1);
          userNotifications[type].total--;
          userNotifications[type].offset--;
          _context4.next = 23;
          break;

        case 17:
          transientNotificationIndex = NotificationFormatHelper_getNotificationIndex(transientNotifications, notificationId);

          if (!(transientNotificationIndex !== -1)) {
            _context4.next = 23;
            break;
          }

          if (transientNotifications[transientNotificationIndex].read === false) {
            userNotifications[type].unread--;
          }

          transientNotifications.splice(transientNotificationIndex, 1);
          _context4.next = 23;
          return Object(effects["e" /* put */])(updateTransientNotifications(transientNotifications));

        case 23:
          _context4.next = 25;
          return Object(effects["e" /* put */])(updateUserNotifications(userNotifications));

        case 25:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
function onDeleteUserAllNotifications() {
  var userNotifications;
  return regenerator_default.a.wrap(function onDeleteUserAllNotifications$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(effects["g" /* select */])(Selectors_getUserNotifications);

        case 2:
          userNotifications = _context5.sent;
          userNotifications.activity = NotificationFormatHelper_setNotificationObject();

          if (userNotifications.alert) {
            userNotifications.alert = NotificationFormatHelper_setNotificationObject();
          }

          _context5.next = 7;
          return Object(effects["e" /* put */])(updateEnqueuedNotifications([]));

        case 7:
          _context5.next = 9;
          return Object(effects["e" /* put */])(updateUserNotifications(userNotifications));

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
function UserNotificationsSagas_onNotificationReadStateChange(_ref7) {
  var response, readState, notificationId, type, _ref8, transientNotifications, userNotifications, notificationIndex, _transientNotificationIndex;

  return regenerator_default.a.wrap(function onNotificationReadStateChange$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          response = _ref7.response, readState = _ref7.readState;

          if (UserNotificationsSagas_isValidNotificationResponse(response)) {
            _context6.next = 3;
            break;
          }

          return _context6.abrupt("return");

        case 3:
          notificationId = response.notification_id, type = response.type;
          _context6.next = 6;
          return Object(effects["g" /* select */])(Selectors_getUserNotificationsConfigs);

        case 6:
          _ref8 = _context6.sent;
          transientNotifications = _ref8.transientNotifications;
          userNotifications = _ref8.userNotifications;
          notificationIndex = NotificationFormatHelper_getNotificationIndex(userNotifications[type].notifications, notificationId);

          if (!(notificationIndex !== -1)) {
            _context6.next = 14;
            break;
          }

          userNotifications[type].notifications[notificationIndex].read = readState;
          _context6.next = 18;
          break;

        case 14:
          _transientNotificationIndex = NotificationFormatHelper_getNotificationIndex(transientNotifications, notificationId);
          transientNotifications[_transientNotificationIndex].read = readState;
          _context6.next = 18;
          return Object(effects["e" /* put */])(updateTransientNotifications(transientNotifications));

        case 18:
          if (readState) {
            userNotifications[type].unread--;
          } else {
            userNotifications[type].unread++;
          }

          _context6.next = 21;
          return Object(effects["e" /* put */])(updateUserNotifications(userNotifications));

        case 21:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}
function UserNotificationsSagas_seeNewNotifications(_ref9) {
  var notificationType, matchesType, _ref10, enqueuedNotifications, userNotifications;

  return regenerator_default.a.wrap(function seeNewNotifications$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          notificationType = _ref9.notificationType;
          matchesType = lodash_default.a.matches({
            type: notificationType
          });
          _context7.next = 4;
          return Object(effects["g" /* select */])(Selectors_getUserNotificationsConfigs);

        case 4:
          _ref10 = _context7.sent;
          enqueuedNotifications = _ref10.enqueuedNotifications;
          userNotifications = _ref10.userNotifications;
          userNotifications[notificationType].notifications = lodash_default.a.filter(enqueuedNotifications, matchesType).concat(userNotifications[notificationType].notifications);
          enqueuedNotifications = lodash_default.a.reject(enqueuedNotifications, matchesType);
          _context7.next = 11;
          return Object(effects["e" /* put */])(updateEnqueuedNotifications(enqueuedNotifications));

        case 11:
          _context7.next = 13;
          return Object(effects["e" /* put */])(updateUserNotifications(userNotifications));

        case 13:
          _context7.next = 15;
          return Object(effects["e" /* put */])(updateTransientNotifications([]));

        case 15:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}
function UserNotificationsSagas_moveTransientNotificationIntoPanel(_ref11) {
  var notificationId, _ref12, transientNotifications, userNotifications, notificationIndex, _notificationType, _notifications, userNotificationIndex;

  return regenerator_default.a.wrap(function moveTransientNotificationIntoPanel$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          notificationId = _ref11.notificationId;
          _context8.next = 3;
          return Object(effects["g" /* select */])(Selectors_getUserNotificationsConfigs);

        case 3:
          _ref12 = _context8.sent;
          transientNotifications = _ref12.transientNotifications;
          userNotifications = _ref12.userNotifications;
          notificationIndex = NotificationFormatHelper_getNotificationIndex(transientNotifications, notificationId);

          if (!(notificationIndex !== -1)) {
            _context8.next = 14;
            break;
          }

          _notificationType = transientNotifications[notificationIndex].type;
          _notifications = userNotifications[_notificationType].notifications;
          userNotificationIndex = NotificationFormatHelper_getNotificationIndex(_notifications, notificationId);

          if (userNotificationIndex === -1) {
            userNotifications[_notificationType].notifications.unshift(transientNotifications[notificationIndex]);
          }

          _context8.next = 14;
          return Object(effects["e" /* put */])(updateUserNotifications(userNotifications));

        case 14:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}
function UserNotificationsSagas_removeTransientNotification(_ref13) {
  var notificationId, transientNotifications, notificationIndex;
  return regenerator_default.a.wrap(function removeTransientNotification$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          notificationId = _ref13.notificationId;
          _context9.next = 3;
          return Object(effects["g" /* select */])(Selectors_getTransientNotifications);

        case 3:
          transientNotifications = _context9.sent;
          notificationIndex = NotificationFormatHelper_getNotificationIndex(transientNotifications, notificationId);

          if (!(notificationIndex !== -1)) {
            _context9.next = 9;
            break;
          }

          transientNotifications.splice(notificationIndex, 1);
          _context9.next = 9;
          return Object(effects["e" /* put */])(updateTransientNotifications(transientNotifications));

        case 9:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

var UserNotificationsSagas_transformNotifications = function transformNotifications(notifications) {
  return lodash_default.a.map(notifications, NotificationFormatHelper_transformNotification);
};

var UserNotificationsSagas_isValidNotificationResponse = function isValidNotificationResponse(_ref14) {
  var notificationId = _ref14.notification_id,
      type = _ref14.type;
  return lodash_default.a.isNumber(notificationId) && lodash_default.a.isString(type);
};

/* harmony default export */ var UserNotificationsSagas = ([Object(effects["i" /* takeEvery */])(LOAD_NOTIFICATIONS, UserNotificationsSagas_loadNotifications), Object(effects["i" /* takeEvery */])(LOAD_SOCKET_CONNECTION, UserNotificationsSagas_loadSocketConnection), Object(effects["i" /* takeEvery */])(LOAD_NEW_NOTIFICATIONS, loadNewNotifications), Object(effects["i" /* takeEvery */])(ON_DELETE_USER_NOTIFICATION, UserNotificationsSagas_onDeleteUserNotification), Object(effects["i" /* takeEvery */])(ON_DELETE_ALL_USER_NOTIFICATION, onDeleteUserAllNotifications), Object(effects["i" /* takeEvery */])(ON_USER_NOTIFICATION_READ_STATE_CHANGE, UserNotificationsSagas_onNotificationReadStateChange), Object(effects["i" /* takeEvery */])(SEE_NEW_USER_NOTIFICATION, UserNotificationsSagas_seeNewNotifications), Object(effects["i" /* takeEvery */])(MOVE_TRANSIENT_NOTIFICATION, UserNotificationsSagas_moveTransientNotificationIntoPanel), Object(effects["i" /* takeEvery */])(REMOVE_TRANSIENT_NOTIFICATION, UserNotificationsSagas_removeTransientNotification)]);
// CONCATENATED MODULE: /mnt/workspace/common/notifications/sagas/index.js


var sagas_marked =
/*#__PURE__*/
regenerator_default.a.mark(sagas);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



function sagas() {
  return regenerator_default.a.wrap(function sagas$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(effects["a" /* all */])(_toConsumableArray(UserNotificationsSagas));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, sagas_marked);
}
// EXTERNAL MODULE: /mnt/workspace/common/dom_helpers/keycodes_deprecated.js
var keycodes_deprecated = __webpack_require__(33);

// EXTERNAL MODULE: /tmp/frontend/node_modules/classnames/index.js
var classnames = __webpack_require__(13);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: /mnt/workspace/common/components/SocrataIcon/index.js
var SocrataIcon = __webpack_require__(17);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/Bell/UnreadCount.js




function UnreadCount(props) {
  var unreadCount = props.unreadCount,
      unreadCountClass = props.unreadCountClass;

  if (unreadCount <= 0) {
    return null;
  }

  var notificationCountClassNames = classnames_default()(unreadCountClass, {
    'count-more-than-limit': unreadCount > constants["g" /* MAX_NOTIFICATION_DISPLAY_COUNT */]
  });
  return react_default.a.createElement("span", {
    className: notificationCountClassNames
  }, unreadCount > constants["g" /* MAX_NOTIFICATION_DISPLAY_COUNT */] ? "".concat(constants["g" /* MAX_NOTIFICATION_DISPLAY_COUNT */], "+") : unreadCount);
}
UnreadCount.propTypes = {
  unreadCount: prop_types_default.a.number.isRequired,
  unreadCountClass: prop_types_default.a.string
};
// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/Bell/Bell.js
function Bell_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Bell_typeof = function _typeof(obj) { return typeof obj; }; } else { Bell_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Bell_typeof(obj); }

function Bell_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Bell_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Bell_createClass(Constructor, protoProps, staticProps) { if (protoProps) Bell_defineProperties(Constructor.prototype, protoProps); if (staticProps) Bell_defineProperties(Constructor, staticProps); return Constructor; }

function Bell_possibleConstructorReturn(self, call) { if (call && (Bell_typeof(call) === "object" || typeof call === "function")) { return call; } return Bell_assertThisInitialized(self); }

function Bell_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Bell_getPrototypeOf(o) { Bell_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Bell_getPrototypeOf(o); }

function Bell_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Bell_setPrototypeOf(subClass, superClass); }

function Bell_setPrototypeOf(o, p) { Bell_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Bell_setPrototypeOf(o, p); }








var Bell_Bell =
/*#__PURE__*/
function (_Component) {
  Bell_inherits(Bell, _Component);

  function Bell() {
    Bell_classCallCheck(this, Bell);

    return Bell_possibleConstructorReturn(this, Bell_getPrototypeOf(Bell).apply(this, arguments));
  }

  Bell_createClass(Bell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          unreadProductNotificationCount = _this$props.unreadProductNotificationCount,
          unreadUserNotificationCount = _this$props.unreadUserNotificationCount,
          toggleNotificationPanel = _this$props.toggleNotificationPanel;
      var scope = 'shared.site_chrome.notifications';
      var totalUnreadNotifications = unreadProductNotificationCount + unreadUserNotificationCount;
      var hasUnreadNotifications = totalUnreadNotifications > 0;
      var notificationsClassName = classnames_default()('notifications-bell', {
        'has-unread-notifications': hasUnreadNotifications,
        'unread': hasUnreadNotifications
      });
      var tipsyText;

      if (hasUnreadNotifications) {
        tipsyText = i18n["b" /* default */].t('has_unread_notifications', {
          scope: scope
        });
      } else {
        tipsyText = i18n["b" /* default */].t('no_unread_notifications', {
          scope: scope
        });
      }

      return react_default.a.createElement("button", {
        "aria-haspopup": "true",
        "aria-label": tipsyText,
        className: notificationsClassName,
        onClick: toggleNotificationPanel,
        tabIndex: "0",
        title: tipsyText
      }, react_default.a.createElement(SocrataIcon["a" /* SocrataIcon */], {
        name: "bell"
      }), react_default.a.createElement(UnreadCount, {
        unreadCount: totalUnreadNotifications,
        unreadCountClass: "new-notifications-label"
      }));
    }
  }]);

  return Bell;
}(react["Component"]);

Bell_Bell.propTypes = {
  unreadProductNotificationCount: prop_types_default.a.number.isRequired,
  unreadUserNotificationCount: prop_types_default.a.number.isRequired,
  toggleNotificationPanel: prop_types_default.a.func.isRequired
};
/* harmony default export */ var components_Bell_Bell = (Bell_Bell);
// EXTERNAL MODULE: /tmp/frontend/node_modules/react-css-modules/dist/index.js
var dist = __webpack_require__(25);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: /mnt/workspace/common/components/Modal/index.js + 3 modules
var Modal = __webpack_require__(32);

// EXTERNAL MODULE: /mnt/workspace/common/visualizations/index.js + 93 modules
var visualizations = __webpack_require__(114);

// EXTERNAL MODULE: /mnt/workspace/common/visualizations/helpers/VifHelpers.js
var VifHelpers = __webpack_require__(88);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/TableVisualization/index.js
function TableVisualization_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TableVisualization_typeof = function _typeof(obj) { return typeof obj; }; } else { TableVisualization_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TableVisualization_typeof(obj); }

function TableVisualization_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TableVisualization_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TableVisualization_createClass(Constructor, protoProps, staticProps) { if (protoProps) TableVisualization_defineProperties(Constructor.prototype, protoProps); if (staticProps) TableVisualization_defineProperties(Constructor, staticProps); return Constructor; }

function TableVisualization_possibleConstructorReturn(self, call) { if (call && (TableVisualization_typeof(call) === "object" || typeof call === "function")) { return call; } return TableVisualization_assertThisInitialized(self); }

function TableVisualization_getPrototypeOf(o) { TableVisualization_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TableVisualization_getPrototypeOf(o); }

function TableVisualization_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TableVisualization_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TableVisualization_setPrototypeOf(subClass, superClass); }

function TableVisualization_setPrototypeOf(o, p) { TableVisualization_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TableVisualization_setPrototypeOf(o, p); }

function TableVisualization_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var TableVisualization_TableVisualization =
/*#__PURE__*/
function (_Component) {
  TableVisualization_inherits(TableVisualization, _Component);

  function TableVisualization() {
    var _getPrototypeOf2;

    var _this;

    TableVisualization_classCallCheck(this, TableVisualization);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = TableVisualization_possibleConstructorReturn(this, (_getPrototypeOf2 = TableVisualization_getPrototypeOf(TableVisualization)).call.apply(_getPrototypeOf2, [this].concat(args)));

    TableVisualization_defineProperty(TableVisualization_assertThisInitialized(_this), "createVisualizationRenderer", function () {
      return new visualizations["VisualizationRenderer"](_this.getVif(), _this.element, _this.props.options);
    });

    TableVisualization_defineProperty(TableVisualization_assertThisInitialized(_this), "getVif", function () {
      var _this$props = _this.props,
          datasetUid = _this$props.datasetUid,
          domain = _this$props.domain,
          soqlQuery = _this$props.soqlQuery;
      return Object(VifHelpers["getRawSoqlTableVif"])(domain, datasetUid, soqlQuery);
    });

    return _this;
  }

  TableVisualization_createClass(TableVisualization, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.visualization = this.createVisualizationRenderer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.visualization) {
        this.visualization = this.createVisualizationRenderer();
      } else {
        this.visualization.update(this.getVif());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.visualization) {
        this.visualization.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react_default.a.createElement("div", {
        ref: function ref(el) {
          return _this2.element = el;
        }
      });
    }
  }]);

  return TableVisualization;
}(react["Component"]);

TableVisualization_TableVisualization.propTypes = {
  datasetUid: prop_types_default.a.string.isRequired,
  domain: prop_types_default.a.string.isRequired,
  soqlQuery: prop_types_default.a.string.isRequired
};
/* harmony default export */ var components_TableVisualization = (TableVisualization_TableVisualization);
// EXTERNAL MODULE: /mnt/workspace/common/notifications/components/UserNotifications/alert-data-grid-modal.module.scss
var alert_data_grid_modal_module = __webpack_require__(1529);
var alert_data_grid_modal_module_default = /*#__PURE__*/__webpack_require__.n(alert_data_grid_modal_module);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/UserNotifications/AlertDataGridModal.js
function AlertDataGridModal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AlertDataGridModal_typeof = function _typeof(obj) { return typeof obj; }; } else { AlertDataGridModal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AlertDataGridModal_typeof(obj); }

function AlertDataGridModal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AlertDataGridModal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AlertDataGridModal_createClass(Constructor, protoProps, staticProps) { if (protoProps) AlertDataGridModal_defineProperties(Constructor.prototype, protoProps); if (staticProps) AlertDataGridModal_defineProperties(Constructor, staticProps); return Constructor; }

function AlertDataGridModal_possibleConstructorReturn(self, call) { if (call && (AlertDataGridModal_typeof(call) === "object" || typeof call === "function")) { return call; } return AlertDataGridModal_assertThisInitialized(self); }

function AlertDataGridModal_getPrototypeOf(o) { AlertDataGridModal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AlertDataGridModal_getPrototypeOf(o); }

function AlertDataGridModal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AlertDataGridModal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AlertDataGridModal_setPrototypeOf(subClass, superClass); }

function AlertDataGridModal_setPrototypeOf(o, p) { AlertDataGridModal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AlertDataGridModal_setPrototypeOf(o, p); }

function AlertDataGridModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var AlertDataGridModal_scope = 'shared.site_chrome.notifications.alert_data_grid_modal';
var TABS = {
  DATA: 'DATA',
  DETAILS: 'DETAILS'
};
/**
 * Renders the result of the soql query that triggered the alert in a table (grid).
 */

var AlertDataGridModal_AlertDataGridModal =
/*#__PURE__*/
function (_Component) {
  AlertDataGridModal_inherits(AlertDataGridModal, _Component);

  function AlertDataGridModal() {
    var _getPrototypeOf2;

    var _this;

    AlertDataGridModal_classCallCheck(this, AlertDataGridModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = AlertDataGridModal_possibleConstructorReturn(this, (_getPrototypeOf2 = AlertDataGridModal_getPrototypeOf(AlertDataGridModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    AlertDataGridModal_defineProperty(AlertDataGridModal_assertThisInitialized(_this), "state", {
      activeTab: TABS.DATA
    });

    AlertDataGridModal_defineProperty(AlertDataGridModal_assertThisInitialized(_this), "renderAlertData", function () {
      var _this$props = _this.props,
          domain = _this$props.domain,
          datasetUid = _this$props.datasetUid,
          soqlQuery = _this$props.soqlQuery;
      var activeTab = _this.state.activeTab;
      var isActive = activeTab === TABS.DATA;
      var tableVisProps = {
        domain: domain,
        datasetUid: datasetUid,
        soqlQuery: soqlQuery
      };
      return react_default.a.createElement("div", {
        styleName: classnames_default()({
          active: isActive
        }, 'alert-data-container')
      }, react_default.a.createElement(components_TableVisualization, tableVisProps));
    });

    AlertDataGridModal_defineProperty(AlertDataGridModal_assertThisInitialized(_this), "renderAlertDetails", function () {
      var soqlQuery = _this.props.soqlQuery;
      var activeTab = _this.state.activeTab;
      var isActive = activeTab === TABS.DETAILS;
      return react_default.a.createElement("div", {
        styleName: classnames_default()({
          active: isActive
        }, 'alert-details-container')
      }, react_default.a.createElement("table", {
        className: "alert-data-grid-modal-details-table"
      }, react_default.a.createElement("tbody", null, react_default.a.createElement("tr", {
        styleName: "entry"
      }, react_default.a.createElement("td", {
        styleName: "name"
      }, i18n["b" /* default */].t('about_tab.query', {
        scope: AlertDataGridModal_scope
      })), react_default.a.createElement("td", {
        styleName: "value"
      }, soqlQuery)), react_default.a.createElement("tr", {
        styleName: "entry"
      }, react_default.a.createElement("td", {
        styleName: "name"
      }, i18n["b" /* default */].t('about_tab.dataset', {
        scope: AlertDataGridModal_scope
      })), react_default.a.createElement("td", {
        styleName: "value"
      }, _this.renderDatasetLink())), react_default.a.createElement("tr", {
        styleName: "entry"
      }, react_default.a.createElement("td", {
        styleName: "name"
      }, i18n["b" /* default */].t('about_tab.domain', {
        scope: AlertDataGridModal_scope
      })), react_default.a.createElement("td", {
        styleName: "value"
      }, _this.renderDomainLink())))));
    });

    AlertDataGridModal_defineProperty(AlertDataGridModal_assertThisInitialized(_this), "renderDatasetLink", function () {
      var _this$props2 = _this.props,
          datasetName = _this$props2.datasetName,
          datasetUid = _this$props2.datasetUid,
          domain = _this$props2.domain;
      var href = "//".concat(domain, "/dataset/").concat(datasetUid);
      return react_default.a.createElement("a", {
        href: href
      }, datasetName);
    });

    AlertDataGridModal_defineProperty(AlertDataGridModal_assertThisInitialized(_this), "renderDomainLink", function () {
      var domain = _this.props.domain;
      var href = "//".concat(domain);
      return react_default.a.createElement("a", {
        href: href
      }, domain);
    });

    AlertDataGridModal_defineProperty(AlertDataGridModal_assertThisInitialized(_this), "renderSubTitle", function () {
      var alertName = _this.props.alertName;
      var basedOn = i18n["b" /* default */].t('based_on', {
        scope: AlertDataGridModal_scope
      });
      return react_default.a.createElement("div", {
        styleName: "sub-title"
      }, alertName, " | ", basedOn, " ", _this.renderDatasetLink());
    });

    AlertDataGridModal_defineProperty(AlertDataGridModal_assertThisInitialized(_this), "renderTab", function (tabId, name, className) {
      var activeTab = _this.state.activeTab;
      return react_default.a.createElement("div", {
        className: className,
        styleName: classnames_default()({
          active: activeTab === tabId
        }, 'tab-name'),
        onClick: function onClick() {
          return _this.setState({
            activeTab: tabId
          });
        }
      }, name);
    });

    AlertDataGridModal_defineProperty(AlertDataGridModal_assertThisInitialized(_this), "renderTabs", function () {
      var datasetDownloadLink = _this.props.datasetDownloadLink;
      var dataTabName = i18n["b" /* default */].t('data_tab.name', {
        scope: AlertDataGridModal_scope
      });
      var detailsTabName = i18n["b" /* default */].t('about_tab.name', {
        scope: AlertDataGridModal_scope
      });
      return react_default.a.createElement("div", {
        styleName: "tabs-list"
      }, _this.renderTab(TABS.DATA, dataTabName, 'alert-data-grid-modal-data-tab'), _this.renderTab(TABS.DETAILS, detailsTabName, 'alert-data-grid-modal-details-tab'), react_default.a.createElement("div", {
        styleName: "actions-pane"
      }, react_default.a.createElement("a", {
        styleName: "user-notification-download-icon",
        href: datasetDownloadLink,
        role: "button",
        target: "_blank"
      }, react_default.a.createElement(SocrataIcon["a" /* SocrataIcon */], {
        name: "download"
      }))));
    });

    return _this;
  }

  AlertDataGridModal_createClass(AlertDataGridModal, [{
    key: "render",
    value: function render() {
      var onClose = this.props.onClose;
      var modalTitle = i18n["b" /* default */].t('title', {
        scope: AlertDataGridModal_scope
      });
      return react_default.a.createElement(Modal["a" /* Modal */], {
        onDismiss: onClose,
        styleName: "alert-data-grid-modal"
      }, react_default.a.createElement(Modal["d" /* ModalHeader */], {
        title: modalTitle,
        onDismiss: onClose
      }), react_default.a.createElement(Modal["b" /* ModalContent */], null, this.renderSubTitle(), this.renderTabs(), react_default.a.createElement("div", {
        styleName: "tab-content"
      }, this.renderAlertData(), this.renderAlertDetails())));
    }
  }]);

  return AlertDataGridModal;
}(react["Component"]);
AlertDataGridModal_AlertDataGridModal.propTypes = {
  domain: prop_types_default.a.string.isRequired,
  datasetUid: prop_types_default.a.string.isRequired,
  datasetName: prop_types_default.a.string.isRequired,
  datasetDownloadLink: prop_types_default.a.string.isRequired,
  alertName: prop_types_default.a.string.isRequired,
  // Name of the alert
  soqlQuery: prop_types_default.a.string.isRequired,
  onClose: prop_types_default.a.func
};
AlertDataGridModal_AlertDataGridModal.defaultProps = {
  onClose: lodash_default.a.noop
};
/* harmony default export */ var UserNotifications_AlertDataGridModal = (dist_default()(AlertDataGridModal_AlertDataGridModal, alert_data_grid_modal_module_default.a, {
  allowMultiple: true
}));
// EXTERNAL MODULE: /tmp/frontend/node_modules/moment/moment.js
var moment = __webpack_require__(11);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/UserNotifications/UserNotification.js
function UserNotification_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UserNotification_typeof = function _typeof(obj) { return typeof obj; }; } else { UserNotification_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UserNotification_typeof(obj); }

function UserNotification_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UserNotification_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UserNotification_createClass(Constructor, protoProps, staticProps) { if (protoProps) UserNotification_defineProperties(Constructor.prototype, protoProps); if (staticProps) UserNotification_defineProperties(Constructor, staticProps); return Constructor; }

function UserNotification_possibleConstructorReturn(self, call) { if (call && (UserNotification_typeof(call) === "object" || typeof call === "function")) { return call; } return UserNotification_assertThisInitialized(self); }

function UserNotification_getPrototypeOf(o) { UserNotification_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UserNotification_getPrototypeOf(o); }

function UserNotification_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UserNotification_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UserNotification_setPrototypeOf(subClass, superClass); }

function UserNotification_setPrototypeOf(o, p) { UserNotification_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UserNotification_setPrototypeOf(o, p); }

function UserNotification_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var UserNotification_scope = 'shared.site_chrome.notifications';

var UserNotification_UserNotification =
/*#__PURE__*/
function (_React$Component) {
  UserNotification_inherits(UserNotification, _React$Component);

  function UserNotification() {
    var _getPrototypeOf2;

    var _this;

    UserNotification_classCallCheck(this, UserNotification);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = UserNotification_possibleConstructorReturn(this, (_getPrototypeOf2 = UserNotification_getPrototypeOf(UserNotification)).call.apply(_getPrototypeOf2, [this].concat(args)));

    UserNotification_defineProperty(UserNotification_assertThisInitialized(_this), "state", {
      fadeAwayTimeoutId: null
    });

    UserNotification_defineProperty(UserNotification_assertThisInitialized(_this), "getUserActivityMessageBody", function () {
      var notification = _this.props.notification;

      var activityDetails = lodash_default.a.get(notification, 'activityDetails');

      var activityType = lodash_default.a.get(notification, 'activityType');

      var domainName = lodash_default.a.get(notification, 'domainName');

      var newRoleOfUser = lodash_default.a.get(activityDetails, 'newRole', '');

      var oldRoleOfUser = lodash_default.a.get(activityDetails, 'oldRole', '');

      var roleOfUser = lodash_default.a.get(activityDetails, 'role', '');

      var targetUserName = lodash_default.a.get(notification, 'targetUserName', '');

      var userAddedAction = i18n["b" /* default */].t('user_added_action', {
        scope: UserNotification_scope
      });
      var userRemovedAction = i18n["b" /* default */].t('user_removed_action', {
        scope: UserNotification_scope
      });
      var userRoleDescription = lodash_default.a.isEmpty(roleOfUser) || lodash_default.a.isNull(roleOfUser) ? '' : i18n["b" /* default */].t('user_role_description', {
        scope: UserNotification_scope,
        roleOfUser: roleOfUser
      });
      var userAddedWithDomain = i18n["b" /* default */].t('user_added_with_domain', {
        scope: UserNotification_scope,
        addedAction: userAddedAction,
        domain: i18n["b" /* default */].t('to_domain', {
          scope: UserNotification_scope,
          domainName: domainName
        }),
        userRoleDescription: userRoleDescription
      });
      var userRemovedWithDomain = i18n["b" /* default */].t('user_removed_with_domain', {
        scope: UserNotification_scope,
        removedAction: userRemovedAction,
        domain: i18n["b" /* default */].t('from_domain', {
          scope: UserNotification_scope,
          domainName: domainName
        })
      });
      var userRoleChangedAction = i18n["b" /* default */].t('user_role_changed_action', {
        scope: UserNotification_scope
      });
      var userActivityAction = {
        UserAdded: userAddedWithDomain,
        UserRemoved: userRemovedWithDomain,
        UserRoleChanged: userRoleChangedAction
      };
      var translationKey = 'user_added_or_removed_description';

      if (activityType === 'UserRoleChanged') {
        var hasOldAndNewRoles = !lodash_default.a.isEmpty(oldRoleOfUser) && !lodash_default.a.isEmpty(newRoleOfUser) && oldRoleOfUser !== 'null' && newRoleOfUser !== 'null';
        translationKey = hasOldAndNewRoles ? 'user_role_changed_with_roles_in_domain' : 'user_role_changed_in_domain';
      }

      var activityDescription = i18n["b" /* default */].t(translationKey, {
        scope: UserNotification_scope,
        name: targetUserName,
        action: userActivityAction[activityType],
        oldRole: oldRoleOfUser,
        newRole: newRoleOfUser,
        domainName: domainName
      });
      return activityDescription;
    });

    UserNotification_defineProperty(UserNotification_assertThisInitialized(_this), "getMessageBody", function () {
      var _this$props$notificat = _this.props.notification,
          activityType = _this$props$notificat.activityType,
          messageBody = _this$props$notificat.messageBody;

      if (lodash_default.a.includes(constants["l" /* USER_ACTIVITY_TYPES */], activityType)) {
        return _this.getUserActivityMessageBody();
      } else {
        return messageBody;
      }
    });

    UserNotification_defineProperty(UserNotification_assertThisInitialized(_this), "renderAlertLabel", function () {
      var notification = _this.props.notification;

      if (notification.type === 'alert') {
        return react_default.a.createElement("em", null, i18n["b" /* default */].t('filter_alert_notifications_tab_text', {
          scope: UserNotification_scope
        }));
      }

      return null;
    });

    UserNotification_defineProperty(UserNotification_assertThisInitialized(_this), "renderUnreadIcon", function () {
      var _this$props = _this.props,
          notification = _this$props.notification,
          onToggleReadUserNotification = _this$props.onToggleReadUserNotification;
      var id = notification.id,
          read = notification.read; // title text indicates the action which will follow on icon click

      var linkTitleI18nKey = read ? 'mark_as_unread' : 'mark_as_read';
      return react_default.a.createElement("span", {
        className: "toggle-notification-read-state link-icon",
        role: "button",
        title: i18n["b" /* default */].t(linkTitleI18nKey, {
          scope: UserNotification_scope
        }),
        onClick: function onClick() {
          return onToggleReadUserNotification(id, !read);
        }
      }, react_default.a.createElement(SocrataIcon["a" /* SocrataIcon */], {
        name: "checkmark3"
      }));
    });

    UserNotification_defineProperty(UserNotification_assertThisInitialized(_this), "renderClearIcon", function () {
      var _this$props2 = _this.props,
          notification = _this$props2.notification,
          onClearUserNotification = _this$props2.onClearUserNotification;
      return react_default.a.createElement("span", {
        className: "user-notification-clear-icon link-icon",
        role: "button",
        title: i18n["b" /* default */].t('clear_notification_text', {
          scope: UserNotification_scope
        }),
        onClick: function onClick() {
          return onClearUserNotification(notification.id);
        }
      }, react_default.a.createElement(SocrataIcon["a" /* SocrataIcon */], {
        name: "close-2"
      }));
    });

    UserNotification_defineProperty(UserNotification_assertThisInitialized(_this), "renderNotificationMessage", function () {
      var notification = _this.props.notification;
      var activityUniqueKey = notification.activityUniqueKey,
          alertName = notification.alertName,
          assetType = notification.assetType,
          link = notification.link,
          type = notification.type;
      var alertOrNotificationTitle = alertName;

      if (type !== 'alert') {
        if (assetType === 'data_asset') {
          alertOrNotificationTitle = i18n["b" /* default */].t(activityUniqueKey, {
            scope: "".concat(UserNotification_scope, ".usaid")
          });
        } else {
          alertOrNotificationTitle = i18n["b" /* default */].t(activityUniqueKey, {
            scope: UserNotification_scope
          });
        }
      }

      var notificationTitle = react_default.a.createElement("div", null, react_default.a.createElement("strong", {
        className: "user-notification-title"
      }, _this.renderAlertLabel(), alertOrNotificationTitle), react_default.a.createElement("span", {
        className: "notification-body"
      }, _this.getMessageBody()));

      if (lodash_default.a.isNull(link)) {
        return react_default.a.createElement("span", {
          className: "title"
        }, notificationTitle);
      }

      return react_default.a.createElement("a", {
        className: "title",
        href: link,
        target: "_blank"
      }, notificationTitle);
    });

    UserNotification_defineProperty(UserNotification_assertThisInitialized(_this), "renderDomainName", function (domainName, domainNameLink) {
      // We are showing Domain Name for UserNotification and not for Transient Notification
      var isTransientNotification = _this.props.isTransientNotification;

      if (!isTransientNotification) {
        return react_default.a.createElement("a", {
          className: "domain-name",
          href: domainNameLink,
          target: "_blank"
        }, domainName);
      }
    });

    UserNotification_defineProperty(UserNotification_assertThisInitialized(_this), "renderDetailsLink", function () {
      var _this$props3 = _this.props,
          isTransientNotification = _this$props3.isTransientNotification,
          notification = _this$props3.notification,
          onClickAlertViewData = _this$props3.onClickAlertViewData;

      if (!isTransientNotification) {
        return react_default.a.createElement("span", {
          className: "alert-data-details alert-details",
          onClick: function onClick() {
            onClickAlertViewData(notification);
          }
        }, i18n["b" /* default */].t('details_label', {
          scope: UserNotification_scope
        }));
      }
    });

    UserNotification_defineProperty(UserNotification_assertThisInitialized(_this), "renderNotificationDetails", function () {
      var notification = _this.props.notification;
      var userName = notification.userName,
          userProfileLink = notification.userProfileLink,
          createdAt = notification.createdAt,
          domainNameLink = notification.domainNameLink;
      var details = null;
      var domainName;

      if (notification.type === 'alert') {
        domainName = notification.alertDomain;
        details = _this.renderDetailsLink();
      } else {
        var userProfileLinkElem = lodash_default.a.isNull(userProfileLink) ? react_default.a.createElement("span", {
          className: "user-name"
        }, userName) : react_default.a.createElement("a", {
          className: "user-name",
          href: userProfileLink,
          target: "_blank"
        }, userName);
        domainName = notification.domainCname;
        details = react_default.a.createElement("span", {
          className: "activity-details"
        }, react_default.a.createElement("span", null, i18n["b" /* default */].t('by_label', {
          scope: UserNotification_scope
        })), " ", userProfileLinkElem);
      }

      return react_default.a.createElement("div", {
        className: "notification-details"
      }, react_default.a.createElement("div", {
        className: "details"
      }, react_default.a.createElement("span", {
        className: "timestamp"
      }, moment_default.a.utc(createdAt).locale(i18n["b" /* default */].locale).fromNow()), details), _this.renderDomainName(domainName, domainNameLink));
    });

    return _this;
  }

  UserNotification_createClass(UserNotification, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var isTransientNotification = this.props.isTransientNotification;

      if (isTransientNotification) {
        var _this$props4 = this.props,
            moveTransientNotificationIntoPanel = _this$props4.moveTransientNotificationIntoPanel,
            notification = _this$props4.notification,
            removeTransientNotification = _this$props4.removeTransientNotification;
        moveTransientNotificationIntoPanel(notification.id);
        var fadeAwayTimeoutId = setTimeout(function () {
          removeTransientNotification(notification.id);
        }, constants["f" /* FADE_TRANSIENT_NOTIFICATION_AFTER_MILLISECONDS */]);
        this.setState({
          fadeAwayTimeoutId: fadeAwayTimeoutId
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var isTransientNotification = this.props.isTransientNotification;
      var fadeAwayTimeoutId = this.state.fadeAwayTimeoutId;

      if (isTransientNotification && !lodash_default.a.isNull(fadeAwayTimeoutId)) {
        clearTimeout(fadeAwayTimeoutId);
        fadeAwayTimeoutId = null;
        this.setState({
          fadeAwayTimeoutId: fadeAwayTimeoutId
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          isTransientNotification = _this$props5.isTransientNotification,
          notification = _this$props5.notification;
      var id = notification.id,
          read = notification.read,
          type = notification.type;
      var isUnread = !read;
      return react_default.a.createElement("li", {
        "data-notification-id": id,
        className: classnames_default()('user-notification-item', type, {
          'unread': isUnread,
          'transient': isTransientNotification
        })
      }, react_default.a.createElement("div", {
        className: "clearfix notification-wrapper"
      }, react_default.a.createElement("div", {
        className: "notification-info"
      }, this.renderNotificationMessage(), this.renderNotificationDetails()), react_default.a.createElement("div", {
        className: "actions-wrapper"
      }, this.renderUnreadIcon(), this.renderClearIcon())));
    }
  }]);

  return UserNotification;
}(react_default.a.Component);

UserNotification_UserNotification.propTypes = {
  isTransientNotification: prop_types_default.a.bool.isRequired,
  notification: prop_types_default.a.shape({
    activityType: prop_types_default.a.string,
    activityUniqueKey: prop_types_default.a.string.isRequired,
    alertName: prop_types_default.a.string,
    createdAt: prop_types_default.a.string.isRequired,
    id: prop_types_default.a.number.isRequired,
    link: prop_types_default.a.string,
    messageBody: prop_types_default.a.string.isRequired,
    read: prop_types_default.a.bool.isRequired,
    type: prop_types_default.a.string.isRequired,
    userName: prop_types_default.a.string.isRequired,
    userProfileLink: prop_types_default.a.string
  }).isRequired,
  onClearUserNotification: prop_types_default.a.func.isRequired,
  onToggleReadUserNotification: prop_types_default.a.func.isRequired,
  onClickAlertViewData: prop_types_default.a.func,
  moveTransientNotificationIntoPanel: prop_types_default.a.func,
  removeTransientNotification: prop_types_default.a.func
};
UserNotification_UserNotification.defaultProps = {
  moveTransientNotificationIntoPanel: function moveTransientNotificationIntoPanel() {},
  removeTransientNotification: function removeTransientNotification() {}
};
/* harmony default export */ var UserNotifications_UserNotification = (UserNotification_UserNotification);
// EXTERNAL MODULE: /mnt/workspace/common/notifications/components/Spinner.js
var Spinner = __webpack_require__(386);

// EXTERNAL MODULE: /mnt/workspace/common/notifications/components/error-message.module.scss
var error_message_module = __webpack_require__(1530);
var error_message_module_default = /*#__PURE__*/__webpack_require__.n(error_message_module);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/ErrorMessage.js
function ErrorMessage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ErrorMessage_typeof = function _typeof(obj) { return typeof obj; }; } else { ErrorMessage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ErrorMessage_typeof(obj); }

function ErrorMessage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ErrorMessage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ErrorMessage_createClass(Constructor, protoProps, staticProps) { if (protoProps) ErrorMessage_defineProperties(Constructor.prototype, protoProps); if (staticProps) ErrorMessage_defineProperties(Constructor, staticProps); return Constructor; }

function ErrorMessage_possibleConstructorReturn(self, call) { if (call && (ErrorMessage_typeof(call) === "object" || typeof call === "function")) { return call; } return ErrorMessage_assertThisInitialized(self); }

function ErrorMessage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ErrorMessage_getPrototypeOf(o) { ErrorMessage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ErrorMessage_getPrototypeOf(o); }

function ErrorMessage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ErrorMessage_setPrototypeOf(subClass, superClass); }

function ErrorMessage_setPrototypeOf(o, p) { ErrorMessage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ErrorMessage_setPrototypeOf(o, p); }






var ErrorMessage_ErrorMessage =
/*#__PURE__*/
function (_PureComponent) {
  ErrorMessage_inherits(ErrorMessage, _PureComponent);

  function ErrorMessage() {
    ErrorMessage_classCallCheck(this, ErrorMessage);

    return ErrorMessage_possibleConstructorReturn(this, ErrorMessage_getPrototypeOf(ErrorMessage).apply(this, arguments));
  }

  ErrorMessage_createClass(ErrorMessage, [{
    key: "render",
    value: function render() {
      var text = this.props.text;
      return react_default.a.createElement("div", {
        styleName: "error-message" // eslint-disable-next-line react/no-danger
        ,
        dangerouslySetInnerHTML: {
          __html: text
        }
      });
    }
  }]);

  return ErrorMessage;
}(react["PureComponent"]);

ErrorMessage_ErrorMessage.propTypes = {
  text: prop_types_default.a.string.isRequired
};
/* harmony default export */ var components_ErrorMessage = (dist_default()(ErrorMessage_ErrorMessage, error_message_module_default.a));
// EXTERNAL MODULE: /tmp/frontend/node_modules/moment-timezone/index.js
var moment_timezone = __webpack_require__(126);
var moment_timezone_default = /*#__PURE__*/__webpack_require__.n(moment_timezone);

// EXTERNAL MODULE: /mnt/workspace/common/dates.js
var dates = __webpack_require__(44);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/ProductNotificationList/ProductNotification.js
function ProductNotification_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProductNotification_typeof = function _typeof(obj) { return typeof obj; }; } else { ProductNotification_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProductNotification_typeof(obj); }

function ProductNotification_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProductNotification_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProductNotification_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProductNotification_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProductNotification_defineProperties(Constructor, staticProps); return Constructor; }

function ProductNotification_possibleConstructorReturn(self, call) { if (call && (ProductNotification_typeof(call) === "object" || typeof call === "function")) { return call; } return ProductNotification_assertThisInitialized(self); }

function ProductNotification_getPrototypeOf(o) { ProductNotification_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProductNotification_getPrototypeOf(o); }

function ProductNotification_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProductNotification_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProductNotification_setPrototypeOf(subClass, superClass); }

function ProductNotification_setPrototypeOf(o, p) { ProductNotification_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProductNotification_setPrototypeOf(o, p); }

function ProductNotification_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var ProductNotification_ProductNotification =
/*#__PURE__*/
function (_Component) {
  ProductNotification_inherits(ProductNotification, _Component);

  function ProductNotification() {
    var _getPrototypeOf2;

    var _this;

    ProductNotification_classCallCheck(this, ProductNotification);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = ProductNotification_possibleConstructorReturn(this, (_getPrototypeOf2 = ProductNotification_getPrototypeOf(ProductNotification)).call.apply(_getPrototypeOf2, [this].concat(args)));

    ProductNotification_defineProperty(ProductNotification_assertThisInitialized(_this), "truncateBodyText", function () {
      var body = _this.props.body;
      return lodash_default.a.truncate(body, {
        length: constants["k" /* TRUNCATE_DESCRIPTION_AFTER */],
        separator: /,?\.* +/ // separate by spaces, including preceding commas and periods

      });
    });

    return _this;
  }

  ProductNotification_createClass(ProductNotification, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dateTime = _this$props.dateTime,
          isUnread = _this$props.isUnread,
          title = _this$props.title,
          titleLink = _this$props.titleLink;
      return react_default.a.createElement("li", {
        className: classnames_default()('notification-item', {
          'unread': isUnread
        })
      }, react_default.a.createElement("span", {
        className: "unread-dot"
      }), react_default.a.createElement("a", {
        className: "notification-title notification-link",
        href: titleLink,
        target: "_blank"
      }, title), react_default.a.createElement("p", {
        className: "notification-body body-text"
      }, this.truncateBodyText()), react_default.a.createElement("p", {
        className: "notification-timestamp timestamp"
      }, Object(dates["h" /* formatDateWithLocale */])(moment_timezone_default.a.unix(dateTime))));
    }
  }]);

  return ProductNotification;
}(react["Component"]);

ProductNotification_ProductNotification.propTypes = {
  body: prop_types_default.a.string.isRequired,
  dateTime: prop_types_default.a.number.isRequired,
  id: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]).isRequired,
  isUnread: prop_types_default.a.bool,
  title: prop_types_default.a.string.isRequired,
  titleLink: prop_types_default.a.string
};
ProductNotification_ProductNotification.defaultProps = {
  isUnread: true
};
/* harmony default export */ var ProductNotificationList_ProductNotification = (ProductNotification_ProductNotification);
// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/ProductNotificationList/ProductNotificationList.js
function ProductNotificationList_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProductNotificationList_typeof = function _typeof(obj) { return typeof obj; }; } else { ProductNotificationList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProductNotificationList_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ProductNotificationList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProductNotificationList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProductNotificationList_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProductNotificationList_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProductNotificationList_defineProperties(Constructor, staticProps); return Constructor; }

function ProductNotificationList_possibleConstructorReturn(self, call) { if (call && (ProductNotificationList_typeof(call) === "object" || typeof call === "function")) { return call; } return ProductNotificationList_assertThisInitialized(self); }

function ProductNotificationList_getPrototypeOf(o) { ProductNotificationList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProductNotificationList_getPrototypeOf(o); }

function ProductNotificationList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProductNotificationList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProductNotificationList_setPrototypeOf(subClass, superClass); }

function ProductNotificationList_setPrototypeOf(o, p) { ProductNotificationList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProductNotificationList_setPrototypeOf(o, p); }

function ProductNotificationList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var ProductNotificationList_scope = 'shared.site_chrome.notifications';

var ProductNotificationList_ProductNotificationList =
/*#__PURE__*/
function (_Component) {
  ProductNotificationList_inherits(ProductNotificationList, _Component);

  function ProductNotificationList() {
    var _getPrototypeOf2;

    var _this;

    ProductNotificationList_classCallCheck(this, ProductNotificationList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = ProductNotificationList_possibleConstructorReturn(this, (_getPrototypeOf2 = ProductNotificationList_getPrototypeOf(ProductNotificationList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    ProductNotificationList_defineProperty(ProductNotificationList_assertThisInitialized(_this), "renderUnreadNewCountLabel", function () {
      var unreadProductNotificationCount = _this.props.unreadProductNotificationCount;

      if (unreadProductNotificationCount > 0) {
        return react_default.a.createElement("em", {
          className: "unread-count-label"
        }, react_default.a.createElement("span", null, unreadProductNotificationCount), react_default.a.createElement("span", null, i18n["b" /* default */].t('new_label', {
          scope: ProductNotificationList_scope
        })));
      }
    });

    return _this;
  }

  ProductNotificationList_createClass(ProductNotificationList, [{
    key: "renderNotifications",
    value: function renderNotifications() {
      var _this$props = this.props,
          areProductNotificationsLoading = _this$props.areProductNotificationsLoading,
          hasError = _this$props.hasError,
          notifications = _this$props.notifications;
      var errorText = i18n["b" /* default */].t('error_text_html', {
        scope: ProductNotificationList_scope
      });

      if (areProductNotificationsLoading) {
        return react_default.a.createElement(Spinner["a" /* default */], null);
      }

      if (hasError) {
        return react_default.a.createElement("div", {
          className: "notifications-message notifications-error-message-wrapper"
        }, react_default.a.createElement(components_ErrorMessage, {
          text: errorText
        }));
      }

      if (lodash_default.a.size(notifications) > 0) {
        return notifications.map(function (notification) {
          return react_default.a.createElement(ProductNotificationList_ProductNotification, _extends({
            key: notification.id
          }, notification));
        });
      }

      return react_default.a.createElement("div", {
        className: "notifications-message no-notifications-message-wrapper"
      }, react_default.a.createElement("h3", null, i18n["b" /* default */].t('no_unread_notifications', {
        scope: ProductNotificationList_scope
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        className: "list-wrapper"
      }, react_default.a.createElement("ul", {
        className: "product-updates-list"
      }, this.renderNotifications()));
    }
  }]);

  return ProductNotificationList;
}(react["Component"]);

ProductNotificationList_ProductNotificationList.propTypes = {
  areProductNotificationsLoading: prop_types_default.a.bool.isRequired,
  hasError: prop_types_default.a.bool.isRequired,
  notifications: prop_types_default.a.array.isRequired,
  unreadProductNotificationCount: prop_types_default.a.number
};
ProductNotificationList_ProductNotificationList.defaultProps = {
  unreadProductNotificationCount: 0
};
/* harmony default export */ var components_ProductNotificationList_ProductNotificationList = (ProductNotificationList_ProductNotificationList);
// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/UserNotifications/UserNotificationList.js
function UserNotificationList_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UserNotificationList_typeof = function _typeof(obj) { return typeof obj; }; } else { UserNotificationList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UserNotificationList_typeof(obj); }

function UserNotificationList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UserNotificationList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UserNotificationList_createClass(Constructor, protoProps, staticProps) { if (protoProps) UserNotificationList_defineProperties(Constructor.prototype, protoProps); if (staticProps) UserNotificationList_defineProperties(Constructor, staticProps); return Constructor; }

function UserNotificationList_possibleConstructorReturn(self, call) { if (call && (UserNotificationList_typeof(call) === "object" || typeof call === "function")) { return call; } return UserNotificationList_assertThisInitialized(self); }

function UserNotificationList_getPrototypeOf(o) { UserNotificationList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UserNotificationList_getPrototypeOf(o); }

function UserNotificationList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UserNotificationList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UserNotificationList_setPrototypeOf(subClass, superClass); }

function UserNotificationList_setPrototypeOf(o, p) { UserNotificationList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UserNotificationList_setPrototypeOf(o, p); }

function UserNotificationList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var UserNotificationList_scope = 'shared.site_chrome.notifications';
var UserNotificationList_UserNotificationList =
/*#__PURE__*/
function (_Component) {
  UserNotificationList_inherits(UserNotificationList, _Component);

  function UserNotificationList() {
    var _getPrototypeOf2;

    var _this;

    UserNotificationList_classCallCheck(this, UserNotificationList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = UserNotificationList_possibleConstructorReturn(this, (_getPrototypeOf2 = UserNotificationList_getPrototypeOf(UserNotificationList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    UserNotificationList_defineProperty(UserNotificationList_assertThisInitialized(_this), "state", {
      showDataGridModal: false,
      dataGridModalForNotification: null
    });

    UserNotificationList_defineProperty(UserNotificationList_assertThisInitialized(_this), "lazyLoadUserNotifications", function () {
      var onLoadMoreUserNotifications = _this.props.onLoadMoreUserNotifications;

      var self = UserNotificationList_assertThisInitialized(_this);

      external_jQuery_default()('#activity-notification-items, #alert-notification-items').on('scroll', lodash_default.a.throttle(function () {
        var $loadMoreNotificationsWrapper = external_jQuery_default()('#load-more-notifications-wrapper');

        if ($loadMoreNotificationsWrapper.find('.load-more-user-notifications-link').is(':visible')) {
          if (self.isElementInViewport($loadMoreNotificationsWrapper.get(0))) {
            onLoadMoreUserNotifications($loadMoreNotificationsWrapper.data('notifications-type'));
          }
        }
      }, constants["j" /* THROTTLE_LAZY_LOADING_FOR */]));
    });

    UserNotificationList_defineProperty(UserNotificationList_assertThisInitialized(_this), "isElementInViewport", function (element) {
      var elementBounding = element.getBoundingClientRect();
      return elementBounding.top >= 0 && elementBounding.left >= 0 && elementBounding.right <= (window.innerWidth || document.documentElement.clientWidth) && elementBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    });

    UserNotificationList_defineProperty(UserNotificationList_assertThisInitialized(_this), "renderAlertDataGridModal", function () {
      var _this$state = _this.state,
          showDataGridModal = _this$state.showDataGridModal,
          dataGridModalForNotification = _this$state.dataGridModalForNotification;

      if (!showDataGridModal || !dataGridModalForNotification) {
        return null;
      }

      var alertDomain = dataGridModalForNotification.alertDomain,
          alertDatasetUid = dataGridModalForNotification.alertDatasetUid,
          alertName = dataGridModalForNotification.alertName,
          alertQueryString = dataGridModalForNotification.alertQueryString,
          datasetName = dataGridModalForNotification.datasetName,
          downloadLink = dataGridModalForNotification.downloadLink;
      var alertDataGridModalProps = {
        datasetName: datasetName,
        datasetUid: alertDatasetUid,
        datasetDownloadLink: downloadLink,
        domain: alertDomain,
        onClose: function onClose() {
          return _this.setState({
            showDataGridModal: false
          });
        },
        soqlQuery: alertQueryString,
        alertName: alertName
      };
      return react_default.a.createElement(UserNotifications_AlertDataGridModal, alertDataGridModalProps);
    });

    UserNotificationList_defineProperty(UserNotificationList_assertThisInitialized(_this), "renderEmptyNotificationsMessage", function () {
      var filterNotificationsBy = _this.props.filterNotificationsBy;
      var emptyNotificationsI18nKey = 'no_notifications_to_show';

      switch (filterNotificationsBy) {
        case 'activity':
          emptyNotificationsI18nKey = 'no_activities_to_show';
          break;

        case 'alert':
          emptyNotificationsI18nKey = 'no_alerts_to_show';
          break;
      }

      var className = classnames_default()('no-user-notifications-message no-notifications-message', "of-type-".concat(filterNotificationsBy));
      return react_default.a.createElement("div", {
        className: className
      }, react_default.a.createElement("h3", null, i18n["b" /* default */].t(emptyNotificationsI18nKey, {
        scope: UserNotificationList_scope
      })));
    });

    UserNotificationList_defineProperty(UserNotificationList_assertThisInitialized(_this), "renderAlertsAndNotifications", function () {
      var _this$props = _this.props,
          filterNotificationsBy = _this$props.filterNotificationsBy,
          onClearUserNotification = _this$props.onClearUserNotification,
          onToggleReadUserNotification = _this$props.onToggleReadUserNotification,
          userNotifications = _this$props.userNotifications,
          showUserNotifications = _this$props.showUserNotifications,
          showProductNotifications = _this$props.showProductNotifications;

      if (filterNotificationsBy === 'product_updates' && showProductNotifications) {
        var _this$props2 = _this.props,
            areProductNotificationsLoading = _this$props2.areProductNotificationsLoading,
            hasError = _this$props2.hasError,
            productNotifications = _this$props2.productNotifications,
            unreadProductNotificationCount = _this$props2.unreadProductNotificationCount,
            viewOlderLink = _this$props2.viewOlderLink;
        return react_default.a.createElement(components_ProductNotificationList_ProductNotificationList, {
          areProductNotificationsLoading: areProductNotificationsLoading,
          hasError: hasError,
          notifications: productNotifications,
          unreadProductNotificationCount: unreadProductNotificationCount,
          viewOlderLink: viewOlderLink
        });
      } else if (showUserNotifications) {
        var notifications = lodash_default.a.get(userNotifications[filterNotificationsBy], 'notifications', []);

        var onClickAlertViewData = function onClickAlertViewData(notification) {
          _this.setState({
            showDataGridModal: true,
            dataGridModalForNotification: notification
          });
        };

        if (lodash_default.a.isEmpty(notifications)) {
          return _this.renderEmptyNotificationsMessage();
        }

        return notifications.map(function (notification) {
          return react_default.a.createElement(UserNotifications_UserNotification, {
            isTransientNotification: false,
            key: notification.id,
            notification: notification,
            onClickAlertViewData: onClickAlertViewData,
            onClearUserNotification: onClearUserNotification,
            onToggleReadUserNotification: onToggleReadUserNotification
          });
        });
      }
    });

    UserNotificationList_defineProperty(UserNotificationList_assertThisInitialized(_this), "renderLoadMoreUserNotificationLink", function () {
      var _this$props3 = _this.props,
          userNotifications = _this$props3.userNotifications,
          filterNotificationsBy = _this$props3.filterNotificationsBy;

      var hasMoreNotifications = lodash_default.a.get(userNotifications[filterNotificationsBy], 'hasMoreNotifications', false);

      if (hasMoreNotifications) {
        var onLoadMoreUserNotifications = _this.props.onLoadMoreUserNotifications;

        var loadingNotifications = lodash_default.a.get(userNotifications[filterNotificationsBy], 'loading', false);

        var loadingSpinner = react_default.a.createElement("div", {
          className: "notifications-loading"
        }, react_default.a.createElement("span", {
          className: "spinner-default"
        }), react_default.a.createElement("span", {
          className: "notifications-loading-text"
        }, i18n["b" /* default */].t('loading', {
          scope: UserNotificationList_scope
        })));
        var loadMoreLink = react_default.a.createElement("a", {
          className: "load-more-user-notifications-link",
          onClick: function onClick() {
            onLoadMoreUserNotifications(filterNotificationsBy);
          }
        }, i18n["b" /* default */].t('load_more_items', {
          scope: UserNotificationList_scope
        }));
        return react_default.a.createElement("div", {
          className: "load-more-user-notifications load-more-user-notifications-link-wrapper",
          "data-notifications-type": filterNotificationsBy,
          id: "load-more-notifications-wrapper"
        }, loadingNotifications ? loadingSpinner : loadMoreLink);
      }
    });

    UserNotificationList_defineProperty(UserNotificationList_assertThisInitialized(_this), "renderSeeMoreNotificationsLink", function () {
      var _this$props4 = _this.props,
          filterNotificationsBy = _this$props4.filterNotificationsBy,
          hasEnqueuedUserNotifications = _this$props4.hasEnqueuedUserNotifications;

      if (hasEnqueuedUserNotifications(filterNotificationsBy)) {
        var onSeeNewUserNotifications = _this.props.onSeeNewUserNotifications;
        return react_default.a.createElement("div", {
          className: "see-new-user-notifications see-new-user-notifications-link-wrapper"
        }, react_default.a.createElement("button", {
          className: "see-new-user-notifications-link",
          onClick: function onClick() {
            onSeeNewUserNotifications(filterNotificationsBy);
          }
        }, i18n["b" /* default */].t('see_new_notifications', {
          scope: UserNotificationList_scope
        })));
      }
    });

    return _this;
  }

  UserNotificationList_createClass(UserNotificationList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.lazyLoadUserNotifications();
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", null, react_default.a.createElement("div", {
        className: "notification-list-wrapper has-secondary-panel"
      }, this.renderSeeMoreNotificationsLink(), react_default.a.createElement("ul", {
        className: "socrata-user-notification-list"
      }, this.renderAlertsAndNotifications()), this.renderAlertDataGridModal(), this.renderLoadMoreUserNotificationLink()));
    }
  }]);

  return UserNotificationList;
}(react["Component"]);
UserNotificationList_UserNotificationList.propTypes = {
  filterNotificationsBy: prop_types_default.a.string.isRequired,
  hasEnqueuedUserNotifications: prop_types_default.a.func.isRequired,
  hasError: prop_types_default.a.bool.isRequired,
  markAllProductNotificationsAsRead: prop_types_default.a.func
};
UserNotificationList_UserNotificationList.defaultProps = {
  userNotifications: null
};
/* harmony default export */ var UserNotifications_UserNotificationList = (UserNotificationList_UserNotificationList);
// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/Tabs/Tabs.js
function Tabs_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Tabs_typeof = function _typeof(obj) { return typeof obj; }; } else { Tabs_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Tabs_typeof(obj); }

function Tabs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Tabs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Tabs_createClass(Constructor, protoProps, staticProps) { if (protoProps) Tabs_defineProperties(Constructor.prototype, protoProps); if (staticProps) Tabs_defineProperties(Constructor, staticProps); return Constructor; }

function Tabs_possibleConstructorReturn(self, call) { if (call && (Tabs_typeof(call) === "object" || typeof call === "function")) { return call; } return Tabs_assertThisInitialized(self); }

function Tabs_getPrototypeOf(o) { Tabs_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Tabs_getPrototypeOf(o); }

function Tabs_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Tabs_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Tabs_setPrototypeOf(subClass, superClass); }

function Tabs_setPrototypeOf(o, p) { Tabs_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Tabs_setPrototypeOf(o, p); }

function Tabs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Tabs_scope = 'shared.site_chrome.notifications';
var Tabs_Tabs =
/*#__PURE__*/
function (_React$Component) {
  Tabs_inherits(Tabs, _React$Component);

  function Tabs() {
    var _getPrototypeOf2;

    var _this;

    Tabs_classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Tabs_possibleConstructorReturn(this, (_getPrototypeOf2 = Tabs_getPrototypeOf(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Tabs_defineProperty(Tabs_assertThisInitialized(_this), "renderTab", function (tab, index) {
      var _this$props = _this.props,
          filterNotifications = _this$props.filterNotifications,
          selectedTab = _this$props.selectedTab;

      var unreadCount = _this.unreadNotificationsCount(tab);

      var unreadCountElem;

      if (unreadCount > 0) {
        unreadCountElem = react_default.a.createElement("span", null, " (", unreadCount, ")");
      }

      return react_default.a.createElement("li", {
        key: index,
        className: "notifications-tab-list-item"
      }, react_default.a.createElement("button", {
        className: classnames_default()('notification-tab', {
          selected: tab === selectedTab
        }),
        onClick: function onClick() {
          return filterNotifications(tab);
        }
      }, react_default.a.createElement("span", {
        className: classnames_default()("".concat(tab, "-dot"), {
          'type-indicator': unreadCount > 0
        })
      }), i18n["b" /* default */].t("filter_".concat(tab, "_notifications_tab_text"), {
        scope: Tabs_scope
      }), unreadCountElem));
    });

    Tabs_defineProperty(Tabs_assertThisInitialized(_this), "unreadNotificationsCount", function (tab) {
      var _this$props2 = _this.props,
          unreadProductNotificationCount = _this$props2.unreadProductNotificationCount,
          userNotifications = _this$props2.userNotifications;
      var alertsAndNotificationsCount;

      switch (tab) {
        case 'product_updates':
          alertsAndNotificationsCount = unreadProductNotificationCount;
          break;

        case 'activity':
          alertsAndNotificationsCount = lodash_default.a.get(userNotifications, 'activity.unread');
          break;

        case 'alert':
          alertsAndNotificationsCount = lodash_default.a.get(userNotifications, 'alert.unread');
          break;
      }

      return alertsAndNotificationsCount;
    });

    return _this;
  }

  Tabs_createClass(Tabs, [{
    key: "renderTabs",
    value: function renderTabs() {
      var _this2 = this;

      var tabs = this.props.tabs;
      return tabs.map(function (tab, index) {
        return _this2.renderTab(tab, index);
      });
    }
  }, {
    key: "renderUserNotificationsList",
    value: function renderUserNotificationsList() {
      var _this$props3 = this.props,
          areProductNotificationsLoading = _this$props3.areProductNotificationsLoading,
          clearAllUserNotifications = _this$props3.clearAllUserNotifications,
          hasEnqueuedUserNotifications = _this$props3.hasEnqueuedUserNotifications,
          hasError = _this$props3.hasError,
          onClearUserNotification = _this$props3.onClearUserNotification,
          onLoadMoreUserNotifications = _this$props3.onLoadMoreUserNotifications,
          onSeeNewUserNotifications = _this$props3.onSeeNewUserNotifications,
          onToggleReadUserNotification = _this$props3.onToggleReadUserNotification,
          openClearAllUserNotificationsPrompt = _this$props3.openClearAllUserNotificationsPrompt,
          selectedTab = _this$props3.selectedTab,
          toggleClearAllUserNotificationsPrompt = _this$props3.toggleClearAllUserNotificationsPrompt,
          userNotifications = _this$props3.userNotifications,
          productNotifications = _this$props3.productNotifications,
          showProductNotifications = _this$props3.showProductNotifications,
          showUserNotifications = _this$props3.showUserNotifications,
          unreadProductNotificationCount = _this$props3.unreadProductNotificationCount,
          viewOlderLink = _this$props3.viewOlderLink;
      return react_default.a.createElement(UserNotifications_UserNotificationList, {
        areProductNotificationsLoading: areProductNotificationsLoading,
        clearAllUserNotifications: clearAllUserNotifications,
        filterNotificationsBy: selectedTab,
        hasEnqueuedUserNotifications: hasEnqueuedUserNotifications,
        hasError: hasError,
        onClearUserNotification: onClearUserNotification,
        onLoadMoreUserNotifications: onLoadMoreUserNotifications,
        onSeeNewUserNotifications: onSeeNewUserNotifications,
        onToggleReadUserNotification: onToggleReadUserNotification,
        openClearAllUserNotificationsPrompt: openClearAllUserNotificationsPrompt,
        productNotifications: productNotifications,
        showUserNotifications: showUserNotifications,
        showProductNotifications: showProductNotifications,
        toggleClearAllUserNotificationsPrompt: toggleClearAllUserNotificationsPrompt,
        userNotifications: userNotifications,
        unreadProductNotificationCount: unreadProductNotificationCount,
        viewOlderLink: viewOlderLink
      });
    }
  }, {
    key: "render",
    value: function render() {
      var selectedTab = this.props.selectedTab;
      var notificationItemsClassName = classnames_default()('notification-items-wrapper');
      return react_default.a.createElement("div", {
        className: "notification-panel"
      }, react_default.a.createElement("div", {
        className: "notification-tabs"
      }, react_default.a.createElement("ul", {
        className: "notification-filters clearfix"
      }, this.renderTabs())), react_default.a.createElement("div", {
        className: notificationItemsClassName,
        id: "".concat(selectedTab, "-notification-items")
      }, react_default.a.createElement("ul", {
        className: "notification-items"
      }, this.renderUserNotificationsList())));
    }
  }]);

  return Tabs;
}(react_default.a.Component);
Tabs_Tabs.propTypes = {
  filterNotifications: prop_types_default.a.func.isRequired,
  selectedTab: prop_types_default.a.string.isRequired,
  showProductNotifications: prop_types_default.a.bool.isRequired,
  tabs: prop_types_default.a.array.isRequired
};

var Tabs_mapStateToProps = function mapStateToProps(state) {
  return {
    userId: state.userId,
    showProductNotifications: state.configurations.showProductNotifications,
    showUserNotifications: state.configurations.showUserNotifications
  };
};

/* harmony default export */ var components_Tabs_Tabs = (Object(react_redux_es["b" /* connect */])(Tabs_mapStateToProps)(Tabs_Tabs));
// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/NotificationList/PanelHeader.js
function PanelHeader_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PanelHeader_typeof = function _typeof(obj) { return typeof obj; }; } else { PanelHeader_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PanelHeader_typeof(obj); }

function PanelHeader_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PanelHeader_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PanelHeader_createClass(Constructor, protoProps, staticProps) { if (protoProps) PanelHeader_defineProperties(Constructor.prototype, protoProps); if (staticProps) PanelHeader_defineProperties(Constructor, staticProps); return Constructor; }

function PanelHeader_possibleConstructorReturn(self, call) { if (call && (PanelHeader_typeof(call) === "object" || typeof call === "function")) { return call; } return PanelHeader_assertThisInitialized(self); }

function PanelHeader_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PanelHeader_getPrototypeOf(o) { PanelHeader_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PanelHeader_getPrototypeOf(o); }

function PanelHeader_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PanelHeader_setPrototypeOf(subClass, superClass); }

function PanelHeader_setPrototypeOf(o, p) { PanelHeader_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PanelHeader_setPrototypeOf(o, p); }






var PanelHeader_PanelHeader =
/*#__PURE__*/
function (_Component) {
  PanelHeader_inherits(PanelHeader, _Component);

  function PanelHeader() {
    PanelHeader_classCallCheck(this, PanelHeader);

    return PanelHeader_possibleConstructorReturn(this, PanelHeader_getPrototypeOf(PanelHeader).apply(this, arguments));
  }

  PanelHeader_createClass(PanelHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClosePanel = _this$props.onClosePanel,
          panelHeaderText = _this$props.panelHeaderText,
          unreadCount = _this$props.unreadCount;
      return react_default.a.createElement("div", {
        className: "notification-panel-header"
      }, react_default.a.createElement("div", {
        className: "header-icon"
      }, react_default.a.createElement(SocrataIcon["a" /* SocrataIcon */], {
        name: "bell"
      }), react_default.a.createElement(UnreadCount, {
        unreadCount: unreadCount,
        unreadCountClass: "notifications-count"
      })), react_default.a.createElement("h3", {
        className: "header-text"
      }, panelHeaderText), react_default.a.createElement("span", {
        className: "close-panel-link close-notifications-panel-link",
        role: "button",
        onClick: onClosePanel
      }, react_default.a.createElement(SocrataIcon["a" /* SocrataIcon */], {
        name: "close-2"
      })));
    }
  }]);

  return PanelHeader;
}(react["Component"]);

PanelHeader_PanelHeader.propTypes = {
  onClosePanel: prop_types_default.a.func.isRequired,
  panelHeaderText: prop_types_default.a.string.isRequired,
  unreadCount: prop_types_default.a.number.isRequired
};
/* harmony default export */ var NotificationList_PanelHeader = (PanelHeader_PanelHeader);
// EXTERNAL MODULE: /mnt/workspace/common/notifications/components/AlertSettingModal/alert-setting-modal.module.scss
var alert_setting_modal_module = __webpack_require__(1531);
var alert_setting_modal_module_default = /*#__PURE__*/__webpack_require__.n(alert_setting_modal_module);

// EXTERNAL MODULE: /mnt/workspace/common/notifications/components/AlertSettingModal/tabs.module.scss
var tabs_module = __webpack_require__(1532);
var tabs_module_default = /*#__PURE__*/__webpack_require__.n(tabs_module);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/AlertSettingModal/Tabs.js
function AlertSettingModal_Tabs_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AlertSettingModal_Tabs_typeof = function _typeof(obj) { return typeof obj; }; } else { AlertSettingModal_Tabs_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AlertSettingModal_Tabs_typeof(obj); }

function AlertSettingModal_Tabs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AlertSettingModal_Tabs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AlertSettingModal_Tabs_createClass(Constructor, protoProps, staticProps) { if (protoProps) AlertSettingModal_Tabs_defineProperties(Constructor.prototype, protoProps); if (staticProps) AlertSettingModal_Tabs_defineProperties(Constructor, staticProps); return Constructor; }

function AlertSettingModal_Tabs_possibleConstructorReturn(self, call) { if (call && (AlertSettingModal_Tabs_typeof(call) === "object" || typeof call === "function")) { return call; } return AlertSettingModal_Tabs_assertThisInitialized(self); }

function AlertSettingModal_Tabs_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AlertSettingModal_Tabs_getPrototypeOf(o) { AlertSettingModal_Tabs_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AlertSettingModal_Tabs_getPrototypeOf(o); }

function AlertSettingModal_Tabs_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AlertSettingModal_Tabs_setPrototypeOf(subClass, superClass); }

function AlertSettingModal_Tabs_setPrototypeOf(o, p) { AlertSettingModal_Tabs_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AlertSettingModal_Tabs_setPrototypeOf(o, p); }









var AlertSettingModal_Tabs_Tabs =
/*#__PURE__*/
function (_Component) {
  AlertSettingModal_Tabs_inherits(Tabs, _Component);

  function Tabs() {
    AlertSettingModal_Tabs_classCallCheck(this, Tabs);

    return AlertSettingModal_Tabs_possibleConstructorReturn(this, AlertSettingModal_Tabs_getPrototypeOf(Tabs).apply(this, arguments));
  }

  AlertSettingModal_Tabs_createClass(Tabs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          selectedTab = _this$props.selectedTab,
          onTabChange = _this$props.onTabChange,
          showMyAlertsTab = _this$props.showMyAlertsTab;
      var scope = 'shared.site_chrome.notifications.alert_setting_modal.tab';
      var myAlertsTab = null;

      if (showMyAlertsTab) {
        myAlertsTab = react_default.a.createElement("li", {
          styleName: classnames_default()({
            'active': selectedTab === constants["c" /* ALERT_SETTING_MODAL_TABS */].MY_ALERTS
          })
        }, react_default.a.createElement("a", {
          className: "nav-link",
          onClick: function onClick() {
            return onTabChange(constants["c" /* ALERT_SETTING_MODAL_TABS */].MY_ALERTS);
          }
        }, i18n["b" /* default */].t('my_alerts', {
          scope: scope
        })));
      }

      return react_default.a.createElement("div", {
        styleName: "tabs"
      }, react_default.a.createElement("ul", {
        className: "nav"
      }, react_default.a.createElement("li", {
        styleName: classnames_default()({
          'active': selectedTab === constants["c" /* ALERT_SETTING_MODAL_TABS */].NOTIFICATION
        })
      }, react_default.a.createElement("a", {
        className: "nav-link",
        onClick: function onClick() {
          return onTabChange(constants["c" /* ALERT_SETTING_MODAL_TABS */].NOTIFICATION);
        }
      }, i18n["b" /* default */].t(showMyAlertsTab ? 'notification_and_alerts' : 'notification', {
        scope: scope
      }))), myAlertsTab));
    }
  }]);

  return Tabs;
}(react["Component"]);

AlertSettingModal_Tabs_Tabs.propTypes = {
  selectedTab: prop_types_default.a.string,
  onTabChange: prop_types_default.a.func.isRequired
};
/* harmony default export */ var AlertSettingModal_Tabs = (dist_default()(AlertSettingModal_Tabs_Tabs, tabs_module_default.a, {
  allowMultiple: true
}));
// EXTERNAL MODULE: /mnt/workspace/common/components/Checkbox.js
var Checkbox = __webpack_require__(222);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/PropTypes/ConfigurationsPropType.js

/* harmony default export */ var ConfigurationsPropType = (prop_types_default.a.shape({
  haveOtherDatasetEditRights: prop_types_default.a.bool,
  haveOtherDatasetRights: prop_types_default.a.bool,
  inProductTransientNotificationsEnabled: prop_types_default.a.bool,
  isSuperAdmin: prop_types_default.a.bool,
  mapboxAccessToken: prop_types_default.a.string,
  shouldShowMyAssetsApprovalsPreference: prop_types_default.a.bool,
  showApprovalPreference: prop_types_default.a.bool,
  showMyAlertPreference: prop_types_default.a.bool,
  showMyAssetsTeamMessage: prop_types_default.a.bool,
  showNewAssetPublishedPreference: prop_types_default.a.bool,
  showProductNotifications: prop_types_default.a.bool,
  showUserNotifications: prop_types_default.a.bool,
  showUserPreference: prop_types_default.a.bool
}));
// EXTERNAL MODULE: /mnt/workspace/common/components/ThreeStateCheckbox/index.js
var ThreeStateCheckbox = __webpack_require__(465);

// EXTERNAL MODULE: /mnt/workspace/common/notifications/components/AlertSettingModal/preference.module.scss
var preference_module = __webpack_require__(548);
var preference_module_default = /*#__PURE__*/__webpack_require__.n(preference_module);

// EXTERNAL MODULE: /mnt/workspace/common/components/Dropdown/index.js
var Dropdown = __webpack_require__(78);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/AlertSettingModal/EmailSettings.js
function EmailSettings_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EmailSettings_typeof = function _typeof(obj) { return typeof obj; }; } else { EmailSettings_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EmailSettings_typeof(obj); }

function EmailSettings_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EmailSettings_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EmailSettings_createClass(Constructor, protoProps, staticProps) { if (protoProps) EmailSettings_defineProperties(Constructor.prototype, protoProps); if (staticProps) EmailSettings_defineProperties(Constructor, staticProps); return Constructor; }

function EmailSettings_possibleConstructorReturn(self, call) { if (call && (EmailSettings_typeof(call) === "object" || typeof call === "function")) { return call; } return EmailSettings_assertThisInitialized(self); }

function EmailSettings_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EmailSettings_getPrototypeOf(o) { EmailSettings_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EmailSettings_getPrototypeOf(o); }

function EmailSettings_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EmailSettings_setPrototypeOf(subClass, superClass); }

function EmailSettings_setPrototypeOf(o, p) { EmailSettings_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EmailSettings_setPrototypeOf(o, p); }









var EmailSettings_scope = 'shared.site_chrome.notifications.alert_setting_modal';

var EmailSettings_EmailSettings =
/*#__PURE__*/
function (_Component) {
  EmailSettings_inherits(EmailSettings, _Component);

  function EmailSettings() {
    EmailSettings_classCallCheck(this, EmailSettings);

    return EmailSettings_possibleConstructorReturn(this, EmailSettings_getPrototypeOf(EmailSettings).apply(this, arguments));
  }

  EmailSettings_createClass(EmailSettings, [{
    key: "renderCheckBox",
    value: function renderCheckBox(category, value) {
      var onSettingsChange = this.props.onSettingsChange;

      var checkboxId = lodash_default.a.uniqueId(category);

      return react_default.a.createElement("div", {
        styleName: "preferences-checkbox"
      }, react_default.a.createElement(Checkbox["a" /* default */], {
        id: checkboxId,
        checked: value,
        onChange: function onChange(event) {
          return onSettingsChange(category, {
            enable: event.target.checked
          });
        }
      }));
    }
  }, {
    key: "renderEmailDigestDropdown",
    value: function renderEmailDigestDropdown(category, value) {
      var onSettingsChange = this.props.onSettingsChange;

      var dropdownId = lodash_default.a.uniqueId(category + 'dropdown_id');

      var options = [{
        title: i18n["b" /* default */].t('email_digest.real_time', {
          scope: EmailSettings_scope
        }),
        value: 'real_time'
      }, {
        title: i18n["b" /* default */].t('email_digest.hourly', {
          scope: EmailSettings_scope
        }),
        value: 'hourly'
      }, {
        title: i18n["b" /* default */].t('email_digest.daily', {
          scope: EmailSettings_scope
        }),
        value: 'daily'
      }, {
        title: i18n["b" /* default */].t('email_digest.weekly', {
          scope: EmailSettings_scope
        }),
        value: 'weekly'
      }, {
        title: i18n["b" /* default */].t('email_digest.monthly', {
          scope: EmailSettings_scope
        }),
        value: 'monthly'
      }];
      return react_default.a.createElement(Dropdown["b" /* default */], {
        id: dropdownId,
        onSelection: function onSelection(option) {
          return onSettingsChange(category, {
            value: option.value
          });
        },
        options: options,
        size: "medium",
        value: value
      });
    }
  }, {
    key: "renderEmailDigestRow",
    value: function renderEmailDigestRow() {
      var settings = this.props.settings;
      var category = 'email_digest';

      var categoryData = lodash_default.a.get(settings, category + '[0]', {});

      categoryData.value = categoryData.value || 'real_time';
      return react_default.a.createElement("tr", {
        className: "email-digest-option"
      }, react_default.a.createElement("td", null), react_default.a.createElement("td", null, this.renderCheckBox(category, categoryData.enable || false)), react_default.a.createElement("td", {
        styleName: "option-column"
      }, react_default.a.createElement("div", null, i18n["b" /* default */].t('email_digest.description', {
        scope: EmailSettings_scope
      }))), react_default.a.createElement("td", null, this.renderEmailDigestDropdown(category, categoryData.value)));
    }
  }, {
    key: "renderAlertEmailSettingRow",
    value: function renderAlertEmailSettingRow() {
      var _this$props = this.props,
          settings = _this$props.settings,
          showAlertSetting = _this$props.showAlertSetting;
      var category = 'alert_email';

      var categoryData = lodash_default.a.get(settings, category + '[0]', {});

      if (!showAlertSetting) {
        return null;
      }

      return react_default.a.createElement("tr", {
        className: "alert-email"
      }, react_default.a.createElement("td", null), react_default.a.createElement("td", null, this.renderCheckBox(category, categoryData.enable || false)), react_default.a.createElement("td", {
        colSpan: "2"
      }, react_default.a.createElement("div", null, i18n["b" /* default */].t('alert_email', {
        scope: EmailSettings_scope
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", null, react_default.a.createElement("div", {
        className: "table-wrapper email-settings",
        styleName: "email-settings"
      }, react_default.a.createElement("table", {
        styleName: "preference-table"
      }, react_default.a.createElement("thead", null, react_default.a.createElement("tr", null, react_default.a.createElement("th", {
        colSpan: "4"
      }, react_default.a.createElement("div", {
        styleName: "preference-title"
      }, i18n["b" /* default */].t('table_header.email_settings', {
        scope: EmailSettings_scope
      }))))), react_default.a.createElement("tbody", null, this.renderEmailDigestRow(), this.renderAlertEmailSettingRow()))));
    }
  }]);

  return EmailSettings;
}(react["Component"]);

EmailSettings_EmailSettings.propTypes = {
  settings: prop_types_default.a.object.isRequired,
  onSettingsChange: prop_types_default.a.func
};
/* harmony default export */ var AlertSettingModal_EmailSettings = (dist_default()(EmailSettings_EmailSettings, preference_module_default.a, {
  allowMultiple: true
}));
// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/AlertSettingModal/TransientNotificationSettings.js
function TransientNotificationSettings_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TransientNotificationSettings_typeof = function _typeof(obj) { return typeof obj; }; } else { TransientNotificationSettings_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TransientNotificationSettings_typeof(obj); }

function TransientNotificationSettings_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TransientNotificationSettings_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TransientNotificationSettings_createClass(Constructor, protoProps, staticProps) { if (protoProps) TransientNotificationSettings_defineProperties(Constructor.prototype, protoProps); if (staticProps) TransientNotificationSettings_defineProperties(Constructor, staticProps); return Constructor; }

function TransientNotificationSettings_possibleConstructorReturn(self, call) { if (call && (TransientNotificationSettings_typeof(call) === "object" || typeof call === "function")) { return call; } return TransientNotificationSettings_assertThisInitialized(self); }

function TransientNotificationSettings_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TransientNotificationSettings_getPrototypeOf(o) { TransientNotificationSettings_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TransientNotificationSettings_getPrototypeOf(o); }

function TransientNotificationSettings_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TransientNotificationSettings_setPrototypeOf(subClass, superClass); }

function TransientNotificationSettings_setPrototypeOf(o, p) { TransientNotificationSettings_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TransientNotificationSettings_setPrototypeOf(o, p); }








var TransientNotificationSettings_scope = 'shared.site_chrome.notifications.alert_setting_modal';

var TransientNotificationSettings_TransientNotificationSettings =
/*#__PURE__*/
function (_Component) {
  TransientNotificationSettings_inherits(TransientNotificationSettings, _Component);

  function TransientNotificationSettings() {
    TransientNotificationSettings_classCallCheck(this, TransientNotificationSettings);

    return TransientNotificationSettings_possibleConstructorReturn(this, TransientNotificationSettings_getPrototypeOf(TransientNotificationSettings).apply(this, arguments));
  }

  TransientNotificationSettings_createClass(TransientNotificationSettings, [{
    key: "renderCheckBox",
    value: function renderCheckBox(category, value) {
      var onSettingsChange = this.props.onSettingsChange;

      var checkboxId = lodash_default.a.uniqueId(category);

      return react_default.a.createElement("div", {
        styleName: "preferences-checkbox"
      }, react_default.a.createElement(Checkbox["a" /* default */], {
        id: checkboxId,
        checked: value,
        onChange: function onChange(event) {
          return onSettingsChange(category, {
            enable: event.target.checked
          });
        }
      }));
    }
  }, {
    key: "renderNotificationSettingRow",
    value: function renderNotificationSettingRow() {
      var settings = this.props.settings;
      var category = 'transient_notification';

      var categoryData = lodash_default.a.get(settings, "".concat(category, ".0"), {});

      return react_default.a.createElement("tr", {
        className: "transient_notification-option"
      }, react_default.a.createElement("td", null, this.renderCheckBox(category, categoryData.enable || false)), react_default.a.createElement("td", null), react_default.a.createElement("td", null, i18n["b" /* default */].t('transient_notification.notify_transient', {
        scope: TransientNotificationSettings_scope
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", null, react_default.a.createElement("div", {
        className: "table-wrapper transient_notification-settings"
      }, react_default.a.createElement("table", {
        styleName: "preference-table"
      }, react_default.a.createElement("thead", null, react_default.a.createElement("tr", null, react_default.a.createElement("th", {
        colSpan: "4"
      }, react_default.a.createElement("div", {
        styleName: "preference-title"
      }, i18n["b" /* default */].t('transient_notification.title', {
        scope: TransientNotificationSettings_scope
      }))))), react_default.a.createElement("tbody", null, this.renderNotificationSettingRow()))));
    }
  }]);

  return TransientNotificationSettings;
}(react["Component"]);

TransientNotificationSettings_TransientNotificationSettings.propTypes = {
  settings: prop_types_default.a.object.isRequired,
  onSettingsChange: prop_types_default.a.func
};
/* harmony default export */ var AlertSettingModal_TransientNotificationSettings = (dist_default()(TransientNotificationSettings_TransientNotificationSettings, preference_module_default.a, {
  allowMultiple: true
}));
// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/AlertSettingModal/PreferenceContent.js
function PreferenceContent_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PreferenceContent_typeof = function _typeof(obj) { return typeof obj; }; } else { PreferenceContent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PreferenceContent_typeof(obj); }

function PreferenceContent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PreferenceContent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PreferenceContent_createClass(Constructor, protoProps, staticProps) { if (protoProps) PreferenceContent_defineProperties(Constructor.prototype, protoProps); if (staticProps) PreferenceContent_defineProperties(Constructor, staticProps); return Constructor; }

function PreferenceContent_possibleConstructorReturn(self, call) { if (call && (PreferenceContent_typeof(call) === "object" || typeof call === "function")) { return call; } return PreferenceContent_assertThisInitialized(self); }

function PreferenceContent_getPrototypeOf(o) { PreferenceContent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PreferenceContent_getPrototypeOf(o); }

function PreferenceContent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PreferenceContent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PreferenceContent_setPrototypeOf(subClass, superClass); }

function PreferenceContent_setPrototypeOf(o, p) { PreferenceContent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PreferenceContent_setPrototypeOf(o, p); }

function PreferenceContent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var PreferenceContent_scope = 'shared.site_chrome.notifications.alert_setting_modal';
var emailPreferenceKey = 'enable_email_notification';
var productPreferenceKey = 'enable_product_notification';
var PreferenceContent_PreferenceContent =
/*#__PURE__*/
function (_Component) {
  PreferenceContent_inherits(PreferenceContent, _Component);

  function PreferenceContent() {
    var _getPrototypeOf2;

    var _this;

    PreferenceContent_classCallCheck(this, PreferenceContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = PreferenceContent_possibleConstructorReturn(this, (_getPrototypeOf2 = PreferenceContent_getPrototypeOf(PreferenceContent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    PreferenceContent_defineProperty(PreferenceContent_assertThisInitialized(_this), "state", {
      selectAllEmailPreference: false,
      selectAllProductPreference: false,
      availablePreferences: []
    });

    PreferenceContent_defineProperty(PreferenceContent_assertThisInitialized(_this), "updateAvailablePreferences", function () {
      var _this$props$configura = _this.props.configurations,
          haveOtherDatasetRights = _this$props$configura.haveOtherDatasetRights,
          shouldShowMyAssetsApprovalsPreference = _this$props$configura.shouldShowMyAssetsApprovalsPreference,
          showApprovalPreference = _this$props$configura.showApprovalPreference,
          showNewAssetPublishedPreference = _this$props$configura.showNewAssetPublishedPreference,
          showUserPreference = _this$props$configura.showUserPreference;
      var preferences = _this.props.preferences;
      var availablePreferences = _this.state.availablePreferences;
      availablePreferences = lodash_default.a.keys(preferences);

      if (!haveOtherDatasetRights) {
        lodash_default.a.pull(availablePreferences, 'all_asset_permission_change', 'all_assets_deleted', 'all_asset_collaborator_change');
      }

      if (!showUserPreference) {
        lodash_default.a.pull(availablePreferences, 'user_accounts');
      }

      if (!showNewAssetPublishedPreference) {
        lodash_default.a.pull(availablePreferences, 'all_assets_published');
      }

      if (!showApprovalPreference) {
        lodash_default.a.pull(availablePreferences, 'all_assets_approvals');
      }

      if (!shouldShowMyAssetsApprovalsPreference) {
        lodash_default.a.pull(availablePreferences, 'my_assets_approvals');
      }

      _this.setState({
        availablePreferences: availablePreferences
      }, function () {
        _this.updateSelectAllPreferenceState(preferences);
      });
    });

    PreferenceContent_defineProperty(PreferenceContent_assertThisInitialized(_this), "updateSelectAllPreferenceState", function (preferences) {
      var _this$state = _this.state,
          selectAllEmailPreference = _this$state.selectAllEmailPreference,
          selectAllProductPreference = _this$state.selectAllProductPreference,
          availablePreferences = _this$state.availablePreferences;

      var preferenceData = lodash_default.a.map(availablePreferences, function (preferenceKey) {
        return preferences[preferenceKey];
      });

      var emailPreferenceValues = lodash_default.a.map(preferenceData, emailPreferenceKey);

      var productPreferenceValues = lodash_default.a.map(preferenceData, productPreferenceKey);

      selectAllEmailPreference = _this.getPreferenceState(emailPreferenceValues);
      selectAllProductPreference = _this.getPreferenceState(productPreferenceValues);

      _this.setState({
        selectAllEmailPreference: selectAllEmailPreference,
        selectAllProductPreference: selectAllProductPreference
      });
    });

    return _this;
  }

  PreferenceContent_createClass(PreferenceContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateAvailablePreferences();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var preferences = nextProps.preferences;
      this.updateSelectAllPreferenceState(preferences);
    }
  }, {
    key: "getPreferenceState",
    value: function getPreferenceState(preferenceValues) {
      var PreferenceStat;

      if (lodash_default.a.includes(preferenceValues, true) && lodash_default.a.includes(preferenceValues, false)) {
        PreferenceStat = 'intermediate';
      } else if (!lodash_default.a.includes(preferenceValues, true)) {
        PreferenceStat = false;
      } else {
        PreferenceStat = true;
      }

      return PreferenceStat;
    }
  }, {
    key: "renderCheckBox",
    value: function renderCheckBox(value, preferenceName, preferenceType) {
      var onAlertNotificationChange = this.props.onAlertNotificationChange;

      var checkboxId = lodash_default.a.uniqueId(preferenceName);

      return react_default.a.createElement("div", {
        styleName: "preferences-checkbox",
        className: preferenceType
      }, react_default.a.createElement(Checkbox["a" /* default */], {
        id: checkboxId,
        checked: value,
        onChange: function onChange() {
          return onAlertNotificationChange(preferenceName, preferenceType);
        }
      }));
    }
  }, {
    key: "renderThreeStateCheckBox",
    value: function renderThreeStateCheckBox(value, label, notificationKey) {
      var onSelectAllPreferenceTypeChange = this.props.onSelectAllPreferenceTypeChange;
      var availablePreferences = this.state.availablePreferences;

      var checkboxId = lodash_default.a.uniqueId('preference_checkbox_');

      return react_default.a.createElement(ThreeStateCheckbox["a" /* default */], {
        id: checkboxId,
        type: "checkbox",
        checked: value,
        onChange: function onChange() {
          return onSelectAllPreferenceTypeChange(notificationKey, availablePreferences, value);
        }
      }, react_default.a.createElement("span", {
        styleName: "preference-label"
      }, " ", label, " "));
    }
  }, {
    key: "renderDescriptionRow",
    value: function renderDescriptionRow(title, description) {
      var uniqueKey = lodash_default.a.uniqueId();

      return react_default.a.createElement("tr", {
        key: uniqueKey
      }, react_default.a.createElement("td", {
        colSpan: "4"
      }, react_default.a.createElement("div", {
        styleName: "preference-title"
      }, " ", title, " "), react_default.a.createElement("div", {
        styleName: "description"
      }, " ", description)));
    }
  }, {
    key: "renderTableRowWithCheckbox",
    value: function renderTableRowWithCheckbox(preferenceKey, description) {
      var preferences = this.props.preferences;

      var preferenceHash = lodash_default.a.get(preferences, preferenceKey, {});

      var uniqueKey = lodash_default.a.uniqueId();

      return react_default.a.createElement("tr", {
        className: preferenceKey,
        key: uniqueKey
      }, react_default.a.createElement("td", null, this.renderCheckBox(preferenceHash[productPreferenceKey] || false, preferenceKey, productPreferenceKey)), react_default.a.createElement("td", null, this.renderCheckBox(preferenceHash[emailPreferenceKey] || false, preferenceKey, emailPreferenceKey)), react_default.a.createElement("td", {
        colSpan: "2"
      }, description));
    }
  }, {
    key: "renderTableHeader",
    value: function renderTableHeader() {
      var _this$state2 = this.state,
          selectAllEmailPreference = _this$state2.selectAllEmailPreference,
          selectAllProductPreference = _this$state2.selectAllProductPreference;
      var productTitle = i18n["b" /* default */].t('table_header.product_alerts', {
        scope: PreferenceContent_scope
      });
      var emailTitle = i18n["b" /* default */].t('table_header.email_notifications', {
        scope: PreferenceContent_scope
      });
      return react_default.a.createElement("thead", null, react_default.a.createElement("tr", null, react_default.a.createElement("th", null, this.renderThreeStateCheckBox(selectAllProductPreference, productTitle, productPreferenceKey)), react_default.a.createElement("th", null, this.renderThreeStateCheckBox(selectAllEmailPreference, emailTitle, emailPreferenceKey)), react_default.a.createElement("th", null, react_default.a.createElement("div", {
        styleName: "preference-label"
      }, i18n["b" /* default */].t('table_header.feature', {
        scope: PreferenceContent_scope
      })))));
    }
  }, {
    key: "renderMyAssets",
    value: function renderMyAssets() {
      var showMyAssetsTeamMessage = this.props.configurations.showMyAssetsTeamMessage;
      var availablePreferences = this.state.availablePreferences;
      var myAssetsTitle;
      var myAssetsApprovalsContent;

      if (showMyAssetsTeamMessage) {
        myAssetsTitle = i18n["b" /* default */].t('my_assets.title', {
          scope: PreferenceContent_scope
        });
      } else {
        myAssetsTitle = i18n["b" /* default */].t('my_assets.individual_title', {
          scope: PreferenceContent_scope
        });
      }

      if (lodash_default.a.includes(availablePreferences, 'my_assets_approvals')) {
        myAssetsApprovalsContent = this.renderTableRowWithCheckbox('my_assets_approvals', i18n["b" /* default */].t('my_assets.my_assets_approval', {
          scope: PreferenceContent_scope
        }));
      }

      return [this.renderDescriptionRow(myAssetsTitle), this.renderTableRowWithCheckbox('my_assets_updated', i18n["b" /* default */].t('my_assets.my_assets_updated', {
        scope: PreferenceContent_scope
      })), this.renderTableRowWithCheckbox('my_assets_watched_asset_updated', i18n["b" /* default */].t('my_assets.watch_assets', {
        scope: PreferenceContent_scope
      })), this.renderTableRowWithCheckbox('my_assets_collaborators_change', i18n["b" /* default */].t('my_assets.collaborators_change', {
        scope: PreferenceContent_scope
      })), myAssetsApprovalsContent];
    }
  }, {
    key: "renderAllAssets",
    value: function renderAllAssets() {
      var availablePreferences = this.state.availablePreferences;
      var allAssetTitle = i18n["b" /* default */].t('all_assets.title', {
        scope: PreferenceContent_scope
      });
      var allAssetDescription = i18n["b" /* default */].t('all_assets.description', {
        scope: PreferenceContent_scope
      });
      var assetApprovalText = i18n["b" /* default */].t('all_assets.approval_changes', {
        scope: PreferenceContent_scope
      });
      var assetPublishedText = i18n["b" /* default */].t('all_assets.new_asset_published', {
        scope: PreferenceContent_scope
      });
      var collaboratorText = i18n["b" /* default */].t('all_assets.collaborators_change', {
        scope: PreferenceContent_scope
      });
      var dataChangeText = i18n["b" /* default */].t('all_assets.data_change', {
        scope: PreferenceContent_scope
      });
      var deleteAssetText = i18n["b" /* default */].t('all_assets.delete_asset', {
        scope: PreferenceContent_scope
      });
      var metaDataText = i18n["b" /* default */].t('all_assets.meta_data_change', {
        scope: PreferenceContent_scope
      });
      var permissionChangeText = i18n["b" /* default */].t('all_assets.permission_change', {
        scope: PreferenceContent_scope
      });
      var allAssetContent = [this.renderDescriptionRow(allAssetTitle, allAssetDescription)];

      if (lodash_default.a.includes(availablePreferences, 'all_assets_published')) {
        allAssetContent.push(this.renderTableRowWithCheckbox('all_assets_published', assetPublishedText));
      }

      if (lodash_default.a.includes(availablePreferences, 'all_assets_approvals')) {
        allAssetContent.push(this.renderTableRowWithCheckbox('all_assets_approvals', assetApprovalText));
      }

      allAssetContent.push(this.renderTableRowWithCheckbox('all_assets_meta_change', metaDataText));
      allAssetContent.push(this.renderTableRowWithCheckbox('all_assets_data_change', dataChangeText));

      if (lodash_default.a.includes(availablePreferences, 'all_asset_permission_change')) {
        allAssetContent.push(this.renderTableRowWithCheckbox('all_asset_permission_change', permissionChangeText));
      }

      if (lodash_default.a.includes(availablePreferences, 'all_asset_collaborator_change')) {
        allAssetContent.push(this.renderTableRowWithCheckbox('all_asset_collaborator_change', collaboratorText));
      }

      if (lodash_default.a.includes(availablePreferences, 'all_assets_deleted')) {
        allAssetContent.push(this.renderTableRowWithCheckbox('all_assets_deleted', deleteAssetText));
      }

      return allAssetContent;
    }
  }, {
    key: "renderSiteUser",
    value: function renderSiteUser() {
      var availablePreferences = this.state.availablePreferences;

      if (lodash_default.a.includes(availablePreferences, 'user_accounts')) {
        return [this.renderDescriptionRow(i18n["b" /* default */].t('user_accounts.title', {
          scope: PreferenceContent_scope
        })), this.renderTableRowWithCheckbox('user_accounts', i18n["b" /* default */].t('user_accounts.site_user', {
          scope: PreferenceContent_scope
        }))];
      }
    }
  }, {
    key: "renderEmailSettings",
    value: function renderEmailSettings() {
      var _this$props = this.props,
          settings = _this$props.settings,
          onSettingsChange = _this$props.onSettingsChange,
          showMyAlertPreference = _this$props.showMyAlertPreference;
      return react_default.a.createElement(AlertSettingModal_EmailSettings, {
        settings: settings,
        onSettingsChange: onSettingsChange,
        showAlertSetting: showMyAlertPreference
      });
    }
  }, {
    key: "renderTransiantNotificationSettings",
    value: function renderTransiantNotificationSettings() {
      var _this$props2 = this.props,
          settings = _this$props2.settings,
          onSettingsChange = _this$props2.onSettingsChange,
          inProductTransientNotificationsEnabled = _this$props2.inProductTransientNotificationsEnabled;

      if (!inProductTransientNotificationsEnabled) {
        return null;
      }

      return react_default.a.createElement(AlertSettingModal_TransientNotificationSettings, {
        settings: settings,
        onSettingsChange: onSettingsChange
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        styleName: "preferences-content"
      }, react_default.a.createElement("form", null, react_default.a.createElement("table", {
        styleName: "preference-table"
      }, this.renderTableHeader(), react_default.a.createElement("tbody", null, this.renderMyAssets(), this.renderAllAssets(), this.renderSiteUser())), this.renderEmailSettings(), this.renderTransiantNotificationSettings()));
    }
  }]);

  return PreferenceContent;
}(react["Component"]);
PreferenceContent_PreferenceContent.propTypes = {
  configurations: ConfigurationsPropType,
  preferences: prop_types_default.a.object.isRequired,
  settings: prop_types_default.a.object.isRequired,
  onAlertNotificationChange: prop_types_default.a.func,
  onSelectAllPreferenceTypeChange: prop_types_default.a.func,
  onSettingsChange: prop_types_default.a.func,
  inProductTransientNotificationsEnabled: prop_types_default.a.bool
};

var PreferenceContent_mapStateToProps = function mapStateToProps(state) {
  return {
    configurations: state.configurations,
    showMyAlertPreference: state.configurations.showMyAlertPreference,
    inProductTransientNotificationsEnabled: state.configurations.inProductTransientNotificationsEnabled
  };
};

/* harmony default export */ var AlertSettingModal_PreferenceContent = (Object(react_redux_es["b" /* connect */])(PreferenceContent_mapStateToProps)(dist_default()(PreferenceContent_PreferenceContent, preference_module_default.a, {
  allowMultiple: true
})));
// EXTERNAL MODULE: /mnt/workspace/common/components/Button.js
var Button = __webpack_require__(28);

// EXTERNAL MODULE: /mnt/workspace/common/components/CreateAlertModal/api/AlertConverter.js
var AlertConverter = __webpack_require__(394);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/api/AlertShareAPI.js



var AlertShareApi = function () {
  return {
    create: function create(alert, userEmails) {
      return Object(http["f" /* fetchJson */])('/api/notifications_and_alerts/admin/alerts', {
        method: 'POST',
        headers: http["e" /* defaultHeaders */],
        credentials: 'same-origin',
        body: JSON.stringify({
          alert: Object(AlertConverter["b" /* toApiParams */])(alert),
          user_emails: userEmails
        })
      });
    }
  };
}();
/* harmony default export */ var AlertShareAPI = (AlertShareApi);
// EXTERNAL MODULE: /mnt/workspace/common/components/UserSearch/index.js + 3 modules
var UserSearch = __webpack_require__(362);

// EXTERNAL MODULE: /mnt/workspace/common/components/AccessManager/Util.js
var Util = __webpack_require__(51);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/AlertShareModal/AddUser.js
function AddUser_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AddUser_typeof = function _typeof(obj) { return typeof obj; }; } else { AddUser_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AddUser_typeof(obj); }

function AddUser_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { AddUser_defineProperty(target, key, source[key]); }); } return target; }

function AddUser_toConsumableArray(arr) { return AddUser_arrayWithoutHoles(arr) || AddUser_iterableToArray(arr) || AddUser_nonIterableSpread(); }

function AddUser_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function AddUser_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function AddUser_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function AddUser_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AddUser_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AddUser_createClass(Constructor, protoProps, staticProps) { if (protoProps) AddUser_defineProperties(Constructor.prototype, protoProps); if (staticProps) AddUser_defineProperties(Constructor, staticProps); return Constructor; }

function AddUser_possibleConstructorReturn(self, call) { if (call && (AddUser_typeof(call) === "object" || typeof call === "function")) { return call; } return AddUser_assertThisInitialized(self); }

function AddUser_getPrototypeOf(o) { AddUser_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AddUser_getPrototypeOf(o); }

function AddUser_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AddUser_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AddUser_setPrototypeOf(subClass, superClass); }

function AddUser_setPrototypeOf(o, p) { AddUser_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AddUser_setPrototypeOf(o, p); }

function AddUser_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var AddUser_scope = 'shared.site_chrome.notifications.alert_share_modal';

var AddUser_AddUser =
/*#__PURE__*/
function (_Component) {
  AddUser_inherits(AddUser, _Component);

  function AddUser() {
    var _getPrototypeOf2;

    var _this;

    AddUser_classCallCheck(this, AddUser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = AddUser_possibleConstructorReturn(this, (_getPrototypeOf2 = AddUser_getPrototypeOf(AddUser)).call.apply(_getPrototypeOf2, [this].concat(args)));

    AddUser_defineProperty(AddUser_assertThisInitialized(_this), "state", {
      selectedUsers: [],
      userList: [],
      userSearchString: ''
    });

    AddUser_defineProperty(AddUser_assertThisInitialized(_this), "onUserSelect", function (result) {
      var onSelectedUserChange = _this.props.onSelectedUserChange;
      var selectedUsers = _this.state.selectedUsers;

      _this.setState({
        selectedUsers: [].concat(AddUser_toConsumableArray(selectedUsers), [result.user]),
        userSearchString: ''
      }, function () {
        return onSelectedUserChange(_this.state.selectedUsers);
      });
    });

    AddUser_defineProperty(AddUser_assertThisInitialized(_this), "fetchUserList", function () {
      var userSearchString = _this.state.userSearchString;
      Object(Util["h" /* fetchJsonWithDefaults */])(Object(Util["x" /* userAndTeamAutocompleteUrl */])(userSearchString, Object(Util["n" /* getDomain */])())).then(function (response) {
        var filteredResults = lodash_default.a.filter(response.results, function (result) {
          return lodash_default.a.isEmpty(result.team);
        });

        var userList = lodash_default.a.map(filteredResults, function (result) {
          return AddUser_objectSpread({}, result, {
            user: AddUser_objectSpread({}, result.user, {
              type: 'interactive'
            })
          });
        });

        _this.setState({
          userList: userList
        });
      });
    });

    AddUser_defineProperty(AddUser_assertThisInitialized(_this), "removeSelectedUser", function (user) {
      var onSelectedUserChange = _this.props.onSelectedUserChange;
      var selectedUsers = _this.state.selectedUsers;

      var filteredUsers = lodash_default.a.reject(selectedUsers, function (u) {
        return lodash_default.a.isEqual(u, user);
      });

      _this.setState({
        selectedUsers: filteredUsers
      }, function () {
        return onSelectedUserChange(_this.state.selectedUsers);
      });
    });

    AddUser_defineProperty(AddUser_assertThisInitialized(_this), "userSearchQueryChanged", function (e) {
      _this.setState({
        userSearchString: e.target.value
      }, function () {
        _this.fetchUserList();
      });
    });

    return _this;
  }

  AddUser_createClass(AddUser, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          selectedUsers = _this$state.selectedUsers,
          userSearchString = _this$state.userSearchString,
          userList = _this$state.userList;
      var userSearchProps = {
        addSelectedUser: this.onUserSelect,
        currentQuery: userSearchString,
        noResultsMessage: i18n["b" /* default */].t('no_results', {
          scope: AddUser_scope
        }),
        placeHolderText: i18n["b" /* default */].t('placeholder', {
          scope: AddUser_scope
        }),
        unregisteredUserText: i18n["b" /* default */].t('unregistered_user_text', {
          scope: AddUser_scope
        }),
        removeSelectedUser: this.removeSelectedUser,
        results: userList,
        selectedUsers: selectedUsers,
        userSearchQueryChanged: this.userSearchQueryChanged
      };
      return react_default.a.createElement("div", {
        className: "add-user-section"
      }, react_default.a.createElement(UserSearch["a" /* default */], userSearchProps));
    }
  }]);

  return AddUser;
}(react["Component"]);

AddUser_AddUser.propTypes = {
  onSelectedUserChange: prop_types_default.a.func.isRequired
};
/* harmony default export */ var AlertShareModal_AddUser = (AddUser_AddUser);
// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/AlertShareModal/AlertShareModal.js
function AlertShareModal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AlertShareModal_typeof = function _typeof(obj) { return typeof obj; }; } else { AlertShareModal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AlertShareModal_typeof(obj); }

function AlertShareModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { AlertShareModal_defineProperty(target, key, source[key]); }); } return target; }

function AlertShareModal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AlertShareModal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AlertShareModal_createClass(Constructor, protoProps, staticProps) { if (protoProps) AlertShareModal_defineProperties(Constructor.prototype, protoProps); if (staticProps) AlertShareModal_defineProperties(Constructor, staticProps); return Constructor; }

function AlertShareModal_possibleConstructorReturn(self, call) { if (call && (AlertShareModal_typeof(call) === "object" || typeof call === "function")) { return call; } return AlertShareModal_assertThisInitialized(self); }

function AlertShareModal_getPrototypeOf(o) { AlertShareModal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AlertShareModal_getPrototypeOf(o); }

function AlertShareModal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AlertShareModal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AlertShareModal_setPrototypeOf(subClass, superClass); }

function AlertShareModal_setPrototypeOf(o, p) { AlertShareModal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AlertShareModal_setPrototypeOf(o, p); }

function AlertShareModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var AlertShareModal_scope = 'shared.site_chrome.notifications.alert_share_modal';

var AlertShareModal_AlertShareModal =
/*#__PURE__*/
function (_Component) {
  AlertShareModal_inherits(AlertShareModal, _Component);

  function AlertShareModal() {
    var _getPrototypeOf2;

    var _this;

    AlertShareModal_classCallCheck(this, AlertShareModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = AlertShareModal_possibleConstructorReturn(this, (_getPrototypeOf2 = AlertShareModal_getPrototypeOf(AlertShareModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    AlertShareModal_defineProperty(AlertShareModal_assertThisInitialized(_this), "state", {
      selectedUsers: [],
      unpauseAlert: false
    });

    AlertShareModal_defineProperty(AlertShareModal_assertThisInitialized(_this), "onSelectedUserChange", function (selectedUsers) {
      _this.setState({
        selectedUsers: selectedUsers
      });
    });

    AlertShareModal_defineProperty(AlertShareModal_assertThisInitialized(_this), "onPauseAlertChange", function (e) {
      _this.setState({
        unpauseAlert: e.target.checked
      });
    });

    AlertShareModal_defineProperty(AlertShareModal_assertThisInitialized(_this), "onShareAlert", function () {
      var _this$state = _this.state,
          selectedUsers = _this$state.selectedUsers,
          unpauseAlert = _this$state.unpauseAlert;
      var _this$props = _this.props,
          alert = _this$props.alert,
          onClose = _this$props.onClose;

      var userEmails = lodash_default.a.map(selectedUsers, 'email');

      AlertShareAPI.create(AlertShareModal_objectSpread({}, alert, {
        paused: !unpauseAlert
      }), userEmails).then(function () {
        onClose({
          isShared: true
        });
      });
    });

    return _this;
  }

  AlertShareModal_createClass(AlertShareModal, [{
    key: "renderModalFooter",
    value: function renderModalFooter() {
      var onClose = this.props.onClose;
      var selectedUsers = this.state.selectedUsers;
      return react_default.a.createElement(Modal["c" /* ModalFooter */], null, react_default.a.createElement(Button["c" /* default */], {
        className: "cancel-button",
        onClick: onClose
      }, i18n["b" /* default */].t('close', {
        scope: AlertShareModal_scope
      })), react_default.a.createElement(Button["c" /* default */], {
        className: "ok-button",
        disabled: lodash_default.a.isEmpty(selectedUsers),
        onClick: this.onShareAlert,
        variant: "primary"
      }, i18n["b" /* default */].t('ok', {
        scope: AlertShareModal_scope
      })));
    }
  }, {
    key: "renderPauseAlert",
    value: function renderPauseAlert() {
      var unpauseAlert = this.state.unpauseAlert;

      var pauseId = lodash_default.a.uniqueId();

      return react_default.a.createElement("div", {
        className: "alert-pause-section"
      }, react_default.a.createElement("div", {
        className: "user-input-title pause-section"
      }, " ", i18n["b" /* default */].t('pause_section_title', {
        scope: AlertShareModal_scope
      }), " "), react_default.a.createElement("div", {
        className: "user-input-description"
      }, " ", i18n["b" /* default */].t('pause_section_description', {
        scope: AlertShareModal_scope
      })), react_default.a.createElement("form", null, react_default.a.createElement(Checkbox["a" /* default */], {
        checked: unpauseAlert,
        id: pauseId,
        onChange: this.onPauseAlertChange
      }, react_default.a.createElement("span", null, i18n["b" /* default */].t('pause_section_label', {
        scope: AlertShareModal_scope
      }), " "))));
    }
  }, {
    key: "renderUserSearch",
    value: function renderUserSearch() {
      return react_default.a.createElement("div", null, react_default.a.createElement("div", {
        className: "user-input-title"
      }, " ", i18n["b" /* default */].t('add_user_title', {
        scope: AlertShareModal_scope
      })), react_default.a.createElement("div", {
        className: "user-input-description"
      }, i18n["b" /* default */].t('add_user_description', {
        scope: AlertShareModal_scope
      })), react_default.a.createElement(AlertShareModal_AddUser, {
        onSelectedUserChange: this.onSelectedUserChange
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var onClose = this.props.onClose;
      var containerStyle = {
        'maxWidth': '800px',
        'padding': '20px',
        'margin': '20px auto',
        'bottom': 'auto'
      };
      return react_default.a.createElement(Modal["a" /* Modal */], {
        className: "alert-share-modal",
        onDismiss: onClose,
        containerStyle: containerStyle
      }, react_default.a.createElement(Modal["d" /* ModalHeader */], {
        title: i18n["b" /* default */].t('share_title', {
          scope: AlertShareModal_scope
        }),
        onDismiss: onClose
      }), react_default.a.createElement(Modal["b" /* ModalContent */], {
        className: "alert-share-modal-content"
      }, react_default.a.createElement("div", {
        className: "alert-share-modal-wrapper"
      }, react_default.a.createElement("div", {
        className: "title"
      }, i18n["b" /* default */].t('share_description', {
        scope: AlertShareModal_scope
      })), this.renderUserSearch(), this.renderPauseAlert())), this.renderModalFooter());
    }
  }]);

  return AlertShareModal;
}(react["Component"]);

AlertShareModal_AlertShareModal.propTypes = {
  alert: prop_types_default.a.object,
  onClose: prop_types_default.a.func
};
/* harmony default export */ var components_AlertShareModal_AlertShareModal = (AlertShareModal_AlertShareModal);
// EXTERNAL MODULE: /mnt/workspace/common/components/CreateAlertModal/index.js + 18 modules
var CreateAlertModal = __webpack_require__(786);

// EXTERNAL MODULE: /mnt/workspace/common/components/CreateAlertModal/api/CreateAlertApi.js
var CreateAlertApi = __webpack_require__(472);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/api/MyAlertsApi.js




function MyAlertsApi_getDefaultHeaders() {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
}

var MyAlertsApi = function () {
  return {
    get: function get() {
      var domain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.host;
      return fetch("/api/notifications_and_alerts/alerts?domain=".concat(domain), {
        method: 'GET',
        headers: MyAlertsApi_getDefaultHeaders(),
        credentials: 'same-origin'
      }).then(function (response) {
        return Object(helper["a" /* checkStatus */])(response, 'An error was encountered while getting alert preferences, please try again or contact support@socrata.com');
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        return Object(AlertConverter["a" /* fromApiParams */])(response.data);
      });
    }
  };
}();
/* harmony default export */ var api_MyAlertsApi = (MyAlertsApi);
// EXTERNAL MODULE: /mnt/workspace/common/notifications/components/AlertSettingModal/MyAlerts/myAlerts.module.scss
var myAlerts_module = __webpack_require__(549);
var myAlerts_module_default = /*#__PURE__*/__webpack_require__.n(myAlerts_module);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/AlertSettingModal/MyAlerts/MyAlertsInfo.js
function MyAlertsInfo_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MyAlertsInfo_typeof = function _typeof(obj) { return typeof obj; }; } else { MyAlertsInfo_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MyAlertsInfo_typeof(obj); }

function MyAlertsInfo_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MyAlertsInfo_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MyAlertsInfo_createClass(Constructor, protoProps, staticProps) { if (protoProps) MyAlertsInfo_defineProperties(Constructor.prototype, protoProps); if (staticProps) MyAlertsInfo_defineProperties(Constructor, staticProps); return Constructor; }

function MyAlertsInfo_possibleConstructorReturn(self, call) { if (call && (MyAlertsInfo_typeof(call) === "object" || typeof call === "function")) { return call; } return MyAlertsInfo_assertThisInitialized(self); }

function MyAlertsInfo_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MyAlertsInfo_getPrototypeOf(o) { MyAlertsInfo_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MyAlertsInfo_getPrototypeOf(o); }

function MyAlertsInfo_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MyAlertsInfo_setPrototypeOf(subClass, superClass); }

function MyAlertsInfo_setPrototypeOf(o, p) { MyAlertsInfo_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MyAlertsInfo_setPrototypeOf(o, p); }







var MyAlertsInfo_scope = 'shared.site_chrome.notifications.alert_setting_modal.my_alert_tab';

var MyAlertsInfo_MyAlertsInfo =
/*#__PURE__*/
function (_Component) {
  MyAlertsInfo_inherits(MyAlertsInfo, _Component);

  function MyAlertsInfo() {
    MyAlertsInfo_classCallCheck(this, MyAlertsInfo);

    return MyAlertsInfo_possibleConstructorReturn(this, MyAlertsInfo_getPrototypeOf(MyAlertsInfo).apply(this, arguments));
  }

  MyAlertsInfo_createClass(MyAlertsInfo, [{
    key: "renderInfoMessage",
    value: function renderInfoMessage() {
      var _this$props = this.props,
          alert = _this$props.alert,
          showSharedMessage = _this$props.showSharedMessage,
          showDeleteMessage = _this$props.showDeleteMessage;
      var deleteMessage = i18n["b" /* default */].t('alert_deleted_info', {
        scope: MyAlertsInfo_scope,
        name: lodash_default.a.get(alert, 'name', 'Alert')
      });
      var shareMessage = i18n["b" /* default */].t('alert_shared_message', {
        scope: MyAlertsInfo_scope
      });

      if (showDeleteMessage || showSharedMessage) {
        return react_default.a.createElement("div", {
          styleName: "alert-info",
          className: "info-message"
        }, react_default.a.createElement("span", null, showDeleteMessage ? deleteMessage : shareMessage), react_default.a.createElement("hr", null));
      }
    }
  }, {
    key: "renderEmptyMessage",
    value: function renderEmptyMessage() {
      var showEmptyMessage = this.props.showEmptyMessage;

      if (showEmptyMessage) {
        return react_default.a.createElement("div", {
          styleName: "alert-info",
          className: "empty-message"
        }, react_default.a.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: i18n["b" /* default */].t('empty_message_with_helper_text', {
              scope: MyAlertsInfo_scope
            })
          }
        }), react_default.a.createElement("hr", null));
      }
    }
  }, {
    key: "renderErrorMessage",
    value: function renderErrorMessage() {
      var showErrorMessage = this.props.showErrorMessage;

      if (showErrorMessage) {
        return react_default.a.createElement("div", {
          styleName: "alert-info error",
          className: "error-info"
        }, react_default.a.createElement("span", null, " ", i18n["b" /* default */].t('error_message', {
          scope: MyAlertsInfo_scope
        }), " "), react_default.a.createElement("hr", null));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          showSharedMessage = _this$props2.showSharedMessage,
          showDeleteMessage = _this$props2.showDeleteMessage,
          showEmptyMessage = _this$props2.showEmptyMessage,
          showErrorMessage = _this$props2.showErrorMessage;

      if (showDeleteMessage || showSharedMessage) {
        return this.renderInfoMessage();
      } else if (showEmptyMessage) {
        return this.renderEmptyMessage();
      } else if (showErrorMessage) {
        return this.renderErrorMessage();
      }
    }
  }]);

  return MyAlertsInfo;
}(react["Component"]);

MyAlertsInfo_MyAlertsInfo.propTypes = {
  alert: prop_types_default.a.object,
  showSharedMessage: prop_types_default.a.bool,
  showDeleteMessage: prop_types_default.a.bool,
  showEmptyMessage: prop_types_default.a.bool,
  showErrorMessage: prop_types_default.a.bool
};
/* harmony default export */ var MyAlerts_MyAlertsInfo = (dist_default()(MyAlertsInfo_MyAlertsInfo, myAlerts_module_default.a, {
  allowMultiple: true
}));
// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/AlertSettingModal/MyAlerts/AlertShareButton.js
function AlertShareButton_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AlertShareButton_typeof = function _typeof(obj) { return typeof obj; }; } else { AlertShareButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AlertShareButton_typeof(obj); }

function AlertShareButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AlertShareButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AlertShareButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) AlertShareButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) AlertShareButton_defineProperties(Constructor, staticProps); return Constructor; }

function AlertShareButton_possibleConstructorReturn(self, call) { if (call && (AlertShareButton_typeof(call) === "object" || typeof call === "function")) { return call; } return AlertShareButton_assertThisInitialized(self); }

function AlertShareButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AlertShareButton_getPrototypeOf(o) { AlertShareButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AlertShareButton_getPrototypeOf(o); }

function AlertShareButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AlertShareButton_setPrototypeOf(subClass, superClass); }

function AlertShareButton_setPrototypeOf(o, p) { AlertShareButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AlertShareButton_setPrototypeOf(o, p); }







var AlertShareButton_AlertShareButton =
/*#__PURE__*/
function (_Component) {
  AlertShareButton_inherits(AlertShareButton, _Component);

  function AlertShareButton() {
    AlertShareButton_classCallCheck(this, AlertShareButton);

    return AlertShareButton_possibleConstructorReturn(this, AlertShareButton_getPrototypeOf(AlertShareButton).apply(this, arguments));
  }

  AlertShareButton_createClass(AlertShareButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          alert = _this$props.alert,
          onShareAlertClick = _this$props.onShareAlertClick;
      return react_default.a.createElement("div", {
        styleName: "alert-share",
        className: "alert-share",
        onClick: function onClick() {
          return onShareAlertClick(alert);
        }
      }, react_default.a.createElement(SocrataIcon["a" /* SocrataIcon */], {
        name: "share"
      }));
    }
  }]);

  return AlertShareButton;
}(react["Component"]);

AlertShareButton_AlertShareButton.propTypes = {
  alert: prop_types_default.a.object.isRequired,
  onShareAlertClick: prop_types_default.a.func.isRequired
};
/* harmony default export */ var MyAlerts_AlertShareButton = (dist_default()(AlertShareButton_AlertShareButton, myAlerts_module_default.a, {
  allowMultiple: true
}));
// EXTERNAL MODULE: /mnt/workspace/common/components/DeleteAlertModal/DeleteAlertModal.js + 1 modules
var DeleteAlertModal = __webpack_require__(802);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/AlertSettingModal/MyAlerts/MyAlerts.js
function MyAlerts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MyAlerts_typeof = function _typeof(obj) { return typeof obj; }; } else { MyAlerts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MyAlerts_typeof(obj); }

function MyAlerts_toConsumableArray(arr) { return MyAlerts_arrayWithoutHoles(arr) || MyAlerts_iterableToArray(arr) || MyAlerts_nonIterableSpread(); }

function MyAlerts_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function MyAlerts_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function MyAlerts_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function MyAlerts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MyAlerts_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MyAlerts_createClass(Constructor, protoProps, staticProps) { if (protoProps) MyAlerts_defineProperties(Constructor.prototype, protoProps); if (staticProps) MyAlerts_defineProperties(Constructor, staticProps); return Constructor; }

function MyAlerts_possibleConstructorReturn(self, call) { if (call && (MyAlerts_typeof(call) === "object" || typeof call === "function")) { return call; } return MyAlerts_assertThisInitialized(self); }

function MyAlerts_getPrototypeOf(o) { MyAlerts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MyAlerts_getPrototypeOf(o); }

function MyAlerts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MyAlerts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MyAlerts_setPrototypeOf(subClass, superClass); }

function MyAlerts_setPrototypeOf(o, p) { MyAlerts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MyAlerts_setPrototypeOf(o, p); }

function MyAlerts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















var MyAlerts_scope = 'shared.site_chrome.notifications.alert_setting_modal.my_alert_tab';
var ALERT_SELECT_STATES = {
  ALL_SELECTED: true,
  NONE_SELECTED: false,
  SOME_SELECTED: 'intermediate'
};
var MyAlerts_MyAlerts =
/*#__PURE__*/
function (_Component) {
  MyAlerts_inherits(MyAlerts, _Component);

  function MyAlerts() {
    var _getPrototypeOf2;

    var _this;

    MyAlerts_classCallCheck(this, MyAlerts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = MyAlerts_possibleConstructorReturn(this, (_getPrototypeOf2 = MyAlerts_getPrototypeOf(MyAlerts)).call.apply(_getPrototypeOf2, [this].concat(args)));

    MyAlerts_defineProperty(MyAlerts_assertThisInitialized(_this), "state", {
      currentSelectedAlert: {},
      isAlertsLoading: false,
      isSelectAllAlerts: false,
      myAlerts: [],
      pauseButtonState: false,
      selectedAlertIds: [],
      showAlertDeletedMessage: false,
      showDeleteAlertModal: false,
      showEmptyMessage: false,
      showErrorMessage: false
    });

    MyAlerts_defineProperty(MyAlerts_assertThisInitialized(_this), "changePauseButtonState", function () {
      var _this$state = _this.state,
          myAlerts = _this$state.myAlerts,
          selectedAlertIds = _this$state.selectedAlertIds;

      var currentSelectedAlerts = lodash_default.a.filter(myAlerts, function (alert) {
        return lodash_default.a.includes(selectedAlertIds, alert.id);
      });

      var pauseButtonState = lodash_default.a.isEmpty(selectedAlertIds) ? false : lodash_default.a.every(currentSelectedAlerts, ['paused', true]);

      _this.setState({
        pauseButtonState: pauseButtonState
      });
    });

    MyAlerts_defineProperty(MyAlerts_assertThisInitialized(_this), "onDeleteSuccess", function () {
      _this.setState({
        selectedAlertIds: [],
        isSelectAllAlerts: false
      });

      _this.fetchMyAlerts();

      _this.onDeleteModalClose({
        isDeleted: true
      });
    });

    MyAlerts_defineProperty(MyAlerts_assertThisInitialized(_this), "isSelectedAlert", function (alert) {
      var selectedAlertIds = _this.state.selectedAlertIds;
      return lodash_default.a.includes(selectedAlertIds, alert.id);
    });

    MyAlerts_defineProperty(MyAlerts_assertThisInitialized(_this), "isSelectedAlertEmpty", function () {
      var selectedAlertIds = _this.state.selectedAlertIds;
      return lodash_default.a.isEmpty(selectedAlertIds);
    });

    MyAlerts_defineProperty(MyAlerts_assertThisInitialized(_this), "onAlertSelected", function (alert, event) {
      var _this$state2 = _this.state,
          myAlerts = _this$state2.myAlerts,
          selectedAlertIds = _this$state2.selectedAlertIds;

      var updatedSelectedAlerts = function () {
        if (event.target.checked) {
          return [].concat(MyAlerts_toConsumableArray(selectedAlertIds), [alert.id]);
        } else {
          return lodash_default.a.without(selectedAlertIds, alert.id);
        }
      }();

      _this.setState({
        myAlerts: myAlerts,
        selectedAlertIds: updatedSelectedAlerts
      }, function () {
        _this.updateSelectAllAlert();

        _this.changePauseButtonState();
      });
    });

    MyAlerts_defineProperty(MyAlerts_assertThisInitialized(_this), "onDeleteModalClose", function (options) {
      _this.setState({
        showDeleteAlertModal: false,
        showAlertDeletedMessage: lodash_default.a.get(options, 'isDeleted', false)
      });
    });

    MyAlerts_defineProperty(MyAlerts_assertThisInitialized(_this), "onSelectAllAlertsCheckboxChange", function (event) {
      var myAlerts = _this.state.myAlerts;
      var isSelectAllAlerts = event.target.checked;
      var selectedAlertIds = isSelectAllAlerts ? lodash_default.a.map(myAlerts, 'id') : [];

      _this.setState({
        isSelectAllAlerts: isSelectAllAlerts,
        selectedAlertIds: selectedAlertIds
      }, function () {
        _this.changePauseButtonState();

        _this.updateSelectAllAlert();
      });
    });

    MyAlerts_defineProperty(MyAlerts_assertThisInitialized(_this), "onEditAlertClick", function (alert) {
      var onEditAlertClick = _this.props.onEditAlertClick;
      onEditAlertClick(alert);

      _this.setState({
        currentSelectedAlert: alert,
        selectedAlertIds: [alert.id]
      });
    });

    MyAlerts_defineProperty(MyAlerts_assertThisInitialized(_this), "onDeleteButtonClick", function () {
      _this.setState({
        showDeleteAlertModal: true
      });
    });

    MyAlerts_defineProperty(MyAlerts_assertThisInitialized(_this), "onPauseButtonClick", function () {
      var _this$state3 = _this.state,
          pauseButtonState = _this$state3.pauseButtonState,
          selectedAlertIds = _this$state3.selectedAlertIds;

      _this.setState({
        isAlertsLoading: true
      });

      CreateAlertApi["a" /* default */].bulkUpdate(selectedAlertIds, {
        column: 'paused',
        value: !pauseButtonState
      }).then(function () {
        _this.setState({
          showErrorMessage: false,
          pauseButtonState: !pauseButtonState
        });

        _this.fetchMyAlerts();
      })["catch"](function () {
        _this.setState({
          isAlertsLoading: false,
          showErrorMessage: true
        });
      });
    });

    MyAlerts_defineProperty(MyAlerts_assertThisInitialized(_this), "fetchMyAlerts", function () {
      var myAlerts;
      var _this$state4 = _this.state,
          showEmptyMessage = _this$state4.showEmptyMessage,
          isAlertsLoading = _this$state4.isAlertsLoading;

      _this.setState({
        isAlertsLoading: true
      });

      api_MyAlertsApi.get().then(function (response) {
        myAlerts = response;
        showEmptyMessage = lodash_default.a.isEmpty(response);
        isAlertsLoading = false;

        _this.setState({
          myAlerts: myAlerts,
          showEmptyMessage: showEmptyMessage,
          isAlertsLoading: isAlertsLoading
        });
      })["catch"](function () {
        _this.setState({
          isAlertsLoading: false
        });
      });
    });

    MyAlerts_defineProperty(MyAlerts_assertThisInitialized(_this), "formatDatasetName", function (datasetName) {
      // sometimes datasetName may be null
      var name = datasetName || '';
      name = name.replace(/[\W]/g, '-').replace(/\-+/g, '-');

      if (name.length < 1) {
        name = '-';
      }

      return name.slice(0, 50);
    });

    MyAlerts_defineProperty(MyAlerts_assertThisInitialized(_this), "domainUrl", function (alert) {
      var domainName = lodash_default.a.get(alert, 'domain', '');

      var datasetId = lodash_default.a.get(alert, 'datasetUid', '');

      var datasetName = lodash_default.a.get(alert, 'datasetName', '');

      return "//".concat(domainName, "/dataset/").concat(_this.formatDatasetName(datasetName), "/").concat(datasetId);
    });

    MyAlerts_defineProperty(MyAlerts_assertThisInitialized(_this), "updateSelectAllAlert", function () {
      var _this$state5 = _this.state,
          myAlerts = _this$state5.myAlerts,
          selectedAlertIds = _this$state5.selectedAlertIds;

      var allAlertIdsSorted = lodash_default.a.map(myAlerts, 'id').sort();

      var selectedAlertIdsSorted = selectedAlertIds.sort();

      var isSelectAllAlerts = function () {
        if (lodash_default.a.isEmpty(selectedAlertIdsSorted)) {
          return ALERT_SELECT_STATES.NONE_SELECTED;
        } else if (lodash_default.a.isEqual(allAlertIdsSorted, selectedAlertIdsSorted)) {
          return ALERT_SELECT_STATES.ALL_SELECTED;
        } else {
          return ALERT_SELECT_STATES.SOME_SELECTED;
        }
      }();

      _this.setState({
        isSelectAllAlerts: isSelectAllAlerts
      });
    });

    return _this;
  }

  MyAlerts_createClass(MyAlerts, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.fetchMyAlerts();
      var _this$props = this.props,
          currentSelectedAlert = _this$props.currentSelectedAlert,
          showAlertDeletedMessage = _this$props.showAlertDeletedMessage;
      this.setState({
        currentSelectedAlert: currentSelectedAlert,
        showAlertDeletedMessage: showAlertDeletedMessage
      });
    }
  }, {
    key: "renderDeleteAlertModal",
    value: function renderDeleteAlertModal() {
      var _this$state6 = this.state,
          showDeleteAlertModal = _this$state6.showDeleteAlertModal,
          selectedAlertIds = _this$state6.selectedAlertIds;

      if (showDeleteAlertModal) {
        return react_default.a.createElement(DeleteAlertModal["a" /* default */], {
          onCancel: this.onDeleteModalClose,
          onDismiss: this.onDeleteModalClose,
          onDeleteSuccess: this.onDeleteSuccess,
          selectedAlertIds: selectedAlertIds
        });
      }
    }
  }, {
    key: "renderPauseButton",
    value: function renderPauseButton() {
      var pauseText = this.state.pauseButtonState ? i18n["b" /* default */].t('unpause', {
        scope: MyAlerts_scope
      }) : i18n["b" /* default */].t('pause', {
        scope: MyAlerts_scope
      });
      return react_default.a.createElement(Button["c" /* default */], {
        className: "pause-button",
        disabled: this.isSelectedAlertEmpty(),
        onClick: this.onPauseButtonClick,
        styleName: "pause-button",
        variant: "primary",
        title: "Pause"
      }, pauseText);
    }
  }, {
    key: "renderShareButton",
    value: function renderShareButton(alert) {
      var _this$props2 = this.props,
          haveOtherDatasetEditRights = _this$props2.haveOtherDatasetEditRights,
          onShareAlertClick = _this$props2.onShareAlertClick;

      if (haveOtherDatasetEditRights) {
        return react_default.a.createElement(MyAlerts_AlertShareButton, {
          alert: alert,
          onShareAlertClick: onShareAlertClick
        });
      }
    }
  }, {
    key: "renderMyAlertList",
    value: function renderMyAlertList() {
      var _this2 = this;

      var myAlerts = this.state.myAlerts;
      return myAlerts.map(function (alert) {
        var alertId = lodash_default.a.uniqueId();

        var myAlertClassNames = classnames_default()({
          'my-alerts-paused': alert.paused
        });
        return react_default.a.createElement("tr", {
          styleName: myAlertClassNames,
          key: alert.id
        }, react_default.a.createElement("td", null, react_default.a.createElement(Checkbox["a" /* default */], {
          checked: _this2.isSelectedAlert(alert),
          id: alertId,
          onChange: function onChange(e) {
            _this2.onAlertSelected(alert, e);
          }
        })), react_default.a.createElement("td", null, react_default.a.createElement("div", {
          styleName: "alert-container paused"
        }, alert.paused && react_default.a.createElement("div", {
          styleName: "paused-title"
        }, "Paused"), react_default.a.createElement("div", {
          styleName: "alert-name"
        }, alert.name), _this2.renderShareButton(alert), react_default.a.createElement("div", {
          styleName: "alert-detail",
          className: "clearfix"
        }, react_default.a.createElement("a", {
          styleName: "alert-dataset",
          href: _this2.domainUrl(alert),
          target: "_blank"
        }, alert.datasetName)), react_default.a.createElement("div", {
          styleName: "alert-detail",
          className: "clearfix"
        }, react_default.a.createElement("a", {
          className: "alert-query",
          styleName: "alert-query",
          href: "#",
          onClick: function onClick() {
            return _this2.onEditAlertClick(alert);
          }
        }, alert.queryString)))));
      });
    }
  }, {
    key: "renderInfo",
    value: function renderInfo() {
      var _this$state7 = this.state,
          currentSelectedAlert = _this$state7.currentSelectedAlert,
          showAlertDeletedMessage = _this$state7.showAlertDeletedMessage,
          showEmptyMessage = _this$state7.showEmptyMessage,
          showErrorMessage = _this$state7.showErrorMessage;
      var showAlertSharedMessage = this.props.showAlertSharedMessage;
      return react_default.a.createElement(MyAlerts_MyAlertsInfo, {
        alert: currentSelectedAlert,
        showDeleteMessage: showAlertDeletedMessage,
        showEmptyMessage: showEmptyMessage,
        showErrorMessage: showErrorMessage,
        showShareMessage: showAlertSharedMessage
      });
    }
  }, {
    key: "renderAlertsHeader",
    value: function renderAlertsHeader() {
      var _this3 = this;

      var isSelectAllAlerts = this.state.isSelectAllAlerts;
      return react_default.a.createElement("form", null, react_default.a.createElement("div", {
        className: "table-wrapper"
      }, react_default.a.createElement("table", {
        styleName: "myalert-table"
      }, react_default.a.createElement("thead", null, react_default.a.createElement("tr", null, react_default.a.createElement("th", null, react_default.a.createElement(ThreeStateCheckbox["a" /* default */], {
        checked: isSelectAllAlerts,
        className: "notification-alerts-checkbox icon-minus",
        id: "select all",
        onChange: function onChange(e) {
          return _this3.onSelectAllAlertsCheckboxChange(e);
        }
      })), react_default.a.createElement("th", null, react_default.a.createElement("div", {
        styleName: "pull-right"
      }, this.renderPauseButton(), react_default.a.createElement(Button["c" /* default */], {
        className: "delete-button",
        disabled: this.isSelectedAlertEmpty(),
        onClick: function onClick() {
          return _this3.onDeleteButtonClick();
        },
        styleName: "delete-button",
        variant: "default",
        title: "Delete"
      }, i18n["b" /* default */].t('delete', {
        scope: MyAlerts_scope
      })))))), react_default.a.createElement("tbody", null, this.renderMyAlertList()))), react_default.a.createElement("span", {
        styleName: "myalert-footer"
      }, i18n["b" /* default */].t('alert_create_info', {
        scope: MyAlerts_scope
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state8 = this.state,
          isAlertsLoading = _this$state8.isAlertsLoading,
          myAlerts = _this$state8.myAlerts;
      return react_default.a.createElement("div", {
        styleName: "my-alerts-content"
      }, isAlertsLoading && react_default.a.createElement(Spinner["a" /* default */], null), this.renderInfo(), lodash_default.a.isEmpty(myAlerts) || this.renderAlertsHeader(), this.renderDeleteAlertModal());
    }
  }]);

  return MyAlerts;
}(react["Component"]);
MyAlerts_MyAlerts.defaultProps = {
  showAlertDeletedMessage: false
};
MyAlerts_MyAlerts.propTypes = {
  currentSelectedAlert: prop_types_default.a.object,
  haveOtherDatasetEditRights: prop_types_default.a.bool,
  onEditAlertClick: prop_types_default.a.func.isRequired,
  showAlertDeletedMessage: prop_types_default.a.bool,
  showAlertSharedMessage: prop_types_default.a.bool
};

var MyAlerts_mapStateToProps = function mapStateToProps(state) {
  return {
    haveOtherDatasetEditRights: state.configurations.haveOtherDatasetEditRights
  };
};

/* harmony default export */ var AlertSettingModal_MyAlerts_MyAlerts = (Object(react_redux_es["b" /* connect */])(MyAlerts_mapStateToProps)(dist_default()(MyAlerts_MyAlerts, myAlerts_module_default.a, {
  allowMultiple: true
})));
// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/AlertSettingModal/AlertSettingModal.js
function AlertSettingModal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AlertSettingModal_typeof = function _typeof(obj) { return typeof obj; }; } else { AlertSettingModal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AlertSettingModal_typeof(obj); }

function AlertSettingModal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AlertSettingModal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AlertSettingModal_createClass(Constructor, protoProps, staticProps) { if (protoProps) AlertSettingModal_defineProperties(Constructor.prototype, protoProps); if (staticProps) AlertSettingModal_defineProperties(Constructor, staticProps); return Constructor; }

function AlertSettingModal_possibleConstructorReturn(self, call) { if (call && (AlertSettingModal_typeof(call) === "object" || typeof call === "function")) { return call; } return AlertSettingModal_assertThisInitialized(self); }

function AlertSettingModal_getPrototypeOf(o) { AlertSettingModal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AlertSettingModal_getPrototypeOf(o); }

function AlertSettingModal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AlertSettingModal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AlertSettingModal_setPrototypeOf(subClass, superClass); }

function AlertSettingModal_setPrototypeOf(o, p) { AlertSettingModal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AlertSettingModal_setPrototypeOf(o, p); }

function AlertSettingModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















var AlertSettingModal_AlertSettingModal =
/*#__PURE__*/
function (_Component) {
  AlertSettingModal_inherits(AlertSettingModal, _Component);

  function AlertSettingModal(props) {
    var _this;

    AlertSettingModal_classCallCheck(this, AlertSettingModal);

    _this = AlertSettingModal_possibleConstructorReturn(this, AlertSettingModal_getPrototypeOf(AlertSettingModal).call(this, props));

    AlertSettingModal_defineProperty(AlertSettingModal_assertThisInitialized(_this), "onAlertNotificationChange", function (category, notificationKey) {
      var preferences = lodash_default.a.cloneDeep(_this.state.preferences);

      var categoryData = lodash_default.a.get(preferences, category, {});

      if (!lodash_default.a.isEmpty(categoryData)) {
        categoryData[notificationKey] = !categoryData[notificationKey];
      } else {
        categoryData.name = category;
        categoryData.enable_product_notification = false;
        categoryData.enable_email_notification = false;
      }

      preferences[category] = categoryData;

      _this.setState({
        preferences: preferences
      });
    });

    AlertSettingModal_defineProperty(AlertSettingModal_assertThisInitialized(_this), "onSelectAllPreferenceTypeChange", function (notificationKey, availablePreferences, currentValue) {
      var preferences = lodash_default.a.cloneDeep(_this.state.preferences);

      var notificationState = currentValue == 'intermediate' ? true : !currentValue;

      lodash_default.a.each(availablePreferences, function (preferenceKey) {
        lodash_default.a.set(preferences, preferenceKey + '.' + notificationKey, notificationState);
      });

      _this.setState({
        preferences: preferences
      });
    });

    AlertSettingModal_defineProperty(AlertSettingModal_assertThisInitialized(_this), "onEditAlertClick", function (alert) {
      _this.setState({
        selectedAlert: alert,
        showCreateAlertModal: true
      });
    });

    AlertSettingModal_defineProperty(AlertSettingModal_assertThisInitialized(_this), "onShareAlertClick", function (alert) {
      _this.setState({
        selectedAlert: alert,
        showAlertShareModal: true
      });
    });

    AlertSettingModal_defineProperty(AlertSettingModal_assertThisInitialized(_this), "onCloseAlertModal", function (options) {
      _this.setState({
        selectedTab: constants["c" /* ALERT_SETTING_MODAL_TABS */].MY_ALERTS,
        showCreateAlertModal: false,
        showAlertDeletedMessage: lodash_default.a.get(options, 'isDeleted', false)
      });
    });

    AlertSettingModal_defineProperty(AlertSettingModal_assertThisInitialized(_this), "onCloseAlertShareModal", function (options) {
      var selectedTab = constants["c" /* ALERT_SETTING_MODAL_TABS */].MY_ALERTS;

      var showAlertSharedMessage = lodash_default.a.get(options, 'isShared', false);

      _this.setState({
        selectedTab: selectedTab,
        showAlertSharedMessage: showAlertSharedMessage,
        showAlertShareModal: false
      });
    });

    _this.state = {
      failedLoadingUserPreferences: false,
      preferences: {},
      selectedAlert: {},
      selectedTab: constants["c" /* ALERT_SETTING_MODAL_TABS */].NOTIFICATION,
      settings: {},
      showAlertSharedMessage: false,
      showAlertShareModal: false,
      showCreateAlertModal: false,
      showAlertDeletedMessage: false,
      showSpinner: false,
      userPreferencesLoaded: false
    };
    _this.onTabChange = _this.onTabChange.bind(AlertSettingModal_assertThisInitialized(_this));
    _this.onSettingsChange = _this.onSettingsChange.bind(AlertSettingModal_assertThisInitialized(_this));
    _this.saveAlertSettings = _this.saveAlertSettings.bind(AlertSettingModal_assertThisInitialized(_this));
    return _this;
  }

  AlertSettingModal_createClass(AlertSettingModal, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var preferenceSettings = this.props.preferenceSettings;
      this.setState({
        preferences: preferenceSettings.preferences,
        settings: preferenceSettings.settings,
        userPreferencesLoaded: preferenceSettings.userPreferencesLoaded,
        failedLoadingUserPreferences: preferenceSettings.failedLoadingUserPreferences
      });
    }
  }, {
    key: "onSettingsChange",
    value: function onSettingsChange(category, options) {
      var settings = lodash_default.a.cloneDeep(this.state.settings);

      var categoryData = lodash_default.a.get(settings, "".concat(category, ".0"), {});

      categoryData.name = category;
      categoryData.enable = lodash_default.a.isUndefined(options.enable) ? categoryData.enable : options.enable;
      categoryData.value = lodash_default.a.isUndefined(options.value) ? categoryData.value : options.value;
      categoryData.type = lodash_default.a.isUndefined(options.type) ? categoryData.type : options.type;
      settings[category] = [categoryData];
      this.setState({
        settings: settings
      });
    }
  }, {
    key: "onTabChange",
    value: function onTabChange(selectedTab) {
      this.setState({
        selectedTab: selectedTab
      });
    }
  }, {
    key: "renderNotificationTabContent",
    value: function renderNotificationTabContent() {
      var _this$state = this.state,
          failedLoadingUserPreferences = _this$state.failedLoadingUserPreferences,
          preferences = _this$state.preferences,
          settings = _this$state.settings,
          userPreferencesLoaded = _this$state.userPreferencesLoaded;

      if (userPreferencesLoaded) {
        return react_default.a.createElement(AlertSettingModal_PreferenceContent, {
          onAlertNotificationChange: this.onAlertNotificationChange,
          onSelectAllPreferenceTypeChange: this.onSelectAllPreferenceTypeChange,
          onSettingsChange: this.onSettingsChange,
          preferences: preferences,
          settings: settings
        });
      } else if (failedLoadingUserPreferences) {
        var errorText = i18n["b" /* default */].t('error_loading_preferences_text_html', {
          scope: 'shared.site_chrome.notifications.alert_setting_modal'
        });
        return react_default.a.createElement("div", {
          styleName: "user-preferences-error-message-wrapper"
        }, react_default.a.createElement(components_ErrorMessage, {
          text: errorText
        }));
      }

      return react_default.a.createElement("div", {
        styleName: "user-preferences-loading-wrapper"
      }, react_default.a.createElement(Spinner["a" /* default */], null));
    }
  }, {
    key: "saveAlertSettings",
    value: function saveAlertSettings() {
      var _this2 = this;

      var _this$state2 = this.state,
          preferences = _this$state2.preferences,
          settings = _this$state2.settings;
      var _this$props = this.props,
          onClose = _this$props.onClose,
          updatePreferenceSettings = _this$props.updatePreferenceSettings;
      this.setState({
        showSpinner: true
      });
      api_AlertPreferenceAPI.set(preferences, settings).then(function () {
        updatePreferenceSettings({
          preferenceSettings: {
            preferences: preferences,
            settings: settings
          }
        });

        _this2.setState({
          showSpinner: false
        });

        onClose();
      })["catch"](function () {
        _this2.setState({
          showSpinner: false
        });
      });
    }
  }, {
    key: "renderAlertShareModal",
    value: function renderAlertShareModal() {
      var _this$state3 = this.state,
          selectedAlert = _this$state3.selectedAlert,
          showAlertShareModal = _this$state3.showAlertShareModal;

      if (showAlertShareModal) {
        return react_default.a.createElement(components_AlertShareModal_AlertShareModal, {
          alert: selectedAlert,
          onClose: this.onCloseAlertShareModal
        });
      }
    }
  }, {
    key: "renderCreateAlertModal",
    value: function renderCreateAlertModal() {
      var mapboxAccessToken = this.props.mapboxAccessToken;
      var _this$state4 = this.state,
          selectedAlert = _this$state4.selectedAlert,
          showCreateAlertModal = _this$state4.showCreateAlertModal;

      var editAlertType = lodash_default.a.get(selectedAlert, 'queryType', 'raw');

      if (showCreateAlertModal) {
        return react_default.a.createElement(CreateAlertModal["a" /* default */], {
          alert: selectedAlert,
          editAlertType: editAlertType,
          editMode: showCreateAlertModal,
          mapboxAccessToken: mapboxAccessToken,
          onClose: this.onCloseAlertModal
        });
      }
    }
  }, {
    key: "renderTabs",
    value: function renderTabs() {
      var _this$state5 = this.state,
          userPreferencesLoaded = _this$state5.userPreferencesLoaded,
          selectedTab = _this$state5.selectedTab;
      var showMyAlertPreference = this.props.showMyAlertPreference;

      if (userPreferencesLoaded) {
        return react_default.a.createElement(AlertSettingModal_Tabs, {
          showMyAlertsTab: showMyAlertPreference,
          onTabChange: this.onTabChange,
          selectedTab: selectedTab
        });
      }
    }
  }, {
    key: "renderTabContent",
    value: function renderTabContent() {
      var _this$state6 = this.state,
          selectedAlert = _this$state6.selectedAlert,
          selectedTab = _this$state6.selectedTab,
          showAlertDeletedMessage = _this$state6.showAlertDeletedMessage,
          showAlertSharedMessage = _this$state6.showAlertSharedMessage;

      if (selectedTab === constants["c" /* ALERT_SETTING_MODAL_TABS */].NOTIFICATION) {
        return this.renderNotificationTabContent();
      } else if (selectedTab === constants["c" /* ALERT_SETTING_MODAL_TABS */].MY_ALERTS) {
        return react_default.a.createElement(AlertSettingModal_MyAlerts_MyAlerts, {
          currentSelectedAlert: selectedAlert,
          onEditAlertClick: this.onEditAlertClick,
          showAlertDeletedMessage: showAlertDeletedMessage,
          onShareAlertClick: this.onShareAlertClick,
          showAlertSharedMessage: showAlertSharedMessage
        });
      }
    }
  }, {
    key: "renderModalFooter",
    value: function renderModalFooter() {
      var userPreferencesLoaded = this.state.userPreferencesLoaded;

      if (userPreferencesLoaded) {
        var onClose = this.props.onClose;
        return react_default.a.createElement(Modal["c" /* ModalFooter */], null, react_default.a.createElement("div", {
          styleName: "cancel-button",
          className: "cancel-button",
          onClick: onClose
        }, i18n["b" /* default */].t('cancel', {
          scope: 'shared.site_chrome.notifications.alert_setting_modal'
        })), react_default.a.createElement("div", {
          styleName: "save-button",
          className: "save-button",
          onClick: this.saveAlertSettings
        }, i18n["b" /* default */].t('save', {
          scope: 'shared.site_chrome.notifications.alert_setting_modal'
        })));
      }
    }
  }, {
    key: "renderAlertSettingModal",
    value: function renderAlertSettingModal() {
      var onClose = this.props.onClose;
      var selectedTab = this.state.selectedTab;
      var containerStyle = {
        'maxWidth': '800px',
        'maxHeight': 'calc(100vh - 40px)',
        'padding': '20px',
        'margin': '20px auto',
        'bottom': 'auto'
      };
      var showFooterData = selectedTab !== constants["c" /* ALERT_SETTING_MODAL_TABS */].MY_ALERTS;
      return react_default.a.createElement(Modal["a" /* Modal */], {
        styleName: "alert-setting-modal",
        className: "alert-setting-modal",
        onDismiss: onClose,
        containerStyle: containerStyle
      }, react_default.a.createElement(Modal["d" /* ModalHeader */], {
        title: i18n["b" /* default */].t('settings', {
          scope: 'shared.site_chrome.notifications.alert_setting_modal'
        }),
        onDismiss: onClose
      }), react_default.a.createElement(Modal["b" /* ModalContent */], {
        styleName: "alert-setting-modal-content"
      }, this.renderTabs(), this.renderTabContent(), this.state.showSpinner ? react_default.a.createElement(Spinner["a" /* default */], null) : null), showFooterData ? this.renderModalFooter() : null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state7 = this.state,
          showCreateAlertModal = _this$state7.showCreateAlertModal,
          showAlertShareModal = _this$state7.showAlertShareModal;

      if (showCreateAlertModal) {
        return this.renderCreateAlertModal();
      } else if (showAlertShareModal) {
        return this.renderAlertShareModal();
      }

      return this.renderAlertSettingModal();
    }
  }]);

  return AlertSettingModal;
}(react["Component"]);
AlertSettingModal_AlertSettingModal.propTypes = {
  mapboxAccessToken: prop_types_default.a.string,
  onClose: prop_types_default.a.func,
  showMyAlertPreference: prop_types_default.a.bool,
  toOpenModal: prop_types_default.a.func,
  preferenceSettings: prop_types_default.a.object.isRequired
};
var mapDispatchToProps = {
  updatePreferenceSettings: PreferenceActions_updatePreferenceSettings
};

var AlertSettingModal_mapStateToProps = function mapStateToProps(state) {
  return {
    mapboxAccessToken: state.configurations.mapboxAccessToken,
    showMyAlertPreference: state.configurations.showMyAlertPreference,
    preferenceSettings: lodash_default.a.cloneDeep(state.preferenceSettings)
  };
};

/* harmony default export */ var components_AlertSettingModal_AlertSettingModal = (Object(react_redux_es["b" /* connect */])(AlertSettingModal_mapStateToProps, mapDispatchToProps)(dist_default()(AlertSettingModal_AlertSettingModal, alert_setting_modal_module_default.a, {
  allowMultiple: true
})));
// EXTERNAL MODULE: /mnt/workspace/common/notifications/components/NotificationList/panel-footer.module.scss
var panel_footer_module = __webpack_require__(1533);
var panel_footer_module_default = /*#__PURE__*/__webpack_require__.n(panel_footer_module);

// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/NotificationList/PanelFooter.js
function PanelFooter_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PanelFooter_typeof = function _typeof(obj) { return typeof obj; }; } else { PanelFooter_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PanelFooter_typeof(obj); }

function PanelFooter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PanelFooter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PanelFooter_createClass(Constructor, protoProps, staticProps) { if (protoProps) PanelFooter_defineProperties(Constructor.prototype, protoProps); if (staticProps) PanelFooter_defineProperties(Constructor, staticProps); return Constructor; }

function PanelFooter_possibleConstructorReturn(self, call) { if (call && (PanelFooter_typeof(call) === "object" || typeof call === "function")) { return call; } return PanelFooter_assertThisInitialized(self); }

function PanelFooter_getPrototypeOf(o) { PanelFooter_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PanelFooter_getPrototypeOf(o); }

function PanelFooter_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PanelFooter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PanelFooter_setPrototypeOf(subClass, superClass); }

function PanelFooter_setPrototypeOf(o, p) { PanelFooter_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PanelFooter_setPrototypeOf(o, p); }

function PanelFooter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var PanelFooter_scope = 'shared.site_chrome.notifications';

var PanelFooter_PanelFooter =
/*#__PURE__*/
function (_Component) {
  PanelFooter_inherits(PanelFooter, _Component);

  function PanelFooter() {
    var _getPrototypeOf2;

    var _this;

    PanelFooter_classCallCheck(this, PanelFooter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = PanelFooter_possibleConstructorReturn(this, (_getPrototypeOf2 = PanelFooter_getPrototypeOf(PanelFooter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    PanelFooter_defineProperty(PanelFooter_assertThisInitialized(_this), "state", {
      showAlertSettingModal: false
    });

    PanelFooter_defineProperty(PanelFooter_assertThisInitialized(_this), "closeModal", function () {
      _this.setState({
        showAlertSettingModal: false
      });
    });

    PanelFooter_defineProperty(PanelFooter_assertThisInitialized(_this), "toggleSubscription", function () {
      _this.setState({
        showAlertSettingModal: !_this.state.showAlertSettingModal
      });
    });

    PanelFooter_defineProperty(PanelFooter_assertThisInitialized(_this), "renderModal", function () {
      var showAlertSettingModal = _this.state.showAlertSettingModal;

      if (showAlertSettingModal) {
        return react_default.a.createElement(components_AlertSettingModal_AlertSettingModal, {
          onClose: _this.closeModal
        });
      }
    });

    PanelFooter_defineProperty(PanelFooter_assertThisInitialized(_this), "renderClearAllNotificationsPrompt", function () {
      var _this$props = _this.props,
          clearAllUserNotifications = _this$props.clearAllUserNotifications,
          openClearAllUserNotificationsPrompt = _this$props.openClearAllUserNotificationsPrompt,
          toggleClearAllUserNotificationsPrompt = _this$props.toggleClearAllUserNotificationsPrompt;

      if (openClearAllUserNotificationsPrompt) {
        return react_default.a.createElement("div", {
          styleName: "inline-prompt"
        }, react_default.a.createElement("p", {
          styleName: "heading-text"
        }, i18n["b" /* default */].t('clear_all_text', {
          scope: PanelFooter_scope
        })), react_default.a.createElement("p", null, i18n["b" /* default */].t('clear_all_confirm', {
          scope: PanelFooter_scope
        })), react_default.a.createElement("div", {
          styleName: "prompt-buttons-wrapper",
          className: "clearfix"
        }, react_default.a.createElement("button", {
          styleName: "cancel-button",
          className: "btn btn-default",
          onClick: function onClick() {
            return toggleClearAllUserNotificationsPrompt(false);
          }
        }, i18n["b" /* default */].t('clear_all_confirm_no', {
          scope: PanelFooter_scope
        })), react_default.a.createElement("button", {
          styleName: "primary-button",
          onClick: clearAllUserNotifications
        }, i18n["b" /* default */].t('clear_all_confirm_yes', {
          scope: PanelFooter_scope
        }))));
      }
    });

    PanelFooter_defineProperty(PanelFooter_assertThisInitialized(_this), "renderSettingsButton", function () {
      var showUserNotifications = _this.props.showUserNotifications;

      if (showUserNotifications) {
        return react_default.a.createElement("span", {
          className: "btn",
          onClick: _this.toggleSubscription,
          role: "button",
          styleName: "setting-button"
        }, react_default.a.createElement(SocrataIcon["a" /* SocrataIcon */], {
          name: "settings"
        }), react_default.a.createElement("em", null, i18n["b" /* default */].t('setting', {
          scope: PanelFooter_scope
        })));
      }
    });

    PanelFooter_defineProperty(PanelFooter_assertThisInitialized(_this), "renderFooter", function () {
      var forUserNotifications = _this.props.forUserNotifications;

      if (forUserNotifications) {
        var _this$props2 = _this.props,
            hasUserNotifications = _this$props2.hasUserNotifications,
            openClearAllUserNotificationsPrompt = _this$props2.openClearAllUserNotificationsPrompt,
            toggleClearAllUserNotificationsPrompt = _this$props2.toggleClearAllUserNotificationsPrompt;
        return react_default.a.createElement("div", {
          styleName: "buttons-wrapper",
          className: "clearfix"
        }, _this.renderClearAllNotificationsPrompt(), react_default.a.createElement("button", {
          className: "clear-all-button",
          disabled: !hasUserNotifications,
          onClick: function onClick() {
            return toggleClearAllUserNotificationsPrompt(!openClearAllUserNotificationsPrompt);
          },
          styleName: "primary-button"
        }, i18n["b" /* default */].t('clear_all_text', {
          scope: PanelFooter_scope
        })), _this.renderSettingsButton());
      }

      var _this$props3 = _this.props,
          hasUnreadNotifications = _this$props3.hasUnreadNotifications,
          markAllProductNotificationsAsRead = _this$props3.markAllProductNotificationsAsRead;
      return react_default.a.createElement("div", {
        styleName: "buttons-wrapper",
        className: "clearfix"
      }, react_default.a.createElement("button", {
        className: "mark-all-as-read-button",
        disabled: !hasUnreadNotifications,
        onClick: markAllProductNotificationsAsRead,
        styleName: "primary-button"
      }, i18n["b" /* default */].t('mark_as_read', {
        scope: PanelFooter_scope
      })), _this.renderSettingsButton());
    });

    return _this;
  }

  PanelFooter_createClass(PanelFooter, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        styleName: "footer-bar"
      }, this.renderFooter(), this.renderModal());
    }
  }]);

  return PanelFooter;
}(react["Component"]);

PanelFooter_PanelFooter.propTypes = {
  clearAllUserNotifications: prop_types_default.a.func,
  forUserNotifications: prop_types_default.a.bool.isRequired,
  hasUnreadNotifications: prop_types_default.a.bool,
  hasUserNotifications: prop_types_default.a.bool,
  markAllProductNotificationsAsRead: prop_types_default.a.func,
  openClearAllUserNotificationsPrompt: prop_types_default.a.bool,
  showUserNotifications: prop_types_default.a.bool.isRequired,
  toggleClearAllUserNotificationsPrompt: prop_types_default.a.func
};
PanelFooter_PanelFooter.defaultProp = {
  clearAllUserNotifications: function clearAllUserNotifications() {},
  hasUnreadNotifications: false,
  hasUserNotifications: false,
  markAllProductNotificationsAsRead: function markAllProductNotificationsAsRead() {},
  openClearAllUserNotificationsPrompt: false,
  showUserNotifications: true,
  toggleClearAllUserNotificationsPrompt: function toggleClearAllUserNotificationsPrompt() {}
};

var PanelFooter_mapStateToProps = function mapStateToProps(state) {
  return {
    showProductNotifications: state.configurations.showProductNotifications,
    showUserNotifications: state.configurations.showUserNotifications
  };
};

/* harmony default export */ var NotificationList_PanelFooter = (Object(react_redux_es["b" /* connect */])(PanelFooter_mapStateToProps)(dist_default()(PanelFooter_PanelFooter, panel_footer_module_default.a)));
// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/NotificationList/NotificationList.js
function NotificationList_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NotificationList_typeof = function _typeof(obj) { return typeof obj; }; } else { NotificationList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NotificationList_typeof(obj); }

function NotificationList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NotificationList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NotificationList_createClass(Constructor, protoProps, staticProps) { if (protoProps) NotificationList_defineProperties(Constructor.prototype, protoProps); if (staticProps) NotificationList_defineProperties(Constructor, staticProps); return Constructor; }

function NotificationList_possibleConstructorReturn(self, call) { if (call && (NotificationList_typeof(call) === "object" || typeof call === "function")) { return call; } return NotificationList_assertThisInitialized(self); }

function NotificationList_getPrototypeOf(o) { NotificationList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NotificationList_getPrototypeOf(o); }

function NotificationList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NotificationList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NotificationList_setPrototypeOf(subClass, superClass); }

function NotificationList_setPrototypeOf(o, p) { NotificationList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NotificationList_setPrototypeOf(o, p); }

function NotificationList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var NotificationList_scope = 'shared.site_chrome.notifications';
var NotificationList_NotificationList =
/*#__PURE__*/
function (_Component) {
  NotificationList_inherits(NotificationList, _Component);

  function NotificationList() {
    var _getPrototypeOf2;

    var _this;

    NotificationList_classCallCheck(this, NotificationList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = NotificationList_possibleConstructorReturn(this, (_getPrototypeOf2 = NotificationList_getPrototypeOf(NotificationList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    NotificationList_defineProperty(NotificationList_assertThisInitialized(_this), "isNotSiteChromeAdminHeader", !external_jQuery_default()('#site-chrome-admin-header').is(':visible'));

    NotificationList_defineProperty(NotificationList_assertThisInitialized(_this), "renderPanelHeader", function () {
      var _this$props = _this.props,
          toggleNotificationPanel = _this$props.toggleNotificationPanel,
          unreadUserNotificationCount = _this$props.unreadUserNotificationCount,
          unreadProductNotificationCount = _this$props.unreadProductNotificationCount,
          showMyAlertPreference = _this$props.showMyAlertPreference;
      var panelHeaderText = i18n["b" /* default */].t(showMyAlertPreference ? 'user_notifications_and_alerts' : 'user_notifications', {
        scope: NotificationList_scope
      });
      var unreadCount = unreadUserNotificationCount + unreadProductNotificationCount;
      return react_default.a.createElement(NotificationList_PanelHeader, {
        onClosePanel: toggleNotificationPanel,
        panelHeaderText: panelHeaderText,
        unreadCount: unreadCount
      });
    });

    NotificationList_defineProperty(NotificationList_assertThisInitialized(_this), "renderUserNotifications", function () {
      var _this$props2 = _this.props,
          areProductNotificationsLoading = _this$props2.areProductNotificationsLoading,
          clearAllUserNotifications = _this$props2.clearAllUserNotifications,
          filterUserNotifications = _this$props2.filterUserNotifications,
          filterUserNotificationsBy = _this$props2.filterUserNotificationsBy,
          hasEnqueuedUserNotifications = _this$props2.hasEnqueuedUserNotifications,
          hasError = _this$props2.hasError,
          markAllProductNotificationsAsRead = _this$props2.markAllProductNotificationsAsRead,
          onClearUserNotification = _this$props2.onClearUserNotification,
          onLoadMoreUserNotifications = _this$props2.onLoadMoreUserNotifications,
          onSeeNewUserNotifications = _this$props2.onSeeNewUserNotifications,
          onToggleReadUserNotification = _this$props2.onToggleReadUserNotification,
          openClearAllUserNotificationsPrompt = _this$props2.openClearAllUserNotificationsPrompt,
          productNotifications = _this$props2.productNotifications,
          showProductNotifications = _this$props2.showProductNotifications,
          toggleClearAllUserNotificationsPrompt = _this$props2.toggleClearAllUserNotificationsPrompt,
          unreadProductNotificationCount = _this$props2.unreadProductNotificationCount,
          userNotifications = _this$props2.userNotifications;

      var filterTabs = lodash_default.a.orderBy(lodash_default.a.keys(userNotifications), [], 'desc');

      if (showProductNotifications) {
        filterTabs.push('product_updates');
      }

      return react_default.a.createElement(components_Tabs_Tabs, {
        areProductNotificationsLoading: areProductNotificationsLoading,
        clearAllUserNotifications: clearAllUserNotifications,
        filterNotifications: filterUserNotifications,
        forUserNotifications: false,
        hasEnqueuedUserNotifications: hasEnqueuedUserNotifications,
        hasError: hasError,
        markAllProductNotificationsAsRead: markAllProductNotificationsAsRead,
        onClearUserNotification: onClearUserNotification,
        onLoadMoreUserNotifications: onLoadMoreUserNotifications,
        onSeeNewUserNotifications: onSeeNewUserNotifications,
        onToggleReadUserNotification: onToggleReadUserNotification,
        openClearAllUserNotificationsPrompt: openClearAllUserNotificationsPrompt,
        productNotifications: productNotifications,
        selectedTab: filterUserNotificationsBy,
        tabs: filterTabs,
        toggleClearAllUserNotificationsPrompt: toggleClearAllUserNotificationsPrompt,
        unreadProductNotificationCount: unreadProductNotificationCount,
        userNotifications: userNotifications
      });
    });

    NotificationList_defineProperty(NotificationList_assertThisInitialized(_this), "renderPanelFooter", function () {
      var _this$props3 = _this.props,
          filterUserNotificationsBy = _this$props3.filterUserNotificationsBy,
          showProductNotifications = _this$props3.showProductNotifications,
          showUserNotifications = _this$props3.showUserNotifications;

      if (showProductNotifications && !showUserNotifications || filterUserNotificationsBy == 'product_updates') {
        var _this$props4 = _this.props,
            markAllProductNotificationsAsRead = _this$props4.markAllProductNotificationsAsRead,
            unreadProductNotificationCount = _this$props4.unreadProductNotificationCount;
        return react_default.a.createElement(NotificationList_PanelFooter, {
          forUserNotifications: false,
          hasUnreadNotifications: unreadProductNotificationCount > 0,
          markAllProductNotificationsAsRead: markAllProductNotificationsAsRead
        });
      } else if (showUserNotifications) {
        var _this$props5 = _this.props,
            clearAllUserNotifications = _this$props5.clearAllUserNotifications,
            openClearAllUserNotificationsPrompt = _this$props5.openClearAllUserNotificationsPrompt,
            toggleClearAllUserNotificationsPrompt = _this$props5.toggleClearAllUserNotificationsPrompt,
            userNotifications = _this$props5.userNotifications;
        var hasUserNotifications = lodash_default.a.get(userNotifications, 'activity.notifications', []).length > 0 || lodash_default.a.get(userNotifications, 'alert.notifications', []).length > 0;
        return react_default.a.createElement(NotificationList_PanelFooter, {
          clearAllUserNotifications: clearAllUserNotifications,
          forUserNotifications: true,
          hasUserNotifications: hasUserNotifications,
          openClearAllUserNotificationsPrompt: openClearAllUserNotificationsPrompt,
          toggleClearAllUserNotificationsPrompt: toggleClearAllUserNotificationsPrompt
        });
      }
    });

    return _this;
  }

  NotificationList_createClass(NotificationList, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.isNotSiteChromeAdminHeader) {
        // disable page scrolling when site chrome admin header is not present
        external_jQuery_default()('html').scrollTop(0);
        external_jQuery_default()('body').css('overflow', 'hidden');
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.isNotSiteChromeAdminHeader) {
        // reposition the notification panel below the site chrome header
        external_jQuery_default()('#notifications-sidebar').css('top', external_jQuery_default()('#site-chrome-header').outerHeight());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.isNotSiteChromeAdminHeader) {
        // enable page scrolling once the notification panel is closed
        external_jQuery_default()('body').css('overflow', '');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var showUserNotifications = this.props.showUserNotifications;
      var className = classnames_default()('notifications-panel clearfix', {
        'socrata-notifications-sidebar': showUserNotifications
      });
      return react_default.a.createElement("div", {
        className: className,
        id: "notifications-sidebar"
      }, this.renderPanelHeader(), this.renderUserNotifications(), this.renderPanelFooter());
    }
  }]);

  return NotificationList;
}(react["Component"]);
NotificationList_NotificationList.propTypes = {
  areProductNotificationsLoading: prop_types_default.a.bool.isRequired,
  clearAllUserNotifications: prop_types_default.a.func.isRequired,
  filterUserNotificationsBy: prop_types_default.a.string.isRequired,
  hasEnqueuedUserNotifications: prop_types_default.a.func.isRequired,
  hasError: prop_types_default.a.bool.isRequired,
  markAllProductNotificationsAsRead: prop_types_default.a.func.isRequired,
  onClearUserNotification: prop_types_default.a.func.isRequired,
  onLoadMoreUserNotifications: prop_types_default.a.func.isRequired,
  onSeeNewUserNotifications: prop_types_default.a.func.isRequired,
  onToggleReadUserNotification: prop_types_default.a.func.isRequired,
  openClearAllUserNotificationsPrompt: prop_types_default.a.bool.isRequired,
  productNotifications: prop_types_default.a.array.isRequired,
  showProductNotifications: prop_types_default.a.bool.isRequired,
  showUserNotifications: prop_types_default.a.bool.isRequired,
  toggleClearAllUserNotificationsPrompt: prop_types_default.a.func.isRequired,
  toggleNotificationPanel: prop_types_default.a.func.isRequired,
  unreadProductNotificationCount: prop_types_default.a.number.isRequired,
  unreadUserNotificationCount: prop_types_default.a.number.isRequired,
  userNotifications: prop_types_default.a.object.isRequired,
  viewOlderLink: prop_types_default.a.string
};

var NotificationList_mapStateToProps = function mapStateToProps(state) {
  return {
    userId: state.userId,
    showProductNotifications: state.configurations.showProductNotifications,
    showUserNotifications: state.configurations.showUserNotifications,
    showMyAlertPreference: state.configurations.showMyAlertPreference
  };
};

/* harmony default export */ var components_NotificationList_NotificationList = (Object(react_redux_es["b" /* connect */])(NotificationList_mapStateToProps)(NotificationList_NotificationList));
// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/UserNotifications/TransientNotifications.js
function TransientNotifications_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TransientNotifications_typeof = function _typeof(obj) { return typeof obj; }; } else { TransientNotifications_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TransientNotifications_typeof(obj); }

function TransientNotifications_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TransientNotifications_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TransientNotifications_createClass(Constructor, protoProps, staticProps) { if (protoProps) TransientNotifications_defineProperties(Constructor.prototype, protoProps); if (staticProps) TransientNotifications_defineProperties(Constructor, staticProps); return Constructor; }

function TransientNotifications_possibleConstructorReturn(self, call) { if (call && (TransientNotifications_typeof(call) === "object" || typeof call === "function")) { return call; } return TransientNotifications_assertThisInitialized(self); }

function TransientNotifications_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TransientNotifications_getPrototypeOf(o) { TransientNotifications_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TransientNotifications_getPrototypeOf(o); }

function TransientNotifications_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TransientNotifications_setPrototypeOf(subClass, superClass); }

function TransientNotifications_setPrototypeOf(o, p) { TransientNotifications_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TransientNotifications_setPrototypeOf(o, p); }





var TransientNotifications_TransientNotifications =
/*#__PURE__*/
function (_Component) {
  TransientNotifications_inherits(TransientNotifications, _Component);

  function TransientNotifications() {
    TransientNotifications_classCallCheck(this, TransientNotifications);

    return TransientNotifications_possibleConstructorReturn(this, TransientNotifications_getPrototypeOf(TransientNotifications).apply(this, arguments));
  }

  TransientNotifications_createClass(TransientNotifications, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClearUserNotification = _this$props.onClearUserNotification,
          onToggleReadUserNotification = _this$props.onToggleReadUserNotification,
          moveTransientNotificationIntoPanel = _this$props.moveTransientNotificationIntoPanel,
          removeTransientNotification = _this$props.removeTransientNotification,
          transientNotifications = _this$props.transientNotifications;
      return react_default.a.createElement("div", null, react_default.a.createElement("ul", {
        className: "transient-notifications-list"
      }, transientNotifications.map(function (notification) {
        return react_default.a.createElement(UserNotifications_UserNotification, {
          isTransientNotification: true,
          key: notification.id,
          moveTransientNotificationIntoPanel: moveTransientNotificationIntoPanel,
          removeTransientNotification: removeTransientNotification,
          notification: notification,
          onClearUserNotification: onClearUserNotification,
          onToggleReadUserNotification: onToggleReadUserNotification
        });
      })));
    }
  }]);

  return TransientNotifications;
}(react["Component"]);

TransientNotifications_TransientNotifications.propTypes = {
  onClearUserNotification: prop_types_default.a.func.isRequired,
  onToggleReadUserNotification: prop_types_default.a.func.isRequired,
  moveTransientNotificationIntoPanel: prop_types_default.a.func.isRequired,
  removeTransientNotification: prop_types_default.a.func.isRequired,
  transientNotifications: prop_types_default.a.array.isRequired
};
/* harmony default export */ var UserNotifications_TransientNotifications = (TransientNotifications_TransientNotifications);
// CONCATENATED MODULE: /mnt/workspace/common/notifications/api/NotificationAPI.js


function deleteNotification(notificationId) {
  fetch("/api/notifications_and_alerts/notifications/".concat(notificationId), {
    method: 'DELETE',
    credentials: 'same-origin'
  });
}
function deleteAllNotifications() {
  fetch('/api/notifications_and_alerts/notifications', {
    method: 'DELETE',
    credentials: 'same-origin'
  });
}
function toggleNotificationReadState(notificationId, toggle) {
  fetch("/api/notifications_and_alerts/notifications/".concat(notificationId), {
    method: 'PUT',
    headers: http["e" /* defaultHeaders */],
    credentials: 'same-origin',
    body: JSON.stringify({
      'notification': {
        'read': toggle
      }
    })
  });
}
// CONCATENATED MODULE: /mnt/workspace/common/notifications/components/Notifications/Notifications.js
function Notifications_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Notifications_typeof = function _typeof(obj) { return typeof obj; }; } else { Notifications_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Notifications_typeof(obj); }

function Notifications_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Notifications_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Notifications_createClass(Constructor, protoProps, staticProps) { if (protoProps) Notifications_defineProperties(Constructor.prototype, protoProps); if (staticProps) Notifications_defineProperties(Constructor, staticProps); return Constructor; }

function Notifications_possibleConstructorReturn(self, call) { if (call && (Notifications_typeof(call) === "object" || typeof call === "function")) { return call; } return Notifications_assertThisInitialized(self); }

function Notifications_getPrototypeOf(o) { Notifications_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Notifications_getPrototypeOf(o); }

function Notifications_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Notifications_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Notifications_setPrototypeOf(subClass, superClass); }

function Notifications_setPrototypeOf(o, p) { Notifications_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Notifications_setPrototypeOf(o, p); }

function Notifications_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var Notifications_Notifications =
/*#__PURE__*/
function (_Component) {
  Notifications_inherits(Notifications, _Component);

  function Notifications(props) {
    var _this;

    Notifications_classCallCheck(this, Notifications);

    _this = Notifications_possibleConstructorReturn(this, Notifications_getPrototypeOf(Notifications).call(this, props));

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "onSeeNewUserNotifications", function (type) {
      _this.props.seeNewNotifications(type);
    });

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "onClearUserNotification", function (notificationId) {
      deleteNotification(notificationId);
    });

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "addKeyboardEvents", function () {
      // add an event listener to hide when clicking somewhere
      window.addEventListener('mouseup', _this.hidePanelOnOutsideClick); // add an event listened to hide when ESC is pressed

      window.addEventListener('keyup', _this.hidePanelOnEscapeKeypress);
    });

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "removeKeyboardEvents", function () {
      window.removeEventListener('mouseup', _this.hidePanelOnOutsideClick);
      window.removeEventListener('keyup', _this.hidePanelOnEscapeKeypress);
    });

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "filterUserNotifications", function (filterUserNotificationsBy) {
      _this.setState({
        filterUserNotificationsBy: filterUserNotificationsBy
      });
    });

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "clearAllUserNotifications", function () {
      deleteAllNotifications();

      _this.setState({
        openClearAllUserNotificationsPrompt: false
      });
    });

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "loadMoreUserNotifications", function (type) {
      var _this$props = _this.props,
          loadNotifications = _this$props.loadNotifications,
          userNotifications = _this$props.userNotifications;
      loadNotifications(type, userNotifications[type].offset);
    });

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "toggleClearAllUserNotificationsPrompt", function (toggle) {
      _this.setState({
        openClearAllUserNotificationsPrompt: toggle
      });
    });

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "toggleNotificationPanel", function () {
      var _this$props2 = _this.props,
          showMyAlertPreference = _this$props2.showMyAlertPreference,
          showUserNotifications = _this$props2.showUserNotifications,
          showNotificationPanel = _this$props2.showNotificationPanel,
          onToggleNotificationPanel = _this$props2.onToggleNotificationPanel,
          isTransientNotificationEnabled = _this$props2.isTransientNotificationEnabled;
      var showTransientNotifications = _this.state.showTransientNotifications;
      var currentTab;
      currentTab = showMyAlertPreference ? constants["e" /* DEFAULT_FILTER_TAB */] : constants["a" /* ACTIVITY_TAB_TYPE */];

      if (showUserNotifications && showTransientNotifications && isTransientNotificationEnabled) {
        _this.onSeeNewUserNotifications(currentTab);
      }

      if (!showNotificationPanel) {
        _this.addKeyboardEvents();
      } else {
        _this.removeKeyboardEvents();

        _this.setState({
          filterUserNotificationsBy: currentTab,
          isSecondaryPanelOpen: false,
          openClearAllUserNotificationsPrompt: false
        });
      }

      onToggleNotificationPanel(!showNotificationPanel);
    });

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "hasEnqueuedUserNotifications", function (type) {
      return lodash_default.a.some(_this.props.enqueuedUserNotifications, {
        type: type
      });
    });

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "hidePanelOnOutsideClick", function (event) {
      if (event.target && event.target.closest && !event.target.closest('#socrata-notifications-container')) {
        _this.toggleNotificationPanel();
      }
    });

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "hidePanelOnEscapeKeypress", function (event) {
      if (event.keyCode === keycodes_deprecated["c" /* ESCAPE */]) {
        _this.toggleNotificationPanel();
      }
    });

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "markAllProductNotificationsAsRead", function () {
      var _this$props3 = _this.props,
          unreadProductNotificationCount = _this$props3.unreadProductNotificationCount,
          onMarkAllProductNotificationsAsRead = _this$props3.onMarkAllProductNotificationsAsRead;

      if (unreadProductNotificationCount > 0) {
        onMarkAllProductNotificationsAsRead();
      }
    });

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "renderSidebarOverlay", function () {
      var showProductNotifications = _this.props.showProductNotifications;

      if (!showProductNotifications) {
        return react_default.a.createElement("span", {
          "aria-hidden": "true",
          className: "sidebar-overlay",
          onClick: _this.toggleNotificationPanel
        });
      }
    });

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "renderNotificationPanel", function () {
      var _this$props4 = _this.props,
          areProductNotificationsLoading = _this$props4.areProductNotificationsLoading,
          hasError = _this$props4.hasError,
          productNotifications = _this$props4.productNotifications,
          unreadProductNotificationCount = _this$props4.unreadProductNotificationCount,
          viewOlderLink = _this$props4.viewOlderLink,
          userNotifications = _this$props4.userNotifications,
          unreadUserNotificationCount = _this$props4.unreadUserNotificationCount,
          showNotificationPanel = _this$props4.showNotificationPanel;

      if (showNotificationPanel) {
        var _this$state = _this.state,
            filterUserNotificationsBy = _this$state.filterUserNotificationsBy,
            openClearAllUserNotificationsPrompt = _this$state.openClearAllUserNotificationsPrompt;
        return react_default.a.createElement("div", {
          className: "notifications-panel-wrapper"
        }, _this.renderSidebarOverlay(), react_default.a.createElement(components_NotificationList_NotificationList, {
          areProductNotificationsLoading: areProductNotificationsLoading,
          clearAllUserNotifications: _this.clearAllUserNotifications,
          filterUserNotifications: _this.filterUserNotifications,
          filterUserNotificationsBy: filterUserNotificationsBy,
          hasEnqueuedUserNotifications: _this.hasEnqueuedUserNotifications,
          hasError: hasError,
          markAllProductNotificationsAsRead: _this.markAllProductNotificationsAsRead,
          onClearUserNotification: _this.onClearUserNotification,
          onLoadMoreUserNotifications: _this.loadMoreUserNotifications,
          onSeeNewUserNotifications: _this.onSeeNewUserNotifications,
          onToggleReadUserNotification: toggleNotificationReadState,
          openClearAllUserNotificationsPrompt: openClearAllUserNotificationsPrompt,
          productNotifications: productNotifications,
          toggleClearAllUserNotificationsPrompt: _this.toggleClearAllUserNotificationsPrompt,
          toggleNotificationPanel: _this.toggleNotificationPanel,
          unreadProductNotificationCount: unreadProductNotificationCount,
          unreadUserNotificationCount: unreadUserNotificationCount,
          userNotifications: userNotifications,
          viewOlderLink: viewOlderLink
        }));
      }
    });

    Notifications_defineProperty(Notifications_assertThisInitialized(_this), "renderTransientNotifications", function () {
      var showTransientNotifications = _this.state.showTransientNotifications;
      var _this$props5 = _this.props,
          moveTransientNotificationIntoPanel = _this$props5.moveTransientNotificationIntoPanel,
          removeTransientNotification = _this$props5.removeTransientNotification,
          showNotificationPanel = _this$props5.showNotificationPanel,
          transientNotifications = _this$props5.transientNotifications,
          isTransientNotificationEnabled = _this$props5.isTransientNotificationEnabled;

      if (!showNotificationPanel && showTransientNotifications && isTransientNotificationEnabled && !lodash_default.a.isEmpty(transientNotifications)) {
        return react_default.a.createElement(UserNotifications_TransientNotifications, {
          onClearUserNotification: _this.onClearUserNotification,
          onToggleReadUserNotification: toggleNotificationReadState,
          moveTransientNotificationIntoPanel: moveTransientNotificationIntoPanel,
          removeTransientNotification: removeTransientNotification,
          transientNotifications: transientNotifications
        });
      }
    });

    _this.state = {
      enqueuedUserNotifications: [],
      filterUserNotificationsBy: constants["e" /* DEFAULT_FILTER_TAB */],
      openClearAllUserNotificationsPrompt: false,
      showTransientNotifications: false
    };
    return _this;
  }

  Notifications_createClass(Notifications, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props6 = this.props,
          inProductTransientNotificationsEnabled = _this$props6.inProductTransientNotificationsEnabled,
          onLoadProductNotifications = _this$props6.onLoadProductNotifications,
          showMyAlertPreference = _this$props6.showMyAlertPreference,
          showProductNotifications = _this$props6.showProductNotifications,
          loadPreferenceSettings = _this$props6.loadPreferenceSettings;
      loadPreferenceSettings();

      if (showProductNotifications) {
        onLoadProductNotifications();
      }

      this.setState({
        filterUserNotificationsBy: showMyAlertPreference ? constants["e" /* DEFAULT_FILTER_TAB */] : constants["a" /* ACTIVITY_TAB_TYPE */],
        showTransientNotifications: inProductTransientNotificationsEnabled
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeKeyboardEvents();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
          unreadProductNotificationCount = _this$props7.unreadProductNotificationCount,
          unreadUserNotificationCount = _this$props7.unreadUserNotificationCount;
      return react_default.a.createElement("div", {
        className: "notifications-container"
      }, react_default.a.createElement("div", {
        id: "socrata-notifications-container"
      }, react_default.a.createElement(components_Bell_Bell, {
        unreadProductNotificationCount: unreadProductNotificationCount,
        unreadUserNotificationCount: unreadUserNotificationCount,
        toggleNotificationPanel: this.toggleNotificationPanel
      }), this.renderTransientNotifications(), this.renderNotificationPanel()));
    }
  }]);

  return Notifications;
}(react["Component"]);
Notifications_Notifications.propTypes = {
  areProductNotificationsLoading: prop_types_default.a.bool,
  hasError: prop_types_default.a.bool,
  inProductTransientNotificationsEnabled: prop_types_default.a.bool.isRequired,
  productNotifications: prop_types_default.a.array,
  showMyAlertPreference: prop_types_default.a.bool,
  showProductNotifications: prop_types_default.a.bool.isRequired,
  showUserNotifications: prop_types_default.a.bool.isRequired,
  isTransientNotificationEnabled: prop_types_default.a.bool.isRequired
};
Notifications_Notifications.defaultProps = {
  inProductTransientNotificationsEnabled: false,
  showMyAlertPreference: false
};
var Notifications_mapDispatchToProps = {
  loadNotifications: loadNotifications,
  loadPreferenceSettings: PreferenceActions_loadPreferenceSettings,
  moveTransientNotificationIntoPanel: UserNotificationActions_moveTransientNotificationIntoPanel,
  onLoadProductNotifications: ProductNotificationActions_loadProductNotifications,
  onMarkAllProductNotificationsAsRead: ProductNotificationActions_markAllProductNotificationsAsRead,
  onToggleNotificationPanel: PanelActions_toggleNotificationPanel,
  removeTransientNotification: UserNotificationActions_removeTransientNotification,
  seeNewNotifications: seeNewNotifications
};

function Notifications_mapStateToProps(state) {
  var configurations = state.configurations,
      panelConfigs = state.panelConfigs,
      productNotificationsConfigs = state.productNotificationsConfigs,
      userId = state.userId,
      userNotificationsConfigs = state.userNotificationsConfigs,
      preferenceSettings = state.preferenceSettings;
  return {
    areProductNotificationsLoading: productNotificationsConfigs.areProductNotificationsLoading,
    enqueuedUserNotifications: userNotificationsConfigs.enqueuedNotifications,
    hasError: productNotificationsConfigs.hasError,
    inProductTransientNotificationsEnabled: configurations.inProductTransientNotificationsEnabled,
    productNotifications: productNotificationsConfigs.notifications,
    showMyAlertPreference: configurations.showMyAlertPreference,
    showNotificationPanel: panelConfigs.showNotificationPanel,
    showProductNotifications: configurations.showProductNotifications,
    showUserNotifications: configurations.showUserNotifications,
    transientNotifications: userNotificationsConfigs.transientNotifications,
    unreadProductNotificationCount: productNotificationsConfigs.unreadProductNotificationCount,
    unreadUserNotificationCount: userNotificationsConfigs.unreadUserNotificationCount,
    userId: userId,
    userNotifications: lodash_default.a.cloneDeep(userNotificationsConfigs.userNotifications),
    viewOlderLink: productNotificationsConfigs.viewOlderLink,
    isTransientNotificationEnabled: lodash_default.a.get(preferenceSettings, 'isTransientNotificationEnabled', false)
  };
}

/* harmony default export */ var components_Notifications_Notifications = (Object(react_redux_es["b" /* connect */])(Notifications_mapStateToProps, Notifications_mapDispatchToProps)(Notifications_Notifications));
// CONCATENATED MODULE: /mnt/workspace/common/notifications/main.js
/*
 * This is used by socrata-notifications.config.js to create a separate webpack bundle, all dependencies included.
 * This just adds a "headerNotifications" function that can be called by an external application (i.e. socrata_site_chrome)
 * to add notifications to a page without worrying about dependencies and webpack.
 */
// Notifications
// About:
//    Notifications is used to show:
//     1.) Product notifications
//        Currently retrieves product notifications from zendesk via
//        routes('/notifications' '/notifications/setLastNotificationSeenAt') in frontend
//     2.) User notifications
//        Shows user notifications (and after alerts implementation.) from notifications_and_alerts
//        phoeix application. User needs to subscribe for notifications, either by watching a dataset or
//        using the notification preferences. Uses websocket, to push new notification
//        and notification status updates to the browser.
//
//    This package is mostly self contained with one exception(css: common/styleguide/partials/modal).
//
// Usage:
//    Right now, it is used only in sitechrome, but can be used anywhere.
//    Requirements:
//      * container     : dom element, where to render the notification bell
//      * options       : hash
//      * translations  : all the translations from common/i18n/config/locales/..
//                        <common.shared.site_chrome.notifications> <default: '{}>
//      * locale        : 'en'|.... <default: 'en'>
//
//    CSS Requirements:
//      * common/styleguide/partials/_modal.scss











window.headerNotifications = function (container, options, userId) {
  var initialState = {
    configurations: options,
    userId: userId,
    productNotificationsConfigs: {
      areProductNotificationsLoading: false,
      notifications: [],
      unreadProductNotificationCount: 0,
      viewOlderLink: null,
      hasError: false
    },
    userNotificationsConfigs: {
      userNotifications: {},
      unreadUserNotificationCount: 0,
      enqueuedNotifications: [],
      transientNotifications: []
    },
    panelConfigs: {
      showNotificationPanel: false
    }
  };
  var rootNode = document.querySelector(container);

  if (!rootNode) {
    console.error("Cannot render Notifications; no node matched ".concat(container, " in querySelector"));
    return;
  }

  var sagaMiddleware = Object(redux_saga_es["a" /* default */])();
  var middlewares = [lib_default.a, sagaMiddleware];
  var store = Object(es["createStore"])(notifications_reducers, initialState, es["applyMiddleware"].apply(void 0, middlewares));
  sagaMiddleware.run(sagas);
  store.dispatch(loadSocketConnection(userId, {
    loadAlerts: options.showMyAlertPreference
  }));
  react_dom_default.a.render(react_default.a.createElement(react_redux_es["a" /* Provider */], {
    store: store
  }, react_default.a.createElement(components_Notifications_Notifications, null)), rootNode);
};
// EXTERNAL MODULE: /mnt/workspace/common/components/AssetActionBar/index.js + 4 modules
var AssetActionBar = __webpack_require__(430);

// EXTERNAL MODULE: /mnt/workspace/common/components/ToastNotification/Toastmaster.js
var Toastmaster = __webpack_require__(58);

// EXTERNAL MODULE: /mnt/workspace/common/current_user.js
var current_user = __webpack_require__(83);

// CONCATENATED MODULE: /mnt/workspace/common/site_wide.js















function siteWideInit() {
  // Every rails layout should have a "csrf-token" meta tag
  // This grabs the meta tag and sets it in a cookie
  // This cookie is sent along with requests to core, which validates it against either the
  // `X-CSRF-Token` or `form_authenticity_token` header that is sent with the request
  var csrfCookieName = 'socrata-csrf-token';
  var csrfToken = Object(getCsrfToken["a" /* default */])();

  if (!lodash_default.a.isEmpty(csrfToken)) {
    document.cookie = "".concat(csrfCookieName, "=").concat(csrfToken, ";secure;path=/");
  } // Attempt to find the current user id in the various places it might be found


  var currentUser = Object(current_user["g" /* getCurrentUser */])(); // This adds a "lastAccessed" object on window that is used for keeping track when users access a
  // dataset by adding a 4x4 and timestamp.

  var userId = lodash_default.a.get(currentUser, 'id', 'unknown');

  window.lastAccessed = new most_recently_used_MostRecentlyUsed({
    namespace: "socrata:assets:mru:".concat(userId)
  }); // Both of these function calls below are to bind event listeners to the SiteChrome header dropdown menus
  // for both admin and branded headers. Though only one of the two headers will ever appear at once time,
  // the function call will be a NOOP when the header in question is not present.

  AdminHeader();
  SiteChrome(); // This adds a "autocomplete" function that can be called by an external application
  // (i.e. socrata_site_chrome) to scan the DOM and transform any search fields with the attribute
  // data-autocomplete="true" into autocomplete search fields after the page has loaded.

  Array.from(document.querySelectorAll('[data-autocomplete="true"]')).forEach(function (container) {
    var _container$dataset = container.dataset,
        autocompleteAnonymous = _container$dataset.autocompleteAnonymous,
        autocompleteCollapsible = _container$dataset.autocompleteCollapsible,
        autocompleteDisableAnimation = _container$dataset.autocompleteDisableAnimation,
        autocompleteMobile = _container$dataset.autocompleteMobile;
    var collapsible = autocompleteCollapsible === 'true';
    var animate = autocompleteDisableAnimation !== 'true';
    var mobile = autocompleteMobile === 'true'; // EN-23730 SCGC feature: If autocomplete-anonymous is `true`, redirect header search queries to /browse

    var anonymous = autocompleteAnonymous !== 'false';
    var options = {
      animate: animate,
      anonymous: anonymous,
      collapsible: collapsible,
      mobile: mobile,
      onChooseResult: function onChooseResult(searchTerm) {
        window.location.href = getBrowseOrSIAMUrl(searchTerm, anonymous);
      }
    };
    react_dom_default.a.render(react_default.a.createElement(components_StatefulAutocomplete, {
      options: options
    }), container);
  }); // Place a reference to the autocomplete function on window, so that external consumers can use it.

  window.autocomplete = function (containerSelector, options, defaultState) {
    lodash_default.a.noConflict();

    var rootNode = document.querySelector(containerSelector);

    if (!rootNode) {
      console.error("Cannot render Autocomplete; no node matched the selector: ".concat(containerSelector));
      return;
    }

    react_dom_default.a.render(react_default.a.createElement(components_StatefulAutocomplete, {
      defaultState: defaultState,
      options: options
    }), rootNode);
  }; // NOTE: These defaults are provided as part of a migration to instantiate AssetActionBar
  // from within each app directly. Reading from window does not allow us to i.e. update
  // the AssetActionBar when some property of the view updates dynamically
  // (i.e., the user changes the asset name without reloading).


  var assetActionBarProps = {
    user: lodash_default.a.get(window, 'socrata.currentUser'),
    view: Object(sift["a" /* default */])(window, 'initialState.view.coreView', // Primer
    'initialState.view', // DSMUI
    "blist.viewCache.".concat(lodash_default.a.get(window, 'blist.dataset.id')) // Grid View
    )
  };
  var assetActionBarNode = document.querySelector('#asset-action-bar-container');

  if (assetActionBarNode) {
    react_dom_default.a.render(react_default.a.createElement(AssetActionBar["a" /* default */], assetActionBarProps), assetActionBarNode);
  }

  var toastmasterNode = document.querySelector('#toastmaster');

  if (toastmasterNode) {
    react_dom_default.a.render(react_default.a.createElement(Toastmaster["a" /* Toastmaster */], null), toastmasterNode);
  }
} // we can't use jQuery ready handler here because it might not be defined
// if site wide is executed in the HTML head ... *cough* storyteller *cough*
// so we use the native document ready state checker


if (document.body || document.readyState === 'complete') {
  siteWideInit();
} else {
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      siteWideInit();
    }
  };
}

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(2951);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(47)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(2952);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(47)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=siteWide.js.map