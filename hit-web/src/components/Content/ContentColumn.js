import React from 'react';
import Activity from './Activity';
import Works from './Works';
import Schedule from './Schedule';
import './ContentColumn.css';

const ContentColumn = () => {
    return (
        <div className="content-column">
            <Activity />
            <Schedule />
            <Works />
        </div>
    );
};

export default ContentColumn;
