//les actions
import {
  SEND_RANDOM_FOR_ROLE,
  saveTaupe,
  saveTaupeSelf,
  saveInfo1,
  saveInfo1Self,
  saveInfo2,
  saveInfo2Self,
  SEND_INDEX_JOUEUR_WS,
  saveIndexJoueur,
  SEND_CLEAN_JOUEUR_ARRAY,
  saveCleanJoueurArray,
} from "../action/Role";

import {
  SEND_CHOIX_SYMBOLE_SELF,
  saveChoixSymbole,
  SEND_WIN_WS,
  SEND_LOSE_WS,
  saveWinWs,
  saveLoseWs,
} from "../action/Avatar";

let socket;

const role = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_RANDOM_FOR_ROLE: {
      // Si je suis en developpement ****************
      if (process.env.NODE_ENV === "development") {
        socket = window.io("http://localhost:3001");
      }

      if (process.env.NODE_ENV === "production") {
        //si je suis en production *****************
        const serverIP = "play.pierrefeuillearnaque.com:2015"; // 37.187.38.225 => ip du server // 162.19.79.210 => ip du sous domaine
        socket = window.io(`https://${serverIP}`);
      }

      socket.emit("sendRandomforRole", {
        number: action.randomRole,
        id: action.indexSelf,
        player: action.numberOfPlayer,
      });

      socket.on("save_Role_Taupe", (indexTaupe) => {
        console.log("la taupe", indexTaupe);
        store.dispatch(saveTaupe(indexTaupe));
        store.dispatch(saveTaupeSelf(indexTaupe));
      });

      socket.on("save_Role_Informateur_1", (indexInfo1) => {
        console.log("l'informateur 1", indexInfo1);
        const i = indexInfo1.index;
        const symboleInformateur1 = indexInfo1.symbole;
        store.dispatch(saveInfo1(i, symboleInformateur1));
        //L'action du dessous sert a enregistrer le role dans le state
        store.dispatch(saveInfo1Self(i, symboleInformateur1));
      });

      socket.on("save_Role_Informateur_2", (indexInfo2) => {
        console.log("l'informateur 2", indexInfo2);
        const i = indexInfo2.index;
        const symboleInformateur2 = indexInfo2.symbole;
        store.dispatch(saveInfo2(i, symboleInformateur2));
        store.dispatch(saveInfo2Self(i, symboleInformateur2));
      });

      // On recupere l'index des joueurs
      socket.on("save_Index_Joueur", (indexJoueur) => {
        console.log("un nouveau joueur et son index resultats", indexJoueur);
        store.dispatch(saveIndexJoueur(indexJoueur));
      });

      // On recupere l'index des joueurs
      socket.on("Save_Choix_Symbole", (symboleSelf) => {
        store.dispatch(saveChoixSymbole(symboleSelf));
      });

      // On recupere l'index des joueurs qui gagnent
      socket.on("save_Win_WS", (indexSelf) => {
        store.dispatch(saveWinWs(indexSelf));
      });

      // On recupere l'index des joueurs qui perdent
      socket.on("save_Lose_WS", (indexSelf) => {
        store.dispatch(saveLoseWs(indexSelf));
      });

      // quelqun a cliquer sur le bouton nouvelle partie, on doit donc nettoyer le tableau des joueurs
      socket.on("save_Clean_Joueur_Array", () => {
        console.log(
          "on recoit l'instruction de nettoyer le tableau des joueurs"
        );
        store.dispatch(saveCleanJoueurArray());
      });

      return next(action);
    }

    case SEND_INDEX_JOUEUR_WS: {
      // Si je suis en developpement ****************
      if (process.env.NODE_ENV === "development") {
        socket = window.io("http://localhost:3001");
      }

      if (process.env.NODE_ENV === "production") {
        //si je suis en production *****************
        const serverIP = "play.pierrefeuillearnaque.com:2015"; // 37.187.38.225 => ip du server // 162.19.79.210 => ip du sous domaine
        socket = window.io(`https://${serverIP}`);
      }
      console.log("on envoit la requet pour les joueur + index");
      socket.emit("send_Index_Joueur", {
        indexJoueur: action.indexSelfResults,
      });
      return next(action);
    }

    case SEND_CHOIX_SYMBOLE_SELF: {
      // Si je suis en developpement ****************
      if (process.env.NODE_ENV === "development") {
        socket = window.io("http://localhost:3001");
      }

      if (process.env.NODE_ENV === "production") {
        //si je suis en production *****************
        const serverIP = "play.pierrefeuillearnaque.com:2015"; // 37.187.38.225 => ip du server // 162.19.79.210 => ip du sous domaine
        socket = window.io(`https://${serverIP}`);
      }
      console.log(("on envoit notre choix de symbole aux autres", action));
      socket.emit("send_Choix_Symbole", [
        action.indexSelfResults,
        action.choixSymboleSelf,
      ]);
      return next(action);
    }

    case SEND_WIN_WS: {
      // Si je suis en developpement ****************
      if (process.env.NODE_ENV === "development") {
        socket = window.io("http://localhost:3001");
      }

      if (process.env.NODE_ENV === "production") {
        //si je suis en production *****************
        const serverIP = "play.pierrefeuillearnaque.com:2015"; // 37.187.38.225 => ip du server // 162.19.79.210 => ip du sous domaine
        socket = window.io(`https://${serverIP}`);
      }
      console.log(("WIN_on envoit notre choix de symbole aux autres", action));
      socket.emit("send_Win_WS", action.indexSelf);
      return next(action);
    }

    case SEND_LOSE_WS: {
      // Si je suis en developpement ****************
      if (process.env.NODE_ENV === "development") {
        socket = window.io("http://localhost:3001");
      }

      if (process.env.NODE_ENV === "production") {
        //si je suis en production *****************
        const serverIP = "play.pierrefeuillearnaque.com:2015"; // 37.187.38.225 => ip du server // 162.19.79.210 => ip du sous domaine
        socket = window.io(`https://${serverIP}`);
      }
      console.log(
        ("LOOSE_on envoit notre choix de symbole aux autres", action)
      );
      socket.emit("send_Lose_WS", action.indexSelf);
      return next(action);
    }

    case SEND_CLEAN_JOUEUR_ARRAY: {
      // Si je suis en developpement ****************
      if (process.env.NODE_ENV === "development") {
        socket = window.io("http://localhost:3001");
      }

      if (process.env.NODE_ENV === "production") {
        //si je suis en production *****************
        const serverIP = "play.pierrefeuillearnaque.com:2015"; // 37.187.38.225 => ip du server // 162.19.79.210 => ip du sous domaine
        socket = window.io(`https://${serverIP}`);
      }
      socket.emit("send_Clean_Joueur_Array");
      return next(action);
    }

    // V Cette partie ne bouge pas
    default:
      return next(action);
  }
};

export default role;
