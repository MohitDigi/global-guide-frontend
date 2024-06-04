import React, { useState } from "react";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";
import { getCountryCallingCode } from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Form, Image, Input, Typography } from "antd";

import styled from "./Signup.style";

const { Paragraph, Title } = Typography;

function SignupForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (value) => {};

  const onFinish = async (values) => {};
  return (
    <styled.Wrapper>
      <div className="form-wrapper">
        <styled.Heading level={3}>Register</styled.Heading>
        <Paragraph className="paragraph">
          Just a few quick things get started
        </Paragraph>
        <Form layout="vertical" requiredMark={false} onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="Name"
            // rules={[{ required: true, message: "First name is required!" }]}
          >
            <Input className="inputs" size="large" placeholder="Enter Name" />
          </Form.Item>
          {/* <Form.Item
            label="User Name"
            name="userName"
            // rules={[{ required: true, message: "Last name is required!" }]}
          >
            <Input
              className="inputs"
              size="large"
              placeholder="Enter Username"
            />
          </Form.Item> */}
          <Form.Item label="Email" name="email">
            <Input className="inputs" size="large" placeholder="Enter Email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
           
          >
            <Input.Password />
          </Form.Item>
          <Button type="primary" size="large" block htmlType="submit">
            Register
          </Button>
        </Form>
        <div>
          <Title className="register" level={5}>
            Do you already have an account?
            <span onClick={() => navigate("/auth/login")}> Sign in</span>
          </Title>
        </div>
      </div>
    </styled.Wrapper>
  );
}

export default SignupForm;
