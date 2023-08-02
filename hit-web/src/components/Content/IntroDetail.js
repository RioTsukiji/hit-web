import React from 'react';
import './IntroDetail.css';

const IntroDetail = ({ intro, onBack }) => { 
    return (
		<section id="intro">
			<h2>{intro.title}</h2>
			<p>{intro.detail}</p>
			<button className="button" onClick={onBack}>close</button>
		</section>
	);
};

export default IntroDetail;
