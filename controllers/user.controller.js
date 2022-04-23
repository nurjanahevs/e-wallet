const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const transactionModel = require('../models/transaction.model')
class userController {
  static async register(req, res, next) {
    const { email, name, identityNumb, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    try {
      const result = await User.create({
        email: email,
        name: name,
        identityNumb: identityNumb,
        password: hashedPassword,
      });
      res.status(201).json({ message: "Data User Created", data: result });
    } catch (err) {
      next(err);
    }
  }

  static async findAllUsers(req, res, next) {
    try {
      const result = await User.find();
      if (result.length === 0) {
        throw { name: "NOT_FOUND_ALL" };
      } else {
        res.status(200).json({ message: "Show the Data Users", data: result });
      }
    } catch (err) {
      next(err);
    }
  }

  static async viewSpecificUser(req, res, next) {
    const { id } = req.params;

    try {
      const result = await User.findById(id);
      if (result === null) {
        throw { name: "NOT_FOUND_SPECIFIC" };
      } else {
        res.status(200).json({
          message: "User dengan ID tertentu ditampilkan",
          data: result,
        });
      }
    } catch (err) {
      next(err);
    }
  }

  static async deleteUser(req, res, next) {
    const { id } = req.params;
    try {
      const result = await User.findByIdAndDelete(id);
      res.status(202).json({ message: "User dengan id tertentu didelete", data: result });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const result = await User.findOne({ email });
      if (!result) {
        throw { name: "UNAUTHORIZED" };
      }
      const passwordIsValid = bcrypt.compareSync(password, result.password);
      if (!passwordIsValid) {
        throw { name: "UNAUTHORIZED" };
      }
      const token = jwt.sign({ id: result.id, name: result, email: result.email, telp: result.telp }, "evasitinurjanah", {
        expiresIn: "1h",
      });

      res.status(200).json({ message: "Berhasil Login", data: result, AccessToken: token });
    } catch (err) {
      next(err);
    }
  }

  static async topUp(req, res, next) {
    const { id } = req.params;
    const { saldoTopUp } = req.body;
    try {
    const {operation, amount, references} = req.body;
    const datenow = Date.now()
      const result = await User.findByIdAndUpdate(id, { saldoTopUp }, { new: true });
      if (result) {
        result.saldoBalance = result.saldoTopUp + result.saldoBalance;
        result.save()
        // const addtoTransaction = transactionModel.create({
        //   operation: operation,
        //   amount: amount,
        //   references: references,
        //   datenow: datenow,
        // });
        // res.status(200).json({ message: "Top Up Berhasil!", data: addtoTransaction });
        // transactionModel().save()
      }
      res.status(200).json({ message: "Top Up Berhasil!", data: result });
    } catch (err) {
      next(err);
    }
  }

  static async transfer(req, res, next) {
    const {id1} = req.params
    const { id2, jumlahTransfer } = req.body;
    try {
      const result = await User.findByIdAndUpdate(id1, {id2, jumlahTransfer}, {new: true});
      if(result) {

      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = userController;
