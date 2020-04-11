import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Pagination } from 'antd';
import {useParams, useHistory} from 'react-router-dom';
import ContentListItem from './ContentListItem';

function ContentList() {
  const {page=1} = useParams();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8888/movie/top250/${page}`)
      .then((resp) => {
        if (resp.data.status === 200) {
          setMovieList(resp.data.data);
        }
      })
  }, [page])

  let history = useHistory();
  const onPageChange = page => {
    history.push(`/${page}`);
  }

  return (
    <div className="app-content-list">
      {
        movieList.map(movie => {
          return <ContentListItem key={movie.name} movieData={movie} />
        })
      }
      <Pagination current={parseInt(page)} total={250} pageSize={25} onChange={onPageChange} showSizeChanger={false} responsive={true} style={{textAlign: "center", marginTop: "1rem"}} />
    </div>
  );
}

export default ContentList;