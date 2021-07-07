"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaController = void 0;
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var auth_middleware_1 = require("../middlewares/auth.middleware");
var area_model_1 = require("../models/area.model");
var validatePlaces_middleware_1 = require("../middlewares/validatePlaces.middleware");
var AreaController = /** @class */ (function () {
    function AreaController() {
        var _this = this;
        this.path = "/area";
        this.router = express_1.Router();
        this.initRoutes = function () {
            _this.router
                .all(_this.path, auth_middleware_1.authMiddleware)
                .get(_this.path, _this.getArea)
                .get(_this.path + '/id/:id', _this.getById)
                .delete(_this.path + '/delete/:id', _this.delete)
                .put(_this.path + '/update/:id', _this.update)
                .post(_this.path, [express_validator_1.body("name").not().isEmpty().isString(),
                validatePlaces_middleware_1.validatePlacesMiddleware], _this.create);
        };
        this.getArea = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, limit, _c, from, _d, mean, cMean, r, q, total, users;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = req.query, _b = _a.limit, limit = _b === void 0 ? 5 : _b, _c = _a.from, from = _c === void 0 ? 0 : _c, _d = _a.mean, mean = _d === void 0 ? "" : _d;
                        cMean = String(mean);
                        r = new RegExp(cMean, "i");
                        q = { state: true };
                        return [4 /*yield*/, area_model_1.Area.countDocuments(q)];
                    case 1:
                        total = _e.sent();
                        return [4 /*yield*/, area_model_1.Area.find({
                                $or: [{ name: r }],
                                $and: [{ state: true }],
                            })
                                .skip(Number(from)).limit(Number(limit))];
                    case 2:
                        users = _e.sent();
                        res.status(200).send({ items: users, total: total });
                        return [2 /*return*/];
                }
            });
        }); };
        this.getById = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, area_model_1.Area.findById(req.params.id)];
                    case 1:
                        result = _a.sent();
                        res.status(200).send({ items: result });
                        return [2 /*return*/];
                }
            });
        }); };
        this.update = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, area_model_1.Area.findByIdAndUpdate(req.params.id, {
                            name: req.body.name
                        })];
                    case 1:
                        result = _a.sent();
                        res.status(200).send({ items: result });
                        return [2 /*return*/];
                }
            });
        }); };
        this.delete = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, area_model_1.Area.findByIdAndUpdate(req.params.id, {
                            state: false
                        }, { new: true })];
                    case 1:
                        result = _a.sent();
                        res.status(200).send({ items: result });
                        return [2 /*return*/];
                }
            });
        }); };
        this.create = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var exist, name, newArea, saved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, area_model_1.Area.findOne({ name: req.body.name })];
                    case 1:
                        exist = _a.sent();
                        if (exist) {
                            return [2 /*return*/, res.status(401).send({ msg: "Ya fue creado" })];
                        }
                        name = req.body.name;
                        newArea = new area_model_1.Area({
                            name: name
                        });
                        return [4 /*yield*/, newArea.save()];
                    case 2:
                        saved = _a.sent();
                        res.status(200).send({ items: saved });
                        return [2 /*return*/];
                }
            });
        }); };
        this.initRoutes();
    }
    return AreaController;
}());
exports.AreaController = AreaController;
//# sourceMappingURL=area.controller.js.map