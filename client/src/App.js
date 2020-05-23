import React from 'react';
import {BackTop} from 'antd';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentList from './components/ConentList';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* header area */}
      <Header />

      {/* content area */}
      <div className="app-content">
        <ContentList />
        <Sidebar />
      </div>

      {/* back to top */}
      <BackTop />
    </div>
  );
}

export default App;
