import axios from "axios";

//les actions
import {
  CONNECTION_WEB_SO,
  NEW_INVITE_DETECTE,
  SaveHoteData,
} from "../action/connection";

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
      socket.on('new_invite_detecte', (test) => {
        console.log('un nouvau joueur');
        //On lui envoie les datas de l'hote
        const { hotePseudo, avatarImgHote } = state.avatar.hote;
        // On envoie les données si nous sommes hote
        hotePseudo != "" ? socket.emit('send_data_hote', { Pseudo: hotePseudo, img: avatarImgHote } ) : '' ;
      } );

      // On ecoute les notifications d'envoie des données de l'hote
      socket.on('send_data_hote', (infohote) => {
        console.log('On vient de recevoir les datas de l\'hote', infohote.img, infohote.Pseudo);
        store.dispatch(SaveHoteData(infohote.Pseudo, infohote.img, ));
      });

      return next(action);
    }

    // Si je suis l'invité, je demande a l'hote son nom
    case NEW_INVITE_DETECTE: {
      const { hotePseudo, avatarImgHote } = store.getState();
      socket.emit("new_invite_detecte",  { pseudo: hotePseudo, img: avatarImgHote });
      
      return next(action);
    }
    // V Cette partie ne bouge pas
    default:
      return next(action);
  }
};

export default webSocketConnection;
