import { Col } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const SignupImageBackground = styled(Col)`
   background-image: url('/global-guide-bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

export const SignupFormWrapper = styled(Col)`
  background-color: #fafbff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default {
  SignupImageBackground,
  Wrapper,
  SignupFormWrapper,
};
