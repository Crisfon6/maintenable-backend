"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Potential = void 0;
var mongoose_1 = require("mongoose");
var potentialSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    state: { type: Boolean, required: true, default: true }
});
exports.Potential = mongoose_1.model('Potential', potentialSchema);
//# sourceMappingURL=potential.model.js.map