import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Typography } from 'antd';
import { debounce } from 'lodash';

import CreateNewWarehouse from '../../components/Modal/CreateNewWarehouse';
import WarehouseTable from '../../components/Tables/WarehouseTable';
import { getCountries, getWarehouse } from '../../redux/slices/warehouseSlice';
import styled from './Warehouse.style';

const { Title } = Typography;

const { Option } = Select;

const WarehousePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [filters, setFilters] = useState({ sortBy: 'latest' });

  const dispatch = useDispatch();

  const handleChange = debounce((event) => {
    const searchTerm = event.target.value;
    if (searchTerm !== 0) {
      setFilters({ ...filters, search: searchTerm });
    }
    dispatch(getWarehouse({ ...filters, search: searchTerm }));
  }, 2000);

  const handleSelectChange = (value) => {
    if (value !== 0) {
      setFilters({ ...filters, sortBy: value });
    }
    dispatch(getWarehouse({ ...filters, sortBy: value }));
  };

  const createWarehouseHandler = () => {
    setModalOpen(true);
    dispatch(getCountries());
  };

  return (
    <>
      <styled.Container>
        <Title level={3}>Warehouse</Title>
        <div className="table-header">
          <Select
            defaultValue="latest"
            className="latest-created"
            size="large"
            placeholder="Sort by"
            onChange={handleSelectChange}
          >
            <Option value="latest">Latest Created</Option>
            <Option value="oldest">Oldest Created</Option>

            {/* Add more options for filtering */}
          </Select>
          <div className="search-input">
            <Input
              suffix={<SearchOutlined />}
              placeholder="Search by Warehouse Name"
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
              onClick={createWarehouseHandler}
            >
              Create Warehouse
            </Button>
          </div>
        </div>
        <WarehouseTable filters={filters} />
      </styled.Container>
      <CreateNewWarehouse
        filters={filters}
        open={modalOpen}
        onClose={() => setModalOpen(!modalOpen)}
      />
    </>
  );
};

export default WarehousePage;
