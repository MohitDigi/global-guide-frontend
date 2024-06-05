import React from 'react';

import { Typography } from 'antd';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import styled from './AccountGraph.styled';

const options = {
  chart: {
    type: 'column',
  },

  title: {
    text: 'USD $340282',
    align: 'left',
    style: {
      fontSize: '16px',
      fontWeight: 700,
    },
  },

  subtitle: {
    text: 'Total Earnings of the Month',
    align: 'left',
    style: {
      fontSize: '16px',
      fontWeight: 400,
      color: '#667085',
    },
  },

  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },

  yAxis: {
    allowDecimals: false,
    title: {
      text: '',
    },
  },

  series: [
    {
      name: 'Product 1',
      color: '#BA9775',
      data: [
        12.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2, 22.0, 17.8,
      ],
    },
    {
      name: 'Product 2',
      color: '#141414',      
      data: [
        18.0, 38.2, 23.1, 27.9, 12.2, 36.4, 19.8, 38.4, 13.5, 19.2, 22.0, 17.8,
      ],
    },
    {
      name: 'Product 3',
      color: '#bdad9c',
      data: [
        20.0, 28.2, 23.1, 27.9, 22.2, 36.4, 29.8, 38.4, 25.5, 29.2, 22.0, 17.8,
      ],
    },
  ],
};
 const AccountGraph = () => {
  return (
    <styled.Wrapper>
      <Typography.Text className="title">
        Total Accounts Receivable
      </Typography.Text>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </styled.Wrapper>
  );
};

export default AccountGraph;
