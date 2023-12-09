const ChartThree: React.FC = (props) => {

  return (
    <div className="flex flex-col col-span-12 h-80 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
                  <h5 className="text-md font-semibold text-black dark:text-white">
            <span className="text-meta-1"> Today </span>{props.title}
          </h5>
        </div>

      </div>

      <div className=" w-full h-full">
              <div id="chartThree" className="mx-auto flex justify-center h-full items-center">
                  <div className="flex flex-col justify-center items-center gap-5 font-bold">
                      <span className="text-8xl ">{ props.totalShow}</span>
                      {
                          props.detailLabel ? <span className="uppercase">of <span className="text-meta-3">{props.totalPerson ? props.totalPerson : 0}</span> person</span>  : <span className="capitalize">Person</span>
                      }
                       
                  </div>
        </div>
      </div>
    </div>
  );
};

export default ChartThree;