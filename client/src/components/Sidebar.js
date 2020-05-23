import React from 'react';
import Footer from './Footer.js';

function Sidebar() {
  return (
    <div className="app-sidebar">
      <div className="card">
       <p>豆瓣用户每天都在对「看过」的电影进行「很差」到「力荐」的评价，豆瓣根据每部影片看过的人数以及该影片所得的评价等综合数据，通过算法分析产生豆瓣电影 Top 250。</p>
      </div>
      <div className="card douban-card">
        <a href="https://movie.douban.com/">
          <h2>豆瓣</h2>
          <p>让好电影来找你</p>
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default Sidebar;