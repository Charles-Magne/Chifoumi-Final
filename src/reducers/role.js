//SAVE_TAUPE_13
import { 
  SAVE_TAUPE_1,
  SAVE_TAUPE_2,
  SAVE_TAUPE_3,
  SAVE_TAUPE_4,
  SAVE_TAUPE_5,
  SAVE_TAUPE_6,
  SAVE_TAUPE_7,
  SAVE_TAUPE_8,
  SAVE_TAUPE_9,
  SAVE_TAUPE_10,
  SAVE_TAUPE_11,
  SAVE_TAUPE_12,
  SAVE_TAUPE_13,
  SAVE_TAUPE_14
  }from "../action/Role";

export const initialState = {
  taupe: null, // On stocke l'identifiant de la taupe
}

function roleReducer( state = initialState, action = {}) {
  switch (action.type) {

// ici on stock l'index de la taupe
    case SAVE_TAUPE_1: 
    return {
      ...state,
      taupe: 1,
    };

    // ici on stock l'index de la taupe
    case SAVE_TAUPE_2: 
    return {
      ...state,
      taupe: 2,
    };

    // ici on stock l'index de la taupe
    case SAVE_TAUPE_3: 
    return {
      ...state,
      taupe: 3,
    };

    // ici on stock l'index de la taupe
    case SAVE_TAUPE_4: 
    return {
      ...state,
      taupe: 4,
    };

    // ici on stock l'index de la taupe
    case SAVE_TAUPE_5: 
    return {
      ...state,
      taupe: 5,
    };

    // ici on stock l'index de la taupe
    case SAVE_TAUPE_6: 
    return {
      ...state,
      taupe: 6,
    };

    // ici on stock l'index de la taupe
    case SAVE_TAUPE_7: 
    return {
      ...state,
      taupe: 7,
    };

    // ici on stock l'index de la taupe
    case SAVE_TAUPE_8: 
    return {
      ...state,
      taupe: 8,
    };

    // ici on stock l'index de la taupe
    case SAVE_TAUPE_9: 
    return {
      ...state,
      taupe: 9,
    };

    // ici on stock l'index de la taupe
    case SAVE_TAUPE_10: 
    return {
      ...state,
      taupe: 10,
    };

   // ici on stock l'index de la taupe
    case SAVE_TAUPE_11: 
    return {
      ...state,
      taupe: 11,
    };

    // ici on stock l'index de la taupe
    case SAVE_TAUPE_12: 
    return {
      ...state,
      taupe: 12,
    };

    // ici on stock l'index de la taupe
    case SAVE_TAUPE_13: 
    return {
      ...state,
      taupe: 13,
    };

    // ici on stock l'index de la taupe
    case SAVE_TAUPE_14: 
    return {
      ...state,
      taupe: 14,
    };

    //V pas touche
    default:
    return state;
  }
}

export default roleReducer;
