import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import styled from "styled-components";

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

interface PriceProps {
  coinId: string;
}

const List = styled.div`
  margin: 20px;
  margin-top: 50px;
  padding: 7px 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.tabColor};
  font-size: 18px;
  ul {
    margin: 10px;
    margin-left: 10px;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: space-between;
  }
`;

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <h1>
      {isLoading ? (
        "Loading..."
      ) : (
        <List>
          <ul>
            <span>prev open price:</span>
            <span>${data?.[0].open}</span>
          </ul>
          <ul>
            <span>prev high price:</span>
            <span>${data?.[0].high}</span>
          </ul>
          <ul>
            <span>prev low price:</span>
            <span>${data?.[0].low}</span>
          </ul>
          <ul>
            <span>prev close price:</span>
            <span>${data?.[0].close}</span>
          </ul>
          <ul>
            <span>prev volume:</span>
            <span>{data?.[0].volume}</span>
          </ul>
          <ul>
            <span>3 weeks lowest price:</span>
            <span>
            ${Math.min(...(data?.map((price) => Number(price.close)) ?? []))}
            </span>
          </ul>
          <ul>
            <span>3 weeks highest price:</span>
            <span>
            ${Math.max(...(data?.map((price) => Number(price.high)) ?? []))}
            </span>
          </ul>
        </List>
      )}
    </h1>
  );
}

export default Price;
