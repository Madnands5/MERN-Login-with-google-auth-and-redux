const initialstate={
  isloggedin:false,
  email: "",
  token:"",
  Name:"Guest",
  message:""
  }

const Auth=(state=initialstate,action)=>{
    switch(action.type){
      case "LOGINFAIL":

        return{
          ...state,
          message:action.payload
          };   
     case "LOGINSUCCESS":

        return{
              ...state,
              isloggedin:true,
              Name:action.payload.user.name,
              email:action.payload.user.email,
              token:action.payload.token,
              message:""
              };   
    case "LOGOUT":

          return{
            ...state,
            isloggedin:false,
            email: "",
            token:"",
            Name:"Guest",
            message:""
            };   
                

        default:
        return state;
  
    }
  }
  export default Auth;