import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { balanceHistoryData } from "../../../lib/transactions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  return (
    <Line
      options={{
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0,
          },
        },
        plugins: {
          legend: false,
          datalabels: false,
        },
        scales: {
          x: {
            grid: {
              drawOnChartArea: true,
            },
            border: {
              display: false,
              dash: [5, 5],
            },
          },
          y: {
            border: {
              dash: [5, 5],
              display: false,
            },
          },
        },
      }}
      data={{
        labels: balanceHistoryData.map((each) => each.month),
        datasets: [
          {
            fill: true,
            label: "balance",
            data: balanceHistoryData.map((each) => each.balance),
            backgroundColor: (context) => {
              const chart = context.chart;
              const { ctx, chartArea } = chart;
              if (!chartArea) return;
              var gradient = ctx.createLinearGradient(0, 0, 0, 400);
              gradient.addColorStop(0, "#2D60FF80");
              gradient.addColorStop(1, "#2D60FF00");
              return gradient;
            },

            borderColor: "#1814F3",
            lineTension: 0.4,
            strokeColor: "#ed7141",
          },
        ],
      }}
    />
  );
};

export default LineChart;
