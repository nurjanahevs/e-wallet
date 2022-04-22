const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, match: /^\S+@\S+\.\S+$/, unique: true, required: true },
  name: { type: String, required: true },
  identityNumb: { type: String, unique: true, required: true },
  password: { type: String, required: true, minlength: 6, maxlength: 120 },
  saldoTopUp: { type: Number, default: 0 },
  saldoBalance: { type: Number, default: 0 },
  transaction: [{ type: Schema.Types.ObjectId, ref:'transaction'}]
},{
  timestamps: true,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
