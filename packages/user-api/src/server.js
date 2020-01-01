import express from "express";
import usersRouter from "./routes/users";
import indexRouter from "./routes/users";
import dotenv from "dotenv";
import mongoose from "mongoose";
import errorhandler from "strong-error-handler";
import cors from "cors";

import bodyParser from "body-parser";
dotenv.config();

const MONGODB_URI = process.env.MONGO_URL || "mongodb://localhost:27017/userdb";
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());
    app.use(
      errorhandler({
        debug: process.env.ENV !== "prod",
        log: true
      })
    );
    app.use("/", indexRouter);
    app.use("/api/v1/users", usersRouter);
    app.listen(process.env.APP_PORT || 9000);
  });
mongoose.connection.on("error", err => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});
