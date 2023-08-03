import React from 'react';
import './NewsDetail.css';

const NewsDetail = ({ news, onBack }) => { 
    return (
		<section id="news">
			<h2>{news.title}</h2>
			<p>{news.detail}</p>
			<button className="button" onClick={onBack}>close</button>
		</section>
	);
};

export default NewsDetail;
