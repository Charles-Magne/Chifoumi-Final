import axios from 'axios';

//les actions
import { CONNECTION_WEB_SO } from '../action/connection';

// On branche le middleware au store
let socket;

// APPEL_API 3- ici on recupere l'action exporté juste au dessus et lui demande de recuperer les datas voulu 
const webSocketConnection = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECTION_WEB_SO:
      // On se connecte au serveur websocket
      socket = window.io('http://localhost:3001');
      console.log('ca marche bien les socket');

      return next (action);
    
    // V Cette partie ne bouge pas 
    default:
      return next(action);
  }
};

export default webSocketConnection;
