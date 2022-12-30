# team-project-l

# Backend
- Anacondaをインストール
- このブランチをローカルにクローン
- config.pyをこのディレクトリに配置
- 以下を実行
```
conda env create -n team -f env.yml
conda activte team
python index.py
```
- http://127.0.0.1:5000にアクセス

# Frontend
条件: node.jsがインストールされている(npmが必要なため)

### node_moduleをインストール
```
npm install
```
※`yarn add`と併用して使ってしまっていたため、エラーが出る可能性があります。
### 上記のコマンドが上手くいかない場合(yarnが必要)
```
yarn install
```

### 開発環境でwebページを表示
```
npm start
```
