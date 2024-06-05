import React from 'react';
import { useSelector } from 'react-redux';

import { Row } from 'antd';

import LoginFormComponent from '../../../components/Form/Login';
import styled from './Login.style';
// import SignupForm from '../../../components/Form/Signup';

function LoginPage() {
  const flag = true;
  return (
    <styled.Wrapper>
      <Row>
        <styled.LoginImageBackground span={12} />
        <styled.LoginFormWrapper span={12}>
          {/* {!isOtpSent ? ( */}
          <LoginFormComponent /> 
          {/* { !flag ? <LoginFormComponent /> :
            <SignupForm/>} */}
          
          {/* ) : (
          )} */}
        </styled.LoginFormWrapper>
      </Row>
    </styled.Wrapper>
  );
}

export default LoginPage;
