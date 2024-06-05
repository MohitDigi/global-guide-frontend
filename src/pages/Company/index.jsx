import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select, Typography } from "antd";
import { debounce } from "lodash";

import CreateNewCompany from "../../components/Modal/CreateNewCompany";
import CompanyTable from "../../components/Tables/CompanyTable";
import { getCompanyList } from "../../redux/slices/authSlice";
import styled from "./Company.style";

const { Title } = Typography;

const { Option } = Select;

const CompanyPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [filters, setFilters] = useState({ sortBy: "latest" });

  const dispatch = useDispatch();

  const handleChange = debounce((event) => {
    const searchTerm = event.target.value;
    if (searchTerm !== 0) {
      setFilters({ ...filters, search: searchTerm });
    }
    // dispatch(getCompany({ ...filters, search: searchTerm }));
  }, 2000);

  const handleSelectChange = (value) => {
    if (value !== 0) {
      setFilters({ ...filters, sortBy: value });
    }
    // dispatch(getCompany({ ...filters, sortBy: value }));
  };

  const createCompanyHandler = () => {
    setModalOpen(true);
    // dispatch(getCompanyList());
  };
  useEffect(() => {
    dispatch(getCompanyList());
  }, [dispatch]);
  return (
    <>
      <styled.Container>
        <Title level={3}>Company</Title>
        <div className="table-header">
          <Select
            defaultValue="latest"
            className="latest-created"
            size="large"
            placeholder="Sort by"
            // onChange={handleSelectChange}
          >
            <Option value="latest">Latest Created</Option>
            <Option value="oldest">Oldest Created</Option>

            {/* Add more options for filtering */}
          </Select>
          <div className="search-input">
            <Input
              suffix={<SearchOutlined />}
              placeholder="Search by Company Name"
              className="name-search"
              size="large"
              variant="filled"
              onChange={handleChange}
              allowClear
            />
            <Button
              className="create"
              type="primary"
              size="middle"
              onClick={createCompanyHandler}
            >
              Create Company
            </Button>
          </div>
        </div>
        <CompanyTable filters={filters} />
      </styled.Container>
      <CreateNewCompany
        filters={filters}
        open={modalOpen}
        onClose={() => setModalOpen(!modalOpen)}
      />
    </>
  );
};

export default CompanyPage;
