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

// Les actions

import { savePseudoInvite  } from "../../action/Avatar";
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
  const indexJoueur1 = useSelector((state) => state.avatar.joueurs.i1);
  const indexJoueurRandom1 = useSelector((state) => state.avatar.joueurs.indexRandom1);
  const indexJoueur2 = useSelector((state) => state.avatar.joueurs.i2);
  const indexJoueurRandom2 = useSelector((state) => state.avatar.joueurs.indexRandom2);
  const indexJoueur3 = useSelector((state) => state.avatar.joueurs.i3);
  const indexJoueurRandom3 = useSelector((state) => state.avatar.joueurs.indexRandom3);
  const indexJoueur4 = useSelector((state) => state.avatar.joueurs.i4);
  const indexJoueurRandom4 = useSelector((state) => state.avatar.joueurs.indexRandom4);
  const indexJoueur5 = useSelector((state) => state.avatar.joueurs.i5);
  const indexJoueurRandom5 = useSelector((state) => state.avatar.joueurs.indexRandom5);
  const indexJoueur6 = useSelector((state) => state.avatar.joueurs.i6);
  const indexJoueurRandom6 = useSelector((state) => state.avatar.joueurs.indexRandom6);
  const indexJoueur7 = useSelector((state) => state.avatar.joueurs.i7);
  const indexJoueurRandom7 = useSelector((state) => state.avatar.joueurs.indexRandom7);
  const indexJoueur8 = useSelector((state) => state.avatar.joueurs.i8);
  const indexJoueurRandom8 = useSelector((state) => state.avatar.joueurs.indexRandom8);
  const indexJoueur9 = useSelector((state) => state.avatar.joueurs.i9);
  const indexJoueurRandom9 = useSelector((state) => state.avatar.joueurs.indexRandom9);
  const indexJoueur10 = useSelector((state) => state.avatar.joueurs.i10);
  const indexJoueurRandom10 = useSelector((state) => state.avatar.joueurs.indexRandom10);
  const indexJoueur11 = useSelector((state) => state.avatar.joueurs.i11);
  const indexJoueurRandom11 = useSelector((state) => state.avatar.joueurs.indexRandom11);
  const indexJoueur12 = useSelector((state) => state.avatar.joueurs.i12);
  const indexJoueurRandom12 = useSelector((state) => state.avatar.joueurs.indexRandom12);
  const indexJoueur13 = useSelector((state) => state.avatar.joueurs.i13);
  const indexJoueurRandom13 = useSelector((state) => state.avatar.joueurs.indexRandom13);
  const indexJoueur14 = useSelector((state) => state.avatar.joueurs.i14);
  const indexJoueurRandom14 = useSelector((state) => state.avatar.joueurs.indexRandom14);

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

  const salonState = useSelector((state) => state.salon.lobby);
  const iround = useSelector((state) => state.avatar.joueurSelf.inumber);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Si l'index random est rensiegné, on affiche la case joueur 1 
  if (indexJoueurRandom1 !== null) {
    divJoueur1.style.display = "flex";
  }
  if (indexJoueurRandom2 !== null) {
    divJoueur2.style.display = "flex";
  }
  if (indexJoueurRandom3 !== null) {
    divJoueur3.style.display = "flex";
  }
  if (indexJoueurRandom4 !== null) {
    divJoueur4.style.display = "flex";
  }
  if (indexJoueurRandom5 !== null) {
    divJoueur5.style.display = "flex";
  }
  if (indexJoueurRandom6 !== null) {
    divJoueur6.style.display = "flex";
  }
  if (indexJoueurRandom7 !== null) {
    divJoueur7.style.display = "flex";
  }
  if (indexJoueurRandom8 !== null) {
    divJoueur8.style.display = "flex";
  }
  if (indexJoueurRandom9 !== null) {
    divJoueur9.style.display = "flex";
  }
  if (indexJoueurRandom10 !== null) {
    divJoueur10.style.display = "flex";
  }
  if (indexJoueurRandom11 !== null) {
    divJoueur11.style.display = "flex";
  }
  if (indexJoueurRandom12 !== null) {
    divJoueur12.style.display = "flex";
  }
  if (indexJoueurRandom13 !== null) {
    divJoueur13.style.display = "flex";
  }
  if (indexJoueurRandom14 !== null) {
    divJoueur14.style.display = "flex";
  }

   // Si i self est egal a 1 on cache la case 1
    if ( iround == 1 ) {
      divJoueur1.style.display = "none";
    }
