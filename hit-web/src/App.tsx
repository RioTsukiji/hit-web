import NewsContext from './components/Content/News/NewsContext';
import Header from './components/Header/Header';
import ImageBanner from './components/Banner/ImageBanner';
import ContentColumn from './components/Content/News/ContentColumn';
import BlogColumn from './components/Content/Blog/BlogColumn';
import Footer from './components/Footer/Footer';
import './App.css';
import BlogList from './components/Content/Blog/BlogList/BlogList';

function App() {
  const news = [
    { id: 1,
      title: 'About us', 
      detail: 'このサークルは、一橋大学内のデベロッパーコミュニティです。Webサイトやアプリの開発・デザインに興味がある方の入会を募集しています！学年・年齢は問いません。'
    },
    { id: 2,
      title: 'WEB開発',
      detail: 'HTML/CSS/JavaScript(TypeScript)を用いて当サイトを開発しています。JavaScriptのライブラリにはReactを用いており、モダンでスタンダードな技術に触れられます。'
    },
    { id: 3,
      title: 'アプリ開発',
      detail: 'Android/iOSアプリの開発を行っています。'
    },
    { id: 4,
      title: '活動日時',
      detail: '毎週金曜日15〜19時に活動しています。場所は、国立キャンパスの図書館や教室です。'
    },
  ]

  const blog = [
    { id: 1,
      title: 'Test', 
    },
    { id: 2,
      title: 'Test', 
    },
    { id: 3,
      title: 'Test', 
    },
    { id: 4,
      title: 'Test', 
    },
  ]

  return (
      
      <div className="App">
        <Header />
        <ImageBanner />

        <NewsContext.Provider value={news}>
          <ContentColumn />
        </NewsContext.Provider>

        <NewsContext.Provider value={blog}>
          <BlogList />
        </NewsContext.Provider>

        <Footer />
      </div>
  
  );
}

export default App;
