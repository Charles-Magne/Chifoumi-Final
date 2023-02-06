
import { combineReducers } from "redux";

import carouselReducer from "./carousel";
import avatarReducer from "./avatar";
import salonReducer from "./salon";
import roleReducer from "./role";

//ici on va indiquer les differants reducers
const rootReducer = combineReducers({
  carousel: carouselReducer,
  avatar: avatarReducer,
  salon: salonReducer,
  role: roleReducer
});

export default rootReducer;
