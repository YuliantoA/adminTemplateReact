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

interface ChartFourState {
  series: { data: number[] }[];
}

const ChartFour: React.FC = (props) => {


  const options = {
    plugins: {
    legend: {
        labels: {
        usePointStyle: true,
        },
      reverse:true,
      position :'bottom'
      },
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
  
  const colors= ['#3C50E0','#FFA70B','#1B0606','#1f7d25','#7d1f4e','#1f6f7d','#DC3545','#259AE6','#cb13f0']
  const labels = Array()
  const yAxis = Array()
  const series = Array()
 
  let i = 0
  Object.keys(props.data).map((value) => {
    let objTemp = {}
    Object.values(props.data[value]).map(x => yAxis.push(x))
    if (i < props.separatorBar) {
      objTemp = { label: value, data: [...yAxis],type:'bar' as const, backgroundColor: colors[i],stack: "stack1",yAxisID: 'y' }
    } else {
      objTemp = { label: value, data: [...yAxis],type:'line' as const, borderColor: colors[i],fill: true,yAxisID: 'y1',pointRadius: 5,
pointHoverRadius: 5 } 
    }
    series.push(objTemp)
    yAxis.length = 0
    i++
  })
  Object.keys(props.data[Object.keys(props.data)[0]]).map(x => labels.push(x))
  const chartData = {
    labels,
    datasets: series.toReversed()
   }
  console.log(chartData)
  
  
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div>
        <h3 className="text-xl font-semibold text-black dark:text-white">
          {props.title}
        </h3>
      </div>

      <div className="mb-2">
        <div id="chartFour" className="-ml-5">

           <Chart type='bar' data={chartData} options={options} />;
        </div>
      </div>
    </div>
  );
};

export default ChartFour;
