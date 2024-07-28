import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
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

