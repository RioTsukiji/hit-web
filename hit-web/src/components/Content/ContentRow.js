import React from 'react';
import Activity from './Activity';
import Works from './Works';
import './ContentRow.css';
import Blog from './Blog';

const ContentRow = () => {
    return (
        <div className="content-row">
            <Activity />
            <Works />
			<Blog />
        </div>
    );
};

export default ContentRow;
