import { Modal } from 'antd';
import styled from 'styled-components';

export const ModalWrapper = styled(Modal)`
  .ant-modal-content {
    padding-block: 2rem;
  }
  .ant-modal-body {
    padding-bottom: 2.25rem;
    text-align: center;
  }
  .ant-modal-footer {
    text-align: center;
  }
`;

export default {
  ModalWrapper,
};
