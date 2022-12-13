

//Gere le clic sur les buttons
export const CLICK_CAROUSEL = 'CLICK_CAROUSEL' ;

export function clickCarousel (target) { 
  return {
type : CLICK_CAROUSEL,
target,
  };
}

//Gere l'index pour savoir quoi afficher
export const CHANGE_INDEX = "CHANGE_INDEX";

export function changeIndex (number) {
  return {
    type : CHANGE_INDEX,
    number,
  };
}

// sert a definir les cibles = query selectorall
export const DOM_REF = "DOM_REF";

export function DomRef (regles) {
  return {
    type : DOM_REF,
    regles,
  };
}
