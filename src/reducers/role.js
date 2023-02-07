//SAVE_TAUPE_13
import { 
  SAVE_TAUPE,
  }from "../action/Role";

export const initialState = {
  taupe: null, // On stocke l'identifiant de la taupe
}

function roleReducer( state = initialState, action = {}) {
  switch (action.type) {

// ici on stock l'index de la taupe
    case SAVE_TAUPE: 
    console.log('l\'index de la taupe', action.indexTaupe);
    return {
      ...state,
      taupe: action.indexTaupe,
    };

  

    //V pas touche
    default:
    return state;
  }
}

export default roleReducer;
