
import { combineReducers } from "redux";

import carouselReducer from "./carousel";
import avatarReducer from "./avatar";

//ici on va indiquer les differants reducers
const rootReducer = combineReducers({
  carousel: carouselReducer,
  avatar: avatarReducer,
});

export default rootReducer;
