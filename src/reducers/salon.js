import { FETCH_CODE_SALON,
  LAUNCH_GAME_ALL }from "../action/Salon";

  import { CLEAN_SERVER_DONE } from "../action/Result";

export const initialState = {
  lobby:"", // le numero qui gere le lobby
  gameReady:"", // savoir si la partie est prete a etre lancé
  /**
   * La durée totale du timer (ne change pas)
   */
  timerValue: 10, 
  /**
   * Le timer qui se decremente
   */
  timer: 10,

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

    //V pas touche
    default:
    return state;
  }
}

export default salonReducer;
