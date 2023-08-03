import React from 'react';
import './NewsList.css';

const NewsList = ({news, onSelect}) => {
    return (
        <section id="news">
            <h2>News</h2>
            {news.map(newsItem => (
                <div key={newsItem.id}>
                   <button className="news-button" onClick={() => onSelect(newsItem.id)}>{newsItem.title}</button>
                </div>
            ))}
        </section>
    );
};

export default NewsList;
