import React from 'react';
import './Works.css';

const Works = () => {
    return (
        <section id="works">
            <h2>Works</h2>
			<img src="/images/bashikoma_white.jpg" alt="説明文" style={{maxWidth: "100%"}}/>
            <p>アプリのダウンロードは
				<a href="https://apps.apple.com/jp/app/%E3%83%90%E3%82%B7%E3%82%B3%E3%83%9E/id1622496073"
				   target="_blank"
				   rel="noopener noreferrer"
				>こちら
				</a>から!</p>
        </section>
    );
};

export default Works;
