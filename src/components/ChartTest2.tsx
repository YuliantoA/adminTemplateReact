import { Chart, Bar } from "react-chartjs-2";
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
import ChartjsPluginStacked100 from "chartjs-plugin-stacked100";

ChartJS.register(ChartjsPluginStacked100);

const ChartTest2 = (props: any) => {
  return (
    <>
      {
        <div>
          <Bar
            data={{
              labels: ["Foo", "Bar"],
              datasets: [
                { label: "bad", data: [5, 25], backgroundColor: "rgba(244, 143, 177, 0.6)" },
                { label: "better", data: [15, 10], backgroundColor: "rgba(255, 235, 59, 0.6)" },
                { label: "good", data: [10, 8], backgroundColor: "rgba(100, 181, 246, 0.6)" },
              ],
            }}
            options={{
              //@ts-ignore
              indexAxis: "y",
              plugins: {
                stacked100: { enable: true },
              },
            }}
          />
        </div>
      }
    </>
  );
};
export default ChartTest2;