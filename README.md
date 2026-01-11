# BeFlux, Inc. ウェブサイト

BeFlux, Inc. の公式ウェブサイトです。

## 技術スタック

- React 19
- TypeScript
- Vite

## 開発

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

http://localhost:5173 でサイトが表示されます。

### ビルド

```bash
npm run build
```

`dist` ディレクトリに成果物が出力されます。

## デプロイ

GitHub Pagesへのデプロイは自動化されています。
`main` ブランチにプッシュすると、GitHub Actions が自動的にビルドとデプロイを行います。

## カスタムドメインの設定

beflux.jp などのカスタムドメインを設定する手順です。

### 1. DNS設定

ドメイン管理サービス（お名前.com、ムームードメイン等）で以下のいずれかを設定します。

#### Apex ドメイン (beflux.jp) の場合

A レコードを以下の IP アドレスに設定：

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### サブドメイン (www.beflux.jp) の場合

CNAME レコードを設定：

```
www -> <GitHubユーザー名>.github.io
```

### 2. GitHub リポジトリの設定

1. リポジトリの **Settings** → **Pages** を開く
2. **Source** が「GitHub Actions」になっていることを確認
3. **Custom domain** にドメイン名（例: `beflux.jp`）を入力
4. **Enforce HTTPS** にチェックを入れる

### 3. CNAME ファイルの確認

`public/CNAME` ファイルにドメイン名が設定されていることを確認してください。
このファイルはビルド時に `dist` ディレクトリにコピーされます。

```
beflux.jp
```

### 4. DNS 反映の確認

DNS 設定が反映されるまで数時間〜最大48時間かかる場合があります。
以下のコマンドで確認できます：

```bash
dig beflux.jp +short
```

GitHub の IP アドレスが返ってくれば設定完了です。

### トラブルシューティング

- **404 エラーが出る場合**: DNS 設定が正しいか確認してください
- **証明書エラーが出る場合**: HTTPS の証明書発行に時間がかかることがあります（最大24時間）
- **デプロイされない場合**: GitHub Actions のワークフローログを確認してください
