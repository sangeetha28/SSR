
//return only the state 
export default(state = [], { type, payload }) => {
  switch(type) {
    case "FETCH_USERS":
      return [...state,...payload];
    default:
      return state;
  }
};
