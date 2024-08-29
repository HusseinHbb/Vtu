const router = require("express").Router();
const { totp } = require("otplib");
const nodemailer = require("nodemailer");
const { error, info } = require("firebase-functions/logger");

router.post("/", (req, res) => {
  const email = req.body.email;
  const secretkey = "Hussein.1!$1!$";

  const otp = totp.generate(secretkey, { length: 4 });

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
      console.log("Email sent" + info.response);
      res.send("Email sent successfully " + otp);
    }
  });
});

module.exports = router;
