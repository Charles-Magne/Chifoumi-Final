

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

//Le joueur qui est l'informateur 1'
export const SAVE_INFO_1 = 'SAVE_INFO_1' ;

export function saveInfo1 (indexInfo1) { 
  return {
type : SAVE_INFO_1,
indexInfo1
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

