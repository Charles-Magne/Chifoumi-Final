import { PSEUDO_VALUE_INVITE, SAVE_AVATAR_IMG, SAVE_PSEUDO_HOTE, RECEIVE_IMG_HOTE } from "../action/Avatar";


export const initialState = {
  hote:{
  valuePseudo: "",
  avatarImg: null,
  avatarImgHote: null,
  hotePseudo: "anonyme",
  },
  joueurSelf:{
    i: null,
    ValuePseudo: "",
    avatarImg: null,
  },
  joueur2:{
    i: null,
    ValuePseudo: "",
    avatarImg: null,
  },
};

function avatarReducer ( state = initialState, action = {}) {
 switch (action.type) {

   // save le pseudo de l'hote
   case SAVE_PSEUDO_HOTE:
     return {
       ...state,
       hote: {
         ...state.hote,
         valuePseudo: action.value,
       hotePseudo: action.value,
     },
     joueurSelf: {
      ...state.hote,
      valuePseudo: action.value,
  },
    };
  // savec le pseudo du joueur
   case PSEUDO_VALUE_INVITE:
     return {
       ...state,
       valuePseudo: action.value,
     };

// Save l'img servant a l'avatar
     case SAVE_AVATAR_IMG:
      return {
        ...state,
        avatarImg: action.target,
      };

      // Save l'img de l'hote via webSocket
     case RECEIVE_IMG_HOTE:
      return {
        ...state,
        avatarImgHote: action.img,
      };
      


     // V pas touche
     default:
       return state;
 }
}

export default avatarReducer;
