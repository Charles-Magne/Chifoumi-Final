
//Gere le code d'un lobby
export const FETCH_CODE_SALON = 'FETCH_CODE_SALON';

export function fetchCodeSalon (salon) { 
  return {
type : FETCH_CODE_SALON,
salon
  };
}
