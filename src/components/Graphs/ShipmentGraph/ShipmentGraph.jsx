import React from "react";

import { Typography } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import styled from "./ShipmentGraph.styled";

const options = {
  chart: {
    type: "pie",
  },
  title: {
    text: "USD $702285",
    align: "left",
    style: {
      fontSize: "16px",
      fontWeight: 700,
    },
  },
  subtitle: {
    text: "Total Earnings of the Month",
    align: "left",
    style: {
      fontSize: "16px",
      fontWeight: 400,
      color: "#667085",
    },
  },
  tooltip: {
    valueSuffix: "%",
  },
  plotOptions: {
    series: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: [
        {
          enabled: true,
          distance: 20,
        },
        {
          enabled: true,
          distance: -40,
          // format: "{point.percentage:.1f}%",
          style: {
            fontSize: "1.2em",
            textOutline: "none",
            opacity: 0.7,
          },
          filter: {
            operator: ">",
            property: "percentage",
            value: 10,
          },
        },
      ],
    },
  },

  series: [
    {
      name: "Percentage",
      colorByPoint: true,
      data: [
        {
          name: "Dalmore",
          y: 55.02,
          color: "#BA9775",
        },
        {
          name: "Macallan",
          sliced: true,
          selected: true,
          y: 26.71,
          color: "#141414",
        },
        {
          name: "Johnny Walker",
          y: 1.09,
          color: "#DC9325",
        },
        {
          name: "Bowmore",
          y: 15.5,
          color: "#F9F4EE",
        },
        {
          name: "Glenmorangie",
          y: 1.68,
        },
      ],
    },
  ],
};
const ShipmentGraph = () => {
  return (
    <styled.Wrapper>
      <Typography.Text className="title">
        Total Receivable from Companies
      </Typography.Text>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </styled.Wrapper>
  );
};

export default ShipmentGraph;
