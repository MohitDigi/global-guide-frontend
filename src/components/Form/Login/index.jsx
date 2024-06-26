import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Form, Image, Input, Typography } from "antd";
import styled from "./Login.style";
import { loginUser } from "../../../redux/slices/authSlice";

const { Paragraph, Title } = Typography;

function LoginFormComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (value) => {};

  const onFinish = (values) => {
    console.log(values)
    dispatch(loginUser(values));
  };

  return (
    <styled.Wrapper>
      <div className="form-wrapper">
        <styled.Heading level={3}>Sign in</styled.Heading>

        <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
          <div className="phone-input">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your password!",
              //   },
              // ]}
            >
              <Input.Password />
            </Form.Item>
          </div>
          <Button type="primary" size="large" block htmlType="submit">
            Sign in
          </Button>
        </Form>
        <div>
          <Title className="register" level={5}>
            You don’t have an account?
            <span onClick={() => navigate("/auth/login")}>Register</span>
          </Title>
        </div>
      </div>
    </styled.Wrapper>
  );
}

export default LoginFormComponent;
