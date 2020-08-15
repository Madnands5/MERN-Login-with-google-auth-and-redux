import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import  {Button,Card,Form } from 'react-bootstrap';

import {useSelector,useDispatch } from 'react-redux';

import {register} from '../../redux/actions/auth';


export default function Register() {
function submit(){


  dispatch(register())
}
const Auth= useSelector(state => state.Auth);
  function  onChange (e) {
    this.setState({ [e.target.id]: e.target.value });
  };

 


const dispatch = useDispatch();

  return (
   
 
    
      <Card className="p-2 justify-content-center" style={{width:"80%",marginLeft:"10%"}}>
      
      <Card.Title className="bg-dark text-light p-2">Register</Card.Title>
        <Form  >

          <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
       
          </Form.Group>
          <Form.Group controlId="formBasicname">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
       
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
          <Link
                to="/"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
               Cancel
              </Link>

        </Form>
             
             </Card>
     );
  
}


