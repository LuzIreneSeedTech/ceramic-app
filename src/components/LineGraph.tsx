import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const dataProp = [
  { sampleName: "sample1", mc: 10, date: "03-01-2024" },
  { sampleName: "sample2", mc: 20, date: "03-01-2024" },
  { sampleName: "sample3", mc: 30, date: "04-01-2024" },
  { sampleName: "sample4", mc: 40, date: "05-01-2024" },
  { sampleName: "sample5", mc: 50, date: "05-01-2024" },
];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: "#e3e6ef",
        stepSize: 10,
      },
    },
    x: {
      ticks: {
        color: "#e3e6ef",
      },
    },
  },
};

const labels = dataProp.map((label) => label.sampleName);

export const data = {
  labels,
  datasets: [
    {
      label: "props data",
      data: dataProp.map((value) => value.mc),
      borderColor: "#e3e6ef",
      backgroundColor: "#e3e6ef",
    },
  ],
};

export function LineGraph() {
  return <Line className="line-graph" options={options} data={data} />;
}
