import React from 'react';
import './ImageBanner.css';

const ImageBanner = () => {
    return (
        <div className="image-banner">
            <img src="/images/hit.jpg" alt="説明文" />
			<div className="banner-text">
                <h2>Hello, World!</h2>
            </div>
        </div>
    );
};

export default ImageBanner;
