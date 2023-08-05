import React from 'react';
import './NewsDetail.css';
import './Overlay.css'

const NewsDetail = ({ news, onBack }) => { 
    return (
		<>
			<div className="overlay"></div>
			<section id="newsdetail">
				<h2>{news.title}</h2>
				<p>{news.detail}</p>
				<button className="button" onClick={onBack}>close</button>
			</section>
		</>
	);
};

export default NewsDetail;
