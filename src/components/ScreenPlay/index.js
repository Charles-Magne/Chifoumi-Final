import "./style.scss";

// les img
import player from "../../assets/Pictures/Role/joueur Blue.png";
import Taupe from "../../assets/Pictures/Role/Taupel Blue.png";
import Informateur from "../../assets/Pictures/Role/informateur Blue.png";
import arrowDown from "../../assets/Icones/down-arrow.png";
import ile from "../../assets/Pictures/Carte pupute/Hawail_blue.png";
import Pierre from "../../assets/Pictures/Symbole/pierre_bleu.png";
import Feuille from "../../assets/Pictures/Symbole/feuille_bleu.png";
import Ciseaux from "../../assets/Pictures/Symbole/ciseaux_bleu.png";

//Les dependances
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Les actions
import { sendRandomForRole } from "../../action/Role";
import { setRedirectionResults } from "../../action/Salon";

import {
  chooseCardPierre,
  chooseCardFeuille,
  chooseCardCiseaux,
} from "../../action/Avatar";
import { useNavigate } from "react-router";

function ScreenPlay() {
  // Il faut definir le role de l'utilisateur, puis sa carte pupute, puis si taupe sa carte à defendre ou si informateur la carte perdante
  /*Pour definir les roles, on defini un randown math a tous les joueurs et celui qui a la plus elevé est la taupe, les deux moins grands sont informateurs */
  /*pour definir la carte pupute un random math sert a attribuer la carte 
faire un loading si jamais les calcules prennent du temps.
*/
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Les data du state

  const salonState = useSelector((state) => state.salon.lobby); // On import le code du salon
  const nameMJPlay = useSelector((state) => state.avatar.hote.valuePseudo); // le nom de l'hote toujours en haut dans tous les reducers
  const imgMJPlay = useSelector((state) => state.avatar.hote.avatarImgHote); // l'img de l'hote toujours en haut
  const nameMJTrue = useSelector((state) => state.avatar.hote.hotePseudo); // le nom de l'hote toujours en haut uniquement pour l'hote
  const nameSelfPlay = useSelector(
    (state) => state.avatar.joueurSelf.valuePseudo
  ); // si le nom du participant et le nom de l'hote son les memes alors on fait un
  const imgSelfPlay = useSelector((state) => state.avatar.joueurSelf.avatarImg); //img joueur Self
  const name1Play = useSelector((state) => state.avatar.joueurs.ValuePseudo1); // pseudo joueur 1
  const img1Play = useSelector((state) => state.avatar.joueurs.avatarImg1); // img joueur 1
  const name2Play = useSelector((state) => state.avatar.joueurs.ValuePseudo2); // pseudo joueur 2
  const img2Play = useSelector((state) => state.avatar.joueurs.avatarImg2); // img joueur 2
  const name3Play = useSelector((state) => state.avatar.joueurs.ValuePseudo3); // pseudo joueur 3
  const img3Play = useSelector((state) => state.avatar.joueurs.avatarImg3); // img joueur 3
  const name4Play = useSelector((state) => state.avatar.joueurs.ValuePseudo4); // pseudo joueur 4
  const img4Play = useSelector((state) => state.avatar.joueurs.avatarImg4); // img joueur 4
  const name5Play = useSelector((state) => state.avatar.joueurs.ValuePseudo5); // pseudo joueur 5
  const img5Play = useSelector((state) => state.avatar.joueurs.avatarImg5); // img joueur 5
  const name6Play = useSelector((state) => state.avatar.joueurs.ValuePseudo6); // pseudo joueur 6
  const img6Play = useSelector((state) => state.avatar.joueurs.avatarImg6); // img joueur 6
  const name7Play = useSelector((state) => state.avatar.joueurs.ValuePseudo7); // pseudo joueur 7
  const img7Play = useSelector((state) => state.avatar.joueurs.avatarImg7); // img joueur 7
  const name8Play = useSelector((state) => state.avatar.joueurs.ValuePseudo8); // pseudo joueur 8
  const img8Play = useSelector((state) => state.avatar.joueurs.avatarImg8); // img joueur 8
  const name9Play = useSelector((state) => state.avatar.joueurs.ValuePseudo9); // pseudo joueur 9
  const img9Play = useSelector((state) => state.avatar.joueurs.avatarImg9); // img joueur 9
  const name10Play = useSelector((state) => state.avatar.joueurs.ValuePseudo10); // pseudo joueur 10
  const img10Play = useSelector((state) => state.avatar.joueurs.avatarImg10); // img joueur 10
  const name11Play = useSelector((state) => state.avatar.joueurs.ValuePseudo11); // pseudo joueur 11
  const img11Play = useSelector((state) => state.avatar.joueurs.avatarImg11); // img joueur 11
  const name12Play = useSelector((state) => state.avatar.joueurs.ValuePseudo12); // pseudo joueur 12
  const img12Play = useSelector((state) => state.avatar.joueurs.avatarImg12); // img joueur 12
  const name13Play = useSelector((state) => state.avatar.joueurs.ValuePseudo13); // pseudo joueur 13
  const img13Play = useSelector((state) => state.avatar.joueurs.avatarImg13); // img joueur 13
  const name14Play = useSelector((state) => state.avatar.joueurs.ValuePseudo14); // pseudo joueur 14
  const img14Play = useSelector((state) => state.avatar.joueurs.avatarImg14); // img joueur 14

  const indexTaupe = useSelector((state) => state.role.taupe); // index du joueur qui sera la taupe
  const symboleTaupe = useSelector((state) => state.role.symboleTaupe); // symbole que doit defendre la taupe

  const indexInfo1 = useSelector((state) => state.role.info1); // index du joueur qui sera l'informateur 1
  const symboleInfor1 = useSelector((state) => state.role.SymboleInfo1); // symbole de l'informateur 1

  const indexInfo2 = useSelector((state) => state.role.info2); // index du joueur qui sera l'informateur 2
  const symboleInfo2 = useSelector((state) => state.role.SymboleInfo2); // symbole de l'informateur 2

  const indexSelf = useSelector((state) => state.avatar.joueurSelf.inumber); // index du joueur self
  const indexHotePlay = useSelector((state) => state.avatar.idJoueur); // index de l'hote
  const numberOfPlayer = useSelector((state) => state.avatar.joueurs.nbPlayer); // le nb de joueur present dans la partie
  const roleOfPlayer = useSelector((state) => state.avatar.joueurSelf.roleSelf); // le role du joueurSelf
  const timeTotal = useSelector((state) => state.salon.timerValue); // la durée total du timer qui ne change pas
  /**
   * number qui se decremente depuis (inité depuis le state)
   */
  let timer = useSelector((state) => state.salon.timer); // le timer qui diminue chaque seconde
  const gameReady = useSelector((state) => state.salon.gameReady); // On s'en sert pour faire des redirections vers l'ecran des resultats

  // -----------------------------Gestion de l'affichage des cases joueurs -----------------------------

  useEffect(() => {
    // On creer un random math qui gere le role
    const randomRole = Math.random();

    // sert a savoir si c'est l'hote ou non
    indexSelf !== null
      ? dispatch(sendRandomForRole(randomRole, indexSelf, numberOfPlayer))
      : dispatch(sendRandomForRole(randomRole, indexHotePlay, numberOfPlayer));
    // Il faut definir le role de l'utilisateur, puis sa carte pupute, puis si taupe sa carte à defendre ou si informateur la carte perdante
    /*Pour definir les roles, on defini un randown math a tous les joueurs et celui qui a la plus elevé est la taupe, les deux moins grands sont informateurs */
    /*pour definir la carte pupute un random math sert a attribuer la carte 
faire un loading si jamais les calcules prennent du temps.
*/

    const divJoueurHotePlay = document.querySelector(".joueurHotePlaying");
    const divJoueurSelfPlay = document.querySelector(".joueurSelfPlaying");
    const divJoueur1Play = document.querySelector(".joueur1Playing");
    const divJoueur2Play = document.querySelector(".joueur2Playing");
    const divJoueur3Play = document.querySelector(".joueur3Playing");
    const divJoueur4Play = document.querySelector(".joueur4Playing");
    const divJoueur5Play = document.querySelector(".joueur5Playing");
    const divJoueur6Play = document.querySelector(".joueur6Playing");
    const divJoueur7Play = document.querySelector(".joueur7Playing");
    const divJoueur8Play = document.querySelector(".joueur8Playing");
    const divJoueur9Play = document.querySelector(".joueur9Playing");
    const divJoueur10Play = document.querySelector(".joueur10Playing");
    const divJoueur11Play = document.querySelector(".joueur11Playing");
    const divJoueur12Play = document.querySelector(".joueur12Playing");
    const divJoueur13Play = document.querySelector(".joueur13Playing");
    const divJoueur14Play = document.querySelector(".joueur14Playing");

    // Ici on place les divs contenant les infos des joueur dans un tableau pour faire une boucle forEach
    const divJoueursPlay = [
      divJoueur1Play,
      divJoueur2Play,
      divJoueur3Play,
      divJoueur4Play,
      divJoueur5Play,
      divJoueur6Play,
      divJoueur7Play,
      divJoueur8Play,
      divJoueur9Play,
      divJoueur10Play,
      divJoueur11Play,
      divJoueur12Play,
      divJoueur13Play,
      divJoueur14Play,
    ];

    // Ici on place les img du state dans un tableau pour faire une boucle forEach
    const imgAllPlayer = [
      img1Play,
      img2Play,
      img3Play,
      img4Play,
      img5Play,
      img6Play,
      img7Play,
      img8Play,
      img9Play,
      img10Play,
      img11Play,
      img12Play,
      img13Play,
      img14Play,
    ];

    // Si l'image du joueur est presente dans le state alors on affiche la div
    if (imgSelfPlay == null) {
      divJoueurSelfPlay.style.display = "none";
      console.log("la condition 1 => ok");
    }

    // Ici on check les img dans le state => si le state est rempli on passe le display en flex
    for (let i = 0; i < imgAllPlayer.length; i++) {
      if (imgAllPlayer[i] !== null) {
        divJoueursPlay[i].style.display = "flex";
      }
    }

    // Si l'indexSelf egale a x on passe en none divJoueurXPlay car notre pseudo est deja dans la case selfjoueur
    if (indexSelf == 1) {
      divJoueur1Play.style.display = "none";
    } else if (indexSelf == 2) {
      divJoueur2Play.style.display = "none";
    } else if (indexSelf == 3) {
      divJoueur3Play.style.display = "none";
    } else if (indexSelf == 4) {
      divJoueur4Play.style.display = "none";
    } else if (indexSelf == 5) {
      divJoueur5Play.style.display = "none";
    } else if (indexSelf == 6) {
      divJoueur6Play.style.display = "none";
    } else if (indexSelf == 7) {
      divJoueur7Play.style.display = "none";
    } else if (indexSelf == 8) {
      divJoueur8Play.style.display = "none";
    } else if (indexSelf == 9) {
      divJoueur9Play.style.display = "none";
    } else if (indexSelf == 10) {
      divJoueur10Play.style.display = "none";
    } else if (indexSelf == 11) {
      divJoueur11Play.style.display = "none";
    } else if (indexSelf == 12) {
      divJoueur12Play.style.display = "none";
    } else if (indexSelf == 13) {
      divJoueur13Play.style.display = "none";
    } else if (indexSelf == 14) {
      divJoueur14Play.style.display = "none";
    }

    // -------------------------------------On verifie si on est l'hote -------------------------------
    nameMJPlay !== ""
      ? (divJoueurHotePlay.classList.remove("joueur_local"),
        divJoueurHotePlay.classList.add("HoteSelf"))
      : "";
    // Si on est l'hote on vire la case joueur Self
    nameMJPlay !== "" ? (divJoueurSelfPlay.style.display = "none") : "";

    if (indexSelf == indexTaupe) {
      console.log("on est la taupe ");
    }
    if (indexSelf == indexInfo1) {
      console.log("on est informateur 1 ");
    }
    if (indexSelf == indexInfo2) {
      console.log("on est informateur 2 ");
    }

    // sert a vider le state gameReady pour empecher la redirection automatique sur la page des resultats
    dispatch(setRedirectionResults());

    // v La fin du useeffect
  }, []);

  let imgTaupeConseil1 = { Pierre };
  let imgTaupeConseil2 = { Pierre };
  let roleImgMain = player;

  //------------------------------------- Le role - attribution de la taupe ------------------------------

  // Ici on va determiner si nous somme la taupe
  if (indexTaupe !== null && indexSelf == indexTaupe) {
    document.querySelector(".Role__titre").textContent = "Arnaqueur";
    document.querySelector(".Conseil-role_p").textContent =
      "Votre but est de faire perdre les joueurs. Dissuadez les joueurs de jouer";
    roleImgMain = Taupe;
    document.querySelector(".consignesCompletesHide").textContent =
      "Pour faire perdre les joueurs, faites vous passez pour un informateur et dissuadez les joueurs de jouer le symbole qui battera le votre. Si les joueurs jouent la meme carte que vous, ils perdent.";

    // Votre but est de faire perdre les joueurs. Faites vous passez pour un informateur et conseillez aux joueurs de jouer un symbole perdant contre vous.

    const IconeTaupe1 = document.querySelector(".iconeConseilTaupe");
    const IconeTaupe2 = document.querySelector(".iconeConseilTaupe2");

    if (symboleTaupe == "Pierre") {
      document
        .querySelector(".div__cartePierre")
        .classList.add("button_style--active");
      // on veut afficher la pierre ou les ciseaux

      IconeTaupe1.style.display = "flex";
      imgTaupeConseil1 = Feuille;
      IconeTaupe2.style.display = "none";
      imgTaupeConseil2 = Ciseaux;
    } else if (symboleTaupe == "Feuille") {
      document
        .querySelector(".div__carteFeuille")
        .classList.add("button_style--active");
      // on veut afficher la feuille ou la pierre
      IconeTaupe1.style.display = "flex";
      imgTaupeConseil1 = Ciseaux;
      IconeTaupe2.style.display = "none";
      imgTaupeConseil2 = Feuille;
    } else if (symboleTaupe == "Ciseaux") {
      document
        .querySelector(".div__carteCiseaux")
        .classList.add("button_style--active");
      // on veut afficher la feuille ou les ciseaux
      IconeTaupe1.style.display = "flex";
      imgTaupeConseil1 = Pierre;
      IconeTaupe2.style.display = "none";
      imgTaupeConseil2 = Ciseaux;
    }
  }

  //------------------------------------- Le role - attribution de l'informateur 1 ------------------------------
  if (indexInfo1 !== null && indexSelf == indexInfo1) {
    document.querySelector(".Role__titre").textContent = "Informateur";
    document.querySelector(".Conseil-role_p").textContent =
      "Vous devez faire gagner les joueurs";
    roleImgMain = Informateur;
    document.querySelector(".consignesCompletesHide").textContent =
      "La carte en rouge est perdante contre l'arnaqueur. Dissuadez les joueurs de la jouer";

    if (symboleInfor1 == "Pierre") {
      document.querySelector(".div__cartePierre").classList.add("cardInfo");
    } else if (symboleInfor1 == "Feuille") {
      document.querySelector(".div__carteFeuille").classList.add("cardInfo");
    } else if (symboleInfor1 == "Ciseaux") {
      document.querySelector(".div__carteCiseaux").classList.add("cardInfo");
    }
  }

  //------------------------------------- Le role - attribution de l'informateur 2 ------------------------------
  if (indexInfo2 !== null && indexSelf == indexInfo2) {
    document.querySelector(".Role__titre").textContent = "Informateur";
    document.querySelector(".Conseil-role_p").textContent =
      "Vous devez faire gagner les joueurs";
    roleImgMain = Informateur;
    document.querySelector(".consignesCompletesHide").textContent =
      "La carte en rouge est perdante contre l'arnaqueur. Dissuadez les joueurs de la jouer";

    if (symboleInfo2 == "Pierre") {
      // Si la carte de informateur est pierre
      document.querySelector(".div__cartePierre").classList.add("cardInfo"); // On passe la carte pierre en rouge
    } else if (symboleInfo2 == "Feuille") {
      document.querySelector(".div__carteFeuille").classList.add("cardInfo");
    } else if (symboleInfo2 == "Ciseaux") {
      document.querySelector(".div__carteCiseaux").classList.add("cardInfo");
    }
  }

  // Lors du clic on verifie que le style de la div conseil // Si il est egale a none ou ouvre si c'est flex on ferme
  const showConseil = () => {
    // On cache
    if (
      document.querySelector(".consignesCompletesHide").style.display !== "none"
    ) {
      document.querySelector(".consignesCompletesHide").style.display = "none";
      document.querySelector(".icone__ouvrir--conseil").style.transform =
        "rotate(0deg)";
    }
    // On affiche
    else {
      document.querySelector(".consignesCompletesHide").style.display = "flex";
      document.querySelector(".icone__ouvrir--conseil").style.transform =
        "rotate(180deg)";
    }
  };

  // Le clic sur le bouton player
  const handlePlayer = (event) => {
    let classePlayer = event.currentTarget.classList;
    if (!classePlayer.contains("select")) {
      classePlayer.add("select");
    } else {
      classePlayer.remove("select");
    }
  };

  // Le clic sur le bouton Informateur
  const handleInformateur = (event) => {
    let classeInfo = event.currentTarget.classList;
    if (!classeInfo.contains("select")) {
      classeInfo.add("select");
    } else {
      classeInfo.remove("select");
    }
  };

  // Le clic sur le bouton Taupe
  const handleTaupe = (event) => {
    let classeTaupe = event.currentTarget.classList;
    if (!classeTaupe.contains("select")) {
      classeTaupe.add("select");
    } else {
      classeTaupe.remove("select");
    }
  };

  // -------------------------- clic sur les card pour les joueurs ---------------------------------------

  const ChoosePierre = () => {
    // on verifie qu'on est joueur
    if (
      indexTaupe !== indexSelf &&
      indexInfo1 !== indexSelf &&
      indexInfo2 !== indexSelf
    ) {
      document
        .querySelector(".div__cartePierre")
        .classList.add("button_style--active");
      document
        .querySelector(".div__carteFeuille")
        .classList.remove("button_style--active");
      document
        .querySelector(".div__carteCiseaux")
        .classList.remove("button_style--active");
      dispatch(chooseCardPierre());
    }
  };

  const ChooseFeuille = () => {
    // on verifie qu'on est joueur
    if (
      indexTaupe !== indexSelf &&
      indexInfo1 !== indexSelf &&
      indexInfo2 !== indexSelf
    ) {
      document
        .querySelector(".div__cartePierre")
        .classList.remove("button_style--active");
      document
        .querySelector(".div__carteFeuille")
        .classList.add("button_style--active");
      document
        .querySelector(".div__carteCiseaux")
        .classList.remove("button_style--active");
      dispatch(chooseCardFeuille());
    }
  };

  const ChooseCiseaux = () => {
    // on verifie qu'on est joueur
    if (
      indexTaupe !== indexSelf &&
      indexInfo1 !== indexSelf &&
      indexInfo2 !== indexSelf
    ) {
      document
        .querySelector(".div__cartePierre")
        .classList.remove("button_style--active");
      document
        .querySelector(".div__carteFeuille")
        .classList.remove("button_style--active");
      document
        .querySelector(".div__carteCiseaux")
        .classList.add("button_style--active");
      dispatch(chooseCardCiseaux());
    }
  };

  // ------------------------------- Le timer --------------------------------------

  //On attend 1 seconde avant de relancer la fonction
  //let decompte = setInterval(leDecompte, 1000);
  useEffect(() => {
    const interval = setInterval(() => {
      leDecompte();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  //Le code écrit dans cette fonction ne sera exécuté qu'au bout de 1 secondes
  function leDecompte() {
    // Ici on fait le calcule pour vider la barre de progression quel que soit le timer defini
    let unité = 100 / timeTotal;

    // le loadeur
    const loadingtimer = document.querySelector(".Chrono__Color");
    console.log("le compteur se delcanche", timer);
    if (timer >= 1 && document.location.pathname == `/Playing/${salonState}`) {
      //Ici on defini le pourcentage de loading
      let progressBar = timer * unité;
      console.log(
        "le pourcentage",
        progressBar,
        "le timer",
        timer,
        "unité",
        timeTotal
      );
      // ici on passe le pourcentage a la barre de timer
      let resultlaoding = (loadingtimer.style.width = progressBar + "%");

      if (
        timer < timeTotal / 2 &&
        document.location.pathname == `/Playing/${salonState}`
      ) {
        //On affiche le timer dans le HTML
        document.querySelector(".div__chrono").textContent = timer;

        let chronoCss = document.querySelector(".div__chrono");
        //On affiche le chrono

        if (
          timer < timeTotal / 3 &&
          document.location.pathname == `/Playing/${salonState}`
        ) {
          chronoCss.style.color = "#E3E309";

          if (
            timer < timeTotal / 4 &&
            document.location.pathname == `/Playing/${salonState}`
          ) {
            //on anime => le compteur doit s'agrandir et retrecire toutes les S
            chronoCss.style.fontSize = "200%";
          }
        }
      }
      return (timer = timer - 1);
    }
    //lorsque que le timer est fini, on devra changer de page
    else if (
      timer === 0 &&
      document.location.pathname == `/Playing/${salonState}`
    ) {
      console.log("le timer est fini");
      navigate(`/Resultat/${salonState}`);
      return;
    }
  }

  return (
    <div>
      <div className="div__section-principal--ecran--de--jeu">
        <div className="div__chronoetdialogue">
          <div className="div__chrono"></div>
          <div className="ringChrono">
            <div className="Chrono__Color"></div>
          </div>
          {/*<!--Css animation ring ?--> */}
          {/*<div className="div__dialogue">boite a blabla</div> a dev pour l'aprés MVP */}
        </div>
        <div className="div__centrale">
          <div className="Conseil_role">
            <img src={roleImgMain} alt="icone Role" className="icone__titre" />
            {/*<!--Icone role--> */}
            <h1 className="Role__titre">Joueur</h1>
            <div className="div__consigne--openregle">
              <span className="Conseil-role_p">
                Vous devez battre l'arnaqueur à l'aide du bon symbole
              </span>
              <img
                src={imgTaupeConseil1}
                className="iconeConseilTaupe"
                alt="iconeHelpTaupe"
              />
              <img
                src={imgTaupeConseil2}
                className="iconeConseilTaupe2"
                alt="iconeHelpTaupe"
              />
              <img
                onClick={showConseil}
                className="icone__ouvrir--conseil"
                src={arrowDown}
                alt="iconeArrow"
              />
            </div>
            <p className="consignesCompletesHide">
              Prenez garde à l'arnaqueur. Il va surement tenter de se faire
              passer pour un informateur. N'oubliez pas que moins de joueurs
              gagnent et plus les gains sont importants.
            </p>
            {/**La carte Action */}
          </div>
          <div className="carte_pupute">
            <img
              className="symoble__mini__haut__gauche"
              src={ile}
              alt="iconeCarteAction"
            />
            <img className="symbole__action" src={ile} alt="iconeCarteAction" />
            {/*<!--Img centrale--> */}
            <p className="titre__carte__action">Nouvelle Fonctionalité</p>
            {/*<!--titre de la carte--> */}
            <span className="description__carte">Comming Soon</span>
            {/* <!--Commentaire de la carte--> */}
            <img
              className="symoble__mini__bas__droite"
              src={ile}
              alt="iconeCarteAction"
            />
          </div>
          <div className="div__choixdelacarte">
            {/* Carte Pierre */}
            <button
              onClick={ChoosePierre}
              className="div__cartePierre button__carte"
            >
              <img
                className="image_symbole--up"
                src={Pierre}
                alt="SymbolePierre"
              />
              <img className="image_symbole" src={Pierre} alt="SymbolePierre" />
              <div className="texteSymbole">Pierre</div>
              <div className="contenerImgDown">
                <img
                  className="image_symbole--Down"
                  src={Pierre}
                  alt="SymboleCiseau"
                />
              </div>
            </button>

            {/* Carte Feuille */}
            <button
              onClick={ChooseFeuille}
              className="div__carteFeuille button__carte"
            >
              <img
                className="image_symbole--up"
                src={Feuille}
                alt="SymboleCiseau"
              />
              <img
                className="image_symbole"
                src={Feuille}
                alt="SymboleFeuille"
              />
              <div className="texteSymbole">Feuille</div>
              <div className="contenerImgDown">
                <img
                  className="image_symbole--Down"
                  src={Feuille}
                  alt="SymboleFeuille"
                />
              </div>
            </button>

            {/* Carte Ciseaux */}
            <button
              onClick={ChooseCiseaux}
              className="div__carteCiseaux button__carte "
            >
              <img
                className="image_symbole--up"
                src={Ciseaux}
                alt="SymboleCiseau"
              />
              <img
                className="image_symbole"
                src={Ciseaux}
                alt="SymboleCiseau"
              />
              <div className="texteSymbole">Ciseaux</div>
              <div className="contenerImgDown">
                <img
                  className="image_symbole--Down"
                  src={Ciseaux}
                  alt="SymboleCiseau"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="div__joueurs--roles--liste">
          <div className="Wrapper__Joueur">
            {/*Hote*/}
            <div className=" joueurHotePlaying">
              <img
                className="avatar__joueur"
                src={imgMJPlay}
                alt="AvatarHote"
              />
              <div className="container__nameuser--button">
                <p className="Pseudo__joueurHote">{nameMJTrue}</p>
                <div className="div__button--role">
                  <button onClick={handlePlayer} className="button__Player">
                    <img className="img__Role" src={player} alt="role" />
                  </button>
                  <button
                    onClick={handleInformateur}
                    className="button__Informateur"
                  >
                    <img className="img__Role" src={Informateur} alt="role" />
                  </button>
                  <button onClick={handleTaupe} className="button__Taupe">
                    <img className="img__Role" src={Taupe} alt="role" />
                  </button>
                </div>
              </div>
            </div>

            {/*JoueurSelf*/}
            <div className="joueur_local joueurSelfPlaying JoueurSelf">
              <img
                className="avatar__joueur"
                src={imgSelfPlay}
                alt="AvatarJoueurSelf"
              />
              <div className="container__nameuser--button">
                <p className="Pseudo__joueur Pseudo__joueur--Self">
                  {nameSelfPlay}
                </p>
                <div className="div__button--role">
                  <button onClick={handlePlayer} className="button__Player">
                    <img className="img__Role" src={player} alt="role" />
                  </button>
                  <button
                    onClick={handleInformateur}
                    className="button__Informateur"
                  >
                    <img className="img__Role" src={Informateur} alt="role" />
                  </button>
                  <button onClick={handleTaupe} className="button__Taupe">
                    <img className="img__Role" src={Taupe} alt="role" />
                  </button>
                </div>
              </div>
            </div>

            {/*Joueur1*/}
            <div className="joueur_local joueur1Playing">
              <img
                className="avatar__joueur"
                src={img1Play}
                alt="AvatarJoueur1"
              />
              <div className="container__nameuser--button">
                <p className="Pseudo__joueur">{name1Play}</p>
                <div className="div__button--role">
                  <button onClick={handlePlayer} className="button__Player">
                    <img className="img__Role" src={player} alt="role" />
                  </button>
                  <button
                    onClick={handleInformateur}
                    className="button__Informateur"
                  >
                    <img className="img__Role" src={Informateur} alt="role" />
                  </button>
                  <button onClick={handleTaupe} className="button__Taupe">
                    <img className="img__Role" src={Taupe} alt="role" />
                  </button>
                </div>
              </div>
            </div>

            {/*Joueur2*/}
            <div className="joueur_local joueur2Playing">
              <img
                className="avatar__joueur"
                src={img2Play}
                alt="AvatarJoueur2"
              />
              <div className="container__nameuser--button">
                <p className="Pseudo__joueur">{name2Play}</p>
                <div className="div__button--role">
                  <button onClick={handlePlayer} className="button__Player">
                    <img className="img__Role" src={player} alt="role" />
                  </button>
                  <button
                    onClick={handleInformateur}
                    className="button__Informateur"
                  >
                    <img className="img__Role" src={Informateur} alt="role" />
                  </button>
                  <button onClick={handleTaupe} className="button__Taupe">
                    <img className="img__Role" src={Taupe} alt="role" />
                  </button>
                </div>
              </div>
            </div>

            {/*Joueur3*/}
            <div className="joueur_local joueur3Playing">
              <img
                className="avatar__joueur"
                src={img3Play}
                alt="AvatarJoueur3"
              />
              <div className="container__nameuser--button">
                <p className="Pseudo__joueur">{name3Play}</p>
                <div className="div__button--role">
                  <button onClick={handlePlayer} className="button__Player">
                    <img className="img__Role" src={player} alt="role" />
                  </button>
                  <button
                    onClick={handleInformateur}
                    className="button__Informateur"
                  >
                    <img className="img__Role" src={Informateur} alt="role" />
                  </button>
                  <button onClick={handleTaupe} className="button__Taupe">
                    <img className="img__Role" src={Taupe} alt="role" />
                  </button>
                </div>
              </div>
            </div>

            {/*Joueur4*/}
            <div className="joueur_local joueur4Playing">
              <img
                className="avatar__joueur"
                src={img4Play}
                alt="AvatarJoueur4"
              />
              <div className="container__nameuser--button">
                <p className="Pseudo__joueur">{name4Play}</p>
                <div className="div__button--role">
                  <button onClick={handlePlayer} className="button__Player">
                    <img className="img__Role" src={player} alt="role" />
                  </button>
                  <button
                    onClick={handleInformateur}
                    className="button__Informateur"
                  >
                    <img className="img__Role" src={Informateur} alt="role" />
                  </button>
                  <button onClick={handleTaupe} className="button__Taupe">
                    <img className="img__Role" src={Taupe} alt="role" />
                  </button>
                </div>
              </div>
            </div>

            {/*Joueur5*/}
            <div className="joueur_local joueur5Playing">
              <img
                className="avatar__joueur"
                src={img5Play}
                alt="AvatarJoueur5"
              />
              <div className="container__nameuser--button">
                <p className="Pseudo__joueur">{name5Play}</p>
                <div className="div__button--role">
                  <button onClick={handlePlayer} className="button__Player">
                    <img className="img__Role" src={player} alt="role" />
                  </button>
                  <button
                    onClick={handleInformateur}
                    className="button__Informateur"
                  >
                    <img className="img__Role" src={Informateur} alt="role" />
                  </button>
                  <button onClick={handleTaupe} className="button__Taupe">
                    <img className="img__Role" src={Taupe} alt="role" />
                  </button>
                </div>
              </div>
            </div>

            {/*Joueur6*/}
            <div className="joueur6Playing joueur_local">
              <img
                className="avatar__joueur"
                src={img6Play}
                alt="AvatarJoueur6"
              />
              <div className="container__nameuser--button">
                <p className="Pseudo__joueur">{name6Play}</p>
                <div className="div__button--role">
                  <button onClick={handlePlayer} className="button__Player">
                    <img className="img__Role" src={player} alt="role" />
                  </button>
                  <button
                    onClick={handleInformateur}
                    className="button__Informateur"
                  >
                    <img className="img__Role" src={Informateur} alt="role" />
                  </button>
                  <button onClick={handleTaupe} className="button__Taupe">
                    <img className="img__Role" src={Taupe} alt="role" />
                  </button>
                </div>
              </div>
            </div>

            {/*Joueur7*/}
            <div className="joueur_local joueur7Playing">
              <img
                className="avatar__joueur"
                src={img7Play}
                alt="AvatarJoueur7"
              />
              <div className="container__nameuser--button">
                <p className="Pseudo__joueur">{name7Play}</p>
                <div className="div__button--role">
                  <button onClick={handlePlayer} className="button__Player">
                    <img className="img__Role" src={player} alt="role" />
                  </button>
                  <button
                    onClick={handleInformateur}
                    className="button__Informateur"
                  >
                    <img className="img__Role" src={Informateur} alt="role" />
                  </button>
                  <button onClick={handleTaupe} className="button__Taupe">
                    <img className="img__Role" src={Taupe} alt="role" />
                  </button>
                </div>
              </div>
            </div>

            {/*Joueur8*/}
            <div className="joueur_local joueur8Playing">
              <img
                className="avatar__joueur"
                src={img8Play}
                alt="AvatarJoueur8"
              />
              <div className="container__nameuser--button">
                <p className="Pseudo__joueur">{name8Play}</p>
                <div className="div__button--role">
                  <button onClick={handlePlayer} className="button__Player">
                    <img className="img__Role" src={player} alt="role" />
                  </button>
                  <button
                    onClick={handleInformateur}
                    className="button__Informateur"
                  >
                    <img className="img__Role" src={Informateur} alt="role" />
                  </button>
                  <button onClick={handleTaupe} className="button__Taupe">
                    <img className="img__Role" src={Taupe} alt="role" />
                  </button>
                </div>
              </div>
            </div>

            {/*Joueur9*/}
            <div className="joueur_local joueur9Playing">
              <img
                className="avatar__joueur"
                src={img9Play}
                alt="AvatarJoueur9"
              />
              <div className="container__nameuser--button">
                <p className="Pseudo__joueur">{name9Play}</p>
                <div className="div__button--role">
                  <button onClick={handlePlayer} className="button__Player">
                    <img className="img__Role" src={player} alt="role" />
                  </button>
                  <button
                    onClick={handleInformateur}
                    className="button__Informateur"
                  >
                    <img className="img__Role" src={Informateur} alt="role" />
                  </button>
                  <button onClick={handleTaupe} className="button__Taupe">
                    <img className="img__Role" src={Taupe} alt="role" />
                  </button>
                </div>
              </div>
            </div>

            {/*Joueur10*/}
            <div className="joueur_local joueur10Playing">
              <img
                className="avatar__joueur"
                src={img10Play}
                alt="AvatarJoueur10"
              />
              <div className="container__nameuser--button">
                <p className="Pseudo__joueur">{name10Play}</p>
                <div className="div__button--role">
                  <button onClick={handlePlayer} className="button__Player">
                    <img className="img__Role" src={player} alt="role" />
                  </button>
                  <button
                    onClick={handleInformateur}
                    className="button__Informateur"
                  >
                    <img className="img__Role" src={Informateur} alt="role" />
                  </button>
                  <button onClick={handleTaupe} className="button__Taupe">
                    <img className="img__Role" src={Taupe} alt="role" />
                  </button>
                </div>
              </div>
            </div>

            {/*Joueur11*/}
            <div className="joueur_local joueur11Playing">
              <img
                className="avatar__joueur"
                src={img11Play}
                alt="AvatarJoueur11"
              />
              <div className="container__nameuser--button">
                <p className="Pseudo__joueur">{name11Play}</p>
                <div className="div__button--role">
                  <button onClick={handlePlayer} className="button__Player">
                    <img className="img__Role" src={player} alt="role" />
                  </button>
                  <button
                    onClick={handleInformateur}
                    className="button__Informateur"
                  >
                    <img className="img__Role" src={Informateur} alt="role" />
                  </button>
                  <button onClick={handleTaupe} className="button__Taupe">
                    <img className="img__Role" src={Taupe} alt="role" />
                  </button>
                </div>
              </div>
            </div>

            {/*Joueur12*/}
            <div className="joueur_local joueur12Playing">
              <img
                className="avatar__joueur"
                src={img12Play}
                alt="AvatarJoueur12"
              />
              <div className="container__nameuser--button">
                <p className="Pseudo__joueur">{name12Play}</p>
                <div className="div__button--role">
                  <button onClick={handlePlayer} className="button__Player">
                    <img className="img__Role" src={player} alt="role" />
                  </button>
                  <button
                    onClick={handleInformateur}
                    className="button__Informateur"
                  >
                    <img className="img__Role" src={Informateur} alt="role" />
                  </button>
                  <button onClick={handleTaupe} className="button__Taupe">
                    <img className="img__Role" src={Taupe} alt="role" />
                  </button>
                </div>
              </div>
            </div>

            {/*Joueur13*/}
            <div className="joueur_local joueur13Playing">
              <img
                className="avatar__joueur"
                src={img13Play}
                alt="AvatarJoueur13"
              />
              <div className="container__nameuser--button">
                <p className="Pseudo__joueur">{name13Play}</p>
                <div className="div__button--role">
                  <button onClick={handlePlayer} className="button__Player">
                    <img className="img__Role" src={player} alt="role" />
                  </button>
                  <button
                    onClick={handleInformateur}
                    className="button__Informateur"
                  >
                    <img className="img__Role" src={Informateur} alt="role" />
                  </button>
                  <button onClick={handleTaupe} className="button__Taupe">
                    <img className="img__Role" src={Taupe} alt="role" />
                  </button>
                </div>
              </div>
            </div>

            {/*Joueur14*/}
            <div className="joueur_local joueur14Playing">
              <img
                className="avatar__joueur"
                src={img14Play}
                alt="AvatarJoueur14"
              />
              <div className="container__nameuser--button">
                <p className="Pseudo__joueur">{name14Play}</p>
                <div className="div__button--role">
                  <button onClick={handlePlayer} className="button__Player">
                    <img className="img__Role" src={player} alt="role" />
                  </button>
                  <button
                    onClick={handleInformateur}
                    className="button__Informateur"
                  >
                    <img className="img__Role" src={Informateur} alt="role" />
                  </button>
                  <button onClick={handleTaupe} className="button__Taupe">
                    <img className="img__Role" src={Taupe} alt="role" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreenPlay;
