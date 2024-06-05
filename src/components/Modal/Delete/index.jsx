import PropTypes from 'prop-types';
import React from 'react';

import { Image, Typography } from 'antd';

import styled from './Delete.style';

const { Text, Title } = Typography;

const Delete = ({ deleteModal, setDeleteModal, deleteHandler }) => {
  const onDelete = () => {
    deleteHandler();
  };

  return (
    <styled.ModalWrapper
      centered
      open={deleteModal}
      onOk={onDelete}
      okText="Yes, delete it!"
      onCancel={() => setDeleteModal(false)}
      closeIcon={false}
      width={'22.5rem'}
    >
      <Image
        src="/svg-icons/delete.svg"
        alt="logout"
        width={40}
        height={40}
        preview={false}
      />
      <Title level={5}>Are you Sure?</Title>
      <Text>You won&apos;t be able to revert this?</Text>
    </styled.ModalWrapper>
  );
};

export default Delete;
Delete.propTypes = {
  deleteModal: PropTypes.any,
  setDeleteModal: PropTypes.any,
  deleteHandler: PropTypes.any,
};
