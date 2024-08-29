const functions = require("firebase-functions");
const admin = require("firebase-admin");
require("dotenv").config();

const serviceAccessKey = require("./serviceAccountKey.json");
const express = require("express");
const app = express();

// body parser for json
app.use(express.json());

// express origin
const cors = require("cors");
/* eslint-disable object-curly-spacing */
app.use(cors({ origin: true, credentials: true }));
/* eslint-enable object-curly-spacing */
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

// firebase cred
admin.initializeApp({
  credential: admin.credential.cert(serviceAccessKey),
});

// api endpoints
app.get("/", (req, res) => {
  return res.send("hello world");
});

const UserRoute = require("./routes/user");
app.use("/api/user", UserRoute);

const OtpRoute = require("./routes/otp");
app.use("/api/otp", OtpRoute);

exports.app = functions.https.onRequest(app);
