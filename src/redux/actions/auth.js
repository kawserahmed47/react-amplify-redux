import { 
    LOGIN,
    REGISTER,
    RESET
 } from "../constants/auth";


 export const loginUser = (email, password) => async (dispatch) => {
    try {
      const res = await TutorialDataService.create({ email, password });
  
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const registerUser = (name, email, password) => async (dispatch) => {
    try {
      const res = await TutorialDataService.create({name, email, password});
  
      dispatch({
        type: REGISTER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const resetUser = (email) => async (dispatch) => {
    try {
      const res = await TutorialDataService.update(email);
  
      dispatch({
        type: RESET,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };