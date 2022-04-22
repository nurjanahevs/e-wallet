const mongoose = require("mongoose");

const gateawayTransactionSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    paymentData: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      default: 0,
      required: true,
    },
    authorizationCode: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("gateawayTransaction", gateawayTransactionSchema);
