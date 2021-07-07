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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccidentTrackingController = void 0;
var express_1 = require("express");
var accidentTracking_model_1 = require("../models/accidentTracking.model");
var actionPlan_model_1 = require("../models/actionPlan.model");
var contractor_model_1 = require("../models/contractor.model");
var companyInvolved_model_1 = require("../models/companyInvolved.model");
var area_model_1 = require("../models/area.model");
var classification_model_1 = require("../models/classification.model");
var injuredBodyPart_model_1 = require("../models/injuredBodyPart.model");
var injuredType_model_1 = require("../models/injuredType.model");
var activityInvolved_model_1 = require("../models/activityInvolved.model");
var typeActionPlan_model_1 = require("../models/typeActionPlan.model");
var auth_middleware_1 = require("../middlewares/auth.middleware");
var express_validator_1 = require("express-validator");
var validatePlaces_middleware_1 = require("../middlewares/validatePlaces.middleware");
var fs_1 = __importDefault(require("fs"));
var moment_1 = __importDefault(require("moment"));
var AccidentTrackingController = /** @class */ (function () {
    function AccidentTrackingController() {
        var _this = this;
        this.path = "/accidentTracking";
        this.router = express_1.Router();
        this.initRoutes = function () {
            _this.router
                .all(_this.path, auth_middleware_1.authMiddleware)
                .delete(_this.path + "/delete/:id", _this.deleteAccidentTracking)
                .get(_this.path + "/id/:id", _this.getById)
                .get(_this.path + "/get", _this.getInfoForCreateAccidentTracking)
                .get(_this.path, _this.getAccidenTracking)
                .post(_this.path + "/csv", [express_validator_1.body("ids").isArray()], _this.getCsv)
                .post(_this.path, [
                express_validator_1.body("contractor").isMongoId(),
                express_validator_1.body("companyInvolved").isMongoId(),
                express_validator_1.body("area").isMongoId(),
                express_validator_1.body("description").isString(),
                express_validator_1.body("activityInvolved").isMongoId(),
                express_validator_1.body("classification").isMongoId(),
                express_validator_1.body("injuredBodyPart").isMongoId(),
                express_validator_1.body("injuredType").isMongoId(),
                express_validator_1.body("actionPlanArray").isArray(),
                express_validator_1.body("date").not().isEmpty(),
                validatePlaces_middleware_1.validatePlacesMiddleware,
            ], _this.create)
                .put(_this.path + "/update/:id", [
                express_validator_1.body("contractor").isMongoId(),
                express_validator_1.body("companyInvolved").isMongoId(),
                express_validator_1.body("area").isMongoId(),
                express_validator_1.body("description").isString(),
                express_validator_1.body("activityInvolved").isMongoId(),
                express_validator_1.body("classification").isMongoId(),
                express_validator_1.body("injuredBodyPart").isMongoId(),
                express_validator_1.body("injuredType").isMongoId(),
                express_validator_1.body("date").not().isEmpty(),
                validatePlaces_middleware_1.validatePlacesMiddleware,
            ], _this.updateAccidentTracking);
        };
        this.getAccidenTracking = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, limit, _c, from, _d, mean, cMean, total, results_1, results;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = req.query, _b = _a.limit, limit = _b === void 0 ? 5 : _b, _c = _a.from, from = _c === void 0 ? 0 : _c, _d = _a.mean, mean = _d === void 0 ? "" : _d;
                        cMean = String(mean);
                        return [4 /*yield*/, accidentTracking_model_1.AccidentTracking.countDocuments()];
                    case 1:
                        total = _e.sent();
                        if (!(cMean === "")) return [3 /*break*/, 3];
                        return [4 /*yield*/, accidentTracking_model_1.AccidentTracking.find({ state: true })
                                .populate("companyInvolved", "name")
                                .populate("contractor")
                                .populate("area")
                                .populate("classification")
                                .populate("injuredType")
                                .skip(Number(from))
                                .limit(Number(limit))];
                    case 2:
                        results_1 = _e.sent();
                        return [2 /*return*/, res.status(200).send({ items: results_1, total: total })];
                    case 3: return [4 /*yield*/, accidentTracking_model_1.AccidentTracking.find({
                            $or: [
                                { _id: cMean },
                                { contractor: cMean },
                                { companyInvolved: cMean },
                                { area: cMean },
                                { classification: cMean },
                                { injuredType: cMean },
                            ],
                            $and: [{ state: true }],
                        })
                            .populate("contractor")
                            .populate("area")
                            .populate("classification")
                            .populate("injuredType")
                            .populate("companyInvolved")
                            .skip(Number(from))
                            .limit(Number(limit))];
                    case 4:
                        results = _e.sent();
                        res.status(200).send({ items: results });
                        return [2 /*return*/];
                }
            });
        }); };
        this.getById = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var accident;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, accidentTracking_model_1.AccidentTracking.findById(req.params.id)
                            .populate("contractor")
                            .populate("area")
                            .populate("classification")
                            .populate("injuredType")
                            .populate("companyInvolved")
                            .populate("activityInvolved")
                            .populate("injuredBodyPart")];
                    case 1:
                        accident = _a.sent();
                        res.status(200).send({ items: accident });
                        return [2 /*return*/];
                }
            });
        }); };
        this.getInfoForCreateAccidentTracking = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var q, _a, contractors, companyInvolveds, areas, classifications, injuredBodyParts, injuredTypes, activityInvolveds, typeActionPlans;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        q = {};
                        return [4 /*yield*/, Promise.all([
                                contractor_model_1.Contractor.find(q),
                                companyInvolved_model_1.CompanyInvolved.find(q),
                                area_model_1.Area.find(q),
                                classification_model_1.Classification.find(q),
                                injuredBodyPart_model_1.InjuredBodyPart.find(q),
                                injuredType_model_1.InjuredType.find(q),
                                activityInvolved_model_1.ActivityInvolved.find(q),
                                typeActionPlan_model_1.TypeActionPlan.find(q),
                            ])];
                    case 1:
                        _a = _b.sent(), contractors = _a[0], companyInvolveds = _a[1], areas = _a[2], classifications = _a[3], injuredBodyParts = _a[4], injuredTypes = _a[5], activityInvolveds = _a[6], typeActionPlans = _a[7];
                        res.status(200).send({
                            contractors: contractors,
                            companyInvolveds: companyInvolveds,
                            areas: areas,
                            classifications: classifications,
                            injuredBodyParts: injuredBodyParts,
                            injuredTypes: injuredTypes,
                            activityInvolveds: activityInvolveds,
                            typeActionPlans: typeActionPlans,
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.create = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var actionPlanArray, accident, accidenTrackingSaved, index, actionTemp, action, actionSaved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionPlanArray = req.body.actionPlanArray;
                        accident = new accidentTracking_model_1.AccidentTracking({
                            contractor: req.body.contractor,
                            companyInvolved: req.body.companyInvolved,
                            area: req.body.area,
                            description: req.body.description,
                            activityInvolved: req.body.activityInvolved,
                            classification: req.body.classification,
                            injuredBodyPart: req.body.injuredBodyPart,
                            injuredType: req.body.injuredType,
                            date: req.body.date,
                        });
                        return [4 /*yield*/, accident.save()];
                    case 1:
                        accidenTrackingSaved = _a.sent();
                        index = 0;
                        _a.label = 2;
                    case 2:
                        if (!(index < actionPlanArray.length)) return [3 /*break*/, 5];
                        actionTemp = actionPlanArray[index];
                        actionTemp.accidentTracking = accidenTrackingSaved._id;
                        actionTemp.number = index;
                        action = new actionPlan_model_1.ActionPlan(actionTemp);
                        return [4 /*yield*/, action.save()];
                    case 3:
                        actionSaved = _a.sent();
                        _a.label = 4;
                    case 4:
                        index++;
                        return [3 /*break*/, 2];
                    case 5:
                        res.status(200).send(accidenTrackingSaved);
                        return [2 /*return*/];
                }
            });
        }); };
        this.updateAccidentTracking = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, updated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params["id"];
                        return [4 /*yield*/, accidentTracking_model_1.AccidentTracking.findByIdAndUpdate(id, {
                                contractor: req.body.contractor,
                                companyInvolved: req.body.companyInvolved,
                                area: req.body.area,
                                description: req.body.description,
                                activityInvolved: req.body.activityInvolved,
                                classification: req.body.classification,
                                injuredBodyPart: req.body.injuredBodyPart,
                                injuredType: req.body.injuredType,
                                date: req.body.date,
                                pdf: req.body.pdf
                            }, { new: true })];
                    case 1:
                        updated = _a.sent();
                        res.status(200).send({ items: updated });
                        return [2 /*return*/];
                }
            });
        }); };
        this.deleteAccidentTracking = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, deleted;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, accidentTracking_model_1.AccidentTracking.findByIdAndUpdate(id, { state: false }, { new: true })];
                    case 1:
                        deleted = _a.sent();
                        res.status(200).send({ items: deleted });
                        return [2 /*return*/];
                }
            });
        }); };
        this.getCsv = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var ids, csv, url, d;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ids = req.body.ids;
                        return [4 /*yield*/, this.createCSV(ids)];
                    case 1:
                        csv = _a.sent();
                        url = './temp/' + moment_1.default().unix() + '.csv';
                        d = fs_1.default.writeFileSync(url, csv);
                        res.status(200).download(url, 'report.csv');
                        setTimeout(function () {
                            fs_1.default.unlinkSync(url);
                        }, 20000);
                        return [2 /*return*/];
                }
            });
        }); };
        this.createCSV = function (ids) { return __awaiter(_this, void 0, void 0, function () {
            var csv, _loop_1, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        csv = "";
                        _loop_1 = function (index) {
                            var id, _b, dataAccidentTracking, dataActionPlan, dataJSON, actionsPlansJSON, lastNumber, index_1, elementX, key1, key2, key1, key2, headers, values;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        id = ids[index];
                                        return [4 /*yield*/, Promise.all([
                                                accidentTracking_model_1.AccidentTracking.findById(id)
                                                    .populate("companyInvolved", "name")
                                                    .populate("contractor", "name")
                                                    .populate("area", "name")
                                                    .populate("classification", "name")
                                                    .populate("injuredType", "name")
                                                    .populate("activityInvolved", "name")
                                                    .populate("injuredBodyPart", "name"),
                                                actionPlan_model_1.ActionPlan.find({ accidentTracking: id }).populate("actionPlan"),
                                            ])];
                                    case 1:
                                        _b = _c.sent(), dataAccidentTracking = _b[0], dataActionPlan = _b[1];
                                        dataJSON = {
                                            "Fecha de regisrto": dataAccidentTracking === null || dataAccidentTracking === void 0 ? void 0 : dataAccidentTracking.dataRegistration,
                                            Contratista: dataAccidentTracking === null || dataAccidentTracking === void 0 ? void 0 : dataAccidentTracking.contractor.name,
                                            "Empresa involucrada": dataAccidentTracking === null || dataAccidentTracking === void 0 ? void 0 : dataAccidentTracking.companyInvolved.name,
                                            Area: dataAccidentTracking === null || dataAccidentTracking === void 0 ? void 0 : dataAccidentTracking.area.name,
                                            Descripcion: dataAccidentTracking === null || dataAccidentTracking === void 0 ? void 0 : dataAccidentTracking.description,
                                            "Actividad involucrada": dataAccidentTracking === null || dataAccidentTracking === void 0 ? void 0 : dataAccidentTracking.activityInvolved.name,
                                            Classificacion: dataAccidentTracking === null || dataAccidentTracking === void 0 ? void 0 : dataAccidentTracking.classification.name,
                                            "Parte del cuerpo lesionada": dataAccidentTracking === null || dataAccidentTracking === void 0 ? void 0 : dataAccidentTracking.injuredBodyPart.name,
                                            "Tipo de lesion o Daño": dataAccidentTracking === null || dataAccidentTracking === void 0 ? void 0 : dataAccidentTracking.injuredType.name,
                                            Fecha: dataAccidentTracking === null || dataAccidentTracking === void 0 ? void 0 : dataAccidentTracking.date,
                                        };
                                        actionsPlansJSON = [];
                                        lastNumber = 0;
                                        for (index_1 = 0; index_1 < 7; index_1++) {
                                            if (dataActionPlan[index_1] !== undefined) {
                                                elementX = dataActionPlan[index_1];
                                                lastNumber = Number(elementX['number']) + 1;
                                                key1 = "Plan de accion " + (lastNumber + 1);
                                                key2 = "Fecha de cumplimiento " + (lastNumber + 1);
                                                dataJSON[key1] = elementX['name'];
                                                dataJSON[key2] = elementX['dateCompliance'];
                                            }
                                            else {
                                                lastNumber += 1;
                                                key1 = "Plan de accion " + (lastNumber + 1);
                                                key2 = "Fecha de cumplimiento " + (lastNumber + 1);
                                                dataJSON[key1] = '';
                                                dataJSON[key2] = '';
                                            }
                                        }
                                        headers = '';
                                        Object.keys(dataJSON).forEach(function (el) {
                                            headers += el + ';';
                                        });
                                        values = '';
                                        Object.values(dataJSON).forEach(function (el) {
                                            values += el + ';';
                                        });
                                        if (index === 0) {
                                            csv += headers + '\n' + values + "\n";
                                        }
                                        else {
                                            csv += values + "\n";
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index < ids.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(index)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        index++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, csv];
                }
            });
        }); };
        this.initRoutes();
    }
    return AccidentTrackingController;
}());
exports.AccidentTrackingController = AccidentTrackingController;
//# sourceMappingURL=accidentTracking.controller.js.map