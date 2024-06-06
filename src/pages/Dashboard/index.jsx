import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchOutlined } from '@ant-design/icons';
import { Col, Image, Input, Row } from 'antd';
import { debounce } from 'lodash';

import AccountGraph from '../../components/Graphs/AccountGraph/AccountGraph.jsx';
import ShipmentGraph from '../../components/Graphs/ShipmentGraph/ShipmentGraph.jsx';
import CompanyTable from '../../components/Tables/CompanyTable';
// import { getDashboard, manageUser } from '../../redux/slices/dashboardSlice';
// import { getShipments } from '../../redux/slices/shipmentsSlice';
import styled from './Dashboard.style';
import { TrendingUp } from 'lucide-react';

function DashboardPage() {
  const dispatch = useDispatch();

  // const dashboardData = useSelector(
  //   (state) => state.dashboardReducer.dashboardData
  // );
  // const manageUserCount = useSelector(
  //   (state) => state.dashboardReducer.manageUserCount
  // );

  // useEffect(() => {
  //   dispatch(getDashboard());
  //   dispatch(manageUser());
  // }, [dispatch]);

  const searchHandler = debounce((event) => {
    const searchTerm = event.target.value;
    if (searchTerm !== 0) {
      // dispatch(getShipments({ search: searchTerm }));
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
              <div className="stats-title">Companies</div>
              <div className="stats-desc"> 78
                {/* {dashboardData?.pending} */}
                </div>
            </div>
            <div className="icon-container">
              <Image src="/dashboard-icons/shipments.svg" preview={false} />
            </div>
          </div>
            <div className="recent-stats-trend">
              <div className="trend-highlight">
                <TrendingUp />
                <span>8.5%</span>
              </div>
              <span>Up from yesterday</span>
            </div>
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
              <div className="stats-desc"> 5
                {/* {dashboardData?.delivered} */}
                </div>
            </div>
            <div className="icon-container">
              <Image src="/dashboard-icons/consolidated.svg" preview={false} />
            </div>
          </div>
          <div className="recent-stats-trend">
            <div className="trend-highlight">
              <TrendingUp />
              <span>8.5%</span>
            </div>
            <span>Up from yesterday</span>
          </div>
        </Col>
        <Col
          span={5}
          md={{ span: 11 }}
          lg={{ span: 5 }}
          className="stats-container"
        >
          <div className="stats-info">
            <div>
              <div className="stats-title">Total Sales</div>
              <div className="stats-desc">USD $76754
              {/* {dashboardData?.total} */}
              </div>
            </div>
            <div className="icon-container">
              <Image
                src="/dashboard-icons/total-shipments.svg"
                preview={false}
              />
            </div>
          </div>
          <div className="recent-stats-trend">
            <div className="trend-highlight">
              <TrendingUp className="trend-icon" />
              <span>8.5%</span>
            </div>
            <span>Up from yesterday</span>
          </div>
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
              <div className="stats-desc">
                USD $453423
                {/* {dashboardData?.account} */}
                </div>
            </div>
            <div className="icon-container">
              <Image
                src="/dashboard-icons/account-receivable.svg"
                preview={false}
              />
            </div>
          </div>
          <div className="recent-stats-trend">
            <div className="trend-highlight">
              <TrendingUp />
              <span>8.5%</span>
            </div>
            <span>Up from yesterday</span>
          </div>
        </Col>
      </Row>

      <Row justify="space-between" className="stats-graph-section">
        <Col
          span={11}
          // xl={{ span: 10 }}
          // xxl={{ span: 9 }}
          className="graph-wrapper"
        >
          <ShipmentGraph />
        </Col>
        <Col
          span={12}
          // xl={{ span: 10 }}
          // xxl={{ span: 11 }}
          className="graph-wrapper"
        >
          <AccountGraph />
        </Col>
        
      </Row>

      <div className="shipment-section">
        <div className="shipment-title">Companies List</div>
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
              // onChange={searchHandler}
            />
          </Row>
        </div>
        <CompanyTable />
      </div>
    </styled.Wrapper>
  );
}

export default DashboardPage;
