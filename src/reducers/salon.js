import { FETCH_CODE_SALON,
  LAUNCH_GAME_ALL, SET_REDIRECTION_RESULTS }from "../action/Salon";

  import { CLEAN_SERVER_DONE } from "../action/Result";

export const initialState = {
  lobby:"", // le numero qui gere le lobby
  gameReady:"", // savoir si la partie est prete a etre lancé
  /**
   * La durée totale du timer (ne change pas)
   */
  timerValue: 60, 
  /**
   * Le timer qui se decremente
   */
  timer: 60,

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

    case CLEAN_SERVER_DONE: 
    console.log('le serveur est propre - salon');
    return {
      ...state,
      gameReady: "newGame",
    };

    case SET_REDIRECTION_RESULTS: 
    return {
      ...state,
      gameReady: "",
    }; 

    //V pas touche
    default:
    return state;
  }
}

export default salonReducer;
