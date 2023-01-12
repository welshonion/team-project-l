# team-project-l

# 環境構築
- 以下を実行
```
docker build -t team-l .
docker run -it -p 3000:3000 --name teal-l-f team-l 
docker run -it -p 5000:5000 --name teal-l-b team-l 
```

# Backend
- 環境変数を入力
- dockerコンテナ(teal-l-b)内で以下を実行
```
cd /team-project-l/backend
python index.py
```
- http://127.0.0.1:5000にアクセス

# Frontend
- dockerコンテナ(teal-l-f)内で以下を実行

条件: node.jsがインストールされている(npmが必要なため)
```
cd /team-project-l/frontend
npm start
```
- http://localhost:3000/にアクセス