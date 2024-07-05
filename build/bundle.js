/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/view/gameView/gameView.css":
/*!****************************************!*\
  !*** ./src/view/gameView/gameView.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/view/garagePage/garagePage.css":
/*!********************************************!*\
  !*** ./src/view/garagePage/garagePage.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/view/winnersPage/winnersPage.css":
/*!**********************************************!*\
  !*** ./src/view/winnersPage/winnersPage.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/api/carApi/carApi.singleton.ts":
/*!********************************************!*\
  !*** ./src/api/carApi/carApi.singleton.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _carApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carApi */ "./src/api/carApi/carApi.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _carApi__WEBPACK_IMPORTED_MODULE_0__["default"]());


/***/ }),

/***/ "./src/api/carApi/carApi.ts":
/*!**********************************!*\
  !*** ./src/api/carApi/carApi.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_serverConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/serverConstants */ "./src/constants/serverConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var CarApi = /** @class */ (function () {
    function CarApi() {
        this.serverURL = _constants_serverConstants__WEBPACK_IMPORTED_MODULE_0__.SERVER_URL;
    }
    CarApi.prototype.getCars = function (page, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var response, cars;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(this.serverURL, "/garage/?_page=").concat(page, "&_limit=").concat(limit), {
                            method: 'GET',
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        cars = _a.sent();
                        return [2 /*return*/, cars];
                }
            });
        });
    };
    CarApi.prototype.getCar = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, car;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(this.serverURL, "/garage/").concat(id), {
                            method: 'GET',
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        car = _a.sent();
                        return [2 /*return*/, car];
                }
            });
        });
    };
    CarApi.prototype.getTotalCountOfCars = function () {
        return __awaiter(this, void 0, void 0, function () {
            var page, limit, response, totalCountOfCars;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        page = 0;
                        limit = 0;
                        return [4 /*yield*/, fetch("".concat(this.serverURL, "/garage/?_page=").concat(page, "&_limit=").concat(limit), {
                                method: 'GET',
                            })];
                    case 1:
                        response = _a.sent();
                        totalCountOfCars = response.headers.get('X-Total-Count');
                        return [2 /*return*/, totalCountOfCars];
                }
            });
        });
    };
    CarApi.prototype.createCar = function (carToServer) {
        return __awaiter(this, void 0, void 0, function () {
            var response, car;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(this.serverURL, "/garage"), {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(carToServer),
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        car = _a.sent();
                        return [2 /*return*/, car];
                }
            });
        });
    };
    CarApi.prototype.deleteCar = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, car;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(this.serverURL, "/garage/").concat(id), {
                            method: 'DELETE',
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        car = _a.sent();
                        return [2 /*return*/, car];
                }
            });
        });
    };
    CarApi.prototype.updateCar = function (id, carToServer) {
        return __awaiter(this, void 0, void 0, function () {
            var response, car;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(this.serverURL, "/garage/").concat(id), {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(carToServer),
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        car = _a.sent();
                        return [2 /*return*/, car];
                }
            });
        });
    };
    return CarApi;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarApi);


/***/ }),

/***/ "./src/api/engineApi/engineApi.singleton.ts":
/*!**************************************************!*\
  !*** ./src/api/engineApi/engineApi.singleton.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _engineApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engineApi */ "./src/api/engineApi/engineApi.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _engineApi__WEBPACK_IMPORTED_MODULE_0__["default"]());


/***/ }),

/***/ "./src/api/engineApi/engineApi.ts":
/*!****************************************!*\
  !*** ./src/api/engineApi/engineApi.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_serverConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/serverConstants */ "./src/constants/serverConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var EngineApi = /** @class */ (function () {
    function EngineApi() {
        this.serverURL = _constants_serverConstants__WEBPACK_IMPORTED_MODULE_0__.SERVER_URL;
    }
    EngineApi.prototype.startEngine = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var status, response, carEngine;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = 'started';
                        return [4 /*yield*/, fetch("".concat(this.serverURL, "/engine/?id=").concat(id, "&status=").concat(status), {
                                method: 'PATCH',
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        carEngine = _a.sent();
                        return [2 /*return*/, carEngine];
                }
            });
        });
    };
    EngineApi.prototype.stopEngine = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var status, response, carEngine;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = 'stopped';
                        return [4 /*yield*/, fetch("".concat(this.serverURL, "/engine/?id=").concat(id, "&status=").concat(status), {
                                method: 'PATCH',
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        carEngine = _a.sent();
                        return [2 /*return*/, carEngine];
                }
            });
        });
    };
    EngineApi.prototype.startDrive = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var status, response, carDriveStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = 'drive';
                        return [4 /*yield*/, fetch("".concat(this.serverURL, "/engine/?id=").concat(id, "&status=").concat(status), {
                                method: 'PATCH',
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        carDriveStatus = _a.sent();
                        return [2 /*return*/, carDriveStatus];
                }
            });
        });
    };
    return EngineApi;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EngineApi);


/***/ }),

/***/ "./src/api/winnersApi/winnersApi.singleton.ts":
/*!****************************************************!*\
  !*** ./src/api/winnersApi/winnersApi.singleton.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _winnersApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winnersApi */ "./src/api/winnersApi/winnersApi.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _winnersApi__WEBPACK_IMPORTED_MODULE_0__["default"]());


/***/ }),

/***/ "./src/api/winnersApi/winnersApi.ts":
/*!******************************************!*\
  !*** ./src/api/winnersApi/winnersApi.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_serverConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/serverConstants */ "./src/constants/serverConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var WinnersApi = /** @class */ (function () {
    function WinnersApi() {
        this.serverURL = _constants_serverConstants__WEBPACK_IMPORTED_MODULE_0__.SERVER_URL;
    }
    WinnersApi.prototype.getWinners = function (page, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var response, winners;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(this.serverURL, "/winners/?_page=").concat(page, "&_limit=").concat(limit), {
                            method: 'GET',
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        winners = _a.sent();
                        return [2 /*return*/, winners];
                }
            });
        });
    };
    WinnersApi.prototype.getWinner = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, winner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(this.serverURL, "/winners/").concat(id), {
                            method: 'GET',
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        winner = _a.sent();
                        return [2 /*return*/, winner];
                }
            });
        });
    };
    WinnersApi.prototype.getTotalCountOfWinners = function () {
        return __awaiter(this, void 0, void 0, function () {
            var page, limit, response, totalCountOfWinners;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        page = 0;
                        limit = 0;
                        return [4 /*yield*/, fetch("".concat(this.serverURL, "/winners/?_page=").concat(page, "&_limit=").concat(limit), {
                                method: 'GET',
                            })];
                    case 1:
                        response = _a.sent();
                        totalCountOfWinners = response.headers.get('X-Total-Count');
                        return [2 /*return*/, totalCountOfWinners];
                }
            });
        });
    };
    WinnersApi.prototype.createWinner = function (winnerToServer) {
        return __awaiter(this, void 0, void 0, function () {
            var response, winner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(this.serverURL, "/winners"), {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(winnerToServer),
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        winner = _a.sent();
                        return [2 /*return*/, winner];
                }
            });
        });
    };
    WinnersApi.prototype.deleteWinner = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, winner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(this.serverURL, "/winners/").concat(id), {
                            method: 'DELETE',
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        winner = _a.sent();
                        return [2 /*return*/, winner];
                }
            });
        });
    };
    WinnersApi.prototype.updateWinner = function (id, winnerToServer) {
        return __awaiter(this, void 0, void 0, function () {
            var response, winner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(this.serverURL, "/winners/").concat(id), {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(winnerToServer),
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        winner = _a.sent();
                        return [2 /*return*/, winner];
                }
            });
        });
    };
    return WinnersApi;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinnersApi);


/***/ }),

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/game/game */ "./src/model/game/game.ts");

var App = /** @class */ (function () {
    function App() {
        this.game = new _model_game_game__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    return App;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/constants/gameConstants.ts":
/*!****************************************!*\
  !*** ./src/constants/gameConstants.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COUNT_OF_CARS_PER_PAGE: () => (/* binding */ COUNT_OF_CARS_PER_PAGE),
/* harmony export */   COUNT_OF_GENERATED_CARS: () => (/* binding */ COUNT_OF_GENERATED_CARS),
/* harmony export */   COUNT_OF_WINNERS_PER_PAGE: () => (/* binding */ COUNT_OF_WINNERS_PER_PAGE),
/* harmony export */   MILLISECONDS: () => (/* binding */ MILLISECONDS),
/* harmony export */   PAGE_INITIALIZER: () => (/* binding */ PAGE_INITIALIZER)
/* harmony export */ });
var PAGE_INITIALIZER = 1;
var COUNT_OF_CARS_PER_PAGE = 7;
var COUNT_OF_WINNERS_PER_PAGE = 10;
var COUNT_OF_GENERATED_CARS = 100;
var MILLISECONDS = 1000;


/***/ }),

/***/ "./src/constants/garagePageConstants.ts":
/*!**********************************************!*\
  !*** ./src/constants/garagePageConstants.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAR_STRING_SVG_ELEMENT: () => (/* binding */ CAR_STRING_SVG_ELEMENT),
/* harmony export */   FLAG_STRING_SVG_ELEMENT: () => (/* binding */ FLAG_STRING_SVG_ELEMENT)
/* harmony export */ });
var FLAG_STRING_SVG_ELEMENT = "<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\"\nwidth=\"40px\" height=\"64px\" viewBox=\"0 0 804.000000 1280.000000\"\npreserveAspectRatio=\"xMidYMid meet\">\n<g transform=\"translate(0.000000,1280.000000) scale(0.100000,-0.100000)\"\nfill=\"#84d519\" stroke=\"none\">\n<path d=\"M220 12784 c-215 -78 -285 -320 -147 -506 27 -36 82 -74 143 -98 l49\n-19 -83 -1 c-79 0 -85 -2 -114 -30 -25 -26 -29 -36 -24 -63 9 -46 37 -68 90\n-74 l46 -6 0 -5993 0 -5994 135 0 135 0 0 3780 c0 2079 2 3780 4 3780 3 0 40\n-16 83 -36 320 -147 665 -242 1053 -290 197 -24 598 -29 835 -10 494 40 954\n128 1918 367 782 194 1290 287 1742 320 235 17 678 7 874 -20 391 -55 649\n-131 1069 -318 9 -4 12 441 12 2209 l0 2214 -132 58 c-607 267 -1270 350\n-2073 260 -387 -43 -841 -135 -1685 -343 -746 -183 -1166 -264 -1625 -313\n-187 -20 -796 -17 -959 5 -377 51 -706 143 -1011 281 l-96 43 47 6 c53 6 81\n28 90 74 5 27 1 37 -24 63 -29 29 -34 30 -114 30 l-83 0 59 25 c85 35 132 80\n174 165 23 46 27 68 27 135 -1 71 -4 87 -34 143 -38 70 -70 101 -144 138 -65\n34 -172 41 -237 18z\"/>\n</g>\n</svg>\n";
var CAR_STRING_SVG_ELEMENT = "<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\"\nwidth=\"78px\" viewBox=\"0 0 1280.000000 640.000000\"\npreserveAspectRatio=\"xMidYMid meet\">\n<g transform=\"translate(0.000000,640.000000) scale(0.100000,-0.100000)\" stroke=\"none\">\n<path d=\"M3605 5335 c-5 -1 -38 -10 -71 -20 l-62 -17 -7 -79 c-5 -66 -10 -82\n-28 -94 -30 -19 -173 -75 -547 -215 -482 -180 -1078 -425 -1215 -500 -148 -81\n-230 -105 -410 -120 -71 -6 -173 -19 -225 -30 -143 -28 -342 -49 -558 -56\nl-193 -7 -28 -36 c-56 -71 -74 -123 -47 -138 18 -11 36 -47 36 -74 0 -12 -12\n-52 -27 -88 -26 -63 -28 -76 -31 -259 l-4 -192 -33 -26 c-68 -51 -103 -126\n-135 -284 -24 -113 -25 -187 -5 -298 10 -54 12 -96 6 -120 -5 -26 -2 -72 13\n-153 l21 -116 63 -52 c55 -46 87 -84 168 -200 49 -69 293 -133 674 -176 146\n-16 517 -42 670 -47 l95 -3 -3 125 c-13 525 321 967 833 1101 79 21 112 24\n265 23 155 0 186 -3 271 -26 395 -106 686 -404 790 -807 35 -134 36 -369 3\n-565 l-7 -38 2989 7 c1644 4 2992 9 2995 11 3 2 -3 36 -14 76 -17 60 -20 104\n-21 253 0 164 2 189 26 277 105 386 401 682 786 786 88 23 114 26 277 26 151\n0 192 -4 255 -21 208 -58 351 -137 494 -274 192 -183 303 -402 337 -664 13\n-101 6 -257 -15 -350 -8 -33 -12 -63 -10 -67 3 -5 29 -6 57 -3 29 3 115 10\n192 16 204 16 345 42 399 73 46 27 95 88 122 152 13 32 13 53 -1 195 -14 143\n-14 168 0 247 22 127 45 323 52 432 6 111 -22 282 -59 359 -93 195 -453 342\n-1267 516 -817 174 -1442 244 -2181 245 -254 0 -256 1 -373 83 -191 135 -1154\n667 -1517 839 -344 163 -740 255 -1320 305 -166 14 -308 18 -755 17 -539 0\n-624 -3 -1262 -46 l-182 -12 -78 46 c-105 60 -155 76 -198 63z m1846 -295 c4\n-19 42 -249 83 -510 42 -261 78 -491 82 -511 4 -26 2 -37 -7 -41 -20 -6 -1356\n18 -1694 32 -400 16 -647 38 -763 69 -74 20 -179 118 -229 214 -25 46 -28 63\n-28 147 0 136 18 180 99 232 239 154 665 274 1216 342 368 45 677 64 1015 62\nl219 -1 7 -35z m863 -5 c353 -51 697 -124 874 -186 111 -39 387 -181 567 -292\n203 -124 370 -240 370 -255 0 -7 -24 -21 -53 -31 -112 -38 -134 -88 -119 -266\nl2 -30 -901 -3 c-714 -2 -904 1 -911 10 -39 49 -353 998 -353 1066 l0 25 176\n-7 c97 -4 254 -18 348 -31z\"/>\n<path fill=\"#000\" d=\"M2670 3124 c-480 -87 -818 -429 -880 -892 -51 -372 117 -758 426\n-978 79 -56 227 -127 323 -153 556 -153 1134 181 1278 738 127 497 -131 1017\n-602 1213 -129 53 -217 71 -375 74 -80 1 -156 0 -170 -2z m365 -304 c335 -105\n552 -417 532 -765 -25 -433 -413 -760 -837 -706 -172 22 -322 94 -441 211\n-208 205 -280 499 -189 772 40 118 87 195 173 285 109 113 235 185 382 219 90\n21 291 12 380 -16z\"/>\n<path fill=\"#000\" d=\"M2615 2694 c-66 -24 -145 -67 -145 -78 0 -19 207 -219 219 -212 7 5\n11 58 11 157 0 148 0 149 -22 148 -13 0 -41 -7 -63 -15z\"/>\n<path fill=\"#000\" d=\"M2930 2561 c0 -99 4 -152 11 -157 12 -7 219 193 219 212 0 20 -167\n94 -211 94 -18 0 -19 -10 -19 -149z\"/>\n<path fill=\"#000\" d=\"M3225 2340 c-89 -89 -107 -112 -95 -120 8 -6 77 -9 155 -7 l140 2 -3\n35 c-2 29 -74 200 -84 200 -2 0 -53 -50 -113 -110z\"/>\n<path fill=\"#000\" d=\"M2252 2373 c-47 -105 -57 -144 -41 -154 19 -12 270 -11 289 1 12 8\n-5 30 -90 115 -57 58 -110 105 -116 105 -6 0 -25 -30 -42 -67z\"/>\n<path fill=\"#000\" d=\"M2790 2316 c0 -13 6 -26 13 -29 22 -7 37 4 37 29 0 19 -5 24 -25 24\n-20 0 -25 -5 -25 -24z\"/>\n<path fill=\"#000\" d=\"M2755 2155 c-35 -34 -33 -78 4 -116 38 -38 74 -38 112 0 56 57 23\n141 -56 141 -25 0 -44 -8 -60 -25z\"/>\n<path fill=\"#000\" d=\"M2582 2121 c-21 -13 -10 -46 16 -49 27 -4 40 22 22 43 -14 17 -20 18\n-38 6z\"/>\n<path fill=\"#000\" d=\"M3010 2115 c-18 -21 -5 -47 22 -43 26 3 37 36 16 49 -18 12 -24 11\n-38 -6z\"/>\n<path fill=\"#000\" d=\"M2205 1948 c11 -49 53 -150 75 -178 l19 -25 106 105 c58 57 105 110\n105 117 0 10 -37 13 -156 13 l-156 0 7 -32z\"/>\n<path fill=\"#000\" d=\"M3120 1967 c0 -20 206 -220 219 -213 22 14 91 174 91 213 0 10 -32\n13 -155 13 -118 0 -155 -3 -155 -13z\"/>\n<path fill=\"#000\" d=\"M2794 1896 c-9 -24 4 -48 23 -44 12 2 18 12 18 28 0 29 -32 41 -41\n16z\"/>\n<path fill=\"#000\" d=\"M2572 1687 c-56 -56 -102 -106 -102 -110 0 -19 210 -104 224 -90 3 4\n6 73 6 155 0 113 -3 148 -13 148 -7 0 -58 -46 -115 -103z\"/>\n<path fill=\"#000\" d=\"M2930 1641 c0 -83 4 -152 9 -155 20 -12 221 72 221 92 0 13 -205 212\n-217 212 -10 0 -13 -35 -13 -149z\"/>\n<path fill=\"#000\" d=\"M10765 3123 c-228 -35 -436 -143 -593 -307 -186 -194 -277 -405 -289\n-668 -9 -201 25 -360 115 -531 194 -371 607 -594 1015 -548 245 27 437 116\n610 280 98 94 158 173 212 281 84 169 110 284 109 480 -2 174 -28 291 -98 435\n-108 222 -273 383 -500 491 -140 66 -234 86 -406 90 -80 1 -158 0 -175 -3z\nm380 -307 c119 -40 208 -97 305 -195 147 -148 214 -311 214 -521 0 -123 -11\n-186 -54 -290 -76 -190 -242 -348 -438 -420 -364 -133 -765 29 -932 375 -65\n134 -84 226 -77 369 8 170 50 287 153 422 109 144 256 238 439 280 40 9 102\n13 185 10 103 -3 139 -8 205 -30z\"/>\n<path fill=\"#000\" d=\"M10702 2690 c-67 -24 -132 -61 -132 -75 0 -18 207 -218 219 -211 7 5\n11 58 11 157 0 171 5 165 -98 129z\"/>\n<path fill=\"#000\" d=\"M11030 2556 c0 -119 3 -156 13 -156 7 0 59 47 116 104 85 85 102 107\n93 119 -16 19 -139 74 -184 82 l-38 7 0 -156z\"/>\n<path fill=\"#000\" d=\"M10367 2409 c-34 -60 -71 -165 -64 -184 5 -12 29 -15 144 -15 76 0\n145 5 153 10 12 8 -7 31 -96 121 l-112 112 -25 -44z\"/>\n<path fill=\"#000\" d=\"M11320 2335 c-85 -85 -102 -107 -90 -115 18 -12 270 -13 288 -2 23\n15 -51 208 -83 219 -6 2 -57 -44 -115 -102z\"/>\n<path fill=\"#000\" d=\"M10886 2323 c-5 -11 -1 -22 9 -30 23 -16 47 -5 43 21 -4 27 -43 34\n-52 9z\"/>\n<path fill=\"#000\" d=\"M10855 2155 c-47 -46 -24 -125 42 -141 53 -14 113 46 99 99 -16 67\n-94 90 -141 42z\"/>\n<path fill=\"#000\" d=\"M10682 2121 c-20 -12 -10 -46 14 -49 25 -4 40 24 23 44 -13 16 -19\n17 -37 5z\"/>\n<path fill=\"#000\" d=\"M11110 2115 c-17 -20 -5 -45 20 -45 11 0 23 7 26 15 6 15 -11 45 -26\n45 -4 0 -13 -7 -20 -15z\"/>\n<path fill=\"#000\" d=\"M10305 1943 c8 -46 68 -177 85 -188 14 -8 220 191 220 212 0 10 -37\n13 -156 13 l-156 0 7 -37z\"/>\n<path fill=\"#000\" d=\"M11220 1967 c0 -12 199 -217 212 -217 15 0 80 137 93 198 l7 32 -156\n0 c-119 0 -156 -3 -156 -13z\"/>\n<path fill=\"#000\" d=\"M10890 1895 c-11 -13 -11 -19 3 -32 21 -21 49 -9 45 19 -4 28 -30 35\n-48 13z\"/>\n<path fill=\"#000\" d=\"M10672 1687 c-56 -56 -102 -105 -102 -109 0 -22 200 -105 221 -92 5\n3 9 72 9 155 0 114 -3 149 -13 149 -7 0 -58 -46 -115 -103z\"/>\n<path fill=\"#000\" d=\"M11030 1635 c0 -85 1 -155 3 -155 36 0 227 82 227 97 0 13 -204 213\n-217 213 -10 0 -13 -37 -13 -155z\"/>\n</g>\n</svg>\n";


/***/ }),

/***/ "./src/constants/serverConstants.ts":
/*!******************************************!*\
  !*** ./src/constants/serverConstants.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SERVER_URL: () => (/* binding */ SERVER_URL)
/* harmony export */ });
var SERVER_URL = 'http://127.0.0.1:3000';


/***/ }),

/***/ "./src/eventBus/eventBus.singleton.ts":
/*!********************************************!*\
  !*** ./src/eventBus/eventBus.singleton.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventBus */ "./src/eventBus/eventBus.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _eventBus__WEBPACK_IMPORTED_MODULE_0__["default"]());


/***/ }),

/***/ "./src/eventBus/eventBus.ts":
/*!**********************************!*\
  !*** ./src/eventBus/eventBus.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var EventBus = /** @class */ (function () {
    function EventBus() {
        this.subscribers = {};
    }
    EventBus.prototype.dispatch = function (event, arg) {
        var subscriber = this.subscribers[event];
        if (subscriber === undefined) {
            return;
        }
        Object.keys(subscriber).forEach(function (key) {
            subscriber[key](arg);
        });
    };
    EventBus.prototype.register = function (event, callback) {
        var _this = this;
        var id = this.getNextId();
        if (!this.subscribers[event])
            this.subscribers[event] = {};
        this.subscribers[event][id] = callback;
        return {
            unregister: function () {
                delete _this.subscribers[event][id];
                if (Object.keys(_this.subscribers[event]).length === 0) {
                    delete _this.subscribers[event];
                }
            },
        };
    };
    EventBus.prototype.getNextId = function () {
        EventBus.nextId += 1;
        return EventBus.nextId;
    };
    EventBus.nextId = 0;
    return EventBus;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventBus);


/***/ }),

/***/ "./src/model/car/car.ts":
/*!******************************!*\
  !*** ./src/model/car/car.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_engineApi_engineApi_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/engineApi/engineApi.singleton */ "./src/api/engineApi/engineApi.singleton.ts");
/* harmony import */ var _constants_gameConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/gameConstants */ "./src/constants/gameConstants.ts");
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/* eslint-disable no-param-reassign */



var Car = /** @class */ (function () {
    function Car(car) {
        this.car = car;
        this.isRace = false;
    }
    Car.prototype.startEngine = function (car, isRace) {
        return __awaiter(this, void 0, void 0, function () {
            var carEngine, animationDuration;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!car)
                            return [2 /*return*/];
                        this.isRace = isRace;
                        return [4 /*yield*/, _api_engineApi_engineApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].startEngine(this.car.id)];
                    case 1:
                        carEngine = _a.sent();
                        animationDuration = carEngine.distance / carEngine.velocity;
                        this.startCarAnimation(animationDuration, car);
                        return [2 /*return*/];
                }
            });
        });
    };
    Car.prototype.startCarAnimation = function (animationDuration, car) {
        return __awaiter(this, void 0, void 0, function () {
            var isCarFinished, isBrokeEngine, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isCarFinished = false;
                        isBrokeEngine = false;
                        car.classList.add('car-drive');
                        car.style.animationDuration = "".concat(animationDuration / _constants_gameConstants__WEBPACK_IMPORTED_MODULE_1__.MILLISECONDS, "s");
                        car.addEventListener('animationend', function () {
                            isCarFinished = true;
                            _this.stopCarAnimation(car, isBrokeEngine, isCarFinished);
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _api_engineApi_engineApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].startDrive(this.car.id)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        // eslint-disable-next-line no-console
                        console.error("The ".concat(this.car.name, " engine broke down"));
                        isBrokeEngine = true;
                        this.stopCarAnimation(car, isBrokeEngine, isCarFinished);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Car.prototype.stopCarAnimation = function (car, isBrokeEngine, isCarFinished) {
        return __awaiter(this, void 0, void 0, function () {
            var winRaceCar;
            return __generator(this, function (_a) {
                if (isCarFinished && this.isRace) {
                    winRaceCar = {
                        id: this.car.id,
                        name: this.car.name,
                        time: parseFloat(parseFloat(car.style.animationDuration).toFixed(2)),
                    };
                    _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventCarWinInRace" /* EventBusEvents.EVENT_CAR_WIN_IN_RACE */, winRaceCar);
                }
                if (isBrokeEngine) {
                    this.stopAnimation(car);
                }
                return [2 /*return*/];
            });
        });
    };
    Car.prototype.stopAnimation = function (car) {
        car.style.animationPlayState = 'paused';
    };
    Car.prototype.stopEngine = function (car) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _api_engineApi_engineApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].stopEngine(this.car.id)];
                    case 1:
                        _a.sent();
                        this.removeAnimation(car);
                        this.resetAnimation(car);
                        return [2 /*return*/];
                }
            });
        });
    };
    Car.prototype.removeAnimation = function (car) {
        car.classList.remove('car-drive');
    };
    Car.prototype.resetAnimation = function (car) {
        car.style.animationPlayState = '';
        car.style.animationDuration = '';
    };
    return Car;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);


/***/ }),

/***/ "./src/model/game/game.ts":
/*!********************************!*\
  !*** ./src/model/game/game.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_gameView_gameView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view/gameView/gameView */ "./src/view/gameView/gameView.ts");
/* harmony import */ var _garage_garage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../garage/garage */ "./src/model/garage/garage.ts");
/* harmony import */ var _winners_winners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../winners/winners */ "./src/model/winners/winners.ts");



