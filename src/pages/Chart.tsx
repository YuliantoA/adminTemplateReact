import ChartFour from '../components/ChartFour';
import ChartThree from '../components/ChartThree.tsx';
import ChartAttend from '../components/ChartAttend.tsx';
import ChartPlain from '../components/ChartPlain.tsx';
import dataJSONLeft from '../file/dummy chart interview 1.json';
import dataJSONRight from '../file/dummy chart interview 2.json';

const Chart = () => {
  return (
    <>
      {/* <Breadcrumb pageName="Chart" /> */}
      <div className="flex gap-2 ">
        <div className="w-4/12">
          <div className="grid grid-cols-12 gap-2 md:gap-6 2xl:gap-2">
            {Object.entries(dataJSONLeft).map(([key, value]) => {
              if (key === 'Card On Duty') {
                return (
                  <div key={key} className="col-span-6  ">
                    <ChartThree
                      total={value.Total}
                      fill={value['On Duty']}
                      showFormatter={false}
                      title={key?.split(' ').toSpliced(0, 1).join(' ')}
                      label={['Off Duty', 'On Duty']}
                    />
                  </div>
                );
              } else if (key === 'Card Attendance') {
                return (
                  <div key={key} className="col-span-6">
                    <ChartAttend
                      total={value.Total}
                      fill={value['Attend']}
                      showFormatter={true}
                      title={key?.split(' ').toSpliced(0, 1).join(' ')}
                      label={['Skip', 'Attend']}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={key} className="col-span-6">
                    <ChartPlain
                      title={key?.split(' ').toSpliced(0, 1).join(' ')}
                      totalShow={
                        value['Total feed'] ||
                        value['Total Patrol'] ||
                        value['Total person'] ||
                        0
                      }
                      detailLabel={
                        key?.split(' ').toSpliced(0, 1).join(' ') ===
                        'Feed Activity'
                          ? true
                          : false
                      }
                      totalPerson={value['Total person']}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="w-8/12">
          <div className="grid grid-cols-12 grid-rows-2 gap-4 md:gap-6 2xl:gap-7.5">
            {Object.entries(dataJSONRight).map(([key, value]) => {
              return (
                <div key={key} className="col-span-12">
                  <ChartFour
                    data={value}
                    title={key}
                    separatorBar={key === 'Attendance Daily' ? 3 : 4}
                    stepSize={key === 'Attendance Daily' ? 25 : 8}
                    grid={key === 'Attendance Daily' ? false : true}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
