import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from "chart.js";
import useTotalRevenue from "@/hooks/useTotalRevenue";

// Register chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const PieChart = () => {
  const { totalRevenue, pendingRevenue, processingRevenue, completedRevenue } = useTotalRevenue();

  // Ensure values are numbers and default to 0 if undefined
  const revenueData = [
    totalRevenue || 0,
    pendingRevenue || 0,
    processingRevenue || 0,
    completedRevenue || 0,
  ];

  // Updated data with dynamic values
  const data = {
    labels: ["Total Revenue", "Pending Revenue", "Processing Revenue", "Completed Revenue"],
    datasets: [
      {
        data: revenueData, // Use fetched revenue data
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF4C5B", "#28A8D7", "#FFD54F", "#34D2D4"],
      },
    ],
  };

  // Options for the pie chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="pie-chart-container">
      <h3 className="text-lg font-semibold mb-2">Total Revenue Distribution</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
