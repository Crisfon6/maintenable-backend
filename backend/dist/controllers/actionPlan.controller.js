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
exports.ActionPlanController = void 0;
var express_1 = require("express");
var auth_middleware_1 = require("../middlewares/auth.middleware");
var actionPlan_model_1 = require("../models/actionPlan.model");
var express_validator_1 = require("express-validator");
var validatePlaces_middleware_1 = require("../middlewares/validatePlaces.middleware");
var ActionPlanController = /** @class */ (function () {
    function ActionPlanController() {
        var _this = this;
        this.path = "/actionPlan";
        this.router = express_1.Router();
        this.initRoutes = function () {
            _this.router
                .all(_this.path, auth_middleware_1.authMiddleware)
                .get(_this.path + "/accident/:id", _this.getByAccident)
                .get(_this.path + "/:id", _this.getActionPlanById)
                .get(_this.path, _this.getActionPlan)
                .post(_this.path, [
                express_validator_1.body("actionPlan").isMongoId(),
                express_validator_1.body("dateCompliance").not().isEmpty(),
                express_validator_1.body("number").isInt(),
                validatePlaces_middleware_1.validatePlacesMiddleware,
            ], _this.create)
                .put("/update/:id", [
                express_validator_1.body("actionPlan").isMongoId(),
                express_validator_1.body("dateCompliance").not().isEmpty(),
                express_validator_1.body("number").isInt(),
                validatePlaces_middleware_1.validatePlacesMiddleware,
            ], _this.update)
                .put("/update/array/:id", [
                express_validator_1.body("actionPlanArray").isArray(),
                validatePlaces_middleware_1.validatePlacesMiddleware
            ], _this.updateArray);
        };
        this.getActionPlan = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var actionsPlan;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, actionPlan_model_1.ActionPlan.find()];
                    case 1:
                        actionsPlan = _a.sent();
                        res.status(200).send({ items: actionsPlan });
                        return [2 /*return*/];
                }
            });
        }); };
        this.getActionPlanById = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var actionsPlan;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, actionPlan_model_1.ActionPlan.findById(req.params.id)];
                    case 1:
                        actionsPlan = _a.sent();
                        res.status(200).send({ items: actionsPlan });
                        return [2 /*return*/];
                }
            });
        }); };
        this.getByAccident = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, actionPlan_model_1.ActionPlan.find({ accidentTracking: req.params.id })];
                    case 1:
                        data = _a.sent();
                        res.status(200).send({ items: data });
                        return [2 /*return*/];
                }
            });
        }); };
        this.create = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, actionPlan, dateCompliance, number, newActionPlan, actionPlanSaved;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, actionPlan = _a.actionPlan, dateCompliance = _a.dateCompliance, number = _a.number;
                        newActionPlan = new actionPlan_model_1.ActionPlan({
                            actionPlan: actionPlan,
                            dateCompliance: dateCompliance,
                            number: number,
                        });
                        return [4 /*yield*/, newActionPlan.save()];
                    case 1:
                        actionPlanSaved = _b.sent();
                        res.status(200).send({ items: actionPlanSaved });
                        return [2 /*return*/];
                }
            });
        }); };
        this.update = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var updated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, actionPlan_model_1.ActionPlan.findByIdAndUpdate(req.params.id, {
                            actionPlan: req.body.actionPlan,
                            dateCompliance: req.body.dateCompliance,
                            number: req.body.number,
                        }, { new: true })];
                    case 1:
                        updated = _a.sent();
                        res.status(200).send({ items: updated });
                        return [2 /*return*/];
                }
            });
        }); };
        this.updateArray = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var array, data, exist, idsRegister, idsIncoming, idsForDelete, promises, resp, news, newActionPlanForSave, promisesSave, resp2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, actionPlan_model_1.ActionPlan.find({ accidentTracking: req.params.id })];
                    case 1:
                        array = _a.sent();
                        data = req.body.actionPlanArray;
                        exist = data.filter(function (obj) { return Object.keys(obj).includes("id"); });
                        idsRegister = array.map(function (obj) { return obj.id; });
                        idsIncoming = exist.map(function (obj) { return obj.id; });
                        idsForDelete = idsRegister.filter(function (el) { return !idsIncoming.includes(el); });
                        promises = [];
                        idsForDelete.forEach(function (el) {
                            promises.push(actionPlan_model_1.ActionPlan.findOneAndDelete({ _id: el }));
                        });
                        return [4 /*yield*/, Promise.all(promises)];
                    case 2:
                        resp = _a.sent();
                        news = data.filter(function (obj) { return !Object.keys(obj).includes("id"); });
                        newActionPlanForSave = [];
                        news.forEach(function (el) {
                            var temp = new actionPlan_model_1.ActionPlan({
                                actionPlan: el.actionPlan,
                                dateCompliance: el.dateCompliance,
                                number: el.number,
                            });
                            newActionPlanForSave.push(temp);
                        });
                        promisesSave = [];
                        newActionPlanForSave.forEach(function (el) {
                            promisesSave.push(el.save());
                        });
                        return [4 /*yield*/, Promise.all(promisesSave)];
                    case 3:
                        resp2 = _a.sent();
                        res.status(200).send({ msg: 'good' });
                        return [2 /*return*/];
                }
            });
        }); };
        this.initRoutes();
    }
    return ActionPlanController;
}());
exports.ActionPlanController = ActionPlanController;
//# sourceMappingURL=actionPlan.controller.js.map