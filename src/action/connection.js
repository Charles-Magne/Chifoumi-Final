

//initalise la connection aux webSockets
export const CONNECTION_WEB_SO = 'CONNECTION_WEB_SO' ;

export function connectionWebSo () { 
  return {
type : CONNECTION_WEB_SO,
  };
}

HoteDetecte
//On signal au serveur que l'hote se connecte pour remettre l'index a zero
export const HOTE_DETECTE = 'HOTE_DETECTE' ;

export function HoteDetecte (nameMJ, imgMJ, indexRandomPlayer) { 
  return {
type : HOTE_DETECTE,
nameMJ, 
imgMJ, 
indexRandomPlayer
  };
}


//On envoie notre index a l'hote et on le save dans le state
export const NEW_INVITE_DETECTE = 'NEW_INVITE_DETECTE' ;

export function newInviteDetecte (indexRandomPlayer) { 
  return {
type : NEW_INVITE_DETECTE,
indexRandomPlayer,
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




