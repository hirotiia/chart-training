import type { Metadata } from 'next';

import '@/styles/globals.css';
import { config } from '@/config/config';

import { AppProvider } from './provider';

export const metadata: Metadata = {
  title: config.APP_NAME,
  description:
    '”本物”のチャートを使用して手軽に株の売買ができる短期投資シミュレーションアプリ”チャートレ”',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
