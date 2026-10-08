# THE BEER TOKACHI — Web制作サンプル

飲食店・店舗向けの制作サンプル／リニューアル提案例です。
THE BEER TOKACHIの公式サイトではなく、受注・納品実績を示すものではありません。

既存のHTML・店舗写真・メニュー写真・ロゴを活かした静的サイトです。
店舗のストーリー、メニュー、営業時間・所在地をスマートフォンでも閲覧できます。
オンラインショップへのボタンはデモで、注文は受け付けません。

## 構成

- `index.html`: 提示用のトップページ
- `portfolio.css` / `portfolio.js`: 表示・操作の改善
- `images/`: 既存画像を活かした最適化版、favicon、制作サンプル用OGP画像
- ルート直下のJPG 3点: 既存GitHub版の資産を保持

ローカルでは `index.html` をブラウザで開くか、このフォルダで
`python3 -m http.server 8000 --bind 127.0.0.1` を実行して確認できます。

公開URL: https://jelly318.github.io/beer-tokachi/

GitHub Pagesで `main` ブランチのルートを公開します。canonical・og:url・og:imageは公開URLの絶対URLを設定しています。
サンプルは検索で公式サイトと混同されないよう `noindex,follow` にしています。

既存GitHub版の4コミットの履歴を保持して更新します。
ローカルのバックアップ、確認用画像、workspace、設定用スクリプトは公開対象に含めません。
