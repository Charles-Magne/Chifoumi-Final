import {
  PSEUDO_VALUE_INVITE,
  SAVE_NB_PLAYER,
  SAVE_PLAYER_NAME,
  SAVE_AVATAR_IMG,
  SAVE_AVATAR_IMG_INVIT,
  SAVE_NEW_IMG_INVITE,
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
  SAVE_BEAFORE_JOUEUR_14,
  CHOOSE_CARD_PIERRE,
  CHOOSE_CARD_FEUILLE,
  CHOOSE_CARD_CISEAUX,
  SAVE_CHOIX_SYMBOLE,
  SAVE_WIN_WS,
  SAVE_LOSE_WS,
  CLEAN_ROLE_SELF
} from "../action/Avatar";

import {
  SAVE_TAUPE_SELF,
  SAVE_INFO_1_SELF,
  SAVE_INFO_2_SELF,
} from "../action/Role";

import { NEW_INVITE_DETECTE, SAVE_HOTE_DATA } from "../action/connection";

import { CLEAN_SERVER_DONE } from "../action/Result";

export const initialState = {
  idJoueur: 0,
  hote: {
    valuePseudo: "", // Rempli uniquement pour tout le monde pour afficher les datas de l'hote
    avatarImg: null, // Rempli uniquement pour tout le monde pour afficher les datas de l'hote
    avatarImgHote: null, // Rempli uniquement pour l'hote
    hotePseudo: "", // Rempli uniquement pour l'hote
    choixSymbole0: null, 
    result0: null,
  },
  joueurSelf: {
    inumber: null, // l'index standard
    i: null, // L'index random
    valuePseudo: "", // Le pseudo des joueurs
    avatarImg: null, // l'avatar des joueurs
    taupeSelf: null, // Si le joueur est la taupe   
    info1Self: null, // Si le joueur est l'info1
    info2Self:null, // Si le joueur est l'info2 
    symboleSelf: null, // la card choisie par le joueurSelf
    resultSelf: null, // On enregistre ici le restultat du du joueur self
  },
  joueurs: {
    nbPlayer: 1,
    i1: null,
    indexRandom1: null,
    ValuePseudo1: "Joueur 1",
    avatarImg1: null,
    choixSymbole1: null,
    result1: null,
    //********** */
    i2: null,
    indexRandom2: null,
    ValuePseudo2: "Joueur 2",
    avatarImg2: null,
    choixSymbole2: null,
    result2: null,
    //********** */
    i3: null,
    indexRandom3: null,
    ValuePseudo3: "Joueur 3",
    avatarImg3: null,
    choixSymbole3: null,
    result3: null,
    //********** */
    i4: null,
    indexRandom4: null,
    ValuePseudo4: "Joueur 4",
    avatarImg4: null,
    choixSymbole4: null,
    result4: null,
    //********** */
    i5: null,
    indexRandom5: null,
    ValuePseudo5: "Joueur 5",
    avatarImg5: null,
    choixSymbole5: null,
    result5: null,
    //********** */
    i6: null,
    indexRandom6: null,
    ValuePseudo6: "Joueur 6",
    avatarImg6: null,
    choixSymbole6: null,
    result6: null,
    //********** */
    i7: null,
    indexRandom7: null,
    ValuePseudo7: "Joueur 7",
    avatarImg7: null,
    choixSymbole7: null,
    result7: null,
    //********** */
    i8: null,
    indexRandom8: null,
    ValuePseudo8: "Joueur 8",
    avatarImg8: null,
    choixSymbole8: null,
    result8: null,
    //********** */
    i9: null,
    indexRandom9: null,
    ValuePseudo9: "Joueur 9",
    avatarImg9: null,
    choixSymbole9: null,
    result9: null,
    //********** */
    i10: null,
    indexRandom10: null,
    ValuePseudo10: "Joueur 10",
    avatarImg10: null,
    choixSymbole10: null,
    result10: null,
    //********** */
    i11: null,
    indexRandom11: null,
    ValuePseudo11: "Joueur 11",
    avatarImg11: null,
    choixSymbole11: null,
    result11: null,
    //********** */
    i12: null,
    indexRandom12: null,
    ValuePseudo12: "Joueur 12",
    avatarImg12: null,
    choixSymbole12: null,
    result12: null,
    //********** */
    i13: null,
    indexRandom13: null,
    ValuePseudo13: "Joueur 13",
    avatarImg13: null,
    choixSymbole13: null,
    result13: null,
    //********** */
    i14: null,
    indexRandom14: null,
    ValuePseudo14: "Joueur 14",
    avatarImg14: null,
    choixSymbole14: null,
    result14: null,
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
          inumber: 0,
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
        joueurSelf: {
          ...state.joueurSelf,
          avatarImg: action.target,
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

    // nbPlayer:0,
    //joueurs: {
    // nbPlayer:0,
    // Save l'img servant a l'avatar de l'invité
    case SAVE_NB_PLAYER:
      let nbOfPlayer = action.index + 1;
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          nbPlayer: nbOfPlayer,
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
          i14: action.i,
          indexRandom14: action.numberRandomPlayer,
        },
      };

    /*************************************** */

    // On save les names des joueurs
    case SAVE_PLAYER_NAME:
      console.log(
        "on test l'index =>",
        action.index,
        "-",
        "on test le name des pseudo =>",
        action.name
      );
      let pseudoKey = `ValuePseudo${action.index}`;
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          [pseudoKey]: action.name,
        },
      };

    /*************************************** */

    // save l'index des joueurs qui se sont connecté avant nous
    case SAVE_BEAFORE_JOUEUR_2:
      console.log("test de l'image du joueur 1", action.beforeJoueur2[2]);
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1: action.beforeJoueur2[0],
          indexRandom1: action.beforeJoueur2[1],
          avatarImg1: action.beforeJoueur2[2],
          ValuePseudo1: action.beforeJoueur2[3],
        },
      };

    // save l'index des joueurs qui se sont connecté avant nous
    case SAVE_BEAFORE_JOUEUR_3:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1: action.beforeJoueur3[0],
          indexRandom1: action.beforeJoueur3[1],
          i2: action.beforeJoueur3[2],
          indexRandom2: action.beforeJoueur3[3],
          avatarImg1: action.beforeJoueur3[4],
          avatarImg2: action.beforeJoueur3[5],
          ValuePseudo1: action.beforeJoueur3[6],
          ValuePseudo2: action.beforeJoueur3[7],
        },
      };

    // save l'index des joueurs qui se sont connecté avant nous
    case SAVE_BEAFORE_JOUEUR_4:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1: action.beforeJoueur4[0],
          indexRandom1: action.beforeJoueur4[1],
          i2: action.beforeJoueur4[2],
          indexRandom2: action.beforeJoueur4[3],
          i3: action.beforeJoueur4[4],
          indexRandom3: action.beforeJoueur4[5],
          avatarImg1: action.beforeJoueur4[6],
          avatarImg2: action.beforeJoueur4[7],
          avatarImg3: action.beforeJoueur4[8],
          ValuePseudo1: action.beforeJoueur4[9],
          ValuePseudo2: action.beforeJoueur4[9],
          ValuePseudo3: action.beforeJoueur4[10],
        },
      };

    // save l'index des joueurs qui se sont connecté avant nous
    case SAVE_BEAFORE_JOUEUR_5:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1: action.beforeJoueur5[0],
          indexRandom1: action.beforeJoueur5[1],
          i2: action.beforeJoueur5[2],
          indexRandom2: action.beforeJoueur5[3],
          i3: action.beforeJoueur5[4],
          indexRandom3: action.beforeJoueur5[5],
          i4: action.beforeJoueur5[6],
          indexRandom4: action.beforeJoueur5[7],
          avatarImg1: action.beforeJoueur5[8],
          avatarImg2: action.beforeJoueur5[9],
          avatarImg3: action.beforeJoueur5[10],
          avatarImg4: action.beforeJoueur5[11],
          ValuePseudo1: action.beforeJoueur5[12],
          ValuePseudo2: action.beforeJoueur5[13],
          ValuePseudo3: action.beforeJoueur5[14],
          ValuePseudo4: action.beforeJoueur5[15],
        },
      };

    case SAVE_BEAFORE_JOUEUR_6:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1: action.beforeJoueur6[0],
          indexRandom1: action.beforeJoueur6[1],
          i2: action.beforeJoueur6[2],
          indexRandom2: action.beforeJoueur6[3],
          i3: action.beforeJoueur6[4],
          indexRandom3: action.beforeJoueur6[5],
          i4: action.beforeJoueur6[6],
          indexRandom4: action.beforeJoueur6[7],
          i5: action.beforeJoueur6[8],
          indexRandom5: action.beforeJoueur6[9],
          avatarImg1: action.beforeJoueur6[10],
          avatarImg2: action.beforeJoueur6[11],
          avatarImg3: action.beforeJoueur6[12],
          avatarImg4: action.beforeJoueur6[13],
          avatarImg5: action.beforeJoueur6[14],
          ValuePseudo1: action.beforeJoueur6[15],
          ValuePseudo2: action.beforeJoueur6[16],
          ValuePseudo3: action.beforeJoueur6[17],
          ValuePseudo4: action.beforeJoueur6[18],
          ValuePseudo5: action.beforeJoueur6[19],
        },
      };

    case SAVE_BEAFORE_JOUEUR_7:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1: action.beforeJoueur7[0],
          indexRandom1: action.beforeJoueur7[1],
          i2: action.beforeJoueur7[2],
          indexRandom2: action.beforeJoueur7[3],
          i3: action.beforeJoueur7[4],
          indexRandom3: action.beforeJoueur7[5],
          i4: action.beforeJoueur7[6],
          indexRandom4: action.beforeJoueur7[7],
          i5: action.beforeJoueur7[8],
          indexRandom5: action.beforeJoueur7[9],
          i6: action.beforeJoueur7[10],
          indexRandom6: action.beforeJoueur7[11],
          avatarImg1: action.beforeJoueur7[12],
          avatarImg2: action.beforeJoueur7[13],
          avatarImg3: action.beforeJoueur7[14],
          avatarImg4: action.beforeJoueur7[15],
          avatarImg5: action.beforeJoueur7[16],
          avatarImg6: action.beforeJoueur7[17],
          ValuePseudo1: action.beforeJoueur7[18],
          ValuePseudo2: action.beforeJoueur7[19],
          ValuePseudo3: action.beforeJoueur7[20],
          ValuePseudo4: action.beforeJoueur7[21],
          ValuePseudo5: action.beforeJoueur7[22],
          ValuePseudo6: action.beforeJoueur7[23],
        },
      };

    case SAVE_BEAFORE_JOUEUR_8:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1: action.beforeJoueur8[0],
          indexRandom1: action.beforeJoueur8[1],
          i2: action.beforeJoueur8[2],
          indexRandom2: action.beforeJoueur8[3],
          i3: action.beforeJoueur8[4],
          indexRandom3: action.beforeJoueur8[5],
          i4: action.beforeJoueur8[6],
          indexRandom4: action.beforeJoueur8[7],
          i5: action.beforeJoueur8[8],
          indexRandom5: action.beforeJoueur8[9],
          i6: action.beforeJoueur8[10],
          indexRandom6: action.beforeJoueur8[11],
          i7: action.beforeJoueur8[12],
          indexRandom7: action.beforeJoueur8[13],
          avatarImg1: action.beforeJoueur8[14],
          avatarImg2: action.beforeJoueur8[15],
          avatarImg3: action.beforeJoueur8[16],
          avatarImg4: action.beforeJoueur8[17],
          avatarImg5: action.beforeJoueur8[18],
          avatarImg6: action.beforeJoueur8[19],
          avatarImg7: action.beforeJoueur8[20],
          ValuePseudo1: action.beforeJoueur8[21],
          ValuePseudo2: action.beforeJoueur8[22],
          ValuePseudo3: action.beforeJoueur8[23],
          ValuePseudo4: action.beforeJoueur8[24],
          ValuePseudo5: action.beforeJoueur8[25],
          ValuePseudo6: action.beforeJoueur8[26],
          ValuePseudo7: action.beforeJoueur8[27],
        },
      };

    case SAVE_BEAFORE_JOUEUR_9:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1: action.beforeJoueur9[0],
          indexRandom1: action.beforeJoueur9[1],
          i2: action.beforeJoueur9[2],
          indexRandom2: action.beforeJoueur9[3],
          i3: action.beforeJoueur9[4],
          indexRandom3: action.beforeJoueur9[5],
          i4: action.beforeJoueur9[6],
          indexRandom4: action.beforeJoueur9[7],
          i5: action.beforeJoueur9[8],
          indexRandom5: action.beforeJoueur9[9],
          i6: action.beforeJoueur9[10],
          indexRandom6: action.beforeJoueur9[11],
          i7: action.beforeJoueur9[12],
          indexRandom7: action.beforeJoueur9[13],
          i8: action.beforeJoueur9[14],
          indexRandom8: action.beforeJoueur9[15],
          avatarImg1: action.beforeJoueur9[16],
          avatarImg2: action.beforeJoueur9[17],
          avatarImg3: action.beforeJoueur9[18],
          avatarImg4: action.beforeJoueur9[19],
          avatarImg5: action.beforeJoueur9[20],
          avatarImg6: action.beforeJoueur9[21],
          avatarImg7: action.beforeJoueur9[22],
          avatarImg8: action.beforeJoueur9[23],
          ValuePseudo1: action.beforeJoueur9[24],
          ValuePseudo2: action.beforeJoueur9[25],
          ValuePseudo3: action.beforeJoueur9[26],
          ValuePseudo4: action.beforeJoueur9[27],
          ValuePseudo5: action.beforeJoueur9[28],
          ValuePseudo6: action.beforeJoueur9[29],
          ValuePseudo7: action.beforeJoueur9[30],
          ValuePseudo8: action.beforeJoueur9[31],
        },
      };

    case SAVE_BEAFORE_JOUEUR_10:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1: action.beforeJoueur10[0],
          indexRandom1: action.beforeJoueur10[1],
          i2: action.beforeJoueur10[2],
          indexRandom2: action.beforeJoueur10[3],
          i3: action.beforeJoueur10[4],
          indexRandom3: action.beforeJoueur10[5],
          i4: action.beforeJoueur10[6],
          indexRandom4: action.beforeJoueur10[7],
          i5: action.beforeJoueur10[8],
          indexRandom5: action.beforeJoueur10[9],
          i6: action.beforeJoueur10[10],
          indexRandom6: action.beforeJoueur10[11],
          i7: action.beforeJoueur10[12],
          indexRandom7: action.beforeJoueur10[13],
          i8: action.beforeJoueur10[14],
          indexRandom8: action.beforeJoueur10[15],
          i9: action.beforeJoueur10[16],
          indexRandom9: action.beforeJoueur10[17],
          avatarImg1: action.beforeJoueur10[18],
          avatarImg2: action.beforeJoueur10[19],
          avatarImg3: action.beforeJoueur10[20],
          avatarImg4: action.beforeJoueur10[21],
          avatarImg5: action.beforeJoueur10[22],
          avatarImg6: action.beforeJoueur10[23],
          avatarImg7: action.beforeJoueur10[24],
          avatarImg8: action.beforeJoueur10[25],
          avatarImg9: action.beforeJoueur10[26],
          ValuePseudo1: action.beforeJoueur10[27],
          ValuePseudo2: action.beforeJoueur10[28],
          ValuePseudo3: action.beforeJoueur10[29],
          ValuePseudo4: action.beforeJoueur10[30],
          ValuePseudo5: action.beforeJoueur10[31],
          ValuePseudo6: action.beforeJoueur10[32],
          ValuePseudo7: action.beforeJoueur10[33],
          ValuePseudo8: action.beforeJoueur10[34],
          ValuePseudo9: action.beforeJoueur10[35],
        },
      };

    case SAVE_BEAFORE_JOUEUR_11:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1: action.beforeJoueur11[0],
          indexRandom1: action.beforeJoueur11[1],
          i2: action.beforeJoueur11[2],
          indexRandom2: action.beforeJoueur11[3],
          i3: action.beforeJoueur11[4],
          indexRandom3: action.beforeJoueur11[5],
          i4: action.beforeJoueur11[6],
          indexRandom4: action.beforeJoueur11[7],
          i5: action.beforeJoueur11[8],
          indexRandom5: action.beforeJoueur11[9],
          i6: action.beforeJoueur11[10],
          indexRandom6: action.beforeJoueur11[11],
          i7: action.beforeJoueur11[12],
          indexRandom7: action.beforeJoueur11[13],
          i8: action.beforeJoueur11[14],
          indexRandom8: action.beforeJoueur11[15],
          i9: action.beforeJoueur11[16],
          indexRandom9: action.beforeJoueur11[17],
          i10: action.beforeJoueur11[18],
          indexRandom10: action.beforeJoueur11[19],
          avatarImg1: action.beforeJoueur11[20],
          avatarImg2: action.beforeJoueur11[21],
          avatarImg3: action.beforeJoueur11[22],
          avatarImg4: action.beforeJoueur11[23],
          avatarImg5: action.beforeJoueur11[24],
          avatarImg6: action.beforeJoueur11[25],
          avatarImg7: action.beforeJoueur11[26],
          avatarImg8: action.beforeJoueur11[27],
          avatarImg9: action.beforeJoueur11[28],
          avatarImg10: action.beforeJoueur11[29],
          ValuePseudo1: action.beforeJoueur11[30],
          ValuePseudo2: action.beforeJoueur11[31],
          ValuePseudo3: action.beforeJoueur11[32],
          ValuePseudo4: action.beforeJoueur11[33],
          ValuePseudo5: action.beforeJoueur11[34],
          ValuePseudo6: action.beforeJoueur11[35],
          ValuePseudo7: action.beforeJoueur11[36],
          ValuePseudo8: action.beforeJoueur11[37],
          ValuePseudo9: action.beforeJoueur11[38],
          ValuePseudo10: action.beforeJoueur11[39],
        },
      };

    case SAVE_BEAFORE_JOUEUR_12:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1: action.beforeJoueur12[0],
          indexRandom1: action.beforeJoueur12[1],
          i2: action.beforeJoueur12[2],
          indexRandom2: action.beforeJoueur12[3],
          i3: action.beforeJoueur12[4],
          indexRandom3: action.beforeJoueur12[5],
          i4: action.beforeJoueur12[6],
          indexRandom4: action.beforeJoueur12[7],
          i5: action.beforeJoueur12[8],
          indexRandom5: action.beforeJoueur12[9],
          i6: action.beforeJoueur12[10],
          indexRandom6: action.beforeJoueur12[11],
          i7: action.beforeJoueur12[12],
          indexRandom7: action.beforeJoueur12[13],
          i8: action.beforeJoueur12[14],
          indexRandom8: action.beforeJoueur12[15],
          i9: action.beforeJoueur12[16],
          indexRandom9: action.beforeJoueur12[17],
          i10: action.beforeJoueur12[18],
          indexRandom10: action.beforeJoueur12[19],
          i11: action.beforeJoueur12[20],
          indexRandom11: action.beforeJoueur12[21],
          avatarImg1: action.beforeJoueur12[22],
          avatarImg2: action.beforeJoueur12[23],
          avatarImg3: action.beforeJoueur12[24],
          avatarImg4: action.beforeJoueur12[25],
          avatarImg5: action.beforeJoueur12[26],
          avatarImg6: action.beforeJoueur12[27],
          avatarImg7: action.beforeJoueur12[28],
          avatarImg8: action.beforeJoueur12[29],
          avatarImg9: action.beforeJoueur12[30],
          avatarImg10: action.beforeJoueur12[31],
          avatarImg11: action.beforeJoueur12[32],
          ValuePseudo1: action.beforeJoueur12[33],
          ValuePseudo2: action.beforeJoueur12[34],
          ValuePseudo3: action.beforeJoueur12[35],
          ValuePseudo4: action.beforeJoueur12[36],
          ValuePseudo5: action.beforeJoueur12[37],
          ValuePseudo6: action.beforeJoueur12[38],
          ValuePseudo7: action.beforeJoueur12[39],
          ValuePseudo8: action.beforeJoueur12[40],
          ValuePseudo9: action.beforeJoueur12[41],
          ValuePseudo10: action.beforeJoueur12[42],
          ValuePseudo11: action.beforeJoueur12[43],
        },
      };

    case SAVE_BEAFORE_JOUEUR_13:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1: action.beforeJoueur13[0],
          indexRandom1: action.beforeJoueur13[1],
          i2: action.beforeJoueur13[2],
          indexRandom2: action.beforeJoueur13[3],
          i3: action.beforeJoueur13[4],
          indexRandom3: action.beforeJoueur13[5],
          i4: action.beforeJoueur13[6],
          indexRandom4: action.beforeJoueur13[7],
          i5: action.beforeJoueur13[8],
          indexRandom5: action.beforeJoueur13[9],
          i6: action.beforeJoueur13[10],
          indexRandom6: action.beforeJoueur13[11],
          i7: action.beforeJoueur13[12],
          indexRandom7: action.beforeJoueur13[13],
          i8: action.beforeJoueur13[14],
          indexRandom8: action.beforeJoueur13[15],
          i9: action.beforeJoueur13[16],
          indexRandom9: action.beforeJoueur13[17],
          i10: action.beforeJoueur13[18],
          indexRandom10: action.beforeJoueur13[19],
          i11: action.beforeJoueur13[20],
          indexRandom11: action.beforeJoueur13[21],
          i12: action.beforeJoueur13[22],
          indexRandom12: action.beforeJoueur13[23],
          avatarImg1: action.beforeJoueur13[24],
          avatarImg2: action.beforeJoueur13[25],
          avatarImg3: action.beforeJoueur13[26],
          avatarImg4: action.beforeJoueur13[27],
          avatarImg5: action.beforeJoueur13[28],
          avatarImg6: action.beforeJoueur13[29],
          avatarImg7: action.beforeJoueur13[30],
          avatarImg8: action.beforeJoueur13[31],
          avatarImg9: action.beforeJoueur13[32],
          avatarImg10: action.beforeJoueur13[33],
          avatarImg11: action.beforeJoueur13[34],
          avatarImg12: action.beforeJoueur13[35],
          ValuePseudo1: action.beforeJoueur13[36],
          ValuePseudo2: action.beforeJoueur13[37],
          ValuePseudo3: action.beforeJoueur13[38],
          ValuePseudo4: action.beforeJoueur13[39],
          ValuePseudo5: action.beforeJoueur13[40],
          ValuePseudo6: action.beforeJoueur13[41],
          ValuePseudo7: action.beforeJoueur13[42],
          ValuePseudo8: action.beforeJoueur13[43],
          ValuePseudo9: action.beforeJoueur13[44],
          ValuePseudo10: action.beforeJoueur13[45],
          ValuePseudo11: action.beforeJoueur13[46],
          ValuePseudo12: action.beforeJoueur13[47],
        },
      };

    case SAVE_BEAFORE_JOUEUR_14:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          i1: action.beforeJoueur14[0],
          indexRandom1: action.beforeJoueur14[1],
          i2: action.beforeJoueur14[2],
          indexRandom2: action.beforeJoueur14[3],
          i3: action.beforeJoueur14[4],
          indexRandom3: action.beforeJoueur14[5],
          i4: action.beforeJoueur14[6],
          indexRandom4: action.beforeJoueur14[7],
          i5: action.beforeJoueur14[8],
          indexRandom5: action.beforeJoueur14[9],
          i6: action.beforeJoueur14[10],
          indexRandom6: action.beforeJoueur14[11],
          i7: action.beforeJoueur14[12],
          indexRandom7: action.beforeJoueur14[13],
          i8: action.beforeJoueur14[14],
          indexRandom8: action.beforeJoueur14[15],
          i9: action.beforeJoueur14[16],
          indexRandom9: action.beforeJoueur14[17],
          i10: action.beforeJoueur14[18],
          indexRandom10: action.beforeJoueur14[19],
          i11: action.beforeJoueur14[20],
          indexRandom11: action.beforeJoueur14[21],
          i12: action.beforeJoueur14[22],
          indexRandom12: action.beforeJoueur14[23],
          i13: action.beforeJoueur14[24],
          indexRandom13: action.beforeJoueur14[25],
          avatarImg1: action.beforeJoueur13[26],
          avatarImg2: action.beforeJoueur14[27],
          avatarImg3: action.beforeJoueur14[28],
          avatarImg4: action.beforeJoueur14[29],
          avatarImg5: action.beforeJoueur13[30],
          avatarImg6: action.beforeJoueur14[31],
          avatarImg7: action.beforeJoueur14[32],
          avatarImg8: action.beforeJoueur14[33],
          avatarImg9: action.beforeJoueur14[34],
          avatarImg10: action.beforeJoueur14[35],
          avatarImg11: action.beforeJoueur14[36],
          avatarImg12: action.beforeJoueur14[37],
          avatarImg13: action.beforeJoueur14[38],
          ValuePseudo1: action.beforeJoueur14[39],
          ValuePseudo2: action.beforeJoueur14[40],
          ValuePseudo3: action.beforeJoueur14[41],
          ValuePseudo4: action.beforeJoueur14[42],
          ValuePseudo5: action.beforeJoueur14[43],
          ValuePseudo6: action.beforeJoueur14[44],
          ValuePseudo7: action.beforeJoueur14[45],
          ValuePseudo8: action.beforeJoueur14[46],
          ValuePseudo9: action.beforeJoueur14[47],
          ValuePseudo10: action.beforeJoueur14[48],
          ValuePseudo11: action.beforeJoueur14[49],
          ValuePseudo12: action.beforeJoueur14[50],
          ValuePseudo13: action.beforeJoueur14[51],
        },
      };

    // Ici on recoit toutes les modifications d'avatar
    case SAVE_NEW_IMG_INVITE:
      return {
        ...state,
        joueurs: {
          ...state.joueurs,
          [`avatarImg${action.index}`]: action.imgAvatar,
        },
      };

    // Ici on recoit les choix de carte pendant le jeu
    case CHOOSE_CARD_PIERRE:
      return {
        ...state,
        joueurSelf: {
          ...state.joueurSelf,
          symboleSelf: "Pierre",
        },
      };

    // Ici on recoit les choix de carte pendant le jeu
    case CHOOSE_CARD_FEUILLE:
      return {
        ...state,
        joueurSelf: {
          ...state.joueurSelf,
          symboleSelf: "Feuille",
        },
      };

    // Ici on recoit les choix de carte pendant le jeu
    case CHOOSE_CARD_CISEAUX:
      return {
        ...state,
        joueurSelf: {
          ...state.joueurSelf,
          symboleSelf: "Ciseaux",
        },
      };

    // Si on est taupe on l'enregistre dans le roleSelf
    case SAVE_TAUPE_SELF:
      //On doit verifier que l'index du joueur est le meme que celui de la taupe. =>
      if (state.joueurSelf.inumber == action.indexTaupe[0]) {
        console.log("je suis la taupe Mouhahahah");
        return {
          ...state,
          joueurSelf: {
            ...state.joueurSelf,
            taupeSelf: "Taupe",
          },
        };
      }

    // Si on est info1 on l'enregistre dans le roleSelf
    case SAVE_INFO_1_SELF:
      console.log('action info1Self declanché', action, state.joueurSelf.inumber );
      //On doit verifier que l'index du joueur est le meme que celui de l'info 1. =>
      if (state.joueurSelf.inumber == action.i) {
        console.log(('Je suis info1 =>', state.joueurSelf.inumber, action));
        return {
          ...state,
          joueurSelf: {
            ...state.joueurSelf,
            info1Self: "Info1",
          },
        };
      }

    // Si on est info2 on l'enregistre dans le roleSelf
    case SAVE_INFO_2_SELF:
      console.log('action info2Self declanché', action, state.joueurSelf.inumber );
      //On doit verifier que l'index du joueur est le meme que celui de l'info 2. =>
      if (state.joueurSelf.inumber == action.i) {
        console.log(('Je suis info2 =>', state.joueurSelf.inumber, action));
        return {
          ...state,
          joueurSelf: {
            ...state.joueurSelf,
            info2Self: "Info2",
          },
        };
      }

    // Ici on recoit via les WS les choix de symbole des autres joueurs
    case SAVE_CHOIX_SYMBOLE:
      console.log("on vient de recevoir les choix des joueurs WS", action);
      if (action.index == 0) {
        return {
          ...state,
          hote: {
            ...state.hote,
            choixSymbole0: action.choixSymbole,
          },
        };
      }

      if (action.index >= 1 && action.index <= 14) {
        return {
          ...state,
          joueurs: {
            ...state.joueurs,
            [`choixSymbole${action.index}`]: action.choixSymbole,
          },
        };
      }

    // On recoit les resultats des autres joueurs qui ont gagné
    case SAVE_WIN_WS:
      //On doit verifier que l'index du joueur est le meme que celui de l'info 1. =>
      if (action.indexSelf == 0) {
        return {
          ...state,
          hote: {
            ...state.hote,
            result0: "Win",
          },
        };
      }

      if (action.indexSelf >= 1 && action.indexSelf <= 14) {
        return {
          ...state,
          joueurs: {
            ...state.joueurs,
            [`result${action.indexSelf}`]: "Win",
          },
        };
      }

    // On recoit les resultats des autres joueurs qui ont perdu
    case SAVE_LOSE_WS:
      if (action.indexSelf == 0) {
        return {
          ...state,
          hote: {
            ...state.hote,
            result0: "LOSE",
          },
        };
      }

      if (action.indexSelf >= 1 && action.indexSelf <= 14) {
        return {
          ...state,
          joueurs: {
            ...state.joueurs,
            [`result${action.indexSelf}`]: "LOSE",
          },
        };
      }
    /**
     *Le server vient d'etre nettoyer on va maintenant effacer les données relative a cette partie 
     */
    /*case CLEAN_SERVER_DONE:
      console.log('le serveur est propre - avatar');
      return {
        ...state,
        hote: {
          ...state.hote,
          choixSymbole0: null,
          result0: null
        },
        joueurSelf:{
          ...state.joueurSelf,
          i : null,
          roleSelf: null,
          symboleSelf: null,
          resultSelf: null
        },
        joueurs: {
          ...state.joueurs,
          indexRandom1: null,
          indexRandom2: null,
          indexRandom3: null,
          indexRandom4: null,
          indexRandom5: null,
          indexRandom6: null,
          indexRandom7: null,
          indexRandom8: null,
          indexRandom9: null,
          indexRandom10: null,
          indexRandom11: null,
          indexRandom12: null,
          indexRandom13: null,
          indexRandom14: null,
          //*********************** 
          choixSymbole1: null,
          choixSymbole2: null,
          choixSymbole3: null,
          choixSymbole4: null,
          choixSymbole5: null,
          choixSymbole6: null,
          choixSymbole7: null,
          choixSymbole8: null,
          choixSymbole9: null,
          choixSymbole10: null,
          choixSymbole11: null,
          choixSymbole12: null,
          choixSymbole13: null,
          choixSymbole14: null,
         //*********************** 
         result1: null,
         result2: null,
         result3: null,
         result4: null,
         result5: null,
         result6: null,
         result7: null,
         result8: null,
         result9: null,
         result10: null,
         result11: null,
         result12: null,
         result13: null,
         result14: null
        },
      };*/

      
    /**
     * lors du clic sur nouvelle partie, on nettoye le state
     */ 
    case CLEAN_ROLE_SELF:
      return {
        ...state,
        joueurSelf: {
          ...state.joueurSelf,
          taupeSelf: null,
          info1Self: null,
          info2Self: null
        },
      };

    // V pas touche
    default:
      return state;
  }
}

export default avatarReducer;