// si i self est egal a 2, on cache la case 2
    else if ( iround == 2 ) {
      divJoueur2.style.display = "none";
    }
    else if ( iround == 3 ) {
      divJoueur3.style.display = "none";
    }
    else if ( iround == 4 ) {
      divJoueur4.style.display = "none";
    }
    else if ( iround == 5 ) {
      divJoueur5.style.display = "none";
    }
    else if ( iround == 6 ) {
      divJoueur6.style.display = "none";
    }
    else if ( iround == 7 ) {
      divJoueur7.style.display = "none";
    }
    else if ( iround == 8 ) {
      divJoueur8.style.display = "none";
    }
    else if ( iround == 9 ) {
      divJoueur9.style.display = "none";
    }
    else if ( iround == 10 ) {
      divJoueur10.style.display = "none";
    }
    else if ( iround == 11 ) {
      divJoueur11.style.display = "none";
    }
    else if ( iround == 12 ) {
      divJoueur12.style.display = "none";
    }
    else if ( iround == 13 ) {
      divJoueur14.style.display = "none";
    }
    else if ( iround == 14 ) {
      divJoueur14.style.display = "none";
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

    // On creer un math random qui va servir d'identifiant et on l'enregistre dans le state
    const indexRandomPlayer = Math.round(Math.random() * 10000000000000000);


    // Si je suis l'hote j'envoie mon nom a l'invité ------ si invité, je demende le name de l'hote
    nameMJ != "" ? dispatch(HoteDetecte(nameMJ, imgMJ, indexRandomPlayer)) : dispatch(newInviteDetecte(indexRandomPlayer));
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

  // On envoie l'hote vers la page d'ecran de jeu
  const handleLaunchGame = () => {
    navigate("/Playing");
  };
  // Je recois les infos, j'en fais quoi ? => les enregistrer dans le reducer
  // Decomposer
  // 1re boulot => dés qu'un joueur se connecte on creer une nouvelle div ok

 //ternaire qui check si on a recu les indexs des joueurs et qui gere le renvoi
 //indexJoueur1 !== null 
 //? (console.log('-----index recu => on l\'envoie a tout le monde', indexJoueur1) ,dispatch(sendIndexPlayer1({ indexJoueur1, indexJoueurRandom1 })))
 //: console.log('------l\'index 0 est vide') ;

 

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
              <form type="sumbit">
                <input
                  onChange={pseudoValueInvite}
                  value={nameSelf}
                  className="inputName"
                  maxLength="15"
                  placeholder="Pseudo"
                ></input>
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
              <h3 className="div__nbdejoueur">6 Joueurs</h3>
              <div className="wapperJoueur">
                {/*Joueur hote */}
                <div className="Joueur__localStorage joueurHote">
                  <img className="logo__joueursSelf" src={imgMJ} />
                  <span className="Pseudo__joueurSelf">{nameMJTrue}</span>
                  <p className="playerReady button_style--active">Pret</p>
                  {/*pret ou non */}
                </div>
                {/*Joueur Self */}
                <div className="Joueur__localStorage joueurSelf">
                  <img className="logo__joueursSelf" src={imgSelf} />
                  <span className="Pseudo__joueurSelf">{nameSelf}</span>
                  <p className="playerReady button_style--active">Pret</p>
                  {/*pret ou non */}
                </div>
                {/*Joueur 1 */}
                <div className="Joueur__localStorage joueur1">
                  <img className="logo__joueursSelf" src={img1} />
                  <span className="Pseudo__joueurSelf">{name1}</span>
                  <p className="playerReady button_style--active">Pret</p>
                </div>
                {/*Joueur 2 */}
                <div className="Joueur__localStorage joueur2">
                  <img className="logo__joueursSelf" src={img2} />
                  <span className="Pseudo__joueurSelf">{name2}</span>
                  <p className="playerReady button_style--active">Pret</p>
                </div>
                {/*Joueur 3 */}
                <div className="Joueur__localStorage joueur3">
                  <img className="logo__joueursSelf" src={img3} />
                  <span className="Pseudo__joueurSelf">{name3}</span>
                  <p className="playerReady button_style--active">Pret</p>
                </div>
                {/*Joueur 4 */}
                <div className="Joueur__localStorage joueur4">
                  <img className="logo__joueursSelf" src={img4} />
                  <span className="Pseudo__joueurSelf">{name4}</span>
                  <p className="playerReady button_style--active">Pret</p>
                </div>
                {/*Joueur 5 */}
                <div className="Joueur__localStorage joueur5">
                  <img className="logo__joueursSelf" src={img5} />
                  <span className="Pseudo__joueurSelf">{name5}</span>
                  <p className="playerReady button_style--active">Pret</p>
                </div>
                {/*Joueur 6 */}
                <div className="Joueur__localStorage joueur6">
                  <img className="logo__joueursSelf" src={img6} />
                  <span className="Pseudo__joueurSelf">{name6}</span>
                  <p className="playerReady button_style--active">Pret</p>
                </div>
                {/*Joueur 7 */}
                <div className="Joueur__localStorage joueur7">
                  <img className="logo__joueursSelf" src={img7} />
                  <span className="Pseudo__joueurSelf">{name7}</span>
                  <p className="playerReady button_style--active">Pret</p>
                </div>
                {/*Joueur 8 */}
                <div className="Joueur__localStorage joueur8">
                  <img className="logo__joueursSelf" src={img8} />
                  <span className="Pseudo__joueurSelf">{name8}</span>
                  <p className="playerReady button_style--active">Pret</p>
                </div>
                {/*Joueur 9 */}
                <div className="Joueur__localStorage joueur9">
                  <img className="logo__joueursSelf" src={img9} />
                  <span className="Pseudo__joueurSelf">{name9}</span>
                  <p className="playerReady button_style--active">Pret</p>
                </div>
                {/*Joueur 10 */}
                <div className="Joueur__localStorage joueur10">
                  <img className="logo__joueursSelf" src={img10} />
                  <span className="Pseudo__joueurSelf">{name10}</span>
                  <p className="playerReady button_style--active">Pret</p>
                </div>
                {/*Joueur 11 */}
                <div className="Joueur__localStorage joueur11">
                  <img className="logo__joueursSelf" src={img11} />
                  <span className="Pseudo__joueurSelf">{name11}</span>
                  <p className="playerReady button_style--active">Pret</p>
                </div>
                {/*Joueur 12 */}
                <div className="Joueur__localStorage joueur12">
                  <img className="logo__joueursSelf" src={img12} />
                  <span className="Pseudo__joueurSelf">{name12}</span>
                  <p className="playerReady button_style--active">Pret</p>
                </div>
                {/*Joueur 13 */}
                <div className="Joueur__localStorage joueur13">
                  <img className="logo__joueursSelf" src={img13} />
                  <span className="Pseudo__joueurSelf">{name13}</span>
                  <p className="playerReady button_style--active">Pret</p>
                </div>
                {/*Joueur 14 */}
                <div className="Joueur__localStorage joueur14">
                  <img className="logo__joueursSelf" src={img14} />
                  <span className="Pseudo__joueurSelf">{name14}</span>
                  <p className="playerReady button_style--active">Pret</p>
                </div>
              </div>
              <button
                href=""
                className="button__lancer__une__partie--2 button_style--active"
                onClick={handleLaunchGame}
              >
                Lancer la partie
              </button>
            </div>
          </div>
        </div>
        <div className="ad-2">pub2</div>
      </div>
    </div>
  );
}

export default Meetplayer;
