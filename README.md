# piderlab

https://piderlab.github.io/meta-maintenance/

https://meta-maintenance.deno.dev/index.html

### ビルド

まず[Deno](https://deno.land/)をインストールしてください。

```shell
> deno task lume
```

- このコマンドをmainブランチにpushする前に必ず打ってビルドする。

### 開発

```shell
> deno task lume -s
```

- これでサーバーが建つ。

[./meta-maintenance.jsx](./meta-maintenance.jsx)を編集してページを作成してください。

### フォルダ構成

[Deno](https://deno.land/)と静的ファイルジェネレーターの[lume](https://lume.land/)を使用しています。中身は[Preact](https://preactjs.com/)と[Windi CSS](https://windicss.org/)で書いてあります。

- `docs`フォルダ：自動生成されたファイルが入ります。触らないでください。
- `_config.ts`：lume設定ファイルです。（プラグインの読み込みなど）
- `deno.json`：Deno設定ファイルです。（コマンドの定義など）
- `import_map.json`：ライブラリ読み込み設定ファイルです。
- `meta-maintenance.jsx`：meta-maintenanceのページのコンテンツです。拡張子をtsxにするとエラーが出るけど来月になったら消えるそうです。
- `_includes/layouts/main.jsx`：ページ間で共通のヘッダーを定義しています。
