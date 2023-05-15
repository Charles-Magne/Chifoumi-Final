import style from "./style.scss";

//Les imgs
import taupe from "../../assets/Pictures/Role/Taupel Blue.png";
import Pierre from "../../assets/Pictures/Symbole/pierre_bleu.png";
import Feuille from "../../assets/Pictures/Symbole/feuille_bleu.png";
import Ciseaux from "../../assets/Pictures/Symbole/ciseaux_bleu.png";
import player from "../../assets/Pictures/Role/joueur Blue.png";
import Informateur from "../../assets/Pictures/Role/informateur Blue.png";

//Les dependances
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

//les actions
import { sendIndexJoueurWs, sendCleanJoueurArray } from "../../action/Role";
import {
  sendChoixSymboleSelf,
  sendLoseWS,
  sendWinWS,
  cleanRoleSelf
} from "../../action/Avatar";

import { saveLoseSelf, saveWinSelf, cleanServer } from "../../action/Result";

function Results() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * On verifie si quelque a lancer une nouvelle partie
   */
  const newGameready = useSelector((state) => state.salon.gameReady); 
  const salonState = useSelector((state) => state.salon.lobby); // On import le code du salon
  const indexSelfResults = useSelector(
    (state) => state.avatar.joueurSelf.inumber
  ); // index joueur self
  const nameSelfResults = useSelector(
    (state) => state.avatar.joueurSelf.valuePseudo
  ); // pseudo joueur 1
  const resultSelfResults = useSelector((state) => state.result.selfResult); // l'avatarSelf
  const avatarSelfResults = useSelector(
    (state) => state.avatar.joueurSelf.avatarImg
  ); // l'avatarSelf
  const name0Results = useSelector((state) => state.avatar.hote.hotePseudo); // pseudo hote
  const name1Results = useSelector(
    (state) => state.avatar.joueurs.ValuePseudo1
  ); // pseudo joueur 1
  const name2Results = useSelector(
    (state) => state.avatar.joueurs.ValuePseudo2
  ); // pseudo joueur 2
  const name3Results = useSelector(
    (state) => state.avatar.joueurs.ValuePseudo3
  ); // pseudo joueur 3
  const name4Results = useSelector(
    (state) => state.avatar.joueurs.ValuePseudo4
  ); // pseudo joueur 4
  const name5Results = useSelector(
    (state) => state.avatar.joueurs.ValuePseudo5
  ); // pseudo joueur 5
  const name6Results = useSelector(
    (state) => state.avatar.joueurs.ValuePseudo6
  ); // pseudo joueur 6
  const name7Results = useSelector(
    (state) => state.avatar.joueurs.ValuePseudo7
  ); // pseudo joueur 7
  const name8Results = useSelector(
    (state) => state.avatar.joueurs.ValuePseudo8
  ); // pseudo joueur 8
  const name9Results = useSelector(
    (state) => state.avatar.joueurs.ValuePseudo9
  ); // pseudo joueur 9
  const name10Results = useSelector(
    (state) => state.avatar.joueurs.ValuePseudo10
  ); // pseudo joueur 10
  const name11Results = useSelector(
    (state) => state.avatar.joueurs.ValuePseudo11
  ); // pseudo joueur 11
  const name12Results = useSelector(
    (state) => state.avatar.joueurs.ValuePseudo12
  ); // pseudo joueur 12
  const name13Results = useSelector(
    (state) => state.avatar.joueurs.ValuePseudo13
  ); // pseudo joueur 13
  const name14Results = useSelector(
    (state) => state.avatar.joueurs.ValuePseudo14
  ); // pseudo joueur 14nbPlayer

  const avatar0Results = useSelector(
    (state) => state.avatar.hote.avatarImgHote
  ); // avatar joueur 0
  const avatar1Results = useSelector(
    (state) => state.avatar.joueurs.avatarImg1
  ); // avatar joueur 1
  const avatar2Results = useSelector(
    (state) => state.avatar.joueurs.avatarImg2
  ); // avatar joueur 2
  const avatar3Results = useSelector(
    (state) => state.avatar.joueurs.avatarImg3
  ); // avatar joueur 3
  const avatar4Results = useSelector(
    (state) => state.avatar.joueurs.avatarImg4
  ); // avatar joueur 4
  const avatar5Results = useSelector(
    (state) => state.avatar.joueurs.avatarImg5
  ); // avatar joueur 5
  const avatar6Results = useSelector(
    (state) => state.avatar.joueurs.avatarImg6
  ); // avatar joueur 6
  const avatar7Results = useSelector(
    (state) => state.avatar.joueurs.avatarImg7
  ); // avatar joueur 7
  const avatar8Results = useSelector(
    (state) => state.avatar.joueurs.avatarImg8
  ); // avatar joueur 8
  const avatar9Results = useSelector(
    (state) => state.avatar.joueurs.avatarImg9
  ); // avatar joueur 9
  const avatar10Results = useSelector(
    (state) => state.avatar.joueurs.avatarImg10
  ); // avatar joueur 10
  const avatar11Results = useSelector(
    (state) => state.avatar.joueurs.avatarImg11
  ); // avatar joueur 11
  const avatar12Results = useSelector(
    (state) => state.avatar.joueurs.avatarImg12
  ); // avatar joueur 12
  const avatar13Results = useSelector(
    (state) => state.avatar.joueurs.avatarImg13
  ); // avatar joueur 13
  const avatar14Results = useSelector(
    (state) => state.avatar.joueurs.avatarImg14
  ); // avatar joueur 14

  const nbOfPlayer = useSelector((state) => state.avatar.joueurs.nbPlayer); // nombre de joueur

  const indexTaupeResults = useSelector((state) => state.role.taupe); // index de la taupe
  const symboleTaupeResults = useSelector((state) => state.role.symboleTaupe); // valeur du symbole de la taupe
  const indexInfo1Results = useSelector((state) => state.role.info1); // index de l'info 1
  const symboleInfo1Results = useSelector((state) => state.role.SymboleInfo1); // valeur du symbole de l'info 1
  const indexInfo2Results = useSelector((state) => state.role.info2); // index de l'info 2
  const symboleInfo2Results = useSelector((state) => state.role.SymboleInfo2); // valeur du symbole de l' info 2
  const checkRoleEmpty = useSelector((state) => state.avatar.joueurSelf.roleSelf); // valeur du symbole de l' info 2
  const taupeEmpty = useSelector((state) => state.avatar.joueurSelf.taupeSelf); // valeur du symbole de l' info 2
  const info1Empty = useSelector((state) => state.avatar.joueurSelf.info1Self); // valeur du symbole de l' info 2
  const info2Empty = useSelector((state) => state.avatar.joueurSelf.info2Self); // valeur du symbole de l' info 2

  /**
   * tableau contenant tous les participants joueurs
   */
  const arrayJoueurResult = useSelector((state) => state.role.joueur);

  const choixSymbole0 = useSelector(
    (state) => state.avatar.hote.choixSymbole0
  ); // Le choix du symbole de joueur x
  const choixSymbole1 = useSelector(
    (state) => state.avatar.joueurs.choixSymbole1
  ); // Le choix du symbole de joueur x
  const choixSymbole2 = useSelector(
    (state) => state.avatar.joueurs.choixSymbole2
  ); // Le choix du symbole de joueur x
  const choixSymbole3 = useSelector(
    (state) => state.avatar.joueurs.choixSymbole3
  ); // Le choix du symbole de joueur x
  const choixSymbole4 = useSelector(
    (state) => state.avatar.joueurs.choixSymbole4
  ); // Le choix du symbole de joueur x
  const choixSymbole5 = useSelector(
    (state) => state.avatar.joueurs.choixSymbole5
  ); // Le choix du symbole de joueur x
  const choixSymbole6 = useSelector(
    (state) => state.avatar.joueurs.choixSymbole6
  ); // Le choix du symbole de joueur x
  const choixSymbole7 = useSelector(
    (state) => state.avatar.joueurs.choixSymbole7
  ); // Le choix du symbole de joueur x
  const choixSymbole8 = useSelector(
    (state) => state.avatar.joueurs.choixSymbole8
  ); // Le choix du symbole de joueur x
  const choixSymbole9 = useSelector(
    (state) => state.avatar.joueurs.choixSymbole9
  ); // Le choix du symbole de joueur x
  const choixSymbole10 = useSelector(
    (state) => state.avatar.joueurs.choixSymbole10
  ); // Le choix du symbole de joueur x
  const choixSymbole11 = useSelector(
    (state) => state.avatar.joueurs.choixSymbole11
  ); // Le choix du symbole de joueur x
  const choixSymbole12 = useSelector(
    (state) => state.avatar.joueurs.choixSymbole12
  ); // Le choix du symbole de joueur x
  const choixSymbole13 = useSelector(
    (state) => state.avatar.joueurs.choixSymbole13
  ); // Le choix du symbole de joueur x
  const choixSymbole14 = useSelector(
    (state) => state.avatar.joueurs.choixSymbole14
  ); // Le choix du symbole de joueur x
  const choixSymboleSelf = useSelector(
    (state) => state.avatar.joueurSelf.symboleSelf
  ); // Le choix du symbole de joueur x


  // On va chercher si chaque joueurs gagne ou perd
  const winOrLooseSelf = useSelector((state) => state.result.selfResult); // gagner ou perdu pour le joueur self
  const winOrLoose0 = useSelector((state) => state.avatar.hote.result0); // gagné ou perdu joueur hote
  const winOrLoose1 = useSelector((state) => state.avatar.joueurs.result1); // gagné ou perdu joueur 1
  const winOrLoose2 = useSelector((state) => state.avatar.joueurs.result2); // gagné ou perdu joueur 2
  const winOrLoose3 = useSelector((state) => state.avatar.joueurs.result3); // gagné ou perdu joueur 3
  const winOrLoose4 = useSelector((state) => state.avatar.joueurs.result4); // gagné ou perdu joueur 4
  const winOrLoose5 = useSelector((state) => state.avatar.joueurs.result5); // gagné ou perdu joueur 5
  const winOrLoose6 = useSelector((state) => state.avatar.joueurs.result6); // gagné ou perdu joueur 6
  const winOrLoose7 = useSelector((state) => state.avatar.joueurs.result7); // gagné ou perdu joueur 7
  const winOrLoose8 = useSelector((state) => state.avatar.joueurs.result8); // gagné ou perdu joueur 8
  const winOrLoose9 = useSelector((state) => state.avatar.joueurs.result9); // gagné ou perdu joueur 9
  const winOrLoose10 = useSelector((state) => state.avatar.joueurs.result10); // gagné ou perdu joueur 10
  const winOrLoose11 = useSelector((state) => state.avatar.joueurs.result11); // gagné ou perdu joueur 11
  const winOrLoose12 = useSelector((state) => state.avatar.joueurs.result12); // gagné ou perdu joueur 12
  const winOrLoose13 = useSelector((state) => state.avatar.joueurs.result13); // gagné ou perdu joueur 13
  const winOrLoose14 = useSelector((state) => state.avatar.joueurs.result14); // gagné ou perdu joueur 14


  
  /**
   * Le tableau qui contient tous les choix de symbole des joueurs
   */
  const SymboleJoueurResults = [
    choixSymbole0,
    choixSymbole1,
    choixSymbole2,
    choixSymbole3,
    choixSymbole4,
    choixSymbole5,
    choixSymbole6,
    choixSymbole7,
    choixSymbole8,
    choixSymbole9,
    choixSymbole10,
    choixSymbole11,
    choixSymbole12,
    choixSymbole13,
    choixSymbole14,
  ];

