import { CHANGE_INDEX, CLICK_CAROUSEL, DOM_REF, SET_TIMER, SET_TIME_DISPLAY, REMAKE_TIME, CHANGE_TIME } from "../action/Carousel";

export const initialState = {
  clicButton: "LoadingButton1",
  timerTotal:60, // le total qui sert a voir ou l'on se situe dans le temps 
  timerDisplay: 60, // se decompte pour modifier l'affichage
  DomArticle: null, // Ici on cible l'element html a afficher
};

function carouselReducer(state = initialState, action = {}) {
  switch (action.type) {
    // Gestion de la cible du clic 
    case CLICK_CAROUSEL:
      console.log('dans le reducer', action.target);

      if (action.target == "LoadingButton1") {
        action.time = 60; 
      }
      if (action.target == "LoadingButton2") {
        action.time = 48; 
      }
      if (action.target == "LoadingButton3") {
        action.time = 36; 
      }
      if (action.target == "LoadingButton4") {
        action.time = 24; 
      }
      if (action.target == "LoadingButton5") {
       action.time = 12; 
      }
      return {
        ...state,
        clicButton: action.target,
        timerDisplay: action.time,
      };

      // Gestion de l'index du carousel => quelle page afficher en fonction du temps
      case CHANGE_INDEX:
        return {
          ...state,
          timerDisplay: action.number,
        };

        // Gestion de l'index du carousel => quelle page afficher en fonction du temps
      case DOM_REF:
        return {
          ...state,
          DomArticle: action.regles,
        };
       
      // On modifie le temps apres une decrementation
      case  SET_TIMER:
        return {
          ...state,
          timerDisplay: action.time,
        };
        
        // En fonction du temps restant on enregistre la page a afficher
      case  SET_TIME_DISPLAY:
        return {
          ...state,
          clicButton: action.button,
        };

        // Lorqsue le timer arrive a zero On le remet a 60
      case  REMAKE_TIME:
        return {
          ...state,
          timerDisplay: 60, // On remet le compteur a 60
        };
        
          // Lors d'un clic sur un bouton on remet le temps
      case  CHANGE_TIME:
        return {
          ...state,
          timerDisplay: action.NewTime, // On remet le compteur a 60
        };


      // V Pas touche
    default:
      return state;
  }
}

export default carouselReducer;
