import { NextResponse } from 'next/server';

const GET = () => {
  /** ランダムに銘柄コードリストを取得→キャッシュ */
  /** 取得した銘柄コードで銘柄情報を取得→キャッシュ */

  /** チャートに表示するために必要な情報を返却 */
  return NextResponse.json({ hello: 'hello' });
};

export { GET };
