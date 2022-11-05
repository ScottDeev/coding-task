import React, { useContext, useEffect, useReducer } from "react";
import MkdSDK from "./utils/MkdSDK";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      //TODO
      // Data stored in localstorage to make user logged in after page reload
      localStorage.setItem('action', JSON.stringify(action.payload))
      localStorage.setItem('role', JSON.stringify(action.payload.role))
      // This is returned at the first time a user is logged in
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


export const tokenExpireError = (dispatch, errorMessage) => {
  // const role = JSON.parse(localStorage.getItem("role"));
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "LOGOUT",
    });
    window.location.href = "/" + 'admin' + "/login";
    console.log(errorMessage);
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  React.useEffect( () => {
    //TODO
    if(localStorage.getItem("action")){
      const action = JSON.parse(localStorage.getItem("action"))
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