/**
 * Tableau qui va contenir tout les noms
 */
  const nameUserResults = [
    name0Results,
    name1Results,
    name2Results,
    name3Results,
    name4Results,
    name5Results,
    name6Results,
    name7Results,
    name8Results,
    name9Results,
    name10Results,
    name11Results,
    name12Results,
    name13Results,
    name14Results,
  ];

  /**
   * Tableau qui va contenir les resultats finaux
   */
  const winOrLooseArray = [winOrLoose0, winOrLoose1, winOrLoose2, winOrLoose3, winOrLoose4, winOrLoose5, winOrLoose6, winOrLoose7, winOrLoose8, winOrLoose9, winOrLoose10, winOrLoose11,winOrLoose12,winOrLoose13,winOrLoose14];

  // on check si nameSelfResults est égal à une des données de ArrayJoueurResult
  /**
   * @default: contient la valeur de joueurSelfIndex si on la trouve dans le tableau des joueurs
   */
  const indexJoueur = arrayJoueurResult.indexOf(indexSelfResults);

  // Si nameSelfResults est dans ArrayJoueurResult, retirer cette donnée
  if (indexJoueur !== -1) {
    arrayJoueurResult.splice(indexJoueur, 1);
    console.log("le tableau qui contient les joueurs", arrayJoueurResult);
  }

  // Ici on affecte le bon index a chaque joueurs

  const IndexJoueur1Result = arrayJoueurResult[0];
  const IndexJoueur2Result = arrayJoueurResult[1];
  const IndexJoueur3Result = arrayJoueurResult[2];
  const IndexJoueur4Result = arrayJoueurResult[3];
  const IndexJoueur5Result = arrayJoueurResult[4];
  const IndexJoueur6Result = arrayJoueurResult[5];
  const IndexJoueur7Result = arrayJoueurResult[6];
  const IndexJoueur8Result = arrayJoueurResult[7];
  const IndexJoueur9Result = arrayJoueurResult[8];
  const IndexJoueur10Result = arrayJoueurResult[9];
  const IndexJoueur11Result = arrayJoueurResult[10];

  // --------------------------- Les avatars -----------------------------------------

  const avatarUserResults = [
    avatar0Results,
    avatar1Results,
    avatar2Results,
    avatar3Results,
    avatar4Results,
    avatar5Results,
    avatar6Results,
    avatar7Results,
    avatar8Results,
    avatar9Results,
    avatar10Results,
    avatar11Results,
    avatar12Results,
    avatar13Results,
    avatar14Results,
  ];

  //On envoie nos choix de cartes et notre role aux WS

  //Useeffect qui permet de check une seule fois si la on n'est joueur ou non et d'envoyer notre index aux autres
  useEffect(() => {
    //On veut identifiier les joueurs Donc Si roleSelf est vide je suis un joueur j'enregistre mon index dans le state joueur et je dispatch mon index pour signaler aux autres que je suis joueur
    if ( indexSelfResults !== indexTaupeResults && indexSelfResults !== indexInfo1Results && indexSelfResults !== indexInfo2Results ) {
      // Si je suis joueur, je m'enregistre dans le state et j'envoie mon index aux autre participants
      console.log('je suis un joueur et j\'envoie une action');
      dispatch(sendIndexJoueurWs(indexSelfResults));
    }
  }, []);

  // -------------------------------- Ici on check si on gagne ou on perd -----------------------------------

  // Ici on check si on a gagner ou perdu
  useEffect(() => {
    console.log(
      "On test les condition de reussite",
      "le signe de la taupe",
      symboleTaupeResults,
      "notre symbole",
      choixSymboleSelf
    );

    //Si on n'a rien joué
    if (choixSymboleSelf == "Feuille") {
      dispatch(saveLoseSelf());
    }

    // si la taupe a jouer Pierre
    if (symboleTaupeResults == "Pierre" && choixSymboleSelf == "Feuille") {
      // ca gagne
      dispatch(saveWinSelf());
      console.log("on gagne contre la Pierre");
    }
    if (symboleTaupeResults == "Pierre" && choixSymboleSelf == "Pierre") {
      //c'est perdu
      dispatch(saveLoseSelf());
      console.log("on perd contre la pierre");
    }
    if (symboleTaupeResults == "Pierre" && choixSymboleSelf == "Ciseaux") {
      //c'est perdu
      dispatch(saveLoseSelf());
      console.log("on perd contre la pierre");
    }

    // SI la taupe a jouer Feuille
    if (symboleTaupeResults == "Feuille" && choixSymboleSelf == "Ciseaux") {
      // Ca gagne
      dispatch(saveWinSelf());
      console.log("on gagne contre la Feuille");
    }
    if (symboleTaupeResults == "Feuille" && choixSymboleSelf == "Pierre") {
      //c'est perdu
      dispatch(saveLoseSelf());
      console.log("on perd contre la Feuille");
    }
    if (symboleTaupeResults == "Feuille" && choixSymboleSelf == "Feuille") {
      //c'est perdu
      dispatch(saveLoseSelf());
      console.log("on perd contre la Feuille");
    }

    // Si la taupe a jouer Ciseaux
    if (symboleTaupeResults == "Ciseaux" && choixSymboleSelf == "Pierre") {
      // ca gagne
      dispatch(saveWinSelf());
      console.log("on gagne contre les ciseaux");
    }
    if (symboleTaupeResults == "Ciseaux" && choixSymboleSelf == "Feuille") {
      //c'est perdu
      dispatch(saveLoseSelf());
      console.log("on perd contre les Ciseaux");
    }
    if (symboleTaupeResults == "Ciseaux" && choixSymboleSelf == "Ciseaux") {
      //c'est perdu
      dispatch(saveLoseSelf());
      console.log("on perd contre les Ciseaux");
    }
  }, [symboleTaupeResults, choixSymboleSelf]);

  // Ici on check si on a gagner ou perdu et on l'envoie aux autres joueurs
  useEffect(() => {
    if (resultSelfResults === "WIN") {
      dispatch(sendWinWS(indexSelfResults));
      console.log("ici ca gagne");
    }
    if (resultSelfResults === "LOSE") {
      dispatch(sendLoseWS(indexSelfResults));
    }
  }, [resultSelfResults]);

  // Ici on envoit notre index et notre symbole via les webSockets
  useEffect(() => {
    if (choixSymboleSelf !== null) {
      dispatch(sendChoixSymboleSelf(choixSymboleSelf, indexSelfResults));
    }
  }, [choixSymboleSelf, indexSelfResults]);



  //Ce useeffect permet de trouver tout les div dans lesquel placer les noms
  useEffect(() => {
    //-----------------------On check qui gagne ou perd en local-----------------------

    if (choixSymboleSelf == "Pierre") {
      // Si on n'a choisi la pierre on la passe en background jaune
      const pierreSelf = document.querySelector(".joueurSelfPierre");
      pierreSelf.classList.add("carte__symbole-Selectionné");
    }
    if (choixSymboleSelf == "Feuille") {
      // Si on n'a choisi la feuille on la passe en background jaune
      const feuilleSelf = document.querySelector(".joueurSelfFeuille");
      feuilleSelf.classList.add("carte__symbole-Selectionné");
    }
    if (choixSymboleSelf == "Ciseaux") {
      // Si on n'a choisi la Ciseaux on la passe en background jaune => backgroud red carte__symbole-Selectionné__informateur
      const ciseauxSelf = document.querySelector(".joueurSelfCiseaux");
      ciseauxSelf.classList.add("carte__symbole-Selectionné");
    }

    const divPseudoSelfResults = document.querySelector(".div__playerSelf");
    const divPseudo1Results = document.querySelector(".joueur1Result");
    const divPseudo2Results = document.querySelector(".joueur2Result");
    const divPseudo3Results = document.querySelector(".joueur3Result");
    const divPseudo4Results = document.querySelector(".joueur4Result");
    const divPseudo5Results = document.querySelector(".joueur5Result");
    const divPseudo6Results = document.querySelector(".joueur6Result");
    const divPseudo7Results = document.querySelector(".joueur7Result");
    const divPseudo8Results = document.querySelector(".joueur8Result");
    const divPseudo9Results = document.querySelector(".joueur9Result");
    const divPseudo10Results = document.querySelector(".joueur10Result");
    const divPseudo11Results = document.querySelector(".joueur11Result");

    // SI je suis la taupe, ou l'un des informateur je passe la div self en none
    if (
      indexSelfResults == indexTaupeResults ||
      indexSelfResults == indexInfo1Results ||
      indexSelfResults == indexInfo2Results
    ) {
      divPseudoSelfResults.style.display = "none";
    }

    //Si je suis la taupe on applique un css differant
    if (nameSelfResults !== "" && indexSelfResults == indexTaupeResults) {
      // On passe le background de la case en bleu
      const divTaupeResult = document.querySelector(
        ".div__les__taupes--contain--1"
      );
      divTaupeResult.classList.add("divTaupeSelf");
      // On passe le backgournd de l'icone en blanc
      const divIconeTaupeResult = document.querySelector(".icone_taupe");
      divIconeTaupeResult.classList.add("icone_taupeSlef");
      // On passe le name en blanc
      const divPseudoTaupeSelf = document.querySelector(".span__pseudo");
      divPseudoTaupeSelf.classList.add("nameTaupeSelf");
    }

    //Si je suis l'informateur 1 on applique un css differant
    if (nameSelfResults !== "" && indexSelfResults == indexInfo1Results) {
      // On passe le background de la case en bleu
      const divTaupeResult = document.querySelector(".div__Informateurs1");
      divTaupeResult.classList.add("divTaupeSelf");
      // On passe le backgournd de l'icone en blanc
      const divIconeTaupeResult = document.querySelector(
        ".icone__informateur1"
      );
      divIconeTaupeResult.classList.add("icone_taupeSlef");
      // On passe le name en blanc
      const divPseudoTaupeSelf = document.querySelector(".pseudoInformateur1");
      divPseudoTaupeSelf.classList.add("nameTaupeSelf");
    }

    //Si je suis l'informateur 2 on applique un css differant
    if (nameSelfResults !== "" && indexSelfResults == indexInfo2Results) {
      // On passe le background de la case en bleu
      const divTaupeResult = document.querySelector(".div__Informateurs2");
      divTaupeResult.classList.add("divTaupeSelf");
      // On passe le backgournd de l'icone en blanc
      const divIconeTaupeResult = document.querySelector(
        ".icone__informateur2"
      );
      divIconeTaupeResult.classList.add("icone_taupeSlef");
      // On passe le name en blanc
      const divPseudoTaupeSelf = document.querySelector(".pseudoInformateur2");
      divPseudoTaupeSelf.classList.add("nameTaupeSelf");
      // On passe en blanc le background des img
    }

    // Si le nb de joueur est de 5, on passe la case 1 en flex si 6 case 2 en felx ...
    if (nbOfPlayer == 5) {
      divPseudo2Results.style.display = "none";
      divPseudo3Results.style.display = "none";
      divPseudo4Results.style.display = "none";
      divPseudo5Results.style.display = "none";
      divPseudo6Results.style.display = "none";
      divPseudo7Results.style.display = "none";
      divPseudo8Results.style.display = "none";
      divPseudo9Results.style.display = "none";
      divPseudo10Results.style.display = "none";
      divPseudo11Results.style.display = "none";

      // Si je suis la taupe, l'informateur1 ou 2 je passe une div de plus en flex
      if (
        indexSelfResults == indexTaupeResults ||
        indexSelfResults == indexInfo1Results ||
        indexSelfResults == indexInfo2Results
      ) {
        divPseudo2Results.style.display = "flex";
      }
    } else if (nbOfPlayer == 6) {
      divPseudo3Results.style.display = "none";
      divPseudo4Results.style.display = "none";
      divPseudo5Results.style.display = "none";
      divPseudo6Results.style.display = "none";
      divPseudo7Results.style.display = "none";
      divPseudo8Results.style.display = "none";
      divPseudo9Results.style.display = "none";
      divPseudo10Results.style.display = "none";
      divPseudo11Results.style.display = "none";
      if (
        indexSelfResults == indexTaupeResults ||
        indexSelfResults == indexInfo1Results ||
        indexSelfResults == indexInfo2Results
      ) {
        divPseudo3Results.style.display = "flex";
      }
    } else if (nbOfPlayer == 7) {
      divPseudo4Results.style.display = "none";
      divPseudo5Results.style.display = "none";
      divPseudo6Results.style.display = "none";
      divPseudo7Results.style.display = "none";
      divPseudo8Results.style.display = "none";
      divPseudo9Results.style.display = "none";
      divPseudo10Results.style.display = "none";
      divPseudo11Results.style.display = "none";
      if (
        indexSelfResults == indexTaupeResults ||
        indexSelfResults == indexInfo1Results ||
        indexSelfResults == indexInfo2Results
      ) {
        divPseudo4Results.style.display = "flex";
      }
    } else if (nbOfPlayer == 8) {
      divPseudo5Results.style.display = "none";
      divPseudo6Results.style.display = "none";
      divPseudo7Results.style.display = "none";
      divPseudo8Results.style.display = "none";
      divPseudo9Results.style.display = "none";
      divPseudo10Results.style.display = "none";
      divPseudo11Results.style.display = "none";
      if (
        indexSelfResults == indexTaupeResults ||
        indexSelfResults == indexInfo1Results ||
        indexSelfResults == indexInfo2Results
      ) {
        divPseudo5Results.style.display = "flex";
      }
    } else if (nbOfPlayer == 9) {
      divPseudo6Results.style.display = "none";
      divPseudo7Results.style.display = "none";
      divPseudo8Results.style.display = "none";
      divPseudo9Results.style.display = "none";
      divPseudo10Results.style.display = "none";
      divPseudo11Results.style.display = "none";
      if (
        indexSelfResults == indexTaupeResults ||
        indexSelfResults == indexInfo1Results ||
        indexSelfResults == indexInfo2Results
      ) {
        divPseudo6Results.style.display = "flex";
      }
    } else if (nbOfPlayer == 10) {
      divPseudo7Results.style.display = "none";
      divPseudo8Results.style.display = "none";
      divPseudo9Results.style.display = "none";
      divPseudo10Results.style.display = "none";
      divPseudo11Results.style.display = "none";
      if (
        indexSelfResults == indexTaupeResults ||
        indexSelfResults == indexInfo1Results ||
        indexSelfResults == indexInfo2Results
      ) {
        divPseudo7Results.style.display = "flex";
      }
    } else if (nbOfPlayer == 11) {
      divPseudo8Results.style.display = "none";
      divPseudo9Results.style.display = "none";
      divPseudo10Results.style.display = "none";
      divPseudo11Results.style.display = "none";
      if (
        indexSelfResults == indexTaupeResults ||
        indexSelfResults == indexInfo1Results ||
        indexSelfResults == indexInfo2Results
      ) {
        divPseudo8Results.style.display = "flex";
      }
    } else if (nbOfPlayer == 12) {
      divPseudo9Results.style.display = "none";
      divPseudo10Results.style.display = "none";
      divPseudo11Results.style.display = "none";
      if (
        indexSelfResults == indexTaupeResults ||
        indexSelfResults == indexInfo1Results ||
        indexSelfResults == indexInfo2Results
      ) {
        divPseudo9Results.style.display = "flex";
      }
    } else if (nbOfPlayer == 13) {
      divPseudo10Results.style.display = "none";
      divPseudo11Results.style.display = "none";
      if (
        indexSelfResults == indexTaupeResults ||
        indexSelfResults == indexInfo1Results ||
        indexSelfResults == indexInfo2Results
      ) {
        divPseudo10Results.style.display = "flex";
      }
    } else if (nbOfPlayer == 14) {
      divPseudo11Results.style.display = "none";
      if (
        indexSelfResults == indexTaupeResults ||
        indexSelfResults == indexInfo1Results ||
        indexSelfResults == indexInfo2Results
      ) {
        divPseudo11Results.style.display = "flex";
      }
    }

    // --------------------- la taupe ---------------------------------------------------------

    //gestion de la carte qui s'affiche
    if (symboleTaupeResults == "Pierre") {
      document
        .querySelector(".carte__pierreTaupe")
        .classList.add("carte__symbole-Selectionné");
      console.log("la taupe => pierre");
    } else if (symboleTaupeResults == "Feuille") {
      document
        .querySelector(".carte__feuilleTaupe")
        .classList.add("carte__symbole-Selectionné");
      console.log("la taupe => feuille");
    } else if (symboleTaupeResults == "Ciseaux") {
      document
        .querySelector(".carte__ciseauTaupe")
        .classList.add("carte__symbole-Selectionné");
      console.log("la taupe => Ciseaux");
    }

    // --------------------- l'info 1' ---------------------------------------------------------

    //gestion de la carte qui s'affiche
    if (symboleInfo1Results == "Pierre") {
      document
        .querySelector(".info1Pierre")
        .classList.add("carte__symbole-Selectionné__informateur");
    } else if (symboleInfo1Results == "Feuille") {
      document
        .querySelector(".info1Feuille")
        .classList.add("carte__symbole-Selectionné__informateur");
    } else if (symboleInfo1Results == "Ciseaux") {
      document
        .querySelector(".info1Ciseaux")
        .classList.add("carte__symbole-Selectionné__informateur");
    }

    // --------------------- l'info 2' ---------------------------------------------------------

    //gestion de la carte qui s'affiche
    if (symboleInfo2Results == "Pierre") {
      document
        .querySelector(".info2Pierre")
        .classList.add("carte__symbole-Selectionné__informateur");
    } else if (symboleInfo2Results == "Feuille") {
      document
        .querySelector(".info2Feuille")
        .classList.add("carte__symbole-Selectionné__informateur");
    } else if (symboleInfo2Results == "Ciseaux") {
      document
        .querySelector(".info2Ciseaux")
        .classList.add("carte__symbole-Selectionné__informateur");
    }
  }, []);

  useEffect(() => {
    // je fais un query pour identifier la bonne class et je lui applique la class selectionnnée
    const pierre1 = document.querySelector(".joueur1Pierre");
    const feuille1 = document.querySelector(".joueur1Feuille");
    const ciseaux1 = document.querySelector(".joueur1Ciseaux");

    const pierre2 = document.querySelector(".joueur2Pierre");
    const feuille2 = document.querySelector(".joueur2Feuille");
    const ciseaux2 = document.querySelector(".joueur2Ciseaux");

    const pierre3 = document.querySelector(".joueur3Pierre");
    const feuille3 = document.querySelector(".joueur3Feuille");
    const ciseaux3 = document.querySelector(".joueur3Ciseaux");

    const pierre4 = document.querySelector(".joueur4Pierre");
    const feuille4 = document.querySelector(".joueur4Feuille");
    const ciseaux4 = document.querySelector(".joueur4Ciseaux");

    const pierre5 = document.querySelector(".joueur5Pierre");
    const feuille5 = document.querySelector(".joueur5Feuille");
    const ciseaux5 = document.querySelector(".joueur5Ciseaux");

    const pierre6 = document.querySelector(".joueur6Pierre");
    const feuille6 = document.querySelector(".joueur6Feuille");
    const ciseaux6 = document.querySelector(".joueur6Ciseaux");

    const pierre7 = document.querySelector(".joueur7Pierre");
    const feuille7 = document.querySelector(".joueur7Feuille");
    const ciseaux7 = document.querySelector(".joueur7Ciseaux");

    const pierre8 = document.querySelector(".joueur8Pierre");
    const feuille8 = document.querySelector(".joueur8Feuille");
    const ciseaux8 = document.querySelector(".joueur8Ciseaux");

    const pierre9 = document.querySelector(".joueur9Pierre");
    const feuille9 = document.querySelector(".joueur9Feuille");
    const ciseaux9 = document.querySelector(".joueur9Ciseaux");

    const pierre10 = document.querySelector(".joueur10Pierre");
    const feuille10 = document.querySelector(".joueur10Feuille");
    const ciseaux10 = document.querySelector(".joueur10Ciseaux");

    const pierre11 = document.querySelector(".joueur11Pierre");
    const feuille11 = document.querySelector(".joueur11Feuille");
    const ciseaux11 = document.querySelector(".joueur11Ciseaux");

    // On verifie quelle symbole a joué le joueur 1 et on lui attribue une couleur
    if (SymboleJoueurResults[IndexJoueur1Result] == "Pierre") {
      pierre1.classList.add("carte__symbole-Selectionné");
      feuille1.classList.remove("carte__symbole-Selectionné");
      ciseaux1.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur1Result] == "Feuille") {
      pierre1.classList.remove("carte__symbole-Selectionné");
      feuille1.classList.add("carte__symbole-Selectionné");
      ciseaux1.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur1Result] == "Ciseaux") {
      pierre1.classList.remove("carte__symbole-Selectionné");
      feuille1.classList.remove("carte__symbole-Selectionné");
      ciseaux1.classList.add("carte__symbole-Selectionné");
    }
    // le 2eme joueur
    if (SymboleJoueurResults[IndexJoueur2Result] == "Pierre") {
      pierre2.classList.add("carte__symbole-Selectionné");
      feuille2.classList.remove("carte__symbole-Selectionné");
      ciseaux2.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur2Result] == "Feuille") {
      pierre2.classList.remove("carte__symbole-Selectionné");
      feuille2.classList.add("carte__symbole-Selectionné");
      ciseaux2.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur2Result] == "Ciseaux") {
      pierre2.classList.remove("carte__symbole-Selectionné");
      feuille2.classList.remove("carte__symbole-Selectionné");
      ciseaux2.classList.add("carte__symbole-Selectionné");
    }
  // le 3eme joueur
    if (SymboleJoueurResults[IndexJoueur3Result] == "Pierre") {
      pierre3.classList.add("carte__symbole-Selectionné");
      feuille3.classList.remove("carte__symbole-Selectionné");
      feuille3.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur3Result] == "Feuille") {
      pierre3.classList.remove("carte__symbole-Selectionné");
      feuille3.classList.add("carte__symbole-Selectionné");
      feuille3.classList.remove("carte__symbole-Selectionné");   
     }
    if (SymboleJoueurResults[IndexJoueur3Result] == "Ciseaux") {
      pierre3.classList.remove("carte__symbole-Selectionné");
      feuille3.classList.remove("carte__symbole-Selectionné");
      feuille3.classList.add("carte__symbole-Selectionné");   
     }
    // le 4eme joueur
    if (SymboleJoueurResults[IndexJoueur4Result] == "Pierre") {
      pierre4.classList.add("carte__symbole-Selectionné");
      feuille4.classList.remove("carte__symbole-Selectionné");
      feuille4.classList.remove("carte__symbole-Selectionné"); 
        }
    if (SymboleJoueurResults[IndexJoueur4Result] == "Feuille") {
      pierre4.classList.remove("carte__symbole-Selectionné");
      feuille4.classList.add("carte__symbole-Selectionné");
      feuille4.classList.remove("carte__symbole-Selectionné"); 
        }
    if (SymboleJoueurResults[IndexJoueur4Result] == "Ciseaux") {
      pierre4.classList.remove("carte__symbole-Selectionné");
      feuille4.classList.remove("carte__symbole-Selectionné");
      feuille4.classList.add("carte__symbole-Selectionné"); 
    }
