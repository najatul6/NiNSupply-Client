import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from "chart.js";
import useTotalRevenue from "@/hooks/useTotalRevenue";

// Register chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const PieChart = () => {
    const { totalRevenue } = useTotalRevenue();
  // Example data for the pie chart
  const data = {
    labels: ["Total Revenue", "Pending Revenue", "Processing Revenue", "Completed Revenue"],
    datasets: [
      {
        data: [300, 50, 150, 500], // The data values for each slice of the pie
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"], // Colors for each slice
        hoverBackgroundColor: ["#FF4C5B", "#28A8D7", "#FFD54F", "#34D2D4"], // Hover colors for each slice
      },
    ],
  };

  // Options for the pie chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Position the legend at the top
      },
    },
  };

  return (
    <div className="pie-chart-container max-w-md">
      <h3>Total Revenue Distribution</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
