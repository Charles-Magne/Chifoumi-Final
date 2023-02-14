
//les actions
import {
  SEND_RANDOM_FOR_ROLE, 
  saveTaupe,
  saveTaupeSelf,
  saveInfo1,
  saveInfo1Self,
  saveInfo2,
  saveInfo2Self,
  SEND_INDEX_JOUEUR_WS,
  saveIndexJoueur
} from "../action/Role";

let socket;

const role = (store) => (next) => (action) => {
  
  switch(action.type){
    case SEND_RANDOM_FOR_ROLE:{
      socket = window.io("http://localhost:3001");
      socket.emit("sendRandomforRole", {
        number: action.randomRole,
        id: action.indexSelf,
        player: action.numberOfPlayer,
      });

      
      socket.on("send_Role_Taupe", (indexTaupe) => {
        console.log('la taupe', indexTaupe);
          store.dispatch(saveTaupe(indexTaupe));
          store.dispatch(saveTaupeSelf(indexTaupe));
      });

      socket.on("send_Role_Informateur_1", (indexInfo1) => {
        console.log('l\'informateur 1', indexInfo1);
          store.dispatch(saveInfo1(indexInfo1));
          //L'action du dessous sert a enregistrer le role dans le state
          store.dispatch(saveInfo1Self(indexInfo1));
      });

      socket.on("send_Role_Informateur_2", (indexInfo2) => {
        console.log('l\'informateur 2', indexInfo2);
        store.dispatch(saveInfo2(indexInfo2));
          store.dispatch(saveInfo2Self(indexInfo2));
      });  

      // On recupere l'index des joueurs
      socket.on("save_Index_Joueur", (indexJoueur) => {
        console.log('un nouveau joueur et son index resultats', indexJoueur);
          store.dispatch(saveIndexJoueur(indexJoueur));
      });  

      return next(action);
    }

    case SEND_INDEX_JOUEUR_WS: {
      socket = window.io("http://localhost:3001");
      console.log(('on envoit la requet pour les joueur + index'));
        socket.emit("send_Index_Joueur", {indexJoueur: action.indexSelfResults});
      return next(action);
    }


    // V Cette partie ne bouge pas
    default:
      return next(action);
  }
}

export default role;
