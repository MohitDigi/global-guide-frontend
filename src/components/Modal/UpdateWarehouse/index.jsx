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
//   getCities,
//   getStates,
//   getWarehouse,
//   updateWarehouse,
// } from '../../../redux/slices/warehouseSlice';
import styled from './UpdateWarehouse.style';

const { Title } = Typography;

const UpdateWarehouse = ({ updateModal, setUpdateModal, id, filters }) => {
  const dispatch = useDispatch();
  // const warehouse = useSelector(
  //   (state) => state.warehouseReducer.singleWarehouseData
  // );
  // const { title, type, city, address, state, country } = warehouse;

  // const countries = useSelector(
  //   (state) => state?.warehouseReducer?.countriesData?.payload
  // );

  // const states = useSelector(
  //   (state) => state?.warehouseReducer?.statesData?.payload?.states
  // );

  // const cities = useSelector(
  //   (state) => state?.warehouseReducer?.citiesData?.payload?.cities
  // );

  const theme = {
    components: {
      Select: {
        colorPrimaryActive: 'rgb(225, 29, 7)',
      },
    },
  };

  const [form] = Form.useForm();

  useEffect(() => {
    if (!updateModal) {
      form.resetFields();
    }
  }, [updateModal, form]);

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
    const data = {
      data: payload,
      id,
    };
    // dispatch(updateWarehouse(data)).then(() => {
    //   setUpdateModal(false);
    //   // dispatch(getWarehouse(filters));
    // });
  };
  return (
    <ConfigProvider theme={theme}>
      {/* {Object.keys(warehouse).length > 0 && ( */}
        <styled.ModalWrapper
          open={updateModal}
          onOk={() => form.submit()}
          okText="Update"
          onCancel={() => setUpdateModal(false)}
          width={'49rem'}
          centered={true}
        >
          <Title level={4}>Update Warehouse</Title>
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
                    // defaultValue={title}
                    placeholder="Warehouse Name"
                    className="create-warehouse"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="warehouseType" label="Warehouse Type">
                  <Select
                    size="large"
                    placeholder="Warehouse Type"
                    className="create-warehouse"
                    // defaultValue={type}
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
                <Form.Item name="country" label="Country">
                  <Select
                    size="large"
                    placeholder="Select"
                    className="create-warehouse"
                    // defaultValue={country}
                    onChange={handleCountryChange}
                  >
                    {/* {countries?.length > 0 &&
                      countries.map((country) => (
                        <Select.Option
                          key={country.id}
                          value={country.location_name}
                        >
                          {country.location_name}
                        </Select.Option>
                      ))} */}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="stateProvince" label="State/Province">
                  <Select
                    className="create-warehouse"
                    size="large"
                    placeholder="Select"
                    // defaultValue={state}
                    onChange={handleStateChange}
                  >
                    {/* {states?.length > 0 &&
                      states.map((state) => (
                        <Select.Option
                          key={state?.id}
                          value={state?.location_name}
                        >
                          {state?.location_name}
                        </Select.Option>
                      ))} */}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="city" label="City">
                  <Select
                    size="large"
                    placeholder="Select"
                    // defaultValue={city}
                    className="create-warehouse"
                  >
                    {/* {cities?.length > 0 &&
                      cities.map((city) => (
                        <Select.Option key={city.id} value={city.location_name}>
                          {city.location_name}
                        </Select.Option>
                      ))} */}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="address"
                  label="Address"
                  rules={[
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
                  <Input
                    placeholder="Address"
                    // defaultValue={address}
                    className="create-warehouse"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </styled.ModalWrapper>
      {/* )} */}
    </ConfigProvider>
  );
};

export default UpdateWarehouse;
UpdateWarehouse.propTypes = {
  updateModal: PropTypes.any,
  setUpdateModal: PropTypes.any,
  id: PropTypes.any,
  filters: PropTypes.any,
};
