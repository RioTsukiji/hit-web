import React, {useState, useContext} from 'react';
import IntroContext from './IntroContext';
import IntroList from './IntroList';
import IntroDetail from './IntroDetail';
import Works from './Works';
import './ContentColumn.css';

const ContentColumn = () => {
    const intros = useContext(IntroContext);
    const [selectedIntro, setSelectedIntro] = useState(null);
    
    return (
        <div className="content-column">
            {selectedIntro
                ? <IntroDetail intro={selectedIntro} onBack={() => setSelectedIntro(null)} />
                : <IntroList intros={intros} onSelect={id => setSelectedIntro(intros.find(intro => intro.id === id))} />}
            <Works />
        </div>
    );
};

export default ContentColumn;
