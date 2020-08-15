import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import  {Button,Card,Form } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import {useSelector,useDispatch } from 'react-redux';

import {loginuser,googleauth} from '../../redux/actions/auth';


export default function Login() {
const Auth= useSelector(state => state.Auth);
const dispatch = useDispatch();

function submit(){
  console.log("x");

  dispatch(loginuser())
}
  const Login= useSelector(state => state.Login)
  function  onChange (e) {
    this.setState({ [e.target.id]: e.target.value });
  };

  function  onSubmit (){
  
    let email=document.getElementById("formBasicEmail").value;
    console.log(email);
};
const responseGoogle = (response) => {
  dispatch(googleauth(response))
}

const googleauthfailed = (response) => {
alert("failed retry");        

}



  return (
   
 

      <div className="p-2">
      
        <Card.Title className="bg-dark text-light p-2">Login</Card.Title>
             <Form  >

             <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />

  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    <Form.Text className="text-muted">
   {Auth.message}
    </Form.Text>
  </Form.Group>
             
             <Button variant="dark"  onClick={() => {submit()}} className="w-100">
               Submit
             </Button>
          
           
             </Form>
             <GoogleLogin
     clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
     buttonText="Google Signup"
     onSuccess={responseGoogle}
     onFailure={googleauthfailed}
 
     className="w-100 m-1"
   />   <Link
   to="/register"
   style={{
     width: "100%",
     borderRadius: "3px",
     letterSpacing: "1.5px",textDecoration:"underline"
   }}
   className="btn btn-large waves-effect waves-light hoverable blue accent-3"
 >
   Register
 </Link>
             </div>
     );
  
}


