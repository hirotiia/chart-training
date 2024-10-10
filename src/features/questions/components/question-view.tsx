import { Card } from '@/components/ui/card';
import { api } from '@/lib/api-client';
import { getRandomDateRange } from '@/utils/get-random-date-range';

type QuestionViewProps = {
  id: string;
  title: string;
};

export const QuestionView = async ({ id, title }: QuestionViewProps) => {
  /** ランダムで銘柄コードを一つ取得する関数実行 */
  const symbol = '7203.T';

  /** ランダムで{from: ?? , to: ??}を返す関数実行 */
  const { from, to } = getRandomDateRange();
  console.log(symbol, from, to);

  /** クライアントキャッシュの確認、HTTPリクエストを送る */
  const { hello } = await api.get<{ hello: string }>('/api/stock');

  return (
    <Card title={title}>
      <p className="text-foregroundDark">{id}</p>
      <p className="text-foregroundDark">{hello}</p>
      {hello}
    </Card>
  );
};
