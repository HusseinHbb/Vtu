const admin = require("firebase-admin");
const router = require("express").Router();
const { totp } = require("otplib");
const nodemailer = require("nodemailer");
const { error, info, log } = require("firebase-functions/logger");

router.post("/", (req, res) => {
  const email = req.body.email;
  const secretkey = "Hussein.1!$1!$";

  const otp = totp.generate(secretkey).slice(0, 4);

  const transporter = nodemailer.createTransport({
    service: "outlook",
    port: 587,
    auth: {
      user: "webmanagement32@outlook.com",
      pass: "Hussein.1!$1!$",
    },
  });
  const mailOptions = {
    from: "webmanagement32@outlook.com",
    to: email,
    subject: " verification Code",
    text: `Your otp is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message);
      res.status(500).send("error sending mail");
    } else {
      admin.firestore().collection("users").doc(email).set({ otp });
      res.status(200).send({ message: "Email sent successfully", otp: otp });
      res.send(otp);
    }
  });
});

router.post("/verifyotp", async (req, res) => {
  const email = req.body.email.toLowerCase();
  console.log(email);

  const otp = req.body.otp;

  const storedotp = (
    await admin.firestore().collection("users").doc(email).get()
  ).get("otp");

  console.log(storedotp);
  if (otp == storedotp) {
    admin.firestore().collection("users").doc(email).update({ verified: true });
    res.status(200).send("email verified");
  } else {
    res.status(400).send("wrong otp");
  }
});

module.exports = router;
