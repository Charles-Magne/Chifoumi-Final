
//Gere la value du pseudo name
export const PSEUDO_VALUE_INVITE = 'PSEUDO_VALUE_INVITE';

export function savePseudoInvite (value, field) {
  return {
type : PSEUDO_VALUE_INVITE,
value,
field,
  };
}

// save l'img de l'hote
export const SAVE_AVATAR_IMG = 'SAVE_AVATAR_IMG';

export function saveAvatarImg ( target ) {
  return {
    type: SAVE_AVATAR_IMG, 
    target,
  };
}

saveAvatarImgInvit
// save l'img de l'invité
export const SAVE_AVATAR_IMG_INVIT = 'SAVE_AVATAR_IMG_INVIT';

export function saveAvatarImgInvit ( target ) {
  return {
    type: SAVE_AVATAR_IMG_INVIT, 
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

