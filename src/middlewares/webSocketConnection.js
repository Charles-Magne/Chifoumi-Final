import ReactDOM from "react-dom";
import MeetplayerDom from "../components/Meetplayer";

//les actions
import {
  CONNECTION_WEB_SO,
  NEW_INVITE_DETECTE,
  SaveHoteData,
  HOTE_DETECTE,
} from "../action/connection";

import { Saveplayer0Index,
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
  Saveplayer13Index } from "../action/Avatar";
  


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
        //On lui envoie les datas de l'hote
        const { hotePseudo, avatarImgHote } = state.avatar.hote;
        //const { idJoueur } = context.state.avatar; // attention ici on appele le state une seule fois => store.subscribe ?
        console.log("un nouvau joueur", newPlayer, newPlayer.i);

        // Si on recoit le joueur 0, On passe sa div en flex et on enregistre l'index randowm dans le state
        if (newPlayer.i == 0) {
          store.dispatch(
            Saveplayer0Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          const findPlayer1 = document.querySelector(".joueur1");
          const player1Flex = ReactDOM.findDOMNode(findPlayer1);
          player1Flex.style.display = "flex";
        } else if (newPlayer.i == 1) {
          store.dispatch(
            Saveplayer1Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          const findPlayer2 = document.querySelector(".joueur2");
          const player2Flex = ReactDOM.findDOMNode(findPlayer2);
          player2Flex.style.display = "flex";

        } else if (newPlayer.i == 2) {
          store.dispatch(
            Saveplayer2Index(newPlayer.numberRandomPlayer, newPlayer.i)
          );
          const findPlayer3 = document.querySelector(".joueur3");
          const player3Flex = ReactDOM.findDOMNode(findPlayer3);
          player3Flex.style.display = "flex";
        } else if (newPlayer.i == 3) {
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
        }
       else if (newPlayer.i == 9) {
        store.dispatch(
          Saveplayer9Index(newPlayer.numberRandomPlayer, newPlayer.i)
        );
        const findPlayer10 = document.querySelector(".joueur10");
        const player10Flex = ReactDOM.findDOMNode(findPlayer10);
        player10Flex.style.display = "flex";
      }
     else if (newPlayer.i == 10) {
      store.dispatch(
        Saveplayer10Index(newPlayer.numberRandomPlayer, newPlayer.i)
      );
      const findPlayer11 = document.querySelector(".joueur11");
      const player11Flex = ReactDOM.findDOMNode(findPlayer11);
      player11Flex.style.display = "flex";
    }
      else if (newPlayer.i == 11) {
        store.dispatch(
          Saveplayer11Index(newPlayer.numberRandomPlayer, newPlayer.i)
        );
    const findPlayer12 = document.querySelector(".joueur12");
    const player12Flex = ReactDOM.findDOMNode(findPlayer12);
    player12Flex.style.display = "flex";
  }
  else if (newPlayer.i == 12) {
    store.dispatch(
      Saveplayer12Index(newPlayer.numberRandomPlayer, newPlayer.i)
    );
    const findPlayer13 = document.querySelector(".joueur13");
    const player13Flex = ReactDOM.findDOMNode(findPlayer13);
    player13Flex.style.display = "flex";
  }
  else if (newPlayer.i == 13) {
    store.dispatch(
      Saveplayer13Index(newPlayer.numberRandomPlayer, newPlayer.i)
    );
    const findPlayer14 = document.querySelector(".joueur14");
    const player14Flex = ReactDOM.findDOMNode(findPlayer14);
    player14Flex.style.display = "flex";
  }

        // On envoie les données si nous sommes hote
        hotePseudo != ""
          ? socket.emit("send_data_hote", {
              Pseudo: hotePseudo,
              img: avatarImgHote,
            })
          : "";
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
    // V Cette partie ne bouge pas
    default:
      return next(action);
  }
};

export default webSocketConnection;
