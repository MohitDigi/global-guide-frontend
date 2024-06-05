import { Modal } from 'antd';
import styled from 'styled-components';

export const ModalWrapper = styled(Modal)`
  padding-bottom: 6rem;
  .ant-modal-footer > .ant-btn + .ant-btn {
    margin-inline-start: 16px;
  }
  .ant-select-single,
  .ant-input {
    max-width: 360px;
    width: 100%;
    height: 44px;
  }
  .description {
    height: 108px;
  }
  .cancel-btn {
    max-width: 78px;
    width: 100%;
    height: 41px;
  }
  .submit-btn {
    max-width: 77px;
    width: 100%;
    height: 41px;
  }

  .file-input-container {
    display: flex;
    border: 1px solid green;
    width: 100%;
  }

  .form-control .ant-form-item-control-input-content {
    display: flex;
    border: 1px solid rgb(217, 217, 217);
    border-radius: 8px;
    overflow: hidden;
    .ant-upload-wrapper {
      display: flex;
      align-items: center;
    }
    .ant-upload-list-text {
      display: none;
    }
  }

  .paragraph {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 9px 11px;
    width: 100%;
    .placeholder {
      width: 100%;
      color: #bfbfbf;
    }
  }

  .file-label {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 87px;
    cursor: pointer;
    .browse-button {
      padding: 6px;
      background-color: #f5f6fa;
      color: #1b1b1b;
      border-radius: 8px;
    }
    .browse-button:hover {
      color: rgb(225, 29, 7);
    }
  }

  .outer-div {
    display: flex;
    max-width: 360px;
    width: 100%;
    height: 44px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    input {
      display: none;
    }
  }
  .outer-div:hover {
    border: 1px solid red;
    border-radius: 8px;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 800;
  color: #1b1b1b;
`;

export default {
  Title,
  ModalWrapper,
};
