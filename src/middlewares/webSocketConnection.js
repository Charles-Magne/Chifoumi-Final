import axios from "axios";

//les actions
import {
  CONNECTION_WEB_SO,
  SEND_HOTE_NAME,
  REQUEST_HOTE_NAME,
  Test_WS,
} from "../action/connection";
import { receiveImgHote } from "../action/Avatar";
//SAVE_AVATAR_IMG,
// On branche le middleware au store
let socket;

// APPEL_API 3- ici on recupere l'action exporté juste au dessus et lui demande de recuperer les datas voulu
const webSocketConnection = (store) => (next) => (action) => {
  switch (action.type) {
    // Connection au serveur 3001 lors du useEffect de la page meetplayer
    case CONNECTION_WEB_SO: {
      socket = window.io("http://localhost:3001");
      socket.emit("connection", {});
      console.log("ca marche bien les socket", socket);

      // Ici on va ecouter les changment que produisent les autres
      // On ecoute le changement d'avatar
      socket.on("imgAvatarHote", (imgHote) => {
        console.log(
          "[CLIENT] j'ai reçu l'event send_message du serveur : ",
          imgHote
        );
        store.dispatch(receiveImgHote(imgHote));
      });

      return next(action);
    }

    case Test_WS: {
      socket.on('requestNamePseudo', () => {
        console.log('un nouvel utilisateur detecté');
      } );
      
      return next(action);
    }

    

    // Si je suis l'invité, je demende a l'hote son nom
    case REQUEST_HOTE_NAME: {
      const { hotePseudo, avatarImgHote } = store.getState();
      socket.emit("request_hote_name",  { pseudo: hotePseudo, img: avatarImgHote });
      
      return next(action);
    }
    //requestNamePseudo
    
    case SEND_HOTE_NAME: {
      const { hotePseudo, avatarImgHote } = store.getState();
      socket.emit("send_hote_name", { pseudo: hotePseudo, img: avatarImgHote });
      return next(action);
    }
    /*
// en dessous on va emmetre des event a envoyer aux autres.
      // envoie de l'img avatar
    case SAVE_AVATAR_IMG: {
      //On va venir defini ce que l'on veut et le choper dans le state
      const { avatarImgHote } = store.getState();
      
      socket.emit('imgAvatarHote', { imgHote: avatarImgHote }); 
      console.log('envoi de img');

      return next(action);
    }
    */
    // V Cette partie ne bouge pas
    default:
      return next(action);
  }
};

export default webSocketConnection;
