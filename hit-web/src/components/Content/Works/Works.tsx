import React from 'react';
import './Works.css';

const Works = () => {
    return (
        <section id="works">
            <h2>Works</h2>
			<div className="works-container">
				<div className="main-image">
					<img src="/images/bashikoma.jpg" alt="説明文" />
				</div>
				<div className="link-images">
					<div className="app-link">
						<a href="https://apps.apple.com/jp/app/%E3%83%90%E3%82%B7%E3%82%B3%E3%83%9E/id1622496073"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src="/images/apple.png" alt="説明文" className='works-img'/>
						</a>
					</div>
					<div className="app-link">
						<a href="https://play.google.com/store/search?q=バシコマ&c=apps&hl=ja-JP"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src="/images/google.png" alt="説明文" className='works-img'/>
						</a>
					</div>
				</div>
			</div>
        </section>
    );
};

export default Works;
