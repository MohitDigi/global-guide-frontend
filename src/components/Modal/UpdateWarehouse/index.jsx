import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Col,
  ConfigProvider,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from "antd";

// import {
//   getCities,
//   getStates,
//   getWarehouse,
//   updateWarehouse,
// } from '../../../redux/slices/warehouseSlice';
import styled from "./UpdateWarehouse.style";
import { updateCompany } from "../../../redux/slices/companySlice";

const { Title } = Typography;

const UpdateWarehouse = ({ updateModal, setUpdateModal, id, filters }) => {
  const dispatch = useDispatch();
  const company = useSelector(
    (state) => state.companyReducer?.singleCompanyData
  );
  // const { title, type, city, address, state, country } = warehouse;

  const theme = {
    components: {
      Select: {
        colorPrimaryActive: "rgb(225, 29, 7)",
      },
    },
  };

  const [form] = Form.useForm();

  useEffect(() => {
    if (!updateModal) {
      form.resetFields();
    }
  }, [updateModal, form]);

  const handleSubmit = (values) => {
    // const payload = {
    //   title: warehouseName,
    //   address: address,
    //   lat: +latitude,
    //   long: +longitude,
    //   city: city,
    //   state: stateProvince,
    //   country: country,
    //   type: warehouseType,
    // };
    const payload = {
      data: values,
      id,
    };
    dispatch(updateCompany(payload)).then(() => {
      setUpdateModal(false);
      // dispatch(getWarehouse(filters));
    });
  };
  return (
    <ConfigProvider theme={theme}>
      {/* {Object.keys(warehouse).length > 0 && ( */}
      <styled.ModalWrapper
        open={updateModal}
        onOk={() => form.submit()}
        okText="Update"
        onCancel={() => setUpdateModal(false)}
        width={"49rem"}
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
                      "Warehouse name must be at least 5 characters long!",
                  },
                  {
                    max: 100,
                    message: "Warehouse name cannot exceed 100 characters!",
                  },
                  {
                    pattern: /^(?!.*\s{2,})[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
                    message: "Invalid value for Warehouse Name!",
                  },
                ]}
              >
                <Input
                  // defaultValue={company?.companyName}
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
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  {
                    min: 10,
                    message: "Address must be at least 10 characters long",
                  },
                  {
                    max: 200,
                    message: "Address cannot exceed 200 characters!",
                  },
                  {
                    pattern:
                      /^(?!.*\s{2,})(?=[^\s]*[a-zA-Z])[^\s]+(?:\s+[^\s]+)*$/,
                    message: "Invalid value for address!",
                  },
                ]}
              >
                <Input
                  placeholder="Address"
                  // defaultValue={company?.address}
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