// le 5eme joueur
    if (SymboleJoueurResults[IndexJoueur5Result] == "Pierre") {
      pierre5.classList.add("carte__symbole-Selectionné");
      feuille5.classList.remove("carte__symbole-Selectionné");
      feuille5.classList.remove("carte__symbole-Selectionné"); 
        }
    if (SymboleJoueurResults[IndexJoueur5Result] == "Feuille") {
      pierre5.classList.remove("carte__symbole-Selectionné");
      feuille5.classList.add("carte__symbole-Selectionné");
      feuille5.classList.remove("carte__symbole-Selectionné"); 
    }
    if (SymboleJoueurResults[IndexJoueur5Result] == "Ciseaux") {
      pierre5.classList.remove("carte__symbole-Selectionné");
      feuille5.classList.remove("carte__symbole-Selectionné");
      feuille5.classList.add("carte__symbole-Selectionné"); 
    }
// le 6eme joueur
    if (SymboleJoueurResults[IndexJoueur6Result] == "Pierre") {
      pierre6.classList.add("carte__symbole-Selectionné");
      feuille6.classList.remove("carte__symbole-Selectionné");
      feuille6.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur6Result] == "Feuille") {
      pierre6.classList.remove("carte__symbole-Selectionné");
      feuille6.classList.add("carte__symbole-Selectionné");
      feuille6.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur6Result] == "Ciseaux") {
      pierre6.classList.remove("carte__symbole-Selectionné");
      feuille6.classList.remove("carte__symbole-Selectionné");
      feuille6.classList.add("carte__symbole-Selectionné");
    }
