import React from "react";
import { Chart } from "react-google-charts";

const ChartComponent: React.FC = () => {
  const data = [
    ["Month", " ", "", ""],
    [{ v: "Apr2023", f:"Apr 2023" }, 32535, 28985, 24851],
    [{ v: "May2023", f:"May 2023" }, 0, 0, 0],
    [{ v: "Jun2023", f:"May 2023" }, 0, 0, 0],
    [{ v: "Jul2023", f:"May 2023" }, 0, 0, 0],
    [{ v: "Aug2023", f:"May 2023" }, 0, 0, 0],
    [{ v: "Sep2023", f:"May 2023" }, 0, 0, 0],
    [{ v: "Oct2023", f:"May 2023" }, 0, 0, 0],
    [{ v: "Nov2023", f:"May 2023" }, 0, 0, 0],
    [{ v: "Dec2023", f:"May 2023" }, 0, 0, 0],
    [{ v: "Jan2024", f:"May 2023" }, 0, 0, 0],
    [{ v: "Feb2024", f:"May 2023" }, 0, 0, 0],
    [{ v: "Mar2024", f:"May 2023" }, 0, 0, 0],
  ];

  const options = {
    title: "Sales, Receipts, and Expenses from Apr 2023 to Mar 2024",
    vAxis: {
      title: "Amount (₹)",
      titleTextStyle: {
        color: "white",
      },
      textStyle: {
        color: "white",
      },
    },
    hAxis: {
      title: "Month",
      titleTextStyle: {
        color: "white",
      },
      textStyle: {
        color: "white",
      },
    },
    titleTextStyle: {
      color: "white",
    },
    legend: {
      textStyle: {
        color: "white",
      },
    },
    seriesType: "bars",
    // series: { 2: { type: "line" } },
    series: {
      0: { color: "#2C8FF6" },    // Total Sales
      1: { color: "#35BD7A" },  // Total Receipts
      2: { color: "#F8612B" },   // Total Expenses
    },
    backgroundColor: "#143230",
  };

  return (
    <Chart
      chartType="ComboChart"
      width="100%"
      height="305px"
      data={data}
      options={options}
    />
  );
};

export default ChartComponent;
