const router = require("express").Router();
const admin = require("firebase-admin");

router.get("/jwtVerification", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(500).send({ msg: "Token not found" });
  }

  const token = req.headers.authorization.split(" ")[1];
  try {
    const decodedToken = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString("utf8")
    );
    if (decodedToken.uid) {
      const userData = {
        uid: decodedToken.uid,
        email: decodedToken.claims.email, // Access email from claims
        firstName: decodedToken.claims.firstName,
        lastName: decodedToken.claims.lastName,
      };

      // await admin
      //   .firestore()
      //   .collection("users")
      //   .doc(decodedToken.uid)
      //   .set(userData);

      return res.status(200).json({ success: true, data: decodedToken });
    } else {
      return res.status(401).json({ success: false, msg: "Invalid token" });
    }
  } catch (err) {
    return res.status(500).send({
      success: false,
      msg: `Error in extracting the token : ${err}`,
    });
  }
});

router.post("/createuser", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstname;
    const lastName = req.body.lastname;

    const user = await admin.auth().createUser({
      email,
      password,
      emailVerified: true,
    });

    // Get ID token
    const customToken = await admin.auth().createCustomToken(user.uid, {
      email: user.email,
      firstName: firstName,
      lastName: lastName,
    });
    res.send({ token: customToken, usercred: user });

    await admin
      .firestore()
      .collection("users")
      .doc(email)
      .set({
        userId: user.uid,
        email,
        firstName,
        lastName,
        data: JSON.parse(JSON.stringify(user.providerData)),
      });

    const usersRef = admin.firestore().collection("users");
    const oldDocRef = usersRef.doc(user.email);
    const newDocRef = usersRef.doc(user.uid);

    const oldDoc = await oldDocRef.get();
    if (oldDoc.exists) {
      await newDocRef.set(oldDoc.data());
      await oldDocRef.delete();
      console.log("Document name updated successfully");
    } else {
      console.log("Document not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating account");
  }
});

module.exports = router;
