

//Gere le clic sur les buttons
export const CLICK_CAROUSEL = 'CLICK_CAROUSEL' ;

export function clickCarousel (target, time) { 
  return {
type : CLICK_CAROUSEL,
// target serta savoir quel card affiché
target,
// time sert a reinitaliser le temps par rapport a l'affichage
time
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


/**
 * On retourne au state le timer apres decrementation  
 * */ 
export const SET_TIMER = "SET_TIMER";

export function setTimer (time) {
  return {
    type : SET_TIMER,
    time,
  };
}


/**
 * On retourne au state le timer apres decrementation  
 * */ 
 export const SET_TIME_DISPLAY = "SET_TIME_DISPLAY";

 export function setTimeDisplay (button) {
   return {
     type : SET_TIME_DISPLAY,
     button,
   };
 }


 /**
 * On retourne au state le timer apres decrementation  
 * */ 
  export const REMAKE_TIME = "REMAKE_TIME";

  export function  remaketime () {
    return {
      type : REMAKE_TIME,
    };
  }

 
   /**
 * Lors d'un clic sur un bouton on remet le timer ou il devrait etre 
 * */ 
    export const CHANGE_TIME = "CHANGE_TIME";

    export function changeTime (newTime) {
      return {
        type : CHANGE_TIME,
        newTime
      };
    }
