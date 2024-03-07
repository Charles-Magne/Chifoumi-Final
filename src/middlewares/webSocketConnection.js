import ReactDOM from "react-dom";
import MeetplayerDom from "../components/Meetplayer";
import store from "../store/index.js";

//les actions
import {
  CONNECTION_WEB_SO,
  NEW_INVITE_DETECTE,
  SaveHoteData,
  HOTE_DETECTE,
} from "../action/connection";

import {
  launchGameAll, 
  FETCH_CODE_SALON_WS,
} from "../action/Salon";

import {
  CLEAN_SERVER,
  cleanServerDone,
} from "../action/Result";


import {
  SAVE_AVATAR_IMG_INVIT,
  SEND_NAME_SELF,
  SaveNbPlayer,
  saveNewImgInvite,
  SaveplayerSelfIndex,
  SavePlayerName,
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
  Saveplayer14Index,
  SavebeforeJoueur2,
  SavebeforeJoueur3,
  SavebeforeJoueur4,
  SavebeforeJoueur5,
  SavebeforeJoueur6,
  SavebeforeJoueur7,
  SavebeforeJoueur8,
  SavebeforeJoueur9,
  SavebeforeJoueur10,
  SavebeforeJoueur11,
  SavebeforeJoueur12,
  SavebeforeJoueur13,
  SavebeforeJoueur14,
  LAUNCH_GAME
} from "../action/Avatar";

let socket;
//const dispatch = useDispatch();

