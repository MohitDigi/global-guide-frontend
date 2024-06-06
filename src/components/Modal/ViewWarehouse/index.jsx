import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";

import { Col, Divider, Image, Row, Typography } from "antd";

import styled from "./ViewWarehouse.style";

const { Text } = Typography;

const ViewCompany = ({ viewModal, setViewModal }) => {
  const company = useSelector(
    (state) => state.companyReducer?.singleCompanyData
  );
  // const { companyID, companyName, address, phone, imageUrl, description } = company;
  // console.log(company);
  return (
    <styled.ModalWrapper
      open={viewModal}
      onOk={() => setViewModal(false)}
      okText="Okay"
      onCancel={() => setViewModal(false)}
      closeIcon={false}
      width={"25.5rem"}
    >
      <styled.Title>Company View</styled.Title>
      <Row>
        <Col span={12}>
          <Text>
            <strong>Company ID</strong>
          </Text>
        </Col>
        <Col span={12}>
          <Text type="danger">{company?.companyID}</Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Text>
            <strong>Company Image</strong>
          </Text>
        </Col>
        <Col span={12}>
          <Image
            src={company?.imageUrl ? company?.imageUrl : "/profile.svg"}
            alt="company-img"
            width={65}
            height={65}
          />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Text>
            <strong>Company Name</strong>
          </Text>
        </Col>
        <Col span={12}>
          <Text>{company?.companyName}</Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Text>
            <strong>Address</strong>
          </Text>
        </Col>
        <Col span={12}>
          <Text>{company?.address}</Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Text>
            <strong>Phone</strong>
          </Text>
        </Col>
        <Col span={12}>
          <Text>{company?.phone}</Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Text>
            <strong>Description</strong>
          </Text>
        </Col>
        <Col span={12}>
          <Text>{company?.description}</Text>
        </Col>
      </Row>
      <Divider />
    </styled.ModalWrapper>
  );
};

export default ViewCompany;
ViewCompany.propTypes = {
  viewModal: PropTypes.any,
  setViewModal: PropTypes.any,
};
