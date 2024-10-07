import { BaseLayout } from '@/components/layouts/base-layout';

export const metadata = {
  title: 'チャートレ',
  description: 'チャートレのTOPページです。',
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout>{children}</BaseLayout>;
}
