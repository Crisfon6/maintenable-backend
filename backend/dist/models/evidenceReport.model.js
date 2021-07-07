"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidenceReport = void 0;
var mongoose_1 = require("mongoose");
var evidenceReportSchema = new mongoose_1.Schema({
    supervisor: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Supervisor', required: true },
    companyObserved: { type: mongoose_1.Schema.Types.ObjectId, ref: 'CompanyInvolved', required: true },
    contractor: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Contractor', required: true },
    area: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Area', required: true },
    observation: { type: String, required: false },
    potential: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Potential', required: true },
    activityInvolved: { type: mongoose_1.Schema.Types.ObjectId, ref: 'ActivityInvolved', required: true },
    city: { type: mongoose_1.Schema.Types.ObjectId, ref: 'City', required: true },
    closingDate: { type: String, required: true },
    photoUnsafeCondition: { type: String, },
    observations: { type: String, required: false },
    status: { type: String, required: true, enum: ['ABIERTO', 'CERRADO'] },
    state: { type: Boolean, required: true, default: true }
});
exports.EvidenceReport = mongoose_1.model('EvidenceReport', evidenceReportSchema);
//# sourceMappingURL=evidenceReport.model.js.map