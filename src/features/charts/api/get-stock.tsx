import { api } from '@/lib/api-client';

export const GetStock = async () => {
  // TODO:API Routes経由でリクエストを送る前にTanstack Query経由でキャッシュの有無を確認する
  const response = await api.get<string>('/api/stock');
  return { response };
};
