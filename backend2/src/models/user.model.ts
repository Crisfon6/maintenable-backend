import { Schema, Document, model, Model, PopulatedDoc } from "mongoose";
import { sign } from "jsonwebtoken";
import moment from "moment";

export interface IUser extends Document {
  _id: string;
  username: string;
  password: string;
  role: string;
  state: boolean;
  dataRegistration: Date;
}
export interface IUserModel extends Model<IUser> {
  generateJWT(): any;
}
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum : ["ADMIN","NORMAL"] },
  state: { type: Boolean, required: true, default: true },
  dataRegistration: { type: Date, required: true, default: Date.now() },
});

userSchema.methods.generateJWT = function (obj: IUser) {
  const user = this as IUser;
  let key;
  if (process.env.SECRET_KEY != undefined) {
    key = process.env.SECRET_KEY;
  } else {
    key = "secret";
  }

  return sign(
    {
      _id: this._id,
      username: user.username,
      iat: moment().unix(),
    },
    key
  );
};
export const User = model<IUser & IUserModel>("User", userSchema);
