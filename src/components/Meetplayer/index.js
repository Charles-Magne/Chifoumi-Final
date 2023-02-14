import style from "./style.scss";

//les dependances
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// les composants
import AvatarChoix from "../AvatarChoix/index";

// les icones
import titre from "../../assets/Pictures/Titre/Pierre, feuille et Arnaques.png";
import flag from "../../assets/Icones/drapeau-france.svg";
import share from "../../assets/Icones/partager.png";
import info from "../../assets/Icones/informations.png";
import waiting from "../../assets/Icones/waiting_blue.png";
import ready from "../../assets/Icones/ready_blue.png";
import waitingIconeSelf from "../../assets/Icones/waiting_blanc.png";
import readyIconeSelf from "../../assets/Icones/ready_blanc.png";

// Les actions

import { savePseudoInvite, sendNameself, launchGame } from "../../action/Avatar";
import {
  connectionWebSo,
  newInviteDetecte,
  HoteDetecte,
} from "../../action/connection.js";

import { number } from "prop-types";

function Meetplayer() {

  const nameMJ = useSelector((state) => state.avatar.hote.valuePseudo); // le nom de l'hote toujours en haut dans tous les reducers
  const imgMJ = useSelector((state) => state.avatar.hote.avatarImgHote); // l'img de l'hote toujours en haut
  const nameMJTrue = useSelector((state) => state.avatar.hote.hotePseudo); // le nom de l'hote toujours en haut uniquement pour l'hote
  const nameSelf = useSelector((state) => state.avatar.joueurSelf.valuePseudo); // si le nom du participant et le nom de l'hote son les memes alors on fait un
  const imgSelf = useSelector((state) => state.avatar.joueurSelf.avatarImg); //img joueur Self
  const name1 = useSelector((state) => state.avatar.joueurs.ValuePseudo1); // pseudo joueur 1
  const img1 = useSelector((state) => state.avatar.joueurs.avatarImg1); // img joueur 1
  const name2 = useSelector((state) => state.avatar.joueurs.ValuePseudo2); // pseudo joueur 2
  const img2 = useSelector((state) => state.avatar.joueurs.avatarImg2); // img joueur 2
  const name3 = useSelector((state) => state.avatar.joueurs.ValuePseudo3); // pseudo joueur 3
  const img3 = useSelector((state) => state.avatar.joueurs.avatarImg3); // img joueur 3
  const name4 = useSelector((state) => state.avatar.joueurs.ValuePseudo4); // pseudo joueur 4
  const img4 = useSelector((state) => state.avatar.joueurs.avatarImg4); // img joueur 4
  const name5 = useSelector((state) => state.avatar.joueurs.ValuePseudo5); // pseudo joueur 5
  const img5 = useSelector((state) => state.avatar.joueurs.avatarImg5); // img joueur 5
  const name6 = useSelector((state) => state.avatar.joueurs.ValuePseudo6); // pseudo joueur 6
  const img6 = useSelector((state) => state.avatar.joueurs.avatarImg6); // img joueur 6
  const name7 = useSelector((state) => state.avatar.joueurs.ValuePseudo7); // pseudo joueur 7
  const img7 = useSelector((state) => state.avatar.joueurs.avatarImg7); // img joueur 7
  const name8 = useSelector((state) => state.avatar.joueurs.ValuePseudo8); // pseudo joueur 8
  const img8 = useSelector((state) => state.avatar.joueurs.avatarImg8); // img joueur 8
  const name9 = useSelector((state) => state.avatar.joueurs.ValuePseudo9); // pseudo joueur 9
  const img9 = useSelector((state) => state.avatar.joueurs.avatarImg9); // img joueur 9
  const name10 = useSelector((state) => state.avatar.joueurs.ValuePseudo10); // pseudo joueur 10
  const img10 = useSelector((state) => state.avatar.joueurs.avatarImg10); // img joueur 10
  const name11 = useSelector((state) => state.avatar.joueurs.ValuePseudo11); // pseudo joueur 11
  const img11 = useSelector((state) => state.avatar.joueurs.avatarImg11); // img joueur 11
  const name12 = useSelector((state) => state.avatar.joueurs.ValuePseudo12); // pseudo joueur 12
  const img12 = useSelector((state) => state.avatar.joueurs.avatarImg12); // img joueur 12
  const name13 = useSelector((state) => state.avatar.joueurs.ValuePseudo13); // pseudo joueur 13
  const img13 = useSelector((state) => state.avatar.joueurs.avatarImg13); // img joueur 13
  const name14 = useSelector((state) => state.avatar.joueurs.ValuePseudo14); // pseudo joueur 14
  const img14 = useSelector((state) => state.avatar.joueurs.avatarImg14); // img joueur 14

  //On defini les index pour savoir si on affche ou non les div
  const totalOfUser = useSelector((state) => state.avatar.joueurs.nbPlayer); // Le nombre de joueur present dans la room
  const indexJoueur1 = useSelector((state) => state.avatar.joueurs.i1); // index standard
  const indexJoueurRandom1 = useSelector((state) => state.avatar.joueurs.indexRandom1 ); // index Random du joueur 1
  const indexJoueur2 = useSelector((state) => state.avatar.joueurs.i2);
  const indexJoueurRandom2 = useSelector(
    (state) => state.avatar.joueurs.indexRandom2
  );
  const indexJoueur3 = useSelector((state) => state.avatar.joueurs.i3);
  const indexJoueurRandom3 = useSelector(
    (state) => state.avatar.joueurs.indexRandom3
  );
  const indexJoueur4 = useSelector((state) => state.avatar.joueurs.i4);
  const indexJoueurRandom4 = useSelector(
    (state) => state.avatar.joueurs.indexRandom4
  );
  const indexJoueur5 = useSelector((state) => state.avatar.joueurs.i5);
  const indexJoueurRandom5 = useSelector(
    (state) => state.avatar.joueurs.indexRandom5
  );
  const indexJoueur6 = useSelector((state) => state.avatar.joueurs.i6);
  const indexJoueurRandom6 = useSelector(
    (state) => state.avatar.joueurs.indexRandom6
  );
  const indexJoueur7 = useSelector((state) => state.avatar.joueurs.i7);
  const indexJoueurRandom7 = useSelector(
    (state) => state.avatar.joueurs.indexRandom7
  );
  const indexJoueur8 = useSelector((state) => state.avatar.joueurs.i8);
  const indexJoueurRandom8 = useSelector(
    (state) => state.avatar.joueurs.indexRandom8
  );
  const indexJoueur9 = useSelector((state) => state.avatar.joueurs.i9);
  const indexJoueurRandom9 = useSelector(
    (state) => state.avatar.joueurs.indexRandom9
  );
  const indexJoueur10 = useSelector((state) => state.avatar.joueurs.i10);
  const indexJoueurRandom10 = useSelector(
    (state) => state.avatar.joueurs.indexRandom10
  );
  const indexJoueur11 = useSelector((state) => state.avatar.joueurs.i11);
  const indexJoueurRandom11 = useSelector(
    (state) => state.avatar.joueurs.indexRandom11
  );
  const indexJoueur12 = useSelector((state) => state.avatar.joueurs.i12);
  const indexJoueurRandom12 = useSelector(
    (state) => state.avatar.joueurs.indexRandom12
  );
  const indexJoueur13 = useSelector((state) => state.avatar.joueurs.i13);
  const indexJoueurRandom13 = useSelector(
    (state) => state.avatar.joueurs.indexRandom13
  );
  const indexJoueur14 = useSelector((state) => state.avatar.joueurs.i14);
  const indexJoueurRandom14 = useSelector(
    (state) => state.avatar.joueurs.indexRandom14
  );

  const indexRandomArry = [indexJoueurRandom1, indexJoueurRandom2, indexJoueurRandom3, indexJoueurRandom4, indexJoueurRandom5, indexJoueurRandom6, indexJoueurRandom7, indexJoueurRandom8, indexJoueurRandom9, indexJoueurRandom10,  indexJoueurRandom11,  indexJoueurRandom12,  indexJoueurRandom13,  indexJoueurRandom14];

  // On identifie les div a afficher
  const divJoueur1 = document.querySelector(".joueur1");
  const divJoueur2 = document.querySelector(".joueur2");
  const divJoueur3 = document.querySelector(".joueur3");
  const divJoueur4 = document.querySelector(".joueur4");
  const divJoueur5 = document.querySelector(".joueur5");
  const divJoueur6 = document.querySelector(".joueur6");
  const divJoueur7 = document.querySelector(".joueur7");
  const divJoueur8 = document.querySelector(".joueur8");
  const divJoueur9 = document.querySelector(".joueur9");
  const divJoueur10 = document.querySelector(".joueur10");
  const divJoueur11 = document.querySelector(".joueur11");
  const divJoueur12 = document.querySelector(".joueur12");
  const divJoueur13 = document.querySelector(".joueur13");
  const divJoueur14 = document.querySelector(".joueur14");

  const divJoueurs = [  divJoueur1,  divJoueur2,  divJoueur3,  divJoueur4,  divJoueur5,  divJoueur6,  divJoueur7,  divJoueur8,  divJoueur9,  divJoueur10,  divJoueur11,  divJoueur12,  divJoueur13,  divJoueur14,];

  // On cible les icones pret et en attante
  const waitingSelf = document.querySelector(".playerWaitingSelf");
  const readySelf = document.querySelector(".playerReadySelf");
  const waiting1 = document.querySelector(".playerWaiting1");
  const ready1 = document.querySelector(".playerReady1");
  const waiting2 = document.querySelector(".playerWaiting2");
  const ready2 = document.querySelector(".playerReady2");
  const waiting3 = document.querySelector(".playerWaiting3");
  const ready3 = document.querySelector(".playerReady3");
  const waiting4 = document.querySelector(".playerWaiting4");
  const ready4 = document.querySelector(".playerReady4");
  const waiting5 = document.querySelector(".playerWaiting5");
  const ready5 = document.querySelector(".playerReady5");
  const waiting6 = document.querySelector(".playerWaiting6");
  const ready6 = document.querySelector(".playerReady6");
  const waiting7 = document.querySelector(".playerWaiting7");
  const ready7 = document.querySelector(".playerReady7");
  const waiting8 = document.querySelector(".playerWaiting8");
  const ready8 = document.querySelector(".playerReady8");
  const waiting9 = document.querySelector(".playerWaiting9");
  const ready9 = document.querySelector(".playerReady9");
  const waiting10 = document.querySelector(".playerWaiting10");
  const ready10 = document.querySelector(".playerReady10");
  const waiting11 = document.querySelector(".playerWaiting11");
  const ready11 = document.querySelector(".playerReady11");
  const waiting12 = document.querySelector(".playerWaiting12");
  const ready12 = document.querySelector(".playerReady12");
  const waiting13 = document.querySelector(".playerWaiting13");
  const ready13 = document.querySelector(".playerReady13");
  const waiting14 = document.querySelector(".playerWaiting14");
  const ready14 = document.querySelector(".playerReady14");


  //ciblage du pseudoSelf pour changer la couleur lorsque on valide le nom
  const PseudoSelf = document.querySelector(".PseudoSelfTrue");

  const salonState = useSelector((state) => state.salon.lobby);
  const iround = useSelector((state) => state.avatar.joueurSelf.inumber);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //Si l'index random est rensiegné, on affiche la case joueur 1
  for (let i = 0; i < indexRandomArry.length; i++) {
    if (indexRandomArry[i] !== null) {
      divJoueurs[i].style.display = "flex";
    }
  }

  // Si i self est egal a 1 on cache la case 1
  for (let i = 0; i < divJoueurs.length; i++) {
    if (iround === i + 1) {
      divJoueurs[i].style.display = "none";
      break;
    }
  }

  useEffect(() => {
    // on lance les websockets en verifiant si on est le hote ou invité
    dispatch(connectionWebSo());
    const divHote = document.querySelector(".div__link--invit"); // le lien d'invitation
    const divNonHote = document.querySelector(".contenerNonHote"); // le choix de l'avatar et du pseudo
    const buttonLaunch = document.querySelector(
      ".button__lancer__une__partie--2"
    );
    const divJoueurSelf = document.querySelector(".joueurSelf"); // La div qui affiche le joueur self

    // la ternaire check si hote ou invité pour gerer affichage
    nameMJ != ""
      ? ((divHote.style.display = "flex"),
        (divJoueurSelf.style.display = "none")) // On cache la div joueur self et le choix de l'avatar
      : ((divNonHote.style.display = "flex"),
        (buttonLaunch.style.display = "none"));

        // Si je suis l'hote je passe la case en bleu 
        nameMJ != "" ? document.querySelector('.joueurHote').classList.add('Pseudo__joueurHoteSelf')  : "" ;

    // On creer un math random qui va servir d'identifiant et on l'enregistre dans le state
    const indexRandomPlayer = Math.round(Math.random() * 10000000000000000);

    //! Attention, il faut virer les joueurs en trop La ternaire qui gere les joueurs lorsque le salon est plein navigate("/error")

    // Si je suis l'hote j'envoie mon nom a l'invité ------ si invité, je demende le name de l'hote
    nameMJ != ""
      ? dispatch(HoteDetecte(nameMJ, imgMJ, indexRandomPlayer))
      : dispatch(newInviteDetecte(indexRandomPlayer));
  }, []);

  //input du pseudo
  const pseudoValueInvite = (event) => {
    const inputlong = document.querySelector(".inputName");
    const alerteMore15 = document.querySelector(".alertLength");
    //ternaire pour check nb de characteres + 15
    inputlong.value.length == 15
      ? (alerteMore15.style.display = "flex")
      : (alerteMore15.style.display = "none");
    dispatch(savePseudoInvite(event.currentTarget.value, "valueName"));
  };

  // On permet a l'hote d'envoyer un lien aux autres participants
  const handleCopyLink = () => {
    console.log(salonState);
    navigator.clipboard.writeText(
      `http://localhost:8080/Send-invitation/${salonState}`
    );
  };

  const PseudoTarget = document.querySelector(".PseudoSelfTrue");

  /////////****************************** */
  // On clique sur le button OK => envoie son pseudo aux autres joueurs via les websockets
  const handleSendName = (event) => {
    event.preventDefault();
    //je veux afficher le name donc textContent
    PseudoTarget.textContent = nameSelf;
    //Ternaire qui check si l'avatar est ok
    if (imgSelf !== null) {
      //On gere l'affichage des icones waiting et ready
      (waitingSelf.style.display = "none"), (readySelf.style.display = "flex");
    }
    // On doit afficher le name juste quand on clique sur ok
    dispatch(sendNameself(iround, nameSelf));
  };

  // si le pseudo est l'avatar sont rempli alors on valide avec la deuxieme icone
  if (name1 !== "Player 1" && img1 !== null) {
    waiting1.style.display = "none";
    ready1.style.display = "flex";
  }
  if (name2 !== "Player 2" && img2 !== null) {
    waiting2.style.display = "none";
    ready2.style.display = "flex";
  }
  if (name3 !== "Player 3" && img3 !== null) {
    waiting3.style.display = "none";
    ready3.style.display = "flex";
  }
  if (name4 !== "Player 4" && img4 !== null) {
    waiting4.style.display = "none";
    ready4.style.display = "flex";
  }
  if (name5 !== "Player 5" && img5 !== null) {
    waiting5.style.display = "none";
    ready5.style.display = "flex";
  }
  if (name6 !== "Player 6" && img6 !== null) {
    waiting6.style.display = "none";
    ready6.style.display = "flex";
  }
  if (name7 !== "Player 7" && img7 !== null) {
    waiting7.style.display = "none";
    ready7.style.display = "flex";
  }
  if (name8 !== "Player 8" && img8 !== null) {
    waiting8.style.display = "none";
    ready8.style.display = "flex";
  }
  if (name9 !== "Player 9" && img9 !== null) {
    waiting9.style.display = "none";
    ready9.style.display = "flex";
  }
  if (name10 !== "Player 10" && img10 !== null) {
    waiting10.style.display = "none";
    ready10.style.display = "flex";
  }
  if (name11 !== "Player 11" && img11 !== null) {
    waiting11.style.display = "none";
    ready11.style.display = "flex";
  }
  if (name12 !== "Player 12" && img12 !== null) {
    waiting12.style.display = "none";
    ready12.style.display = "flex";
  }
  if (name13 !== "Player 13" && img13 !== null) {
    waiting13.style.display = "none";
    ready13.style.display = "flex";
  }
  if (name14 !== "Player 14" && img14 !== null) {
    waiting14.style.display = "none";
    ready14.style.display = "flex";
  }

  // On envoie les joueurs sur l'ecran de jeu 
  const handleLaunchGame = () => {
    const alertFivePlayer = document.querySelector(".alert__nb--player");

    //On verifie sur il y a assez de joueurs
    indexJoueurRandom4 == null
      ? alertFivePlayer.style.display = "flex"
      : dispatch(launchGame());
    //navigate("/Playing");
  };

  const gameready = useSelector((state) => state.salon.gameReady);

  useEffect(() => {

  // si le state est egale a yes alors on passe sur la page suivante
  if ( gameready === "yes" ) {
    navigate('/Playing');
  }
}, [gameready]);


  return (
    <div>
      <div className="pseudoBody">
        <div className="ad-1">pub1</div>
        <div className="contener-main">
          <div className="contener-header">
            <img className="logoTitre" src={titre} alt="Logo" />
            <button className="button__langue button_secondaire--desactive">
              <img className="drapeau" src={flag} alt="drapeau" />
            </button>
          </div>
          <div className="div__section-principal--inviter--joueur">
            <div className="div__roles--options">
              <div className="contain__role--options">
                <button className="Button__regles button_secondaire--desactive">
                  Régles
                </button>
                <button className="Button__options button_secondaire--active">
                  Options{" "}
                </button>
              </div>
              <div className="les_regles">
                <p className="P__astuces--1">comment gagner ?</p>
                <p className="P__astuces--2">d'autres trucs</p>
                <p className="P__astuces--3">encores des trucs</p>
              </div>
              <div className="les_options">
                <div>
                  <div className="div__Difficultéchoix titre--option">
                    Choisir la difficulté
                    <button className="button__difficulté button__difficulté--facile button_secondaire--desactive">
                      Je decouvre le jeu
                    </button>
                    <button className="button__difficulté button__difficulté--normal button_secondaire--active">
                      C'est bon, je connais
                    </button>
                    <button className="button__difficulté button__difficulté--difficile button_secondaire--desactive">
                      Temps de jeu = 5000 H
                    </button>
                  </div>
                  <h3 className="h3__nb_de_taupe titre--option">
                    Modifier le nb de taupe
                  </h3>
                  <div className="div__nbDeTaupe--choix">
                    <div className="choixTaupe">
                      <span>1</span>
                      <input
                        className="checkbox--taupe checkbox--taupe--1"
                        type="checkbox"
                        label="ca sert a quoi ?"
                        value={1}
                      />
                    </div>
                    <div className="choixTaupe">
                      <span>2</span>
                      <input
                        className="checkbox--taupe checkbox--taupe--2"
                        type="checkbox"
                        value={2}
                      />
                    </div>
                  </div>
                  <div className="div__gestionCarteAction titre--option">
                    Gerer les cartes puputes
                  </div>
                  <button className="button__carte--pupute button_secondaire--desactive">
                    Supprimer certaines cartes puputes
                  </button>
                  {/*<!--nb de carte total activé de facon dynamique--> */}
                  {/*-- astuces Checkbox (pas sur de l'integrer)-- 
                    -- selectioner les cartes que l'on veut =>  ouvre un menu avec une scrollbarre possibilité de sauvgarder les choix
                    -- activer le dialogue automatique (sans micro / c'est mieux de les avoir activé automatiquement) => checkBox --> */}
                </div>
              </div>
            </div>
            {/* *************************cette partie n'est visible que par les joueurs qui ne sont pas hote */}
            <div className="contenerNonHote">
              <div className="alertEmpty">Veuillez choisir un pseudo</div>
              <div className="alertLength">
                Attention, seulement 15 caractères
              </div>
              <form type="text">
                <input
                  onChange={pseudoValueInvite}
                  value={nameSelf}
                  className="inputName"
                  maxLength="15"
                  placeholder="Pseudo"
                ></input>
                <button
                  onClick={handleSendName}
                  className="button_style--active send_name--button"
                >
                  ok
                </button>
              </form>
              <AvatarChoix />
            </div>
            {/********************************** cette partie n'est visible que par l'hote du jeu */}
            <button onClick={handleCopyLink} className="div__link--invit">
              <img
                className="img__icone--information"
                src={info}
                alt="Informations"
              />
              <div className="div__conseil--hide">
                <p>
                  Pour inviter d'autres joueurs, cliquer sur le bouton, puis
                  envoyer le code à vos amis.
                </p>
              </div>
              <p className="partage__titre">Cliquer pour copier le lien</p>
              <img className="img__partager" src={share} alt="icone-share" />
            </button>
            {/********************************** liste des joueurs */}
            <div className="div__listeJoueurs">
              <h3 className="div__nbdejoueur">{totalOfUser} Joueurs</h3>
              <div className="wapperJoueur">
                {/*Joueur hote */}
                <div className=" joueurHote">
                  <img className="logo__joueursSelf" src={imgMJ} />
                  <span className="Pseudo__joueurHoteMeet ">
                    {nameMJTrue}
                  </span>
                  <img className="playerReady playerReadyHote" src={ready} />
                  {/*pret ou non */}
                </div>
                {/*Joueur Self */}
                <div className="Joueur__localStorage joueurSelf">
                  <img
                    className="logo__joueursSelf imgSelfTrue"
                    src={imgSelf}
                  />
                  <span className="Pseudo__joueurSelf PseudoSelfTrue"></span>
                  <img
                    className="playerWaiting playerWaitingSelf"
                    src={waitingIconeSelf}
                  />
                  <img
                    className="playerReady playerReadySelf"
                    src={readyIconeSelf}
                  />
                  {/*pret ou non */}
                </div>
                {/*Joueur 1 */}
                <div className="Joueur__localStorage joueur1">
                  <img className="logo__joueursSelf" src={img1} />
                  <span className="Pseudo__joueurSelf Pseudo__joueur1">
                    {name1}
                  </span>
                  <img className="playerWaiting playerWaiting1" src={waiting} />
                  <img className="playerReady playerReady1" src={ready} />
                </div>
                {/*Joueur 2 */}
                <div className="Joueur__localStorage joueur2">
                  <img className="logo__joueursSelf" src={img2} />
                  <span className="Pseudo__joueurSelf Pseudo__joueur2">
                    {name2}
                  </span>
                  <img className="playerWaiting playerWaiting2" src={waiting} />
                  <img className="playerReady playerReady2" src={ready} />
                </div>
                {/*Joueur 3 */}
                <div className="Joueur__localStorage joueur3">
                  <img className="logo__joueursSelf" src={img3} />
                  <span className="Pseudo__joueurSelf Pseudo__joueur3">
                    {name3}
                  </span>
                  <img className="playerWaiting playerWaiting3" src={waiting} />
                  <img className="playerReady playerReady3" src={ready} />
                </div>
                {/*Joueur 4 */}
                <div className="Joueur__localStorage joueur4">
                  <img className="logo__joueursSelf" src={img4} />
                  <span className="Pseudo__joueurSelf Pseudo__joueur4">
                    {name4}
                  </span>
                  <img className="playerWaiting playerWaiting4" src={waiting} />
                  <img className="playerReady playerReady4" src={ready} />
                </div>
                {/*Joueur 5 */}
                <div className="Joueur__localStorage joueur5">
                  <img className="logo__joueursSelf" src={img5} />
                  <span className="Pseudo__joueurSelf Pseudo__joueur5">
                    {name5}
                  </span>
                  <img className="playerWaiting playerWaiting5" src={waiting} />
                  <img className="playerReady playerReady5" src={ready} />
                </div>
                {/*Joueur 6 */}
                <div className="Joueur__localStorage joueur6">
                  <img className="logo__joueursSelf" src={img6} />
                  <span className="Pseudo__joueurSelf Pseudo__joueur6">
                    {name6}
                  </span>
                  <img className="playerWaiting playerWaiting6" src={waiting} />
                  <img className="playerReady playerReady6" src={ready} />
                </div>
                {/*Joueur 7 */}
                <div className="Joueur__localStorage joueur7">
                  <img className="logo__joueursSelf" src={img7} />
                  <span className="Pseudo__joueurSelf Pseudo__joueur7">
                    {name7}
                  </span>
                  <img className="playerWaiting playerWaiting7" src={waiting} />
                  <img className="playerReady playerReady7" src={ready} />
                </div>
                {/*Joueur 8 */}
                <div className="Joueur__localStorage joueur8">
                  <img className="logo__joueursSelf" src={img8} />
                  <span className="Pseudo__joueurSelf Pseudo__joueur8">
                    {name8}
                  </span>
                  <img className="playerWaiting playerWaiting8" src={waiting} />
                  <img className="playerReady playerReady8" src={ready} />
                </div>
                {/*Joueur 9 */}
                <div className="Joueur__localStorage joueur9">
                  <img className="logo__joueursSelf" src={img9} />
                  <span className="Pseudo__joueurSelf Pseudo__joueur9">
                    {name9}
                  </span>
                  <img className="playerWaiting playerWaiting9" src={waiting} />
                  <img className="playerReady playerReady9" src={ready} />
                </div>
                {/*Joueur 10 */}
                <div className="Joueur__localStorage joueur10">
                  <img className="logo__joueursSelf" src={img10} />
                  <span className="Pseudo__joueurSelf Pseudo__joueur10">
                    {name10}
                  </span>
                  <img
                    className="playerWaiting playerWaiting10"
                    src={waiting}
                  />
                  <img className="playerReady playerReady10" src={ready} />
                </div>
                {/*Joueur 11 */}
                <div className="Joueur__localStorage joueur11">
                  <img className="logo__joueursSelf" src={img11} />
                  <span className="Pseudo__joueurSelf Pseudo__joueur11">
                    {name11}
                  </span>
                  <img
                    className="playerWaiting playerWaiting11"
                    src={waiting}
                  />
                  <img className="playerReady playerReady11" src={ready} />
                </div>
                {/*Joueur 12 */}
                <div className="Joueur__localStorage joueur12">
                  <img className="logo__joueursSelf" src={img12} />
                  <span className="Pseudo__joueurSelf Pseudo__joueur12">
                    {name12}
                  </span>
                  <img
                    className="playerWaiting playerWaiting12"
                    src={waiting}
                  />
                  <img className="playerReady playerReady12" src={ready} />
                </div>
                {/*Joueur 13 */}
                <div className="Joueur__localStorage joueur13">
                  <img className="logo__joueursSelf" src={img13} />
                  <span className="Pseudo__joueurSelf Pseudo__joueur13">
                    {name13}
                  </span>
                  <img
                    className="playerWaiting playerWaiting13"
                    src={waiting}
                  />
                  <img className="playerReady playerReady13" src={ready} />
                </div>
                {/*Joueur 14 */}
                <div className="Joueur__localStorage joueur14">
                  <img className="logo__joueursSelf" src={img14} />
                  <span className="Pseudo__joueurSelf Pseudo__joueur14">
                    {name14}
                  </span>
                  <img
                    className="playerWaiting playerWaiting14"
                    src={waiting}
                  />
                  <img className="playerReady playerReady14" src={ready} />
                </div>
              </div>
              <button
                href=""
                className="button__lancer__une__partie--2 button_style--active"
                onClick={handleLaunchGame}
              >
                Lancer la partie
              </button>
              <div className="alert__nb--player">
                Vous devez être au moins 5 joueurs
              </div>
            </div>
          </div>
        </div>
        <div className="ad-2">pub2</div>
      </div>
    </div>
  );
}

export default Meetplayer;
