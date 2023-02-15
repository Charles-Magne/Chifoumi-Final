import style from "./style.scss";

//Les imgs
import taupe from "../../assets/Pictures/Role/Taupel Blue.png";
import avatarProvisoire from"../../assets/Pictures/Avatars/Lion_adulte.png";
import Pierre from "../../assets/Pictures/Symbole/pierre_bleu.png";
import Feuille from "../../assets/Pictures/Symbole/feuille_bleu.png";
import Ciseaux from "../../assets/Pictures/Symbole/ciseaux_bleu.png";
import player from "../../assets/Pictures/Role/joueur Blue.png";
import Informateur from "../../assets/Pictures/Role/informateur Blue.png";

//Les dependances
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//les actions
import { sendIndexJoueurWs } from "../../action/Role";

function Results() {

  const dispatch = useDispatch();

  const indexSelfResults = useSelector((state) => state.avatar.joueurSelf.inumber); // index joueur self
  const nameSelfResults = useSelector((state) => state.avatar.joueurSelf.valuePseudo); // pseudo joueur 1
  const avatarSelfResults = useSelector((state) => state.avatar.joueurSelf.avatarImg); // l'avatarSelf
  const name0Results = useSelector((state) => state.avatar.hote.hotePseudo); // pseudo hote
  const name1Results = useSelector((state) => state.avatar.joueurs.ValuePseudo1); // pseudo joueur 1
  const name2Results = useSelector((state) => state.avatar.joueurs.ValuePseudo2); // pseudo joueur 2
  const name3Results = useSelector((state) => state.avatar.joueurs.ValuePseudo3); // pseudo joueur 3
  const name4Results = useSelector((state) => state.avatar.joueurs.ValuePseudo4); // pseudo joueur 4 
  const name5Results = useSelector((state) => state.avatar.joueurs.ValuePseudo5); // pseudo joueur 5
  const name6Results = useSelector((state) => state.avatar.joueurs.ValuePseudo6); // pseudo joueur 6
  const name7Results = useSelector((state) => state.avatar.joueurs.ValuePseudo7); // pseudo joueur 7
  const name8Results = useSelector((state) => state.avatar.joueurs.ValuePseudo8); // pseudo joueur 8
  const name9Results = useSelector((state) => state.avatar.joueurs.ValuePseudo9); // pseudo joueur 9
  const name10Results = useSelector((state) => state.avatar.joueurs.ValuePseudo10); // pseudo joueur 10
  const name11Results = useSelector((state) => state.avatar.joueurs.ValuePseudo11); // pseudo joueur 11
  const name12Results = useSelector((state) => state.avatar.joueurs.ValuePseudo12); // pseudo joueur 12
  const name13Results = useSelector((state) => state.avatar.joueurs.ValuePseudo13); // pseudo joueur 13
  const name14Results = useSelector((state) => state.avatar.joueurs.ValuePseudo14); // pseudo joueur 14nbPlayer

  const avatar0Results = useSelector((state) => state.avatar.hote.avatarImgHote); // avatar joueur 0
  const avatar1Results = useSelector((state) => state.avatar.joueurs.avatarImg1); // avatar joueur 1
  const avatar2Results = useSelector((state) => state.avatar.joueurs.avatarImg2); // avatar joueur 2
  const avatar3Results = useSelector((state) => state.avatar.joueurs.avatarImg3); // avatar joueur 3
  const avatar4Results = useSelector((state) => state.avatar.joueurs.avatarImg4); // avatar joueur 4
  const avatar5Results = useSelector((state) => state.avatar.joueurs.avatarImg5); // avatar joueur 5
  const avatar6Results = useSelector((state) => state.avatar.joueurs.avatarImg6); // avatar joueur 6
  const avatar7Results = useSelector((state) => state.avatar.joueurs.avatarImg7); // avatar joueur 7
  const avatar8Results = useSelector((state) => state.avatar.joueurs.avatarImg8); // avatar joueur 8
  const avatar9Results = useSelector((state) => state.avatar.joueurs.avatarImg9); // avatar joueur 9
  const avatar10Results = useSelector((state) => state.avatar.joueurs.avatarImg10); // avatar joueur 10
  const avatar11Results = useSelector((state) => state.avatar.joueurs.avatarImg11); // avatar joueur 11
  const avatar12Results = useSelector((state) => state.avatar.joueurs.avatarImg12); // avatar joueur 12
  const avatar13Results = useSelector((state) => state.avatar.joueurs.avatarImg13); // avatar joueur 13
  const avatar14Results = useSelector((state) => state.avatar.joueurs.avatarImg14); // avatar joueur 14
  
  
  const nbOfPlayer = useSelector((state) => state.avatar.joueurs.nbPlayer); // nombre de joueur

  const indexTaupeResults = useSelector((state) => state.role.taupe); // index de la taupe
  const symboleTaupeResults = useSelector((state) => state.role.symboleTaupe); // valeur du symbole de la taupe
  const indexInfo1Results = useSelector((state) => state.role.info1); // index de l'info 1 
  const symboleInfo1Results = useSelector((state) => state.role.SymboleInfo1); // valeur du symbole de l'info 1 
  const indexInfo2Results = useSelector((state) => state.role.info2); // index de l'info 2
  const symboleInfo2Results = useSelector((state) => state.role.SymboleInfo2); // valeur du symbole de l' info 2
  const checkRoleEmpty = useSelector((state) => state.avatar.joueurSelf.roleSelf); // valeur du symbole de l' info 2
  const arrayJoueurResult = useSelector((state) => state.role.joueur); // tableau contenant tous les participants joueurs



  //On Creer un tableau qui va contenir tout les noms
  const nameUserResults = [ name0Results, name1Results, name2Results, name3Results, name4Results, name5Results,
     name6Results, name7Results, name8Results, name9Results, name10Results, name11Results,
     name12Results, name13Results, name14Results];

     // on check si nameSelfResults est égal à une des données de ArrayJoueurResult
     /**
      * @default: contient la valeur de joueurSelfIndex si on la trouve dans le tableau des joueurs
      */
     const indexJoueur = arrayJoueurResult.indexOf(indexSelfResults);

// Si nameSelfResults est dans ArrayJoueurResult, retirer cette donnée 
if (indexJoueur !== -1) {
  arrayJoueurResult.splice(indexJoueur, 1);
  console.log('le tableau qui contient les joueurs',arrayJoueurResult);
}

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
      avatar0Results ,
     avatar1Results ,
     avatar2Results ,
     avatar3Results ,
     avatar4Results ,
     avatar5Results ,
     avatar6Results ,
     avatar7Results ,
     avatar8Results ,
     avatar9Results ,
     avatar10Results ,
     avatar11Results ,
     avatar12Results ,
     avatar13Results ,
     avatar14Results,
    ];

 


    //Useeffect qui permet de check une seule fois si la on n'est joueur ou non et d'envoyer notre index aux autres
    useEffect(() => {
    //On veut identifiier les joueurs Donc Si roleSelf est vide je suis un joueur j'enregistre mon index dans le state joueur et je dispatch mon index pour signaler aux autres que je suis joueur
    if ( checkRoleEmpty == null ) {
      // Si je suis joueur, je m'enregistre dans le state et j'envoie mon index aux autre participants
      dispatch(sendIndexJoueurWs(indexSelfResults));
    }
  }, [checkRoleEmpty]);
    

      //Ce useeffect permet de trouver tout les div dans lesquel placer les noms
  useEffect(() => {

    const divPseudoSelfResults = document.querySelector('.div__playerSelf');
    const divPseudo1Results = document.querySelector('.joueur1Result');
    const divPseudo2Results = document.querySelector('.joueur2Result');
    const divPseudo3Results = document.querySelector('.joueur3Result');
    const divPseudo4Results = document.querySelector('.joueur4Result');
    const divPseudo5Results = document.querySelector('.joueur5Result');
    const divPseudo6Results = document.querySelector('.joueur6Result');
    const divPseudo7Results = document.querySelector('.joueur7Result');
    const divPseudo8Results = document.querySelector('.joueur8Result');
    const divPseudo9Results = document.querySelector('.joueur9Result');
    const divPseudo10Results = document.querySelector('.joueur10Result');
    const divPseudo11Results = document.querySelector('.joueur11Result');

        // SI je suis la taupe, ou l'un des informateur je passe la div self en none
        if (indexSelfResults == indexTaupeResults || indexSelfResults == indexInfo1Results || indexSelfResults == indexInfo2Results ) {
          divPseudoSelfResults.style.display = "none";
        }

        //Si je suis la taupe on applique un css differant
        if (nameSelfResults !== "" && indexSelfResults == indexTaupeResults ) {
          // On passe le background de la case en bleu
          const divTaupeResult = document.querySelector('.div__les__taupes--contain--1');
          divTaupeResult.classList.add('divTaupeSelf');
          // On passe le backgournd de l'icone en blanc
          const divIconeTaupeResult = document.querySelector('.icone_taupe');
          divIconeTaupeResult.classList.add('icone_taupeSlef');
          // On passe le name en blanc
          const divPseudoTaupeSelf = document.querySelector('.span__pseudo');
          divPseudoTaupeSelf.classList.add('nameTaupeSelf');
        }

       //Si je suis l'informateur 1 on applique un css differant
      if (nameSelfResults !== "" && indexSelfResults == indexInfo1Results ) {
      // On passe le background de la case en bleu
     const divTaupeResult = document.querySelector('.div__Informateurs1');
    divTaupeResult.classList.add('divTaupeSelf');
    // On passe le backgournd de l'icone en blanc
    const divIconeTaupeResult = document.querySelector('.icone__informateur1');
     divIconeTaupeResult.classList.add('icone_taupeSlef');
     // On passe le name en blanc
     const divPseudoTaupeSelf = document.querySelector('.pseudoInformateur1');
     divPseudoTaupeSelf.classList.add('nameTaupeSelf');
              }

                          //Si je suis l'informateur 2 on applique un css differant
               if (nameSelfResults !== "" && indexSelfResults == indexInfo2Results ) {
                // On passe le background de la case en bleu
                const divTaupeResult = document.querySelector('.div__Informateurs2');
                divTaupeResult.classList.add('divTaupeSelf');
                // On passe le backgournd de l'icone en blanc
                const divIconeTaupeResult = document.querySelector('.icone__informateur2');
                divIconeTaupeResult.classList.add('icone_taupeSlef');
                // On passe le name en blanc
                const divPseudoTaupeSelf = document.querySelector('.pseudoInformateur2');
                divPseudoTaupeSelf.classList.add('nameTaupeSelf');
                // On passe en blanc le background des img
              }

        // Si le nb de joueur est de 5, on passe la case 1 en flex si 6 case 2 en felx ...
        if (nbOfPlayer == 5) {
          console.log('oncache persque toutes les cases');
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
          if (indexSelfResults == indexTaupeResults || indexSelfResults == indexInfo1Results || indexSelfResults == indexInfo2Results ) {
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
          if (indexSelfResults == indexTaupeResults || indexSelfResults == indexInfo1Results || indexSelfResults == indexInfo2Results ) {
            divPseudo3Results.style.display = "flex";
          }
        }
        else if (nbOfPlayer == 7) {
          divPseudo4Results.style.display = "none";
          divPseudo5Results.style.display = "none";
          divPseudo6Results.style.display = "none";
          divPseudo7Results.style.display = "none";
          divPseudo8Results.style.display = "none";
          divPseudo9Results.style.display = "none";
          divPseudo10Results.style.display = "none";
          divPseudo11Results.style.display = "none";
          if (indexSelfResults == indexTaupeResults || indexSelfResults == indexInfo1Results || indexSelfResults == indexInfo2Results ) {
            divPseudo4Results.style.display = "flex";
          }
        }
        else if (nbOfPlayer == 8) {
          divPseudo5Results.style.display = "none";
          divPseudo6Results.style.display = "none";
          divPseudo7Results.style.display = "none";
          divPseudo8Results.style.display = "none";
          divPseudo9Results.style.display = "none";
          divPseudo10Results.style.display = "none";
          divPseudo11Results.style.display = "none";
          if (indexSelfResults == indexTaupeResults || indexSelfResults == indexInfo1Results || indexSelfResults == indexInfo2Results ) {
            divPseudo5Results.style.display = "flex";
          }
        }
        else if (nbOfPlayer == 9) {
          divPseudo6Results.style.display = "none";
          divPseudo7Results.style.display = "none";
          divPseudo8Results.style.display = "none";
          divPseudo9Results.style.display = "none";
          divPseudo10Results.style.display = "none";
          divPseudo11Results.style.display = "none";
          if (indexSelfResults == indexTaupeResults || indexSelfResults == indexInfo1Results || indexSelfResults == indexInfo2Results ) {
            divPseudo6Results.style.display = "flex";
          }
        }
        else if (nbOfPlayer == 10) {
          divPseudo7Results.style.display = "none";
          divPseudo8Results.style.display = "none";
          divPseudo9Results.style.display = "none";
          divPseudo10Results.style.display = "none";
          divPseudo11Results.style.display = "none";
          if (indexSelfResults == indexTaupeResults || indexSelfResults == indexInfo1Results || indexSelfResults == indexInfo2Results ) {
            divPseudo7Results.style.display = "flex";
          }
        }
        else if (nbOfPlayer == 11) {
          divPseudo8Results.style.display = "none";
          divPseudo9Results.style.display = "none";
          divPseudo10Results.style.display = "none";
          divPseudo11Results.style.display = "none";
          if (indexSelfResults == indexTaupeResults || indexSelfResults == indexInfo1Results || indexSelfResults == indexInfo2Results ) {
            divPseudo8Results.style.display = "flex";
          }
        }
        else if (nbOfPlayer == 12) {
          divPseudo9Results.style.display = "none";
          divPseudo10Results.style.display = "none";
          divPseudo11Results.style.display = "none";
          if (indexSelfResults == indexTaupeResults || indexSelfResults == indexInfo1Results || indexSelfResults == indexInfo2Results ) {
            divPseudo9Results.style.display = "flex";
          }
        }
        else if (nbOfPlayer == 13) {
          divPseudo10Results.style.display = "none";
          divPseudo11Results.style.display = "none";
          if (indexSelfResults == indexTaupeResults || indexSelfResults == indexInfo1Results || indexSelfResults == indexInfo2Results ) {
            divPseudo10Results.style.display = "flex";
          }
        }
        else if (nbOfPlayer == 14) {
          divPseudo11Results.style.display = "none";
          if (indexSelfResults == indexTaupeResults || indexSelfResults == indexInfo1Results || indexSelfResults == indexInfo2Results ) {
            divPseudo11Results.style.display = "flex";
          }
        }

// Si le joueur self n'est pas la taupe / l'informateur 1 ou 2 alors il est joueur et donc on l'enleve du tableau des joueurs
 /*if (indexSelfResults !== indexTaupeResults || indexSelfResults !== indexInfo1Results || indexSelfResults !== indexInfo2Results ){
  avatarUserResults.splice(indexSelfResults, 1);
  console.log('je suis le joueur Self', avatarUserResults);
  //return avatarUserResults;
 }*/

  //On envoie nos choix de cartes et notre role aux WS

  // --------------------- la taupe ---------------------------------------------------------



  //gestion de la carte qui s'affiche
  if (symboleTaupeResults == "Pierre") {
    document.querySelector(".carte__pierreTaupe").classList.add('carte__symbole-Selectionné'); 
    console.log('la taupe => pierre');
  } else if (symboleTaupeResults == "Feuille") {
    document.querySelector(".carte__feuilleTaupe").classList.add('carte__symbole-Selectionné'); 
    console.log('la taupe => feuille');
  } else if (symboleTaupeResults == "Ciseaux") {
    document.querySelector(".carte__ciseauTaupe").classList.add('carte__symbole-Selectionné'); 
    console.log('la taupe => Ciseaux');
  }

    // --------------------- l'info 1' ---------------------------------------------------------



  //gestion de la carte qui s'affiche
  if (symboleInfo1Results == "Pierre") {
    document.querySelector(".info1Pierre").classList.add('carte__symbole-Selectionné__informateur'); 
  } else if (symboleInfo1Results == "Feuille") {
    document.querySelector(".info1Feuille").classList.add('carte__symbole-Selectionné__informateur'); 
  } else if (symboleInfo1Results == "Ciseaux") {
    document.querySelector(".info1Ciseaux").classList.add('carte__symbole-Selectionné__informateur'); 
  }

    // --------------------- l'info 2' ---------------------------------------------------------


  //gestion de la carte qui s'affiche
  if (symboleInfo2Results == "Pierre") {
    document.querySelector(".info2Pierre").classList.add('carte__symbole-Selectionné__informateur'); 
  } else if (symboleInfo2Results == "Feuille") {
    document.querySelector(".info2Feuille").classList.add('carte__symbole-Selectionné__informateur'); 
  } else if (symboleInfo2Results == "Ciseaux") {
    document.querySelector(".info2Ciseaux").classList.add('carte__symbole-Selectionné__informateur'); 
  }



    }, []);



  // Une boucle for pour la taupe 
  // une boucle for pour l'informateur 1
  // une boucle for pour l'informateur 2 
  // si je suis la taupe, ou un des informateurs, on passe la case joueurSelf en none
  // si pseudo joueur 6 = null => display none
  // Les scores
  // le ryhtme d'apparition

  
  return(
    <div>
      {/*     <!--pouvoir faire remonter les bugs ou les points a ameliorer !! Attention au insersion de sql-->
    <!--IL faut placer les joueurs et les informateurs dans une boucle forEatch-->
        <!--ici on affiche la ou les deux taupes--> */}

        <div className="div__les__taupes--contain--1">
            <div className="div__role--main">
                <img className="icone_taupe" src={ taupe } alt="icone Taupe" />
            </div>
            <div className="div__PseudoImg--Taupe">
                <img className="img__Avatar" src={ avatarUserResults[indexTaupeResults] } alt="Img Avatar" />
                <span className="span__pseudo">{ nameUserResults[indexTaupeResults] }</span>
            </div>
            <div className="div__symboles--taupe">
                <img className="carte__pierreTaupe " src={ Pierre } alt="Icone Pierre" />
                <img className="carte__feuilleTaupe " src={ Feuille } alt="Icone Feuille" />
                <img className="carte__ciseauTaupe " src={ Ciseaux } alt="Icone ciseaux" />
            </div>
        </div>
        <div className="compteurTaupe">
            <div className="scoreTaupe">10</div>
        </div>
        { /*  <!--ici on affiche les deux informateurs--> */}
  
       
    <div className="contener__informateur">
        {/**Informateur 1 */}
        <div className="div__Informateurs div__Informateurs1">
            <div className="contener__icone__informateur">
                <img className="icone__informateur icone__informateur1" src={ Informateur } alt="icone Informateur" />
            </div>
            <div className="contenerPersoInformateur">
                <img className="img__informateur--1 imgAvatarResultat" src={ avatarUserResults[indexInfo1Results] } alt="img__avatar" />  
                <span className="pseudoInformateur pseudoInformateur1">{nameUserResults[indexInfo2Results]}</span> 
            </div>
            <div className="contener__card">
                <img className="carte__pierre info1Pierre" src={ Pierre } alt="icone Pierre" />
                <img className="carte__feuille info1Feuille" src={ Feuille } alt="icone Feuille" />
                <img className="carte__ciseaux info1Ciseaux" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div className="compteurInformateurs">
            <div className="scoreInformateur">10</div>
            </div>
        </div>
        
        {/**Informateur 2 */}
        <div className="div__Informateurs div__Informateurs2">
            <div className="contener__icone__informateur">
                <img className="icone__informateur icone__informateur2" src={ Informateur } alt="icone informateur" />
            </div>
            <div className="contenerPersoInformateur">
                <img className="img__informateur--2 imgAvatarResultat" src={ avatarUserResults[indexInfo2Results] } alt="img__avatar" />
                <span className="pseudoInformateur pseudoInformateur2">{nameUserResults[indexInfo1Results]}</span>
            </div>
            <div className="contener__card">
                <img className="carte__pierre info2Pierre" src={ Pierre } alt="icone Pierre" />
                <img className="carte__feuille info2Feuille" src={ Feuille } alt="icone Feuille" />
                <img className="carte__ciseaux info2Ciseaux" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div className="compteurInformateurs">
            <div className="scoreInformateur">10</div>
            </div>
        </div>
        
        {/**Player0 // JoueurSelf */}
    </div>
    <div className="contener__player">
        { /*  <!--ici on affiche tous les joueurs--> */}
        <div className="div__playerSelf">
            <div className="contener__icone__player">
                <img className="icone__playerSelf" src={ player } alt="img player" />
            </div>
            <div className="contenerPseudoPlayer">
                <img className="imgPlayer0 imgAvatarResultat" src={ avatarSelfResults } alt="img__avatar" />
                <span className="pseudoPlayerSelf" >{nameSelfResults}</span>
            </div>
            <div className="contener__card">
                <img className="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img className="carte__feuille carte__symbole-Selectionné__Player" src={ Feuille } alt="icone Feuille" />
                <img className="carte__ciseaux carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div className="compteurPlayer">
            <div className="scorePlayer">10</div>
            </div>
        </div>

        {/**Player1 */}
        <div className="div__player joueur1Result">
            <div className="contener__icone__player">
                <img className="icone__player" src={ player } alt="img player" />
            </div>
            <div className="contenerPseudoPlayer">
                <img className="imgPlayer1 imgAvatarResultat" src={ avatarUserResults[IndexJoueur1Result] } alt="img__avatar" />
                <span className="pseudoPlayer pseudoPlayer1Results" >{nameUserResults[IndexJoueur1Result]}</span> 
            </div>
            <div className="contener__card">
                <img className="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img className="carte__feuille carte__symbole-Selectionné__Player" src={ Feuille } alt="icone Feuille" />
                <img className="carte__ciseaux carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div className="compteurPlayer">
            <div className="scorePlayer">10</div>
            </div>
        </div>

          {/**Player2 */}
        <div className="div__player joueur2Result">
            <div className="contener__icone__player">
                <img className="icone__player" src={ player } alt="img player" />
            </div>
            <div className="contenerPseudoPlayer">
                <img className="imgPlayer2 imgAvatarResultat" src={ avatarUserResults[IndexJoueur2Result] } alt="img__avatar" />
                <span className="pseudoPlayer pseudoPlayer2Results" >{nameUserResults[IndexJoueur2Result]}</span>
            </div>
            <div className="contener__card">
                <img className="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img className="carte__feuille carte__symbole-Selectionné__Player" src={ Feuille } alt="icone Feuille" />
                <img className="carte__ciseaux carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div className="compteurPlayer">
            <div className="scorePlayer">10</div>
            </div>
        </div>

        {/**Player3 */}
        <div className="div__player joueur3Result">
            <div className="contener__icone__player">
                <img className="icone__player" src={ player } alt="img player" />
            </div>
            <div className="contenerPseudoPlayer">
                <img className="imgPlayer3 imgAvatarResultat" src={avatarUserResults[IndexJoueur3Result] } alt="img__avatar" />
                <span className="pseudoPlayer pseudoPlayer3Results" >{nameUserResults[IndexJoueur3Result]}</span>
            </div>
            <div className="contener__card">
                <img className="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img className="carte__feuille carte__symbole-Selectionné__Player" src={ Feuille } alt="icone Feuille" />
                <img className="carte__ciseaux carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div className="compteurPlayer">
            <div className="scorePlayer">10</div>
            </div>
        </div>

        {/**Player4 */}
        <div className="div__player joueur4Result">
            <div className="contener__icone__player">
                <img className="icone__player" src={ player } alt="img player" />
            </div>
            <div className="contenerPseudoPlayer">
                <img className="imgPlayer4 imgAvatarResultat" src={ avatarUserResults[IndexJoueur4Result] } alt="img__avatar" />
                <span className="pseudoPlayer pseudoPlayer4Results" >{nameUserResults[IndexJoueur4Result]}</span>
            </div>
            <div className="contener__card">
                <img className="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img className="carte__feuille carte__symbole-Selectionné__Player" src={ Feuille } alt="icone Feuille" />
                <img className="carte__ciseaux carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div className="compteurPlayer">
            <div className="scorePlayer">10</div>
            </div>
        </div>

        {/**Player5 */}
        <div className="div__player joueur5Result">
            <div className="contener__icone__player">
                <img className="icone__player" src={ player } alt="img player" />
            </div>
            <div className="contenerPseudoPlayer">
                <img className="imgPlayer5 imgAvatarResultat" src={ avatarUserResults[IndexJoueur5Result] } alt="img__avatar" />
                <span className="pseudoPlayer pseudoPlayer5Results" >{nameUserResults[IndexJoueur5Result]}</span>
            </div>
            <div className="contener__card">
                <img className="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img className="carte__feuille carte__symbole-Selectionné__Player" src={ Feuille } alt="icone Feuille" />
                <img className="carte__ciseaux carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div className="compteurPlayer">
            <div className="scorePlayer">10</div>
            </div>
        </div>

        {/**Player6 */}
        <div className="div__player joueur6Result">
            <div className="contener__icone__player">
                <img className="icone__player" src={ player } alt="img player" />
            </div>
            <div className="contenerPseudoPlayer">
                <img className="imgPlayer6 imgAvatarResultat" src={ avatarUserResults[IndexJoueur6Result] } alt="img__avatar" />
                <span className="pseudoPlayer pseudoPlayer6Results" >{nameUserResults[IndexJoueur6Result]}</span>
            </div>
            <div className="contener__card">
                <img className="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img className="carte__feuille carte__symbole-Selectionné__Player" src={ Feuille } alt="icone Feuille" />
                <img className="carte__ciseaux carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div className="compteurPlayer">
            <div className="scorePlayer">10</div>
            </div>
        </div>

        {/**Player7 */}
        <div className="div__player joueur7Result">
            <div className="contener__icone__player">
                <img className="icone__player" src={ player } alt="img player" />
            </div>
            <div className="contenerPseudoPlayer">
                <img className="imgPlayer7 imgAvatarResultat" src={ avatarUserResults[IndexJoueur7Result] } alt="img__avatar" />
                <span className="pseudoPlayer pseudoPlayer7Results" >{nameUserResults[IndexJoueur7Result]}</span>
            </div>
            <div className="contener__card">
                <img className="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img className="carte__feuille carte__symbole-Selectionné__Player" src={ Feuille } alt="icone Feuille" />
                <img className="carte__ciseaux carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div className="compteurPlayer">
            <div className="scorePlayer">10</div>
            </div>
        </div>

        {/**Player8 */}
        <div className="div__player joueur8Result">
            <div className="contener__icone__player">
                <img className="icone__player" src={ player } alt="img player" />
            </div>
            <div className="contenerPseudoPlayer">
                <img className="imgPlayer8 imgAvatarResultat" src={ avatarUserResults[IndexJoueur8Result] } alt="img__avatar" />
                <span className="pseudoPlayer pseudoPlayer8Results" >{nameUserResults[IndexJoueur8Result]}</span>
            </div>
            <div className="contener__card">
                <img className="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img className="carte__feuille carte__symbole-Selectionné__Player" src={ Feuille } alt="icone Feuille" />
                <img className="carte__ciseaux carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div className="compteurPlayer">
            <div className="scorePlayer">10</div>
            </div>
        </div>

        {/**Player9 */}
        <div className="div__player joueur9Result">
            <div className="contener__icone__player">
                <img className="icone__player" src={ player } alt="img player" />
            </div>
            <div className="contenerPseudoPlayer">
                <img className="imgPlayer8 imgAvatarResultat" src={ avatarUserResults[IndexJoueur9Result] } alt="img__avatar" />
                <span className="pseudoPlayer pseudoPlayer9Results" >{nameUserResults[IndexJoueur9Result]}</span>
            </div>
            <div className="contener__card">
                <img className="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img className="carte__feuille carte__symbole-Selectionné__Player" src={ Feuille } alt="icone Feuille" />
                <img className="carte__ciseaux carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div className="compteurPlayer">
            <div className="scorePlayer">10</div>
            </div>
        </div>


        {/**Player10 */}
        <div className="div__player joueur10Result">
            <div className="contener__icone__player">
                <img className="icone__player" src={ player } alt="img player" />
            </div>
            <div className="contenerPseudoPlayer">
                <img className="imgPlayer8 imgAvatarResultat" src={ avatarUserResults[IndexJoueur10Result] } alt="img__avatar" />
                <span className="pseudoPlayer pseudoPlayer10Results" >{nameUserResults[IndexJoueur10Result]}</span>
            </div>
            <div className="contener__card">
                <img className="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img className="carte__feuille carte__symbole-Selectionné__Player" src={ Feuille } alt="icone Feuille" />
                <img className="carte__ciseaux carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div className="compteurPlayer">
            <div className="scorePlayer">10</div>
            </div>
        </div>

        {/**Player11 */}
        <div className="div__player joueur11Result">
            <div className="contener__icone__player">
                <img className="icone__player" src={ player } alt="img player" />
            </div>
            <div className="contenerPseudoPlayer">
                <img className="imgPlayer8 imgAvatarResultat" src={ avatarUserResults[IndexJoueur11Result] } alt="img__avatar" />
                <span className="pseudoPlayer pseudoPlayer11Results" >{nameUserResults[IndexJoueur11Result]}</span>
            </div>
            <div className="contener__card">
                <img className="carte__pierre carte__symbole__informateur" src={ Pierre } alt="icone Pierre" />
                <img className="carte__feuille carte__symbole-Selectionné__Player" src={ Feuille } alt="icone Feuille" />
                <img className="carte__ciseaux carte__symbole__informateur" src={ Ciseaux } alt="icone Ciseaux" />
            </div>
            <div className="compteurPlayer">
            <div className="scorePlayer">10</div>
            </div>
        </div>

        
        
        
    </div>
    <div className="NewGameContener" >
    <button className="button_style--active buttonNewPartie" >Nouvelle Partie</button>
    </div>
    </div>
  );
}

export default Results;
