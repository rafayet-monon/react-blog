import React, { createContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "AUTH": {
      const user = action.payload.attributes;
      const token = action.payload.attributes.token;
      localStorage.setItem("user", user);
      localStorage.setItem("token", token);
      return {
        ...state,
        isAuthenticated: true,
        user: user,
        token: token,
      };
    }
    case "LOGOUT": {
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
