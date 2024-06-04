import React from 'react';
import { useSelector } from 'react-redux';

import { Row } from 'antd';

import LoginFormComponent from '../../../components/Form/Login';
import OtpFormComponent from '../../../components/Form/Otp';
import styled from './Login.style';
import SignupForm from '../../../components/Form/Signup';

function LoginPage() {
  const isOtpSent = useSelector((state) => state?.authReducer?.otpLogin);
  return (
    <styled.Wrapper>
      <Row>
        <styled.LoginImageBackground span={12} />
        <styled.LoginFormWrapper span={12}>
          {/* {!isOtpSent ? ( */}
            {/* <LoginFormComponent /> */}
            {/* <SignupForm/> */}
            <OtpFormComponent auth={'Login'} />
          {/* ) : (
          )} */}
        </styled.LoginFormWrapper>
      </Row>
    </styled.Wrapper>
  );
}

export default LoginPage;
