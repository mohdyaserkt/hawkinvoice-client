import { handleGetChartData } from "@/utils/home/getChartdata";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const ChartComponent: React.FC = () => {
  const [chartData, setchartData] = useState<any>();

  useEffect(() => {
    handleGetChartData()
      .then(({ data }: any) => {
        setchartData(data.chartData);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);




  const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const isBeforeApril1 = currentDate.getMonth() < 3 || (currentDate.getMonth() === 3 && currentDate.getDate() < 1);

const months = [];

if (isBeforeApril1) {
  // If current date is before April 1, use previous year's April to current year's March
  for (let i = currentYear - 1; i <= currentYear; i++) {
    for (let month = 4; month <= 12; month++) {
      // Get the month name abbreviation (e.g., Oct)
      const monthName = new Date(i, month - 1, 1).toLocaleString('default', { month: 'short' });
      months.push(`${monthName}${i}`);
    }
  }
} else {
  // If the current date is on or after April 1, use the current year's April to next year's March
  for (let i = currentYear; i <= currentYear + 1; i++) {
    for (let month = 4; month <= 12; month++) {
      // Get the month name abbreviation (e.g., Oct)
      const monthName = new Date(i, month - 1, 1).toLocaleString('default', { month: 'short' });
      months.push(`${monthName}${i}`);
    }
  }
}


const data = [["Month", " ", "", ""]];

months.forEach(month => {
  const salesData = chartData.salesDataOfFinancialYear.find((entry: { month: string; }) => entry.month === month);
  const expenseData = chartData.expenseDataOfFinancialYear.find((entry: { month: string; }) => entry.month === month);

  const rowData = [
    { v: month, f: month },
    salesData ? salesData.totalSales : 0,
    salesData ? salesData.totalPaidSales : 0,
    expenseData ? expenseData.totalAmount : 0
  ];

  data.push(rowData);
});


  // const data = [
  //   ["Month", " ", "","",],
  //   [{ v: "Apr2023", f: "Apr 2023" }, 32535, 28985],
  //   [{ v: "May2023", f: "May 2023" }, 0, 0],
  //   [{ v: "Jun2023", f: "Jun 2023" }, 0, 0],
  //   [{ v: "Jul2023", f: "Jul 2023" }, 0, 0],
  //   [{ v: "Aug2023", f: "Aug 2023" }, 0, 0],
  //   [{ v: "Sep2023", f: "Sep 2023" }, 0, 0],
  //   [{ v: "Oct2023", f: "Oct 2023" }, 0, 0],
  //   [{ v: "Nov2023", f: "Nov 2023" }, 0, 0],
  //   [{ v: "Dec2023", f: "Dec 2023" }, 0, 0],
  //   [{ v: "Jan2024", f: "Jan 2024" }, 0, 0],
  //   [{ v: "Feb2024", f: "Feb 2024" }, 0, 0],
  //   [{ v: "Mar2024", f: "Mar 2024" }, 0, 0],
  // ];
  
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
      0: { color: "#2C8FF6" }, // Total Sales
      1: { color: "#35BD7A" }, // Total Receipts
      2: { color: "#F8612B" }, // Total Expenses
    },
    backgroundColor: "#143230",
  };

  return (
    <div className="flex items-center  justify-between">
      <div className="w-full">
        <Chart
          chartType="ComboChart"
          width="100%"
          height="305px"
          data={data}
          options={options}
        />
      </div>
      <div className="w-[200px] h-72 border-s text-white flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col justify-end">
          <p className="text-[13px] text-[#2C8FF6]">Total Sales</p>
          <h1 className="text-[19px]">₹{chartData?.totalSales?.totalSum||0}.00</h1>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-[13px] text-[#35BD7A]">Total Receipts</p>
          <h1 className="text-[19px]">₹{chartData?.totalReceipts?.totalSum||0}.00</h1>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-[13px] text-[#F8612B]">Total Expenses</p>
          <h1 className="text-[19px]">₹{chartData?.totalExpenses?.totalSum||0}.00</h1>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
