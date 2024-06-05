import { Modal } from 'antd';
import styled from 'styled-components';

export const ModalWrapper = styled(Modal)`
  padding-bottom: 6rem;
  h4 {
    margin: 0;
    padding-bottom: 32px;
    font-size: 18px;
}
.create-warehouse{
    max-width: 360px;
    width: 100%;
    height: 44px;
  }
  .ant-btn-default,
  .ant-btn-primary {
    max-width: 78px;
    width: 100%;
    height: 41px;
    border-radius: 8px;
    line-height: 17px;
  }
  .ant-form-vertical .ant-form-item-label > label {
    line-height: 20px;
  }
`;

export default {
  ModalWrapper,
};
