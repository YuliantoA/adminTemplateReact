import React, { useState } from 'react';

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
import 'chartjs-plugin-stacked100';

import ChartjsPluginStacked100 from 'chartjs-plugin-stacked100';
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
  ChartjsPluginStacked100,
);

const ChartFour: React.FC = (props) => {
  const options = {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
        reverse: true,
        position: 'bottom',
      },
      stacked100: {
        // stacked chart plugin
        enable: true, // enable or disable the stacked chart
        replaceTooltipLabel: false, // set to false to disable override of the tooltip values
        axisId: 'y',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        border: {
          display: props.grid,
        },
        stacked: true,
        grid: {
          drawOnChartArea: false,
        },
      },
      y1: {
        border: {
          display: false,
        },
        display: true,
        position: 'right' as const,
        stacked: false,
        ticks: {
          color: 'red',
          // forces step size to be 50 units
          stepSize: props.stepSize,
        },
        title: {
          display: true,
          text: 'Total',
          color: '#911',
          font: {
            family: 'Comic Sans MS',
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
          padding: { top: 20, left: 0, right: 0, bottom: 0 },
        },
        grid: {
          drawOnChartArea: props.grid,
        },
      },
      y: {
        stacked: true,
        type: 'linear' as const,
        display: true,
        min: 0,
        max: 100,
        border: {
          display: false,
        },
        ticks: {
          color: 'red',
          // forces step size to be 50 units
          stepSize: 20,
        },
        position: 'left' as const,
        title: {
          display: true,
          text: 'Percentage',
          color: '#911',
          font: {
            family: 'Comic Sans MS',
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
          padding: { top: 20, left: 0, right: 0, bottom: 0 },
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const colors =
    props.title === 'Attendance Daily'
      ? [
          '#4f81af',
          '#ffbc79',
          '#5c5c61',
          '#86b4a9',
          '#82853b',
          '#39737c',
          '#DC3545',
          '#259AE6',
          '#cb13f0',
        ]
      : [
          '#4f81af',
          '#ffbc79',
          '#fc2d2f',
          '#5c5c61',
          '#4f81af',
          '#ffbc7a',
          '#fc2d2f',
          '#5c5c61',
          '#cb13f0',
        ];
  const linePointStyle = ['circle', 'rectRot', 'rect', 'triangle'];
  const labels = Array();
  const yAxis = Array();
  const series = Array();

  let i = 0;
  Object.keys(props.data).map((value) => {
    let objTemp = {};
    Object.values(props.data[value]).map((x) => yAxis.push(x));
    if (i < props.separatorBar) {
      objTemp = {
        label: value,
        data: [...yAxis],
        type: 'bar' as const,
        backgroundColor: colors[i],
        stack: 'stack1',
        yAxisID: 'y',
        borderWidth: 1,
        borderColor: 'white',
      };
    } else {
      objTemp = {
        label: value,
        data: [...yAxis],
        type: 'line' as const,
        backgroundColor: colors[i],
        borderColor: colors[i],
        fill: true,
        yAxisID: 'y1',
        pointRadius: 6,
        pointStyle: linePointStyle[i - props.separatorBar],
        lineTension: 0.5,
        pointHoverRadius: 5,
      };
    }
    series.push(objTemp);
    yAxis.length = 0;
    i++;
  });
  Object.keys(props.data[Object.keys(props.data)[0]]).map((x) =>
    labels.push(props.title === 'Attendance Daily' ? x : x.split('-')),
  );
  const chartData = {
    labels,
    datasets: series.toReversed(),
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div>
        <h3 className="text-xl font-semibold text-black dark:text-white">
          {props.title}
        </h3>
      </div>

      <div className="mb-2">
        <div id="chartFour" className="-ml-5 relative h-[24rem] w-full">
          <Chart type="bar" data={chartData} options={options} />;
        </div>
      </div>
    </div>
  );
};

export default ChartFour;
