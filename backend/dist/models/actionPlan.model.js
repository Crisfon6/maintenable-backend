"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionPlan = void 0;
var mongoose_1 = require("mongoose");
var actionPlanSchema = new mongoose_1.Schema({
    actionPlan: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "TypeActionPlan",
        required: true,
    },
    dateCompliance: { type: Date, required: true, default: Date.now() },
    number: { type: Number, required: true },
    accidentTracking: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "AccidentTracking",
        required: true,
    },
    state: { type: Boolean, default: true },
    dataRegistration: { type: Date, required: true, default: Date.now() },
});
exports.ActionPlan = mongoose_1.model("ActionPlan", actionPlanSchema);
//# sourceMappingURL=actionPlan.model.js.map