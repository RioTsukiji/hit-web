import React from 'react';
import Header from './components/Header/Header';
import ImageBanner from './components/Banner/ImageBanner';
import ContentColumn from './components/Content/ContentColumn';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageBanner />
      <ContentColumn />
      <Footer />
    </div>
  );
}

export default App;
