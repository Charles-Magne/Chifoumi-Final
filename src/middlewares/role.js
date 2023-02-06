
//les actions
import {
  SEND_RANDOM_FOR_ROLE, 
  SaveTaupe0,
  SaveTaupe1,
  SaveTaupe2,
  SaveTaupe3,
  SaveTaupe4,
  SaveTaupe5,
  SaveTaupe6,
  SaveTaupe7,
  SaveTaupe8,
  SaveTaupe9,
  SaveTaupe10,
  SaveTaupe11,
  SaveTaupe12,
  SaveTaupe13,
  SaveTaupe14
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
        if ( indexTaupe == 0) {
          store.dispatch(SaveTaupe0);
        }
        else if ( indexTaupe == 1) {
          store.dispatch(SaveTaupe1);
        }
        else if ( indexTaupe == 2) {
          store.dispatch(SaveTaupe2);
        }
        else if ( indexTaupe == 3) {
          store.dispatch(SaveTaupe3);
        }
        else if ( indexTaupe == 4) {
          store.dispatch(SaveTaupe4);
        }
        else if ( indexTaupe == 5) {
          store.dispatch(SaveTaupe5);
        }
        else if ( indexTaupe == 6) {
          store.dispatch(SaveTaupe6);
        }
        else if ( indexTaupe == 7) {
          store.dispatch(SaveTaupe7);
        }
        else if ( indexTaupe == 8) {
          store.dispatch(SaveTaupe8);
        }
        else if ( indexTaupe == 9) {
          store.dispatch(SaveTaupe9);
        }
        else if ( indexTaupe == 10) {
          store.dispatch(SaveTaupe10);
        }
        else if ( indexTaupe == 11) {
          store.dispatch(SaveTaupe11);
        }
        else if ( indexTaupe == 12) {
          store.dispatch(SaveTaupe12);
        }
        else if ( indexTaupe == 13) {
          store.dispatch(SaveTaupe13);
        }
        else if ( indexTaupe == 14) {
          store.dispatch(SaveTaupe14);
        }
        
      });

      return next(action);
    }


    // V Cette partie ne bouge pas
    default:
      return next(action);
  }
}

export default role;
