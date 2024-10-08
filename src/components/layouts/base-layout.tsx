'use client';

import { SquareMenu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/utils/cn';

const Logo = () => {
  return (
    <Link className="flex items-center gap-3" href="/">
      <Image
        className="h-10 w-auto md:h-12"
        alt="チャートレアイコン"
        src="/logo.svg"
        width="80"
        height="80"
      />
      <span className="bg-text-gradient bg-clip-text text-lg font-bold text-transparent">
        チャートレ
      </span>
    </Link>
  );
};

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navigationList = [
    { name: 'ルール', to: '/about' },
    { name: 'ゲーム', to: '/game' },
    /** 以下ログイン済みの場合 */
    { name: '取引履歴', to: '/history' },
    { name: 'ランキング', to: '/ranking' },
    { name: 'ログイン', to: '/login' },
  ].filter(Boolean);

  return (
    <div className="grid min-h-screen-dvh grid-cols-custom-layout gap-4">
      <div className="relative col-span-3 grid grid-cols-custom-layout gap-custom-gap before:absolute before:inset-0 before:-z-10 before:size-full before:bg-gradient-custom">
        <div className="relative col-start-2 grid h-full grid-rows-[1fr_auto]">
          <header className="fixed left-1/2 mt-6 w-content max-w-screen-xl -translate-x-1/2 md:w-content-pc">
            <div className="mx-auto flex justify-between rounded-full bg-white/70 px-8 py-3 shadow-lg backdrop-blur-glass">
              <div className="">
                <Logo />
              </div>
              <button
                className="my-auto flex size-8 flex-col items-center justify-center space-y-1.5 md:hidden"
                type="button"
                aria-expanded={isOpen ? true : false}
                aria-controls="hamburger-menu"
                onClick={() => setIsOpen(!isOpen)}
              >
                <SquareMenu
                  className={cn(
                    'absolute w-6 h-6 text-foregroundDarkBlue transition-transform',
                    isOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0',
                  )}
                />
                <X
                  className={cn(
                    'absolute w-6 h-6 text-foregroundDarkBlue transition-transform',
                    isOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-45',
                  )}
                />
                <span className="sr-only">ナビゲーションメニュー</span>
              </button>
              <nav className="hidden md:block">
                <ul className="flex h-full items-center gap-4">
                  {navigationList.map((item) => {
                    const isCurrent = pathname === item.to;

                    return (
                      <li className="" key={item.name}>
                        <Link
                          className={cn(
                            'text-foregroundDarkBlue font-bold hover:text-muted transition-colors',
                            isCurrent && 'text-muted',
                          )}
                          href={item.to}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="py-8">
            <p className="text-right">
              <small>© Hrioya Nakano 2024</small>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};
