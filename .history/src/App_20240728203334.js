import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Article from './Article';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <div className="content">
        <Article />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
