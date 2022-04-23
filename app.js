const express = require("express");

require('dotenv').config();

const cors = require('cors')

const connectDB = require("./configs/dbConnection");
const router = require("./routers/routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const port = process.env.PORT ||8001;

connectDB();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to My App");
});

app.use("/api", router);
app.use(errorHandler);



app.listen(port, () => {
  console.log(`App Running in http://localhost:${port}`);
});
