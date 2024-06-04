import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const Wrapper = styled.div`
  color: #343434;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  text-align: center;
  max-width: 408px;
  width: 100%;
  .ant-form-item-explain-error {
    text-align: left;
  }
  .digi-logo {
    text-align: center;
  }
  .paragraph {
    color: #666666;
    padding-bottom: 16px;
  }
  .form-wrapper {
    max-width: 360px;
    width: 100%;
    background: #fff;
    box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.08);
    padding: 24px 24px 48px 24px;
    @media (max-width: 991px) {
      width: auto;
    }
    .phone-input {
      padding-bottom: 30px;
    }
    .PhoneInputCountry {
      border: 2px solid #d0d5dd;
      padding: 8px;
      border-radius: 8px 0px 0px 8px;
      margin-right: 0px;
    }
    .PhoneInputCountry:hover {
      border: 2px solid #e11d07;
    }
    .PhoneInputInput {
      height: 40px;
      font-size: 16px;
      border-radius: 0px 8px 8px 0px;
      border: 2px solid #d0d5dd;
    }
    .PhoneInputInput:hover {
      border: 2px solid #e11d07;
    }
    .PhoneInputInput--focus {
      border: 2px solid red;
    }
    .register {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 0px;
      span {
        color:#BA9775;
        cursor: pointer;
      }
    }
  }
`;

export const Heading = styled(Title)`
  font-weight: 700;
`;

export default {
  Wrapper,
  Heading,
};
