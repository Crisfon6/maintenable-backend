"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
var errorMiddleware = function (error, req, res, next) {
    var status = error.status || 500;
    var message = error.message || "Algo salio mal";
    res.status(status).send({
        status: status,
        message: message,
    });
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map