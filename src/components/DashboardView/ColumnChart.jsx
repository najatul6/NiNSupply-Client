import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register the necessary chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const ColumnChart = () => {
  // Example data for the column chart
  const data = {
    labels: ["January", "February", "March", "April", "May"], // Labels for the x-axis (e.g., months)
    datasets: [
      {
        label: "Revenue (in USD)", // Label for the data series
        data: [400, 600, 800, 1200, 1500], // Values for each month
        backgroundColor: "#36A2EB", // Color of the bars
        borderColor: "#1E75D8", // Border color of the bars
        borderWidth: 1, // Border width for each bar
      },
    ],
  };

  // Options for the column chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Position the legend at the top
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Ensure the y-axis starts from zero
      },
    },
  };

  return (
    <div className="column-chart-container border">
      <h3>Monthly Revenue</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ColumnChart;
