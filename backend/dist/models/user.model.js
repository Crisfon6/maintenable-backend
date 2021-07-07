"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var jsonwebtoken_1 = require("jsonwebtoken");
var moment_1 = __importDefault(require("moment"));
var userSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["ADMIN", "NORMAL"] },
    state: { type: Boolean, required: true, default: true },
    dataRegistration: { type: Date, required: true, default: Date.now() },
});
userSchema.methods.generateJWT = function (obj) {
    var user = this;
    var key;
    if (process.env.SECRET_KEY != undefined) {
        key = process.env.SECRET_KEY;
    }
    else {
        key = "secret";
    }
    return jsonwebtoken_1.sign({
        _id: this._id,
        username: user.username,
        iat: moment_1.default().unix(),
    }, key);
};
exports.User = mongoose_1.model("User", userSchema);
//# sourceMappingURL=user.model.js.map