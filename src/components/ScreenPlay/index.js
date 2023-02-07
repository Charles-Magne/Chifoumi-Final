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
import avatarProvisoire from "../../assets/Pictures/Avatars/Lion_adulte.png";

//Les dependances
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Les actions
import { sendRandomForRole } from "../../action/Role";

function ScreenPlay() {
  // Il faut definir le role de l'utilisateur, puis sa carte pupute, puis si taupe sa carte à defendre ou si informateur la carte perdante
  /*Pour definir les roles, on defini un randown math a tous les joueurs et celui qui a la plus elevé est la taupe, les deux moins grands sont informateurs */
  /*pour definir la carte pupute un random math sert a attribuer la carte 
faire un loading si jamais les calcules prennent du temps.
*/
 const dispatch = useDispatch();

  //Les data du state
  const nameMJPlay = useSelector((state) => state.avatar.hote.valuePseudo); // le nom de l'hote toujours en haut dans tous les reducers
  const imgMJPlay = useSelector((state) => state.avatar.hote.avatarImgHote); // l'img de l'hote toujours en haut
  const nameMJTrue = useSelector((state) => state.avatar.hote.hotePseudo); // le nom de l'hote toujours en haut uniquement pour l'hote
  const nameSelfPlay = useSelector((state) => state.avatar.joueurSelf.valuePseudo); // si le nom du participant et le nom de l'hote son les memes alors on fait un
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

  const indexTaupe = useSelector((state) => state.role.taupe); // index du joueur self
  const indexSelf = useSelector((state) => state.avatar.joueurSelf.inumber); // index du joueur self
  const indexHotePlay = useSelector((state) => state.avatar.idJoueur); // index de l'hote
  const numberOfPlayer =useSelector((state) => state.avatar.joueurs.nbPlayer); // le nb de joueur present dans la partie



  // -----------------------------Gestion de l'affichage des cases joueurs -----------------------------

  useEffect(() => {
    

    // On creer un random math qui gere le role
    const randomRole = Math.random();

    // sert a savoir si c'est l'hote ou non 
    indexSelf !== null ? dispatch(sendRandomForRole(randomRole, indexSelf, numberOfPlayer )) : dispatch(sendRandomForRole(randomRole, indexHotePlay, numberOfPlayer )) ;
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
   const divJoueursPlay = [  divJoueur1Play,  divJoueur2Play,  divJoueur3Play,  divJoueur4Play,  divJoueur5Play,  divJoueur6Play,  divJoueur7Play,  divJoueur8Play,  divJoueur9Play,  divJoueur10Play,  divJoueur11Play,  divJoueur12Play,  divJoueur13Play,  divJoueur14Play];

    // Ici on place les img du state dans un tableau pour faire une boucle forEach
  const imgAllPlayer = [img1Play, img2Play, img3Play, img4Play, img5Play, img6Play, img7Play, img8Play, img9Play,  img10Play,  img11Play,  img12Play,  img13Play,  img14Play];

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

  // Si i self est egal a 1 on cache la case 1
  for (let i = 0; i < divJoueursPlay.length; i++) {
    if (indexSelf === i ) {
      divJoueursPlay[i].style.display = "none";
      break;
    }
  }

    // Si l'indexSelf egale a x on passe en none divJoueurXPlay
    if (indexSelf == 1) {
      divJoueur1Play.style.display = "none";
    } 
    else if (indexSelf == 2) {
      divJoueur2Play.style.display = "none";
    }
    else if (indexSelf == 3) {
      divJoueur3Play.style.display = "none";
    }
    else if (indexSelf == 4) {
      divJoueur4Play.style.display = "none";
    }
    else if (indexSelf == 5) {
      divJoueur5Play.style.display = "none";
    }
    else if (indexSelf == 6) {
      divJoueur6Play.style.display = "none";
    }
    else if (indexSelf == 7) {
      divJoueur7Play.style.display = "none";
    }
    else if (indexSelf == 8) {
      divJoueur8Play.style.display = "none";
    }
    else if (indexSelf == 9) {
      divJoueur9Play.style.display = "none";
    }
    else if (indexSelf == 10) {
      divJoueur10Play.style.display = "none";
    }
    else if (indexSelf == 11) {
      divJoueur11Play.style.display = "none";
    }
    else if (indexSelf == 12) {
      divJoueur12Play.style.display = "none";

    }else if (indexSelf == 13) {
      divJoueur13Play.style.display = "none";
    }
    else if (indexSelf == 14) {
      divJoueur14Play.style.display = "none";
    }


  }, []);

  //------------------------------------- Le role  attribution de la taupe ------------------------------

  // Ici on va determiner si nous somme la taupe 
  if ( indexTaupe !== null && indexSelf == indexTaupe) {
    document.querySelector(".Role__titre").textContent = "Taupe";
    document.querySelector(".Conseil-role_p").textContent = "Votre but est de faire perdre les joueurs";
    document.querySelector(".icone__titre").style.src={Taupe};
    document.querySelector(".consignesCompletesHide").textContent = "Pour faire perdre les joueurs, incitez les a jouer la carte qui perdra contre vous. Si les joueurs jouent la meme carte que vous, ils perdent. N'hesitez pas a vous faire passer pour un informateur ou un joueur";

    const choixSymbole = Math.floor(Math.random()* 10);
    if (choixSymbole <= 3 ) {
      const symbole = "Pierre";
      //dispatch(symboleTaupe(symbole ))
    }
    else if ( choixSymbole >= 4 && choixSymbole <=6 ){
      const symbole = "feuille";
      //dispatch(symboleTaupe(symbole ))
    }
    else if ( choixSymbole > 6) {
      const symbole = "Ciseaux";
      //dispatch(symboleTaupe(symbole ))
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
            <img src={player} alt="icone Role" className="icone__titre" />
            {/*<!--Icone role--> */}
            <h1 className="Role__titre">Joueur</h1>
            <div className="div__consigne--openregle">
              <p className="Conseil-role_p"></p>
              <img
                className="icone__ouvrir--conseil"
                src={arrowDown}
                alt="iconeArrow"
              />
            </div>
            <p className="consignesCompletesHide">
              Vous voyez l'une des deux cartes perdantes. Faites en sorte que
              les joueurs ne jouent pas cette carte.
            </p>
          </div>
          <div className="carte_pupute">
            <img
              className="symoble__mini__haut__gauche"
              src={ile}
              alt="iconeCarteAction"
            />
            <img className="symbole__action" src={ile} alt="iconeCarteAction" />
            {/*<!--Img centrale--> */}
            <p className="titre__carte__action"></p>
            {/*<!--titre de la carte--> */}
            <span className="description__carte"></span>
            {/* <!--Commentaire de la carte--> */}
            <img
              className="symoble__mini__bas__droite"
              src={ile}
              alt="iconeCarteAction"
            />
          </div>
          <div className="div__choixdelacarte">
            <button className="div__cartePierre button__carte button_style--active">
              <img
                className="image_symbole--up"
                src={Pierre}
                alt="SymboleCiseau"
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
            <button className="div__carteFeuille button__carte button_style--active">
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
                  alt="SymboleCiseau"
                />
              </div>
            </button>
            <button className="div__carteCiseaux button__carte button_style--active">
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
              <div className="texteSymbole">Ciseau</div>
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
          <div className="Wrapper__Joueur" >
          {/*Hote*/}
          <div className="joueur_local joueurHotePlaying">
            <img className="avatar__joueur" src={imgMJPlay} alt="AvatarHote" />
            <div className="container__nameuser--button">
              <p className="Pseudo__joueur" >{nameMJPlay}</p>
              <div className="div__button--role">
                <button className="button__role">
                  <img className="img__Role" src={player} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Informateur} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Taupe} alt="role" />
                </button>
              </div>
            </div>
          </div>

          {/*JoueurSelf*/}
          <div className="joueur_local joueurSelfPlaying">
            <img
              className="avatar__joueur"
              src={imgSelfPlay}
              alt="AvatarJoueurSelf"
            />
            <div className="container__nameuser--button">
              <p className="Pseudo__joueur" >{nameSelfPlay}</p>
              <div className="div__button--role">
                <button className="button__role">
                  <img className="img__Role" src={player} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Informateur} alt="role" />
                </button>
                <button>
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
              <p className="Pseudo__joueur" >{name1Play}</p>
              <div className="div__button--role">
                <button className="button__role">
                  <img className="img__Role" src={player} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Informateur} alt="role" />
                </button>
                <button>
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
                <button className="button__role">
                  <img className="img__Role" src={player} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Informateur} alt="role" />
                </button>
                <button>
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
              <p className="Pseudo__joueur" >{name3Play}</p>
              <div className="div__button--role">
                <button className="button__role">
                  <img className="img__Role" src={player} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Informateur} alt="role" />
                </button>
                <button>
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
              <p className="Pseudo__joueur" >{name4Play}</p>
              <div className="div__button--role">
                <button className="button__role">
                  <img className="img__Role" src={player} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Informateur} alt="role" />
                </button>
                <button>
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
              <p className="Pseudo__joueur" >{name5Play}</p>
              <div className="div__button--role">
                <button className="button__role">
                  <img className="img__Role" src={player} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Informateur} alt="role" />
                </button>
                <button>
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
                <button className="button__role">
                  <img className="img__Role" src={player} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Informateur} alt="role" />
                </button>
                <button>
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
              <p className="Pseudo__joueur" >{name7Play}</p>
              <div className="div__button--role">
                <button className="button__role">
                  <img className="img__Role" src={player} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Informateur} alt="role" />
                </button>
                <button>
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
              <p className="Pseudo__joueur" >{name8Play}</p>
              <div className="div__button--role">
                <button className="button__role">
                  <img className="img__Role" src={player} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Informateur} alt="role" />
                </button>
                <button>
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
              <p className="Pseudo__joueur" >{name9Play}</p>
              <div className="div__button--role">
                <button className="button__role">
                  <img className="img__Role" src={player} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Informateur} alt="role" />
                </button>
                <button>
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
              <p className="Pseudo__joueur" >{name10Play}</p>
              <div className="div__button--role">
                <button className="button__role">
                  <img className="img__Role" src={player} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Informateur} alt="role" />
                </button>
                <button>
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
              <p className="Pseudo__joueur" >{name11Play}</p>
              <div className="div__button--role">
                <button className="button__role">
                  <img className="img__Role" src={player} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Informateur} alt="role" />
                </button>
                <button>
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
              <p className="Pseudo__joueur" >{name12Play}</p>
              <div className="div__button--role">
                <button className="button__role">
                  <img className="img__Role" src={player} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Informateur} alt="role" />
                </button>
                <button>
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
              <p className="Pseudo__joueur" >{name13Play}</p>
              <div className="div__button--role">
                <button className="button__role">
                  <img className="img__Role" src={player} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Informateur} alt="role" />
                </button>
                <button>
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
              <p className="Pseudo__joueur" >{name14Play}</p>
              <div className="div__button--role">
                <button className="button__role">
                  <img className="img__Role" src={player} alt="role" />
                </button>
                <button>
                  <img className="img__Role" src={Informateur} alt="role" />
                </button>
                <button>
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
