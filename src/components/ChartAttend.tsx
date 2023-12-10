import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

interface ChartAttendProps {
  total: number;
  fill: number;
  showFormatter: Boolean;
  title: String;
  label: string[];
}

const ChartAttend = ({
  total,
  fill,
  showFormatter,
  title,
  label,
}: ChartAttendProps) => {
  const options: ApexOptions = {
    chart: {
      type: 'donut',
    },
    colors: ['#375E83', '#FFA70B'],
    labels: label,

    legend: {
      show: false,
      position: 'bottom',
    },

    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%',
          labels: {
            show: true,

            total: {
              showAlways: true,
              show: true,
              label: `${((fill / total) * 100).toFixed(2)}%`,
              fontSize: '26px',
              fontWeight: 600,
              formatter: (w) => {
                if (showFormatter) {
                  return `${fill}/${total} Person`;
                }
                return '';
              },
            },
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
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  total: {
                    fontSize: '24px',
                  },
                },
              },
            },
          },
        },
      },
      {
        breakpoint: 1400,
        options: {
          chart: {
            width: 280,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  total: {
                    fontSize: '24px',
                  },
                },
              },
            },
          },
        },
      },
      {
        breakpoint: 1280,
        options: {
          chart: {
            width: 240,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  total: {
                    fontSize: '24px',
                  },
                },
              },
            },
          },
        },
      },
      {
        breakpoint: 1024,
        options: {
          chart: {
            width: 200,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  total: {
                    fontSize: '18px',
                  },
                },
              },
            },
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 150,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  total: {
                    fontSize: '10px',
                  },
                },
              },
            },
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 140,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  total: {
                    fontSize: '10px',
                  },
                },
              },
            },
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
            <span className="text-meta-1"> Today </span>
            {title}
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div
          id="ChartAttend"
          className="mx-auto flex justify-center text-5xl rotateY180"
        >
          <ReactApexChart
            options={options}
            series={[fill, total - fill]}
            type="donut"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartAttend;