var Game = /** @class */ (function () {
    function Game() {
        this.garage = new _garage_garage__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.winners = new _winners_winners__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.gameView = new _view_gameView_gameView__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    return Game;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/model/garage/garage.ts":
/*!************************************!*\
  !*** ./src/model/garage/garage.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/carApi/carApi.singleton */ "./src/api/carApi/carApi.singleton.ts");
/* harmony import */ var _constants_gameConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/gameConstants */ "./src/constants/gameConstants.ts");
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
/* harmony import */ var _utilities_getGeneratedCarName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/getGeneratedCarName */ "./src/utilities/getGeneratedCarName.ts");
/* harmony import */ var _utilities_getGeneratedColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/getGeneratedColor */ "./src/utilities/getGeneratedColor.ts");
/* harmony import */ var _race_race__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../race/race */ "./src/model/race/race.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var Garage = /** @class */ (function () {
    function Garage() {
        this.page = _constants_gameConstants__WEBPACK_IMPORTED_MODULE_1__.PAGE_INITIALIZER;
        this.race = new _race_race__WEBPACK_IMPORTED_MODULE_5__["default"](this.page);
        this.subscribeCreateCarEvent();
        this.subscribeDeleteCarEvent();
        this.subscribeUpdateCarEvent();
        this.subscribeChangeGaragePageEvent();
        this.subscribeGenerateCarsEvent();
    }
    Garage.prototype.subscribeCreateCarEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register("EventCreateCar" /* EventBusEvents.EVENT_CREATE_CAR */, function (newCarData) { return __awaiter(_this, void 0, void 0, function () {
            var cars, newCar;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].getCars(this.page, _constants_gameConstants__WEBPACK_IMPORTED_MODULE_1__.COUNT_OF_CARS_PER_PAGE)];
                    case 1:
                        cars = _a.sent();
                        return [4 /*yield*/, _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].createCar({ name: newCarData[0], color: newCarData[1] })];
                    case 2:
                        newCar = _a.sent();
                        this.race.getCars(this.page);
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventUpdateGarageTitle" /* EventBusEvents.EVENT_UPDATE_GARAGE_TITLE */, this.page);
                        if (cars.length !== _constants_gameConstants__WEBPACK_IMPORTED_MODULE_1__.COUNT_OF_CARS_PER_PAGE) {
                            _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventAddCarRoad" /* EventBusEvents.EVENT_ADD_CAR_ROAD */, newCar);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Garage.prototype.subscribeDeleteCarEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register("EventDeleteCar" /* EventBusEvents.EVENT_DELETE_CAR */, function (carId) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].deleteCar(carId)];
                    case 1:
                        _a.sent();
                        this.race.getCars(this.page);
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventDeleteCarRoad" /* EventBusEvents.EVENT_DELETE_CAR_ROAD */, carId);
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventUpdateCarRoads" /* EventBusEvents.EVENT_UPDATE_CAR_ROADS */, this.page);
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventUpdateGarageTitle" /* EventBusEvents.EVENT_UPDATE_GARAGE_TITLE */, this.page);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Garage.prototype.subscribeUpdateCarEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register("EventUpdateCar" /* EventBusEvents.EVENT_UPDATE_CAR */, function (car) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].updateCar(car.id, { name: car.name, color: car.color })];
                    case 1:
                        _a.sent();
                        this.race.getCars(this.page);
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventUpdateCarRoad" /* EventBusEvents.EVENT_UPDATE_CAR_ROAD */, car.id);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Garage.prototype.subscribeChangeGaragePageEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register("EventChangeGaragePage" /* EventBusEvents.EVENT_CHANGE_GARAGE_PAGE */, function (page) {
            _this.page = page;
            _this.race.getCars(_this.page);
        });
    };
    Garage.prototype.subscribeGenerateCarsEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register("EventGenerateCars" /* EventBusEvents.EVENT_GENERATE_CARS */, function () { return __awaiter(_this, void 0, void 0, function () {
            var carsData, createCarPromises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        carsData = Array.from({ length: _constants_gameConstants__WEBPACK_IMPORTED_MODULE_1__.COUNT_OF_GENERATED_CARS }, function () { return ({
                            name: (0,_utilities_getGeneratedCarName__WEBPACK_IMPORTED_MODULE_3__.getGeneratedCarName)(),
                            color: (0,_utilities_getGeneratedColor__WEBPACK_IMPORTED_MODULE_4__.getGeneratedColor)(),
                        }); });
                        createCarPromises = carsData.map(function (carData) { return _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].createCar(carData); });
                        return [4 /*yield*/, Promise.all(createCarPromises)];
                    case 1:
                        _a.sent();
                        this.race.getCars(this.page);
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventUpdateCarRoads" /* EventBusEvents.EVENT_UPDATE_CAR_ROADS */, this.page);
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventUpdateGarageTitle" /* EventBusEvents.EVENT_UPDATE_GARAGE_TITLE */, this.page);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return Garage;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Garage);


/***/ }),

/***/ "./src/model/race/race.ts":
/*!********************************!*\
  !*** ./src/model/race/race.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/carApi/carApi.singleton */ "./src/api/carApi/carApi.singleton.ts");
/* harmony import */ var _constants_gameConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/gameConstants */ "./src/constants/gameConstants.ts");
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
/* harmony import */ var _car_car__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../car/car */ "./src/model/car/car.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var Race = /** @class */ (function () {
    function Race(page) {
        this.cars = [];
        this.isRace = false;
        this.isWinnerShown = false;
        this.page = page;
        this.getCars(this.page);
        this.subscribeStartEngineEvent();
        this.subscribeStopEngineEvent();
        this.subscribeStartRaceEvent();
        this.subscribeStopRaceEvent();
        this.subscribeCarWinInRaceEvent();
    }
    Race.prototype.getCars = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var cars;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.cars = [];
                        return [4 /*yield*/, _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].getCars(page, _constants_gameConstants__WEBPACK_IMPORTED_MODULE_1__.COUNT_OF_CARS_PER_PAGE)];
                    case 1:
                        cars = _a.sent();
                        cars.forEach(function (car) {
                            _this.cars.push(new _car_car__WEBPACK_IMPORTED_MODULE_3__["default"](car));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Race.prototype.subscribeStartEngineEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register("EventStartEngine" /* EventBusEvents.EVENT_START_ENGINE */, function (carId) {
            var carElement = document.querySelector(".car-".concat(carId));
            var car = _this.cars.find(function (elem) { return carId === elem.car.id; });
            if (!car)
                return;
            car.startEngine(carElement, _this.isRace);
        });
    };
    Race.prototype.subscribeStopEngineEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register("EventStopEngine" /* EventBusEvents.EVENT_STOP_ENGINE */, function (carId) {
            var carElement = document.querySelector(".car-".concat(carId));
            var car = _this.cars.find(function (elem) { return carId === elem.car.id; });
            if (!car)
                return;
            car.stopEngine(carElement);
        });
    };
    Race.prototype.subscribeStartRaceEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register("EventStartRace" /* EventBusEvents.EVENT_START_RACE */, function () {
            _this.isRace = true;
            _this.isWinnerShown = false;
            _this.cars.forEach(function (car) {
                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventStartEngine" /* EventBusEvents.EVENT_START_ENGINE */, car.car.id);
            });
        });
    };
    Race.prototype.subscribeStopRaceEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register("EventStopRace" /* EventBusEvents.EVENT_STOP_RACE */, function () {
            _this.isRace = false;
            _this.cars.forEach(function (car) {
                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventStopEngine" /* EventBusEvents.EVENT_STOP_ENGINE */, car.car.id);
            });
        });
    };
    Race.prototype.subscribeCarWinInRaceEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register("EventCarWinInRace" /* EventBusEvents.EVENT_CAR_WIN_IN_RACE */, function (winRaceCar) {
            if (!_this.isWinnerShown) {
                _this.isWinnerShown = true;
                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventAddNewWinner" /* EventBusEvents.EVENT_ADD_NEW_WINNER */, winRaceCar);
                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventShowWinner" /* EventBusEvents.EVENT_SHOW_WINNER */, winRaceCar);
            }
        });
    };
    return Race;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Race);


/***/ }),

/***/ "./src/model/winners/winners.ts":
/*!**************************************!*\
  !*** ./src/model/winners/winners.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_winnersApi_winnersApi_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/winnersApi/winnersApi.singleton */ "./src/api/winnersApi/winnersApi.singleton.ts");
/* harmony import */ var _constants_gameConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/gameConstants */ "./src/constants/gameConstants.ts");
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var Winners = /** @class */ (function () {
    function Winners() {
        this.winners = [];
        this.countOfWins = 1;
        this.page = _constants_gameConstants__WEBPACK_IMPORTED_MODULE_1__.PAGE_INITIALIZER;
        this.getWinners();
        this.subscribeAddNewWinnerEvent();
        this.subscribeDeleteCarEvent();
        this.subscribeChangeWinnersPageEvent();
    }
    Winners.prototype.getWinners = function () {
        return __awaiter(this, void 0, void 0, function () {
            var winners;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.winners = [];
                        return [4 /*yield*/, _api_winnersApi_winnersApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].getWinners(this.page, _constants_gameConstants__WEBPACK_IMPORTED_MODULE_1__.COUNT_OF_WINNERS_PER_PAGE)];
                    case 1:
                        winners = _a.sent();
                        winners.forEach(function (winner) {
                            _this.winners.push(winner);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Winners.prototype.findWinnerById = function (id) {
        return this.winners.find(function (winner) { return winner.id === id; });
    };
    Winners.prototype.subscribeAddNewWinnerEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register("EventAddNewWinner" /* EventBusEvents.EVENT_ADD_NEW_WINNER */, function (winRaceCar) { return __awaiter(_this, void 0, void 0, function () {
            var winner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        winner = this.findWinnerById(winRaceCar.id);
                        if (!winner) return [3 /*break*/, 2];
                        if (winRaceCar.time < winner.time) {
                            winner.time = winRaceCar.time;
                        }
                        return [4 /*yield*/, _api_winnersApi_winnersApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].updateWinner(winRaceCar.id, {
                                wins: (winner.wins += 1),
                                time: winner.time,
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, _api_winnersApi_winnersApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].createWinner({
                            id: winRaceCar.id,
                            wins: this.countOfWins,
                            time: winRaceCar.time,
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.getWinners();
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventUpdateWinnersTable" /* EventBusEvents.EVENT_UPDATE_WINNERS_TABLE */, this.page);
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventUpdateWinnersTitle" /* EventBusEvents.EVENT_UPDATE_WINNERS_TITLE */, this.page);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Winners.prototype.subscribeDeleteCarEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register("EventDeleteCar" /* EventBusEvents.EVENT_DELETE_CAR */, function (carId) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _api_winnersApi_winnersApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].deleteWinner(carId)];
                    case 1:
                        _a.sent();
                        this.getWinners();
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventUpdateWinnersTable" /* EventBusEvents.EVENT_UPDATE_WINNERS_TABLE */, this.page);
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventUpdateWinnersTitle" /* EventBusEvents.EVENT_UPDATE_WINNERS_TITLE */, this.page);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Winners.prototype.subscribeChangeWinnersPageEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register("EventChangeWinnersPage" /* EventBusEvents.EVENT_CHANGE_WINNERS_PAGE */, function (page) {
            _this.page = page;
            _this.getWinners();
        });
    };
    return Winners;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Winners);


/***/ }),

/***/ "./src/utilities/changeSvgColor.ts":
/*!*****************************************!*\
  !*** ./src/utilities/changeSvgColor.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeSvgColor: () => (/* binding */ changeSvgColor)
/* harmony export */ });
function changeSvgColor(svgString, newColor) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = svgString;
    var svgElement = tempDiv.firstChild;
    var paths = svgElement.querySelectorAll('path');
    paths.forEach(function (path) {
        if (!path.getAttribute('fill')) {
            path.setAttribute('fill', newColor);
        }
    });
    return svgElement.outerHTML;
}


/***/ }),

/***/ "./src/utilities/createElement.ts":
/*!****************************************!*\
  !*** ./src/utilities/createElement.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateElement: () => (/* binding */ CreateElement),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CreateElement = /** @class */ (function () {
    function CreateElement(tag, attributes, innerHTML) {
        this.tag = tag;
        this.attributes = attributes;
        this.innerHTML = innerHTML;
    }
    CreateElement.prototype.createElement = function () {
        var _a, _b;
        var element = document.createElement(this.tag);
        if ((_a = this.attributes) === null || _a === void 0 ? void 0 : _a.className) {
            element.className = this.attributes.className;
        }
        if ((_b = this.attributes) === null || _b === void 0 ? void 0 : _b.id) {
            element.id = this.attributes.id;
        }
        if (this.innerHTML) {
            element.innerHTML = this.innerHTML;
        }
        return element;
    };
    return CreateElement;
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateElement);


/***/ }),

/***/ "./src/utilities/domUtils.ts":
/*!***********************************!*\
  !*** ./src/utilities/domUtils.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCarRoad: () => (/* binding */ getCarRoad),
/* harmony export */   getCarRoadContainer: () => (/* binding */ getCarRoadContainer),
/* harmony export */   getGarageContainer: () => (/* binding */ getGarageContainer),
/* harmony export */   getMain: () => (/* binding */ getMain),
/* harmony export */   getWinnersContainer: () => (/* binding */ getWinnersContainer),
/* harmony export */   getWinnersTable: () => (/* binding */ getWinnersTable)
/* harmony export */ });
function getMain() {
    return document.querySelector('.main');
}
function getCarRoadContainer() {
    return document.querySelector('.car-road-container');
}
function getGarageContainer() {
    return document.querySelector('.garage-container');
}
function getWinnersContainer() {
    return document.querySelector('.winners-container');
}
function getWinnersTable() {
    return document.querySelector('.winners-table');
}
function getCarRoad(numberOfCarRoad) {
    return document.querySelector(".car-box-".concat(numberOfCarRoad));
}


/***/ }),

/***/ "./src/utilities/getGeneratedCarName.ts":
/*!**********************************************!*\
  !*** ./src/utilities/getGeneratedCarName.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGeneratedCarName: () => (/* binding */ getGeneratedCarName)
/* harmony export */ });
/* harmony import */ var _assets_carModels_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/carModels.json */ "./src/assets/carModels.json");
/* harmony import */ var _assets_carBrands_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/carBrands.json */ "./src/assets/carBrands.json");


function getGeneratedCarName() {
    var models = _assets_carModels_json__WEBPACK_IMPORTED_MODULE_0__;
    var brands = { brands: _assets_carBrands_json__WEBPACK_IMPORTED_MODULE_1__ };
    var randomBrand = brands.brands[Math.floor(Math.random() * brands.brands.length)];
    var randomModel = models[randomBrand][Math.floor(Math.random() * models[randomBrand].length)];
    return "".concat(randomBrand, " ").concat(randomModel);
}


/***/ }),

/***/ "./src/utilities/getGeneratedColor.ts":
/*!********************************************!*\
  !*** ./src/utilities/getGeneratedColor.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGeneratedColor: () => (/* binding */ getGeneratedColor)
/* harmony export */ });
var RANDOM_MAX = 256;
function getGeneratedColor() {
    var r = Math.floor(Math.random() * RANDOM_MAX)
        .toString(16)
        .padStart(2, '0');
    var g = Math.floor(Math.random() * RANDOM_MAX)
        .toString(16)
        .padStart(2, '0');
    var b = Math.floor(Math.random() * RANDOM_MAX)
        .toString(16)
        .padStart(2, '0');
    return "#".concat(r).concat(g).concat(b);
}


/***/ }),

/***/ "./src/utilities/getMaxPageNumber.ts":
/*!*******************************************!*\
  !*** ./src/utilities/getMaxPageNumber.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMaxPageNumber: () => (/* binding */ getMaxPageNumber)
/* harmony export */ });
function getMaxPageNumber(itemsAmount, countOfItemsPerPage) {
    var maxPageNumber = Math.ceil(itemsAmount / countOfItemsPerPage);
    return maxPageNumber;
}


/***/ }),

/***/ "./src/view/gameView/gameView.ts":
/*!***************************************!*\
  !*** ./src/view/gameView/gameView.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _utilities_domUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/domUtils */ "./src/utilities/domUtils.ts");
/* harmony import */ var _garagePage_garagePageView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../garagePage/garagePageView */ "./src/view/garagePage/garagePageView.ts");
/* harmony import */ var _winnersPage_winnersPageView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../winnersPage/winnersPageView */ "./src/view/winnersPage/winnersPageView.ts");
/* harmony import */ var _constants_gameConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/gameConstants */ "./src/constants/gameConstants.ts");
/* harmony import */ var _gameView_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameView.css */ "./src/view/gameView/gameView.css");






var GameView = /** @class */ (function () {
    function GameView() {
        var main = this.renderMain();
        document.body.append(main);
        this.garagePageView = new _garagePage_garagePageView__WEBPACK_IMPORTED_MODULE_2__["default"](_constants_gameConstants__WEBPACK_IMPORTED_MODULE_4__.PAGE_INITIALIZER);
        this.winnersPageView = new _winnersPage_winnersPageView__WEBPACK_IMPORTED_MODULE_3__["default"](_constants_gameConstants__WEBPACK_IMPORTED_MODULE_4__.PAGE_INITIALIZER);
        var header = this.renderHeader();
        document.body.prepend(header);
    }
    GameView.prototype.renderHeader = function () {
        var _this = this;
        var header = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('header', { className: 'header' }).createElement();
        var navigationContainer = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
            className: 'navigation-container',
        }).createElement();
        var toGarageButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('button', { className: 'garage-btn' }, 'Garage').createElement();
        var toWinnersButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('button', { className: 'winners-btn' }, 'Winners').createElement();
        toGarageButton.addEventListener('click', function () {
            _this.showGarage();
        });
        toWinnersButton.addEventListener('click', function () {
            _this.showWinners();
        });
        navigationContainer.append(toGarageButton);
        navigationContainer.append(toWinnersButton);
        header.append(navigationContainer);
        return header;
    };
    GameView.prototype.renderMain = function () {
        var main = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('main', { className: 'main' }).createElement();
        return main;
    };
    GameView.prototype.showGarage = function () {
        var winnersContainer = (0,_utilities_domUtils__WEBPACK_IMPORTED_MODULE_1__.getWinnersContainer)();
        var garageContainer = (0,_utilities_domUtils__WEBPACK_IMPORTED_MODULE_1__.getGarageContainer)();
        winnersContainer.classList.add('hide');
        garageContainer.classList.remove('hide');
    };
    GameView.prototype.showWinners = function () {
        var winnersContainer = (0,_utilities_domUtils__WEBPACK_IMPORTED_MODULE_1__.getWinnersContainer)();
        var garageContainer = (0,_utilities_domUtils__WEBPACK_IMPORTED_MODULE_1__.getGarageContainer)();
        winnersContainer.classList.remove('hide');
        garageContainer.classList.add('hide');
    };
    return GameView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);


/***/ }),

/***/ "./src/view/garagePage/garageBox/carRoads/carRoad/carRoadView.ts":
/*!***********************************************************************!*\
  !*** ./src/view/garagePage/garageBox/carRoads/carRoad/carRoadView.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_garagePageConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../constants/garagePageConstants */ "./src/constants/garagePageConstants.ts");
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _utilities_domUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utilities/domUtils */ "./src/utilities/domUtils.ts");
/* harmony import */ var _car_carView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./car/carView */ "./src/view/garagePage/garageBox/carRoads/carRoad/car/carView.ts");





var CarRoadView = /** @class */ (function () {
    function CarRoadView(car) {
        this.car = car;
        this.carView = new _car_carView__WEBPACK_IMPORTED_MODULE_4__["default"](car);
        this.renderCarRoadContainer();
    }
    CarRoadView.prototype.renderCarRoadContainer = function () {
        var carRoadContainer = (0,_utilities_domUtils__WEBPACK_IMPORTED_MODULE_3__.getCarRoadContainer)();
        var carBox = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('div', {
            className: "car-box car-box-".concat(this.car.id),
        }).createElement();
        var selectRemoveButtons = this.renderSelectAndRemoveButtons();
        var startEndButtons = this.renderStartAndEndButtons();
        var carRoad = this.renderRoad();
        var carModel = this.carView.renderCarModel();
        carBox.append(selectRemoveButtons);
        carBox.append(startEndButtons);
        carBox.append(carModel);
        carBox.append(carRoad);
        carRoadContainer.append(carBox);
    };
    CarRoadView.prototype.renderRoad = function () {
        var carRoad = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('div', { className: 'road-container' }).createElement();
        var road = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('div', { className: 'road' }).createElement();
        var flag = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('div', { className: 'road-flag' }, _constants_garagePageConstants__WEBPACK_IMPORTED_MODULE_0__.FLAG_STRING_SVG_ELEMENT).createElement();
        var car = this.carView.renderCar();
        carRoad.append(road);
        carRoad.append(car);
        carRoad.append(flag);
        return carRoad;
    };
    CarRoadView.prototype.renderSelectAndRemoveButtons = function () {
        var _this = this;
        var selectRemoveButtonsContainer = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('div', {
            className: 'select-remove-btns-container',
        }).createElement();
        var selectButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('button', { className: "select-btn select-btn-".concat(this.car.id) }, 'Select').createElement();
        var removeButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('button', { className: "remove-btn remove-btn-".concat(this.car.id) }, 'Remove').createElement();
        removeButton.addEventListener('click', function () {
            _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("EventDeleteCar" /* EventBusEvents.EVENT_DELETE_CAR */, _this.car.id);
        });
        selectButton.addEventListener('click', function () {
            _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("EventSelectCar" /* EventBusEvents.EVENT_SELECT_CAR */, _this.car.id);
        });
        selectRemoveButtonsContainer.append(selectButton);
        selectRemoveButtonsContainer.append(removeButton);
        return selectRemoveButtonsContainer;
    };
    CarRoadView.prototype.renderStartAndEndButtons = function () {
        var _this = this;
        var startEndButtonsContainer = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('div', {
            className: 'start-end-btns-container',
        }).createElement();
        var startButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('button', { className: "start-btn start-btn_car-".concat(this.car.id) }, 'A').createElement();
        var endButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('button', { className: "end-btn end-btn_car-".concat(this.car.id) }, 'B').createElement();
        endButton.disabled = true;
        startButton.addEventListener('click', function () {
            _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("EventStartEngine" /* EventBusEvents.EVENT_START_ENGINE */, _this.car.id);
            startButton.disabled = true;
            endButton.disabled = false;
        });
        endButton.addEventListener('click', function () {
            _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("EventStopEngine" /* EventBusEvents.EVENT_STOP_ENGINE */, _this.car.id);
            endButton.disabled = true;
            startButton.disabled = false;
        });
        startEndButtonsContainer.append(startButton);
        startEndButtonsContainer.append(endButton);
        return startEndButtonsContainer;
    };
    return CarRoadView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarRoadView);


/***/ }),

/***/ "./src/view/garagePage/garageBox/carRoads/carRoad/car/carView.ts":
/*!***********************************************************************!*\
  !*** ./src/view/garagePage/garageBox/carRoads/carRoad/car/carView.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../api/carApi/carApi.singleton */ "./src/api/carApi/carApi.singleton.ts");
/* harmony import */ var _constants_garagePageConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../constants/garagePageConstants */ "./src/constants/garagePageConstants.ts");
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
/* harmony import */ var _utilities_changeSvgColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../utilities/changeSvgColor */ "./src/utilities/changeSvgColor.ts");
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../utilities/createElement */ "./src/utilities/createElement.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CarView = /** @class */ (function () {
    function CarView(car) {
        this.car = car;
        this.subscribeUpdateCarRoadEvent();
    }
    CarView.prototype.renderCar = function () {
        var carWithNewColor = (0,_utilities_changeSvgColor__WEBPACK_IMPORTED_MODULE_3__.changeSvgColor)(_constants_garagePageConstants__WEBPACK_IMPORTED_MODULE_1__.CAR_STRING_SVG_ELEMENT, this.car.color);
        var carImg = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_4__["default"]('div', { className: "car car-".concat(this.car.id) }, carWithNewColor).createElement();
        return carImg;
    };
    CarView.prototype.renderCarModel = function () {
        var carModel = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_4__["default"]('div', { className: "car-model car-model-".concat(this.car.id) }, this.car.name).createElement();
        return carModel;
    };
    CarView.prototype.subscribeUpdateCarRoadEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].register("EventUpdateCarRoad" /* EventBusEvents.EVENT_UPDATE_CAR_ROAD */, function (carId) { return __awaiter(_this, void 0, void 0, function () {
            var updatedCar, carModel, carImg, carWithUpdatedColor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].getCar(carId)];
                    case 1:
                        updatedCar = _a.sent();
                        carModel = document.querySelector(".car-model-".concat(carId));
                        carImg = document.querySelector(".car-".concat(carId));
                        if (!carModel || !carImg)
                            return [2 /*return*/];
                        carModel.innerHTML = updatedCar.name;
                        carWithUpdatedColor = (0,_utilities_changeSvgColor__WEBPACK_IMPORTED_MODULE_3__.changeSvgColor)(_constants_garagePageConstants__WEBPACK_IMPORTED_MODULE_1__.CAR_STRING_SVG_ELEMENT, updatedCar.color);
                        carImg.innerHTML = carWithUpdatedColor;
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return CarView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarView);


/***/ }),

/***/ "./src/view/garagePage/garageBox/carRoads/carRoadsView.ts":
/*!****************************************************************!*\
  !*** ./src/view/garagePage/garageBox/carRoads/carRoadsView.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
/* harmony import */ var _utilities_domUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utilities/domUtils */ "./src/utilities/domUtils.ts");
/* harmony import */ var _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/carApi/carApi.singleton */ "./src/api/carApi/carApi.singleton.ts");
/* harmony import */ var _constants_gameConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants/gameConstants */ "./src/constants/gameConstants.ts");
/* harmony import */ var _carRoad_carRoadView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carRoad/carRoadView */ "./src/view/garagePage/garageBox/carRoads/carRoad/carRoadView.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CarRoadsView = /** @class */ (function () {
    function CarRoadsView(page) {
        this.page = page;
        this.renderCarRoads(this.page);
        this.subscribeUpdateCarRoadsEvent();
        this.subscribeAddCarRoadEvent();
        this.subscribeDeleteCarRoadEvent();
    }
    CarRoadsView.prototype.renderCarRoads = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var cars;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.clearCarRoadContainer();
                        return [4 /*yield*/, _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].getCars(page, _constants_gameConstants__WEBPACK_IMPORTED_MODULE_3__.COUNT_OF_CARS_PER_PAGE)];
                    case 1:
                        cars = _a.sent();
                        cars.map(function (car) { return new _carRoad_carRoadView__WEBPACK_IMPORTED_MODULE_4__["default"](car); });
                        return [2 /*return*/];
                }
            });
        });
    };
    CarRoadsView.prototype.clearCarRoadContainer = function () {
        var carRoadContainer = (0,_utilities_domUtils__WEBPACK_IMPORTED_MODULE_1__.getCarRoadContainer)();
        if (!carRoadContainer)
            return;
        carRoadContainer.innerHTML = '';
    };
    CarRoadsView.prototype.subscribeUpdateCarRoadsEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].register("EventUpdateCarRoads" /* EventBusEvents.EVENT_UPDATE_CAR_ROADS */, function (page) {
            _this.renderCarRoads(page);
        });
    };
    CarRoadsView.prototype.subscribeAddCarRoadEvent = function () {
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].register("EventAddCarRoad" /* EventBusEvents.EVENT_ADD_CAR_ROAD */, function (car) {
            // eslint-disable-next-line no-new
            new _carRoad_carRoadView__WEBPACK_IMPORTED_MODULE_4__["default"](car);
        });
    };
    CarRoadsView.prototype.subscribeDeleteCarRoadEvent = function () {
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].register("EventDeleteCarRoad" /* EventBusEvents.EVENT_DELETE_CAR_ROAD */, function (numberOfCarRoad) {
            var carRoad = (0,_utilities_domUtils__WEBPACK_IMPORTED_MODULE_1__.getCarRoad)(numberOfCarRoad);
            carRoad.remove();
        });
    };
    return CarRoadsView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarRoadsView);


/***/ }),

/***/ "./src/view/garagePage/garageBox/garageBoxView.ts":
/*!********************************************************!*\
  !*** ./src/view/garagePage/garageBox/garageBoxView.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/carApi/carApi.singleton */ "./src/api/carApi/carApi.singleton.ts");
/* harmony import */ var _constants_gameConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/gameConstants */ "./src/constants/gameConstants.ts");
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _utilities_getMaxPageNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utilities/getMaxPageNumber */ "./src/utilities/getMaxPageNumber.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var GarageBoxView = /** @class */ (function () {
    function GarageBoxView() {
        this.page = _constants_gameConstants__WEBPACK_IMPORTED_MODULE_1__.PAGE_INITIALIZER;
    }
    GarageBoxView.prototype.render = function () {
        var garageBox = this.renderGarageBox();
        return garageBox;
    };
    GarageBoxView.prototype.renderGarageBox = function () {
        var _this = this;
        var garageBoxContainer = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_3__["default"]('div', {
            className: 'garage-box-container',
        }).createElement();
        var carRoadContainer = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_3__["default"]('div', {
            className: 'car-road-container',
        }).createElement();
        var garageBoxControlButtons = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_3__["default"]('div', {
            className: 'control-btns',
        }).createElement();
        var prevButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_3__["default"]('button', { className: 'prev-btn' }, 'Prev').createElement();
        var nextButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_3__["default"]('button', { className: 'next-btn' }, 'Next').createElement();
        prevButton.addEventListener('click', function () {
            if (_this.page !== _constants_gameConstants__WEBPACK_IMPORTED_MODULE_1__.PAGE_INITIALIZER) {
                _this.page -= 1;
                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventUpdateGarageTitle" /* EventBusEvents.EVENT_UPDATE_GARAGE_TITLE */, _this.page);
                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventChangeGaragePage" /* EventBusEvents.EVENT_CHANGE_GARAGE_PAGE */, _this.page);
                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventUpdateCarRoads" /* EventBusEvents.EVENT_UPDATE_CAR_ROADS */, _this.page);
            }
        });
        nextButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            var carAmount, maxPageNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].getTotalCountOfCars()];
                    case 1:
                        carAmount = _a.sent();
                        maxPageNumber = (0,_utilities_getMaxPageNumber__WEBPACK_IMPORTED_MODULE_4__.getMaxPageNumber)(Number(carAmount), _constants_gameConstants__WEBPACK_IMPORTED_MODULE_1__.COUNT_OF_CARS_PER_PAGE);
                        if (this.page >= maxPageNumber)
                            return [2 /*return*/];
                        this.page += 1;
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventUpdateGarageTitle" /* EventBusEvents.EVENT_UPDATE_GARAGE_TITLE */, this.page);
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventChangeGaragePage" /* EventBusEvents.EVENT_CHANGE_GARAGE_PAGE */, this.page);
                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("EventUpdateCarRoads" /* EventBusEvents.EVENT_UPDATE_CAR_ROADS */, this.page);
                        return [2 /*return*/];
                }
            });
        }); });
        garageBoxControlButtons.append(prevButton);
        garageBoxControlButtons.append(nextButton);
        garageBoxContainer.append(carRoadContainer);
        garageBoxContainer.append(garageBoxControlButtons);
        return garageBoxContainer;
    };
    return GarageBoxView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GarageBoxView);


/***/ }),

