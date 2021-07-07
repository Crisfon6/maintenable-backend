"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePlacesMiddleware = void 0;
var express_validator_1 = require("express-validator");
var validatePlacesMiddleware = function (req, res, next) {
    var errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({
            msg: errors.array()
        });
    }
    next();
};
exports.validatePlacesMiddleware = validatePlacesMiddleware;
//# sourceMappingURL=validatePlaces.middleware.js.map