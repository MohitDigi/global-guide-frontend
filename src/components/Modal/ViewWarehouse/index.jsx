import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import { Col, Divider, Row, Typography } from 'antd';

import styled from './ViewWarehouse.style';

const { Text } = Typography;

const ViewWarehouse = ({ viewModal, setViewModal }) => {
  // const warehouse = useSelector(
  //   (state) => state.warehouseReducer.singleWarehouseData
  // );
  // const { id, title, type, city, lat, long } = warehouse;

  return (
    <styled.ModalWrapper
      open={viewModal}
      onOk={() => setViewModal(false)}
      okText="Okay"
      onCancel={() => setViewModal(false)}
      closeIcon={false}
      width={'25.5rem'}
    >
      <styled.Title>Warehouse View</styled.Title>
      <Row>
        <Col span={12}>
          <Text>
            <strong>ID</strong>
          </Text>
        </Col>
        <Col span={12}>
          {/* <Text type="danger">{id}</Text> */}
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Text>
            <strong>Warehouse Name</strong>
          </Text>
        </Col>
        <Col span={12}>
          {/* <Text>{title}</Text> */}
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Text>
            <strong>Shipments</strong>
          </Text>
        </Col>
        <Col span={12}>
          <Text>7</Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Text>
            <strong>Type</strong>
          </Text>
        </Col>
        <Col span={12}>
          {/* <Text>{type}</Text> */}
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Text>
            <strong>Location</strong>
          </Text>
        </Col>
        <Col span={12}>
          {/* <Text>{city}</Text> */}
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Text>
            <strong>Latitude</strong>
          </Text>
        </Col>
        <Col span={12}>
          {/* <Text>{lat}</Text> */}
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Text>
            <strong>Longitude</strong>
          </Text>
        </Col>
        <Col span={12}>
          {/* <Text>{long}</Text> */}
        </Col>
      </Row>
      <Divider />
    </styled.ModalWrapper>
  );
};

export default ViewWarehouse;
ViewWarehouse.propTypes = {
  viewModal: PropTypes.any,
  setViewModal: PropTypes.any,
};