/***/ "./src/view/garagePage/garagePageView.ts":
/*!***********************************************!*\
  !*** ./src/view/garagePage/garagePageView.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _utilities_domUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/domUtils */ "./src/utilities/domUtils.ts");
/* harmony import */ var _garageBox_carRoads_carRoadsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./garageBox/carRoads/carRoadsView */ "./src/view/garagePage/garageBox/carRoads/carRoadsView.ts");
/* harmony import */ var _garageBox_garageBoxView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./garageBox/garageBoxView */ "./src/view/garagePage/garageBox/garageBoxView.ts");
/* harmony import */ var _garagePanel_garagePanelView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./garagePanel/garagePanelView */ "./src/view/garagePage/garagePanel/garagePanelView.ts");
/* harmony import */ var _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/carApi/carApi.singleton */ "./src/api/carApi/carApi.singleton.ts");
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
/* harmony import */ var _garagePage_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./garagePage.css */ "./src/view/garagePage/garagePage.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var GaragePageView = /** @class */ (function () {
    function GaragePageView(page) {
        this.page = page;
        this.garagePanelView = new _garagePanel_garagePanelView__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.garageBoxView = new _garageBox_garageBoxView__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.initGarageContainer();
        this.subscribeUpdateGarageTitleEvent();
        this.subscribeShowWinnerEvent();
    }
    GaragePageView.prototype.initGarageContainer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var main, garageContainer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        main = (0,_utilities_domUtils__WEBPACK_IMPORTED_MODULE_1__.getMain)();
                        return [4 /*yield*/, this.renderGarageContainer()];
                    case 1:
                        garageContainer = _a.sent();
                        main.append(garageContainer);
                        // eslint-disable-next-line no-new
                        new _garageBox_carRoads_carRoadsView__WEBPACK_IMPORTED_MODULE_2__["default"](this.page);
                        return [2 /*return*/];
                }
            });
        });
    };
    GaragePageView.prototype.renderGarageContainer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var garageContainer, garageTitle, garagePanel, garageBox, winnerPopup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        garageContainer = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
                            className: 'garage-container',
                        }).createElement();
                        return [4 /*yield*/, this.renderGarageTitle()];
                    case 1:
                        garageTitle = _a.sent();
                        garagePanel = this.garagePanelView.render();
                        garageBox = this.garageBoxView.render();
                        winnerPopup = this.renderWinnerPopup();
                        garageContainer.append(garagePanel);
                        garageContainer.append(garageTitle);
                        garageContainer.append(garageBox);
                        garageContainer.append(winnerPopup);
                        return [2 /*return*/, garageContainer];
                }
            });
        });
    };
    GaragePageView.prototype.renderGarageTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var totalCountOfCars, garageTitle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_5__["default"].getTotalCountOfCars()];
                    case 1:
                        totalCountOfCars = _a.sent();
                        garageTitle = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
                            className: 'garage-title',
                        }, "Garage (<span class='garage-cars-amount'>".concat(totalCountOfCars, "</span>)<br>Page #<span class='garage-page-number'>").concat(this.page, "</span>")).createElement();
                        return [2 /*return*/, garageTitle];
                }
            });
        });
    };
    GaragePageView.prototype.renderWinnerPopup = function () {
        var winnerPopup = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', { className: 'winner-popup' }).createElement();
        var popupContent = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', { className: 'popup-content' }).createElement();
        var popupText = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', { className: 'winner-popup-text' }).createElement();
        var closePopupButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('button', {
            className: 'close-popup-btn',
        }, 'X').createElement();
        closePopupButton.addEventListener('click', function () {
            winnerPopup.style.display = 'none';
        });
        popupContent.append(closePopupButton);
        popupContent.append(popupText);
        winnerPopup.append(popupContent);
        return winnerPopup;
    };
    GaragePageView.prototype.showWinnerPopup = function (winner) {
        var winnerPopup = document.querySelector('.winner-popup');
        if (!winnerPopup)
            return;
        winnerPopup.style.display = 'flex';
        var winnerText = "Winner: ".concat(winner.name, " (").concat(winner.time, "s)");
        var popupText = document.querySelector('.winner-popup-text');
        if (!popupText)
            return;
        popupText.innerHTML = winnerText;
    };
    GaragePageView.prototype.subscribeUpdateGarageTitleEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_6__["default"].register("EventUpdateGarageTitle" /* EventBusEvents.EVENT_UPDATE_GARAGE_TITLE */, function (page) { return __awaiter(_this, void 0, void 0, function () {
            var newCarsAmount, garageCarsAmount, garagePageNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_5__["default"].getTotalCountOfCars()];
                    case 1:
                        newCarsAmount = _a.sent();
                        garageCarsAmount = document.querySelector('.garage-cars-amount');
                        garagePageNumber = document.querySelector('.garage-page-number');
                        if (!garageCarsAmount || !garagePageNumber)
                            return [2 /*return*/];
                        garageCarsAmount.innerHTML = "".concat(newCarsAmount);
                        garagePageNumber.innerHTML = "".concat(page);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    GaragePageView.prototype.subscribeShowWinnerEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_6__["default"].register("EventShowWinner" /* EventBusEvents.EVENT_SHOW_WINNER */, function (winner) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.showWinnerPopup(winner);
                return [2 /*return*/];
            });
        }); });
    };
    return GaragePageView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GaragePageView);


/***/ }),

/***/ "./src/view/garagePage/garagePanel/carCreateForm/carCreateFormView.ts":
/*!****************************************************************************!*\
  !*** ./src/view/garagePage/garagePanel/carCreateForm/carCreateFormView.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utilities/createElement */ "./src/utilities/createElement.ts");


var CarCreateFormView = /** @class */ (function () {
    function CarCreateFormView() {
    }
    CarCreateFormView.prototype.render = function (garagePanelContainer) {
        var carCreateForm = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('form', {
            id: 'create-form',
        }).createElement();
        var carModelLabel = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('label', {
            className: 'car-model-label',
        }).createElement();
        var carModelInput = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('input', {
            className: 'car-model-input',
        }).createElement();
        carModelInput.type = 'text';
        var carColorLabel = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('label', {
            className: 'car-color-label',
        }).createElement();
        var carColorInput = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('input', {
            className: 'car-color-input',
        }).createElement();
        carColorInput.type = 'color';
        carColorInput.value = "#000000" /* CreateFormDefaultValues.CAR_COLOR */;
        var createButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('button', { className: 'create-btn' }, 'Create').createElement();
        createButton.type = 'submit';
        carModelLabel.append(carModelInput);
        carColorLabel.append(carColorInput);
        carCreateForm.append(carModelLabel);
        carCreateForm.append(carColorLabel);
        carCreateForm.append(createButton);
        carCreateForm.addEventListener('submit', function (event) {
            event.preventDefault();
            if (carModelInput.value.trim() === '') {
                carModelInput.value = "Unknown" /* CreateFormDefaultValues.CAR_MODEL */;
            }
            var carModel = carModelInput.value;
            var carColor = carColorInput.value;
            var carData = [carModel, carColor];
            _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("EventCreateCar" /* EventBusEvents.EVENT_CREATE_CAR */, carData);
            carModelInput.value = '';
            carColorInput.value = "#000000" /* CreateFormDefaultValues.CAR_COLOR */;
        });
        garagePanelContainer.append(carCreateForm);
    };
    return CarCreateFormView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarCreateFormView);


/***/ }),

/***/ "./src/view/garagePage/garagePanel/carUpdateForm/carUpdateFormView.ts":
/*!****************************************************************************!*\
  !*** ./src/view/garagePage/garagePanel/carUpdateForm/carUpdateFormView.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../api/carApi/carApi.singleton */ "./src/api/carApi/carApi.singleton.ts");
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/createElement */ "./src/utilities/createElement.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var CarUpdateFormView = /** @class */ (function () {
    function CarUpdateFormView() {
        this.subscribeUpdateCarEvent();
    }
    CarUpdateFormView.prototype.render = function (garagePanelContainer) {
        var _this = this;
        var carUpdateForm = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('form', { id: 'update-form' }).createElement();
        var carModelLabel = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('label', {
            className: 'car-model-label',
        }).createElement();
        var carModelInput = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('input', {
            className: 'car-model-input car-update-model-input',
        }).createElement();
        carModelInput.type = 'text';
        var carColorLabel = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('label', {
            className: 'car-color-label',
        }).createElement();
        var carColorInput = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('input', {
            className: 'car-color-input car-update-color-input',
        }).createElement();
        carColorInput.type = 'color';
        var updateButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_2__["default"]('button', { className: 'update-btn' }, 'Update').createElement();
        updateButton.type = 'submit';
        carModelLabel.append(carModelInput);
        carColorLabel.append(carColorInput);
        carUpdateForm.append(carModelLabel);
        carUpdateForm.append(carColorLabel);
        carUpdateForm.append(updateButton);
        carUpdateForm.addEventListener('submit', function (event) {
            event.preventDefault();
            if (typeof _this.carId !== 'number')
                return;
            var car = {
                name: carModelInput.value,
                color: carColorInput.value,
                id: _this.carId,
            };
            _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("EventUpdateCar" /* EventBusEvents.EVENT_UPDATE_CAR */, car);
            carModelInput.value = '';
            carColorInput.value = "#000000" /* CreateFormDefaultValues.CAR_COLOR */;
        });
        garagePanelContainer.append(carUpdateForm);
    };
    CarUpdateFormView.prototype.subscribeUpdateCarEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_1__["default"].register("EventSelectCar" /* EventBusEvents.EVENT_SELECT_CAR */, function (carId) { return __awaiter(_this, void 0, void 0, function () {
            var selectedCar, carModelInput, carColorInput;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].getCar(carId)];
                    case 1:
                        selectedCar = _a.sent();
                        this.carId = carId;
                        carModelInput = document.querySelector('.car-update-model-input');
                        carColorInput = document.querySelector('.car-update-color-input');
                        carModelInput.value = selectedCar.name;
                        carColorInput.value = selectedCar.color;
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return CarUpdateFormView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarUpdateFormView);


/***/ }),

/***/ "./src/view/garagePage/garagePanel/garageControlButtons/garageControlButtonsView.ts":
/*!******************************************************************************************!*\
  !*** ./src/view/garagePage/garagePanel/garageControlButtons/garageControlButtonsView.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utilities/createElement */ "./src/utilities/createElement.ts");


var GarageControlButtonsView = /** @class */ (function () {
    function GarageControlButtonsView() {
    }
    GarageControlButtonsView.prototype.render = function (garagePanelContainer) {
        var _this = this;
        var panelButtonsContainer = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', {
            className: 'panel-btns-container',
        }).createElement();
        var raseButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('button', { className: 'race-btn' }, 'Race').createElement();
        var resetButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('button', { className: 'reset-btn' }, 'Reset').createElement();
        resetButton.disabled = true;
        var generateCarsButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('button', { className: 'generate-cars-btn' }, 'Generate cars').createElement();
        raseButton.addEventListener('click', function () {
            _this.buttonsController(true);
            resetButton.disabled = false;
            raseButton.disabled = true;
            _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("EventStartRace" /* EventBusEvents.EVENT_START_RACE */);
        });
        resetButton.addEventListener('click', function () {
            _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("EventStopRace" /* EventBusEvents.EVENT_STOP_RACE */);
            raseButton.disabled = false;
            resetButton.disabled = true;
            _this.buttonsController(false);
        });
        generateCarsButton.addEventListener('click', function () {
            _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("EventGenerateCars" /* EventBusEvents.EVENT_GENERATE_CARS */);
        });
        panelButtonsContainer.append(raseButton);
        panelButtonsContainer.append(resetButton);
        panelButtonsContainer.append(generateCarsButton);
        garagePanelContainer.append(panelButtonsContainer);
    };
    GarageControlButtonsView.prototype.buttonsController = function (status) {
        var startBtns = document.querySelectorAll('.start-btn');
        startBtns.forEach(function (startBtn) {
            var button = startBtn;
            button.disabled = status;
        });
        var winnersButton = document.querySelector('.winners-btn');
        winnersButton.disabled = status;
    };
    return GarageControlButtonsView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GarageControlButtonsView);


/***/ }),

/***/ "./src/view/garagePage/garagePanel/garagePanelView.ts":
/*!************************************************************!*\
  !*** ./src/view/garagePage/garagePanel/garagePanelView.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _carCreateForm_carCreateFormView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carCreateForm/carCreateFormView */ "./src/view/garagePage/garagePanel/carCreateForm/carCreateFormView.ts");
/* harmony import */ var _carUpdateForm_carUpdateFormView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carUpdateForm/carUpdateFormView */ "./src/view/garagePage/garagePanel/carUpdateForm/carUpdateFormView.ts");
/* harmony import */ var _garageControlButtons_garageControlButtonsView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./garageControlButtons/garageControlButtonsView */ "./src/view/garagePage/garagePanel/garageControlButtons/garageControlButtonsView.ts");




var GaragePanelView = /** @class */ (function () {
    function GaragePanelView() {
        this.carCreateFormView = new _carCreateForm_carCreateFormView__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.carUpdateFormView = new _carUpdateForm_carUpdateFormView__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.garageControlButtonsView = new _garageControlButtons_garageControlButtonsView__WEBPACK_IMPORTED_MODULE_3__["default"]();
    }
    GaragePanelView.prototype.render = function () {
        var garagePanelContainer = this.renderGaragePanel();
        return garagePanelContainer;
    };
    GaragePanelView.prototype.renderGaragePanel = function () {
        var garagePanelContainer = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
            className: 'garage-panel-container',
        }).createElement();
        this.carCreateFormView.render(garagePanelContainer);
        this.carUpdateFormView.render(garagePanelContainer);
        this.garageControlButtonsView.render(garagePanelContainer);
        return garagePanelContainer;
    };
    return GaragePanelView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GaragePanelView);


/***/ }),

/***/ "./src/view/winnersPage/winnersBox/winnersBoxView.ts":
/*!***********************************************************!*\
  !*** ./src/view/winnersPage/winnersBox/winnersBoxView.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utilities/createElement */ "./src/utilities/createElement.ts");

var WinnersBoxView = /** @class */ (function () {
    function WinnersBoxView() {
    }
    WinnersBoxView.prototype.render = function () {
        var winnersBox = this.renderWinnersBox();
        return winnersBox;
    };
    WinnersBoxView.prototype.renderWinnersBox = function () {
        var winnersBoxContainer = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
            className: 'winners-box-container',
        }).createElement();
        var tableHead = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', { className: 'winners-table-head' }, "\n    <div class='id table-title'>ID</div>\n    <div class='win-car table-title'>Car</div>\n    <div class='win-model table-title'>Model</div>\n    <div class='car-wins table-title'>Wins</div>\n    <div class='car-time table-title'>Best<br>time</div>\n  ").createElement();
        var winnersTable = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', { className: 'winners-table' }).createElement();
        winnersBoxContainer.append(tableHead);
        winnersBoxContainer.append(winnersTable);
        return winnersBoxContainer;
    };
    return WinnersBoxView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinnersBoxView);


/***/ }),

/***/ "./src/view/winnersPage/winnersBox/winnersTable/winner/winnerView.ts":
/*!***************************************************************************!*\
  !*** ./src/view/winnersPage/winnersBox/winnersTable/winner/winnerView.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../api/carApi/carApi.singleton */ "./src/api/carApi/carApi.singleton.ts");
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _utilities_domUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utilities/domUtils */ "./src/utilities/domUtils.ts");
/* harmony import */ var _garagePage_garageBox_carRoads_carRoad_car_carView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../garagePage/garageBox/carRoads/carRoad/car/carView */ "./src/view/garagePage/garageBox/carRoads/carRoad/car/carView.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var WinnerView = /** @class */ (function () {
    function WinnerView(winner) {
        this.winner = winner;
        this.renderTableRowContainer(this.winner);
    }
    WinnerView.prototype.renderTableRowContainer = function (winner) {
        return __awaiter(this, void 0, void 0, function () {
            var winnersTable, winnerCar, _a, carImageElement, carModelElement, winnersTableRow;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        winnersTable = (0,_utilities_domUtils__WEBPACK_IMPORTED_MODULE_2__.getWinnersTable)();
                        _a = _garagePage_garageBox_carRoads_carRoad_car_carView__WEBPACK_IMPORTED_MODULE_3__["default"].bind;
                        return [4 /*yield*/, this.getWinnerCarById(winner.id)];
                    case 1:
                        winnerCar = new (_a.apply(_garagePage_garageBox_carRoads_carRoad_car_carView__WEBPACK_IMPORTED_MODULE_3__["default"], [void 0, _b.sent()]))();
                        carImageElement = winnerCar.renderCar();
                        carModelElement = winnerCar.renderCarModel();
                        carImageElement.classList.add('win-car');
                        carModelElement.classList.add('win-model');
                        winnersTableRow = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', { className: 'winner-row' }).createElement();
                        winnersTableRow.append(new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', { className: 'id' }, "".concat(WinnerView.id)).createElement());
                        WinnerView.id += 1;
                        winnersTableRow.append(carImageElement);
                        winnersTableRow.append(carModelElement);
                        winnersTableRow.append(new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', { className: 'car-wins' }, "".concat(winner.wins)).createElement());
                        winnersTableRow.append(new _utilities_createElement__WEBPACK_IMPORTED_MODULE_1__["default"]('div', { className: 'car-time' }, "".concat(winner.time, " s")).createElement());
                        winnersTable.append(winnersTableRow);
                        return [2 /*return*/];
                }
            });
        });
    };
    WinnerView.prototype.getWinnerCarById = function (winnerId) {
        return __awaiter(this, void 0, void 0, function () {
            var winnerCar;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _api_carApi_carApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].getCar(winnerId)];
                    case 1:
                        winnerCar = _a.sent();
                        return [2 /*return*/, winnerCar];
                }
            });
        });
    };
    WinnerView.id = 1;
    return WinnerView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinnerView);


/***/ }),

/***/ "./src/view/winnersPage/winnersBox/winnersTable/winnersTableView.ts":
/*!**************************************************************************!*\
  !*** ./src/view/winnersPage/winnersBox/winnersTable/winnersTableView.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_winnersApi_winnersApi_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../api/winnersApi/winnersApi.singleton */ "./src/api/winnersApi/winnersApi.singleton.ts");
/* harmony import */ var _utilities_domUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utilities/domUtils */ "./src/utilities/domUtils.ts");
/* harmony import */ var _winner_winnerView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./winner/winnerView */ "./src/view/winnersPage/winnersBox/winnersTable/winner/winnerView.ts");
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
/* harmony import */ var _constants_gameConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants/gameConstants */ "./src/constants/gameConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var WinnersTableView = /** @class */ (function () {
    function WinnersTableView(page) {
        this.page = page;
        this.renderWinnersTable(this.page);
        this.subscribeUpdateWinnersTableEvent();
    }
    WinnersTableView.prototype.renderWinnersTable = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var winnersTable, winners;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        winnersTable = (0,_utilities_domUtils__WEBPACK_IMPORTED_MODULE_1__.getWinnersTable)();
                        if (!winnersTable)
                            return [2 /*return*/];
                        winnersTable.innerHTML = '';
                        return [4 /*yield*/, _api_winnersApi_winnersApi_singleton__WEBPACK_IMPORTED_MODULE_0__["default"].getWinners(page, _constants_gameConstants__WEBPACK_IMPORTED_MODULE_4__.COUNT_OF_WINNERS_PER_PAGE)];
                    case 1:
                        winners = _a.sent();
                        // eslint-disable-next-line no-new
                        winners.map(function (winner) { return new _winner_winnerView__WEBPACK_IMPORTED_MODULE_2__["default"](winner); });
                        return [2 /*return*/];
                }
            });
        });
    };
    WinnersTableView.prototype.subscribeUpdateWinnersTableEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_3__["default"].register("EventUpdateWinnersTable" /* EventBusEvents.EVENT_UPDATE_WINNERS_TABLE */, function (page) {
            if (page !== _constants_gameConstants__WEBPACK_IMPORTED_MODULE_4__.PAGE_INITIALIZER) {
                var calculatedIdForNewTablePage = _this.getCalculatedIdForNewTablePage(page);
                _winner_winnerView__WEBPACK_IMPORTED_MODULE_2__["default"].id = calculatedIdForNewTablePage;
            }
            else
                _winner_winnerView__WEBPACK_IMPORTED_MODULE_2__["default"].id = _constants_gameConstants__WEBPACK_IMPORTED_MODULE_4__.PAGE_INITIALIZER;
            _this.renderWinnersTable(page);
        });
    };
    WinnersTableView.prototype.getCalculatedIdForNewTablePage = function (page) {
        var calculatedIdForNewTablePage = (page - 1) * _constants_gameConstants__WEBPACK_IMPORTED_MODULE_4__.COUNT_OF_WINNERS_PER_PAGE + _constants_gameConstants__WEBPACK_IMPORTED_MODULE_4__.PAGE_INITIALIZER;
        return calculatedIdForNewTablePage;
    };
    return WinnersTableView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinnersTableView);


/***/ }),

/***/ "./src/view/winnersPage/winnersPageView.ts":
/*!*************************************************!*\
  !*** ./src/view/winnersPage/winnersPageView.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/createElement */ "./src/utilities/createElement.ts");
/* harmony import */ var _utilities_domUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/domUtils */ "./src/utilities/domUtils.ts");
/* harmony import */ var _api_winnersApi_winnersApi_singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/winnersApi/winnersApi.singleton */ "./src/api/winnersApi/winnersApi.singleton.ts");
/* harmony import */ var _winnersBox_winnersBoxView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winnersBox/winnersBoxView */ "./src/view/winnersPage/winnersBox/winnersBoxView.ts");
/* harmony import */ var _winnersBox_winnersTable_winnersTableView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./winnersBox/winnersTable/winnersTableView */ "./src/view/winnersPage/winnersBox/winnersTable/winnersTableView.ts");
/* harmony import */ var _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../eventBus/eventBus.singleton */ "./src/eventBus/eventBus.singleton.ts");
/* harmony import */ var _constants_gameConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/gameConstants */ "./src/constants/gameConstants.ts");
/* harmony import */ var _utilities_getMaxPageNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/getMaxPageNumber */ "./src/utilities/getMaxPageNumber.ts");
/* harmony import */ var _winnersPage_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./winnersPage.css */ "./src/view/winnersPage/winnersPage.css");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var WinnersPageView = /** @class */ (function () {
    function WinnersPageView(page) {
        this.page = page;
        this.winnersBoxView = new _winnersBox_winnersBoxView__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.initWinnersContainer();
        this.subscribeUpdateWinnersTitleEvent();
    }
    WinnersPageView.prototype.initWinnersContainer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var main, winnersContainer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        main = (0,_utilities_domUtils__WEBPACK_IMPORTED_MODULE_1__.getMain)();
                        return [4 /*yield*/, this.renderWinnersContainer()];
                    case 1:
                        winnersContainer = _a.sent();
                        main.append(winnersContainer);
                        // eslint-disable-next-line no-new
                        new _winnersBox_winnersTable_winnersTableView__WEBPACK_IMPORTED_MODULE_4__["default"](this.page);
                        return [2 /*return*/];
                }
            });
        });
    };
    WinnersPageView.prototype.renderWinnersContainer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var winnersContainer, winnersTitle, garageBoxControlButtons, prevButton, nextButton, winnersBox;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        winnersContainer = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
                            className: 'winners-container hide',
                        }).createElement();
                        return [4 /*yield*/, this.renderWinnersTitle()];
                    case 1:
                        winnersTitle = _a.sent();
                        garageBoxControlButtons = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
                            className: 'control-btns',
                        }).createElement();
                        prevButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('button', { className: 'prev-btn' }, 'Prev').createElement();
                        nextButton = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('button', { className: 'next-btn' }, 'Next').createElement();
                        prevButton.addEventListener('click', function () {
                            if (_this.page !== _constants_gameConstants__WEBPACK_IMPORTED_MODULE_6__.PAGE_INITIALIZER) {
                                _this.page -= 1;
                                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch("EventUpdateWinnersTitle" /* EventBusEvents.EVENT_UPDATE_WINNERS_TITLE */, _this.page);
                                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch("EventChangeWinnersPage" /* EventBusEvents.EVENT_CHANGE_WINNERS_PAGE */, _this.page);
                                _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch("EventUpdateWinnersTable" /* EventBusEvents.EVENT_UPDATE_WINNERS_TABLE */, _this.page);
                            }
                        });
                        nextButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                            var winnersAmount, maxPageNumber;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, _api_winnersApi_winnersApi_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].getTotalCountOfWinners()];
                                    case 1:
                                        winnersAmount = _a.sent();
                                        maxPageNumber = (0,_utilities_getMaxPageNumber__WEBPACK_IMPORTED_MODULE_7__.getMaxPageNumber)(Number(winnersAmount), _constants_gameConstants__WEBPACK_IMPORTED_MODULE_6__.COUNT_OF_WINNERS_PER_PAGE);
                                        if (this.page >= maxPageNumber)
                                            return [2 /*return*/];
                                        this.page += 1;
                                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch("EventUpdateWinnersTitle" /* EventBusEvents.EVENT_UPDATE_WINNERS_TITLE */, this.page);
                                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch("EventChangeWinnersPage" /* EventBusEvents.EVENT_CHANGE_WINNERS_PAGE */, this.page);
                                        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch("EventUpdateWinnersTable" /* EventBusEvents.EVENT_UPDATE_WINNERS_TABLE */, this.page);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        winnersBox = this.winnersBoxView.render();
                        garageBoxControlButtons.append(prevButton);
                        garageBoxControlButtons.append(nextButton);
                        winnersContainer.append(winnersTitle);
                        winnersContainer.append(winnersBox);
                        winnersContainer.append(garageBoxControlButtons);
                        return [2 /*return*/, winnersContainer];
                }
            });
        });
    };
    WinnersPageView.prototype.renderWinnersTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var totalCountOfWinners, garageTitle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _api_winnersApi_winnersApi_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].getTotalCountOfWinners()];
                    case 1:
                        totalCountOfWinners = _a.sent();
                        garageTitle = new _utilities_createElement__WEBPACK_IMPORTED_MODULE_0__["default"]('div', {
                            className: 'winners-title',
                        }, "Winners (<span class='winners-cars-amount'>".concat(totalCountOfWinners, "</span>)<br>Page #<span class='winners-page-number'>").concat(this.page, "</span>")).createElement();
                        return [2 /*return*/, garageTitle];
                }
            });
        });
    };
    WinnersPageView.prototype.subscribeUpdateWinnersTitleEvent = function () {
        var _this = this;
        _eventBus_eventBus_singleton__WEBPACK_IMPORTED_MODULE_5__["default"].register("EventUpdateWinnersTitle" /* EventBusEvents.EVENT_UPDATE_WINNERS_TITLE */, function (page) { return __awaiter(_this, void 0, void 0, function () {
            var totalCountOfWinners, winnersCarsAmount, winnersPageNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _api_winnersApi_winnersApi_singleton__WEBPACK_IMPORTED_MODULE_2__["default"].getTotalCountOfWinners()];
                    case 1:
                        totalCountOfWinners = _a.sent();
                        winnersCarsAmount = document.querySelector('.winners-cars-amount');
                        winnersPageNumber = document.querySelector('.winners-page-number');
                        if (!winnersCarsAmount || !winnersPageNumber)
                            return [2 /*return*/];
                        winnersCarsAmount.innerHTML = "".concat(totalCountOfWinners);
                        winnersPageNumber.innerHTML = "".concat(page);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return WinnersPageView;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinnersPageView);


/***/ }),

/***/ "./src/assets/carBrands.json":
/*!***********************************!*\
  !*** ./src/assets/carBrands.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('["Nissan","Porsche","Kia","Ferrari","BMW","Mercedes","Feat","Ford","Audi","lamborghini","Hyundai","Tesla","Honda","Volkswagen","Opel","Lada","Renault","Mazda","Mitsubishi","Skoda","Toyota","Lexus"]');

/***/ }),

