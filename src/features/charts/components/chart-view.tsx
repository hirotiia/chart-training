import { GetStock } from '../api/get-stock';

export const ChartView = async () => {
  const { response } = await GetStock();
  console.log(response);
  return <p className="text-foregroundDark">{response.hello}</p>;
};
