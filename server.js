const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");
const homeRoutes = require("./routes/homeRoutes");
const borrowReturnRoutes = require("./routes/borrowReturn");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect("mongodb://0.0.0.0:27017/mern_crud_blog");
// mongoose.connect(process.env.DatabaseURL);
mongoose.connect("mongodb+srv://test_run:UOzBFTkKs2xxqetU@cluster0.y5jlmcy.mongodb.net/Library58?retryWrites=true&w=majority&appName=Cluster0");

mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
    app.listen(6000, () => console.log("listening on port 5000"));
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

app.use("/", bookRoutes);
app.use("/", userRoutes);
app.use("/", homeRoutes);
app.use("/", borrowReturnRoutes);

