"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjuredBodyPart = void 0;
var mongoose_1 = require("mongoose");
var injuredBodyPartSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    state: { type: Boolean, default: true },
    dataRegistration: { type: Date, required: true, default: Date.now() },
});
exports.InjuredBodyPart = mongoose_1.model("InjuredBodyPart", injuredBodyPartSchema);
//# sourceMappingURL=injuredBodyPart.model.js.map