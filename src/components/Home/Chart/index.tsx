"use client";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  ChartData,
} from "chart.js";

// Register the scales and other components
ChartJS.register(
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const data: ChartData<"line", number[], string> = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      backgroundColor: "Teal",
      data: [10, 5, 12, 24, 42, 25, 59, 18, 78, 90],
      label: "Users",
    },
  ],
};

const data2: ChartData<"pie", number[], string> = {
  labels: ["Verified", "Active", "Non-Active"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
const Chart = () => {
  return (
    <div className="mt-12 flex items-center  gap-4">
      <div className="h-[400px] flex-[1]">
        <Line data={data} options={options} />
      </div>
      <div className="h-[400px] flex-[1]">
        <Pie data={data2} options={options} />
      </div>
    </div>
  );
};

export default Chart;
