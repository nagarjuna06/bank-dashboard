import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { barChartDataset, barChartOptions } from "../../../lib/transactions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  return (
    <Bar
      options={barChartOptions}
      // data={data}
      data={barChartDataset}
    />
  );
};

export default BarChart;
