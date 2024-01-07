import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';

const About = () => (
    <div className="about section__margin" id="about">
        <div className="about-feature">
            <Feature title="About Us" text="" />
        </div>
        <div className="about-heading">
            <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
            <p>Explore the Library</p>
        </div>
        <div className="about-container">
            <Feature title="Creativity" text="The use of imagination or original ideas to create something firm are keen to encourage." />
            <Feature title="Knowledge" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        </div>
    </div>
);

export default About;
