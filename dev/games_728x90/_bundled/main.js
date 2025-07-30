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

var _commonJsCommonJs = require('../../_common/js/common.js');

function init() {
	var tl = new _commonJsCommonJs.commonInit();

	tl.add("f2", "+=.5");

	tl.from(".f2_txt", { duration: .5, opacity: 0 }, "f2");

	tl.add("f3", "+=1");
	tl.to(".f2_txt", { duration: .3, opacity: 0 }, "f3");
	tl.from(".f3_txt", { duration: .3, opacity: 0 });

	tl.add("f4", "+=1");
	tl.to([".f3_txt", ".f1_txt_1", ".f1_txt_2", ".f1_txt_3"], { duration: .3, opacity: 0 }, "f4");
	tl.to(".f1_device", { duration: .3, x: "+=30" });

	tl.from(".f4_txt", { duration: .3, opacity: 0 });
	tl.from(".f4_cta", { duration: .3, opacity: 0 });

	return tl;
}

init();

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
