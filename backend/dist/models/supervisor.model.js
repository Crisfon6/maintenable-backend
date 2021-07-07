"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supervisor = void 0;
var mongoose_1 = require("mongoose");
var supervisorSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    state: { type: Boolean, required: true, default: true }
});
exports.Supervisor = mongoose_1.model("Supervisor", supervisorSchema);
//# sourceMappingURL=supervisor.model.js.map