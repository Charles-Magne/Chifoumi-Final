import { FETCH_CODE_SALON }from "../action/Salon";

export const initialState = {
  lobby:"", // le numero qui gere le lobby
}

function salonReducer( state = initialState, action = {}) {
  switch (action.type) {
// ici on stock le numero qui sert de lobby
    case FETCH_CODE_SALON: 
    return {
      ...state,
      lobby: action.salon,
    };

    //V pas touche
    default:
    return state;
  }
}

export default salonReducer;
