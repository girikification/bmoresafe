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
/******/ 		129: 0
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
/******/ 	deferredModules.push([3215,1,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 3215:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(413);
__webpack_require__(603);
__webpack_require__(462);
__webpack_require__(934);
__webpack_require__(505);
__webpack_require__(506);
__webpack_require__(311);
__webpack_require__(710);
__webpack_require__(607);
__webpack_require__(3216);
__webpack_require__(935);
__webpack_require__(606);
module.exports = __webpack_require__(3217);


/***/ }),

/***/ 3216:
/***/ (function(module, exports) {

(function ($) {
  // Scroll the meta tabs into view.
  $.fn.scrollTabs = function (options) {
    var opts = $.extend({}, $.fn.scrollTabs.defaults, options);
    return this.each(function () {
      var $this = $(this); // Support for the Metadata Plugin.

      var config = $.meta ? $.extend({}, opts, $this.data()) : opts;
      $this.data('config-scrollTabs', config);
      $(window).resize(function () {
        resizeHandler($this);
      });
      resizeHandler($this);
    });

    function resizeHandler($this) {
      var config = $this.data('config-scrollTabs');

      if (needsScrolling($this)) {
        $(config.scrollArrowsSelector).show(); // Initially, set the state of the arrow buttons.

        $(config.scrollArrowPrevSelector).addClass('disabled');
        $(config.scrollArrowsSelector + '.disabled a').live('click', function (event) {
          event.preventDefault();
        });
        $(config.scrollArrowsSelector + ":not('.disabled') a").live('click', function (event) {
          event.preventDefault();
          var $a = $(this);

          if ($a.closest('li').is('.prev')) {
            scrollPrevious($this);
          } else {
            scrollNext($this);
          }

          updateArrowStates($this);
        });
      } else {
        $(config.scrollArrowsSelector).hide();
        $(config.scrollArrowPrevSelector).removeClass('disabled');
        $(config.scrollArrowsSelector + '.disabled a').die('click');
        $(config.scrollArrowsSelector + ":not('.disabled') a").die('click');
      }
    }

    function needsScrolling($this) {
      var config = $this.data('config-scrollTabs');
      var tabsWidth = 0;
      $(config.scrollableSelector).each(function () {
        tabsWidth += $(this).outerWidth();
      });
      return tabsWidth > $(config.containerSelector).width();
    }

    function updateArrowStates($this) {
      var config = $this.data('config-scrollTabs');
      var $prev = $(config.scrollArrowPrevSelector);
      var $next = $(config.scrollArrowNextSelector); // If there are any tabs scrolled away, enable the previous button.

      if ($('.' + config.scrolledAwayClass).length > 0) {
        $prev.removeClass('disabled');
      } else {
        $prev.addClass('disabled');
      } // Adjust the container width to account for prev/next arrows.


      var adjustedContainerWidth = $(config.containerSelector).width() - ($prev.outerWidth() + $next.outerWidth());
      var visibleTabsSelector = config.scrollableSelector + ":not('." + config.scrolledAwayClass + "')"; // Determine the width of the visible tabs.

      var visibleTabsWidth = 0;
      $(visibleTabsSelector).each(function () {
        visibleTabsWidth += $(this).outerWidth();
      }); // If the visible tabs are wider than the adjusted container, enable the next button.

      if (visibleTabsWidth > adjustedContainerWidth) {
        $next.removeClass('disabled');
      } else {
        $next.addClass('disabled');
      }
    }

    function scrollPrevious($this) {
      var config = $this.data('config-scrollTabs');
      var $tabToScrollIn = $($(config.scrollableSelector + '.' + config.scrolledAwayClass + ':last'));
      var scrolledAwayWidth = 0;
      $('.' + config.scrolledAwayClass).each(function () {
        scrolledAwayWidth += $(this).outerWidth();
      });
      var newMargin = scrolledAwayWidth - $tabToScrollIn.outerWidth();
      $(config.listSelector).animate({
        marginLeft: '-' + newMargin + 'px'
      });
      $tabToScrollIn.removeClass(config.scrolledAwayClass);
    }

    function scrollNext($this) {
      var config = $this.data('config-scrollTabs');
      var $tabToScrollOff = $($(config.scrollableSelector + ":not('." + config.scrolledAwayClass + "'):first"));
      var scrolledAwayWidth = 0;
      $('.' + config.scrolledAwayClass).each(function () {
        scrolledAwayWidth += $(this).outerWidth();
      });
      var newMargin = scrolledAwayWidth + $tabToScrollOff.outerWidth();
      $(config.listSelector).animate({
        marginLeft: '-' + newMargin + 'px'
      });
      $tabToScrollOff.addClass(config.scrolledAwayClass);
    }
  }; // default options


  $.fn.scrollTabs.defaults = {
    containerSelector: '#widgetMeta .header',
    listSelector: 'ul.summaryTabs',
    scrollableSelector: 'ul.summaryTabs li.scrollable',
    scrollArrowsSelector: 'ul.summaryTabs li.scrollArrow',
    scrollArrowPrevSelector: 'ul.summaryTabs li.prev',
    scrollArrowNextSelector: 'ul.summaryTabs li.next',
    scrolledAwayClass: 'scrolledAway'
  };
})(jQuery);

/***/ }),

