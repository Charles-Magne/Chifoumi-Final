import { PSEUDO_VALUE_INVITE, SAVE_AVATAR_IMG, SAVE_HOTE } from "../action/Avatar";


export const initialState = {
  valuePseudo: "",
  avatarImg: null,
  hotePseudo: "anonyme",
}

function avatarReducer ( state = initialState, action = {}) {
 switch (action.type) {
   // save le pseudo de l'hote
   case SAVE_HOTE:
     return {
       ...state,
       valuePseudo: action.value,
       hotePseudo: action.value,
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

     // V pas touche
     default:
       return state;
 }
}

export default avatarReducer;
