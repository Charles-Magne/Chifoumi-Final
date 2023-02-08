
//les actions
import {
  SEND_RANDOM_FOR_ROLE, 
  saveTaupe,
  saveInfo1,
  saveInfo2
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
      });

      socket.on("send_Role_Informateur_1", (indexInfo1) => {
        console.log('l\'informateur 1', indexInfo1);
          store.dispatch(saveInfo1(indexInfo1));
      });

      socket.on("send_Role_Informateur_2", (indexInfo2) => {
        console.log('l\'informateur 2', indexInfo2);
          store.dispatch(saveInfo2(indexInfo2));
      });

      

      return next(action);
    }


    // V Cette partie ne bouge pas
    default:
      return next(action);
  }
}

export default role;
