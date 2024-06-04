import React from 'react';
import styled from './Register.style';
import { Row, Col, Image, Card, Button, Form, Input, Cascader, Checkbox} from 'antd';

function RegisterPage() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row>
      <Col span={12}>
        <Image
          width={720}
          height={1024}
          src="/background.svg"
          alt="background"
          preview={false}
        />
      </Col>
      <styled.register span={12}>
        <styled.outerDiv>
          {/* <styled.logo>
            <Image
              width={203}
              height={71}
              src=""
              alt="logo"
              preview={false}
            />
          </styled.logo> */}
          <Card
            title="Register now!"
            bordered={false}
            style={{
              width: 408,
              height: 797
            }}
          >
            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{}}
              style={{ maxWidth: 600 }}
              scrollToFirstError
              layout='vertical'
              requiredMark={false}
            >
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          'The new password that you entered do not match!'
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="nickname"
                label="Username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your nickname!',
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="residence"
                label="Address"
                rules={[
                  {
                    type: 'array',
                    required: true,
                    message: 'Please select your habitual residence!',
                  },
                ]}
              >
                <Cascader options={[]} />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <Input style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error('Should accept agreement')),
                  },
                ]}
              >
                <Checkbox>
                  You accept{' '}
                  <a href="" style={{ color: 'red' }}>
                    terms and conditions
                  </a>
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" danger htmlType="submit">
                  Register Free
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </styled.outerDiv>
      </styled.register>
    </Row>
  );
}

export default RegisterPage;
