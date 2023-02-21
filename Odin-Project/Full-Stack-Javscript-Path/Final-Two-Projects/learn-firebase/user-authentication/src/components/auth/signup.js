import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function SignUp(props) {
  return (
    <MDBContainer id='container' fluid>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5'>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>



          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' ref={props.username}/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' ref={props.email}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' ref={props.password}/>
          <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form1' type='password' ref={props.confirm_password}/>

          <MDBBtn onClick={props.signup_account} className='w-100 mb-4' size='md'>Sign Up</MDBBtn>
          <div className="text-center">

            <p>or sign up with:</p>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm"/>
            </MDBBtn>

            <p>Already have an account? <a onClick={props.changeSignUp} href="">Login</a></p>

          </div>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default SignUp;