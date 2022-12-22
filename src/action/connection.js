//initalise la connection aux webSockets
export const CONNECTION_WEB_SO = 'CONNECTION_WEB_SO' ;

export function connectionWebSo () { 
  return {
type : CONNECTION_WEB_SO,
  };
}

//Envoie du Pseudo et de l'avatar de l'hote
export const NEW_INVITE_DETECTE = 'NEW_INVITE_DETECTE' ;

export function newInviteDetecte () { 
  return {
type : NEW_INVITE_DETECTE,
  };
}

//On recoit les data de l'hote et on stock dans le reducer
export const SAVE_HOTE_DATA = 'SAVE_HOTE_DATA' ;

export function SaveHoteData (img, Pseudo) { 
  return {
type : SAVE_HOTE_DATA,
img,
Pseudo,
  };
}


