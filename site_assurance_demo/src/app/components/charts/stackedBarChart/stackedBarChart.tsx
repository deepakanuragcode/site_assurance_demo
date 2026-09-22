"use client";
import { StackedBarChartWrapper } from "./stackedBarChart.styled";
import Link from "next/link";

const stackedBarChart = () => {
  return (
    <StackedBarChartWrapper>
      <Link href="/">Stacked Bar Chart</Link>
    </StackedBarChartWrapper>
  );
};

export default stackedBarChart;
