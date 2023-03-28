
//Gere le code d'un lobby
export const FETCH_CODE_SALON = 'FETCH_CODE_SALON';

export function fetchCodeSalon (salon) { 
  return {
type : FETCH_CODE_SALON,
salon
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
