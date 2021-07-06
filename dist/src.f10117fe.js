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
},{}],"src/datas/job-data.json":[function(require,module,exports) {
module.exports = [{
  "name": "모토브",
  "image": "https://grepp-programmers.s3.amazonaws.com/production/company/logo/2928/resize.jpeg",
  "url": "https://programmers.co.kr/job_positions/6106",
  "jobName": "Frontend Engineer (신입가능/전문연구요원)",
  "requirements": ["프론트엔드", "웹 풀스택", "TypeScript", "React Native", "Firebase", "AWS", "DynamoDB", "Webpack", "AngularJS", "ES6", "CSS", "HTML", "JavaScript", "jQuery", "ReactJS", "Node.js"]
}, {
  "name": "마켓컬리",
  "image": "https://grepp-programmers.s3.amazonaws.com/production/company/logo/762/PURPLE.png",
  "url": "https://programmers.co.kr/job_positions/3495",
  "jobName": "[마켓컬리] iOS 앱개발자",
  "requirements": ["아이폰 앱", "Reactor", "Rx", "Swift", "MVVM(Model-View-ViewModel)", "MVP", "iOS"]
}, {
  "name": "엑심베이",
  "image": "https://grepp-programmers.s3.amazonaws.com/production/company/logo/1858/Eximbay-CI.jpg",
  "url": "https://programmers.co.kr/job_positions/4978",
  "jobName": "프론트엔드 개발자",
  "requirements": ["서버/백엔드", "프론트엔드", "웹 풀스택", "CSS3", "HTML5", "JavaScript", "JSP", "Spring", "MySQL", "Java"]
}, {
  "name": "하우저",
  "image": "https://grepp-programmers.s3.amazonaws.com/production/company/logo/1845/%EB%A1%9C%EA%B3%A0_%EC%84%B8%EB%A1%9C%ED%98%95.jpg",
  "url": "https://programmers.co.kr/job_positions/4766",
  "jobName": "Front-end 개발자",
  "requirements": ["프론트엔드", "웹 풀스택", "TypeScript", "React Native", "Firebase", "AWS", "DynamoDB", "Webpack", "AngularJS", "ES6", "CSS", "HTML", "JavaScript", "jQuery", "ReactJS", "Node.js"]
}, {
  "name": "모두싸인",
  "image": "https://grepp-programmers.s3.amazonaws.com/production/company/logo/364/SYMBOL.jpg",
  "url": "https://programmers.co.kr/job_positions/3294",
  "jobName": "프론트엔드 엔지니어(리더급)",
  "requirements": ["Redux.js", "CSS", "HTML", "JavaScript", "ReactJS", "TypeScript"]
}, {
  "name": "딥바이오",
  "image": "https://grepp-programmers.s3.amazonaws.com/production/company/logo/2330/CI3.png",
  "url": "https://programmers.co.kr/job_positions/4182",
  "jobName": "프론트엔드 엔지니어",
  "requirements": ["Redux-Saga", "Redux.js", "AWS EC2", "Electron", "TypeScript", "Docker", "Webpack", "ES6", "ReactJS", "Node.js", "CSS", "JavaScript", "HTML"]
}, {
  "name": "올림플래닛",
  "image": "https://grepp-programmers.s3.amazonaws.com/production/company/logo/2102/LOGO_-_%EA%B6%8C%EC%9E%AC%ED%98%84.jpg",
  "url": "https://programmers.co.kr/job_positions/5275",
  "jobName": "프론트엔드 개발/vue.js react.js",
  "requirements": ["Nuxt.js", "Next.js", "WebGL", "Tailwind", "CSS", "Bootstrap", "Vuetify.js", "REST API", "ReactJS", "Sass(SCSS)", "TypeScript", "CSS", "HTML"]
}, {
  "name": "와디즈플랫폼",
  "image": "https://grepp-programmers.s3.amazonaws.com/production/company/logo/1263/%EB%A1%9C%EA%B3%A0.png",
  "url": "https://programmers.co.kr/job_positions/892",
  "jobName": "프론트엔드 개발자",
  "requirements": ["ES6", "Webpack", "ReactJS", "Node.js", "CSS", "HTML", "JavaScript"]
}];
},{}],"src/datas/skills-data.json":[function(require,module,exports) {
module.exports = [{
  "skills": ["Java", "Spring", "Node.js", "Django", "ReactJS", "Vue.js", "JavaScript", "Python", "Kotlin", "C++", "Android", "IOS", "서버/백엔드", "프론트엔드", "웹 풀스택", "안드로이드 앱", "아이폰 앱"]
}];
},{}],"src/Throttle.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var timer;
var baewi = '베위~';

