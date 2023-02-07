

//Gere le clic sur les buttons
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

export function SaveTaupe (indexTaupe) { 
  return {
type : SAVE_TAUPE,
indexTaupe
  };
}
