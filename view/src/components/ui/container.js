import React from 'react'
import Navbarui from './Navbarui';
import {Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route , Switch,Redirect} from "react-router-dom";
import Register from '../auth/Register';
import Footer from './footer';
import {useSelector,useDispatch } from 'react-redux';

export default  function Layout () {
const Auth= useSelector(state => state.Auth);
const dispatch = useDispatch();
    return (
        <Container fluid className="p-0">
            <Navbarui/>
            <Switch>
            <Route path="/Register">
            {Auth.isloggedin==false? <Register/>:<Redirect to="/" /> }
          </Route>
          <Route path="/users">
         
          </Route>
          <Route path="/">
           
          </Route>
      </Switch>
      <Footer/>
        </Container>
    )
}
