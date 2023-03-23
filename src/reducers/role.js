//SAVE_TAUPE_13
import {
  SAVE_TAUPE,
  SAVE_INFO_1,
  SAVE_INFO_2,
  SAVE_INDEX_JOUEUR,
} from "../action/Role";

import { CLEAN_SERVER_DONE } from "../action/Result";

export const initialState = {
  taupe: null, // On stocke l'identifiant de la taupe
  symboleTaupe: null, // Le symbole que doit defendre la taupe
  /************************ */
  info1: null, // l'identification de l'informateur 1
  SymboleInfo1: null, // Le symbole a ne pas jouer de informateur 1
  /*********************** */
  info2: null, // l'identification de l'informateur 2
  SymboleInfo2: null, // Le symbole a ne pas jouer de informateur 1
  /*********************** */
  /**
   * ici on enregistre notre index si on n'est joueur
   */
  joueur: [],
};

function roleReducer(state = initialState, action = {}) {
  switch (action.type) {
    // ici on stock l'index de la taupe
    case SAVE_TAUPE:
      console.log("l'index de la taupe", action.indexTaupe);
      return {
        ...state,
        taupe: action.indexTaupe[0],
          symboleTaupe: action.indexTaupe[1],
      };

      // ici on stock l'index de l'informateur 1
    case SAVE_INFO_1:
      console.log("l'index de l'info1", action.indexInfo1);
      return {
        ...state,
        info1: action.indexInfo1[0],
          SymboleInfo1: action.indexInfo1[1],
      };

      // ici on stock l'index de l'informateur 2
    case SAVE_INFO_2:
      console.log("l'index de l'info2", action.indexInfo2);
      return {
        ...state,
        info2: action.indexInfo2[0],
          SymboleInfo2: action.indexInfo2[1],
      };

      // ici on stock l'index des joueurs
    case SAVE_INDEX_JOUEUR:
      const joueur = [...(state.joueur || [])];
      joueur.push(action.indeJoueurNumber);
      return {
        ...state,
        joueur,
      };


      // ici on stock l'index des joueurs
      case CLEAN_SERVER_DONE:
        console.log('le serveur est propre - role');
        return {
          ...state,
          taupe: null,
          symboleTaupe: null,
          info1: null,
          SymboleInfo1: null,
          info2: null,
          SymboleInfo2: null,
          joueur: [],
        };
       

      //V pas touche
    default:
      return state;
  }
}

export default roleReducer;
