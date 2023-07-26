import React from 'react';
import Header from './components/Header/Header';
import ImageBanner from './components/Banner/ImageBanner';
import ContentRow from './components/Content/ContentRow';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageBanner />
      <ContentRow />
      <Footer />
    </div>
  );
}

export default App;
