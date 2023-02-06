import { FETCH_CODE_SALON,
  LAUNCH_GAME_ALL }from "../action/Salon";

export const initialState = {
  lobby:"", // le numero qui gere le lobby
  gameReady:"" // savoir si la partie est prete a etre lancé
}

function salonReducer( state = initialState, action = {}) {
  switch (action.type) {

// ici on stock le numero qui sert de lobby
    case FETCH_CODE_SALON: 
    return {
      ...state,
      lobby: action.salon,
    };

    case LAUNCH_GAME_ALL: 
    return {
      ...state,
      gameReady: "yes",
    };

    //V pas touche
    default:
    return state;
  }
}

export default salonReducer;
