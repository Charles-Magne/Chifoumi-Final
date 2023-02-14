

//lors du useEffect on envoit un nombre random, notre index et le nombre de joueur
export const SEND_RANDOM_FOR_ROLE = 'SEND_RANDOM_FOR_ROLE' ;

export function sendRandomForRole (randomRole, indexSelf, numberOfPlayer) { 
  return {
type : SEND_RANDOM_FOR_ROLE,
randomRole,
indexSelf, 
numberOfPlayer
  };
}


//Le joueur qui est la taupe
export const SAVE_TAUPE = 'SAVE_TAUPE' ;

export function saveTaupe (indexTaupe) { 
  return {
type : SAVE_TAUPE,
indexTaupe
  };
}

//Le joueur qui est la taupe
export const SAVE_TAUPE_SELF = 'SAVE_TAUPE_SELF' ;

export function saveTaupeSelf (indexTaupe) { 
  return {
type : SAVE_TAUPE_SELF,
indexTaupe
  };
}



//Le joueur qui est l'informateur 1'
export const SAVE_INFO_1 = 'SAVE_INFO_1' ;

export function saveInfo1 (indexInfo1) { 
  return {
type : SAVE_INFO_1,
indexInfo1,
  };
}

//On vient reseigner le role info1 dans chez le joueur cible
export const SAVE_INFO_1_SELF = 'SAVE_INFO_1_SELF' ;

export function saveInfo1Self (indexInfo1) { 
  return {
type : SAVE_INFO_1_SELF,
indexInfo1,
  };
}

//Le joueur qui est l'informateur 2'
export const SAVE_INFO_2 = 'SAVE_INFO_2' ;

export function saveInfo2 (indexInfo2) { 
  return {
type : SAVE_INFO_2,
indexInfo2
  };
}

//Le joueur qui est l'informateur 2'
export const SAVE_INFO_2_SELF = 'SAVE_INFO_2_SELF' ;

export function saveInfo2Self (indexInfo2) { 
  return {
type : SAVE_INFO_2_SELF,
indexInfo2
  };
}

//On n'est ni taupe ni informateur on envoie aux autres
export const SEND_INDEX_JOUEUR_WS = 'SEND_INDEX_JOUEUR_WS' ;

export function sendIndexJoueurWs (indexSelfResults) { 
  return {
type : SEND_INDEX_JOUEUR_WS,
indexSelfResults
  };
}


//On save l'index des joueurs qu'on a recu des WS
export const SAVE_INDEX_JOUEUR = 'SAVE_INDEX_JOUEUR' ;

export function saveIndexJoueur (indexJoueur) { 
  console.log('ce qu\'on recoit des WS',indexJoueur );
  return {
type : SAVE_INDEX_JOUEUR,
indeJoueurNumber :indexJoueur['indexJoueur']
  };
}

