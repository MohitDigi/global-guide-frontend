import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchOutlined } from '@ant-design/icons';
import { Col, Image, Input, Row } from 'antd';
import { debounce } from 'lodash';

import AccountGraph from '../../components/Graphs/AccountGraph/AccountGraph';
import ShipmentGraph from '../../components/Graphs/ShipmentGraph/ShipmentGraph';
import ShipmentTable from '../../components/Tables/ShipmentTable';
import { getDashboard, manageUser } from '../../redux/slices/dashboardSlice';
import { getShipments } from '../../redux/slices/shipmentsSlice';
import styled from './Dashboard.style';

function DashboardPage() {
  const dispatch = useDispatch();

  const dashboardData = useSelector(
    (state) => state.dashboardReducer.dashboardData
  );
  const manageUserCount = useSelector(
    (state) => state.dashboardReducer.manageUserCount
  );

  useEffect(() => {
    dispatch(getDashboard());
    dispatch(manageUser());
  }, [dispatch]);

  const searchHandler = debounce((event) => {
    const searchTerm = event.target.value;
    if (searchTerm !== 0) {
      dispatch(getShipments({ search: searchTerm }));
    }
  }, 2000);

  return (
    <styled.Wrapper>
      <Row
        wrap={true}
        gutter={{
          lg: 1,
        }}
        justify="space-between"
        className="analytics-wrapper"
      >
        <Col
          span={5}
          md={{ span: 11 }}
          lg={{ span: 5 }}
          className="stats-container"
        >
          <div className="stats-info">
            <div>
              <div className="stats-title">Shipments</div>
              <div className="stats-desc">{dashboardData?.pending}</div>
            </div>
            <div className="icon-container">
              <Image src="/dashboard-icons/shipments.svg" preview={false} />
            </div>
          </div>
            {/* <div className="recent-stats-trend">
              <div className="trend-highlight">
                <TrendingUp />
                <span>8.5%</span>
              </div>
              <span>Up from yesterday</span>
            </div> */}
        </Col>
        <Col
          span={5}
          md={{ span: 11 }}
          lg={{ span: 5 }}
          className="stats-container"
        >
          <div className="stats-info">
            <div>
              <div className="stats-title">Consolidated</div>
              <div className="stats-desc">{dashboardData?.delivered}</div>
            </div>
            <div className="icon-container">
              <Image src="/dashboard-icons/consolidated.svg" preview={false} />
            </div>
          </div>
          {/* <div className="recent-stats-trend">
            <div className="trend-highlight">
              <TrendingUp />
              <span>8.5%</span>
            </div>
            <span>Up from yesterday</span>
          </div> */}
        </Col>
        <Col
          span={5}
          md={{ span: 11 }}
          lg={{ span: 5 }}
          className="stats-container"
        >
          <div className="stats-info">
            <div>
              <div className="stats-title">Total Shipment</div>
              <div className="stats-desc">USD {dashboardData?.total}</div>
            </div>
            <div className="icon-container">
              <Image
                src="/dashboard-icons/total-shipments.svg"
                preview={false}
              />
            </div>
          </div>
          {/* <div className="recent-stats-trend">
            <div className="trend-highlight">
              <TrendingUp className="trend-icon" />
              <span>8.5%</span>
            </div>
            <span>Up from yesterday</span>
          </div> */}
        </Col>
        <Col
          span={5}
          md={{ span: 11 }}
          lg={{ span: 5 }}
          className="stats-container"
        >
          <div className="stats-info">
            <div>
              <div className="stats-title">Account Receivable</div>
              <div className="stats-desc">{dashboardData?.account}</div>
            </div>
            <div className="icon-container">
              <Image
                src="/dashboard-icons/account-receivable.svg"
                preview={false}
              />
            </div>
          </div>
          {/* <div className="recent-stats-trend">
            <div className="trend-highlight">
              <TrendingUp />
              <span>8.5%</span>
            </div>
            <span>Up from yesterday</span>
          </div> */}
        </Col>
      </Row>

      <Row justify="space-between" className="stats-graph-section">
        <Col
          span={9}
          xl={{ span: 10 }}
          xxl={{ span: 9 }}
          className="graph-wrapper"
        >
          <ShipmentGraph />
        </Col>
        <Col
          span={9}
          xl={{ span: 10 }}
          xxl={{ span: 11 }}
          className="graph-wrapper"
        >
          <AccountGraph />
        </Col>
        <Col className="stats-side-section">
          <div className="outer-div">
            <div className="stats-side-container">
              <div>
                <Image
                  src="/dashboard-icons/admin.svg"
                  width={'24px'}
                  preview={false}
                />
              </div>
              <div>
                <div className="stats-side-value">{manageUserCount?.admin}</div>
                <div className="stats-side-title">Admin</div>
              </div>
            </div>
            <div className="stats-side-container">
              <div>
                <Image
                  src="/dashboard-icons/manager.svg"
                  width={'24px'}
                  preview={false}
                />
              </div>
              <div>
                <div className="stats-side-value">
                  {manageUserCount?.manager}
                </div>
                <div className="stats-side-title">Manager</div>
              </div>
            </div>
            <div className="stats-side-container">
              <div>
                <Image
                  src="/dashboard-icons/driver.svg"
                  width={'24px'}
                  preview={false}
                />
              </div>
              <div>
                <div className="stats-side-value">
                  {manageUserCount?.driver}
                </div>
                <div className="stats-side-title">Driver</div>
              </div>
            </div>
            <div className="stats-side-container">
              <div>
                <Image
                  src="/dashboard-icons/customer.svg"
                  width={'24px'}
                  preview={false}
                />
              </div>
              <div>
                <div className="stats-side-value">
                  {manageUserCount?.customer}
                </div>
                <div className="stats-side-title">Customers</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <div className="shipment-section">
        <div className="shipment-title">Shipment</div>
        <div className="shipment-header">
          <Row justify={'end'}>
            <Input
              className="shipment-input"
              name="shipments"
              type="text"
              variant="filled"
              placeholder="Search by TrackingID, Receiver/Sender Name"
              allowClear={{
                clearIcon: <div className="allow-clear">Clear</div>,
              }}
              suffix={<SearchOutlined />}
              onChange={searchHandler}
            />
          </Row>
        </div>
        <ShipmentTable />
      </div>
    </styled.Wrapper>
  );
}

export default DashboardPage;
