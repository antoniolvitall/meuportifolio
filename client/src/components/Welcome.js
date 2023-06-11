import React from 'react';
import './Welcome.css';
import { MDBIcon } from 'mdb-react-ui-kit';

const Welcome = () => {
  return (
    <div class="welcome p-5 text-center bg-light">
        <h4 className='mb-3'>Hi, I am<br/>Antonio Lindo</h4>
        <h1 className='texto-grande mb-3'>Fullstack<br/>Developer</h1>
        <div>
            <MDBIcon fas icon="linkedin" />
            <MDBIcon fas icon="github-square" />
            <MDBIcon fas icon="file-download" />
        </div>
    </div>
  )
}

export default Welcome