// le 7eme joueur
    if (SymboleJoueurResults[IndexJoueur7Result] == "Pierre") {
      pierre7.classList.add("carte__symbole-Selectionné");
      feuille7.classList.remove("carte__symbole-Selectionné");
      feuille7.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur7Result] == "Feuille") {
      pierre7.classList.remove("carte__symbole-Selectionné");
      feuille7.classList.add("carte__symbole-Selectionné");
      feuille7.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur7Result] == "Ciseaux") {
      pierre7.classList.remove("carte__symbole-Selectionné");
      feuille7.classList.remove("carte__symbole-Selectionné");
      feuille7.classList.add("carte__symbole-Selectionné");
    }

    // le 8eme joueur
    if (SymboleJoueurResults[IndexJoueur8Result] == "Pierre") {
      pierre8.classList.add("carte__symbole-Selectionné");
      feuille8.classList.remove("carte__symbole-Selectionné");
      feuille8.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur8Result] == "Feuille") {
      pierre8.classList.remove("carte__symbole-Selectionné");
      feuille8.classList.add("carte__symbole-Selectionné");
      feuille8.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur8Result] == "Ciseaux") {
      pierre8.classList.remove("carte__symbole-Selectionné");
      feuille8.classList.remove("carte__symbole-Selectionné");
      feuille8.classList.add("carte__symbole-Selectionné");
    }

    // le 9eme joueur
    if (SymboleJoueurResults[IndexJoueur9Result] == "Pierre") {
      pierre9.classList.add("carte__symbole-Selectionné");
      feuille9.classList.remove("carte__symbole-Selectionné");
      feuille9.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur9Result] == "Feuille") {
      pierre9.classList.remove("carte__symbole-Selectionné");
      feuille9.classList.add("carte__symbole-Selectionné");
      feuille9.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur9Result] == "Ciseaux") {
      pierre9.classList.remove("carte__symbole-Selectionné");
      feuille9.classList.remove("carte__symbole-Selectionné");
      feuille9.classList.add("carte__symbole-Selectionné");
    }

    // le 10eme joueur
    if (SymboleJoueurResults[IndexJoueur10Result] == "Pierre") {
      pierre10.classList.add("carte__symbole-Selectionné");
      feuille10.classList.remove("carte__symbole-Selectionné");
      feuille10.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur10Result] == "Feuille") {
      pierre10.classList.remove("carte__symbole-Selectionné");
      feuille10.classList.add("carte__symbole-Selectionné");
      feuille10.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur10Result] == "Ciseaux") {
      pierre10.classList.remove("carte__symbole-Selectionné");
      feuille10.classList.remove("carte__symbole-Selectionné");
      feuille10.classList.add("carte__symbole-Selectionné");
    }

    // le 11eme joueur
    if (SymboleJoueurResults[IndexJoueur11Result] == "Pierre") {
      pierre11.classList.add("carte__symbole-Selectionné");
      feuille11.classList.remove("carte__symbole-Selectionné");
      feuille11.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur11Result] == "Feuille") {
      pierre11.classList.remove("carte__symbole-Selectionné");
      feuille11.classList.add("carte__symbole-Selectionné");
      feuille11.classList.remove("carte__symbole-Selectionné");
    }
    if (SymboleJoueurResults[IndexJoueur11Result] == "Ciseaux") {
      pierre11.classList.remove("carte__symbole-Selectionné");
      feuille11.classList.remove("carte__symbole-Selectionné");
      feuille11.classList.add("carte__symbole-Selectionné");
    }

  }, [SymboleJoueurResults]);


