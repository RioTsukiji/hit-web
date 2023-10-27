import React from 'react';
import './ImageBanner.css';

const ImageBanner = () => {
    return (
        <div className="image-banner">
            <img src="/images/computer_club.png" alt="説明文" />
			<div className="banner-text">
                <h2>一橋大学 コンピュータ研究会</h2>
            </div>
            <a href="https://docs.google.com/forms/d/1XO1au5NUbYZrybL3rL5afMVSdvB_03nBRg1ZG3P1l1w/viewform?edit_requested=true"
                target="_blank"
                rel="noopener noreferrer"
                className="banner-button">
                入会はこちら
            </a>
        </div>
    );
};

export default ImageBanner;
