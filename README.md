# BeFlux, Inc. ウェブサイト

https://beflux.jp

BeFlux, Inc. の公式ウェブサイトです。

- [デザインコンセプト](./DESIGN.md)

## 技術スタック

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Firebase Analytics

## 開発

### 環境変数の設定

```bash
cp .env.example .env.local
```

`.env.local` を編集して Firebase の設定値を入力してください。

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

http://localhost:3000 でサイトが表示されます。

### ビルド

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## デプロイ

Vercel へのデプロイは GitHub Actions で自動化されています。

| ブランチ / イベント | デプロイ先 |
|---------------------|------------|
| `main` へ push | Production (beflux.jp) |
| PR 作成 | Preview (自動生成URL) |

### 環境変数

Vercel ダッシュボードで以下の環境変数を設定してください:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

### GitHub Secrets

GitHub Actions でのデプロイに必要な Secrets:

- `VERCEL_TOKEN` - Vercel API トークン
- `VERCEL_ORG_ID` - Vercel Organization ID
- `VERCEL_PROJECT_ID` - Vercel Project ID

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx      # ルートレイアウト
│   ├── page.tsx        # トップページ
│   └── globals.css     # グローバルスタイル
├── components/         # React コンポーネント
└── lib/
    └── firebase.ts     # Firebase 設定
```
