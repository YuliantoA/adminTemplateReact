import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

// interface ChartThreeState {
//   series: number[];
//   fill: number;
//   total: number;
//   title: String;
//   showFormatter: Boolean;
//   label:String[]
// }



const ChartThree: React.FC = (props) => {
  const {fill,total} = props
const options: ApexOptions = {
  chart: {
    type: 'donut',
  },
  colors: [ '#375E83','#FFA70B'],
  labels: props.label,
  
  legend: {
    show: false,
    position: 'bottom',
  },

  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: '65%',
        labels: {
          show: true,
          
          total: {
            showAlways: true,
            show: true,
            label:`${((fill/total) *100).toFixed(2)}%`,
              fontSize: '26px',
            fontWeight:600,
            formatter: (w) => {
              if (props.showFormatter) {
                return `${props.fill} / ${props.total} Person`
              }
              return ''
            }
          }
        },
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 310,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

  return (
    <div className="col-span-12 h-80 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-md font-semibold text-black dark:text-white">
            <span className="text-meta-1"> Today </span>{props.title}
          </h5>
        </div>

      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center text-5xl rotateY180">
          <ReactApexChart
            options={options}
            series={[props.fill,props.total - props.fill]}
            
            type="donut"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartThree;