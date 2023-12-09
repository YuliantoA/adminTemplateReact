import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartBarStack: React.FC = (props) => {


const options: ApexOptions = {

              
  chart: {
                width:1000,
                height: 550,
    type: 'line',
                stacked:true,
                
              },
              stroke: {
                width: 4
              },
              title: {
                text: 'Traffic Sources'
              },
              dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
              },
              labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
              xaxis: {
                type: 'datetime'
              },
  yaxis: [
    {
                title: {
                  text: 'Website Blog',
                },
              
    }, {
                seriesName: 'Social Media',
                opposite: true,
                title: {
                  text: 'Social Media'
                }
    }
    // {
                //   axisTicks: {
                //     show: true,
                //   },
                //   axisBorder: {
                //     show: true,
                //     color: '#008FFB'
                //   },
                //   labels: {
                //     style: {
                //       colors: '#008FFB',
                //     }
                //   },
                //   title: {
                //     text: "percentage",
                //     style: {
                //       color: '#008FFB',
                //     }
                //   },
                //   tooltip: {
                //     enabled: true
                //   }
                // },
                // {
                //   seriesName: 'Social Media',
                //   opposite: true,
                //   axisTicks: {
                //     show: true,
                //   },
                //   axisBorder: {
                //     show: true,
                //     color: '#00E396'
                //   },
                //   labels: {
                //     style: {
                //       colors: '#00E396',
                //     }
                //   },
                //   title: {
                //     text: "Operating Cashflow (thousand crores)",
                //     style: {
                //       color: '#00E396',
                //     }
                //   },
                // },
  ]
          
            
};

  return (
    <div className="col-span-12 h-100 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            <span className="text-meta-1"> Today </span>
          </h5>
        </div>

      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center text-5xl w-full">
          <ReactApexChart
            options={options}
            type='line'
            height={300}
            width={750}
            series= {[{
              name: 'Website Blog',
              type: 'column',
              data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
            },{
              name: 'Website x',
              type: 'column',
              data: [20, 25, 4, 51, 436, 413, 201, 352, 752, 320, 257, 160]
            },  {
              name: 'Social Media',
              type: 'line',
              data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
            }]}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartBarStack;
