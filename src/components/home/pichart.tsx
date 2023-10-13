import { handleGetExpenseChartData } from "@/utils/home/getExpenseChartData";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const ExpensePieChart = () => {








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

  
  const [data, setData] = useState([
    ["Expense Type", "Percentage"],
  ]);

  const [expenseData, setexpenseData] = useState<any[]>([]);

      // Calculate the total sum of all expenses
      const totalSum = expenseData.reduce((acc, item) => acc + item.totalAmount, 0);

      // Calculate the percentage for each category
      const newData = [["Expense Type", "Percentage"]];
      expenseData.forEach((item) => {
        const percentage = ((item.totalAmount / totalSum) * 100).toFixed(2);
        newData.push([item.categoryName, parseFloat(percentage)]);
      });
  
      // Update the state with the new data
      setData(newData);
  





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
