"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjuredType = void 0;
var mongoose_1 = require("mongoose");
var injuredTypeSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    state: { type: Boolean, default: true },
    dataRegistration: { type: Date, required: true, default: Date.now() },
});
exports.InjuredType = mongoose_1.model("InjuredType", injuredTypeSchema);
//# sourceMappingURL=injuredType.model.js.map