// On modifie le css en fonction du resultat
useEffect(() => {
// On test le tableau des resultats
console.log('tableau des resultats', winOrLooseArray);
  
  const score0 = document.querySelector(".compteurPlayerSelf");
  const score1 = document.querySelector(".compteurPlayer1");
  const score2 = document.querySelector(".compteurPlayer2");
  const score3 = document.querySelector(".compteurPlayer3");
  const score4 = document.querySelector(".compteurPlayer4");
  const score5 = document.querySelector(".compteurPlayer5");
  const score6 = document.querySelector(".compteurPlayer6");
  const score7 = document.querySelector(".compteurPlayer7");
  const score8 = document.querySelector(".compteurPlayer8");
  const score9 = document.querySelector(".compteurPlayer9");
  const score10 = document.querySelector(".compteurPlayer10");
  const score11 = document.querySelector(".compteurPlayer11");

  console.log('on test l\'index', IndexJoueur1Result, arrayJoueurResult);
  // le joueur self
 if ( winOrLooseSelf == "WIN") {
    score0.style.display = "flex";
  }
  if ( winOrLooseSelf == "LOSE") {
  }
  
/*******************joueur 1 */
  if ( winOrLooseArray[IndexJoueur1Result] == "Win") {
    score1.style.display = "flex";
    console.log('gagné css joueur 1', IndexJoueur1Result);
  }
  if ( winOrLooseArray[IndexJoueur1Result] == "LOSE") {
    console.log('perdu css joueur 1');
  }
/*******************joueur 2 */
  if ( winOrLooseArray[IndexJoueur2Result] == "Win") {
    score2.style.display = "flex";
    console.log('gagné css joueur 2', IndexJoueur2Result);
  }
  if ( winOrLooseArray[IndexJoueur2Result] == "LOSE") {
    console.log('perdu css joueur 2');
  }
/*******************joueur 3 */
  if ( winOrLooseArray[IndexJoueur3Result] == "Win") {
    score3.style.display = "flex";
    console.log('gagné css joueur 4', IndexJoueur3Result);
  }
  if ( winOrLooseArray[IndexJoueur3Result] == "LOSE") {
    console.log('perdu css joueur 4');
  }
/*******************joueur 4 */
  if ( winOrLooseArray[IndexJoueur4Result] == "Win") {
    score4.style.display = "flex";
    console.log('gagné css joueur 5', IndexJoueur4Result);
  }
  if ( winOrLooseArray[IndexJoueur4Result] == "LOSE") {
    console.log('perdu css joueur 5');
  }
/*******************joueur 5 */
  if ( winOrLooseArray[IndexJoueur5Result] == "Win") {
    score5.style.display = "flex";
    console.log('gagné css joueur 5', IndexJoueur5Result);
  }
  if ( winOrLooseArray[IndexJoueur5Result] == "LOSE") {
    console.log('perdu css joueur 5');
  }
/*******************joueur 6 */
  if ( winOrLooseArray[IndexJoueur6Result] == "Win") {
    score6.style.display = "flex";
    console.log('gagné css joueur 5', IndexJoueur6Result);
  }
  if ( winOrLooseArray[IndexJoueur6Result] == "LOSE") {
    console.log('perdu css joueur 5');
  }
/*******************joueur 7 */
  if ( winOrLooseArray[IndexJoueur7Result] == "Win") {
    score7.style.display = "flex";
    console.log('gagné css joueur 5', IndexJoueur7Result);
  }
  if ( winOrLooseArray[IndexJoueur7Result] == "LOSE") {
    console.log('perdu css joueur 5');
  }
/*******************joueur 8 */
  if ( winOrLooseArray[IndexJoueur8Result] == "Win") {
    score8.style.display = "flex";
    console.log('gagné css joueur 5', IndexJoueur4Result);
  }
  if ( winOrLooseArray[IndexJoueur8Result] == "LOSE") {
    console.log('perdu css joueur 5');
  }
/*******************joueur 9 */
  if ( winOrLooseArray[IndexJoueur9Result] == "Win") {
    score9.style.display = "flex";
    console.log('gagné css joueur 5', IndexJoueur9Result);
  }
  if ( winOrLooseArray[IndexJoueur9Result] == "LOSE") {
    console.log('perdu css joueur 5');
  }
  /*******************joueur 10 */
  if ( winOrLooseArray[IndexJoueur10Result] == "Win") {
    score10.style.display = "flex";
    console.log('gagné css joueur 5', IndexJoueur10Result);
  }
  if ( winOrLooseArray[IndexJoueur10Result] == "LOSE") {
    console.log('perdu css joueur 5');
  }
  /*******************joueur 11 */
  if ( winOrLooseArray[IndexJoueur11Result] == "Win") {
    score11.style.display = "flex";
    console.log('gagné css joueur 5', IndexJoueur11Result);
  }
  if ( winOrLooseArray[IndexJoueur11Result] == "LOSE") {
    console.log('perdu css joueur 5');
  }
}, [winOrLooseArray]);


