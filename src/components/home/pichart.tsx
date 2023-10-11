import { handleGetExpenseChartData } from "@/utils/home/getExpenseChartData";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const ExpensePieChart = () => {
  const [data, setData] = useState([
    ["Expense Type", "Percentage"],
    ["Labor", 40.44],
    ["Travel Expense", 20.12],
    ["Rent Expense", 20.12],
    ["Materials", 19.32],
  ]);

  const [expenseData, setexpenseData] = useState<any[]>([]);
  const options = {
    // title: "Expense Breakdown",
    backgroundColor: "#143230",
    legend: {
      textStyle: {
        color: "white",
      },
    },
    chartArea: {
      // leave room for y-axis labels
      width: "100%",
    },
  };

  useEffect(() => {
    handleGetExpenseChartData()
      .then(({ data }: any) => {
        setexpenseData(data.expenseChartData);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"375px"}
      />
    </div>
  );
};

export default ExpensePieChart;
