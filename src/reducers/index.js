
import { combineReducers } from "redux";

import carouselReducer from "./carousel";
import avatarReducer from "./avatar";
import salonReducer from "./salon";

//ici on va indiquer les differants reducers
const rootReducer = combineReducers({
  carousel: carouselReducer,
  avatar: avatarReducer,
  salon: salonReducer,
});

export default rootReducer;
