import { Button, Layout, Menu, Row, Typography } from 'antd';
import styled from 'styled-components';

export const LayoutWrapper = styled(Layout)`
  height: 100vh;
  .ant-layout-sider {
    box-shadow: 8px 0 16px 0 rgba(0, 0, 0, 0.02);
  }
`;
export const LogoWrapper = styled(Row)`
  height: 3.69rem;
  margin-bottom: 3rem;
  justify-content: center;
  align-items: center;
`;

export const MenuBar = styled(Row)`
  gap: 12px;
  line-height: 0;
  cursor: pointer;
  .ant-avatar img{
    width: 32px;
    height: 32px;
  }
`;

export const User = styled(Typography.Text)`
  font-size: 0.875rem;
  font-weight: 500;
  color: #1b1b1b;
  line-height:16.94px
`;

export const Role = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: #1b1b1b;
  line-height:14.52px
`;

export const HeaderWrapper = styled(Layout.Header)`
  padding: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 2rem;
  .right-nav-content{
    gap: 20px;
    // justify-content: space-between;
    max-width: 173px;
    /* max-height: 32px; */
  }
`;

export const Toggler = styled(Button)`
  transform: translateX(-1.6rem);
`;

export const MenuWrapper = styled(Menu)`
  &.ant-menu-light.ant-menu-root.ant-menu-inline {
    border-inline-end: 0px;
  }
  li {
    position: relative;
    border-radius: 0 !important;
    margin: 0 !important;
    &:before {
      content: '';
      width: 3px;
      height: 41px;
      background-color: transparent;
      position: absolute;
      left: 0;
      top: 0;
    }
    .ant-menu-submenu-title {
      margin-inline: 0px;
      margin-block: 0px;
      width: 100%;
    }
    &.ant-menu-submenu > .ant-menu-submenu-title {
      height: 42px;
    }
    &.ant-menu-item {
      height: 41px;
      width: 100%;
    }
    &.ant-menu-item-selected {
      &:before {
        background-color: #f00;
      }
    }
  }
`;

export const ContentWrapper = styled(Layout.Content)`
  overflow: auto;
  scroll-behavior: smooth;
  padding: 1.5rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  background-color: #fafbff;
`;

export const FooterWrapper = styled(Layout.Footer)`
  background-color: white;
  color: #1b1b1b;
  font-size: 0.75rem;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
`;

export default {
  LayoutWrapper,
  LogoWrapper,
  MenuBar,
  User,
  Role,
  HeaderWrapper,
  MenuWrapper,
  Toggler,
  ContentWrapper,
  FooterWrapper,
};
