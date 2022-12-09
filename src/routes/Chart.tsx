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
          type="candlestick"
          series={[
            {
              // data: data?.map((price) => price.close) as number[],
              data: data?.map((price) => {
                return [
                  new Date(price.time_open).valueOf() * 1000,
                  price.open,
                  price.high,
                  price.low,
                  price.close,
                ];
              }) as [],
            },
          ]}
          options={
            {
              chart:{
                height:500,
                width:500,
                toolbar:{
                  show:false,
                },
                background: "transparent",
              },

              xaxis:{
                type:"datetime",
                labels: { show: false },
              },
            }
          }
        />
      )}
    </div>
  );
}

export default Chart;