/***/ 3217:
/***/ (function(module, exports) {

/**
* Updated Aug 2019 to support jquery 3.4.1
* - Click shorthand is deprecated: https://github.com/jquery/jquery-migrate/blob/master/warnings.md#jqmigrate-jqueryfnclick-event-shorthand-is-deprecated
* - Deprecated: .bind(): https://jquery.com/upgrade-guide/3.0/#deprecated-bind-and-delegate
*/
var widgetNS = blist.namespace.fetch('blist.widget');
var commonNS = blist.namespace.fetch('blist.common');
blist.namespace.fetch('blist.configuration');
widgetNS.ready = false;

blist.widget.resizeViewport = function () {
  widgetNS.$resizeContainer.fullScreen().adjustSize();
};

blist.widget.searchToolbarShown = false;

blist.widget.showToolbar = function (sectionName, callback) {
  var sectionClassLookup = {
    search: 'toolbarSearchForm',
    email: 'toolbarEmailForm',
    closePane: 'toolbarClosePaneBox',
    about: 'toolbarAboutBox'
  };
  var sectionClass = sectionClassLookup[sectionName];
  var $toolbar = $('.toolbar');
  var toolbarChanged = !$toolbar.hasClass(sectionName);
  $toolbar.removeClass().addClass('toolbar ' + sectionName);

  if (sectionName == 'search') {
    widgetNS.searchToolbarShown = true;
  }

  var maxAboutBoxHeight = $('.widgetContent').innerHeight() * 0.5;
  $('.toolbarAboutBox').css('max-height', maxAboutBoxHeight);

  var animateFinished = function animateFinished() {
    widgetNS.resizeViewport();

    if (_.isFunction(callback)) {
      callback();
    }
  };

  if (!$toolbar.is(':visible')) {
    // need to adjust height to fit about text
    if (sectionName === 'about') {
      $toolbar.show().children().show();
      $toolbar.height(Math.min($toolbar.find('.toolbarAboutBox').outerHeight(true), maxAboutBoxHeight)).hide();
    } else {
      $toolbar.height(20);
    }

    $toolbar.show('slide', {
      direction: widgetNS.orientation === 'downwards' ? 'up' : 'down'
    }, 500, animateFinished);
    $toolbar.children(':not(.close)').hide().filter('.' + sectionClass).show();
  } else if (toolbarChanged) {
    // need to go back to the grid if we select something dangerous
    if (sectionName != 'closePane') {
      widgetNS.closePane();
    } // need to adjust height to fit about text


    if (sectionName == 'about') {
      var $aboutBox = $toolbar.find('.toolbarAboutBox');
      $aboutBox.show();
      $toolbar.animate({
        height: Math.min($aboutBox.outerHeight(true), maxAboutBoxHeight)
      }, 500, animateFinished);
      $aboutBox.hide();
    } else {
      $toolbar.animate({
        height: 20
      }, 500, animateFinished);
    }

    $toolbar.children(':not(.close):visible').fadeOut('fast', function () {
      $toolbar.find('.' + sectionClass).fadeIn('fast');
    });
  }
};

blist.widget.hideToolbar = function () {
  var $toolbar = $('.toolbar');

  if ($toolbar.hasClass('search')) {
    widgetNS.searchToolbarShown = false;
  } else if (widgetNS.searchToolbarShown) {
    widgetNS.showToolbar('search');
    return;
  }

  $toolbar.removeClass().addClass('toolbar').hide('slide', {
    direction: widgetNS.orientation == 'downwards' ? 'up' : 'down'
  }, widgetNS.resizeViewport);
};

blist.widget.feedLoaded = false;
blist.widget.viewsLoaded = false; // Additional actions for specific panes

blist.widget.paneHandlers = {
  embed: function embed() {
    $('#embed_code').focus().trigger('select');
  },
  feed: function feed() {
    if (widgetNS.feedLoaded) {
      return;
    }

    widgetNS.feedLoaded = true; // feed

    blist.dataset.getComments(function (comments) {
      $('.widgetContent_feed').append($.renderTemplate('feedList'));
      $('.widgetContent_feed .feed').feedList({
        bindCommentEvents: false,
        comments: comments
      });
    });
  },
  views: function views() {
    if (widgetNS.viewsLoaded) {
      return;
    }

    widgetNS.viewsLoaded = true; // load more views

    blist.dataset.getRelatedViews(function (views) {
      var moreViews = _.reject(views, function (view) {
        return _.includes(['blob', 'href'], view.type);
      });

      moreViews.sort(function (a, b) {
        return b.viewCount - a.viewCount;
      });
      $('.widgetContent_views').append($.renderTemplate('filtersTable', moreViews, {
        'tbody .item': {
          'filter<-': {
            '.type .cellInner.icon': function typeCellInnerIcon(filter) {
              return filter.item.displayName.capitalize();
            },
            '.type@title': function typeTitle(filter) {
              return filter.item.displayName.capitalize();
            },
            '.type@class+': function typeClass(filter) {
              return ' type' + filter.item.styleClass;
            },
            '.name a': 'filter.name!',
            '.name a@title': 'filter.description!',
            '.name a@href': 'filter.url',
            '.viewed .cellInner': 'filter.viewCount',
            '.picture a@href': function pictureAHref(filter) {
              return new User(filter.item.owner).getProfileUrl(); // eslint-disable-line no-undef
            },
            '.picture img@src': function pictureImgSrc(filter) {
              return filter.item.owner.profileImageUrlMedium || '/images/small-profile.png';
            },
            '.picture img@alt': 'filter.owner.displayName!',
            '.picture img@title': 'filter.owner.displayName!'
          }
        }
      })); // since we haven't been updating our image sprite to support the
      // data lens icon, we add the necessary class to trigger the icon font

      $('.widgetContent_views td.typeData_lens .icon').addClass('icon-cards'); // hackery continues for visualizations

      $('.widgetContent_views td.typeVisualization').removeClass('typeVisualization').addClass('typeData_lens').find('.icon').addClass('icon-cards');
      $('.widgetContent_views .name a').each(function () {
        var $this = $(this);

        if ($this.attr('title') === '') {
          return;
        } // This is returning with &nbsp;, so replace them all with normal spaces


        $this.socrataTip({
          message: ($this.attr('title') || '').clean(),
          shrinkToFit: false,
          killTitle: true
        });
      });
      $('.widgetContent_views table.gridList').combinationList({
        headerContainerSelector: '.widgetContent_views .gridListWrapper',
        initialSort: [[2, 1]],
        scrollableBody: false,
        selectable: false,
        sortGrouping: false,
        sortHeaders: {
          0: {
            sorter: 'text'
          },
          1: {
            sorter: 'text'
          },
          2: {
            sorter: 'digit'
          },
          3: {
            sorter: false
          }
        }
      });
    });
  }
};

blist.widget.showPane = function (paneName, paneText, paneColor, paneData) {
  if ($('.widgetContent_' + paneName).is(':visible')) {
    return;
  }

  $('.widgetContent > :visible:first').fadeOut(200, function () {
    $('.widgetContent_' + paneName).fadeIn(200); // set up close pane

    if (!$.isBlank(paneText)) {
      $('.toolbarClosePaneName').text(paneText);
    }

    widgetNS.showToolbar('closePane');

    if (!$.isBlank(paneColor)) {
      $('.toolbar').animate({
        'background-color': paneColor
      });
    } // call any custom handlers


    if (_.isFunction(widgetNS.paneHandlers[paneName])) {
      widgetNS.paneHandlers[paneName].apply(this, paneData || []);
    }
  });
  $.analytics && $.analytics.trackEvent('widget (v2)', 'pane shown: ' + paneName, document.referrer);
};

blist.widget.closePane = function () {
  // get the color from the subHeaderBar in case we're in the publisher and it has changed.
  $('.toolbar').animate({
    'background-color': $('.subHeaderBar').css('background-color')
  }, function () {
    $(this).css('background-color', '');
  });
  widgetNS.showDataView();
};

blist.widget.flashToolbarMessage = function ($messageElem, message, onDisplay) {
  $messageElem.text(message).slideDown(function () {
    if (typeof onDisplay == 'function') {
      onDisplay();
    }

    setTimeout(function () {
      $messageElem.slideUp();
    }, 5000);
  });
};

blist.widget.showDataView = function () {
  if ($('.widgetContentGrid').is(':visible')) {
    return;
  }

  $('.widgetContent > :visible:first').fadeOut(200, function () {
    $('.widgetContentGrid').fadeIn(200);
    widgetNS.resizeViewport();
  });
};

(function ($) {
  if (!blist.dataset.valid) {
    $('body').addClass('invalidView');
  }
})(jQuery);

$(function () {
  function t(str) {
    return $.t('screens.widget.' + str);
  } // EN-19389: Make isMobile check more comprehensive


  var isMobile = function isMobile() {
    return $.device.iphone || $.device.android;
  };

  if (isMobile() && window.top === window.self) {
    blist.dataset.setAccessType('WEBSITE');
  } else {
    blist.dataset.setAccessType('WIDGET');
  } // keep track of some stuff for easy access


  widgetNS.orientation = widgetNS.theme.frame.orientation;
  widgetNS.isTabular = _.includes(['tabular', 'geo'], blist.dataset.viewType);
  widgetNS.interstitial = widgetNS.theme.behavior.interstitial; // sizing

  widgetNS.$resizeContainer = $('.widgetContent');
  widgetNS.$resizeContainer.fullScreen(); // controls

  $('select, input:checkbox, input:radio:not(.noUniform), input:file').uniform(); // menus

  var menuOptions = widgetNS.theme.menu.options,
      enabledModules = widgetNS.enabledModules;

  if (_.some(menuOptions)) {
    $('.mainMenu').menu({
      additionalDataKeys: ['targetPane', 'iconColor'],
      menuButtonTitle: 'Access additional information about this dataset.',
      menuButtonClass: 'mainMenuButton ' + (widgetNS.orientation == 'downwards' ? 'upArrow' : 'downArrow'),
      contents: [{
        text: t('menu.more_views'),
        className: 'views',
        targetPane: 'views',
        subtext: t('menu.more_views_subtext'),
        href: '#views',
        iconColor: '#57b6dd',
        onlyIf: widgetNS.isTabular && menuOptions.more_views
      }, {
        text: t('menu.download'),
        className: 'downloads',
        targetPane: 'downloads',
        subtext: t('menu.download_subtext'),
        href: '#downloads',
        iconColor: '#959595',
        onlyIf: widgetNS.isTabular && menuOptions.downloads
      }, {
        text: t('menu.discuss'),
        className: 'comments',
        targetPane: 'feed',
        subtext: t('menu.discuss_subtext'),
        href: '#comments',
        iconColor: '#bed62b',
        onlyIf: menuOptions.comments && enabledModules.allow_comments == true
      }, {
        text: t('menu.embed'),
        className: 'embed',
        targetPane: 'embed',
        subtext: t('menu.embed_subtext'),
        href: '#embed',
        iconColor: '#e44044',
        onlyIf: menuOptions.embed
      }, {
        text: t('menu.api'),
        className: 'api',
        targetPane: 'api',
        subtext: t('menu.api_subtext'),
        href: '#api',
        iconColor: '#f93f06',
        onlyIf: widgetNS.isTabular && menuOptions.api
      }, {
        text: t('menu.odata'),
        className: 'api',
        targetPane: 'odata',
        subtext: t('menu.odata_subtext'),
        href: '#odata',
        iconColor: '#f93f06',
        onlyIf: widgetNS.isTabular && menuOptions.api
      }, {
        text: t('menu.about'),
        className: 'about',
        href: 'http://www.socrata.com/',
        rel: 'external',
        onlyIf: menuOptions['about_sdp']
      }],
      onOpen: function onOpen() {
        $.analytics && $.analytics.trackEvent('widget (v2)', 'main menu opened', document.referrer);
      }
    });

    if (menuOptions['about_sdp']) {
      $('.mainMenu .menuColumns').addClass('hasAbout');
    }
  }

  $('.mainMenu .menuDropdown a').on('click', function (event) {
    var $this = $(this);
    var target = $this.attr('data-targetPane');

    if ($.isBlank(target)) {
      // bail; this is a real link
      return;
    }

    event.preventDefault();
    widgetNS.showPane(target, $this.find('.contents').text(), $this.attr('data-iconColor'));

    if (!$('.widgetContent_' + target).is(':visible')) {
      $.analytics && $.analytics.trackEvent('widget (v2)', 'menu item clicked: ' + $this.attr('href'), document.referrer);
    }
  });
  blist.datasetControls.hookUpShareMenu(blist.dataset, $('.subHeaderBar .share .shareMenu'), {
    menuButtonClass: 'icon',
    onOpen: function onOpen() {
      $.analytics && $.analytics.trackEvent('widget (v2)', 'share menu opened', document.referrer);
    }
  }, // ONCALL-3032: Disable unauthenticated share-by-email functionality.
  // Because the SDP share button is created at runtime, we have chosen
  // to disable the share-by-email functionality in this context altogether
  // rather than attempting to guarantee that we always have the current user
  // and other related data when this code executes.
  // The fourth argument to `blist.datasetControls.hookUpShareMenu()` is
  // `hideEmail`, so we just set it to true in each invocation of the function.
  true); // Hook up search form

  var $searchForm = $('.toolbar .toolbarSearchForm');
  $searchForm.on('submit', function (e) {
    e.preventDefault();
    var searchString = $(e.currentTarget).find(':input').val();
    blist.dataset.setSearchString(searchString, true);
  });

  if (!$.isBlank(blist.dataset.searchString)) {
    widgetNS.showToolbar('search', function () {
      $searchForm.find(':input').focus().val(blist.dataset.searchString).blur();
    });
  } // toolbar


  var $toolbar = $('.toolbar');
  $('.toolbar .close').on('click', function (event) {
    event.preventDefault();

    if ($toolbar.hasClass('search')) {
      $searchForm.find(':input').val('').trigger('blur');
      blist.dataset.update({
        searchString: null
      });
    }

    if ($toolbar.hasClass('closePane')) {
      widgetNS.closePane();
    }

    widgetNS.hideToolbar();
  });
  $('.subHeaderBar .about a').on('click', function (event) {
    event.preventDefault();

    if ($toolbar.hasClass('about') && $toolbar.is(':visible')) {
      widgetNS.hideToolbar();
    } else {
      widgetNS.showToolbar('about');
    }
  });
  $('.subHeaderBar .search a').on('click', function (event) {
    event.preventDefault();

    if ($toolbar.hasClass('search') && $toolbar.is(':visible')) {
      widgetNS.hideToolbar();
    } else {
      widgetNS.showToolbar('search');
    }
  });
  $('.shareMenu .email a').on('click', function () {
    if ($toolbar.hasClass('email') && $toolbar.is(':visible')) {
      $('.toolbarEmailForm .toolbarTextbox').effect('pulsate', {
        times: 2
      });
    } else {
      widgetNS.showToolbar('email');
    }
  });

  var emailRequestComplete = function emailRequestComplete(emails) {
    var message = emails.length ? 'Your emails were sent successfully.' : 'Some of your emails could not be sent. Please verify the addresses and try again.';
    widgetNS.flashToolbarMessage($('.toolbarEmailForm .toolbarMessage'), message, function () {
      var textbox = $('.toolbarEmailForm .toolbarTextbox');
      textbox.val(emails.join(', ')).attr('disabled', false).css('background-color', null). // for firefox/webkit
      css('background-color', widgetNS.theme.toolbar.input_color); // for ie

      if (!emails.length) {
        textbox.blur();
      }
    });
  }; // force clear textbox; it acts weird on refresh because it thinks you've changed it


  $('.toolbarEmailForm .toolbarTextbox, .toolbarSearchForm .toolbarTextbox').val('').trigger('blur');
  $('.toolbar .toolbarEmailForm').on('submit', function (event) {
    event.preventDefault();
    var $form = $(this);
    var $emailTextbox = $('.toolbarEmailForm .toolbarTextbox');
    var emails = $.trim($emailTextbox.val());
    emails = emails.split(/[, ]+/);
    var completed = 0;
    var totalRequests = emails.length;

    _.each(emails, function (email) {
      $.ajax({
        url: $form.attr('action'),
        cache: false,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({
          recipient: email
        }),
        success: function success(responseData) {
          if ($.isBlank(responseData) || responseData.error === undefined) {
            emails = _.without(emails, email);
          }

          if (++completed == totalRequests) {
            emailRequestComplete(emails);
          }
        },
        error: function error() {
          if (++completed == totalRequests) {
            emailRequestComplete(emails);
          }
        }
      });
    });

    $emailTextbox.attr('disabled', true).animate({
      'background-color': '#cdc9b7'
    });
  });
  $('.toolbarAboutBox .datasetAverageRating').stars({
    onChange: function onChange() {
      $('.actionInterstitial').jqmShow().find('.actionPhrase').text('rate this dataset');
    }
  });
  $('.viewError').text(blist.dataset.invalidMessage()); // Initialize all data rendering (but page is handled separately)

  blist.$container.renderTypeManager({
    view: blist.dataset,
    editEnabled: false,
    table: {
      columnHideEnabled: false,
      showRowNumbers: widgetNS.theme.grid.row_numbers,
      showRowHandle: widgetNS.theme.grid.row_numbers,
      manualResize: true
    }
  });
  var $dataGrid = blist.$container.renderTypeManager().$domForType('table');
  blist.$container.on('render_type_hidden', function () {
    if (_.isEmpty(blist.$container.renderTypeManager().visibleTypes)) {
      _.each(blist.dataset.metadata.renderTypeConfig.visible, function (visible, type) {
        if (visible) {
          blist.$container.renderTypeManager().show(type);
        }
      });
    }
  });
  $(document).on(blist.events.DISPLAY_ROW, function (e, rowId, updateOnly) {
    var uid;

    if (typeof rowId == 'string' && rowId.indexOf('/') > -1) {
      var splitRowId = rowId.split('/');
      uid = splitRowId[0];
      rowId = splitRowId[1];
    }

    var curId = $.deepGet(blist.dataset.metadata.renderTypeConfig, 'active', 'page', 'id');
    var sameDS = curId == uid || $.isBlank(curId) && uid == blist.dataset.id;

    if (!updateOnly || blist.dataset.metadata.renderTypeConfig.visible.page && !sameDS) {
      blist.$container.renderTypeManager().setTypeConfig('page', {
        defaultRowId: rowId
      });
      blist.dataset.showRenderType('page', uid, !sameDS);
    }
  }); // downloads

  var dlType = blist.dataset.getDownloadType();
  var layerDownloadType = blist.dataset.newBackend && blist.dataset.isLayered() ? 'layer_geojson_attributes' : 'layer_attributes';
  var downloadOptions = {
    downloadTypes: $.templates.downloadsTable.downloadTypes[dlType],
    layerDownloadTypes: $.templates.downloadsTable.downloadTypes[layerDownloadType],
    view: blist.dataset
  };
  $('.widgetContent_downloads').append($.renderTemplate('downloadsSectionContent', downloadOptions, $.templates.downloadsTable.directive[dlType]));
  $.templates.downloadsTable.postRender($('.widgetContent_downloads')); // This is duplicated from controls/panes/download-dataset.js

  if (GeoHelpers.isGeoDataset(blist.dataset)) {
    $('.widgetContent_downloads').addClass('geoDataset');
    blist.dataset.getChildOptionsForType('table', function (views) {
      var hookupLinks = function hookupLinks(uid) {
        $('.widgetContent_downloads').find('.layerDownloadsContent .item a').each(function () {
          var $link = $(this);

          var childView = _.find(views, function (view) {
            return view.id == uid;
          });

          $link.attr('href', childView.downloadUrl($link.data('type')));
        });
      };

      hookupLinks(views[0].id);

      if (views.length > 1) {
        $('.widgetContent_downloads').find('.layerTableDownloads').find('.layerChooser').append(_.map(views, function (view) {
          return $.tag({
            tagName: 'option',
            contents: view.name,
            'data-uid': view.id
          }, true);
        }).join('')).change(function () {
          hookupLinks($(this).find('option:selected').data('uid'));
        }).end().addClass('hasChoices');
      }
    });
  }

  $.live('.feed .commentActions a, .feedNewCommentButton', 'click', function (event) {
    event.preventDefault(); // display an appropriate interstitial for each action

    var message = 'do that';
    var $this = $(this);

    if ($this.is('.commentInappropriateLink:not(.disabled)')) {
      message = 'report a comment';
    } else if ($this.is('.commentRateUpLink:not(.ratedUp), .commentRateDownLink:not(.ratedDown)')) {
      message = 'rate a comment';
    } else if ($this.is('.commentReplyLink')) {
      message = 'reply to a comment';
    } else if ($this.is('.feedNewCommentButton')) {
      message = 'add a comment';
    }

    $('.actionInterstitial').jqmShow().find('.actionPhrase').text(message);
  });
  $.live('a.feedActor, #aboutSection a', 'focus mouseover', function () {
    // pretend these are rel="external"
    $(this).attr('target', '_blank');
  }); // embed

  $('.widgetContent_embed .embedForm').embedForm(); // Trigger interstitial if necessary

  if (!$.isBlank(document.referrer)) {
    $('.leavingInterstitial').find('.serverName').text(document.referrer.replace(/(ht|f)tps?:\/\/(www\.)?/, '').replace(/\/.*$/, ''));
  }

  $(document).on('click', 'a:not([href^="#"]):not(.noInterstitial):not([rel$="modal"])', function (event) {
    if (widgetNS.interstitial === true) {
      event.preventDefault();
      var href = $(this).attr('href'); // IE sticks the full URL in the href, so we didn't filter out local URLs

      if ($.isBlank(href) || href.indexOf(location) == 0) {
        return;
      }

      if (href.slice(0, 1) == '/') {
        href = location.host + href;
      }

      if (!href.match(/^(f|ht)tps?:\/\//)) {
        href = location.protocol + '//' + href;
      }

      var $modal = $('.leavingInterstitial');
      $modal.find('.leavingLink').attr('href', href).text(href);
      $modal.find('.accept.button').attr('href', href);
      $modal.jqmShow();
    }
  });
  $('.needsInlineView').data('dataset', blist.dataset).on('submit', commonNS.formInliner);
  $('.downloadsList .item .type a').downloadToFormCatcher(blist.dataset); // Notify publisher that we are ready

  widgetNS.ready = true; // Make adjustments for mobile

  if (isMobile()) {
    // supposedly scroll past address bar in webkit mobile
    _.defer(function () {
      window.scrollTo(0, 1);
    }); // show the mobile site notice


    $dataGrid.bind('dataset_ready', function () {
      $('.mobileNotice').fadeIn();
      setTimeout(function () {
        $('.mobileNotice').fadeOut();
      }, 10000);
    }); // if they choose fullscreen from the widget, make sure it doesn't redir back here

    var fullscreenLink = $('.subHeaderAction.fullscreen a');
    fullscreenLink.attr('href', fullscreenLink.attr('href') + '?no_mobile=true'); // essentially, disable scrolling of the main container

    $(document).bind('touchmove', function (event) {
      event.originalEvent.preventDefault();
    });
  }

  _.defer(function () {
    // Report we've opened for metrics
    blist.dataset.registerOpening(document.referrer); // report to events analytics for easier aggregation

    $.analytics && $.analytics.trackEvent('widget (v2)', 'page loaded', document.referrer);
  });

  if (widgetNS.showPrivateMessage === true) {
    $('.privateDataset').jqmShow();
  }
});

/***/ })

/******/ });
//# sourceMappingURL=widgets-show.js.map