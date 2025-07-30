(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function commonInit() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });

	tl.set(".frame1", { opacity: 1 });
	tl.from(".f1_txt_1", { duration: .4, opacity: 0, y: "-=100" });
	tl.from(".f1_txt_2", { duration: .4, opacity: 0, y: "-=100" }, "-=.2");
	tl.from(".f1_txt_3", { duration: .4, opacity: 0, y: "-=100" }, "-=.2");

	return tl;
}

exports.commonInit = commonInit;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {

  var time = 1;

  var tl_olg = new TimelineMax();
  // return tl_olg

  tl_olg.to("#svg_idle", { duration: .3, ease: "custom", y: "+=100", opacity: 0 });

  tl_olg.from("#svg_move #olg_bg", { duration: .6, ease: "custom", scale: 0 }, .3);

  tl_olg.from("#svg_move .svg_logo", { duration: .4, opacity: 0, y: "+=50" }, .5);

  tl_olg.from("#svg_move .con", { stagger: .06, duration: .8, rotation: "+=300", ease: "custom", x: "-=200", y: "+=200", opacity: 0 }, .2);

  return tl_olg;
}

var banner = document.getElementById('banner');
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
  ease: "power2.out"
});

var w = bannerSize.w;
var h = bannerSize.h;
exports.olg = olg;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _proline = require("./proline");

var _common = require("./common");

function init() {

	var tl = (0, _common.commonInit)();

	tl.add("f2", "+=.5");
	var ok = ["300x250"];
	if (ok.includes(universalBanner.size)) {
		tl.from([".f2_device", ".f2_txt_1", ".f2_txt_2", ".f2_txt_3"], { duration: .5, opacity: 0 }, "f2");
		tl.to([".f1_device", ".f1_txt_1", ".f1_txt_2", ".f1_txt_3"], { duration: .5, opacity: 0 }, "f2");
	}

	tl.from(".f2_txt", { duration: .5, opacity: 0 }, "f2");

	tl.add("f3", "+=1");
	tl.to(".f2_txt", { duration: .3, opacity: 0 }, "f3");
	tl.from(".f3_txt", { duration: .3, opacity: 0 });

	tl.add("f4", "+=1");
	tl.to(".f3_txt", { duration: .3, opacity: 0 }, "f4");

	tl.from(".f4_txt", { duration: .3, opacity: 0 });
	tl.from(".f4_cta", { duration: .3, opacity: 0 });

	tl.add((0, _proline.olg)());

	return tl;
}

exports.init = init;

},{"./common":1,"./proline":2}],4:[function(require,module,exports){
'use strict';

var _commonJsYpy_gamesJs = require('../../_common/js/ypy_games.js');

(0, _commonJsYpy_gamesJs.init)();

},{"../../_common/js/ypy_games.js":3}]},{},[4])


//# sourceMappingURL=main.js.map
