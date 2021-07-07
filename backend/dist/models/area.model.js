"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Area = void 0;
var mongoose_1 = require("mongoose");
var areaSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    state: { type: Boolean, default: true },
    dataRegistration: { type: Date, required: true, default: Date.now() },
});
exports.Area = mongoose_1.model("Area", areaSchema);
//# sourceMappingURL=area.model.js.map