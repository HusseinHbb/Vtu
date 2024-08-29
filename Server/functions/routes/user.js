const router = require("express").Router();
router.get("/", (req, res) => {
  return res.send("inside the router");
});

router.get("/jwtVerification", async (req, res) => {
  if (!req.headers.autorization) {
    return res.status(500).send({ msg: "token not found" });
  }
});

module.exports = router;
