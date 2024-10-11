import { api } from '@/lib/api-client';
import { getRandomDateRange } from '@/utils/get-random-date-range';

import 'dotenv/config';

export const GetStock = async () => {
  const { from, to } = getRandomDateRange();
  console.log(from, to);
  const requestUrl = `/symbol`;
  console.log(requestUrl);
  console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
  console.log('API KEY:', process.env.FINNHUB_API_KEY);
  // TODO:初回銘柄情報のリストを取得、キャッシュしておく
  const data = await api.get<Response>(requestUrl, {
    params: { exchange: 'US', token: process.env.FINNHUB_API_KEY },
  });

  console.log(`response: ${data}`);

  // const stocks = data.filter((stock) => stock.type === 'common stock');
  // TODO:リストの中から５つランダムで選択。並列で株データを取得してレスポンスを返す。キャッシュしておく

  return data;
};
