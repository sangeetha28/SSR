import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import combineReducers from "../redux/reducers";

export default() => {
    const store = createStore(combineReducers,applyMiddleware(thunk));
    return store;
}
