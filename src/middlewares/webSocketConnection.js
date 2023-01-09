
import {React} from 'react';
import ReactDOM from 'react-dom'
import MeetplayerDom from '../components/Meetplayer';

//les actions
import {
  CONNECTION_WEB_SO,
  NEW_INVITE_DETECTE,
  SaveHoteData,
  HOTE_DETECTE,
} from "../action/connection";

import {
  Saveplayer2Index,
  Saveplayer0Index
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
      socket.on('new_invite_detecte', ( newPlayer ) => {
        //On lui envoie les datas de l'hote
        const { hotePseudo, avatarImgHote } = state.avatar.hote;
        //const { idJoueur } = context.state.avatar; // attention ici on appele le state une seule fois => store.subscribe ?
        console.log('un nouvau joueur', newPlayer, newPlayer.i);

        // Si on recoit le joueur 0, On passe sa div en flex et on enregistre l'index randowm dans le state
        if (newPlayer.i == 0 ) {
          console.log('1er joueur');
          store.dispatch(Saveplayer0Index(newPlayer.numberRandomPlayer, newPlayer.i ));
          const testDomSoluc1 = ReactDOM.findDOMNode(MeetplayerDom );
          const soluc1 = testDomSoluc1.querySelector('.joueur1');
          console.log('la div =>',soluc1);
        }
        else if ( newPlayer.i == 1) {
          console.log('2eme joueur');
        }
        else if ( newPlayer.i == 2) {
          store.dispatch(Saveplayer2Index(newPlayer.i));
        }
        else if ( newPlayer.i == 3) {
          console.log('2eme joueur');
        }
        else if ( newPlayer.i == 4) {
          console.log('2eme joueur');
        }
        else if ( newPlayer.i == 5) {
          console.log('2eme joueur');
        }
        else if ( newPlayer.i == 6) {
          console.log('2eme joueur');
        }
        else if ( newPlayer.i == 7) {
          console.log('2eme joueur');
        }

        // On envoie les données si nous sommes hote
        hotePseudo != "" ? socket.emit('send_data_hote', { Pseudo: hotePseudo, img: avatarImgHote } ) : '' ;
      });

      // On ecoute les notifications d'envoie des données de l'hote
      socket.on('send_data_hote', (infohote) => {
        console.log('On vient de recevoir les datas de l\'hote', infohote.img, infohote.Pseudo, infohote);
        store.dispatch(SaveHoteData(infohote.Pseudo, infohote.img, ));
      });

      return next(action);
    }

    // Si je suis l'hote j'envoie un message au websoket pour remettre l'index a zero
    case HOTE_DETECTE: {
      socket.emit("hote_detecte",  { });
      
      return next(action);
    }

    // Si je suis l'invité, j'envoie un WS a l'hote pour lui demender des infos et me loger dans son reducer
    case NEW_INVITE_DETECTE: {
      socket.emit("new_invite_detecte",  { infoJoueur: action.indexRandomPlayer });
      
      return next(action);
    }
    // V Cette partie ne bouge pas
    default:
      return next(action);
  }
};

export default webSocketConnection;
