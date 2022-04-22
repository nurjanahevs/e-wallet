const mongoose = require("mongoose");
const User = require("./user.model");

const operations = ["topup", "transfer" ];

const transactionSchema = new mongoose.Schema(
  {
    operation: {
      type: String,
      required: true,
      enum: operations,
    },
    accountNumber: {
      type: "Number",
      ref: "User",
      required: true,
    },
    destinationAccountNumber: {
      type: "Number",
      ref: "User",
    },
    amount: {
      type: Number,
      default: 0,
      required: true,
    },
    reference: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("transaction", transactionSchema);
