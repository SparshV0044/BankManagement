const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

dotenv.config({ path: "./config.env" });
require("../server/db/conn");

app.use(require("./router/auth"));

const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on the port ${PORT}`);
});
