import { Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";

import { pieChartDatasets, pieChartOptions } from "../../../lib/transactions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const PieChart = () => {
  return (
    <Pie
      plugins={[ChartDataLabels]}
      options={pieChartOptions}
      data={pieChartDatasets}
    />
  );
};

export default PieChart;
