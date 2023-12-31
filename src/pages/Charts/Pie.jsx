import React from "react";

import { pieChartData } from "../../data/dummy";
import { Header, PieChart } from "../../components";

const Pie = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-gray-900 rounded-3xl">
    <Header category="Chart" title="Project Cost Breakdown" />
    <div className="w-full">
      <PieChart id="pie-chart" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
);

export default Pie;
