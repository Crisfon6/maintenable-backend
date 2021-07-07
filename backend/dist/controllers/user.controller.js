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
exports.UserController = void 0;
var express_1 = require("express");
var user_model_1 = require("../models/user.model");
var bcrypt_1 = __importDefault(require("bcrypt"));
var auth_middleware_1 = require("../middlewares/auth.middleware");
var express_validator_1 = require("express-validator");
var validatePlaces_middleware_1 = require("../middlewares/validatePlaces.middleware");
var UserController = /** @class */ (function () {
    function UserController() {
        var _this = this;
        this.path = "/user";
        this.router = express_1.Router();
        this.initRoutes = function () {
            _this.router
                .all(_this.path, auth_middleware_1.authMiddleware)
                .get(_this.path + '/id/:id', _this.getById)
                .get(_this.path, _this.getUsers)
                .put(_this.path + '/update/:id', _this.update)
                .delete(_this.path + '/delete/:id', _this.delete)
                .post(_this.path, [
                express_validator_1.body("username").not().isEmpty().isString(),
                express_validator_1.body("password").not().isEmpty().isString(),
                express_validator_1.body("role").isIn(["ADMIN", "NORMAL"]),
                validatePlaces_middleware_1.validatePlacesMiddleware,
            ], _this.createUser);
        };
        this.update = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var updated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_model_1.User.findByIdAndUpdate(req.params.id, {
                            username: req.body.username,
                            password: req.body.password
                        }, { new: true })];
                    case 1:
                        updated = _a.sent();
                        res.status(200).send({
                            items: updated
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.delete = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var deleted;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_model_1.User.findByIdAndUpdate(req.params.id, { state: false }, { new: true })];
                    case 1:
                        deleted = _a.sent();
                        return [2 /*return*/, res.status(200).send({ items: deleted })];
                }
            });
        }); };
        this.getUsers = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, limit, _c, skip, _d, mean, cMean, r, q, total, users;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = req.query, _b = _a.limit, limit = _b === void 0 ? 5 : _b, _c = _a.skip, skip = _c === void 0 ? 0 : _c, _d = _a.mean, mean = _d === void 0 ? "" : _d;
                        cMean = String(mean);
                        r = new RegExp(cMean, "i");
                        q = { state: true };
                        return [4 /*yield*/, user_model_1.User.countDocuments(q)];
                    case 1:
                        total = _e.sent();
                        return [4 /*yield*/, user_model_1.User.find({
                                $or: [{ username: r }],
                                $and: [{ state: true }],
                            })
                                .skip(Number(skip)).limit(Number(limit))];
                    case 2:
                        users = _e.sent();
                        res.status(200).send({ items: users, total: total });
                        return [2 /*return*/];
                }
            });
        }); };
        this.getById = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params['id'];
                        return [4 /*yield*/, user_model_1.User.findById(id)];
                    case 1:
                        user = _a.sent();
                        res.status(200).send({
                            user: user
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.createUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, username, password, user, salt, hash, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, username = _a.username, password = _a.password;
                        return [4 /*yield*/, user_model_1.User.findOne({ username: username })];
                    case 1:
                        user = _b.sent();
                        if (user)
                            return [2 /*return*/, res.status(400).send("El usuario ya existe")];
                        return [4 /*yield*/, bcrypt_1.default.genSalt(10)];
                    case 2:
                        salt = _b.sent();
                        return [4 /*yield*/, bcrypt_1.default.hash(password, salt)];
                    case 3:
                        hash = _b.sent();
                        user = new user_model_1.User({
                            username: username,
                            password: hash,
                            role: req.body.role,
                        });
                        return [4 /*yield*/, user.save()];
                    case 4:
                        result = _b.sent();
                        if (result) {
                            res.status(200).send({ msg: 'ok' });
                        }
                        else {
                            return [2 /*return*/, res.status(400).send("Error registrando el usuario")];
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.initRoutes();
    }
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map