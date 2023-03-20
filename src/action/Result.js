// On enregistre le resultat dans notre reducer
export const SAVE_WIN_SELF = 'SAVE_WIN_SELF';

export function saveWinSelf () { 
  return {
type : SAVE_WIN_SELF,
  };
}

// On enregistre le resultat dans notre reducer
export const SAVE_LOSE_SELF = 'SAVE_LOSE_SELF';

export function saveLoseSelf () { 
  return {
type : SAVE_LOSE_SELF,
  };
}
