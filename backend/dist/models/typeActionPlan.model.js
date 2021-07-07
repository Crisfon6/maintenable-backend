"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeActionPlan = void 0;
var mongoose_1 = require("mongoose");
var typeActionPlanSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    dataRegistration: { type: Date, required: true, default: Date.now() },
    state: { type: Boolean, default: true }
});
exports.TypeActionPlan = mongoose_1.model("TypeActionPlan", typeActionPlanSchema);
//# sourceMappingURL=typeActionPlan.model.js.map