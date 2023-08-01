import React from 'react';
import ActivityContext from './components/Content/ActivityContext';
import Header from './components/Header/Header';
import ImageBanner from './components/Banner/ImageBanner';
import ContentColumn from './components/Content/ContentColumn';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const activities = [
    { id: '1', 
      title: 'このサークルについて', 
      detail: 'このサークルは、一橋大学内のデベロッパーコミュニティです。Webサイトやアプリの作成・デザインに興味がある方の入会を募集しています！学年・年齢は問いません。'
    },
    { id: '2',
      title: '活動内容 / 活動場所',
      detail: '毎週金曜日15〜19時に活動しています。場所は、国立キャンパスの図書館や教室です。'
    },
  ]

  return (
    <ActivityContext.Provider value={activities}>
      <div className="App">
        <Header />
        <ImageBanner />
        <ContentColumn />
        <Footer />
      </div>
    </ActivityContext.Provider>
  );
}

export default App;
