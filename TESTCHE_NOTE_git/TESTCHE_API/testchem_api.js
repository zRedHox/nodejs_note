const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4999;
const routes = require("./routes/routes");
const bodyParser = require("body-parser");

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/it");
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
connectDB();

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());
app.use("/api", routes);

app.listen(port, "0.0.0.0", () => {
  console.log(`PTOP_API Started at 0.0.0.0:${4999}`);
});
