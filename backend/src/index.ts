import * as dotenv from "dotenv";
import { Server } from "./server";
import { AccidentTrackingController } from "./controllers/accidentTracking.controller";
import { ActionPlanController } from "./controllers/actionPlan.controller";
import { ContractorController } from "./controllers/contractor.controller";
import { CompanyIvolvedController } from "./controllers/companyInvolved.controller";
import { AreaController } from "./controllers/area.controller";

import { ActivityInvolvedController } from "./controllers/activityInvolved.controller";
import { ClassificationController } from "./controllers/classification.controller";
import { InjuredBodyPartController } from "./controllers/injuredBodyPart.controller";
import { InjuredTypeController } from "./controllers/injuredType.controller";
import { TypeActionPlanController } from "./controllers/typeActionPlan.controller";
import { AuthController } from "./controllers/auth.controller";
import { UserController } from "./controllers/user.controller";
import { UploadController } from "./controllers/upload.controller";
import { CityController } from "./controllers/city.controller";
import { EvidenceReportController } from "./controllers/evidenceReport.controller";
import { PotentialController } from "./controllers/potential.controller";
import { SupervisorController } from './controllers/supervisor.controller';

dotenv.config();

const main = async () => {
  const server = new Server([
    new ContractorController(),
    new AccidentTrackingController(),
    new ActionPlanController(),
    new CompanyIvolvedController(),
    new AreaController(),
    new ActivityInvolvedController(),
    new ClassificationController(),
    new InjuredBodyPartController(),
    new InjuredTypeController(),
    new TypeActionPlanController(),
    new AuthController(),
    new UserController(),
    new UploadController(),
    new CityController(),
    new EvidenceReportController(),
    new PotentialController(),
    new SupervisorController(),
  ]);
  await server.listen();
};
main();
