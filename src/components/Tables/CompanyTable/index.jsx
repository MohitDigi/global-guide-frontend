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
import {
  deleteCompany,
  getCompanyList,
  getOneCompany,
} from "../../../redux/slices/companySlice";

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
  //   dispatch(getCompanyList(filters));
  // }, []);
  console.log(companyList);
  const columns = [
    {
      title: "Company ID",
      dataIndex: "companyID",
      key: "companyID",
      render: (_, record) => (
        <span>{record.companyID ? record.companyID : "N/A"}</span>
      ),
      width: "16.86px",
    },
    {
      title: "Company Image",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (_, record) => (
        <span>{record.imageUrl ? record.imageUrl : "N/A"}</span>
      ),
      width: "226.86px",
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
      title: "Description",
      dataIndex: "description",
      render: (_, record) => (
        <span>{record.description ? record.description : "N/A"}</span>
      ),
      width: "126.86px",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (_, record) => <span>{record.phone ? record.phone : "N/A"}</span>,
      width: "126.86px",
    },
    {
      title: "Location",
      dataIndex: "address",
      key: "address",
      render: (_, record) => (
        <span>{record.address ? record.address : "N/A"}</span>
      ),
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
                    dispatch(getOneCompany(record.companyID));
                  }}
                >
                  View
                </div>
                <div
                  className="actions"
                  onClick={() => {
                    dispatch(getOneWarehouse(record.companyID));
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
                    setId(record.companyID);
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
    dispatch(deleteCompany(id)).then(() => {
      dispatch(getCompanyList());
    });
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
        // filters={filters}
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
