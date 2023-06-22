import React from 'react';
import './Welcome.css';
import { FaLinkedin, FaGithubSquare, FaFileDownload,  } from 'react-icons/fa';

const Welcome = () => {
  return (
    <div class="welcome p-5 text-center bg-light">
        <h4 className='mb-3'>Hi, I am<br/>Antonio Lindo</h4>
        <h1 className='texto-grande mb-3'>Fullstack<br/>Developer!</h1>
        <div>
            <a class="icon" href='https://www.linkedin.com/in/antonio-luiz-vital-lindo/'><FaLinkedin/></a>
            <a class="icon" href='https://github.com/antoniolvitall'><FaGithubSquare/></a>
            <a class="icon" href='https://drive.google.com/file/d/1iOMe0qSLxi5cqMosMCsECyW5nUMYAD6O/view?usp=drive_link'><FaFileDownload/></a>
        </div>
    </div>
  )
}

export default Welcome