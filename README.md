# いまなにする？

未就学児の親向けに、今すぐできる遊びを提案する静的Webアプリです。

## ファイル構成

- `index.html`: 画面
- `styles.css`: スマホ優先デザイン
- `app.js`: 選択、表示、もっと見る機能
- `data/plays.json`: 遊びデータ

## 公開方法

Netlifyなら、このフォルダをドラッグ&ドロップするだけで公開できます。
GitHub Pagesなら、このフォルダの中身をリポジトリに置いて Pages を有効化します。

## ローカル確認

`index.html` を直接開いても最低限確認できます。
JSON 30件込みで確認したい場合は、PowerShellでこのフォルダに移動して以下を実行します。

```powershell
powershell -ExecutionPolicy Bypass -File .\serve-local.ps1
```

その後、`http://127.0.0.1:4177/` を開きます。

## MVPでやらないこと

ログイン、DB、保存、通知、AIチャット、課金、広告は入れていません。
