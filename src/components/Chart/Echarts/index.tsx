import React from "react";
import { Card } from "xl";
import * as echarts from "echarts";
import ChartComponent from "xl-react-echarts"; // esm
// const ChartComponent = require("xl-react-echarts").default;  // cjs

const Page = () => {
  const data = [
    { name: "A", value: 100 },
    { name: "B", value: 200 },
    { name: "C", value: 300 },
  ];
  return (
    <Card title="xl-react-echarts">
      <ChartComponent
        data={data}
        style={{ width: 500, height: 300 }}
        echarts={echarts}
      />
    </Card>
  );
};

export default Page;
