import { BaseLayout } from '@/components/layouts/base-layout';
import { config } from '@/config/config';

export const metadata = {
  title: config.APP_NAME,
  description: 'チャートレのTOPページです。',
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout>{children}</BaseLayout>;
}
