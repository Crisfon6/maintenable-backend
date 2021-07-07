"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
var mongoose_1 = require("mongoose");
var citySchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    state: { type: Boolean, required: true, default: true },
});
exports.City = mongoose_1.model('City', citySchema);
//# sourceMappingURL=city.model.js.map