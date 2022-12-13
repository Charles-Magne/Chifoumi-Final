import "./style.scss";

//les Actions
import { DomRef, clickCarousel, changeIndex } from "../../action/Carousel.js";

//Les dependances
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//Les img
import taupe from "../../assets/Pictures/Role/Taupel Blue.png";
import informateur from "../../assets/Pictures/Role/informateur Blue.png";
import joueur from "../../assets/Pictures/Role/joueur Blue.png";
import Pierre from "../../assets/Pictures/Symbole/pierre_bleu.png";
import Feuille from "../../assets/Pictures/Symbole/feuille_bleu.png";
import Ciseaux from "../../assets/Pictures/Symbole/ciseaux_bleu.png";
import micro from "../../assets/Icones/micro.png";
import discord from "../../assets/Pictures/Titre/Discord-logo.png";
import WhatsApp from "../../assets/Pictures/Titre/WhatsAppIcone.png";
import Skype from "../../assets/Pictures/Titre/SkypeIcone.png";
import Messenger from "../../assets/Pictures/Titre/MessengerIcone.png";

function Carousel() {
  console.log("--------------------");

  const dispatch = useDispatch();


  // Le useEffect qui permet de querySelector Au chargement du Dom
  useEffect(() => {
    const regles = document.querySelectorAll(".article");
    console.log(" le queryselector useSelector", regles);
    //dispatch(DomRef(regles));
  }, []);

  // Ici On peut utiliser le useSelectorAll
  const domGlobal = useSelector((state) => state.carousel.DomArticle);
  const domCiblé = { ...domGlobal };


  /**
   * Permet d'appeler la function qui gere l'affichage tout les X secondes
   */
  const timeCount = setInterval(() => {
    //displayToggle();
    console.log("On dispatch");
  }, 5000);

  /**
   * Descrition => sert a appeler la fonction timeToggle qui gere le display du carousel
   * C'est fonction va nous permettre de récurérer tout les articles comportant la classe '.article'
   * @return domGlobal Elements Articles
   */
  // j'affiche la div
  const displayFlex = (test) => {
    const show = (test.style.display = "flex");
    return show;
  };


  // je cache la div
  const displayNone = (test, test1, test2, test3) => {
    const hide = (test.style.display = "none");
    const hide1 = (test1.style.display = "none");
    const hide2 = (test2.style.display = "none");
    const hide3 = (test3.style.display = "none");
    return hide, hide1, hide2, hide3;
  };

  /**
   * Desciptif : // Ici On est charger d'identifier la cilbe du clic et de le dispatcher au reducer
   * @param {*} event // On prends en param la class du button cible
   * @return < // La fonction n'a pas besoin de return une data
   */
  const handleClickCarousel = (event) => {
    const cible = event.target.id;
    //displayToggle();
    dispatch(clickCarousel(cible));
    console.log('La cible du clic=>', cible);
    console.log('L event du clic =>', event.target.id);
  };

  const focusButton = useSelector((state) => state.carousel.clicButton);
  const indexTime = useSelector((state) => state.carousel.timerDisplay);

  //gere l'affichage du display
  let index = 1;
  
/*  const displayToggle = () => {
  if (focusButton == "LoadingButton1" || index == 0) {
    console.log("display 1 Clic=>", focusButton);
    console.log("display 1 Time =>", index);
    const showFlex = displayFlex(domCiblé[0]);
    const hideFlex = displayNone(
      domCiblé[1],
      domCiblé[2],
      domCiblé[3],
      domCiblé[4]
    );
    index = 1;
    console.log("display 1 Time final=>", index);
  } else if (focusButton == "LoadingButton2" || index == 1) {
    console.log("display 2 Clic=>", focusButton);
    console.log("display 2 Time=>", index);
    const showFlex = displayFlex(domCiblé[1]);
    const hideFlex = displayNone(
      domCiblé[0],
      domCiblé[2],
      domCiblé[3],
      domCiblé[4]
    );
    index = 2;
  } else if (focusButton == "LoadingButton3" || index == 2) {
    console.log("display 3 Clic =>", focusButton);
    console.log("display 3 Time=>", index);
    const showFlex = displayFlex(domCiblé[2]);
    const hideFlex = displayNone(
      domCiblé[0],
      domCiblé[1],
      domCiblé[3],
      domCiblé[4]
    );
    index = 3;
  } else if (focusButton == "LoadingButton4" || index == 3) {
    console.log("display 4 Clic=>", focusButton);
    console.log("display 4 Time=>", index);
    const showFlex = displayFlex(domCiblé[3]);
    const hideFlex = displayNone(
      domCiblé[0],
      domCiblé[1],
      domCiblé[2],
      domCiblé[4]
    );
    index = 4;
  } else if (focusButton == "LoadingButton5" || index == 4) {
    console.log("display 5 Clic=>", focusButton);
    console.log("display 5 Time=>", index);
    const showFlex = displayFlex(domCiblé[4]);
    const hideFlex = displayNone(
      domCiblé[0],
      domCiblé[1],
      domCiblé[2],
      domCiblé[3]
    );
    index = 0;
  }
  }
  */
  

  // NOTE [console Log] - HandleClick Test
  /* console.groupCollapsed(`HandleCLick Test Fonction`);
    console.log(MyArrayOfTonySamaSenpai);
    console.groupEnd();*/

  /*
  // ------------ Carousell via la gestion des clic Buttons
  
  //On definie les 4 boutons
  const button__1 = document.querySelector(".button__regle--1");
  const button__2 = document.querySelector(".button__regle--2");
  const button__3 = document.querySelector(".button__regle--3");
  const button__4 = document.querySelector(".button__regle--4");
  
  //On creer un tableau avec les buttons
  let tableauButton = [button__1, button__2, button__3, button__4];
  
  //On defini les contenus a afficher ou masquer
  const regle1 = document.querySelector(".regle1__contenu");
  const regle2 = document.querySelector(".regle2__contenu");
  const regle3 = document.querySelector(".regle3__contenu");
  const regle4 = document.querySelector(".regle4__contenu");
  
  //lorsque l'on clic sur le button 1
  button__1.addEventListener("click", handleclickregle1)
  
  //on affiche seulement la premiere regle
  function handleclickregle1(event) {
  
      regle1.style.display = 'block';
      regle2.style.display = 'none';
      regle3.style.display = 'none';
      regle4.style.display = 'none';
      console.log('partie 1 du carousel');
  
      //pour attribuer un style qui montre que le bouton est selectionné
      button__1.classList.add("button__regle--actif");
      button__2.classList.remove("button__regle--actif");
      button__3.classList.remove("button__regle--actif");
      button__4.classList.remove("button__regle--actif");
      i = 0;
  }
  
  //lorsque l'on clic sur le button 2
  button__2.addEventListener("click", handleclickregle2)
  
  function handleclickregle2(event) {
      regle1.style.display = 'none';
      regle2.style.display = 'block';
      regle3.style.display = 'none';
      regle4.style.display = 'none';
      console.log('partie 2 du carousel');
  
      //pour attribuer un style qui montre que le bouton est selectionné
      button__1.classList.remove("button__regle--actif");
      button__2.classList.add("button__regle--actif");
      button__3.classList.remove("button__regle--actif");
      button__4.classList.remove("button__regle--actif");
      i = 1;
  }
  
  //lorsque l'on clic sur le button 3
  button__3.addEventListener("click", handleclickregle3)
  
  function handleclickregle3(event) {
      regle1.style.display = 'none';
      regle2.style.display = 'none';
      regle3.style.display = 'block';
      regle4.style.display = 'none';
      console.log('partie 3 du carousel');
  
      //pour attribuer un style qui montre que le bouton est selectionné
      button__1.classList.remove("button__regle--actif");
      button__2.classList.remove("button__regle--actif");
      button__3.classList.add("button__regle--actif");
      button__4.classList.remove("button__regle--actif");
      i = 2;
  }
  
  //lorsque l'on clic sur le button 4
  button__4.addEventListener("click", handleclickregle4)
  
  function handleclickregle4(event) {
      regle1.style.display = 'none';
      regle2.style.display = 'none';
      regle3.style.display = 'none';
      regle4.style.display = 'block';
  
      //pour attribuer un style qui montre que le bouton est selectionné
      button__1.classList.remove("button__regle--actif");
      button__2.classList.remove("button__regle--actif");
      button__3.classList.remove("button__regle--actif");
      button__4.classList.add("button__regle--actif");
      //permet de modifier l'emplacement de l'index
      i = 3;
  }
  // ------------ Carousell via la gestion du temps et les bouton qui change de style
  
  // l'affichage change toutes les 10 S => donc, il faut creer une boucle qui demarre a x Seconde et s'execute toutes les 40 S.
  // lorsque l'on clique sur une onglet, la boucle s'execute a partir du current.onglet.
  //pour la gestion du temps, on place toutes les div dans un tableau puis on incremente l'index toutes les 10 S et lorsque l'index est = 4 on attends 10 secondes avant de 
  //revenir a zero
  let Carouselle = [regle1, regle2, regle3, regle4];
  
  //On defini l'index qui parcourt le tableau
  let i = 1;
  
  //Le temps d'affichage de chaque slides 10S
  let letempsquipasse = setInterval(time, 5000);
  
  //La fonction permet d'augmenter l'indexe toutes les x secondes et de le ramener a 0 à la fin de la boucle.
  function time() {
  
      if (i == 0) {
          i++;
          //On affiche la bonne div en fonction de l'evolution du temps
          Carouselle[0].style.display = 'block';
          Carouselle[1].style.display = 'none';
          Carouselle[2].style.display = 'none';
          Carouselle[3].style.display = 'none';
          //On change le style des button
          button__1.classList.add("button__regle--actif");
          button__2.classList.remove("button__regle--actif");
          button__3.classList.remove("button__regle--actif");
          button__4.classList.remove("button__regle--actif");
  
      } else if (i == 1) {
          i++;
          //pour attribuer un style qui montre que le bouton est selectionné
          Carouselle[0].style.display = 'none';
          Carouselle[1].style.display = 'block';
          Carouselle[2].style.display = 'none';
          Carouselle[3].style.display = 'none';
          //On change le style des button
          button__1.classList.remove("button__regle--actif");
          button__2.classList.add("button__regle--actif");
          button__3.classList.remove("button__regle--actif");
          button__4.classList.remove("button__regle--actif");
  
      } else if (i == 2) {
          i++;
          //pour attribuer un style qui montre que le bouton est selectionné
          Carouselle[0].style.display = 'none';
          Carouselle[1].style.display = 'none';
          Carouselle[2].style.display = 'block';
          Carouselle[3].style.display = 'none';
          //On change le style des button
          button__1.classList.remove("button__regle--actif");
          button__2.classList.remove("button__regle--actif");
          button__3.classList.add("button__regle--actif");
          button__4.classList.remove("button__regle--actif");
  
      } else if (i == 3) {
          i = 0;
          //pour attribuer un style qui montre que le bouton est selectionné
          Carouselle[0].style.display = 'none';
          Carouselle[1].style.display = 'none';
          Carouselle[2].style.display = 'none';
          Carouselle[3].style.display = 'block';
          //On change le style des button
          button__1.classList.remove("button__regle--actif");
          button__2.classList.remove("button__regle--actif");
          button__3.classList.remove("button__regle--actif");
          button__4.classList.add("button__regle--actif");
      }
  }*/

  return (
    <div>
      <div className="carouselContenerMaine">
        <div className="article1 article carouselContener">
          <span className="titre">
            Au debut de la partie, les participants sont assignés a un role :
          </span>
          <div className="role">
            <img className="iconeRole" src={taupe} alt="IconeTaupe" />
            <span className="RoleName">La taupe(s)</span>
          </div>
          <div className="role">
            <img
              className="iconeRole"
              src={informateur}
              alt="IconeInformateur"
            />
            <span className="RoleName">Les informateurs</span>
          </div>
          <div className="role">
            <img className="iconeRole" src={joueur} alt="IconeJoueur" />
            <span className="RoleName">Les joueurs</span>
          </div>
        </div>
        {/* ****************Ici c'est le deuxieme article*****************************  */}

        <div className="article2 article carouselContener">
          <div className="titreRegleContener2">
            <img
              className="iconeTaupe2 iconeRoleAll"
              src={taupe}
              alt="iconeTaupe"
            />
            <span className="titreRegle2">
              La taupe va recevoir un symbole à defendre
            </span>
          </div>
          <span className="DansCeCasLa">Par exemple :</span>
          <div className="cardExemple2">
            <img className="CardSymbole" src={Pierre} alt="cardPierre" />
            <img
              className="CardSymbole cardRed"
              src={Feuille}
              alt="cardFeuille"
            />
            <img className="CardSymbole" src={Ciseaux} alt="cardCiseaux" />
          </div>
          <span className="DansCeCasLa">
            Dans ce cas la, la taupe va devoir inciter les joueurs à jouer les
            symboles perdant face a la feuille.
          </span>
          <div className="cardExemple2">
            <img
              className="CardSymbole cardJaune"
              src={Pierre}
              alt="cardPierre"
            />
            <img
              className="CardSymbole cardJaune"
              src={Feuille}
              alt="cardFeuille"
            />
            <img className="CardSymbole" src={Ciseaux} alt="cardCiseaux" />
          </div>
          <span className="DansCeCasLa policebig">
            Plus les joueurs se trompent,
          </span>
          <span className="DansCeCasLa policebig">
            Plus la taupe gagne de points
          </span>
        </div>
        {/* ****************Ici c'est le Troisieme article*****************************  */}
        <div className="article3 article carouselContener">
          <div className="titreRegleContener2">
            <img
              className="iconeTaupe2 iconeRoleAll"
              src={informateur}
              alt="iconeTaupe"
            />
            <span className="titreRegle2">
              Les deux Informateurs voient chacun une carte perdante
            </span>
          </div>
          <span className="DansCeCasLa">Par exemple :</span>
          <div className="cardExemple2">
            <img
              className="CardSymbole cardRed"
              src={Pierre}
              alt="cardPierre"
            />
          </div>
          <span className="DansCeCasLa">
            Les Informateurs doivent aider les joueurs a gagner en les incitant
            a jouer la bonne carte .
          </span>
          <img className="imgRole iconeRoleAll" src={taupe} alt="iconeTaupe" />
          <span className="DansCeCasLa">
            Mais attention, Les Taupes vont esseyer de se faire passer pour les
            informateurs afin inciter les joueurs a jouer le mauvais symbole.
          </span>
        </div>
        {/* ****************Ici c'est le quatrieme article*****************************  */}
        <div className="article4 article carouselContener">
          <div className="titreRegleContener2">
            <img
              className="iconeTaupe2 iconeRoleAll"
              src={joueur}
              alt="iconeJoueur"
            />
            <span className="titreRegle2">
              Les joueurs doivent jouer le symbole qui bat celui de la taupe
            </span>
          </div>
          <span className="DansCeCasLa">
            Par exemple, si la taupe défends :
          </span>
          <img
            className="CardSymbole cardRed sautDeLigne"
            src={Feuille}
            alt="cardFeuille"
          />
          <span className="DansCeCasLa">Les joueurs doivent jouer :</span>
          <img
            className="CardSymbole sautDeLigne"
            src={Ciseaux}
            alt="cardCiseaux"
          />
          <span className="DansCeCasLa">
            Les joueurs devront aussi repérer les informateurs pour savoir
            quelle carte jouer.
          </span>
        </div>
        {/* ****************Ici c'est le Cinquieme article*****************************  */}
        <div className="article5 article carouselContener">
          <div className="titreRegleContener2">
            <span className="titreRegle2">
              Pierre, Feuille et Arnaques est un jeu qui se joue en vocal
            </span>
          </div>
          <img
            className="iconeTaupe2 iconeRoleAll sautDeLigne"
            src={micro}
            alt="MicroIcone"
          />
          <span className="DansCeCasLa sautDeLigne">
            Pour un confort optimal, nous vous recommandons d'utiliser Discord
          </span>
          <img
            className="iconeTaupe2 iconeDiscord sautDeLigne"
            src={discord}
            alt="DiscordLogo"
          />
          <a
            href="https://discord.com/"
            target="blank"
            className="titreRegle2 sautDeLigne souligné"
          >
            Lien vers discord
          </a>
          <span className="DansCeCasLa sautDeLigne">
            Mais vous pouvez egalement utiliser pleins d'autres platformes:
          </span>
          <div>
            <img
              className="iconeTaupe2 iconeSkype sautDeLigne"
              src={Skype}
              alt="SkypeLogo"
            />
            <img
              className="iconeTaupe2 iconeWhatsapp sautDeLigne"
              src={WhatsApp}
              alt="whatsappLogo"
            />
            <img
              className="iconeTaupe2 iconeMessenger sautDeLigne"
              src={Messenger}
              alt="MessengerLogo"
            />
          </div>
        </div>
        <div className="contenereTimerbar">
          <div onClick={handleClickCarousel}  id="LoadingButton1" className="loadingTimeBarre"></div>
          <div onClick={handleClickCarousel} className="loadingTimeBarre" id="LoadingButton2"></div>
          <div onClick={handleClickCarousel} className="loadingTimeBarre" id="LoadingButton3"></div>
          <div onClick={handleClickCarousel} className="loadingTimeBarre" id="LoadingButton4"></div>
          <div onClick={handleClickCarousel} className="loadingTimeBarre" id="LoadingButton5"></div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
