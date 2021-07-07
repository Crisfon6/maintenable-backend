"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccidentTracking = void 0;
var mongoose_1 = require("mongoose");
var accidentTracking = new mongoose_1.Schema({
    dataRegistration: { type: Date, required: true, default: Date.now() },
    contractor: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Contractor",
        required: true,
    },
    // CompanyInvolved
    companyInvolved: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CompanyInvolved",
        required: true,
    },
    area: { type: mongoose_1.Schema.Types.ObjectId, ref: "Area", required: true },
    description: { type: String, required: true },
    activityInvolved: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "ActivityInvolved",
        required: true,
    },
    classification: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Classification",
        required: true,
    },
    injuredBodyPart: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "InjuredBodyPart",
        required: true,
    },
    injuredType: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "InjuredType",
        required: true,
    },
    state: { type: Boolean, default: true },
    date: { type: Date, required: true },
    pdf: { type: String, },
});
exports.AccidentTracking = mongoose_1.model("AccidentTracking", accidentTracking);
//# sourceMappingURL=accidentTracking.model.js.map