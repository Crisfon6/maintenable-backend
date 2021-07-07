"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contractor = void 0;
var mongoose_1 = require("mongoose");
var contractorSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    state: { type: Boolean, default: true },
    dataRegistration: { type: Date, required: true, default: Date.now() },
});
exports.Contractor = mongoose_1.model("Contractor", contractorSchema);
//# sourceMappingURL=contractor.model.js.map