var throttle = function throttle(cb) {
  return function () {
    var _arguments = arguments;

    if (!timer) {
      timer = setTimeout(function () {
        cb.apply(void 0, _toConsumableArray(_arguments));
        timer = null;
      }, 300);
    }
  };
};

var _default = throttle;
exports.default = _default;
},{}],"src/Program.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Throttle = _interopRequireDefault(require("./Throttle.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Program = /*#__PURE__*/function () {
  function Program(datas) {
    _classCallCheck(this, Program);

    this.datas = datas;
    this.names = {
      programLink: "programs__link",
      programImage: "programs__image",
      programInfo: "programs__program-info",
      programTitle: "programs__program-title",
      programTimes: "programs__program-times",
      programPeriodReceipt: "programs__period-receipt",
      programPeriodTest: "programs__period-test",
      programLanguage: "programs__program-language",
      languageItem: "programs__language-item",
      moreLanguage: "programs__more-language",
      pageBtn: "programs__page-btn",
      pageBtns: "programs__page-btns",
      programCard: "programs__program-card",
      programCards: "programs__program-cards",
      moveBtn: "programs__move-btn",
      leftBtn: "programs__move-left",
      rightBtn: "programs__move-right",
      cardItems: "programs__card-items"
    };
    this.num = 0;
    this.windowWidth;
    this.nowWidth;
    this.moveWidth;
    this.dataLength;
    this.initialize();
    this.render();
    this.HandleEvents();
    this.HandleResize();
    this.checkDisable();
  }

  _createClass(Program, [{
    key: "initialize",
    value: function initialize() {
      this.windowWidth = window.innerWidth;
      this.num = this.setNum(this.windowWidth);
      this.nowWidth = this.setWidth(this.windowWidth);
      this.moveWidth = this.setMoveWidth(this.windowWidth);
      this.dataLength = this.setDataLength(this.windowWidth);
      this.reRenderPageBtn();
    }
  }, {
    key: "renderCard",
    value: function renderCard() {
      var _this2 = this;

      function makeLinkElement(parent, data) {
        var $programLink = document.createElement('a');
        $programLink.className = this.names.programLink;
        $programLink.setAttribute("href", data.url);
        var $programImage = document.createElement('img');
        $programImage.className = this.names.programImage;
        $programImage.setAttribute('src', data.image);
        $programImage.setAttribute('alt', "채용 프로그램 이미지");
        $programLink.appendChild($programImage);
        parent.appendChild($programLink);
      }

      function makeInfoElement(parent, data) {
        var _this = this;

        var $programInfo = document.createElement("section");
        $programInfo.className = this.names.programInfo;
        var $programTitle = document.createElement("h3");
        $programTitle.className = this.names.programTitle;
        $programTitle.textContent = data.name;
        var $programTimes = document.createElement("h4");
        $programTimes.className = this.names.programTimes;
        $programInfo.appendChild($programTitle);
        $programInfo.appendChild($programTimes);
        var $programPeriodReceipt = document.createElement("span");
        $programPeriodReceipt.className = this.names.programPeriodReceipt;
        $programPeriodReceipt.textContent = "\uC811\uC218: ".concat(data.receipt);
        var $programPeriodTest = document.createElement("span");
        $programPeriodTest.className = this.names.programPeriodTest;
        $programPeriodTest.textContent = "\uD14C\uC2A4\uD2B8: ".concat(data.test);
        var $programLanguage = document.createElement('ul');
        $programLanguage.className = this.names.programLanguage;

        if (data.language.length > 8) {
          var $moreLanguage = document.createElement('li');
          var moreLanguageArr = [];
          $moreLanguage.className = this.names.moreLanguage;
          data.language.forEach(function (each, idx) {
            if (idx <= 7) {
              var $languageItem = document.createElement('li');
              $languageItem.textContent = each;
              $languageItem.className = _this.names.languageItem;
              $programLanguage.appendChild($languageItem);
            } else {
              moreLanguageArr.push(each);
            }
          });
          $moreLanguage.textContent = "+".concat(moreLanguageArr.length);
          $moreLanguage.dataset.language = moreLanguageArr.join(', ');
          $programLanguage.appendChild($moreLanguage);
        } else {
          data.language.forEach(function (each) {
            var $languageItem = document.createElement('li');
            $languageItem.textContent = each;
            $languageItem.className = _this.names.languageItem;
            $programLanguage.appendChild($languageItem);
          });
        }

        $programInfo.appendChild($programLanguage);
        $programTimes.appendChild($programPeriodReceipt);
        $programTimes.appendChild($programPeriodTest);
        parent.appendChild($programInfo);
      }

      ;

      function makeLabelElement(parent, data) {
        var label = document.createElement('div');
        label.className = "programs__label";
        parent.appendChild(label);
      }

      ;
      this.datas.forEach(function (data, idx) {
        var $programCard = document.createElement('li');
        $programCard.className = _this2.names.programCard;
        var $cardItem = document.createElement('div');
        $cardItem.classList.add(_this2.names.cardItems);
        makeLabelElement.bind(_this2)($programCard, data);
        makeLinkElement.bind(_this2)($cardItem, data);
        makeInfoElement.bind(_this2)($cardItem, data);
        if (!idx) $programCard.classList.add("".concat(_this2.names.programCard, "--active"));
        $programCard.appendChild($cardItem);
        document.querySelector(".".concat(_this2.names.programCards)).appendChild($programCard);
      });
    }
  }, {
    key: "reRenderPageBtn",
    value: function reRenderPageBtn() {
      var $pageBtns = document.querySelector(".".concat(this.names.pageBtns));
      var differenceCount = $pageBtns.children.length - this.dataLength;
      if (!differenceCount) return;else if (differenceCount < 0) {
        this.renderPageBtn(-differenceCount);
      } else {
        for (var i = 0; i < differenceCount; i++) {
          var $pageBtn = document.querySelector(".".concat(this.names.pageBtn));
          $pageBtns.removeChild($pageBtn);
        }
      }
      this.checkActive(this.names.pageBtn);
    }
  }, {
    key: "renderPageBtn",
    value: function renderPageBtn(count) {
      var $pageBtns = document.querySelector(".".concat(this.names.pageBtns));

      for (var i = 0; i < count; i++) {
        var $pageBtn = document.createElement('li');
        $pageBtn.className = this.names.pageBtn;
        $pageBtns.appendChild($pageBtn);
      }

      ;
      this.checkActive(this.names.pageBtn);
    }
  }, {
    key: "render",
    value: function render() {
      this.renderCard();
      this.renderPageBtn(this.dataLength);
    }
  }, {
    key: "setWidth",
    value: function setWidth(windowWidth) {
      if (991 < windowWidth) {
        return 1160;
      } else if (991 < windowWidth && windowWidth <= 1200) {
        return windowWidth - 56;
      } else if (767 <= windowWidth && windowWidth <= 991) {
        return windowWidth - 124;
      } else if (574 < windowWidth && windowWidth < 767) {
        return windowWidth / 2 - 45;
      } else {
        return windowWidth - 64;
      }
    }
  }, {
    key: "setMoveWidth",
    value: function setMoveWidth(windowWidth) {
      if (991 < windowWidth) {
        return this.nowWidth + 16;
      } else if (574 < windowWidth && windowWidth < 767) {
        return this.nowWidth * 2 + 64;
      } else {
        return this.nowWidth + 32;
      }
    }
  }, {
    key: "setDataLength",
    value: function setDataLength(windowWidth) {
      if (windowWidth < 767) return Math.ceil(this.datas.length / 2);else return this.datas.length;
    }
  }, {
    key: "setNum",
    value: function setNum(windowWidth) {
      var _this3 = this;

      var res = 0;
      document.querySelectorAll(".".concat(this.names.programCard)).forEach(function (card, idx) {
        if (card.classList.contains("".concat(_this3.names.programCard, "--active"))) {
          res = idx;
        }
      });
      if (windowWidth < 767) return Math.floor(res / 2);else return res;
    }
  }, {
    key: "checkActive",
    value: function checkActive(name) {
      var _this4 = this;

      var nodeList = document.querySelectorAll(".".concat(name));

      if (this.nowWidth < 767 && name !== this.names.pageBtn) {
        nodeList.forEach(function (node) {
          node.classList.toggle("".concat(name, "--active"), node === nodeList[_this4.num * 2]);
        });
      } else {
        nodeList.forEach(function (node) {
          node.classList.toggle("".concat(name, "--active"), node === nodeList[_this4.num]);
        });
      }
    }
  }, {
    key: "HandleResize",
    value: function HandleResize(e) {
      var _this5 = this;

      this.initialize();
      var $cardItems = document.querySelectorAll(".".concat(this.names.cardItems));
      $cardItems.forEach(function (cardItem) {
        cardItem.style.width = "".concat(_this5.nowWidth, "px");
      });
      var $programCards = document.querySelector(".".concat(this.names.programCards));
      $programCards.style.transform = "translate(".concat(-this.moveWidth * this.num, "px, 0)");
    }
  }, {
    key: "HandleEvents",
    value: function HandleEvents() {
      function HandlePageBtn(e) {
        var _this6 = this;

        var target = e.target;
        var pageBtns = document.querySelectorAll(".".concat(this.names.pageBtn));
        var $programCards = document.querySelector(".".concat(this.names.programCards));
        if (!target.classList.contains(this.names.pageBtn)) return;
        pageBtns.forEach(function (btn, idx) {
          btn.classList.toggle("".concat(_this6.names.pageBtn, "--active"), btn === target);
          if (btn === target) _this6.num = idx;
        });
        $programCards.style.transform = "translate(".concat(-this.moveWidth * this.num, "px, 0)");
        this.checkDisable();
      }

      function HandleMoveBtn(e) {
        var $programCards = document.querySelector(".".concat(this.names.programCards));
        var target = e.target;

        if (this.num && target.classList.contains(this.names.leftBtn)) {
          this.num--;
        } else if (this.num !== this.dataLength - 1 && target.classList.contains(this.names.rightBtn)) {
          this.num++;
        } else return;

        $programCards.style.transform = "translate(".concat(-this.moveWidth * this.num, "px, 0)");
        this.checkActive(this.names.pageBtn);
        this.checkActive(this.names.programCard);
        this.checkDisable();
      }

      document.querySelector(".".concat(this.names.moveBtn)).addEventListener('click', HandleMoveBtn.bind(this));
      document.querySelector(".".concat(this.names.pageBtns)).addEventListener('click', HandlePageBtn.bind(this));
      window.addEventListener('resize', (0, _Throttle.default)(this.HandleResize.bind(this)));
    }
  }, {
    key: "checkDisable",
    value: function checkDisable() {
      document.querySelector(".".concat(this.names.leftBtn)).classList.toggle("".concat(this.names.leftBtn, "--disable"), !this.num);
      document.querySelector(".".concat(this.names.rightBtn)).classList.toggle("".concat(this.names.rightBtn, "--disable"), this.num === this.dataLength - 1);
    }
  }]);

  return Program;
}();

