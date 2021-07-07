"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityInvolved = void 0;
var mongoose_1 = require("mongoose");
var activityInvolvedSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    state: { type: Boolean, default: true },
    dataRegistration: { type: Date, required: true, default: Date.now() },
});
exports.ActivityInvolved = mongoose_1.model("ActivityInvolved", activityInvolvedSchema);
//# sourceMappingURL=activityInvolved.model.js.map