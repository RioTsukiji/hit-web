import React, {useState, useContext} from 'react';
import ActivityContext from './ActivityContext';
import ActivityList from './ActivityList';
import ActivityDetail from './ActivityDetail';
import Works from './Works';
import './ContentColumn.css';

const ContentColumn = () => {
    const activities = useContext(ActivityContext);
    const [selectedActivity, setSelectedActivity] = useState(null);
    
    return (
        <div className="content-column">
            {selectedActivity
                ? <ActivityDetail activity={selectedActivity} onBack={() => setSelectedActivity(null)} />
                : <ActivityList activities={activities} onSelect={id => setSelectedActivity(activities.find(activity => activity.id === id))} />}
            <Works />
        </div>
    );
};

export default ContentColumn;
