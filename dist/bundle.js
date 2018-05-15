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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n//import '../css/main.css/';\r\nvar _1 = __webpack_require__(/*! ./model/ */ \"./src/js/model/index.ts\");\r\n// var realConsoleLog = console.log;\r\n// console.log = function (...messages: any[]) {\r\n//     document.writeln(...messages, '<br>');\r\n//     realConsoleLog(...messages);\r\n// };\r\nvar game = new _1.Game();\r\ngame.run();\r\n\n\n//# sourceURL=webpack:///./src/js/main.ts?");

/***/ }),

/***/ "./src/js/model/card.ts":
/*!******************************!*\
  !*** ./src/js/model/card.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar _1 = __webpack_require__(/*! ./ */ \"./src/js/model/index.ts\");\r\nvar Card = /** @class */ (function () {\r\n    function Card(suit, value, text, points, image) {\r\n        if (points === void 0) { points = 0; }\r\n        if (image === void 0) { image = ''; }\r\n        this.suit = suit;\r\n        this.value = value;\r\n        this.text = text;\r\n        this.points = points;\r\n        this.image = image;\r\n    }\r\n    Card.prototype.toString = function () {\r\n        return this.getUTFSuit() + \" \" + this.text + \" (\" + this.value + \", \" + this.points + \")\";\r\n    };\r\n    Card.prototype.getUTFSuit = function () {\r\n        return Card.convetToUTFSuit(this.suit);\r\n    };\r\n    Card.convetToUTFSuit = function (suit) {\r\n        switch (suit) {\r\n            case _1.Suit.clubs: return '♣';\r\n            case _1.Suit.hearts: return '♥';\r\n            case _1.Suit.spades: return '♠';\r\n            case _1.Suit.diamonds: return '♦';\r\n        }\r\n    };\r\n    return Card;\r\n}());\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/js/model/card.ts?");

/***/ }),

/***/ "./src/js/model/game-table.ts":
/*!************************************!*\
  !*** ./src/js/model/game-table.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar _1 = __webpack_require__(/*! ./ */ \"./src/js/model/index.ts\");\r\nvar GameTable = /** @class */ (function () {\r\n    function GameTable() {\r\n        this.cards = [];\r\n        this.players = [];\r\n        this.trumpSuit = _1.Suit.clubs;\r\n        this.cardsOnTable = [];\r\n        this.currentMover = new _1.Player();\r\n    }\r\n    GameTable.prototype.deal = function () {\r\n        var _this = this;\r\n        if (!this.cards.length)\r\n            return console.log('no cards left'), false;\r\n        var cardsCount = 4 - this.currentMover.cards.length;\r\n        for (var index = 0; index < cardsCount; index++) {\r\n            this.players.forEach(function (player) {\r\n                var card = _this.cards.pop();\r\n                if (card)\r\n                    player.cards.push(card);\r\n            });\r\n        }\r\n        return console.log('cards left ', this.cards.length), true;\r\n    };\r\n    GameTable.prototype.showResults = function () {\r\n        var totalPoints = 0;\r\n        this.players.forEach(function (player) {\r\n            totalPoints += player.points;\r\n            console.log(player.name + \": \" + player.points);\r\n        });\r\n        console.log('Total points: ' + totalPoints);\r\n    };\r\n    GameTable.prototype.shuffleCardDeck = function () {\r\n        _1.shuffle(this.cards);\r\n    };\r\n    GameTable.prototype.resetCardDeck = function () {\r\n        this.cards = [];\r\n        for (var value = 6; value <= 15; value++) {\r\n            if (value == 10)\r\n                continue;\r\n            var text = this.convertToCardText(value);\r\n            var points = this.convertToBuraPoints(value);\r\n            this.cards.push(new _1.Card(_1.Suit.clubs, value, text, points, _1.Card.convetToUTFSuit(_1.Suit.clubs)));\r\n            this.cards.push(new _1.Card(_1.Suit.hearts, value, text, points, _1.Card.convetToUTFSuit(_1.Suit.hearts)));\r\n            this.cards.push(new _1.Card(_1.Suit.spades, value, text, points, _1.Card.convetToUTFSuit(_1.Suit.spades)));\r\n            this.cards.push(new _1.Card(_1.Suit.diamonds, value, text, points, _1.Card.convetToUTFSuit(_1.Suit.diamonds)));\r\n        }\r\n    };\r\n    GameTable.prototype.convertToCardText = function (value) {\r\n        switch (value) {\r\n            case 11: return 'J';\r\n            case 12: return 'Q';\r\n            case 13: return 'K';\r\n            case 14: return '10';\r\n            case 15: return 'A';\r\n            default: return value.toString();\r\n        }\r\n    };\r\n    GameTable.prototype.convertToBuraPoints = function (value) {\r\n        switch (value) {\r\n            // J, Q, K\r\n            case 11: return 2;\r\n            case 12: return 3;\r\n            case 13: return 4;\r\n            // 10 and Ace\r\n            case 14: return 10;\r\n            case 15: return 11;\r\n            default: return 0;\r\n        }\r\n    };\r\n    return GameTable;\r\n}());\r\nexports.GameTable = GameTable;\r\n\n\n//# sourceURL=webpack:///./src/js/model/game-table.ts?");

