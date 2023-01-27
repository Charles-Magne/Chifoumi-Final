import {
  PSEUDO_VALUE_INVITE,
  SAVE_AVATAR_IMG,
  SAVE_AVATAR_IMG_INVIT,
  SAVE_PSEUDO_HOTE,
  
  SAVE_PLAYER_SELF_INDEX,
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
  SAVE_PLAYER_14_INDEX, 
  SAVE_BEAFORE_JOUEUR_2,
  SAVE_BEAFORE_JOUEUR_3,
  SAVE_BEAFORE_JOUEUR_4,
  SAVE_BEAFORE_JOUEUR_5,
  SAVE_BEAFORE_JOUEUR_6,
  SAVE_BEAFORE_JOUEUR_7,
  SAVE_BEAFORE_JOUEUR_8,
  SAVE_BEAFORE_JOUEUR_9,
  SAVE_BEAFORE_JOUEUR_10,
  SAVE_BEAFORE_JOUEUR_11,
  SAVE_BEAFORE_JOUEUR_12,
  SAVE_BEAFORE_JOUEUR_13,
  SAVE_BEAFORE_JOUEUR_14
} from "../action/Avatar";

import { NEW_INVITE_DETECTE, SAVE_HOTE_DATA } from "../action/connection";

export const initialState = {
  idJoueur: 0,
  hote: {
    valuePseudo: "", // Rempli uniquement pour tout le monde pour afficher les datas de l'hote
    avatarImg: null, // Rempli uniquement pour tout le monde pour afficher les datas de l'hote
    avatarImgHote: null, // Rempli uniquement pour l'hote
    hotePseudo: "", // Rempli uniquement pour l'hote
  },
  joueurSelf: {
    inumber: null, // l'index standard
    i: null, // L'index random
    valuePseudo: "", // Le pseudo des joueurs
    avatarImg: null, // l'avatar des joueurs
  },
  joueurs: {
    i1: null,
    indexRandom1: null,
    ValuePseudo1: "Player 1",
    avatarImg1: null,
    //********** */
    i2: null,
    indexRandom2: null,
    ValuePseudo2: "Player 2",
    avatarImg2: null,
    //********** */
    i3: null,
    indexRandom3: null,
    ValuePseudo3: "Player 3",
    avatarImg3: null,
    //********** */
    i4: null,
    indexRandom4: null,
    ValuePseudo4: "Player 4",
    avatarImg4: null,
    //********** */
    i5: null,
    indexRandom5: null,
    ValuePseudo5: "Player 5",
    avatarImg5: null,
    //********** */
    i6: null,
    indexRandom6: null,
    ValuePseudo6: "Player 6",
    avatarImg6: null,
    //********** */
    i7: null,
    indexRandom7: null,
    ValuePseudo7: "Player 7",
    avatarImg7: null,
    //********** */
    i8: null,
    indexRandom8: null,
    ValuePseudo8: "Player 8",
    avatarImg8: null,
    //********** */
    i9: null,
    indexRandom9: null,
    ValuePseudo9: "Player 9",
    avatarImg9: null,
    //********** */
    i10: null,
    indexRandom10: null,
    ValuePseudo10: "Player 10",
    avatarImg10: null,
    //********** */
    i11: null,
    indexRandom11: null,
    ValuePseudo11: "Player 11",
    avatarImg11: null,
    //********** */
    i12: null,
    indexRandom12: null,
    ValuePseudo12: "Player 12",
    avatarImg12: null,
    //********** */
    i13: null,
    indexRandom13: null,
    ValuePseudo13: "Player 13",
    avatarImg13: null,
    //********** */
    i14: null,
    indexRandom14: null,
    ValuePseudo14: "Player 14",
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

      
          // le use effect de meetplayer qui genere un random index
    case NEW_INVITE_DETECTE:
      return {
        ...state,
        joueurSelf: {
          ...state.joueurSelf,
          i: action.indexRandomPlayer,
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

      /*****************On save les indexs des joueurs lorsqu'ils se connectent au salon  */
         // save l'index du joueur 1
         case SAVE_PLAYER_SELF_INDEX:
          return {
            ...state,
            joueurSelf: {
              ...state.joueurSelf,
              inumber: action.i, 
              i: action.numberRandomPlayer,
            },
          };

         // save l'index du joueur 1
    case SAVE_PLAYER_1_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1: action.i, 
          indexRandom1: action.numberRandomPlayer,
        },
      };

          // save l'index du joueur 2
    case SAVE_PLAYER_2_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i2: action.i, 
          indexRandom2: action.numberRandomPlayer,
        },
      };

         // save l'index du joueur 3
    case SAVE_PLAYER_3_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i3: action.i, 
          indexRandom3: action.numberRandomPlayer,
        },
      };
         // save l'index du joueur 4
    case SAVE_PLAYER_4_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i4: action.i, 
          indexRandom4: action.numberRandomPlayer,
        },
      };
         // save l'index du joueur 5
    case SAVE_PLAYER_5_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i5: action.i, 
          indexRandom5: action.numberRandomPlayer,
        },
      };
         // save l'index du joueur 6
    case SAVE_PLAYER_6_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i6: action.i, 
          indexRandom6: action.numberRandomPlayer,
        },
      };
         // save l'index du joueur 7
    case SAVE_PLAYER_7_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i7: action.i, 
          indexRandom7: action.numberRandomPlayer,
        },
      };
      
         // save l'index du joueur 8
    case SAVE_PLAYER_8_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i8: action.i, 
          indexRandom8: action.numberRandomPlayer,
        },
      };
         // save l'index du joueur 9
    case SAVE_PLAYER_9_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i9: action.i, 
          indexRandom9: action.numberRandomPlayer,
        },
      };
         // save l'index du joueur 10
    case SAVE_PLAYER_10_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i10: action.i, 
          indexRandom10: action.numberRandomPlayer,
        },
      };
         // save l'index du joueur 11
    case SAVE_PLAYER_11_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i11: action.i,  
          indexRandom11: action.numberRandomPlayer,
        },
      };
         // save l'index du joueur 12
    case SAVE_PLAYER_12_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i12: action.i, 
          indexRandom12: action.numberRandomPlayer,
        },
      };
           // save l'index du joueur 13
    case SAVE_PLAYER_13_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i13: action.i,  
          indexRandom13: action.numberRandomPlayer,
        },
      };

      // save l'index du joueur 14
    case SAVE_PLAYER_14_INDEX:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i14:  action.i, 
          indexRandom14: action.numberRandomPlayer,
        },
      };

      /*************************************** */

      
    // save l'index des joueurs qui se sont connecté avant nous
    case SAVE_BEAFORE_JOUEUR_2:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1:  action.beforeJoueur2[0], 
          indexRandom1: action.beforeJoueur2[1],
        },
      };

       // save l'index des joueurs qui se sont connecté avant nous
    case SAVE_BEAFORE_JOUEUR_3:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1:  action.beforeJoueur3[0], 
          indexRandom1: action.beforeJoueur3[1],
          i2:  action.beforeJoueur3[2], 
          indexRandom2: action.beforeJoueur3[3],
        },
      };

         // save l'index des joueurs qui se sont connecté avant nous
    case SAVE_BEAFORE_JOUEUR_4:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1:  action.beforeJoueur4[0], 
          indexRandom1: action.beforeJoueur4[1],
          i2:  action.beforeJoueur4[2], 
          indexRandom2: action.beforeJoueur4[3],
          i3:  action.beforeJoueur4[4], 
          indexRandom3: action.beforeJoueur4[5],
        },
      };

             // save l'index des joueurs qui se sont connecté avant nous
    case SAVE_BEAFORE_JOUEUR_5:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1:  action.beforeJoueur5[0], 
          indexRandom1: action.beforeJoueur5[1],
          i2:  action.beforeJoueur5[2], 
          indexRandom2: action.beforeJoueur5[3],
          i3:  action.beforeJoueur5[4], 
          indexRandom3: action.beforeJoueur5[5],
          i4:  action.beforeJoueur5[6], 
          indexRandom4: action.beforeJoueur5[7],
        },
      };

      case SAVE_BEAFORE_JOUEUR_6:
        return {
          ...state,
          joueurs: {
            ...state.joueurs,
            i1:  action.beforeJoueur6[0], 
            indexRandom1: action.beforeJoueur6[1],
            i2:  action.beforeJoueur6[2], 
            indexRandom2: action.beforeJoueur6[3],
            i3:  action.beforeJoueur6[4], 
            indexRandom3: action.beforeJoueur6[5],
            i4:  action.beforeJoueur6[6], 
            indexRandom4: action.beforeJoueur6[7],
            i5:  action.beforeJoueur6[8], 
            indexRandom5: action.beforeJoueur6[9],
          },
        };

        case SAVE_BEAFORE_JOUEUR_7:
          return {
            ...state,
            joueurs: {
              ...state.joueurs,
              i1:  action.beforeJoueur7[0], 
              indexRandom1: action.beforeJoueur7[1],
              i2:  action.beforeJoueur7[2], 
              indexRandom2: action.beforeJoueur7[3],
              i3:  action.beforeJoueur7[4], 
              indexRandom3: action.beforeJoueur7[5],
              i4:  action.beforeJoueur7[6], 
              indexRandom4: action.beforeJoueur7[7],
              i5:  action.beforeJoueur7[8], 
              indexRandom5: action.beforeJoueur7[9],
              i6:  action.beforeJoueur7[10], 
              indexRandom6: action.beforeJoueur7[11],
            },
          };

          case SAVE_BEAFORE_JOUEUR_8:
          return {
            ...state,
            joueurs: {
              ...state.joueurs,
              i1:  action.beforeJoueur8[0], 
              indexRandom1: action.beforeJoueur8[1],
              i2:  action.beforeJoueur8[2], 
              indexRandom2: action.beforeJoueur8[3],
              i3:  action.beforeJoueur8[4], 
              indexRandom3: action.beforeJoueur8[5],
              i4:  action.beforeJoueur8[6], 
              indexRandom4: action.beforeJoueur8[7],
              i5:  action.beforeJoueur8[8], 
              indexRandom5: action.beforeJoueur8[9],
              i6:  action.beforeJoueur8[10], 
              indexRandom6: action.beforeJoueur8[11],
              i7:  action.beforeJoueur8[12], 
              indexRandom7: action.beforeJoueur8[13],
            },
          };

          case SAVE_BEAFORE_JOUEUR_9:
          return {
            ...state,
            joueurs: {
              ...state.joueurs,
              i1:  action.beforeJoueur9[0], 
              indexRandom1: action.beforeJoueur9[1],
              i2:  action.beforeJoueur9[2], 
              indexRandom2: action.beforeJoueur9[3],
              i3:  action.beforeJoueur9[4], 
              indexRandom3: action.beforeJoueur9[5],
              i4:  action.beforeJoueur9[6], 
              indexRandom4: action.beforeJoueur9[7],
              i5:  action.beforeJoueur9[8], 
              indexRandom5: action.beforeJoueur9[9],
              i6:  action.beforeJoueur9[10], 
              indexRandom6: action.beforeJoueur9[11],
              i7:  action.beforeJoueur9[12], 
              indexRandom7: action.beforeJoueur9[13],
              i8:  action.beforeJoueur9[14], 
              indexRandom8: action.beforeJoueur9[15],
            },
          };

          case SAVE_BEAFORE_JOUEUR_10:
          return {
            ...state,
            joueurs: {
              ...state.joueurs,
              i1:  action.beforeJoueur10[0], 
              indexRandom1: action.beforeJoueur10[1],
              i2:  action.beforeJoueur10[2], 
              indexRandom2: action.beforeJoueur10[3],
              i3:  action.beforeJoueur10[4], 
              indexRandom3: action.beforeJoueur10[5],
              i4:  action.beforeJoueur10[6], 
              indexRandom4: action.beforeJoueur10[7],
              i5:  action.beforeJoueur10[8], 
              indexRandom5: action.beforeJoueur10[9],
              i6:  action.beforeJoueur10[10], 
              indexRandom6: action.beforeJoueur10[11],
              i7:  action.beforeJoueur10[12], 
              indexRandom7: action.beforeJoueur10[13],
              i8:  action.beforeJoueur10[14], 
              indexRandom8: action.beforeJoueur10[15],
              i9:  action.beforeJoueur10[16], 
              indexRandom9: action.beforeJoueur10[17],
            },
          };

          case SAVE_BEAFORE_JOUEUR_11:
            return {
              ...state,
              joueurs: {
                ...state.joueurs,
                i1:  action.beforeJoueur11[0], 
                indexRandom1: action.beforeJoueur11[1],
                i2:  action.beforeJoueur11[2], 
                indexRandom2: action.beforeJoueur11[3],
                i3:  action.beforeJoueur11[4], 
                indexRandom3: action.beforeJoueur11[5],
                i4:  action.beforeJoueur11[6], 
                indexRandom4: action.beforeJoueur11[7],
                i5:  action.beforeJoueur11[8], 
                indexRandom5: action.beforeJoueur11[9],
                i6:  action.beforeJoueur11[10], 
                indexRandom6: action.beforeJoueur11[11],
                i7:  action.beforeJoueur11[12], 
                indexRandom7: action.beforeJoueur11[13],
                i8:  action.beforeJoueur11[14], 
                indexRandom8: action.beforeJoueur11[15],
                i9:  action.beforeJoueur11[16], 
                indexRandom9: action.beforeJoueur11[17],
                i10:  action.beforeJoueur11[18], 
                indexRandom10: action.beforeJoueur11[19],
              },
            };

            case SAVE_BEAFORE_JOUEUR_12:
              return {
                ...state,
                joueurs: {
                  ...state.joueurs,
                  i1:  action.beforeJoueur12[0], 
                  indexRandom1: action.beforeJoueur12[1],
                  i2:  action.beforeJoueur12[2], 
                  indexRandom2: action.beforeJoueur12[3],
                  i3:  action.beforeJoueur12[4], 
                  indexRandom3: action.beforeJoueur12[5],
                  i4:  action.beforeJoueur12[6], 
                  indexRandom4: action.beforeJoueur12[7],
                  i5:  action.beforeJoueur12[8], 
                  indexRandom5: action.beforeJoueur12[9],
                  i6:  action.beforeJoueur12[10], 
                  indexRandom6: action.beforeJoueur12[11],
                  i7:  action.beforeJoueur12[12], 
                  indexRandom7: action.beforeJoueur12[13],
                  i8:  action.beforeJoueur12[14], 
                  indexRandom8: action.beforeJoueur12[15],
                  i9:  action.beforeJoueur12[16], 
                  indexRandom9: action.beforeJoueur12[17],
                  i10:  action.beforeJoueur12[18], 
                  indexRandom10: action.beforeJoueur12[19],
                  i11:  action.beforeJoueur12[20], 
                  indexRandom11: action.beforeJoueur12[21],
                },
              };


              case SAVE_BEAFORE_JOUEUR_13:
                return {
                  ...state,
                  joueurs: {
                    ...state.joueurs,
                    i1:  action.beforeJoueur13[0], 
                    indexRandom1: action.beforeJoueur13[1],
                    i2:  action.beforeJoueur13[2], 
                    indexRandom2: action.beforeJoueur13[3],
                    i3:  action.beforeJoueur13[4], 
                    indexRandom3: action.beforeJoueur13[5],
                    i4:  action.beforeJoueur13[6], 
                    indexRandom4: action.beforeJoueur13[7],
                    i5:  action.beforeJoueur13[8], 
                    indexRandom5: action.beforeJoueur13[9],
                    i6:  action.beforeJoueur13[10], 
                    indexRandom6: action.beforeJoueur13[11],
                    i7:  action.beforeJoueur13[12], 
                    indexRandom7: action.beforeJoueur13[13],
                    i8:  action.beforeJoueur13[14], 
                    indexRandom8: action.beforeJoueur13[15],
                    i9:  action.beforeJoueur13[16], 
                    indexRandom9: action.beforeJoueur13[17],
                    i10:  action.beforeJoueur13[18], 
                    indexRandom10: action.beforeJoueur13[19],
                    i11:  action.beforeJoueur13[20], 
                    indexRandom11: action.beforeJoueur13[21],
                    i12:  action.beforeJoueur13[22], 
                    indexRandom12: action.beforeJoueur13[23],
                  },
                };

                case SAVE_BEAFORE_JOUEUR_14:
                  return {
                    ...state,
                    joueurs: {
                      ...state.joueurs,
                      i1:  action.beforeJoueur14[0], 
                      indexRandom1: action.beforeJoueur14[1],
                      i2:  action.beforeJoueur14[2], 
                      indexRandom2: action.beforeJoueur14[3],
                      i3:  action.beforeJoueur14[4], 
                      indexRandom3: action.beforeJoueur14[5],
                      i4:  action.beforeJoueur14[6], 
                      indexRandom4: action.beforeJoueur14[7],
                      i5:  action.beforeJoueur14[8], 
                      indexRandom5: action.beforeJoueur14[9],
                      i6:  action.beforeJoueur14[10], 
                      indexRandom6: action.beforeJoueur14[11],
                      i7:  action.beforeJoueur14[12], 
                      indexRandom7: action.beforeJoueur14[13],
                      i8:  action.beforeJoueur14[14], 
                      indexRandom8: action.beforeJoueur14[15],
                      i9:  action.beforeJoueur14[16], 
                      indexRandom9: action.beforeJoueur14[17],
                      i10:  action.beforeJoueur14[18], 
                      indexRandom10: action.beforeJoueur14[19],
                      i11:  action.beforeJoueur14[20], 
                      indexRandom11: action.beforeJoueur14[21],
                      i12:  action.beforeJoueur14[22], 
                      indexRandom12: action.beforeJoueur14[23],
                      i13:  action.beforeJoueur14[24], 
                      indexRandom13: action.beforeJoueur14[25],
                    },
                  };

    // V pas touche
    default:
      return state;
  }
}

export default avatarReducer;
