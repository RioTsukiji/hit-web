import React, {useState, useContext} from 'react';
import NewsContext from './NewsContext';
import NewsList from './NewsList';
import NewsDetail from './NewsDetail';
import Works from './Works';
import './ContentColumn.css';

const ContentColumn = () => {
    const news = useContext(NewsContext);
    const [selectedNews, setSelectedNews] = useState(null);
    
    return (
        <div className="content-column">
            {selectedNews
                ? <NewsDetail news={selectedNews} onBack={() => setSelectedNews(null)} />
                : <NewsList news={news} onSelect={id => setSelectedNews(news.find(newsItem => newsItem.id === id))} />}
            <Works />
        </div>
    );
};

export default ContentColumn;
