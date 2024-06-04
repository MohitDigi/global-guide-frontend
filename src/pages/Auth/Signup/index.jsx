import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Row } from "antd";

// import OtpFormComponent from "../../../components/Form/Otp";
import SignupForm from "../../../components/Form/Signup";
import styled from "./Signup.style";
import LoginFormComponent from "../../../components/Form/Login";

function SignupPage() {
  const { otpSignUp, isAuthenticated } = useSelector(
    (state) => state?.authReducer
  );
  const [steps, setSteps] = useState(0);
  const [businessDetails, setBusinessDetails] = useState({});
  return (
    <styled.Wrapper>
      <Row>
        <styled.SignupImageBackground span={12} />
        <styled.SignupFormWrapper span={12}>
          {isAuthenticated ? (
            <SignupForm />
          ) : (
            <LoginFormComponent/>
          )}
        </styled.SignupFormWrapper>
      </Row>
    </styled.Wrapper>
  );
}

export default SignupPage;
