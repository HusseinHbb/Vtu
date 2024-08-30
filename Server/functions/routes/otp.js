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
      user: "habeebhuszein@outlook.com",
      pass: "Hussein.1!$1!$",
    },
  });
  const mailOptions = {
    from: "habeebhuszein@outlook.com",
    to: email,
    subject: " verification Code",
    text: `Your otp is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message);
      res.status(500).send("error sending mail");
    } else {
      res.status(200).send({ message: "Email sent successfully", otp: otp });
      res.send(otp);
    }
  });
});

module.exports = router;
