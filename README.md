# team-project-l

# 環境構築
- 以下を実行
```
docker build -t team-l .
docker run -it -p 5000:5000 -p 3000:3000 --name teal-l team-l 
```
- dockerコンテナ内で以下を実行
```
cd /team-project-l/
npm start
```


# Backend
- 環境変数を入力
- 以下を実行
```
cd /team-project-l/backend
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