const newPartieButton = (event) => {
  // On veut faire une redirection vers une nouvelle partie. il faut donc changer de page vider le serveur et changer de page.
  // on envoit un webSocket a tout le monde pour dire de vider le serveur et losque c'est bon on change de page. 
  console.log('clique est trigger');
  // sert a effacer le role  
  dispatch(cleanRoleSelf());
  // sert a vider le tableau des joueurs
  dispatch(sendCleanJoueurArray());
  dispatch(cleanServer());
}


if ( newGameready == "newGame") {
  /**
   * la div qui masque la page result lorsque on initie une nouvelle partie
   */
  const divWating = document.querySelector('.watingForNewPlay');
  console.log('on passe vers la page de jeu', newGameready);

  /**
   * la div normale qui affiche les resultats
   */
   const divResult = document.querySelector('.resultview');

   //divWating.style.display = "flex";
   //divResult.style.display = "none";
   navigate(`/Playing/${salonState}`);
}



  return (
    <div >
      <div className="watingForNewPlay" > Une partie va bientot commencer </div>
      <div className="resultview" >
        <div className="pubGaucheResultat" >Pub1</div>
        {" "}
        {/*     <!--pouvoir faire remonter les bugs ou les points a ameliorer !! Attention au insersion de sql-->
          <!--IL faut placer les joueurs et les informateurs dans une boucle forEatch-->
              <!--ici on affiche la ou les deux taupes--> */}
      <div className="containerResult">
      <div className="responsiveAlert" >!!!!!!!!!!Responsive in progress!!!!!!!!!!</div>
      <div className="div__les__taupes--contain--1">
        <div className="div__role--main">
          <img className="icone_taupe" src={taupe} alt="icone Taupe" />
        </div>{" "}
        <div className="div__PseudoImg--Taupe">
          <img
            className="img__Avatar"
            src={avatarUserResults[indexTaupeResults]}
            alt="Img Avatar"
          />
          <span className="span__pseudo">
            {" "}
            {nameUserResults[indexTaupeResults]}{" "}
          </span>{" "}
        </div>{" "}
        <div className="div__symboles--taupe">
          <img
            className="carte__pierreTaupe "
            src={Pierre}
            alt="Icone Pierre"
          />
          <img
            className="carte__feuilleTaupe "
            src={Feuille}
            alt="Icone Feuille"
          />
          <img
            className="carte__ciseauTaupe "
            src={Ciseaux}
            alt="Icone ciseaux"
          />
        </div>{" "}
      </div>{" "}
      <div className="compteurTaupe">
        <div className="scoreTaupe"> 10 </div>{" "}
      </div>{" "}
      {/*  <!--ici on affiche les deux informateurs--> */}
      <div className="contener__informateur">
        {" "}
        {/**Informateur 1 */}{" "}
        <div className="div__Informateurs div__Informateurs1">
          <div className="contener__icone__informateur">
            <img
              className="icone__informateur icone__informateur1"
              src={Informateur}
              alt="icone Informateur"
            />
          </div>{" "}
          <div className="contenerPersoInformateur">
            <img
              className="img__informateur--1 imgAvatarResultat"
              src={avatarUserResults[indexInfo1Results]}
              alt="img__avatar"
            />
            <span className="pseudoInformateur pseudoInformateur1">
              {" "}
              {nameUserResults[indexInfo1Results]}{" "}
            </span>{" "}
          </div>{" "}
          <div className="contener__card">
            <img
              className="carte__pierre info1Pierre"
              src={Pierre}
              alt="icone Pierre"
            />
            <img
              className="carte__feuille info1Feuille"
              src={Feuille}
              alt="icone Feuille"
            />
            <img
              className="carte__ciseaux info1Ciseaux"
              src={Ciseaux}
              alt="icone Ciseaux"
            />
          </div>{" "}
          <div className="compteurInformateurs compteurInformateurs1">
            <div className="scoreInformateur "> 10 </div>{" "}
          </div>{" "}
        </div>
        {/**Informateur 2 */}{" "}
        <div className="div__Informateurs div__Informateurs2">
          <div className="contener__icone__informateur">
            <img
              className="icone__informateur icone__informateur2"
              src={Informateur}
              alt="icone informateur"
            />
          </div>{" "}
          <div className="contenerPersoInformateur">
            <img
              className="img__informateur--2 imgAvatarResultat"
              src={avatarUserResults[indexInfo2Results]}
              alt="img__avatar"
            />
            <span className="pseudoInformateur pseudoInformateur2">
              {" "}
              {nameUserResults[indexInfo2Results]}{" "}
            </span>{" "}
          </div>{" "}
          <div className="contener__card">
            <img
              className="carte__pierre info2Pierre"
              src={Pierre}
              alt="icone Pierre"
            />
            <img
              className="carte__feuille info2Feuille"
              src={Feuille}
              alt="icone Feuille"
            />
            <img
              className="carte__ciseaux info2Ciseaux"
              src={Ciseaux}
              alt="icone Ciseaux"
            />
          </div>{" "}
          <div className="compteurInformateurs compteurInformateurs2">
            <div className="scoreInformateur"> 10 </div>{" "}
          </div>{" "}
        </div>
        {/**Player0 // JoueurSelf */}{" "}
      </div>{" "}
      <div className="contener__player">
        {" "}
        {/*  <!--ici on affiche tous les joueurs--> */}{" "}
        <div className="div__playerSelf">
          <div className="contener__icone__player">
            <img className="icone__playerSelf" src={player} alt="img player" />
          </div>{" "}
          <div className="contenerPseudoPlayer">
            <img
              className="imgPlayer0 imgAvatarResultat"
              src={avatarSelfResults}
              alt="img__avatar"
            />
            <span className="pseudoPlayerSelf"> {nameSelfResults} </span>{" "}
          </div>{" "}
          <div className="contener__card">
            <img
              className="carte__pierre joueurSelfPierre"
              src={Pierre}
              alt="icone Pierre"
            />
            <img
              className="carte__feuille joueurSelfFeuille"
              src={Feuille}
              alt="icone Feuille"
            />
            <img
              className="carte__ciseaux joueurSelfCiseaux"
              src={Ciseaux}
              alt="icone Ciseaux"
            />
          </div>{" "}
          <div className="compteurPlayer compteurPlayerSelf">
            <div className="scorePlayer"> 10 </div>{" "}
          </div>{" "}
        </div>
        {/**Player1 */}{" "}
        <div className="div__player joueur1Result">
          <div className="contener__icone__player">
            <img className="icone__player" src={player} alt="img player" />
          </div>{" "}
          <div className="contenerPseudoPlayer">
            <img
              className="imgPlayer1 imgAvatarResultat"
              src={avatarUserResults[IndexJoueur1Result]}
              alt="img__avatar"
            />
            <span className="pseudoPlayer pseudoPlayer1Results">
              {" "}
              {nameUserResults[IndexJoueur1Result]}{" "}
            </span>{" "}
          </div>{" "}
          <div className="contener__card">
            <img
              className="carte__pierre joueur1Pierre"
              src={Pierre}
              alt="icone Pierre"
            />
            <img
              className="carte__feuille joueur1Feuille"
              src={Feuille}
              alt="icone Feuille"
            />
            <img
              className="carte__ciseaux joueur1Ciseaux"
              src={Ciseaux}
              alt="icone Ciseaux"
            />
          </div>{" "}
          <div className="compteurPlayer compteurPlayer1">
            <div className="scorePlayer"> 10 </div>{" "}
          </div>{" "}
        </div>
        {/**Player2 */}{" "}
        <div className="div__player joueur2Result">
          <div className="contener__icone__player">
            <img className="icone__player" src={player} alt="img player" />
          </div>{" "}
          <div className="contenerPseudoPlayer">
            <img
              className="imgPlayer2 imgAvatarResultat"
              src={avatarUserResults[IndexJoueur2Result]}
              alt="img__avatar"
            />
            <span className="pseudoPlayer pseudoPlayer2Results">
              {" "}
              {nameUserResults[IndexJoueur2Result]}{" "}
            </span>{" "}
          </div>{" "}
          <div className="contener__card">
            <img
              className="carte__pierre joueur2Pierre"
              src={Pierre}
              alt="icone Pierre"
            />
            <img
              className="carte__feuille joueur2Feuille"
              src={Feuille}
              alt="icone Feuille"
            />
            <img
              className="carte__ciseaux joueur2Ciseaux"
              src={Ciseaux}
              alt="icone Ciseaux"
            />
          </div>{" "}
          <div className="compteurPlayer compteurPlayer2">
            <div className="scorePlayer"> 10 </div>{" "}
          </div>{" "}
        </div>
        {/**Player3 */}{" "}
        <div className="div__player joueur3Result">
          <div className="contener__icone__player">
            <img className="icone__player" src={player} alt="img player" />
          </div>{" "}
          <div className="contenerPseudoPlayer">
            <img
              className="imgPlayer3 imgAvatarResultat"
              src={avatarUserResults[IndexJoueur3Result]}
              alt="img__avatar"
            />
            <span className="pseudoPlayer pseudoPlayer3Results">
              {" "}
              {nameUserResults[IndexJoueur3Result]}{" "}
            </span>{" "}
          </div>{" "}
          <div className="contener__card">
            <img
              className="carte__pierre joueur3Pierre"
              src={Pierre}
              alt="icone Pierre"
            />
            <img
              className="carte__feuille joueur3Feuille"
              src={Feuille}
              alt="icone Feuille"
            />
            <img
              className="carte__ciseaux joueur3Ciseaux"
              src={Ciseaux}
              alt="icone Ciseaux"
            />
          </div>{" "}
          <div className="compteurPlayer compteurPlayer3">
            <div className="scorePlayer"> 10 </div>{" "}
          </div>{" "}
        </div>
        {/**Player4 */}{" "}
        <div className="div__player joueur4Result">
          <div className="contener__icone__player">
            <img className="icone__player" src={player} alt="img player" />
          </div>{" "}
          <div className="contenerPseudoPlayer">
            <img
              className="imgPlayer4 imgAvatarResultat"
              src={avatarUserResults[IndexJoueur4Result]}
              alt="img__avatar"
            />
            <span className="pseudoPlayer pseudoPlayer4Results">
              {" "}
              {nameUserResults[IndexJoueur4Result]}{" "}
            </span>{" "}
          </div>{" "}
          <div className="contener__card">
            <img
              className="carte__pierre joueur4Pierre"
              src={Pierre}
              alt="icone Pierre"
            />
            <img
              className="carte__feuille joueur4Feuille"
              src={Feuille}
              alt="icone Feuille"
            />
            <img
              className="carte__ciseaux joueur4Ciseaux"
              src={Ciseaux}
              alt="icone Ciseaux"
            />
          </div>{" "}
          <div className="compteurPlayer compteurPlayer4">
            <div className="scorePlayer"> 10 </div>{" "}
          </div>{" "}
        </div>
        {/**Player5 */}{" "}
        <div className="div__player joueur5Result">
          <div className="contener__icone__player">
            <img className="icone__player" src={player} alt="img player" />
          </div>{" "}
          <div className="contenerPseudoPlayer">
            <img
              className="imgPlayer5 imgAvatarResultat"
              src={avatarUserResults[IndexJoueur5Result]}
              alt="img__avatar"
            />
            <span className="pseudoPlayer pseudoPlayer5Results">
              {" "}
              {nameUserResults[IndexJoueur5Result]}{" "}
            </span>{" "}
          </div>{" "}
          <div className="contener__card">
            <img
              className="carte__pierre joueur5Pierre"
              src={Pierre}
              alt="icone Pierre"
            />
            <img
              className="carte__feuille joueur5Feuille"
              src={Feuille}
              alt="icone Feuille"
            />
            <img
              className="carte__ciseaux joueur5Ciseaux"
              src={Ciseaux}
              alt="icone Ciseaux"
            />
          </div>{" "}
          <div className="compteurPlayer compteurPlayer5">
            <div className="scorePlayer"> 10 </div>{" "}
          </div>{" "}
        </div>
        {/**Player6 */}{" "}
        <div className="div__player joueur6Result">
          <div className="contener__icone__player">
            <img className="icone__player" src={player} alt="img player" />
          </div>{" "}
          <div className="contenerPseudoPlayer">
            <img
              className="imgPlayer6 imgAvatarResultat"
              src={avatarUserResults[IndexJoueur6Result]}
              alt="img__avatar"
            />
            <span className="pseudoPlayer pseudoPlayer6Results">
              {" "}
              {nameUserResults[IndexJoueur6Result]}{" "}
            </span>{" "}
          </div>{" "}
          <div className="contener__card">
            <img
              className="carte__pierre joueur6Pierre"
              src={Pierre}
              alt="icone Pierre"
            />
            <img
              className="carte__feuille joueur6Feuille"
              src={Feuille}
              alt="icone Feuille"
            />
            <img
              className="carte__ciseaux joueur6Ciseaux"
              src={Ciseaux}
              alt="icone Ciseaux"
            />
          </div>{" "}
          <div className="compteurPlayer compteurPlayer6">
            <div className="scorePlayer"> 10 </div>{" "}
          </div>{" "}
        </div>
        {/**Player7 */}{" "}
        <div className="div__player joueur7Result">
          <div className="contener__icone__player">
            <img className="icone__player" src={player} alt="img player" />
          </div>{" "}
          <div className="contenerPseudoPlayer">
            <img
              className="imgPlayer7 imgAvatarResultat"
              src={avatarUserResults[IndexJoueur7Result]}
              alt="img__avatar"
            />
            <span className="pseudoPlayer pseudoPlayer7Results">
              {" "}
              {nameUserResults[IndexJoueur7Result]}{" "}
            </span>{" "}
          </div>{" "}
          <div className="contener__card">
            <img
              className="carte__pierre joueur7Pierre"
              src={Pierre}
              alt="icone Pierre"
            />
            <img
              className="carte__feuille joueur7Feuille"
              src={Feuille}
              alt="icone Feuille"
            />
            <img
              className="carte__ciseaux joueur7Ciseaux"
              src={Ciseaux}
              alt="icone Ciseaux"
            />
          </div>{" "}
          <div className="compteurPlayer compteurPlayer7">
            <div className="scorePlayer "> 10 </div>{" "}
          </div>{" "}
        </div>
        {/**Player8 */}{" "}
        <div className="div__player joueur8Result">
          <div className="contener__icone__player">
            <img className="icone__player" src={player} alt="img player" />
          </div>{" "}
          <div className="contenerPseudoPlayer">
            <img
              className="imgPlayer8 imgAvatarResultat"
              src={avatarUserResults[IndexJoueur8Result]}
              alt="img__avatar"
            />
            <span className="pseudoPlayer pseudoPlayer8Results">
              {" "}
              {nameUserResults[IndexJoueur8Result]}{" "}
            </span>{" "}
          </div>{" "}
          <div className="contener__card">
            <img
              className="carte__pierre joueur8Pierre"
              src={Pierre}
              alt="icone Pierre"
            />
            <img
              className="carte__feuille joueur8Feuille"
              src={Feuille}
              alt="icone Feuille"
            />
            <img
              className="carte__ciseaux joueur8Ciseaux"
              src={Ciseaux}
              alt="icone Ciseaux"
            />
          </div>{" "}
          <div className="compteurPlayer compteurPlayer8">
            <div className="scorePlayer "> 10 </div>{" "}
          </div>{" "}
        </div>
        {/**Player9 */}{" "}
        <div className="div__player joueur9Result">
          <div className="contener__icone__player">
            <img className="icone__player" src={player} alt="img player" />
          </div>{" "}
          <div className="contenerPseudoPlayer">
            <img
              className="imgPlayer8 imgAvatarResultat"
              src={avatarUserResults[IndexJoueur9Result]}
              alt="img__avatar"
            />
            <span className="pseudoPlayer pseudoPlayer9Results">
              {" "}
              {nameUserResults[IndexJoueur9Result]}{" "}
            </span>{" "}
          </div>{" "}
          <div className="contener__card">
            <img
              className="carte__pierre joueur9Pierre"
              src={Pierre}
              alt="icone Pierre"
            />
            <img
              className="carte__feuille joueur9Feuille"
              src={Feuille}
              alt="icone Feuille"
            />
            <img
              className="carte__ciseaux joueur9Ciseaux"
              src={Ciseaux}
              alt="icone Ciseaux"
            />
          </div>{" "}
          <div className="compteurPlayer compteurPlayer9">
            <div className="scorePlayer "> 10 </div>{" "}
          </div>{" "}
        </div>
        {/**Player10 */}{" "}
        <div className="div__player joueur10Result">
          <div className="contener__icone__player">
            <img className="icone__player" src={player} alt="img player" />
          </div>{" "}
          <div className="contenerPseudoPlayer">
            <img
              className="imgPlayer8 imgAvatarResultat"
              src={avatarUserResults[IndexJoueur10Result]}
              alt="img__avatar"
            />
            <span className="pseudoPlayer pseudoPlayer10Results">
              {" "}
              {nameUserResults[IndexJoueur10Result]}{" "}
            </span>{" "}
          </div>{" "}
          <div className="contener__card">
            <img
              className="carte__pierre joueur10Pierre"
              src={Pierre}
              alt="icone Pierre"
            />
            <img
              className="carte__feuille joueur10Feuille"
              src={Feuille}
              alt="icone Feuille"
            />
            <img
              className="carte__ciseaux joueur10Ciseaux"
              src={Ciseaux}
              alt="icone Ciseaux"
            />
          </div>{" "}
          <div className="compteurPlayer compteurPlayer10">
            <div className="scorePlayer"> 10 </div>{" "}
          </div>{" "}
        </div>
        {/**Player11 */}{" "}
        <div className="div__player joueur11Result">
          <div className="contener__icone__player">
            <img className="icone__player" src={player} alt="img player" />
          </div>{" "}
          <div className="contenerPseudoPlayer">
            <img
              className="imgPlayer8 imgAvatarResultat"
              src={avatarUserResults[IndexJoueur11Result]}
              alt="img__avatar"
            />
            <span className="pseudoPlayer pseudoPlayer11Results">
              {" "}
              {nameUserResults[IndexJoueur11Result]}{" "}
            </span>{" "}
          </div>{" "}
          <div className="contener__card">
            <img
              className="carte__pierre joueur11Pierre"
              src={Pierre}
              alt="icone Pierre"
            />
            <img
              className="carte__feuille joueur11Feuille"
              src={Feuille}
              alt="icone Feuille"
            />
            <img
              className="carte__ciseaux joueur11Ciseaux"
              src={Ciseaux}
              alt="icone Ciseaux"
            />
          </div>{" "}
          <div className="compteurPlayer compteurPlayer11">
            <div className="scorePlayer"> 10 </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="NewGameContener">
        <button className="button_style--active buttonNewPartie" onClick={newPartieButton}>
          Nouvelle Partie{" "}
        </button>{" "}
      </div>{" "}
      </div>
      <div className="pubDroiteResultat" >Pub 2</div>
    </div>
    </div>
  );
}

export default Results;
