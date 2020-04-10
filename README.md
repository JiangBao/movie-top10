# movie-top
爬取豆瓣电影TOP250展示。

## 服务器
后端通过Node.js从[豆瓣电影top250](https://movie.douban.com/top250)爬取电影数据，并通过express给前端提供数据接口服务。后端代码在[server目录](./server)下。  
克隆仓库到本地后
```
cd movie-top
cd server
npm install
npm start
```
即可启动服务器，服务器默认监听8888端口

## 客户端
前端代码在[client目录](./client)下。
服务器启动后
```
cd client
npm install
npm run dev
```
即可看到客户端展示出豆瓣电影TOP250的页面效果
