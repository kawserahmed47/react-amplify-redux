import { 
    CREATE_POST,
    RETRIEVE_POSTS,
    UPDATE_POST,
    DELETE_POST,
    DELETE_ALL_POSTS
 } from "../constants/post";


 export const createTutorial = (title, description) => async (dispatch) => {
    try {
      const res = await TutorialDataService.create({ title, description });
  
      dispatch({
        type: CREATE_POST,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const retrieveTutorials = () => async (dispatch) => {
    try {
      const res = await TutorialDataService.getAll();
  
      dispatch({
        type: RETRIEVE_POSTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const updateTutorial = (id, data) => async (dispatch) => {
    try {
      const res = await TutorialDataService.update(id, data);
  
      dispatch({
        type: UPDATE_POST,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const deleteTutorial = (id) => async (dispatch) => {
    try {
      await TutorialDataService.delete(id);
  
      dispatch({
        type: DELETE_POST,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const deleteAllTutorials = () => async (dispatch) => {
    try {
      const res = await TutorialDataService.deleteAll();
  
      dispatch({
        type: DELETE_ALL_POSTS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const findTutorialsByID = (title) => async (dispatch) => {
    try {
      const res = await TutorialDataService.findByTitle(title);
  
      dispatch({
        type: RETRIEVE_POSTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };