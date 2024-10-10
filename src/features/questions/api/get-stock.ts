import { api } from '@/lib/api-client';
/**
 * @param symbol 銘柄コード
 * @param resolution データ時間解像度
 * @param from 開始日時
 * @param to 終了日時
 * @returns Reaponse
 */
export const GetStock = async () => {
  // TODO:API Routes経由でリクエストを送る前にTanstack Query経由でキャッシュの有無を確認する
  const response = await api.get<{ hello: string }>('/api/stock');
  console.log(`response:${response}`);
  return { response };
};
