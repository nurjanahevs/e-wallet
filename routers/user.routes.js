const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");
const auth = require('../middlewares/authJwt')

userRouter.post("/u/register",userController.register);
userRouter.post("/u/login", userController.login);
userRouter.put("/u/topup/:id", userController.topUp);

userRouter.use(auth.authentication);

userRouter.get("/", userController.viewUsers);

userRouter.get("/:id", auth.specificUser, userController.viewSpecificUser);
userRouter.delete("/:id", auth.specificUser, userController.deleteUser);

module.exports = userRouter;