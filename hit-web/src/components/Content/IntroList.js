import React from 'react';
import './Intro.css';

const IntroList = ({intros, onSelect}) => {
    return (
        <section id="intro">
            <h2>Introduction</h2>
            {intros.map(intro => (
                <div key={intro.id}>
                   <button className="intro-button" onClick={() => onSelect(intro.id)}>{intro.title}</button>
                </div>
            ))}
        </section>
    );
};

export default IntroList;
