
//Gere la value du pseudo name
export const PSEUDO_VALUE = 'PSEUDO_VALUE';

export function savePseudo (value, field) { 
  return {
type : PSEUDO_VALUE,
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
