# movie-top10
展示豆瓣电影top10。

## 服务器
后端通过Node.js从[豆瓣电影top250](https://movie.douban.com/top250)爬取top10的电影数据，并通过express给前端提供数据接口。后端代码在[server目录](./server)下。  
克隆仓库到本地后
```
cd movie-top10
cd server
npm install
npm start
```
即可启动服务器，服务器默认监听8888端口

## 客户端
前端代码基于vue，逻辑很简单，主要用来练手vue的使用。前端代码在[client目录](./client)下。
