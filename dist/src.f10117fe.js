// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/datas/program-data.json":[function(require,module,exports) {
module.exports = [{
  "name": "2021 네이버웹툰 개발 챌린지",
  "url": "https://programmers.co.kr/competitions/1472?slug=2021-naver-webtoon-challenge",
  "image": "https://grepp-programmers.s3.amazonaws.com/image/origin/production/competition/131456/61a9e886-377f-4016-8384-fcc2530c365d.png",
  "receipt": "21년 06월 21일 10:00 - 07월 02일 23:59",
  "test": "21년 07월 04일 14:00 - 07월 04일 16:00",
  "language": ["Java", "JavaScript", "Python3", "Kotlin", "Swift"]
}, {
  "name": "2021 Dev-Matching: 앱 개발자(상반기)",
  "url": "https://programmers.co.kr/competitions/1307?slug=2021-app-first",
  "image": "https://grepp-programmers.s3.amazonaws.com/image/origin/production/competition/129363/219b99de-0978-46e6-b89c-7eaaa903d6b2.png",
  "receipt": "21년 05월 31일 11:00 - 06월 18일 17:00",
  "test": "21년 06월 19일 13:00 - 06월 19일 17:00",
  "language": []
}, {
  "name": "2021 Dev-Matching: 머신러닝 개발자",
  "url": "https://programmers.co.kr/competitions/1109?slug=2021-machinelearning",
  "image": "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/competition-imgs/2021/dm_ml_01/2021_dev_matching_ml_01-prgm-img_Banner.png",
  "receipt": "21년 05월 03일 11:00 - 05월 21일 17:00",
  "test": "21년 05월 23일 10:00 - 05월 23일 18:00",
  "language": []
}, {
  "name": "프로그래머스 월간 코드 챌린지 시즌2",
  "url": "https://programmers.co.kr/competitions/1078?slug=monthly-code-challenge-s2",
  "image": "https://grepp-programmers.s3.amazonaws.com/image/origin/production/competition/113186/61c52c76-9f26-4455-b387-293ed4e64604.png",
  "receipt": "21년 03월 25일 11:00 - 05월 13일 18:00",
  "test": "21년 04월 15일 19:30 - 05월 13일 22:30",
  "language": ["C++", "C#", "Java", "JavaScript", "Kotlin", "Python3"]
}, {
  "name": "2021 Summer Coding - 여름방학 스타트업 인턴 프로그램",
  "url": "https://programmers.co.kr/competitions/1043?slug=2021-summer-coding",
  "image": "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/competition-imgs/2021/summer/2021-summer_coding__prgm__img-banner.png",
  "receipt": "21년 04월 12일 11:00 - 05월 07일 17:00",
  "test": "21년 05월 09일 13:00 - 05월 09일 15:00",
  "language": ["C", "C++", "C#", "Go", "Java", "JavaScript", "Kotlin", "Python3", "Ruby", "Swift", "MySQL", "Oracle"]
}, {
  "name": "2021 카카오 채용연계형 인턴십 for Tech Developers",
  "url": "https://programmers.co.kr/competitions/1142?slug=2021-kakao-internship",
  "image": "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/competition-imgs/2021_kakao_Internship_banner.png",
  "receipt": "21년 04월 15일 11:00 - 05월 03일 17:00",
  "test": "21년 05월 08일 14:00 - 05월 08일 18:00",
  "language": ["C#", "Java", "JavaScript", "Kotlin", "Python2", "Python3", "Swift"]
}, {
  "name": "2021 카카오커머스 개발자 공개채용",
  "url": "https://programmers.co.kr/competitions/1010?slug=2021-kakaocommerce-developers",
  "image": "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/competition-imgs/2021_kakaocommerce_programmers_image_revised_0317.gif",
  "receipt": "21년 03월 22일 09:00 - 04월 02일 17:00",
  "test": "21년 04월 03일 13:00 - 04월 10일 17:00",
  "language": ["Java", "MySQL", "Kotlin", "JavaScript", "Swift", "Python3"]
}, {
  "name": "2021 Dev-Matching: 웹 백엔드 개발자(상반기)",
  "url": "https://programmers.co.kr/competitions/977?slug=2021-web-be-first",
  "image": "https://grepp-programmers.s3.amazonaws.com/image/origin/production/competition/109596/7b87afd1-5fab-4d45-a8e5-0a9aede3a0d6.png",
  "receipt": "21년 03월 08일 11:00 - 04월 02일 17:00",
  "test": "21년 04월 03일 16:00 - 04월 03일 18:00",
  "language": ["C#", "Go", "Java", "JavaScript", "Kotlin", "Python3", "Ruby", "Swift", "MySQL", "Oracle"]
}, {
  "name": "2021 Dev-Matching: 웹 프론트엔드 개발자(상반기)",
  "url": "https://programmers.co.kr/competitions/812?slug=2021-web-fe-first",
  "image": "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/competition-imgs/2021/dm_fe1/2021-dm-fe__prgm__img-banner.png",
  "receipt": "21년 02월 15일 11:00 - 03월 05일 17:00",
  "test": "21년 03월 06일 13:00 - 03월 06일 16:00",
  "language": []
}, {
  "name": "카카오커머스 개발자 영입 - 프론트엔드 개발 챌린지",
  "url": "https://programmers.co.kr/competitions/779?slug=2021-kakaocommerce-fe-recruitment",
  "image": "https://grepp-programmers.s3.amazonaws.com/image/origin/production/banner/100394/1f23bd6e-a423-42fc-9e9b-9a8173c36797.jpg",
  "receipt": "21년 01월 04일 11:00 - 01월 22일 17:00",
  "test": "21년 01월 23일 14:00 - 01월 30일 17:10",
  "language": ["JavaScript"]
}];
},{}],"src/index.ts":[function(require,module,exports) {
"use strict";

var _programData = _interopRequireDefault(require("./datas/program-data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.addEventListener('DOMContentLoaded', function () {
  function openBar(e) {
    var $navBar = document.querySelector('.nav__navbar');
    $navBar.classList.toggle('active');
  }

  function openSignUpPage(e) {
    window.location.href = 'https://programmers.co.kr/users/signup';
  }

  document.querySelector('.nav__btn').addEventListener('click', openBar);
  document.querySelector('.header__sign-up-btn').addEventListener('click', openSignUpPage);

  var Program = /*#__PURE__*/function () {
    function Program(datas) {
      _classCallCheck(this, Program);

      this.datas = datas;
      this.num = 0;
      this.dataLength = this.datas.length;
      this.renderCard();
      this.renderPageBtn();
      this.HandleEvents();
      this.initialize();
      console.log("여기", this.num);
    }

    _createClass(Program, [{
      key: "makeLinkElement",
      value: function makeLinkElement(parent, data) {
        var $programLink = document.createElement('a');
        $programLink.className = "programs__link";
        $programLink.setAttribute("href", data.url);
        var $programImage = document.createElement('img');
        $programImage.className = "programs__image";
        $programImage.setAttribute('src', data.image);
        $programImage.setAttribute('alt', "채용 프로그램 이미지");
        $programLink.appendChild($programImage);
        parent.appendChild($programLink);
      }
    }, {
      key: "makeInfoElement",
      value: function makeInfoElement(parent, data) {
        var $programInfo = document.createElement("section");
        $programInfo.className = "programs__program-info";
        var $programTitle = document.createElement("h3");
        $programTitle.className = "programs__program-title";
        $programTitle.textContent = data.name;
        var $programTimes = document.createElement("h4");
        $programTimes.className = "programs__program-times";
        $programInfo.appendChild($programTitle);
        $programInfo.appendChild($programTimes);
        var $programPeriodReceipt = document.createElement("span");
        $programPeriodReceipt.className = "programs__period-receipt";
        $programPeriodReceipt.textContent = "\uC811\uC218: ".concat(data.receipt);
        var $programPeriodTest = document.createElement("span");
        $programPeriodTest.className = "programs__period-test";
        $programPeriodTest.textContent = "\uD14C\uC2A4\uD2B8: ".concat(data.test);
        var $programLanguage = document.createElement('ul');
        $programLanguage.className = "programs__program-language";
        data.language.forEach(function (each) {
          var $languageItem = document.createElement('li');
          $languageItem.textContent = each;
          $languageItem.className = "programs__language-item";
          $programLanguage.appendChild($languageItem);
        });
        $programTimes.appendChild($programPeriodReceipt);
        $programTimes.appendChild($programPeriodTest);
        $programTimes.appendChild($programLanguage);
        parent.appendChild($programInfo);
      }
    }, {
      key: "makeLabelElement",
      value: function makeLabelElement(parent, data) {
        var label = document.createElement('div');
        label.className = "programs__label";
        parent.appendChild(label);
      }
    }, {
      key: "renderPageBtn",
      value: function renderPageBtn() {
        var $pageBtns = document.querySelector('.programs__page-btns');

        for (var i = 0; i < this.datas.length; i++) {
          var $pageBtn = document.createElement('li');
          $pageBtn.className = 'programs__page-btn';
          $pageBtns.appendChild($pageBtn);
        }

        ;
      }
    }, {
      key: "renderCard",
      value: function renderCard() {
        var _this = this;

        this.datas.forEach(function (data) {
          var $programCard = document.createElement('li');
          $programCard.className = "programs__program-card";
          var $cardItem = document.createElement('div');
          $cardItem.classList.add("programs__card-items");

          _this.makeLabelElement($programCard, data);

          _this.makeLinkElement($cardItem, data);

          _this.makeInfoElement($cardItem, data);

          $programCard.appendChild($cardItem);
          document.querySelector('.programs__program-cards').appendChild($programCard);
        });
      }
    }, {
      key: "HandleEvents",
      value: function HandleEvents() {
        function HandlePageBtn(e) {
          var _this2 = this;

          var __pageBtn = 'programs__page-btn';
          var __programCards = "programs__program-cards";
          var target = e.target;
          var pageBtns = document.querySelectorAll(".".concat(__pageBtn));
          var $programCards = document.querySelector(".".concat(__programCards));
          var cardsWidth = document.querySelector('.programs__program-card').clientWidth;
          if (!target.classList.contains(__pageBtn)) return;
          pageBtns.forEach(function (pageBtn, idx) {
            if (target === pageBtn) _this2.num = idx;
            pageBtn.classList.toggle("".concat(__pageBtn, "--active"), pageBtn === target);
          });
          $programCards.style.transform = "translate(".concat(-(cardsWidth + 16) * this.num, "px, 0)");
          this.checkDisable();
        }

        function HandleMoveBtn(e) {
          var _this3 = this;

          var __leftBtn = 'programs__move-left';
          var __rightBtn = 'programs__move-right';
          var __programCards = "programs__program-cards";
          var __pageBtn = 'programs__page-btn';
          var $programCards = document.querySelector(".".concat(__programCards));
          var $pageBtns = document.querySelectorAll(".".concat(__pageBtn));
          var cardsWidth = document.querySelector('.programs__program-card').clientWidth;
          var target = e.target;
          if (this.num && target.classList.contains(__leftBtn)) this.num--;else if (this.num !== this.dataLength - 1 && target.classList.contains(__rightBtn)) this.num++;else return;
          $programCards.style.transform = "translate(".concat(-(cardsWidth + 16) * this.num, "px, 0)");
          $pageBtns.forEach(function (pageBtn) {
            pageBtn.classList.toggle("".concat(__pageBtn, "--active"), pageBtn === $pageBtns[_this3.num]);
          });
          this.checkDisable();
        }

        document.querySelector('.programs__move-btn').addEventListener('click', HandleMoveBtn.bind(this));
        document.querySelector('.programs__page-btns').addEventListener('click', HandlePageBtn.bind(this));
      }
    }, {
      key: "initialize",
      value: function initialize() {
        var __programCard = 'programs__program-card';
        var __pageBtn = 'programs__page-btn';
        var $programCard = document.querySelectorAll('.programs__program-card');
        var $pageBtn = document.querySelectorAll(".".concat(__pageBtn));
        $programCard[0].classList.add("".concat(__programCard, "--active"));
        $pageBtn[0].classList.add("".concat(__pageBtn, "--active"));
        this.checkDisable();
      }
    }, {
      key: "checkDisable",
      value: function checkDisable() {
        var __leftBtn = 'programs__move-left';
        var __rightBtn = 'programs__move-right';
        document.querySelector(".".concat(__leftBtn)).classList.toggle("".concat(__leftBtn, "--disable"), !this.num);
        document.querySelector(".".concat(__rightBtn)).classList.toggle("".concat(__rightBtn, "--disable"), this.num === this.dataLength - 1);
      }
    }]);

    return Program;
  }();

  new Program(_programData.default);
});
},{"./datas/program-data.json":"src/datas/program-data.json"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61677" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/src.f10117fe.js.map