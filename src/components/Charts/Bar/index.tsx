"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"bar"> = {
  plugins: {
    title: {
      display: true,
      text: "This is my tutorial chart",
      color: "blue",
      font: {
        size: 20,
        style: "italic",
      },
      position: "top",
      padding: {
        bottom: 40,
      },
      align: "end",
    },
    legend: {
      display: true,
    },
    tooltip: {
      backgroundColor: "black",
      animation: {
        duration: 500,
        easing: "easeInBounce",
      },
      borderWidth: 20,
      borderColor: "black",
    },
  },
  responsive: false,
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data: ChartData<"bar", number[], string> = {
  labels,
  datasets: [
    {
      label: "My Colors",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
