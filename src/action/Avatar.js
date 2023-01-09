
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

//save l'index et l'indexRandom d'un joueur qui vient de se connecter sur le salon
export const SAVE_PLAYER_0_INDEX = 'SAVE_PLAYER_0_INDEX';

export function Saveplayer0Index (numberRandomPlayer, i) { 
  return {
type : SAVE_PLAYER_0_INDEX,
i,
numberRandomPlayer
  };
}

//save le pseudo de l'hote
export const SAVE_PLAYER_2_INDEX = 'SAVE_PLAYER_2_INDEX';

export function Saveplayer2Index (i) { 
  return {
type : SAVE_PLAYER_2_INDEX,
i,
  };
}


