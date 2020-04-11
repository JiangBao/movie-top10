import React from 'react';
import {BackTop} from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
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

      {/* footer area */}
      <Footer />

      <BackTop />
    </div>
  );
}

export default App;
