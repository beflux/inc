# Next.js + Vercel 移行計画

## 背景・目的
- 今後のウェブプロダクトを Next.js ベースで統一したい
- GitHub Pages はプライベートリポジトリに対応していないため Vercel に移行
- staging / production 環境の分離（PRベースのプレビューで対応）
- 今後の類似サイトのベース構成として活用

## 決定事項
- **Analytics**: Firebase Analytics を継続
- **staging 環境**: 専用ブランチは不要（PRベースのプレビューで対応）
- **ディレクトリ構造**: `src/` ディレクトリを使用

---

## Phase 1: Next.js への移行 ✅

### 1.1 プロジェクト構造の変更
- [x] Next.js 15 (App Router) のセットアップ
- [x] ディレクトリ構造の再編成
  ```
  src/
  ├── app/
  │   ├── layout.tsx      # ルートレイアウト
  │   ├── page.tsx        # トップページ（現App.tsx）
  │   └── globals.css     # グローバルスタイル
  ├── components/         # 将来のコンポーネント用
  └── lib/
      └── firebase.ts     # Firebase設定
  ```

### 1.2 設定ファイルの更新
- [x] `next.config.ts` の作成
- [x] `tsconfig.json` を Next.js 用に更新
- [x] `package.json` のスクリプト・依存関係を更新

### 1.3 Tailwind CSS の設定
- [x] `postcss.config.mjs` の作成
- [x] カスタムテーマ（色、フォント、アニメーション）の移行

### 1.4 コンポーネントの移行
- [x] `App.tsx` → `src/app/page.tsx` へ移行
- [x] メタデータ（title, description, OGP）の設定
- [x] favicon の設定
- [x] next/font による Inter フォントの最適化

### 1.5 Firebase の移行
- [x] 環境変数ファイル（`.env.local`）の作成
- [x] Firebase 設定を環境変数から読み込むよう変更
- [x] `.env.example` の作成（テンプレート用）

### 1.6 クリーンアップ（Vite 関連の削除）
- [x] `vite.config.ts` の削除
- [x] `.github/workflows/deploy.yml` の削除（GitHub Pages 用）
- [x] `public/CNAME` の削除
- [x] Vite 関連の依存関係を削除
- [x] `dist/` ディレクトリの削除
- [x] 旧 `src/main.tsx`, `src/App.tsx` の削除

---

## Phase 2: Vercel デプロイの設定

### 2.1 Vercel プロジェクトの作成
- [ ] Vercel アカウントの確認/作成
- [ ] GitHub リポジトリを Vercel に接続
- [ ] ビルド設定の確認（Next.js は自動検出）

### 2.2 環境変数の設定
- [ ] Production 用の環境変数を Vercel に登録

### 2.3 カスタムドメインの設定
- [ ] `beflux.jp` を Vercel に設定
- [ ] DNS レコードの更新（A / CNAME）
- [ ] SSL 証明書の確認（Vercel が自動発行）

---

## Phase 3: ブランチ戦略・環境分離

### 3.1 デプロイ戦略
```
main ブランチ      → Production (beflux.jp)
feature/* ブランチ → Preview (自動生成URL)
PR                → Preview (自動生成URL)
```

---

## Phase 4: ドキュメント更新

- [ ] `README.md` の更新（開発・デプロイ手順）

---

## Phase 5: 将来のベース構成として整備（オプション）

### 5.1 テンプレート化
- [ ] GitHub Template Repository として設定
- [ ] 汎用的な `.env.example` の整備

### 5.2 追加検討事項
- [ ] エラー監視（Sentry など）の導入

---

## 参考リンク

- [Next.js App Router ドキュメント](https://nextjs.org/docs/app)
- [Vercel デプロイガイド](https://vercel.com/docs/deployments/overview)
- [Vercel カスタムドメイン設定](https://vercel.com/docs/projects/domains)
- [Tailwind CSS + Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
