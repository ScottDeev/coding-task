import React, { useEffect, useReducer } from "react";
import MkdSDK from "./utils/MkdSDK";

export const AuthContext = React.createContext();

// useEffect(() => {
//   if(localStorage.getItem("action")){
//     const action = JSON.parse(localStorage.getItem("action"))
//     console.log(action);
//     dispatch({type: 'LOGIN', payload: action})
//   } 
// }, [])

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};
console.log(initialState);
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      //TODO
      localStorage.setItem('action', JSON.stringify(action.payload))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        role: action.payload.role,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

let sdk = new MkdSDK();


export const tokenExpireError = (dispatch, errorMessage) => {
  const role = localStorage.getItem("role");
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "Logout",
    });
    window.location.href = "/" + role + "/login";
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  React.useEffect( () => {
    //TODO
    if(localStorage.getItem("action")){
      const action = JSON.parse(localStorage.getItem("action"))
      console.log(action);
      dispatch({type: 'LOGIN', payload: action})
    } 
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
