import React from 'react';
import NewsContext from './components/Content/NewsContext';
import Header from './components/Header/Header';
import ImageBanner from './components/Banner/ImageBanner';
import ContentColumn from './components/Content/ContentColumn';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const news = [
    { id: '1', 
      title: 'このサークルについて', 
      detail: 'このサークルは、一橋大学内のデベロッパーコミュニティです。Webサイトやアプリの開発・デザインに興味がある方の入会を募集しています！学年・年齢は問いません。'
    },
    { id: '2',
      title: '活動内容 / 活動場所',
      detail: '毎週金曜日15〜19時に活動しています。場所は、国立キャンパスの図書館や教室です。'
    },
  ]

  return (
    <NewsContext.Provider value={news}>
      <div className="App">
        <Header />
        <ImageBanner />
        <ContentColumn />
        <Footer />
      </div>
    </NewsContext.Provider>
  );
}

export default App;
