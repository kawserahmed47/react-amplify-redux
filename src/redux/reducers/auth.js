import { 
    LOGIN,
    REGISTER,
    RESET
 } from "../constants/auth";
  
  const initialAuth = [];
  
  function authReducer(initialAuth = initialAuth, action) {
    const { type, payload } = action;
  
    switch (type) {
      case LOGIN:
        return [...initialAuth, payload];
  
      case REGISTER:
        return [...initialAuth, payload];
  
      case RESET:
          if (tutorial.id === payload.id) {
            return {
              ...tutorial,
              ...payload,
            };
          } else {
            return tutorial;
          }
  
      default:
        return initialAuth;
    }
  };
  
  export default authReducer;