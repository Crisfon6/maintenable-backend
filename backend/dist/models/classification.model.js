"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classification = void 0;
var mongoose_1 = require("mongoose");
var classificationSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    state: { type: Boolean, default: true },
    dataRegistration: { type: Date, required: true, default: Date.now() },
});
exports.Classification = mongoose_1.model("Classification", classificationSchema);
//# sourceMappingURL=classification.model.js.map