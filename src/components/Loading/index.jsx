import React from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import styled from 'styled-components';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #ffffff;
`;

function LoadingComponent() {
  return (
    <Wrapper>
      <Spin indicator={antIcon} />
    </Wrapper>
  );
}

export default LoadingComponent;