exports.default = Program;
},{"./Throttle.ts":"src/Throttle.ts"}],"src/Job.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

;

var Job = /*#__PURE__*/function () {
  function Job(jobDatas, SkillDatas) {
    _classCallCheck(this, Job);

    this.jobDatas = jobDatas;
    this.SkillDatas = SkillDatas;
    this.names = {
      jobHeader: 'job__header',
      jobTitle: 'job__title',
      jobMoreBtn: 'job__more-btn',
      jobSkills: 'job__skills',
      jobSkill: 'job__skill',
      jobCards: 'job__cards',
      jobCard: 'job__card',
      jobLogoBox: 'job__logo-box',
      jobCardLogo: 'job__card-logo',
      jobCardInfo: 'job__card-info',
      jobCardTitle: 'job__card-title',
      jobCardBrand: 'job__card-brand',
      jobRequirements: 'job__requirements',
      jobRequirement: 'job__requirement'
    };
    this.render();
  }

  _createClass(Job, [{
    key: "customCreateElement",
    value: function customCreateElement(tag, name) {
      var elem = document.createElement(tag);
      elem.className = name;
      return elem;
    }
  }, {
    key: "customAppendChild",
    value: function customAppendChild(parent) {
      for (var _len = arguments.length, elems = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        elems[_key - 1] = arguments[_key];
      }

      [].concat(elems).map(function (elem) {
        return parent.appendChild(elem);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var renderSkillsComponent = function () {
        var $jobSkills = _this.customCreateElement('ul', _this.names.jobSkills);

        var datas = _this.SkillDatas[0].skills;
        datas.map(function (data) {
          var $jobSkill = _this.customCreateElement('li', _this.names.jobSkill);

          $jobSkill.textContent = data;
          $jobSkills.appendChild($jobSkill);
        });
        document.querySelector('.job').appendChild($jobSkills);
      }();

      var renderCardsComponent = function () {
        var $jobCards = _this.customCreateElement('ul', _this.names.jobCards);

        _this.jobDatas.map(function (jobData) {
          var $jobCard = _this.customCreateElement('li', _this.names.jobCard);

          var $jobLogoBox = _this.customCreateElement('div', _this.names.jobLogoBox);

          var $jobCardLogo = _this.customCreateElement('img', _this.names.jobCardLogo);

          $jobCardLogo.setAttribute('src', jobData.image);
          $jobCardLogo.setAttribute('alt', "채용회사 로고 이미지");
          $jobLogoBox.appendChild($jobCardLogo);

          var $jobCardInfo = _this.customCreateElement('section', _this.names.jobCardInfo);

          var $jobCardTitle = _this.customCreateElement('h4', _this.names.jobCardTitle);

          $jobCardTitle.textContent = jobData.jobName;

          var $jobCardBrand = _this.customCreateElement('h4', _this.names.jobCardBrand);

          $jobCardBrand.textContent = jobData.name;

          var $jobRequirements = _this.customCreateElement('ul', _this.names.jobRequirements);

          jobData.requirements.map(function (requirement) {
            var $jobRequirement = _this.customCreateElement('li', _this.names.jobRequirement);

            $jobRequirement.textContent = requirement;
            $jobRequirements.appendChild($jobRequirement);
          });

          _this.customAppendChild($jobCardInfo, $jobCardTitle, $jobCardBrand, $jobRequirements);

          _this.customAppendChild($jobCard, $jobLogoBox, $jobCardInfo);

          $jobCards.appendChild($jobCard);
        });

        document.querySelector('.job').appendChild($jobCards);
      }();
    }
  }]);

  return Job;
}();

exports.default = Job;
},{}],"src/About.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var About = /*#__PURE__*/function () {
  function About() {
    _classCallCheck(this, About);

    this.names = {
      aboutBtns: "about__btns",
      aboutBtn: "about__btn",
      aboutCard: "about__card",
      aboutImageBox: "about__image-box"
    };
    this.handleBtnClick();
  }

  _createClass(About, [{
    key: "handleBtnClick",
    value: function handleBtnClick() {
      var _this = this;

      var $aboutBtns = document.querySelector(".".concat(this.names.aboutBtns));
      $aboutBtns.addEventListener('click', function (e) {
        var target = e.target;
        if (!target.classList.contains(_this.names.aboutBtn)) return;
        var idx = target.dataset.btnNumber;
        var $btnElems = document.querySelectorAll(".".concat(_this.names.aboutBtn));
        $btnElems.forEach(function (elem) {
          elem.classList.toggle("".concat(_this.names.aboutBtn, "--active"), e.target === elem);
        });
        var $cardElems = document.querySelectorAll(".".concat(_this.names.aboutCard));
        $cardElems.forEach(function (elem) {
          elem.classList.toggle("".concat(_this.names.aboutCard, "--active"), idx === elem.dataset.cardNumber);
        });
        var $imgBoxElems = document.querySelectorAll(".".concat(_this.names.aboutImageBox));
        $imgBoxElems.forEach(function (elem) {
          elem.classList.toggle("".concat(_this.names.aboutImageBox, "--active"), idx === elem.dataset.imgNumber);
        });
      });
    }
  }]);

  return About;
}();

exports.default = About;
},{}],"src/index.ts":[function(require,module,exports) {
"use strict";

var _programData = _interopRequireDefault(require("./datas/program-data.json"));

var _jobData = _interopRequireDefault(require("./datas/job-data.json"));

var _skillsData = _interopRequireDefault(require("./datas/skills-data.json"));

var _Program = _interopRequireDefault(require("./Program"));

var _Job = _interopRequireDefault(require("./Job"));

var _About = _interopRequireDefault(require("./About"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  new _Program.default(_programData.default);
  new _Job.default(_jobData.default, _skillsData.default);
  new _About.default();
});
},{"./datas/program-data.json":"src/datas/program-data.json","./datas/job-data.json":"src/datas/job-data.json","./datas/skills-data.json":"src/datas/skills-data.json","./Program":"src/Program.ts","./Job":"src/Job.ts","./About":"src/About.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64695" + '/');

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