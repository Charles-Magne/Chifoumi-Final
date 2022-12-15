//initalise la connection aux webSockets
export const CONNECTION_WEB_SO = 'CONNECTION_WEB_SO' ;

export function connectionWebSo (target) { 
  return {
type : CONNECTION_WEB_SO,
target,
  };
}
