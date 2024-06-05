import PropTypes from "prop-types";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import { Avatar, Col, Dropdown, Image, Layout, Space } from "antd";

import LoadingComponent from "../../components/Loading/index.jsx";
import Logout from "../../components/Modal/Logout/index.jsx";
import useMediaQuery from "../../hooks/useMediaQuery";
import { toggleCollapsed } from "../../redux/slices/authSlice.js";
// import { getProfile } from '../../redux/slices/authSlice.js';
import styled from "./Layout.style";

const { Sider } = Layout;

function LayoutContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const collapsed = useSelector((state) => state.authReducer.collapsed);

  const userProfile = useSelector((state) => state.authReducer.profileData);
  // console.log("userProfile", userProfile);

  const fullName = userProfile?.name ? userProfile?.name : "N/A";
  // const lastName = userProfile?.lastName ? userProfile?.lastName : '';

  // const fullName = firstName + ' ' + lastName;

  const isMatched = useMediaQuery("(max-width: 769px)");
  const tablet = useMediaQuery("(max-width: 991px)");
  const [selectedKeys, setSelectedKeys] = useState(window.location.pathname);
  const [logoutOpen, setLogoutOpen] = useState(false);

  React.useEffect(() => {
    dispatch(toggleCollapsed(isMatched));
  }, [isMatched]);

  // useEffect(() => {
  //   dispatch(getProfile());
  // }, []);

  const menuItems = [
    {
      key: "/panel/dashboard",
      name: "dashboard",
      label: "Dashboard",
      src:
        selectedKeys === "/panel/dashboard"
          ? "/svg-icons/ic_dashboard.svg"
          : "/svg-icons/ic_dashboard_unselect.svg",
    },
    {
      key: "/panel/company",
      name: "company",
      label: "Company",
      src:
        selectedKeys === "/panel/warehouse"
          ? "/svg-icons/ic_warehouse.svg"
          : "/svg-icons/ic_warehouse_unselect.svg",
    },
    {
      key: "/panel/shipment",
      name: "shipment",
      label: "Shipment",
      src:
        selectedKeys === "/panel/shipment"
          ? "/svg-icons/ic_shipment.svg"
          : "/svg-icons/ic_shipment_unselect.svg",
    },
    {
      key: "/panel/invoice",
      name: "invoice",
      label: "Invoice",
      src:
        selectedKeys === "/panel/invoice"
          ? "/svg-icons/ic_invoice.svg"
          : "/svg-icons/ic_invoice_unselect.svg",
    },
    {
      key: "/panel/inventory",
      name: "inventory",
      label: "Inventory",
      src:
        selectedKeys === "/panel/inventory"
          ? "/svg-icons/ic_inventory.svg"
          : "/svg-icons/ic_inventory_unselect.svg",
    },
    {
      key: "/panel/users-management",
      name: "users_management",
      label: "Users Management",
      src:
        selectedKeys === "/panel/users-management"
          ? "/svg-icons/ic_user management.svg"
          : "/svg-icons/ic_user management_unselect.svg",
      children: [
        {
          key: "/panel/users-management/customer",
          name: "customer",
          label: "Customer",
          src:
            selectedKeys === "/panel/users-management/customer"
              ? "/svg-icons/ic_customer.svg"
              : "/svg-icons/ic_customer_unselect.svg",
        },
        {
          key: "/panel/users-management/driver",
          name: "driver",
          label: "Driver",
          src:
            selectedKeys === "/panel/users-management/driver"
              ? "/svg-icons/ic_driver.svg"
              : "/svg-icons/ic_driver_unselect.svg",
        },
      ],
    },
  ];

  const dropdownItems = [
    {
      key: "1",
      name: "my_profile",
      label: "My Profile",
      src: "/svg-icons/profile.svg",
      onClick: () => navigate("/panel/profile"),
    },
    {
      key: "2",
      name: "account_setting",
      label: "Account Setting",
      src: "/svg-icons/setting.svg",
    },
    {
      key: "3",
      name: "logout",
      label: "Logout",
      src: "/svg-icons/logout_unselect.svg",
      onClick: () => setLogoutOpen(true),
    },
  ];

  const handleOnMenuItemClick = (currentItem) => {
    if (typeof currentItem.key === "string") {
      setSelectedKeys(currentItem.key);
      navigate(currentItem.key);
    }
  };

  return (
    <styled.LayoutWrapper>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        collapsedWidth={"80px"}
        width={tablet ? 232 : 240}
      >
        <styled.LogoWrapper
          style={{ width: `${!collapsed ? "15rem" : "5rem"}` }}
        >
          {!collapsed ? (
            <Image
              src="/svg-icons/logo.svg"
              alt="logo"
              preview={false}
              width={120}
              height={65}
            />
          ) : (
            <Image
              src="/svg-icons/logo2.svg"
              alt="logo"
              preview={false}
              width={65}
              height={45}
            />
          )}
        </styled.LogoWrapper>
        <styled.MenuWrapper
          theme="light"
          mode="inline"
          onClick={handleOnMenuItemClick}
          defaultSelectedKeys={[selectedKeys]}
          items={menuItems?.map((item) => {
            return {
              key: item.key,
              icon: (
                <div>
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={15}
                    height={15}
                    preview={false}
                  />
                </div>
              ),
              label: item.label,
              children: item.children
                ? item.children.map((child) => ({
                    key: child.key,
                    icon: (
                      <div>
                        <Image
                          src={child.src}
                          alt={child.label}
                          width={15}
                          height={15}
                          preview={false}
                        />
                      </div>
                    ),
                    label: child.label,
                  }))
                : undefined,
            };
          })}
        />
      </Sider>
      <Layout>
        <styled.HeaderWrapper>
          <styled.Toggler
            type="link"
            icon=""
            onClick={() => dispatch(toggleCollapsed(!collapsed))}
          >
            <Image
              src={
                !collapsed
                  ? "/svg-icons/toggle_in.svg"
                  : "/svg-icons/toggle_out.svg"
              }
              alt="toggler"
              preview={false}
            />
          </styled.Toggler>
          <Space align={"baseline"} className="right-nav-content">
            <Image
              src="/svg-icons/bell_icon.svg"
              alt="toggler"
              width={22}
              height={22}
              preview={false}
            />

            <Dropdown
              placement="bottom"
              dropdownRender={(menu) => (
                <div>
                  <styled.MenuBar
                    className="abc"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #BA9775, #1B1B1B)",
                      padding: "8px 14px 8px 14px",
                      borderRadius: "12px 12px 0px 0px",
                    }}
                  >
                    <Col>
                      <Avatar size={40} src="/svg-icons/user2.svg" />
                    </Col>
                    <Col>
                      <styled.User style={{ color: "white" }}>
                        User - {fullName}
                      </styled.User>
                      <br />
                      <styled.Role style={{ color: "white" }}>
                        {/* {userProfile?.role === 'super_admin'
                          ? 'Super Admin'
                          : 'Customer'} */}
                        Admin
                      </styled.Role>
                    </Col>
                  </styled.MenuBar>
                  {React.cloneElement(menu, {
                    style: {
                      paddingBlock: "16px",
                      borderRadius: "0px 0px 12px 12px",
                    },
                  })}
                </div>
              )}
              menu={{
                items: dropdownItems?.map((item) => {
                  return {
                    key: item.key,
                    label: item.label,
                    icon: (
                      <div>
                        <Image
                          src={item.src}
                          alt={item.name}
                          width={16}
                          height={16}
                          preview={false}
                        />
                      </div>
                    ),
                    onClick: item.onClick,
                  };
                }),
              }}
              trigger={["click"]}
            >
              <styled.MenuBar>
                <Col>
                  <Avatar
                    size={32}
                    src="/svg-icons/user2.svg"
                    className="avatar"
                  />
                </Col>
              </styled.MenuBar>
            </Dropdown>
          </Space>
          <Logout open={logoutOpen} setLogoutOpen={setLogoutOpen} />
        </styled.HeaderWrapper>
        <styled.ContentWrapper>
          <Suspense fallback={<LoadingComponent />}>
            <Outlet />
          </Suspense>
        </styled.ContentWrapper>
        {/* <styled.FooterWrapper>
          © 2024  - All Rights Reserved
        </styled.FooterWrapper> */}
      </Layout>
    </styled.LayoutWrapper>
  );
}

export default LayoutContainer;
LayoutContainer.propTypes = {
  iscompact: PropTypes.any,
};
