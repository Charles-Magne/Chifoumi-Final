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

/**
 * Sert a vider le serveur en vue d'une nouvelle partie
 */
export const CLEAN_SERVER = 'CLEAN_SERVER';

/**
 *  l'action qui vide le serveur avant une nouvelle partie
 */
export function cleanServer () { 
  return {
type : CLEAN_SERVER,
  };
}


/**
 * On est notifié du nettoyage du serveur
 */
 export const CLEAN_SERVER_DONE = 'CLEAN_SERVER_DONE';

 /**
  *  On est notifié du nettoyage du serveur
  */
 export function cleanServerDone () { 
   console.log('le code declanche une action');
   return {
 type : CLEAN_SERVER_DONE,
   };
 }
