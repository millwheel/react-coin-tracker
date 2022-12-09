import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface CharProps {
  coinId: string;
}

function Chart({ coinId }: CharProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => Number(price.close)) ?? [],
            },
          ]}
          options={
            {
              theme: {
                mode: "dark",
              },
              chart: {
                height: 500,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                axisTicks: { show: false },
                labels: { show: false },
                categories: data?.map((price) => price.time_close),
              },
              stroke: {
                curve: "smooth",
              },
              fill: {
                type: "gradient",
                gradient: {
                  type: "vertical",
                  gradientToColors: ["red"],
                  stops: [0, 100],
                },
              },
              colors: ["blue"],
              tooltip: {
                y: {
                  formatter: (value) => `${value.toFixed(3)}`,
                },
              },
            }
          }
        />
      )}
    </div>
  );
}

export default Chart;
