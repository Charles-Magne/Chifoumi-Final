import {
  PSEUDO_VALUE_INVITE,
  SAVE_AVATAR_IMG,
  SAVE_AVATAR_IMG_INVIT,
  SAVE_PSEUDO_HOTE,
  SAVE_PLAYER_0_INDEX,
  SAVE_PLAYER_1_INDEX,
  SAVE_PLAYER_2_INDEX,
  SAVE_PLAYER_3_INDEX,
  SAVE_PLAYER_4_INDEX,
  SAVE_PLAYER_5_INDEX,
  SAVE_PLAYER_6_INDEX,
  SAVE_PLAYER_7_INDEX,
  SAVE_PLAYER_8_INDEX,
  SAVE_PLAYER_9_INDEX,
  SAVE_PLAYER_10_INDEX,
  SAVE_PLAYER_11_INDEX,
  SAVE_PLAYER_12_INDEX,
  SAVE_PLAYER_13_INDEX,
} from "../action/Avatar";

import { SAVE_HOTE_DATA, NEW_INVITE_DETECTE } from "../action/connection";

export const initialState = {
  idJoueur: 0,
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
    i0: null,
    indexRandom0: null,
    ValuePseudo0: "",
    avatarImg0: null,
    //********** */
    i1: null,
    indexRandom1: null,
    ValuePseudo1: "",
    avatarImg1: null,
    //********** */
    i2: null,
    indexRandom2: null,
    ValuePseudo2: "",
    avatarImg2: null,
    //********** */
    i3: null,
    indexRandom3: null,
    ValuePseudo3: "",
    avatarImg3: null,
    //********** */
    i4: null,
    indexRandom4: null,
    ValuePseudo4: "",
    avatarImg4: null,
    //********** */
    i5: null,
    indexRandom5: null,
    ValuePseudo5: "",
    avatarImg5: null,
    //********** */
    i6: null,
    indexRandom6: null,
    ValuePseudo6: "",
    avatarImg6: null,
    //********** */
    i7: null,
    indexRandom7: null,
    ValuePseudo7: "",
    avatarImg7: null,
    //********** */
    i8: null,
    indexRandom8: null,
    ValuePseudo8: "",
    avatarImg8: null,
    //********** */
    i9: null,
    indexRandom9: null,
    ValuePseudo9: "",
    avatarImg9: null,
    //********** */
    i10: null,
    indexRandom10: null,
    ValuePseudo10: "",
    avatarImg10: null,
    //********** */
    i11: null,
    indexRandom11: null,
    ValuePseudo11: "",
    avatarImg11: null,
    //********** */
    i12: null,
    indexRandom12: null,
    ValuePseudo12: "",
    avatarImg12: null,
    //********** */
    i13: null,
    indexRandom13: null,
    ValuePseudo13: "",
    avatarImg13: null,
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

      // save le name et l'img de l'hote via appel WS
    case NEW_INVITE_DETECTE:
      return {
        ...state,
        joueurSelf: {
          ...state.joueurSelf,
          i: action.indexRandomPlayer,
        },
      };

      /*****************On save les indexs des joueurs lorsqu'ils se connectent au salon  */

       // save l'index du joueur 0
    case SAVE_PLAYER_0_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i0: action.i,
          indexRandom0: action.numberRandomPlayer.infoJoueur,
        },
      };

         // save l'index du joueur 1
    case SAVE_PLAYER_1_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1: action.i,
          indexRandom1: action.numberRandomPlayer.infoJoueur,
        },
      };

          // save l'index du joueur 2
    case SAVE_PLAYER_2_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i2: action.i,
        },
      };

         // save l'index du joueur 3
    case SAVE_PLAYER_3_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i3: action.i,
          indexRandom3: action.numberRandomPlayer.infoJoueur,
        },
      };
         // save l'index du joueur 4
    case SAVE_PLAYER_4_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i4: action.i,
          indexRandom4: action.numberRandomPlayer.infoJoueur,
        },
      };
         // save l'index du joueur 5
    case SAVE_PLAYER_5_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i5: action.i,
          indexRandom5: action.numberRandomPlayer.infoJoueur,
        },
      };
         // save l'index du joueur 6
    case SAVE_PLAYER_6_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i6: action.i,
          indexRandom6: action.numberRandomPlayer.infoJoueur,
        },
      };
         // save l'index du joueur 7
    case SAVE_PLAYER_7_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i7: action.i,
          indexRandom7: action.numberRandomPlayer.infoJoueur,
        },
      };
      
         // save l'index du joueur 8
    case SAVE_PLAYER_8_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i8: action.i,
          indexRandom8: action.numberRandomPlayer.infoJoueur,
        },
      };
         // save l'index du joueur 9
    case SAVE_PLAYER_9_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i9: action.i,
          indexRandom9: action.numberRandomPlayer.infoJoueur,
        },
      };
         // save l'index du joueur 10
    case SAVE_PLAYER_10_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i10: action.i,
          indexRandom10: action.numberRandomPlayer.infoJoueur,
        },
      };
         // save l'index du joueur 11
    case SAVE_PLAYER_11_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i11: action.i,
          indexRandom12: action.numberRandomPlayer.infoJoueur,
        },
      };
         // save l'index du joueur 12
    case SAVE_PLAYER_12_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i12: action.i,
          indexRandom12: action.numberRandomPlayer.infoJoueur,
        },
      };
           // save l'index du joueur 13
    case SAVE_PLAYER_13_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i13: action.i,
          indexRandom13: action.numberRandomPlayer.infoJoueur,
        },
      };

      

    // V pas touche
    default:
      return state;
  }
}

export default avatarReducer;
