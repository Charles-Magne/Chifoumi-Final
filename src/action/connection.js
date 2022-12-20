//initalise la connection aux webSockets
export const CONNECTION_WEB_SO = 'CONNECTION_WEB_SO' ;

export function connectionWebSo () { 
  return {
type : CONNECTION_WEB_SO,
  };
}


//Envoie du Pseudo et de l'avatar de l'hote
export const SEND_HOTE_NAME = 'SEND_HOT_NAME' ;

export function sendHoteName () { 
  return {
type : SEND_HOTE_NAME,
  };
}

//Envoie du Pseudo et de l'avatar de l'hote
export const REQUEST_HOTE_NAME = 'REQUEST_HOTE_NAME' ;

export function requestHoteName () { 
  return {
type : REQUEST_HOTE_NAME,
  };
}


//Envoie du Pseudo et de l'avatar de l'hote
export const Test_WS = 'Test_WS' ;

export function requestpseudoWs () { 
  return {
type : Test_WS,
  };
}
