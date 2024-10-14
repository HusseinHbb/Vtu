import axios from "axios";

export const Baseurl =
  "https://jmk55ltl-5001.euw.devtunnels.ms/vtu-app-b6d1f/us-central1/app";

// Verify token
export const validateUserJWTToken = async (token) => {
  if (!token) {
    throw new Error("Token is required");
  }

  const jwtVerificationEndpoint = `${Baseurl}/api/user/jwtVerification`;

  try {
    const res = await axios.get(jwtVerificationEndpoint, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    if (err.response) {
      return err.response.data;
    } else {
      console.error(err);
      return null;
    }
  }
};
// send email for otp
export const sendemail = async (email) => {
  console.log("Sending email to:", email);

  try {
    const res = await axios.post(`${Baseurl}/api/otp`, { email });
    console.log("this", res.data.otp);
    return res.data;
  } catch (err) {
    console.log("this", err);
    return null;
  }
};

export const verifyotp = async (email, otp) => {
  console.log("verifying otp from: ", email, otp);
  try {
    const res = await axios.post(`${Baseurl}/api/otp/verifyotp`, {
      email,
      otp,
    });
    if (res.status == 200) {
      return 200;
    } else {
      return null;
    }
  } catch (err) {
    console.log("ths", err);
    return null;
  }
};

// create an account
export const createuser = async (email, password, firstname, lastname) => {
  console.log(firstname);
  try {
    const res = await axios.post(`${Baseurl}/api/user/createuser`, {
      email,
      password,
      firstname,
      lastname,
    });

    return res.data;
  } catch (err) {
    return null;
  }
};

//signin
export const signIn = async (email, password) => {
  console.log(email);
  try {
    const res = await axios.post(`${Baseurl}/api/user/signin`, {
      email,
      password,
    });
    if (res.status == 200) {
      return res.data.token;
    } else {
      return null;
    }
  } catch (err) {
    return err;
  }
};
