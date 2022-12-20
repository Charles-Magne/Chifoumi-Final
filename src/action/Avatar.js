
//Gere la value du pseudo name
export const PSEUDO_VALUE_INVITE = 'PSEUDO_VALUE_INVITE';

export function savePseudoInvite (value, field) { 
  return {
type : PSEUDO_VALUE_INVITE,
value,
field,
  };
}

// save l'img du joueur
export const SAVE_AVATAR_IMG = 'SAVE_AVATAR_IMG';

export function saveAvatarImg ( target ) {
  return {
    type: SAVE_AVATAR_IMG, 
    target,
  };
}

//save le pseudo de l'hote
export const SAVE_PSEUDO_HOTE = 'SAVE_PSEUDO_HOTE';

export function savePseudoHote (value, field) { 
  return {
type : SAVE_PSEUDO_HOTE,
value, 
field,
  };
}

//save le pseudo de l'hote pour les autres joueur => WS
export const RECEIVE_IMG_HOTE = 'RECEIVE_IMG_HOTE';

export function receiveImgHote (img) { 
  return {
type : RECEIVE_IMG_HOTE,
img,
  };
}
