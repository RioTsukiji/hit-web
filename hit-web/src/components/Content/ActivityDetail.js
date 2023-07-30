import React from 'react';
import './ActivityDetail.css';

const ActivityDetail = ({ activity, onBack }) => { 
    return (
		<section id="activity">
			<h2>{activity.title}</h2>
			<p>{activity.detail}</p>
			<button className="button" onClick={onBack}>close</button>
		</section>
	);
};

export default ActivityDetail;