// APPEL_API 3- ici on recupere l'action exporté juste au dessus et lui demande de recuperer les datas voulu
const webSocketConnection = (store) => (next) => (action) => {
  switch (action.type) {
    // Connection au serveur 3001 lors du useEffect de la page meetplayer salonState   `/Playing/${salonState}`
    case CONNECTION_WEB_SO: {

      // Si je suis en developpement ****************
      if (process.env.NODE_ENV === 'development'){

      socket = window.io("http://localhost:3001");
      }

      if (process.env.NODE_ENV === 'production') {
        //si je suis en production *****************  
        const serverIP = "play.pierrefeuillearnaque.com:443" // 37.187.38.225 => ip du server // 162.19.79.210 => ip du sous domaine 
        socket = window.io(`https://${serverIP}`);
      }
      // rsync -avz /home/student/Bureau/html/Perso/Server-Chifoumi ubuntu@vps-2b70c083.vps.ovh.net:/home/ubuntu/server

      
      socket.emit("connection", (action.salonState), {});
      console.log('je me connecte', socket );
      // On est notifier qu'un nouveau joueur rejoint le salon
      socket.on("new_invite_index", (newPlayer) => {
        const state = store.getState();
        //const { i, inumber } = state.avatar.joueurSelf;
        const inumber = state.avatar.joueurSelf.inumber;
        const i = state.avatar.joueurSelf.i;
        const i1 = state.avatar.joueurs.i1;
        // On envoie au state le nb de joueurs
        store.dispatch(SaveNbPlayer(newPlayer[0]));

        // Si on recoit le joueur 0, On passe sa div en flex, on enregistre les deux index dans le state et on les renvoie via les WS
        // le if sert a verifier si nous somme le joueur qui a optenu l'index 1,2,3 ... On compart les index random
        if (newPlayer[1] == i) {

          store.dispatch(SaveplayerSelfIndex(newPlayer[0], newPlayer[1]));
          // On cible la div et on l'affiche
          const findPlayer1 = document.querySelector(".joueur1");
          const player1Flex = ReactDOM.findDOMNode(findPlayer1);
          player1Flex.style.display = "flex";
        }
        // Ici on lit l'index standard et on enregistre l'utilisateur dans la bonne place du reducer
        if (newPlayer[0] == 1) {
          console.log(
            "le premier joueur est la !!!!!!!!",
            newPlayer[0],
            newPlayer[1]
          );

          console.log("on test le state", i);
          store.dispatch(Saveplayer1Index(newPlayer[0], newPlayer[1]));
          // On cible la div et on l'affiche
          const findPlayer1 = document.querySelector(".joueur1");
          const player1Flex = ReactDOM.findDOMNode(findPlayer1);
          player1Flex.style.display = "flex";
        } else if (newPlayer[0] == 2) {
          store.dispatch(Saveplayer2Index(newPlayer[0], newPlayer[1]));
          const findPlayer2 = document.querySelector(".joueur2");
          const player2Flex = ReactDOM.findDOMNode(findPlayer2);
          player2Flex.style.display = "flex";
        } else if (newPlayer[0] == 3) {
          store.dispatch(Saveplayer3Index(newPlayer[0], newPlayer[1]));
          const findPlayer3 = document.querySelector(".joueur3");
          const player3Flex = ReactDOM.findDOMNode(findPlayer3);
          player3Flex.style.display = "flex";
        } else if (newPlayer[0] == 4) {
          store.dispatch(Saveplayer4Index(newPlayer[0], newPlayer[1]));
          const findPlayer4 = document.querySelector(".joueur4");
          const player4Flex = ReactDOM.findDOMNode(findPlayer4);
          player4Flex.style.display = "flex";
        } else if (newPlayer[0] == 5) {
          store.dispatch(Saveplayer5Index(newPlayer[0], newPlayer[1]));
          const findPlayer5 = document.querySelector(".joueur5");
          const player5Flex = ReactDOM.findDOMNode(findPlayer5);
          player5Flex.style.display = "flex";
        } else if (newPlayer[0] == 6) {
          store.dispatch(Saveplayer6Index(newPlayer[0], newPlayer[1]));
          const findPlayer6 = document.querySelector(".joueur6");
          const player6Flex = ReactDOM.findDOMNode(findPlayer6);
          player6Flex.style.display = "flex";
        } else if (newPlayer[0] == 7) {
          store.dispatch(Saveplayer7Index(newPlayer[0], newPlayer[1]));
          const findPlayer7 = document.querySelector(".joueur7");
          const player7Flex = ReactDOM.findDOMNode(findPlayer7);
          player7Flex.style.display = "flex";
        } else if (newPlayer[0] == 8) {
          store.dispatch(Saveplayer8Index(newPlayer[0], newPlayer[1]));
          const findPlayer8 = document.querySelector(".joueur8");
          const player8Flex = ReactDOM.findDOMNode(findPlayer8);
          player8Flex.style.display = "flex";
        } else if (newPlayer[0] == 9) {
          store.dispatch(Saveplayer9Index(newPlayer[0], newPlayer[1]));
          const findPlayer9 = document.querySelector(".joueur9");
          const player9Flex = ReactDOM.findDOMNode(findPlayer9);
          player9Flex.style.display = "flex";
        } else if (newPlayer[0] == 10) {
          store.dispatch(Saveplayer10Index(newPlayer[0], newPlayer[1]));
          const findPlayer10 = document.querySelector(".joueur10");
          const player10Flex = ReactDOM.findDOMNode(findPlayer10);
          player10Flex.style.display = "flex";
        } else if (newPlayer[0] == 11) {
          store.dispatch(Saveplayer11Index(newPlayer[0], newPlayer[1]));
          const findPlayer11 = document.querySelector(".joueur11");
          const player11Flex = ReactDOM.findDOMNode(findPlayer11);
          player11Flex.style.display = "flex";
        } else if (newPlayer[0] == 12) {
          store.dispatch(Saveplayer12Index(newPlayer[0], newPlayer[1]));
          const findPlayer12 = document.querySelector(".joueur12");
          const player12Flex = ReactDOM.findDOMNode(findPlayer12);
          player12Flex.style.display = "flex";
        } else if (newPlayer[0] == 13) {
          store.dispatch(Saveplayer13Index(newPlayer[0], newPlayer[1]));
          const findPlayer13 = document.querySelector(".joueur13");
          const player13Flex = ReactDOM.findDOMNode(findPlayer13);
          player13Flex.style.display = "flex";
        } else if (newPlayer[0] == 14) {
          store.dispatch(Saveplayer14Index(newPlayer[0], newPlayer[1]));
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
      });

      //Ici on envoie les joueurs qui etaient connecté avant le joueur arrive
      socket.on("save_index_before2", (beforeJoueur2) => {
        store.dispatch(SavebeforeJoueur2(beforeJoueur2));
      });

      socket.on("save_index_before3", (beforeJoueur3) => {
        console.log("on test les datas pour l'action", beforeJoueur3);

        store.dispatch(SavebeforeJoueur3(beforeJoueur3));
      });

      socket.on("save_index_before4", (beforeJoueur4) => {
        store.dispatch(SavebeforeJoueur4(beforeJoueur4));
      });

      socket.on("save_index_before5", (beforeJoueur5) => {
        store.dispatch(SavebeforeJoueur5(beforeJoueur5));
      });

      socket.on("save_index_before6", (beforeJoueur6) => {
        store.dispatch(SavebeforeJoueur6(beforeJoueur6));
      });

      socket.on("save_index_before7", (beforeJoueur7) => {
        store.dispatch(SavebeforeJoueur7(beforeJoueur7));
      });

      socket.on("save_index_before8", (beforeJoueur8) => {
        store.dispatch(SavebeforeJoueur8(beforeJoueur8));
      });

      socket.on("save_index_before9", (beforeJoueur9) => {
        store.dispatch(SavebeforeJoueur9(beforeJoueur9));
      });

      socket.on("save_index_before10", (beforeJoueur10) => {
        store.dispatch(SavebeforeJoueur10(beforeJoueur10));
      });

      socket.on("save_index_before11", (beforeJoueur11) => {
        store.dispatch(SavebeforeJoueur11(beforeJoueur11));
      });

      socket.on("save_index_before12", (beforeJoueur12) => {
        store.dispatch(SavebeforeJoueur12(beforeJoueur12));
      });

      socket.on("save_index_before13", (beforeJoueur13) => {
        store.dispatch(SavebeforeJoueur13(beforeJoueur13));
      });

      socket.on("save_index_before14", (beforeJoueur14) => {
        store.dispatch(SavebeforeJoueur14(beforeJoueur14));
      });

       // lorsque un invité clique sur une img, l'avatar est sauvgarder dans la bdd puis on recoit les indiquations
       socket.on("save_new_avatar_invite_change", (changeImgPlayer) => {
        store.dispatch(saveNewImgInvite(changeImgPlayer));
      });


      //Lorsqu'on est notifier que l'hote a cliquer sur lancer la partie
      socket.on("launchGameAll", () => {
        store.dispatch(launchGameAll());
      });

      
      // On ecoute les notifications de la base de donnée pour les noms des joueurs
      socket.on("receive_name_player", (nameOfPlayer) => {
        store.dispatch(SavePlayerName(nameOfPlayer.indexSelf, nameOfPlayer.nameSelf));
      });

      // On ecoute les notifications d'envoie des données de l'hote
      socket.on("send_data_hote", (infohote) => {
        store.dispatch(SaveHoteData(infohote.Pseudo, infohote.img));
      });


      // Le serveur vient d'etre nettoyé chaque joueur va effacer ses informations roles
      socket.on("cleanServerDone",() => {
        console.log( "le serveur vient d'etre nettoyer");
        store.dispatch(cleanServerDone());
      });

      return next(action);
    }


    // Si je suis l'invité, j'envoie un WS a l'hote pour signaler quel avatar j'ai choisi
    case SAVE_AVATAR_IMG_INVIT: {
      socket.emit("new_avatar_invite_change", {
        imgInvite: action.target,
        index: action.indexPlayer,
      });
      return next(action);
    }

    // Si je suis l'invité, j'envoie un WS a l'hote pour signaler quel avatar j'ai choisi
    case FETCH_CODE_SALON_WS: {
      socket.emit("fetchCodeSalonWs", {
        salonNumber: action.salonState,
      });
      return next(action);
    }
    

        // Si je suis l'invité, j'envoie un WS aux autres joueurs pour leur donner mon name. 
        case SEND_NAME_SELF: {
          socket.emit("send_name_self", {
            indexSelf: action.index,
            nameSelf: action.name,
          });
          return next(action);
        }

    // Si je suis l'invité, j'envoie un WS a l'hote pour lui demender des infos et me save dans la bdd du server RECIVE_INDEX_FROM_WS
    // Attention deux fois new invite detected supprimer la deuxieme action
    case NEW_INVITE_DETECTE: {
      socket.emit("new_invite_detecte", {
        infoJoueur: action.indexRandomPlayer,
      });
      return next(action);
    }

    // Si je suis l'hote j'envoie un message au websoket pour remettre l'index a zero
    case HOTE_DETECTE: {
      const state = store.getState();
      // Lorsque l'hote se connecte pour la premiere fois on envoie le nom, la photo et l'index
      const { hotePseudo, avatarImgHote } = state.avatar.hote;
      socket.emit("hote_detecte", {
        hotePseudo,
        avatarImgHote,
      });
      console.log("on teste les infos de l'hote", hotePseudo, avatarImgHote);

      return next(action);
    }

      // l'hote a cliquer sur lancer la game on notifie tous les joueurs d'aller sur la page de jeu
      case LAUNCH_GAME: {
        socket.emit("launchGameHote", {
        });
        return next(action);
      }

      /**
       * Le serveur va etre vider avant une nouvelle partie
       */
      case CLEAN_SERVER: {
        socket.emit("cleanServer", {
        });
        return next(action);
      }

    

    // V Cette partie ne bouge pas
    default:
      return next(action);
  }
};

export default webSocketConnection;
