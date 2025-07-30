(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var games = {
	t1: 1.8,
	t2: 2.2
};

var theme1 = {
	t1: 1.8,
	t2: 2
};

var arcade = {
	t1: 1.8,
	t2: 2
};

exports.games = games;
exports.theme1 = theme1;
exports.arcade = arcade;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reads = require("./reads");

function init() {
  return start(_reads.games);
}

exports.init = init;

},{"./reads":1}],3:[function(require,module,exports){
'use strict';

var _commonJsYpy_gamesJs = require('../../_common/js/ypy_games.js');

(0, _commonJsYpy_gamesJs.init)();

},{"../../_common/js/ypy_games.js":2}]},{},[3])


//# sourceMappingURL=main.js.map
