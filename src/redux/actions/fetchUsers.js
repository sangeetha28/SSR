import axios from "axios";

//pass store dispatch to the inner function inorder for the dispatch to be manually called once data fetching is finished

export default () => async dispatch => {
  const usersList = await axios.get(
    "https://react-ssr-api.herokuapp.com/users"
  );

  dispatch({ type: "FETCH_USERS", payload: usersList.data });
};
