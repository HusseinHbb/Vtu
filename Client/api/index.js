import axios from "axios";

export const Baseurl =
  "https://jmk55ltl-5001.euw.devtunnels.ms/vtu-app-b6d1f/us-central1/app";

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
