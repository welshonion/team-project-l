# team-project-l

# 環境構築
## dockerコンテナの起動
- このリポジトリをクローンする
- config.pyファイルを取得(セキュリティのため取得方法は別途指定)
- config.pyをこのリポジトリのディレクトリ直下に配置
- 以下を実行
```
docker build -t team-l .
docker run -it -p 3000:3000 --name teal-l-f team-l 
docker run -it -p 5000:5000 --name teal-l-b team-l 
docker cp config.py teal-l-f:/team-project-l
docker cp config.py teal-l-b:/team-project-l
```

## Backend
- dockerコンテナ(teal-l-b)内で以下を実行
```
cd /team-project-l/backend
python index.py
```
- URLはhttp://127.0.0.1:5000

## Frontend
- dockerコンテナ(teal-l-f)内で以下を実行
```
cd /team-project-l/frontend
npm start
```
- URLはhttp://localhost:3000/

# 実行
- 環境構築の全手順を実行
- [ローカルホスト](http://localhost:3000/)にアクセス