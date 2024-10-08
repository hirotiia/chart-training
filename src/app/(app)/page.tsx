import Link from 'next/link';

import { ContentLayout } from '@/components/layouts/content-layout';
import { Button } from '@/components/ui/button';
import { TextLead } from '@/components/ui/text';
import { config } from '@/config/config';

const TopPage = () => {
  return (
    <ContentLayout title={config.APP_NAME}>
      <TextLead className="mt-10 md:mt-14">
        ”本物”のチャートで利益を競え！ <br />
        本格トレードシミュレーションアプリ
      </TextLead>

      <p className="mt-8 text-center">
        <Link href="/about" className="text-accent2 hover:underline md:text-lg">
          ルールを知る
        </Link>
      </p>

      <div className="mt-20 flex flex-col items-center justify-center gap-8 md:flex-row">
        <Button size="sm" variant="secondary">
          ログイン
        </Button>

        <p className="relative flex w-full items-center before:absolute before:left-0 before:right-[calc(50%+2rem)] before:top-1/2 before:h-0.5 before:bg-white before:content-[''] after:absolute after:left-[calc(50%+2rem)] after:right-0 after:top-1/2 after:h-0.5 after:bg-white after:content-[''] md:hidden">
          <b className="mx-auto">まずは</b>
        </p>
        <Button size="sm">ゲームを始める</Button>
      </div>
    </ContentLayout>
  );
};

export default TopPage;
