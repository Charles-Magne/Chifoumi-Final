
//Gere le code d'un lobby
export const FETCH_CODE_SALON = 'FETCH_CODE_SALON';

export function fetchCodeSalon (salon) { 
  return {
type : FETCH_CODE_SALON,
salon
  };
}

/**
 * On envoie le number du lobby au server
 */
export const FETCH_CODE_SALON_WS = 'FETCH_CODE_SALON_WS';

export function fetchCodeSalonWs (salonState) { 
  return {
type : FETCH_CODE_SALON_WS,
salonState
  };
}


/**
 * On enregistre le numero du lobby sur la page meetplayer
 */
 export const SAVE_LOBBY_RANDOM = 'SAVE_LOBBY_RANDOM';

 export function saveLobbyRandom (salonNumber) { 
   return {
 type : SAVE_LOBBY_RANDOM,
 salonNumber
   };
 }

export const LAUNCH_GAME_ALL = 'LAUNCH_GAME_ALL';

export function launchGameAll () { 
  return {
type : LAUNCH_GAME_ALL,
  };
}


export const SET_REDIRECTION_RESULTS = 'SET_REDIRECTION_RESULTS';
/**
 * sert a vider le state gameReady pour empecher les redirections automatiques sur la page resultats
 */
export function setRedirectionResults () { 
  return {
type : SET_REDIRECTION_RESULTS,
  };
}
