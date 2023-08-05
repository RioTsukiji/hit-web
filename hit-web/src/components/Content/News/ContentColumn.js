import React, {useState, useContext} from 'react';
import NewsContext from './NewsContext';
import NewsList from './NewsList/NewsList';
import NewsDetail from './NewsDetail/NewsDetail';
import Works from '../Works/Works';

const ContentColumn = () => {
    const news = useContext(NewsContext);
    const [selectedNews, setSelectedNews] = useState(null);
    
    return (
        <div className="content-column">
            <NewsList news={news} onSelect={id => setSelectedNews(news.find(newsItem => newsItem.id === id))} />
            {selectedNews &&
                <NewsDetail news={selectedNews} onBack={() => setSelectedNews(null)} />
            }
            <Works />
        </div>
    );
};

export default ContentColumn;
