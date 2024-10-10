import { Card } from '@/components/ui/card';

import { GetStock } from '../api/get-stock';

type QuestionViewProps = {
  id: string;
  title: string;
};

export const QuestionViews = async ({ id, title }: QuestionViewProps) => {
  /** クライアントキャッシュの確認、HTTPリクエストを送る */
  const data = await GetStock();

  return (
    <Card title={title}>
      <p className="text-foregroundDark">{id}</p>
      <p className="text-foregroundDark">{data}</p>
    </Card>
  );
};
