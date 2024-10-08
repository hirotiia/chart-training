# チャートレ

このアプリケーションは、ユーザーが株価のテクニカル分析スキルを楽しみながら向上させることができる教育的なゲームです。<br>
実際の日本株の株価チャートを使用し、ユーザーは短期的な価格変動を予測する練習を行います。

## 目次

- [アプリの特徴](#heading-01)
- [使用するメリット](#heading-02)
- [技術スタック](#heading-03)
- [インストール](#heading-04)
- [使い方](#heading-05)
- [ライセンス](#heading-06)
- [プロジェクトの構成](#heading-07)
- [注意](#heading-08)
- [その他ドキュメント](#heading-09)

<h2 id="heading-01">アプリの特徴</h2>

1. 実際の株価データを基にしたチャート表示
1. 「買い」「売り」「様子を見る」の3つの選択肢
1. レバレッジ機能で、リスクと報酬のバランスを学習
1. 5問のランダム出題で、多様な市場状況を体験
1. スコアリングシステムで進捗を可視化
1. ランキング機能で他のユーザーと競争可能

<h2 id="heading-02">使用するメリット</h2>

1. 実践的な学習：
   実際の市場データを使用することで、現実の相場環境での判断力が養えます。

1. リスク管理の理解：
   レバレッジ機能を通じて、リスクとリターンの関係を実感的に学べます。

1. 分析スキルの向上：
   繰り返しプレイすることで、チャートパターンの認識力や相場感覚が向上します。

1. 無リスクな練習環境：
   実際の資金を使わずに、株式投資の基本を学ぶことができます。

1. モチベーション維持：
   ゲーム形式とスコアリングシステムにより、楽しみながら継続的に学習できます。

1. 競争と成長：
   ランキング機能により、他のユーザーと競い合いながら成長できます。

1. 時間効率の良い学習：
   短時間で複数の銘柄や相場状況を経験でき、効率的にスキルアップできます。

1. 自己分析の促進：
   プレイ履歴やスコアの推移を通じて、自身の判断傾向や弱点を把握できます。

1. マーケット感覚の養成：
   様々な銘柄や相場状況に触れることで、幅広い市場感覚を養うことができます。

1. 投資への興味喚起：
   ゲーム感覚で株式投資に触れることで、金融リテラシーの向上や投資への興味を促進します。

<h2 id="heading-03">技術スタック</h2>
<p style="display: inline">
  <!-- フロントエンドのフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge">
</p>

### nodeバージョン

- node v20.16.0
- npm v10.8.1

### 使用言語/フレームワーク

| 言語・フレームワーク | バージョン |
| -------------------- | ---------- |
| Node.js              | 20.16.0    |
| React.js             | 18.3.1     |
| Redux                | -          |
| Redux-toolkit        | -          |
| Next.js              | 14.2.5     |
| TailwindCSS          | 3.4.6      |
| Prisma               | 5.18.0     |
| NextAuth             | 4.24.7     |
| Supabase             | -          |

| チャートの表示 | バージョン |
| -------------- | ---------- |
| recharts       | -          |

| API               | バージョン |
| ----------------- | ---------- |
| Yahoo Finance API | -          |

| デプロイ            |
| ------------------- |
| Vercel 　　　　　　 |

<h2 id="heading-04">インストール</h2>

```bash
npm i
```

開発に必要なライブラリがインストールされます。

<h2 id="heading-05">使い方</h2>

```bash
npm run dev

```

http://localhost:3000 でローカルサーバーが立ち上がります。

<h2 id="heading-06">ライセンス</h2>

チャートレ is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).

<h2 id="heading-07">プロジェクトの構成</h2>

```
src
|
+-- app               # ルーティングに関わるファイル
|
+-- components        # アプリケーション全体で使用される共有コンポーネント
|
+-- config            # グローバルに使用する定数を格納
|
+-- features          # 機能ベースのモジュール（各機能のフォルダには、その機能に特化したコードを入れ分けておく）
|
+-- hooks             # アプリケーション全体で使用される共有フック
|
+-- lib               # アプリケーション用にあらかじめ設定された再利用可能なライブラリ
|
+-- stores            # グローバルステートの管理
|
+-- styles            # global.css
|
+-- test              # テスト
|
+-- types             # アプリケーション全体で使用される共有タイプ
|
+-- utils             # 汎用的に使える関数
```

<h2 id="heading-08">注意</h2>

<ul>
<li>componentディレクトリ内でデータの取得は行わないでください。</li>
<li>できる限りページでデータの取得を行うようにし、コンポーネントはpropsを受け取るだけにとどめてください。</li>
</ul>

<h2 id="heading-09">その他ドキュメント</h2>

- [開発者向け情報](/developer.md)
- [アプリケーションアーキテクチャ](/design-pattern.md)
- [パフォーマンスを上げるための施策](/performance.md)
