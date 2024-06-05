import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Col,
  ConfigProvider,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from 'antd';

// import {
//   createWarehouse,
//   getCities,
//   getStates,
//   getWarehouse,
// } from '../../../redux/slices/warehouseSlice';
import styled from './CreateNewCompany.style';

const { Title } = Typography;

const CreateNewCompany = ({ open, onClose, filters }) => {
  const dispatch = useDispatch();
  const countries = useSelector(
    (state) => state?.warehouseReducer?.countriesData?.payload
  );

  const states = useSelector(
    (state) => state?.warehouseReducer?.statesData?.payload?.states
  );

  const cities = useSelector(
    (state) => state?.warehouseReducer?.citiesData?.payload?.cities
  );
  const [form] = Form.useForm();
  const theme = {
    components: {
      Select: {
        colorPrimaryActive: 'rgb(225, 29, 7)',
      },
    },
  };

  useEffect(() => {
    if (!open) {
      // Reset form fields when modal is closed
      form.resetFields();
    }
  }, [open, form]);

  const handleCountryChange = (value, option) => {
    const { key } = option;
    dispatch(getStates(key));
  };

  const handleStateChange = (value, option) => {
    const { key } = option;
    dispatch(getCities(key));
  };

  const handleSubmit = (values) => {
    const {
      warehouseName,
      address,
      latitude,
      longitude,
      city,
      stateProvince,
      country,
      warehouseType,
    } = values;

    const payload = {
      title: warehouseName,
      address: address,
      lat: +latitude,
      long: +longitude,
      city: city,
      state: stateProvince,
      country: country,
      type: warehouseType,
    };
    dispatch(createWarehouse(payload)).then(() => {
      onClose();
      dispatch(getWarehouse(filters));
    });
  };
  return (
    <ConfigProvider theme={theme}>
      <styled.ModalWrapper
        open={open}
        onOk={() => form.submit()}
        okText="Create"
        onCancel={onClose}
        closeIcon={false}
        width={'49rem'}
        centered={true}
      >
        <Title level={4}>Create Warehouse</Title>

        <Form
          layout="vertical"
          onFinish={handleSubmit}
          form={form}
          requiredMark={false}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="warehouseName"
                label="Warehouse name"
                rules={[
                  {
                    required: true,
                    message: 'Warehouse name is required!',
                  },
                  {
                    min: 5,
                    message:
                      'Warehouse name must be at least 5 characters long!',
                  },
                  {
                    max: 100,
                    message: 'Warehouse name cannot exceed 100 characters!',
                  },
                  {
                    pattern: /^(?!.*\s{2,})[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
                    message: 'Invalid value for Warehouse Name!',
                  },
                ]}
              >
                <Input
                  className="create-warehouse"
                  placeholder="Warehouse Name"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="warehouseType"
                label="Warehouse Type"
                rules={[
                  {
                    required: true,
                    message: 'Warehouse Type is required!',
                  },
                ]}
              >
                <Select
                  size="large"
                  className="create-warehouse"
                  placeholder="Warehouse Type"
                >
                  <Select.Option value="Partial">Partial</Select.Option>
                  <Select.Option value="Fully">Fully</Select.Option>
                  <Select.Option value="Rented">Rented</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="country"
                label="Country"
                rules={[
                  {
                    required: true,
                    message: 'Country is required!',
                  },
                ]}
              >
                <Select
                  size="large"
                  className="create-warehouse"
                  placeholder="Select"
                  onChange={handleCountryChange}
                >
                  {countries?.length > 0 &&
                    countries?.map((country) => (
                      <Select.Option
                        key={country.id}
                        value={country.location_name}
                      >
                        {country.location_name}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="stateProvince"
                label="State/Province"
                rules={[
                  {
                    required: true,
                    message: 'State/Province is required!',
                  },
                ]}
              >
                <Select
                  size="large"
                  className="create-warehouse"
                  placeholder="Select"
                  onChange={handleStateChange}
                >
                  {states?.map((state) => (
                    <Select.Option key={state?.id} value={state?.location_name}>
                      {state?.location_name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="city"
                label="City"
                rules={[
                  {
                    required: true,
                    message: 'City is required!',
                  },
                ]}
              >
                <Select
                  size="large"
                  className="create-warehouse"
                  placeholder="Select"
                >
                  {cities?.map((city) => (
                    <Select.Option key={city?.id} value={city?.location_name}>
                      {city?.location_name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  {
                    required: true,
                    message: 'Address is required!',
                  },
                  {
                    min: 10,
                    message: 'Address must be at least 10 characters long',
                  },
                  {
                    max: 200,
                    message: 'Address cannot exceed 200 characters!',
                  },
                  {
                    pattern:
                      /^(?!.*\s{2,})(?=[^\s]*[a-zA-Z])[^\s]+(?:\s+[^\s]+)*$/,
                    message: 'Invalid value for address!',
                  },
                ]}
              >
                <Input className="create-warehouse" placeholder="Address" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </styled.ModalWrapper>
    </ConfigProvider>
  );
};

export default CreateNewCompany;
CreateNewCompany.propTypes = {
  open: PropTypes.any,
  onClose: PropTypes.any,
  filters: PropTypes.any,
};
