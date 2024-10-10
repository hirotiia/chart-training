import { api } from '@/lib/api-client';
/**
 * @returns ランダムに銘柄コードを返却
 */
export const GetStock = async () => {
  const response = await api.get<{ hello: string }>('/api/stock');
  console.log(`response:${response}`);
  return { response };
};