/***/ "./src/assets/carModels.json":
/*!***********************************!*\
  !*** ./src/assets/carModels.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"Nissan":["Cima","Armada","Caravan","Datsun","X-Trail","GT-R","Juke","Trade","Qashqai","Langley"],"Porsche":["Macan","Cayenne","Panamera","Taycan","Cayman","Boxster","Carrera","Targa","GT3","Cayenne Coupe "],"Kia":["Carstar","K-Series","Picanto","Rio","Ray","Ceed GT","Besta","Soul","Sedona","Sephia"],"Ferrari":["California","GTB","Pista","Maranello","Scaglietti","Spider","Tributo","Laferrari","Roma","Italia"],"BMW":["M1","M4","X1","X2","X3","X4","X5","X6","X7","Z4"],"Mercedes":["F500 Mind","F600 Hygenius","Bionic","R231","S600","B-Class","A-Class","AMG GT","AMG GT C","AMG GT R "],"Feat":["Bravo","Croma","Doblo","Ducato","Freemont","Freemont Cross","Fullback","Grande Punto","Mobi","Panda"],"Ford":["Mondeo","Focus","Focus Universal","Focus Hatchback","EcoSport","Explorer","Kuga","Fiesta","Edge","Mustang"],"Audi":["A1","A3","A4","A5","A6","A7","A8","E-TRON","Q2","Q7"],"lamborghini":["350 GT","400 GT","Miura","Espada","Islero","Jarama","Countach","Urraco","Silhouette","Jalpa"],"Hyundai":["Accent","Coupe","Creta","Elantra","Equus","Genesis","Genesis Coupe","Genesis G70","Solaris","Sonata"],"Tesla":["Roadster","Model S","Model S","Model S","Model X","Model 3","Model Y","Cybertruck","Semi","Roadster 2.0"],"Honda":["Accord","Stream","Civic","CR-V","FIT","FR-V","HR-V","Insight","Jazz","Legend"],"Volkswagen":["Amarok","Arteon","polo","Beetle","Golf 2","Bora","Caddy","Cross Golf","Tarek","Passat"],"Opel":["Corsa","Astra","Insignia","Vivaro","Zafirqa","Movano","Combo","Crossland","GT","Agila"],"Lada":["Niva","Granta","Largus","Vesta","XRAY","Niva Legend 3D","Largus Cross","Niva Travel","Vesta Cross","Granta SW Cross"],"Renault":["Arkana","Duster","Duster I","Kaptur","Logan","Logan Stepway","Sandero","Sandero Stepway","Logan I","Scenic"],"Mazda":["5","6","3","2","3MPS","AXELA","BT-50","CX-3","CX-4","CX-7"],"Mitsubishi":["Challenger","Carisma","Galant","ASX","Eclipse","Fuso Canter","L200","Outlander","Pajero","Pajero Sport "],"Skoda":["Citigo","Enyaq IV","Fabia","Fabia RS","Fabia Scout","Karoq","Kodiaq","Kushaq","Octavia","Rapid"],"Toyota":["Corolla","RAV4","Camry","Alphard","C-HR","Fortuner","Highlander","Land Cruiser Prado","Prius","GT86"],"Lexus":["LC","LFA","LS","LX","NX","RC","UX","ES","IS","HR"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ "./src/app/app.ts");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");


// eslint-disable-next-line no-new
new _app_app__WEBPACK_IMPORTED_MODULE_0__["default"]();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUI7NEJBQUUsc0JBQU87d0JBQ3JELGlCQUFpQixDQUFDLFNBQVMsR0FBRyxVQUFHLG1CQUFtQixDQUFFLENBQUM7d0JBQ3ZELGlCQUFpQixDQUFDLFNBQVMsR0FBRyxVQUFHLElBQUksQ0FBRSxDQUFDOzs7O2FBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUM7QUFFRCxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFIL0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7O0FDTjRCO0FBRUE7QUFFNUIsa0NBQWtDO0FBQ2xDLElBQUksZ0RBQUcsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzPzIzOTQiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy92aWV3L2dhbWVWaWV3L2dhbWVWaWV3LmNzcz9mZTA1Iiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdmlldy9nYXJhZ2VQYWdlL2dhcmFnZVBhZ2UuY3NzPzczNjQiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy92aWV3L3dpbm5lcnNQYWdlL3dpbm5lcnNQYWdlLmNzcz84NzJmIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvYXBpL2NhckFwaS9jYXJBcGkuc2luZ2xldG9uLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvYXBpL2NhckFwaS9jYXJBcGkudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9hcGkvZW5naW5lQXBpL2VuZ2luZUFwaS5zaW5nbGV0b24udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9hcGkvZW5naW5lQXBpL2VuZ2luZUFwaS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2FwaS93aW5uZXJzQXBpL3dpbm5lcnNBcGkuc2luZ2xldG9uLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvYXBpL3dpbm5lcnNBcGkvd2lubmVyc0FwaS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb25zdGFudHMvZ2FtZUNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbnN0YW50cy9nYXJhZ2VQYWdlQ29uc3RhbnRzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29uc3RhbnRzL3NlcnZlckNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2V2ZW50QnVzL2V2ZW50QnVzLnNpbmdsZXRvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2V2ZW50QnVzL2V2ZW50QnVzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvbW9kZWwvY2FyL2Nhci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL21vZGVsL2dhbWUvZ2FtZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL21vZGVsL2dhcmFnZS9nYXJhZ2UudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9tb2RlbC9yYWNlL3JhY2UudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9tb2RlbC93aW5uZXJzL3dpbm5lcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy91dGlsaXRpZXMvY2hhbmdlU3ZnQ29sb3IudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy91dGlsaXRpZXMvY3JlYXRlRWxlbWVudC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3V0aWxpdGllcy9kb21VdGlscy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3V0aWxpdGllcy9nZXRHZW5lcmF0ZWRDYXJOYW1lLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdXRpbGl0aWVzL2dldEdlbmVyYXRlZENvbG9yLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdXRpbGl0aWVzL2dldE1heFBhZ2VOdW1iZXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy92aWV3L2dhbWVWaWV3L2dhbWVWaWV3LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdmlldy9nYXJhZ2VQYWdlL2dhcmFnZUJveC9jYXJSb2Fkcy9jYXJSb2FkL2NhclJvYWRWaWV3LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdmlldy9nYXJhZ2VQYWdlL2dhcmFnZUJveC9jYXJSb2Fkcy9jYXJSb2FkL2Nhci9jYXJWaWV3LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdmlldy9nYXJhZ2VQYWdlL2dhcmFnZUJveC9jYXJSb2Fkcy9jYXJSb2Fkc1ZpZXcudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy92aWV3L2dhcmFnZVBhZ2UvZ2FyYWdlQm94L2dhcmFnZUJveFZpZXcudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy92aWV3L2dhcmFnZVBhZ2UvZ2FyYWdlUGFnZVZpZXcudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy92aWV3L2dhcmFnZVBhZ2UvZ2FyYWdlUGFuZWwvY2FyQ3JlYXRlRm9ybS9jYXJDcmVhdGVGb3JtVmlldy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXcvZ2FyYWdlUGFnZS9nYXJhZ2VQYW5lbC9jYXJVcGRhdGVGb3JtL2NhclVwZGF0ZUZvcm1WaWV3LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdmlldy9nYXJhZ2VQYWdlL2dhcmFnZVBhbmVsL2dhcmFnZUNvbnRyb2xCdXR0b25zL2dhcmFnZUNvbnRyb2xCdXR0b25zVmlldy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXcvZ2FyYWdlUGFnZS9nYXJhZ2VQYW5lbC9nYXJhZ2VQYW5lbFZpZXcudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy92aWV3L3dpbm5lcnNQYWdlL3dpbm5lcnNCb3gvd2lubmVyc0JveFZpZXcudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy92aWV3L3dpbm5lcnNQYWdlL3dpbm5lcnNCb3gvd2lubmVyc1RhYmxlL3dpbm5lci93aW5uZXJWaWV3LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdmlldy93aW5uZXJzUGFnZS93aW5uZXJzQm94L3dpbm5lcnNUYWJsZS93aW5uZXJzVGFibGVWaWV3LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvdmlldy93aW5uZXJzUGFnZS93aW5uZXJzUGFnZVZpZXcudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IENhckFwaSBmcm9tICcuL2NhckFwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXJBcGkoKTtcbiIsImltcG9ydCB7IFNFUlZFUl9VUkwgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvc2VydmVyQ29uc3RhbnRzJztcbmltcG9ydCBDYXIgZnJvbSAnLi4vLi4vbW9kZWwvY2FyL2Nhci5pbnRlcmZhY2VzJztcbmltcG9ydCB7IElDYXJBcGkgfSBmcm9tICcuL2NhckFwaS5pbnRlcmZhY2UnO1xuXG5jbGFzcyBDYXJBcGkgaW1wbGVtZW50cyBJQ2FyQXBpIHtcbiAgcHJpdmF0ZSBzZXJ2ZXJVUkw6IHN0cmluZyA9IFNFUlZFUl9VUkw7XG5cbiAgYXN5bmMgZ2V0Q2FycyhwYWdlOiBudW1iZXIsIGxpbWl0OiBudW1iZXIpOiBQcm9taXNlPENhcltdPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLnNlcnZlclVSTH0vZ2FyYWdlLz9fcGFnZT0ke3BhZ2V9Jl9saW1pdD0ke2xpbWl0fWAsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgfSk7XG4gICAgY29uc3QgY2FycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gY2FycztcbiAgfVxuXG4gIGFzeW5jIGdldENhcihpZDogbnVtYmVyKTogUHJvbWlzZTxDYXI+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RoaXMuc2VydmVyVVJMfS9nYXJhZ2UvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgIH0pO1xuICAgIGNvbnN0IGNhciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gY2FyO1xuICB9XG5cbiAgYXN5bmMgZ2V0VG90YWxDb3VudE9mQ2FycygpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICBjb25zdCBwYWdlID0gMDtcbiAgICBjb25zdCBsaW1pdCA9IDA7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLnNlcnZlclVSTH0vZ2FyYWdlLz9fcGFnZT0ke3BhZ2V9Jl9saW1pdD0ke2xpbWl0fWAsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgfSk7XG4gICAgY29uc3QgdG90YWxDb3VudE9mQ2FycyA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XG4gICAgcmV0dXJuIHRvdGFsQ291bnRPZkNhcnM7XG4gIH1cblxuICBhc3luYyBjcmVhdGVDYXIoY2FyVG9TZXJ2ZXI6IENhcik6IFByb21pc2U8Q2FyPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLnNlcnZlclVSTH0vZ2FyYWdlYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2FyVG9TZXJ2ZXIpLFxuICAgIH0pO1xuICAgIGNvbnN0IGNhciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gY2FyO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlQ2FyKGlkOiBudW1iZXIpOiBQcm9taXNlPENhcj4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5zZXJ2ZXJVUkx9L2dhcmFnZS8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgfSk7XG4gICAgY29uc3QgY2FyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBjYXI7XG4gIH1cblxuICBhc3luYyB1cGRhdGVDYXIoaWQ6IG51bWJlciwgY2FyVG9TZXJ2ZXI6IENhcik6IFByb21pc2U8Q2FyPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLnNlcnZlclVSTH0vZ2FyYWdlLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXJUb1NlcnZlciksXG4gICAgfSk7XG4gICAgY29uc3QgY2FyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBjYXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyQXBpO1xuIiwiaW1wb3J0IEVuZ2luZUFwaSBmcm9tICcuL2VuZ2luZUFwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFbmdpbmVBcGkoKTtcbiIsImltcG9ydCB7IFNFUlZFUl9VUkwgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvc2VydmVyQ29uc3RhbnRzJztcbmltcG9ydCB7IENhckRyaXZlU3RhdHVzLCBDYXJFbmdpbmUgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXIvY2FyLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgSUVuZ2luZUFwaSB9IGZyb20gJy4vZW5naW5lQXBpLmludGVyZmFjZSc7XG5cbmNsYXNzIEVuZ2luZUFwaSBpbXBsZW1lbnRzIElFbmdpbmVBcGkge1xuICBwcml2YXRlIHNlcnZlclVSTDogc3RyaW5nID0gU0VSVkVSX1VSTDtcblxuICBhc3luYyBzdGFydEVuZ2luZShpZDogbnVtYmVyKTogUHJvbWlzZTxDYXJFbmdpbmU+IHtcbiAgICBjb25zdCBzdGF0dXMgPSAnc3RhcnRlZCc7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLnNlcnZlclVSTH0vZW5naW5lLz9pZD0ke2lkfSZzdGF0dXM9JHtzdGF0dXN9YCwge1xuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgIH0pO1xuICAgIGNvbnN0IGNhckVuZ2luZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gY2FyRW5naW5lO1xuICB9XG5cbiAgYXN5bmMgc3RvcEVuZ2luZShpZDogbnVtYmVyKTogUHJvbWlzZTxDYXJFbmdpbmU+IHtcbiAgICBjb25zdCBzdGF0dXMgPSAnc3RvcHBlZCc7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLnNlcnZlclVSTH0vZW5naW5lLz9pZD0ke2lkfSZzdGF0dXM9JHtzdGF0dXN9YCwge1xuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgIH0pO1xuICAgIGNvbnN0IGNhckVuZ2luZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gY2FyRW5naW5lO1xuICB9XG5cbiAgYXN5bmMgc3RhcnREcml2ZShpZDogbnVtYmVyKTogUHJvbWlzZTxDYXJEcml2ZVN0YXR1cz4ge1xuICAgIGNvbnN0IHN0YXR1cyA9ICdkcml2ZSc7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLnNlcnZlclVSTH0vZW5naW5lLz9pZD0ke2lkfSZzdGF0dXM9JHtzdGF0dXN9YCwge1xuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgIH0pO1xuICAgIGNvbnN0IGNhckRyaXZlU3RhdHVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBjYXJEcml2ZVN0YXR1cztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbmdpbmVBcGk7XG4iLCJpbXBvcnQgV2lubmVyc0FwaSBmcm9tICcuL3dpbm5lcnNBcGknO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgV2lubmVyc0FwaSgpO1xuIiwiaW1wb3J0IHsgU0VSVkVSX1VSTCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9zZXJ2ZXJDb25zdGFudHMnO1xuaW1wb3J0IHsgV2lubmVyIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FyL2Nhci5pbnRlcmZhY2VzJztcbmltcG9ydCB7IElXaW5uZXJzQXBpIH0gZnJvbSAnLi93aW5uZXJzQXBpLmludGVyZmFjZSc7XG5cbmNsYXNzIFdpbm5lcnNBcGkgaW1wbGVtZW50cyBJV2lubmVyc0FwaSB7XG4gIHByaXZhdGUgc2VydmVyVVJMOiBzdHJpbmcgPSBTRVJWRVJfVVJMO1xuXG4gIGFzeW5jIGdldFdpbm5lcnMocGFnZTogbnVtYmVyLCBsaW1pdDogbnVtYmVyKTogUHJvbWlzZTxXaW5uZXJbXT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5zZXJ2ZXJVUkx9L3dpbm5lcnMvP19wYWdlPSR7cGFnZX0mX2xpbWl0PSR7bGltaXR9YCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICB9KTtcbiAgICBjb25zdCB3aW5uZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3aW5uZXJzO1xuICB9XG5cbiAgYXN5bmMgZ2V0V2lubmVyKGlkOiBudW1iZXIpOiBQcm9taXNlPFdpbm5lcj4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5zZXJ2ZXJVUkx9L3dpbm5lcnMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgIH0pO1xuICAgIGNvbnN0IHdpbm5lciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2lubmVyO1xuICB9XG5cbiAgYXN5bmMgZ2V0VG90YWxDb3VudE9mV2lubmVycygpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICBjb25zdCBwYWdlID0gMDtcbiAgICBjb25zdCBsaW1pdCA9IDA7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLnNlcnZlclVSTH0vd2lubmVycy8/X3BhZ2U9JHtwYWdlfSZfbGltaXQ9JHtsaW1pdH1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgIH0pO1xuICAgIGNvbnN0IHRvdGFsQ291bnRPZldpbm5lcnMgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpO1xuICAgIHJldHVybiB0b3RhbENvdW50T2ZXaW5uZXJzO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlV2lubmVyKHdpbm5lclRvU2VydmVyOiBXaW5uZXIpOiBQcm9taXNlPFdpbm5lcj4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5zZXJ2ZXJVUkx9L3dpbm5lcnNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh3aW5uZXJUb1NlcnZlciksXG4gICAgfSk7XG4gICAgY29uc3Qgd2lubmVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3aW5uZXI7XG4gIH1cblxuICBhc3luYyBkZWxldGVXaW5uZXIoaWQ6IG51bWJlcik6IFByb21pc2U8V2lubmVyPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLnNlcnZlclVSTH0vd2lubmVycy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgfSk7XG4gICAgY29uc3Qgd2lubmVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3aW5uZXI7XG4gIH1cblxuICBhc3luYyB1cGRhdGVXaW5uZXIoaWQ6IG51bWJlciwgd2lubmVyVG9TZXJ2ZXI6IFdpbm5lcik6IFByb21pc2U8V2lubmVyPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLnNlcnZlclVSTH0vd2lubmVycy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkod2lubmVyVG9TZXJ2ZXIpLFxuICAgIH0pO1xuICAgIGNvbnN0IHdpbm5lciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2lubmVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpbm5lcnNBcGk7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuLi9tb2RlbC9nYW1lL2dhbWUnO1xuaW1wb3J0IHsgSUFwcCB9IGZyb20gJy4vYXBwLmludGVyZmFjZSc7XG5cbmNsYXNzIEFwcCBpbXBsZW1lbnRzIElBcHAge1xuICBwdWJsaWMgZ2FtZTogR2FtZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImV4cG9ydCBjb25zdCBQQUdFX0lOSVRJQUxJWkVSID0gMTtcblxuZXhwb3J0IGNvbnN0IENPVU5UX09GX0NBUlNfUEVSX1BBR0UgPSA3O1xuXG5leHBvcnQgY29uc3QgQ09VTlRfT0ZfV0lOTkVSU19QRVJfUEFHRSA9IDEwO1xuXG5leHBvcnQgY29uc3QgQ09VTlRfT0ZfR0VORVJBVEVEX0NBUlMgPSAxMDA7XG5cbmV4cG9ydCBjb25zdCBNSUxMSVNFQ09ORFMgPSAxMDAwO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuZXhwb3J0IGNvbnN0IGVudW0gQ3JlYXRlRm9ybURlZmF1bHRWYWx1ZXMge1xuICBDQVJfTU9ERUwgPSAnVW5rbm93bicsXG4gIENBUl9DT0xPUiA9ICcjMDAwMDAwJyxcbn1cblxuZXhwb3J0IGNvbnN0IEZMQUdfU1RSSU5HX1NWR19FTEVNRU5UID0gYDxzdmcgdmVyc2lvbj1cIjEuMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxud2lkdGg9XCI0MHB4XCIgaGVpZ2h0PVwiNjRweFwiIHZpZXdCb3g9XCIwIDAgODA0LjAwMDAwMCAxMjgwLjAwMDAwMFwiXG5wcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLDEyODAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCJcbmZpbGw9XCIjODRkNTE5XCIgc3Ryb2tlPVwibm9uZVwiPlxuPHBhdGggZD1cIk0yMjAgMTI3ODQgYy0yMTUgLTc4IC0yODUgLTMyMCAtMTQ3IC01MDYgMjcgLTM2IDgyIC03NCAxNDMgLTk4IGw0OVxuLTE5IC04MyAtMSBjLTc5IDAgLTg1IC0yIC0xMTQgLTMwIC0yNSAtMjYgLTI5IC0zNiAtMjQgLTYzIDkgLTQ2IDM3IC02OCA5MFxuLTc0IGw0NiAtNiAwIC01OTkzIDAgLTU5OTQgMTM1IDAgMTM1IDAgMCAzNzgwIGMwIDIwNzkgMiAzNzgwIDQgMzc4MCAzIDAgNDBcbi0xNiA4MyAtMzYgMzIwIC0xNDcgNjY1IC0yNDIgMTA1MyAtMjkwIDE5NyAtMjQgNTk4IC0yOSA4MzUgLTEwIDQ5NCA0MCA5NTRcbjEyOCAxOTE4IDM2NyA3ODIgMTk0IDEyOTAgMjg3IDE3NDIgMzIwIDIzNSAxNyA2NzggNyA4NzQgLTIwIDM5MSAtNTUgNjQ5XG4tMTMxIDEwNjkgLTMxOCA5IC00IDEyIDQ0MSAxMiAyMjA5IGwwIDIyMTQgLTEzMiA1OCBjLTYwNyAyNjcgLTEyNzAgMzUwXG4tMjA3MyAyNjAgLTM4NyAtNDMgLTg0MSAtMTM1IC0xNjg1IC0zNDMgLTc0NiAtMTgzIC0xMTY2IC0yNjQgLTE2MjUgLTMxM1xuLTE4NyAtMjAgLTc5NiAtMTcgLTk1OSA1IC0zNzcgNTEgLTcwNiAxNDMgLTEwMTEgMjgxIGwtOTYgNDMgNDcgNiBjNTMgNiA4MVxuMjggOTAgNzQgNSAyNyAxIDM3IC0yNCA2MyAtMjkgMjkgLTM0IDMwIC0xMTQgMzAgbC04MyAwIDU5IDI1IGM4NSAzNSAxMzIgODBcbjE3NCAxNjUgMjMgNDYgMjcgNjggMjcgMTM1IC0xIDcxIC00IDg3IC0zNCAxNDMgLTM4IDcwIC03MCAxMDEgLTE0NCAxMzggLTY1XG4zNCAtMTcyIDQxIC0yMzcgMTh6XCIvPlxuPC9nPlxuPC9zdmc+XG5gO1xuXG5leHBvcnQgY29uc3QgQ0FSX1NUUklOR19TVkdfRUxFTUVOVCA9IGA8c3ZnIHZlcnNpb249XCIxLjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbndpZHRoPVwiNzhweFwiIHZpZXdCb3g9XCIwIDAgMTI4MC4wMDAwMDAgNjQwLjAwMDAwMFwiXG5wcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLDY0MC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMClcIiBzdHJva2U9XCJub25lXCI+XG48cGF0aCBkPVwiTTM2MDUgNTMzNSBjLTUgLTEgLTM4IC0xMCAtNzEgLTIwIGwtNjIgLTE3IC03IC03OSBjLTUgLTY2IC0xMCAtODJcbi0yOCAtOTQgLTMwIC0xOSAtMTczIC03NSAtNTQ3IC0yMTUgLTQ4MiAtMTgwIC0xMDc4IC00MjUgLTEyMTUgLTUwMCAtMTQ4IC04MVxuLTIzMCAtMTA1IC00MTAgLTEyMCAtNzEgLTYgLTE3MyAtMTkgLTIyNSAtMzAgLTE0MyAtMjggLTM0MiAtNDkgLTU1OCAtNTZcbmwtMTkzIC03IC0yOCAtMzYgYy01NiAtNzEgLTc0IC0xMjMgLTQ3IC0xMzggMTggLTExIDM2IC00NyAzNiAtNzQgMCAtMTIgLTEyXG4tNTIgLTI3IC04OCAtMjYgLTYzIC0yOCAtNzYgLTMxIC0yNTkgbC00IC0xOTIgLTMzIC0yNiBjLTY4IC01MSAtMTAzIC0xMjZcbi0xMzUgLTI4NCAtMjQgLTExMyAtMjUgLTE4NyAtNSAtMjk4IDEwIC01NCAxMiAtOTYgNiAtMTIwIC01IC0yNiAtMiAtNzIgMTNcbi0xNTMgbDIxIC0xMTYgNjMgLTUyIGM1NSAtNDYgODcgLTg0IDE2OCAtMjAwIDQ5IC02OSAyOTMgLTEzMyA2NzQgLTE3NiAxNDZcbi0xNiA1MTcgLTQyIDY3MCAtNDcgbDk1IC0zIC0zIDEyNSBjLTEzIDUyNSAzMjEgOTY3IDgzMyAxMTAxIDc5IDIxIDExMiAyNFxuMjY1IDIzIDE1NSAwIDE4NiAtMyAyNzEgLTI2IDM5NSAtMTA2IDY4NiAtNDA0IDc5MCAtODA3IDM1IC0xMzQgMzYgLTM2OSAzXG4tNTY1IGwtNyAtMzggMjk4OSA3IGMxNjQ0IDQgMjk5MiA5IDI5OTUgMTEgMyAyIC0zIDM2IC0xNCA3NiAtMTcgNjAgLTIwIDEwNFxuLTIxIDI1MyAwIDE2NCAyIDE4OSAyNiAyNzcgMTA1IDM4NiA0MDEgNjgyIDc4NiA3ODYgODggMjMgMTE0IDI2IDI3NyAyNiAxNTFcbjAgMTkyIC00IDI1NSAtMjEgMjA4IC01OCAzNTEgLTEzNyA0OTQgLTI3NCAxOTIgLTE4MyAzMDMgLTQwMiAzMzcgLTY2NCAxM1xuLTEwMSA2IC0yNTcgLTE1IC0zNTAgLTggLTMzIC0xMiAtNjMgLTEwIC02NyAzIC01IDI5IC02IDU3IC0zIDI5IDMgMTE1IDEwXG4xOTIgMTYgMjA0IDE2IDM0NSA0MiAzOTkgNzMgNDYgMjcgOTUgODggMTIyIDE1MiAxMyAzMiAxMyA1MyAtMSAxOTUgLTE0IDE0M1xuLTE0IDE2OCAwIDI0NyAyMiAxMjcgNDUgMzIzIDUyIDQzMiA2IDExMSAtMjIgMjgyIC01OSAzNTkgLTkzIDE5NSAtNDUzIDM0MlxuLTEyNjcgNTE2IC04MTcgMTc0IC0xNDQyIDI0NCAtMjE4MSAyNDUgLTI1NCAwIC0yNTYgMSAtMzczIDgzIC0xOTEgMTM1IC0xMTU0XG42NjcgLTE1MTcgODM5IC0zNDQgMTYzIC03NDAgMjU1IC0xMzIwIDMwNSAtMTY2IDE0IC0zMDggMTggLTc1NSAxNyAtNTM5IDBcbi02MjQgLTMgLTEyNjIgLTQ2IGwtMTgyIC0xMiAtNzggNDYgYy0xMDUgNjAgLTE1NSA3NiAtMTk4IDYzeiBtMTg0NiAtMjk1IGM0XG4tMTkgNDIgLTI0OSA4MyAtNTEwIDQyIC0yNjEgNzggLTQ5MSA4MiAtNTExIDQgLTI2IDIgLTM3IC03IC00MSAtMjAgLTYgLTEzNTZcbjE4IC0xNjk0IDMyIC00MDAgMTYgLTY0NyAzOCAtNzYzIDY5IC03NCAyMCAtMTc5IDExOCAtMjI5IDIxNCAtMjUgNDYgLTI4IDYzXG4tMjggMTQ3IDAgMTM2IDE4IDE4MCA5OSAyMzIgMjM5IDE1NCA2NjUgMjc0IDEyMTYgMzQyIDM2OCA0NSA2NzcgNjQgMTAxNSA2MlxubDIxOSAtMSA3IC0zNXogbTg2MyAtNSBjMzUzIC01MSA2OTcgLTEyNCA4NzQgLTE4NiAxMTEgLTM5IDM4NyAtMTgxIDU2NyAtMjkyXG4yMDMgLTEyNCAzNzAgLTI0MCAzNzAgLTI1NSAwIC03IC0yNCAtMjEgLTUzIC0zMSAtMTEyIC0zOCAtMTM0IC04OCAtMTE5IC0yNjZcbmwyIC0zMCAtOTAxIC0zIGMtNzE0IC0yIC05MDQgMSAtOTExIDEwIC0zOSA0OSAtMzUzIDk5OCAtMzUzIDEwNjYgbDAgMjUgMTc2XG4tNyBjOTcgLTQgMjU0IC0xOCAzNDggLTMxelwiLz5cbjxwYXRoIGZpbGw9XCIjMDAwXCIgZD1cIk0yNjcwIDMxMjQgYy00ODAgLTg3IC04MTggLTQyOSAtODgwIC04OTIgLTUxIC0zNzIgMTE3IC03NTggNDI2XG4tOTc4IDc5IC01NiAyMjcgLTEyNyAzMjMgLTE1MyA1NTYgLTE1MyAxMTM0IDE4MSAxMjc4IDczOCAxMjcgNDk3IC0xMzEgMTAxN1xuLTYwMiAxMjEzIC0xMjkgNTMgLTIxNyA3MSAtMzc1IDc0IC04MCAxIC0xNTYgMCAtMTcwIC0yeiBtMzY1IC0zMDQgYzMzNSAtMTA1XG41NTIgLTQxNyA1MzIgLTc2NSAtMjUgLTQzMyAtNDEzIC03NjAgLTgzNyAtNzA2IC0xNzIgMjIgLTMyMiA5NCAtNDQxIDIxMVxuLTIwOCAyMDUgLTI4MCA0OTkgLTE4OSA3NzIgNDAgMTE4IDg3IDE5NSAxNzMgMjg1IDEwOSAxMTMgMjM1IDE4NSAzODIgMjE5IDkwXG4yMSAyOTEgMTIgMzgwIC0xNnpcIi8+XG48cGF0aCBmaWxsPVwiIzAwMFwiIGQ9XCJNMjYxNSAyNjk0IGMtNjYgLTI0IC0xNDUgLTY3IC0xNDUgLTc4IDAgLTE5IDIwNyAtMjE5IDIxOSAtMjEyIDcgNVxuMTEgNTggMTEgMTU3IDAgMTQ4IDAgMTQ5IC0yMiAxNDggLTEzIDAgLTQxIC03IC02MyAtMTV6XCIvPlxuPHBhdGggZmlsbD1cIiMwMDBcIiBkPVwiTTI5MzAgMjU2MSBjMCAtOTkgNCAtMTUyIDExIC0xNTcgMTIgLTcgMjE5IDE5MyAyMTkgMjEyIDAgMjAgLTE2N1xuOTQgLTIxMSA5NCAtMTggMCAtMTkgLTEwIC0xOSAtMTQ5elwiLz5cbjxwYXRoIGZpbGw9XCIjMDAwXCIgZD1cIk0zMjI1IDIzNDAgYy04OSAtODkgLTEwNyAtMTEyIC05NSAtMTIwIDggLTYgNzcgLTkgMTU1IC03IGwxNDAgMiAtM1xuMzUgYy0yIDI5IC03NCAyMDAgLTg0IDIwMCAtMiAwIC01MyAtNTAgLTExMyAtMTEwelwiLz5cbjxwYXRoIGZpbGw9XCIjMDAwXCIgZD1cIk0yMjUyIDIzNzMgYy00NyAtMTA1IC01NyAtMTQ0IC00MSAtMTU0IDE5IC0xMiAyNzAgLTExIDI4OSAxIDEyIDhcbi01IDMwIC05MCAxMTUgLTU3IDU4IC0xMTAgMTA1IC0xMTYgMTA1IC02IDAgLTI1IC0zMCAtNDIgLTY3elwiLz5cbjxwYXRoIGZpbGw9XCIjMDAwXCIgZD1cIk0yNzkwIDIzMTYgYzAgLTEzIDYgLTI2IDEzIC0yOSAyMiAtNyAzNyA0IDM3IDI5IDAgMTkgLTUgMjQgLTI1IDI0XG4tMjAgMCAtMjUgLTUgLTI1IC0yNHpcIi8+XG48cGF0aCBmaWxsPVwiIzAwMFwiIGQ9XCJNMjc1NSAyMTU1IGMtMzUgLTM0IC0zMyAtNzggNCAtMTE2IDM4IC0zOCA3NCAtMzggMTEyIDAgNTYgNTcgMjNcbjE0MSAtNTYgMTQxIC0yNSAwIC00NCAtOCAtNjAgLTI1elwiLz5cbjxwYXRoIGZpbGw9XCIjMDAwXCIgZD1cIk0yNTgyIDIxMjEgYy0yMSAtMTMgLTEwIC00NiAxNiAtNDkgMjcgLTQgNDAgMjIgMjIgNDMgLTE0IDE3IC0yMCAxOFxuLTM4IDZ6XCIvPlxuPHBhdGggZmlsbD1cIiMwMDBcIiBkPVwiTTMwMTAgMjExNSBjLTE4IC0yMSAtNSAtNDcgMjIgLTQzIDI2IDMgMzcgMzYgMTYgNDkgLTE4IDEyIC0yNCAxMVxuLTM4IC02elwiLz5cbjxwYXRoIGZpbGw9XCIjMDAwXCIgZD1cIk0yMjA1IDE5NDggYzExIC00OSA1MyAtMTUwIDc1IC0xNzggbDE5IC0yNSAxMDYgMTA1IGM1OCA1NyAxMDUgMTEwXG4xMDUgMTE3IDAgMTAgLTM3IDEzIC0xNTYgMTMgbC0xNTYgMCA3IC0zMnpcIi8+XG48cGF0aCBmaWxsPVwiIzAwMFwiIGQ9XCJNMzEyMCAxOTY3IGMwIC0yMCAyMDYgLTIyMCAyMTkgLTIxMyAyMiAxNCA5MSAxNzQgOTEgMjEzIDAgMTAgLTMyXG4xMyAtMTU1IDEzIC0xMTggMCAtMTU1IC0zIC0xNTUgLTEzelwiLz5cbjxwYXRoIGZpbGw9XCIjMDAwXCIgZD1cIk0yNzk0IDE4OTYgYy05IC0yNCA0IC00OCAyMyAtNDQgMTIgMiAxOCAxMiAxOCAyOCAwIDI5IC0zMiA0MSAtNDFcbjE2elwiLz5cbjxwYXRoIGZpbGw9XCIjMDAwXCIgZD1cIk0yNTcyIDE2ODcgYy01NiAtNTYgLTEwMiAtMTA2IC0xMDIgLTExMCAwIC0xOSAyMTAgLTEwNCAyMjQgLTkwIDMgNFxuNiA3MyA2IDE1NSAwIDExMyAtMyAxNDggLTEzIDE0OCAtNyAwIC01OCAtNDYgLTExNSAtMTAzelwiLz5cbjxwYXRoIGZpbGw9XCIjMDAwXCIgZD1cIk0yOTMwIDE2NDEgYzAgLTgzIDQgLTE1MiA5IC0xNTUgMjAgLTEyIDIyMSA3MiAyMjEgOTIgMCAxMyAtMjA1IDIxMlxuLTIxNyAyMTIgLTEwIDAgLTEzIC0zNSAtMTMgLTE0OXpcIi8+XG48cGF0aCBmaWxsPVwiIzAwMFwiIGQ9XCJNMTA3NjUgMzEyMyBjLTIyOCAtMzUgLTQzNiAtMTQzIC01OTMgLTMwNyAtMTg2IC0xOTQgLTI3NyAtNDA1IC0yODlcbi02NjggLTkgLTIwMSAyNSAtMzYwIDExNSAtNTMxIDE5NCAtMzcxIDYwNyAtNTk0IDEwMTUgLTU0OCAyNDUgMjcgNDM3IDExNlxuNjEwIDI4MCA5OCA5NCAxNTggMTczIDIxMiAyODEgODQgMTY5IDExMCAyODQgMTA5IDQ4MCAtMiAxNzQgLTI4IDI5MSAtOTggNDM1XG4tMTA4IDIyMiAtMjczIDM4MyAtNTAwIDQ5MSAtMTQwIDY2IC0yMzQgODYgLTQwNiA5MCAtODAgMSAtMTU4IDAgLTE3NSAtM3pcbm0zODAgLTMwNyBjMTE5IC00MCAyMDggLTk3IDMwNSAtMTk1IDE0NyAtMTQ4IDIxNCAtMzExIDIxNCAtNTIxIDAgLTEyMyAtMTFcbi0xODYgLTU0IC0yOTAgLTc2IC0xOTAgLTI0MiAtMzQ4IC00MzggLTQyMCAtMzY0IC0xMzMgLTc2NSAyOSAtOTMyIDM3NSAtNjVcbjEzNCAtODQgMjI2IC03NyAzNjkgOCAxNzAgNTAgMjg3IDE1MyA0MjIgMTA5IDE0NCAyNTYgMjM4IDQzOSAyODAgNDAgOSAxMDJcbjEzIDE4NSAxMCAxMDMgLTMgMTM5IC04IDIwNSAtMzB6XCIvPlxuPHBhdGggZmlsbD1cIiMwMDBcIiBkPVwiTTEwNzAyIDI2OTAgYy02NyAtMjQgLTEzMiAtNjEgLTEzMiAtNzUgMCAtMTggMjA3IC0yMTggMjE5IC0yMTEgNyA1XG4xMSA1OCAxMSAxNTcgMCAxNzEgNSAxNjUgLTk4IDEyOXpcIi8+XG48cGF0aCBmaWxsPVwiIzAwMFwiIGQ9XCJNMTEwMzAgMjU1NiBjMCAtMTE5IDMgLTE1NiAxMyAtMTU2IDcgMCA1OSA0NyAxMTYgMTA0IDg1IDg1IDEwMiAxMDdcbjkzIDExOSAtMTYgMTkgLTEzOSA3NCAtMTg0IDgyIGwtMzggNyAwIC0xNTZ6XCIvPlxuPHBhdGggZmlsbD1cIiMwMDBcIiBkPVwiTTEwMzY3IDI0MDkgYy0zNCAtNjAgLTcxIC0xNjUgLTY0IC0xODQgNSAtMTIgMjkgLTE1IDE0NCAtMTUgNzYgMFxuMTQ1IDUgMTUzIDEwIDEyIDggLTcgMzEgLTk2IDEyMSBsLTExMiAxMTIgLTI1IC00NHpcIi8+XG48cGF0aCBmaWxsPVwiIzAwMFwiIGQ9XCJNMTEzMjAgMjMzNSBjLTg1IC04NSAtMTAyIC0xMDcgLTkwIC0xMTUgMTggLTEyIDI3MCAtMTMgMjg4IC0yIDIzXG4xNSAtNTEgMjA4IC04MyAyMTkgLTYgMiAtNTcgLTQ0IC0xMTUgLTEwMnpcIi8+XG48cGF0aCBmaWxsPVwiIzAwMFwiIGQ9XCJNMTA4ODYgMjMyMyBjLTUgLTExIC0xIC0yMiA5IC0zMCAyMyAtMTYgNDcgLTUgNDMgMjEgLTQgMjcgLTQzIDM0XG4tNTIgOXpcIi8+XG48cGF0aCBmaWxsPVwiIzAwMFwiIGQ9XCJNMTA4NTUgMjE1NSBjLTQ3IC00NiAtMjQgLTEyNSA0MiAtMTQxIDUzIC0xNCAxMTMgNDYgOTkgOTkgLTE2IDY3XG4tOTQgOTAgLTE0MSA0MnpcIi8+XG48cGF0aCBmaWxsPVwiIzAwMFwiIGQ9XCJNMTA2ODIgMjEyMSBjLTIwIC0xMiAtMTAgLTQ2IDE0IC00OSAyNSAtNCA0MCAyNCAyMyA0NCAtMTMgMTYgLTE5XG4xNyAtMzcgNXpcIi8+XG48cGF0aCBmaWxsPVwiIzAwMFwiIGQ9XCJNMTExMTAgMjExNSBjLTE3IC0yMCAtNSAtNDUgMjAgLTQ1IDExIDAgMjMgNyAyNiAxNSA2IDE1IC0xMSA0NSAtMjZcbjQ1IC00IDAgLTEzIC03IC0yMCAtMTV6XCIvPlxuPHBhdGggZmlsbD1cIiMwMDBcIiBkPVwiTTEwMzA1IDE5NDMgYzggLTQ2IDY4IC0xNzcgODUgLTE4OCAxNCAtOCAyMjAgMTkxIDIyMCAyMTIgMCAxMCAtMzdcbjEzIC0xNTYgMTMgbC0xNTYgMCA3IC0zN3pcIi8+XG48cGF0aCBmaWxsPVwiIzAwMFwiIGQ9XCJNMTEyMjAgMTk2NyBjMCAtMTIgMTk5IC0yMTcgMjEyIC0yMTcgMTUgMCA4MCAxMzcgOTMgMTk4IGw3IDMyIC0xNTZcbjAgYy0xMTkgMCAtMTU2IC0zIC0xNTYgLTEzelwiLz5cbjxwYXRoIGZpbGw9XCIjMDAwXCIgZD1cIk0xMDg5MCAxODk1IGMtMTEgLTEzIC0xMSAtMTkgMyAtMzIgMjEgLTIxIDQ5IC05IDQ1IDE5IC00IDI4IC0zMCAzNVxuLTQ4IDEzelwiLz5cbjxwYXRoIGZpbGw9XCIjMDAwXCIgZD1cIk0xMDY3MiAxNjg3IGMtNTYgLTU2IC0xMDIgLTEwNSAtMTAyIC0xMDkgMCAtMjIgMjAwIC0xMDUgMjIxIC05MiA1XG4zIDkgNzIgOSAxNTUgMCAxMTQgLTMgMTQ5IC0xMyAxNDkgLTcgMCAtNTggLTQ2IC0xMTUgLTEwM3pcIi8+XG48cGF0aCBmaWxsPVwiIzAwMFwiIGQ9XCJNMTEwMzAgMTYzNSBjMCAtODUgMSAtMTU1IDMgLTE1NSAzNiAwIDIyNyA4MiAyMjcgOTcgMCAxMyAtMjA0IDIxM1xuLTIxNyAyMTMgLTEwIDAgLTEzIC0zNyAtMTMgLTE1NXpcIi8+XG48L2c+XG48L3N2Zz5cbmA7XG4iLCJleHBvcnQgY29uc3QgU0VSVkVSX1VSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAnO1xuIiwiaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4vZXZlbnRCdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgRXZlbnRCdXMoKTtcbiIsImltcG9ydCB7IElFdmVudEJ1cywgU3Vic2NyaWJlciwgUmVnaXN0cnkgfSBmcm9tICcuL2V2ZW50QnVzLmludGVyZmFjZSc7XG5cbmNsYXNzIEV2ZW50QnVzIGltcGxlbWVudHMgSUV2ZW50QnVzIHtcbiAgcHJpdmF0ZSBzdWJzY3JpYmVyczogU3Vic2NyaWJlcjtcblxuICBwcml2YXRlIHN0YXRpYyBuZXh0SWQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMgPSB7fTtcbiAgfVxuXG4gIGRpc3BhdGNoPFQ+KGV2ZW50OiBzdHJpbmcsIGFyZz86IFQpOiB2b2lkIHtcbiAgICBjb25zdCBzdWJzY3JpYmVyID0gdGhpcy5zdWJzY3JpYmVyc1tldmVudF07XG5cbiAgICBpZiAoc3Vic2NyaWJlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc3Vic2NyaWJlcikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBzdWJzY3JpYmVyW2tleV0oYXJnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlZ2lzdGVyPFQ+KGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiAoYXJnOiBUKSA9PiB2b2lkKTogUmVnaXN0cnkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5nZXROZXh0SWQoKTtcbiAgICBpZiAoIXRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdKSB0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSA9IHt9O1xuXG4gICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudF1baWRdID0gY2FsbGJhY2s7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdW5yZWdpc3RlcjogKCkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zdWJzY3JpYmVyc1tldmVudF1baWRdO1xuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnN1YnNjcmliZXJzW2V2ZW50XSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnRdO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldE5leHRJZCgpOiBudW1iZXIge1xuICAgIEV2ZW50QnVzLm5leHRJZCArPSAxO1xuICAgIHJldHVybiBFdmVudEJ1cy5uZXh0SWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRCdXM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IEVuZ2luZUFwaSBmcm9tICcuLi8uLi9hcGkvZW5naW5lQXBpL2VuZ2luZUFwaS5zaW5nbGV0b24nO1xuaW1wb3J0IHsgTUlMTElTRUNPTkRTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2dhbWVDb25zdGFudHMnO1xuaW1wb3J0IHsgRXZlbnRCdXNFdmVudHMgfSBmcm9tICcuLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5pbnRlcmZhY2UnO1xuaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4uLy4uL2V2ZW50QnVzL2V2ZW50QnVzLnNpbmdsZXRvbic7XG5pbXBvcnQgQ2FyRnJvbVNlcnZlciwgeyBJQ2FyLCBXaW5SYWNlQ2FyIH0gZnJvbSAnLi9jYXIuaW50ZXJmYWNlcyc7XG5cbmNsYXNzIENhciBpbXBsZW1lbnRzIElDYXIge1xuICBwdWJsaWMgY2FyOiBDYXJGcm9tU2VydmVyO1xuXG4gIHB1YmxpYyBpc1JhY2U6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoY2FyOiBDYXJGcm9tU2VydmVyKSB7XG4gICAgdGhpcy5jYXIgPSBjYXI7XG4gICAgdGhpcy5pc1JhY2UgPSBmYWxzZTtcbiAgfVxuXG4gIGFzeW5jIHN0YXJ0RW5naW5lKGNhcjogSFRNTEVsZW1lbnQsIGlzUmFjZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghY2FyKSByZXR1cm47XG4gICAgdGhpcy5pc1JhY2UgPSBpc1JhY2U7XG4gICAgY29uc3QgY2FyRW5naW5lID0gYXdhaXQgRW5naW5lQXBpLnN0YXJ0RW5naW5lKHRoaXMuY2FyLmlkISk7XG5cbiAgICBjb25zdCBhbmltYXRpb25EdXJhdGlvbiA9IGNhckVuZ2luZS5kaXN0YW5jZSAvIGNhckVuZ2luZS52ZWxvY2l0eTtcblxuICAgIHRoaXMuc3RhcnRDYXJBbmltYXRpb24oYW5pbWF0aW9uRHVyYXRpb24sIGNhcik7XG4gIH1cblxuICBhc3luYyBzdGFydENhckFuaW1hdGlvbihhbmltYXRpb25EdXJhdGlvbjogbnVtYmVyLCBjYXI6IEhUTUxFbGVtZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IGlzQ2FyRmluaXNoZWQgPSBmYWxzZTtcbiAgICBsZXQgaXNCcm9rZUVuZ2luZSA9IGZhbHNlO1xuXG4gICAgY2FyLmNsYXNzTGlzdC5hZGQoJ2Nhci1kcml2ZScpO1xuXG4gICAgY2FyLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gYCR7YW5pbWF0aW9uRHVyYXRpb24gLyBNSUxMSVNFQ09ORFN9c2A7XG5cbiAgICBjYXIuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgaXNDYXJGaW5pc2hlZCA9IHRydWU7XG4gICAgICB0aGlzLnN0b3BDYXJBbmltYXRpb24oY2FyLCBpc0Jyb2tlRW5naW5lLCBpc0NhckZpbmlzaGVkKTtcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBFbmdpbmVBcGkuc3RhcnREcml2ZSh0aGlzLmNhci5pZCEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihgVGhlICR7dGhpcy5jYXIubmFtZX0gZW5naW5lIGJyb2tlIGRvd25gKTtcbiAgICAgIGlzQnJva2VFbmdpbmUgPSB0cnVlO1xuICAgICAgdGhpcy5zdG9wQ2FyQW5pbWF0aW9uKGNhciwgaXNCcm9rZUVuZ2luZSwgaXNDYXJGaW5pc2hlZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzdG9wQ2FyQW5pbWF0aW9uKFxuICAgIGNhcjogSFRNTEVsZW1lbnQsXG4gICAgaXNCcm9rZUVuZ2luZTogYm9vbGVhbixcbiAgICBpc0NhckZpbmlzaGVkOiBib29sZWFuXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChpc0NhckZpbmlzaGVkICYmIHRoaXMuaXNSYWNlKSB7XG4gICAgICBjb25zdCB3aW5SYWNlQ2FyID0ge1xuICAgICAgICBpZDogdGhpcy5jYXIuaWQsXG4gICAgICAgIG5hbWU6IHRoaXMuY2FyLm5hbWUsXG4gICAgICAgIHRpbWU6IHBhcnNlRmxvYXQocGFyc2VGbG9hdChjYXIuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24pLnRvRml4ZWQoMikpLFxuICAgICAgfSBhcyBXaW5SYWNlQ2FyO1xuXG4gICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9DQVJfV0lOX0lOX1JBQ0UsIHdpblJhY2VDYXIpO1xuICAgIH1cblxuICAgIGlmIChpc0Jyb2tlRW5naW5lKSB7XG4gICAgICB0aGlzLnN0b3BBbmltYXRpb24oY2FyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0b3BBbmltYXRpb24oY2FyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNhci5zdHlsZS5hbmltYXRpb25QbGF5U3RhdGUgPSAncGF1c2VkJztcbiAgfVxuXG4gIGFzeW5jIHN0b3BFbmdpbmUoY2FyOiBIVE1MRWxlbWVudCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IEVuZ2luZUFwaS5zdG9wRW5naW5lKHRoaXMuY2FyLmlkISk7XG5cbiAgICB0aGlzLnJlbW92ZUFuaW1hdGlvbihjYXIpO1xuICAgIHRoaXMucmVzZXRBbmltYXRpb24oY2FyKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlQW5pbWF0aW9uKGNhcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjYXIuY2xhc3NMaXN0LnJlbW92ZSgnY2FyLWRyaXZlJyk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0QW5pbWF0aW9uKGNhcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjYXIuc3R5bGUuYW5pbWF0aW9uUGxheVN0YXRlID0gJyc7XG4gICAgY2FyLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gJyc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyO1xuIiwiaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4uLy4uL3ZpZXcvZ2FtZVZpZXcvZ2FtZVZpZXcnO1xuaW1wb3J0IEdhcmFnZSBmcm9tICcuLi9nYXJhZ2UvZ2FyYWdlJztcbmltcG9ydCBXaW5uZXJzIGZyb20gJy4uL3dpbm5lcnMvd2lubmVycyc7XG5pbXBvcnQgeyBJR2FtZSB9IGZyb20gJy4vZ2FtZS5pbnRlcmZhY2UnO1xuXG5jbGFzcyBHYW1lIGltcGxlbWVudHMgSUdhbWUge1xuICBwdWJsaWMgZ2FyYWdlOiBHYXJhZ2U7XG5cbiAgcHVibGljIHdpbm5lcnM6IFdpbm5lcnM7XG5cbiAgcHVibGljIGdhbWVWaWV3OiBHYW1lVmlldztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhcmFnZSA9IG5ldyBHYXJhZ2UoKTtcbiAgICB0aGlzLndpbm5lcnMgPSBuZXcgV2lubmVycygpO1xuXG4gICAgdGhpcy5nYW1lVmlldyA9IG5ldyBHYW1lVmlldygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgQ2FyQXBpIGZyb20gJy4uLy4uL2FwaS9jYXJBcGkvY2FyQXBpLnNpbmdsZXRvbic7XG5pbXBvcnQge1xuICBQQUdFX0lOSVRJQUxJWkVSLFxuICBDT1VOVF9PRl9DQVJTX1BFUl9QQUdFLFxuICBDT1VOVF9PRl9HRU5FUkFURURfQ0FSUyxcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2dhbWVDb25zdGFudHMnO1xuXG5pbXBvcnQgeyBFdmVudEJ1c0V2ZW50cyB9IGZyb20gJy4uLy4uL2V2ZW50QnVzL2V2ZW50QnVzLmludGVyZmFjZSc7XG5pbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi4vLi4vZXZlbnRCdXMvZXZlbnRCdXMuc2luZ2xldG9uJztcbmltcG9ydCB7IGdldEdlbmVyYXRlZENhck5hbWUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ2V0R2VuZXJhdGVkQ2FyTmFtZSc7XG5pbXBvcnQgeyBnZXRHZW5lcmF0ZWRDb2xvciB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9nZXRHZW5lcmF0ZWRDb2xvcic7XG5pbXBvcnQgQ2FyVG9TZXJ2ZXIgZnJvbSAnLi4vY2FyL2Nhci5pbnRlcmZhY2VzJztcbmltcG9ydCBSYWNlIGZyb20gJy4uL3JhY2UvcmFjZSc7XG5pbXBvcnQgeyBJR2FyYWdlIH0gZnJvbSAnLi9nYXJhZ2UuaW50ZXJmYWNlJztcblxuY2xhc3MgR2FyYWdlIGltcGxlbWVudHMgSUdhcmFnZSB7XG4gIHB1YmxpYyBwYWdlOiBudW1iZXI7XG5cbiAgcHVibGljIHJhY2U6IFJhY2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYWdlID0gUEFHRV9JTklUSUFMSVpFUjtcblxuICAgIHRoaXMucmFjZSA9IG5ldyBSYWNlKHRoaXMucGFnZSk7XG5cbiAgICB0aGlzLnN1YnNjcmliZUNyZWF0ZUNhckV2ZW50KCk7XG4gICAgdGhpcy5zdWJzY3JpYmVEZWxldGVDYXJFdmVudCgpO1xuICAgIHRoaXMuc3Vic2NyaWJlVXBkYXRlQ2FyRXZlbnQoKTtcblxuICAgIHRoaXMuc3Vic2NyaWJlQ2hhbmdlR2FyYWdlUGFnZUV2ZW50KCk7XG5cbiAgICB0aGlzLnN1YnNjcmliZUdlbmVyYXRlQ2Fyc0V2ZW50KCk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZUNyZWF0ZUNhckV2ZW50KCkge1xuICAgIEV2ZW50QnVzLnJlZ2lzdGVyKEV2ZW50QnVzRXZlbnRzLkVWRU5UX0NSRUFURV9DQVIsIGFzeW5jIChuZXdDYXJEYXRhOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgY29uc3QgY2FycyA9IGF3YWl0IENhckFwaS5nZXRDYXJzKHRoaXMucGFnZSwgQ09VTlRfT0ZfQ0FSU19QRVJfUEFHRSk7XG4gICAgICBjb25zdCBuZXdDYXIgPSBhd2FpdCBDYXJBcGkuY3JlYXRlQ2FyKHsgbmFtZTogbmV3Q2FyRGF0YVswXSwgY29sb3I6IG5ld0NhckRhdGFbMV0gfSk7XG5cbiAgICAgIHRoaXMucmFjZS5nZXRDYXJzKHRoaXMucGFnZSk7XG4gICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9VUERBVEVfR0FSQUdFX1RJVExFLCB0aGlzLnBhZ2UpO1xuXG4gICAgICBpZiAoY2Fycy5sZW5ndGggIT09IENPVU5UX09GX0NBUlNfUEVSX1BBR0UpIHtcbiAgICAgICAgRXZlbnRCdXMuZGlzcGF0Y2goRXZlbnRCdXNFdmVudHMuRVZFTlRfQUREX0NBUl9ST0FELCBuZXdDYXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVEZWxldGVDYXJFdmVudCgpIHtcbiAgICBFdmVudEJ1cy5yZWdpc3RlcihFdmVudEJ1c0V2ZW50cy5FVkVOVF9ERUxFVEVfQ0FSLCBhc3luYyAoY2FySWQ6IG51bWJlcikgPT4ge1xuICAgICAgYXdhaXQgQ2FyQXBpLmRlbGV0ZUNhcihjYXJJZCk7XG5cbiAgICAgIHRoaXMucmFjZS5nZXRDYXJzKHRoaXMucGFnZSk7XG5cbiAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX0RFTEVURV9DQVJfUk9BRCwgY2FySWQpO1xuICAgICAgRXZlbnRCdXMuZGlzcGF0Y2goRXZlbnRCdXNFdmVudHMuRVZFTlRfVVBEQVRFX0NBUl9ST0FEUywgdGhpcy5wYWdlKTtcbiAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1VQREFURV9HQVJBR0VfVElUTEUsIHRoaXMucGFnZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVVwZGF0ZUNhckV2ZW50KCkge1xuICAgIEV2ZW50QnVzLnJlZ2lzdGVyKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1VQREFURV9DQVIsIGFzeW5jIChjYXI6IENhclRvU2VydmVyKSA9PiB7XG4gICAgICBhd2FpdCBDYXJBcGkudXBkYXRlQ2FyKGNhci5pZCEsIHsgbmFtZTogY2FyLm5hbWUsIGNvbG9yOiBjYXIuY29sb3IgfSk7XG5cbiAgICAgIHRoaXMucmFjZS5nZXRDYXJzKHRoaXMucGFnZSk7XG5cbiAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1VQREFURV9DQVJfUk9BRCwgY2FyLmlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlQ2hhbmdlR2FyYWdlUGFnZUV2ZW50KCkge1xuICAgIEV2ZW50QnVzLnJlZ2lzdGVyKEV2ZW50QnVzRXZlbnRzLkVWRU5UX0NIQU5HRV9HQVJBR0VfUEFHRSwgKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgIHRoaXMucmFjZS5nZXRDYXJzKHRoaXMucGFnZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZUdlbmVyYXRlQ2Fyc0V2ZW50KCkge1xuICAgIEV2ZW50QnVzLnJlZ2lzdGVyKEV2ZW50QnVzRXZlbnRzLkVWRU5UX0dFTkVSQVRFX0NBUlMsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGNhcnNEYXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogQ09VTlRfT0ZfR0VORVJBVEVEX0NBUlMgfSwgKCkgPT4gKHtcbiAgICAgICAgbmFtZTogZ2V0R2VuZXJhdGVkQ2FyTmFtZSgpLFxuICAgICAgICBjb2xvcjogZ2V0R2VuZXJhdGVkQ29sb3IoKSxcbiAgICAgIH0pKTtcblxuICAgICAgY29uc3QgY3JlYXRlQ2FyUHJvbWlzZXMgPSBjYXJzRGF0YS5tYXAoKGNhckRhdGEpID0+IENhckFwaS5jcmVhdGVDYXIoY2FyRGF0YSkpO1xuXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChjcmVhdGVDYXJQcm9taXNlcyk7XG5cbiAgICAgIHRoaXMucmFjZS5nZXRDYXJzKHRoaXMucGFnZSk7XG5cbiAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1VQREFURV9DQVJfUk9BRFMsIHRoaXMucGFnZSk7XG4gICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9VUERBVEVfR0FSQUdFX1RJVExFLCB0aGlzLnBhZ2UpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhcmFnZTtcbiIsImltcG9ydCBDYXJBcGkgZnJvbSAnLi4vLi4vYXBpL2NhckFwaS9jYXJBcGkuc2luZ2xldG9uJztcbmltcG9ydCB7IENPVU5UX09GX0NBUlNfUEVSX1BBR0UgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvZ2FtZUNvbnN0YW50cyc7XG5pbXBvcnQgeyBFdmVudEJ1c0V2ZW50cyB9IGZyb20gJy4uLy4uL2V2ZW50QnVzL2V2ZW50QnVzLmludGVyZmFjZSc7XG5pbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi4vLi4vZXZlbnRCdXMvZXZlbnRCdXMuc2luZ2xldG9uJztcbmltcG9ydCBDYXIgZnJvbSAnLi4vY2FyL2Nhcic7XG5pbXBvcnQgeyBXaW5SYWNlQ2FyIH0gZnJvbSAnLi4vY2FyL2Nhci5pbnRlcmZhY2VzJztcbmltcG9ydCB7IElSYWNlIH0gZnJvbSAnLi9yYWNlLmludGVyZmFjZSc7XG5cbmNsYXNzIFJhY2UgaW1wbGVtZW50cyBJUmFjZSB7XG4gIHB1YmxpYyBwYWdlOiBudW1iZXI7XG5cbiAgcHVibGljIGNhcnM6IENhcltdID0gW107XG5cbiAgcHVibGljIGlzUmFjZSA9IGZhbHNlO1xuXG4gIHB1YmxpYyBpc1dpbm5lclNob3duID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocGFnZTogbnVtYmVyKSB7XG4gICAgdGhpcy5wYWdlID0gcGFnZTtcblxuICAgIHRoaXMuZ2V0Q2Fycyh0aGlzLnBhZ2UpO1xuXG4gICAgdGhpcy5zdWJzY3JpYmVTdGFydEVuZ2luZUV2ZW50KCk7XG4gICAgdGhpcy5zdWJzY3JpYmVTdG9wRW5naW5lRXZlbnQoKTtcblxuICAgIHRoaXMuc3Vic2NyaWJlU3RhcnRSYWNlRXZlbnQoKTtcbiAgICB0aGlzLnN1YnNjcmliZVN0b3BSYWNlRXZlbnQoKTtcblxuICAgIHRoaXMuc3Vic2NyaWJlQ2FyV2luSW5SYWNlRXZlbnQoKTtcbiAgfVxuXG4gIGFzeW5jIGdldENhcnMocGFnZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5jYXJzID0gW107XG4gICAgY29uc3QgY2FycyA9IGF3YWl0IENhckFwaS5nZXRDYXJzKHBhZ2UsIENPVU5UX09GX0NBUlNfUEVSX1BBR0UpO1xuXG4gICAgY2Fycy5mb3JFYWNoKChjYXIpID0+IHtcbiAgICAgIHRoaXMuY2Fycy5wdXNoKG5ldyBDYXIoY2FyKSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVN0YXJ0RW5naW5lRXZlbnQoKTogdm9pZCB7XG4gICAgRXZlbnRCdXMucmVnaXN0ZXIoRXZlbnRCdXNFdmVudHMuRVZFTlRfU1RBUlRfRU5HSU5FLCAoY2FySWQ6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgY2FyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXItJHtjYXJJZH1gKSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgY29uc3QgY2FyID0gdGhpcy5jYXJzLmZpbmQoKGVsZW0pID0+IGNhcklkID09PSBlbGVtLmNhci5pZCk7XG5cbiAgICAgIGlmICghY2FyKSByZXR1cm47XG4gICAgICBjYXIuc3RhcnRFbmdpbmUoY2FyRWxlbWVudCwgdGhpcy5pc1JhY2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVTdG9wRW5naW5lRXZlbnQoKTogdm9pZCB7XG4gICAgRXZlbnRCdXMucmVnaXN0ZXIoRXZlbnRCdXNFdmVudHMuRVZFTlRfU1RPUF9FTkdJTkUsIChjYXJJZDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBjYXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhci0ke2NhcklkfWApIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICBjb25zdCBjYXIgPSB0aGlzLmNhcnMuZmluZCgoZWxlbSkgPT4gY2FySWQgPT09IGVsZW0uY2FyLmlkKTtcblxuICAgICAgaWYgKCFjYXIpIHJldHVybjtcbiAgICAgIGNhci5zdG9wRW5naW5lKGNhckVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVTdGFydFJhY2VFdmVudCgpOiB2b2lkIHtcbiAgICBFdmVudEJ1cy5yZWdpc3RlcihFdmVudEJ1c0V2ZW50cy5FVkVOVF9TVEFSVF9SQUNFLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzUmFjZSA9IHRydWU7XG4gICAgICB0aGlzLmlzV2lubmVyU2hvd24gPSBmYWxzZTtcblxuICAgICAgdGhpcy5jYXJzLmZvckVhY2goKGNhcikgPT4ge1xuICAgICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9TVEFSVF9FTkdJTkUsIGNhci5jYXIuaWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVN0b3BSYWNlRXZlbnQoKTogdm9pZCB7XG4gICAgRXZlbnRCdXMucmVnaXN0ZXIoRXZlbnRCdXNFdmVudHMuRVZFTlRfU1RPUF9SQUNFLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzUmFjZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jYXJzLmZvckVhY2goKGNhcikgPT4ge1xuICAgICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9TVE9QX0VOR0lORSwgY2FyLmNhci5pZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlQ2FyV2luSW5SYWNlRXZlbnQoKTogdm9pZCB7XG4gICAgRXZlbnRCdXMucmVnaXN0ZXIoRXZlbnRCdXNFdmVudHMuRVZFTlRfQ0FSX1dJTl9JTl9SQUNFLCAod2luUmFjZUNhcjogV2luUmFjZUNhcikgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzV2lubmVyU2hvd24pIHtcbiAgICAgICAgdGhpcy5pc1dpbm5lclNob3duID0gdHJ1ZTtcblxuICAgICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9BRERfTkVXX1dJTk5FUiwgd2luUmFjZUNhcik7XG4gICAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1NIT1dfV0lOTkVSLCB3aW5SYWNlQ2FyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWNlO1xuIiwiaW1wb3J0IFdpbm5lcnNBcGkgZnJvbSAnLi4vLi4vYXBpL3dpbm5lcnNBcGkvd2lubmVyc0FwaS5zaW5nbGV0b24nO1xuaW1wb3J0IHsgUEFHRV9JTklUSUFMSVpFUiwgQ09VTlRfT0ZfV0lOTkVSU19QRVJfUEFHRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9nYW1lQ29uc3RhbnRzJztcbmltcG9ydCB7IEV2ZW50QnVzRXZlbnRzIH0gZnJvbSAnLi4vLi4vZXZlbnRCdXMvZXZlbnRCdXMuaW50ZXJmYWNlJztcbmltcG9ydCBFdmVudEJ1cyBmcm9tICcuLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5zaW5nbGV0b24nO1xuaW1wb3J0IHsgV2luUmFjZUNhciwgV2lubmVyIH0gZnJvbSAnLi4vY2FyL2Nhci5pbnRlcmZhY2VzJztcbmltcG9ydCB7IElXaW5uZXIgfSBmcm9tICcuL3dpbm5lcnMuaW50ZXJmYWNlJztcblxuY2xhc3MgV2lubmVycyBpbXBsZW1lbnRzIElXaW5uZXIge1xuICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuXG4gIHB1YmxpYyB3aW5uZXJzOiBXaW5uZXJbXSA9IFtdO1xuXG4gIHB1YmxpYyBjb3VudE9mV2lucyA9IDE7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYWdlID0gUEFHRV9JTklUSUFMSVpFUjtcblxuICAgIHRoaXMuZ2V0V2lubmVycygpO1xuXG4gICAgdGhpcy5zdWJzY3JpYmVBZGROZXdXaW5uZXJFdmVudCgpO1xuICAgIHRoaXMuc3Vic2NyaWJlRGVsZXRlQ2FyRXZlbnQoKTtcblxuICAgIHRoaXMuc3Vic2NyaWJlQ2hhbmdlV2lubmVyc1BhZ2VFdmVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRXaW5uZXJzKCkge1xuICAgIHRoaXMud2lubmVycyA9IFtdO1xuICAgIGNvbnN0IHdpbm5lcnMgPSBhd2FpdCBXaW5uZXJzQXBpLmdldFdpbm5lcnModGhpcy5wYWdlLCBDT1VOVF9PRl9XSU5ORVJTX1BFUl9QQUdFKTtcblxuICAgIHdpbm5lcnMuZm9yRWFjaCgod2lubmVyKSA9PiB7XG4gICAgICB0aGlzLndpbm5lcnMucHVzaCh3aW5uZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kV2lubmVyQnlJZChpZDogbnVtYmVyKTogV2lubmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy53aW5uZXJzLmZpbmQoKHdpbm5lcikgPT4gd2lubmVyLmlkID09PSBpZCk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZUFkZE5ld1dpbm5lckV2ZW50KCk6IHZvaWQge1xuICAgIEV2ZW50QnVzLnJlZ2lzdGVyKEV2ZW50QnVzRXZlbnRzLkVWRU5UX0FERF9ORVdfV0lOTkVSLCBhc3luYyAod2luUmFjZUNhcjogV2luUmFjZUNhcikgPT4ge1xuICAgICAgY29uc3Qgd2lubmVyID0gdGhpcy5maW5kV2lubmVyQnlJZCh3aW5SYWNlQ2FyLmlkKTtcblxuICAgICAgaWYgKHdpbm5lcikge1xuICAgICAgICBpZiAod2luUmFjZUNhci50aW1lIDwgd2lubmVyLnRpbWUpIHtcbiAgICAgICAgICB3aW5uZXIudGltZSA9IHdpblJhY2VDYXIudGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IFdpbm5lcnNBcGkudXBkYXRlV2lubmVyKHdpblJhY2VDYXIuaWQsIHtcbiAgICAgICAgICB3aW5zOiAod2lubmVyLndpbnMgKz0gMSksXG4gICAgICAgICAgdGltZTogd2lubmVyLnRpbWUsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgV2lubmVyc0FwaS5jcmVhdGVXaW5uZXIoe1xuICAgICAgICAgIGlkOiB3aW5SYWNlQ2FyLmlkLFxuICAgICAgICAgIHdpbnM6IHRoaXMuY291bnRPZldpbnMsXG4gICAgICAgICAgdGltZTogd2luUmFjZUNhci50aW1lLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5nZXRXaW5uZXJzKCk7XG5cbiAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1VQREFURV9XSU5ORVJTX1RBQkxFLCB0aGlzLnBhZ2UpO1xuICAgICAgRXZlbnRCdXMuZGlzcGF0Y2goRXZlbnRCdXNFdmVudHMuRVZFTlRfVVBEQVRFX1dJTk5FUlNfVElUTEUsIHRoaXMucGFnZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZURlbGV0ZUNhckV2ZW50KCkge1xuICAgIEV2ZW50QnVzLnJlZ2lzdGVyKEV2ZW50QnVzRXZlbnRzLkVWRU5UX0RFTEVURV9DQVIsIGFzeW5jIChjYXJJZDogbnVtYmVyKSA9PiB7XG4gICAgICBhd2FpdCBXaW5uZXJzQXBpLmRlbGV0ZVdpbm5lcihjYXJJZCk7XG5cbiAgICAgIHRoaXMuZ2V0V2lubmVycygpO1xuXG4gICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9VUERBVEVfV0lOTkVSU19UQUJMRSwgdGhpcy5wYWdlKTtcbiAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1VQREFURV9XSU5ORVJTX1RJVExFLCB0aGlzLnBhZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVDaGFuZ2VXaW5uZXJzUGFnZUV2ZW50KCkge1xuICAgIEV2ZW50QnVzLnJlZ2lzdGVyKEV2ZW50QnVzRXZlbnRzLkVWRU5UX0NIQU5HRV9XSU5ORVJTX1BBR0UsIChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICB0aGlzLmdldFdpbm5lcnMoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaW5uZXJzO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVN2Z0NvbG9yKHN2Z1N0cmluZzogc3RyaW5nLCBuZXdDb2xvcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZW1wRGl2LmlubmVySFRNTCA9IHN2Z1N0cmluZztcbiAgY29uc3Qgc3ZnRWxlbWVudCA9IHRlbXBEaXYuZmlyc3RDaGlsZCBhcyBTVkdTVkdFbGVtZW50O1xuXG4gIGNvbnN0IHBhdGhzID0gc3ZnRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwYXRoJyk7XG5cbiAgcGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xuICAgIGlmICghcGF0aC5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKSkge1xuICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBuZXdDb2xvcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3ZnRWxlbWVudC5vdXRlckhUTUw7XG59XG4iLCJleHBvcnQgY2xhc3MgQ3JlYXRlRWxlbWVudCB7XG4gIHB1YmxpYyB0YWc6IHN0cmluZztcblxuICBwdWJsaWMgaW5uZXJIVE1MPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBhdHRyaWJ1dGVzPzoge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBpZD86IHN0cmluZztcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcih0YWc6IHN0cmluZywgYXR0cmlidXRlcz86IHsgY2xhc3NOYW1lPzogc3RyaW5nOyBpZD86IHN0cmluZyB9LCBpbm5lckhUTUw/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnRhZyA9IHRhZztcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICB9XG5cbiAgY3JlYXRlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy50YWcpO1xuICAgIGlmICh0aGlzLmF0dHJpYnV0ZXM/LmNsYXNzTmFtZSkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLmF0dHJpYnV0ZXMuY2xhc3NOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdHRyaWJ1dGVzPy5pZCkge1xuICAgICAgZWxlbWVudC5pZCA9IHRoaXMuYXR0cmlidXRlcy5pZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5uZXJIVE1MKSB7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuaW5uZXJIVE1MO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUVsZW1lbnQ7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0TWFpbigpOiBIVE1MRWxlbWVudCB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpIGFzIEhUTUxFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyUm9hZENvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyLXJvYWQtY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHYXJhZ2VDb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZS1jb250YWluZXInKSBhcyBIVE1MRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpbm5lcnNDb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcnMtY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaW5uZXJzVGFibGUoKTogSFRNTEVsZW1lbnQge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcnMtdGFibGUnKSBhcyBIVE1MRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhclJvYWQobnVtYmVyT2ZDYXJSb2FkOiBudW1iZXIpOiBIVE1MRWxlbWVudCB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyLWJveC0ke251bWJlck9mQ2FyUm9hZH1gKSBhcyBIVE1MRWxlbWVudDtcbn1cbiIsImltcG9ydCBjYXJNb2RlbHMgZnJvbSAnLi4vYXNzZXRzL2Nhck1vZGVscy5qc29uJztcbmltcG9ydCBjYXJCcmFuZHMgZnJvbSAnLi4vYXNzZXRzL2NhckJyYW5kcy5qc29uJztcblxuaW50ZXJmYWNlIENhck1vZGVscyB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1tdO1xufVxuXG5pbnRlcmZhY2UgQ2FyQnJhbmRzIHtcbiAgYnJhbmRzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdlbmVyYXRlZENhck5hbWUoKTogc3RyaW5nIHtcbiAgY29uc3QgbW9kZWxzOiBDYXJNb2RlbHMgPSBjYXJNb2RlbHM7XG4gIGNvbnN0IGJyYW5kczogQ2FyQnJhbmRzID0geyBicmFuZHM6IGNhckJyYW5kcyB9O1xuXG4gIGNvbnN0IHJhbmRvbUJyYW5kOiBzdHJpbmcgPSBicmFuZHMuYnJhbmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJyYW5kcy5icmFuZHMubGVuZ3RoKV07XG4gIGNvbnN0IHJhbmRvbU1vZGVsOiBzdHJpbmcgPVxuICAgIG1vZGVsc1tyYW5kb21CcmFuZF1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW9kZWxzW3JhbmRvbUJyYW5kXS5sZW5ndGgpXTtcblxuICByZXR1cm4gYCR7cmFuZG9tQnJhbmR9ICR7cmFuZG9tTW9kZWx9YDtcbn1cbiIsImNvbnN0IFJBTkRPTV9NQVggPSAyNTY7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHZW5lcmF0ZWRDb2xvcigpOiBzdHJpbmcge1xuICBjb25zdCByID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogUkFORE9NX01BWClcbiAgICAudG9TdHJpbmcoMTYpXG4gICAgLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IGcgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBSQU5ET01fTUFYKVxuICAgIC50b1N0cmluZygxNilcbiAgICAucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgYiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFJBTkRPTV9NQVgpXG4gICAgLnRvU3RyaW5nKDE2KVxuICAgIC5wYWRTdGFydCgyLCAnMCcpO1xuICByZXR1cm4gYCMke3J9JHtnfSR7Yn1gO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldE1heFBhZ2VOdW1iZXIoaXRlbXNBbW91bnQ6IG51bWJlciwgY291bnRPZkl0ZW1zUGVyUGFnZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgbWF4UGFnZU51bWJlciA9IE1hdGguY2VpbChpdGVtc0Ftb3VudCAvIGNvdW50T2ZJdGVtc1BlclBhZ2UpO1xuXG4gIHJldHVybiBtYXhQYWdlTnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgSUdhbWVWaWV3IH0gZnJvbSAnLi9nYW1lVmlldy5pbnRlcmZhY2UnO1xuaW1wb3J0IENyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IHsgZ2V0R2FyYWdlQ29udGFpbmVyLCBnZXRXaW5uZXJzQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2RvbVV0aWxzJztcbmltcG9ydCBHYXJhZ2VQYWdlVmlldyBmcm9tICcuLi9nYXJhZ2VQYWdlL2dhcmFnZVBhZ2VWaWV3JztcbmltcG9ydCBXaW5uZXJzUGFnZVZpZXcgZnJvbSAnLi4vd2lubmVyc1BhZ2Uvd2lubmVyc1BhZ2VWaWV3JztcbmltcG9ydCB7IFBBR0VfSU5JVElBTElaRVIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvZ2FtZUNvbnN0YW50cyc7XG5cbmltcG9ydCAnLi9nYW1lVmlldy5jc3MnO1xuXG5jbGFzcyBHYW1lVmlldyBpbXBsZW1lbnRzIElHYW1lVmlldyB7XG4gIHB1YmxpYyBnYXJhZ2VQYWdlVmlldzogR2FyYWdlUGFnZVZpZXc7XG5cbiAgcHVibGljIHdpbm5lcnNQYWdlVmlldzogV2lubmVyc1BhZ2VWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG1haW4gPSB0aGlzLnJlbmRlck1haW4oKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChtYWluKTtcblxuICAgIHRoaXMuZ2FyYWdlUGFnZVZpZXcgPSBuZXcgR2FyYWdlUGFnZVZpZXcoUEFHRV9JTklUSUFMSVpFUik7XG4gICAgdGhpcy53aW5uZXJzUGFnZVZpZXcgPSBuZXcgV2lubmVyc1BhZ2VWaWV3KFBBR0VfSU5JVElBTElaRVIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5yZW5kZXJIZWFkZXIoKTtcbiAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQoaGVhZGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVySGVhZGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBoZWFkZXIgPSBuZXcgQ3JlYXRlRWxlbWVudCgnaGVhZGVyJywgeyBjbGFzc05hbWU6ICdoZWFkZXInIH0pLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IG5hdmlnYXRpb25Db250YWluZXIgPSBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnbmF2aWdhdGlvbi1jb250YWluZXInLFxuICAgIH0pLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IHRvR2FyYWdlQnV0dG9uID0gbmV3IENyZWF0ZUVsZW1lbnQoXG4gICAgICAnYnV0dG9uJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnZ2FyYWdlLWJ0bicgfSxcbiAgICAgICdHYXJhZ2UnXG4gICAgKS5jcmVhdGVFbGVtZW50KCk7XG4gICAgY29uc3QgdG9XaW5uZXJzQnV0dG9uID0gbmV3IENyZWF0ZUVsZW1lbnQoXG4gICAgICAnYnV0dG9uJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnd2lubmVycy1idG4nIH0sXG4gICAgICAnV2lubmVycydcbiAgICApLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIHRvR2FyYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93R2FyYWdlKCk7XG4gICAgfSk7XG4gICAgdG9XaW5uZXJzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93V2lubmVycygpO1xuICAgIH0pO1xuXG4gICAgbmF2aWdhdGlvbkNvbnRhaW5lci5hcHBlbmQodG9HYXJhZ2VCdXR0b24pO1xuICAgIG5hdmlnYXRpb25Db250YWluZXIuYXBwZW5kKHRvV2lubmVyc0J1dHRvbik7XG5cbiAgICBoZWFkZXIuYXBwZW5kKG5hdmlnYXRpb25Db250YWluZXIpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyTWFpbigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgbWFpbiA9IG5ldyBDcmVhdGVFbGVtZW50KCdtYWluJywgeyBjbGFzc05hbWU6ICdtYWluJyB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICByZXR1cm4gbWFpbjtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd0dhcmFnZSgpOiB2b2lkIHtcbiAgICBjb25zdCB3aW5uZXJzQ29udGFpbmVyID0gZ2V0V2lubmVyc0NvbnRhaW5lcigpO1xuICAgIGNvbnN0IGdhcmFnZUNvbnRhaW5lciA9IGdldEdhcmFnZUNvbnRhaW5lcigpO1xuXG4gICAgd2lubmVyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgZ2FyYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd1dpbm5lcnMoKTogdm9pZCB7XG4gICAgY29uc3Qgd2lubmVyc0NvbnRhaW5lciA9IGdldFdpbm5lcnNDb250YWluZXIoKTtcbiAgICBjb25zdCBnYXJhZ2VDb250YWluZXIgPSBnZXRHYXJhZ2VDb250YWluZXIoKTtcblxuICAgIHdpbm5lcnNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGdhcmFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVZpZXc7XG4iLCJpbXBvcnQgeyBGTEFHX1NUUklOR19TVkdfRUxFTUVOVCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbnN0YW50cy9nYXJhZ2VQYWdlQ29uc3RhbnRzJztcbmltcG9ydCBFdmVudEJ1cyBmcm9tICcuLi8uLi8uLi8uLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5zaW5nbGV0b24nO1xuaW1wb3J0IHsgRXZlbnRCdXNFdmVudHMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5pbnRlcmZhY2UnO1xuaW1wb3J0IENhciBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2RlbC9jYXIvY2FyLmludGVyZmFjZXMnO1xuaW1wb3J0IENyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IHsgZ2V0Q2FyUm9hZENvbnRhaW5lciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9kb21VdGlscyc7XG5pbXBvcnQgQ2FyVmlldyBmcm9tICcuL2Nhci9jYXJWaWV3JztcblxuY2xhc3MgQ2FyUm9hZFZpZXcge1xuICBwcml2YXRlIGNhclZpZXc6IENhclZpZXc7XG5cbiAgcHVibGljIGNhcjogQ2FyO1xuXG4gIGNvbnN0cnVjdG9yKGNhcjogQ2FyKSB7XG4gICAgdGhpcy5jYXIgPSBjYXI7XG4gICAgdGhpcy5jYXJWaWV3ID0gbmV3IENhclZpZXcoY2FyKTtcblxuICAgIHRoaXMucmVuZGVyQ2FyUm9hZENvbnRhaW5lcigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJDYXJSb2FkQ29udGFpbmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGNhclJvYWRDb250YWluZXIgPSBnZXRDYXJSb2FkQ29udGFpbmVyKCk7XG5cbiAgICBjb25zdCBjYXJCb3ggPSBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiBgY2FyLWJveCBjYXItYm94LSR7dGhpcy5jYXIuaWR9YCxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBzZWxlY3RSZW1vdmVCdXR0b25zID0gdGhpcy5yZW5kZXJTZWxlY3RBbmRSZW1vdmVCdXR0b25zKCk7XG4gICAgY29uc3Qgc3RhcnRFbmRCdXR0b25zID0gdGhpcy5yZW5kZXJTdGFydEFuZEVuZEJ1dHRvbnMoKTtcbiAgICBjb25zdCBjYXJSb2FkID0gdGhpcy5yZW5kZXJSb2FkKCk7XG4gICAgY29uc3QgY2FyTW9kZWwgPSB0aGlzLmNhclZpZXcucmVuZGVyQ2FyTW9kZWwoKTtcblxuICAgIGNhckJveC5hcHBlbmQoc2VsZWN0UmVtb3ZlQnV0dG9ucyk7XG4gICAgY2FyQm94LmFwcGVuZChzdGFydEVuZEJ1dHRvbnMpO1xuICAgIGNhckJveC5hcHBlbmQoY2FyTW9kZWwpO1xuICAgIGNhckJveC5hcHBlbmQoY2FyUm9hZCk7XG5cbiAgICBjYXJSb2FkQ29udGFpbmVyLmFwcGVuZChjYXJCb3gpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJSb2FkKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBjYXJSb2FkID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAncm9hZC1jb250YWluZXInIH0pLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICBjb25zdCByb2FkID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAncm9hZCcgfSkuY3JlYXRlRWxlbWVudCgpO1xuICAgIGNvbnN0IGZsYWcgPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICdyb2FkLWZsYWcnIH0sXG4gICAgICBGTEFHX1NUUklOR19TVkdfRUxFTUVOVFxuICAgICkuY3JlYXRlRWxlbWVudCgpO1xuICAgIGNvbnN0IGNhciA9IHRoaXMuY2FyVmlldy5yZW5kZXJDYXIoKTtcblxuICAgIGNhclJvYWQuYXBwZW5kKHJvYWQpO1xuICAgIGNhclJvYWQuYXBwZW5kKGNhcik7XG4gICAgY2FyUm9hZC5hcHBlbmQoZmxhZyk7XG5cbiAgICByZXR1cm4gY2FyUm9hZDtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU2VsZWN0QW5kUmVtb3ZlQnV0dG9ucygpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgc2VsZWN0UmVtb3ZlQnV0dG9uc0NvbnRhaW5lciA9IG5ldyBDcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICdzZWxlY3QtcmVtb3ZlLWJ0bnMtY29udGFpbmVyJyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBzZWxlY3RCdXR0b24gPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAgeyBjbGFzc05hbWU6IGBzZWxlY3QtYnRuIHNlbGVjdC1idG4tJHt0aGlzLmNhci5pZH1gIH0sXG4gICAgICAnU2VsZWN0J1xuICAgICkuY3JlYXRlRWxlbWVudCgpO1xuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IG5ldyBDcmVhdGVFbGVtZW50KFxuICAgICAgJ2J1dHRvbicsXG4gICAgICB7IGNsYXNzTmFtZTogYHJlbW92ZS1idG4gcmVtb3ZlLWJ0bi0ke3RoaXMuY2FyLmlkfWAgfSxcbiAgICAgICdSZW1vdmUnXG4gICAgKS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9ERUxFVEVfQ0FSLCB0aGlzLmNhci5pZCk7XG4gICAgfSk7XG5cbiAgICBzZWxlY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9TRUxFQ1RfQ0FSLCB0aGlzLmNhci5pZCk7XG4gICAgfSk7XG5cbiAgICBzZWxlY3RSZW1vdmVCdXR0b25zQ29udGFpbmVyLmFwcGVuZChzZWxlY3RCdXR0b24pO1xuICAgIHNlbGVjdFJlbW92ZUJ1dHRvbnNDb250YWluZXIuYXBwZW5kKHJlbW92ZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gc2VsZWN0UmVtb3ZlQnV0dG9uc0NvbnRhaW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhcnRBbmRFbmRCdXR0b25zKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzdGFydEVuZEJ1dHRvbnNDb250YWluZXIgPSBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnc3RhcnQtZW5kLWJ0bnMtY29udGFpbmVyJyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IG5ldyBDcmVhdGVFbGVtZW50KFxuICAgICAgJ2J1dHRvbicsXG4gICAgICB7IGNsYXNzTmFtZTogYHN0YXJ0LWJ0biBzdGFydC1idG5fY2FyLSR7dGhpcy5jYXIuaWR9YCB9LFxuICAgICAgJ0EnXG4gICAgKS5jcmVhdGVFbGVtZW50KCkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgY29uc3QgZW5kQnV0dG9uID0gbmV3IENyZWF0ZUVsZW1lbnQoXG4gICAgICAnYnV0dG9uJyxcbiAgICAgIHsgY2xhc3NOYW1lOiBgZW5kLWJ0biBlbmQtYnRuX2Nhci0ke3RoaXMuY2FyLmlkfWAgfSxcbiAgICAgICdCJ1xuICAgICkuY3JlYXRlRWxlbWVudCgpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGVuZEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1NUQVJUX0VOR0lORSwgdGhpcy5jYXIuaWQpO1xuICAgICAgc3RhcnRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgZW5kQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBlbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9TVE9QX0VOR0lORSwgdGhpcy5jYXIuaWQpO1xuICAgICAgZW5kQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHN0YXJ0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBzdGFydEVuZEJ1dHRvbnNDb250YWluZXIuYXBwZW5kKHN0YXJ0QnV0dG9uKTtcbiAgICBzdGFydEVuZEJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGVuZEJ1dHRvbik7XG5cbiAgICByZXR1cm4gc3RhcnRFbmRCdXR0b25zQ29udGFpbmVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhclJvYWRWaWV3O1xuIiwiaW1wb3J0IENhckFwaSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9hcGkvY2FyQXBpL2NhckFwaS5zaW5nbGV0b24nO1xuaW1wb3J0IHsgQ0FSX1NUUklOR19TVkdfRUxFTUVOVCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbnN0YW50cy9nYXJhZ2VQYWdlQ29uc3RhbnRzJztcbmltcG9ydCB7IEV2ZW50QnVzRXZlbnRzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZXZlbnRCdXMvZXZlbnRCdXMuaW50ZXJmYWNlJztcbmltcG9ydCBFdmVudEJ1cyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5zaW5nbGV0b24nO1xuaW1wb3J0IENhciBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9tb2RlbC9jYXIvY2FyLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgY2hhbmdlU3ZnQ29sb3IgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvY2hhbmdlU3ZnQ29sb3InO1xuaW1wb3J0IENyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2NyZWF0ZUVsZW1lbnQnO1xuXG5jbGFzcyBDYXJWaWV3IHtcbiAgcHJpdmF0ZSBjYXI6IENhcjtcblxuICBjb25zdHJ1Y3RvcihjYXI6IENhcikge1xuICAgIHRoaXMuY2FyID0gY2FyO1xuXG4gICAgdGhpcy5zdWJzY3JpYmVVcGRhdGVDYXJSb2FkRXZlbnQoKTtcbiAgfVxuXG4gIHJlbmRlckNhcigpIHtcbiAgICBjb25zdCBjYXJXaXRoTmV3Q29sb3IgPSBjaGFuZ2VTdmdDb2xvcihDQVJfU1RSSU5HX1NWR19FTEVNRU5ULCB0aGlzLmNhci5jb2xvcik7XG5cbiAgICBjb25zdCBjYXJJbWcgPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IGBjYXIgY2FyLSR7dGhpcy5jYXIuaWR9YCB9LFxuICAgICAgY2FyV2l0aE5ld0NvbG9yXG4gICAgKS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICByZXR1cm4gY2FySW1nO1xuICB9XG5cbiAgcmVuZGVyQ2FyTW9kZWwoKSB7XG4gICAgY29uc3QgY2FyTW9kZWwgPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IGBjYXItbW9kZWwgY2FyLW1vZGVsLSR7dGhpcy5jYXIuaWR9YCB9LFxuICAgICAgdGhpcy5jYXIubmFtZVxuICAgICkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgcmV0dXJuIGNhck1vZGVsO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVVcGRhdGVDYXJSb2FkRXZlbnQoKSB7XG4gICAgRXZlbnRCdXMucmVnaXN0ZXIoRXZlbnRCdXNFdmVudHMuRVZFTlRfVVBEQVRFX0NBUl9ST0FELCBhc3luYyAoY2FySWQ6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgdXBkYXRlZENhciA9IGF3YWl0IENhckFwaS5nZXRDYXIoY2FySWQpO1xuXG4gICAgICBjb25zdCBjYXJNb2RlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXItbW9kZWwtJHtjYXJJZH1gKTtcbiAgICAgIGNvbnN0IGNhckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXItJHtjYXJJZH1gKTtcblxuICAgICAgaWYgKCFjYXJNb2RlbCB8fCAhY2FySW1nKSByZXR1cm47XG4gICAgICBjYXJNb2RlbC5pbm5lckhUTUwgPSB1cGRhdGVkQ2FyLm5hbWU7XG5cbiAgICAgIGNvbnN0IGNhcldpdGhVcGRhdGVkQ29sb3IgPSBjaGFuZ2VTdmdDb2xvcihDQVJfU1RSSU5HX1NWR19FTEVNRU5ULCB1cGRhdGVkQ2FyLmNvbG9yKTtcblxuICAgICAgY2FySW1nLmlubmVySFRNTCA9IGNhcldpdGhVcGRhdGVkQ29sb3I7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyVmlldztcbiIsImltcG9ydCBFdmVudEJ1cyBmcm9tICcuLi8uLi8uLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5zaW5nbGV0b24nO1xuaW1wb3J0IHsgRXZlbnRCdXNFdmVudHMgfSBmcm9tICcuLi8uLi8uLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZ2V0Q2FyUm9hZCwgZ2V0Q2FyUm9hZENvbnRhaW5lciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9kb21VdGlscyc7XG5pbXBvcnQgQ2FyQXBpIGZyb20gJy4uLy4uLy4uLy4uL2FwaS9jYXJBcGkvY2FyQXBpLnNpbmdsZXRvbic7XG5pbXBvcnQgeyBDT1VOVF9PRl9DQVJTX1BFUl9QQUdFIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uc3RhbnRzL2dhbWVDb25zdGFudHMnO1xuaW1wb3J0IENhclJvYWRWaWV3IGZyb20gJy4vY2FyUm9hZC9jYXJSb2FkVmlldyc7XG5pbXBvcnQgQ2FyVG9TZXJ2ZXIgZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvY2FyL2Nhci5pbnRlcmZhY2VzJztcblxuY2xhc3MgQ2FyUm9hZHNWaWV3IHtcbiAgcHVibGljIHBhZ2U6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihwYWdlOiBudW1iZXIpIHtcbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuXG4gICAgdGhpcy5yZW5kZXJDYXJSb2Fkcyh0aGlzLnBhZ2UpO1xuICAgIHRoaXMuc3Vic2NyaWJlVXBkYXRlQ2FyUm9hZHNFdmVudCgpO1xuICAgIHRoaXMuc3Vic2NyaWJlQWRkQ2FyUm9hZEV2ZW50KCk7XG4gICAgdGhpcy5zdWJzY3JpYmVEZWxldGVDYXJSb2FkRXZlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyQ2FyUm9hZHMocGFnZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jbGVhckNhclJvYWRDb250YWluZXIoKTtcblxuICAgIGNvbnN0IGNhcnMgPSBhd2FpdCBDYXJBcGkuZ2V0Q2FycyhwYWdlLCBDT1VOVF9PRl9DQVJTX1BFUl9QQUdFKTtcblxuICAgIGNhcnMubWFwKChjYXIpID0+IG5ldyBDYXJSb2FkVmlldyhjYXIpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJDYXJSb2FkQ29udGFpbmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGNhclJvYWRDb250YWluZXIgPSBnZXRDYXJSb2FkQ29udGFpbmVyKCk7XG4gICAgaWYgKCFjYXJSb2FkQ29udGFpbmVyKSByZXR1cm47XG5cbiAgICBjYXJSb2FkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVVcGRhdGVDYXJSb2Fkc0V2ZW50KCkge1xuICAgIEV2ZW50QnVzLnJlZ2lzdGVyKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1VQREFURV9DQVJfUk9BRFMsIChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyQ2FyUm9hZHMocGFnZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZUFkZENhclJvYWRFdmVudCgpIHtcbiAgICBFdmVudEJ1cy5yZWdpc3RlcihFdmVudEJ1c0V2ZW50cy5FVkVOVF9BRERfQ0FSX1JPQUQsIChjYXI6IENhclRvU2VydmVyKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG4gICAgICBuZXcgQ2FyUm9hZFZpZXcoY2FyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlRGVsZXRlQ2FyUm9hZEV2ZW50KCkge1xuICAgIEV2ZW50QnVzLnJlZ2lzdGVyKEV2ZW50QnVzRXZlbnRzLkVWRU5UX0RFTEVURV9DQVJfUk9BRCwgKG51bWJlck9mQ2FyUm9hZDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBjYXJSb2FkID0gZ2V0Q2FyUm9hZChudW1iZXJPZkNhclJvYWQpO1xuICAgICAgY2FyUm9hZC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJSb2Fkc1ZpZXc7XG4iLCJpbXBvcnQgQ2FyQXBpIGZyb20gJy4uLy4uLy4uL2FwaS9jYXJBcGkvY2FyQXBpLnNpbmdsZXRvbic7XG5pbXBvcnQgeyBQQUdFX0lOSVRJQUxJWkVSLCBDT1VOVF9PRl9DQVJTX1BFUl9QQUdFIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2dhbWVDb25zdGFudHMnO1xuaW1wb3J0IHsgRXZlbnRCdXNFdmVudHMgfSBmcm9tICcuLi8uLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5pbnRlcmZhY2UnO1xuaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4uLy4uLy4uL2V2ZW50QnVzL2V2ZW50QnVzLnNpbmdsZXRvbic7XG5pbXBvcnQgQ3JlYXRlRWxlbWVudCBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgeyBnZXRNYXhQYWdlTnVtYmVyIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2dldE1heFBhZ2VOdW1iZXInO1xuXG5jbGFzcyBHYXJhZ2VCb3hWaWV3IHtcbiAgcHVibGljIHBhZ2U6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhZ2UgPSBQQUdFX0lOSVRJQUxJWkVSO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZ2FyYWdlQm94ID0gdGhpcy5yZW5kZXJHYXJhZ2VCb3goKTtcblxuICAgIHJldHVybiBnYXJhZ2VCb3g7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckdhcmFnZUJveCgpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZ2FyYWdlQm94Q29udGFpbmVyID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2dhcmFnZS1ib3gtY29udGFpbmVyJyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBjYXJSb2FkQ29udGFpbmVyID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2Nhci1yb2FkLWNvbnRhaW5lcicsXG4gICAgfSkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgY29uc3QgZ2FyYWdlQm94Q29udHJvbEJ1dHRvbnMgPSBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnY29udHJvbC1idG5zJyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBwcmV2QnV0dG9uID0gbmV3IENyZWF0ZUVsZW1lbnQoXG4gICAgICAnYnV0dG9uJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAncHJldi1idG4nIH0sXG4gICAgICAnUHJldidcbiAgICApLmNyZWF0ZUVsZW1lbnQoKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdCBuZXh0QnV0dG9uID0gbmV3IENyZWF0ZUVsZW1lbnQoXG4gICAgICAnYnV0dG9uJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnbmV4dC1idG4nIH0sXG4gICAgICAnTmV4dCdcbiAgICApLmNyZWF0ZUVsZW1lbnQoKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIHByZXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYWdlICE9PSBQQUdFX0lOSVRJQUxJWkVSKSB7XG4gICAgICAgIHRoaXMucGFnZSAtPSAxO1xuXG4gICAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1VQREFURV9HQVJBR0VfVElUTEUsIHRoaXMucGFnZSk7XG4gICAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX0NIQU5HRV9HQVJBR0VfUEFHRSwgdGhpcy5wYWdlKTtcbiAgICAgICAgRXZlbnRCdXMuZGlzcGF0Y2goRXZlbnRCdXNFdmVudHMuRVZFTlRfVVBEQVRFX0NBUl9ST0FEUywgdGhpcy5wYWdlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBjYXJBbW91bnQgPSBhd2FpdCBDYXJBcGkuZ2V0VG90YWxDb3VudE9mQ2FycygpO1xuXG4gICAgICBjb25zdCBtYXhQYWdlTnVtYmVyID0gZ2V0TWF4UGFnZU51bWJlcihOdW1iZXIoY2FyQW1vdW50KSwgQ09VTlRfT0ZfQ0FSU19QRVJfUEFHRSk7XG5cbiAgICAgIGlmICh0aGlzLnBhZ2UgPj0gbWF4UGFnZU51bWJlcikgcmV0dXJuO1xuXG4gICAgICB0aGlzLnBhZ2UgKz0gMTtcblxuICAgICAgRXZlbnRCdXMuZGlzcGF0Y2goRXZlbnRCdXNFdmVudHMuRVZFTlRfVVBEQVRFX0dBUkFHRV9USVRMRSwgdGhpcy5wYWdlKTtcbiAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX0NIQU5HRV9HQVJBR0VfUEFHRSwgdGhpcy5wYWdlKTtcbiAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1VQREFURV9DQVJfUk9BRFMsIHRoaXMucGFnZSk7XG4gICAgfSk7XG5cbiAgICBnYXJhZ2VCb3hDb250cm9sQnV0dG9ucy5hcHBlbmQocHJldkJ1dHRvbik7XG4gICAgZ2FyYWdlQm94Q29udHJvbEJ1dHRvbnMuYXBwZW5kKG5leHRCdXR0b24pO1xuXG4gICAgZ2FyYWdlQm94Q29udGFpbmVyLmFwcGVuZChjYXJSb2FkQ29udGFpbmVyKTtcbiAgICBnYXJhZ2VCb3hDb250YWluZXIuYXBwZW5kKGdhcmFnZUJveENvbnRyb2xCdXR0b25zKTtcblxuICAgIHJldHVybiBnYXJhZ2VCb3hDb250YWluZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FyYWdlQm94VmlldztcbiIsImltcG9ydCBDcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jcmVhdGVFbGVtZW50JztcbmltcG9ydCB7IGdldE1haW4gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZG9tVXRpbHMnO1xuaW1wb3J0IENhclJvYWRzVmlldyBmcm9tICcuL2dhcmFnZUJveC9jYXJSb2Fkcy9jYXJSb2Fkc1ZpZXcnO1xuaW1wb3J0IEdhcmFnZUJveFZpZXcgZnJvbSAnLi9nYXJhZ2VCb3gvZ2FyYWdlQm94Vmlldyc7XG5pbXBvcnQgeyBJR2FyYWdlUGFnZVZpZXcgfSBmcm9tICcuL2dhcmFnZVBhZ2UuaW50ZXJmYWNlJztcbmltcG9ydCBHYXJhZ2VQYW5lbFZpZXcgZnJvbSAnLi9nYXJhZ2VQYW5lbC9nYXJhZ2VQYW5lbFZpZXcnO1xuaW1wb3J0IENhckFwaSBmcm9tICcuLi8uLi9hcGkvY2FyQXBpL2NhckFwaS5zaW5nbGV0b24nO1xuaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4uLy4uL2V2ZW50QnVzL2V2ZW50QnVzLnNpbmdsZXRvbic7XG5pbXBvcnQgeyBFdmVudEJ1c0V2ZW50cyB9IGZyb20gJy4uLy4uL2V2ZW50QnVzL2V2ZW50QnVzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBXaW5SYWNlQ2FyIH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FyL2Nhci5pbnRlcmZhY2VzJztcblxuaW1wb3J0ICcuL2dhcmFnZVBhZ2UuY3NzJztcblxuY2xhc3MgR2FyYWdlUGFnZVZpZXcgaW1wbGVtZW50cyBJR2FyYWdlUGFnZVZpZXcge1xuICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuXG4gIHB1YmxpYyBnYXJhZ2VQYW5lbFZpZXc6IEdhcmFnZVBhbmVsVmlldztcblxuICBwdWJsaWMgZ2FyYWdlQm94VmlldzogR2FyYWdlQm94VmlldztcblxuICBjb25zdHJ1Y3RvcihwYWdlOiBudW1iZXIpIHtcbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIHRoaXMuZ2FyYWdlUGFuZWxWaWV3ID0gbmV3IEdhcmFnZVBhbmVsVmlldygpO1xuICAgIHRoaXMuZ2FyYWdlQm94VmlldyA9IG5ldyBHYXJhZ2VCb3hWaWV3KCk7XG5cbiAgICB0aGlzLmluaXRHYXJhZ2VDb250YWluZXIoKTtcblxuICAgIHRoaXMuc3Vic2NyaWJlVXBkYXRlR2FyYWdlVGl0bGVFdmVudCgpO1xuXG4gICAgdGhpcy5zdWJzY3JpYmVTaG93V2lubmVyRXZlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaW5pdEdhcmFnZUNvbnRhaW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBtYWluID0gZ2V0TWFpbigpO1xuICAgIGNvbnN0IGdhcmFnZUNvbnRhaW5lciA9IGF3YWl0IHRoaXMucmVuZGVyR2FyYWdlQ29udGFpbmVyKCk7XG5cbiAgICBtYWluLmFwcGVuZChnYXJhZ2VDb250YWluZXIpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcbiAgICBuZXcgQ2FyUm9hZHNWaWV3KHRoaXMucGFnZSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbmRlckdhcmFnZUNvbnRhaW5lcigpOiBQcm9taXNlPEhUTUxFbGVtZW50PiB7XG4gICAgY29uc3QgZ2FyYWdlQ29udGFpbmVyID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2dhcmFnZS1jb250YWluZXInLFxuICAgIH0pLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IGdhcmFnZVRpdGxlID0gYXdhaXQgdGhpcy5yZW5kZXJHYXJhZ2VUaXRsZSgpO1xuICAgIGNvbnN0IGdhcmFnZVBhbmVsID0gdGhpcy5nYXJhZ2VQYW5lbFZpZXcucmVuZGVyKCk7XG4gICAgY29uc3QgZ2FyYWdlQm94ID0gdGhpcy5nYXJhZ2VCb3hWaWV3LnJlbmRlcigpO1xuICAgIGNvbnN0IHdpbm5lclBvcHVwID0gdGhpcy5yZW5kZXJXaW5uZXJQb3B1cCgpO1xuXG4gICAgZ2FyYWdlQ29udGFpbmVyLmFwcGVuZChnYXJhZ2VQYW5lbCk7XG4gICAgZ2FyYWdlQ29udGFpbmVyLmFwcGVuZChnYXJhZ2VUaXRsZSk7XG4gICAgZ2FyYWdlQ29udGFpbmVyLmFwcGVuZChnYXJhZ2VCb3gpO1xuICAgIGdhcmFnZUNvbnRhaW5lci5hcHBlbmQod2lubmVyUG9wdXApO1xuXG4gICAgcmV0dXJuIGdhcmFnZUNvbnRhaW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyR2FyYWdlVGl0bGUoKTogUHJvbWlzZTxIVE1MRWxlbWVudD4ge1xuICAgIGNvbnN0IHRvdGFsQ291bnRPZkNhcnMgPSBhd2FpdCBDYXJBcGkuZ2V0VG90YWxDb3VudE9mQ2FycygpO1xuICAgIGNvbnN0IGdhcmFnZVRpdGxlID0gbmV3IENyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZ2FyYWdlLXRpdGxlJyxcbiAgICAgIH0sXG4gICAgICBgR2FyYWdlICg8c3BhbiBjbGFzcz0nZ2FyYWdlLWNhcnMtYW1vdW50Jz4ke3RvdGFsQ291bnRPZkNhcnN9PC9zcGFuPik8YnI+UGFnZSAjPHNwYW4gY2xhc3M9J2dhcmFnZS1wYWdlLW51bWJlcic+JHt0aGlzLnBhZ2V9PC9zcGFuPmBcbiAgICApLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIHJldHVybiBnYXJhZ2VUaXRsZTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyV2lubmVyUG9wdXAoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHdpbm5lclBvcHVwID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnd2lubmVyLXBvcHVwJyB9KS5jcmVhdGVFbGVtZW50KCk7XG4gICAgY29uc3QgcG9wdXBDb250ZW50ID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAncG9wdXAtY29udGVudCcgfSkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgY29uc3QgcG9wdXBUZXh0ID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnd2lubmVyLXBvcHVwLXRleHQnIH0pLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIGNvbnN0IGNsb3NlUG9wdXBCdXR0b24gPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbG9zZS1wb3B1cC1idG4nLFxuICAgICAgfSxcbiAgICAgICdYJ1xuICAgICkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgY2xvc2VQb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHdpbm5lclBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICBwb3B1cENvbnRlbnQuYXBwZW5kKGNsb3NlUG9wdXBCdXR0b24pO1xuICAgIHBvcHVwQ29udGVudC5hcHBlbmQocG9wdXBUZXh0KTtcbiAgICB3aW5uZXJQb3B1cC5hcHBlbmQocG9wdXBDb250ZW50KTtcblxuICAgIHJldHVybiB3aW5uZXJQb3B1cDtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd1dpbm5lclBvcHVwKHdpbm5lcjogV2luUmFjZUNhcikge1xuICAgIGNvbnN0IHdpbm5lclBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lci1wb3B1cCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghd2lubmVyUG9wdXApIHJldHVybjtcbiAgICB3aW5uZXJQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgY29uc3Qgd2lubmVyVGV4dCA9IGBXaW5uZXI6ICR7d2lubmVyLm5hbWV9ICgke3dpbm5lci50aW1lfXMpYDtcblxuICAgIGNvbnN0IHBvcHVwVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXItcG9wdXAtdGV4dCcpO1xuICAgIGlmICghcG9wdXBUZXh0KSByZXR1cm47XG4gICAgcG9wdXBUZXh0LmlubmVySFRNTCA9IHdpbm5lclRleHQ7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVVwZGF0ZUdhcmFnZVRpdGxlRXZlbnQoKTogdm9pZCB7XG4gICAgRXZlbnRCdXMucmVnaXN0ZXIoRXZlbnRCdXNFdmVudHMuRVZFTlRfVVBEQVRFX0dBUkFHRV9USVRMRSwgYXN5bmMgKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgbmV3Q2Fyc0Ftb3VudCA9IGF3YWl0IENhckFwaS5nZXRUb3RhbENvdW50T2ZDYXJzKCk7XG5cbiAgICAgIGNvbnN0IGdhcmFnZUNhcnNBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlLWNhcnMtYW1vdW50Jyk7XG4gICAgICBjb25zdCBnYXJhZ2VQYWdlTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZS1wYWdlLW51bWJlcicpO1xuXG4gICAgICBpZiAoIWdhcmFnZUNhcnNBbW91bnQgfHwgIWdhcmFnZVBhZ2VOdW1iZXIpIHJldHVybjtcbiAgICAgIGdhcmFnZUNhcnNBbW91bnQuaW5uZXJIVE1MID0gYCR7bmV3Q2Fyc0Ftb3VudH1gO1xuICAgICAgZ2FyYWdlUGFnZU51bWJlci5pbm5lckhUTUwgPSBgJHtwYWdlfWA7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVNob3dXaW5uZXJFdmVudCgpOiB2b2lkIHtcbiAgICBFdmVudEJ1cy5yZWdpc3RlcihFdmVudEJ1c0V2ZW50cy5FVkVOVF9TSE9XX1dJTk5FUiwgYXN5bmMgKHdpbm5lcjogV2luUmFjZUNhcikgPT4ge1xuICAgICAgdGhpcy5zaG93V2lubmVyUG9wdXAod2lubmVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYXJhZ2VQYWdlVmlldztcbiIsImltcG9ydCB7IENyZWF0ZUZvcm1EZWZhdWx0VmFsdWVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uc3RhbnRzL2dhcmFnZVBhZ2VDb25zdGFudHMnO1xuaW1wb3J0IHsgRXZlbnRCdXNFdmVudHMgfSBmcm9tICcuLi8uLi8uLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5pbnRlcmZhY2UnO1xuaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4uLy4uLy4uLy4uL2V2ZW50QnVzL2V2ZW50QnVzLnNpbmdsZXRvbic7XG5pbXBvcnQgQ3JlYXRlRWxlbWVudCBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvY3JlYXRlRWxlbWVudCc7XG5cbmNsYXNzIENhckNyZWF0ZUZvcm1WaWV3IHtcbiAgcHVibGljIHJlbmRlcihnYXJhZ2VQYW5lbENvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBjYXJDcmVhdGVGb3JtID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCB7XG4gICAgICBpZDogJ2NyZWF0ZS1mb3JtJyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCkgYXMgSFRNTEZvcm1FbGVtZW50O1xuXG4gICAgY29uc3QgY2FyTW9kZWxMYWJlbCA9IG5ldyBDcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2Nhci1tb2RlbC1sYWJlbCcsXG4gICAgfSkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgY29uc3QgY2FyTW9kZWxJbnB1dCA9IG5ldyBDcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2Nhci1tb2RlbC1pbnB1dCcsXG4gICAgfSkuY3JlYXRlRWxlbWVudCgpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY2FyTW9kZWxJbnB1dC50eXBlID0gJ3RleHQnO1xuXG4gICAgY29uc3QgY2FyQ29sb3JMYWJlbCA9IG5ldyBDcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2Nhci1jb2xvci1sYWJlbCcsXG4gICAgfSkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgY29uc3QgY2FyQ29sb3JJbnB1dCA9IG5ldyBDcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2Nhci1jb2xvci1pbnB1dCcsXG4gICAgfSkuY3JlYXRlRWxlbWVudCgpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY2FyQ29sb3JJbnB1dC50eXBlID0gJ2NvbG9yJztcbiAgICBjYXJDb2xvcklucHV0LnZhbHVlID0gQ3JlYXRlRm9ybURlZmF1bHRWYWx1ZXMuQ0FSX0NPTE9SO1xuXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gbmV3IENyZWF0ZUVsZW1lbnQoXG4gICAgICAnYnV0dG9uJyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnY3JlYXRlLWJ0bicgfSxcbiAgICAgICdDcmVhdGUnXG4gICAgKS5jcmVhdGVFbGVtZW50KCkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgY3JlYXRlQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcblxuICAgIGNhck1vZGVsTGFiZWwuYXBwZW5kKGNhck1vZGVsSW5wdXQpO1xuICAgIGNhckNvbG9yTGFiZWwuYXBwZW5kKGNhckNvbG9ySW5wdXQpO1xuXG4gICAgY2FyQ3JlYXRlRm9ybS5hcHBlbmQoY2FyTW9kZWxMYWJlbCk7XG4gICAgY2FyQ3JlYXRlRm9ybS5hcHBlbmQoY2FyQ29sb3JMYWJlbCk7XG4gICAgY2FyQ3JlYXRlRm9ybS5hcHBlbmQoY3JlYXRlQnV0dG9uKTtcblxuICAgIGNhckNyZWF0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAoY2FyTW9kZWxJbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgIGNhck1vZGVsSW5wdXQudmFsdWUgPSBDcmVhdGVGb3JtRGVmYXVsdFZhbHVlcy5DQVJfTU9ERUw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhck1vZGVsID0gY2FyTW9kZWxJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IGNhckNvbG9yID0gY2FyQ29sb3JJbnB1dC52YWx1ZTtcblxuICAgICAgY29uc3QgY2FyRGF0YSA9IFtjYXJNb2RlbCwgY2FyQ29sb3JdO1xuXG4gICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9DUkVBVEVfQ0FSLCBjYXJEYXRhKTtcblxuICAgICAgY2FyTW9kZWxJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgY2FyQ29sb3JJbnB1dC52YWx1ZSA9IENyZWF0ZUZvcm1EZWZhdWx0VmFsdWVzLkNBUl9DT0xPUjtcbiAgICB9KTtcblxuICAgIGdhcmFnZVBhbmVsQ29udGFpbmVyLmFwcGVuZChjYXJDcmVhdGVGb3JtKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJDcmVhdGVGb3JtVmlldztcbiIsImltcG9ydCBDYXJBcGkgZnJvbSAnLi4vLi4vLi4vLi4vYXBpL2NhckFwaS9jYXJBcGkuc2luZ2xldG9uJztcbmltcG9ydCB7IENyZWF0ZUZvcm1EZWZhdWx0VmFsdWVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uc3RhbnRzL2dhcmFnZVBhZ2VDb25zdGFudHMnO1xuaW1wb3J0IHsgRXZlbnRCdXNFdmVudHMgfSBmcm9tICcuLi8uLi8uLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5pbnRlcmZhY2UnO1xuaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4uLy4uLy4uLy4uL2V2ZW50QnVzL2V2ZW50QnVzLnNpbmdsZXRvbic7XG5pbXBvcnQgQ2FyVG9TZXJ2ZXIgZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvY2FyL2Nhci5pbnRlcmZhY2VzJztcbmltcG9ydCBDcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9jcmVhdGVFbGVtZW50JztcblxuY2xhc3MgQ2FyVXBkYXRlRm9ybVZpZXcge1xuICBwdWJsaWMgY2FySWQ6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN1YnNjcmliZVVwZGF0ZUNhckV2ZW50KCk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKGdhcmFnZVBhbmVsQ29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGNhclVwZGF0ZUZvcm0gPSBuZXcgQ3JlYXRlRWxlbWVudCgnZm9ybScsIHsgaWQ6ICd1cGRhdGUtZm9ybScgfSkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgY29uc3QgY2FyTW9kZWxMYWJlbCA9IG5ldyBDcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2Nhci1tb2RlbC1sYWJlbCcsXG4gICAgfSkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgY29uc3QgY2FyTW9kZWxJbnB1dCA9IG5ldyBDcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2Nhci1tb2RlbC1pbnB1dCBjYXItdXBkYXRlLW1vZGVsLWlucHV0JyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjYXJNb2RlbElucHV0LnR5cGUgPSAndGV4dCc7XG5cbiAgICBjb25zdCBjYXJDb2xvckxhYmVsID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge1xuICAgICAgY2xhc3NOYW1lOiAnY2FyLWNvbG9yLWxhYmVsJyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCBjYXJDb2xvcklucHV0ID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgY2xhc3NOYW1lOiAnY2FyLWNvbG9yLWlucHV0IGNhci11cGRhdGUtY29sb3ItaW5wdXQnLFxuICAgIH0pLmNyZWF0ZUVsZW1lbnQoKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNhckNvbG9ySW5wdXQudHlwZSA9ICdjb2xvcic7XG5cbiAgICBjb25zdCB1cGRhdGVCdXR0b24gPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAgeyBjbGFzc05hbWU6ICd1cGRhdGUtYnRuJyB9LFxuICAgICAgJ1VwZGF0ZSdcbiAgICApLmNyZWF0ZUVsZW1lbnQoKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICB1cGRhdGVCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuXG4gICAgY2FyTW9kZWxMYWJlbC5hcHBlbmQoY2FyTW9kZWxJbnB1dCk7XG4gICAgY2FyQ29sb3JMYWJlbC5hcHBlbmQoY2FyQ29sb3JJbnB1dCk7XG5cbiAgICBjYXJVcGRhdGVGb3JtLmFwcGVuZChjYXJNb2RlbExhYmVsKTtcbiAgICBjYXJVcGRhdGVGb3JtLmFwcGVuZChjYXJDb2xvckxhYmVsKTtcbiAgICBjYXJVcGRhdGVGb3JtLmFwcGVuZCh1cGRhdGVCdXR0b24pO1xuXG4gICAgY2FyVXBkYXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuY2FySWQgIT09ICdudW1iZXInKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGNhcjogQ2FyVG9TZXJ2ZXIgPSB7XG4gICAgICAgIG5hbWU6IGNhck1vZGVsSW5wdXQudmFsdWUsXG4gICAgICAgIGNvbG9yOiBjYXJDb2xvcklucHV0LnZhbHVlLFxuICAgICAgICBpZDogdGhpcy5jYXJJZCxcbiAgICAgIH07XG5cbiAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1VQREFURV9DQVIsIGNhcik7XG5cbiAgICAgIGNhck1vZGVsSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGNhckNvbG9ySW5wdXQudmFsdWUgPSBDcmVhdGVGb3JtRGVmYXVsdFZhbHVlcy5DQVJfQ09MT1I7XG4gICAgfSk7XG5cbiAgICBnYXJhZ2VQYW5lbENvbnRhaW5lci5hcHBlbmQoY2FyVXBkYXRlRm9ybSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVVwZGF0ZUNhckV2ZW50KCkge1xuICAgIEV2ZW50QnVzLnJlZ2lzdGVyKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1NFTEVDVF9DQVIsIGFzeW5jIChjYXJJZDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZENhciA9IGF3YWl0IENhckFwaS5nZXRDYXIoY2FySWQpO1xuXG4gICAgICB0aGlzLmNhcklkID0gY2FySWQ7XG5cbiAgICAgIGNvbnN0IGNhck1vZGVsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyLXVwZGF0ZS1tb2RlbC1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBjb25zdCBjYXJDb2xvcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhci11cGRhdGUtY29sb3ItaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgICBjYXJNb2RlbElucHV0LnZhbHVlID0gc2VsZWN0ZWRDYXIubmFtZTtcbiAgICAgIGNhckNvbG9ySW5wdXQudmFsdWUgPSBzZWxlY3RlZENhci5jb2xvcjtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJVcGRhdGVGb3JtVmlldztcbiIsImltcG9ydCB7IEV2ZW50QnVzRXZlbnRzIH0gZnJvbSAnLi4vLi4vLi4vLi4vZXZlbnRCdXMvZXZlbnRCdXMuaW50ZXJmYWNlJztcbmltcG9ydCBFdmVudEJ1cyBmcm9tICcuLi8uLi8uLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5zaW5nbGV0b24nO1xuaW1wb3J0IENyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2NyZWF0ZUVsZW1lbnQnO1xuXG5jbGFzcyBHYXJhZ2VDb250cm9sQnV0dG9uc1ZpZXcge1xuICBwdWJsaWMgcmVuZGVyKGdhcmFnZVBhbmVsQ29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHBhbmVsQnV0dG9uc0NvbnRhaW5lciA9IG5ldyBDcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICBjbGFzc05hbWU6ICdwYW5lbC1idG5zLWNvbnRhaW5lcicsXG4gICAgfSkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgY29uc3QgcmFzZUJ1dHRvbiA9IG5ldyBDcmVhdGVFbGVtZW50KFxuICAgICAgJ2J1dHRvbicsXG4gICAgICB7IGNsYXNzTmFtZTogJ3JhY2UtYnRuJyB9LFxuICAgICAgJ1JhY2UnXG4gICAgKS5jcmVhdGVFbGVtZW50KCkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAgeyBjbGFzc05hbWU6ICdyZXNldC1idG4nIH0sXG4gICAgICAnUmVzZXQnXG4gICAgKS5jcmVhdGVFbGVtZW50KCkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgcmVzZXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbnN0IGdlbmVyYXRlQ2Fyc0J1dHRvbiA9IG5ldyBDcmVhdGVFbGVtZW50KFxuICAgICAgJ2J1dHRvbicsXG4gICAgICB7IGNsYXNzTmFtZTogJ2dlbmVyYXRlLWNhcnMtYnRuJyB9LFxuICAgICAgJ0dlbmVyYXRlIGNhcnMnXG4gICAgKS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICByYXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5idXR0b25zQ29udHJvbGxlcih0cnVlKTtcbiAgICAgIHJlc2V0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICByYXNlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1NUQVJUX1JBQ0UpO1xuICAgIH0pO1xuXG4gICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9TVE9QX1JBQ0UpO1xuICAgICAgcmFzZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgcmVzZXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5idXR0b25zQ29udHJvbGxlcihmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBnZW5lcmF0ZUNhcnNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9HRU5FUkFURV9DQVJTKTtcbiAgICB9KTtcblxuICAgIHBhbmVsQnV0dG9uc0NvbnRhaW5lci5hcHBlbmQocmFzZUJ1dHRvbik7XG4gICAgcGFuZWxCdXR0b25zQ29udGFpbmVyLmFwcGVuZChyZXNldEJ1dHRvbik7XG4gICAgcGFuZWxCdXR0b25zQ29udGFpbmVyLmFwcGVuZChnZW5lcmF0ZUNhcnNCdXR0b24pO1xuXG4gICAgZ2FyYWdlUGFuZWxDb250YWluZXIuYXBwZW5kKHBhbmVsQnV0dG9uc0NvbnRhaW5lcik7XG4gIH1cblxuICBwcml2YXRlIGJ1dHRvbnNDb250cm9sbGVyKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHN0YXJ0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFydC1idG4nKTtcbiAgICBzdGFydEJ0bnMuZm9yRWFjaCgoc3RhcnRCdG4pID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHN0YXJ0QnRuIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgYnV0dG9uLmRpc2FibGVkID0gc3RhdHVzO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd2lubmVyc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJzLWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHdpbm5lcnNCdXR0b24uZGlzYWJsZWQgPSBzdGF0dXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FyYWdlQ29udHJvbEJ1dHRvbnNWaWV3O1xuIiwiaW1wb3J0IENyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IENhckNyZWF0ZUZvcm1WaWV3IGZyb20gJy4vY2FyQ3JlYXRlRm9ybS9jYXJDcmVhdGVGb3JtVmlldyc7XG5pbXBvcnQgQ2FyVXBkYXRlRm9ybVZpZXcgZnJvbSAnLi9jYXJVcGRhdGVGb3JtL2NhclVwZGF0ZUZvcm1WaWV3JztcbmltcG9ydCBHYXJhZ2VDb250cm9sQnV0dG9uc1ZpZXcgZnJvbSAnLi9nYXJhZ2VDb250cm9sQnV0dG9ucy9nYXJhZ2VDb250cm9sQnV0dG9uc1ZpZXcnO1xuXG5jbGFzcyBHYXJhZ2VQYW5lbFZpZXcge1xuICBwdWJsaWMgY2FyQ3JlYXRlRm9ybVZpZXc6IENhckNyZWF0ZUZvcm1WaWV3O1xuXG4gIHB1YmxpYyBjYXJVcGRhdGVGb3JtVmlldzogQ2FyVXBkYXRlRm9ybVZpZXc7XG5cbiAgcHVibGljIGdhcmFnZUNvbnRyb2xCdXR0b25zVmlldzogR2FyYWdlQ29udHJvbEJ1dHRvbnNWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FyQ3JlYXRlRm9ybVZpZXcgPSBuZXcgQ2FyQ3JlYXRlRm9ybVZpZXcoKTtcbiAgICB0aGlzLmNhclVwZGF0ZUZvcm1WaWV3ID0gbmV3IENhclVwZGF0ZUZvcm1WaWV3KCk7XG4gICAgdGhpcy5nYXJhZ2VDb250cm9sQnV0dG9uc1ZpZXcgPSBuZXcgR2FyYWdlQ29udHJvbEJ1dHRvbnNWaWV3KCk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBnYXJhZ2VQYW5lbENvbnRhaW5lciA9IHRoaXMucmVuZGVyR2FyYWdlUGFuZWwoKTtcblxuICAgIHJldHVybiBnYXJhZ2VQYW5lbENvbnRhaW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyR2FyYWdlUGFuZWwoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGdhcmFnZVBhbmVsQ29udGFpbmVyID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2dhcmFnZS1wYW5lbC1jb250YWluZXInLFxuICAgIH0pLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIHRoaXMuY2FyQ3JlYXRlRm9ybVZpZXcucmVuZGVyKGdhcmFnZVBhbmVsQ29udGFpbmVyKTtcbiAgICB0aGlzLmNhclVwZGF0ZUZvcm1WaWV3LnJlbmRlcihnYXJhZ2VQYW5lbENvbnRhaW5lcik7XG4gICAgdGhpcy5nYXJhZ2VDb250cm9sQnV0dG9uc1ZpZXcucmVuZGVyKGdhcmFnZVBhbmVsQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBnYXJhZ2VQYW5lbENvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYXJhZ2VQYW5lbFZpZXc7XG4iLCJpbXBvcnQgQ3JlYXRlRWxlbWVudCBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvY3JlYXRlRWxlbWVudCc7XG5cbmNsYXNzIFdpbm5lcnNCb3hWaWV3IHtcbiAgcHVibGljIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgd2lubmVyc0JveCA9IHRoaXMucmVuZGVyV2lubmVyc0JveCgpO1xuXG4gICAgcmV0dXJuIHdpbm5lcnNCb3g7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcldpbm5lcnNCb3goKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHdpbm5lcnNCb3hDb250YWluZXIgPSBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnd2lubmVycy1ib3gtY29udGFpbmVyJyxcbiAgICB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCB0YWJsZUhlYWQgPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICd3aW5uZXJzLXRhYmxlLWhlYWQnIH0sXG4gICAgICBgXG4gICAgPGRpdiBjbGFzcz0naWQgdGFibGUtdGl0bGUnPklEPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0nd2luLWNhciB0YWJsZS10aXRsZSc+Q2FyPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0nd2luLW1vZGVsIHRhYmxlLXRpdGxlJz5Nb2RlbDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9J2Nhci13aW5zIHRhYmxlLXRpdGxlJz5XaW5zPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0nY2FyLXRpbWUgdGFibGUtdGl0bGUnPkJlc3Q8YnI+dGltZTwvZGl2PlxuICBgXG4gICAgKS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICBjb25zdCB3aW5uZXJzVGFibGUgPSBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6ICd3aW5uZXJzLXRhYmxlJyB9KS5jcmVhdGVFbGVtZW50KCk7XG5cbiAgICB3aW5uZXJzQm94Q29udGFpbmVyLmFwcGVuZCh0YWJsZUhlYWQpO1xuICAgIHdpbm5lcnNCb3hDb250YWluZXIuYXBwZW5kKHdpbm5lcnNUYWJsZSk7XG5cbiAgICByZXR1cm4gd2lubmVyc0JveENvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaW5uZXJzQm94VmlldztcbiIsImltcG9ydCBDYXIsIHsgV2lubmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kZWwvY2FyL2Nhci5pbnRlcmZhY2VzJztcbmltcG9ydCBDYXJBcGkgZnJvbSAnLi4vLi4vLi4vLi4vLi4vYXBpL2NhckFwaS9jYXJBcGkuc2luZ2xldG9uJztcbmltcG9ydCBDcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9jcmVhdGVFbGVtZW50JztcbmltcG9ydCB7IGdldFdpbm5lcnNUYWJsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9kb21VdGlscyc7XG5pbXBvcnQgQ2FyVmlldyBmcm9tICcuLi8uLi8uLi8uLi9nYXJhZ2VQYWdlL2dhcmFnZUJveC9jYXJSb2Fkcy9jYXJSb2FkL2Nhci9jYXJWaWV3JztcblxuY2xhc3MgV2lubmVyVmlldyB7XG4gIHByaXZhdGUgd2lubmVyOiBXaW5uZXI7XG5cbiAgc3RhdGljIGlkID0gMTtcblxuICBjb25zdHJ1Y3Rvcih3aW5uZXI6IFdpbm5lcikge1xuICAgIHRoaXMud2lubmVyID0gd2lubmVyO1xuXG4gICAgdGhpcy5yZW5kZXJUYWJsZVJvd0NvbnRhaW5lcih0aGlzLndpbm5lcik7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbmRlclRhYmxlUm93Q29udGFpbmVyKHdpbm5lcjogV2lubmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgd2lubmVyc1RhYmxlID0gZ2V0V2lubmVyc1RhYmxlKCk7XG5cbiAgICBjb25zdCB3aW5uZXJDYXIgPSBuZXcgQ2FyVmlldyhhd2FpdCB0aGlzLmdldFdpbm5lckNhckJ5SWQod2lubmVyLmlkISkpO1xuICAgIGNvbnN0IGNhckltYWdlRWxlbWVudCA9IHdpbm5lckNhci5yZW5kZXJDYXIoKTtcbiAgICBjb25zdCBjYXJNb2RlbEVsZW1lbnQgPSB3aW5uZXJDYXIucmVuZGVyQ2FyTW9kZWwoKTtcblxuICAgIGNhckltYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3aW4tY2FyJyk7XG4gICAgY2FyTW9kZWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dpbi1tb2RlbCcpO1xuXG4gICAgY29uc3Qgd2lubmVyc1RhYmxlUm93ID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnd2lubmVyLXJvdycgfSkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgd2lubmVyc1RhYmxlUm93LmFwcGVuZChcbiAgICAgIG5ldyBDcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ2lkJyB9LCBgJHtXaW5uZXJWaWV3LmlkfWApLmNyZWF0ZUVsZW1lbnQoKVxuICAgICk7XG5cbiAgICBXaW5uZXJWaWV3LmlkICs9IDE7XG5cbiAgICB3aW5uZXJzVGFibGVSb3cuYXBwZW5kKGNhckltYWdlRWxlbWVudCk7XG4gICAgd2lubmVyc1RhYmxlUm93LmFwcGVuZChjYXJNb2RlbEVsZW1lbnQpO1xuICAgIHdpbm5lcnNUYWJsZVJvdy5hcHBlbmQoXG4gICAgICBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6ICdjYXItd2lucycgfSwgYCR7d2lubmVyLndpbnN9YCkuY3JlYXRlRWxlbWVudCgpXG4gICAgKTtcbiAgICB3aW5uZXJzVGFibGVSb3cuYXBwZW5kKFxuICAgICAgbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnY2FyLXRpbWUnIH0sIGAke3dpbm5lci50aW1lfSBzYCkuY3JlYXRlRWxlbWVudCgpXG4gICAgKTtcblxuICAgIHdpbm5lcnNUYWJsZS5hcHBlbmQod2lubmVyc1RhYmxlUm93KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0V2lubmVyQ2FyQnlJZCh3aW5uZXJJZDogbnVtYmVyKTogUHJvbWlzZTxDYXI+IHtcbiAgICBjb25zdCB3aW5uZXJDYXIgPSBhd2FpdCBDYXJBcGkuZ2V0Q2FyKHdpbm5lcklkKTtcblxuICAgIHJldHVybiB3aW5uZXJDYXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lubmVyVmlldztcbiIsImltcG9ydCBXaW5uZXJzQXBpIGZyb20gJy4uLy4uLy4uLy4uL2FwaS93aW5uZXJzQXBpL3dpbm5lcnNBcGkuc2luZ2xldG9uJztcbmltcG9ydCB7IGdldFdpbm5lcnNUYWJsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9kb21VdGlscyc7XG5pbXBvcnQgV2lubmVyVmlldyBmcm9tICcuL3dpbm5lci93aW5uZXJWaWV3JztcbmltcG9ydCBFdmVudEJ1cyBmcm9tICcuLi8uLi8uLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5zaW5nbGV0b24nO1xuaW1wb3J0IHsgRXZlbnRCdXNFdmVudHMgfSBmcm9tICcuLi8uLi8uLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgUEFHRV9JTklUSUFMSVpFUiwgQ09VTlRfT0ZfV0lOTkVSU19QRVJfUEFHRSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnN0YW50cy9nYW1lQ29uc3RhbnRzJztcblxuY2xhc3MgV2lubmVyc1RhYmxlVmlldyB7XG4gIHByaXZhdGUgcGFnZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMucGFnZSA9IHBhZ2U7XG5cbiAgICB0aGlzLnJlbmRlcldpbm5lcnNUYWJsZSh0aGlzLnBhZ2UpO1xuXG4gICAgdGhpcy5zdWJzY3JpYmVVcGRhdGVXaW5uZXJzVGFibGVFdmVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJXaW5uZXJzVGFibGUocGFnZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgd2lubmVyc1RhYmxlID0gZ2V0V2lubmVyc1RhYmxlKCk7XG4gICAgaWYgKCF3aW5uZXJzVGFibGUpIHJldHVybjtcblxuICAgIHdpbm5lcnNUYWJsZS5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHdpbm5lcnMgPSBhd2FpdCBXaW5uZXJzQXBpLmdldFdpbm5lcnMocGFnZSwgQ09VTlRfT0ZfV0lOTkVSU19QRVJfUEFHRSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG4gICAgd2lubmVycy5tYXAoKHdpbm5lcikgPT4gbmV3IFdpbm5lclZpZXcod2lubmVyKSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVVwZGF0ZVdpbm5lcnNUYWJsZUV2ZW50KCk6IHZvaWQge1xuICAgIEV2ZW50QnVzLnJlZ2lzdGVyKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1VQREFURV9XSU5ORVJTX1RBQkxFLCAocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAocGFnZSAhPT0gUEFHRV9JTklUSUFMSVpFUikge1xuICAgICAgICBjb25zdCBjYWxjdWxhdGVkSWRGb3JOZXdUYWJsZVBhZ2UgPSB0aGlzLmdldENhbGN1bGF0ZWRJZEZvck5ld1RhYmxlUGFnZShwYWdlKTtcblxuICAgICAgICBXaW5uZXJWaWV3LmlkID0gY2FsY3VsYXRlZElkRm9yTmV3VGFibGVQYWdlO1xuICAgICAgfSBlbHNlIFdpbm5lclZpZXcuaWQgPSBQQUdFX0lOSVRJQUxJWkVSO1xuICAgICAgdGhpcy5yZW5kZXJXaW5uZXJzVGFibGUocGFnZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldENhbGN1bGF0ZWRJZEZvck5ld1RhYmxlUGFnZShwYWdlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRJZEZvck5ld1RhYmxlUGFnZSA9IChwYWdlIC0gMSkgKiBDT1VOVF9PRl9XSU5ORVJTX1BFUl9QQUdFICsgUEFHRV9JTklUSUFMSVpFUjtcblxuICAgIHJldHVybiBjYWxjdWxhdGVkSWRGb3JOZXdUYWJsZVBhZ2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lubmVyc1RhYmxlVmlldztcbiIsImltcG9ydCBDcmVhdGVFbGVtZW50IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jcmVhdGVFbGVtZW50JztcbmltcG9ydCB7IGdldE1haW4gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZG9tVXRpbHMnO1xuaW1wb3J0IHsgSVdpbm5lcnNQYWdlVmlldyB9IGZyb20gJy4vd2lubmVyc1BhZ2UuaW50ZXJmYWNlJztcbmltcG9ydCBXaW5uZXJzQXBpIGZyb20gJy4uLy4uL2FwaS93aW5uZXJzQXBpL3dpbm5lcnNBcGkuc2luZ2xldG9uJztcbmltcG9ydCBXaW5uZXJzQm94VmlldyBmcm9tICcuL3dpbm5lcnNCb3gvd2lubmVyc0JveFZpZXcnO1xuaW1wb3J0IFdpbm5lcnNUYWJsZVZpZXcgZnJvbSAnLi93aW5uZXJzQm94L3dpbm5lcnNUYWJsZS93aW5uZXJzVGFibGVWaWV3JztcbmltcG9ydCBFdmVudEJ1cyBmcm9tICcuLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5zaW5nbGV0b24nO1xuaW1wb3J0IHsgRXZlbnRCdXNFdmVudHMgfSBmcm9tICcuLi8uLi9ldmVudEJ1cy9ldmVudEJ1cy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgUEFHRV9JTklUSUFMSVpFUiwgQ09VTlRfT0ZfV0lOTkVSU19QRVJfUEFHRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9nYW1lQ29uc3RhbnRzJztcbmltcG9ydCB7IGdldE1heFBhZ2VOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ2V0TWF4UGFnZU51bWJlcic7XG5cbmltcG9ydCAnLi93aW5uZXJzUGFnZS5jc3MnO1xuXG5jbGFzcyBXaW5uZXJzUGFnZVZpZXcgaW1wbGVtZW50cyBJV2lubmVyc1BhZ2VWaWV3IHtcbiAgcHVibGljIHBhZ2U6IG51bWJlcjtcblxuICBwdWJsaWMgd2lubmVyc0JveFZpZXc6IFdpbm5lcnNCb3hWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgdGhpcy53aW5uZXJzQm94VmlldyA9IG5ldyBXaW5uZXJzQm94VmlldygpO1xuXG4gICAgdGhpcy5pbml0V2lubmVyc0NvbnRhaW5lcigpO1xuXG4gICAgdGhpcy5zdWJzY3JpYmVVcGRhdGVXaW5uZXJzVGl0bGVFdmVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbml0V2lubmVyc0NvbnRhaW5lcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBtYWluID0gZ2V0TWFpbigpO1xuICAgIGNvbnN0IHdpbm5lcnNDb250YWluZXIgPSBhd2FpdCB0aGlzLnJlbmRlcldpbm5lcnNDb250YWluZXIoKTtcblxuICAgIG1haW4uYXBwZW5kKHdpbm5lcnNDb250YWluZXIpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuICAgIG5ldyBXaW5uZXJzVGFibGVWaWV3KHRoaXMucGFnZSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbmRlcldpbm5lcnNDb250YWluZXIoKTogUHJvbWlzZTxIVE1MRWxlbWVudD4ge1xuICAgIGNvbnN0IHdpbm5lcnNDb250YWluZXIgPSBuZXcgQ3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiAnd2lubmVycy1jb250YWluZXIgaGlkZScsXG4gICAgfSkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgY29uc3Qgd2lubmVyc1RpdGxlID0gYXdhaXQgdGhpcy5yZW5kZXJXaW5uZXJzVGl0bGUoKTtcblxuICAgIGNvbnN0IGdhcmFnZUJveENvbnRyb2xCdXR0b25zID0gbmV3IENyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgIGNsYXNzTmFtZTogJ2NvbnRyb2wtYnRucycsXG4gICAgfSkuY3JlYXRlRWxlbWVudCgpO1xuXG4gICAgY29uc3QgcHJldkJ1dHRvbiA9IG5ldyBDcmVhdGVFbGVtZW50KFxuICAgICAgJ2J1dHRvbicsXG4gICAgICB7IGNsYXNzTmFtZTogJ3ByZXYtYnRuJyB9LFxuICAgICAgJ1ByZXYnXG4gICAgKS5jcmVhdGVFbGVtZW50KCkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IG5ldyBDcmVhdGVFbGVtZW50KFxuICAgICAgJ2J1dHRvbicsXG4gICAgICB7IGNsYXNzTmFtZTogJ25leHQtYnRuJyB9LFxuICAgICAgJ05leHQnXG4gICAgKS5jcmVhdGVFbGVtZW50KCkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgICBwcmV2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFnZSAhPT0gUEFHRV9JTklUSUFMSVpFUikge1xuICAgICAgICB0aGlzLnBhZ2UgLT0gMTtcblxuICAgICAgICBFdmVudEJ1cy5kaXNwYXRjaChFdmVudEJ1c0V2ZW50cy5FVkVOVF9VUERBVEVfV0lOTkVSU19USVRMRSwgdGhpcy5wYWdlKTtcbiAgICAgICAgRXZlbnRCdXMuZGlzcGF0Y2goRXZlbnRCdXNFdmVudHMuRVZFTlRfQ0hBTkdFX1dJTk5FUlNfUEFHRSwgdGhpcy5wYWdlKTtcbiAgICAgICAgRXZlbnRCdXMuZGlzcGF0Y2goRXZlbnRCdXNFdmVudHMuRVZFTlRfVVBEQVRFX1dJTk5FUlNfVEFCTEUsIHRoaXMucGFnZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qgd2lubmVyc0Ftb3VudCA9IGF3YWl0IFdpbm5lcnNBcGkuZ2V0VG90YWxDb3VudE9mV2lubmVycygpO1xuXG4gICAgICBjb25zdCBtYXhQYWdlTnVtYmVyID0gZ2V0TWF4UGFnZU51bWJlcihOdW1iZXIod2lubmVyc0Ftb3VudCksIENPVU5UX09GX1dJTk5FUlNfUEVSX1BBR0UpO1xuXG4gICAgICBpZiAodGhpcy5wYWdlID49IG1heFBhZ2VOdW1iZXIpIHJldHVybjtcblxuICAgICAgdGhpcy5wYWdlICs9IDE7XG5cbiAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1VQREFURV9XSU5ORVJTX1RJVExFLCB0aGlzLnBhZ2UpO1xuICAgICAgRXZlbnRCdXMuZGlzcGF0Y2goRXZlbnRCdXNFdmVudHMuRVZFTlRfQ0hBTkdFX1dJTk5FUlNfUEFHRSwgdGhpcy5wYWdlKTtcbiAgICAgIEV2ZW50QnVzLmRpc3BhdGNoKEV2ZW50QnVzRXZlbnRzLkVWRU5UX1VQREFURV9XSU5ORVJTX1RBQkxFLCB0aGlzLnBhZ2UpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd2lubmVyc0JveCA9IHRoaXMud2lubmVyc0JveFZpZXcucmVuZGVyKCk7XG5cbiAgICBnYXJhZ2VCb3hDb250cm9sQnV0dG9ucy5hcHBlbmQocHJldkJ1dHRvbik7XG4gICAgZ2FyYWdlQm94Q29udHJvbEJ1dHRvbnMuYXBwZW5kKG5leHRCdXR0b24pO1xuXG4gICAgd2lubmVyc0NvbnRhaW5lci5hcHBlbmQod2lubmVyc1RpdGxlKTtcbiAgICB3aW5uZXJzQ29udGFpbmVyLmFwcGVuZCh3aW5uZXJzQm94KTtcbiAgICB3aW5uZXJzQ29udGFpbmVyLmFwcGVuZChnYXJhZ2VCb3hDb250cm9sQnV0dG9ucyk7XG5cbiAgICByZXR1cm4gd2lubmVyc0NvbnRhaW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyV2lubmVyc1RpdGxlKCk6IFByb21pc2U8SFRNTEVsZW1lbnQ+IHtcbiAgICBjb25zdCB0b3RhbENvdW50T2ZXaW5uZXJzID0gYXdhaXQgV2lubmVyc0FwaS5nZXRUb3RhbENvdW50T2ZXaW5uZXJzKCk7XG4gICAgY29uc3QgZ2FyYWdlVGl0bGUgPSBuZXcgQ3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd3aW5uZXJzLXRpdGxlJyxcbiAgICAgIH0sXG4gICAgICBgV2lubmVycyAoPHNwYW4gY2xhc3M9J3dpbm5lcnMtY2Fycy1hbW91bnQnPiR7dG90YWxDb3VudE9mV2lubmVyc308L3NwYW4+KTxicj5QYWdlICM8c3BhbiBjbGFzcz0nd2lubmVycy1wYWdlLW51bWJlcic+JHt0aGlzLnBhZ2V9PC9zcGFuPmBcbiAgICApLmNyZWF0ZUVsZW1lbnQoKTtcblxuICAgIHJldHVybiBnYXJhZ2VUaXRsZTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlVXBkYXRlV2lubmVyc1RpdGxlRXZlbnQoKTogdm9pZCB7XG4gICAgRXZlbnRCdXMucmVnaXN0ZXIoRXZlbnRCdXNFdmVudHMuRVZFTlRfVVBEQVRFX1dJTk5FUlNfVElUTEUsIGFzeW5jIChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHRvdGFsQ291bnRPZldpbm5lcnMgPSBhd2FpdCBXaW5uZXJzQXBpLmdldFRvdGFsQ291bnRPZldpbm5lcnMoKTtcblxuICAgICAgY29uc3Qgd2lubmVyc0NhcnNBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVycy1jYXJzLWFtb3VudCcpO1xuICAgICAgY29uc3Qgd2lubmVyc1BhZ2VOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVycy1wYWdlLW51bWJlcicpO1xuXG4gICAgICBpZiAoIXdpbm5lcnNDYXJzQW1vdW50IHx8ICF3aW5uZXJzUGFnZU51bWJlcikgcmV0dXJuO1xuICAgICAgd2lubmVyc0NhcnNBbW91bnQuaW5uZXJIVE1MID0gYCR7dG90YWxDb3VudE9mV2lubmVyc31gO1xuICAgICAgd2lubmVyc1BhZ2VOdW1iZXIuaW5uZXJIVE1MID0gYCR7cGFnZX1gO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpbm5lcnNQYWdlVmlldztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcC9hcHAnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcbm5ldyBBcHAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==