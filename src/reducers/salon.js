import { FETCH_CODE_SALON,
  LAUNCH_GAME_ALL, SET_REDIRECTION_RESULTS, SAVE_LOBBY_RANDOM }from "../action/Salon";

  import { CLEAN_SERVER_DONE } from "../action/Result";

export const initialState = {
  lobby:"", // le numero qui gere le lobby
  gameReady:"", // savoir si la partie est prete a etre lancé
  /**
   * La durée totale du timer (ne change pas)
   */
  timerValue: 120, 
  /**
   * Le timer qui se decremente
   */
  timer: 120,

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

    // Pour nettoyer le gameready et pouvoir le reinitialiser
    case SET_REDIRECTION_RESULTS: 
    return {
      ...state,
      gameReady: "",
    }; 

    // sert a enregistrer le numero du lobby
    case SAVE_LOBBY_RANDOM: 
    console.log('on check le number random du salon', action.salonNumber.salonState);
    return {
      ...state,
      lobby: action.salonNumber.salonState,
    }; 

    //V pas touche
    default:
    return state;
  }
}

export default salonReducer;
