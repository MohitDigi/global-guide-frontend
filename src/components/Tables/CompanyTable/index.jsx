import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Popover, Table } from "antd";
import { MoreHorizontal } from "lucide-react";

// import {
//   deleteWarehouse,
//   getCountries,
//   getOneWarehouse,
//   getWarehouse,
// } from '../../../redux/slices/warehouseSlice';
import Delete from "../../Modal/Delete";
import UpdateWarehouse from "../../Modal/UpdateWarehouse";
import ViewWarehouse from "../../Modal/ViewWarehouse";
import styled from "./CompanyTable.style";

const CompanyTable = ({ filters }) => {
  const dispatch = useDispatch();
  // const companyList = useSelector(
  //   (state) => state?.warehouseReducer?.data?.payload?.warehouses
  // );
  const companyList = useSelector(
    (state) => state?.companyReducer?.data?.payload
  );
  console.log("companyList", companyList);
  const [viewModal, setViewModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [id, setId] = useState();

  // useEffect(() => {
  //   dispatch(getWarehouse(filters));
  // }, []);

  const columns = [
    {
      title: "Company ID",
      dataIndex: "companyID",
      key: "companyID",
      render: (_, record) => <span>{record.companyID ? record.companyID : "N/A"}</span>,
      width: "126.86px",
    },
    {
      title: "Company Name",
      dataIndex: "title",
      key: "title",
      render: (_, record) => (
        <span style={{ color: "#BA9775" }}>
          {record.companyName ? record.companyName : "N/A"}
        </span>
      ),
      width: 200,
    },
    {
      title: "Shipments",
      dataIndex: "shipments",
      render: (_, record) => (
        <span>{record.shipment ? record.shipment : "N/A"}</span>
      ),
      width: "126.86px",
    },
    {
      title: "Type",
      dataIndex: "type",
      render: (_, record) => <span>{record.type ? record.type : "N/A"}</span>,
      width: "126.86px",
    },
    {
      title: "Location",
      dataIndex: "city",
      key: "city",
      render: (_, record) => <span>{record.city ? record.city : "N/A"}</span>,
      width: "126.86px",
    },
    {
      title: "Action",
      key: "action",
      width: "126.86px",
      render: (record) => (
        <>
          <Popover
            placement="bottomRight"
            content={() => (
              <styled.PopoverContent>
                <div
                  className="actions"
                  onClick={() => {
                    setViewModal(true);
                    // dispatch(getOneWarehouse(record.id));
                  }}
                >
                  View
                </div>
                <div
                  className="actions"
                  onClick={() => {
                    // dispatch(getOneWarehouse(record.id));
                    setId(record.id);
                    setUpdateModal(true);
                    // dispatch(getCountries());
                  }}
                >
                  Edit
                </div>
                <div
                  className="actions"
                  onClick={() => {
                    setId(record.id);
                    setDeleteModal(true);
                  }}
                >
                  Delete
                </div>
              </styled.PopoverContent>
            )}
            trigger="click"
          >
            <MoreHorizontal style={{ cursor: "pointer" }} />
          </Popover>
        </>
      ),
    },
  ];

  const deleteHandler = () => {
    // dispatch(deleteWarehouse(id)).then(() => {
    //   dispatch(getWarehouse(filters));
    // });
    setDeleteModal(false);
  };

  return (
    <>
      <styled.Wrapper>
        <Table
          columns={columns}
          dataSource={companyList ? companyList : []}
          rowKey={(record) => record.id}
          rowSelection={{ type: "checkbox" }}
          pagination={true}
          loading={!companyList ? true : false}
        />
      </styled.Wrapper>
      <UpdateWarehouse
        updateModal={updateModal}
        setUpdateModal={setUpdateModal}
        id={id}
        filters={filters}
      />
      <ViewWarehouse viewModal={viewModal} setViewModal={setViewModal} />
      <Delete
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        deleteHandler={deleteHandler}
      />
    </>
  );
};

export default CompanyTable;
CompanyTable.propTypes = {
  filters: PropTypes.any,
};
