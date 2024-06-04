import styled from 'styled-components';
import { Col } from 'antd';

export const register = styled(Col)`
  background-color: #f1f1f1;
`;

export const outerDiv = styled.div`
  padding: 54px 156px 54px 156px;
`;

export const logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`;

export default {
  register,
  logo,
  outerDiv,
};
