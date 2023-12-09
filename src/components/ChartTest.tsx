import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import "chartjs-plugin-stacked100";

import ChartjsPluginStacked100 from "chartjs-plugin-stacked100";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  ChartjsPluginStacked100
);


const labels = ["2023-10-01",
"2023-10-02",
"2023-10-03",
"2023-10-04",
"2023-10-05",
"2023-10-06",
"2023-10-07",
"2023-10-08",
"2023-10-09",
"2023-10-10",
"2023-10-11",
"2023-10-12",
"2023-10-13",
"2023-10-14",
"2023-10-15",
"2023-10-16",
"2023-10-17",
"2023-10-18",
"2023-10-19",
"2023-10-20",
"2023-10-21",
"2023-10-22",
"2023-10-23",
"2023-10-24",
"2023-10-25",
"2023-10-26",
"2023-10-27",
"2023-10-28",
"2023-10-29",
"2023-10-30",
"2023-10-31"];
export const options = {
  plugins: {
    stacked100: {
      // stacked chart plugin
      enable: true, // enable or disable the stacked chart
      replaceTooltipLabel: false, // set to false to disable override of the tooltip values
      axisId:'y'
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
 
    },
    y1: {
      display: true,
      position: 'right' as const,
      stacked:false,
      grid: {
        drawOnChartArea: false,
      },
    },
    y: {
      stacked: true,
      type: 'linear' as const,
      display: true,
      min:0,max:100,
      position: 'left' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};
export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      fill: false,
      yAxisID: 'y1',
      data: [0, 6, 16, 26, 43, 45, 45, 54, 66, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68],
    },
    {
      type: 'line' as const,
      label: 'Dataset 6',
      borderColor: 'rgb(55, 99, 132)',
      borderWidth: 2,
      fill: false,
      yAxisID: 'y1',
      data: [0, 14, 18, 21, 22, 24, 24, 24, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    },
    {
      type: 'line' as const,
      label: 'Dataset 7',
      borderColor: 'rgb(185, 99, 132)',
      borderWidth: 2,
      fill: false,
      yAxisID: 'y1',
      data: [7, 13, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    },
    {
      type: 'bar' as const,
      label: 'Dataset 2',
      backgroundColor: 'rgb(175, 192, 192)',
      stack: "stack1",
      data: [0, 6, 10, 10, 17, 2, 0, 9, 12, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: 'white',
      yAxisID: 'y',
    },
    {
      type: 'bar' as const,
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      stack: "stack1",
      yAxisID: 'y',
      data: [0, 14, 4, 3, 1, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      type: 'bar' as const,
      label: 'Dataset 4',
      backgroundColor: 'rgb(123, 162, 235)',
      stack: "stack1",
      yAxisID: 'y',
      data: [7, 6, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ],
};

export function ChartTest() {
  return <Chart type='bar' data={data} options={options} />;
}
