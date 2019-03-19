
//return only the state 
export default(state = [], { type, payload }) => {
  switch(type) {
    case "FETCH_USERS":
      return payload;
    default:
      return state;
  }
};
