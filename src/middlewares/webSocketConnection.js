import axios from 'axios';

//les actions
import { CONNECTION_WEB_SO } from '../action/connection';
import { SAVE_AVATAR_IMG } from '../action/Avatar';

// On branche le middleware au store
let socket;

// APPEL_API 3- ici on recupere l'action exporté juste au dessus et lui demande de recuperer les datas voulu 
const webSocketConnection = (store) => (next) => (action) => {
  switch (action.type) {
    // Connection au serveur 3001
    case CONNECTION_WEB_SO:
      socket = window.io('http://localhost:3001');
      socket.emit('connection', {});
      console.log('ca marche bien les socket', socket);
      return next (action);

      // envoie de l'img avatar
    case SAVE_AVATAR_IMG: {
      //On va venir defini ce que l'on veut et le choper dans le state
      const { avatarImg } = store.getState();
      
      socket.emit('send_message', {  }); 
      console.log('envoi de img');// Le send message vient d'ou ?
      return next(action);
    }
    
    // V Cette partie ne bouge pas 
    default:
      return next(action);
  }
};

export default webSocketConnection;
