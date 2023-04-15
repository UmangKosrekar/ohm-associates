require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

const router = require("./routes/indexRoute");
app.use("/api/v1/", router);

try {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGOURI)
    .then(() => console.log("Local Database Connected"));
  const port = process.env.PORT;
  app.listen(port, console.log(`Listening on port ${port}...`));
} catch (error) {
  console.log(error.message);
}
