import Auth from "@/components/forms/authentication/auth";
import Otp from "@/components/forms/authentication/otp";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <>
      <Otp phoneNumber="09392752406" />
    </>
  );
};

export default Login;
