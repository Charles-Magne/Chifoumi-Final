import {
  SAVE_WIN_SELF,
  SAVE_LOSE_SELF
} from "../action/Result"; 
 
export const initialState = {
  selfResult: null,
};

function resultReducer(state = initialState, action = {}) {
  switch (action.type) {

 // Si on est info1 on l'enregistre dans le roleSelf
 case SAVE_WIN_SELF:
  return {
    ...state,
      selfResult: "WIN",
  };


  // Si on est info1 on l'enregistre dans le roleSelf
case SAVE_LOSE_SELF:

  return {
    ...state,
      selfResult: "LOSE",
  };


   // V pas touche
   default:
    return state;
  }
}

export default resultReducer;
 
