import React from 'react';
import './Footer.css';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>

          <MDBBtn outline color="light" floating className='m-1' href='mailto:antoniolvitall@gmail.com' target="_blank" role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/antonio-luiz-vital-lindo/' target="_blank" role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/antoniolvitall' target="_blank" role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Antonio Luiz Vital Lindo:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Meu site
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer