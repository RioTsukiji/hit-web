import React from 'react';
import './Activity.css';

const ActivityList = ({activities, onSelect}) => {
    return (
        <section id="activity">
            <h2>Activity</h2>
            {activities.map(activity => (
                <div key={activity.id}>
                   <a onClick={() => onSelect(activity.id)}>{activity.title}</a>
                </div>
            ))}
        </section>
    );
};

export default ActivityList;
