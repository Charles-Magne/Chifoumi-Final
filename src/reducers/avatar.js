import { PSEUDO_VALUE, SAVE_AVATAR_IMG } from "../action/Avatar";


export const initialState = {
  valuePseudo: "",
  avatarImg: null,
}

function avatarReducer ( state = initialState, action = {}) {
 switch (action.type) {
  // savec le pseudo du joueur
   case PSEUDO_VALUE:
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
