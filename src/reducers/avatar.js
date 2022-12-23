import {
  PSEUDO_VALUE_INVITE,
  SAVE_AVATAR_IMG,
  SAVE_AVATAR_IMG_INVIT,
  SAVE_PSEUDO_HOTE,
  INCREMENTATION_INDEX,
} from "../action/Avatar";

import { SAVE_HOTE_DATA } from "../action/connection";

export const initialState = {
  i: 0,
  hote: {
    valuePseudo: "", // Rempli uniquement pour tout le monde pour afficher les datas de l'hote
    avatarImg: null, // Rempli uniquement pour tout le monde pour afficher les datas de l'hote
    avatarImgHote: null, // Rempli uniquement pour l'hote
    hotePseudo: "", // Rempli uniquement pour l'hote
  },
  joueurSelf: {
    i: null,
    valuePseudo: "", // Le pseudo des joueurs
    avatarImg: null, // l'avatar des joueurs
  },
  joueurs: {
    i1: null,
    ValuePseudo1: "",
    avatarImg1: null,
    //********** */
    i2: null,
    ValuePseudo2: "",
    avatarImg2: null,
    //********** */
    i3: null,
    ValuePseudo3: "",
    avatarImg3: null,
    //********** */
    i4: null,
    ValuePseudo4: "",
    avatarImg4: null,
    //********** */
    i5: null,
    ValuePseudo5: "",
    avatarImg5: null,
    //********** */
    i6: null,
    ValuePseudo6: "",
    avatarImg6: null,
    //********** */
    i7: null,
    ValuePseudo7: "",
    avatarImg7: null,
    //********** */
    i8: null,
    ValuePseudo8: "",
    avatarImg8: null,
    //********** */
    i9: null,
    ValuePseudo9: "",
    avatarImg9: null,
    //********** */
    i10: null,
    ValuePseudo10: "",
    avatarImg10: null,
    //********** */
    i11: null,
    ValuePseudo11: "",
    avatarImg11: null,
    //********** */
    i12: null,
    ValuePseudo12: "",
    avatarImg12: null,
    //********** */
    i13: null,
    ValuePseudo13: "",
    avatarImg13: null,
    //********** */
    i14: null,
    ValuePseudo14: "",
    avatarImg14: null,
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
      };

    // sert a incrementer l'index qui identifi les joueurs
    case INCREMENTATION_INDEX:
      return {
        ...state,
        i: action.index,
      };

    // V pas touche
    default:
      return state;
  }
}

export default avatarReducer;
