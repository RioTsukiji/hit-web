import React from 'react';
import './NewsList.css';

interface Props {
    news: News[],
    onSelect: Function
}
interface News {
    id: number,
    title: string,
    detail: string
}
const NewsList:React.FC<Props> = ({news, onSelect}) => {
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
