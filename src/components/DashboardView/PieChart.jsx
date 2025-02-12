import Chart from "react-google-charts";

const PieChart = () => {
    const orderStatusData = [
      ["Order Status", "Count"],
      ["Pending", 35],
      ["Processing", 20],
      ["Completed", 50],
    ];
  
    return (
      <>
        <Chart
          chartType="PieChart"
          data={orderStatusData}
          options={{
            title: "Order Status Distribution",
            backgroundColor: "#000",
            colors: ["#FFC107", "#17A2B8", "#28A745", "#DC3545", "#6C757D"], // Custom colors
            pieHole: 0.4, // Donut chart style
            is3D: false,
            legend: { textStyle: { color: "#FFF", fontSize: 14 } }, // White legend text
            titleTextStyle: { color: "#FFF", fontSize: 18 }, // White title text
          }}
          width={"100%"}
          height={"400px"}
        />
      </>
    );
  };
  
  export default PieChart;
  