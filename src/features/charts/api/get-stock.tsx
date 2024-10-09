import { api } from '@/lib/api-client';

export const GetStock = async () => {
  const response = await api.get<string>('/api/stock');
  return { response };
};
