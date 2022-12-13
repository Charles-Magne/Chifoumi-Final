import { CHANGE_INDEX, CLICK_CAROUSEL, DOM_REF } from "../action/Carousel";

export const initialState = {
  clicButton: null,
  timerDisplay: 0,
  DomArticle: null,
};

function carouselReducer(state = initialState, action = {}) {
  switch (action.type) {
    // Gestion de la cible du clic 
    case CLICK_CAROUSEL:
      return {
        ...state,
        clicButton: action.target,
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


      // V Pas touche
    default:
      return state;
  }
}

export default carouselReducer;
