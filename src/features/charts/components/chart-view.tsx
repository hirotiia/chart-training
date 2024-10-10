import { GetStock } from '../api/get-stock';

export const ChartView = async () => {
  // ランダムに銘柄キーを渡す
  // ランダムに期間を指定、そこから一ヶ月間の期間を渡す
  const { response } = await GetStock();
  console.log(response);
  return <p className="text-foregroundDark">{response.hello}</p>;
};
