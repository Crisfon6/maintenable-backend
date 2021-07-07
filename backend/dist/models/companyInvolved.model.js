"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyInvolved = void 0;
var mongoose_1 = require("mongoose");
var companyInvolvedSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    state: { type: Boolean, default: true },
    dataRegistration: { type: Date, required: true, default: Date.now() },
});
exports.CompanyInvolved = mongoose_1.model("CompanyInvolved", companyInvolvedSchema);
//# sourceMappingURL=companyInvolved.model.js.map