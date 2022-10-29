const express = require("express");
const app = express();
const tasks = require("./routers/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const NotFound = require("./middleware/not-found");

// Middleware
app.use(express.static("./public"));
app.use(express.json());

// Routes
app.use("/api/v1/tasks", tasks);
app.use(NotFound);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listening in ${port} ...`));
  } catch (error) {
    console.log(error);
  }
};

start();
