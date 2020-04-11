import React from 'react';
import {Rate} from 'antd';

function ContentListItem(props) {
  const {name, link, picUrl, info, star, intro} = props.movieData;
  let showStar = star / 2;
  if (showStar % 1 > 0.5) {
    showStar = Math.ceil(star/2);
  } else {
    showStar = Math.floor(star/2) + 0.5;
  }

  return (
    <a className="card movie-card" href={link}>
      <img src={picUrl} alt="movie poster" />
      <div className="desc">
        <h2>{name}</h2>
        <p>{info.trim()}</p>
        <Rate disabled allowHalf value={showStar} style={{fontSize: "1rem"}} />
        <span className="ant-rate-text">{star}</span>
        <p>「{intro}」</p>
      </div>
    </a>
  )
}

export default ContentListItem;