import React from 'react';
import './About.css';
import foto from './FotoAntonio.png';

const About = () => {
  return (
    <div class="about p-5 text-center bg-light" >
        <div class="about2" style={{ margin: '0 auto', maxWidth: '1200px' }}>
            <img class="myfoto" src={foto} alt="My Foto" />
            <h2>Fullstack developer, my primary work tools are: Python, Django, Django Rest Framework, PostgreSQL, HTML, CSS, JavaScript, TypeScript, React, Node.js, AWS, Git/Github. I approach problem-solving with strategy, simplifying and optimizing time in complex problem-solving. I have a knack for learning new technologies and I am constantly seeking to improve my skills. I embrace the "code every day" mentality, always striving to enhance my abilities and be prepared for the next project.</h2>
        </div>
    </div>
  )
}

export default About