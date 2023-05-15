import {
  SAVE_WIN_SELF,
  SAVE_LOSE_SELF,
  CLEAN_SERVER_DONE
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

  
    // On vide le state
case CLEAN_SERVER_DONE:
  console.log('le serveur est propre - resultat');
  return {
    ...state,
      selfResult: null,
  };


   // V pas touche
   default:
    return state;
  }
}

export default resultReducer;
 
