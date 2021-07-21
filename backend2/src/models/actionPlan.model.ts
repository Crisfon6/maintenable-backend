import { Schema, Document, model, PopulatedDoc } from "mongoose";
import { IAccidentTracking } from "./accidentTracking.model";

export interface IActionPlan {
  actionPlan: string;
  dateCompliance: Date;
  number: number; //number of action plan 1,2,3,4,5,6,7
  accidentTracking: PopulatedDoc<IAccidentTracking & Document>;
  state: Boolean;
  dataRegistration: Date;
}

const actionPlanSchema = new Schema({
  actionPlan: {
    type: Schema.Types.ObjectId,
    ref: "TypeActionPlan",
    required: true,
  },
  dateCompliance: { type: Date, required: true, default: Date.now() },
  number: { type: Number, required: true },
  accidentTracking: {
    type: Schema.Types.ObjectId,
    ref: "AccidentTracking",
    required: true,
  },
  state: { type: Boolean, default: true },
  dataRegistration: { type: Date, required: true, default: Date.now() },
});
export const ActionPlan = model<IActionPlan >(
  "ActionPlan",
  actionPlanSchema
);
