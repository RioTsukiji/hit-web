import React from 'react';
import './NewsList.css';

const NewsList = ({news, onSelect}) => {
    return (
        <section id="newslist">
            <h2>News</h2>
            {news.map(newsItem => (
                <div className="button-container" key={newsItem.id}>
                   <button className="news-button" onClick={() => onSelect(newsItem.id)}>{newsItem.title}</button>
                </div>
            ))}
        </section>
    );
};

export default NewsList;
