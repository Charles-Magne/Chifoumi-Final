import axios from 'axios';

//les actions

// On branche le middleware au store

// APPEL_API 3- ici on recupere l'action exporté juste au dessus et lui demande de recuperer les datas voulu 
const testMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    
    // V Cette partie ne bouge pas 
    default:
      return next(action);
  }
};

export default testMiddleware;