/***/ }),

/***/ "./src/js/model/game.ts":
/*!******************************!*\
  !*** ./src/js/model/game.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar _1 = __webpack_require__(/*! ./ */ \"./src/js/model/index.ts\");\r\nvar Game = /** @class */ (function () {\r\n    function Game() {\r\n    }\r\n    Game.prototype.run = function () {\r\n        var _this = this;\r\n        var player1 = new _1.Player(\"Bob\");\r\n        var player2 = new _1.Player(\"John\");\r\n        var gameTable = new _1.GameTable();\r\n        gameTable.players.push(player1);\r\n        gameTable.players.push(player2);\r\n        gameTable.resetCardDeck();\r\n        gameTable.shuffleCardDeck();\r\n        while (true) {\r\n            if (!gameTable.deal()) {\r\n                gameTable.showResults();\r\n                break;\r\n            }\r\n            gameTable.currentMover = gameTable.currentMover || gameTable.players[0];\r\n            gameTable.cardsOnTable = gameTable.currentMover.move();\r\n            gameTable.players.forEach(function (player) {\r\n                if (player == gameTable.currentMover)\r\n                    return;\r\n                var repliedCards = player.beat(gameTable.cardsOnTable);\r\n                var canBeat = _this.canBeat(gameTable.cardsOnTable, repliedCards);\r\n                if (canBeat) {\r\n                    gameTable.cardsOnTable = repliedCards;\r\n                    gameTable.currentMover = player;\r\n                }\r\n            });\r\n        }\r\n    };\r\n    Game.prototype.canBeat = function (moved, repliedCards) {\r\n        return false;\r\n    };\r\n    return Game;\r\n}());\r\nexports.Game = Game;\r\n\n\n//# sourceURL=webpack:///./src/js/model/game.ts?");

/***/ }),

/***/ "./src/js/model/helpers.ts":
/*!*********************************!*\
  !*** ./src/js/model/helpers.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * Shuffles array in place. ES6 version\r\n * @param {Array} a items An array containing the items.\r\n */\r\nfunction shuffle(array) {\r\n    for (var i = array.length - 1; i > 0; i--) {\r\n        var j = Math.floor(Math.random() * (i + 1));\r\n        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];\r\n    }\r\n    return array;\r\n    var _a;\r\n}\r\nexports.shuffle = shuffle;\r\n\n\n//# sourceURL=webpack:///./src/js/model/helpers.ts?");

/***/ }),

/***/ "./src/js/model/index.ts":
/*!*******************************!*\
  !*** ./src/js/model/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./helpers */ \"./src/js/model/helpers.ts\"));\r\n__export(__webpack_require__(/*! ./suit */ \"./src/js/model/suit.ts\"));\r\n__export(__webpack_require__(/*! ./card */ \"./src/js/model/card.ts\"));\r\n__export(__webpack_require__(/*! ./player */ \"./src/js/model/player.ts\"));\r\n__export(__webpack_require__(/*! ./game */ \"./src/js/model/game.ts\"));\r\n__export(__webpack_require__(/*! ./game-table */ \"./src/js/model/game-table.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/js/model/index.ts?");

/***/ }),

/***/ "./src/js/model/player.ts":
/*!********************************!*\
  !*** ./src/js/model/player.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Player = /** @class */ (function () {\r\n    function Player(name) {\r\n        if (name === void 0) { name = \"unknown\"; }\r\n        this.name = name;\r\n        this.cards = [];\r\n        this.points = 0;\r\n    }\r\n    Player.prototype.move = function () {\r\n        console.log(this.name);\r\n        var card = this.cards.pop();\r\n        if (!card)\r\n            return [];\r\n        console.log(card.toString());\r\n        return [card];\r\n    };\r\n    Player.prototype.beat = function (cardsToBeat) {\r\n        cardsToBeat.forEach(function (card) {\r\n        });\r\n        var card = this.cards.pop();\r\n        if (!card)\r\n            return [];\r\n        console.log(card.toString());\r\n        return [card];\r\n    };\r\n    return Player;\r\n}());\r\nexports.Player = Player;\r\n\n\n//# sourceURL=webpack:///./src/js/model/player.ts?");

/***/ }),

/***/ "./src/js/model/suit.ts":
/*!******************************!*\
  !*** ./src/js/model/suit.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Suit;\r\n(function (Suit) {\r\n    Suit[Suit[\"clubs\"] = 0] = \"clubs\";\r\n    Suit[Suit[\"diamonds\"] = 1] = \"diamonds\";\r\n    Suit[Suit[\"hearts\"] = 2] = \"hearts\";\r\n    Suit[Suit[\"spades\"] = 3] = \"spades\";\r\n})(Suit = exports.Suit || (exports.Suit = {}));\r\n\n\n//# sourceURL=webpack:///./src/js/model/suit.ts?");

/***/ })

/******/ });