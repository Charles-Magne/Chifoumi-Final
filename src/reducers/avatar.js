import {
  PSEUDO_VALUE_INVITE,
  SAVE_AVATAR_IMG,
  SAVE_AVATAR_IMG_INVIT,
  SAVE_PSEUDO_HOTE,
} from "../action/Avatar";

import { SAVE_HOTE_DATA } from "../action/connection";


export const initialState = {
  hote: {
    valuePseudo: "", // Rempli uniquement pour tout le monde pour afficher les datas de l'hote
    avatarImg: null, // Rempli uniquement pour tout le monde pour afficher les datas de l'hote
    avatarImgHote: null, // Rempli uniquement pour l'hote
    hotePseudo: "", // Rempli uniquement pour l'hote
  },
  joueurSelf: {
    i: null,
    valuePseudo: "",// Le pseudo des joueurs
    avatarImg: null, // l'avatar des joueurs
  },
  joueur2: {
    i: null,
    ValuePseudo: "",
    avatarImg: null,
  },
};

function avatarReducer(state = initialState, action = {}) {
  switch (action.type) {

    // save le pseudo de l'hote via la page accueil
    case SAVE_PSEUDO_HOTE:
      return {
        ...state,
        hote: {
          ...state.hote,
          valuePseudo: action.value,
          hotePseudo: action.value,
        },
        joueurSelf: {
          ...state.joueurSelf,
          valuePseudo: action.value,
        },
      };

    // Save l'img servant a l'avatar de l'hote
    case SAVE_AVATAR_IMG:
      return {
        ...state,
        hote: {
          ...state.hote,
          avatarImgHote: action.target,
        },
      };
      
      // Save l'img servant a l'avatar de l'invité
    case SAVE_AVATAR_IMG_INVIT:
      return {
        ...state,
        joueurSelf: {
          ...state.joueurSelf,
          avatarImg: action.target,
        },
      };
      

    // save le pseudo du joueur
    case PSEUDO_VALUE_INVITE:
      return {
        ...state,
        joueurSelf: {
          ...state.joueurSelf,
          valuePseudo: action.value,
        },
        
      };

      // save le name et l'img de l'hote via appel WS
      case SAVE_HOTE_DATA:
        return {
          ...state,
          hote: {
            ...state.hote,
            hotePseudo: action.img,
            avatarImgHote: action.Pseudo,
          },
        }

    // V pas touche
    default:
      return state;
  }
}

export default avatarReducer;
