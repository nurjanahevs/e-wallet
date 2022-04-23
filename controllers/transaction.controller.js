const User = require("../models/user.model");
const Transaction = require("../models/transaction.model");

class transactionController {
  static async makeTransaction(req, res, next) {
    try {
      const { id1 } = req.params
      const { id2 } = req.body
      const { operations, accountNumber, destinationAccountNumber, amount, reference } = req.body;
      const result = await Transaction.create({
        operations,
        accountNumber,
        destinationAccountNumber,
        amount,
        reference,
      });
      if (result) {

      }
      res.status(200).json({ message: "Transaksi Berhasil!", data: result });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = transactionController;
