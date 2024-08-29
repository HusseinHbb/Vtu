import axios from "axios";
import { AxiosAdapter } from "axios-react-native";
axios.defaults.adapter = AxiosAdapter;

export const Baseurl = "http://127.0.0.1:5001/vtu-app-b6d1f/us-central1/app";

// send email for otp
export const sendemail = async (email) => {
  console.log("Sending email to:", email);

  try {
    const res = await axios.post(`${Baseurl}/api/otp`, { email });
    console.log("this", res.data);
    return res.data;
  } catch (err) {
    console.log("this", err);
    return null;
  }
};
