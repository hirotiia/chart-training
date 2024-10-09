import { GetStock } from '../api/get-stock';

export const ChartView = async () => {
  const { response } = await GetStock();
  return <div className="">{response}</div>;
};
