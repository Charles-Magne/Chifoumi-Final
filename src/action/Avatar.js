
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
export const SAVE_HOTE = 'SAVE_HOTE';

export function saveHote (value, field) { 
  return {
type : SAVE_HOTE,
value, 
field,
  };
}
