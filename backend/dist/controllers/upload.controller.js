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
exports.UploadController = void 0;
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var multer_1 = __importDefault(require("multer"));
var validatePlaces_middleware_1 = require("../middlewares/validatePlaces.middleware");
var path_1 = __importDefault(require("path"));
var moment_1 = __importDefault(require("moment"));
var fs_1 = __importDefault(require("fs"));
var auth_middleware_1 = require("../middlewares/auth.middleware");
var role_middleware_1 = require("../middlewares/role.middleware");
var UploadController = /** @class */ (function () {
    function UploadController() {
        var _this = this;
        this.path = "/uploads";
        this.router = express_1.Router();
        this.storage = multer_1.default.diskStorage({
            destination: function (req, file, cb) {
                if (file.mimetype.endsWith("pdf")) {
                    cb(null, path_1.default.join("./uploads/pdf/"));
                }
                else if (file.mimetype.startsWith("image")) {
                    cb(null, path_1.default.join("./uploads/img/"));
                }
            },
            filename: function (req, file, cb) { return __awaiter(_this, void 0, void 0, function () {
                var filename;
                return __generator(this, function (_a) {
                    if (!file) {
                        return [2 /*return*/, cb(null, false)];
                    }
                    filename = moment_1.default().unix() + path_1.default.extname(file.originalname);
                    cb(null, filename);
                    return [2 /*return*/];
                });
            }); },
        });
        this.upload = multer_1.default({
            storage: this.storage,
            fileFilter: function (req, file, cb) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (!file.mimetype) {
                        req.errorsFile = "Archivo no permitido";
                        return [2 /*return*/, cb(null, false)];
                    }
                    if (!file.mimetype.startsWith("image") &&
                        !file.mimetype.endsWith("pdf")) {
                        req.errorsFile = "Archivo no permitido";
                        return [2 /*return*/, cb(null, false)];
                    }
                    return [2 /*return*/, cb(null, true)];
                });
            }); },
        });
        this.initRoutes = function () {
            _this.router
                .all(_this.path, [
                auth_middleware_1.authMiddleware,
                role_middleware_1.roleValidatorMiddleware("ADMIN"),
                express_validator_1.param("type").isIn(["img", "pdf"]),
                validatePlaces_middleware_1.validatePlacesMiddleware,
            ])
                .post(_this.path + "/:type", _this.upload.single("file"), function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var file, url;
                return __generator(this, function (_a) {
                    file = req.file;
                    if (req.errorsFile)
                        return [2 /*return*/, res.status(401).send({ msg: "Archivo no permitido" })];
                    url = req.protocol +
                        "://" +
                        req.get("host") +
                        "/api/uploads/" +
                        (req.params.type + "/") +
                        file.filename;
                    res.send({ msg: url });
                    return [2 /*return*/];
                });
            }); })
                .put(_this.path + "/update/:type/:old", _this.upload.single("file"), function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                var file, url, urlOld;
                return __generator(this, function (_a) {
                    file = req.file;
                    if (req.errorsFile)
                        return [2 /*return*/, res.status(401).send({ msg: "Archivo no permitido" })];
                    url = req.protocol +
                        "://" +
                        req.get("host") +
                        "/api/uploads/" +
                        (req.params.type + "/") +
                        file.filename;
                    urlOld = "./uploads/" + req.params.type + ("/" + req.params.old);
                    fs_1.default.unlinkSync(urlOld);
                    res.send({ msg: url });
                    return [2 /*return*/];
                });
            }); })
                .get(_this.path + "/:type/:name", _this.sendFile);
        };
        this.sendFile = function (req, res) {
            var url = path_1.default.join(__dirname, "../../", "./uploads", req.params.type, req.params.name);
            res.status(200).sendFile(url);
        };
        this.initRoutes();
    }
    return UploadController;
}());
exports.UploadController = UploadController;
//# sourceMappingURL=upload.controller.js.map