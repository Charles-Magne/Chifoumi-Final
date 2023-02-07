
//les actions
import {
  SEND_RANDOM_FOR_ROLE, 
  SaveTaupe,
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
          store.dispatch(SaveTaupe(indexTaupe));
      });

      socket.on("send_Role_Informateur_1", (indexInformateur1) => {
        console.log('l\'informateur 1', indexInformateur1);
          //store.dispatch(SaveTaupe(indexTaupe));
      });

      socket.on("send_Role_Informateur_2", (indexInformateur2) => {
        console.log('l\'informateur 2', indexInformateur2);
          //store.dispatch(SaveTaupe(indexTaupe));
      });

      

      return next(action);
    }


    // V Cette partie ne bouge pas
    default:
      return next(action);
  }
}

export default role;
