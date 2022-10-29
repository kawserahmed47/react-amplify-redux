import { 
    CREATE_POST,
    RETRIEVE_POSTS,
    UPDATE_POST,
    DELETE_POST,
    DELETE_ALL_POSTS
 } from "../constants/post";
  
  const initialPosts = [];
  
  function postsReducer(posts = initialPosts, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_POST:
        return [...posts, payload];
  
      case RETRIEVE_POSTS:
        return payload;
  
      case UPDATE_POST:
        return posts.map((tutorial) => {
          if (tutorial.id === payload.id) {
            return {
              ...tutorial,
              ...payload,
            };
          } else {
            return tutorial;
          }
        });
  
      case DELETE_POST:
        return posts.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_POSTS:
        return [];
  
      default:
        return posts;
    }
  };
  
  export default postsReducer;