import ReactDOM from "react-dom";
import MeetplayerDom from "../components/Meetplayer";
import  store  from '../store/index.js';

//les actions
import {
  CONNECTION_WEB_SO,
  NEW_INVITE_DETECTE,
  SaveHoteData,
  HOTE_DETECTE,
} from "../action/connection";

import {
  Saveplayer0Index,
  Saveplayer1Index,
  Saveplayer2Index,
  Saveplayer3Index,
  Saveplayer4Index,
  Saveplayer5Index,
  Saveplayer6Index,
  Saveplayer7Index,
  Saveplayer8Index,
  Saveplayer9Index,
  Saveplayer10Index,
  Saveplayer11Index,
  Saveplayer12Index,
  Saveplayer13Index,
  SEND_INDEX_PLAYER_0,
  SEND_INDEX_PLAYER_1, 
  SEND_INDEX_PLAYER_2,
  SEND_INDEX_PLAYER_3,
  SEND_INDEX_PLAYER_4,
  SEND_INDEX_PLAYER_5,
  SEND_INDEX_PLAYER_6,
  SEND_INDEX_PLAYER_7,
  SEND_INDEX_PLAYER_8,
  SEND_INDEX_PLAYER_9,
  SEND_INDEX_PLAYER_10,
  SEND_INDEX_PLAYER_11,
  SEND_INDEX_PLAYER_12,
  SEND_INDEX_PLAYER_13,
  SEND_INDEX_PLAYER_14,
} from "../action/Avatar";

let socket;
//const dispatch = useDispatch();

