import {LOGINFAIL,LOGINSUCCESS,LOGOUT} from './actiontypes';
import axios from 'axios';
import setAuthToken from '../../uitls/functions';
import jwt_decode from 'jwt-decode'


export function loginuser() {
	return (dispatch) => {
	
		
let email;
let password;

const userData = {
	 email: document.getElementById("formBasicEmail").value,
	password: document.getElementById("formBasicPassword").value
  };
 if((email!=="")&&((password!=="")))
  {
		console.log(userData);
		axios.post("http://localhost:5000/auth/login",userData)
		.then(res => {

		console.log(res.data)
		if(res.data.token){
			const token=res.data.token;
			const decoded = jwt_decode(token);
			setAuthToken(token);
			dispatch({
				type: LOGINSUCCESS,
				payload:res.data	
				})
		}
		else if(res.data.status==="-1"){
			dispatch({
				type: LOGINFAIL,
				payload:res.data.message	
				})
		}
		else if(res.data.details[0].message){
			dispatch({
				type: LOGINFAIL,
				payload:res.data.details[0].message
				})
		}
		
		})
		.catch(err =>
		console.log(err)
		);
  }
  else{
	alert("please provide email and passowrd");
  }


}
 
}
export function googleauth(response) {
	return (dispatch) => {

const userData = {
	profiledata:response.profileObj,
	tokenId:response.tokenId
 };
console.log("ajax");
axios.post("http://localhost:5000/auth/googleauth",userData)
.then(res => {

	console.log(res.data)
	if(res.data.token){
		const token=res.data.token;
		const decoded = jwt_decode(token);
		setAuthToken(token);
		dispatch({
			type: LOGINSUCCESS,
			payload:res.data	
			})
	}
	else if(res.data.status==="-1"){
		dispatch({
			type: LOGINFAIL,
			payload:res.data.message	
			})
	}
	else if(res.data.details[0].message){
		dispatch({
			type: LOGINFAIL,
			payload:res.data.details[0].message
			})
	}
	
	})
	.catch(err =>
	console.log(err)
	);
}


}
export function register(response) {
	return (dispatch) => {
		console.log("registering");
		let email;
		let password;
		let name;
		const userData = {
			name: document.getElementById("formBasicname").value,
			 email: document.getElementById("formBasicEmail").value,
			password: document.getElementById("formBasicPassword").value
		  };
		  console.log(userData);
		  if((name!=="")&&(email!=="")&&(password!==""))
		  {
				console.log(userData);
				axios.post("http://localhost:5000/auth/register",userData)
				.then(res => {
		
				console.log(res.data)
				if(res.data.token){
					const token=res.data.token;
					const decoded = jwt_decode(token);
					setAuthToken(token);
					dispatch({
						type: LOGINSUCCESS,
						payload:res.data	
						})
				}
				else if(res.data.status==="-1"){
					dispatch({
						type: LOGINFAIL,
						payload:res.data.message	
						})
				}
				else if(res.data.details[0].message){
					dispatch({
						type: LOGINFAIL,
						payload:res.data.details[0].message
						})
				}
				
				})
				.catch(err =>
				console.log(err)
				);
		  }
		  else{
			alert("please provide email and passowrd");
		  }
		
		
		}
		 
}
export function logout(response) {
	return (dispatch) => {
		dispatch({
		type: LOGOUT,
		})
	}
}