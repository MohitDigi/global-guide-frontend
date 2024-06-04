import { Col } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div``;

export const LoginImageBackground = styled(Col)`
  background-image: url('/global-guide-bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

export const LoginFormWrapper = styled(Col)`
  background-color: #fafbff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default {
  LoginImageBackground,
  Wrapper,
  LoginFormWrapper,
};