// APPEL_API 3- ici on recupere l'action exporté juste au dessus et lui demande de recuperer les datas voulu
const webSocketConnection = (store) => (next) => (action) => {

  const state = store.getState();
  switch (action.type) {
    // Connection au serveur 3001 lors du useEffect de la page meetplayer
    case CONNECTION_WEB_SO: {
      socket = window.io("http://localhost:3001");
      socket.emit("connection", {});
      console.log("ca marche bien les socket", socket);

      // On est notifier qu'un nouveau joueur rejoint le salon
      socket.on("new_invite_detecte", (newPlayer) => {
        console.log("un nouvau joueur", newPlayer, newPlayer.i);
        // Si on recoit le joueur 0, On passe sa div en flex, on enregistre les deux index dans le state et on les renvoie via les WS
        if (newPlayer.i === 0) {
          store.dispatch(
            Saveplayer0Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          // On cible la div et on l'affiche
          const findPlayer1 = document.querySelector(".joueur1");
          const player1Flex = ReactDOM.findDOMNode(findPlayer1);
          player1Flex.style.display = "flex";
        } else if (newPlayer.i === 1) {
          store.dispatch(
            Saveplayer1Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          const findPlayer2 = document.querySelector(".joueur2");
          const player2Flex = ReactDOM.findDOMNode(findPlayer2);
          player2Flex.style.display = "flex";
        } else if (newPlayer.i === 2) {
          store.dispatch(
            Saveplayer2Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          const findPlayer3 = document.querySelector(".joueur3");
          const player3Flex = ReactDOM.findDOMNode(findPlayer3);
          player3Flex.style.display = "flex";
        } else if (newPlayer.i === 3) {
          store.dispatch(
            Saveplayer3Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          const findPlayer4 = document.querySelector(".joueur4");
          const player4Flex = ReactDOM.findDOMNode(findPlayer4);
          player4Flex.style.display = "flex";
        } else if (newPlayer.i == 4) {
          store.dispatch(
            Saveplayer4Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          const findPlayer5 = document.querySelector(".joueur5");
          const player5Flex = ReactDOM.findDOMNode(findPlayer5);
          player5Flex.style.display = "flex";
        } else if (newPlayer.i == 5) {
          store.dispatch(
            Saveplayer5Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          const findPlayer6 = document.querySelector(".joueur6");
          const player6Flex = ReactDOM.findDOMNode(findPlayer6);
          player6Flex.style.display = "flex";
        } else if (newPlayer.i == 6) {
          store.dispatch(
            Saveplayer6Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          const findPlayer7 = document.querySelector(".joueur7");
          const player7Flex = ReactDOM.findDOMNode(findPlayer7);
          player7Flex.style.display = "flex";
        } else if (newPlayer.i == 7) {
          store.dispatch(
            Saveplayer7Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          const findPlayer8 = document.querySelector(".joueur8");
          const player8Flex = ReactDOM.findDOMNode(findPlayer8);
          player8Flex.style.display = "flex";
        } else if (newPlayer.i == 8) {
          store.dispatch(
            Saveplayer8Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          const findPlayer9 = document.querySelector(".joueur9");
          const player9Flex = ReactDOM.findDOMNode(findPlayer9);
          player9Flex.style.display = "flex";
        } else if (newPlayer.i == 9) {
          store.dispatch(
            Saveplayer9Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          const findPlayer10 = document.querySelector(".joueur10");
          const player10Flex = ReactDOM.findDOMNode(findPlayer10);
          player10Flex.style.display = "flex";
        } else if (newPlayer.i == 10) {
          store.dispatch(
            Saveplayer10Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          const findPlayer11 = document.querySelector(".joueur11");
          const player11Flex = ReactDOM.findDOMNode(findPlayer11);
          player11Flex.style.display = "flex";
        } else if (newPlayer.i == 11) {
          store.dispatch(
            Saveplayer11Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          const findPlayer12 = document.querySelector(".joueur12");
          const player12Flex = ReactDOM.findDOMNode(findPlayer12);
          player12Flex.style.display = "flex";
        } else if (newPlayer.i == 12) {
          store.dispatch(
            Saveplayer12Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          const findPlayer13 = document.querySelector(".joueur13");
          const player13Flex = ReactDOM.findDOMNode(findPlayer13);
          player13Flex.style.display = "flex";
        } else if (newPlayer.i == 13) {
          store.dispatch(
            Saveplayer13Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          const findPlayer14 = document.querySelector(".joueur14");
          const player14Flex = ReactDOM.findDOMNode(findPlayer14);
          player14Flex.style.display = "flex";
        }

        //On lui envoie les datas de l'hote
        const { hotePseudo, avatarImgHote } = state.avatar.hote;
        // On envoie les données si nous sommes hote
        hotePseudo != ""
          ? socket.emit("send_data_hote", {
              Pseudo: hotePseudo,
              img: avatarImgHote,
            })
          : "";
        // On veut envoyer la liste des index
        const { i0, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13 } =
         state.avatar.joueurs;
        const {
          indexRandom0,
          indexRandom1,
          indexRandom2,
          indexRandom3,
          indexRandom4,
          indexRandom5,
          indexRandom6,
          indexRandom7,
          indexRandom8,
          indexRandom9,
          indexRandom10,
          indexRandom11,
          indexRandom12,
          indexRandom13,
        } = state.avatar.joueurs;
        
        socket.emit("sendIndexForPlayer", {
          index0: i0,
          index1: i1,
          index2: i2,
          index3: i3,
          index4: i4,
          index5: i5,
          index6: i6,
          index7: i7,
          index8: i8,
          index9: i9,
          index10: i10,
          index11: i11,
          index12: i12,
          index13: i13,
          random0: indexRandom0,
          random1: indexRandom1,
          random2: indexRandom2,
          random3: indexRandom3,
          random4: indexRandom4,
          random5: indexRandom5,
          random6: indexRandom6,
          random7: indexRandom7,
          random8: indexRandom8,
          random9: indexRandom9,
          random10: indexRandom10,
          random11: indexRandom11,
          random12: indexRandom12,
          random13: indexRandom13,
        });
        console.log("on envoie les index aux autres joueurs =>", indexRandom0);
      });

      // On ecoute les notifications d'envoie des données de l'hote
      socket.on("send_data_hote", (infohote) => {
        console.log(
          "On vient de recevoir les datas de l'hote",
          infohote.img,
          infohote.Pseudo,
          infohote
        );
        store.dispatch(SaveHoteData(infohote.Pseudo, infohote.img));
      });

      return next(action);
    }

    // Si je suis l'hote j'envoie un message au websoket pour remettre l'index a zero
    case HOTE_DETECTE: {
      socket.emit("hote_detecte", {});

      return next(action);
    }

    // Si je suis l'invité, j'envoie un WS a l'hote pour lui demender des infos et me loger dans son reducer
    case NEW_INVITE_DETECTE: {
      socket.emit("new_invite_detecte", {
        infoJoueur: action.indexRandomPlayer,
      });

      return next(action);
    }

    case SEND_INDEX_PLAYER_0 : {
      console.log('ce que j\'envoie', action.index);
      return next(action);
    }

    case SEND_INDEX_PLAYER_1 : {
      console.log('ce que j\'envoie', action.index);
      return next(action);
    }

    case SEND_INDEX_PLAYER_2 : {
      console.log('ce que j\'envoie', action.index);
      return next(action);
    }

    case SEND_INDEX_PLAYER_3 : {
      console.log('ce que j\'envoie', action.index);
      return next(action);
    }

    case SEND_INDEX_PLAYER_4 : {
      console.log('ce que j\'envoie', action.index);
      return next(action);
    }

    case SEND_INDEX_PLAYER_5 : {
      console.log('ce que j\'envoie', action.index);
      return next(action);
    }

    case SEND_INDEX_PLAYER_6 : {
      console.log('ce que j\'envoie', action.index);
      return next(action);
    }

    case SEND_INDEX_PLAYER_7 : {
      console.log('ce que j\'envoie', action.index);
      return next(action);
    }

    case SEND_INDEX_PLAYER_8 : {
      console.log('ce que j\'envoie', action.index);
      return next(action);
    }

    case SEND_INDEX_PLAYER_9 : {
      console.log('ce que j\'envoie', action.index);
      return next(action);
    }

    case SEND_INDEX_PLAYER_10 : {
      console.log('ce que j\'envoie', action.index);
      return next(action);
    }

    // V Cette partie ne bouge pas
    default:
      return next(action);
  }
};


export default webSocketConnection;
