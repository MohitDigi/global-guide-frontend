import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Image, Typography } from 'antd';
import { checkUserAuth, logoutUser } from '../../../redux/slices/authSlice';
import styled from './Logout.style';

const { Text, Title } = Typography;

const Logout = ({ open, setLogoutOpen }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
    dispatch(checkUserAuth());
    setLogoutOpen(false);
  };
  return (
    <styled.ModalWrapper
      centered
      open={open}
      onOk={logoutHandler}
      okText="Yes, I’m sure"
      onCancel={() => setLogoutOpen(false)}
      closeIcon={false}
      width={'22.5rem'}
    >
      <Image
        src="/svg-icons/logout.svg"
        alt="logout"
        width={40}
        height={40}
        preview={false}
      />
      <Title level={5}>Logout ?</Title>
      <Text>Are you sure you want to logout?</Text>
    </styled.ModalWrapper>
  );
};

export default Logout;
Logout.propTypes = {
  open: PropTypes.any,
  setLogoutOpen: PropTypes.any,
};
