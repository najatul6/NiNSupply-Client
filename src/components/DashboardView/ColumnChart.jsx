import Chart from "react-google-charts";

const ColumnChart = () => {
  const revenueByCategory = [
    ["Category", "Revenue (USD)", { role: "style" }],
    ["Electronics", 15000, "#4CAF50"], // Green
    ["Clothing", 12000, "#FF9800"], // Orange
    ["Home & Kitchen", 18000, "#2196F3"], // Blue
    ["Beauty & Health", 9000, "#E91E63"], // Pink
    ["Sports", 11000, "#9C27B0"], // Purple
  ];

  return (
    <>
      <Chart
        chartType="ColumnChart"
        data={revenueByCategory}
        options={{
          title: "Revenue by Product Category",
          backgroundColor: "#000",
          legend: { position: "none" },
          chartArea: { width: "80%", height: "70%" }, // Adjust chart size
          hAxis: {
            textStyle: { color: "#FFF", fontSize: 12 }, // White x-axis labels
            title: "Categories",
            titleTextStyle: { color: "#FFF", fontSize: 14 },
          },
          vAxis: {
            textStyle: { color: "#FFF", fontSize: 12 }, // White y-axis labels
            title: "Revenue (USD)",
            titleTextStyle: { color: "#FFF", fontSize: 14 },
            gridlines: { color: "#555" }, // Dark gray gridlines
          },
          bar: { groupWidth: "60%" }, // Adjust bar width
          titleTextStyle: { color: "#FFF", fontSize: 18 }, // White title
        }}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
};

export default ColumnChart;
